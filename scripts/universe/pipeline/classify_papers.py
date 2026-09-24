#!/usr/bin/env python3
"""Classify the Europe PMC harvest into the radiopharmaceutical publication set.

Keeps a record only when it carries a real radiopharmaceutical signature: a radionuclide written the way
chemists write it (177Lu, [68Ga]Ga-, Lu-177, lutetium-177; element symbols matched case-sensitively so
"in 111 patients" never reads as indium-111), a named agent, or a class term (radioligand, radiotracer,
theranostic, PRRT, immuno-PET, radioembolisation...). Basic-science assays whose only radioactivity is
3H/14C/35S are dropped. Every kept record is tagged with isotopes, targets, diseases, role, paper type and
the labelled agents it names, and every unmet-need / limitation sentence is extracted with its citation.

Output: papers/<year>.json (compact rows) and gaps_raw.jsonl (sentence, paper id, tags).
"""
import ast, glob, html, json, os, re, sys
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "lib"))
from rpvocab import ISO, TARGET_RE, DISEASE_RE

BASE = os.environ.get("UNIVERSE_WORK") or os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(BASE, "papers"); os.makedirs(OUT, exist_ok=True)

# ---- strict isotope matching for free text -------------------------------------------------------
NAMES = {"Lu": "lutetium", "Ac": "actinium", "Pb": "lead", "Th": "thorium", "At": "astatine", "Bi": "bismuth", "Ra": "radium",
         "Tb": "terbium", "Cu": "copper", "Y": "yttrium", "I": "iodine", "Ga": "gallium", "F": "fluorine", "Zr": "zirconium",
         "Tc": "technetium", "In": "indium", "Tl": "thallium", "Rb": "rubidium", "N": "nitrogen", "O": "oxygen", "C": "carbon",
         "Sc": "scandium", "Ho": "holmium", "Re": "rhenium", "Sm": "samarium", "Sr": "strontium", "P": "phosphorus", "Xe": "xenon",
         "Kr": "krypton", "Er": "erbium", "Sn": "tin", "Cr": "chromium"}
PRINCIPAL = {"lutetium": "Lu-177", "actinium": "Ac-225", "yttrium": "Y-90", "technetium": "Tc-99m", "indium": "In-111", "thallium": "Tl-201",
             "rubidium": "Rb-82", "samarium": "Sm-153", "astatine": "At-211", "thorium": "Th-227", "krypton": "Kr-81m"}
CS_PARTS, CI_PARTS, GROUP = [], [], {}
for i, (key, (disp, role, rx)) in enumerate(ISO.items()):
    sym, mass = key.split("-")
    name = NAMES[sym]
    g = f"g{i}"; GROUP[g] = key
    parts = [rf"(?<![\w.]){mass}{sym}(?![a-z])", rf"\[{mass}{sym}\]", rf"\b{sym}-{mass}(?!\d)", rf"\^{mass}{sym}\b"]
    if sym not in ("In", "I", "C", "N", "O", "P", "Y", "At", "Re", "Er", "Sn", "Th"):
        parts.append(rf"\b{sym} {mass}\b")
    if sym not in ("I", "C", "N", "O", "P", "Y"):
        parts.append(rf"\b{sym}{mass}(?![\d])")            # F18-MK6240, Ga68-PSMA, Lu177
    if len(sym) == 2:
        parts.append(rf"(?<![\w.]){mass}{sym.upper()}\b")   # (64CU) CHLORIDE, 68GA
    CS_PARTS.append(f"(?P<{g}>" + "|".join(parts) + ")")
    ci = [rf"\b{name}[- ]?{mass}\b"]
    for alt in rx.split("|"):
        a = alt.strip()
        if re.search(r"\d", a) or len(re.sub(r"\\[bs]|[\\?*()\[\]:-]", "", a)) < 4: continue
        if a.lower().startswith(("(?:", "\\b" + sym.lower() + "\\s")): continue
        if a in NAMES.values(): continue
        if re.search(r"(?:\s|\\s\*?)[a-z]$", a): continue   # "sodium iodide i" style fragments over-match
        ci.append(a)
    if PRINCIPAL.get(name) == key:
        ci.append(rf"\b{name}\b(?![- ]?(?:yttrium|oxyortho|based scintillat|oxide|tin|doped|aluminium|aluminum|garnet|:yag))")
    CI_PARTS.append(f"(?P<c{i}>" + "|".join(ci) + ")"); GROUP[f"c{i}"] = key
