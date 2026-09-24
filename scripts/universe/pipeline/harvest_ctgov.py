#!/usr/bin/env python3
"""Harvest every ClinicalTrials.gov study whose interventions mention a radiopharmaceutical, isotope or
nuclear-medicine agent. Union over many query terms, deduplicated by NCT id. Public API v2, no key."""
import json, sys, time, urllib.parse, urllib.request, os
WORK = os.environ.get("UNIVERSE_WORK") or os.path.dirname(os.path.abspath(__file__))  # data directory (inputs + outputs)

TERMS = [
 # isotopes, every common spelling
 "lutetium", "Lu-177", "177Lu", "actinium", "Ac-225", "225Ac", "gallium-68", "Ga-68", "68Ga", "gallium",
 "fluorine-18", "F-18", "18F", "fluoro", "zirconium", "89Zr", "Zr-89", "technetium", "99mTc", "Tc-99m", "Tc 99m",
 "radium-223", "radium", "iodine-131", "I-131", "131I", "iodine-123", "123I", "I-123", "iodine-124", "124I", "iodine-125", "125I",
 "copper-64", "64Cu", "Cu-64", "copper-67", "67Cu", "lead-212", "212Pb", "Pb-212", "lead-203", "yttrium-90", "90Y", "Y-90", "yttrium",
 "terbium", "161Tb", "indium-111", "111In", "In-111", "astatine", "211At", "thorium-227", "bismuth-213", "213Bi", "scandium", "44Sc",
 "rubidium-82", "82Rb", "carbon-11", "11C", "nitrogen-13", "13N", "ammonia N 13", "oxygen-15", "15O", "H2 15O", "holmium-166", "166Ho",
 "rhenium-186", "rhenium-188", "188Re", "samarium-153", "153Sm", "strontium-89", "89Sr", "phosphorus-32", "32P", "thallium", "201Tl",
 "xenon-133", "krypton", "erbium-169", "tin-117m", "chromium-51", "cobalt-57", "iodine I 131", "sodium iodide I-131",
 # classes and methods
 "radioligand", "radiopharmaceutical", "radionuclide", "radiotracer", "radiolabeled", "radiolabelled", "radioimmunotherapy",
 "radioembolization", "radioembolisation", "SIRT", "PRRT", "theranostic", "targeted alpha", "alpha therapy", "radioiodine",
 "PET tracer", "PET imaging agent", "SPECT", "scintigraphy", "immuno-PET", "immunoPET", "radioguided", "radiosynovectomy",
 "brachytherapy seeds I-125",
 # flagship agents and brands
 "FDG", "fludeoxyglucose", "fluorodeoxyglucose", "PSMA", "DOTATATE", "DOTATOC", "DOTANOC", "DOTA", "NOTA", "FAPI", "FAP inhibitor",
 "fluciclovine", "Axumin", "piflufolastat", "Pylarify", "flotufolastat", "Posluma", "gozetotide", "Illuccix", "Locametz", "Gozellix",
 "vipivotide", "Pluvicto", "Lutathera", "oxodotreotide", "Xofigo", "Netspot", "Detectnet", "copper Cu 64 dotatate", "fluoroestradiol", "Cerianna",
 "florbetapir", "Amyvid", "flutemetamol", "Vizamyl", "florbetaben", "Neuraceq", "flortaucipir", "Tauvid", "MK-6240", "PI-2620",
 "ioflupane", "DaTscan", "fluorodopa", "F-DOPA", "iobenguane", "MIBG", "Azedra", "ibritumomab", "Zevalin", "tilmanocept", "Lymphoseek",
 "sestamibi", "tetrofosmin", "flurpiridaz", "Flyrcado", "choline C-11", "fluorocholine", "sodium fluoride F-18", "NaF PET",
 "girentuximab", "TLX591", "TLX250", "Zircaix", "rosopatamab", "PNT2002", "PNT2003", "ITM-11", "edotreotide", "RYZ101", "FPI-2265",
 "AAA817", "177Lu-PNT", "lilotomab", "Betalutin", "omburtamab", "iomab", "apamistamab", "Iomab-B", "CLR 131", "iopofosine",
 "satoreotide", "SSO110", "SSO120", "pentixafor", "pentixather", "FES PET", "FLT PET", "fluorothymidine", "FMISO", "fluoromisonidazole",
 "FAZA", "methionine PET", "FET PET", "fluoroethyl tyrosine", "exendin", "GLP-1R imaging", "pentetreotide", "Octreoscan",
 "MAA", "macroaggregated albumin", "sulfur colloid", "Technegas", "DTPA", "MAG3", "mertiatide", "DMSA", "HMPAO", "exametazime",
 "bicisate", "ECD SPECT", "pyrophosphate", "PYP scan", "medronate", "MDP bone scan", "hydroxymethylene diphosphonate",
 "leukocyte scintigraphy", "labeled leukocytes", "red blood cell scintigraphy", "gallium citrate", "florbetaben",
 "fluoroestradiol", "trastuzumab PET", "zirconium trastuzumab", "PD-L1 PET", "CD8 PET", "granzyme PET", "fibroblast activation protein",
 "somatostatin receptor", "GRPR", "bombesin", "RM2", "NeoB", "CXCR4", "integrin PET", "RGD", "FAPI-74", "FAPI-46",
]
FIELDS = "NCTId,BriefTitle,OverallStatus,Phase,Condition,InterventionName,LeadSponsorName,LocationCountry,InterventionType,InterventionOtherName,InterventionDescription,LeadSponsorClass,CollaboratorName,StartDate,PrimaryCompletionDate,CompletionDate,StudyFirstPostDate,LastUpdatePostDate,EnrollmentCount,HasResults,BriefSummary,PrimaryOutcomeMeasure,SecondaryId,DesignPrimaryPurpose,WhyStopped,Keyword,OfficialTitle,Acronym,StudyType"
OUT = os.path.join(WORK, "raw/ctgov.jsonl"); os.makedirs(os.path.dirname(OUT), exist_ok=True)
seen = set()
if os.path.exists(OUT):
    for l in open(OUT):
        try: seen.add(json.loads(l)["protocolSection"]["identificationModule"]["nctId"])
        except Exception: pass
done_terms_path = os.path.join(WORK, "raw/ctgov_done_terms.txt")
done_terms = set(open(done_terms_path).read().split("\n")) if os.path.exists(done_terms_path) else set()
out = open(OUT, "a")
def get(url):
    for attempt in range(5):
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": "Nuclide research harvester (casa@casadesante.com)"}), timeout=60) as r:
                return json.load(r)
        except Exception as e:
            time.sleep(2 + attempt * 3)
    return None
for term in TERMS:
    if term in done_terms: continue
    token, n_new, n_all = None, 0, 0
    while True:
        q = {"query.intr": term, "pageSize": "1000", "fields": FIELDS, "format": "json"}
        if token: q["pageToken"] = token
        d = get("https://clinicaltrials.gov/api/v2/studies?" + urllib.parse.urlencode(q))
        if d is None: print("FAILED", term, file=sys.stderr); break
        for s in d.get("studies", []):
            n_all += 1
            nct = s["protocolSection"]["identificationModule"]["nctId"]
            if nct in seen: continue
            seen.add(nct); n_new += 1
            s["_matched"] = term
            out.write(json.dumps(s) + "\n")
        token = d.get("nextPageToken")
        if not token: break
    out.flush()
    open(done_terms_path, "a").write(term + "\n")
    print(f"{term!r}: {n_all} hits, {n_new} new, total {len(seen)}", flush=True)
print("TOTAL", len(seen))
