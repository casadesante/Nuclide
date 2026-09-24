# Executed inside build_universe.py (shares its variables: trials, products, agents, papers, abstracts, patents, gaps, labels, cp, BASE).
# Computes candidate openings from cross-links. Every fact line is a count over rows that ship alongside, and every idea
# carries the ids of the rows behind it, so a reader can open the evidence. No external claims are written here.
import collections as _c, json as _j, math as _m, re as _re

TL = labels["targets"]; DL = labels["diseases"]; IL = labels["isotopes"]
FUNCTIONAL = {"glucose-metabolism", "bone-mineral", "myocardial-perfusion", "thyroid", "parathyroid", "renal-function", "hepatobiliary", "cerebral-perfusion",
              "perfusion-ventilation", "lymphatic-mapping", "red-cell", "infection-inflammation", "amino-acid-transport", "choline-metabolism", "proliferation",
              "hypoxia", "psma-negative-lipid", "apoptosis", "cardiac-amyloid"}
ONCO = {k for k in DL if _re.search(r"cancer|tumou?r|lymphoma|leuk|melanoma|sarcoma|neuroblastoma|carcinoma|neuroendocrine", k)}
NEXTGEN = ["Ac-225", "Pb-212", "Tb-161", "At-211", "Cu-67", "Sc-47", "Th-227", "Ra-224", "Er-169", "Bi-213", "Tb-152", "Sc-44", "Cu-61", "Pb-203", "Cu-64", "Zr-89"]
THER = lambda t: t["role"] in ("therapy", "theranostic")
DIAG = lambda t: t["role"] in ("diagnostic", "theranostic")

LABELLED = _re.compile(r"(?:\[?\d{1,3}\s*[A-Z][a-z]?\]?[- ]|\b[A-Z][a-z]?-?\d{1,3}m?\b)")
def labelled(names): return [n for n in names if LABELLED.search(n) and len(n) <= 60 and not _re.search(r"(?i)standard|compared|intravenous|imaging\b|scan\b|patients", n)]
ideas = []
def add(lens, key, title, facts, ev, target=None, disease=None, iso=None, role=None, score=0.0, regions=None):
    ideas.append({"id": f"{lens}:{key}", "lens": lens, "title": title, "facts": facts, "tg": target, "ds": disease, "iso": iso or [], "role": role,
                  "score": round(score, 2), "regions": regions or [], "ev": {k: v for k, v in ev.items() if v}})

def recent_first(rows, key="y"):
    return sorted(rows, key=lambda r: -(r.get(key) or 0))

# ---------------------------------------------------------------- indexes
studied = [t for t in trials if t["s"]]
TT = _c.defaultdict(list)                 # (target, disease|"*") -> trials
for t in studied:
    for g in t["tg"]:
        TT[(g, "*")].append(t)
        for d in t["ds"]: TT[(g, d)].append(t)
PP = _c.defaultdict(list)
for p in papers:
    for g in p["tg"]:
        PP[(g, "*")].append(p)
        for d in p["ds"]: PP[(g, d)].append(p)
AA = _c.defaultdict(list)
for a in abstracts:
    for g in a["tg"]:
        AA[(g, "*")].append(a)
        for d in a["ds"]: AA[(g, d)].append(a)
GG = _c.defaultdict(list)
for i, g in enumerate(gaps):
    for t in g["tg"] or ["*none*"]:
        for d in (g["ds"] or []) + ["*"]: GG[(t, d)].append(i)
    for d in g["ds"]: GG[("*", d)].append(i)
PT = _c.defaultdict(list)
for p in patents:
    for g in p["tg"]: PT[g].append(p)
PR = _c.defaultdict(list)
for p in products:
    for g in p["tg"]: PR[g].append(p)

def n_recent(rows, lo=2023): return sum(1 for r in rows if (r.get("y") or 0) >= lo)
def n_window(rows, lo, hi): return sum(1 for r in rows if lo <= (r.get("y") or 0) <= hi)
def dl(d): return DL.get(d, d) if d != "*" else "all indications"

pairs = {k for k in list(TT) + list(PP) if k[0] not in FUNCTIONAL}

