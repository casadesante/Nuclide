#!/usr/bin/env python3
"""Merge every regulator's radiopharmaceutical registrations into one product list and an agent roll-up.

Inputs (all harvested this session, each row carries its source URL):
  raw/fda_drugsfda.json      openFDA drugsfda (CDER NDAs/ANDAs/BLAs)
  products_ema.json          EMA centrally authorised medicines report
  products_ca.json           Health Canada Drug Product Database extracts (marketed, approved, inactive, dormant)
  products_ch.json           Swissmedic authorised medicines list (category Radiopharmazeutika)
  approvals/*.json           researcher-compiled lists (Japan, China, Korea/Taiwan/India, ...) and national registries
                             harvested by harvest_eu_national.py (Spain CIMA, France BDPM, Netherlands CBG, Italy AIFA)
Outputs: products_all.json (one row per registration) and agents_all.json (one row per agent, regions rolled up).
"""
import glob, json, os, re, sys, collections
SCRIPTS = os.path.dirname(os.path.abspath(__file__))
BASE = os.environ.get("UNIVERSE_WORK") or SCRIPTS
sys.path.insert(0, SCRIPTS); sys.path.insert(0, os.path.join(SCRIPTS, "lib"))
import classify_papers as cp
from rpvocab import isotopes_in, ISO

def isos(text):
    """Strict chemist-style matching first; the looser vocabulary only when the strict pass finds nothing
    (the loose one reads 'sodium iodide I-123' as I-131 too, and 'indium DTPA' as Tc-99m)."""
    strict = cp.isotopes(text or "")
    if strict: return sorted(strict)
    loose = sorted(isotopes_in(text or ""))
    nums = set(re.findall(r"\d+m?", (text or "").lower()))
    withmass = [i for i in loose if i.split("-")[1].lower() in nums]
    return withmass or loose

KIT = re.compile(r"medron|macroaggregat|albumin aggregat|sestamibi|tetrofosmin|mertiatide|pentetate|succimer|exametazime|bicisate|mebrofenin|disofenin|"
                 r"lidofenin|oxidronate|pyrophosphate|sulfur colloid|sulphur colloid|tilmanocept|gluceptate|red blood cell|pentetreotide|edotreotide|"
                 r"gozetotide|dotatate|dotatoc|psma|tetraxetan|kit for", re.I)
NOT_RADIO = re.compile(r"gallium nitrate|ganite|cupric|chromic chloride|trace element|zinc|selenious|manganese|sodium iodide(?! i)|potassium iodide|"
                       r"choline (?:fenofibrate|magnesium|salicylate)|fluoride(?! f)", re.I)