def _literals(pattern):
    if "(?<" in pattern or "(?!" in pattern or "(?=" in pattern: return None  # lookarounds: do not gate
    """Required literal substrings per top-level alternative; None if some alternative has no literal >= 3 chars."""
    alts, depth, cur = [], 0, ""
    for ch in pattern:
        if ch == "(": depth += 1
        elif ch == ")": depth -= 1
        if ch == "|" and depth == 0: alts.append(cur); cur = ""
        else: cur += ch
    alts.append(cur)
    lits = []
    for a in alts:
        if "|" in a: return None  # nested alternation: do not gate
        runs, run, i = [], "", 0
        while i < len(a):
            c = a[i]
            if c == "\\":
                nxt = a[i + 1] if i + 1 < len(a) else ""
                if nxt in "bBsSdDwW": runs.append(run); run = ""; i += 2; continue
                c = nxt; i += 1
            elif c in "()[]{}^$.?*+":
                if c == "[":
                    j = a.find("]", i); i = j if j > 0 else i
                runs.append(run); run = ""; i += 1; continue
            q = a[i + 1] if i + 1 < len(a) else ""
            if q in "?*{": runs.append(run); run = ""; i += 2 if q != "{" else 1; continue
            run += c.lower(); i += 1
            if q == "+": runs.append(run); run = ""
        runs.append(run)
        best = max(runs, key=len) if runs else ""
        if len(best) < 3: return None
        lits.append(best)
    return lits

class Gated:
    def __init__(self, key, pattern):
        self.key, self.rx, self.lits = key, re.compile(pattern), _literals(pattern)
    def hit(self, low):
        if self.lits is not None and not any(l in low for l in self.lits): return False
        return self.rx.search(low) is not None

CS_LIST = [(GROUP[f"g{i}"], re.compile(p)) for i, p in enumerate(CS_PARTS)]
CI_LIST = [Gated(GROUP[f"c{i}"], p[p.index(">") + 1:-1].lower()) for i, p in enumerate(CI_PARTS)]
TG_LIST = [Gated(k, TARGET_RE[k].pattern.lower()) for k in TARGET_RE]
DS_LIST = [Gated(k, DISEASE_RE[k].pattern.lower()) for k in DISEASE_RE]
HAS_ISO_HINT = re.compile(r"\d{1,3}m?[A-Z]|[A-Z][a-z]?-\d")

def isotopes(text):
    low = text.lower()
    out = {g.key for g in CI_LIST if g.hit(low)}
    if HAS_ISO_HINT.search(text):
        out |= {k for k, rx in CS_LIST if k not in out and rx.search(text)}
    return sorted(out)

def targets(text):
    low = text.lower()
    return sorted(g.key for g in TG_LIST if g.hit(low))

NET_ORGANS = {"gastric-oesophageal-cancer", "colorectal-cancer", "lung-cancer", "liver-cancer", "pancreatic-cancer"}
def paper_diseases(title, kw, mesh):
    """Disease tags for a paper from title + keywords + MeSH. MeSH files gastro-entero-pancreatic NET papers under
    'Stomach Neoplasms' / 'Intestinal Neoplasms'; on a NET paper keep an organ-cancer tag only when the title names it."""
    ds = diseases(f"{title} {' '.join(kw)} {' '.join(mesh)}")
    if "neuroendocrine-tumours" in ds:
        t = set(diseases(title)); ds = [d for d in ds if d not in NET_ORGANS or d in t]
    # MeSH files a bladder paraganglioma / phaeochromocytoma under 'Urinary Bladder Neoplasms'; it is not urothelial cancer
    if "urothelial-cancer" in ds and re.search(r"(?i)paragangli|ph?aeochromo|pheochromo", title) and not re.search(r"(?i)urothelial|carcinoma", title):
        ds = [d for d in ds if d != "urothelial-cancer"]
    return ds