# ---------------------------------------------------------------- 1 + 2: therapy without imaging / imaging without therapy
for (g, d) in sorted(pairs):
    tr = TT.get((g, d), []); th = [t for t in tr if THER(t)]; dx = [t for t in tr if DIAG(t)]
    pp = PP.get((g, d), []); gp = GG.get((g, d), [])
    if d != "*" and d not in ONCO and g not in ("amyloid", "tau", "alpha-synuclein", "dat", "tspo", "sv2a", "cyp11b", "cxcr4"): pass
    if len(th) >= 2 and not dx:
        add("companion-imaging", f"{g}:{d}", f"Imaging partner for {TL.get(g, g)} therapy in {dl(d)}",
            [f"{len(th)} radiopharmaceutical therapy trials target {TL.get(g, g)} in {dl(d)}; none tests a {TL.get(g, g)} imaging agent",
             f"{len(pp)} papers tag this target and indication ({n_recent(pp)} since 2023)", f"{len(gp)} published unmet-need statements"],
            {"trials": [t["id"] for t in recent_first(th)][:10], "papers": [p["id"] for p in recent_first(pp)][:8], "gaps": gp[:8]},
            target=g, disease=d if d != "*" else None, role="diagnostic", score=_m.log1p(len(th)) * 2 + _m.log1p(len(gp)))
    if len(dx) >= 3 and not th and (d in ONCO or d == "*") and g not in ("amyloid", "tau", "dat", "tspo", "sv2a", "vmat2", "alpha-synuclein", "dopamine-d2d3",
                                                                           "serotonin", "mao-b", "gaba-a", "opioid", "nachr", "pde10a", "mglur5", "cb2", "adenosine-a2a", "sigma-receptor"):
        add("therapy-partner", f"{g}:{d}", f"Therapeutic partner for {TL.get(g, g)} imaging in {dl(d)}",
            [f"{len(dx)} imaging trials use a {TL.get(g, g)} agent in {dl(d)}; no radiopharmaceutical therapy trial targets it there",
             f"{len(pp)} papers ({n_recent(pp)} since 2023)", f"{len(gp)} published unmet-need statements"],
            {"trials": [t["id"] for t in recent_first(dx)][:10], "papers": [p["id"] for p in recent_first(pp)][:8], "gaps": gp[:8]},
            target=g, disease=d if d != "*" else None, role="therapy", score=_m.log1p(len(dx)) * 2 + _m.log1p(len(gp)))

# ---------------------------------------------------------------- 3: literature rising, almost no trials
for (g, d) in sorted(pairs):
    pp = PP.get((g, d), []); tr = TT.get((g, d), [])
    r, e = n_window(pp, 2023, 2026), n_window(pp, 2019, 2022)
    if r >= 8 and r >= 1.5 * max(e, 1) and len(tr) <= 1:
        pre = [p for p in pp if p["ty"] == "preclinical"]
        add("momentum-no-trials", f"{g}:{d}", f"{TL.get(g, g)}{' in ' + dl(d) if d != '*' else ''}: literature rising, almost no trials",
            [f"{r} papers 2023-2026 against {e} in 2019-2022", f"{len(pre)} of the {len(pp)} papers are preclinical", f"{len(tr)} radiopharmaceutical trials registered"],
            {"papers": [p["id"] for p in recent_first(pp)][:10], "trials": [t["id"] for t in tr][:3], "abstracts": [a["id"] for a in recent_first(AA.get((g, d), []))][:6]},
            target=g, disease=d if d != "*" else None, score=_m.log1p(r) * 2 + (r / max(e, 1)))

GENERIC = _re.compile(r"-(?:FDG|NAF|PSMA|FAPI|DOTA|DOTATATE|DOTATOC|CHOLINE|FLT|FET|FES|MIBG|FDOPA|DOPA|PSMA-11|PSMA-617|PSMA-1007|FAPI-04|FAPI-46|DCFPYL|MDP|MAA|SESTAMIBI|MIBI|CITRATE|CHLORIDE|IODIDE|OCTREOTIDE|EXENDIN|PENTIXAFOR|DOTANOC|NANOCOLLOID|TETROFOSMIN|PYP|DTPA|DMSA|HMPAO|ECD|PIB|RACLOPRIDE|FLUORODEOXYGLUCOSE|FLUCICLOVINE|AMMONIA|WATER|ACETATE|METHIONINE)$")
# ---------------------------------------------------------------- 4: first-in-human since 2024
FIH = _c.defaultdict(list)
for p in papers:
    if p["ty"] == "first-in-human" and (p["y"] or 0) >= 2024:
        for g in p["tg"] or ["unassigned"]: FIH[g].append(("paper", p))