SYN = [(r"82\s?sr\b|sr-?82|strontium \(82|cardiogen|ruby-?fill|rubidio", "rubidium chloride"),
       (r"pentavalent (?:dmsa|dimercapto)|dmsa\s*\(v\)", "pentavalent DMSA (V)"), (r"dimercaptosuccin", "succimer (DMSA)"),
       (r"methylene ?diphosphon|metilendifosfon|methylenediphosphon", "medronate (MDP)"),
       (r"diethylene ?triamine ?penta ?acet|dietilentriaminopentaac", "pentetate (DTPA)"),
       (r"ethylenediaminetetramethylene ?phosphon|ethylene ?diamine ?tetra ?methylene ?phosphon", "lexidronam (EDTMP)"),
       (r"deoxy-?2?-?.{0,8}fluoro-?d-?glucose|fluoro-?2-?deoxy-?d-?glucose", "fludeoxyglucose"),
       (r"\bhedp\b|etidron", "etidronate (HEDP)"), (r"ubiquicidin|\bubi\b", "ubiquicidin (UBI 29-41)"),
       (r"methylpentadecano|\bbmipp\b", "BMIPP (fatty acid analogue)"), (r"iodoamphetamin", "iofetamine (IMP)"), (r"indium.{0,14}chlorure", "chloride"),
       (r"rhenium colloid", "rhenium sulfide colloid"), (r"antimony (?:tri)?sul(?:ph|f)ide", "antimony trisulfide"),
       (r"pluvicto", "vipivotide tetraxetan (PSMA-617)"), (r"lutathera", "oxodotreotide (DOTATATE)"), (r"netspot", "oxodotreotide (DOTATATE)"),
       (r"locametz|illuccix|gozellix", "gozetotide (PSMA-11)"), (r"xofigo", "radium dichloride"), (r"pylarify", "piflufolastat (DCFPyL)"),
       (r"posluma", "flotufolastat (rhPSMA-7.3)"), (r"axumin", "fluciclovine"), (r"cerianna", "fluoroestradiol (FES)"), (r"neuraceq", "florbetaben"),
       (r"amyvid", "florbetapir"), (r"vizamyl", "flutemetamol"), (r"tauvid", "flortaucipir"), (r"azedra", "iobenguane (MIBG)"), (r"datscan", "ioflupane (FP-CIT)"),
       (r"somakit", "edotreotide (DOTATOC)"), (r"zevalin", "ibritumomab tiuxetan"), (r"quadramet", "lexidronam (EDTMP)"), (r"metastron", "strontium chloride"),
       (r"lymphoseek", "tilmanocept"), (r"cardiolite", "sestamibi"), (r"myoview", "tetrofosmin"), (r"ceretec", "exametazime (HMPAO)"), (r"neurolite", "bicisate (ECD)"),
       (r"octreoscan", "pentetreotide"), (r"flyrcado", "flurpiridaz"),
       (r"germanio|germanium|molybdat|molibdat|technelite|ultra-?technekow|drytec|elumatic|poltechnet", "generator"), (r"desossiglucos|deossiglucos", "fludeoxyglucose"), (r"gal+io.{0,12}citrat|citrat.{0,12}gal+io", "gallium citrate"),
       (r"macro-?ag+reg|aggregated albumin|albumin aggregat|macro aggregated|macrosalb|\\bmaa\\b", "macroaggregated albumin (MAA)"),
       (r"albumin colloid|nanocoll|nanocolloid|nanocoloid", "albumin nanocolloid"), (r"galactosyl|\\bgsa\\b", "galactosyl human serum albumin (GSA)"),
       (r"cloruro de indio|indio.{0,12}cloruro|indium.{0,12}chloride|chlorure d.indium", "chloride"),
       (r"norcolesterol|norcholesterol", "iodomethylnorcholesterol"), (r"oxin(?:ate?|e|ato)?\b|ossin|oxiquinol|oxyquinolin|hydroxyquinolin|ossichinolin|(?:indio|indium).{0,20}(?:cellule|celulas|cells)", "oxyquinoline (oxine, cell labelling)"), (r"pentetreotid", "pentetreotide"),
       (r"lute[zc]io.{0,12}cloruro|cloruro.{0,12}lute", "lutetium chloride (precursor)"), (r"it+rio.{0,12}cloruro|cloruro.{0,12}it+rio", "yttrium chloride (precursor)"),
       (r"estroncio|stronzio", "strontium chloride"), (r"renio.{0,12}sulfur|reniosulfur|rhenium.{0,14}sulfure|re-?186.{0,20}sulf", "rhenium sulfide colloid"),
       (r"(?:it+rio|yttrium).{0,12}citrat|citrat.{0,12}(?:it+rio|yttrium)|citrato coloidal|citrato colloide|citrate colloid", "citrate colloid"), (r"erbi(?:o|um)", "citrate colloid"),
       (r"tech?negas|graphite|grafite", "Technegas"), (r"betiatid", "mertiatide (MAG3)"), (r"butedron", "butedronate"), (r"oxidronic", "oxidronate (HDP)"),
       (r"macrosalb", "macroaggregated albumin (MAA)"), (r"hinio-?octreotid|hynic-?octreotid|hynic-?toc|tektrotyd", "HYNIC-TOC"),
       (r"antigranulocit|anti-?granulocyte", "anti-granulocyte antibody"), (r"tetrakis.{0,40}(?:cuivre|copper|cobre|rame)", "sestamibi"),
       (r"\bcromo\b|chromat", "sodium chromate (cell labelling)"), (r"stanneux|stannous fluoride", "stannous fluoride (tin colloid kit)"), (r"stannous agent|agente stannoso|cellule marcate|celulas marcadas|hematies marcados", "red blood cells"),
       (r"albumin|seroalbumin", "human serum albumin"),
       (r"fludeoxyglucose|fluorodeoxyglucose|fluoroglukose|fluorglukose|fludesoxyglucose|fluorodesoxyglucose|fludesoxiglucos|fluodesoxiglucos|fludeoxiglucos|"
        r"fludesossiglucos|fluorodesossiglucos|fluodeossiglucos|fludeoxyglucos|\bfdg\b", "fludeoxyglucose"),
       (r"mertiatid|mercaptoacetyltriglycin", "mertiatide (MAG3)"), (r"gozetotid", "gozetotide (PSMA-11)"), (r"oxodotreotid", "oxodotreotide (DOTATATE)"),
       (r"edotreotid", "edotreotide (DOTATOC)"), (r"pertecnetat|pertechnetaat", "pertechnetate"), (r"pentetat|acide pentetique|acido pentetico|pentetic acid|pentetinezuur", "pentetate (DTPA)"),
       (r"medronat|acide medronique|acido medronico", "medronate (MDP)"), (r"macro-?ag+reg", "macroaggregated albumin (MAA)"), (r"succim", "succimer (DMSA)"),
       (r"exametazim", "exametazime (HMPAO)"), (r"bicisat", "bicisate (ECD)"), (r"iobengu|meta-?iodobenzylguanidin|metaiodobencilguanidin", "iobenguane (MIBG)"),
       (r"ioflupan|joflupaan", "ioflupane (FP-CIT)"), (r"fluciclovin", "fluciclovine"), (r"\bcolina|fluorocolina|fluorometilcolina", "choline"),
       (r"fluorure de sodium|fluoruro de sodio|sodio fluoruro|natriumfluoride|\bfluorure\b", "sodium fluoride"), (r"iodure|yoduro|ioduro|jodide", "sodium iodide"),
       (r"tallio|talio|thallium", "thallous chloride"), (r"citrate de gallium|citrato de galio|gallio citrato|galliumcitraat", "gallium citrate"),
       (r"pirofosfat|pyrofosfaat", "pyrophosphate"), (r"oxidronat|oxidronico", "oxidronate (HDP)"), (r"hematies|globuli rossi|eritrocit", "red blood cells"),
       (r"dicloruro de radio|radio \(223|radio-?223|223\s?ra\b|radium", "radium dichloride"), (r"nanocoll|nanocolloid|nanocoloid", "albumin nanocolloid"),
       (r"sulfure de rhenium|heptasulfure|rhenium sulf", "rhenium sulfide colloid"), (r"\bfitato", "phytate"), (r"tauroselc", "tauroselcholic acid"),
       (r"dihydroxyphe?nylalanin", "fluorodopa"), (r"generador|generatore|generateur|radionuclidegenerator", "generator"), (r"sestamibi|\bmibi\b|methoxy-?isobutyl", "sestamibi"),
       (r"oxodotreotide|dotatate|dota-tate", "oxodotreotide (DOTATATE)"), (r"edotreotide|dotatoc|dota-toc", "edotreotide (DOTATOC)"),
       (r"gozetotide|psma-?11\b", "gozetotide (PSMA-11)"), (r"psma-?1007", "PSMA-1007"), (r"pertechnetat", "pertechnetate"), (r"vipivotide|psma-?617", "vipivotide tetraxetan (PSMA-617)"),
       (r"pentetate|\bdtpa\b", "pentetate (DTPA)"), (r"medronate|medronic|\bmdp\b", "medronate (MDP)"),
       (r"macroaggregat|albumin aggregat|\bmaa\b", "macroaggregated albumin (MAA)"), (r"mertiatide|mag-?3", "mertiatide (MAG3)"),
       (r"succimer|dmsa", "succimer (DMSA)"), (r"exametazime|hmpao", "exametazime (HMPAO)"), (r"bicisate|\becd\b", "bicisate (ECD)"),
       (r"tetrofosmin", "tetrofosmin"), (r"iobenguane|mibg", "iobenguane (MIBG)"), (r"ioflupane|fp-?cit", "ioflupane (FP-CIT)"),
       (r"piflufolastat|dcfpyl", "piflufolastat (DCFPyL)"), (r"flotufolastat|rhpsma", "flotufolastat (rhPSMA-7.3)"),
       (r"fluciclovine|facbc", "fluciclovine"), (r"florbetapir", "florbetapir"), (r"florbetaben", "florbetaben"), (r"flutemetamol", "flutemetamol"),
       (r"flortaucipir", "flortaucipir"), (r"fluoroestradiol|\bfes\b", "fluoroestradiol (FES)"), (r"fluorodopa|f-?dopa|\bdopa\b", "fluorodopa"),
       (r"cholin", "choline"), (r"sodium fluoride|natriumfluorid|\bfluoride\b|\bnaf\b", "sodium fluoride"), (r"ammonia", "ammonia"), (r"rubidium", "rubidium chloride"),
       (r"thallous|thallium", "thallous chloride"), (r"gallium citrate|gallium \(67|ga-?67 citrate", "gallium citrate"), (r"pertechnetate", "pertechnetate"),
       (r"pyrophosphate", "pyrophosphate"), (r"sulfur colloid|sulphur colloid", "sulfur colloid"), (r"tilmanocept", "tilmanocept"),
       (r"oxidronate|\bhdp\b|hmdp", "oxidronate (HDP)"), (r"mebrofenin", "mebrofenin"), (r"disofenin", "disofenin"), (r"red blood cell|erythrocyte", "red blood cells"),
       (r"pentetreotide", "pentetreotide"), (r"chromic phosphate", "chromic phosphate"), (r"strontium", "strontium chloride"),
       (r"lexidronam|edtmp", "lexidronam (EDTMP)"), (r"radium", "radium dichloride"), (r"ibritumomab", "ibritumomab tiuxetan"), (r"tositumomab", "tositumomab"),
       (r"capromab", "capromab pendetide"), (r"satumomab", "satumomab pendetide"), (r"arcitumomab", "arcitumomab"), (r"nofetumomab", "nofetumomab"),
       (r"xenon", "xenon gas"), (r"krypton", "krypton gas"), (r"piflufolastat", "piflufolastat"), (r"flurpiridaz", "flurpiridaz"), (r"iodide|iodid\b|natriumiodid|iodine \(131|sodium iodide", "sodium iodide"),
       (r"iothalamate", "iothalamate"), (r"cyanocobalamin", "cyanocobalamin"), (r"copper cu 64 dotatate|detectnet", "oxodotreotide (DOTATATE)"),
       (r"florastamin|fc303", "florastamin"), (r"pexiretide|3prgd2", "pexiretide (3PRGD2)"), (r"lutetium.*chloride|chloride.*lutetium", "lutetium chloride (precursor)"),
       (r"yttrium.*chloride|chloride.*yttrium", "yttrium chloride (precursor)"), (r"microsphere|sir-?spheres|therasphere|glass|resin", "microspheres"),
       (r"germanium|generator", "generator"), (r"fluoro?ethyl[- ]?l?[- ]?tyrosin|\bfet\b|floretyrosine", "fluoroethyl-L-tyrosine (FET)"),
       (r"florquinitau|pi-?2620", "florquinitau"), (r"piflufolastat", "piflufolastat"), (r"fluorocholine|fluoromethylcholine", "choline"),
       (r"methionine", "methionine"), (r"pittsburgh|\bpib\b", "Pittsburgh compound B"), (r"tauroselcholic|sehcat", "tauroselcholic acid"),
       (r"sulesomab", "sulesomab"), (r"besilesomab", "besilesomab"), (r"urea", "urea"), (r"octreotide", "octreotide"), (r"exendin", "exendin"),
       (r"pentixafor", "pentixafor"), (r"fapi", "FAPI"), (r"hynic", "HYNIC"), (r"gluceptate|glucoheptonate", "gluceptate"), (r"phytate|phytic", "phytate"),
       (r"tin colloid|stannous colloid", "tin colloid"), (r"sodium phosphate|phosphate p|phosphorus", "sodium phosphate"), (r"iofetamine|imp\b", "iofetamine (IMP)"),
       (r"iomazenil", "iomazenil"), (r"betiatide", "betiatide"), (r"galactosyl|gsa\b", "galactosyl human serum albumin (GSA)"), (r"tetraxetan", "tetraxetan"),
       (r"trastuzumab", "trastuzumab"), (r"girentuximab", "girentuximab")]
