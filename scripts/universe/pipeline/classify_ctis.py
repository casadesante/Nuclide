#!/usr/bin/env python3
"""Classify the whole EU Clinical Trials Information System register (12,471 trials, two sort passes merged)
into the radiopharmaceutical set, with the same tags as the ClinicalTrials.gov set. Output trials_ctis.json."""
import json, os, re, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import classify_papers as cp

BASE = os.environ.get("UNIVERSE_WORK") or os.path.dirname(os.path.abspath(__file__))
SUP = str.maketrans("⁰¹²³⁴⁵⁶⁷⁸⁹", "0123456789")
BRANDS = re.compile(r"pluvicto|lutathera|locametz|illuccix|gozellix|xofigo|netspot|axumin|pylarify|posluma|amyvid|vizamyl|neuraceq|datscan|"
                    r"cardiolite|myoview|lymphoseek|octreoscan|zevalin|azedra|detectnet|cerianna|tauvid|sestamibi|tetrofosmin|somakit|ga-?68|"
                    r"iomab|zircaix|tlx\d{3}|fapi|pentixafor|dotatate|dotatoc|psma-?617|psma-?11|psma i&t|vipivotid|gozetotid|edotreotid|oxodotreotid|"
                    r"fluciclovine|piflufolastat|flotufolastat|fluorodopa|fdopa|fluoroestradiol|flortaucipir|florbetapir|florbetaben|flutemetamol|"
                    r"ioflupane|iobenguane|mibg|radium|radioiodine|radioactive iodine|sirt|selective internal radiation|therasphere|sir-?spheres|"
                    r"quiremspheres|scintigraph|\bpet\b|\bspect\b|pet/ct|pet-ct|pet/mri?", re.I)
PHASE = {"Phase I": "PHASE1", "Phase II": "PHASE2", "Phase III": "PHASE3", "Phase IV": "PHASE4"}
STATUS = {1: "Under evaluation", 2: "Authorised, recruitment pending", 3: "Authorised, recruiting", 4: "Ongoing, recruitment ended",
          5: "Temporarily halted", 6: "Suspended", 7: "Ended", 8: "Expired", 9: "Revoked", 10: "Not authorised", 11: "Cancelled"}

recs = {}
for f in ["raw/ctis_all.jsonl", "raw/ctis_all_asc.jsonl"]:
    for line in open(os.path.join(BASE, f)):
        r = json.loads(line); recs[r["ctNumber"]] = r

out = []
for ct, r in recs.items():
    agent_text = f"{r.get('product') or ''}".translate(SUP)
    text = f"{r.get('ctTitle') or ''} {r.get('shortTitle') or ''} {agent_text}".translate(SUP)
    isos = cp.isotopes(text)
    cls = cp.CLASS.search(text)
    brand = BRANDS.search(agent_text) or BRANDS.search(r.get("ctTitle") or "")
    if not (isos or cls or brand): continue
    # a bare PET/SPECT mention in the title with no isotope or agent is imaging-as-endpoint, not a radiopharmaceutical trial
    studied = bool(cp.isotopes(agent_text) or cp.CLASS.search(agent_text) or re.search(r"tracer|kit for radiopharm|zr-dfo|girentuximab", agent_text, re.I) or
                   (brand and brand.re.search(agent_text) and not re.fullmatch(r"(?i)pet|spect|pet/ct|pet-ct|pet/mri?", BRANDS.search(agent_text).group(0))) or
                   re.search(r"radionuclide therap|radioligand therap|radioemboli[sz]ation|radioimmunotherap|\bprrt\b|targeted alpha|radiosynovectomy|"
                             r"radiotracer|pet tracer|radiopharmaceutical|radioiodine|radioactive iodine|selective internal radiation|radioligand|fapi|exendin|"
                             r"(?:pet|spect)(?:/ct)? imaging of|tracer|girentuximab|\\bsirt\\b|psma|dotatate|dotatoc|pentixafor|zr-|cu-|ga-", r.get("ctTitle") or "", re.I) or
                   cp.isotopes((r.get("ctTitle") or "").translate(SUP)))
    if not studied and not cls: continue
    roles = {cp.ISO[i][1] for i in isos}
    role = "theranostic" if roles == {"therapy", "diagnostic"} else ("therapy" if roles == {"therapy"} else ("diagnostic" if roles == {"diagnostic"} else "unknown"))
    ph = [v for k, v in PHASE.items() if re.search(rf"\({k}\)", r.get("trialPhase") or "")]
    dd = (r.get("decisionDateOverall") or "")
    iso_date = f"{dd[6:10]}-{dd[3:5]}-{dd[0:2]}" if re.fullmatch(r"\d\d/\d\d/\d{4}", dd) else None
    out.append({
        "id": ct, "registry": "CTIS", "title": r.get("ctTitle"), "acronym": r.get("shortTitle"),
        "status": STATUS.get(r.get("ctStatus"), str(r.get("ctStatus"))), "phase": ph, "phaseText": r.get("trialPhase"),
        "decision": iso_date, "lastUpdate": r.get("lastUpdated"), "sponsor": r.get("sponsor"), "sponsorClass": r.get("sponsorType"),
        "countries": sorted({c.split(":")[0] for c in (r.get("trialCountries") or [])}), "conditions": r.get("conditions"),
        "products": r.get("product"), "isotopes": isos, "role": role, "studied": studied,
        "targets": cp.targets(text), "diseases": cp.diseases(f"{r.get('conditions') or ''} {r.get('ctTitle') or ''}"),
        "enrolment": r.get("totalNumberEnrolled"), "primaryEndpoint": (r.get("primaryEndPoint") or "")[:400],
        "hasResults": r.get("resultsFirstReceived") == "Yes",
        "url": f"https://euclinicaltrials.eu/search-for-clinical-trials/?lang=en&EUCT={ct}"})
json.dump(out, open(os.path.join(BASE, "trials_ctis.json"), "w"), ensure_ascii=False, separators=(",", ":"))
import collections
print("register", len(recs), "kept", len(out), "studied", sum(x["studied"] for x in out))
print(collections.Counter(x["role"] for x in out))
print(collections.Counter(i for x in out for i in x["isotopes"]).most_common(15))
print(collections.Counter(t for x in out for t in x["targets"]).most_common(15))
