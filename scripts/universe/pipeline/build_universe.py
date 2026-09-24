#!/usr/bin/env python3
"""Build the site datasets for Nuclide's radiopharmaceutical universe.

Reads the harvested + classified sets in this folder and writes compact JSON to <repo>/public/universe/ plus a small
stats file to <repo>/src/data/universe-stats.json. Every row keeps what is needed to link back to its source.

  trials.json      ClinicalTrials.gov + EU CTIS radiopharmaceutical trials
  products.json    every regulator registration found (28 countries/regions)   agents.json  the same rolled up by agent
  papers-<y>.json  Europe PMC radiopharmaceutical publications, one shard per year
  abstracts-<y>.json  SNMMI / EANM / ASNC / WMIC abstracts, one shard per meeting year (title, authors, code, tags, official link)
  patents-<y>.json worldwide patent publications in the radiopharmaceutical CPC classes (when harvested)
  gaps.json        unmet-need / limitation statements quoted from abstracts, each with its citation
  ideas.json       candidate openings computed from the cross-links (every number traceable to the rows above)
  labels.json      display names for target / disease / isotope keys
"""
import collections, glob, json, os, re, sys, datetime as dt
SCRIPTS = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, SCRIPTS)
BASE = os.environ.get("UNIVERSE_WORK") or SCRIPTS          # where the harvested, classified inputs live
import classify_papers as cp
REPO = os.environ.get("NUCLIDE_REPO") or "/home/user/nuclide"
# Incremental mode (the monthly refresh): any input not re-harvested this run is carried over from the
# files already published in public/universe/, so a refresh only has to fetch what moves.
INCREMENTAL = os.environ.get("UNIVERSE_INCREMENTAL") == "1"
def published(name, default=None):
    p = os.path.join(REPO, "public/universe", name)
    return json.load(open(p)) if os.path.exists(p) else default
OUT = os.path.join(REPO, "public/universe"); os.makedirs(OUT, exist_ok=True)
TODAY = dt.date.today().isoformat()

def dump(name, obj):
    p = os.path.join(OUT, name)
    json.dump(obj, open(p, "w"), ensure_ascii=False, separators=(",", ":"))
    return os.path.getsize(p)

def year_of(s):
    m = re.search(r"(19|20)\d\d", s or "")
    return int(m.group(0)) if m else None

# ------------------------------------------------------------------ trials
trials = []
_ctg = os.path.join(BASE, "trials_ctgov.json")
for t in (json.load(open(_ctg)) if os.path.exists(_ctg) else []):
    _ph = t.get("phase") or []
    if isinstance(_ph, str): _ph = re.split(r"[,|/ ]+", _ph)
    ph = "/".join(p.replace("EARLY_PHASE1", "0").replace("PHASE", "").replace("EARLY_1", "0") for p in _ph if p and p not in ("NA", "N/A")) or None
    trials.append({"id": t["id"], "r": "CTG", "t": (t.get("title") or "")[:220], "ac": t.get("acronym") or None, "ph": ph, "st": t.get("status"),
                   "y": year_of(t.get("start")), "sp": (t.get("sponsor") or "")[:70], "sc": t.get("sponsorClass"),
                   "cc": (t.get("countries") or [])[:8], "iso": t.get("isotopes") or [], "tg": t.get("targets") or [], "ds": t.get("diseases") or [],
                   "role": t.get("role"), "s": bool(t.get("studied")), "ag": [a.get("name", "")[:60] for a in (t.get("agents") or []) if a.get("isotopes") or re.search(r"(?i)radio|pet|spect|tracer|lu|ga|tc|psma|fapi", a.get("name", ""))][:4],
                   "n": t.get("enrolment"), "res": bool(t.get("hasResults")), "why": (t.get("whyStopped") or "")[:140] or None,
                   "pur": t.get("purpose")})
_cti = os.path.join(BASE, "trials_ctis.json")
for t in (json.load(open(_cti)) if os.path.exists(_cti) else []):
    ph = "/".join(re.findall(r"Phase (I{1,3}V?|IV)", t.get("phaseText") or "")) or None
    if ph: ph = ph.replace("IV", "4").replace("III", "3").replace("II", "2").replace("I", "1")
    trials.append({"id": t["id"], "r": "CTIS", "t": (t.get("title") or "")[:220], "ac": t.get("acronym") or None, "ph": ph, "st": t.get("status"),
                   "y": year_of(t.get("decision")), "sp": (t.get("sponsor") or "")[:70], "sc": t.get("sponsorClass"), "cc": (t.get("countries") or [])[:8],
                   "iso": t.get("isotopes") or [], "tg": t.get("targets") or [], "ds": t.get("diseases") or [], "role": t.get("role"), "s": bool(t.get("studied")),
                   "ag": [p.strip()[:60] for p in re.split(r",\s*(?=[A-Z0-9\[(])", t.get("products") or "") if p.strip()][:4],
                   "n": int(t["enrolment"]) if str(t.get("enrolment") or "").isdigit() else None, "res": bool(t.get("hasResults")), "why": None, "pur": None,
                   "u": t.get("url")})

