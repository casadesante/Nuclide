#!/usr/bin/env python3
"""Deep worldwide radiopharmaceutical patent harvest from Google Patents (the xhr/query endpoint behind
patents.google.com; no key). Complements scripts/fetch-patents.ts, which keeps only the newest 400.

Every publication in the radiopharmaceutical CPC classes is collected, sliced by publication month so no
slice exceeds the endpoint's page cap (a month that does is split in half until it fits). Runs on GitHub
Actions (datacentre sandboxes are rate-limited harder), one matrix job per year, each writing
out/patents-<year>.jsonl plus out/patents-<year>-gaps.json listing any slice that stayed blocked, so a
re-run fills only the holes.

Classes:
  A61K51    radioactive preparations for therapy or in-vivo testing (the radiopharmaceutical class itself)
  A61K2123  indexing: preparations for testing in vivo
  C07B59    introducing isotopes into organic compounds (radiolabelling chemistry)
  G21G1     isotope production (reactors, cyclotrons, targets)
  G21G4/08  radionuclide generators
Usage: python3 harvest_patents.py <year> [outdir]
"""
import json, os, sys, time, random, urllib.parse, urllib.request, datetime as dt

YEAR = int(sys.argv[1]); OUT = sys.argv[2] if len(sys.argv) > 2 else "out"
os.makedirs(OUT, exist_ok=True)
CLASSES = [("A61K51", "(A61K51)"), ("A61K2123", "(A61K2123)"), ("C07B59", "(C07B59)"), ("G21G1", "(G21G1)"), ("G21G4", "(G21G4/08)")]
UA = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36"
seen, gaps = {}, []

BLOCKED = {"on": False}
def fetch(inner):
    """One polite request. Google answers a blocked address with an HTML 'Sorry' page; after three tries
    spread over ~3 minutes the address is treated as blocked and the run stops cleanly, keeping what it has."""
    url = "https://patents.google.com/xhr/query?url=" + urllib.parse.quote(inner, safe="") + "&exp="
    for attempt in range(3):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "application/json"})
            with urllib.request.urlopen(req, timeout=60) as r:
                body = r.read().decode("utf-8", "replace")
            if body.lstrip().startswith("{"): return json.loads(body)
        except Exception:
            pass
        time.sleep(60 * (attempt + 1))
    BLOCKED["on"] = True
    return None

def ymd(d): return d.strftime("%Y%m%d")

def slice_(cls_id, q, a, b, depth=0):
    """Collect every publication for class q published in [a, b). Splits the window when it exceeds ~900."""
    total, got = None, 0
    for page in range(10):
        inner = f"q={q}&after=publication:{ymd(a)}&before=publication:{ymd(b)}&num=100&sort=old" + (f"&page={page}" if page else "")
        if BLOCKED["on"]:
            gaps.append({"class": cls_id, "from": ymd(a), "to": ymd(b), "page": page}); return
        d = fetch(inner); time.sleep(9 + random.random() * 4)
        if d is None or "results" not in d:
            gaps.append({"class": cls_id, "from": ymd(a), "to": ymd(b), "page": page}); return
        res = d["results"]; total = res.get("total_num_results", 0)
        if page == 0 and total > 950 and (b - a).days > 1 and depth < 6:
            mid = a + (b - a) / 2
            mid = dt.date(mid.year, mid.month, mid.day)
            slice_(cls_id, q, a, mid, depth + 1); slice_(cls_id, q, mid, b, depth + 1); return
        items = [r.get("patent") for c in res.get("cluster", []) for r in c.get("result", []) if r.get("patent")]
        for p in items:
            pub = p.get("publication_number")
            if not pub: continue
            if pub in seen: seen[pub]["classes"] = sorted(set(seen[pub]["classes"]) | {cls_id}); continue
            seen[pub] = {"publication": pub, "title": p.get("title"), "snippet": (p.get("snippet") or "")[:600],
                         "assignee": p.get("assignee"), "inventor": p.get("inventor"), "priority": p.get("priority_date"),
                         "filed": p.get("filing_date"), "published": p.get("publication_date"), "granted": p.get("grant_date"),
                         "language": p.get("language"), "country": pub[:2], "family": p.get("family_metadata", {}).get("aggregated", {}).get("country_status") if isinstance(p.get("family_metadata"), dict) else None,
                         "classes": [cls_id], "url": f"https://patents.google.com/patent/{pub}/en"}
            got += 1
        if len(items) < 100: break
    print(f"{cls_id} {ymd(a)}-{ymd(b)} total={total} new={got} running={len(seen)}", flush=True)

OUTF = open(f"{OUT}/patents-{YEAR}.jsonl", "a")
written = set()
def flush():
    for k, v in seen.items():
        if k not in written:
            OUTF.write(json.dumps(v, ensure_ascii=False) + "\n"); written.add(k)
    OUTF.flush()
    json.dump(gaps, open(f"{OUT}/patents-{YEAR}-gaps.json", "w"))

for cls_id, q in CLASSES:
    for m in range(1, 13):
        a = dt.date(YEAR, m, 1); b = dt.date(YEAR + (m == 12), (m % 12) + 1, 1)
        if a > dt.date.today(): break
        slice_(cls_id, q, a, b)
        flush()
flush()
print("YEAR", YEAR, "publications", len(seen), "blocked slices", len(gaps), "blocked" if BLOCKED["on"] else "complete")