SYN = [(re.compile(a, re.I), b) for a, b in SYN]

import unicodedata
def ligand(text):
    text = unicodedata.normalize("NFKD", text or "").encode("ascii", "ignore").decode()   # "fludésoxyglucose" -> "fludesoxyglucose"
    for rx, name in SYN:
        if rx.search(text or ""): return name
    t = re.sub(r"\(.*?\)|\[.*?\]|\d+m?\s*[a-z]{1,2}\b|\b[a-z]{1,2}[- ]?\d+m?\b", " ", (text or "").lower())
    t = re.sub(r"\b(?:injection|kit|for|the|preparation|of|sodium|disodium|solution|and|radiopharmaceutical|labell?ed|usp|hydrochloride|"
               r"lutetium|actinium|technetium|gallium|fluorine|iodine|indium|yttrium|copper|zirconium|thallium|radium|samarium|strontium|"
               r"rubidium|carbon|nitrogen|oxygen|lead|terbium|mbq|gbq|ml|mg|vial|single|dose|multi|multidose|intravenous|oral|capsules?)\b", " ", t)
    t = re.sub(r"[^a-z0-9\- ]", " ", t)
    words = [w for w in t.split() if len(w) > 2]
    return " ".join(words[:4]) or None

def role_from(isotopes, hint=""):
    roles = {ISO[i][1] for i in isotopes if i in ISO}
    if re.search(r"therap", hint or "", re.I) and not roles: return "therapy"
    return "therapy" if roles == {"therapy"} else "diagnostic" if roles == {"diagnostic"} else "theranostic" if roles else ("therapy" if re.search(r"therap", hint or "", re.I) else "diagnostic")