if INCREMENTAL:
    _old = published("trials.json", [])
    if not os.path.exists(_ctg): trials += [t for t in _old if t["r"] == "CTG"]
    if not os.path.exists(_cti): trials += [t for t in _old if t["r"] == "CTIS"]

# ------------------------------------------------------------------ products
_pa = os.path.join(BASE, "products_all.json")
prods = json.load(open(_pa)) if os.path.exists(_pa) else []
products = []
for r in prods:
    txt = f"{r.get('ingredient') or ''} {r.get('brand') or ''} {r.get('indication') or ''}"
    products.append({"id": r["id"], "rg": r["region"], "reg": r.get("regulator"), "b": (r.get("brand") or "")[:90], "i": (r.get("ingredient") or "")[:120] or None,
                     "o": (r.get("original") or "")[:90] or None, "l": r.get("lang"), "h": (r.get("holder") or "")[:80] or None, "a": r.get("approved"),
                     "st": r.get("status"), "role": r.get("role"), "iso": r.get("isotopes") or [], "tg": cp.targets(txt), "ds": cp.diseases(r.get("indication") or ""),
                     "ag": r.get("agent"), "ind": (r.get("indication") or "")[:200] or None, "u": r.get("url")})
if not prods and INCREMENTAL: products = published("products.json", [])
_ag = os.path.join(BASE, "agents_all.json")
agents = json.load(open(_ag)) if os.path.exists(_ag) else (published("agents.json", []) if INCREMENTAL else [])
lig = lambda a: a["agent"].split(" ", 1)[1] if " " in a["agent"] else a["agent"]
# a ligand counts as available in the US only for the same use: Tc-99m HEDP (bone scan) does not make Re-188 HEDP (bone-pain therapy) a US product
treats = lambda a: (a.get("role") or "") in ("therapy", "theranostic")
us_ligs = {(lig(a), treats(a)) for a in agents if "US" in a["regions"]}
for a in agents:
    a["ligand"] = lig(a)
    a["notInUS"] = "US" not in a["regions"] and (a["ligand"], treats(a)) not in us_ligs and not a["agent"].startswith("kit/unspecified")
    rows = [p for p in products if p["ag"] == a["agent"]]
    a["tg"] = sorted({t for p in rows for t in p["tg"]})

# ------------------------------------------------------------------ papers
papers_by_year = {}
for f in sorted(glob.glob(os.path.join(BASE, "papers/*.json"))):
    y = int(os.path.basename(f)[:4])
    papers_by_year[y] = [{"id": p["id"], "t": p["t"][:260], "y": p["y"], "j": (p.get("j") or "")[:60], "iso": p["iso"], "tg": p["tg"], "ds": p["ds"],
                          "role": p["role"], "ty": p["type"], "ag": p.get("ag", [])[:6], "c": 1 if p.get("core") else 0, "nv": 1 if p.get("novel") else 0,
                          "oa": 1 if p.get("oa") else 0, "ci": p.get("cit", 0)} for p in json.load(open(f))]
refreshed_paper_years = set(papers_by_year)
if INCREMENTAL:
    for y in range(2015, dt.date.today().year + 1):
        if y not in papers_by_year:
            old = published(f"papers-{y}.json")
            if old is not None: papers_by_year[y] = old
papers = [p for ys in papers_by_year.values() for p in ys]

# ------------------------------------------------------------------ abstracts
_ab = os.path.join(BASE, "abstracts_all.json")
abstracts = [{"id": a["id"], "m": a["m"], "y": a["y"], "t": a["t"][:260], "au": (a.get("au") or "")[:110] or None, "code": a.get("code"),
              "iso": a["iso"], "tg": a["tg"], "ds": a["ds"], "role": a["role"], "ty": a["type"], "ag": a.get("ag", [])[:6], "nv": 1 if a.get("novel") else 0,
              "u": a.get("url")} for a in (json.load(open(_ab)) if os.path.exists(_ab) else [])]
if not abstracts and INCREMENTAL:   # carry the published shards over (legacy single file as a fallback)
    abstracts = [a for f in sorted(glob.glob(os.path.join(REPO, "public/universe/abstracts-*.json"))) for a in json.load(open(f))] or published("abstracts.json", [])
