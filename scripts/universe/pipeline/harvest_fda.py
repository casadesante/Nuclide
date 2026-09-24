#!/usr/bin/env python3
import json, os, time, urllib.parse, urllib.request
WORK = os.environ.get("UNIVERSE_WORK") or os.path.dirname(os.path.abspath(__file__))  # data directory (inputs + outputs)
BASE = "https://api.fda.gov/drug/drugsfda.json"
QUERIES = ['openfda.pharm_class_epc:"Radioactive Diagnostic Agent [EPC]"', 'openfda.pharm_class_epc:"Radioactive Therapeutic Agent [EPC]"',
           'openfda.pharm_class_moa:"Radiopharmaceutical Activity [MoA]"']
TOKENS = ["TECHNETIUM","FLUDEOXYGLUCOSE","GALLIUM","INDIUM","IODIDE","IOBENGUANE","IOFLUPANE","THALLOUS","RUBIDIUM","XENON","LUTETIUM","RADIUM",
          "SAMARIUM","STRONTIUM","YTTRIUM","COPPER","FLUCICLOVINE","FLORBETAPIR","FLORBETABEN","FLUTEMETAMOL","FLORTAUCIPIR","FLUOROESTRADIOL","FLUORODOPA",
          "PIFLUFOLASTAT","FLOTUFOLASTAT","CHOLINE","AMMONIA","SODIUM FLUORIDE","CHROMIC","IBRITUMOMAB","SESTAMIBI","TETROFOSMIN","TILMANOCEPT","FLURPIRIDAZ",
          "GOZETOTIDE","VIPIVOTIDE","DOTATATE","DOTATOC","EDOTREOTIDE","PENTETREOTIDE","MEBROFENIN","MEDRONATE","OXIDRONATE","PENTETATE","EXAMETAZIME","BICISATE",
          "MERTIATIDE","SUCCIMER","SULFUR COLLOID","PYROPHOSPHATE","MACROAGGREGATED","RED BLOOD CELL","PERTECHNETATE","CAPROMAB","SATUMOMAB","ARCITUMOMAB","NOFETUMOMAB",
          "IOTHALAMATE I-125","IODINATED I-125","IODINATED I-131","CYANOCOBALAMIN CO","FLUORINE","F-18","F 18","TC-99M","TC 99M","I-131","I-123","IN-111","GA-68","GA 68","CU 64","LU 177","LU-177"]
def get(q, skip):
    u = BASE + "?" + urllib.parse.urlencode({"search": q, "limit": "100", "skip": str(skip)})
    for a in range(5):
        try:
            with urllib.request.urlopen(u, timeout=60) as r: return json.load(r)
        except urllib.error.HTTPError as e:
            if e.code == 404: return {"results": []}
            time.sleep(2 + a * 3)
        except Exception: time.sleep(2 + a * 3)
    return {"results": []}
apps = {}
qs = QUERIES + [f'products.active_ingredients.name:"{t}"' for t in TOKENS]
for q in qs:
    skip, n = 0, 0
    while True:
        d = get(q, skip)
        res = d.get("results", [])
        for r in res:
            apps[r["application_number"]] = r; n += 1
        if len(res) < 100 or skip > 900: break
        skip += 100
    print(f"{q[:70]:72} {n}", flush=True)
json.dump(list(apps.values()), open(os.path.join(WORK, "raw/fda_drugsfda.json"), "w"))
print("applications", len(apps))