for a in abstracts:
    if a["ty"] == "first-in-human" and (a["y"] or 0) >= 2024:
        for g in a["tg"] or ["unassigned"]: FIH[g].append(("abstract", a))
for g, rows in sorted(FIH.items()):
    if g in FUNCTIONAL and len(rows) < 3: continue
    ags = _c.Counter(x for _, r in rows for x in r["ag"] if not GENERIC.search(x.upper())).most_common(6)
    add("first-in-human", g, f"New {TL.get(g, g)} agents entering humans" if g != "unassigned" else "First-in-human agents whose target is outside the tagged vocabulary (possible new targets)",
        [f"{len(rows)} first-in-human reports since 2024 ({sum(1 for k, _ in rows if k == 'paper')} papers, {sum(1 for k, _ in rows if k == 'abstract')} congress abstracts)"] +
        ([f"Agents named: {', '.join(a for a, _ in ags)}"] if ags else []),
        {"papers": [r["id"] for k, r in rows if k == "paper"][:10], "abstracts": [r["id"] for k, r in rows if k == "abstract"][:10]},
        target=None if g == "unassigned" else g, score=_m.log1p(len(rows)) * 3)

# ---------------------------------------------------------------- 5: ADC-validated targets with little radiopharmaceutical work
adc = _j.load(open(os.path.join(BASE, "adc_counts.json") if os.path.exists(os.path.join(BASE, "adc_counts.json")) else os.path.join(SCRIPTS, "adc_counts.json")))
for g, n in adc["counts"].items():
    if g in adc.get("ambiguous", []) or not n or n < 3: continue
    tr = TT.get((g, "*"), []); pp = PP.get((g, "*"), [])
    if len(tr) <= 3:
        add("adc-validated", g, f"{TL.get(g, g)}: validated by antibody-drug conjugates, barely explored with radionuclides",
            [f"{n} ClinicalTrials.gov studies mention an ADC against {TL.get(g, g)}", f"{len(tr)} radiopharmaceutical trials target it", f"{len(pp)} radiopharmaceutical papers ({n_recent(pp)} since 2023)"],
            {"trials": [t["id"] for t in tr][:6], "papers": [p["id"] for p in recent_first(pp)][:8], "abstracts": [a["id"] for a in recent_first(AA.get((g, "*"), []))][:6]},
            target=g, score=_m.log1p(n) * 2 - len(tr) * 0.3)

# ---------------------------------------------------------------- 6: unmet-need hotspots (disease x theme, target x disease)
DT = _c.defaultdict(list)
for i, gp in enumerate(gaps):
    for d in gp["ds"]:
        for th in gp["th"] or ["general"]: DT[(d, th)].append(i)
for (d, th), idx in sorted(DT.items()):
    if len(idx) < 15 or th == "general": continue
    tgs = _c.Counter(t for i in idx for t in gaps[i]["tg"] if t not in FUNCTIONAL).most_common(5)
    trd = [t for t in studied if d in t["ds"]]
    add("unmet-need", f"{d}:{th}", f"Unmet need in {dl(d)}: {th}",
        [f"{len(idx)} published statements of unmet need or limitation about {th} in {dl(d)}", f"{len(trd)} radiopharmaceutical trials in this indication"] +
        ([f"Targets named alongside: {', '.join(TL.get(t, t) for t, _ in tgs)}"] if tgs else []),
        {"gaps": sorted(idx, key=lambda i: -(gaps[i]["y"] or 0))[:12], "trials": [t["id"] for t in recent_first(trd)][:6]},
        disease=d, score=_m.log1p(len(idx)) * 2)
for (g, d), idx in GG.items():
    if g in ("*", "*none*") or d == "*" or g in FUNCTIONAL or len(idx) < 6: continue
    tr = TT.get((g, d), [])
    add("unmet-need", f"{g}:{d}", f"Unmet need around {TL.get(g, g)} in {dl(d)}",
        [f"{len(idx)} published unmet-need statements mention {TL.get(g, g)} in {dl(d)}", f"{len(tr)} radiopharmaceutical trials target it there"],
        {"gaps": sorted(idx, key=lambda i: -(gaps[i]["y"] or 0))[:12], "trials": [t["id"] for t in recent_first(tr)][:6]},
        target=g, disease=d, score=_m.log1p(len(idx)) * 2 - _m.log1p(len(tr)) * 0.6)

