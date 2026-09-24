import json, os, sys, time, urllib.request
WORK = os.environ.get("UNIVERSE_WORK") or os.path.dirname(os.path.abspath(__file__))  # data directory (inputs + outputs)
DIR = (sys.argv[1] if len(sys.argv) > 1 else "DESC").upper()  # two passes (DESC, ASC) get past the 10k result cap
os.makedirs(os.path.join(WORK, 'raw'), exist_ok=True)
out=open(os.path.join(WORK, 'raw', 'ctis_all.jsonl' if DIR == 'DESC' else 'ctis_all_asc.jsonl'),'w'); n=0; page=1
while True:
    body={"pagination":{"page":page,"size":100},"sort":{"property":"decisionDate","direction":DIR},"searchCriteria":{}}
    for a in range(6):
        try:
            req=urllib.request.Request("https://euclinicaltrials.eu/ctis-public-api/search", data=json.dumps(body).encode(), headers={"Content-Type":"application/json","Accept":"application/json","User-Agent":"Mozilla/5.0"})
            with urllib.request.urlopen(req, timeout=90) as r: d=json.load(r); break
        except Exception as e: time.sleep(5*(a+1)); d=None
    if not d: print("gave up at page", page, flush=True); break
    for x in d["data"]: out.write(json.dumps(x)+"\n"); n+=1
    out.flush()
    if not d["pagination"]["nextPage"]: break
    page+=1; time.sleep(0.7)
    if page%20==0: print("page", page, n, flush=True)
print("DONE", n, flush=True)
