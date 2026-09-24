#!/usr/bin/env python3
"""Harvest every radiopharmaceutical paper in Europe PMC, 2015 to today, with abstracts. Per-year cursor
pagination, resumable, polite (casa@casadesante.com), retries on 429/503."""
import json, os, sys, time, urllib.parse, urllib.request
WORK = os.environ.get("UNIVERSE_WORK") or os.path.dirname(os.path.abspath(__file__))  # data directory (inputs + outputs)
BASE = "https://www.ebi.ac.uk/europepmc/webservices/rest/search"
Q = ('(radiopharmaceutical* OR radioligand* OR radiotracer* OR theranostic* OR "PET tracer" OR PRRT OR "targeted alpha" OR '
     'radioimmunotherapy OR "radionuclide therapy" OR "177Lu" OR "lutetium-177" OR "225Ac" OR "actinium-225" OR "68Ga" OR '
     '"gallium-68" OR "89Zr" OR "zirconium-89" OR "64Cu" OR "copper-64" OR "212Pb" OR "161Tb" OR "211At" OR "99mTc" OR '
     '"technetium-99m" OR "18F-labeled" OR "18F-labelled" OR "[18F]" OR immunoPET OR "immuno-PET" OR "PSMA PET" OR FAPI OR '
     '"somatostatin receptor imaging" OR "radioiodine" OR "131I" OR "123I" OR "124I" OR "90Y" OR "yttrium-90" OR radioembolization OR '
     '"223Ra" OR "radium-223" OR "11C-" OR "[11C]" OR "SPECT tracer" OR "radiolabeled" OR "radiolabelled" OR "nuclear medicine")')
OUTDIR = os.path.join(WORK, "raw/epmc"); os.makedirs(OUTDIR, exist_ok=True)
years = [int(a) for a in sys.argv[1:]] or list(range(2026, 2014, -1))
def get(url):
    for attempt in range(8):
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": "Nuclide harvester (casa@casadesante.com)"}), timeout=120) as r:
                return json.load(r)
        except Exception as e:
            time.sleep(min(60, 3 * (attempt + 1) ** 2))
    return None
for y in years:
    path = f"{OUTDIR}/{y}.jsonl"; state = f"{OUTDIR}/{y}.cursor"
    if os.path.exists(f"{OUTDIR}/{y}.done"): continue
    cursor = open(state).read().strip() if os.path.exists(state) else "*"
    n = sum(1 for _ in open(path)) if os.path.exists(path) else 0
    f = open(path, "a")
    while True:
        q = {"query": f"{Q} AND PUB_YEAR:{y}", "format": "json", "pageSize": "1000", "resultType": "core", "cursorMark": cursor, "email": "casa@casadesante.com"}
        d = get(BASE + "?" + urllib.parse.urlencode(q))
        if d is None: print("GAVE UP", y, cursor, flush=True); break
        res = d.get("resultList", {}).get("result", [])
        for r in res:
            keep = {k: r.get(k) for k in ("id","source","pmid","pmcid","doi","title","authorString","journalInfo","pubYear","firstPublicationDate","abstractText","pubTypeList","keywordList","meshHeadingList","isOpenAccess","citedByCount","affiliation","grantsList","hasTextMinedTerms")}
            ji = keep.get("journalInfo") or {}
            keep["journal"] = ((ji.get("journal") or {}).get("title")) ; keep.pop("journalInfo", None)
            keep["pubTypes"] = ((keep.pop("pubTypeList") or {}).get("pubType") or [])
            keep["keywords"] = ((keep.pop("keywordList") or {}).get("keyword") or [])
            mh = (keep.pop("meshHeadingList") or {}).get("meshHeading") or []
            keep["mesh"] = [m.get("descriptorName") for m in mh][:25]
            gl = (keep.pop("grantsList") or {}).get("grant") or []
            keep["grants"] = [g.get("agency") for g in gl][:6]
            f.write(json.dumps(keep) + "\n"); n += 1
        f.flush()
        nxt = d.get("nextCursorMark")
        if not res or not nxt or nxt == cursor:
            open(f"{OUTDIR}/{y}.done", "w").write(str(n)); break
        cursor = nxt; open(state, "w").write(cursor)
        print(y, n, "of", d.get("hitCount"), flush=True)
        time.sleep(1)
    print("YEAR DONE", y, n, flush=True)