# ---------------------------------------------------------------- 7: approved abroad, never in the US
for a in agents:
    if not (a.get("notInUS") and a.get("activeRegions")): continue
    if _re.search(r"(?i)generator|precursor|chloride|pertechnetate|sodium iodide|citrate|kit/unspecified|colloid$", a["agent"]): continue
    # bare isotope names cannot be compared, and sealed sources / microspheres are US devices (CDRH), invisible to Drugs@FDA
    if " " not in a["agent"] or _re.search(r"(?i)microsphere|brachytherap|sealed|\bseeds?\b|plaque", a["agent"]): continue
    ids = [p["id"] for p in products if p["ag"] == a["agent"]]
    first = a.get("firstApproved")
    add("approved-abroad", a["agent"], f"Approved abroad, not in the US: {a['agent']}",
        [f"Active registrations in {', '.join(a['activeRegions'])}", f"First registration found: {first}" if first else "Registration date not stated by the source",
         f"Registered in {a['nRegions']} jurisdictions in total", "No FDA registration found for this agent in Drugs@FDA (openFDA)"],
        {"products": ids[:10]}, target=(a.get("tg") or [None])[0], iso=a.get("isotopes"), role=a.get("role"),
        regions=a["activeRegions"], score=1 + len(a["activeRegions"]) * 0.5)

# ---------------------------------------------------------------- 8: clinical work only in China
CN = _c.defaultdict(list); ELSE = _c.Counter()
for t in studied:
    only_cn = t["cc"] == ["China"]
    for g in t["tg"]:
        if only_cn: CN[g].append(t)
        elif t["cc"]: ELSE[g] += 1
for g, rows in CN.items():
    if len(rows) >= 3 and ELSE[g] <= 2 and g not in FUNCTIONAL:
        ags = _c.Counter(x for t in rows for x in labelled(t["ag"])).most_common(5)
        add("china-only", g, f"{TL.get(g, g)}: clinical programmes running only in China",
            [f"{len(rows)} radiopharmaceutical trials sited only in China", f"{ELSE[g]} trials elsewhere"] + ([f"Agents: {'; '.join(a for a, _ in ags)}"] if ags else []),
            {"trials": [t["id"] for t in recent_first(rows)][:10]}, target=g, regions=["CN"], score=_m.log1p(len(rows)) * 2)

# ---------------------------------------------------------------- 9: stalled for business reasons
BIZ = _re.compile(r"business|sponsor decision|funding|financ|strateg|portfolio|commercial|company decision|priorit|budget|acquisition|merger|licen", _re.I)
for t in trials:
    if t.get("st") in ("TERMINATED", "WITHDRAWN", "SUSPENDED") and t.get("why") and BIZ.search(t["why"]) and t["s"] and (t["iso"] or t.get("ag")):
        add("stalled", t["id"], f"Stopped for business reasons: {t['t'][:120]}",
            [f"Status {t['st'].lower()}; reason given: \"{t['why']}\"", f"Sponsor: {t['sp'] or 'not stated'}; phase {t['ph'] or 'not stated'}"],
            {"trials": [t["id"]]}, target=(t["tg"] or [None])[0], disease=(t["ds"] or [None])[0], iso=t["iso"], role=t["role"],
            score=1.5 + (0.5 if t.get("ph") and any(x in t["ph"] for x in "23") else 0))

# ---------------------------------------------------------------- 10: next-generation isotope x target, papers but no trials
IT = _c.defaultdict(list); ITT = _c.Counter()
for p in papers + abstracts:
    for i in p["iso"]:
        if i in NEXTGEN:
            for g in p["tg"]: IT[(i, g)].append(p)
for t in studied:
    for i in t["iso"]:
        for g in t["tg"]: ITT[(i, g)] += 1
for (i, g), rows in IT.items():
    if g in FUNCTIONAL or len(rows) < 4 or ITT[(i, g)] > 0: continue
    add("isotope-gap", f"{i}:{g}", f"{IL.get(i, i)} with {TL.get(g, g)}: published, never trialled",
        [f"{len(rows)} papers and congress abstracts pair {i} with {TL.get(g, g)} ({n_recent(rows)} since 2023)", f"No registered trial pairs {i} with {TL.get(g, g)}"],
        {"papers": [r["id"] for r in recent_first(rows) if "m" not in r][:8], "abstracts": [r["id"] for r in recent_first(rows) if "m" in r][:6]},
        target=g, iso=[i], role=cp.ISO[i][1] if i in cp.ISO else None, score=_m.log1p(len(rows)) * 2)