rows = []
# ---- FDA ----
for a in json.load(open(os.path.join(BASE, "raw/fda_drugsfda.json"))):
    of = a.get("openfda", {}) or {}
    prods = a.get("products", []) or []
    ings = sorted({i.get("name", "") for p in prods for i in (p.get("active_ingredients") or [])})
    brands = sorted({p.get("brand_name", "") for p in prods if p.get("brand_name")})
    text = " ".join(ings + brands)
    pc = " ".join(of.get("pharm_class_epc", []) + of.get("pharm_class_moa", []))
    iso = isos(text)
    radio = bool(re.search(r"radio", pc, re.I)) or bool(iso) or bool(KIT.search(text))
    if not radio or (NOT_RADIO.search(text) and not iso and not re.search(r"radio", pc, re.I)): continue
    orig = [s for s in a.get("submissions", []) if s.get("submission_type") == "ORIG" and s.get("submission_status") == "AP"]
    ap = min((s.get("submission_status_date") for s in orig if s.get("submission_status_date")), default=None)
    ms = {p.get("marketing_status") for p in prods}
    labels = sorted([d for s in a.get("submissions", []) for d in (s.get("application_docs") or []) if d.get("type") == "Label"], key=lambda d: d.get("date", ""))
    num = re.sub(r"\D", "", a["application_number"])
    rows.append({"id": f"fda-{a['application_number'].lower()}", "region": "US", "regulator": "FDA", "brand": ", ".join(brands[:3]),
                 "ingredient": "; ".join(ings[:3]), "original": None, "lang": None, "holder": a.get("sponsor_name"),
                 "approved": f"{ap[:4]}-{ap[4:6]}-{ap[6:]}" if ap else None,
                 "status": "approved" if ms - {"Discontinued"} else "discontinued", "application": a["application_number"],
                 "role": "therapy" if re.search(r"Therapeutic|Radioligand Ther", pc) else role_from(iso, pc), "isotopes": iso,
                 "indication": None, "label": labels[-1]["url"] if labels else None,
                 "url": f"https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm?event=overview.process&ApplNo={num}"})