def diseases(text):
    low = text.lower()
    out = sorted(g.key for g in DS_LIST if g.hit(low))
    if len(out) > 1 and "solid-tumours-general" in out: out.remove("solid-tumours-general")
    return out

CLASS = re.compile(r"radiopharmaceutical|radioligand|radiotracer|theranostic|radionuclide (?:therapy|imaging|treatment)|\bprrt\b|targeted alpha|alpha[- ]emitter|"
                   r"radioimmunotherap|radioimmunoconjugate|radioconjugate|radioembolizat|radioembolisat|\bsirt\b|selective internal radiation|immuno-?pet\b|"
                   r"pet tracer|spect tracer|pet imaging agent|pet probe|spect probe|radiolabel+ed (?:antibod|peptide|ligand|nanobod|probe|tracer|compound|analog)|"
                   r"scintigraph|psma pet|psma-pet|fapi|somatostatin receptor imaging|molecular imaging probe|radiosynovectomy|radioiodine|radioactive iodine|"
                   r"myocardial perfusion imaging|bone scan|dopamine transporter imaging|amyloid pet|tau pet|fdg[- ]pet|pet/ct|pet-ct|pet/mri?\b|\bspect/ct", re.I)
ASSAY_ONLY = re.compile(r"\[3h\]|\b3h-|tritiat|\[14c\]|\b14c-|\[35s\]|\b35s-|\[32p\]|\[125i\]-?(?:labeled|labelled)? ?(?:binding|assay)", re.I)
PLASTIC = re.compile(r"polyethylene terephthalate|microplastic|plastic bottle", re.I)

# ---- labelled agents named in the text (normalised as 177Lu-PSMA-617) ------------------------------
SYMS = "|".join(sorted({k.split("-")[0] for k in ISO}, key=len, reverse=True))
AG1 = re.compile(rf"\[(\d{{1,3}}m?)({SYMS})\]\s?(?:(?:{SYMS})-)?([A-Za-z][A-Za-z0-9\-]{{1,28}}[A-Za-z0-9])")
AG2 = re.compile(rf"(?<![\w\]\[.])(\d{{1,3}}m?)({SYMS})-([A-Za-z][A-Za-z0-9\-]{{1,28}}[A-Za-z0-9])")
JUNK = re.compile(r"^(?:labell?ed|based|radiolabell?ed|pet|spect|ct|mri?|pet-ct|pet-mri?|imaging|therapy|uptake|positive|negative|avid|scan|scans|"
                  r"scintigraphy|and|or|the|in|of|to|with|for|treatment|treated|conjugat\w*|compound\w*|tracer\w*|probe\w*|ligand\w*|"
                  r"radioligand\w*|radiotracer\w*|dose\w*|patients?|study|studies|chloride|citrate|labeling|labelling|ions?|complex\w*)$", re.I)
def agents(text):
    out = set()
    for m in list(AG1.finditer(text)) + list(AG2.finditer(text)):
        mass, sym, lig = m.group(1), m.group(2), m.group(3).strip("-")
        if f"{sym}-{mass.rstrip('m')}" not in ISO and f"{sym}-{mass}" not in ISO: continue
        if JUNK.match(lig) or len(lig) < 2: continue
        lig = re.sub(r"-(?:PET|SPECT|CT|MRI?|PET-CT|imaging|therapy|RLT|based|labell?ed)$", "", lig, flags=re.I)
        if not lig or JUNK.match(lig): continue
        out.add(f"{mass}{sym}-{lig.upper()}")
    return sorted(out)