# ---------------------------------------------------------------- 11: patent momentum without trials
for g, rows in PT.items():
    r = n_window(rows, 2023, 2026); tr = TT.get((g, "*"), [])
    if g in FUNCTIONAL or r < 8 or len(tr) > 3: continue
    ass = _c.Counter(p["as"] for p in rows if p.get("as")).most_common(5)
    add("patent-momentum", g, f"{TL.get(g, g)}: patent filings rising, few trials",
        [f"{r} patent publications 2023-2026 ({len(rows)} since 2015)", f"{len(tr)} radiopharmaceutical trials"] + ([f"Top applicants: {'; '.join(a for a, _ in ass)}"] if ass else []),
        {"patents": [p["id"] for p in recent_first(rows)][:10], "trials": [t["id"] for t in tr][:4]}, target=g, score=_m.log1p(r) * 2)

# ---------------------------------------------------------------- 12: agent names first seen 2025-2026
FIRST = {}; MENT = _c.Counter(); SRC = _c.defaultdict(list)
for p in sorted(papers + abstracts, key=lambda r: r.get("y") or 0):
    for a in p["ag"]:
        k = a.upper()
        FIRST.setdefault(k, p.get("y") or 0); MENT[k] += 1; SRC[k].append(p)
for k, y in FIRST.items():
    rest = k.split("-", 1)[1] if "-" in k else ""
    if y >= 2025 and MENT[k] >= 2 and not GENERIC.search(k) and len(k) > 6 and (_re.search(r"\d", rest) or "-" in rest):
        rows = SRC[k]; tg = _c.Counter(t for r in rows for t in r["tg"]).most_common(1)
        add("new-agent", k, f"New agent in the literature: {k}", [f"First named in {y}; {MENT[k]} papers or congress abstracts since"],
            {"papers": [r["id"] for r in rows if "m" not in r][:8], "abstracts": [r["id"] for r in rows if "m" in r][:8]},
            target=tg[0][0] if tg else None, iso=sorted({i for r in rows for i in r["iso"]})[:3], score=_m.log1p(MENT[k]) * 2)

# ---------------------------------------------------------------- 13: only academic sponsors
for (g, d), tr in TT.items():
    if d != "*" or g in FUNCTIONAL or len(tr) < 5: continue
    ind = [t for t in tr if (t.get("sc") or "").upper() == "INDUSTRY" or "commercial" in (t.get("sc") or "").lower() or "pharmaceutical company" in (t.get("sc") or "").lower()]
    if not ind:
        sp = _c.Counter(t["sp"] for t in tr).most_common(5)
        add("academic-only", g, f"{TL.get(g, g)}: only academic sponsors so far",
            [f"{len(tr)} radiopharmaceutical trials, none industry-sponsored", f"Sponsors: {'; '.join(s for s, _ in sp)}"],
            {"trials": [t["id"] for t in recent_first(tr)][:10]}, target=g, score=_m.log1p(len(tr)) * 2)

# ---------------------------------------------------------------- 14: many unmet needs, few trials (by indication)
for d in DL:
    idx = GG.get(("*", d), []); trd = [t for t in studied if d in t["ds"]]
    if len(idx) >= 25 and len(trd) < len(idx) / 2:
        add("needs-vs-trials", d, f"{dl(d)}: many published unmet needs, few radiopharmaceutical trials",
            [f"{len(idx)} unmet-need statements against {len(trd)} registered radiopharmaceutical trials"],
            {"gaps": sorted(idx, key=lambda i: -(gaps[i]["y"] or 0))[:12], "trials": [t["id"] for t in recent_first(trd)][:6]}, disease=d,
            score=_m.log1p(len(idx)) * 2 - _m.log1p(len(trd)))