# ---- EMA ----
for e in json.load(open(os.path.join(BASE, "products_ema.json"))):
    txt = " ".join(e.get("ingredients", []) + e.get("brands", []))
    iso = isos(txt + " " + (e.get("indication") or "")[:200])
    d = e.get("approved") or ""
    m = re.fullmatch(r"(\d\d)/(\d\d)/(\d{4})", d)
    rows.append({"id": e["id"], "region": "EU", "regulator": "EMA", "brand": ", ".join(e.get("brands", [])), "ingredient": ", ".join(e.get("ingredients", [])),
                 "original": None, "lang": None, "holder": e.get("holder"), "approved": f"{m.group(3)}-{m.group(2)}-{m.group(1)}" if m else (d or None),
                 "status": (e.get("status") or "").lower() or "approved", "role": role_from(iso, e.get("indication")), "isotopes": iso,
                 "indication": (e.get("indication") or "")[:300], "atc": e.get("atc"), "orphan": e.get("orphan") == "Yes", "url": e.get("url")})
# ---- Canada ----
for c in json.load(open(os.path.join(BASE, "products_ca.json"))):
    st = (c.get("status") or "").lower()
    c["isotopes"] = isos("; ".join(c["ingredients"])) or isos(c["brand"])
    rows.append({"id": f"hc-{c['din']}", "region": "CA", "regulator": "Health Canada", "brand": c["brand"], "ingredient": "; ".join(c["ingredients"]),
                 "original": None, "lang": None, "holder": c.get("holder"), "approved": c.get("firstStatusDate"),
                 "status": "approved" if st in ("marketed", "approved") else ("dormant" if st == "dormant" else "cancelled"),
                 "role": role_from(c["isotopes"], " ".join(c.get("atc", []))), "isotopes": c["isotopes"], "indication": None,
                 "atc": ", ".join(c.get("atc", [])), "din": c["din"], "url": c["url"]})
