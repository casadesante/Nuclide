#!/usr/bin/env python3
import json, os, re, sys, collections
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), "lib"))
WORK = os.environ.get("UNIVERSE_WORK") or os.path.dirname(os.path.abspath(__file__))  # data directory (inputs + outputs)
from rpvocab import ISO, ISO_RE, isotopes_in, targets_in, diseases_in, role_of, CLASS_RE

AGENT_WORDS = re.compile(r"psma|dotatate|dotatoc|dotanoc|fapi|pentixafor|fluciclovine|piflufolastat|flotufolastat|gozetotide|vipivotide|oxodotreotide|edotreotide|satoreotide|florbetapir|flutemetamol|florbetaben|flortaucipir|ioflupane|iobenguane|mibg|ibritumomab|tilmanocept|sestamibi|tetrofosmin|flurpiridaz|fluoroestradiol|fluorodopa|girentuximab|lilotomab|apamistamab|omburtamab|iopofosine|pentetreotide|exametazime|bicisate|mertiatide|medronate|technegas|fludeoxyglucose|\bfdg\b|choline|radioligand|radiopharmaceutical|radionuclide|radiotracer|radiolabel|radioimmuno|radioemboli|\bsirt\b|\bprrt\b|theranostic|radioiodine|radioactive iodine|sir-?spheres|therasphere|xofigo|pluvicto|lutathera|locametz|illuccix|pylarify|posluma|axumin|netspot|detectnet|cerianna|amyvid|vizamyl|neuraceq|tauvid|datscan|azedra|zevalin|lymphoseek|flyrcado|zircaix|gozellix|octreoscan|quadramet|metastron|cardiolite|myoview", re.I)

def iso_norm(name):
    s = name
    for k, (disp, role, rx) in ISO.items():
        s = re.sub(rx, " " + k + " ", s, flags=re.I)
    s = re.sub(r"[\[\]\(\)®™]", " ", s)
    s = re.sub(r"\s+", " ", s).strip()
    return s

def canon(name):
    n = iso_norm(name).lower()
    n = re.sub(r"\b(injection|kit for|kit|for injection|pet/ct|pet-ct|pet/mri|pet|spect/ct|spect|scan|imaging|intravenous|iv|solution|drug|diagnostic test|procedure|radiation)\b", " ", n)
    n = re.sub(r"[^a-z0-9]+", "", n)
    return n