# ---------------------------------------------------------------- 15: indication expansion (target works in the clinic elsewhere, papers here, no trials here)
for (g, d), pp in PP.items():
    if d == "*" or g in FUNCTIONAL or d not in ONCO: continue
    th_all = [t for t in TT.get((g, "*"), []) if THER(t)]
    if len(th_all) < 5 or TT.get((g, d)) or len(pp) < 10: continue
    top = _c.Counter(x for t in th_all for x in t["ds"] if x != d).most_common(3)
    add("indication-expansion", f"{g}:{d}", f"Take {TL.get(g, g)} therapy into {dl(d)}",
        [f"{len(th_all)} radiopharmaceutical therapy trials target {TL.get(g, g)}, mostly in {', '.join(dl(x) for x, _ in top)}",
         f"{len(pp)} papers tag {TL.get(g, g)} in {dl(d)} ({n_recent(pp)} since 2023)", f"No registered radiopharmaceutical trial targets {TL.get(g, g)} in {dl(d)}"],
        {"papers": [p["id"] for p in recent_first(pp)][:10], "trials": [t["id"] for t in recent_first(th_all)][:6], "abstracts": [a["id"] for a in recent_first(AA.get((g, d), []))][:6]},
        target=g, disease=d, role="therapy", score=_m.log1p(len(pp)) * 1.5 + _m.log1p(len(th_all)))

# ---------------------------------------------------------------- 16: congress signal (2025-2026 abstracts, almost no trials)
for (g, d), aa in AA.items():
    if g in FUNCTIONAL: continue
    rec = [a for a in aa if (a["y"] or 0) >= 2025]
    tr = TT.get((g, d), [])
    if len(rec) >= 5 and len(tr) <= 1:
        add("congress-signal", f"{g}:{d}", f"{TL.get(g, g)}{' in ' + dl(d) if d != '*' else ''}: busy at congresses, almost no trials",
            [f"{len(rec)} congress abstracts in 2025-2026 ({', '.join(sorted({a['m'] for a in rec}))})", f"{len(tr)} radiopharmaceutical trials registered"],
            {"abstracts": [a["id"] for a in recent_first(rec)][:10], "trials": [t["id"] for t in tr][:3], "papers": [p["id"] for p in recent_first(PP.get((g, d), []))][:6]},
            target=g, disease=d if d != "*" else None, score=_m.log1p(len(rec)) * 2.2)

ideas.sort(key=lambda i: -i["score"])
print("ideas", len(ideas), dict(_c.Counter(i["lens"] for i in ideas)))

# ---------------------------------------------------------------- evidence dictionary: one short row per referenced id, so idea cards can list their evidence
def paper_url(i):
    k, v = i.split(":", 1)
    if k == "pmid": return f"https://europepmc.org/article/MED/{v}"
    if k == "doi": return f"https://doi.org/{v}"
    return f"https://europepmc.org/article/{k.upper()}/{v}"
_TI = {t["id"]: t for t in trials}; _PA = {p["id"]: p for p in papers}; _AB = {a["id"]: a for a in abstracts}; _PR = {p["id"]: p for p in products}; _PT = {p["id"]: p for p in patents}
refs = {}
for idea in ideas:
    for kind, ids in idea["ev"].items():
        for i in ids:
            if kind == "gaps":
                g = gaps[i]; key = f"g{i}"
                if key not in refs: refs[key] = [g["s"], g["y"], g["u"] or paper_url(g["id"]), g["t"], g["src"]]
                continue
            if i in refs: continue
            if kind == "trials" and i in _TI:
                t = _TI[i]; refs[i] = [t["t"][:130], t["y"], t.get("u") or f"https://clinicaltrials.gov/study/{i}", t["r"] + (f" · phase {t['ph']}" if t["ph"] else "") + (f" · {t['st'].lower().replace('_', ' ')}" if t["st"] else "")]
            elif kind == "papers" and i in _PA:
                p = _PA[i]; refs[i] = [p["t"][:130], p["y"], paper_url(i), p["j"]]
            elif kind == "abstracts" and i in _AB:
                a = _AB[i]; refs[i] = [a["t"][:130], a["y"], a["u"], a["m"]]
            elif kind == "products" and i in _PR:
                p = _PR[i]; refs[i] = [f"{p['b'] or p['i']} ({p['rg']})", int(p["a"][:4]) if p.get("a") and p["a"][:4].isdigit() else None, p["u"], p["reg"] or p["rg"]]
            elif kind == "patents" and i in _PT:
                p = _PT[i]; refs[i] = [p["t"][:130], p["y"], f"https://patents.google.com/patent/{i}/en", p["as"] or p["cc"]]
for idea in ideas:
    if "gaps" in idea["ev"]: idea["ev"]["gaps"] = [f"g{i}" for i in idea["ev"]["gaps"]]
ideas = {"ideas": ideas, "refs": refs}