# ---- Switzerland ----
for s in json.load(open(os.path.join(BASE, "products_ch.json"))):
    rows.append({"id": f"ch-{s['authorisation']}", "region": "CH", "regulator": "Swissmedic", "brand": s["brand"], "ingredient": None,
                 "original": s.get("fullName"), "lang": "de", "holder": s.get("holder"), "approved": s.get("approved"), "status": "approved",
                 "role": role_from(s["isotopes"]), "isotopes": s["isotopes"], "indication": None, "url": s["url"]})
# ---- researcher-compiled regions ----
# Cold kits are labelled with technetium-99m at the hospital; the kit name itself rarely carries the isotope.
TC_KIT = re.compile(r"(?i)exam[eé]tazim|mertiatid|mercaptoac[eé]tyltriglycin|succim|macroag|albumin|sestamibi|tetrofosmin|medron|oxidron|pentet|"
                    r"m[eé]brof[eé]nin|bicisat|tilmanocept|pyrophosph|pirofosfat|sulfur colloid|sulfure de rh[eé]nium|heptasulfure|nanocoll|"
                    r"fluorure stanneux|stanneux|tin colloid|phytat|fitato|butedron|betiatid|disofenin|gluceptat|red blood cell|hmpao|dtpa|dmsa|mag-?3|\bmdp\b|\bhdp\b")
