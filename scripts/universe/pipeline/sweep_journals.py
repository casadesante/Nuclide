#!/usr/bin/env python3
"""Journal sweep: make sure EVERY PubMed-indexed article (2015+) in every nuclear-medicine / molecular-imaging journal (42) is in
the paper corpus, regardless of keywords.
1) PubMed esearch per journal per year ("<abbr>"[ta] AND <y>[dp]) -> all PMIDs (the reference list).
2) Subtract PMIDs already in raw/epmc/*.jsonl (keyword corpus) and raw/epmc_journals/*.jsonl (earlier sweeps).
3) Fetch the missing records from Europe PMC (EXT_ID batches, resultType core, same fields as harvest_epmc.py) and append
   them to raw/epmc_journals/<pubYear>.jsonl with "nmj": <journal abbreviation>.
4) Write journals/coverage.json: per journal, PubMed PMIDs, in corpus before, added, still missing.
Usage: sweep_journals.py [first_year] [last_year]   (defaults 2015 .. current year)"""
import json, os, sys, time, glob, datetime, urllib.parse, urllib.request

BASE = os.environ.get("UNIVERSE_WORK") or os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RAW = os.path.join(BASE, "raw/epmc"); OUT = os.path.join(BASE, "raw/epmc_journals"); os.makedirs(OUT, exist_ok=True)
COV = os.path.join(BASE, "journals/coverage.json"); os.makedirs(os.path.dirname(COV), exist_ok=True)
EMAIL = "casa@casadesante.com"
# Journal abbreviations (PubMed [ta]) resolved from Europe PMC journalInfo on 24 Sep 2026 (journals/resolved.json; the last six added the same day).
JOURNALS = ["J Nucl Med", "Eur J Nucl Med Mol Imaging", "EJNMMI Res", "EJNMMI Phys", "EJNMMI Radiopharm Chem", "EJNMMI Rep",
            "J Nucl Cardiol", "Clin Nucl Med", "Nucl Med Biol", "Nucl Med Commun", "Semin Nucl Med", "Ann Nucl Med",
            "Mol Imaging Biol", "Mol Imaging", "J Labelled Comp Radiopharm", "Q J Nucl Med Mol Imaging", "Nuklearmedizin",
            "World J Nucl Med", "Indian J Nucl Med", "Asia Ocean J Nucl Med Biol", "Nucl Med Mol Imaging",
            "Rev Esp Med Nucl Imagen Mol", "Cancer Biother Radiopharm", "J Nucl Med Technol", "Hell J Nucl Med",
            "Nucl Med Rev Cent East Eur", "Front Nucl Med", "Theranostics", "Appl Radiat Isot", "Curr Radiopharm", "PET Clin",
            "Mol Imaging Radionucl Ther", "Contrast Media Mol Imaging", "Kaku Igaku", "Clin Transl Imaging",
            "Eur J Hybrid Imaging", "Am J Nucl Med Mol Imaging", "Ann Nucl Cardiol", "J Nucl Med Radiat Ther",
            "IEEE Trans Radiat Plasma Med Sci", "J Radioanal Nucl Chem", "Rev Esp Med Nucl Imagen Mol (Engl Ed)"]
y0 = int(sys.argv[1]) if len(sys.argv) > 1 else 2015
y1 = int(sys.argv[2]) if len(sys.argv) > 2 else datetime.date.today().year


def get(url, as_json=True):
    for attempt in range(8):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": f"Nuclide harvester ({EMAIL})"})
            with urllib.request.urlopen(req, timeout=120) as r:
                return json.load(r) if as_json else r.read()
        except Exception as e:
            time.sleep(min(60, 3 * (attempt + 1) ** 2))
    return None


def pubmed_pmids(abbr, y):
    term = f'"{abbr}"[ta] AND {y}[dp]'
    u = ("https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?" +
         urllib.parse.urlencode({"db": "pubmed", "term": term, "retmax": 9999, "retmode": "json", "email": EMAIL, "tool": "nuclide"}))
    d = get(u)
    time.sleep(0.4)
    if not d: return None
    return d["esearchresult"].get("idlist", [])