# ---- paper type -------------------------------------------------------------------------------------
FIH = re.compile(r"first[- ]in[- ](?:human|man|humans|patient)|first human (?:use|study|experience|application|dosimetry)|first clinical (?:use|experience|application|evaluation|study|translation)", re.I)
ANIMAL = re.compile(r"\bmice\b|\bmouse\b|murine|xenograft|\brats?\b|in vitro|in vivo|preclinical|pre-clinical|non-human primate|rabbit|\bpigs?\b|cell lines?|biodistribution", re.I)
HUMAN = re.compile(r"\bpatients?\b|\bparticipants\b|\bsubjects\b|\bvolunteers\b|\bcohort\b|retrospective|prospective", re.I)
PHASE = re.compile(r"phase\s*(?:i{1,3}|[123])(?:/(?:i{1,3}|[123]))?[ab]?\b[^.]{0,40}(?:trial|study)|randomi[sz]ed (?:controlled )?trial", re.I)
NOVEL = re.compile(r"\b(?:novel|new|first)\b[^.]{0,60}\b(?:radiotracer|tracer|radioligand|radiopharmaceutical|probe|radioconjugate|agent)s?\b", re.I)
def paper_type(title, abstract, pts, source):
    t = title.lower(); p = " ".join(pts).lower()
    if source == "PPR" or "preprint" in p: base = "preprint"
    else: base = None
    if "meta-analysis" in p or re.search(r"meta-?analys", t): return "meta-analysis"
    if "systematic review" in p or "systematic review" in t: return "systematic review"
    if re.search(r"guideline|consensus|procedure standard|appropriate use|recommendation", t) or "guideline" in p: return "guideline / consensus"
    if "case report" in p or "case-report" in p or re.search(r"case report|a case of", t): return "case report"
    if "review" in p or re.search(r"\breview\b|state of the art|current status|perspective", t): return "review"
    if re.search(r"editorial|letter|comment", p) and not abstract: return "commentary"
    if FIH.search(title + " " + abstract): return "first-in-human"
    if "clinical trial" in p or "randomized controlled trial" in p or PHASE.search(title + " " + abstract): return "clinical trial"
    a = ANIMAL.search(title + " " + abstract); h = HUMAN.search(title + " " + abstract)
    if a and not h: return "preclinical"
    if h: return base or "clinical study"
    return base or "other"