KIT_FORM = re.compile(r"(?i)\btrousse|\bkit\b|equipo de reactivos|preparaci[oó]n radiofarmac|radiofarmaceutisch preparaat|preparazione radiofarmac")
for f in [os.path.join(BASE, "approvals", n + ".json") for n in ("jp", "cn", "kr_tw_in", "au_nz", "uk_ie", "latam", "other", "es", "fr", "nl", "it")]:
    if f.endswith(("tasks.json",)) or re.search(r"/(ca|ch)_partial\.json$", f): continue
    for i, r in enumerate(json.load(open(f))):
        if not isinstance(r, dict) or not r.get("region"): continue
        if (r.get("brand") or "").startswith("ライアット") or "Raiatt" in (r.get("brand") or ""):
            if r.get("approved") == "2021-01-01": r["approved"] = "2021"   # source says only "approved in 2021"
        txt = f"{r.get('ingredient') or ''} {r.get('brand') or ''}"
        iso = isos(txt)
        if not iso and TC_KIT.search(txt) and KIT_FORM.search(f"{txt} {r.get('form') or ''}"): iso = ["Tc-99m"]
        if not iso and re.search(r"(?i)82\s?sr\b|strontium \(82", txt) and re.search(r"(?i)g[eé]n[eé]rat", txt): iso = ["Rb-82"]   # Sr-82/Rb-82 generator
        if "Ga-67" in iso and re.search(r"(?i)68\s?ge\b|germani", txt): iso = ["Ga-68"]   # Ge-68/Ga-68 generator mislabelled 67Ga in one registry
        rows.append({"id": f"{r['region'].lower()}-{os.path.basename(f)[:-5]}-{i}", "region": r["region"], "regulator": r.get("regulator"),
                     "brand": r.get("brand"), "ingredient": r.get("ingredient"), "original": r.get("original"), "lang": r.get("lang"),
                     "holder": r.get("holder"), "approved": r.get("approved"), "status": r.get("status") or "unknown",
                     "role": r.get("role") or role_from(iso), "isotopes": iso, "indication": r.get("indication"), "url": r.get("url")})

# ---- drop non-radioactive look-alikes pulled in by ingredient synonyms (fluoride toothpaste, MRI gadopentetate, homeopathic thallium,
#      iron-replacement pyrophosphate, DTPA/succimer chelators for decorporation or lead poisoning) unless the text itself names an isotope mass ----
NONRADIO = re.compile(r"(?i)sodium fluoride|hydrogen fluoride|stannous fluoride|triclosan|gadopentetate|thallium (?:metallicum|aceticum|sulf)|ferric pyrophosphate|"
                      r"pentetate (?:calcium|zinc) trisodium$|^succimer$|^sodium iodide$")
def _mass_named(r):
    txt = " ".join(str(r.get(k) or "") for k in ("brand", "ingredient", "original", "indication"))
    return any(re.search(r"(?<!\d)" + i.split("-")[1].rstrip("m") + r"(?!\d)", txt) for i in r.get("isotopes") or []) or re.search(r"(?i)radio|99m|\bYB\b", txt)
_before = len(rows)
rows = [r for r in rows if not (r["region"] in ("US", "CA") and NONRADIO.search((r.get("ingredient") or "").strip()) and not _mass_named(r))]
print("dropped non-radioactive look-alikes", _before - len(rows))

# ---- brand -> ingredient inference for rows without an ingredient (Swiss list names brands only) ----
by_brand = {}
for r in rows:
    if r.get("ingredient"):
        for b in re.split(r",\s*", r.get("brand") or ""):
            k = re.sub(r"[^a-z0-9]", "", b.lower().split(" ")[0])
            if len(k) >= 5: by_brand.setdefault(k, r)
for r in rows:
    if not r.get("ingredient"):
        k = re.sub(r"[^a-z0-9]", "", (r.get("brand") or "").lower().split(" ")[0])
        src = by_brand.get(k)
        if src:
            r["ingredient"] = src["ingredient"]; r["ingredientFrom"] = src["id"]
            if not r["isotopes"]: r["isotopes"] = src["isotopes"]; r["role"] = src["role"]

