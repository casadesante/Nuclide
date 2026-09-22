/**
 * Terms: records carried over from Nuclide.
 *
 * Carried over from the Nuclide corpus (https://github.com/casadesante/Nuclide), CC BY-NC 4.0, and narrowed to
 * radiopharmaceutical use. Facts and sources are as Nuclide held them on the `asOf` date of each record;
 * check anything that matters at the primary source each record links.
 */
import type { EntityInput } from "@/lib/schema";

export const carriedTerms: EntityInput[] = [
  {
    "kind": "term",
    "asOf": "2026-09-04",
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Targeted_alpha-particle_therapy"
      }
    ],
    "id": "alpha-vs-beta",
    "wikipedia": "https://en.wikipedia.org/wiki/Targeted_alpha-particle_therapy",
    "name": "Alpha vs beta emitters",
    "category": "Treatment jargon",
    "tldr": "Beta particles (lutetium-177) travel millimetres and are good for bulky disease; alpha particles (actinium-225) travel a few cells' width and kill with far higher energy.",
    "summary": "This is about alpha particles versus beta particles in radioligand therapy, not the alpha/beta ratio of the linear-quadratic model used in external-beam fractionation. Beta and alpha emitters are the two kinds of particle used in radioligand therapy. Beta particles from lutetium-177 have low linear energy transfer and a range of 1 to 10 mm, so their crossfire helps in heterogeneous bulky tumours at the cost of marrow toxicity. Alpha particles from actinium-225 have very high linear energy transfer, around 100 keV per micrometre, travel only 50 to 100 micrometres and cause oxygen-independent DNA breaks, though daughter recoil redistributes dose and actinium-225 supply is the bottleneck. The distinction underlies the Radioligand therapy (beta emitters) and Targeted alpha therapy technologies and the pairing Beta radioligand to alpha radioligand, and it is referenced by Radium-223 dichloride and the Neuroendocrine tumours entry.",
    "technologies": [
      "radioligand-therapy",
      "targeted-alpha-therapy"
    ]
  },
  {
    "kind": "term",
    "asOf": "2026-09-09",
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Anemia"
      }
    ],
    "id": "anaemia",
    "name": "Anaemia",
    "category": "Side effects",
    "aka": [
      "anemia",
      "anaemic",
      "anemic",
      "low haemoglobin",
      "low hemoglobin",
      "haemoglobin",
      "hemoglobin",
      "transfusion-dependent",
      "transfusion dependence",
      "transfusion independence",
      "red cell transfusion",
      "erythropoiesis-stimulating agent",
      "ESA",
      "ESAs",
      "iron deficiency",
      "erythropoiesis-stimulating agents"
    ],
    "tldr": "A shortage of red blood cells or haemoglobin, causing tiredness and breathlessness. In cancer it comes from the disease itself (marrow infiltration, bleeding, inflammation), from chemotherapy suppressing the marrow, and from some targeted drugs.",
    "summary": "Present in 30-90% of patients depending on cancer and treatment; a defining feature of myeloma, MDS and leukaemia, and the dose-limiting toxicity of PARP inhibitors (olaparib, talazoparib) and of some ADCs and radioligands. Managed by treating the cause, iron replacement, red cell transfusion (with restrictive thresholds) and, cautiously, erythropoiesis-stimulating agents, which raise thrombosis risk and were linked to worse outcomes when used to high targets. Transfusion independence is an endpoint in MDS trials (luspatercept, imetelstat). Fatigue from anaemia is one of the most common and under-treated symptoms in oncology.",
    "wikipedia": "https://en.wikipedia.org/wiki/Anemia",
    "related": [
      "cytopenias",
      "thrombocytopenia"
    ]
  },
  {
    "kind": "term",
    "asOf": "2026-09-09",
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Antigen"
      }
    ],
    "id": "antigen",
    "name": "Antigen",
    "category": "Biology basics",
    "aka": [
      "antigens",
      "tumour antigen",
      "tumour antigens",
      "tumor antigen",
      "tumor antigens",
      "target antigen",
      "target antigens",
      "antigenic",
      "tumour-associated antigen",
      "tumour-associated antigens",
      "tumor-associated antigen",
      "tumor-associated antigens",
      "antigen-negative",
      "antigen loss"
    ],
    "tldr": "Anything an antibody or immune cell can recognise, typically a protein on a cell's surface. In cancer, an antigen is the flag that tells a drug or an immune cell 'this is the cell to attack'.",
    "summary": "Most cancer antigens are ordinary human proteins that a tumour makes in unusual amounts (HER2, TROP2, CD19, PSMA), so drugs targeting them also touch normal cells that carry a little; truly tumour-specific antigens arise from mutations (neoantigens) or from viral proteins. A good drug antigen is abundant on tumour cells, scarce on essential normal tissue, and stable over time. Tumours escape by losing the antigen, which is how CD19-negative relapse defeats CAR-T, and by hiding the pieces of antigen they would normally display to T cells.",
    "wikipedia": "https://en.wikipedia.org/wiki/Antigen",
    "targets": [
      "her2",
      "trop2",
      "psma"
    ]
  },
  {
    "kind": "term",
    "asOf": "2026-09-09",
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Antiandrogen"
      }
    ],
    "id": "arpi",
    "name": "Androgen receptor pathway inhibitor (ARPI)",
    "category": "Treatment jargon",
    "aka": [
      "ARPI",
      "ARPIs",
      "ARSI",
      "androgen receptor signalling inhibitor",
      "androgen receptor pathway inhibitor",
      "novel hormonal agent",
      "NHA",
      "next-generation antiandrogen",
      "second-generation antiandrogen",
      "AR antagonist",
      "AR inhibitor",
      "antiandrogen",
      "anti-androgen",
      "AR-V7",
      "AR-targeted",
      "AR antagonists"
    ],
    "tldr": "The newer prostate cancer hormone pills (abiraterone, enzalutamide, apalutamide, darolutamide) that block the androgen receptor or the last steps of androgen production, used on top of standard testosterone suppression.",
    "summary": "Abiraterone blocks CYP17 androgen synthesis (given with prednisone); enzalutamide, apalutamide and darolutamide are potent AR antagonists. Adding an ARPI to ADT extends survival in metastatic hormone-sensitive disease (LATITUDE, ARCHES, TITAN, ARASENS), in non-metastatic castration-resistant disease and in castration-resistant disease before or after docetaxel. Resistance arises via AR amplification, ligand-binding domain mutations, the AR-V7 splice variant and lineage plasticity to neuroendocrine disease; switching ARPIs after failure gives little benefit, so PSMA radioligands, PARP inhibitors and chemotherapy follow. Older antiandrogens (bicalutamide) are weaker first-generation drugs.",
    "wikipedia": "https://en.wikipedia.org/wiki/Antiandrogen",
    "indications": [
      "prostate"
    ],
    "drugs": [
      "abiraterone",
      "enzalutamide"
    ]
  },
  {
    "kind": "term",
    "asOf": "2026-09-06",
    "id": "biochemical-recurrence",
    "name": "Biochemical recurrence (BCR)",
    "category": "Clinical",
    "wikipedia": "https://en.wikipedia.org/wiki/Biochemical_recurrence",
    "tldr": "PSA rising again after surgery or radiation, usually years before anything shows on a scan.",
    "summary": "Biochemical recurrence is a rising PSA after treatment for prostate cancer, usually years before anything is visible on a scan. It is defined as a PSA of 0.2 ng/mL or more after prostatectomy, or a rise of 2 ng/mL above the nadir after radiation. PSMA PET, with agents such as fluciclovine F-18 and Illuccix, can now find the recurrent disease at very low PSA levels in most men, opening the way to salvage radiation or metastasis-directed therapy. The EMBARK trial, reported in 2023, showed that enzalutamide with or without androgen deprivation delays metastasis in high-risk recurrence defined by a short PSA doubling time. The term is linked from the PSA entry and from ideas on PSMA-PET-guided metastasis-directed therapy and on localising residual disease.",
    "indications": [
      "prostate"
    ],
    "technologies": [
      "psma-pet"
    ],
    "trials": [
      "embark"
    ],
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Biochemical_recurrence"
      }
    ]
  },
  {
    "kind": "term",
    "asOf": "2026-09-09",
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Bone_marrow"
      }
    ],
    "id": "bone-marrow",
    "name": "Bone marrow",
    "category": "Biology basics",
    "aka": [
      "marrow",
      "bone-marrow",
      "marrow suppression",
      "myelosuppression",
      "myelosuppressive",
      "blood counts",
      "blood count",
      "low blood counts",
      "neutropenia",
      "neutropenic",
      "anaemia",
      "anemia",
      "thrombocytopenia"
    ],
    "tldr": "The soft tissue inside bones where all blood cells are made. Chemotherapy damages it, causing the low blood counts that limit how much treatment a patient can take.",
    "summary": "Blood stem cells in the marrow produce billions of red cells, white cells and platelets each day; because they divide constantly, they are collateral damage for most chemotherapy and for some ADC payloads, radiotherapy to bone and radioligands. The consequences are anaemia (fatigue), neutropenia (infection risk, sometimes life-threatening) and thrombocytopenia (bleeding), which together are the commonest reason for dose delays and reductions. Growth factors such as G-CSF speed recovery of white cells, and a marrow biopsy is how leukaemias and myeloma are diagnosed and monitored.",
    "wikipedia": "https://en.wikipedia.org/wiki/Bone_marrow"
  },
  {
    "kind": "term",
    "asOf": "2026-09-09",
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Bone_metastasis"
      }
    ],
    "id": "bone-metastases",
    "name": "Bone metastases and skeletal-related events",
    "category": "Anatomy",
    "aka": [
      "bone metastasis",
      "skeletal metastases",
      "skeletal-related events",
      "skeletal-related event",
      "SRE",
      "bone-only",
      "bone-predominant",
      "osseous metastases",
      "pathological fracture",
      "spinal cord compression"
    ],
    "tldr": "Cancer spread to the bones, most common in prostate, breast, lung, kidney and thyroid cancer and myeloma. It causes pain, fractures and high calcium, and the complications are counted in trials as 'skeletal-related events'.",
    "summary": "Skeletal-related events (fracture, need for radiotherapy or surgery to bone, spinal cord compression, hypercalcaemia) are reduced 30-40% by bone-modifying agents (zoledronic acid, denosumab). Single-fraction 8 Gy radiotherapy relieves pain as well as longer courses; SBRT gives more durable relief for spine metastases. Bone-seeking radiopharmaceuticals (radium-223, strontium-89) treat bone-predominant prostate cancer, and bone-only disease has a better prognosis than visceral spread in breast cancer. Spinal cord compression is an emergency needing steroids and urgent radiotherapy or surgery.",
    "wikipedia": "https://en.wikipedia.org/wiki/Bone_metastasis",
    "indications": [
      "prostate",
      "rcc"
    ],
    "drugs": [
      "radium-223"
    ]
  },
  {
    "kind": "term",
    "asOf": "2026-09-09",
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Response_Evaluation_Criteria_in_Solid_Tumors"
      }
    ],
    "id": "complete-response-term",
    "name": "Complete response (CR) and partial response (PR)",
    "category": "Trials",
    "aka": [
      "complete response",
      "complete responses",
      "complete remission",
      "complete remissions",
      "CR rate",
      "CRi",
      "CR/CRi",
      "complete response rate",
      "stringent complete response",
      "sCR",
      "partial response",
      "partial responses",
      "partial remission",
      "PR rate",
      "very good partial response",
      "VGPR",
      "stable disease",
      "best response",
      "best overall response",
      "deep response",
      "deep responses",
      "complete response rates"
    ],
    "tldr": "A complete response means every measurable trace of the cancer has disappeared on scans or in the marrow; a partial response means it has shrunk by at least 30% (RECIST) but is still there. Neither is the same as cure: microscopic disease can remain.",
    "summary": "Solid tumour responses are defined by RECIST 1.1 (complete: all target lesions gone and nodes <10 mm; partial: ≥30% decrease in summed diameters; progressive: ≥20% increase or new lesions; stable: neither); lymphoma uses Lugano and PET; leukaemia uses marrow blast count and count recovery (CR, CRi for incomplete recovery); myeloma uses IMWG (stringent CR, VGPR, PR). Complete responses are the strongest single-arm signal and, when durable, drive accelerated approvals; the proportion of complete responders and the depth of response (MRD, ctDNA clearance) increasingly predict long-term outcome. In neoadjuvant settings pathological complete response is judged on the resected specimen, and clinical complete response guides organ preservation.",
    "wikipedia": "https://en.wikipedia.org/wiki/Response_Evaluation_Criteria_in_Solid_Tumors"
  },
  {
    "kind": "term",
    "asOf": "2026-09-09",
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Crossover_study"
      }
    ],
    "id": "crossover",
    "name": "Crossover in trials",
    "category": "Trials",
    "aka": [
      "cross-over",
      "crossover-adjusted",
      "crossover adjustment",
      "adjusted for crossover",
      "permitted crossover",
      "crossover was permitted",
      "crossover rate",
      "post-progression therapy",
      "subsequent therapy",
      "subsequent treatment",
      "RPSFT",
      "rank-preserving structural failure time",
      "IPCW",
      "treatment switching",
      "unplanned crossover",
      "confounded by crossover"
    ],
    "tldr": "When patients in a trial's control arm are allowed to switch to the experimental drug after their cancer progresses. It is fair to patients but blurs the survival comparison, because the control group has now had the drug too.",
    "summary": "Crossover is common in trials of drugs already approved elsewhere or clearly active (imatinib in GIST, osimertinib in FLAURA, 177Lu-PSMA in VISION and PSMAfore, where 84% of controls crossed over) and explains why such trials often show large progression-free survival gains but little or no overall survival difference. Statistical corrections (rank-preserving structural failure time, inverse probability of censoring weighting) estimate what survival would have been without crossover but rely on assumptions and are treated cautiously by regulators, who may still demand an OS trend. In regulatory debates, crossover cuts both ways: it can hide a true survival benefit or excuse its absence.",
    "wikipedia": "https://en.wikipedia.org/wiki/Crossover_study",
    "trials": [
      "vision",
      "psmafore",
      "therap"
    ],
    "related": [
      "estimand"
    ]
  },
  {
    "kind": "term",
    "asOf": "2026-09-17",
    "category": "Biomarkers",
    "id": "curie-siopen-score",
    "name": "MIBG Curie and SIOPEN scores",
    "aka": [
      "Curie score",
      "SIOPEN score",
      "MIBG score",
      "MIBG avidity",
      "MIBG-avid",
      "MIBG-non-avid",
      "semi-quantitative MIBG scoring",
      "123I-MIBG scan",
      "MIBG scintigraphy",
      "18F-MFBG PET",
      "MFBG PET"
    ],
    "tldr": "Neuroblastoma soaks up MIBG, a radioactive cousin of noradrenaline; the Curie and SIOPEN scores count how many body regions still light up on the scan, and a score that has not fallen enough after the first rounds of chemotherapy marks a child who is unlikely to be cured with the standard plan.",
    "summary": "What is measured: the extent of MIBG-avid disease on a whole-body scan. How: iodine-123 MIBG planar and SPECT imaging (with a bone scan or FDG PET for the roughly 10 percent of tumours that do not take up MIBG); the Curie score grades nine skeletal segments and one soft-tissue site from 0 to 3 (maximum 30) and the SIOPEN score grades twelve skeletal segments from 0 to 6 (maximum 72). What a result changes: at diagnosis it stages metastatic disease and establishes MIBG avidity for later iodine-131 MIBG therapy; after induction, a Curie score above 2 (COG A3973) or a SIOPEN score above 3 predicts worse event-free survival in high-risk disease and is used to stratify and to select patients for intensified or experimental arms, such as adding iodine-131 MIBG in COG ANBL1531; the International Neuroblastoma Response Criteria of 2017 use MIBG to score skeletal response. Fluorine-18 MFBG PET, a same-day tracer with higher resolution, is replacing MIBG in trials. Where it matters: neuroblastoma and high-risk neuroblastoma.",
    "indications": [
      "neuroblastoma",
      "neuroblastoma-high-risk"
    ],
    "related": [
      "mibg-theranostics",
      "i131-mibg",
      "fdg-pet"
    ]
  },
  {
    "kind": "term",
    "asOf": "2026-09-09",
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Myelosuppression"
      }
    ],
    "id": "cytopenias",
    "name": "Cytopenias and myelosuppression",
    "category": "Side effects",
    "aka": [
      "cytopenia",
      "cytopenias",
      "myelosuppression",
      "myelosuppressive",
      "bone marrow suppression",
      "marrow suppression",
      "marrow toxicity",
      "haematological toxicity",
      "hematological toxicity",
      "haematologic toxicity",
      "hematologic toxicity",
      "pancytopenia",
      "bicytopenia",
      "lymphopenia",
      "lymphocytopenia",
      "prolonged cytopenias",
      "late cytopenias",
      "ICAHT",
      "immune effector cell-associated haematotoxicity",
      "count recovery",
      "blood counts",
      "full blood count",
      "complete blood count",
      "CBC"
    ],
    "tldr": "The umbrella term for low blood counts of any kind (white cells, red cells, platelets) when treatment suppresses the bone marrow. Most chemotherapy causes it temporarily; radioligands, CAR-T and some pills cause longer-lasting versions.",
    "summary": "Myelosuppression is the shared toxicity of cytotoxic chemotherapy, conditioning regimens, lymphodepletion, radioligand therapy (177Lu-PSMA, PRRT) and a range of targeted agents, graded per lineage by CTCAE; pancytopenia means all three lineages are low. Blood counts before each cycle gate treatment, and delays and dose reductions are the standard responses. After CAR-T, prolonged and biphasic cytopenias (ICAHT) affect a third of patients and drive infection deaths months after infusion; lymphopenia is a marker of poorer immunotherapy outcomes. Therapy-related MDS is the late, permanent form of marrow injury.",
    "wikipedia": "https://en.wikipedia.org/wiki/Myelosuppression",
    "related": [
      "thrombocytopenia",
      "anaemia"
    ]
  },
  {
    "kind": "term",
    "asOf": "2026-09-04",
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Dosimetry"
      }
    ],
    "id": "dosimetry",
    "wikipedia": "https://en.wikipedia.org/wiki/Dosimetry",
    "name": "Dosimetry",
    "category": "Treatment jargon",
    "tldr": "Measuring how much radiation dose each organ and tumour actually received from a radioactive drug.",
    "summary": "Dosimetry is the measurement of how much radiation dose each organ and each tumour actually received from a radioactive drug. It relies on post-therapy SPECT/CT imaging at several time points and enables personalised activity prescription instead of fixed doses, and regulators and payers increasingly require it. The term is linked to the SPECT & bone scan and Radioligand therapy (beta emitters) technologies and to Radioembolisation (TARE / SIRT, yttrium-90), Auger-electron therapy and Total-body PET for screening. It is referenced by the Hepatocellular carcinoma and Neuroendocrine tumours entries, the radiopharmaceutical roadmap and the bottleneck on wrong doses, and by ideas on dosimetry-personalised PRRT instead of four fixed cycles and total-body PET for personalised radioligand dosing.",
    "technologies": [
      "spect",
      "radioligand-therapy"
    ]
  },
  {
    "kind": "term",
    "asOf": "2026-09-17",
    "id": "estimand",
    "name": "Estimands and intercurrent events (ICH E9(R1))",
    "category": "Trials",
    "aka": [
      "estimand",
      "estimands",
      "estimand framework",
      "ICH E9(R1)",
      "E9(R1)",
      "intercurrent event",
      "intercurrent events",
      "treatment policy strategy",
      "treatment policy estimand",
      "hypothetical strategy",
      "hypothetical estimand",
      "composite strategy",
      "while on treatment strategy",
      "principal stratum",
      "principal stratum strategy",
      "sensitivity analysis",
      "sensitivity analyses",
      "missing data",
      "missing data handling",
      "handling of missing data",
      "discontinued treatment",
      "treatment discontinuation",
      "rescue medication",
      "subsequent anticancer therapy",
      "what the trial is estimating"
    ],
    "wikipedia": "https://en.wikipedia.org/wiki/Estimand",
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Estimand"
      },
      {
        "label": "ICH E9 and E9(R1): statistical principles for clinical trials and the estimand framework",
        "url": "https://www.ich.org/page/efficacy-guidelines"
      }
    ],
    "tldr": "An estimand is a precise statement of what question a trial is answering, including what to do about patients who switch treatment, stop early or start another drug; the ICH E9(R1) framework makes trials write this down before they start.",
    "summary": "Two trials can measure the same endpoint and answer different questions. If a control patient crosses over to the experimental drug at progression, does the overall survival comparison ask what happens under the policy of assigning the drug (whatever patients later receive), or what would have happened had nobody crossed over? If a patient stops the drug for toxicity, is their later progression counted against the drug, or is the question about the effect while on treatment? These things that happen after randomisation and change what is measured are called intercurrent events, and the estimand framework in the 2019 addendum ICH E9(R1) requires a trial to name, for each one, the strategy it will use: treatment policy (count everything that happens, the classic intention-to-treat approach), hypothetical (estimate what would have happened without the event, as crossover adjustment does), composite (treat the event as part of the outcome), while-on-treatment, or principal stratum (restrict to the patients in whom the event would not occur under either arm).\n\nThe framework turns familiar arguments into explicit choices. The crossover debate over VISION and PSMAfore, where most control patients received the radioligand at progression, is a disagreement about estimands: the treatment policy estimand showed little overall survival difference, and the hypothetical estimand estimated by crossover-adjustment methods showed a larger one, and each answers a legitimate but different question. Intention-to-treat and per-protocol analyses in a non-inferiority trial such as PERSEPHONE are two estimands for the same data. Trials that add a new drug on top of a control that patients may later receive anyway, as in many adjuvant designs, are asking a treatment-policy question whether they say so or not.\n\nFor readers the practical use is a checklist: what population, what variable, what happens to the number when patients switch, stop or are lost, and what summary (a hazard ratio, a difference in proportions at a landmark) is reported. A trial that states its estimand in the protocol and reports sensitivity analyses under the alternatives is harder to spin than one that picks the most flattering analysis after the fact. Regulators now expect the estimand to be specified for the primary endpoint of every confirmatory trial.",
    "related": [
      "crossover"
    ],
    "trials": [
      "vision",
      "psmafore"
    ]
  },
  {
    "kind": "term",
    "asOf": "2026-09-09",
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Gray_(unit)"
      }
    ],
    "id": "gray-unit",
    "name": "Gray unit (Gy)",
    "category": "Treatment jargon",
    "aka": [
      "cGy",
      "centigray",
      "EQD2",
      "BED",
      "biologically effective dose",
      "dose escalation",
      "dose-escalated",
      "radiation dose",
      "absorbed dose",
      "prescribed dose",
      "total dose",
      "60 Gy",
      "70 Gy",
      "GBq",
      "MBq",
      "becquerel"
    ],
    "tldr": "The unit of radiation dose absorbed by tissue: one gray is one joule per kilogram. A curative course is typically 50-70 Gy in total; a single bone-pain treatment is 8 Gy. Radiopharmaceuticals are prescribed by activity in becquerels (GBq) instead.",
    "summary": "Because biological effect depends on both total dose and dose per fraction, different schedules are compared with the equivalent dose in 2 Gy fractions (EQD2) or biologically effective dose (BED); cervical brachytherapy aims for ≥85 Gy EQD2, early lung SBRT for BED ≥100 Gy. Dose escalation beyond 60 Gy did not help in stage III lung cancer (RTOG 0617) but did in prostate cancer. For radioligand therapy the administered activity (7.4 GBq of 177Lu-PSMA-617) is fixed, and dosimetry estimates the resulting gray to tumour and kidneys. Whole-body doses above about 4 Gy are lethal without marrow rescue, which is the basis of total body irradiation conditioning.",
    "wikipedia": "https://en.wikipedia.org/wiki/Gray_(unit)",
    "technologies": [
      "radioligand-therapy"
    ],
    "related": [
      "dosimetry"
    ]
  },
  {
    "kind": "term",
    "asOf": "2026-09-09",
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Biological_half-life"
      }
    ],
    "id": "half-life",
    "name": "Half-life",
    "category": "Clinic basics",
    "aka": [
      "half-lives",
      "half life",
      "plasma half-life",
      "elimination half-life",
      "pharmacokinetics",
      "pharmacokinetic",
      "PK",
      "cleared from the body",
      "drug exposure",
      "peak concentration",
      "Cmax",
      "AUC",
      "steady state",
      "steady-state"
    ],
    "tldr": "The time it takes for the amount of a drug in the blood to fall by half. It sets how often a drug must be given: hours to a day for small molecules such as kinase inhibitors, so they are taken daily, and two to four weeks for antibodies, so they are given every three or six weeks.",
    "summary": "Small molecules are typically cleared by the liver and kidneys within hours to a day, so kinase inhibitors are taken daily; antibodies are protected from breakdown by recycling receptors and persist for two to four weeks, allowing dosing every three or six weeks. Half-life shapes both benefit and harm: a long-lived checkpoint inhibitor keeps working, and keeps causing immune side effects, for months after the last dose, while a radioactive drug's physical half-life (6.6 days for lutetium-177, 10 days for actinium-225) determines how long it irradiates the tumour. Pharmacokinetics is the study of these processes, and matching dose and schedule to them is central to dose optimisation.",
    "wikipedia": "https://en.wikipedia.org/wiki/Biological_half-life",
    "related": [
      "alpha-vs-beta",
      "dosimetry"
    ],
    "technologies": [
      "radioligand-therapy"
    ]
  },
  {
    "kind": "term",
    "asOf": "2026-09-09",
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Ligand_(biochemistry)"
      }
    ],
    "id": "ligand",
    "name": "Ligand",
    "category": "Biology basics",
    "aka": [
      "ligands",
      "binding partner"
    ],
    "tldr": "The molecule that fits into a receptor and switches it on: growth factors, hormones and cytokines are all ligands. Cancers make their own ligands or mutate receptors so none is needed, and some drugs act on the ligand itself, as bevacizumab does by soaking up VEGF.",
    "summary": "Ligand binding changes the receptor's shape and starts a signal inside the cell; the specificity of the fit is why one growth factor activates one family of receptors. Cancers exploit ligands by making their own (autocrine signalling), by persuading neighbouring cells to make them, or by mutating receptors so they no longer need the ligand at all. Several drugs act on ligands rather than receptors: bevacizumab soaks up VEGF before it can reach its receptor, and 'radioligands' are small molecules or peptides that bind a receptor such as PSMA to deliver radiation.",
    "wikipedia": "https://en.wikipedia.org/wiki/Ligand_(biochemistry)",
    "targets": [
      "psma"
    ],
    "technologies": [
      "radioligand-therapy"
    ]
  },
  {
    "kind": "term",
    "asOf": "2026-09-09",
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Prostate_cancer#Castration-resistant_prostate_cancer"
      }
    ],
    "id": "mcrpc-mhspc",
    "name": "mCRPC and mHSPC (castration-resistant vs hormone-sensitive prostate cancer)",
    "category": "Treatment jargon",
    "aka": [
      "castration-resistant",
      "castration resistant",
      "castrate-resistant",
      "mCRPC",
      "nmCRPC",
      "CRPC",
      "castration-sensitive",
      "castration sensitive",
      "hormone-sensitive",
      "hormone sensitive",
      "mHSPC",
      "mCSPC",
      "HSPC",
      "hormone-naive",
      "hormone-refractory",
      "biochemical recurrence",
      "PSA recurrence",
      "rising PSA",
      "PSA progression",
      "rPFS"
    ],
    "tldr": "Prostate cancer starts out fed by testosterone (hormone-sensitive) and shrinks when it is removed. When it learns to grow despite castrate testosterone levels it is called castration-resistant, a later and more dangerous stage with its own treatments.",
    "summary": "Metastatic hormone-sensitive disease (mHSPC) is treated with androgen deprivation plus an ARPI (abiraterone, enzalutamide, apalutamide, darolutamide) and sometimes docetaxel (STAMPEDE, LATITUDE, ARASENS), which delays castration resistance by years. Castration-resistant disease (CRPC), defined by PSA or radiographic progression with testosterone <50 ng/dL, arises through androgen receptor amplification, mutations, splice variants (AR-V7) and intratumoural androgen synthesis; it is treated with ARPI switch, docetaxel and cabazitaxel, PARP inhibitors for HRR mutations, 177Lu-PSMA-617 (VISION, PSMAfore) and radium-223. Non-metastatic CRPC (rising PSA, clear scans) has its own approvals. Radiographic PFS (rPFS) is the usual endpoint.",
    "wikipedia": "https://en.wikipedia.org/wiki/Prostate_cancer#Castration-resistant_prostate_cancer",
    "indications": [
      "prostate"
    ],
    "trials": [
      "stampede",
      "vision",
      "psmafore"
    ],
    "drugs": [
      "abiraterone",
      "enzalutamide"
    ],
    "related": [
      "arpi"
    ]
  },
  {
    "kind": "term",
    "asOf": "2026-09-17",
    "category": "Regulation & policy",
    "id": "medicare-ced",
    "name": "Medicare coverage with evidence development",
    "aka": [
      "coverage with evidence development",
      "CED",
      "national coverage determination",
      "national coverage determinations",
      "NCD 90.2",
      "Medicare NGS coverage",
      "Medicare coverage of cancer drugs",
      "protected classes"
    ],
    "links": [
      {
        "label": "CMS: coverage with evidence development",
        "url": "https://www.cms.gov/medicare/coverage/evidence"
      },
      {
        "label": "CMS: Medicare Coverage Database",
        "url": "https://www.cms.gov/medicare-coverage-database/"
      }
    ],
    "tldr": "Medicare's way of paying for a promising but uncertain test or treatment only for patients enrolled in a registry or study, used for PET scans in cancer from 2006 and now the frame for how Medicare covers gene panels and cell therapies.",
    "summary": "United States, agency guidance under the Social Security Act. Coverage with evidence development (CED) lets the Centers for Medicare and Medicaid Services issue a national coverage determination that pays for an item only when the patient is in an approved study or registry, under section 1862(a)(1)(E) of the Social Security Act. CMS set out the policy in 2006 guidance, revised in 2014 and again in 2024. Primary text: the CMS CED page and the Medicare Coverage Database.\n\nOncology examples: FDG-PET for most cancers was covered from 2006 through the National Oncologic PET Registry, which then generated the evidence that led to unrestricted coverage in 2009 and 2013. National coverage determination 90.2 (March 2018, widened in 2020) covers FDA-approved next-generation sequencing companion diagnostics for patients with advanced cancer, and germline testing for hereditary cancer. CAR-T therapy received a national coverage determination in August 2019 after an initial proposal to impose CED was dropped. More broadly, Medicare Part B must cover anti-cancer drugs for uses supported by the statutory compendia, and Part D treats antineoplastics as a protected class, so unlike Europe there is no national decision on whether a cancer drug is worth its price.\n\nThe arguments: CED is praised for turning coverage into evidence and criticised for slow registries that never end; the compendia rule and protected classes are why the United States pays for nearly every approved cancer drug at list price, which the Inflation Reduction Act's negotiation programme begins to change.",
    "tags": [
      "law",
      "us"
    ]
  },
  {
    "kind": "term",
    "asOf": "2026-09-07",
    "id": "net-grade-ki67",
    "name": "Neuroendocrine tumour grade (Ki-67) and WHO classification",
    "category": "Pathology",
    "wikipedia": "https://en.wikipedia.org/wiki/Neuroendocrine_tumor",
    "tldr": "How fast the tumour cells are dividing, measured by Ki-67 staining, separates slow-growing neuroendocrine tumours from aggressive neuroendocrine carcinomas and decides the treatment.",
    "summary": "WHO 2019/2022: well-differentiated NET grade 1 (Ki-67 <3%), grade 2 (3-20%), grade 3 (>20%, well-differentiated); poorly differentiated neuroendocrine carcinoma (NEC, small- or large-cell) is a separate lineage treated like small-cell lung cancer. Grade drives choice among somatostatin analogues, PRRT, targeted therapy and chemotherapy.",
    "indications": [
      "neuroendocrine",
      "sclc",
      "grade-3-net"
    ],
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Neuroendocrine_tumor"
      }
    ]
  },
  {
    "kind": "term",
    "asOf": "2026-09-04",
    "links": [
      {
        "label": "NCI Dictionary of Cancer Terms: oligometastasis",
        "url": "https://www.cancer.gov/publications/dictionaries/cancer-terms/def/oligometastasis"
      },
      {
        "label": "Lievens et al., Defining oligometastatic disease from a radiation oncology perspective: an ESTRO-ASTRO consensus (Radiotherapy and Oncology 2020)",
        "url": "https://doi.org/10.1016/j.radonc.2020.04.003"
      }
    ],
    "id": "oligometastatic",
    "name": "Oligometastatic disease",
    "category": "Clinical",
    "tldr": "Cancer that has spread to only a few places, which may still be curable by treating each spot.",
    "summary": "Oligometastatic disease is cancer that has spread to only a few sites, usually no more than three to five metastases, and may still be curable if each spot is treated. The SABR-COMET trial supported metastasis-directed SBRT / SABR (stereotactic radiotherapy), and the ESTRO/EORTC classification distinguishes synchronous, oligorecurrent and oligoprogressive disease, the last covered by the related term Oligoprogression. PSMA PET has expanded detection of this state in Prostate cancer, and the term is also referenced by the Renal cell carcinoma entry and the bottleneck on metastasis biology. Ideas building on it include PSMA-PET-guided metastasis-directed therapy as a curative strategy and a test to tell true oligometastatic disease from hidden widespread spread.",
    "technologies": [
      "psma-pet"
    ]
  },
  {
    "kind": "term",
    "asOf": "2026-09-04",
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Antibody-drug_conjugate"
      }
    ],
    "id": "payload",
    "name": "Payload (ADC)",
    "category": "ADC chemistry",
    "tldr": "The payload is the poison an ADC carries, usually a chemotherapy far too toxic to give on its own.",
    "summary": "The payload is the cytotoxic warhead conjugated to the antibody. Classes: tubulin inhibitors (MMAE, MMAF, DM1, DM4), topoisomerase-I inhibitors (DXd, SN-38, exatecan, belotecan derivatives), DNA-damaging agents (PBD dimers, calicheamicin, duocarmycin). Newer payloads: degraders, immune agonists, radionuclides. Membrane permeability determines bystander killing.",
    "wikipedia": "https://en.wikipedia.org/wiki/Antibody-drug_conjugate"
  },
  {
    "kind": "term",
    "asOf": "2026-09-09",
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Pharmacokinetics"
      }
    ],
    "id": "pharmacokinetics",
    "name": "Pharmacokinetics (PK), half-life and exposure",
    "category": "Treatment jargon",
    "aka": [
      "pharmacokinetic",
      "pharmacokinetics",
      "PK/PD",
      "pharmacodynamics",
      "half-life",
      "half life",
      "exposure-response",
      "exposure–response",
      "drug exposure",
      "AUC",
      "Cmax",
      "steady state",
      "steady-state",
      "bioavailability",
      "oral bioavailability",
      "drug-drug interaction",
      "CYP3A4",
      "food effect",
      "therapeutic drug monitoring",
      "TDM",
      "flat dosing",
      "weight-based dosing",
      "body surface area",
      "mg/m²",
      "mg/kg",
      "pharmacodynamic"
    ],
    "tldr": "How a drug moves through the body: how much is absorbed, how high the blood level gets, how long it lasts (half-life) and how it is cleared. These numbers decide the dose, the schedule and whether a pill can be taken with food or other medicines.",
    "summary": "Antibodies have half-lives of 2-4 weeks and are dosed every 2-6 weeks, often now at flat doses (pembrolizumab 400 mg q6w) rather than by weight; small molecules are dosed daily and interact with CYP3A4 inhibitors, acid suppressants and food; chemotherapy is dosed by body surface area with organ-function adjustments. Exposure-response analyses link drug levels to efficacy and toxicity and underpin Project Optimus's push to find optimal rather than maximal doses; therapeutic drug monitoring is used for busulfan, methotrexate and increasingly for TKIs. Radiopharmaceutical PK determines tumour versus kidney and marrow dose (dosimetry). Poor oral bioavailability has ended more than one promising drug's development.",
    "wikipedia": "https://en.wikipedia.org/wiki/Pharmacokinetics",
    "related": [
      "dosimetry"
    ]
  },
  {
    "kind": "term",
    "asOf": "2026-09-09",
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Prostatectomy"
      }
    ],
    "id": "prostatectomy",
    "name": "Radical prostatectomy",
    "category": "Procedures",
    "aka": [
      "prostatectomy",
      "robotic prostatectomy",
      "robot-assisted prostatectomy",
      "prostatectomies"
    ],
    "tldr": "Removing the entire prostate gland and seminal vesicles for localised prostate cancer, now almost always with a robot.",
    "summary": "One of three options for localised disease alongside radiotherapy and active surveillance; ProtecT showed identical 15-year prostate cancer mortality (~3%) across all three. Robot-assisted laparoscopic prostatectomy dominates in high-income countries with nerve-sparing techniques to reduce erectile dysfunction, but incontinence (5-20%) and impotence (30-70%) remain the main harms. PSA should become undetectable; a rise afterwards (biochemical recurrence) is imaged with PSMA PET and treated with salvage radiotherapy.",
    "wikipedia": "https://en.wikipedia.org/wiki/Prostatectomy",
    "indications": [
      "prostate"
    ],
    "technologies": [
      "psma-pet"
    ]
  },
  {
    "kind": "term",
    "asOf": "2026-09-09",
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Peptide_receptor_radionuclide_therapy"
      }
    ],
    "id": "prrt-term",
    "name": "PRRT (peptide receptor radionuclide therapy)",
    "category": "Treatment jargon",
    "aka": [
      "PRRT",
      "peptide receptor radionuclide therapy",
      "177Lu-DOTATATE",
      "lutetium DOTATATE",
      "DOTATATE",
      "DOTATOC",
      "somatostatin analogue",
      "somatostatin analogues",
      "SSA",
      "SSAs",
      "SSTR-targeted",
      "SSTR imaging",
      "somatostatin receptor imaging",
      "alpha PRRT"
    ],
    "tldr": "A radioactive drug for neuroendocrine tumours: a small peptide that homes to the somatostatin receptor on the tumour cells carries lutetium-177, which irradiates them from within. Given four times, two months apart.",
    "summary": "Neuroendocrine tumours overexpress somatostatin receptor 2, imaged with gallium-68 or copper-64 DOTATATE PET and treated first with cold somatostatin analogues (octreotide, lanreotide) for symptom and growth control. 177Lu-DOTATATE (NETTER-1, approved 2018) improved progression-free survival dramatically in midgut NETs and NETTER-2 (2024) moved it to first line in high-grade tumours; 177Lu-edotreotide (COMPETE) followed. Alpha-emitting versions (212Pb-DOTAMTATE, 225Ac-DOTATATE) are in phase 3 for PRRT-refractory disease. Toxicities are marrow suppression, kidney dose and a small risk of MDS. Together with radioiodine and PSMA therapy it defines the theranostic model.",
    "wikipedia": "https://en.wikipedia.org/wiki/Peptide_receptor_radionuclide_therapy",
    "indications": [
      "neuroendocrine"
    ],
    "targets": [
      "sstr2"
    ],
    "technologies": [
      "radioligand-therapy",
      "targeted-alpha-therapy"
    ],
    "drugs": [
      "ga68-dotatate"
    ],
    "related": [
      "prrt",
      "theranostics",
      "dosimetry",
      "radioiodine-therapy",
      "alpha-vs-beta"
    ]
  },
  {
    "kind": "term",
    "asOf": "2026-09-17",
    "category": "Biomarkers",
    "id": "psa-kinetics",
    "name": "PSA kinetics: PSA doubling time and PSA density",
    "aka": [
      "PSA doubling time",
      "PSADT",
      "PSA velocity",
      "PSA density",
      "PSAD",
      "PSA kinetics",
      "PSA rise",
      "rising PSA",
      "biochemical recurrence PSA threshold",
      "PSA nadir",
      "PSA response",
      "PSA50",
      "PSA90",
      "PSA progression"
    ],
    "tldr": "How fast PSA is rising matters more than its level: a doubling time under ten months after surgery or radiotherapy, or under nine months in castration-resistant disease, marks the men whose cancer is moving quickly and who benefit from earlier hormone therapy or a PSMA scan, while PSA density (PSA divided by prostate volume) helps decide who needs a biopsy at all.",
    "summary": "What is measured: the rate of change of prostate-specific antigen and its concentration relative to gland size. How: doubling time is calculated by log-linear regression from at least three values over at least three months; density is PSA (ng/mL) divided by prostate volume (mL) on MRI or ultrasound, with 0.15 (0.10 with MRI) the usual threshold. Confounders: 5-alpha-reductase inhibitors halve PSA, prostatitis raises it. What a result changes: after radical prostatectomy a PSA of 0.2 ng/mL or more defines biochemical recurrence, and the EAU splits it into low and high risk by a doubling time of a year or less or a Gleason grade group of 4 or 5, which sets the urgency of salvage radiotherapy and whether hormone therapy is added; PSMA PET is positive in most men above 0.5 ng/mL; in non-metastatic castration-resistant disease a doubling time of ten months or less was the entry criterion for SPARTAN (apalutamide), PROSPER (enzalutamide) and ARAMIS (darolutamide), which lengthened metastasis-free and overall survival; a density above 0.15 with a PI-RADS 3 lesion tips towards biopsy, and density is an entry criterion for active surveillance (PRIAS 0.2 or less); in metastatic castration-resistant disease a 50 percent PSA fall (PSA50) is a trial endpoint, and a PSA under 0.2 at seven months of hormone therapy predicts long survival. Where it matters: biochemical recurrence, low-risk, non-metastatic castration-resistant and metastatic castration-resistant prostate cancer.",
    "indications": [
      "prostate-bcr",
      "prostate-nmcrpc",
      "prostate-mcrpc"
    ],
    "related": [
      "psma-pet",
      "enzalutamide"
    ]
  },
  {
    "kind": "term",
    "asOf": "2026-09-06",
    "id": "psa50",
    "wikipedia": "https://en.wikipedia.org/wiki/Prostate-specific_antigen",
    "links": [
      {
        "label": "PCWG3 trial design recommendations incl. PSA response reporting (Scher et al., J Clin Oncol 2016)",
        "url": "https://doi.org/10.1200/JCO.2015.64.2702"
      }
    ],
    "name": "PSA50 / PSA90 response",
    "category": "Endpoints",
    "tldr": "PSA50 is the share of patients whose PSA falls by at least half on treatment, and PSA90 the share whose PSA falls by 90%.",
    "summary": "PSA50 is the proportion of patients whose PSA falls by at least half on treatment, and PSA90 the proportion whose PSA falls by nine tenths or more. Both are standard early-efficacy read-outs in trials of metastatic castration-resistant prostate cancer, reported under the PCWG3 recommendations, and readers meet them in the VISION and TheraP radioligand trials and on the page for xaluritamig. A PSA response correlates with, but does not replace, radiographic progression-free survival and overall survival. The endpoint can also end a development programme early: a PSA90 futility analysis stopped masofaniten's phase 2. The term extends the PSA entry, which describes the underlying marker.",
    "indications": [
      "prostate"
    ]
  },
  {
    "kind": "term",
    "asOf": "2026-09-17",
    "tags": [
      "radiation-wave1"
    ],
    "id": "radiation-necrosis",
    "name": "Radiation necrosis (brain)",
    "category": "Side effects",
    "wikipedia": "https://en.wikipedia.org/wiki/Radiation_necrosis",
    "tldr": "Death of brain tissue months to years after radiosurgery or high-dose brain radiotherapy, which can look exactly like tumour growing back on a scan.",
    "summary": "Radiation necrosis affects a minority of patients after stereotactic radiosurgery to brain metastases and after high-dose treatment of gliomas, more often with larger volumes and with concurrent immunotherapy or targeted drugs. It causes swelling and symptoms that mimic progression; perfusion MRI, amino-acid PET and sometimes biopsy separate the two. Treatment is steroids, bevacizumab for refractory cases, and occasionally surgery or laser ablation.",
    "indications": [
      "glioblastoma"
    ],
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Radiation_necrosis"
      }
    ]
  },
  {
    "kind": "term",
    "asOf": "2026-09-09",
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Iodine-131"
      }
    ],
    "id": "radioiodine-term",
    "name": "Radioiodine therapy (I-131)",
    "category": "Treatment jargon",
    "aka": [
      "radioiodine",
      "radioactive iodine",
      "radioiodine ablation",
      "radioiodine therapy",
      "I-131",
      "131I",
      "iodine-131",
      "RAI-refractory",
      "radioiodine-refractory",
      "RAI-avid",
      "radioiodine-avid",
      "iodine-avid",
      "iodine uptake",
      "redifferentiation",
      "recombinant TSH",
      "rhTSH"
    ],
    "tldr": "Swallowing a capsule of radioactive iodine after thyroid surgery: thyroid cells (including cancer cells) are the only ones that soak up iodine, so the radiation destroys leftover thyroid tissue and metastases while sparing everything else. It was the first targeted radiotherapy, in 1946.",
    "summary": "Differentiated (papillary and follicular) thyroid cancer retains iodine uptake, so I-131 ablates remnant tissue after total thyroidectomy in intermediate- and high-risk patients and treats iodine-avid metastases; low-risk patients no longer need it (ESTIMABL2, IoN). Thyroglobulin and whole-body scans monitor for recurrence. 'Radioiodine-refractory' disease (about 5-15%, more in poorly differentiated and BRAF-mutant tumours) is treated with lenvatinib, sorafenib or targeted drugs for RET, NTRK and BRAF alterations, and MEK/BRAF inhibitors can restore iodine uptake ('redifferentiation'). Side effects are salivary gland damage, dry mouth and a small excess of secondary cancers at high cumulative doses.",
    "wikipedia": "https://en.wikipedia.org/wiki/Iodine-131",
    "indications": [
      "thyroid"
    ],
    "drugs": [
      "sorafenib"
    ],
    "related": [
      "radioiodine-therapy",
      "theranostics",
      "prrt"
    ]
  },
  {
    "kind": "term",
    "asOf": "2026-09-09",
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Radiation_therapy"
      }
    ],
    "id": "radiotherapy",
    "name": "Radiotherapy",
    "category": "Clinic basics",
    "aka": [
      "radiation therapy",
      "radiation treatment",
      "radiation",
      "irradiation",
      "irradiated",
      "radiotherapy fractions",
      "fractionation",
      "hypofractionated",
      "chemoradiotherapy",
      "chemoradiation",
      "radiation oncology",
      "radiation oncologist",
      "radiosensitiser",
      "radiosensitizer",
      "radiosensitive",
      "radioresistant",
      "external beam",
      "radiation oncologists",
      "radiosensitisers"
    ],
    "tldr": "Using high-energy X-rays or particles to damage the DNA of cancer cells in a precisely aimed volume of the body. On its own it cures early prostate, larynx, cervix and skin cancers, it is combined with chemotherapy in head and neck, lung, oesophageal and rectal cancers, and about half of all cancer patients receive it.",
    "summary": "Modern radiotherapy shapes beams to the tumour from several angles (IMRT, image-guided and stereotactic techniques) so that the tumour gets a lethal dose while surrounding tissue gets much less; treatment is usually split into daily fractions over one to seven weeks to let normal tissue repair, though ultra-short courses (SBRT) are increasingly used. It is a local therapy, curative on its own in early prostate, larynx, cervix and skin cancers, combined with chemotherapy in head and neck, lung, oesophageal and rectal cancers, and used after surgery to sterilise the operative bed. Protons and carbon ions spare more normal tissue; radiation may also help immunotherapy by releasing tumour antigens (the abscopal effect), and radioligand therapy delivers radiation internally through a targeting molecule.",
    "wikipedia": "https://en.wikipedia.org/wiki/Radiation_therapy",
    "technologies": [
      "radioligand-therapy"
    ]
  },
  {
    "kind": "term",
    "asOf": "2026-09-17",
    "category": "Biomarkers",
    "id": "sdh-deficiency",
    "name": "SDH deficiency (SDHB immunohistochemistry loss)",
    "aka": [
      "SDH-deficient",
      "SDH-deficient GIST",
      "SDHB immunohistochemistry",
      "SDHB loss",
      "SDHB-negative",
      "SDHx",
      "SDHx mutation",
      "SDHA",
      "SDHC epimutation",
      "SDHC promoter methylation",
      "succinate dehydrogenase deficiency",
      "Carney-Stratakis syndrome",
      "Carney triad",
      "KIT/PDGFRA wild-type GIST",
      "hereditary paraganglioma syndrome",
      "SDH-deficient renal cell carcinoma"
    ],
    "tldr": "Loss of the succinate dehydrogenase enzyme, shown by a negative SDHB stain, marks a small family of tumours (some stomach GISTs, paragangliomas and phaeochromocytomas, a rare kidney cancer) that are often inherited, occur in young people, ignore imatinib and grow slowly; the stain is the trigger for germline testing of the whole family.",
    "summary": "What is measured: loss of the mitochondrial succinate dehydrogenase complex. How: SDHB immunohistochemistry on the tumour (loss of granular cytoplasmic staining whichever subunit is mutated; SDHA staining is lost only with SDHA mutation), followed by germline and tumour sequencing of SDHA, SDHB, SDHC, SDHD and SDHAF2 and, if negative, testing for SDHC promoter methylation (the epimutation behind the Carney triad). Where it occurs: 5 to 7 percent of GISTs (almost all gastric, in young and often female patients, multifocal, epithelioid, with nodal metastases and an indolent course; Carney-Stratakis syndrome pairs them with paragangliomas), 30 to 40 percent of paragangliomas and phaeochromocytomas (SDHB carriers have the highest metastatic risk), SDH-deficient renal cell carcinoma and some pituitary adenomas. What a result changes: an SDH-deficient GIST does not respond to imatinib because it does not depend on KIT, sunitinib and regorafenib help modestly, temozolomide is under study because of the tumours' hypermethylation, surgery is kept conservative because multifocality and nodal disease are the rule, and follow-up is lifelong; a germline finding leads to cascade testing, whole-body MRI surveillance every two to three years and plasma metanephrines; metastatic paraganglioma is treated with lutetium-177 DOTATATE or iodine-131 MIBG, and HIF-2 alpha inhibitors such as belzutifan are in trials. Where it matters: GIST, imatinib-resistant GIST and the rare childhood cancers page.",
    "related": [
      "sunitinib",
      "temozolomide",
      "lutathera"
    ]
  },
  {
    "kind": "term",
    "asOf": "2026-09-09",
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Sentinel_lymph_node"
      }
    ],
    "id": "sentinel-lymph-node-biopsy",
    "name": "Sentinel node biopsy",
    "category": "Procedures",
    "aka": [
      "sentinel lymph node biopsy",
      "sentinel lymph node",
      "sentinel node",
      "sentinel lymph node mapping",
      "SLNB"
    ],
    "tldr": "Finding and removing the first one or two lymph nodes a tumour drains to, to see whether cancer has spread, instead of removing the whole nodal basin.",
    "summary": "A dye or radioactive tracer (technetium tilmanocept, indocyanine green, blue dye) injected at the tumour travels to the 'sentinel' node, which is removed and examined. If it is clear, the remaining nodes are almost certainly clear and a full dissection with its lymphoedema risk is avoided. Standard in breast cancer, melanoma (from ~0.8 mm Breslow), endometrial and vulval cancers and increasingly oral cavity cancer; even positive sentinel nodes often no longer trigger full axillary dissection (Z0011, SENOMAC).",
    "wikipedia": "https://en.wikipedia.org/wiki/Sentinel_lymph_node",
    "related": [
      "tilmanocept-tc99m"
    ]
  },
  {
    "kind": "term",
    "asOf": "2026-09-04",
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Standardized_uptake_value"
      }
    ],
    "id": "suv",
    "name": "Standardised uptake value (SUV)",
    "category": "Diagnostics & imaging",
    "tldr": "The standardised uptake value (SUV) is a number for how brightly a spot lights up on a PET scan.",
    "summary": "The standardised uptake value (SUV) is the number radiologists use to say how brightly a spot lights up on a PET scan. It is tissue radioactivity normalised to the injected dose and body weight, and SUVmax is the most widely used version. Values are affected by the scanner, the uptake time and blood glucose, and the PERCIST response criteria use SUL, a lean-body variant, instead. The term belongs to the PET (positron emission tomography) and FDG PET technology entries and to the Fludeoxyglucose F-18 (FDG) drug record, and it is referenced by the Cancer metabolism pathway, the Warburg effect, the Society of Nuclear Medicine and Molecular Imaging, and ideas on de-acidifying tumours so T cells can work and on a phase 0 fund using microdoses and imaging.",
    "wikipedia": "https://en.wikipedia.org/wiki/Standardized_uptake_value",
    "technologies": [
      "pet",
      "fdg-pet"
    ]
  },
  {
    "kind": "term",
    "asOf": "2026-09-09",
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Selective_internal_radiation_therapy"
      }
    ],
    "id": "tare",
    "name": "TARE / SIRT (radioembolisation with yttrium-90)",
    "category": "Procedures",
    "aka": [
      "TARE",
      "SIRT",
      "radioembolisation",
      "radioembolization",
      "Y-90",
      "Y90",
      "yttrium-90",
      "selective internal radiation therapy",
      "90Y microspheres"
    ],
    "tldr": "Injecting tiny radioactive glass or resin beads into the liver's artery so they lodge in the tumour and irradiate it from inside.",
    "summary": "Yttrium-90 microspheres (20-60 µm) deliver beta radiation over a few millimetres with a 64-hour half-life, treating hepatocellular carcinoma, colorectal liver metastases and neuroendocrine liver metastases. Randomised trials against sorafenib (SARAH, SIRveNIB) showed no survival gain but better tolerability; radiation segmentectomy, which delivers ablative doses to a small segment, achieves outcomes close to ablation. Dosimetry now individualises the activity (DOSISPHERE). Chosen over TACE when portal vein thrombus is present.",
    "wikipedia": "https://en.wikipedia.org/wiki/Selective_internal_radiation_therapy",
    "indications": [
      "hcc",
      "neuroendocrine"
    ]
  },
  {
    "kind": "term",
    "asOf": "2026-09-04",
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Theranostics"
      }
    ],
    "id": "theranostics",
    "aka": [
      "theranostic"
    ],
    "name": "Theranostics",
    "category": "Treatment jargon",
    "tldr": "Using the same targeting molecule for a diagnostic scan and a therapy, so you treat exactly what you can see.",
    "summary": "Theranostics uses the same targeting molecule for a diagnostic scan and for therapy, so clinicians treat exactly what they can see. The established pairs are gallium-68 or fluorine-18 PSMA imaging with lutetium-177 or actinium-225 PSMA therapy, gallium-68 DOTATATE with lutetium-177 DOTATATE, and iodine-123 with iodine-131, and one chemistry thereby enables patient selection, dosimetry and response assessment. The concept links the Radioligand therapy (beta emitters), Targeted alpha therapy and PSMA PET technologies with Somatostatin receptor PET, Radioiodine therapy and the pairings PSMA PET to PSMA radioligand therapy and SSTR PET to PRRT. It is referenced by the Prostate cancer, Thyroid cancer and Neuroendocrine tumours entries and by Clarity Pharmaceuticals.",
    "wikipedia": "https://en.wikipedia.org/wiki/Theranostics",
    "technologies": [
      "radioligand-therapy",
      "psma-pet",
      "targeted-alpha-therapy"
    ]
  },
  {
    "kind": "term",
    "asOf": "2026-09-09",
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Thrombocytopenia"
      }
    ],
    "id": "thrombocytopenia",
    "name": "Thrombocytopenia",
    "category": "Side effects",
    "aka": [
      "thrombocytopaenia",
      "low platelets",
      "platelet count",
      "platelet transfusion",
      "bleeding risk",
      "grade 3-4 thrombocytopenia",
      "immune thrombocytopenia",
      "ITP",
      "thrombopoietin receptor agonist",
      "platelet transfusions"
    ],
    "tldr": "Too few platelets, the blood cells that form clots, caused by chemotherapy or by the cancer in the marrow. Mild cases cause bruising; severe cases (under 10-20 × 10⁹/L) risk serious bleeding and need platelet transfusions.",
    "summary": "Common with carboplatin, gemcitabine, temozolomide, lurbinectedin, PARP inhibitors (niraparib especially), radioligand therapies and in leukaemia and myeloma; it limits dose more often than neutropenia for some regimens because no growth factor is routinely used (romiplostim and avatrombopag are being trialled). Grade 4 is <25 × 10⁹/L. It also complicates anticoagulation for cancer-associated thrombosis and procedures such as biopsies and central line placement. Cirrhosis with portal hypertension causes chronic thrombocytopenia that constrains liver cancer treatment, and immune thrombocytopenia is an immune-related adverse event of checkpoint inhibitors.",
    "wikipedia": "https://en.wikipedia.org/wiki/Thrombocytopenia",
    "related": [
      "cytopenias",
      "anaemia"
    ]
  },
  {
    "kind": "term",
    "asOf": "2026-09-17",
    "tags": [
      "radiation-wave1"
    ],
    "id": "tumour-hypoxia",
    "name": "Tumour hypoxia",
    "category": "Biology basics",
    "wikipedia": "https://en.wikipedia.org/wiki/Tumor_hypoxia",
    "tldr": "Regions of a tumour that have outgrown their blood supply and are short of oxygen. They resist radiotherapy and some chemotherapy, and drive the tumour to become more aggressive.",
    "summary": "Fast-growing tumours have chaotic, leaky blood vessels, leaving pockets of cells living on very little oxygen. Hypoxic cells need up to three times the radiation dose to be killed, switch on HIF-driven survival programmes, become more invasive and are selected for genomic instability. Hypoxia can be imaged with PET tracers, measured by gene signatures and targeted with sensitisers, hypoxia-activated drugs, hyperthermia and dose escalation.",
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Tumor_hypoxia"
      }
    ]
  }
];
