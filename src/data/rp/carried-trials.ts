/**
 * Trials: records carried over from Nuclide.
 *
 * Carried over from the Nuclide corpus (https://github.com/casadesante/Nuclide), CC BY-NC 4.0, and narrowed to
 * radiopharmaceutical use. Facts and sources are as Nuclide held them on the `asOf` date of each record;
 * check anything that matters at the primary source each record links.
 */
import type { EntityInput } from "@/lib/schema";

export const carriedTrials: EntityInput[] = [
  {
    "kind": "trial",
    "asOf": "2026-09-07",
    "id": "action-1",
    "name": "ACTION-1",
    "nct": "NCT05477576",
    "phase": "3",
    "status": "recruiting",
    "sponsor": "BMS (RayzeBio)",
    "setting": "SSTR-positive GEP-NETs progressing after 177Lu somatostatin-analogue therapy: 225Ac-DOTATATE (RYZ101) vs investigator's choice",
    "tldr": "Tests whether an actinium alpha-radioligand rescues neuroendocrine tumours after lutetium therapy fails.",
    "summary": "ACTION-1, trial NCT05477576 sponsored by Bristol Myers Squibb through RayzeBio, tests whether the actinium-225 alpha-radioligand RYZ101, or 225Ac-DOTATATE, rescues somatostatin-receptor-positive gastroenteropancreatic neuroendocrine tumours after lutetium-177 somatostatin analogue therapy has failed. Its phase 1b established a fixed dose of 10.2 MBq with encouraging responses, the phase 3 against investigator's choice is enrolling with an interim analysis expected in 2026, and its dosimetry was published in the Journal of Nuclear Medicine in 2026. Nuclide links it to targeted alpha therapy, actinium-225 DOTATATE, lutetium-177 dotatate and the pairing of beta then alpha PRRT. Whether an alpha emitter can overcome resistance to a beta emitter aimed at the same receptor is the question it will answer.",
    "drugs": [
      "ryz101",
      "lutathera"
    ],
    "indications": [
      "neuroendocrine"
    ],
    "technologies": [
      "targeted-alpha-therapy"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT05477576",
        "url": "https://clinicaltrials.gov/study/NCT05477576"
      },
      {
        "label": "ACTION-1 dosimetry (JNM 2026)",
        "url": "https://jnm.snmjournals.org/content/67/8/1239"
      }
    ]
  },
  {
    "kind": "trial",
    "asOf": "2026-09-07",
    "id": "ahod2131",
    "name": "AHOD2131 (COG / NCTN)",
    "nct": "NCT05675410",
    "phase": "3",
    "status": "recruiting",
    "sponsor": "Children's Oncology Group / NCI",
    "setting": "Newly diagnosed stage I-II classical Hodgkin lymphoma, age 5-60: standard therapy vs brentuximab vedotin + nivolumab (response-adapted), with or without radiation",
    "tldr": "Asks whether early-stage Hodgkin lymphoma in children and adults can be treated with immunotherapy instead of some chemotherapy and radiation.",
    "summary": "AHOD2131, trial NCT05675410 run by the Children's Oncology Group and the NCI, asks whether early-stage classical Hodgkin lymphoma in children and adults aged 5 to 60 can be treated with brentuximab vedotin plus nivolumab in a response-adapted design, instead of some chemotherapy and radiation. It uses PET after two cycles to steer therapy, has progression-free survival as its primary endpoint, measures late effects, and is ongoing with no results yet. Nuclide links it to Hodgkin lymphoma, PET-adapted therapy, brentuximab vedotin, nivolumab, the Children's Oncology Group, Kara M. Kelly, the idea of chemotherapy-free early-stage Hodgkin treatment and the S1826 paper. Whether immunotherapy can spare young patients the late effects of chemotherapy and radiation without losing cures is the question it exists to answer.",
    "technologies": [
      "pet-adapted-therapy"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT05675410",
        "url": "https://clinicaltrials.gov/study/NCT05675410"
      }
    ]
  },
  {
    "kind": "trial",
    "asOf": "2026-09-06",
    "id": "alphabreak",
    "name": "AlphaBreak (FPI-2265) & AcTION (225Ac-PSMA-617)",
    "nct": "NCT06402331",
    "phase": "2",
    "status": "active",
    "sponsor": "AstraZeneca (Fusion); Novartis",
    "setting": "PSMA-positive mCRPC: actinium-225 PSMA radioligands vs standard of care, including after 177Lu-PSMA",
    "tldr": "The phase 3 trials that will decide whether alpha-emitting PSMA drugs become the next step after Pluvicto.",
    "summary": "AlphaBreak and AcTION, led by trial NCT06402331, are the phase 3 trials that will decide whether alpha-emitting PSMA drugs become the next step after Pluvicto in PSMA-positive metastatic castration-resistant prostate cancer. AlphaBreak tests FPI-2265, an actinium-225 PSMA-I&T agent from AstraZeneca and Fusion, after lutetium PSMA therapy, while Novartis' AcTION programme tests actinium-225 PSMA-617 in post-lutetium and lutetium-naive settings, and Bayer's PAnTHA phase 1 of 225Ac-PSMA-Trillium reported at ASCO GU 2026; the record lists an enrolment target of 600. Nuclide links them to targeted alpha therapy, the actinium-225 PSMA agents record, and to Fusion, AstraZeneca, Novartis and Bayer. Both are recruiting with no results, dry mouth and actinium-225 supply are the constraints, and whether alpha emitters help after lutetium is the question they exist to answer.",
    "drugs": [
      "ac225-psma"
    ],
    "indications": [
      "prostate",
      "prostate-mcrpc"
    ],
    "technologies": [
      "targeted-alpha-therapy"
    ],
    "companies": [
      "fusion-pharma",
      "astrazeneca",
      "novartis",
      "bayer"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT06402331",
        "url": "https://clinicaltrials.gov/study/NCT06402331"
      }
    ],
    "enrolled": 600,
    "outcomes": [],
    "replication": "Ongoing phase 3 of 225Ac-PSMA-I&T after 177Lu-PSMA; no results."
  },
  {
    "kind": "trial",
    "asOf": "2026-09-07",
    "id": "alphamedix-02",
    "name": "ALPHAMEDIX-02",
    "nct": "NCT05153772",
    "phase": "2",
    "status": "positive",
    "yearReported": 2025,
    "sponsor": "RadioMedix / Orano Med / Sanofi",
    "setting": "Unresectable or metastatic SSTR-positive GEP-NETs, PRRT-naive and PRRT-exposed cohorts: 212Pb-DOTAMTATE single arm",
    "tldr": "An alpha-emitting radioligand met all its primary endpoints, with responses in more than half of patients new to radioligand therapy.",
    "summary": "ALPHAMEDIX-02, trial NCT05153772 sponsored by RadioMedix, Orano Med and Sanofi and reported in 2025, showed that the alpha-emitting radioligand 212Pb-DOTAMTATE met all its primary endpoints, with responses in more than half of patients with somatostatin-receptor-positive gastroenteropancreatic neuroendocrine tumours who were new to radioligand therapy. In the single-arm phase 2 the objective response rate in PRRT-naive patients was 54.3 percent, most were still progression-free around three years, and the PRRT-exposed cohort was largely progression-free at eighteen months, as Sanofi reported in October 2025; the drug holds Breakthrough Therapy designation and the registrational path is being finalised. Nuclide links it to targeted alpha therapy, PRRT, 212Pb-DOTAMTATE and the pairing of beta then alpha PRRT. Whether a randomised trial confirms superiority over lutetium is the open question.",
    "result": "ORR 54.3% (PRRT-naive); all primary endpoints met.",
    "outcomes": [
      {
        "endpoint": "Objective response rate (PRRT-naive)",
        "primary": true,
        "unit": "%",
        "arms": [
          {
            "name": "212Pb-DOTAMTATE",
            "value": 54.3
          }
        ],
        "source": "https://www.sanofi.com/en/media-room/press-releases/2025/2025-10-08-05-00-00-3163053"
      }
    ],
    "drugs": [
      "alphamedix"
    ],
    "indications": [
      "neuroendocrine"
    ],
    "technologies": [
      "targeted-alpha-therapy",
      "prrt"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT05153772",
        "url": "https://clinicaltrials.gov/study/NCT05153772"
      },
      {
        "label": "Sanofi press release",
        "url": "https://www.sanofi.com/en/media-room/press-releases/2025/2025-10-08-05-00-00-3163053"
      }
    ]
  },
  {
    "kind": "trial",
    "asOf": "2026-09-06",
    "id": "alsympca",
    "name": "ALSYMPCA",
    "nct": "NCT00699751",
    "phase": "3",
    "status": "positive",
    "yearReported": 2013,
    "sponsor": "Bayer / Algeta",
    "setting": "Symptomatic bone-metastatic CRPC without visceral disease: radium-223 vs placebo",
    "tldr": "ALSYMPCA is the trial that won approval for the first alpha-emitting drug.",
    "summary": "ALSYMPCA, trial NCT00699751 sponsored by Bayer and Algeta and reported in 2013, is the trial that won approval for radium-223, the first alpha-emitting drug. It randomised 921 men with symptomatic bone-metastatic castration-resistant prostate cancer and no visceral disease to radium-223 or placebo, met its primary overall survival endpoint and reduced skeletal events. Nuclide links it to prostate cancer, targeted alpha therapy, radium-223 dichloride, A. Oliver Sartor and Karim Fizazi; it was a single pivotal trial, and the later ERA 223 combination with abiraterone was harmful, so use is now restricted to monotherapy in bone-predominant disease. Whether targeted alpha emitters such as actinium-225 PSMA agents can go further than a bone-seeking radium ever could is the question its legacy poses. Radium-223 has its own page.",
    "result": "OS HR 0.70.",
    "drugs": [
      "radium-223"
    ],
    "indications": [
      "prostate",
      "prostate-mcrpc"
    ],
    "technologies": [
      "targeted-alpha-therapy"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT00699751",
        "url": "https://clinicaltrials.gov/study/NCT00699751"
      }
    ],
    "people": [
      "oliver-sartor",
      "karim-fizazi"
    ],
    "enrolled": 921,
    "outcomes": [
      {
        "endpoint": "Overall survival",
        "primary": true,
        "unit": "months",
        "arms": [
          {
            "name": "Radium-223",
            "n": 614,
            "value": 14.9
          },
          {
            "name": "Placebo",
            "n": 307,
            "value": 11.3
          }
        ],
        "hr": 0.7,
        "ci": [
          0.58,
          0.83
        ],
        "p": "<0.001",
        "source": "https://www.nejm.org/doi/full/10.1056/NEJMoa1213755"
      }
    ],
    "replication": "Single pivotal trial; the ERA 223 combination with abiraterone was harmful, so use is now restricted to monotherapy in bone-predominant disease."
  },
  {
    "kind": "trial",
    "asOf": "2026-09-07",
    "id": "anbl1531",
    "name": "COG ANBL1531",
    "nct": "NCT03126916",
    "phase": "3",
    "status": "active",
    "sponsor": "Children's Oncology Group",
    "setting": "Newly diagnosed high-risk neuroblastoma: 131I-MIBG added to induction (randomised, MIBG-avid); lorlatinib added for ALK-aberrant tumours (non-randomised arm)",
    "tldr": "COG ANBL1531 is the current North American high-risk trial, adding targeted radiation during induction and an ALK pill for children whose tumours carry ALK mutations.",
    "summary": "COG ANBL1531, trial NCT03126916 run by the Children's Oncology Group, is the current North American trial for newly diagnosed high-risk neuroblastoma, adding iodine-131 MIBG targeted radiation during induction in a randomised comparison for MIBG-avid tumours and the ALK inhibitor lorlatinib in a non-randomised arm for children whose tumours carry ALK aberrations. It also tests reduced-intensity therapy in the standard arm and tracks uptake of eflornithine maintenance, with the primary MIBG randomisation results expected in 2026 to 2027 and encouraging response rates reported from the lorlatinib arm. Nuclide links it to paediatric neuroblastoma, MIBG imaging and therapy, ALK as a target, 131I-MIBG therapy, lorlatinib, the Children's Oncology Group and Yael P. Mossé. Whether targeted radiation during induction improves cure rates is the question it will answer.",
    "drugs": [
      "i131-mibg"
    ],
    "indications": [
      "neuroblastoma",
      "neuroblastoma-high-risk"
    ],
    "technologies": [
      "mibg-theranostics"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT03126916",
        "url": "https://clinicaltrials.gov/study/NCT03126916"
      }
    ]
  },
  {
    "kind": "trial",
    "asOf": "2026-09-07",
    "id": "astra",
    "name": "ASTRA",
    "nct": "NCT01843062",
    "phase": "3",
    "status": "negative",
    "yearReported": 2019,
    "sponsor": "AstraZeneca",
    "enrolled": 401,
    "setting": "High-risk differentiated thyroid cancer: selumetinib + adjuvant radioiodine vs placebo + radioiodine",
    "tldr": "Adding a MEK inhibitor to boost iodine uptake before ablation did not improve complete remission rates, cooling the 'redifferentiation for everyone' idea.",
    "summary": "ASTRA, trial NCT01843062 sponsored by AstraZeneca and reported in 2019, found that adding the MEK inhibitor selumetinib to boost iodine uptake before adjuvant radioiodine in high-risk differentiated thyroid cancer did not improve complete remission rates, cooling the idea of redifferentiation for everyone. It randomised 401 patients to selumetinib or placebo with radioiodine and found no difference in complete remission at eighteen months. Nuclide links it to thyroid cancer, radioiodine therapy, kinase inhibitors, the MAPK pathway and the pairing of MAPK inhibitor redifferentiation followed by radioiodine. Redifferentiation remains reserved for selected radioiodine-refractory patients, where small series show MEK or BRAF and MEK inhibitors restore uptake in about half, and whether that selected use can be proved in a randomised trial is the open question.",
    "result": "Complete remission 40% vs 38.5%; not significant.",
    "outcomes": [
      {
        "endpoint": "Complete remission at 18 months",
        "primary": true,
        "unit": "%",
        "arms": [
          {
            "name": "Selumetinib + RAI",
            "value": 40
          },
          {
            "name": "Placebo + RAI",
            "value": 38.5
          }
        ],
        "source": "https://ascopubs.org/doi/10.1200/JCO.21.00714"
      }
    ],
    "replication": "Small redifferentiation series remain positive in refractory patients; the adjuvant setting was negative.",
    "technologies": [
      "radioiodine-therapy"
    ],
    "indications": [
      "thyroid"
    ],
    "tags": [
      "failure",
      "lesson:adjuvant-vs-active-disease"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT01843062",
        "url": "https://clinicaltrials.gov/study/NCT01843062"
      },
      {
        "label": "JCO 2022",
        "url": "https://ascopubs.org/doi/10.1200/JCO.21.00714"
      }
    ]
  },
  {
    "kind": "trial",
    "asOf": "2026-09-07",
    "id": "cabinet",
    "name": "CABINET (Alliance A021602)",
    "nct": "NCT03375320",
    "phase": "3",
    "status": "positive",
    "yearReported": 2024,
    "sponsor": "Alliance / NCI / Exelixis",
    "enrolled": 298,
    "setting": "Previously treated advanced pancreatic (n=95) and extra-pancreatic (n=203) NETs: cabozantinib vs placebo",
    "tldr": "Cabozantinib tripled the time without progression in neuroendocrine tumours that had outgrown other treatments, leading to a 2025 approval.",
    "summary": "CABINET, Alliance trial A021602, NCT03375320, sponsored by the Alliance, the NCI and Exelixis and reported in the New England Journal of Medicine in 2024, showed that cabozantinib roughly tripled the time without progression in neuroendocrine tumours that had outgrown other treatments, leading to FDA approval in March 2025. It randomised 298 patients in separate pancreatic and extra-pancreatic cohorts to cabozantinib or placebo and met its primary progression-free survival endpoint in both, with an ESMO 2025 subgroup analysis showing a large reduction in progression risk in lung and thymic tumours. Nuclide links it to neuroendocrine tumours, cabozantinib and the Alliance for Clinical Trials in Oncology. Whether cabozantinib's benefit holds against, or in sequence with, radioligand therapy is the open question.",
    "result": "PFS HR 0.23 (pNET), 0.38 (epNET).",
    "outcomes": [
      {
        "endpoint": "Progression-free survival (pancreatic NET)",
        "primary": true,
        "unit": "months",
        "arms": [
          {
            "name": "Cabozantinib",
            "value": 13.8
          },
          {
            "name": "Placebo",
            "value": 4.4
          }
        ],
        "hr": 0.23,
        "ci": [
          0.12,
          0.42
        ],
        "source": "https://doi.org/10.1056/NEJMoa2403991"
      },
      {
        "endpoint": "Progression-free survival (extra-pancreatic NET)",
        "primary": true,
        "unit": "months",
        "arms": [
          {
            "name": "Cabozantinib",
            "value": 8.4
          },
          {
            "name": "Placebo",
            "value": 3.9
          }
        ],
        "hr": 0.38,
        "ci": [
          0.25,
          0.59
        ],
        "source": "https://doi.org/10.1056/NEJMoa2403991"
      }
    ],
    "drugs": [
      "cabozantinib"
    ],
    "indications": [
      "neuroendocrine",
      "pancreatic-net",
      "small-intestinal-net",
      "lung-net"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT03375320",
        "url": "https://clinicaltrials.gov/study/NCT03375320"
      },
      {
        "label": "ESMO 2025 subgroup (Exelixis)",
        "url": "https://businesswire.com/news/home/20251016096352/en/Exelixis-Announces-Results-from-Subgroup-Analysis-of-CABINET-Phase-3-Pivotal-Trial-Evaluating-CABOMETYX-cabozantinib-in-Advanced-Lung-and-Thymic-Neuroendocrine-Tumors-at-ESMO-2025"
      }
    ]
  },
  {
    "kind": "trial",
    "asOf": "2026-09-06",
    "id": "chaarted",
    "name": "CHAARTED (E3805)",
    "nct": "NCT00309985",
    "phase": "3",
    "status": "positive",
    "yearReported": 2015,
    "sponsor": "ECOG-ACRIN",
    "setting": "Metastatic hormone-sensitive prostate cancer: ADT + docetaxel vs ADT",
    "tldr": "The first trial to show chemotherapy at the start of hormone therapy prolongs life in metastatic prostate cancer.",
    "summary": "CHAARTED, ECOG-ACRIN trial E3805, NCT00309985, reported in 2015, was the first trial to show that giving docetaxel at the start of hormone therapy prolongs life in metastatic hormone-sensitive prostate cancer. It randomised 790 men to androgen deprivation with or without docetaxel and met its primary overall survival endpoint, but in long-term follow-up the benefit was confined to men with high-volume disease. Nuclide links it to prostate cancer, docetaxel and Christopher J. Sweeney, and the result was replicated by arm C of the STAMPEDE platform, with the concentration of benefit in high-volume disease shaping how that distinction is used. Whether chemotherapy still earns its place now that triplet regimens and PSMA radioligands have entered this setting is the open question. Docetaxel has its own page.",
    "result": "OS HR 0.61 overall; high-volume HR 0.63; low-volume no benefit.",
    "drugs": [
      "docetaxel"
    ],
    "indications": [
      "prostate",
      "prostate-mhspc"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT00309985",
        "url": "https://clinicaltrials.gov/study/NCT00309985"
      }
    ],
    "enrolled": 790,
    "outcomes": [
      {
        "endpoint": "Overall survival",
        "primary": true,
        "unit": "months",
        "arms": [
          {
            "name": "ADT + docetaxel",
            "n": 397,
            "value": 57.6
          },
          {
            "name": "ADT alone",
            "n": 393,
            "value": 44
          }
        ],
        "hr": 0.61,
        "ci": [
          0.47,
          0.8
        ],
        "p": "<0.001",
        "source": "https://www.nejm.org/doi/full/10.1056/NEJMoa1503747"
      }
    ],
    "replication": "Replicated by STAMPEDE arm C; benefit concentrated in high-volume disease."
  },
  {
    "kind": "trial",
    "asOf": "2026-09-07",
    "id": "compete",
    "name": "COMPETE",
    "nct": "NCT03049189",
    "phase": "3",
    "status": "positive",
    "yearReported": 2025,
    "sponsor": "ITM Isotope Technologies Munich",
    "enrolled": 324,
    "setting": "Progressive grade 1-2 SSTR-positive GEP-NETs: 177Lu-edotreotide vs everolimus",
    "tldr": "The first head-to-head trial of a radioligand against a targeted pill in neuroendocrine tumours; the radioligand won on progression-free survival.",
    "summary": "COMPETE, trial NCT03049189 sponsored by ITM Isotope Technologies Munich and published in the Lancet in 2025, was the first head-to-head trial of a radioligand against a targeted tablet in neuroendocrine tumours, and the radioligand won on progression-free survival. It randomised 309 patients with progressive grade 1 to 2 somatostatin-receptor-positive gastroenteropancreatic tumours to 177Lu-edotreotide or everolimus, met its primary progression-free survival endpoint with a significantly higher response rate, and showed an interim overall survival trend that was not significant; the result supports an FDA filing with a PDUFA date of 28 August 2026. Nuclide links it to peptide receptor radionuclide therapy, somatostatin receptor 2, 177Lu-edotreotide, everolimus and Jonathan R. Strosberg. Whether a second lutetium agent differentiates from lutetium dotatate is the open question.",
    "result": "PFS 23.9 vs 14.1 months, HR 0.67.",
    "outcomes": [
      {
        "endpoint": "Progression-free survival",
        "primary": true,
        "unit": "months",
        "arms": [
          {
            "name": "177Lu-edotreotide",
            "n": 207,
            "value": 23.9
          },
          {
            "name": "Everolimus",
            "n": 102,
            "value": 14.1
          }
        ],
        "hr": 0.67,
        "ci": [
          0.48,
          0.95
        ],
        "p": "0.022",
        "source": "https://doi.org/10.1016/S0140-6736(26)00604-5"
      },
      {
        "endpoint": "Overall survival (interim)",
        "unit": "months",
        "arms": [
          {
            "name": "177Lu-edotreotide",
            "value": 63.4
          },
          {
            "name": "Everolimus",
            "value": 58.7
          }
        ],
        "hr": 0.78,
        "ci": [
          0.5,
          1.1
        ],
        "p": "0.206",
        "source": "https://doi.org/10.1016/S0140-6736(26)00604-5"
      }
    ],
    "drugs": [
      "itm-11",
      "everolimus"
    ],
    "indications": [
      "neuroendocrine",
      "pancreatic-net",
      "small-intestinal-net"
    ],
    "targets": [
      "sstr2"
    ],
    "technologies": [
      "prrt"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT03049189",
        "url": "https://clinicaltrials.gov/study/NCT03049189"
      },
      {
        "label": "CancerNetwork: COMPETE",
        "url": "https://www.cancernetwork.com/view/itm-11-demonstrates-superior-pfs-vs-everolimus-in-sstr-gep-nets"
      }
    ],
    "people": [
      "jonathan-strosberg"
    ]
  },
  {
    "kind": "trial",
    "asOf": "2026-09-07",
    "id": "decision-sorafenib",
    "name": "DECISION",
    "nct": "NCT00984282",
    "phase": "3",
    "status": "positive",
    "yearReported": 2013,
    "sponsor": "Bayer",
    "enrolled": 417,
    "setting": "Radioiodine-refractory differentiated thyroid cancer: sorafenib vs placebo",
    "tldr": "The first drug approved for thyroid cancers that stopped responding to radioactive iodine.",
    "summary": "DECISION, trial NCT00984282 sponsored by Bayer and reported in 2013, produced the first drug approved for differentiated thyroid cancers that stopped responding to radioactive iodine. It randomised 417 patients to sorafenib or placebo and met its primary progression-free survival endpoint, leading to FDA approval in November 2013, with hand-foot skin reaction and fatigue common. Nuclide links it to thyroid cancer, kinase inhibitors, VEGF and BRAF as targets, the radioiodine-refractory term and Marcia S. Brose, and SELECT confirmed the class effect with a larger benefit for lenvatinib. Sorafenib has been largely displaced by lenvatinib but is still used, and whether it retains a niche in patients who cannot tolerate lenvatinib is the open question.",
    "result": "PFS 10.8 vs 5.8 months; HR 0.59.",
    "outcomes": [
      {
        "endpoint": "Progression-free survival",
        "primary": true,
        "unit": "months",
        "arms": [
          {
            "name": "Sorafenib",
            "value": 10.8
          },
          {
            "name": "Placebo",
            "value": 5.8
          }
        ],
        "hr": 0.59,
        "source": "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(14)60421-9/fulltext"
      }
    ],
    "replication": "SELECT confirmed the class effect with a larger benefit.",
    "indications": [
      "thyroid"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT00984282",
        "url": "https://clinicaltrials.gov/study/NCT00984282"
      },
      {
        "label": "Lancet 2014",
        "url": "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(14)60421-9/fulltext"
      }
    ]
  },
  {
    "kind": "trial",
    "asOf": "2026-09-06",
    "id": "eclipse-psma",
    "name": "ECLIPSE",
    "nct": "NCT05204927",
    "phase": "3",
    "status": "positive",
    "yearReported": 2025,
    "sponsor": "Curium",
    "setting": "PSMA-positive mCRPC after ARPI, taxane-naive: 177Lu-PSMA-I&T (7.4 GBq × 6) vs ARPI switch",
    "tldr": "Curium's PSMA radioligand met its progression endpoint; survival data and an FDA filing are pending.",
    "summary": "ECLIPSE, trial NCT05204927 sponsored by Curium and reported in 2025, tested 177Lu-PSMA-I&T given as six cycles of 7.4 GBq against a switch of androgen receptor pathway inhibitor in PSMA-positive, taxane-naive metastatic castration-resistant prostate cancer after one such inhibitor. It enrolled 439 men and met its primary radiographic progression-free survival endpoint according to the sponsor, with medians pending publication, overall survival maturing, study completion projected for 2029 and an FDA submission plan under discussion. Nuclide links it to prostate cancer and to the 177Lu-PSMA-I&T drug record; its result is consistent with PSMAfore for the pre-chemotherapy setting and contrasts with SPLASH, which used the same ligand but showed an unfavourable interim survival signal. Whether the survival data will support approval of a second lutetium PSMA agent is the open question.",
    "result": "rPFS significantly improved.",
    "drugs": [
      "lu177-psma-it"
    ],
    "indications": [
      "prostate",
      "prostate-mcrpc"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT05204927",
        "url": "https://clinicaltrials.gov/study/NCT05204927"
      }
    ],
    "enrolled": 439,
    "outcomes": [
      {
        "endpoint": "Radiographic progression-free survival",
        "primary": true,
        "unit": "months",
        "arms": [
          {
            "name": "177Lu-PSMA-I&T",
            "note": "Met per sponsor; medians pending publication"
          },
          {
            "name": "ARPI switch"
          }
        ],
        "source": "https://clinicaltrials.gov/study/NCT05204927"
      }
    ],
    "replication": "Consistent with PSMAfore for the pre-chemotherapy setting; OS pending."
  },
  {
    "kind": "trial",
    "asOf": "2026-09-06",
    "id": "embark",
    "name": "EMBARK",
    "nct": "NCT02319837",
    "phase": "3",
    "status": "positive",
    "yearReported": 2023,
    "sponsor": "Pfizer / Astellas",
    "setting": "High-risk biochemical recurrence (PSA doubling time ≤9 months) after local therapy: enzalutamide + leuprolide, enzalutamide alone, or leuprolide alone",
    "tldr": "Showed that treating a fast-rising PSA after surgery or radiation with enzalutamide delays spread.",
    "summary": "EMBARK, trial NCT02319837 sponsored by Pfizer and Astellas and reported in 2023, showed that treating a fast-rising PSA after surgery or radiotherapy with enzalutamide delays the appearance of metastases. It randomised 1,068 men with high-risk biochemical recurrence, defined by a PSA doubling time of nine months or less, to enzalutamide plus leuprolide, enzalutamide alone or leuprolide alone, suspending treatment if the PSA became undetectable at 36 weeks, and met its primary metastasis-free survival endpoint for the combination; approval followed in November 2023 and a survival benefit for the combination was reported in 2025. Nuclide links it to prostate cancer, enzalutamide and the biochemical recurrence term. Whether treating a rising PSA early beats waiting for imaging-detected disease, now that PSMA PET finds it sooner, is the open question.",
    "result": "MFS HR 0.42 (combination).",
    "drugs": [
      "enzalutamide"
    ],
    "indications": [
      "prostate",
      "prostate-bcr"
    ],
    "terms": [
      "biochemical-recurrence"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT02319837",
        "url": "https://clinicaltrials.gov/study/NCT02319837"
      }
    ],
    "enrolled": 1068,
    "outcomes": [
      {
        "endpoint": "Metastasis-free survival, enzalutamide + leuprolide vs leuprolide",
        "primary": true,
        "unit": "%",
        "arms": [
          {
            "name": "Enzalutamide + leuprolide, 5-year MFS",
            "n": 355,
            "value": 87.3
          },
          {
            "name": "Leuprolide alone, 5-year MFS",
            "n": 358,
            "value": 71.4
          }
        ],
        "hr": 0.42,
        "ci": [
          0.3,
          0.61
        ],
        "p": "<0.001",
        "source": "https://www.nejm.org/doi/full/10.1056/NEJMoa2303974"
      }
    ],
    "replication": "Single pivotal trial in high-risk biochemical recurrence; OS immature."
  },
  {
    "kind": "trial",
    "asOf": "2026-09-07",
    "id": "estimabl2",
    "name": "ESTIMABL2",
    "nct": "NCT01837745",
    "phase": "3",
    "status": "positive",
    "yearReported": 2022,
    "sponsor": "Gustave Roussy / French Endocrine Tumour Group",
    "enrolled": 776,
    "setting": "Low-risk differentiated thyroid cancer (pT1a-T1b N0/Nx) after total thyroidectomy: no radioiodine vs 1.1 GBq ablation",
    "tldr": "Proved that most people with small, low-risk thyroid cancers can skip radioactive iodine after surgery without any increase in recurrence.",
    "summary": "ESTIMABL2, trial NCT01837745 sponsored by Gustave Roussy and the French Endocrine Tumour Group and reported in 2022, proved that most people with small, low-risk differentiated thyroid cancers can skip radioactive iodine after total thyroidectomy without any increase in recurrence. It randomised 776 patients with pT1a to T1b, node-negative tumours to no radioiodine or 1.1 GBq ablation and met its non-inferiority endpoint on event-free status at three years, confirmed at five years in 2024. Nuclide links it to thyroid cancer, radioiodine therapy, radioactive iodine, the low-risk thyroid cancer term, Gustave Roussy and Martin Schlumberger, and together with IoN and HiLo it removed radioiodine from routine low-risk care in ATA and ESMO guidance; the UK IoN trial reached the same conclusion. Whether the same holds for larger low-risk tumours, as IoN suggested for pT2, is the remaining question.",
    "result": "3-year event-free 95.6% vs 95.9% (non-inferior).",
    "outcomes": [
      {
        "endpoint": "Patients without events at 3 years",
        "primary": true,
        "unit": "%",
        "arms": [
          {
            "name": "No radioiodine",
            "value": 95.6
          },
          {
            "name": "Radioiodine 1.1 GBq",
            "value": 95.9
          }
        ],
        "source": "https://www.nejm.org/doi/full/10.1056/NEJMoa2111953"
      }
    ],
    "replication": "IoN (UK, Lancet 2025) reached the same conclusion in a pooled analysis.",
    "technologies": [
      "radioiodine-therapy"
    ],
    "indications": [
      "thyroid"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT01837745",
        "url": "https://clinicaltrials.gov/study/NCT01837745"
      },
      {
        "label": "NEJM 2022",
        "url": "https://www.nejm.org/doi/full/10.1056/NEJMoa2111953"
      },
      {
        "label": "5-year follow-up",
        "url": "https://www.thelancet.com/journals/landia/article/PIIS2213-8587(24)00276-6/fulltext"
      }
    ]
  },
  {
    "kind": "trial",
    "asOf": "2026-09-07",
    "id": "hd21",
    "name": "GHSG HD21",
    "nct": "NCT02661503",
    "phase": "3",
    "status": "positive",
    "yearReported": 2024,
    "sponsor": "German Hodgkin Study Group",
    "enrolled": 1500,
    "setting": "Untreated advanced-stage classical Hodgkin lymphoma, age 18-60: PET-guided BrECADD vs escalated BEACOPP",
    "tldr": "A new brentuximab-based intensive regimen matched Europe's most effective (and most toxic) chemotherapy with far fewer side effects.",
    "summary": "GHSG HD21, trial NCT02661503 sponsored by the German Hodgkin Study Group and published in the Lancet in 2024, showed that a new brentuximab-based intensive regimen, BrECADD, matched and then beat escalated BEACOPP, Europe's most effective and most toxic chemotherapy for advanced Hodgkin lymphoma, with far fewer side effects. It randomised about 1,500 patients aged 18 to 60 to PET-guided BrECADD or escalated BEACOPP for four to six cycles, met non-inferiority and then superiority on progression-free survival at four and five years, and reduced treatment-related morbidity while preserving fertility markers. Nuclide links it to Hodgkin lymphoma, PET-adapted therapy, brentuximab vedotin, Peter Borchmann, the German Hodgkin Study Group and the ECHELON-1 and S1826 papers. Whether an intensive regimen is still needed when nivolumab-AVD has performed so well is the open question.",
    "result": "4-year PFS 94.3% vs 90.9%, HR 0.66; less toxicity.",
    "outcomes": [
      {
        "endpoint": "Progression-free survival at 4 years",
        "primary": true,
        "unit": "%",
        "arms": [
          {
            "name": "BrECADD",
            "n": 742,
            "value": 94.3
          },
          {
            "name": "eBEACOPP",
            "n": 740,
            "value": 90.9
          }
        ],
        "hr": 0.66,
        "ci": [
          0.45,
          0.97
        ],
        "source": "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(24)01315-1/fulltext"
      },
      {
        "endpoint": "Treatment-related morbidity",
        "unit": "%",
        "arms": [
          {
            "name": "BrECADD",
            "value": 42
          },
          {
            "name": "eBEACOPP",
            "value": 59
          }
        ],
        "source": "https://doi.org/10.1016/S0140-6736(24)01315-1"
      }
    ],
    "technologies": [
      "pet-adapted-therapy"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT02661503",
        "url": "https://clinicaltrials.gov/study/NCT02661503"
      }
    ]
  },
  {
    "kind": "trial",
    "asOf": "2026-09-07",
    "id": "hilo",
    "name": "HiLo",
    "nct": "NCT00415233",
    "phase": "3",
    "status": "positive",
    "yearReported": 2012,
    "sponsor": "Cancer Research UK",
    "enrolled": 438,
    "setting": "Differentiated thyroid cancer needing ablation: low-dose (1.1 GBq) vs high-dose (3.7 GBq) radioiodine, with recombinant TSH or thyroid hormone withdrawal",
    "tldr": "Showed a third of the usual radioactive iodine dose ablates the thyroid remnant just as well, with fewer side effects and less time in isolation.",
    "summary": "HiLo, trial NCT00415233 sponsored by Cancer Research UK and reported in 2012, showed that a third of the usual radioactive iodine dose ablates the thyroid remnant just as well as the high dose in differentiated thyroid cancer, with fewer side effects and less time in isolation. It randomised 438 patients needing ablation to 1.1 GBq or 3.7 GBq of radioiodine, with recombinant TSH or thyroid hormone withdrawal, and met its non-inferiority endpoint on successful ablation, while recombinant TSH avoided hypothyroid symptoms. Nuclide links it to thyroid cancer, radioiodine therapy, radioactive iodine and Cancer Research UK, and the French ESTIMABL1 trial replicated low-dose non-inferiority at the same time. Low-dose ablation became standard for intermediate-risk disease and the trial paved the way to omitting ablation altogether in low-risk disease, as ESTIMABL2 and IoN then showed.",
    "result": "Ablation success 85.0% (1.1 GBq) vs 88.9% (3.7 GBq), non-inferior.",
    "outcomes": [
      {
        "endpoint": "Successful ablation",
        "primary": true,
        "unit": "%",
        "arms": [
          {
            "name": "1.1 GBq",
            "value": 85
          },
          {
            "name": "3.7 GBq",
            "value": 88.9
          }
        ],
        "source": "https://www.nejm.org/doi/full/10.1056/NEJMoa1109589"
      }
    ],
    "replication": "ESTIMABL1 (France) replicated low-dose non-inferiority simultaneously.",
    "technologies": [
      "radioiodine-therapy"
    ],
    "indications": [
      "thyroid"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT00415233",
        "url": "https://clinicaltrials.gov/study/NCT00415233"
      },
      {
        "label": "NEJM 2012",
        "url": "https://www.nejm.org/doi/full/10.1056/NEJMoa1109589"
      }
    ]
  },
  {
    "id": "ielsg37",
    "kind": "trial",
    "name": "IELSG37",
    "nct": "NCT01599559",
    "phase": "3",
    "status": "positive",
    "yearReported": 2024,
    "sponsor": "International Extranodal Lymphoma Study Group",
    "enrolled": 545,
    "asOf": "2026-09-17",
    "setting": "Primary mediastinal large B-cell lymphoma in complete metabolic response on PET after rituximab-based immunochemotherapy: consolidation mediastinal radiotherapy versus observation",
    "tldr": "IELSG37 showed that people with primary mediastinal B-cell lymphoma whose scan is clear after chemotherapy do not need radiotherapy to the chest, sparing young patients decades of heart and breast cancer risk.",
    "summary": "IELSG37 registered 545 patients with primary mediastinal large B-cell lymphoma treated with rituximab-containing immunochemotherapy (mostly R-CHOP or dose-adjusted EPOCH-R, by centre) and randomised the 268 who reached a complete metabolic response on end-of-treatment PET (Deauville 1 to 3) to 30 Gy consolidation radiotherapy or to observation.\n\nProgression-free survival at 30 months was 96.7 percent without radiotherapy and 98.5 percent with it, within the non-inferiority margin, with no difference in overall survival. Patients with residual PET uptake were not randomised and received radiotherapy, in whom outcomes were also good.\n\nThe trial settled a forty-year argument: mediastinal radiotherapy can be omitted in the majority of patients who reach complete metabolic response, and PET now decides who is irradiated.",
    "result": "30-month progression-free survival 96.7% (observation) vs 98.5% (radiotherapy) in patients with complete metabolic response; radiotherapy can be omitted.",
    "outcomes": [
      {
        "endpoint": "Progression-free survival at 30 months",
        "primary": true,
        "unit": "%",
        "arms": [
          {
            "name": "Observation",
            "n": 132,
            "value": 96.7
          },
          {
            "name": "Consolidation radiotherapy 30 Gy",
            "n": 136,
            "value": 98.5
          }
        ],
        "source": "https://doi.org/10.1200/JCO.24.01373"
      }
    ],
    "replication": "Consistent with the single-arm National Cancer Institute DA-EPOCH-R series, in which no patient received radiotherapy and event-free survival was 93 percent.",
    "drugs": [
      "rituximab"
    ],
    "technologies": [
      "fdg-pet",
      "pet-adapted-therapy"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT01599559",
        "url": "https://clinicaltrials.gov/study/NCT01599559"
      },
      {
        "label": "Journal of Clinical Oncology 2024",
        "url": "https://doi.org/10.1200/JCO.24.01373"
      }
    ]
  },
  {
    "kind": "trial",
    "asOf": "2026-09-07",
    "id": "ion-trial",
    "name": "IoN",
    "nct": "NCT01398085",
    "phase": "2/3",
    "status": "positive",
    "yearReported": 2025,
    "sponsor": "Cancer Research UK / UCL",
    "enrolled": 504,
    "setting": "Low-risk differentiated thyroid cancer (pT1-T2, N0/Nx, no adverse features) after thyroidectomy: no radioiodine vs radioiodine ablation",
    "tldr": "The UK trial confirming that low-risk thyroid cancer patients can safely avoid radioactive iodine, published in 2025.",
    "summary": "IoN, trial NCT01398085 sponsored by Cancer Research UK and UCL and published in the Lancet in 2025, is the UK trial confirming that low-risk differentiated thyroid cancer patients can safely avoid radioactive iodine after thyroidectomy. It randomised 504 patients with pT1 to T2, node-negative tumours without adverse features to no radioiodine or radioiodine ablation and met its non-inferiority endpoint on recurrence-free status at five years, extending the ESTIMABL2 finding to pT2 tumours. Nuclide links it to thyroid cancer, radioiodine therapy, radioactive iodine, the low-risk thyroid cancer term and Cancer Research UK, and it replicates ESTIMABL2. Guideline bodies now recommend against routine ablation in this group, and whether patients and clinicians accept doing less is the practical question that remains.",
    "result": "5-year recurrence-free ~98% (no RAI) vs ~96% (RAI).",
    "outcomes": [
      {
        "endpoint": "Recurrence-free at 5 years",
        "primary": true,
        "unit": "%",
        "arms": [
          {
            "name": "No radioiodine",
            "value": 98
          },
          {
            "name": "Radioiodine",
            "value": 96
          }
        ],
        "source": "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(25)00629-4/fulltext"
      }
    ],
    "replication": "Replicates ESTIMABL2.",
    "technologies": [
      "radioiodine-therapy"
    ],
    "indications": [
      "thyroid"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT01398085",
        "url": "https://clinicaltrials.gov/study/NCT01398085"
      },
      {
        "label": "Lancet 2025",
        "url": "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(25)00629-4/fulltext"
      }
    ]
  },
  {
    "id": "mcrpc",
    "kind": "trial",
    "name": "A Study of Pasritamig With or Without JNJ-87189401 Versus Placebo for Late Line Metastatic Castration-resistant Prostate Cancer (mCRPC)",
    "nct": "NCT07164443",
    "phase": "3",
    "status": "recruiting",
    "asOf": "2026-09-11",
    "tags": [
      "ctgov-ingest"
    ],
    "sponsor": "Janssen Research & Development",
    "enrolled": 1203,
    "setting": "A Phase 3 Randomized, Double-blind, Placebo-controlled Study of Pasritamig (JNJ-78278343), a T Cell Engaging Agent Targeting Human Kallikrein 2, With or Without JNJ-87189401, a PSMA-CD28 Costimulatory Agent, Plus Best Supportive Care Versus Best Supportive Care for Late-line Metastatic Castration-resistant Prostate Cancer",
    "tldr": "A phase 3 trial testing JNJ-87189401 in prostate cancer, now recruiting.",
    "summary": "A Study of Pasritamig With or Without JNJ-87189401 Versus Placebo for Late Line Metastatic Castration-resistant Prostate Cancer (mCRPC) is a phase 3 interventional study registered as NCT07164443, led by Janssen Research & Development, and recruiting on the registry. Official title: A Phase 3 Randomised, Double-blind, Placebo-controlled Study of Pasritamig (JNJ-78278343), a T Cell Engaging Agent Targeting Human Kallikrein 2, With or Without JNJ-87189401, a PSMA-CD28 Costimulatory Agent, Plus Best Supportive Care Versus Best Supportive Care for Late-line Metastatic Castration-resistant Prostate Cancer. Planned enrolment is 1203 participants (estimated). The study started in 2025-09-02 and primary completion is expected in 2028-08-18. No results have been posted on ClinicalTrials.gov.",
    "drugs": [
      "jnj-87189401"
    ],
    "indications": [
      "prostate",
      "prostate-mcrpc"
    ],
    "companies": [
      "johnson-johnson"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT07164443",
        "url": "https://clinicaltrials.gov/study/NCT07164443"
      }
    ]
  },
  {
    "id": "nct02665065",
    "aka": [
      "SIERRA"
    ],
    "kind": "trial",
    "name": "Study of Iomab-B vs. Conventional Care in Older Subjects With Active, Relapsed or Refractory Acute Myeloid Leukemia",
    "nct": "NCT02665065",
    "phase": "3",
    "status": "active",
    "sponsor": "Actinium Pharmaceuticals",
    "enrolled": 153,
    "asOf": "2026-09-16",
    "tags": [
      "ctgov-ingest"
    ],
    "setting": "A Multicenter, Pivotal Phase 3 Study of Iomab-B Prior to Allogeneic Hematopoietic Cell Transplant Versus Conventional Care in Older Subjects With Active, Relapsed or Refractory Acute Myeloid Leukemia (AML)",
    "tldr": "A phase 3 trial of Iomab-B run by Actinium Pharmaceuticals, active.",
    "summary": "Study of Iomab-B vs. Conventional Care in Older Subjects With Active, Relapsed or Refractory Acute Myeloid Leukemia is a phase 3 interventional study registered as NCT02665065 by Actinium Pharmaceuticals, with 153 participants enrolled, started 2016-06. Conditions listed: Acute Myeloid Leukemia, Leukemia, Acute Myeloid, Myeloid Leukemia, Acute, Leukemia, Myeloid, Acute. No results are recorded here; the registry entry is the source.",
    "drugs": [
      "iomab-b"
    ],
    "companies": [
      "actinium-pharmaceuticals"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT02665065",
        "url": "https://clinicaltrials.gov/study/NCT02665065"
      }
    ]
  },
  {
    "id": "nct02952508",
    "aka": [
      "CLOVER-1"
    ],
    "kind": "trial",
    "name": "Study of Iopofosine I-131 (CLR 131) in Select B-Cell Malignancies (CLOVER-1) With Expansion in Waldenstrom",
    "nct": "NCT02952508",
    "phase": "2",
    "status": "active",
    "sponsor": "Cellectar Biosciences, Inc.",
    "enrolled": 120,
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "setting": "An Open-Label, Multicenter, Phase 2 Study of Iopofosine I 131 (CLR 131) in Patients With Relapsed or Refractory (R/R) Select B-Cell Malignancies (CLOVER-1) and Expansion Cohort in Patients With Waldenstrom Macroglobulinemia (CLOVER-WaM)",
    "tldr": "A phase 2 trial of Iopofosine I 131 single dose in waldenström macroglobulinaemia, multiple myeloma, chronic lymphocytic leukaemia, non-Hodgkin lymphoma, mantle cell lymphoma and diffuse large B-cell lymphoma, run by Cellectar Biosciences, Inc., active and no longer recruiting.",
    "summary": "Study of Iopofosine I-131 (CLR 131) in Select B-Cell Malignancies (CLOVER-1) With Expansion in Waldenstrom is a phase 2 interventional study registered as NCT02952508 by Cellectar Biosciences, Inc., with 120 participants enrolled, started 2017-07-26 and due to reach its primary completion in 2026-06-22. Interventions recorded: Iopofosine I 131 single dose, Iopofosine I 131 multiple dose and Iopofosine I 131 fractionated dose.",
    "indications": [
      "dlbcl"
    ],
    "companies": [
      "cellectar"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT02952508",
        "url": "https://clinicaltrials.gov/study/NCT02952508"
      }
    ]
  },
  {
    "id": "nct03444844",
    "technologies": [
      "pet",
      "pet-ct"
    ],
    "kind": "trial",
    "name": "Biodistribution and Dosimetry of Ga-68 P16-093 in Prostate Cancer",
    "nct": "NCT03444844",
    "phase": "1/2",
    "status": "active",
    "sponsor": "Five Eleven Pharma, Inc.",
    "enrolled": 60,
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "setting": "Biodistribution and Dosimetry of Ga-68 P16-093 in Prostate Cancer Patients With Intermediate/High Risk Primary Disease or Biochemical Recurrence After Treatment",
    "tldr": "A phase 1/2 trial of Ga-68 P16-093 PET/CT scan in prostate cancer, run by Five Eleven Pharma, Inc., active and no longer recruiting.",
    "summary": "Biodistribution and Dosimetry of Ga-68 P16-093 in Prostate Cancer is a phase 1/2 interventional study registered as NCT03444844 by Five Eleven Pharma, Inc., with 60 participants enrolled, started 2018-05-10 and due to reach its primary completion in 2020-10-27. Interventions recorded: Ga-68 P16-093 PET/CT scan.",
    "indications": [
      "prostate",
      "prostate-bcr"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT03444844",
        "url": "https://clinicaltrials.gov/study/NCT03444844"
      }
    ]
  },
  {
    "id": "nct03533283",
    "kind": "trial",
    "name": "An Open-Label Phase lB/II Study of Glofitamab and Atezolizumab or Polatuzumab Vedotin in Adult Patients With Relapsed/Refractory B-Cell Non-Hodgkin's Lymphoma",
    "nct": "NCT03533283",
    "phase": "1/2",
    "status": "active",
    "sponsor": "Hoffmann-La Roche",
    "enrolled": 211,
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "setting": "An Open-Label, Multi-Center, Phase IB/II Study of Glofitamab and Atezolizumab or Polatuzumab Vedotin (Plus a Single Pre-Treatment Dose of Obinutuzumab) in Adult Patients With Relapsed/Refractory B-Cell Non-Hodgkin's Lymphoma",
    "tldr": "A phase 1/2 trial of Glofitamab, Atezolizumab, Obinutuzumab, Tocilizumab and Polatuzumab vedotin in hodgkin lymphoma, run by Hoffmann-La Roche, active and no longer recruiting.",
    "summary": "An Open-Label Phase lB/II Study of Glofitamab and Atezolizumab or Polatuzumab Vedotin in Adult Patients With Relapsed/Refractory B-Cell Non-Hodgkin's Lymphoma is a phase 1/2 interventional study registered as NCT03533283 by Hoffmann-La Roche, with 211 participants enrolled, started 2018-05-08 and due to reach its primary completion in 2026-10-16. Interventions recorded: Glofitamab, Atezolizumab, Obinutuzumab, Tocilizumab, Polatuzumab Vedotin and 89Zr-Df-IAB22M2C.",
    "links": [
      {
        "label": "ClinicalTrials.gov NCT03533283",
        "url": "https://clinicaltrials.gov/study/NCT03533283"
      }
    ]
  },
  {
    "id": "nct03690388",
    "kind": "trial",
    "name": "A Study of Cabozantinib Compared With Placebo in Subjects With Radioiodine-refractory Differentiated Thyroid Cancer Who Have Progressed After Prior Va",
    "nct": "NCT03690388",
    "phase": "3",
    "status": "active",
    "sponsor": "Exelixis",
    "enrolled": 187,
    "asOf": "2026-09-16",
    "tags": [
      "ctgov-ingest"
    ],
    "setting": "A Phase 3, Randomized, Double-Blind, Placebo-Controlled Study of Cabozantinib (XL184) in Subjects With Radioiodine-Refractory Differentiated Thyroid Cancer Who Have Progressed After Prior Vascular Endothelial Growth Factor Receptor (VEGFR) -Targeted Therapy",
    "tldr": "A phase 3 trial of Cabozantinib in thyroid cancer, run by Exelixis, active and no longer recruiting.",
    "summary": "A Study of Cabozantinib Compared With Placebo in Subjects With Radioiodine-refractory Differentiated Thyroid Cancer Who Have Progressed After Prior Vascular Endothelial Growth Factor Receptor (VEGFR) -Targeted Therapy is a phase 3 interventional study registered as NCT03690388 by Exelixis, with 187 participants enrolled, started 2018-10-05 and due to reach its primary completion in 2020-08-19. Interventions recorded: Cabozantinib, Placebo. Conditions listed: Differentiated Thyroid Cancer. No results are recorded here; the registry entry is the source.",
    "drugs": [
      "cabozantinib"
    ],
    "indications": [
      "thyroid"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT03690388",
        "url": "https://clinicaltrials.gov/study/NCT03690388"
      }
    ]
  },
  {
    "id": "nct03972488",
    "aka": [
      "NETTER-2"
    ],
    "kind": "trial",
    "name": "Study to Evaluate the Efficacy and Safety of Lutathera in Patients With Grade 2 and Grade 3 Advanced GEP-NET",
    "nct": "NCT03972488",
    "phase": "3",
    "status": "active",
    "sponsor": "Advanced Accelerator Applications",
    "enrolled": 226,
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "setting": "A Phase III Multi-center, Randomized, Open-label Study to Evaluate the Efficacy and Safety of Lutathera in Patients With Grade 2 and Grade 3 Advanced GEP-NET",
    "tldr": "A phase 3 trial of Lutetium-177 dotatate in pancreatic ductal adenocarcinoma, run by Advanced Accelerator Applications, active and no longer recruiting.",
    "summary": "Study to Evaluate the Efficacy and Safety of Lutathera in Patients With Grade 2 and Grade 3 Advanced GEP-NET is a phase 3 interventional study registered as NCT03972488 by Advanced Accelerator Applications, with 226 participants enrolled, started 2020-01-08 and due to reach its primary completion in 2023-07-20. Interventions recorded: Lutathera, 30 mg Octreotide long acting repeatable (LAR) (Sandostatin LAR Depot), 2.5% Lys-Arg sterile amino acid solution and High dose 60 mg octreotide long-acting repeatable. Results have been posted on the registry.",
    "drugs": [
      "lutathera"
    ],
    "indications": [
      "neuroendocrine",
      "small-intestinal-net",
      "pancreatic-net",
      "grade-3-net"
    ],
    "companies": [
      "advanced-accelerator-applications"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT03972488",
        "url": "https://clinicaltrials.gov/study/NCT03972488"
      }
    ]
  },
  {
    "id": "nct03972657",
    "kind": "trial",
    "name": "A Trial to Find Out if REGN5678 (Nezastomig) is Safe and How Well it Works Alone or in Combination With Cemiplimab for Adult Participants With Metasta",
    "nct": "NCT03972657",
    "phase": "1/2",
    "status": "recruiting",
    "sponsor": "Regeneron Pharmaceuticals",
    "enrolled": 345,
    "asOf": "2026-09-16",
    "tags": [
      "ctgov-ingest"
    ],
    "setting": "A Phase 1/2 Study of REGN5678 (Anti-PSMAxCD28) With or Without Cemiplimab (Anti-PD-1) in Patients With Metastatic Castration-Resistant Prostate Cancer and Other Tumors Associated With PSMA Expression",
    "tldr": "A phase 1/2 trial of Cemiplimab in prostate cancer and renal cell carcinoma, run by Regeneron Pharmaceuticals, now recruiting.",
    "summary": "A Trial to Find Out if REGN5678 (Nezastomig) is Safe and How Well it Works Alone or in Combination With Cemiplimab for Adult Participants With Metastatic Castration-Resistant Prostate Cancer and Other Tumors is a phase 1/2 interventional study registered as NCT03972657 by Regeneron Pharmaceuticals, with 345 participants planned, started 2019-08-12 and due to reach its primary completion in 2027-11-15. Interventions recorded: REGN5678, Cemiplimab. Conditions listed: Metastatic Castration-Resistant Prostate Cancer (mCRPC), Clear Cell Renal Cell Carcinoma (ccRCC). No results are recorded here; the registry entry is the source.",
    "indications": [
      "prostate",
      "rcc",
      "prostate-mcrpc"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT03972657",
        "url": "https://clinicaltrials.gov/study/NCT03972657"
      }
    ]
  },
  {
    "id": "nct04557059",
    "aka": [
      "PRIMORDIUM"
    ],
    "companies": [
      "johnson-johnson"
    ],
    "kind": "trial",
    "name": "A Study of Adding Apalutamide to Radiotherapy and LHRH Agonist in High-Risk Patients With Hormone-Sensitive Prostate Cancer",
    "nct": "NCT04557059",
    "phase": "3",
    "status": "active",
    "sponsor": "Janssen Pharmaceutica N.V., Belgium",
    "enrolled": 691,
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "setting": "A Randomized, Controlled, Multicenter, Open-label Study to Investigate the Efficacy and Safety of Adding Apalutamide to Radiotherapy and LHRH Agonist in High-Risk Patients With Hormone-Sensitive Prostate Cancer, Assessed by PSMA-PET With an Observational Cohort",
    "tldr": "A phase 3 trial of Apalutamide in prostate cancer, run by Janssen Pharmaceutica N.V., Belgium, active and no longer recruiting.",
    "summary": "A Study of Adding Apalutamide to Radiotherapy and LHRH Agonist in High-Risk Patients With Hormone-Sensitive Prostate Cancer is a phase 3 interventional study registered as NCT04557059 by Janssen Pharmaceutica N.V., Belgium, with 691 participants enrolled, started 2020-11-12 and due to reach its primary completion in 2029-08-27. Interventions recorded: Radiotherapy, LHRHa and Apalutamide.",
    "indications": [
      "prostate",
      "prostate-high-risk"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT04557059",
        "url": "https://clinicaltrials.gov/study/NCT04557059"
      }
    ]
  },
  {
    "id": "nct04711135",
    "aka": [
      "NETTER-P"
    ],
    "kind": "trial",
    "name": "Study to Evaluate Safety and Dosimetry of Lutathera in Adolescent Patients With GEP-NETs and PPGLs",
    "nct": "NCT04711135",
    "phase": "2",
    "status": "active",
    "sponsor": "Advanced Accelerator Applications",
    "enrolled": 11,
    "asOf": "2026-09-16",
    "tags": [
      "ctgov-ingest"
    ],
    "setting": "A Multicenter Open-label Study to Evaluate Safety and Dosimetry of Lutathera in Adolescent Patients With Somatostatin Receptor Positive Gastroenteropancreatic Neuroendocrine (GEP-NET) Tumors, Pheochromocytoma and Paragangliomas (PPGL)",
    "tldr": "A phase 2 trial of Lutetium-177 dotatate in pheochromocytoma and paraganglioma, run by Advanced Accelerator Applications, active and no longer recruiting.",
    "summary": "Study to Evaluate Safety and Dosimetry of Lutathera in Adolescent Patients With GEP-NETs and PPGLs is a phase 2 interventional study registered as NCT04711135 by Advanced Accelerator Applications, with 11 participants enrolled, started 2022-08-31 and due to reach its primary completion in 2024-03-12. Interventions recorded: Lutetium [177Lu] oxodotreotide/dotatate. Conditions listed: Gastroenteropancreatic Neuroendocrine Tumors, Pheochromocytoma, Paraganglioma. No results are recorded here; the registry entry is the source.",
    "drugs": [
      "lutathera"
    ],
    "indications": [
      "pheochromocytoma-paraganglioma"
    ],
    "companies": [
      "novartis"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT04711135",
        "url": "https://clinicaltrials.gov/study/NCT04711135"
      }
    ]
  },
  {
    "id": "nct04724369",
    "technologies": [
      "pet"
    ],
    "kind": "trial",
    "name": "Open-Label Study of 18F-mFBG for Imaging Neuroblastoma",
    "nct": "NCT04724369",
    "phase": "3",
    "status": "active",
    "sponsor": "Innervate Radiopharmaceuticals LLC (Formerly: Illumina Radiopharmaceuticals LLC)",
    "enrolled": 43,
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "setting": "A Prospective Phase 3 Multi-center Study to Assess the Efficacy and Safety of 18F-mFBG PET Imaging in Subjects With Neuroblastoma",
    "tldr": "A phase 3 trial of 18F-MFBG in neuroblastoma, run by Innervate Radiopharmaceuticals LLC (Formerly: Illumina Radiopharmaceuticals LLC), active and no longer recruiting.",
    "summary": "Open-Label Study of 18F-mFBG for Imaging Neuroblastoma is a phase 3 interventional study registered as NCT04724369 by Innervate Radiopharmaceuticals LLC (Formerly: Illumina Radiopharmaceuticals LLC), with 43 participants enrolled, started 2021-11-18 and due to reach its primary completion in 2026-07-30. Interventions recorded: 18F-MFBG.",
    "indications": [
      "neuroblastoma"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT04724369",
        "url": "https://clinicaltrials.gov/study/NCT04724369"
      }
    ]
  },
  {
    "id": "nct04807257",
    "kind": "trial",
    "name": "Auger Molecular Therapy (AMT) for Malignant Cutaneous Lesions Treatment",
    "nct": "NCT04807257",
    "phase": "1/2",
    "status": "recruiting",
    "sponsor": "NanoRay Biotech Co., Ltd.",
    "enrolled": 18,
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "setting": "A First-in-Human Study of Auger Molecular Therapy (AMT) in Patients With Malignant Cutaneous Lesions From Advanced Solid Tumors",
    "tldr": "A phase 1/2 trial of Auger Molecular Therapy (AMT) in advanced solid tumours, run by NanoRay Biotech Co., Ltd., now recruiting.",
    "summary": "Auger Molecular Therapy (AMT) for Malignant Cutaneous Lesions Treatment is a phase 1/2 interventional study registered as NCT04807257 by NanoRay Biotech Co., Ltd., with 18 participants planned, started 2024-08-05 and due to reach its primary completion in 2025-12-31. Interventions recorded: Auger Molecular Therapy (AMT).",
    "links": [
      {
        "label": "ClinicalTrials.gov NCT04807257",
        "url": "https://clinicaltrials.gov/study/NCT04807257"
      }
    ]
  },
  {
    "id": "nct04868604",
    "aka": [
      "SECuRE"
    ],
    "kind": "trial",
    "name": "64Cu-SAR-bisPSMA and 67Cu-SAR-bisPSMA for Identification and Treatment of PSMA-expressing Metastatic Castrate Resistant Prostate Cancer (SECuRE)",
    "nct": "NCT04868604",
    "phase": "1/2",
    "status": "recruiting",
    "sponsor": "Clarity Pharmaceuticals Ltd",
    "enrolled": 54,
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "setting": "A Phase I/IIa Theranostic Study of 64Cu-SAR-bisPSMA and 67Cu-SAR-bisPSMA for Identification and Treatment of PSMA-expressing Metastatic Castrate Resistant Prostate Cancer",
    "tldr": "A phase 1/2 trial of 64Cu-SAR-bisPSMA in prostate cancer, run by Clarity Pharmaceuticals Ltd, now recruiting.",
    "summary": "64Cu-SAR-bisPSMA and 67Cu-SAR-bisPSMA for Identification and Treatment of PSMA-expressing Metastatic Castrate Resistant Prostate Cancer (SECuRE) is a phase 1/2 interventional study registered as NCT04868604 by Clarity Pharmaceuticals Ltd, with 54 participants planned, started 2021-08-11 and due to reach its primary completion in 2026-09. Interventions recorded: 64Cu-SAR-bisPSMA and 67Cu-SAR-bisPSMA.",
    "indications": [
      "prostate",
      "prostate-mcrpc"
    ],
    "companies": [
      "clarity-pharmaceuticals"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT04868604",
        "url": "https://clinicaltrials.gov/study/NCT04868604"
      }
    ]
  },
  {
    "id": "nct04919226",
    "aka": [
      "COMPOSE"
    ],
    "kind": "trial",
    "name": "Lutetium 177Lu-Edotreotide Versus Best Standard of Care in Well-differentiated Aggressive Grade-2 and Grade-3 GastroEnteroPancreatic NeuroEndocrine Tumors (GEP-NETs) - COMPOSE",
    "nct": "NCT04919226",
    "phase": "3",
    "status": "active",
    "sponsor": "ITM Solucin GmbH",
    "enrolled": 259,
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "setting": "A Prospective, Randomised, Controlled, Open-label, Multicentre Study to Evaluate Efficacy, Safety and Patient-Reported Outcomes of Peptide Receptor Radionuclide Therapy (PRRT) With 177Lu-Edotreotide Compared to Best Standard of Care in Patients With Well-differentiated Aggressive Grade 2 and Grade 3, Somatostatin Receptor-Positive (SSTR+), Neuroendocrine Tumours of GastroEnteric or Pancreatic Origin",
    "tldr": "A phase 3 trial of 177Lu-edotreotide, Temozolomide, Capecitabine, Everolimus, Leucovorin (folinic acid) and Oxaliplatin in neuroendocrine tumours, run by ITM Solucin GmbH, active and no longer recruiting.",
    "summary": "Lutetium 177Lu-Edotreotide Versus Best Standard of Care in Well-differentiated Aggressive Grade-2 and Grade-3 GastroEnteroPancreatic NeuroEndocrine Tumors (GEP-NETs) - COMPOSE is a phase 3 interventional study registered as NCT04919226 by ITM Solucin GmbH, with 259 participants enrolled, started 2021-12-21 and due to reach its primary completion in 2027-06. Interventions recorded: 177Lu-Edotreotide (Peptide Receptor Radionuclide Therapy) PRRT, CAPTEM (Capecitabine and Temozolomide), Everolimus and FOLFOX (Folinic acid + Fluorouracil + Oxaliplatin).",
    "drugs": [
      "itm-11",
      "temozolomide",
      "capecitabine",
      "everolimus"
    ],
    "indications": [
      "neuroendocrine",
      "grade-3-net",
      "pancreatic-net",
      "small-intestinal-net"
    ],
    "companies": [
      "itm"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT04919226",
        "url": "https://clinicaltrials.gov/study/NCT04919226"
      }
    ]
  },
  {
    "id": "nct04939610",
    "aka": [
      "LuMIERE"
    ],
    "kind": "trial",
    "name": "A Study of 177Lu-FAP-2286 in Advanced Solid Tumors",
    "nct": "NCT04939610",
    "phase": "1/2",
    "status": "recruiting",
    "sponsor": "Novartis Pharmaceuticals",
    "enrolled": 222,
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "setting": "LuMIERE: A Phase 1/2, Multicenter, Open-label, Non-randomized Study to Investigate Safety and Tolerability, Pharmacokinetics, Dosimetry, and Preliminary Activity of 177Lu-FAP-2286 in Patients With an Advanced Solid Tumor",
    "tldr": "A phase 1/2 trial of FAP-2286 (177Lu / 68Ga) in advanced solid tumours, run by Novartis Pharmaceuticals, now recruiting.",
    "summary": "A Study of 177Lu-FAP-2286 in Advanced Solid Tumors is a phase 1/2 interventional study registered as NCT04939610 by Novartis Pharmaceuticals, with 222 participants planned, started 2021-07-30 and due to reach its primary completion in 2027-12-31. Interventions recorded: 68Ga-FAP-2286 and 177Lu-FAP-2286.",
    "drugs": [
      "fap-2286"
    ],
    "companies": [
      "advanced-accelerator-applications"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT04939610",
        "url": "https://clinicaltrials.gov/study/NCT04939610"
      }
    ]
  },
  {
    "id": "nct05004285",
    "kind": "trial",
    "name": "Evaluate the Clinical Usefulness of [F-18]Florastamin PET/CT Imaging Diagnosis Compared to MRI Diagnosis",
    "nct": "NCT05004285",
    "phase": "3",
    "status": "active",
    "sponsor": "FutureChem",
    "enrolled": 398,
    "asOf": "2026-09-16",
    "tags": [
      "ctgov-ingest"
    ],
    "setting": "A Multi Center, Non-randomized, Open, Phase 3 Study to Evaluate the Clinical Usefulness of [F-18]Florastamin PET/CT Imaging Diagnosis Compared to MRI Diagnosis in Prostate Cancer Risk Groups",
    "tldr": "A phase 3 trial of Florastamin F-18 run by FutureChem, active.",
    "summary": "Evaluate the Clinical Usefulness of [F-18]Florastamin PET/CT Imaging Diagnosis Compared to MRI Diagnosis is a phase 3 interventional study registered as NCT05004285 by FutureChem, with 398 participants planned, started 2021-04-28. Conditions listed: High Risk Prostate Carcinoma. No results are recorded here; the registry entry is the source.",
    "drugs": [
      "florastamin-f18"
    ],
    "indications": [
      "prostate"
    ],
    "companies": [
      "futurechem"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT05004285",
        "url": "https://clinicaltrials.gov/study/NCT05004285"
      }
    ]
  },
  {
    "id": "nct05063565",
    "aka": [
      "ROWAN"
    ],
    "kind": "trial",
    "name": "TheraSphere With Durvalumab and Tremelimumab for HCC",
    "nct": "NCT05063565",
    "phase": "2",
    "status": "active",
    "sponsor": "Boston Scientific Corporation",
    "enrolled": 100,
    "asOf": "2026-09-16",
    "tags": [
      "ctgov-ingest"
    ],
    "setting": "An Open-Label, Prospective, Multi-Center Clinical Trial to Evaluate the Efficacy and Safety of TheraSphere™ Followed by Durvalumab (Imfinzi®) With Tremelimumab (Imjudo®) for Hepatocellular Carcinoma (HCC)",
    "tldr": "A phase 2 trial of Durvalumab in hepatocellular carcinoma, run by Boston Scientific Corporation, active and no longer recruiting.",
    "summary": "TheraSphere With Durvalumab and Tremelimumab for HCC is a phase 2 interventional study registered as NCT05063565 by Boston Scientific Corporation, with 100 participants planned, started 2023-11-03 and due to reach its primary completion in 2027-06. Interventions recorded: TheraSphere Y-90 glass microsphere therapy, Durvalumab (Imfinzi) immunotherapy, Tremelimumab immunotherapy. Conditions listed: Hepatocellular Carcinoma. No results are recorded here; the registry entry is the source.",
    "drugs": [
      "durvalumab"
    ],
    "indications": [
      "hcc"
    ],
    "companies": [
      "boston-scientific"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT05063565",
        "url": "https://clinicaltrials.gov/study/NCT05063565"
      }
    ]
  },
  {
    "id": "nct05142696",
    "kind": "trial",
    "name": "A Study of [177Lu]Lu-DOTA-TATE in Newly Diagnosed ES-SCLC Patients in Combination With Carboplatin, Etoposide and Atezolizumab",
    "nct": "NCT05142696",
    "phase": "1/2",
    "status": "active",
    "sponsor": "Novartis Pharmaceuticals",
    "enrolled": 55,
    "asOf": "2026-09-16",
    "tags": [
      "ctgov-ingest"
    ],
    "setting": "A Phase Ib/II Dose Finding Study Assessing Safety and Efficacy of [177Lu]Lu-DOTA-TATE in Newly Diagnosed Extensive Stage Small Cell Lung Cancer (ES-SCLC) in Combination With Carboplatin, Etoposide, and Atezolizumab in Induction and With Atezolizumab in Maintenance Phase",
    "tldr": "A phase 1/2 trial of Lutetium-177 dotatate, FAP-2286, Atezolizumab in small-cell lung cancer, run by Novartis Pharmaceuticals, active and no longer recruiting.",
    "summary": "A Study of [177Lu]Lu-DOTA-TATE in Newly Diagnosed ES-SCLC Patients in Combination With Carboplatin, Etoposide and Atezolizumab is a phase 1/2 interventional study registered as NCT05142696 by Novartis Pharmaceuticals, with 55 participants enrolled, started 2022-07-13 and due to reach its primary completion in 2028-03-07. Interventions recorded: [177Lu]Lu-DOTA-TATE, Atezolizumab, [68Ga]Ga-DOTA-TATE, Carboplatin, Etoposide. Conditions listed: Extensive Stage Small Cell Lung Cancer. No results are recorded here; the registry entry is the source.",
    "drugs": [
      "lutathera",
      "fap-2286"
    ],
    "indications": [
      "sclc"
    ],
    "companies": [
      "novartis"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT05142696",
        "url": "https://clinicaltrials.gov/study/NCT05142696"
      }
    ]
  },
  {
    "id": "nct05219500",
    "aka": [
      "TATCIST"
    ],
    "kind": "trial",
    "name": "Targeted Alpha Therapy With 225Actinium-Prostate Specific Membrane Antigen (PSMA)-I&T of Castration-resISTant Prostate Cancer (TATCIST).",
    "nct": "NCT05219500",
    "phase": "2",
    "status": "active",
    "sponsor": "Fusion Pharmaceuticals Inc.",
    "enrolled": 115,
    "asOf": "2026-09-16",
    "tags": [
      "ctgov-ingest"
    ],
    "setting": "PSMA-directed Targeted Alpha Therapy With FPI-2265 (225Ac-PSMA-I&T) for the Treatment of Metastatic Castration-resISTant Prostate Cancer (TATCIST). A Phase II Clinical Trial.",
    "tldr": "A phase 2 trial of FPI-2265 in prostate cancer, run by Fusion Pharmaceuticals Inc., active and no longer recruiting.",
    "summary": "Targeted Alpha Therapy With 225Actinium-Prostate Specific Membrane Antigen (PSMA)-I&T of Castration-resISTant Prostate Cancer (TATCIST). is a phase 2 interventional study registered as NCT05219500 by Fusion Pharmaceuticals Inc., with 115 participants planned, started 2021-12-16 and due to reach its primary completion in 2025-05-30. Interventions recorded: FPI-2265. Conditions listed: Metastatic Castration Resistant Prostate Cancer. No results are recorded here; the registry entry is the source.",
    "drugs": [
      "fpi-2265"
    ],
    "indications": [
      "prostate",
      "prostate-mcrpc"
    ],
    "companies": [
      "astrazeneca"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT05219500",
        "url": "https://clinicaltrials.gov/study/NCT05219500"
      }
    ]
  },
  {
    "id": "nct05381103",
    "targets": [
      "psma"
    ],
    "technologies": [
      "pet"
    ],
    "kind": "trial",
    "name": "PSMA-PET to Guide Prostatectomy",
    "nct": "NCT05381103",
    "phase": "2/3",
    "status": "recruiting",
    "sponsor": "Five Eleven Pharma, Inc.",
    "enrolled": 288,
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "setting": "PSMA-PET to Guide Prostatectomy: A Randomized Trial",
    "tldr": "A phase 2/3 trial of an investigational treatment in prostate cancer, run by Five Eleven Pharma, Inc., now recruiting.",
    "summary": "PSMA-PET to Guide Prostatectomy is a phase 2/3 interventional study registered as NCT05381103 by Five Eleven Pharma, Inc., with 288 participants planned, started 2021-10-01 and due to reach its primary completion in 2028-06-01.",
    "indications": [
      "prostate"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT05381103",
        "url": "https://clinicaltrials.gov/study/NCT05381103"
      }
    ]
  },
  {
    "id": "nct05413850",
    "kind": "trial",
    "name": "Anti-tumour Activity of (177Lu) rhPSMA-10.1 Injection",
    "nct": "NCT05413850",
    "phase": "1/2",
    "status": "recruiting",
    "sponsor": "Blue Earth Therapeutics Ltd",
    "enrolled": 82,
    "asOf": "2026-09-16",
    "tags": [
      "ctgov-ingest"
    ],
    "setting": "An Open-label, Multicentre, Integrated Phase 1 & 2 Study to Evaluate the Safety, Tolerability, Radiation Dosimetry and Anti-tumour Activity of Lutetium (177Lu) rhPSMA-10.1 Injection in Men With Metastatic Castrate-resistant Prostate Cancer",
    "tldr": "A phase 1/2 trial of FAP-2286 in prostate cancer, run by Blue Earth Therapeutics Ltd, now recruiting.",
    "summary": "Anti-tumour Activity of (177Lu) rhPSMA-10.1 Injection is a phase 1/2 interventional study registered as NCT05413850 by Blue Earth Therapeutics Ltd, with 82 participants planned, started 2022-07-20 and due to reach its primary completion in 2026-08-27. Interventions recorded: Lutetium (177Lu) rhPSMA-10.1 Injection, 18F-rhPSMA-7.3 injection (in phase 1 only). Conditions listed: Prostate Cancer, Metastatic Castration-resistant Prostate Cancer, mCRPC, Urogenital Neoplasms. No results are recorded here; the registry entry is the source.",
    "drugs": [
      "fap-2286"
    ],
    "indications": [
      "prostate",
      "prostate-mcrpc"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT05413850",
        "url": "https://clinicaltrials.gov/study/NCT05413850"
      }
    ]
  },
  {
    "id": "nct05459844",
    "kind": "trial",
    "name": "A Study Comparing Treatment With Lutetium[177Lu] Oxodotreotide Injection to Octreotide LAR in Patients With GEP-NETs",
    "nct": "NCT05459844",
    "phase": "3",
    "status": "active",
    "sponsor": "Sinotau Pharmaceutical Group",
    "enrolled": 196,
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "setting": "A Study Comparing Treatment With Lutetium[177Lu] Oxodotreotide Injection to Octreotide LAR in Patients With Inoperable, Progressive, Well Differentiated, Somatostatin Receptor Positive Gastroenteropancreatic Neuroendocrine Tumours",
    "tldr": "A phase 3 trial of Lutetium[177Lu] Oxodotreotide Injection in neuroendocrine tumours, run by Sinotau Pharmaceutical Group, active and no longer recruiting.",
    "summary": "A Study Comparing Treatment With Lutetium[177Lu] Oxodotreotide Injection to Octreotide LAR in Patients With GEP-NETs is a phase 3 interventional study registered as NCT05459844 by Sinotau Pharmaceutical Group, with 196 participants enrolled, started 2022-08-31 and due to reach its primary completion in 2024-06-26. Interventions recorded: Lutetium[177Lu] Oxodotreotide Injection and Octreotide LAR.",
    "indications": [
      "neuroendocrine",
      "pancreatic-net",
      "small-intestinal-net"
    ],
    "companies": [
      "sinotau-pharmaceutical"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT05459844",
        "url": "https://clinicaltrials.gov/study/NCT05459844"
      }
    ]
  },
  {
    "id": "nct05547061",
    "technologies": [
      "lu177-radioligand-therapy"
    ],
    "kind": "trial",
    "name": "A Phase 1/2 Clinical Trial to Evaluate the Safety, Tolerability, Dosimetry, and Anti-tumor Activity of Ga-68-NGUL / Lu-177-DGUL in Patients With Metastatic Castration-resistant Prostate Cancer (mCRPC) Refractory to Standard Therapy",
    "nct": "NCT05547061",
    "phase": "1/2",
    "status": "active",
    "sponsor": "Cellbion Co., Ltd.",
    "enrolled": 91,
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "setting": "A Phase 1/2 Clinical Trial to Evaluate the Safety, Tolerability, Dosimetry, and Anti-tumor Activity of Ga-68-NGUL / Lu-177-DGUL in Patients With Metastatic Castration-resistant Prostate Cancer (mCRPC) Refractory to Standard Therapy",
    "tldr": "A phase 1/2 trial of Lu-177-DGUL in prostate cancer, run by Cellbion Co., Ltd., active and no longer recruiting.",
    "summary": "A Phase 1/2 Clinical Trial to Evaluate the Safety, Tolerability, Dosimetry, and Anti-tumor Activity of Ga-68-NGUL / Lu-177-DGUL in Patients With Metastatic Castration-resistant Prostate Cancer (mCRPC) Refractory to Standard Therapy is a phase 1/2 interventional study registered as NCT05547061 by Cellbion Co., Ltd., with 91 participants enrolled, started 2021-04-12 and due to reach its primary completion in 2024-12-31. Interventions recorded: Lu-177-DGUL and Ga-68-NGUL.",
    "indications": [
      "prostate",
      "prostate-mcrpc"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT05547061",
        "url": "https://clinicaltrials.gov/study/NCT05547061"
      }
    ]
  },
  {
    "id": "nct05636618",
    "kind": "trial",
    "name": "Targeted Alpha-Particle Therapy for Advanced Somatostatin Receptor Type 2 (SSTR2) Positive Tumors",
    "nct": "NCT05636618",
    "phase": "1/2",
    "status": "recruiting",
    "sponsor": "Perspective Therapeutics",
    "enrolled": 300,
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "setting": "A Phase I/IIa First-in-Human Study of [212Pb]VMT-α-NET Targeted Alpha-Particle Therapy for Advanced SSTR2 Positive Tumors",
    "tldr": "A phase 1/2 trial of [203Pb]VMT-α-NET in neuroendocrine tumours, pancreatic ductal adenocarcinoma and pheochromocytoma and paraganglioma, run by Perspective Therapeutics, now recruiting.",
    "summary": "Targeted Alpha-Particle Therapy for Advanced Somatostatin Receptor Type 2 (SSTR2) Positive Tumors is a phase 1/2 interventional study registered as NCT05636618 by Perspective Therapeutics, with 300 participants planned, started 2023-09-27 and due to reach its primary completion in 2029-11-26. Interventions recorded: [203Pb]VMT-α-NET and [212Pb]VMT-α-NET.",
    "indications": [
      "neuroendocrine",
      "pheochromocytoma-paraganglioma"
    ],
    "companies": [
      "perspective-therapeutics"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT05636618",
        "url": "https://clinicaltrials.gov/study/NCT05636618"
      }
    ]
  },
  {
    "id": "nct05655312",
    "kind": "trial",
    "name": "MC1R-targeted Alpha-particle Monotherapy and Combination Therapy Trial With Nivolumab in Adults With Advanced Melanoma",
    "nct": "NCT05655312",
    "phase": "1/2",
    "status": "recruiting",
    "sponsor": "Perspective Therapeutics",
    "enrolled": 300,
    "asOf": "2026-09-16",
    "tags": [
      "ctgov-ingest"
    ],
    "setting": "A Phase I/IIa, First-In-Human, Multi-Center, Monotherapy and Combination-Therapy With Nivolumab, Dose-Finding and Dose-Expansion Study of [212Pb]VMT01 Melanocortin-1 Receptor-Targeted, Image-Guided Alpha-Particle Therapy in Subjects With Previously Treated Unresectable or Metastatic Melanoma",
    "tldr": "A phase 1/2 trial of Nivolumab in melanoma, run by Perspective Therapeutics, now recruiting.",
    "summary": "MC1R-targeted Alpha-particle Monotherapy and Combination Therapy Trial With Nivolumab in Adults With Advanced Melanoma is a phase 1/2 interventional study registered as NCT05655312 by Perspective Therapeutics, with 300 participants planned, started 2023-06-01 and due to reach its primary completion in 2027-12-31. Interventions recorded: [203Pb]VMT01, [212Pb]VMT01, Nivolumab. Conditions listed: Recurrent Melanoma (Skin), Metastatic Melanoma, Melanoma Stage IV, Melanoma Stage III. No results are recorded here; the registry entry is the source.",
    "companies": [
      "perspective-therapeutics"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT05655312",
        "url": "https://clinicaltrials.gov/study/NCT05655312"
      }
    ]
  },
  {
    "id": "nct05658003",
    "kind": "trial",
    "name": "A Study Evaluating [177Lu]Lu-PSMA-617 vs. a Change of Androgen Receptor-directed Therapy in Taxane Treatment Naive Chinese Male Patients With Progressive Metastatic Castrate Resistant Prostate Cancer",
    "nct": "NCT05658003",
    "phase": "2",
    "status": "active",
    "sponsor": "Novartis Pharmaceuticals",
    "enrolled": 63,
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "setting": "An Open-label, Multi-center, Randomized, Phase II Study Evaluating [177Lu]Lu-PSMA-617 vs. a Change of Androgen Receptor-directed Therapy in the Treatment of Taxane Naive Chinese Male Patients With Progressive Metastatic Castrate Resistant Prostate Cancer",
    "tldr": "A phase 2 trial of [177Lu]Lu-PSMA-617 in prostate cancer, run by Novartis Pharmaceuticals, active and no longer recruiting.",
    "summary": "A Study Evaluating [177Lu]Lu-PSMA-617 vs. a Change of Androgen Receptor-directed Therapy in Taxane Treatment Naive Chinese Male Patients With Progressive Metastatic Castrate Resistant Prostate Cancer is a phase 2 interventional study registered as NCT05658003 by Novartis Pharmaceuticals, with 63 participants enrolled, started 2023-05-05 and due to reach its primary completion in 2024-12-02. Interventions recorded: [177Lu]Lu-PSMA-617, ARDT and [68Ga]Ga-PSMA-11.",
    "indications": [
      "prostate",
      "prostate-mcrpc"
    ],
    "companies": [
      "advanced-accelerator-applications"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT05658003",
        "url": "https://clinicaltrials.gov/study/NCT05658003"
      }
    ]
  },
  {
    "id": "nct05682443",
    "aka": [
      "PRESERVE-006"
    ],
    "kind": "trial",
    "name": "ONC-392 Plus Lutetium Lu 177 Vipivotide Tetraxetan in Patients With mCRPC",
    "nct": "NCT05682443",
    "phase": "1/2",
    "status": "active",
    "sponsor": "OncoC4, Inc.",
    "enrolled": 148,
    "asOf": "2026-09-16",
    "tags": [
      "ctgov-ingest"
    ],
    "setting": "Randomized Study of ONC-392 Plus Lutetium Lu 177 Vipivotide Tetraxetan in Patients With Metastatic Castration-Resistant Prostate Cancer (mCRPC) Who Progressed on Androgen Receptor (AR) Pathway Inhibition",
    "tldr": "A phase 1/2 trial of Gotistobart, Lutetium-177 vipivotide tetraxetan in prostate cancer, run by OncoC4, Inc., active and no longer recruiting.",
    "summary": "ONC-392 Plus Lutetium Lu 177 Vipivotide Tetraxetan in Patients With mCRPC is a phase 1/2 interventional study registered as NCT05682443 by OncoC4, Inc., with 148 participants enrolled, started 2023-12-11 and due to reach its primary completion in 2026-11-30. Interventions recorded: ONC-392 low, ONC-392 high, lutetium Lu 177 vipivotide tetraxetan. Conditions listed: Metastatic Castration-resistant Prostate Cancer. No results are recorded here; the registry entry is the source.",
    "drugs": [
      "pluvicto"
    ],
    "indications": [
      "prostate",
      "prostate-mcrpc"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT05682443",
        "url": "https://clinicaltrials.gov/study/NCT05682443"
      }
    ]
  },
  {
    "id": "nct05706129",
    "kind": "trial",
    "name": "A Study to Assess Safety, Tolerability and Imaging Characteristics of [68Ga]Ga-DPI-4452 and to Assess Safety, Tolerability, and Efficacy of [177Lu]Lu-DPI-4452 in Participants With Unresectable Locally Advanced or Metastatic Solid Tumors",
    "nct": "NCT05706129",
    "phase": "1/2",
    "status": "recruiting",
    "sponsor": "Lumara Bio Oncologics GmbH",
    "enrolled": 270,
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "setting": "A Multicenter, Open-Label, Non-Randomized Phase 1/2 Study to Assess Safety, Tolerability and Imaging Characteristics of [68Ga]Ga-DPI-4452 and to Assess Safety, Tolerability, and Efficacy of [177Lu]Lu-DPI-4452 in Patients With Unresectable Locally Advanced or Metastatic Solid Tumors",
    "tldr": "A phase 1/2 trial of [68Ga]Ga-DPI-4452 in renal cell carcinoma, pancreatic ductal adenocarcinoma, colorectal cancer, bladder & urothelial cancer, head and neck squamous cell carcinoma and triple-negative breast cancer, run by Lumara Bio Oncologics GmbH, now recruiting.",
    "summary": "A Study to Assess Safety, Tolerability and Imaging Characteristics of [68Ga]Ga-DPI-4452 and to Assess Safety, Tolerability, and Efficacy of [177Lu]Lu-DPI-4452 in Participants With Unresectable Locally Advanced or Metastatic Solid Tumors is a phase 1/2 interventional study registered as NCT05706129 by Lumara Bio Oncologics GmbH, with 270 participants planned, started 2023-03-14 and due to reach its primary completion in 2027-06. Interventions recorded: [68Ga]Ga-DPI-4452 and [177Lu]Lu-DPI-4452.",
    "indications": [
      "rcc"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT05706129",
        "url": "https://clinicaltrials.gov/study/NCT05706129"
      }
    ]
  },
  {
    "id": "nct05849298",
    "aka": [
      "PSMACare"
    ],
    "kind": "trial",
    "name": "A Phase II Study of AAA617 Alone and AAA617 in Combination With ARPI in Patients With PSMA PET Scan Positive CRPC",
    "nct": "NCT05849298",
    "phase": "2",
    "status": "active",
    "sponsor": "Novartis Pharmaceuticals",
    "enrolled": 49,
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "setting": "An International Prospective Open-label, Multi-center, Randomized, Non-comparative Phase II Study of Lutetium [177Lu] Vipivotide Tetraxetan (AAA617) Alone and Lutetium [177Lu] Vipivotide Tetraxetan (AAA617) in Combination With Androgen Receptor Pathway Inhibitors in Patients With PSMA PET Scan Positive Castration-Resistant Prostate Cancer",
    "tldr": "A phase 2 trial of AAA617 in prostate cancer, run by Novartis Pharmaceuticals, active and no longer recruiting.",
    "summary": "A Phase II Study of AAA617 Alone and AAA617 in Combination With ARPI in Patients With PSMA PET Scan Positive CRPC is a phase 2 interventional study registered as NCT05849298 by Novartis Pharmaceuticals, with 49 participants enrolled, started 2024-01-03 and due to reach its primary completion in 2026-12-23. Interventions recorded: AAA617, AAA517, Piflufolastat F 18, ARPI and ADT.",
    "indications": [
      "prostate"
    ],
    "companies": [
      "advanced-accelerator-applications"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT05849298",
        "url": "https://clinicaltrials.gov/study/NCT05849298"
      }
    ]
  },
  {
    "id": "nct05884255",
    "kind": "trial",
    "name": "An Open-label Phase 3 Study of Lutetium (177Lu) Oxodotreotide Injection in Subjects With Advanced Gastrointestinal Pancreatic Neuroendocrine Tumors.",
    "nct": "NCT05884255",
    "phase": "3",
    "status": "recruiting",
    "sponsor": "Jiangsu HengRui Medicine Co., Ltd.",
    "enrolled": 220,
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "setting": "Randomized, Open, Positive Control Phase III Clinical Trial of Lutetium (177Lu) Oxodotreotide Injection Combined With Standard-dose Long-acting Octreotide Versus High-dose Long-acting Octreotide in the Treatment of Somatostatin Receptor-positive Advanced Gastrointestinal Pancreatic Neuroendocrine Tumors.",
    "tldr": "A phase 3 trial of Lutetium (177Lu) Oxodotreotide Injection；long-acting Octreotide in pancreatic ductal adenocarcinoma, run by Jiangsu HengRui Medicine Co., Ltd., now recruiting.",
    "summary": "An Open-label Phase 3 Study of Lutetium (177Lu) Oxodotreotide Injection in Subjects With Advanced Gastrointestinal Pancreatic Neuroendocrine Tumors. is a phase 3 interventional study registered as NCT05884255 by Jiangsu HengRui Medicine Co., Ltd., with 220 participants planned, started 2023-07-06 and due to reach its primary completion in 2026-12. Interventions recorded: Lutetium (177Lu) Oxodotreotide Injection；long-acting Octreotide and long-acting Octreotide.",
    "links": [
      {
        "label": "ClinicalTrials.gov NCT05884255",
        "url": "https://clinicaltrials.gov/study/NCT05884255"
      }
    ]
  },
  {
    "id": "nct05936658",
    "kind": "trial",
    "name": "[18F]Florastamin PET/CT Imaging Examination in Patients With Suspected Recurrent or Metastatic Prostate Cancer",
    "nct": "NCT05936658",
    "phase": "3",
    "status": "active",
    "sponsor": "FutureChem",
    "enrolled": 138,
    "asOf": "2026-09-16",
    "tags": [
      "ctgov-ingest"
    ],
    "setting": "A Multi-center, Open-label, Single Arm Phase III Clinical Trial for the Diagnostic Efficacy Assessment and Safety Evaluation by [18F]Florastamin PET/CT Imaging Examination in Patients With Suspected Recurrent or Metastatic Prostate Cancer",
    "tldr": "A phase 3 trial of Florastamin F-18 run by FutureChem, active.",
    "summary": "[18F]Florastamin PET/CT Imaging Examination in Patients With Suspected Recurrent or Metastatic Prostate Cancer is a phase 3 interventional study registered as NCT05936658 by FutureChem, with 138 participants enrolled, started 2023-05-08. Conditions listed: High Risk Prostate Carcinoma. No results are recorded here; the registry entry is the source.",
    "drugs": [
      "florastamin-f18"
    ],
    "indications": [
      "prostate"
    ],
    "companies": [
      "futurechem"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT05936658",
        "url": "https://clinicaltrials.gov/study/NCT05936658"
      }
    ]
  },
  {
    "id": "nct05939414",
    "kind": "trial",
    "name": "An Open-label Study Comparing Lutetium (177Lu) Vipivotide Tetraxetan Versus Observation in PSMA Positive OMPC.",
    "nct": "NCT05939414",
    "phase": "3",
    "status": "recruiting",
    "sponsor": "Novartis Pharmaceuticals",
    "enrolled": 450,
    "asOf": "2026-09-16",
    "tags": [
      "ctgov-ingest"
    ],
    "setting": "An International, Prospective, Open-label, Multi-center, Randomized Phase III Study Comparing Lutetium (177Lu) Vipivotide Tetraxetan (AAA617) Versus Observation to Delay Castration or Disease Recurrence in Adult Male Patients With Prostate-specific Membrane Antigen (PSMA) Positive Oligometastatic Prostate Cancer (OMPC)",
    "tldr": "A phase 3 trial of FAP-2286 in prostate cancer, run by Novartis Pharmaceuticals, now recruiting.",
    "summary": "An Open-label Study Comparing Lutetium (177Lu) Vipivotide Tetraxetan Versus Observation in PSMA Positive OMPC. is a phase 3 interventional study registered as NCT05939414 by Novartis Pharmaceuticals, with 450 participants planned, started 2024-03-12 and due to reach its primary completion in 2028-04-25. Interventions recorded: AAA617, piflufolastat (18F), gallium (68Ga) gozetotide (25μg). Conditions listed: Oligometastatic Prostate Cancer (OMPC). No results are recorded here; the registry entry is the source.",
    "drugs": [
      "fap-2286"
    ],
    "indications": [
      "prostate"
    ],
    "companies": [
      "novartis"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT05939414",
        "url": "https://clinicaltrials.gov/study/NCT05939414"
      }
    ]
  },
  {
    "id": "nct06004661",
    "kind": "trial",
    "name": "Study of Lutetium (177Lu) Vipivotide Tetraxetan in mCRPC Participants With Moderately and Severely Impaired and With Normal Renal Function",
    "nct": "NCT06004661",
    "phase": "2",
    "status": "active",
    "sponsor": "Novartis Pharmaceuticals",
    "enrolled": 23,
    "asOf": "2026-09-16",
    "tags": [
      "ctgov-ingest"
    ],
    "setting": "An Open-label Dosimetry, Biodistribution, Tolerability and Safety Study of Lutetium (177Lu) Vipivotide Tetraxetan in Participants With Progressive PSMA-Positive Metastatic Castration-Resistant Prostate Cancer (mCRPC) With Moderately and Severely Impaired and With Normal Renal Function.",
    "tldr": "A phase 2 trial of Lutetium-177 vipivotide tetraxetan in prostate cancer, run by Novartis Pharmaceuticals, active and no longer recruiting.",
    "summary": "Study of Lutetium (177Lu) Vipivotide Tetraxetan in mCRPC Participants With Moderately and Severely Impaired and With Normal Renal Function is a phase 2 interventional study registered as NCT06004661 by Novartis Pharmaceuticals, with 23 participants enrolled, started 2024-04-04 and due to reach its primary completion in 2026-12-14. Interventions recorded: AAA617, 68Ga-PSMA-11. Conditions listed: Metastatic Castration-Resistant Prostate Cancer (mCRPC). No results are recorded here; the registry entry is the source.",
    "drugs": [
      "pluvicto"
    ],
    "indications": [
      "prostate",
      "prostate-mcrpc"
    ],
    "companies": [
      "novartis"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT06004661",
        "url": "https://clinicaltrials.gov/study/NCT06004661"
      }
    ]
  },
  {
    "id": "nct06040099",
    "aka": [
      "EMERALD-Y90"
    ],
    "kind": "trial",
    "name": "A US Study to Evaluate Transarterial Radioembolization (TARE) in Combination With Durvalumab and Bevacizumab Therapy in People With Unresectable Hepat",
    "nct": "NCT06040099",
    "phase": "2",
    "status": "active",
    "sponsor": "AstraZeneca",
    "enrolled": 58,
    "asOf": "2026-09-16",
    "tags": [
      "ctgov-ingest"
    ],
    "setting": "Phase II Single-Arm Study of Durvalumab and Bevacizumab Following Transarterial Radioembolization Using Yttrium-90 Glass Microspheres (TheraSphere™) in Unresectable Hepatocellular Carcinoma Amenable to Locoregional Therapy",
    "tldr": "A phase 2 trial of Durvalumab, Bevacizumab in hepatocellular carcinoma, run by AstraZeneca, active and no longer recruiting.",
    "summary": "A US Study to Evaluate Transarterial Radioembolization (TARE) in Combination With Durvalumab and Bevacizumab Therapy in People With Unresectable Hepatocellular Carcinoma Amenable to TARE is a phase 2 interventional study registered as NCT06040099 by AstraZeneca, with 58 participants enrolled, started 2024-02-13 and due to reach its primary completion in 2026-07-01. Interventions recorded: Durvalumab, Bevacizumab, Transarterial Radioembolization (TARE). Conditions listed: Hepatocellular Carcinoma (HCC). No results are recorded here; the registry entry is the source.",
    "drugs": [
      "durvalumab"
    ],
    "indications": [
      "hcc"
    ],
    "companies": [
      "astrazeneca"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT06040099",
        "url": "https://clinicaltrials.gov/study/NCT06040099"
      }
    ]
  },
  {
    "id": "nct06084806",
    "technologies": [
      "pet"
    ],
    "kind": "trial",
    "name": "Test-retest Evaluation of [18F]F-AraG PET",
    "nct": "NCT06084806",
    "phase": "2",
    "status": "recruiting",
    "sponsor": "CellSight Technologies, Inc.",
    "enrolled": 10,
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "setting": "Test-retest Evaluation of [18F]F-AraG PET in Non-small Cell Lung Cancer (NSCLC) Patients",
    "tldr": "A phase 2 trial of [18F]F-ARAG PET in non-small-cell lung cancer, run by CellSight Technologies, Inc., now recruiting.",
    "summary": "Test-retest Evaluation of [18F]F-AraG PET is a phase 2 interventional study registered as NCT06084806 by CellSight Technologies, Inc., with 10 participants planned, started 2023-10-31 and due to reach its primary completion in 2025-10-31. Interventions recorded: [18F]F-ARAG PET.",
    "links": [
      {
        "label": "ClinicalTrials.gov NCT06084806",
        "url": "https://clinicaltrials.gov/study/NCT06084806"
      }
    ]
  },
  {
    "id": "nct06107374",
    "kind": "trial",
    "name": "Imaging Advanced NSCLC Patients Undergoing PD-1/PD-L1 Directed Therapy Using [18F]-FARAG",
    "nct": "NCT06107374",
    "phase": "2",
    "status": "recruiting",
    "sponsor": "CellSight Technologies, Inc.",
    "enrolled": 20,
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "setting": "Imaging of T-cell Activation With [18F]F-araG in Advanced Non-Small Cell Lung Cancer (NSCLC) Patients Undergoing PD-1/PD-L1 Directed Therapy",
    "tldr": "A phase 2 trial of [18F]F-AraG in non-small-cell lung cancer, run by CellSight Technologies, Inc., now recruiting.",
    "summary": "Imaging Advanced NSCLC Patients Undergoing PD-1/PD-L1 Directed Therapy Using [18F]-FARAG is a phase 2 interventional study registered as NCT06107374 by CellSight Technologies, Inc., with 20 participants planned, started 2023-11-01 and due to reach its primary completion in 2025-12-31. Interventions recorded: [18F]F-AraG.",
    "links": [
      {
        "label": "ClinicalTrials.gov NCT06107374",
        "url": "https://clinicaltrials.gov/study/NCT06107374"
      }
    ],
    "indications": [
      "nsclc"
    ]
  },
  {
    "id": "nct06122584",
    "kind": "trial",
    "name": "Diagnostic Performance of [18F]PSMA-1007 PET/CT Imaging in Patients With Newly-Diagnosed Prostate Cancer",
    "nct": "NCT06122584",
    "phase": "3",
    "status": "recruiting",
    "sponsor": "ABX advanced biochemical compounds GmbH",
    "enrolled": 380,
    "asOf": "2026-09-16",
    "tags": [
      "ctgov-ingest"
    ],
    "setting": "Prospective, Multi-Center Study to Assess the Diagnostic Performance of [18F]PSMA-1007 PET/CT Imaging in Patients With Newly-Diagnosed High-Risk or Very-High-Risk Prostate Cancer",
    "tldr": "A phase 3 trial of PSMA-1007 F-18 run by ABX advanced biochemical compounds GmbH in prostate cancer, now recruiting.",
    "summary": "Diagnostic Performance of [18F]PSMA-1007 PET/CT Imaging in Patients With Newly-Diagnosed Prostate Cancer is a phase 3 interventional study registered as NCT06122584 by ABX advanced biochemical compounds GmbH, with 380 participants planned, started 2024-06-13. Conditions listed: Prostate Cancer. No results are recorded here; the registry entry is the source.",
    "drugs": [
      "psma-1007-f18"
    ],
    "indications": [
      "prostate",
      "prostate-high-risk"
    ],
    "companies": [
      "abx-advanced-biochemical-compounds"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT06122584",
        "url": "https://clinicaltrials.gov/study/NCT06122584"
      }
    ]
  },
  {
    "id": "nct06139575",
    "kind": "trial",
    "name": "Phase 1/2 Clinical Study of Lutetium Lu 177 JH020002 Injection in Patients With Advanced Prostate Cancer",
    "nct": "NCT06139575",
    "phase": "1/2",
    "status": "recruiting",
    "sponsor": "Bivision Pharmaceuticals, Inc.",
    "enrolled": 90,
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "setting": "Phase 1/2 Clinical Study to Evaluate the Safety, Tolerability, Radiation Dosimetry and Preliminary Efficacy of Lutetium Lu 177 JH020002 Injection in Patients With Advanced Prostate Cancer",
    "tldr": "A phase 1/2 trial of Lutetium Lu 177 JH020002 Injection in prostate cancer, run by Bivision Pharmaceuticals, Inc., now recruiting.",
    "summary": "Phase 1/2 Clinical Study of Lutetium Lu 177 JH020002 Injection in Patients With Advanced Prostate Cancer is a phase 1/2 interventional study registered as NCT06139575 by Bivision Pharmaceuticals, Inc., with 90 participants planned, started 2023-12-22 and due to reach its primary completion in 2026-05. Interventions recorded: Lutetium Lu 177 JH020002 Injection.",
    "indications": [
      "prostate"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT06139575",
        "url": "https://clinicaltrials.gov/study/NCT06139575"
      }
    ]
  },
  {
    "id": "nct06184035",
    "technologies": [
      "lu177-radioligand-therapy"
    ],
    "kind": "trial",
    "name": "A Dose Escalation and Expansion Study of [177Lu]Lu-SN201 in Participants With Advanced Cancer",
    "nct": "NCT06184035",
    "phase": "1/2",
    "status": "recruiting",
    "sponsor": "Spago Nanomedical AB",
    "enrolled": 90,
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "setting": "Ph I/IIa Escalation/Expansion FIH, Open, Multi Center, Single Arm Study Evaluating Safety, Dosimetry and Early Efficacy of 177Lu-SN201 in Progressive/Treatment-refractory, Locally Advanced, Unresectable Metastatic or Recurrent Solid Tumors",
    "tldr": "A phase 1/2 trial of [177Lu]Lu-SN201 in advanced solid tumours, run by Spago Nanomedical AB, now recruiting.",
    "summary": "A Dose Escalation and Expansion Study of [177Lu]Lu-SN201 in Participants With Advanced Cancer is a phase 1/2 interventional study registered as NCT06184035 by Spago Nanomedical AB, with 90 participants planned, started 2023-12-06 and due to reach its primary completion in 2027-12-01. Interventions recorded: [177Lu]Lu-SN201.",
    "links": [
      {
        "label": "ClinicalTrials.gov NCT06184035",
        "url": "https://clinicaltrials.gov/study/NCT06184035"
      }
    ]
  },
  {
    "id": "nct06235151",
    "kind": "trial",
    "name": "Copper Cu 64 PSMA I&T PET Imaging in Men With Newly Diagnosed Prostate Cancer",
    "nct": "NCT06235151",
    "phase": "3",
    "status": "active",
    "sponsor": "Curium US LLC",
    "enrolled": 439,
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "setting": "Phase 3, Multi-Center, Open-label Study to Test the Diagnostic Performance of Copper Cu 64 PSMA I&T PET/CT in Staging Men With Newly Diagnosed Unfavorable Intermediate-risk, High-risk or Very High-risk Prostate Cancer Electing to Undergo Radical Prostatectomy With Pelvic Lymph Node Dissection",
    "tldr": "A phase 3 trial of Copper Cu 64 PSMA I&T in prostate cancer, run by Curium US LLC, active and no longer recruiting.",
    "summary": "Copper Cu 64 PSMA I&T PET Imaging in Men With Newly Diagnosed Prostate Cancer is a phase 3 interventional study registered as NCT06235151 by Curium US LLC, with 439 participants enrolled, started 2024-04-01 and due to reach its primary completion in 2026-09. Interventions recorded: Copper Cu 64 PSMA I&T.",
    "indications": [
      "prostate",
      "prostate-high-risk"
    ],
    "companies": [
      "curium"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT06235151",
        "url": "https://clinicaltrials.gov/study/NCT06235151"
      }
    ]
  },
  {
    "id": "nct06247995",
    "aka": [
      "NeoB-Cap1"
    ],
    "kind": "trial",
    "name": "A Phase I/II, Dose Finding and Optimization Study of [177Lu]Lu-NeoB in Combination With Capecitabine in Patients With GRPR+, ER+, HER2- Metastatic Breast Cancer After Progression on Previous Endocrine Therapy in Combination With a CDK4/6 Inhibitor.",
    "nct": "NCT06247995",
    "phase": "1/2",
    "status": "active",
    "sponsor": "Novartis Pharmaceuticals",
    "enrolled": 20,
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "setting": "A Phase I/II, Open-label, Multi-center Trial of [177Lu]Lu-NeoB in Combination With Capecitabine in Adult Patients With Gastrin Releasing Peptide Receptor Positive, Estrogen Receptor-positive, Human Epidermal Growth Factor Receptor-2 Negative Metastatic Breast Cancer After Progression on Previous Endocrine Therapy in Combination With a CDK4/6 Inhibitor.",
    "tldr": "A phase 1/2 trial of Capecitabine in advanced solid tumours, run by Novartis Pharmaceuticals, active and no longer recruiting.",
    "summary": "A Phase I/II, Dose Finding and Optimization Study of [177Lu]Lu-NeoB in Combination With Capecitabine in Patients With GRPR+, ER+, HER2- Metastatic Breast Cancer After Progression on Previous Endocrine Therapy in Combination With a CDK4/6 Inhibitor. is a phase 1/2 interventional study registered as NCT06247995 by Novartis Pharmaceuticals, with 20 participants enrolled, started 2024-08-14 and due to reach its primary completion in 2027-04-14. Interventions recorded: [68Ga]Ga-NeoB, [177Lu]Lu-NeoB and Capecitabine.",
    "drugs": [
      "capecitabine"
    ],
    "companies": [
      "advanced-accelerator-applications"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT06247995",
        "url": "https://clinicaltrials.gov/study/NCT06247995"
      }
    ]
  },
  {
    "id": "nct06298916",
    "aka": [
      "PHANTOM"
    ],
    "companies": [
      "lantheus"
    ],
    "kind": "trial",
    "name": "64Cu-LNTH-1363S in Patients With Sarcoma or Gastrointestinal Tract Cancer",
    "nct": "NCT06298916",
    "phase": "1/2",
    "status": "recruiting",
    "sponsor": "Lantheus Medical Imaging",
    "enrolled": 26,
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "setting": "A Phase 1/2a Study Utilizing 64Cu-LNTH-1363S (64Cu Radiolabeled FAPi PET/CT Imaging Agent) in Patients With Sarcoma or Gastrointestinal Tract Cancer (PHANTOM Trial)",
    "tldr": "A phase 1/2 trial of 64Cu-LNTH-1363S in sarcomas, oesophageal cancer, gastric & gastro-oesophageal junction cancer, pancreatic ductal adenocarcinoma and colorectal cancer, run by Lantheus Medical Imaging, now recruiting.",
    "summary": "64Cu-LNTH-1363S in Patients With Sarcoma or Gastrointestinal Tract Cancer is a phase 1/2 interventional study registered as NCT06298916 by Lantheus Medical Imaging, with 26 participants planned, started 2025-08 and due to reach its primary completion in 2025-11. Interventions recorded: 64Cu-LNTH-1363S.",
    "links": [
      {
        "label": "ClinicalTrials.gov NCT06298916",
        "url": "https://clinicaltrials.gov/study/NCT06298916"
      }
    ]
  },
  {
    "id": "nct06359847",
    "kind": "trial",
    "name": "Study of ST-1898 in Locally Advanced or Metastatic Radioiodine-Refractory Differentiated Thyroid Cancer",
    "nct": "NCT06359847",
    "phase": "2",
    "status": "recruiting",
    "sponsor": "Beijing Scitech-Mq Pharmaceuticals Limited",
    "enrolled": 60,
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "setting": "A Multicenter, Phase II Clinical Trial to Evaluate the Efficacy and Safety of ST-1898 Tablets in Patients With Locally Advanced or Metastatic RAIR-DTC After Failure of at Least First-line TKI Systemic Therapy",
    "tldr": "A phase 2 trial of ST-1898 tablets in thyroid cancer, run by Beijing Scitech-Mq Pharmaceuticals Limited, now recruiting.",
    "summary": "Study of ST-1898 in Locally Advanced or Metastatic Radioiodine-Refractory Differentiated Thyroid Cancer is a phase 2 interventional study registered as NCT06359847 by Beijing Scitech-Mq Pharmaceuticals Limited, with 60 participants planned, started 2023-11-15 and due to reach its primary completion in 2027-12. Interventions recorded: ST-1898 tablets.",
    "indications": [
      "thyroid"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT06359847",
        "url": "https://clinicaltrials.gov/study/NCT06359847"
      }
    ]
  },
  {
    "id": "nct06369831",
    "aka": [
      "HERMIA"
    ],
    "targets": [
      "her2"
    ],
    "technologies": [
      "pet",
      "pet-ct"
    ],
    "kind": "trial",
    "name": "HER2 Targeted Molecular Imaging in mBC and Other Metastatic Solid Carcinomas Using 68Ga-ABS011",
    "nct": "NCT06369831",
    "phase": "2",
    "status": "recruiting",
    "sponsor": "Abscint NV/SA",
    "enrolled": 60,
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "setting": "Evaluating the Diagnostic Performance of Human Epidermal Growth Factor Receptor 2 (HER2) Targeted Positron Emission Tomography and Computed Tomography (PET/CT) With 68Ga-ABS011 in Metastatic Breast Cancer (mBC) and Other Metastatic Solid Carcinomas.",
    "tldr": "A phase 2 trial of an investigational treatment in advanced solid tumours, run by Abscint NV/SA, now recruiting.",
    "summary": "HER2 Targeted Molecular Imaging in mBC and Other Metastatic Solid Carcinomas Using 68Ga-ABS011 is a phase 2 interventional study registered as NCT06369831 by Abscint NV/SA, with 60 participants planned, started 2024-09-12 and due to reach its primary completion in 2026-09.",
    "links": [
      {
        "label": "ClinicalTrials.gov NCT06369831",
        "url": "https://clinicaltrials.gov/study/NCT06369831"
      }
    ]
  },
  {
    "id": "nct06383052",
    "targets": [
      "psma"
    ],
    "kind": "trial",
    "name": "A Phase 1/2 Study of 177Lu-NYM032 Injection in mCRPC",
    "nct": "NCT06383052",
    "phase": "1/2",
    "status": "active",
    "sponsor": "Norroy Bioscience Co., LTD",
    "enrolled": 30,
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "setting": "A Phase 1/2 Study to Evaluate the Safety, Pharmacokinetics, Radiation Dosimetry and Efficacy of 177Lu-NYM032 Injection in Patients With PSMA-Positive Metastatic Castration-Resistant Prostate Cancer",
    "tldr": "A phase 1/2 trial of 177Lu-NYM032 injection in prostate cancer, run by Norroy Bioscience Co., LTD, active and no longer recruiting.",
    "summary": "A Phase 1/2 Study of 177Lu-NYM032 Injection in mCRPC is a phase 1/2 interventional study registered as NCT06383052 by Norroy Bioscience Co., LTD, with 30 participants enrolled, started 2024-04-26 and due to reach its primary completion in 2025-06-30. Interventions recorded: 177Lu-NYM032 injection.",
    "indications": [
      "prostate",
      "prostate-mcrpc"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT06383052",
        "url": "https://clinicaltrials.gov/study/NCT06383052"
      }
    ]
  },
  {
    "id": "nct06398444",
    "kind": "trial",
    "name": "A Clinical Study of Lutetium[177Lu] Oxodotreotide Injection in Patients With Advanced Neuroendocrine Neoplasms",
    "nct": "NCT06398444",
    "phase": "2/3",
    "status": "recruiting",
    "sponsor": "Sinotau Pharmaceutical Group",
    "enrolled": 85,
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "setting": "A Clinical Study to Evaluate the Safety and Efficacy of Lutetium[177Lu] Oxodotreotide Injection in Patients With Advanced Somatostatin Receptor Positive Neuroendocrine Neoplasms",
    "tldr": "A phase 2/3 trial of Lutetium[177Lu] Oxodotreotide Injection in neuroendocrine tumours, run by Sinotau Pharmaceutical Group, now recruiting.",
    "summary": "A Clinical Study of Lutetium[177Lu] Oxodotreotide Injection in Patients With Advanced Neuroendocrine Neoplasms is a phase 2/3 interventional study registered as NCT06398444 by Sinotau Pharmaceutical Group, with 85 participants planned, started 2024-06-11 and due to reach its primary completion in 2027-06-01. Interventions recorded: Lutetium[177Lu] Oxodotreotide Injection.",
    "indications": [
      "neuroendocrine"
    ],
    "companies": [
      "sinotau-pharmaceutical"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT06398444",
        "url": "https://clinicaltrials.gov/study/NCT06398444"
      }
    ]
  },
  {
    "id": "nct06474806",
    "aka": [
      "uTRACE-101"
    ],
    "technologies": [
      "pet"
    ],
    "kind": "trial",
    "name": "Safety and Diagnostic Performance of uPAR PET Imaging in Localised, Untreated Prostate Cancer",
    "nct": "NCT06474806",
    "phase": "2",
    "status": "recruiting",
    "sponsor": "Curasight",
    "enrolled": 168,
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "setting": "An Open-label, Two-part, Phase 2 Clinical Trial to Investigate the Safety and Diagnostic Performance of uPAR PET Imaging for Non-invasive Classification of ISUP Grades Among Patients With Localised, Untreated Prostate Cancer.",
    "tldr": "A phase 2 trial of 64Cu-DOTA-AE105 in prostate cancer, run by Curasight, now recruiting.",
    "summary": "Safety and Diagnostic Performance of uPAR PET Imaging in Localised, Untreated Prostate Cancer is a phase 2 interventional study registered as NCT06474806 by Curasight, with 168 participants planned, started 2024-06-01 and due to reach its primary completion in 2027-01-30. Interventions recorded: 64Cu-DOTA-AE105.",
    "indications": [
      "prostate"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT06474806",
        "url": "https://clinicaltrials.gov/study/NCT06474806"
      }
    ]
  },
  {
    "id": "nct06504147",
    "kind": "trial",
    "name": "A Study of Radspherin® in Patients With Primary Advanced Epithelial Cancer, With Peritoneal Metastasis That Are Homologous Recombination Proficient Scheduled to Undergo Neoadjuvant Chemotherapy and Interval Debulking Surgery",
    "nct": "NCT06504147",
    "phase": "2",
    "status": "recruiting",
    "sponsor": "Oncoinvent Solutions AS",
    "enrolled": 114,
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "setting": "A Phase 2, Randomised, Open Label, Multicentre Study of an Intraperitoneal α-emitting Radionuclide Therapy (Radspherin®) in Patients With Primary Advanced High-grade Serous or High-grade Endometrioid Epithelial Ovarian, Fallopian Tube, or Primary Peritoneal Cancer, With Peritoneal Metastasis That Are Homologous Recombination Proficient and Scheduled to Undergo Neoadjuvant Chemotherapy and Interval Debulking Surgery",
    "tldr": "A phase 2 trial of Radspherin in ovarian cancer, run by Oncoinvent Solutions AS, now recruiting.",
    "summary": "A Study of Radspherin® in Patients With Primary Advanced Epithelial Cancer, With Peritoneal Metastasis That Are Homologous Recombination Proficient Scheduled to Undergo Neoadjuvant Chemotherapy and Interval Debulking Surgery is a phase 2 interventional study registered as NCT06504147 by Oncoinvent Solutions AS, with 114 participants planned, started 2024-06-15 and due to reach its primary completion in 2028-02-29. Interventions recorded: Radspherin.",
    "links": [
      {
        "label": "ClinicalTrials.gov NCT06504147",
        "url": "https://clinicaltrials.gov/study/NCT06504147"
      }
    ]
  },
  {
    "id": "nct06505395",
    "kind": "trial",
    "name": "A Trial to Assess Efficacy, Safety, Pharmacokinetics of Octreotide Subcutaneous Injection in Patients With Gastroentero-pancreatic Neuroendocrine Tumor (GEP-NET)",
    "nct": "NCT06505395",
    "phase": "2",
    "status": "recruiting",
    "sponsor": "CSPC ZhongQi Pharmaceutical Technology Co., Ltd.",
    "enrolled": 90,
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "setting": "A Phase Ⅱ Randomized, Parallel-group, Open-label, Active-controlled Trial to Assess the Efficacy, Safety and Pharmacokinetics of the Long-acting Octreotide Subcutaneous Injection (SYHX2008) Versus Octreotide Microspheres (Sandostatin LAR@) in Patients With GEP-NET",
    "tldr": "A phase 2 trial of SYHX2008 injection in pancreatic ductal adenocarcinoma, run by CSPC ZhongQi Pharmaceutical Technology Co., Ltd., now recruiting.",
    "summary": "A Trial to Assess Efficacy, Safety, Pharmacokinetics of Octreotide Subcutaneous Injection in Patients With Gastroentero-pancreatic Neuroendocrine Tumor (GEP-NET) is a phase 2 interventional study registered as NCT06505395 by CSPC ZhongQi Pharmaceutical Technology Co., Ltd., with 90 participants planned, started 2024-07-30 and due to reach its primary completion in 2027-08-01. Interventions recorded: SYHX2008 injection and Sandostatin LAR@.",
    "links": [
      {
        "label": "ClinicalTrials.gov NCT06505395",
        "url": "https://clinicaltrials.gov/study/NCT06505395"
      }
    ]
  },
  {
    "id": "nct06520345",
    "kind": "trial",
    "name": "The Study of 177Lu-TLX591 Plus SOC Versus SOC Alone in Patients With mCRPC (ProstACT Global)",
    "nct": "NCT06520345",
    "phase": "3",
    "status": "recruiting",
    "sponsor": "Telix Pharmaceuticals (Innovations) Pty Limited",
    "enrolled": 520,
    "asOf": "2026-09-16",
    "tags": [
      "ctgov-ingest"
    ],
    "setting": "A Multinational, Multicenter, Prospective, Randomized, Controlled, Open-Label, Phase 3 Study of Lutetium (177Lu) Rosopatamab Tetraxetan in Combination With Standard of Care Versus Standard of Care Alone in Patients With PSMA Positive Metastatic Castration-Resistant Prostate Cancer Previously After Androgen Receptor Pathway Inhibitor Treatment",
    "tldr": "A phase 3 trial of FAP-2286, Enzalutamide, Abiraterone acetate in prostate cancer, run by Telix Pharmaceuticals (Innovations) Pty Limited, now recruiting.",
    "summary": "The Study of 177Lu-TLX591 Plus SOC Versus SOC Alone in Patients With mCRPC (ProstACT Global) is a phase 3 interventional study registered as NCT06520345 by Telix Pharmaceuticals (Innovations) Pty Limited, with 520 participants planned, started 2024-07-26 and due to reach its primary completion in 2027-12. Interventions recorded: 177Lu-TLX591, Enzalutamide, Abiraterone, Docetaxel. Conditions listed: Metastatic Castration-resistant Prostate Cancer. No results are recorded here; the registry entry is the source.",
    "drugs": [
      "fap-2286",
      "enzalutamide",
      "abiraterone",
      "docetaxel"
    ],
    "indications": [
      "prostate",
      "prostate-mcrpc"
    ],
    "companies": [
      "telix"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT06520345",
        "url": "https://clinicaltrials.gov/study/NCT06520345"
      }
    ]
  },
  {
    "id": "nct06549465",
    "kind": "trial",
    "name": "Study Evaluating Dosimetry, Randomized Dose Optimization, Dose Escalation and Efficacy of Ac-225 Rosopatamab Tetraxetan in Participants With PSMA PET-Positive Castration-Resistant Prostate Cancer (CRPC)",
    "nct": "NCT06549465",
    "phase": "2",
    "status": "recruiting",
    "sponsor": "Convergent Therapeutics",
    "enrolled": 93,
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "setting": "A Phase 2, Open-label Study Evaluating Dosimetry, Randomized Dose Optimization, Dose Escalation and Efficacy of Ac-225 Rosopatamab Tetraxetan in Participants With PSMA PET-Positive Castration-Resistant Prostate Cancer",
    "tldr": "A phase 2 trial of In-111 rosopatamab tetraxetan in prostate cancer, run by Convergent Therapeutics, now recruiting.",
    "summary": "Study Evaluating Dosimetry, Randomized Dose Optimization, Dose Escalation and Efficacy of Ac-225 Rosopatamab Tetraxetan in Participants With PSMA PET-Positive Castration-Resistant Prostate Cancer (CRPC) is a phase 2 interventional study registered as NCT06549465 by Convergent Therapeutics, with 93 participants planned, started 2024-08-06 and due to reach its primary completion in 2027-04-20. Interventions recorded: In-111 rosopatamab tetraxetan, 45 kBq/kg Ac-225 rosopatamab tetraxetan, 45 kBq/kg or equivalent fixed dose activity Ac-225 rosopatamab tetraxetan, 60 kBq/kg Ac-225 rosopatamab tetraxetan, Single dose 22 kBq/kg or equivalent fixed dose activity Ac-225 rosopatamab tetraxetan and Single dose 34 kBq/kg or equivalent fixed dose activity Ac-225 rosopatamab tetraxetan.",
    "indications": [
      "prostate"
    ],
    "companies": [
      "convergent-therapeutics"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT06549465",
        "url": "https://clinicaltrials.gov/study/NCT06549465"
      }
    ]
  },
  {
    "id": "nct06569420",
    "kind": "trial",
    "name": "Study Of Comparing SAF-189s With Crizotinib In First Line ALK-Positive Advanced and Metastatic NSCLC",
    "nct": "NCT06569420",
    "phase": "3",
    "status": "active",
    "sponsor": "Shanghai Fosun Pharmaceutical Industrial Development Co. Ltd.",
    "enrolled": 275,
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "setting": "A Randomized, Multicenter, Phase III Open-label Study: Efficacy and Safety of Comparing SAF-189s With Crizotinib in First-line Anaplastic Lymphoma Kinase-positive Advanced and Metastatic NSCLC",
    "tldr": "A phase 3 trial of an investigational treatment in non-small-cell lung cancer, run by Shanghai Fosun Pharmaceutical Industrial Development Co. Ltd., active and no longer recruiting.",
    "summary": "Study Of Comparing SAF-189s With Crizotinib In First Line ALK-Positive Advanced and Metastatic NSCLC is a phase 3 interventional study registered as NCT06569420 by Shanghai Fosun Pharmaceutical Industrial Development Co. Ltd., with 275 participants enrolled, started 2021-12-31 and due to reach its primary completion in 2025-07-31.",
    "links": [
      {
        "label": "ClinicalTrials.gov NCT06569420",
        "url": "https://clinicaltrials.gov/study/NCT06569420"
      }
    ],
    "indications": [
      "nsclc"
    ]
  },
  {
    "id": "nct06590857",
    "aka": [
      "TRACY-1"
    ],
    "kind": "trial",
    "name": "Trial of 225Ac-DOTATATE (RYZ101) in Subjects With ER+, HER2-negative Unresectable or Metastatic Breast Cancer Expressing SSTRs.",
    "nct": "NCT06590857",
    "phase": "1/2",
    "status": "active",
    "sponsor": "RayzeBio, Inc.",
    "enrolled": 16,
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "setting": "Phase 1b/2 Open-label Trial of 225Ac-DOTATATE (RYZ101) in Subjects With Estrogen Receptor-positive (ER+), Human Epidermal Growth Factor Receptor 2 (HER2)-Negative, Locally Advanced and Unresectable or Metastatic Breast Cancer Expressing Somatostatin Receptors (SSTRs) (TRACY-1).",
    "tldr": "A phase 1/2 trial of Actinium-225 DOTATATE in HR-positive / HER2-negative breast cancer, run by RayzeBio, Inc., active and no longer recruiting.",
    "summary": "Trial of 225Ac-DOTATATE (RYZ101) in Subjects With ER+, HER2-negative Unresectable or Metastatic Breast Cancer Expressing SSTRs. is a phase 1/2 interventional study registered as NCT06590857 by RayzeBio, Inc., with 16 participants enrolled, started 2024-07-19 and due to reach its primary completion in 2028-10. Interventions recorded: RYZ101 and Standard of Care Endocrine Therapy.",
    "drugs": [
      "ryz101"
    ],
    "companies": [
      "rayzebio"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT06590857",
        "url": "https://clinicaltrials.gov/study/NCT06590857"
      }
    ]
  },
  {
    "id": "nct06710756",
    "kind": "trial",
    "name": "Lead-212 PSV359 Therapy for Patients With Solid Tumors",
    "nct": "NCT06710756",
    "phase": "1/2",
    "status": "recruiting",
    "sponsor": "Perspective Therapeutics",
    "enrolled": 112,
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "setting": "A Phase I/IIa Image-Guided, Alpha-Particle Therapy Study of [203Pb]Pb-PSV359 and [212Pb]Pb-PSV359 in Patients With Solid Tumors That Are Known to be Fibroblast Activation Protein (FAP)-Positive",
    "tldr": "A phase 1/2 trial of [203Pb]Pb-PSV359 in pancreatic ductal adenocarcinoma, gastric & gastro-oesophageal junction cancer, oesophageal cancer, colorectal cancer, ovarian cancer and head and neck squamous cell carcinoma, run by Perspective Therapeutics, now recruiting.",
    "summary": "Lead-212 PSV359 Therapy for Patients With Solid Tumors is a phase 1/2 interventional study registered as NCT06710756 by Perspective Therapeutics, with 112 participants planned, started 2025-04-28 and due to reach its primary completion in 2028-01-31. Interventions recorded: [203Pb]Pb-PSV359 and [212Pb]Pb-PSV359.",
    "companies": [
      "perspective-therapeutics"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT06710756",
        "url": "https://clinicaltrials.gov/study/NCT06710756"
      }
    ]
  },
  {
    "id": "nct06726161",
    "kind": "trial",
    "name": "Study of the Theranostic Pair RYZ811 (Diagnostic) and RYZ801 (Therapeutic) to Identify and Treat Subjects With GPC3+ (Glypican-3) Unresectable HCC",
    "nct": "NCT06726161",
    "phase": "1/2",
    "status": "recruiting",
    "sponsor": "RayzeBio, Inc.",
    "enrolled": 590,
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "setting": "Phase 1/2 Randomized, Controlled, Open-label Trial of Theranostic Pair RYZ811 (Diagnostic) and RYZ801 (Therapeutic) to Identify and Treat Subjects With GPC3+ Unresectable Hepatocellular Carcinoma (HCC)",
    "tldr": "A phase 1/2 trial of RYZ801 in hepatocellular carcinoma, run by RayzeBio, Inc., now recruiting.",
    "summary": "Study of the Theranostic Pair RYZ811 (Diagnostic) and RYZ801 (Therapeutic) to Identify and Treat Subjects With GPC3+ (Glypican-3) Unresectable HCC is a phase 1/2 interventional study registered as NCT06726161 by RayzeBio, Inc., with 590 participants planned, started 2025-09-05 and due to reach its primary completion in 2030-06. Interventions recorded: RYZ801.",
    "indications": [
      "hcc"
    ],
    "companies": [
      "rayzebio"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT06726161",
        "url": "https://clinicaltrials.gov/study/NCT06726161"
      }
    ]
  },
  {
    "id": "nct06750419",
    "aka": [
      "ZIRCON-CP"
    ],
    "kind": "trial",
    "name": "89Zr-TLX250 for PET/CT Imaging of ccRCC - ZIRCON-CP Study",
    "nct": "NCT06750419",
    "phase": "3",
    "status": "recruiting",
    "sponsor": "Telix Pharmaceuticals (Innovations) Pty Limited",
    "enrolled": 82,
    "asOf": "2026-09-16",
    "tags": [
      "ctgov-ingest"
    ],
    "setting": "A Confirmatory, Open-label, Single-arm, Multi-centre Study to Evaluate Safety, Tolerability and Diagnostic Performance of 89Zirconium-labelled Girentuximab (89Zr-TLX250) to Non-invasively Detect Clear Cell Renal Cell Carcinoma (ccRCC) by Positron Emission Tomography/Computed Tomography (PET/CT) Imaging in Chinese Patients With Indeterminate Renal Masses (ZIRCON-CP Study)",
    "tldr": "A phase 3 trial of Zirconium-89 girentuximab run by Telix Pharmaceuticals (Innovations) Pty Limited in renal cell carcinoma, now recruiting.",
    "summary": "89Zr-TLX250 for PET/CT Imaging of ccRCC - ZIRCON-CP Study is a phase 3 interventional study registered as NCT06750419 by Telix Pharmaceuticals (Innovations) Pty Limited, with 82 participants planned, started 2024-11-06. Conditions listed: Clear Cell Renal Cell Carcinoma. No results are recorded here; the registry entry is the source.",
    "drugs": [
      "girentuximab-zr89"
    ],
    "indications": [
      "rcc"
    ],
    "companies": [
      "telix"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT06750419",
        "url": "https://clinicaltrials.gov/study/NCT06750419"
      }
    ]
  },
  {
    "id": "nct06754085",
    "technologies": [
      "pet",
      "pet-ct"
    ],
    "kind": "trial",
    "name": "Study of 18F-Florastamin PET/CT Imaging in Patients With Suspected Recurrence of Prostate Cancer",
    "nct": "NCT06754085",
    "phase": "3",
    "status": "recruiting",
    "sponsor": "HTA Co., Ltd.",
    "enrolled": 131,
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "setting": "A Phase III, Prospective, Open-Label, Single-Arm, Multi-center Clinical Study to Assess the Diagnostic Performance and Safety of 18F-Florastamin PET/CT Imaging in Patients With Suspected Recurrence of Prostate Cancer",
    "tldr": "A phase 3 trial of Florastamin[18F] Injection in prostate cancer, run by HTA Co., Ltd., now recruiting.",
    "summary": "Study of 18F-Florastamin PET/CT Imaging in Patients With Suspected Recurrence of Prostate Cancer is a phase 3 interventional study registered as NCT06754085 by HTA Co., Ltd., with 131 participants planned, started 2024-12-19 and due to reach its primary completion in 2026-01-01. Interventions recorded: Florastamin[18F] Injection.",
    "drugs": [
      "florastamin-f18"
    ],
    "indications": [
      "prostate"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT06754085",
        "url": "https://clinicaltrials.gov/study/NCT06754085"
      }
    ]
  },
  {
    "id": "nct06777433",
    "kind": "trial",
    "name": "Phase 2b Imaging Study of RAD101 in Participants With Suspected Recurrent Brain Metastases",
    "nct": "NCT06777433",
    "phase": "2",
    "status": "active",
    "sponsor": "Radiopharm Theranostics, Ltd",
    "enrolled": 30,
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "setting": "An Open-Label, Single Dose, Single Arm, Multicenter Phase 2b Study to Establish the Imaging Performance of RAD101 Positron Emission Tomography (PET) in Participants With Suspected Recurrent Brain Metastases From Solid Tumors",
    "tldr": "A phase 2 trial of RAD101 (18F-FPIA) in brain and spinal cord tumours, run by Radiopharm Theranostics, Ltd, active and no longer recruiting.",
    "summary": "Phase 2b Imaging Study of RAD101 in Participants With Suspected Recurrent Brain Metastases is a phase 2 interventional study registered as NCT06777433 by Radiopharm Theranostics, Ltd, with 30 participants enrolled, started 2024-12-13 and due to reach its primary completion in 2026-04-23. Interventions recorded: RAD101 (18F-FPIA).",
    "companies": [
      "radiopharm-theranostics"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT06777433",
        "url": "https://clinicaltrials.gov/study/NCT06777433"
      }
    ]
  },
  {
    "id": "nct06780670",
    "aka": [
      "PSMAcTION"
    ],
    "kind": "trial",
    "name": "Open-label Study Comparing AAA817 Versus Standard of Care in the Treatment of Previously Treated PSMA-positive mCRPC Adults Who Have Disease Progressed on or After [177Lu]Lu-PSMA Targeted Therapy",
    "nct": "NCT06780670",
    "phase": "2/3",
    "status": "recruiting",
    "asOf": "2026-09-11",
    "tags": [
      "ctgov-ingest"
    ],
    "sponsor": "Novartis Pharmaceuticals",
    "enrolled": 443,
    "setting": "PSMAcTION: A Phase II/III, Open-label, International, Multicenter, Randomized Study of AAA817 Versus Standard of Care in the Treatment of Adult Participants With PSMA Positive Metastatic Castration-resistant Prostate Cancer Who Progressed on or After [177Lu]Lu-PSMA Targeted Therapy",
    "tldr": "A phase 2/3 trial testing AAA817 in prostate cancer, now recruiting.",
    "summary": "Open-label Study Comparing AAA817 Versus Standard of Care in the Treatment of Previously Treated PSMA-positive mCRPC Adults Who Have Disease Progressed on or After [177Lu]Lu-PSMA Targeted Therapy is a phase 2/3 interventional study registered as NCT06780670, led by Novartis Pharmaceuticals, and recruiting on the registry. Official title: PSMAcTION: A Phase II/III, Open-label, International, Multicenter, Randomised Study of AAA817 Versus Standard of Care in the Treatment of Adult Participants With PSMA Positive Metastatic Castration-resistant Prostate Cancer Who Progressed on or After [177Lu]Lu-PSMA Targeted Therapy. Planned enrolment is 443 participants (estimated). The study started in 2025-02-27 and primary completion is expected in 2028-06-27. No results have been posted on ClinicalTrials.gov.",
    "drugs": [
      "aaa817"
    ],
    "indications": [
      "prostate",
      "prostate-mcrpc"
    ],
    "companies": [
      "novartis"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT06780670",
        "url": "https://clinicaltrials.gov/study/NCT06780670"
      }
    ]
  },
  {
    "id": "nct06784752",
    "aka": [
      "NETTER-3"
    ],
    "kind": "trial",
    "name": "Study to Evaluate the Efficacy and Safety of [177Lu]Lu-DOTA-TATE in Patients With Grade 1 and Grade 2 Advanced GEP-NET",
    "nct": "NCT06784752",
    "phase": "3",
    "status": "recruiting",
    "sponsor": "Novartis Pharmaceuticals",
    "enrolled": 240,
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "setting": "A Phase III Multi-center, Randomized, Open-label Study to Evaluate the Efficacy and Safety of [177Lu]Lu-DOTA-TATE in Patients Newly Diagnosed With Grade 1 and Grade 2 (Ki-67 <10%) Advanced GEP-NET With High Disease Burden (NETTER-3)",
    "tldr": "A phase 3 trial of [177Lu]Lu-DOTA-TATE in pancreatic ductal adenocarcinoma, run by Novartis Pharmaceuticals, now recruiting.",
    "summary": "Study to Evaluate the Efficacy and Safety of [177Lu]Lu-DOTA-TATE in Patients With Grade 1 and Grade 2 Advanced GEP-NET is a phase 3 interventional study registered as NCT06784752 by Novartis Pharmaceuticals, with 240 participants planned, started 2025-05-30 and due to reach its primary completion in 2028-12-08. Interventions recorded: [177Lu]Lu-DOTA-TATE and Octreotide LAR.",
    "companies": [
      "advanced-accelerator-applications"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT06784752",
        "url": "https://clinicaltrials.gov/study/NCT06784752"
      }
    ]
  },
  {
    "id": "nct06855277",
    "aka": [
      "AcTFirst"
    ],
    "kind": "trial",
    "name": "Study Comparing AAA817+ARPI Versus Standard of Care in Adult Participants With PSMA-positive mCRPC",
    "nct": "NCT06855277",
    "phase": "3",
    "status": "recruiting",
    "asOf": "2026-09-11",
    "tags": [
      "ctgov-ingest"
    ],
    "sponsor": "Novartis Pharmaceuticals",
    "enrolled": 940,
    "setting": "A Phase III, Open-label, Multi-center, Randomized Study Comparing AAA817+ARPI Versus Standard of Care in Adult Participants With PSMA-positive Metastatic Castration Resistant Prostate Cancer",
    "tldr": "A phase 3 trial testing AAA817 in prostate cancer, now recruiting.",
    "summary": "Study Comparing AAA817+ARPI Versus Standard of Care in Adult Participants With PSMA-positive mCRPC is a phase 3 interventional study registered as NCT06855277, led by Novartis Pharmaceuticals, and recruiting on the registry. Official title: A Phase III, Open-label, Multi-centre, Randomised Study Comparing AAA817+ARPI Versus Standard of Care in Adult Participants With PSMA-positive Metastatic Castration Resistant Prostate Cancer. Planned enrolment is 940 participants (estimated). The study started in 2025-07-01 and primary completion is expected in 2028-09-29. No results have been posted on ClinicalTrials.gov.",
    "drugs": [
      "aaa817"
    ],
    "indications": [
      "prostate",
      "prostate-mcrpc"
    ],
    "companies": [
      "novartis"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT06855277",
        "url": "https://clinicaltrials.gov/study/NCT06855277"
      }
    ]
  },
  {
    "id": "nct06860971",
    "kind": "trial",
    "name": "A Study of AL2846 Capsule Versus Placebo in the Treatment of Advanced Radioiodine-Refractory Differentiated Thyroid Carcinoma",
    "nct": "NCT06860971",
    "phase": "3",
    "status": "recruiting",
    "asOf": "2026-09-11",
    "tags": [
      "ctgov-ingest"
    ],
    "sponsor": "Chia Tai Tianqing Pharmaceutical",
    "enrolled": 144,
    "setting": "A Randomized, Double-Blind, Multicenter Phase III Clinical Trial Evaluating AL2846 Capsule Versus Placebo in Patients With Locally Advanced or Metastatic Radioiodine-Refractory Differentiated Thyroid Carcinoma Who Failed Prior VEGFR-Targeted Therapy",
    "tldr": "A phase 3 trial testing AL2846 in thyroid cancer, now recruiting.",
    "summary": "A Study of AL2846 Capsule Versus Placebo in the Treatment of Advanced Radioiodine-Refractory Differentiated Thyroid Carcinoma is a phase 3 interventional study registered as NCT06860971, led by Chia Tai Tianqing Pharmaceutical, and recruiting on the registry. Official title: A Randomised, Double-Blind, Multicenter Phase III Clinical Trial Evaluating AL2846 Capsule Versus Placebo in Patients With Locally Advanced or Metastatic Radioiodine-Refractory Differentiated Thyroid Carcinoma Who Failed Prior VEGFR-Targeted Therapy. Planned enrolment is 144 participants (estimated). The study started in 2025-04-18 and primary completion is expected in 2027-01. No results have been posted on ClinicalTrials.gov.",
    "drugs": [
      "al2846"
    ],
    "indications": [
      "thyroid"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT06860971",
        "url": "https://clinicaltrials.gov/study/NCT06860971"
      }
    ]
  },
  {
    "id": "nct06894511",
    "aka": [
      "PSMAndARPI"
    ],
    "kind": "trial",
    "name": "An Open-label Study of Lutetium (177Lu) Vipivotide Tetraxetan (AAA617) in Combination With ARPI Versus AAA617 in PSMA Positive First-line mCRPC",
    "nct": "NCT06894511",
    "phase": "2",
    "status": "active",
    "sponsor": "Novartis Pharmaceuticals",
    "enrolled": 7,
    "asOf": "2026-09-16",
    "tags": [
      "ctgov-ingest"
    ],
    "setting": "A Phase II, Open-label, Multi-Center, Randomized Study of Combination of Lutetium (177Lu) Vipivotide Tetraxetan (AAA617) and Androgen Receptor Pathway Inhibitor (ARPI) vs. Lutetium (177Lu) Vipivotide Tetraxetan (AAA617) in First-line Treatment of Patients With Prostate-Specific Membrane Antigen (PSMA)-Positive Progressive Metastatic Castration Resistant Prostate Cancer (mCRPC)",
    "tldr": "A phase 2 trial of FAP-2286, Lutetium-177 vipivotide tetraxetan in prostate cancer, run by Novartis Pharmaceuticals, active and no longer recruiting.",
    "summary": "An Open-label Study of Lutetium (177Lu) Vipivotide Tetraxetan (AAA617) in Combination With ARPI Versus AAA617 in PSMA Positive First-line mCRPC is a phase 2 interventional study registered as NCT06894511 by Novartis Pharmaceuticals, with 7 participants enrolled, started 2025-09-11 and due to reach its primary completion in 2026-10-15. Interventions recorded: AAA617, ARPI: Abiraterone, ARPI: Enzalutamide. Conditions listed: Metastatic Castration Resistant Prostate Cancer (mCRPC). No results are recorded here; the registry entry is the source.",
    "drugs": [
      "fap-2286",
      "pluvicto"
    ],
    "indications": [
      "prostate",
      "prostate-mcrpc"
    ],
    "companies": [
      "novartis"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT06894511",
        "url": "https://clinicaltrials.gov/study/NCT06894511"
      }
    ]
  },
  {
    "id": "nct06906471",
    "targets": [
      "psma"
    ],
    "kind": "trial",
    "name": "A Single-Arm, Blinded, Fluorescent PSMA Histopathology Trial of AS1986NS",
    "nct": "NCT06906471",
    "phase": "1/2",
    "status": "recruiting",
    "sponsor": "Antelope Surgical Solutions, Inc",
    "enrolled": 10,
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "setting": "A Single-Arm, Blinded, Fluorescent PSMA Histopathology Trial of AS1986NS",
    "tldr": "A phase 1/2 trial of AS1986NS in prostate cancer, run by Antelope Surgical Solutions, Inc, now recruiting.",
    "summary": "A Single-Arm, Blinded, Fluorescent PSMA Histopathology Trial of AS1986NS is a phase 1/2 interventional study registered as NCT06906471 by Antelope Surgical Solutions, Inc, with 10 participants planned, started 2026-07-01 and due to reach its primary completion in 2026-10-30. Interventions recorded: AS1986NS.",
    "indications": [
      "prostate"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT06906471",
        "url": "https://clinicaltrials.gov/study/NCT06906471"
      }
    ]
  },
  {
    "id": "nct06909825",
    "kind": "trial",
    "name": "FPI-2265 (225Ac-PSMA-I&T) and Olaparib for Patients With Metastatic Castration-Resistant Prostate Cancer (mCRPC)",
    "nct": "NCT06909825",
    "phase": "2",
    "status": "active",
    "sponsor": "Fusion Pharmaceuticals Inc.",
    "enrolled": 85,
    "asOf": "2026-09-16",
    "tags": [
      "ctgov-ingest"
    ],
    "setting": "A Phase 2, Open-label, Multi-centre Study of FPI-2265 (225Ac-PSMA-I&T) and Olaparib in Participants With Metastatic Castration Resistant Prostate Cancer (mCRPC)",
    "tldr": "A phase 2 trial of FPI-2265, Olaparib in prostate cancer, run by Fusion Pharmaceuticals Inc., active and no longer recruiting.",
    "summary": "FPI-2265 (225Ac-PSMA-I&T) and Olaparib for Patients With Metastatic Castration-Resistant Prostate Cancer (mCRPC) is a phase 2 interventional study registered as NCT06909825 by Fusion Pharmaceuticals Inc., with 85 participants planned, started 2025-02-26 and due to reach its primary completion in 2027-05. Interventions recorded: FPI-2265, Olaparib. Conditions listed: Metastatic Castration-resistant Prostate Cancer. No results are recorded here; the registry entry is the source.",
    "drugs": [
      "fpi-2265",
      "olaparib"
    ],
    "indications": [
      "prostate",
      "prostate-mcrpc"
    ],
    "companies": [
      "astrazeneca"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT06909825",
        "url": "https://clinicaltrials.gov/study/NCT06909825"
      }
    ]
  },
  {
    "id": "nct06925581",
    "kind": "trial",
    "name": "A Trial of HRS-6768 in Patients With Advanced Solid Tumors",
    "nct": "NCT06925581",
    "phase": "1/2",
    "status": "recruiting",
    "sponsor": "Jiangsu HengRui Medicine Co., Ltd.",
    "enrolled": 84,
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "setting": "A Phase I/II Clinical Trial to Evaluate the Pharmacokinetics, Radiation Dosimetry, Safety and Preliminary Efficacy of HRS-6768 in the Treatment of Patients With Advanced Solid Tumors",
    "tldr": "A phase 1/2 trial of HRS-6768 in advanced solid tumours, run by Jiangsu HengRui Medicine Co., Ltd., now recruiting.",
    "summary": "A Trial of HRS-6768 in Patients With Advanced Solid Tumors is a phase 1/2 interventional study registered as NCT06925581 by Jiangsu HengRui Medicine Co., Ltd., with 84 participants planned, started 2025-04-24 and due to reach its primary completion in 2026-04. Interventions recorded: HRS-6768.",
    "links": [
      {
        "label": "ClinicalTrials.gov NCT06925581",
        "url": "https://clinicaltrials.gov/study/NCT06925581"
      }
    ]
  },
  {
    "id": "nct06990880",
    "kind": "trial",
    "name": "A Study of GSK5458514 Administered Alone or In Combination With Other Anti-Cancer Agents in Participants With Prostate Cancer",
    "nct": "NCT06990880",
    "phase": "1/2",
    "status": "recruiting",
    "sponsor": "GlaxoSmithKline",
    "enrolled": 85,
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "setting": "A Phase 1/2 First-Time-In-Human, Open-Label, Multicenter, Dose Escalation and Expansion Study of GSK5458514 PSMA Targeting T Cell Engager Alone or in Combination With Other Anti-Cancer Agents in Adult Participants With Metastatic Castration-Resistant Prostate Cancer (mCRPC)",
    "tldr": "A phase 1/2 trial of GSK5458514 in prostate cancer, run by GlaxoSmithKline, now recruiting.",
    "summary": "A Study of GSK5458514 Administered Alone or In Combination With Other Anti-Cancer Agents in Participants With Prostate Cancer is a phase 1/2 interventional study registered as NCT06990880 by GlaxoSmithKline, with 85 participants planned, started 2025-06-12 and due to reach its primary completion in 2027-10-26. Interventions recorded: GSK5458514.",
    "indications": [
      "prostate",
      "prostate-mcrpc"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT06990880",
        "url": "https://clinicaltrials.gov/study/NCT06990880"
      }
    ]
  },
  {
    "id": "nct07047118",
    "kind": "trial",
    "name": "A Study of JSB462 (Luxdegalutamide) Plus Lutetium (177Lu) Vipivotide Tetraxetan in Patients With Metastatic Castration Resistant Prostate Cancer (mCRPC)",
    "nct": "NCT07047118",
    "phase": "2",
    "status": "active",
    "sponsor": "Novartis Pharmaceuticals",
    "enrolled": 138,
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "setting": "A Phase II, Randomized, Open-label, Multi-center Study of JSB462 (Luxdegalutamide) in Combination With Lutetium (177Lu) Vipivotide Tetraxetan in Adult Male Patients With PSMA-positive Metastatic Castration Resistant Prostate Cancer (mCRPC)",
    "tldr": "A phase 2 trial of JSB462 in prostate cancer, run by Novartis Pharmaceuticals, active and no longer recruiting.",
    "summary": "A Study of JSB462 (Luxdegalutamide) Plus Lutetium (177Lu) Vipivotide Tetraxetan in Patients With Metastatic Castration Resistant Prostate Cancer (mCRPC) is a phase 2 interventional study registered as NCT07047118 by Novartis Pharmaceuticals, with 138 participants enrolled, started 2025-07-03 and due to reach its primary completion in 2027-07-16. Interventions recorded: JSB462 and AAA617.",
    "indications": [
      "prostate",
      "prostate-mcrpc"
    ],
    "companies": [
      "advanced-accelerator-applications"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT07047118",
        "url": "https://clinicaltrials.gov/study/NCT07047118"
      }
    ]
  },
  {
    "id": "nct07052214",
    "aka": [
      "BiPASS"
    ],
    "kind": "trial",
    "name": "PSMA PET Combined With MRI for the Detection of PCa",
    "nct": "NCT07052214",
    "phase": "3",
    "status": "recruiting",
    "sponsor": "Telix Pharmaceuticals (Innovations) Pty Limited",
    "enrolled": 338,
    "asOf": "2026-09-16",
    "tags": [
      "ctgov-ingest"
    ],
    "setting": "A Single Arm, Multicenter, Prospective, Open Label, Longitudinal Phase 3 Study of Prostate Specific Membrane Antigen (PSMA) Positron Emission Tomography (PET) Combined With Magnetic Resonance Imaging (MRI) Compared to Standard of Care (SOC) for the Detection of Prostate Cancer (PCa).",
    "tldr": "A phase 3 trial of Gallium-68 gozetotide in prostate cancer, run by Telix Pharmaceuticals (Innovations) Pty Limited, now recruiting.",
    "summary": "PSMA PET Combined With MRI for the Detection of PCa is a phase 3 interventional study registered as NCT07052214 by Telix Pharmaceuticals (Innovations) Pty Limited, with 338 participants planned, started 2025-08-18 and due to reach its primary completion in 2027-01. Interventions recorded: 68Ga-PSMA-11. Conditions listed: PCA, Prostate Cancer, Prostatic Neoplasm, PSMA PET. No results are recorded here; the registry entry is the source.",
    "drugs": [
      "ga68-psma-11"
    ],
    "indications": [
      "prostate"
    ],
    "companies": [
      "telix"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT07052214",
        "url": "https://clinicaltrials.gov/study/NCT07052214"
      }
    ]
  },
  {
    "id": "nct07070349",
    "kind": "trial",
    "name": "A Trial of HRS-6213 in Healthy Subjects and Patients With Solid Tumors",
    "nct": "NCT07070349",
    "phase": "1/2",
    "status": "recruiting",
    "sponsor": "Jiangsu HengRui Medicine Co., Ltd.",
    "enrolled": 48,
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "setting": "A Phase I/II Clinical Study to Evaluate the Safety, Radiation Dosimetry, Pharmacokinetics, and Preliminary Diagnostic Efficacy of HRS-6213 in Healthy Subjects and Patients With Solid Tumors",
    "tldr": "A phase 1/2 trial of HRS-6213 in advanced solid tumours, run by Jiangsu HengRui Medicine Co., Ltd., now recruiting.",
    "summary": "A Trial of HRS-6213 in Healthy Subjects and Patients With Solid Tumors is a phase 1/2 interventional study registered as NCT07070349 by Jiangsu HengRui Medicine Co., Ltd., with 48 participants planned, started 2025-07-10 and due to reach its primary completion in 2026-01. Interventions recorded: HRS-6213.",
    "links": [
      {
        "label": "ClinicalTrials.gov NCT07070349",
        "url": "https://clinicaltrials.gov/study/NCT07070349"
      }
    ]
  },
  {
    "id": "nct07129252",
    "aka": [
      "BRAVESST2"
    ],
    "kind": "trial",
    "name": "A Study to Investigate Safety and Effectiveness of CRN09682 in Participants With SST2-Expressing NENs and Other Solid Tumors",
    "nct": "NCT07129252",
    "phase": "1/2",
    "status": "recruiting",
    "sponsor": "Crinetics Pharmaceuticals Inc.",
    "enrolled": 150,
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "setting": "A Phase 1/2 Dose Escalation Study of CRN09682 With an Expansion Phase in Participants With Progressive Metastatic Somatostatin Receptor Type 2 (SST2)-Expressing Neuroendocrine Neoplasms (NENs) and Other SST2-Expressing Solid Tumors",
    "tldr": "A phase 1/2 trial of CRN09682 in neuroendocrine tumours, run by Crinetics Pharmaceuticals Inc., now recruiting.",
    "summary": "A Study to Investigate Safety and Effectiveness of CRN09682 in Participants With SST2-Expressing NENs and Other Solid Tumors is a phase 1/2 interventional study registered as NCT07129252 by Crinetics Pharmaceuticals Inc., with 150 participants planned, started 2025-11-26 and due to reach its primary completion in 2027-08. Interventions recorded: CRN09682.",
    "indications": [
      "neuroendocrine"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT07129252",
        "url": "https://clinicaltrials.gov/study/NCT07129252"
      }
    ]
  },
  {
    "id": "nct07189871",
    "kind": "trial",
    "name": "177Lu-BetaBart in Patients With Relapsed/Refractory, Locally Advanced Inoperable, or Metastatic Solid Tumors",
    "nct": "NCT07189871",
    "phase": "1/2",
    "status": "recruiting",
    "sponsor": "Radiopharm Theranostics, Ltd",
    "enrolled": 61,
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "setting": "A Phase 1/2a Study of the Safety, Tolerability, and Preliminary Clinical Activity of 177LuBetaBart, a 177Lu-Labeled Anti-B7-H3 Monoclonal Antibody, in Patients With Relapsed/Refractory, Locally Advanced Inoperable, or Metastatic Solid Tumors",
    "tldr": "A phase 1/2 trial of 177Lu-BetaBart in prostate cancer, colorectal cancer, non-small-cell lung cancer, ovarian cancer, cervical cancer and endometrial cancer, run by Radiopharm Theranostics, Ltd, now recruiting.",
    "summary": "177Lu-BetaBart in Patients With Relapsed/Refractory, Locally Advanced Inoperable, or Metastatic Solid Tumors is a phase 1/2 interventional study registered as NCT07189871 by Radiopharm Theranostics, Ltd, with 61 participants planned, started 2026-02-23 and due to reach its primary completion in 2027-12. Interventions recorded: 177Lu-BetaBart.",
    "indications": [
      "prostate"
    ],
    "companies": [
      "radiopharm-theranostics"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT07189871",
        "url": "https://clinicaltrials.gov/study/NCT07189871"
      }
    ]
  },
  {
    "id": "nct07197580",
    "aka": [
      "LUTEON"
    ],
    "kind": "trial",
    "name": "Phase 3 Study to Assess Safety and Efficacy of 177Lu-TLX250 in Advanced Relapsed or Recurrent ccRCC",
    "nct": "NCT07197580",
    "phase": "3",
    "status": "recruiting",
    "sponsor": "Telix Pharmaceuticals (Innovations) Pty Limited",
    "enrolled": 40,
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "setting": "A Phase 3, Randomized, Multi-Center, Open-Label Study to Compare 177Lu-TLX250 (Lutetium (177Lu) Girentuximab Tetraxetan) With the Investigator's Choice of a Single Agent Therapy in Participants With Carbonic Anhydrase 9 (CAIX) Expressing, Advanced Relapsed or Recurrent Clear Cell Renal Cell Carcinoma (ccRCC)",
    "tldr": "A phase 3 trial of 177Lu-TLX250 in renal cell carcinoma, run by Telix Pharmaceuticals (Innovations) Pty Limited, now recruiting.",
    "summary": "Phase 3 Study to Assess Safety and Efficacy of 177Lu-TLX250 in Advanced Relapsed or Recurrent ccRCC is a phase 3 interventional study registered as NCT07197580 by Telix Pharmaceuticals (Innovations) Pty Limited, with 40 participants planned, started 2026-03-25 and due to reach its primary completion in 2027-08-31. Interventions recorded: 177Lu-TLX250.",
    "indications": [
      "rcc"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT07197580",
        "url": "https://clinicaltrials.gov/study/NCT07197580"
      }
    ]
  },
  {
    "id": "nct07217704",
    "kind": "trial",
    "name": "Using 18F-FAPI PET to Detect Metastatic Disease in Patients That Have Gastric or Esophageal Cancer.",
    "nct": "NCT07217704",
    "phase": "3",
    "status": "recruiting",
    "sponsor": "SOFIE",
    "enrolled": 200,
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "setting": "A Phase 3, Multicenter, Prospective Open-Label Study of the Diagnostic Performance of [¹⁸F]FAPI-74 PET/CT for the Detection of Metastatic Disease in Adults With Gastric or Esophageal Cancer",
    "tldr": "A phase 3 trial of [18F]FAPI-74 PET/CT in oesophageal cancer and gastric & gastro-oesophageal junction cancer, run by SOFIE, now recruiting.",
    "summary": "Using 18F-FAPI PET to Detect Metastatic Disease in Patients That Have Gastric or Esophageal Cancer. is a phase 3 interventional study registered as NCT07217704 by SOFIE, with 200 participants planned, started 2025-11-14 and due to reach its primary completion in 2027-08-30. Interventions recorded: [18F]FAPI-74 PET/CT.",
    "companies": [
      "sofie-biosciences"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT07217704",
        "url": "https://clinicaltrials.gov/study/NCT07217704"
      }
    ]
  },
  {
    "id": "nct07219238",
    "aka": [
      "PERISCOPE"
    ],
    "kind": "trial",
    "name": "Study to Evaluate the Diagnostic Performance of GEH300079 (68Ga) Injection PET/CT for Detection of PC in Patients With Colorectal, Gastric, Ovarian, o",
    "nct": "NCT07219238",
    "phase": "2/3",
    "status": "recruiting",
    "sponsor": "GE Healthcare",
    "enrolled": 175,
    "asOf": "2026-09-16",
    "tags": [
      "ctgov-ingest"
    ],
    "setting": "A Phase 2/3, Multicenter, Open-Label, Non-Randomized Study to Evaluate Diagnostic Performance of GEH300079 (68Ga) Injection Positron-Emission Tomography (PET)/Computed Tomography (CT) for Detection of Peritoneal Carcinomatosis (PC) in Patients With Colorectal, Gastric, Ovarian, or Pancreatic Cancers (PERISCOPE)",
    "tldr": "A phase 2/3 trial of FAP-2286 in colorectal cancer and ovarian cancer, run by GE Healthcare, now recruiting.",
    "summary": "Study to Evaluate the Diagnostic Performance of GEH300079 (68Ga) Injection PET/CT for Detection of PC in Patients With Colorectal, Gastric, Ovarian, or Pancreatic Cancers (PERISCOPE) is a phase 2/3 interventional study registered as NCT07219238 by GE Healthcare, with 175 participants planned, started 2026-10 and due to reach its primary completion in 2029-06. Interventions recorded: GEH300079 (68Ga) Injection Positron-Emission Tomography (PET)/Computed Tomography (CT). Conditions listed: Colorectal Cancer, Gastric Cancers, Ovarian Cancers, Pancreatic Ductal Adenocarcinoma. No results are recorded here; the registry entry is the source.",
    "drugs": [
      "fap-2286"
    ],
    "companies": [
      "ge-healthcare"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT07219238",
        "url": "https://clinicaltrials.gov/study/NCT07219238"
      }
    ]
  },
  {
    "id": "nct07226986",
    "kind": "trial",
    "name": "A Phase Ib/II Open-label Study of AMO959 With Lutetium (177Lu) Vipivotide Tetraxetan (AAA617) in Combination With ARPI in Adult Participants With PSMA",
    "nct": "NCT07226986",
    "phase": "1/2",
    "status": "recruiting",
    "sponsor": "Novartis Pharmaceuticals",
    "enrolled": 123,
    "asOf": "2026-09-16",
    "tags": [
      "ctgov-ingest"
    ],
    "setting": "A Phase Ib/II Open-label, Multi-center Study of AMO959 With Lutetium (177Lu) Vipivotide Tetraxetan (AAA617) in Combination With an Androgen Receptor Pathway Inhibitor (ARPI) in Adult Participants With PSMA-positive Metastatic Castration Resistant Prostate Cancer (mCRPC)",
    "tldr": "A phase 1/2 trial of Enzalutamide, Abiraterone acetate in prostate cancer, run by Novartis Pharmaceuticals, now recruiting.",
    "summary": "A Phase Ib/II Open-label Study of AMO959 With Lutetium (177Lu) Vipivotide Tetraxetan (AAA617) in Combination With ARPI in Adult Participants With PSMA-positive mCRPC is a phase 1/2 interventional study registered as NCT07226986 by Novartis Pharmaceuticals, with 123 participants planned, started 2025-12-05 and due to reach its primary completion in 2028-07-10. Interventions recorded: AMO959, AAA617, Enzalutamide, Abiraterone. Conditions listed: PSMA-positive Metastatic Castration Resistant Prostate Cancer (mCRPC) With Prior Exposure to One Prior ARPI Who Are Candidates for Taxane-based Chemotherapy. No results are recorded here; the registry entry is the source.",
    "drugs": [
      "enzalutamide",
      "abiraterone"
    ],
    "indications": [
      "prostate",
      "prostate-mcrpc"
    ],
    "companies": [
      "novartis"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT07226986",
        "url": "https://clinicaltrials.gov/study/NCT07226986"
      }
    ]
  },
  {
    "id": "nct07258407",
    "targets": [
      "psma"
    ],
    "kind": "trial",
    "name": "A Clinical Trial Evaluating the Safety of TD001 In Patients With PSMA-Expressing Metastatic Prostate Cancer",
    "nct": "NCT07258407",
    "phase": "1/2",
    "status": "recruiting",
    "sponsor": "T.O.A.D. Oncology SA",
    "enrolled": 180,
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "setting": "A Phase 1/2 Dose Escalation Trial With Administration Schedule Exploration Evaluating Single Agent TD001, a PSMA-Targeted Antibody-Drug Conjugate, in Patients With PSMA-Expressing Metastatic Castration-Resistant Prostate Cancer",
    "tldr": "A phase 1/2 trial of TD001 in prostate cancer, run by T.O.A.D. Oncology SA, now recruiting.",
    "summary": "A Clinical Trial Evaluating the Safety of TD001 In Patients With PSMA-Expressing Metastatic Prostate Cancer is a phase 1/2 interventional study registered as NCT07258407 by T.O.A.D. Oncology SA, with 180 participants planned, started 2026-01-30 and due to reach its primary completion in 2028-03. Interventions recorded: TD001.",
    "indications": [
      "prostate",
      "prostate-mcrpc"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT07258407",
        "url": "https://clinicaltrials.gov/study/NCT07258407"
      }
    ]
  },
  {
    "id": "nct07259213",
    "companies": [
      "radiopharm-theranostics"
    ],
    "kind": "trial",
    "name": "A Study of Terbium 161 (161Tb)-RAD402 in Participants With CRPC",
    "nct": "NCT07259213",
    "phase": "1/2",
    "status": "recruiting",
    "sponsor": "Radiopharm Theranostics, Ltd",
    "enrolled": 73,
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "setting": "A Phase 1/2a Study to Evaluate the Safety, Tolerability, Whole-Body Distribution, and Preliminary Clinical Activity of 161Tb-RAD402, a Radiolabeled Anti-Kallikrein-Related Peptidase 3 (KLK3) Monoclonal Antibody Targeting Free Prostate-Specific Antigen, in Participants With Castration-Resistant Prostate Cancer (CRPC)",
    "tldr": "A phase 1/2 trial of 161Tb RAD402 in prostate cancer, run by Radiopharm Theranostics, Ltd, now recruiting.",
    "summary": "A Study of Terbium 161 (161Tb)-RAD402 in Participants With CRPC is a phase 1/2 interventional study registered as NCT07259213 by Radiopharm Theranostics, Ltd, with 73 participants planned, started 2026-03-05 and due to reach its primary completion in 2028-11-30. Interventions recorded: 161Tb RAD402.",
    "indications": [
      "prostate"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT07259213",
        "url": "https://clinicaltrials.gov/study/NCT07259213"
      }
    ]
  },
  {
    "id": "nct07276789",
    "kind": "trial",
    "name": "Efficacy and Safety of a Single Dose of LS301-IT for Fluorescence Intraoperative Molecular Imaging (IMI) for Patients Undergoing Lung Cancer Resection for Non Small Cell Lung Cancer",
    "nct": "NCT07276789",
    "phase": "2",
    "status": "recruiting",
    "sponsor": "Integro Theranostics",
    "enrolled": 35,
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "setting": "A Phase 2, Open-Label, Multicenter Study to Investigate the Efficacy and Safety of a Single Dose of LS301-IT for Fluorescence Intraoperative Molecular Imaging (IMI) for Lung Cancer Resection",
    "tldr": "A phase 2 trial of LS301-IT 0.1 mg/kg in non-small-cell lung cancer, run by Integro Theranostics, now recruiting.",
    "summary": "Efficacy and Safety of a Single Dose of LS301-IT for Fluorescence Intraoperative Molecular Imaging (IMI) for Patients Undergoing Lung Cancer Resection for Non Small Cell Lung Cancer is a phase 2 interventional study registered as NCT07276789 by Integro Theranostics, with 35 participants planned, started 2025-12-08 and due to reach its primary completion in 2026-08. Interventions recorded: LS301-IT 0.1 mg/kg.",
    "links": [
      {
        "label": "ClinicalTrials.gov NCT07276789",
        "url": "https://clinicaltrials.gov/study/NCT07276789"
      }
    ],
    "indications": [
      "nsclc"
    ]
  },
  {
    "id": "nct07278479",
    "kind": "trial",
    "name": "Study of [212Pb]Pb-DOTAM-MAM279 ([212Pb]Pb-MP0712) in Patients With Small Cell Lung Cancer and Other DLL3 Expressing Solid Tumors",
    "nct": "NCT07278479",
    "phase": "1/2",
    "status": "recruiting",
    "sponsor": "Molecular Partners AG",
    "enrolled": 138,
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "setting": "A Phase 1/2a Study to Assess Safety, Tolerability, and Efficacy of [212Pb]Pb-DOTAM-MAM279 in Patients With Small Cell Lung Cancer and Other DLL3 Expressing Solid Tumors",
    "tldr": "A phase 1/2 trial of [212Pb]Pb-MP0712 in neuroendocrine tumours, small-cell lung cancer, pancreatic ductal adenocarcinoma and bladder & urothelial cancer, run by Molecular Partners AG, now recruiting.",
    "summary": "Study of [212Pb]Pb-DOTAM-MAM279 ([212Pb]Pb-MP0712) in Patients With Small Cell Lung Cancer and Other DLL3 Expressing Solid Tumors is a phase 1/2 interventional study registered as NCT07278479 by Molecular Partners AG, with 138 participants planned, started 2026-05-18 and due to reach its primary completion in 2028-09. Interventions recorded: [212Pb]Pb-MP0712.",
    "indications": [
      "neuroendocrine",
      "sclc"
    ],
    "companies": [
      "orano-med"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT07278479",
        "url": "https://clinicaltrials.gov/study/NCT07278479"
      }
    ]
  },
  {
    "id": "nct07311694",
    "kind": "trial",
    "name": "A Phase III Study Comparing HRS-4357 With Novel Androgen Receptor Pathway Inhibitors in Patients With Progressive, PSMA-Positive Metastatic Castration-Resistant Prostate Cancer",
    "nct": "NCT07311694",
    "phase": "3",
    "status": "recruiting",
    "asOf": "2026-09-11",
    "tags": [
      "ctgov-ingest"
    ],
    "sponsor": "Jiangsu HengRui Medicine",
    "enrolled": 370,
    "setting": "A Phase III, Randomized, Open-Label, Multicenter Study Comparing HRS-4357 With Novel Androgen Receptor Pathway Inhibitors in Patients With Progressive, PSMA-Positive Metastatic Castration-Resistant Prostate Cancer",
    "tldr": "A phase 3 trial testing HRS-4357 in prostate cancer, now recruiting.",
    "summary": "A Phase III Study Comparing HRS-4357 With Novel Androgen Receptor Pathway Inhibitors in Patients With Progressive, PSMA-Positive Metastatic Castration-Resistant Prostate Cancer is a phase 3 interventional study registered as NCT07311694, led by Jiangsu HengRui Medicine, and recruiting on the registry. Official title: A Phase III, Randomised, Open-Label, Multicenter Study Comparing HRS-4357 With Novel Androgen Receptor Pathway Inhibitors in Patients With Progressive, PSMA-Positive Metastatic Castration-Resistant Prostate Cancer. Planned enrolment is 370 participants (estimated). The study started in 2026-02-02 and primary completion is expected in 2027-12. No results have been posted on ClinicalTrials.gov.",
    "drugs": [
      "hrs-4357"
    ],
    "indications": [
      "prostate",
      "prostate-mcrpc"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT07311694",
        "url": "https://clinicaltrials.gov/study/NCT07311694"
      }
    ]
  },
  {
    "id": "nct07357519",
    "companies": [
      "lantheus"
    ],
    "kind": "trial",
    "name": "Lu-TARGO (177Lu-TARGeted Osteosarcoma Therapy)",
    "nct": "NCT07357519",
    "phase": "1/2",
    "status": "recruiting",
    "sponsor": "Lantheus Medical Imaging",
    "enrolled": 55,
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "setting": "A Phase 1/2, Multi-Center, Open-Label Study to Evaluate the Safety, Tolerability, Pharmacokinetics, -Radiation Dosimetry, and Preliminary Anti-Neoplastic Activity of LNTH-2403, a LRRC15-targeted 177Lutetium-labeled Monoclonal Antibody, in Participants With Relapsed / Refractory Osteosarcoma",
    "tldr": "A phase 1/2 trial of LNTH2403 Phase 1 dose in osteosarcoma, run by Lantheus Medical Imaging, now recruiting.",
    "summary": "Lu-TARGO (177Lu-TARGeted Osteosarcoma Therapy) is a phase 1/2 interventional study registered as NCT07357519 by Lantheus Medical Imaging, with 55 participants planned, started 2026-02-03 and due to reach its primary completion in 2027-08. Interventions recorded: LNTH2403 Phase 1 dose and Phase 2; LNTH2403 a single agent recommended phase 2 dose (RP2D)..",
    "indications": [
      "osteosarcoma"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT07357519",
        "url": "https://clinicaltrials.gov/study/NCT07357519"
      }
    ]
  },
  {
    "id": "nct07432633",
    "kind": "trial",
    "name": "[18F]FPyQCP PET Imaging of Fibroblast Activation Protein in Selected Oncology Indications",
    "nct": "NCT07432633",
    "phase": "1/2",
    "status": "recruiting",
    "sponsor": "Blue Earth Diagnostics",
    "enrolled": 71,
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "setting": "A Phase 1/2 Study of [18F]FPyQCP for PET Imaging of Fibroblast Activation Protein in Selected Oncology Indications",
    "tldr": "A phase 1/2 trial of [18F]FPyQCP in colorectal cancer, ovarian cancer, gastric & gastro-oesophageal junction cancer and pancreatic ductal adenocarcinoma, run by Blue Earth Diagnostics, now recruiting.",
    "summary": "[18F]FPyQCP PET Imaging of Fibroblast Activation Protein in Selected Oncology Indications is a phase 1/2 interventional study registered as NCT07432633 by Blue Earth Diagnostics, with 71 participants planned, started 2026-02-19 and due to reach its primary completion in 2028-01-31. Interventions recorded: [18F]FPyQCP.",
    "companies": [
      "blue-earth-diagnostics"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT07432633",
        "url": "https://clinicaltrials.gov/study/NCT07432633"
      }
    ]
  },
  {
    "id": "nct07567521",
    "targets": [
      "psma"
    ],
    "kind": "trial",
    "name": "A Study of TRC003 in the Treatment of Patients With Progressive PSMA-positive mCRPC",
    "nct": "NCT07567521",
    "phase": "1/2",
    "status": "recruiting",
    "sponsor": "C Ray Therapeutics",
    "enrolled": 90,
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "setting": "A Prospective, Open-label, Randomized, Phase 1/2 Study of TRC003 in the Treatment of Patients With Progressive PSMA-positive Metastatic Castration-resistant Prostate Cancer (mCRPC)",
    "tldr": "A phase 1/2 trial of Radiopharmaceuticals in prostate cancer, run by C Ray Therapeutics, now recruiting.",
    "summary": "A Study of TRC003 in the Treatment of Patients With Progressive PSMA-positive mCRPC is a phase 1/2 interventional study registered as NCT07567521 by C Ray Therapeutics, with 90 participants planned, started 2026-05-22 and due to reach its primary completion in 2027-12-30. Interventions recorded: Radiopharmaceuticals.",
    "indications": [
      "prostate",
      "prostate-mcrpc"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT07567521",
        "url": "https://clinicaltrials.gov/study/NCT07567521"
      }
    ]
  },
  {
    "id": "nct07590934",
    "aka": [
      "PROSPECTOR"
    ],
    "kind": "trial",
    "name": "Phase Ib/II Platform Study of Multiple Anti-Cancer Agents in Participants With Metastatic Prostate Cancer",
    "nct": "NCT07590934",
    "phase": "1/2",
    "status": "recruiting",
    "sponsor": "AstraZeneca",
    "enrolled": 152,
    "asOf": "2026-09-16",
    "tags": [
      "ctgov-ingest"
    ],
    "setting": "A Phase Ib/II, Open-label, Multi-centre, Platform Study to Assess the Safety, Tolerability, Pharmacokinetics, Pharmacodynamics, and Preliminary Efficacy of Multiple Anti-Cancer Agents in Metastatic Prostate Cancer",
    "tldr": "A phase 1/2 trial of FPI-2265, Actinium-225 PSMA agents, Palacaparib in prostate cancer, run by AstraZeneca, now recruiting.",
    "summary": "Phase Ib/II Platform Study of Multiple Anti-Cancer Agents in Participants With Metastatic Prostate Cancer is a phase 1/2 interventional study registered as NCT07590934 by AstraZeneca, with 152 participants planned, started 2026-06-03 and due to reach its primary completion in 2029-09-25. Interventions recorded: AZD2265 (FPI-2265), Palacaparib (AZD9574), Docetaxel, AZD2287 (Imaging agent). Conditions listed: Metastatic Prostate Cancer. No results are recorded here; the registry entry is the source.",
    "drugs": [
      "fpi-2265",
      "ac225-psma",
      "docetaxel"
    ],
    "indications": [
      "prostate"
    ],
    "companies": [
      "astrazeneca"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT07590934",
        "url": "https://clinicaltrials.gov/study/NCT07590934"
      }
    ]
  },
  {
    "id": "nct07611110",
    "aka": [
      "VECTRA-01"
    ],
    "kind": "trial",
    "name": "AZD2265 Compared With Standard of Care in PSMA-positive Metastatic Castration-resistant Prostate Cancer (VECTRA-01)",
    "nct": "NCT07611110",
    "phase": "3",
    "status": "recruiting",
    "sponsor": "AstraZeneca",
    "enrolled": 670,
    "asOf": "2026-09-16",
    "tags": [
      "ctgov-ingest"
    ],
    "setting": "A Phase III, Multicentre, Randomised Controlled Study to Evaluate the Efficacy and Safety of AZD2265 (FPI-2265) ²²⁵Ac-PSMA-I&T Compared With Standard of Care in Patients With PSMA-positive Metastatic Castration-resistant Prostate Cancer (VECTRA-01)",
    "tldr": "A phase 3 trial of FPI-2265, Cabazitaxel, Abiraterone acetate in prostate cancer, run by AstraZeneca, now recruiting.",
    "summary": "AZD2265 Compared With Standard of Care in PSMA-positive Metastatic Castration-resistant Prostate Cancer (VECTRA-01) is a phase 3 interventional study registered as NCT07611110 by AstraZeneca, with 670 participants planned, started 2026-05-04 and due to reach its primary completion in 2029-06-04. Interventions recorded: Actinium (225Ac) zadavotide guraxetan (AZD2265 [FPI-2265]), Cabazitaxel, Abiraterone, Enzalutamide, Apalutamide. Conditions listed: Metastatic Castration-resistant Prostate Cancer. No results are recorded here; the registry entry is the source.",
    "drugs": [
      "fpi-2265",
      "cabazitaxel",
      "abiraterone",
      "enzalutamide"
    ],
    "indications": [
      "prostate",
      "prostate-mcrpc"
    ],
    "companies": [
      "astrazeneca"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT07611110",
        "url": "https://clinicaltrials.gov/study/NCT07611110"
      }
    ]
  },
  {
    "id": "nct07615101",
    "technologies": [
      "pet",
      "pet-ct"
    ],
    "kind": "trial",
    "name": "Investigating the Safety and Diagnostic Performance of 68Ga-NYM032 Injection PET/CT in Men With Newly Diagnosed Prostate Cancer.",
    "nct": "NCT07615101",
    "phase": "3",
    "status": "recruiting",
    "sponsor": "Norroy Bioscience Co., LTD",
    "enrolled": 365,
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "setting": "Open-label, Phase 3, Multi Center, Single-arm, Imaging Study Investigating the Safety and Diagnostic Performance of 68Ga-NYM032 Injection PET/CT in Men With Newly Diagnosed Prostate Cancer.",
    "tldr": "A phase 3 trial of 68-Ga-NYM032 in prostate cancer, run by Norroy Bioscience Co., LTD, now recruiting.",
    "summary": "Investigating the Safety and Diagnostic Performance of 68Ga-NYM032 Injection PET/CT in Men With Newly Diagnosed Prostate Cancer. is a phase 3 interventional study registered as NCT07615101 by Norroy Bioscience Co., LTD, with 365 participants planned, started 2026-08-06 and due to reach its primary completion in 2027-06-30. Interventions recorded: 68-Ga-NYM032.",
    "indications": [
      "prostate"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT07615101",
        "url": "https://clinicaltrials.gov/study/NCT07615101"
      }
    ]
  },
  {
    "id": "nct07649122",
    "technologies": [
      "pet",
      "pet-ct"
    ],
    "kind": "trial",
    "name": "This Study Evaluates the Diagnostic Performance and Safety of 68Ga-NYM032 PET/CT Imaging in Patients With Suspected Recurrence of Prostate Cancer.",
    "nct": "NCT07649122",
    "phase": "3",
    "status": "recruiting",
    "sponsor": "Norroy Bioscience Co., LTD",
    "enrolled": 232,
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "setting": "A Phase 3, Multi-Center, Open-Label Study to Assess the Diagnostic Performance and Safety of 68Ga-NYM032 Injection PET/CT Imaging Results in Men With Suspected Recurrence of Prostate Cancer",
    "tldr": "A phase 3 trial of an investigational treatment in prostate cancer, run by Norroy Bioscience Co., LTD, now recruiting.",
    "summary": "This Study Evaluates the Diagnostic Performance and Safety of 68Ga-NYM032 PET/CT Imaging in Patients With Suspected Recurrence of Prostate Cancer. is a phase 3 interventional study registered as NCT07649122 by Norroy Bioscience Co., LTD, with 232 participants planned, started 2026-08-31 and due to reach its primary completion in 2028-06-30.",
    "indications": [
      "prostate"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT07649122",
        "url": "https://clinicaltrials.gov/study/NCT07649122"
      }
    ]
  },
  {
    "id": "nct07691775",
    "technologies": [
      "pet",
      "pet-ct"
    ],
    "kind": "trial",
    "name": "A Study to Evaluate the Safety and Diagnostic Performance of F18 FBPA PET/CT Imaging in Solid Tumors",
    "nct": "NCT07691775",
    "phase": "1/2",
    "status": "recruiting",
    "sponsor": "Heron Neutron Medical Corp.",
    "enrolled": 30,
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "setting": "A Study to Evaluate the Safety and Diagnostic Performance of F18 FBPA PET/CT Imaging in Solid Tumors",
    "tldr": "A phase 1/2 trial of F18 FBPA Injection in advanced solid tumours, run by Heron Neutron Medical Corp., now recruiting.",
    "summary": "A Study to Evaluate the Safety and Diagnostic Performance of F18 FBPA PET/CT Imaging in Solid Tumors is a phase 1/2 interventional study registered as NCT07691775 by Heron Neutron Medical Corp., with 30 participants planned, started 2026-05-20 and due to reach its primary completion in 2026-12. Interventions recorded: F18 FBPA Injection.",
    "links": [
      {
        "label": "ClinicalTrials.gov NCT07691775",
        "url": "https://clinicaltrials.gov/study/NCT07691775"
      }
    ]
  },
  {
    "id": "nct07702292",
    "kind": "trial",
    "name": "[68Ga]BED003 PET Imaging of Fibroblast Activation Protein in Selected Oncology Indications",
    "nct": "NCT07702292",
    "phase": "2",
    "status": "recruiting",
    "sponsor": "Blue Earth Diagnostics",
    "enrolled": 71,
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "setting": "A Phase 2 Study of [68Ga]BED003 for PET Imaging of Fibroblast Activation Protein in Selected Oncology Indications",
    "tldr": "A phase 2 trial of [68Ga]BED003 in colorectal cancer, ovarian cancer, gastric & gastro-oesophageal junction cancer and pancreatic ductal adenocarcinoma, run by Blue Earth Diagnostics, now recruiting.",
    "summary": "[68Ga]BED003 PET Imaging of Fibroblast Activation Protein in Selected Oncology Indications is a phase 2 interventional study registered as NCT07702292 by Blue Earth Diagnostics, with 71 participants planned, started 2026-06-30 and due to reach its primary completion in 2028-02. Interventions recorded: [68Ga]BED003.",
    "companies": [
      "blue-earth-diagnostics"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT07702292",
        "url": "https://clinicaltrials.gov/study/NCT07702292"
      }
    ]
  },
  {
    "kind": "trial",
    "asOf": "2026-09-04",
    "id": "netter-1",
    "companies": [
      "novartis"
    ],
    "name": "NETTER-1",
    "nct": "NCT01578239",
    "phase": "3",
    "status": "positive",
    "yearReported": 2017,
    "sponsor": "Advanced Accelerator Applications (Novartis)",
    "enrolled": 231,
    "setting": "Inoperable, progressive midgut neuroendocrine tumours: 177Lu-Dotatate plus octreotide versus high-dose octreotide LAR",
    "tldr": "The trial that made radioligand therapy a standard: a radioactive drug homing to the somatostatin receptor held midgut neuroendocrine tumours in check far longer than high-dose octreotide, and it underpins Lutathera's approvals.",
    "summary": "NETTER-1, trial NCT01578239 sponsored by Advanced Accelerator Applications and published in the New England Journal of Medicine in 2017, randomised 231 patients with inoperable, progressive, somatostatin receptor-positive midgut neuroendocrine tumours to 177Lu-Dotatate (four cycles, with octreotide) or high-dose octreotide LAR. Progression-free survival at 20 months was 65.2% with 177Lu-Dotatate against 10.8% with octreotide, and the response rate was 18% against 3%. The result supported the 2018 US and EU approvals of Lutathera and made peptide receptor radionuclide therapy the reference treatment after somatostatin analogues.",
    "result": "PFS at 20 months 65.2% vs 10.8% (HR 0.21); ORR 18% vs 3%.",
    "outcomes": [
      {
        "endpoint": "Progression-free survival at 20 months",
        "primary": true,
        "unit": "%",
        "arms": [
          {
            "name": "177Lu-Dotatate + octreotide",
            "n": 116,
            "value": 65.2
          },
          {
            "name": "High-dose octreotide LAR",
            "n": 113,
            "value": 10.8
          }
        ],
        "hr": 0.21,
        "ci": [
          0.13,
          0.33
        ],
        "p": "<0.001",
        "source": "https://doi.org/10.1056/NEJMoa1607427"
      },
      {
        "endpoint": "Objective response rate",
        "unit": "%",
        "arms": [
          {
            "name": "177Lu-Dotatate + octreotide",
            "n": 116,
            "value": 18
          },
          {
            "name": "High-dose octreotide LAR",
            "n": 113,
            "value": 3
          }
        ],
        "p": "<0.001",
        "source": "https://doi.org/10.1056/NEJMoa1607427"
      }
    ],
    "drugs": [
      "lutathera"
    ],
    "indications": [
      "neuroendocrine",
      "small-intestinal-net"
    ],
    "targets": [
      "sstr2"
    ],
    "technologies": [
      "prrt"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT01578239",
        "url": "https://clinicaltrials.gov/study/NCT01578239"
      },
      {
        "label": "Strosberg et al., Phase 3 trial of 177Lu-Dotatate for midgut neuroendocrine tumours (NEJM 2017)",
        "url": "https://doi.org/10.1056/NEJMoa1607427"
      }
    ]
  },
  {
    "kind": "trial",
    "asOf": "2026-09-07",
    "id": "phergain",
    "name": "PHERGain",
    "nct": "NCT03161353",
    "phase": "2",
    "status": "positive",
    "yearReported": 2024,
    "sponsor": "MEDSIR",
    "enrolled": 377,
    "setting": "HER2+ early breast cancer: chemotherapy-free trastuzumab + pertuzumab with early 18F-FDG PET response assessment to decide whether chemotherapy is needed",
    "tldr": "Using an early PET scan to spot responders let a third of women be cured of HER2-positive breast cancer without any chemotherapy.",
    "summary": "PET responders after 2 cycles continued antibodies alone; those achieving pCR (37.9% of the arm) skipped chemotherapy entirely. 3-year iDFS 95.4% in the PET-adapted arm, meeting its co-primary endpoint. Discussed at ESMO Breast 2026 as the model for imaging-guided de-escalation; a phase 3 (PHERGain-2) is underway.",
    "result": "3-year iDFS 95.4% in the PET-adapted arm; ~1 in 3 spared chemotherapy.",
    "outcomes": [
      {
        "endpoint": "3-year invasive disease-free survival (PET-adapted arm)",
        "primary": true,
        "unit": "%",
        "arms": [
          {
            "name": "PET-adapted HP ± chemotherapy",
            "n": 285,
            "value": 95.4
          }
        ],
        "source": "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(24)00054-0/fulltext"
      }
    ],
    "replication": "Consistent with WSG-ADAPT HER2+/HR- (pCR-guided de-escalation); phase 3 confirmation pending.",
    "indications": [
      "breast-her2-positive"
    ],
    "technologies": [
      "fdg-pet"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT03161353",
        "url": "https://clinicaltrials.gov/study/NCT03161353"
      }
    ]
  },
  {
    "kind": "trial",
    "asOf": "2026-09-17",
    "tags": [
      "radiation-wave4"
    ],
    "id": "pop-rt",
    "name": "POP-RT",
    "nct": "NCT01952223",
    "phase": "3",
    "status": "positive",
    "yearReported": 2021,
    "sponsor": "Tata Memorial Centre, Mumbai",
    "enrolled": 224,
    "setting": "High-risk node-negative prostate cancer: prostate-only versus whole-pelvic radiotherapy, both with hormone therapy",
    "tldr": "POP-RT, from Mumbai, showed that treating the pelvic lymph nodes as well as the prostate improves disease control in high-risk prostate cancer, reviving a question earlier trials had left unanswered.",
    "summary": "POP-RT randomised 224 men with high-risk, node-negative prostate cancer (most staged with PSMA PET) to image-guided prostate-only or whole-pelvic radiotherapy with two years of androgen deprivation. Five-year biochemical failure-free survival was 95 percent with pelvic radiotherapy and 81.2 percent with prostate-only treatment (hazard ratio 0.23), with better disease-free survival and more late urinary toxicity (Murthy and colleagues, Journal of Clinical Oncology 2021).",
    "result": "5-year biochemical failure-free survival 95% (whole pelvis) vs 81.2% (prostate only).",
    "outcomes": [
      {
        "endpoint": "Biochemical failure-free survival at 5 years",
        "primary": true,
        "unit": "%",
        "arms": [
          {
            "name": "Whole-pelvic radiotherapy",
            "n": 110,
            "value": 95
          },
          {
            "name": "Prostate-only radiotherapy",
            "n": 114,
            "value": 81.2
          }
        ]
      }
    ],
    "indications": [
      "prostate"
    ],
    "technologies": [
      "psma-pet"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT01952223",
        "url": "https://clinicaltrials.gov/study/NCT01952223"
      },
      {
        "label": "JCO 2021",
        "url": "https://doi.org/10.1200/JCO.20.03282"
      }
    ]
  },
  {
    "kind": "trial",
    "asOf": "2026-09-06",
    "id": "propsma",
    "name": "proPSMA",
    "nct": "ANZCTR12617000005358",
    "phase": "3",
    "status": "positive",
    "yearReported": 2020,
    "sponsor": "Peter MacCallum Cancer Centre / ANZUP",
    "setting": "High-risk localised prostate cancer staging: PSMA PET/CT vs CT + bone scan",
    "tldr": "Proved PSMA PET is far more accurate than conventional scans for staging, with less radiation.",
    "summary": "proPSMA, registered as ANZCTR12617000005358, sponsored by Peter MacCallum Cancer Centre and ANZUP and reported in the Lancet in 2020, proved that PSMA PET/CT is far more accurate than CT plus bone scan for staging high-risk localised prostate cancer, with less radiation. It randomised 302 men, found an accuracy of 92 percent for PSMA PET against 65 percent for conventional imaging, produced fewer equivocal findings and changed management more often. Nuclide links it to PSMA PET, Peter MacCallum, ANZUP, Michael Hofman, Ian Davis and Declan G. Murphy, and its findings are consistent with the OSPREY and CONDOR studies for the fluorine-18 tracer DCFPyL. Whether better staging translates into better outcomes, rather than only different decisions, is the open question that follows any diagnostic accuracy trial. PSMA PET has its own page.",
    "result": "Accuracy 92% vs 65%.",
    "indications": [
      "prostate",
      "prostate-high-risk"
    ],
    "technologies": [
      "psma-pet"
    ],
    "institutions": [
      "peter-mac"
    ],
    "links": [
      {
        "label": "Lancet 2020",
        "url": "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(20)30314-7/fulltext"
      }
    ],
    "people": [
      "declan-murphy",
      "hofman-michael"
    ],
    "enrolled": 302,
    "outcomes": [
      {
        "endpoint": "Accuracy for pelvic nodal or distant metastases (AUC)",
        "primary": true,
        "unit": "%",
        "arms": [
          {
            "name": "PSMA PET/CT",
            "n": 150,
            "value": 92
          },
          {
            "name": "CT + bone scan",
            "n": 152,
            "value": 65
          }
        ],
        "p": "<0.0001",
        "source": "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(20)30314-7/fulltext"
      }
    ],
    "replication": "Consistent with the OSPREY and CONDOR registrational studies for 18F-DCFPyL."
  },
  {
    "kind": "trial",
    "asOf": "2026-09-17",
    "tags": [
      "subtype-trials"
    ],
    "id": "prosper",
    "name": "PROSPER",
    "nct": "NCT02003924",
    "phase": "3",
    "status": "positive",
    "yearReported": 2018,
    "sponsor": "Pfizer (Medivation) and Astellas",
    "enrolled": 1401,
    "setting": "Non-metastatic castration-resistant prostate cancer with a PSA doubling time of ten months or less: enzalutamide against placebo, both with continued androgen deprivation",
    "tldr": "PROSPER showed that enzalutamide delayed the appearance of metastases by about two years, and later helped men live longer, when given at the point where prostate cancer is rising on hormone therapy but has not yet spread on scans.",
    "summary": "PROSPER randomised 1401 men with castration-resistant prostate cancer, no metastases on conventional imaging and a PSA doubling time of ten months or less two to one to enzalutamide or placebo alongside androgen deprivation. The primary endpoint was metastasis-free survival.\n\nEnzalutamide lengthened metastasis-free survival substantially and delayed the time to PSA progression and to further antineoplastic therapy; with longer follow-up overall survival was also improved. Fatigue, hypertension and falls were the main added toxicities. It was approved for this indication in July 2018 and, with SPARTAN (apalutamide) and ARAMIS (darolutamide), defined androgen receptor pathway inhibition as the standard for high-risk non-metastatic castration-resistant disease, a group that PSMA PET imaging has since shrunk.",
    "result": "Enzalutamide lengthened metastasis-free survival and, with longer follow-up, overall survival compared with placebo; approved in July 2018.",
    "outcomes": [
      {
        "endpoint": "Metastasis-free survival",
        "primary": true,
        "unit": "months",
        "arms": [
          {
            "name": "Enzalutamide",
            "n": 933,
            "value": 36.6
          },
          {
            "name": "Placebo",
            "n": 468,
            "value": 14.7
          }
        ],
        "hr": 0.29,
        "ci": [
          0.24,
          0.35
        ],
        "p": "<0.001",
        "source": "https://doi.org/10.1056/NEJMoa1800536"
      },
      {
        "endpoint": "Time to PSA progression",
        "unit": "months",
        "arms": [
          {
            "name": "Enzalutamide",
            "n": 933,
            "value": 37.2
          },
          {
            "name": "Placebo",
            "n": 468,
            "value": 3.9
          }
        ],
        "hr": 0.07,
        "p": "<0.001",
        "source": "https://doi.org/10.1056/NEJMoa1800536"
      },
      {
        "endpoint": "Time to first subsequent antineoplastic therapy",
        "unit": "months",
        "arms": [
          {
            "name": "Enzalutamide",
            "n": 933,
            "value": 39.6
          },
          {
            "name": "Placebo",
            "n": 468,
            "value": 17.7
          }
        ],
        "hr": 0.21,
        "p": "<0.001",
        "source": "https://doi.org/10.1056/NEJMoa1800536"
      },
      {
        "endpoint": "Grade 3 or higher adverse events",
        "unit": "%",
        "arms": [
          {
            "name": "Enzalutamide",
            "value": 31
          },
          {
            "name": "Placebo",
            "value": 23
          }
        ],
        "source": "https://doi.org/10.1056/NEJMoa1800536"
      }
    ],
    "drugs": [
      "enzalutamide"
    ],
    "indications": [
      "prostate-nmcrpc",
      "prostate"
    ],
    "companies": [
      "pfizer"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT02003924",
        "url": "https://clinicaltrials.gov/study/NCT02003924"
      }
    ]
  },
  {
    "kind": "trial",
    "asOf": "2026-09-06",
    "id": "psmaddition",
    "name": "PSMAddition",
    "nct": "NCT04720157",
    "phase": "3",
    "status": "positive",
    "yearReported": 2025,
    "sponsor": "Novartis",
    "setting": "PSMA-positive metastatic hormone-sensitive prostate cancer: 177Lu-PSMA-617 + ADT + ARPI vs ADT + ARPI",
    "tldr": "PSMAddition moved the radioligand Pluvicto into the first treatment of metastatic hormone-sensitive prostate cancer, given alongside hormone therapy, and the FDA approved this use on 31 July 2026. It delayed progression on scans, but severe side effects were more common and whether it lengthens life is not yet known.",
    "summary": "PSMAddition, trial NCT04720157 sponsored by Novartis and reported in 2025, moved Pluvicto, or 177Lu-PSMA-617, into the first-line treatment of metastatic prostate cancer, and the FDA approved this use on 31 July 2026. It randomised 1,144 men with PSMA-positive metastatic hormone-sensitive disease to the radioligand plus androgen deprivation and an androgen receptor pathway inhibitor or to standard care alone, and met its primary radiographic progression-free survival endpoint at ESMO 2025 with a stronger effect at update, while overall survival trended favourably but remained immature and severe adverse events were more common. Nuclide links it to radioligand therapy, the CRPC term and the idea of alpha-emitting PSMA therapy at first diagnosis. Whether early radioligand use improves survival or only delays progression is the open question.",
    "result": "rPFS HR 0.72 (updated 0.67); OS HR 0.80 (NS, immature).",
    "drugs": [
      "pluvicto"
    ],
    "indications": [
      "prostate",
      "prostate-mhspc"
    ],
    "technologies": [
      "radioligand-therapy"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT04720157",
        "url": "https://clinicaltrials.gov/study/NCT04720157"
      },
      {
        "label": "FDA approval 31 Jul 2026",
        "url": "https://www.fda.gov/drugs/resources-information-approved-drugs/fda-approves-lutetium-lu-177-vipivotide-tetraxetan-androgen-receptor-pathway-inhibitor-therapy"
      },
      {
        "label": "Annals of Oncology LBA6 (ESMO 2025)",
        "url": "https://www.annalsofoncology.org/article/S0923-7534(25)04871-9/fulltext"
      }
    ],
    "enrolled": 1144,
    "outcomes": [
      {
        "endpoint": "Radiographic progression-free survival",
        "primary": true,
        "unit": "months",
        "arms": [
          {
            "name": "177Lu-PSMA-617 + standard care (ARPI + ADT)",
            "note": "Updated HR 0.67; OS HR 0.80, immature"
          },
          {
            "name": "Standard care"
          }
        ],
        "hr": 0.72,
        "ci": [
          0.58,
          0.89
        ],
        "p": "0.0016",
        "source": "https://clinicaltrials.gov/study/NCT04720157"
      }
    ],
    "replication": "Extends VISION and PSMAfore into hormone-sensitive disease; supported the July 2026 label expansion."
  },
  {
    "kind": "trial",
    "asOf": "2026-09-04",
    "id": "psmafore",
    "name": "PSMAfore",
    "nct": "NCT04689828",
    "phase": "3",
    "status": "positive",
    "yearReported": 2023,
    "sponsor": "Novartis",
    "setting": "PSMA+ mCRPC after one ARPI, taxane-naive: 177Lu-PSMA-617 vs ARPI switch",
    "tldr": "PSMAfore moved Pluvicto before chemotherapy in prostate cancer.",
    "summary": "PSMAfore, trial NCT04689828 sponsored by Novartis and published in the Lancet in 2024, moved Pluvicto, or 177Lu-PSMA-617, before chemotherapy in PSMA-positive metastatic castration-resistant prostate cancer after one androgen receptor pathway inhibitor. It randomised 468 taxane-naive men to the radioligand or a switch of androgen receptor pathway inhibitor, met its primary radiographic progression-free survival endpoint with a large effect, and overall survival was confounded by crossover of most control patients, with crossover-adjusted analyses favouring the radioligand; approval in the pre-chemotherapy setting followed in 2025. Whether earlier use improves survival, not just progression, is the open question.",
    "result": "rPFS HR 0.41.",
    "drugs": [
      "pluvicto"
    ],
    "indications": [
      "prostate",
      "prostate-mcrpc"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT04689828",
        "url": "https://clinicaltrials.gov/study/NCT04689828"
      }
    ],
    "people": [
      "oliver-sartor",
      "michael-morris"
    ],
    "enrolled": 469,
    "outcomes": [
      {
        "endpoint": "Radiographic progression-free survival",
        "primary": true,
        "unit": "months",
        "arms": [
          {
            "name": "177Lu-PSMA-617",
            "n": 234,
            "value": 12
          },
          {
            "name": "ARPI switch",
            "n": 234,
            "value": 5.6
          }
        ],
        "hr": 0.41,
        "ci": [
          0.29,
          0.56
        ],
        "p": "<0.0001",
        "source": "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(24)01653-2/fulltext"
      },
      {
        "endpoint": "Overall survival (crossover-adjusted)",
        "unit": "months",
        "arms": [
          {
            "name": "177Lu-PSMA-617",
            "note": "Unadjusted OS HR 0.98 with 84% crossover from control"
          },
          {
            "name": "ARPI switch"
          }
        ],
        "hr": 0.59,
        "source": "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(24)01653-2/fulltext"
      }
    ],
    "replication": "Confirms VISION in the pre-chemotherapy line; SPLASH (177Lu-PSMA-I&T) showed a smaller rPFS effect and no OS benefit, so agent and setting details matter."
  },
  {
    "kind": "trial",
    "asOf": "2026-09-07",
    "id": "radiant-3-4",
    "name": "RADIANT-3 and RADIANT-4",
    "nct": "NCT00510068",
    "phase": "3",
    "status": "positive",
    "yearReported": 2011,
    "sponsor": "Novartis",
    "enrolled": 712,
    "setting": "Progressive pancreatic NETs (RADIANT-3, n=410) and lung/GI NETs (RADIANT-4, n=302): everolimus vs placebo",
    "tldr": "The two trials that made everolimus a standard pill for pancreatic, lung and gut neuroendocrine tumours.",
    "summary": "RADIANT-3 and RADIANT-4, led by trial NCT00510068 and sponsored by Novartis, are the two trials, reported from 2011, that made everolimus a standard tablet for pancreatic, lung and gastrointestinal neuroendocrine tumours. RADIANT-3 randomised 410 patients with progressive pancreatic neuroendocrine tumours and RADIANT-4 302 patients with lung or gastrointestinal tumours to everolimus or placebo, and both met their primary progression-free survival endpoints with large effects, while overall survival was not significantly improved because of crossover. Nuclide links them to neuroendocrine tumours, everolimus and James C. Yao. Whether everolimus should come before or after radioligand therapy, which COMPETE has now tested directly, is the open question.",
    "result": "PFS HR 0.35 (pNET) and 0.48 (lung/GI).",
    "outcomes": [
      {
        "endpoint": "Progression-free survival (RADIANT-3)",
        "primary": true,
        "unit": "months",
        "arms": [
          {
            "name": "Everolimus",
            "n": 207,
            "value": 11
          },
          {
            "name": "Placebo",
            "n": 203,
            "value": 4.6
          }
        ],
        "hr": 0.35,
        "ci": [
          0.27,
          0.45
        ],
        "source": "https://doi.org/10.1056/NEJMoa1009290"
      },
      {
        "endpoint": "Progression-free survival (RADIANT-4)",
        "primary": true,
        "unit": "months",
        "arms": [
          {
            "name": "Everolimus",
            "n": 205,
            "value": 11
          },
          {
            "name": "Placebo",
            "n": 97,
            "value": 3.9
          }
        ],
        "hr": 0.48,
        "ci": [
          0.35,
          0.67
        ],
        "source": "https://doi.org/10.1016/S0140-6736(15)00817-X"
      }
    ],
    "drugs": [
      "everolimus"
    ],
    "indications": [
      "neuroendocrine",
      "pancreatic-net",
      "small-intestinal-net",
      "lung-net"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT00510068",
        "url": "https://clinicaltrials.gov/study/NCT00510068"
      }
    ]
  },
  {
    "kind": "trial",
    "asOf": "2026-09-07",
    "id": "rathl",
    "name": "RATHL",
    "nct": "NCT00678327",
    "phase": "3",
    "status": "positive",
    "yearReported": 2016,
    "sponsor": "UK NCRI / Cancer Research UK",
    "enrolled": 1214,
    "setting": "Advanced Hodgkin lymphoma: interim-PET-guided omission of bleomycin (AVD) vs continued ABVD",
    "tldr": "Showed that patients whose PET scan is clear after two cycles can safely drop bleomycin and its lung toxicity.",
    "summary": "RATHL, trial NCT00678327 sponsored by the UK NCRI and Cancer Research UK and published in the New England Journal of Medicine in 2016, showed that patients with advanced Hodgkin lymphoma whose PET scan is clear after two cycles can safely drop bleomycin and its lung toxicity. It enrolled 1,214 patients, randomised those with a negative interim PET to continue ABVD or switch to AVD, met its non-inferiority endpoint on progression-free survival with fewer pulmonary events, and escalated PET-positive patients to BEACOPP. Nuclide links it to Hodgkin lymphoma, PET-adapted therapy, FDG PET, the Deauville scale term, Cancer Research UK, Peter Johnson and the bleomycin caution pairing, and it is concordant with GHSG HD18. It established interim PET as a treatment-steering tool, and whether PET can guide even deeper de-escalation is the open question.",
    "result": "3-year PFS 85.7% (ABVD) vs 84.4% (AVD); bleomycin safely omitted.",
    "outcomes": [
      {
        "endpoint": "Progression-free survival at 3 years (PET2-negative)",
        "primary": true,
        "unit": "%",
        "arms": [
          {
            "name": "ABVD",
            "n": 470,
            "value": 85.7
          },
          {
            "name": "AVD",
            "n": 465,
            "value": 84.4
          }
        ],
        "source": "https://www.nejm.org/doi/full/10.1056/NEJMoa1510093"
      }
    ],
    "replication": "Concordant with GHSG HD18 (shortened BEACOPP after negative PET2).",
    "technologies": [
      "pet-adapted-therapy",
      "fdg-pet"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT00678327",
        "url": "https://clinicaltrials.gov/study/NCT00678327"
      }
    ]
  },
  {
    "kind": "trial",
    "asOf": "2026-09-07",
    "id": "sarah-sirvenib",
    "name": "SARAH and SIRveNIB",
    "nct": "NCT01482442",
    "phase": "3",
    "status": "negative",
    "yearReported": 2017,
    "sponsor": "AP-HP (SARAH); NCC Singapore (SIRveNIB)",
    "setting": "Locally advanced HCC: yttrium-90 radioembolisation vs sorafenib",
    "tldr": "Two large trials found radioactive beads were gentler than sorafenib but did not help patients live longer.",
    "summary": "SARAH and SIRveNIB, led by trial NCT01482442 and sponsored by AP-HP and the National Cancer Centre Singapore, were two large trials reported in 2017 that found yttrium-90 radioembolisation was gentler than sorafenib in locally advanced hepatocellular carcinoma but did not help patients live longer. SARAH randomised 459 patients and SIRveNIB 360, and neither improved overall survival, although the radioactive beads gave better quality of life and more responses. Nuclide links them to hepatocellular carcinoma, radioembolisation and sorafenib. The results were interpreted as showing the need for personalised dosimetry and earlier-stage use rather than the failure of the modality, and whether dosimetry-guided radioembolisation can succeed where fixed dosing did not is the open question.",
    "result": "OS not improved; fewer adverse events.",
    "outcomes": [
      {
        "endpoint": "Overall survival (SARAH)",
        "primary": true,
        "unit": "months",
        "arms": [
          {
            "name": "Y-90 SIRT",
            "n": 237,
            "value": 8
          },
          {
            "name": "Sorafenib",
            "n": 222,
            "value": 9.9
          }
        ],
        "hr": 1.15,
        "source": "https://doi.org/10.1016/S1470-2045(17)30683-6"
      }
    ],
    "technologies": [
      "radioembolisation-tare"
    ],
    "drugs": [
      "sorafenib"
    ],
    "indications": [
      "hcc"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT01482442",
        "url": "https://clinicaltrials.gov/study/NCT01482442"
      }
    ],
    "tags": [
      "failure",
      "lesson:patient-selection"
    ]
  },
  {
    "kind": "trial",
    "asOf": "2026-09-07",
    "id": "select-lenvatinib",
    "name": "SELECT",
    "nct": "NCT01321554",
    "phase": "3",
    "status": "positive",
    "yearReported": 2015,
    "sponsor": "Eisai",
    "enrolled": 392,
    "setting": "Radioiodine-refractory differentiated thyroid cancer with progression: lenvatinib vs placebo",
    "tldr": "Turned lenvatinib into the main drug for thyroid cancers that no longer take up radioactive iodine, quadrupling the time before the disease grew.",
    "summary": "SELECT, trial NCT01321554 sponsored by Eisai and reported in 2015, turned lenvatinib into the main drug for differentiated thyroid cancers that no longer take up radioactive iodine, quadrupling the time before the disease grew. It randomised 392 patients with progressive radioiodine-refractory disease to lenvatinib or placebo, met its primary progression-free survival endpoint with a very large effect and a response rate near two-thirds against almost none on placebo, leading to FDA approval in February 2015; hypertension in about two-thirds and dose reductions in more than sixty percent drive management, and survival was confounded by crossover. Nuclide links it to thyroid cancer, kinase inhibitors and anti-angiogenic therapy, VEGF and RET as targets, the radioiodine-refractory term and Martin Schlumberger. When to start a drug this toxic in a slow disease is the open question.",
    "result": "PFS 18.3 vs 3.6 months; HR 0.21.",
    "outcomes": [
      {
        "endpoint": "Progression-free survival",
        "primary": true,
        "unit": "months",
        "arms": [
          {
            "name": "Lenvatinib",
            "value": 18.3
          },
          {
            "name": "Placebo",
            "value": 3.6
          }
        ],
        "hr": 0.21,
        "source": "https://www.nejm.org/doi/full/10.1056/NEJMoa1406470"
      },
      {
        "endpoint": "Objective response rate",
        "unit": "%",
        "arms": [
          {
            "name": "Lenvatinib",
            "value": 64.8
          },
          {
            "name": "Placebo",
            "value": 1.5
          }
        ],
        "source": "https://www.nejm.org/doi/full/10.1056/NEJMoa1406470"
      }
    ],
    "replication": "DECISION (sorafenib) showed the same direction with a smaller effect; class effect of VEGFR multikinase inhibitors is established.",
    "indications": [
      "thyroid"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT01321554",
        "url": "https://clinicaltrials.gov/study/NCT01321554"
      },
      {
        "label": "NEJM 2015",
        "url": "https://www.nejm.org/doi/full/10.1056/NEJMoa1406470"
      }
    ]
  },
  {
    "kind": "trial",
    "asOf": "2026-09-06",
    "id": "splash",
    "name": "SPLASH",
    "nct": "NCT04647526",
    "phase": "3",
    "status": "mixed",
    "yearReported": 2024,
    "sponsor": "Lantheus (POINT Biopharma)",
    "setting": "PSMA-positive mCRPC after one ARPI, taxane-naive: 177Lu-PNT2002 vs ARPI switch",
    "tldr": "In SPLASH, a second PSMA radioligand improved progression-free survival but not, so far, survival.",
    "summary": "SPLASH, trial NCT04647526 sponsored by Lantheus through POINT Biopharma and reported in 2024, tested a second PSMA radioligand, 177Lu-PNT2002, also known as 177Lu-PSMA-I&T, against a switch of androgen receptor pathway inhibitor in PSMA-positive, taxane-naive metastatic castration-resistant prostate cancer. It randomised 412 men and met its primary radiographic progression-free survival endpoint, but the interim overall survival analysis was numerically unfavourable, with 46 percent of events and 84 percent crossover, and Lantheus deprioritised a US filing pending mature data. Nuclide links it to prostate cancer and to the 177Lu-PSMA-I&T drug record; its effect was smaller than PSMAfore's with a different ligand and dosing, while ECLIPSE with the same ligand met its progression endpoint. Whether crossover masked a real benefit or the drug simply adds little is the open question.",
    "result": "rPFS HR 0.71; interim OS HR 1.11.",
    "drugs": [
      "lu177-psma-it"
    ],
    "indications": [
      "prostate",
      "prostate-mcrpc"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT04647526",
        "url": "https://clinicaltrials.gov/study/NCT04647526"
      }
    ],
    "enrolled": 455,
    "outcomes": [
      {
        "endpoint": "Radiographic progression-free survival",
        "primary": true,
        "unit": "months",
        "arms": [
          {
            "name": "177Lu-PNT2002 (PSMA-I&T)",
            "n": 276,
            "value": 9.5
          },
          {
            "name": "ARPI switch",
            "n": 136,
            "value": 6
          }
        ],
        "hr": 0.71,
        "ci": [
          0.55,
          0.92
        ],
        "p": "0.0088",
        "source": "https://clinicaltrials.gov/study/NCT04647526"
      },
      {
        "endpoint": "Overall survival (interim)",
        "unit": "months",
        "arms": [
          {
            "name": "177Lu-PNT2002",
            "note": "Numerically unfavourable at interim with crossover"
          },
          {
            "name": "ARPI switch"
          }
        ],
        "hr": 1.11,
        "source": "https://clinicaltrials.gov/study/NCT04647526"
      }
    ],
    "replication": "Smaller effect than PSMAfore (rPFS HR 0.41) with a different ligand and dosing; ECLIPSE (177Lu-PSMA-I&T) met rPFS."
  },
  {
    "kind": "trial",
    "asOf": "2026-09-06",
    "id": "stampede",
    "name": "STAMPEDE",
    "aka": [
      "STAMPEDE trial",
      "MRC PR08",
      "Systemic Therapy in Advancing or Metastatic Prostate Cancer: Evaluation of Drug Efficacy",
      "STAMPEDE platform"
    ],
    "nct": "NCT00268476",
    "phase": "platform",
    "status": "positive",
    "yearReported": 2016,
    "sponsor": "MRC Clinical Trials Unit at UCL, funded by Cancer Research UK and the Medical Research Council",
    "setting": "Multi-arm multi-stage platform in men starting long-term hormone therapy for high-risk locally advanced or metastatic prostate cancer: docetaxel, zoledronic acid, celecoxib, abiraterone, radiotherapy to the prostate, abiraterone with enzalutamide, metformin and transdermal oestradiol added to ADT and compared with ADT alone",
    "tldr": "STAMPEDE is the longest-running platform trial in oncology, and showed that both docetaxel and abiraterone extend life when started at first diagnosis of metastatic disease.",
    "summary": "STAMPEDE opened in 2005 at the MRC Clinical Trials Unit at UCL, with Nicholas James as chief investigator and Mahesh Parmar as its statistician, as the first multi-arm multi-stage trial in cancer: several experimental arms recruited at once against one control arm of androgen deprivation therapy, each passing through interim activity stages before being allowed to continue to an overall survival comparison, with new arms added and failing arms dropped as the standard of care moved. Nearly 12,000 men with high-risk locally advanced or newly metastatic prostate cancer joined at more than 100 hospitals in the United Kingdom and Switzerland; Silke Gillessen led the Swiss contribution and later co-chaired the trial. The original arms added zoledronic acid, docetaxel, celecoxib and their combinations; the celecoxib arms were stopped for lack of activity in 2011, and abiraterone (2011), radiotherapy to the prostate (2013), abiraterone with enzalutamide (2014), metformin (2016) and transdermal oestradiol (run jointly with the PATCH trial) were added.\n\nThe results arrived in sequence and each changed practice. In 2016 the Lancet reported that docetaxel added to hormone therapy improved overall survival, most clearly in metastatic disease, while zoledronic acid added nothing; the finding replicated CHAARTED and made early chemotherapy a standard. In 2017 the New England Journal of Medicine reported, alongside LATITUDE, that abiraterone with prednisolone cut the risk of death by about a third (hazard ratio 0.63), which established abiraterone at first diagnosis of metastatic disease. In 2018 the Lancet reported that radiotherapy to the prostate improved survival in men with a low metastatic burden but not overall, and low-volume prostate radiotherapy entered guidelines. In 2022 the Lancet reported that two years of abiraterone improved metastasis-free and overall survival in high-risk non-metastatic disease, and that adding enzalutamide brought toxicity without benefit; the Lancet Oncology in 2023 confirmed the same for enzalutamide in metastatic disease. The metformin comparison, reported at ESMO in 2024 and since published, found no overall survival benefit from adding metformin for men starting hormone therapy for metastatic disease. The transdermal oestradiol comparison, run with PATCH, showed that oestrogen patches suppress testosterone as well as injections with fewer hot flushes, better bone health and no excess of cardiovascular events (Lancet 2021).\n\nSTAMPEDE is the proof that a single academic platform with a shared control arm can answer a decade of questions faster and more cheaply than separate trials, and its multi-arm multi-stage design is now used across cancer and beyond. Its weaknesses are the ones every platform inherits: the control arm changed as docetaxel and then abiraterone became standard, so later arms were compared with a moving baseline, and some comparisons (radiotherapy, enzalutamide) were read in subgroups defined after the fact. The successor, STAMPEDE2, opened in 2023 with comparisons of stereotactic radiotherapy to metastases, lutetium PSMA radioligand therapy and niraparib with abiraterone in men starting treatment for metastatic disease.",
    "result": "Abiraterone + ADT: OS HR 0.63 in mHSPC; docetaxel + ADT: OS HR 0.78. Prostate radiotherapy improved survival in low-volume metastatic disease; abiraterone improved survival in high-risk non-metastatic disease; enzalutamide added to abiraterone, zoledronic acid, celecoxib and metformin did not improve survival.",
    "drugs": [
      "abiraterone",
      "docetaxel",
      "enzalutamide"
    ],
    "indications": [
      "prostate",
      "prostate-mhspc",
      "prostate-high-risk"
    ],
    "institutions": [
      "royal-marsden"
    ],
    "terms": [
      "mcrpc-mhspc"
    ],
    "people": [
      "silke-gillessen"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT00268476",
        "url": "https://clinicaltrials.gov/study/NCT00268476"
      },
      {
        "label": "James et al., Lancet 2016: addition of docetaxel, zoledronic acid, or both to first-line long-term hormone therapy in prostate cancer (STAMPEDE)",
        "url": "https://doi.org/10.1016/S0140-6736(15)01037-5"
      },
      {
        "label": "James et al., NEJM 2017: abiraterone for prostate cancer not previously treated with hormone therapy (STAMPEDE)",
        "url": "https://doi.org/10.1056/NEJMoa1702900"
      },
      {
        "label": "Parker et al., Lancet 2018: radiotherapy to the primary tumour for newly diagnosed, metastatic prostate cancer (STAMPEDE)",
        "url": "https://doi.org/10.1016/S0140-6736(18)32486-3"
      },
      {
        "label": "Attard et al., Lancet 2022: abiraterone acetate and prednisolone with or without enzalutamide for high-risk non-metastatic prostate cancer (STAMPEDE)",
        "url": "https://doi.org/10.1016/S0140-6736(21)02437-5"
      },
      {
        "label": "Attard et al., Lancet Oncology 2023: abiraterone plus prednisolone with or without enzalutamide for metastatic prostate cancer starting ADT (STAMPEDE)",
        "url": "https://doi.org/10.1016/S1470-2045(23)00148-1"
      },
      {
        "label": "Langley et al., Lancet 2021: transdermal oestradiol for androgen suppression in prostate cancer, long-term cardiovascular outcomes from PATCH",
        "url": "https://doi.org/10.1016/S0140-6736(21)00100-8"
      },
      {
        "label": "STAMPEDE trial website (MRC CTU at UCL)",
        "url": "https://www.stampedetrial.org"
      }
    ],
    "enrolled": 11992,
    "outcomes": [
      {
        "endpoint": "Overall survival, abiraterone arm (M1 subgroup)",
        "primary": true,
        "unit": "%",
        "arms": [
          {
            "name": "ADT + abiraterone",
            "note": "6-year OS 60%"
          },
          {
            "name": "ADT alone",
            "note": "6-year OS 45%"
          }
        ],
        "hr": 0.6,
        "ci": [
          0.5,
          0.71
        ],
        "source": "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(22)00367-1/fulltext"
      },
      {
        "endpoint": "Overall survival, docetaxel arm (M1)",
        "unit": "months",
        "arms": [
          {
            "name": "ADT + docetaxel",
            "value": 60
          },
          {
            "name": "ADT alone",
            "value": 45
          }
        ],
        "hr": 0.76,
        "source": "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(15)01037-5/fulltext"
      }
    ],
    "replication": "Abiraterone result replicated by LATITUDE; docetaxel result replicated by CHAARTED."
  },
  {
    "kind": "trial",
    "asOf": "2026-09-06",
    "id": "therap",
    "name": "TheraP (ANZUP 1603)",
    "nct": "NCT03392428",
    "phase": "2",
    "status": "positive",
    "yearReported": 2021,
    "sponsor": "ANZUP / Peter MacCallum",
    "setting": "mCRPC after docetaxel: 177Lu-PSMA-617 vs cabazitaxel, PSMA PET/FDG PET selected",
    "tldr": "The randomised trial that first pitted a radioligand against chemotherapy and won on response, with fewer side effects.",
    "summary": "TheraP, ANZUP trial 1603, NCT03392428, sponsored by ANZUP and Peter MacCallum and reported in 2021, was the randomised phase 2 that first pitted a radioligand against chemotherapy, comparing 177Lu-PSMA-617 with cabazitaxel in metastatic castration-resistant prostate cancer after docetaxel, with patients selected by PSMA and FDG PET. It randomised 200 men, met its primary endpoint with a PSA response of at least fifty percent in 66 percent of men against 37 percent, delayed progression and gave better quality of life with fewer side effects, but overall survival was similar in the 2024 analysis after crossover. Nuclide links it to radioligand therapy, PSMA PET, lutetium-177 vipivotide tetraxetan, cabazitaxel, Michael Hofman and the PSA50 term, and it is consistent with VISION on activity. The survival equivalence with cabazitaxel is the nuance that matters for sequencing, which remains open.",
    "result": "PSA50 66% vs 37%; OS HR 0.97.",
    "drugs": [
      "pluvicto",
      "cabazitaxel"
    ],
    "indications": [
      "prostate",
      "prostate-mcrpc"
    ],
    "technologies": [
      "radioligand-therapy",
      "psma-pet"
    ],
    "institutions": [
      "peter-mac"
    ],
    "terms": [
      "psa50"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT03392428",
        "url": "https://clinicaltrials.gov/study/NCT03392428"
      }
    ],
    "people": [
      "hofman-michael"
    ],
    "enrolled": 201,
    "outcomes": [
      {
        "endpoint": "PSA response ≥50%",
        "primary": true,
        "unit": "%",
        "arms": [
          {
            "name": "177Lu-PSMA-617",
            "n": 99,
            "value": 66
          },
          {
            "name": "Cabazitaxel",
            "n": 101,
            "value": 37
          }
        ],
        "p": "<0.0001",
        "source": "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(21)00237-3/fulltext"
      },
      {
        "endpoint": "Overall survival",
        "unit": "months",
        "arms": [
          {
            "name": "177Lu-PSMA-617",
            "value": 19.1,
            "note": "Not different"
          },
          {
            "name": "Cabazitaxel",
            "value": 19.6
          }
        ],
        "hr": 0.97,
        "source": "https://www.thelancet.com/journals/lanonc/article/PIIS1470-2045(23)00529-6/fulltext"
      }
    ],
    "replication": "Consistent with VISION on activity; the OS equivalence with cabazitaxel is an important nuance for sequencing."
  },
  {
    "kind": "trial",
    "asOf": "2026-09-04",
    "id": "vision",
    "name": "VISION",
    "nct": "NCT03511664",
    "phase": "3",
    "status": "positive",
    "yearReported": 2021,
    "sponsor": "Novartis",
    "setting": "PSMA+ metastatic castration-resistant prostate cancer after ARPI and taxane: 177Lu-PSMA-617 + SOC vs SOC",
    "tldr": "VISION was the trial that established radioligand therapy in prostate cancer.",
    "summary": "VISION, trial NCT03511664 sponsored by Novartis and published in the New England Journal of Medicine in 2021, was the trial that established radioligand therapy in prostate cancer. It randomised 831 men with PSMA-positive metastatic castration-resistant prostate cancer after an androgen receptor pathway inhibitor and a taxane to 177Lu-PSMA-617 plus standard care or standard care alone, selected by PSMA PET, and met both primary endpoints of overall and radiographic progression-free survival. Whether radioligand therapy should now be given before chemotherapy or even at diagnosis, as PSMAfore and PSMAddition test, is the open question.",
    "result": "OS HR 0.62.",
    "drugs": [
      "pluvicto"
    ],
    "indications": [
      "prostate",
      "prostate-mcrpc"
    ],
    "targets": [
      "psma"
    ],
    "technologies": [
      "radioligand-therapy",
      "psma-pet"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov NCT03511664",
        "url": "https://clinicaltrials.gov/study/NCT03511664"
      }
    ],
    "people": [
      "oliver-sartor",
      "ken-herrmann",
      "michael-morris"
    ],
    "enrolled": 861,
    "outcomes": [
      {
        "endpoint": "Overall survival",
        "primary": true,
        "unit": "months",
        "arms": [
          {
            "name": "177Lu-PSMA-617 + standard care",
            "n": 551,
            "value": 15.3
          },
          {
            "name": "Standard care",
            "n": 280,
            "value": 11.3
          }
        ],
        "hr": 0.62,
        "ci": [
          0.52,
          0.74
        ],
        "p": "<0.001",
        "source": "https://www.nejm.org/doi/full/10.1056/NEJMoa2107322"
      },
      {
        "endpoint": "Radiographic progression-free survival",
        "primary": true,
        "unit": "months",
        "arms": [
          {
            "name": "177Lu-PSMA-617 + standard care",
            "value": 8.7
          },
          {
            "name": "Standard care",
            "value": 3.4
          }
        ],
        "hr": 0.4,
        "ci": [
          0.29,
          0.57
        ],
        "p": "<0.001",
        "source": "https://www.nejm.org/doi/full/10.1056/NEJMoa2107322"
      }
    ],
    "replication": "Consistent with TheraP (phase 2, 177Lu-PSMA-617 vs cabazitaxel: higher PSA response, similar OS) and with PSMAfore in an earlier line."
  }
];