for a in abstracts:
    if isinstance(a.get("y"), str) and a["y"].isdigit(): a["y"] = int(a["y"])

# ------------------------------------------------------------------ patents
patents = []
RADIO = re.compile(r"radio|isotop|nuclide|\bpet\b|spect|scintigra|imaging agent|tracer|18f|\[18f\]|68ga|177lu|225ac|99m|technetium|lutetium|actinium|gallium|"
                   r"fluorine-18|iodine-1[23]\d|yttrium|zirconium-89|copper-6[47]|molybdenum|theranost|alpha[- ]emitt|brachytherap", re.I)
seenp = set()
for f in sorted(glob.glob(os.path.join(BASE, "patents/**/*.jsonl"), recursive=True)):
    for line in open(f):
        try: p = json.loads(line)
        except Exception: continue
        if p["publication"] in seenp: continue
        text = f"{p.get('title') or ''} {p.get('snippet') or ''}"
        cls = set(p.get("classes") or [])
        if "A61K51" not in cls and not RADIO.search(text): continue   # C07B59 = any isotope labelling (incl. deuterated drugs); G21G = any isotope production
        seenp.add(p["publication"])
        patents.append({"id": p["publication"], "t": (p.get("title") or "")[:220], "cc": p.get("country"), "y": year_of(p.get("published")),
                        "pr": p.get("priority"), "pub": p.get("published"), "as": (p.get("assignee") or "")[:80] or None, "cl": sorted(cls),
                        "iso": cp.isotopes(text), "tg": cp.targets(text), "ds": cp.diseases(text), "lang": p.get("language")})

if INCREMENTAL:
    import glob as _g
    for f in sorted(_g.glob(os.path.join(REPO, "public/universe/patents-*.json"))):
        for p in json.load(open(f)):
            if p["id"] not in seenp: seenp.add(p["id"]); patents.append(p)

# ------------------------------------------------------------------ gaps
THEMES = [("detection & staging", r"detect|staging|stage|locali[sz]|occult|metasta|recurren|sensitiv|visuali[sz]"),
          ("differential diagnosis", r"distinguish|differentiat|discriminat|indeterminate|benign|false[- ]positive|specificity|characteri[sz]"),
          ("patient selection", r"patient selection|select(?:ing)? patients|eligib|stratif|predict(?:ive|ion) of response|companion|biomarker"),
          ("response assessment", r"response assessment|monitor|early response|treatment response|pseudoprogress|follow-up"),
          ("resistance & poor outcome", r"resistan|refractory|relapse|progress(?:ion|ed)|no (?:effective |approved )?(?:treatment|therap)|limited (?:treatment |therapeutic )?options|poor (?:prognosis|outcome|survival)|incurable|fatal"),
          ("toxicity & dosimetry", r"toxicit|dosimetr|xerostomia|nephrotox|marrow|adverse|safety|radiation dose|exposure"),
          ("access, supply & cost", r"supply|availab|access|cost|reimburs|infrastructure|cyclotron|shortage|logistic|production"),
          ("evidence & standardisation", r"lack of (?:prospective|randomi|evidence|data|consensus)|not (?:yet )?(?:been )?(?:well )?established|standardi[sz]|guideline|consensus|validated|harmoni[sz]")]
THEMES = [(n, re.compile(r, re.I)) for n, r in THEMES]
gaps = []
gseen = set()
if INCREMENTAL:
    _congress_new = os.path.exists(os.path.join(BASE, "gaps_raw_abstracts.jsonl"))
    for g in published("gaps.json", []):
        if g["src"] == "paper" and g.get("y") in refreshed_paper_years: continue
        if g["src"] != "paper" and _congress_new: continue
        gseen.add(g["s"][:160].lower()); gaps.append(g)
for f, src_default in [("gaps_raw_all.jsonl", "paper"), ("gaps_raw_abstracts.jsonl", "congress")]:
    p = os.path.join(BASE, f)
    if not os.path.exists(p): continue
    for line in open(p):
        g = json.loads(line)
        k = g["s"][:160].lower()
        if k in gseen: continue
        gseen.add(k)
        th = [n for n, rx in THEMES if rx.search(g["s"])]
        src = src_default
        gaps.append({"s": g["s"][:320], "k": g["kinds"], "th": th, "id": g["id"], "src": src, "y": g.get("y"), "t": (g.get("t") or "")[:120],
                     "u": g.get("url") if src != "paper" else None, "iso": g.get("iso") or [], "tg": g.get("tg") or [], "ds": g.get("ds") or [],
                     "ty": g.get("type")})

