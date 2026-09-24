#!/usr/bin/env python3
"""National (non-centralised) radiopharmaceutical authorisations for Spain (AEMPS CIMA REST API, ATC V09 + V10),
France (ANSM Base de données publique des médicaments, full CIS + composition files), the Netherlands (CBG-MEB
Geneesmiddeleninformatiebank metadata, RVG national numbers, ATC V09/V10) and Italy (AIFA Banca Dati Farmaci search API,
ATC V09/V10). Centrally authorised products are skipped because the EU rows already carry them. Writes
approvals/{es,fr,nl,it}.json in the approvals schema, original-language names kept with lang, every row with the registry
URL it came from. A list that comes back less than half the size of the one on disk is not written (registry outage)."""
import csv, datetime as dt, io, json, os, re, sys, time, urllib.parse, urllib.request
WORK = os.environ.get("UNIVERSE_WORK") or os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__))); sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), "lib"))
from rpvocab import isotopes_in
UA = {"User-Agent": "Nuclide registry harvester (casa@casadesante.com)"}

def save(code, rows):
    """Write approvals/<code>.json unless the fresh list is under half the size of the one on disk (a registry outage)."""
    path = os.path.join(WORK, "approvals", code + ".json")
    try: before = len(json.load(open(path)))
    except Exception: before = 0
    if len(rows) < 0.5 * before:
        print(f"{code}: only {len(rows)} rows against {before} on disk; keeping the old list"); return
    os.makedirs(os.path.dirname(path), exist_ok=True)
    json.dump(rows, open(path, "w"), ensure_ascii=False, indent=0)

def get(url, binary=False):
    for a in range(6):
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=120) as r:
                b = r.read(); return b if binary else json.loads(b)
        except Exception as e:
            time.sleep(3 * (a + 1))
    raise RuntimeError(url)

def iso_of(txt):
    try: return sorted(set(isotopes_in(txt)))
    except Exception: return []

# ---------------------------------------------------------------- Spain
es = []
seen = set()
for atc in ("V09", "V10"):
    page = 1
    while True:
        d = get(f"https://cima.aemps.es/cima/rest/medicamentos?atc={atc}&pagina={page}")
        res = d.get("resultados") or []
        for r in res:
            if r["nregistro"] in seen or r.get("ema"): continue
            seen.add(r["nregistro"])
            det = get(f"https://cima.aemps.es/cima/rest/medicamento?nregistro={r['nregistro']}")
            lvl5 = [a["nombre"] for a in det.get("atcs") or [] if a.get("nivel") == 5]
            st = r.get("estado") or {}
            aut = dt.datetime.utcfromtimestamp(st["aut"] / 1000).date().isoformat() if st.get("aut") else None
            status = "withdrawn" if st.get("rev") else ("unknown" if st.get("susp") else "approved")
            lvl5 = [n for n in lvl5 if not re.match(r"(?i)(otros )?productos radiofarmac", n)]
            ing = "; ".join(lvl5) or det.get("pactivos")
            es.append({"region": "ES", "regulator": "AEMPS", "brand": r["nombre"], "ingredient": ing, "original": r["nombre"], "lang": "es",
                       "holder": r.get("labtitular"), "approved": aut, "status": status,
                       "role": "therapy" if atc == "V10" else "diagnostic", "indication": None,
                       "url": f"https://cima.aemps.es/cima/publico/detalle.html?nregistro={r['nregistro']}", "atc": ",".join(a["codigo"] for a in det.get("atcs") or [] if a.get("nivel") == 5) or atc})
            time.sleep(0.2)
        if len(res) < (d.get("tamanioPagina") or 200): break
        page += 1
save("es", es)
print("ES national", len(es), "withdrawn", sum(1 for r in es if r["status"] == "withdrawn"), flush=True)

# ---------------------------------------------------------------- France
cis = get("https://base-donnees-publique.medicaments.gouv.fr/download/file/CIS_bdpm.txt", binary=True).decode("latin-1")
compo = get("https://base-donnees-publique.medicaments.gouv.fr/download/file/CIS_COMPO_bdpm.txt", binary=True).decode("latin-1")
subs = {}
for line in compo.splitlines():
    f = line.split("\t")
    if len(f) >= 7 and f[6].strip() == "SA": subs.setdefault(f[0].strip(), []).append(f[3].strip())
BRACKET_ISO = re.compile(r"[\(\[]\s*\d{1,3}\s?m?\s?(?:Tc|F|Ga|In|I|Tl|Lu|Ra|Y|Sm|Sr|Cu|Zr|C|N|O|Rb|Xe|Kr|Cr|Er|Re|Ho|Ac|Pb|Tb|Co|Se|P)\s*[\)\]]")
RADIOFORM = re.compile(r"radiopharmaceutique|générateur radiopharmaceutique|précurseur radiopharmaceutique", re.I)
fr = []
for line in cis.splitlines():
    f = line.split("\t")
    if len(f) < 11: continue
    cid, name, form, route, st, proc, comm, damm = (x.strip() for x in f[:8])
    holder = f[10].strip()
    if "centralisée" in proc.lower(): continue
    ing = "; ".join(dict.fromkeys(subs.get(cid, [])))
    if not (RADIOFORM.search(form) or BRACKET_ISO.search(f"{name} {ing}")): continue
    if re.search(r"\[\s*13\s*C\s*\]|\(\s*13\s*C\s*\)", f"{name} {ing}") and not RADIOFORM.search(form): continue   # 13C urea breath tests: stable isotope
    status = "approved" if st.lower().startswith("autorisation active") else ("withdrawn" if re.search(r"abrog|retir|archiv", st, re.I) else "unknown")
    m = re.match(r"(\d{2})/(\d{2})/(\d{4})", damm)
    fr.append({"region": "FR", "regulator": "ANSM", "brand": name, "ingredient": ing or None, "original": name, "lang": "fr",
               "holder": holder or None, "approved": f"{m.group(3)}-{m.group(2)}-{m.group(1)}" if m else None, "status": status,
               "role": None, "indication": None, "url": f"https://base-donnees-publique.medicaments.gouv.fr/extrait.php?specid={cid}",
               "form": form, "marketed": comm})
