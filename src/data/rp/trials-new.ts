import type { EntityInput } from "@/lib/schema";

export const newTrials: EntityInput[] = [
  {
    id: "zircon",
    kind: "trial",
    name: "ZIRCON",
    aka: ["89Zr-girentuximab phase 3 trial"],
    phase: "3",
    setting:
      "Adults with a single indeterminate renal mass (cT1, up to 7 cm) suspicious for clear cell renal cell carcinoma, scheduled for nephrectomy; a diagnostic (imaging) trial, not a treatment line",
    nct: "NCT03849118",
    sponsor: "Telix Pharmaceuticals",
    status: "completed",
    enrolled: 300,
    yearReported: 2024,
    result:
      "Met both co-primary endpoints: mean sensitivity 85.5% (95% CI 81.5-89.6) and mean specificity 87.0% (95% CI 81.0-93.1) for detecting clear cell renal cell carcinoma by 89Zr-girentuximab PET-CT against blinded central histopathology (Shuch et al., Lancet Oncology 2024)",
    outcomes: [
      {
        endpoint: "Sensitivity for ccRCC detection vs surgical histopathology",
        primary: true,
        unit: "%",
        arms: [{ name: "89Zr-girentuximab PET-CT", n: 284, value: 85.5, note: "95% CI 81.5-89.6, mean of 3 independent readers" }],
        source: "https://pubmed.ncbi.nlm.nih.gov/39270701/",
      },
      {
        endpoint: "Specificity for ccRCC detection vs surgical histopathology",
        primary: true,
        unit: "%",
        arms: [{ name: "89Zr-girentuximab PET-CT", n: 284, value: 87.0, note: "95% CI 81.0-93.1, mean of 3 independent readers" }],
        source: "https://pubmed.ncbi.nlm.nih.gov/39270701/",
      },
    ],
    tldr:
      "A single PET scan with a radioactive antibody (89Zr-girentuximab, brand TLX250-CDx) can tell whether an unexplained kidney lump is a clear cell kidney cancer before surgery, so some patients might be spared an unnecessary biopsy or operation.",
    summary:
      "ZIRCON was a prospective, open-label, multicentre phase 3 trial across 36 sites in nine countries that evaluated [89Zr]Zr-girentuximab PET-CT, a radiolabelled monoclonal antibody targeting carbonic anhydrase IX (CAIX), in patients with an indeterminate renal mass (cT1, up to 7 cm) scheduled for nephrectomy. Patients received a single dose (37 MBq, 10 mg girentuximab) five days before abdominal PET-CT, and blinded central histopathology from the resected specimen served as the reference standard.\n\nOf 371 patients screened, 300 received the tracer and 284 were evaluable for the primary analysis. Mean sensitivity was 85.5% and mean specificity was 87.0%, both exceeding the prespecified thresholds for all three independent readers; performance was maintained in the cT1a (up to 4 cm) subgroup. Safety was favourable, with most adverse events attributable to the subsequent surgery rather than the tracer.\n\nThe result supports use of CAIX PET as a non-invasive complement to cross-sectional imaging for risk-stratifying small renal masses, potentially reducing biopsies and overtreatment of benign lesions. TLX250-CDx has not yet received FDA or EMA marketing approval as of this record's date; ZIRCON is the pivotal trial underpinning that filing.",
    asOf: "2026-09-22",
    links: [
      {
        label: "Lancet Oncology 2024: ZIRCON primary results (Shuch et al.)",
        url: "https://pubmed.ncbi.nlm.nih.gov/39270701/",
      },
      {
        label: "ClinicalTrials.gov: NCT03849118",
        url: "https://clinicaltrials.gov/study/NCT03849118",
      },
    ],
    related: ["girentuximab-zr89", "caix-pet", "rcc", "telix"],
    tags: ["diagnostic trial", "renal cell carcinoma", "immuno-PET"],
  },
  {
    id: "lighthouse",
    kind: "trial",
    name: "LIGHTHOUSE",
    aka: ["18F-rhPSMA-7.3 newly diagnosed prostate cancer trial"],
    phase: "3",
    setting:
      "Men with newly diagnosed, treatment-naive unfavourable intermediate- to very-high-risk prostate cancer planned for radical prostatectomy with pelvic lymph node dissection; a staging (diagnostic) trial",
    nct: "NCT04186819",
    sponsor: "Blue Earth Diagnostics",
    status: "completed",
    enrolled: 356,
    yearReported: 2023,
    result:
      "Specificity for pelvic lymph node metastases met the pre-specified threshold (93-97% across readers) but sensitivity did not (23-30%); the agent additionally identified distant (M1) lesions, later verified true-positive in 10-15% of men (Eur Urol 2023; ASCO GU 2023)",
    outcomes: [
      {
        endpoint: "Sensitivity for pelvic lymph node metastases vs histopathology at prostatectomy",
        primary: true,
        unit: "%",
        arms: [{ name: "18F-flotufolastat (rhPSMA-7.3) PET-CT", n: 296, value: 27, note: "range 23-30% across 3 readers; did not meet the 22.5% lower-CI threshold for 2 of 3 readers" }],
        source: "https://pubmed.ncbi.nlm.nih.gov/37414702/",
      },
      {
        endpoint: "Specificity for pelvic lymph node metastases vs histopathology at prostatectomy",
        primary: true,
        unit: "%",
        arms: [{ name: "18F-flotufolastat (rhPSMA-7.3) PET-CT", n: 296, value: 95, note: "range 93-97% across 3 readers, exceeding the 82.5% pre-specified threshold" }],
        source: "https://pubmed.ncbi.nlm.nih.gov/37414702/",
      },
      {
        endpoint: "Verified detection rate of distant (M1) lesions",
        unit: "%",
        arms: [{ name: "18F-flotufolastat PET-CT, verified by biopsy or confirmatory imaging", n: 335, value: 12, note: "range 10-15%; highest in bone (6.0-11%)" }],
      },
    ],
    tldr:
      "A PET scan using a PSMA-targeting tracer (later approved as Posluma) was tested in men newly diagnosed with high-risk prostate cancer to see how well it spots cancer that has already spread to lymph nodes or elsewhere in the body before surgery.",
    summary:
      "LIGHTHOUSE was a phase 3, prospective, multicentre, single-arm imaging trial of 18F-rhPSMA-7.3 (later named flotufolastat F-18, brand Posluma) in men with newly diagnosed unfavourable intermediate- to very-high-risk prostate cancer planned for radical prostatectomy with pelvic lymph node dissection. The co-primary endpoints were patient-level sensitivity and specificity for pelvic lymph node metastases, using histopathology at lymphadenectomy as the reference standard, evaluated by three blinded independent readers.\n\nOf 356 enrolled patients, 296 formed the efficacy analysis population. Specificity was high (93-97%) and met the pre-specified threshold for all readers, but sensitivity (23-30%) fell short of the statistical bar, consistent with the modest nodal sensitivity typical of PSMA PET tracers as a class. A separate analysis of extrapelvic (M1) findings, reported at ASCO GU 2023, found a verified detection rate of 10-15% among 335 men, concentrated in bone. No serious adverse events were observed.\n\nLIGHTHOUSE, alongside the companion SPOTLIGHT trial in biochemical recurrence, formed the basis of the FDA approval of flotufolastat F-18 (Posluma) for PSMA PET imaging in both newly diagnosed unfavourable-risk and recurrent prostate cancer.",
    asOf: "2026-09-22",
    links: [
      {
        label: "European Urology 2023: LIGHTHOUSE primary results",
        url: "https://pubmed.ncbi.nlm.nih.gov/37414702/",
      },
      {
        label: "ClinicalTrials.gov: NCT04186819",
        url: "https://clinicaltrials.gov/study/NCT04186819",
      },
      {
        label: "Blue Earth Diagnostics: LIGHTHOUSE topline results announcement",
        url: "https://www.itnonline.com/content/blue-earth-diagnostics-announces-efficacy-and-safety-results-phase-3-lighthouse-trial",
      },
    ],
    related: ["flotufolastat", "psma-pet", "prostate-high-risk", "blue-earth-diagnostics", "spotlight"],
    tags: ["diagnostic trial", "prostate cancer", "staging"],
  },
  {
    id: "spotlight",
    kind: "trial",
    name: "SPOTLIGHT",
    aka: ["18F-rhPSMA-7.3 biochemical recurrence trial"],
    phase: "3",
    setting:
      "Men with biochemical recurrence of prostate cancer after prior curative-intent treatment, being considered for salvage therapy; a diagnostic (imaging) trial",
    nct: "NCT04186845",
    sponsor: "Blue Earth Diagnostics",
    status: "completed",
    enrolled: 391,
    yearReported: 2023,
    result:
      "Overall detection rate 83% by majority read; verified detection rate against a composite standard of truth was 51-54% across readers, meeting the pre-specified threshold, though combined region-level positive predictive value (46-60%) did not (Jani et al., J Urol 2023)",
    outcomes: [
      {
        endpoint: "Verified detection rate vs composite standard of truth (histopathology or confirmatory imaging)",
        primary: true,
        unit: "%",
        arms: [{ name: "18F-flotufolastat (rhPSMA-7.3) PET-CT", n: 366, value: 52, note: "range 51-54% across 3 readers, exceeding the pre-specified threshold" }],
        source: "https://pubmed.ncbi.nlm.nih.gov/37126069/",
      },
      {
        endpoint: "Region-level positive predictive value",
        primary: true,
        unit: "%",
        arms: [{ name: "18F-flotufolastat PET-CT", n: 366, value: 53, note: "range 46-60% across readers; did not meet the pre-specified threshold" }],
        source: "https://pubmed.ncbi.nlm.nih.gov/37126069/",
      },
      {
        endpoint: "Overall detection rate, all evaluable scans",
        unit: "%",
        arms: [{ name: "18F-flotufolastat PET-CT", n: 389, value: 83, note: "rising from 64% at PSA below 0.5 ng/mL to 100% at higher PSA" }],
      },
    ],
    tldr:
      "A PET scan (the tracer later approved as Posluma) was tested in men whose PSA rose again after treatment for prostate cancer, to see how often it can find exactly where the cancer has come back.",
    summary:
      "SPOTLIGHT was a phase 3, prospective, multicentre, open-label, single-arm imaging trial of 18F-rhPSMA-7.3 (flotufolastat F-18, brand Posluma) in men with biochemically recurrent prostate cancer being considered for salvage therapy. Co-primary endpoints were patient-level verified detection rate and region-level positive predictive value against a composite standard of truth (histopathology where available, otherwise confirmatory imaging).\n\nOf 420 men consented, 391 received the tracer and 389 had an evaluable scan. The overall detection rate was 83%, rising from 64% at PSA below 0.5 ng/mL to 100% at higher PSA levels. The verified detection rate (51-54%) met its pre-specified threshold, but the region-level positive predictive value narrowly missed its bar when judged against the composite standard of truth; both endpoints were comfortably met in the subset with histopathology confirmation only (detection rate 81%, PPV 72%). No serious adverse events were attributed to the tracer.\n\nSPOTLIGHT and the companion LIGHTHOUSE trial in newly diagnosed disease together supported FDA approval of flotufolastat F-18 (Posluma). Post-hoc analyses have since reported performance in patients with low PSA, negative baseline conventional imaging, and in African American men.",
    asOf: "2026-09-22",
    links: [
      {
        label: "Journal of Urology 2023: SPOTLIGHT primary results (Jani et al.)",
        url: "https://pubmed.ncbi.nlm.nih.gov/37126069/",
      },
      {
        label: "ClinicalTrials.gov: NCT04186845",
        url: "https://clinicaltrials.gov/study/NCT04186845",
      },
    ],
    related: ["flotufolastat", "psma-pet", "prostate-bcr", "blue-earth-diagnostics", "lighthouse"],
    tags: ["diagnostic trial", "prostate cancer", "biochemical recurrence"],
  },
  {
    id: "condor",
    kind: "trial",
    name: "CONDOR",
    aka: ["18F-DCFPyL biochemical recurrence trial"],
    phase: "3",
    setting:
      "Men with biochemically recurrent prostate cancer after radical prostatectomy or radiotherapy, with negative or equivocal conventional imaging; a diagnostic (imaging) trial",
    nct: "NCT03739684",
    sponsor: "Progenics Pharmaceuticals",
    status: "completed",
    enrolled: 208,
    yearReported: 2021,
    result:
      "Correct localisation rate 84.8-87.0% across three readers, meeting the primary endpoint; 63.9% of patients had a change in intended management after the scan (Morris et al., Clinical Cancer Research 2021)",
    outcomes: [
      {
        endpoint: "Correct localisation rate vs composite standard of truth",
        primary: true,
        unit: "%",
        arms: [{ name: "18F-DCFPyL (piflufolastat F-18) PET-CT", n: 208, value: 86, note: "range 84.8-87.0% across 3 readers (lower bound of 95% CI 77.8-80.4%), meeting the pre-specified >20% threshold" }],
        source: "https://pubmed.ncbi.nlm.nih.gov/33622706/",
      },
      {
        endpoint: "Change in intended patient management",
        unit: "%",
        arms: [{ name: "18F-DCFPyL PET-CT", value: 63.9, note: "proportion of evaluable patients with a management change after the scan" }],
      },
    ],
    tldr:
      "A PET scan using a PSMA tracer (piflufolastat F-18, brand Pylarify) was tested in men whose prostate cancer PSA had risen again but standard scans could not find where, to see how reliably it could locate the recurrence.",
    summary:
      "CONDOR was a phase 3, prospective, multicentre, open-label, single-arm trial of 18F-DCFPyL (piflufolastat F-18, brand Pylarify) in men with biochemically recurrent prostate cancer and negative or equivocal conventional imaging (CT, MRI, bone scan, or fluciclovine/choline PET). It followed the earlier phase 2/3 OSPREY trial. The primary endpoint was correct localisation rate (CLR): positive predictive value plus a requirement that the PET-positive lesion anatomically co-localised with a composite standard of truth (histopathology, correlative imaging, or post-radiotherapy PSA response).\n\nOf 208 men enrolled (median PSA 0.8 ng/mL), the CLR was 84.8-87.0% across three independent readers, comfortably exceeding the pre-specified threshold, and performance was maintained across all three standard-of-truth categories. 18F-DCFPyL detected at least one lesion in 59-66% of patients, and the scan changed the intended management plan in 63.9% of evaluable patients, most often a shift to targeted radiotherapy.\n\nCONDOR, together with OSPREY, formed the basis of the May 2021 FDA approval of piflufolastat F-18 (Pylarify) for PSMA PET imaging in both initial high-risk staging and biochemical recurrence, one of the tracers that established PSMA PET as standard practice ahead of the confirmatory proPSMA trial.",
    asOf: "2026-09-22",
    links: [
      {
        label: "Clinical Cancer Research 2021: CONDOR primary results (Morris et al.)",
        url: "https://pubmed.ncbi.nlm.nih.gov/33622706/",
      },
      {
        label: "ClinicalTrials.gov: NCT03739684",
        url: "https://clinicaltrials.gov/study/NCT03739684",
      },
    ],
    related: ["pylarify", "psma-pet", "prostate-bcr", "osprey"],
    tags: ["diagnostic trial", "prostate cancer", "biochemical recurrence"],
  },
  {
    id: "osprey",
    kind: "trial",
    name: "OSPREY",
    aka: ["18F-DCFPyL staging and recurrence trial"],
    phase: "2/3",
    setting:
      "Cohort A: men with high-risk prostate cancer planned for radical prostatectomy with lymphadenectomy (initial staging). Cohort B: men with suspected recurrent or metastatic prostate cancer feasible for biopsy",
    nct: "NCT02981368",
    sponsor: "Progenics Pharmaceuticals",
    status: "completed",
    enrolled: 385,
    yearReported: 2021,
    result:
      "Cohort A: specificity 97.9% met the primary endpoint but sensitivity 40.3% did not; Cohort B: sensitivity 95.8% and PPV 81.9% for extraprostatic lesions (Pienta et al., J Urol 2021)",
    outcomes: [
      {
        endpoint: "Specificity for pelvic nodal disease, Cohort A, vs histopathology at prostatectomy",
        primary: true,
        unit: "%",
        arms: [{ name: "18F-DCFPyL PET-CT", n: 252, value: 97.9, note: "median 95% CI 94.5-99.4% across 3 readers, meeting the pre-specified threshold" }],
        source: "https://pubmed.ncbi.nlm.nih.gov/33634707/",
      },
      {
        endpoint: "Sensitivity for pelvic nodal disease, Cohort A, vs histopathology",
        primary: true,
        unit: "%",
        arms: [{ name: "18F-DCFPyL PET-CT", n: 252, value: 40.3, note: "median 95% CI 28.1-52.5%; did not meet the pre-specified threshold" }],
        source: "https://pubmed.ncbi.nlm.nih.gov/33634707/",
      },
      {
        endpoint: "Sensitivity for extraprostatic lesions, Cohort B, vs biopsy",
        unit: "%",
        arms: [{ name: "18F-DCFPyL PET-CT", n: 93, value: 95.8, note: "median 95% CI 87.8-99.0%; PPV 81.9%" }],
      },
    ],
    tldr:
      "An earlier study of the same PSMA PET scan later branded Pylarify, testing how well it detects lymph node spread before surgery in high-risk prostate cancer, and how well it confirms recurrent or spreading disease when a biopsy is possible.",
    summary:
      "OSPREY was a prospective, multicentre phase 2/3 trial of 18F-DCFPyL (piflufolastat F-18, brand Pylarify) with two cohorts. Cohort A (252 evaluable patients) evaluated sensitivity and specificity for pelvic lymph node metastases in men with high-risk prostate cancer planned for prostatectomy with lymphadenectomy, using surgical histopathology as the reference. Cohort B (93 evaluable patients) evaluated sensitivity and positive predictive value for detecting prostate cancer at sites of suspected recurrence or metastasis, verified by biopsy.\n\nIn Cohort A, specificity (97.9%) met its pre-specified threshold but sensitivity (40.3%) did not, a pattern later echoed in LIGHTHOUSE and consistent with the difficulty PSMA PET has detecting small-volume nodal disease. In Cohort B, sensitivity (95.8%) and positive predictive value (81.9%) for extraprostatic lesions were high. The tracer was well tolerated, with drug-related adverse events in 7.0% of patients.\n\nOSPREY was the earlier of the two pivotal trials (with CONDOR) supporting the May 2021 FDA approval of piflufolastat F-18 (Pylarify).",
    asOf: "2026-09-22",
    links: [
      {
        label: "J Urol 2021: OSPREY primary results (Pienta et al.)",
        url: "https://pubmed.ncbi.nlm.nih.gov/33634707/",
      },
      {
        label: "ClinicalTrials.gov: NCT02981368",
        url: "https://clinicaltrials.gov/study/NCT02981368",
      },
    ],
    related: ["pylarify", "psma-pet", "prostate-high-risk", "condor"],
    tags: ["diagnostic trial", "prostate cancer", "staging"],
  },
  {
    id: "falcon",
    kind: "trial",
    name: "FALCON",
    aka: ["18F-fluciclovine biochemical recurrence management trial"],
    phase: "3",
    setting:
      "Men with a first episode of biochemical recurrence of prostate cancer after curative-intent primary therapy, being considered for salvage therapy; a diagnostic (management-impact) trial",
    nct: "NCT02578940",
    sponsor: "Blue Earth Diagnostics",
    status: "completed",
    enrolled: 104,
    yearReported: 2019,
    result:
      "64% (66/104) of patients had a management plan change after 18F-fluciclovine PET-CT, 65% of those major (e.g. a switch in treatment modality); lesions were detected in 56% of scans (Scarsbrook et al., Int J Radiat Oncol Biol Phys 2020)",
    outcomes: [
      {
        endpoint: "Proportion of patients with a revised management plan (pre-scan vs post-scan)",
        primary: true,
        unit: "%",
        arms: [{ name: "18F-fluciclovine PET-CT", n: 104, value: 64, note: "66/104; recruitment stopped early for overwhelming efficacy at a planned interim analysis" }],
        source: "https://pubmed.ncbi.nlm.nih.gov/32068113/",
      },
      {
        endpoint: "Detection rate",
        unit: "%",
        arms: [{ name: "18F-fluciclovine PET-CT", n: 104, value: 56, note: "58/104 patients had at least one avid lesion; 93% of scans positive at PSA >2.0 ng/mL" }],
      },
    ],
    tldr:
      "A PET scan using the tracer fluciclovine (brand Axumin) was tested in UK men whose prostate cancer PSA had risen again, to see how often the scan changed the treatment doctors planned to give.",
    summary:
      "FALCON was a UK-based, prospective, multicentre, open-label phase 3 trial of 18F-fluciclovine PET-CT (Axumin) jointly funded by Innovate UK and Blue Earth Diagnostics, run across six NHS sites. It enrolled men with a first episode of biochemical recurrence after curative-intent therapy who were being considered for salvage treatment. The primary endpoint was the proportion of patients whose documented management plan changed after the scan, comparing pre-scan and post-scan plans recorded by treating clinicians.\n\nAmong 104 scanned patients (median PSA 0.79 ng/mL), lesions were detected in 56%, with detection rising with PSA. A management change occurred in 64% (66/104) of patients, 65% of these classed as major (a change in treatment modality, such as salvage or systemic therapy to watchful waiting, or vice versa); the remainder were adjustments within a modality, commonly a fluciclovine-guided radiotherapy boost. A pre-planned interim analysis stopped recruitment early on efficacy grounds. A related secondary analysis found that outcomes tended to be better when salvage therapy was guided by a positive scan.\n\nFALCON, alongside the US LOCATE trial, supported the clinical adoption of fluciclovine PET for biochemical recurrence, and its subgroup work on salvage radiotherapy planning fed into later evidence (including a separate randomised trial) showing improved failure-free survival when radiotherapy fields were guided by fluciclovine PET rather than conventional imaging.",
    asOf: "2026-09-22",
    links: [
      {
        label: "Int J Radiat Oncol Biol Phys 2020: FALCON primary results (Scarsbrook et al.)",
        url: "https://pubmed.ncbi.nlm.nih.gov/32068113/",
      },
      {
        label: "ClinicalTrials.gov: NCT02578940",
        url: "https://clinicaltrials.gov/study/NCT02578940",
      },
      {
        label: "Blue Earth Diagnostics: FALCON trial results announcement",
        url: "https://www.blueearthdiagnostics.com/hubfs/PR063.pdf",
      },
    ],
    related: ["fluciclovine-f18", "prostate-bcr", "blue-earth-diagnostics"],
    tags: ["diagnostic trial", "prostate cancer", "biochemical recurrence", "management impact"],
  },
  {
    id: "upfront-psma",
    kind: "trial",
    name: "UpFrontPSMA",
    aka: ["ANZUP sequential LuPSMA and docetaxel trial"],
    phase: "2",
    setting:
      "De novo, high-volume metastatic hormone-sensitive prostate cancer, first-line, given within 12 weeks of diagnosis and no more than 4 weeks of androgen deprivation therapy",
    nct: "NCT04343885",
    sponsor: "Peter MacCallum Cancer Centre / ANZUP Cancer Trials Group",
    status: "active",
    enrolled: 130,
    yearReported: 2024,
    result:
      "41% undetectable PSA at 48 weeks with sequential 177Lu-PSMA-617 then docetaxel vs 16% with docetaxel alone (OR 3.88, 95% CI 1.61-9.38, p=0.002); PSA progression-free survival 31 vs 20 months (HR 0.60, 95% CI 0.37-0.98, p=0.039) (Azad et al., Lancet Oncology 2024)",
    outcomes: [
      {
        endpoint: "Undetectable PSA (≤0.2 ng/mL) at 48 weeks",
        primary: true,
        unit: "%",
        arms: [
          { name: "177Lu-PSMA-617 (2 cycles) then docetaxel (6 cycles) + ADT", n: 61, value: 41, note: "25/61, 95% CI 30-54" },
          { name: "Docetaxel (6 cycles) + ADT alone", n: 61, value: 16, note: "10/61, 95% CI 9-28" },
        ],
        p: "0.0020",
        source: "https://pubmed.ncbi.nlm.nih.gov/39293461/",
      },
      {
        endpoint: "PSA progression-free survival",
        unit: "months",
        arms: [
          { name: "177Lu-PSMA-617 then docetaxel + ADT", value: 31 },
          { name: "Docetaxel + ADT alone", value: 20 },
        ],
        hr: 0.6,
        ci: [0.37, 0.98],
        p: "0.039",
      },
      {
        endpoint: "Freedom from castration resistance",
        unit: "months",
        arms: [
          { name: "177Lu-PSMA-617 then docetaxel + ADT", value: 20 },
          { name: "Docetaxel + ADT alone", value: 16 },
        ],
        hr: 0.6,
        ci: [0.38, 0.96],
        p: "0.033",
      },
      {
        endpoint: "Grade 3-4 treatment-related adverse events",
        unit: "%",
        arms: [
          { name: "177Lu-PSMA-617 then docetaxel + ADT", value: 29 },
          { name: "Docetaxel + ADT alone", value: 27 },
        ],
        source: "https://pubmed.ncbi.nlm.nih.gov/39293461/",
      },
    ],
    tldr:
      "In men newly diagnosed with prostate cancer that has already spread widely, giving two doses of the radioactive drug lutetium-PSMA before starting chemotherapy cleared PSA to undetectable levels in more men than chemotherapy alone, without adding side effects.",
    summary:
      "UpFrontPSMA was an investigator-initiated, open-label, randomised phase 2 trial run at 11 Australian hospitals by the Peter MacCallum Cancer Centre and ANZUP, testing 177Lu-PSMA-617 given before docetaxel in men with de novo, high-volume, PSMA-avid metastatic hormone-sensitive prostate cancer starting androgen deprivation therapy. Patients were randomised 1:1 to two cycles of 177Lu-PSMA-617 (7.5 GBq every 6 weeks) followed six weeks later by six cycles of docetaxel, or to six cycles of docetaxel alone, both with continuous ADT. The primary endpoint was the proportion with undetectable PSA (≤0.2 ng/mL) at 48 weeks.\n\nAmong 130 randomised patients (122 evaluable), the LuPSMA-then-docetaxel sequence produced undetectable PSA in 41% versus 16% with docetaxel alone, and improved PSA progression-free survival (31 vs 20 months) and freedom from castration resistance (20 vs 16 months), with grade 3-4 toxicity comparable between arms (29% vs 27%) and no treatment-related deaths.\n\nUpFrontPSMA is the first randomised evidence that adding LuPSMA before chemotherapy can deepen responses in newly diagnosed, high-volume hormone-sensitive disease, a different sequencing strategy from the phase 3 PSMAddition trial (which added LuPSMA to an ARPI rather than to chemotherapy). Overall survival data are still immature; the trial is registered as active, not recruiting, and follow-up continues.",
    asOf: "2026-09-22",
    links: [
      {
        label: "Lancet Oncology 2024: UpFrontPSMA primary results (Azad et al.)",
        url: "https://pubmed.ncbi.nlm.nih.gov/39293461/",
      },
      {
        label: "ClinicalTrials.gov: NCT04343885",
        url: "https://clinicaltrials.gov/study/NCT04343885",
      },
      {
        label: "ANZUP: UpFrontPSMA trial page",
        url: "https://anzup.org.au/clinical-trial/upfrontpsma-trial/",
      },
    ],
    related: ["pluvicto", "docetaxel", "prostate-mhspc", "psmaddition"],
    tags: ["radioligand therapy", "prostate cancer", "hormone-sensitive", "first line"],
  },
  {
    id: "enza-p",
    kind: "trial",
    name: "ENZA-p",
    aka: ["ANZUP 1901"],
    phase: "2",
    setting:
      "Metastatic castration-resistant prostate cancer, PSMA-PET-positive, no prior docetaxel or ARPI for mCRPC, with at least two risk factors for early progression on enzalutamide; first-line mCRPC",
    nct: "NCT04419402",
    sponsor: "Australian and New Zealand Urogenital and Prostate Cancer Trials Group (ANZUP)",
    status: "active",
    enrolled: 162,
    yearReported: 2025,
    result:
      "Adding adaptive-dosed 177Lu-PSMA-617 to enzalutamide improved PSA progression-free survival (13.0 vs 7.8 months, HR 0.43, p<0.0001) and, at longer follow-up, overall survival (median 34 vs 26 months, HR 0.55, 95% CI 0.36-0.84, p=0.0053) (Lancet Oncology 2024 and 2025)",
    outcomes: [
      {
        endpoint: "PSA progression-free survival",
        primary: true,
        unit: "months",
        arms: [
          { name: "Enzalutamide + adaptive-dosed 177Lu-PSMA-617", n: 83, value: 13.0 },
          { name: "Enzalutamide alone", n: 79, value: 7.8 },
        ],
        hr: 0.43,
        ci: [0.29, 0.63],
        p: "<0.0001",
        source: "https://www.thelancet.com/journals/lanonc/article/PIIS1470-2045(24)00135-9/abstract",
      },
      {
        endpoint: "Overall survival (longer follow-up)",
        unit: "months",
        arms: [
          { name: "Enzalutamide + adaptive-dosed 177Lu-PSMA-617", n: 83, value: 34 },
          { name: "Enzalutamide alone", n: 79, value: 26 },
        ],
        hr: 0.55,
        ci: [0.36, 0.84],
        p: "0.0053",
        source: "https://pubmed.ncbi.nlm.nih.gov/39956124/",
      },
      {
        endpoint: "PSA response rate (≥50% decline)",
        unit: "%",
        arms: [
          { name: "Enzalutamide + 177Lu-PSMA-617", n: 83, value: 93 },
          { name: "Enzalutamide alone", n: 79, value: 68 },
        ],
      },
      {
        endpoint: "Grade 3-5 adverse events (secondary-outcomes report)",
        unit: "%",
        arms: [
          { name: "Enzalutamide + 177Lu-PSMA-617", n: 81, value: 46 },
          { name: "Enzalutamide alone", n: 79, value: 44 },
        ],
        source: "https://pubmed.ncbi.nlm.nih.gov/39956124/",
      },
    ],
    tldr:
      "Adding the radioactive drug lutetium-PSMA to the hormone drug enzalutamide, with the dose adjusted according to a mid-treatment PET scan, kept prostate cancer under control for longer and helped men with high-risk metastatic disease live longer than enzalutamide on its own.",
    summary:
      "ENZA-p (ANZUP 1901) was an open-label, randomised, controlled phase 2 trial at 15 Australian hospitals in men with metastatic castration-resistant prostate cancer who had not yet received docetaxel or an androgen receptor pathway inhibitor for mCRPC, had PSMA-PET-positive disease, and carried at least two risk factors for early progression on enzalutamide. Patients received oral enzalutamide alone or with adaptive-dosed intravenous 177Lu-PSMA-617 (two or four cycles of 7.5 GBq every 6-8 weeks, guided by an interim PSMA PET-CT at week 12). The primary endpoint was PSA progression-free survival.\n\nAmong 162 randomised patients, adding LuPSMA improved PSA progression-free survival (13.0 vs 7.8 months, HR 0.43, p<0.0001) and PSA response rate (93% vs 68%) at the interim analysis. At longer follow-up (median 34 months), overall survival also favoured the combination (median 34 vs 26 months, HR 0.55, p=0.0053), along with better quality-of-life deterioration-free survival for physical function and overall health. Grade 3-5 adverse events were comparable between arms, with anaemia and thrombocytopenia occurring only in the combination group; there were no treatment-related deaths.\n\nENZA-p is the first randomised trial to show an overall survival benefit for adding LuPSMA to an ARPI ahead of chemotherapy, using biomarker-guided adaptive dosing via interim PSMA PET, and it has prompted phase 3 evaluation of the same combination strategy.",
    asOf: "2026-09-22",
    links: [
      {
        label: "Lancet Oncology 2024: ENZA-p interim results",
        url: "https://www.thelancet.com/journals/lanonc/article/PIIS1470-2045(24)00135-9/abstract",
      },
      {
        label: "Lancet Oncology 2025: ENZA-p overall survival and quality of life (secondary outcomes)",
        url: "https://pubmed.ncbi.nlm.nih.gov/39956124/",
      },
      {
        label: "ClinicalTrials.gov: NCT04419402",
        url: "https://clinicaltrials.gov/study/NCT04419402",
      },
    ],
    related: ["pluvicto", "enzalutamide", "prostate-mcrpc", "psma-pet", "psmafore"],
    tags: ["radioligand therapy", "prostate cancer", "combination therapy", "adaptive dosing"],
  },
  {
    id: "lutectomy",
    kind: "trial",
    name: "LuTectomy",
    aka: ["Neoadjuvant 177Lu-PSMA-617 before radical prostatectomy"],
    phase: "1/2",
    setting:
      "Men with high-risk localised prostate cancer and high PSMA uptake, scheduled for radical prostatectomy; neoadjuvant, pre-surgical setting",
    nct: "NCT04430192",
    sponsor: "Peter MacCallum Cancer Centre, Australia",
    status: "active",
    enrolled: 20,
    yearReported: 2023,
    result:
      "A single dose of neoadjuvant 177Lu-PSMA-617 delivered a median tumour absorbed dose of 35.5 Gy (19.6 Gy to the prostate), with 45% of patients achieving a >50% PSA decline; no grade 3/4 toxicity and no surgical complications attributable to the drug (Eapen et al., Eur Urol 2024)",
    outcomes: [
      {
        endpoint: "Highest tumour radiation absorbed dose after cycle 1",
        primary: true,
        unit: "Gy",
        arms: [{ name: "177Lu-PSMA-617 (5 GBq), one or two cycles before prostatectomy", n: 20, value: 35.5, note: "median, IQR 19.5-50.1; 19.6 Gy (IQR 11.3-48.4) delivered to the prostate specifically" }],
        source: "https://pubmed.ncbi.nlm.nih.gov/37891072/",
      },
      {
        endpoint: "PSA50 response",
        unit: "%",
        arms: [{ name: "177Lu-PSMA-617 before prostatectomy", n: 20, value: 45, note: "9/20 patients achieved a >50% PSA decline" }],
      },
      {
        endpoint: "Pathological complete response",
        unit: "%",
        arms: [{ name: "177Lu-PSMA-617 before prostatectomy", n: 20, value: 0, note: "0 of 20 patients; 80% showed a partial histological response (fibrosis, reduced tumour cell density)" }],
      },
      {
        endpoint: "Grade 3/4 toxicity and Clavien-Dindo grade 3-5 surgical complications",
        unit: "%",
        arms: [{ name: "177Lu-PSMA-617 before prostatectomy", n: 20, value: 0, note: "none observed; surgery was feasible and safe in all patients" }],
      },
    ],
    tldr:
      "In men about to have their prostate removed for high-risk cancer, giving one or two doses of the radioactive drug lutetium-PSMA beforehand delivered a meaningful radiation dose straight to the tumour, was well tolerated, and did not make the surgery harder or riskier.",
    summary:
      "LuTectomy was a single-centre, single-arm phase 1/2 study at the Peter MacCallum Cancer Centre investigating neoadjuvant 177Lu-PSMA-617 in men with high-risk localised prostate cancer (PSA >20 ng/mL, ISUP grade group 3-5, or ≥cT2c) with high tumour uptake on 68Ga-PSMA-11 PET, scheduled for robotic radical prostatectomy. Cohort A (n=10) received one cycle and cohort B (n=10) received two cycles of 177Lu-PSMA-617 (5 GBq), with surgery six weeks after the last dose. The primary endpoint was tumour radiation absorbed dose, measured by three-timepoint SPECT-CT dosimetry.\n\nAcross 20 patients, the treatment delivered a median highest-lesion dose of 35.5 Gy (19.6 Gy to the prostate, with lymph node doses up to a median of 38-48 Gy in relevant patients), and 45% achieved a PSA decline of 50% or more. Toxicity was low grade only (fatigue, nausea, dry mouth, mild thrombocytopenia), with no grade 3-4 events and no Clavien-Dindo grade 3-5 surgical complications; surgeons reported no unexpected intraoperative difficulty. On pathology, 80% of specimens showed a partial histological response, but no patient achieved a complete pathological response.\n\nLuTectomy is one of the first trials to test PSMA radioligand therapy in the neoadjuvant, potentially curative setting rather than in metastatic disease. It establishes feasibility and biological activity but not yet a benefit in metastasis-free or overall survival; larger trials of multi-cycle or combination regimens are the logical next step, and neoadjuvant PSMA radioligand therapy is not currently part of any clinical guideline.",
    asOf: "2026-09-22",
    links: [
      {
        label: "European Urology 2024: LuTectomy primary results (Eapen et al.)",
        url: "https://pubmed.ncbi.nlm.nih.gov/37891072/",
      },
      {
        label: "ClinicalTrials.gov: NCT04430192",
        url: "https://clinicaltrials.gov/study/NCT04430192",
      },
    ],
    related: ["pluvicto", "prostate-high-risk", "prostatectomy", "psma-pet"],
    tags: ["radioligand therapy", "prostate cancer", "neoadjuvant", "dosimetry"],
  },
  {
    id: "prince-trial",
    kind: "trial",
    name: "PRINCE",
    aka: ["PSMA-lutetium Radionuclide Therapy and ImmuNotherapy in Prostate CancEr"],
    phase: "1/2",
    setting:
      "Metastatic castration-resistant prostate cancer with high PSMA expression, after prior androgen receptor pathway inhibitor (with prior docetaxel allowed); combination therapy trial",
    nct: "NCT03658447",
    sponsor: "Peter MacCallum Cancer Centre, Australia",
    status: "completed",
    enrolled: 37,
    yearReported: 2026,
    result:
      "76% (28/37) of patients achieved a PSA50 response with 177Lu-PSMA-617 plus pembrolizumab; median overall survival 20.8 months; grade 3 immune-related adverse events occurred in 30% of patients, with no grade 4 events or treatment-related deaths (Sandhu et al., Lancet Oncology 2026)",
    outcomes: [
      {
        endpoint: "PSA50 response rate (co-primary with safety)",
        primary: true,
        unit: "%",
        arms: [{ name: "177Lu-PSMA-617 (up to 6 cycles) + pembrolizumab (up to 24 months)", n: 37, value: 76, note: "28/37, 95% CI 59-88; 46% had a PSA90 response" }],
        source: "https://pubmed.ncbi.nlm.nih.gov/41926961/",
      },
      {
        endpoint: "Objective response rate (RECIST-evaluable subset)",
        unit: "%",
        arms: [{ name: "177Lu-PSMA-617 + pembrolizumab", n: 10, value: 70, note: "7/10 patients with measurable disease" }],
      },
      {
        endpoint: "Overall survival",
        unit: "months",
        arms: [{ name: "177Lu-PSMA-617 + pembrolizumab", n: 37, value: 20.8, note: "95% CI 13.5-not estimable" }],
      },
      {
        endpoint: "Grade 3 immune-related adverse events",
        unit: "%",
        arms: [{ name: "177Lu-PSMA-617 + pembrolizumab", n: 37, value: 30, note: "colitis, fatigue, amylase rise, and others; no grade 4 events or treatment-related deaths" }],
      },
    ],
    tldr:
      "Combining the radioactive drug lutetium-PSMA with the immunotherapy drug pembrolizumab produced strong PSA responses in men with advanced, heavily pretreated prostate cancer, with side effects in line with what each drug causes on its own.",
    summary:
      "PRINCE was a single-arm, multicentre phase 1b/2 trial led by the Peter MacCallum Cancer Centre, testing whether adding the checkpoint inhibitor pembrolizumab to 177Lu-PSMA-617 could improve on radioligand therapy alone in metastatic castration-resistant prostate cancer, a disease with generally low response to immunotherapy alone. Eligible men had progressed on an androgen receptor pathway inhibitor (prior docetaxel allowed) and had high PSMA expression on PET. Participants received up to six cycles of 177Lu-PSMA-617 every six weeks with pembrolizumab 200 mg every three weeks for up to 24 months. Co-primary endpoints were safety and PSA50 response rate.\n\nAmong 37 participants (73% docetaxel-pretreated, 100% ARPI-pretreated), a PSA decline of 50% or more was seen in 76%, and 46% had a PSA decline of 90% or more. In the subset with measurable disease, the objective response rate was 70%. Median overall survival was 20.8 months. Toxicity was consistent with the known profiles of each drug: xerostomia, fatigue and pruritus were common but mostly grade 1-2, while grade 3 immune-related adverse events (colitis, pancreatitis, myasthenia gravis, and others attributable to pembrolizumab) occurred in 30% of patients; there were no grade 4 events or treatment-related deaths.\n\nPRINCE reports encouraging activity and manageable toxicity for the combination, broadly in line with 177Lu-PSMA-617 monotherapy benchmarks from VISION, and the authors conclude that radioligand therapy remains the principal driver of response with pembrolizumab possibly adding benefit in a biologically susceptible subset. It is a single-arm, non-randomised study, so it cannot establish incremental benefit from adding pembrolizumab.",
    asOf: "2026-09-22",
    links: [
      {
        label: "Lancet Oncology 2026: PRINCE final results (Sandhu et al.)",
        url: "https://pubmed.ncbi.nlm.nih.gov/41926961/",
      },
      {
        label: "ClinicalTrials.gov: NCT03658447",
        url: "https://clinicaltrials.gov/study/NCT03658447",
      },
    ],
    related: ["pluvicto", "pembrolizumab", "prostate-mcrpc", "psma-pet", "vision"],
    tags: ["radioligand therapy", "prostate cancer", "immunotherapy combination"],
  },
  {
    id: "aurora-flurpiridaz",
    kind: "trial",
    name: "AURORA",
    aka: ["International Study to Evaluate Diagnostic Efficacy of Flurpiridaz (18F) Injection PET MPI"],
    phase: "3",
    setting:
      "Adults with suspected coronary artery disease undergoing myocardial perfusion imaging before invasive coronary angiography; a diagnostic (cardiac imaging) trial",
    nct: "NCT03354273",
    sponsor: "GE HealthCare",
    status: "completed",
    enrolled: 730,
    yearReported: 2023,
    result:
      "18F-flurpiridaz PET was more sensitive than 99mTc-SPECT for detecting ≥50% coronary stenosis (80.3% vs 68.7%, p=0.0003) with non-inferior specificity (63.8% vs 61.7%, p=0.0004), meeting both primary efficacy endpoints (Maddahi et al., JACC 2023)",
    outcomes: [
      {
        endpoint: "Sensitivity for coronary artery disease (≥50% stenosis by quantitative coronary angiography)",
        primary: true,
        unit: "%",
        arms: [
          { name: "18F-flurpiridaz PET", n: 578, value: 80.3 },
          { name: "99mTc-SPECT", n: 578, value: 68.7 },
        ],
        p: "0.0003",
        source: "https://pubmed.ncbi.nlm.nih.gov/37821170/",
      },
      {
        endpoint: "Specificity for coronary artery disease",
        primary: true,
        unit: "%",
        arms: [
          { name: "18F-flurpiridaz PET", n: 578, value: 63.8 },
          { name: "99mTc-SPECT", n: 578, value: 61.7 },
        ],
        p: "0.0004",
        source: "https://pubmed.ncbi.nlm.nih.gov/37821170/",
      },
      {
        endpoint: "Area under the ROC curve, overall population",
        unit: "AUC",
        arms: [
          { name: "18F-flurpiridaz PET", value: 0.8 },
          { name: "99mTc-SPECT", value: 0.68 },
        ],
        p: "<0.001",
      },
    ],
    tldr:
      "A new PET heart-imaging tracer called flurpiridaz was tested against the standard SPECT heart scan in people with suspected coronary artery disease, and found blocked arteries more reliably, especially in women and people with obesity, while using about half the radiation dose.",
    summary:
      "AURORA was the second (confirmatory) phase 3, prospective, multicentre trial of 18F-flurpiridaz, a novel PET myocardial perfusion imaging tracer, following an earlier phase 3 study that met its sensitivity endpoint but not its specificity non-inferiority criterion. AURORA enrolled 730 patients with suspected coronary artery disease across 48 sites in the US, Canada, and Europe; 578 were evaluable. Each patient underwent same-day rest/stress flurpiridaz PET and rest-stress 99mTc-labelled SPECT, both read blinded by three experts, before invasive coronary angiography (ICA) as the reference standard for ≥50% stenosis.\n\nFlurpiridaz PET met both co-primary efficacy endpoints: sensitivity was higher than SPECT (80.3% vs 68.7%, p=0.0003) and specificity was non-inferior (63.8% vs 61.7%, p=0.0004). The area under the receiver-operating-characteristic curve favoured PET overall (0.80 vs 0.68) and specifically in women and obese patients, two groups in whom SPECT image quality is often degraded by attenuation artefact. PET also reduced radiation exposure by roughly half compared with SPECT and improved image quality and diagnostic certainty. A prespecified obesity subgroup analysis published in 2026 confirmed the advantage held across BMI categories.\n\nAURORA supported FDA approval of flurpiridaz F-18 for PET myocardial perfusion imaging, giving cardiac PET a second widely available perfusion tracer alongside rubidium-82 and expanding access to PET myocardial perfusion imaging at centres with an on-site or nearby cyclotron rather than a generator.",
    asOf: "2026-09-22",
    links: [
      {
        label: "JACC 2023: AURORA primary results (Maddahi et al.)",
        url: "https://pubmed.ncbi.nlm.nih.gov/37821170/",
      },
      {
        label: "ClinicalTrials.gov: NCT03354273",
        url: "https://clinicaltrials.gov/study/NCT03354273",
      },
    ],
    related: ["pet", "pet-tracer-manufacturing"],
    tags: ["diagnostic trial", "cardiology", "PET tracer", "myocardial perfusion"],
  },
  {
    id: "ideas-amyloid",
    kind: "trial",
    name: "IDEAS (Imaging Dementia-Evidence for Amyloid Scanning)",
    aka: ["IDEAS study"],
    phase: "observational",
    setting:
      "Medicare beneficiaries with mild cognitive impairment or dementia of uncertain cause, evaluated by dementia specialists; a coverage-with-evidence-development registry study, not a treatment trial",
    nct: "NCT02420756",
    sponsor: "American College of Radiology",
    status: "completed",
    enrolled: 18488,
    enrolledBasis: "registered",
    enrolledNote:
      "Registry enrolment (18,488) is the total registered; the JAMA 2019 primary management-change analysis was on 11,409 patients with complete pre- and post-scan data.",
    yearReported: 2019,
    result:
      "Amyloid PET changed the composite management plan (drug therapy or counselling) within 90 days in 60.2% of patients with mild cognitive impairment and 63.5% of patients with dementia of uncertain cause, both far exceeding the pre-specified 30% threshold, among 11,409 analysed patients (Rabinovici et al., JAMA 2019)",
    outcomes: [
      {
        endpoint: "Change in composite patient management plan within 90 days, mild cognitive impairment group",
        primary: true,
        unit: "%",
        arms: [{ name: "Pre-PET vs post-PET documented plan (MCI)", n: 6905, value: 60.2, note: "95% CI 59.1-61.4%, exceeding the pre-specified 30% threshold, p<0.001" }],
        source: "https://jamanetwork.com/journals/jama/fullarticle/2729371",
      },
      {
        endpoint: "Change in composite patient management plan within 90 days, dementia of uncertain cause group",
        primary: true,
        unit: "%",
        arms: [{ name: "Pre-PET vs post-PET documented plan (dementia)", n: 4504, value: 63.5, note: "95% CI 62.1-64.9%, exceeding the pre-specified 30% threshold, p<0.001" }],
        source: "https://jamanetwork.com/journals/jama/fullarticle/2729371",
      },
      {
        endpoint: "Change in aetiological diagnosis",
        unit: "%",
        arms: [{ name: "Amyloid PET, all patients", n: 11409, value: 25.1, note: "changed from Alzheimer's disease to non-Alzheimer's; 10.5% changed the other way" }],
      },
    ],
    tldr:
      "A large US Medicare study asked whether a brain scan that detects amyloid protein (a hallmark of Alzheimer's disease) actually changes what doctors do for patients with memory problems; it found that doctors changed the treatment or diagnosis plan for roughly six in ten patients after seeing the scan.",
    summary:
      "IDEAS was a single-group, multisite, longitudinal observational study run by the American College of Radiology under Medicare's Coverage with Evidence Development programme, designed to determine whether amyloid PET changes clinical management in Medicare beneficiaries with mild cognitive impairment (MCI) or dementia of uncertain aetiology who met published appropriate-use criteria. Dementia specialists recorded an intended management plan before amyloid PET and again 90 days after, covering Alzheimer's disease drug therapy, other drug therapy, and safety/future-planning counselling; the study was powered to detect a 30% or greater change in each of the MCI and dementia groups.\n\nOf 18,488 registered participants, 11,409 were included in the primary analysis (6,905 with MCI, 4,504 with dementia). The composite management endpoint changed in 60.2% of the MCI group and 63.5% of the dementia group, both far exceeding the 30% target; Alzheimer's disease drug use changed most often. The aetiological diagnosis flipped from Alzheimer's to non-Alzheimer's disease in 25.1% of patients and the reverse in 10.5%. A later health-utilisation analysis found a smaller-than-hoped 4.5% relative reduction in 12-month hospitalisations, short of the pre-specified 10% effect size, though patients with positive scans were hospitalised less often than those with negative scans.\n\nIDEAS is a management-impact study, not a trial of clinical outcomes from a therapeutic intervention, and it predates the era of anti-amyloid disease-modifying drugs (lecanemab, donanemab), which have since made amyloid status a treatment-eligibility gate rather than only a diagnostic aid. Its results, together with the follow-on New IDEAS study (NCT04426539), underpinned the 2023 removal of the Medicare national coverage determination that had required amyloid PET to be performed only within an approved research study.",
    asOf: "2026-09-22",
    links: [
      {
        label: "JAMA 2019: IDEAS primary results (Rabinovici et al.)",
        url: "https://jamanetwork.com/journals/jama/fullarticle/2729371",
      },
      {
        label: "ClinicalTrials.gov: NCT02420756",
        url: "https://clinicaltrials.gov/study/NCT02420756",
      },
      {
        label: "CMS: amyloid PET national coverage determination removal decision memo",
        url: "https://www.cms.gov/medicare-coverage-database/view/ncacal-decision-memo.aspx?proposed=N&ncaid=308",
      },
    ],
    related: ["medicare-ced"],
    tags: ["diagnostic trial", "neurology", "amyloid PET", "coverage with evidence development"],
  },
];