# ------------------------------------------------------------------ labels
LBL_T = {"psma": "PSMA", "sstr": "Somatostatin receptor (SSTR)", "fap": "FAP", "grpr": "GRPR (bombesin)", "cxcr4": "CXCR4", "her2": "HER2", "her3": "HER3",
         "caix": "CAIX", "cd20": "CD20", "cd45": "CD45", "cd37": "CD37", "cd38": "CD38", "gd2": "GD2", "b7-h3": "B7-H3", "ceacam5": "CEACAM5", "cck2r": "CCK2R",
         "pd-l1": "PD-L1", "pd-1": "PD-1", "trop2": "TROP2", "nectin-4": "Nectin-4", "dll3": "DLL3", "cldn18-2": "Claudin 18.2", "gpc3": "Glypican-3",
         "5t4": "5T4 (TPBG)", "sortilin": "Sortilin (SORT1)", "b1r": "Bradykinin B1 receptor", "dlg4": "DLG4 (PSD-95)", "c-met": "c-MET", "egfr": "EGFR",
         "cd70": "CD70", "mesothelin": "Mesothelin", "steap1": "STEAP1", "klk2": "hK2 (KLK2)", "psca": "PSCA", "ntsr1": "Neurotensin receptor 1",
         "mc1r": "MC1R", "glp1r": "GLP-1 receptor (exendin)", "integrin": "Integrins (αvβ3, αvβ6)", "vegf": "VEGF", "parp": "PARP", "amyloid": "Amyloid-β",
         "tau": "Tau", "alpha-synuclein": "α-synuclein", "dat": "Dopamine transporter", "vmat2": "VMAT2", "tspo": "TSPO (neuroinflammation)", "sv2a": "SV2A (synaptic density)",
         "mglur5": "mGluR5", "glucose-metabolism": "Glucose metabolism (FDG)", "bone-mineral": "Bone mineral", "myocardial-perfusion": "Myocardial perfusion",
         "cardiac-amyloid": "Cardiac amyloid", "thyroid": "Thyroid (iodine uptake)", "parathyroid": "Parathyroid", "amino-acid-transport": "Amino-acid transport",
         "choline-metabolism": "Choline metabolism", "proliferation": "Proliferation (FLT)", "hypoxia": "Hypoxia", "net-transporter": "Noradrenaline transporter (MIBG)",
         "estrogen-receptor": "Oestrogen receptor", "progesterone-receptor": "Progesterone receptor", "androgen-receptor": "Androgen receptor",
         "folate-receptor": "Folate receptor α", "cd46": "CD46", "upar": "uPAR", "epha2": "EphA2", "tissue-factor": "Tissue factor", "l1cam": "L1CAM", "gpa33": "GPA33",
         "cdh6": "CDH6", "bcma": "BCMA", "p2x7": "P2X7", "csf1r": "CSF1R", "sigma-receptor": "Sigma receptors", "cb2": "Cannabinoid CB2", "adenosine-a2a": "Adenosine A2A",
         "dopamine-d2d3": "Dopamine D2/D3", "serotonin": "Serotonin receptors/transporter", "mao-b": "MAO-B", "pde10a": "PDE10A", "nachr": "Nicotinic ACh receptors",
         "gaba-a": "GABA-A / benzodiazepine", "opioid": "Opioid receptors", "hdac": "HDAC", "trem2": "TREM2", "cd47": "CD47", "lag3": "LAG-3", "tigit": "TIGIT", "ox40": "OX40",
         "cd3-cd4-tcell": "T cells (CD3/CD4)", "il2": "IL-2", "vap1-siglec9": "VAP-1 (Siglec-9)", "mmp": "Matrix metalloproteinases", "npy-y1": "NPY Y1 receptor",
         "vpac": "VPAC", "neurokinin-1": "Neurokinin-1", "apoptosis": "Apoptosis", "cyp11b": "Aldosterone synthase (CYP11B)", "cd8": "CD8 T cells", "granzyme-b": "Granzyme B",
         "cd33": "CD33", "cd123": "CD123", "ccr2": "CCR2", "cxcr2": "CXCR2", "collagen": "Collagen / fibrosis", "fibrin": "Fibrin", "mucin": "Mucins (MUC1/MUC16)",
         "insulin-like": "IGF-1R", "pars": "PARs", "infection-inflammation": "Infection & inflammation", "lymphatic-mapping": "Lymphatic mapping", "red-cell": "Red blood cells",
         "renal-function": "Renal function", "hepatobiliary": "Hepatobiliary", "cerebral-perfusion": "Cerebral perfusion", "perfusion-ventilation": "Lung perfusion/ventilation",
         "psma-negative-lipid": "Lipid metabolism"}