save("fr", fr)
print("FR national", len(fr), "active", sum(1 for r in fr if r["status"] == "approved"), flush=True)

# ---------------------------------------------------------------- Netherlands (CBG Geneesmiddeleninformatiebank metadata export)
raw = get("https://www.geneesmiddeleninformatiebank.nl/metadata.csv", binary=True).decode("utf-8", "replace")
nl = []
for r in csv.DictReader(io.StringIO(raw), delimiter="|"):
    atc = (r.get("ATC") or "").strip()
    if not atc.startswith(("V09", "V10")) or (r.get("SOORT") or "").strip() != "RVG": continue   # RVG = national; EU/ numbers are central
    d = (r.get("INSCHRIJVINGSDATUM") or "").replace("/", "-") or None
    code, _, desc = atc.partition(" - ")
    generic = re.match(r"(?i)other (diagnostic|therapeutic) radiopharmaceuticals", desc.strip())
    nl.append({"region": "NL", "regulator": "CBG-MEB", "brand": r["PRODUCTNAAM"].strip(), "ingredient": (r.get("WERKZAMESTOFFEN") if generic else desc.strip()) or r.get("WERKZAMESTOFFEN"),
               "original": r["PRODUCTNAAM"].strip(), "lang": "nl", "holder": (r.get("HANDELSVERGUNNINGHOUDER") or "").strip() or None,
               "approved": d, "status": "approved", "role": "therapy" if code.startswith("V10") else "diagnostic", "indication": None,
               "url": (r.get("PRODUCTDETAIL_LINK") or "").strip() or f"https://www.geneesmiddeleninformatiebank.nl/nl/rvg{r['REGISTRATIENUMMER']}", "atc": code})
save("nl", nl)
print("NL national", len(nl), flush=True)

# ---------------------------------------------------------------- Italy (AIFA Banca Dati Farmaci search API; term search, kept when ATC is V09/V10)
TERMS = ["tecnezio", "pertecnetato", "fluoro", "fludesossiglucosio", "fluorodesossiglucosio", "gallio", "indio", "iodio", "sodio ioduro", "iobenguano",
         "ioflupano", "tallio", "lutezio", "radio", "ittrio", "samario", "stronzio", "rame", "zirconio", "rubidio", "xeno", "cromo", "renio", "erbio",
         "olmio", "colina", "fluciclovina", "florbetapir", "florbetaben", "flutemetamolo", "flortaucipir", "fluoroestradiolo", "fluorodopa", "gozetotide",
         "piflufolastat", "flotufolastat", "edotreotide", "oxodotreotide", "dotatate", "vipivotide", "sestamibi", "tetrofosmina", "medronato", "oxidronato",
         "pentetato", "mertiatide", "macroaggregati", "albumina umana", "technegas", "bicisato", "exametazima", "mebrofenina", "succimero", "tilmanocept",
         "nanocolloidi", "fitato", "pirofosfato", "kit radiofarmaceutico", "generatore", "precursore radiofarmaceutico", "ammoniaca", "acqua", "sodio fluoruro"]
it, seen_it = [], set()
for t in TERMS:
    page = 0
    while True:
        try: d = get(f"https://api.aifa.gov.it/aifa-bdf-eif-be/1.0.0/formadosaggio/ricerca?query={urllib.parse.quote(t)}&spellingCorrection=false&page={page}")["data"]
        except Exception: break
        for x in d.get("content") or []:
            atcs = x.get("codiceAtc") or []
            if not any(a.startswith(("V09", "V10")) for a in atcs) or x["id"] in seen_it: continue
            seen_it.add(x["id"]); m = x.get("medicinale") or {}
            pk = x.get("confezioni") or []
            dates = sorted(p["dataAutorizzazione"][:10] for p in pk if p.get("dataAutorizzazione"))
            central = any((p.get("tipoAutorizzazione") or "") == "C" for p in pk)
            if central: continue
            st = "withdrawn" if x.get("revocato") else ("unknown" if x.get("sospeso") else "approved")
            it.append({"region": "IT", "regulator": "AIFA", "brand": f"{m.get('denominazioneMedicinale')} ({x.get('descrizioneFormaDosaggio') or ''})".replace(" ()", ""),
                       "ingredient": "; ".join([a for a in (x.get("descrizioneAtc") or []) if not a.upper().startswith("ALTRI")] or x.get("principiAttiviIt") or []), "original": "; ".join(x.get("principiAttiviIt") or []), "lang": "it",
                       "holder": m.get("aziendaTitolare"), "approved": dates[0] if dates else None, "status": st,
                       "role": "therapy" if any(a.startswith("V10") for a in atcs) else "diagnostic", "indication": None,
                       "url": f"https://medicinali.aifa.gov.it/it/#/it/dettaglio/{m.get('codiceMedicinale')}", "atc": ",".join(atcs)})
        if d.get("last", True): break
        page += 1
        time.sleep(0.2)
save("it", it)
print("IT national", len(it), flush=True)