# ---- unmet-need / limitation sentences --------------------------------------------------------------
GAP = [
 ("unmet need", re.compile(r"unmet (?:clinical |medical |diagnostic |therapeutic )?needs?|high unmet", re.I)),
 ("need", re.compile(r"there (?:is|remains|exists) (?:still )?(?:an? )?(?:urgent |unmet |clear |critical |great |growing |pressing |strong |significant |important )?need|(?:urgently|still|clearly) needed|need for (?:new|novel|better|improved|more|alternative|effective|specific|reliable|non-?invasive|accurate|sensitive)", re.I)),
 ("no option", re.compile(r"\bno (?:approved|effective|standard|established|reliable|specific|curative|validated|satisfactory|good|accurate|consensus|proven|targeted|imaging) (?:treatment|therapy|therap|tracer|imaging|method|option|agent|biomarker|test|modality|drug|marker|diagnostic)|(?:few|limited|no) (?:effective |therapeutic |treatment )?options", re.I)),
 ("limitation", re.compile(r"(?:limited|low|poor|insufficient|suboptimal|inadequate) (?:sensitivity|specificity|accuracy|detection rate|diagnostic performance|availability|access|spatial resolution|efficacy|response|uptake|tumou?r uptake)|false[- ](?:positive|negative) (?:findings|results|rate|uptake)", re.I)),
 ("challenge", re.compile(r"remains? (?:a |an )?(?:major |significant |considerable |key |great |important |critical |substantial |ongoing |persistent |clinical |diagnostic |therapeutic )*(?:challenge|problem|dilemma|obstacle|hurdle|limitation|unclear|unknown|elusive|controversial|difficult|debated|poorly understood|to be (?:determined|established|elucidated))", re.I)),
 ("lacking", re.compile(r"(?:is|are|remains?) (?:still |currently )?lacking|lack of (?:a |an )?(?:specific|reliable|effective|approved|standardi[sz]ed|validated|non-?invasive|sensitive|accurate|suitable|robust|prospective|randomi[sz]ed|consensus|evidence|data|biomarkers?)|not (?:yet )?(?:been )?(?:well )?(?:established|validated|approved)", re.I)),
 ("cannot", re.compile(r"(?:cannot|can ?not|fails? to|unable to) (?:reliably |accurately |adequately )?(?:detect|distinguish|differentiate|discriminate|identify|visuali[sz]e|predict|localise|localize)", re.I)),
 ("poor outcome", re.compile(r"poor (?:prognosis|outcomes?|survival)|dismal (?:prognosis|outcome)|remain(?:s)? (?:incurable|fatal|lethal)|leading cause of (?:cancer )?death", re.I)),
 ("supply", re.compile(r"(?:limited|short|scarce|restricted) (?:supply|availability|production)|supply (?:chain|shortage|constraints?)|shortage of", re.I)),
]
SENT = re.compile(r"(?<=[.!?])\s+(?=[A-Z\[(0-9])")
def strip_html(s): return re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", " ", s or ""))).strip()
def lst(s):
    try: v = ast.literal_eval(s) if isinstance(s, str) else (s or [])
    except Exception: v = []
    return [str(x) for x in v if x] if isinstance(v, (list, tuple)) else []

# Core nuclear-medicine journals (Europe PMC journal titles, resolved 24 Sep 2026): every article they publish is kept,
# whether or not it names an isotope. Broader imaging journals stay behind the relevance filter.
NM_CORE_JOURNALS = ["american journal of nuclear medicine and molecular imaging", "annals of nuclear cardiology", "journal of nuclear medicine & radiation therapy", "annals of nuclear medicine","asia oceania journal of nuclear medicine & biology","cancer biotherapy & radiopharmaceuticals","clinical and translational imaging","clinical nuclear medicine","current radiopharmaceuticals","ejnmmi physics","ejnmmi radiopharmacy and chemistry","ejnmmi reports","ejnmmi research","european journal of nuclear medicine and molecular imaging","frontiers in nuclear medicine","hellenic journal of nuclear medicine","indian journal of nuclear medicine : ijnm : the official journal of the society of nuclear medicine, india","journal of labelled compounds & radiopharmaceuticals","journal of nuclear cardiology : official publication of the american society of nuclear cardiology","journal of nuclear medicine : official publication, society of nuclear medicine","journal of nuclear medicine technology","kaku igaku. the japanese journal of nuclear medicine","molecular imaging and radionuclide therapy","nuclear medicine and biology","nuclear medicine and molecular imaging","nuclear medicine communications","nuclear medicine review. central & eastern europe","nuklearmedizin. nuclear medicine","pet clinics","revista espanola de medicina nuclear e imagen molecular","seminars in nuclear medicine","the quarterly journal of nuclear medicine and molecular imaging : official publication of the italian association of nuclear medicine (aimn) [and] the international association of radiopharmacology (iar), [and] section of the society of...","world journal of nuclear medicine","european journal of hybrid imaging"]
NM_CORE_SET = set(NM_CORE_JOURNALS)