src = os.path.join(WORK, "raw/ctgov.jsonl")
out = []
reject = collections.Counter()
for line in open(src):
    s = json.loads(line)
    p = s["protocolSection"]
    idm = p.get("identificationModule", {}); st = p.get("statusModule", {}); de = p.get("designModule", {})
    arms = p.get("armsInterventionsModule", {}); cond = p.get("conditionsModule", {}); sp = p.get("sponsorCollaboratorsModule", {})
    desc = p.get("descriptionModule", {}); loc = p.get("contactsLocationsModule", {}); outc = p.get("outcomesModule", {})
    ivs = arms.get("interventions", []) or []
    title = (idm.get("briefTitle") or "") + " " + (idm.get("officialTitle") or "")
    agents, studied = [], False
    iv_text_all = []
    for iv in ivs:
        names = [iv.get("name") or ""] + (iv.get("otherNames") or [])
        dsc = iv.get("description") or ""
        nm_text = " | ".join(names)
        iv_text_all.append(nm_text + " " + dsc)
        isos_nm = isotopes_in(nm_text)
        agent_hit = bool(AGENT_WORDS.search(nm_text))
        if isos_nm or agent_hit:
            studied = studied or iv.get("type") in ("DRUG", "BIOLOGICAL", "RADIATION", "COMBINATION_PRODUCT", "DIAGNOSTIC_TEST", "DEVICE", "OTHER", "PROCEDURE")
            agents.append({"name": (iv.get("name") or "").strip()[:140], "type": iv.get("type"), "isotopes": isos_nm, "other": [o[:80] for o in (iv.get("otherNames") or [])][:4]})
    iv_text = " ".join(iv_text_all)
    isos = isotopes_in(iv_text) if agents else isotopes_in(iv_text) if (AGENT_WORDS.search(iv_text) or CLASS_RE.search(iv_text)) else []
    title_isos = isotopes_in(title)
    if not agents and not isos:
        if title_isos and (AGENT_WORDS.search(title) or CLASS_RE.search(title)):
            isos = title_isos
        else:
            reject["no radiopharmaceutical signature"] += 1
            continue
    all_isos = sorted(set(isos) | set(i for a in agents for i in a["isotopes"]) | set(title_isos if agents else []))
    # targets come from the radioactive agents only, never from co-administered drugs (rituximab next to an FDG scan is not a CD20 tracer)
    agent_desc = " ".join((iv.get("description") or "")[:400] for iv in ivs if any(a["name"] == (iv.get("name") or "").strip()[:140] for a in agents))
    text_for_targets = " ".join(a["name"] + " " + " ".join(a["other"]) for a in agents) + " " + (title if title_isos else "") + " " + (agent_desc if agents else iv_text)
    tgts = targets_in(text_for_targets)
    conds = cond.get("conditions", []) or []
    dis = diseases_in(" ; ".join(conds) + " ; " + title)
    countries = sorted({l.get("country") for l in (loc.get("locations") or []) if l.get("country")})
    rec = {
      "id": idm.get("nctId"), "title": (idm.get("briefTitle") or "")[:300], "acronym": idm.get("acronym"),
      "status": st.get("overallStatus"), "phase": "/".join(de.get("phases") or []) or None, "type": de.get("studyType"),
      "purpose": (de.get("designInfo") or {}).get("primaryPurpose"),
      "start": (st.get("startDateStruct") or {}).get("date"), "primaryCompletion": (st.get("primaryCompletionDateStruct") or {}).get("date"),
      "firstPosted": (st.get("studyFirstPostDateStruct") or {}).get("date"), "lastUpdate": (st.get("lastUpdatePostDateStruct") or {}).get("date"),
      "whyStopped": st.get("whyStopped"),
      "enrolment": (de.get("enrollmentInfo") or {}).get("count"),
      "sponsor": (sp.get("leadSponsor") or {}).get("name"), "sponsorClass": (sp.get("leadSponsor") or {}).get("class"),
      "collaborators": [c.get("name") for c in (sp.get("collaborators") or [])][:6],
      "countries": countries, "conditions": conds[:8], "keywords": (cond.get("keywords") or [])[:8],
      "agents": agents[:6], "isotopes": all_isos, "role": role_of(all_isos), "studied": studied,
      "targets": tgts, "diseases": dis, "hasResults": s.get("hasResults", False),
      "otherIds": [x.get("id") for x in (idm.get("secondaryIdInfos") or []) if x.get("id")][:5],
      "summary": (desc.get("briefSummary") or "")[:600],
      "primaryOutcome": [(o.get("measure") or "")[:160] for o in (outc.get("primaryOutcomes") or [])][:2],
      "url": "https://clinicaltrials.gov/study/" + idm.get("nctId"),
    }
    out.append(rec)
json.dump(out, open(os.path.join(WORK, "trials_ctgov.json"), "w"))
print("kept", len(out), "rejected", dict(reject))
c = collections.Counter(); r = collections.Counter(); t = collections.Counter(); d = collections.Counter()
for x in out:
    for i in x["isotopes"]: c[i] += 1
    r[x["role"]] += 1
    for i in x["targets"]: t[i] += 1
    for i in x["diseases"]: d[i] += 1
print("roles", dict(r))
print("isotopes", c.most_common(45))
print("targets", t.most_common(60))
print("diseases", d.most_common(40))
print("studied", sum(1 for x in out if x["studied"]))