def nice(k): return k.replace("-", " ").capitalize()
_DFIX = {"alzheimers-dementia": "Alzheimer's disease & dementia", "parkinsons-movement": "Parkinson's & movement disorders", "leukaemia-myeloma": "Leukaemia & myeloma",
         "gastric-oesophageal-cancer": "Gastric & oesophageal cancer", "ovarian-gynae-cancer": "Ovarian & gynaecological cancer", "head-neck-cancer": "Head & neck cancer",
         "melanoma-skin": "Melanoma & skin cancer", "sarcoma-bone-tumours": "Sarcoma & bone tumours", "psychiatry-neuro-other": "Other neurology & psychiatry",
         "heart-failure-cardiomyopathy": "Heart failure & cardiomyopathy", "vascular-thrombosis": "Vascular disease & thrombosis", "inflammation-autoimmune": "Inflammation & autoimmune disease",
         "endocrine-metabolic": "Endocrine & metabolic", "renal-urological": "Renal & urological (non-cancer)", "solid-tumours-general": "Solid tumours (general)",
         "coronary-heart-disease": "Coronary heart disease", "brain-tumours": "Brain tumours", "neuroendocrine-tumours": "Neuroendocrine tumours", "paediatric-cancer": "Paediatric cancer",
         "renal-cell-carcinoma": "Renal cell carcinoma", "urothelial-cancer": "Bladder & urothelial cancer", "gastrointestinal": "Gastrointestinal (non-cancer)", "pulmonary": "Pulmonary (non-cancer)",
         "infection": "Infection", "epilepsy": "Epilepsy"}
LBL_D = {g.key: _DFIX.get(g.key, nice(g.key)) for g in cp.DS_LIST}
labels = {"targets": {k: LBL_T.get(k, nice(k)) for k in [g.key for g in cp.TG_LIST]}, "diseases": {g.key: LBL_D.get(g.key, nice(g.key)) for g in cp.DS_LIST},
          "isotopes": {k: v[0] for k, v in cp.ISO.items()}, "isotopeRole": {k: v[1] for k, v in cp.ISO.items()}}

exec(open(os.path.join(SCRIPTS, "build_ideas.py")).read())   # computes `ideas` from the sets above

sizes = {"trials.json": dump("trials.json", trials), "products.json": dump("products.json", products), "agents.json": dump("agents.json", agents),
         "gaps.json": dump("gaps.json", gaps), "ideas.json": dump("ideas.json", ideas),
         "labels.json": dump("labels.json", labels)}
for y, rows in papers_by_year.items(): sizes[f"papers-{y}.json"] = dump(f"papers-{y}.json", rows)
ab_years = collections.defaultdict(list)          # abstracts: one shard per meeting year, so no file nears the 10 MB limit
for a in abstracts: ab_years[a["y"] or 0].append(a)
for y, rows in ab_years.items(): sizes[f"abstracts-{y}.json"] = dump(f"abstracts-{y}.json", rows)
for f in glob.glob(os.path.join(OUT, "abstracts*.json")):   # drop the legacy single file and any shard for a year no longer present
    n = os.path.basename(f)
    if n not in sizes: os.remove(f)
pat_years = collections.defaultdict(list)
for p in patents: pat_years[p["y"] or 0].append(p)
for y, rows in pat_years.items(): sizes[f"patents-{y}.json"] = dump(f"patents-{y}.json", rows)
stats = {"generated": TODAY, "trials": len(trials), "trialsCTG": sum(t["r"] == "CTG" for t in trials), "trialsCTIS": sum(t["r"] == "CTIS" for t in trials),
         "products": len(products), "regions": len({p["rg"] for p in products}), "agents": len(agents), "agentsNotInUS": sum(1 for a in agents if a["notInUS"] and a["activeRegions"]),
         "papers": len(papers), "paperYears": sorted(papers_by_year), "papersCore": sum(p["c"] for p in papers),
         "abstracts": len(abstracts), "abstractYears": sorted(y for y in ab_years if y), "meetings": sorted({a["m"] for a in abstracts}), "patents": len(patents), "patentYears": sorted(y for y in pat_years if y),
         "gaps": len(gaps), "ideas": len(ideas["ideas"]), "ideaLenses": dict(collections.Counter(i["lens"] for i in ideas["ideas"])),
         "bytes": sum(sizes.values())}
json.dump(stats, open(os.path.join(REPO, "src/data/universe-stats.json"), "w"), indent=1)
print(json.dumps(stats, indent=1))
print("largest files", sorted(sizes.items(), key=lambda x: -x[1])[:6])