def main():
    years = sys.argv[1:] or [os.path.basename(p)[:4] for p in sorted(glob.glob(os.path.join(BASE, "raw/epmc/*.jsonl")))]
    gapf = open(os.path.join(BASE, f"gaps_raw_{'_'.join(years) if len(years) < 4 else 'all'}.jsonl"), "w")
    stats = {}
    for y in years:
        rows, seen, total = [], set(), 0
        _src = [os.path.join(BASE, f"raw/epmc/{y}.jsonl"), os.path.join(BASE, f"raw/epmc_journals/{y}.jsonl")]
        for line in (l for p in _src if os.path.exists(p) for l in open(p)):
            total += 1
            try: r = json.loads(line)
            except Exception: continue
            key = r.get("pmid") or r.get("doi") or r.get("id")
            if key in seen: continue
            seen.add(key)
            title = strip_html(r.get("title")); ab = strip_html(r.get("abstractText"))
            kw = lst(r.get("keywords")); mesh = lst(r.get("mesh"))
            text = f"{title} {ab} {' '.join(kw)}"
            if PLASTIC.search(text): continue
            isos = isotopes(text)
            cls = CLASS.search(text)
            nmj = bool(r.get("nmj")) or (r.get("journal") or "").lower() in NM_CORE_SET
            if not isos and not cls and not nmj: continue
            if not isos and not nmj and ASSAY_ONLY.search(text) and not re.search(r"imaging|\bpet\b|spect|scintigra|therap", text, re.I): continue
            core = bool(isotopes(title) or CLASS.search(title) or TARGET_RE["psma"].search(title))
            tg = targets(text)
            ds = paper_diseases(title, kw, mesh)
            roles = {ISO[i][1] for i in isos}
            role = "theranostic" if roles == {"therapy", "diagnostic"} or re.search(r"theranostic", text, re.I) else ("therapy" if roles == {"therapy"} else ("diagnostic" if roles == {"diagnostic"} else ("therapy" if re.search(r"therap|treatment", title, re.I) and cls else "diagnostic" if cls else "unknown")))
            pts = lst(r.get("pubTypes"))
            ptype = paper_type(title, ab, pts, r.get("source"))
            ag = agents(f"{title} {ab}")
            pmid, doi = r.get("pmid"), r.get("doi")
            url = f"https://europepmc.org/article/MED/{pmid}" if pmid else (f"https://doi.org/{doi}" if doi else f"https://europepmc.org/article/{r.get('source')}/{r.get('id')}")
            pid = f"pmid:{pmid}" if pmid else (f"doi:{doi}" if doi else f"{r.get('source')}:{r.get('id')}")
            row = {"id": pid, "t": title[:300], "y": int(y), "d": r.get("firstPublicationDate"), "j": (r.get("journal") or "")[:80],
                   "doi": doi, "pmid": pmid, "iso": isos, "tg": tg, "ds": ds, "role": role, "type": ptype, "ag": ag[:12],
                   "core": core, "novel": bool(NOVEL.search(f"{title} {ab}")), "oa": r.get("isOpenAccess") == "Y",
                   "cit": int(r.get("citedByCount") or 0), "aff": (r.get("affiliation") or "")[:160], "url": url}
            rows.append(row)
            # unmet-need sentences
            if ab:
                for s in SENT.split(ab):
                    if len(s) < 40 or len(s) > 420: continue
                    kinds = [k for k, rx in GAP if rx.search(s)]
                    if kinds == ["limitation"] and re.search(r"without (?:increasing|any)|fewer false|reduc\w* (?:the )?false|lower false|no false", s, re.I): continue
                    if not kinds: continue
                    gapf.write(json.dumps({"s": s, "kinds": kinds, "id": pid, "y": int(y), "t": title[:200], "url": url, "type": ptype,
                                           "iso": isotopes(s) or isos, "tg": targets(s) or tg,
                                           "ds": diseases(s) or ds, "core": core}, ensure_ascii=False) + "\n")
        json.dump(rows, open(os.path.join(OUT, f"{y}.json"), "w"), ensure_ascii=False, separators=(",", ":"))
        stats[y] = (total, len(rows), sum(1 for r in rows if r["core"]))
        print(y, "raw", total, "kept", len(rows), "core", stats[y][2], flush=True)
    print("DONE", stats, flush=True)

if __name__ == "__main__":
    main()
