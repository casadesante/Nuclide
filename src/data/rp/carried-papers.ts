/**
 * Papers: records carried over from Nuclide.
 *
 * Carried over from the Nuclide corpus (https://github.com/casadesante/Nuclide), CC BY-NC 4.0, and narrowed to
 * radiopharmaceutical use. Facts and sources are as Nuclide held them on the `asOf` date of each record;
 * check anything that matters at the primary source each record links.
 */
import type { EntityInput } from "@/lib/schema";

export const carriedPapers: EntityInput[] = [
  {
    "kind": "paper",
    "asOf": "2026-09-17",
    "id": "paper-alsympca-radium-223-nejm-2013",
    "name": "ALSYMPCA: alpha emitter radium-223 and survival in metastatic prostate cancer with bone metastases",
    "tldr": "Radium-223, an injected alpha-emitting radioisotope that homes to bone, lengthened survival and delayed skeletal complications in men with castration-resistant prostate cancer that had spread to bone but not to organs.",
    "summary": "Phase 3 placebo-controlled trial of 921 men with castration-resistant prostate cancer, symptomatic bone metastases and no visceral disease, randomised 2:1 to six injections of radium-223 or placebo with best standard of care.\n\nMedian overall survival was 14.9 versus 11.3 months (hazard ratio 0.70), time to first symptomatic skeletal event was delayed (15.6 versus 9.8 months) and myelosuppression was mild.",
    "journal": "New England Journal of Medicine",
    "year": 2013,
    "doi": "10.1056/NEJMoa1213755",
    "pmid": "23863050",
    "authors": "Parker C, Nilsson S, Heinrich D, et al.",
    "paperType": "rct",
    "participants": 921,
    "changedPractice": true,
    "findings": [
      "Median overall survival 14.9 vs 11.3 months; hazard ratio 0.70.",
      "Time to first symptomatic skeletal event 15.6 vs 9.8 months."
    ],
    "whatItMeans": "Radium-223 is an option for symptomatic bone-predominant castration-resistant prostate cancer, now less used since lutetium-PSMA, and should not be combined with abiraterone after the ERA 223 fracture signal.",
    "caveats": [
      "No effect on PSA or soft tissue disease.",
      "Combination with abiraterone increased fractures and deaths in ERA 223."
    ],
    "links": [
      {
        "label": "N Engl J Med 2013",
        "url": "https://doi.org/10.1056/NEJMoa1213755"
      },
      {
        "label": "PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/23863050/"
      }
    ],
    "indications": [
      "prostate-mcrpc"
    ],
    "trials": [
      "alsympca"
    ],
    "journals": [
      "nejm"
    ],
    "people": [
      "chris-parker"
    ]
  },
  {
    "kind": "paper",
    "asOf": "2026-09-17",
    "id": "paper-cabinet-cabozantinib-nejm-2024",
    "name": "CABINET (Alliance A021602): cabozantinib for advanced neuroendocrine tumours",
    "tldr": "Cabozantinib delayed progression in previously treated advanced neuroendocrine tumours of both pancreatic and extra-pancreatic origin compared with placebo, adding a new option after somatostatin analogues, everolimus or radioligand therapy.",
    "summary": "Two parallel phase 3 placebo-controlled trials of cabozantinib in 298 patients with progressive advanced neuroendocrine tumours: 203 with extra-pancreatic (including lung and small bowel) and 95 with pancreatic tumours, all previously treated.\n\nMedian progression-free survival was 8.4 versus 3.9 months in extra-pancreatic tumours (hazard ratio 0.38) and 13.8 versus 4.4 months in pancreatic tumours (hazard ratio 0.23); hypertension, fatigue and diarrhoea were common.",
    "journal": "New England Journal of Medicine",
    "year": 2025,
    "doi": "10.1056/NEJMoa2403991",
    "pmid": "39282913",
    "authors": "Chan JA, Geyer S, Zemla T, et al.",
    "paperType": "rct",
    "participants": 298,
    "changedPractice": true,
    "findings": [
      "Extra-pancreatic: median progression-free survival 8.4 vs 3.9 months; hazard ratio 0.38.",
      "Pancreatic: 13.8 vs 4.4 months; hazard ratio 0.23."
    ],
    "whatItMeans": "Cabozantinib is approved for previously treated neuroendocrine tumours of any origin and is a standard later-line choice, including for lung carcinoids.",
    "caveats": [
      "Trials stopped early at interim analysis; overall survival not powered.",
      "Dose reductions needed in most patients."
    ],
    "links": [
      {
        "label": "N Engl J Med 2025",
        "url": "https://doi.org/10.1056/NEJMoa2403991"
      },
      {
        "label": "PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/39282913/"
      }
    ],
    "indications": [
      "lung-net",
      "pancreatic-net",
      "small-intestinal-net"
    ],
    "drugs": [
      "cabozantinib"
    ],
    "trials": [
      "cabinet"
    ],
    "journals": [
      "nejm"
    ]
  },
  {
    "kind": "paper",
    "asOf": "2026-09-17",
    "id": "paper-clarinet-lanreotide-nejm-2014",
    "name": "CLARINET: lanreotide in metastatic enteropancreatic neuroendocrine tumours",
    "tldr": "The long-acting somatostatin analogue lanreotide roughly halved the risk of progression in non-functioning gut and pancreatic neuroendocrine tumours, extending the use of these drugs from symptom control to slowing tumour growth.",
    "summary": "Phase 3 placebo-controlled trial of 204 patients with advanced, well- or moderately differentiated, non-functioning, somatostatin receptor-positive enteropancreatic neuroendocrine tumours (Ki-67 under 10 percent) randomised to lanreotide autogel 120 mg monthly or placebo.\n\nMedian progression-free survival was not reached with lanreotide against 18.0 months with placebo (hazard ratio 0.47), with benefit in pancreatic and midgut tumours and in patients with high hepatic tumour load.",
    "journal": "New England Journal of Medicine",
    "year": 2014,
    "doi": "10.1056/NEJMoa1316158",
    "pmid": "25014687",
    "authors": "Caplin ME, Pavel M, Ćwikła JB, et al.",
    "paperType": "rct",
    "participants": 204,
    "changedPractice": true,
    "findings": [
      "Progression-free survival hazard ratio 0.47.",
      "24-month progression-free survival 65.1 percent vs 33.0 percent."
    ],
    "whatItMeans": "Somatostatin analogues are the standard first-line antiproliferative treatment for grade 1 to 2 gastroenteropancreatic neuroendocrine tumours whether or not they cause a hormone syndrome.",
    "caveats": [
      "Most patients had stable disease at entry, so the natural history was slow.",
      "No overall survival benefit shown."
    ],
    "links": [
      {
        "label": "N Engl J Med 2014",
        "url": "https://doi.org/10.1056/NEJMoa1316158"
      },
      {
        "label": "PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/25014687/"
      }
    ],
    "indications": [
      "pancreatic-net",
      "small-intestinal-net"
    ],
    "journals": [
      "nejm"
    ]
  },
  {
    "kind": "paper",
    "asOf": "2026-09-08",
    "id": "paper-detect-a-science-2020",
    "name": "DETECT-A: a blood test plus PET-CT found treatable cancers in 10,000 women with no symptoms",
    "journal": "Science",
    "year": 2020,
    "doi": "10.1126/science.abb9601",
    "pmid": "32345712",
    "authors": "Lennon AM, Buchanan AH, Kinde I, et al.",
    "paperType": "observational",
    "participants": 10006,
    "changedPractice": false,
    "tldr": "The first prospective interventional study of a multi-analyte blood test (CancerSEEK) in asymptomatic people: 26 cancers were first detected by the blood test, most of them localised, and the test roughly doubled the number of cancers caught by standard screening.",
    "summary": "DETECT-A enrolled 10,006 women aged 65-75 with no history of cancer in the Geisinger health system. A blood test measuring mutations in cell-free DNA and protein markers (CancerSEEK) was performed; a confirmed positive led to whole-body PET-CT, and imaging-positive participants were referred for diagnosis.\n\nTwenty-six cancers were detected by the blood test, of which 17 were localised or regional and 12 were treated with surgery with intent to cure. Standard-of-care screening detected a further 24 cancers, so combining the blood test with existing screening roughly doubled detection (from about a quarter to about half of incident cancers). Fewer than 1% of participants had an unnecessary invasive procedure.\n\nIt proved that a blood-first screening pathway can be safely operationalised and that many blood-detected cancers are at a curable stage.",
    "findings": [
      "Blood test alone detected 26 of 96 incident cancers (about 27% sensitivity); with standard screening the combined sensitivity was about 52%",
      "17 of 26 blood-detected cancers were localised or regional; 12 patients had surgery with curative intent",
      "The blood test found cancers in organs with no standard screening (ovary, kidney, appendix, uterus, lymphoma)",
      "Participants did not reduce their uptake of standard screening after joining the study"
    ],
    "whatItMeans": "A blood test can find early, treatable cancers in people who feel well, including cancers for which no screening exists. It is not a replacement for mammography or colonoscopy but a possible addition. Larger randomised trials are needed to show benefit outweighs harm.",
    "caveats": [
      "Single-arm, single health system, women only; no mortality endpoint",
      "Sensitivity of about a quarter for all incident cancers means most cancers were missed",
      "PET-CT confirmation for all positives is costly and exposes participants to radiation",
      "CancerSEEK's commercial successor tests differ in design, so performance does not transfer directly"
    ],
    "links": [
      {
        "label": "DOI",
        "url": "https://doi.org/10.1126/science.abb9601"
      },
      {
        "label": "ClinicalTrials.gov NCT03934866",
        "url": "https://clinicaltrials.gov/study/NCT03934866"
      }
    ],
    "technologies": [
      "pet-ct"
    ],
    "institutions": [
      "johns-hopkins"
    ]
  },
  {
    "kind": "paper",
    "asOf": "2026-09-17",
    "id": "paper-netter-1-nejm-2017",
    "name": "NETTER-1: 177Lu-Dotatate for midgut neuroendocrine tumours progressing on octreotide",
    "tldr": "Radioligand therapy with lutetium-177 dotatate reduced the risk of progression or death by nearly 80 percent compared with high-dose octreotide in midgut neuroendocrine tumours, the first randomised proof that targeted radiation works in these cancers.",
    "summary": "Phase 3 trial of 229 patients with advanced, progressive, somatostatin receptor-positive midgut neuroendocrine tumours randomised to four cycles of 177Lu-Dotatate plus octreotide LAR 30 mg or high-dose octreotide LAR 60 mg.\n\nProgression-free survival at 20 months was 65.2 versus 10.8 percent (hazard ratio 0.21), response 18 versus 3 percent, and an interim analysis suggested improved overall survival; myelosuppression was modest.",
    "journal": "New England Journal of Medicine",
    "year": 2017,
    "doi": "10.1056/NEJMoa1607427",
    "pmid": "28076709",
    "authors": "Strosberg J, El-Haddad G, Wolin E, et al.",
    "paperType": "rct",
    "participants": 229,
    "changedPractice": true,
    "findings": [
      "Progression-free survival hazard ratio 0.21; 20-month rate 65.2 percent vs 10.8 percent.",
      "Objective response 18 percent vs 3 percent."
    ],
    "whatItMeans": "Lutetium-177 dotatate is a standard treatment for progressive small bowel neuroendocrine tumours after somatostatin analogues, and NETTER-2 has since moved it into first-line use for higher-grade tumours.",
    "caveats": [
      "Final overall survival difference (48.0 vs 36.3 months) did not reach significance, partly because of crossover.",
      "Rare late myelodysplasia and leukaemia."
    ],
    "links": [
      {
        "label": "N Engl J Med 2017",
        "url": "https://doi.org/10.1056/NEJMoa1607427"
      },
      {
        "label": "PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/28076709/"
      }
    ],
    "indications": [
      "small-intestinal-net"
    ],
    "trials": [
      "netter-1"
    ],
    "journals": [
      "nejm"
    ]
  },
  {
    "kind": "paper",
    "asOf": "2026-09-08",
    "id": "paper-netter-2-lancet-2024",
    "name": "NETTER-2: lutetium-177 dotatate as first treatment for higher-grade gastroenteropancreatic neuroendocrine tumours",
    "tldr": "Using the radioactive drug lutetium dotatate as the first treatment for faster-growing neuroendocrine tumours, rather than saving it for later, nearly tripled the time without progression compared with high-dose octreotide.",
    "summary": "Open-label phase 3 trial of 226 patients with newly diagnosed, somatostatin-receptor-positive grade 2-3 (Ki-67 10-55%) advanced gastroenteropancreatic neuroendocrine tumours randomised 2:1 to four cycles of 177Lu-dotatate plus octreotide LAR 30 mg or high-dose octreotide LAR (60 mg). Primary endpoint was PFS by blinded review.\n\nMedian PFS was 22.8 vs 8.5 months (HR 0.28) with an objective response rate of 43% vs 9%. Following NETTER-1 (which established lutetium dotatate in progressive midgut tumours), it moved radioligand therapy to the first line for higher-grade disease, where somatostatin analogues alone are weak.",
    "journal": "The Lancet",
    "year": 2024,
    "doi": "10.1016/S0140-6736(24)00701-3",
    "pmid": "38851203",
    "authors": "Singh S, Halperin D, Myrehaug S, et al.",
    "paperType": "rct",
    "participants": 226,
    "changedPractice": true,
    "findings": [
      "Median PFS 22.8 vs 8.5 months; HR 0.28 (95% CI 0.18-0.42).",
      "Objective response 43.0% vs 9.3%.",
      "Benefit consistent in grade 2 and grade 3 tumours and in pancreatic and small-bowel primaries.",
      "Grade 3 or higher adverse events about 35% vs 28%; no cases of treatment-related myelodysplasia or leukaemia at the primary analysis.",
      "Overall survival data immature; crossover to lutetium dotatate was permitted at progression."
    ],
    "whatItMeans": "Patients newly diagnosed with an advanced grade 2 or 3 neuroendocrine tumour of the gut or pancreas that shows somatostatin receptors on imaging can now receive lutetium dotatate as their first treatment, gaining more than a year of additional disease control and a much higher chance of tumour shrinkage. It does not settle whether radioligand therapy is better than other first-line options such as capecitabine-temozolomide or everolimus, and long-term marrow safety with earlier use needs surveillance.",
    "caveats": [
      "Comparator was high-dose octreotide, which has limited anti-proliferative activity in grade 2-3 tumours.",
      "Overall survival not yet shown; crossover will make it hard to demonstrate.",
      "Long-term risks of earlier radioligand exposure (marrow, kidney, secondary leukaemia) require follow-up.",
      "Requires somatostatin-receptor PET and nuclear medicine capacity; grade 3 tumours with Ki-67 above 55% were excluded."
    ],
    "links": [
      {
        "label": "PubMed search: NETTER-2 Lancet 2024",
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=NETTER-2+lutetium+dotatate+first-line+Singh+Lancet"
      },
      {
        "label": "ClinicalTrials.gov NCT03972488",
        "url": "https://clinicaltrials.gov/study/NCT03972488"
      }
    ],
    "indications": [
      "neuroendocrine"
    ],
    "drugs": [
      "lutathera"
    ],
    "targets": [
      "sstr2"
    ],
    "technologies": [
      "radioligand-therapy",
      "pet-ct"
    ],
    "terms": [
      "theranostics",
      "dosimetry"
    ],
    "companies": [
      "novartis"
    ],
    "journals": [
      "lancet"
    ]
  },
  {
    "kind": "paper",
    "asOf": "2026-09-17",
    "id": "paper-propsma-hofman-lancet-2020",
    "name": "proPSMA: PSMA PET-CT versus conventional imaging for staging high-risk prostate cancer",
    "tldr": "PSMA PET-CT was 27 percentage points more accurate than CT and bone scan for finding spread in men with high-risk prostate cancer before treatment, with less radiation and more influence on management, and it has replaced conventional imaging where available.",
    "summary": "Randomised multicentre trial of 302 men with high-risk localised prostate cancer randomised to conventional imaging (CT and bone scan) or gallium-68 PSMA PET-CT for staging, with crossover imaging to define a reference standard.\n\nAccuracy was 92 percent for PSMA PET-CT against 65 percent for conventional imaging, with higher sensitivity (85 versus 38 percent) and specificity, fewer equivocal results, lower radiation dose and more frequent management change.",
    "journal": "The Lancet",
    "year": 2020,
    "doi": "10.1016/S0140-6736(20)30314-7",
    "pmid": "32209449",
    "authors": "Hofman MS, Lawrentschuk N, Francis RJ, et al.",
    "paperType": "rct",
    "participants": 302,
    "changedPractice": true,
    "findings": [
      "Accuracy 92 percent vs 65 percent (27 percent absolute difference).",
      "Sensitivity 85 percent vs 38 percent; specificity 98 percent vs 91 percent."
    ],
    "whatItMeans": "PSMA PET-CT is the preferred staging investigation for high-risk prostate cancer and for biochemical recurrence, though most treatment trials were designed with conventional imaging.",
    "caveats": [
      "Reference standard relied partly on imaging follow-up rather than histology.",
      "Detecting more disease does not by itself prove better outcomes."
    ],
    "links": [
      {
        "label": "Lancet 2020",
        "url": "https://doi.org/10.1016/S0140-6736(20)30314-7"
      },
      {
        "label": "PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/32209449/"
      }
    ],
    "indications": [
      "prostate-bcr",
      "prostate-high-risk"
    ],
    "trials": [
      "propsma"
    ],
    "journals": [
      "lancet"
    ]
  },
  {
    "kind": "paper",
    "asOf": "2026-09-18",
    "id": "paper-pryma-high-specific-activity-i131-mibg-ppgl-jnm-2019",
    "name": "Efficacy and safety of high-specific-activity 131I-MIBG therapy in advanced pheochromocytoma or paraganglioma",
    "tldr": "A purified radioactive form of MIBG, taken up by adrenaline-producing tumour cells, let a quarter of patients halve their blood pressure medication for at least six months and shrank tumours in about one in five, leading to the first approved radiopharmaceutical for these tumours.",
    "summary": "Open-label single-arm multicentre phase 2 study of high-specific-activity iobenguane I-131 in patients with MIBG-avid unresectable or metastatic pheochromocytoma or paraganglioma, given as up to two therapeutic doses; 68 patients received at least one dose.\n\nAbout a quarter of patients achieved the primary endpoint of at least a 50 percent reduction in antihypertensive medication for six months or more, objective responses occurred in about 22 percent, and most patients had disease control; myelosuppression was the main toxicity. The FDA approved the product (Azedra) in 2018.",
    "journal": "Journal of Nuclear Medicine",
    "year": 2019,
    "doi": "10.2967/jnumed.118.217463",
    "pmid": "30291194",
    "authors": "Pryma DA, Chin BB, Noto RB, et al.",
    "paperType": "observational",
    "participants": 68,
    "changedPractice": true,
    "findings": [
      "At least a 50 percent reduction in antihypertensive medication for six months or longer in about a quarter of patients.",
      "Objective tumour response in about 22 percent; myelosuppression was the main adverse effect."
    ],
    "whatItMeans": "Radionuclide therapy is a standard option for MIBG-avid metastatic pheochromocytoma and paraganglioma; somatostatin receptor targeted lutetium therapy is the alternative for SSTR-avid disease.",
    "caveats": [
      "Single-arm study with a blood pressure medication endpoint rather than survival.",
      "The commercial product was later withdrawn from the US market for business reasons, limiting access."
    ],
    "links": [
      {
        "label": "J Nucl Med 2019",
        "url": "https://doi.org/10.2967/jnumed.118.217463"
      },
      {
        "label": "PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/30291194/"
      }
    ],
    "indications": [
      "metastatic-ppgl"
    ],
    "drugs": [
      "i131-mibg"
    ],
    "journals": [
      "journal-of-nuclear-medicine"
    ]
  },
  {
    "kind": "paper",
    "asOf": "2026-09-18",
    "id": "paper-rathl-interim-pet-adapted-abvd-advanced-hodgkin-nejm-2016",
    "name": "RATHL: adapted treatment guided by interim PET-CT in advanced Hodgkin lymphoma",
    "tldr": "Using a PET scan after two cycles to decide the rest of treatment let patients with a clear scan drop bleomycin, sparing their lungs without losing cure, while those with a positive scan were escalated to stronger chemotherapy.",
    "summary": "International randomised trial of 1,214 patients with advanced Hodgkin lymphoma who had an interim PET-CT after two cycles of ABVD; PET-negative patients were randomised to continue ABVD or switch to AVD (omitting bleomycin), and PET-positive patients were escalated to BEACOPP.\n\nThree-year progression-free survival was 85.7 percent with ABVD and 84.4 percent with AVD, with fewer pulmonary adverse events after bleomycin was dropped; PET-positive patients escalated to BEACOPP had a three-year progression-free survival of 67.5 percent, better than expected. PET-adapted therapy became standard.",
    "journal": "New England Journal of Medicine",
    "year": 2016,
    "doi": "10.1056/NEJMoa1510093",
    "pmid": "27332902",
    "authors": "Johnson P, Federico M, Kirkwood A, et al.",
    "paperType": "rct",
    "participants": 1214,
    "changedPractice": true,
    "findings": [
      "Three-year progression-free survival 85.7 percent with continued ABVD versus 84.4 percent with AVD after a negative interim PET.",
      "Fewer pulmonary and other toxic effects without bleomycin; PET-positive patients escalated to BEACOPP had 67.5 percent three-year progression-free survival."
    ],
    "whatItMeans": "An interim PET scan after two cycles guides treatment of advanced Hodgkin lymphoma: drop bleomycin if negative, intensify if positive.",
    "caveats": [
      "The non-inferiority margin for AVD was not formally met in the intention-to-treat analysis, though the difference was small.",
      "Predates brentuximab vedotin and nivolumab combinations, which now often replace ABVD."
    ],
    "links": [
      {
        "label": "N Engl J Med 2016",
        "url": "https://doi.org/10.1056/NEJMoa1510093"
      },
      {
        "label": "PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/27332902/"
      }
    ],
    "trials": [
      "rathl"
    ],
    "journals": [
      "nejm"
    ]
  },
  {
    "kind": "paper",
    "asOf": "2026-09-17",
    "id": "paper-sempet-de-santis-jco-2004",
    "name": "SEMPET: FDG-PET as a predictor of viable tumour in post-chemotherapy seminoma residuals",
    "tldr": "A PET scan reliably told apart residual masses that still contained living seminoma from scar tissue after chemotherapy, allowing surgeons to leave PET-negative masses alone rather than operating on all masses over 3 cm.",
    "summary": "Prospective multicentre study of 51 patients with metastatic seminoma and residual masses after chemotherapy who underwent FDG-PET, with results validated against histology or clinical follow-up.\n\nPET had a sensitivity of 80 percent and specificity of 100 percent for viable tumour, and for residual lesions over 3 cm specificity and sensitivity were both 100 percent, outperforming CT size criteria.",
    "journal": "Journal of Clinical Oncology",
    "year": 2004,
    "doi": "10.1200/JCO.2004.07.188",
    "pmid": "15020605",
    "authors": "De Santis M, Becherer A, Bokemeyer C, et al.",
    "paperType": "observational",
    "participants": 51,
    "changedPractice": true,
    "findings": [
      "Specificity 100 percent, sensitivity 80 percent for viable residual seminoma.",
      "Sensitivity and specificity 100 percent for lesions over 3 cm."
    ],
    "whatItMeans": "FDG-PET is standard for residual seminoma masses larger than 3 cm after chemotherapy, sparing most men surgery.",
    "caveats": [
      "Small study; false positives occur when PET is done too soon after chemotherapy, so scans are delayed at least six weeks."
    ],
    "links": [
      {
        "label": "J Clin Oncol 2004",
        "url": "https://doi.org/10.1200/JCO.2004.07.188"
      },
      {
        "label": "PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/15020605/"
      }
    ],
    "journals": [
      "jco"
    ]
  },
  {
    "kind": "paper",
    "asOf": "2026-09-08",
    "id": "paper-vision-nejm-2021",
    "name": "VISION: lutetium-177 PSMA-617 radioligand therapy extends survival in advanced prostate cancer",
    "tldr": "A radioactive drug that homes to the PSMA protein on prostate cancer cells helped men with heavily pretreated metastatic prostate cancer live about four months longer, launching radioligand therapy as a mainstream treatment.",
    "summary": "Open-label phase 3 trial of 831 men with PSMA-PET-positive metastatic castration-resistant prostate cancer previously treated with at least one androgen-receptor pathway inhibitor and one or two taxanes, randomised 2:1 to 177Lu-PSMA-617 (7.4 GBq every six weeks for up to six cycles) plus protocol-permitted standard care, or standard care alone. Primary endpoints were radiographic PFS and OS.\n\nMedian OS was 15.3 vs 11.3 months (HR 0.62) and median rPFS 8.7 vs 3.4 months (HR 0.40). It led to FDA and EMA approval of Pluvicto in 2022, the first radioligand therapy to show a survival benefit in a common cancer, and made PSMA PET a theranostic gatekeeper.",
    "journal": "New England Journal of Medicine",
    "year": 2021,
    "doi": "10.1056/NEJMoa2107322",
    "authors": "Sartor O, de Bono J, Chi KN, et al.",
    "paperType": "rct",
    "participants": 831,
    "changedPractice": true,
    "findings": [
      "Median overall survival 15.3 vs 11.3 months; HR 0.62 (95% CI 0.52-0.74).",
      "Median radiographic PFS 8.7 vs 3.4 months; HR 0.40 (99.2% CI 0.29-0.57).",
      "PSA decline of 50% or more in 46% vs 7%; objective response in measurable disease 30% vs 2%.",
      "Grade 3 or higher adverse events 53% vs 38%, mainly anaemia, thrombocytopenia and fatigue; dry mouth was common but rarely severe.",
      "About 13% of screened patients were excluded by PSMA PET (PSMA-negative lesions), and early dropout in the control arm required protocol changes."
    ],
    "whatItMeans": "Men with metastatic castration-resistant prostate cancer that has progressed after hormonal therapy and chemotherapy, and whose tumours show PSMA on a PET scan, can now receive lutetium-PSMA, which extends life, controls pain and is usually better tolerated than further chemotherapy. It has established a new treatment class in which a scan decides who gets the matching radioactive drug, and it is now being tested earlier in the disease (PSMAfore, PSMAddition).",
    "caveats": [
      "Standard care in the control arm excluded chemotherapy, radium-223 and other active drugs, and about 56% of control patients withdrew early, weakening the comparison.",
      "Open-label; the OS benefit is nonetheless robust to sensitivity analyses.",
      "Requires nuclear medicine infrastructure, isotope supply and PSMA PET access, which are unequally distributed.",
      "PSMAfore in the pre-chemotherapy setting improved rPFS but not OS, because most control patients crossed over."
    ],
    "links": [
      {
        "label": "NEJM 2021",
        "url": "https://doi.org/10.1056/NEJMoa2107322"
      },
      {
        "label": "ClinicalTrials.gov NCT03511664",
        "url": "https://clinicaltrials.gov/study/NCT03511664"
      }
    ],
    "indications": [
      "prostate"
    ],
    "drugs": [
      "pluvicto"
    ],
    "targets": [
      "psma"
    ],
    "technologies": [
      "radioligand-therapy",
      "psma-pet",
      "pet-ct"
    ],
    "trials": [
      "vision",
      "psmafore"
    ],
    "terms": [
      "theranostics",
      "alpha-vs-beta",
      "dosimetry"
    ],
    "companies": [
      "novartis"
    ],
    "people": [
      "karim-fizazi",
      "michael-morris"
    ],
    "related": [
      "psma-pet-to-rlt"
    ],
    "journals": [
      "nejm"
    ]
  }
];