def corpus_pmids():
    have = set()
    for p in glob.glob(os.path.join(RAW, "*.jsonl")) + glob.glob(os.path.join(OUT, "*.jsonl")):
        for line in open(p):
            try: r = json.loads(line)
            except Exception: continue
            if r.get("pmid"): have.add(str(r["pmid"]))
    return have


def keep_fields(r):
    keep = {k: r.get(k) for k in ("id", "source", "pmid", "pmcid", "doi", "title", "authorString", "journalInfo", "pubYear",
                                  "firstPublicationDate", "abstractText", "pubTypeList", "keywordList", "meshHeadingList",
                                  "isOpenAccess", "citedByCount", "affiliation", "grantsList", "hasTextMinedTerms")}
    ji = keep.get("journalInfo") or {}
    keep["journal"] = ((ji.get("journal") or {}).get("title")); keep.pop("journalInfo", None)
    keep["pubTypes"] = ((keep.pop("pubTypeList") or {}).get("pubType") or [])
    keep["keywords"] = ((keep.pop("keywordList") or {}).get("keyword") or [])
    mh = (keep.pop("meshHeadingList") or {}).get("meshHeading") or []
    keep["mesh"] = [m.get("descriptorName") for m in mh][:25]
    gl = (keep.pop("grantsList") or {}).get("grant") or []
    keep["grants"] = [g.get("agency") for g in gl][:6]
    return keep


def fetch_epmc(pmids):
    q = "SRC:MED AND (" + " OR ".join(f"EXT_ID:{p}" for p in pmids) + ")"
    u = "https://www.ebi.ac.uk/europepmc/webservices/rest/search?" + urllib.parse.urlencode(
        {"query": q, "format": "json", "pageSize": 1000, "resultType": "core", "email": EMAIL})
    d = get(u)
    time.sleep(0.6)
    return (d or {}).get("resultList", {}).get("result", []) if d else None


def main():
    cov = json.load(open(COV)) if os.path.exists(COV) else {}
    have = corpus_pmids()
    print("corpus PMIDs before sweep:", len(have), flush=True)
    files = {}
    for abbr in [j for j in JOURNALS if not os.environ.get("SWEEP_ONLY") or j in os.environ["SWEEP_ONLY"].split("|")]:
        allp = set()
        for y in range(y0, y1 + 1):
            ids = pubmed_pmids(abbr, y)
            if ids is None: print("PUBMED FAIL", abbr, y, flush=True); continue
            allp.update(ids)
        before = allp & have
        missing = sorted(allp - have)
        added, notfound, out_of_range = 0, 0, 0
        for i in range(0, len(missing), 150):
            batch = missing[i:i + 150]
            res = fetch_epmc(batch)
            if res is None: print("EPMC FAIL", abbr, i, flush=True); continue
            got = set()
            for r in res:
                pm = str(r.get("pmid") or "")
                if not pm or pm in have or pm not in batch: continue
                y = int(r.get("pubYear") or 0)
                if y < y0: out_of_range += 1; got.add(pm); continue
                rec = keep_fields(r); rec["nmj"] = abbr
                f = files.get(y) or open(os.path.join(OUT, f"{y}.jsonl"), "a"); files[y] = f
                f.write(json.dumps(rec) + "\n"); f.flush()
                have.add(pm); got.add(pm); added += 1
            notfound += len(set(batch) - got)
        cov[abbr] = {"years": f"{y0}-{y1}", "pubmed": len(allp), "in_corpus_before": len(before), "added": added,
                     "epoch_before_range": out_of_range, "not_in_epmc": notfound,
                     "in_corpus_after": len(allp & have), "checked": datetime.datetime.utcnow().isoformat(timespec="seconds") + "Z"}
        json.dump(cov, open(COV, "w"), indent=1)
        print(f"{abbr}: pubmed {len(allp)}, already {len(before)}, added {added}, pre-{y0} {out_of_range}, not in EPMC {notfound}", flush=True)
    print("SWEEP DONE", flush=True)


if __name__ == "__main__":
    main()