# ---- agent key ----
for r in rows:
    ing = r.get("ingredient") or ""
    if re.fullmatch(r"(?i)\s*(?:(?:other )?(?:diagnostic|therapeutic) radiopharmaceuticals?|[a-z]+ \d{2,3}m?)\s*", ing): ing = ""   # generic ATC label or bare "INDIO 111": use the brand
    bi, ii = isos(r.get("brand") or ""), isos(ing)
    if bi and ii and not set(bi) & set(ii):   # brand and ingredient disagree on the isotope (a copy error in a compiled list): trust the brand
        ing = ""; r["isotopes"] = bi; r["role"] = role_from(bi)
    lig = ligand(ing or r.get("original") or r.get("brand") or "") or ""
    if not lig and r.get("brand"): lig = ligand(r["brand"]) or ""   # "LUTETIUM (LU-177)" + brand PLUVICTO
    if lig == "chloride" and r.get("brand"):   # "OXINATE D'INDIUM" whose composition line names only the indium chloride
        b = unicodedata.normalize("NFKD", r["brand"]).encode("ascii", "ignore").decode()
        lig = next((n for rx, n in SYN if rx.search(b) and n != "chloride"), lig)
    # drop isotope-mass fragments the ligand stripper leaves behind ("-131 iodohippurate", "-177 psma", "rhenium- -dedc")
    lig = re.sub(r"(?:^|\s)-\d{1,3}m?\b", " ", lig)
    lig = re.sub(r"\b(?:rhenium|iodine|lutetium|yttrium|samarium|copper|gallium|indium|technetium|fluorine|actinium|radium|strontium|thallium|xenon)-\s+-?", "", lig)
    lig = re.sub(r"\s{2,}", " ", lig).strip(" -")
    iso = "+".join(r["isotopes"]) if r["isotopes"] else "kit/unspecified"
    r["agent"] = f"{iso} {lig}" if lig else iso
OVERRIDE = {"MYOSCINT": (["In-111"], "In-111 imciromab pentetate"), "YTTERBIUM YB 169 DTPA": (["Yb-169"], "Yb-169 pentetate (DTPA)")}
for r in rows:
    o = OVERRIDE.get((r.get("brand") or "").upper())
    if o: r["isotopes"], r["agent"] = o
json.dump(rows, open(os.path.join(BASE, "products_all.json"), "w"), ensure_ascii=False, separators=(",", ":"))

agents = collections.OrderedDict()
for r in sorted(rows, key=lambda r: (r.get("approved") or "9999")):
    a = agents.setdefault(r["agent"], {"agent": r["agent"], "isotopes": r["isotopes"], "role": r["role"], "regions": {}, "firstApproved": None, "rows": 0})
    g = a["regions"].setdefault(r["region"], {"first": None, "brands": set(), "holders": set(), "active": False})
    if r.get("approved") and (not g["first"] or r["approved"] < g["first"]): g["first"] = r["approved"]
    if r.get("brand"): g["brands"].add(r["brand"][:60])
    if r.get("holder"): g["holders"].add(r["holder"][:60])
    if r.get("status") in ("approved", "authorised", "marketed"): g["active"] = True
    if r.get("approved") and (not a["firstApproved"] or r["approved"] < a["firstApproved"]): a["firstApproved"] = r["approved"]
    a["rows"] += 1
out = []
for a in agents.values():
    for g in a["regions"].values(): g["brands"] = sorted(g["brands"])[:6]; g["holders"] = sorted(g["holders"])[:6]
    a["nRegions"] = len(a["regions"])
    a["activeRegions"] = sorted(k for k, g in a["regions"].items() if g["active"])
    a["notInUS"] = "US" not in a["regions"]
    out.append(a)
json.dump(out, open(os.path.join(BASE, "agents_all.json"), "w"), ensure_ascii=False, separators=(",", ":"))
print("registrations", len(rows), collections.Counter(r["region"] for r in rows))
print("agents", len(out), "approved somewhere but never in US:", sum(a["notInUS"] for a in out))
