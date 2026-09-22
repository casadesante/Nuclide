/**
 * Agents: records carried over from Nuclide.
 *
 * Carried over from the Nuclide corpus (https://github.com/casadesante/Nuclide), CC BY-NC 4.0, and narrowed to
 * radiopharmaceutical use. Facts and sources are as Nuclide held them on the `asOf` date of each record;
 * check anything that matters at the primary source each record links.
 */
import type { EntityInput } from "@/lib/schema";

export const carriedAgents: EntityInput[] = [
  {
    "id": "aaa817",
    "kind": "drug",
    "name": "AAA817",
    "aka": [
      "[225Ac]Ac-PSMA-617"
    ],
    "modality": "radioligand",
    "status": "phase-3",
    "asOf": "2026-09-11",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "provenance": {
      "editedBy": "Nuclide ingestion (ClinicalTrials.gov v2 + sponsor pipeline pages)",
      "editedOn": "2026-09-11"
    },
    "mechanism": "Inside the body, AAA817 ([225Ac]Ac-PSMA-617) attaches to PSMA on the surface of prostate cancer cells and emits radiation to kill them; this treatment is also called a radioligand therapy.",
    "tldr": "AAA817 is an experimental radioligand therapy from Novartis Pharmaceuticals in phase 3 trials for prostate cancer, aimed at PSMA.",
    "summary": "AAA817 is a radioligand therapy developed by Novartis Pharmaceuticals. Its target is PSMA (the sponsor names PSMA). The sponsor states: Inside the body, AAA817 ([225Ac]Ac-PSMA-617) attaches to PSMA on the surface of prostate cancer cells and emits radiation to kill them; this treatment is also called a radioligand therapy. ClinicalTrials.gov describes the intervention as: AAA817 is being studied for treating PSMA positive mCRPC. Inside the body, it attaches itself to PSMA on the cell surface of the prostate cancer cells and emits radiation to kill them. This treatment is also called a radioligand therapy. It is the investigational product in 2 recruiting or active industry-led phase 2 and phase 3 interventional cancer trials, including phase 3 studies NCT06855277 (Study Comparing AAA817+ARPI Versus Standard of Care in Adult Participants With PSMA-positive mCRPC) and NCT06780670 (Open-label Study Comparing AAA817 Versus Standard of Care in the Treatment of Previously Treated PSMA-positive mCRPC Adults Who Have Disease Progressed on or After [177Lu]Lu-PSMA Targeted Therapy), in prostate cancer. The largest, NCT06855277, plans to enrol 940 participants with primary completion expected 2028-09-29. Status reflects the highest phase registered on ClinicalTrials.gov; no efficacy results are recorded here.",
    "targets": [
      "psma"
    ],
    "indications": [
      "prostate"
    ],
    "companies": [
      "novartis"
    ],
    "trials": [
      "nct06855277",
      "nct06780670"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov: trials of AAA817",
        "url": "https://clinicaltrials.gov/search?intr=AAA817"
      }
    ]
  },
  {
    "kind": "drug",
    "asOf": "2026-09-06",
    "id": "abiraterone",
    "links": [
      {
        "label": "FDA label (DailyMed)",
        "url": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=Abiraterone%20acetate"
      }
    ],
    "name": "Abiraterone acetate",
    "brand": "Zytiga (generic)",
    "modality": "Small-molecule CYP17A1 inhibitor",
    "status": "approved",
    "wikipedia": "https://en.wikipedia.org/wiki/Abiraterone_acetate",
    "tldr": "Abiraterone is a pill that shuts down testosterone production everywhere, including inside the tumour. Discovered at the Institute of Cancer Research, now generic and used from the first metastatic diagnosis.",
    "summary": "Abiraterone acetate irreversibly inhibits CYP17A1 (17-alpha-hydroxylase and 17,20-lyase), shutting down androgen synthesis in the adrenal glands and inside the tumour, not just the testes; it is given with prednisone to offset mineralocorticoid excess. Its evidence spans advanced prostate cancer: COU-AA-301 and 302 (mCRPC post- and pre-docetaxel), LATITUDE and STAMPEDE (mHSPC, overall survival benefit; LATITUDE OS 53.3 versus 36.5 months, HR 0.66) and PEACE-1 (triplet with docetaxel). Generic since 2018 to 2019, it is the backbone partner for PARP inhibitors (PROpel, MAGNITUDE), capivasertib (CAPItello-281) and Pluvicto (PSMAddition). Open questions are how to choose between abiraterone and the AR antagonists, and which men need a third drug. Discovered at the Institute of Cancer Research, it is the affordable hormone pill most men with metastatic prostate cancer now start at diagnosis.",
    "mechanism": "Irreversible CYP17A1 (17α-hydroxylase/17,20-lyase) inhibition blocks adrenal and intratumoural androgen synthesis.",
    "approvals": [
      {
        "region": "US",
        "year": 2011,
        "indication": "mCRPC after docetaxel"
      },
      {
        "region": "US",
        "year": 2012,
        "indication": "mCRPC pre-chemotherapy"
      },
      {
        "region": "US",
        "year": 2018,
        "indication": "High-risk mHSPC (LATITUDE)"
      }
    ],
    "companies": [
      "johnson-johnson"
    ],
    "indications": [
      "prostate",
      "prostate-mhspc",
      "prostate-mcrpc",
      "prostate-high-risk"
    ],
    "trials": [
      "stampede",
      "nct06520345",
      "nct07611110"
    ],
    "institutions": [
      "royal-marsden"
    ]
  },
  {
    "id": "ac225-psma",
    "trials": [
      "nct07590934"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov: trials of Actinium-225 PSMA agents",
        "url": "https://clinicaltrials.gov/search?intr=225Ac-PSMA-617"
      }
    ],
    "kind": "drug",
    "name": "Actinium-225 PSMA agents",
    "code": "225Ac-PSMA-617, 225Ac-PSMA-I&T, BAY 3563254 (Trillium)",
    "modality": "Targeted alpha therapy",
    "asOf": "2026-09-04",
    "status": "phase-3",
    "tldr": "Alpha-emitting PSMA drugs that produce responses even after Pluvicto fails, held back mainly by isotope supply.",
    "summary": "Novartis (225Ac-PSMA-617, phase 3 AcTION), Bayer (225Ac-PSMA-Trillium with albumin binder, PAnTHA phase 1 at ASCO GU 2026), Fusion/AstraZeneca (FPI-2265, 225Ac-PSMA-I&T, phase 3 AlphaBreak), and academic 225Ac-PSMA data from South Africa and Germany. Xerostomia from salivary uptake is dose-limiting.",
    "mechanism": "PSMA ligand with 225Ac; four alpha emissions per decay chain.",
    "targets": [
      "psma"
    ],
    "technologies": [
      "targeted-alpha-therapy"
    ],
    "companies": [
      "novartis",
      "bayer",
      "fusion-pharma",
      "astrazeneca"
    ],
    "indications": [
      "prostate",
      "prostate-mcrpc"
    ],
    "dosing": {
      "route": "IV infusion",
      "schedule": "Trial regimens ~100 kBq/kg every 6-8 weeks",
      "monitoring": "Salivary gland toxicity (xerostomia), renal function, blood counts",
      "source": "https://clinicaltrials.gov"
    },
    "toxicity": [
      {
        "event": "Xerostomia",
        "note": "Dose-limiting in academic series"
      },
      {
        "event": "Anaemia"
      },
      {
        "event": "Thrombocytopenia"
      },
      {
        "event": "Renal toxicity"
      }
    ],
    "access": [
      {
        "country": "US",
        "reimbursement": "Investigational (phase 3)",
        "asOf": "2026-09-06"
      },
      {
        "country": "DE",
        "reimbursement": "Compassionate use at selected centres (Heidelberg and others)",
        "asOf": "2026-09-06"
      }
    ],
    "regulatoryEvents": [
      {
        "date": "2024-06",
        "type": "filing",
        "region": "US",
        "note": "AstraZeneca completes Fusion Pharmaceuticals acquisition; FPI-2265 phase 3 planned",
        "source": "https://www.fda.gov/drugs/resources-information-approved-drugs/oncology-cancer-hematologic-malignancies-approval-notifications"
      }
    ],
    "mechanismSteps": [
      "Radioligand circulates and binds PSMA on tumour cells",
      "Ligand is internalised or retained at the membrane",
      "Alpha (225Ac) emissions deposit energy within a short range",
      "Clustered DNA double-strand breaks form in the tumour cell and its neighbours (crossfire)",
      "Cells die; unbound ligand is cleared via the kidneys"
    ]
  },
  {
    "id": "al2846",
    "kind": "drug",
    "name": "AL2846",
    "aka": [],
    "modality": "small molecule (structure undisclosed or not yet in PubChem)",
    "status": "phase-3",
    "asOf": "2026-09-11",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "provenance": {
      "editedBy": "Nuclide ingestion (ClinicalTrials.gov v2 + sponsor pipeline pages)",
      "editedOn": "2026-09-11"
    },
    "mechanism": "A multi-target tyrosine kinase inhibitor capsule with significant inhibitory effects on c-MET, c-KIT, VEGFR1 and RET.",
    "tldr": "AL2846 is an experimental small-molecule drug from Chia Tai Tianqing Pharmaceutical in phase 3 trials for thyroid cancer, aimed at MET and RET.",
    "summary": "AL2846 is a small-molecule drug developed by Chia Tai Tianqing Pharmaceutical. Its targets are MET, RET and KIT (the sponsor names c-MET, c-KIT, VEGFR1, RET). The sponsor states: A multi-target tyrosine kinase inhibitor capsule with significant inhibitory effects on c-MET, c-KIT, VEGFR1 and RET. ClinicalTrials.gov describes the intervention as: AL2846 Capsule is a multi - target tyrosine kinase inhibitor, which has significant inhibitory effects on c-Mesenchymal-epithelial transition factor (c - MET), stem cell factor receptor (c - KIT), VEGFR1 and Ret Proto-Oncogene (RET). It is the investigational product in 1 recruiting or active industry-led phase 2 and phase 3 interventional cancer trial, including the phase 3 study NCT06860971 (A Study of AL2846 Capsule Versus Placebo in the Treatment of Advanced Radioiodine-Refractory Differentiated Thyroid Carcinoma), in thyroid cancer. The largest, NCT06860971, plans to enrol 144 participants with primary completion expected 2027-01. Status reflects the highest phase registered on ClinicalTrials.gov; no efficacy results are recorded here.",
    "indications": [
      "thyroid"
    ],
    "trials": [
      "nct06860971"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov: trials of AL2846",
        "url": "https://clinicaltrials.gov/search?intr=AL2846"
      }
    ]
  },
  {
    "kind": "drug",
    "asOf": "2026-09-07",
    "id": "alphamedix",
    "name": "212Pb-DOTAMTATE",
    "brand": "AlphaMedix",
    "modality": "Targeted alpha therapy (lead-212)",
    "status": "phase-2",
    "tldr": "An alpha-particle version of neuroendocrine radioligand therapy that produced responses in over half of patients who had never had PRRT, with FDA Breakthrough designation.",
    "summary": "ALPHAMEDIX-02 (Sanofi/Orano Med/RadioMedix, October 2025): met all primary endpoints; ORR 54.3% in PRRT-naive patients with ~70-75% progression-free at about 3 years, and durable disease control in PRRT-exposed patients (~83% progression-free at 18 months). Breakthrough Therapy designation 2024. Sanofi acquired global rights (2024); registrational strategy under discussion. Supply relies on Orano Med's 212Pb generators.",
    "mechanism": "DOTAMTATE (SSTR2 agonist) chelating 212Pb, which decays via 212Bi to emit an alpha particle at the tumour cell.",
    "targets": [
      "sstr2"
    ],
    "technologies": [
      "prrt",
      "targeted-alpha-therapy"
    ],
    "companies": [
      "orano-med",
      "radiomedix"
    ],
    "indications": [
      "neuroendocrine"
    ],
    "trials": [
      "alphamedix-02"
    ],
    "links": [
      {
        "label": "Sanofi press release Oct 2025",
        "url": "https://www.sanofi.com/en/media-room/press-releases/2025/2025-10-08-05-00-00-3163053"
      }
    ]
  },
  {
    "kind": "drug",
    "asOf": "2026-09-06",
    "id": "cabazitaxel",
    "links": [
      {
        "label": "FDA label (DailyMed)",
        "url": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=Cabazitaxel"
      }
    ],
    "name": "Cabazitaxel",
    "brand": "Jevtana",
    "modality": "Cytotoxic chemotherapy (taxane)",
    "status": "approved",
    "wikipedia": "https://en.wikipedia.org/wiki/Cabazitaxel",
    "tldr": "A second taxane that works after docetaxel and beat a second hormone pill head-to-head (CARD).",
    "summary": "Cabazitaxel is a taxane with low affinity for the P-glycoprotein efflux pump, so it remains active in docetaxel-resistant disease. It is used in metastatic castration-resistant prostate cancer after docetaxel, with neutropenia as its main toxicity. TROPIC (2010) showed an overall survival benefit after docetaxel, and CARD (2019) showed it was superior to switching to a second androgen receptor pathway inhibitor in men who had already had one ARPI and docetaxel. It served as the comparator in TheraP, where it lost to 177Lu-PSMA-617 on PSA50 response (66% versus 37%) although overall survival was similar (HR 0.97), and in XALute against the T-cell engager xaluritamig. Its place relative to radioligands and T-cell engagers is therefore still being worked out. For a newcomer, it is the second taxane that works after docetaxel and beat a second hormone pill head-to-head.",
    "mechanism": "Taxane with low P-glycoprotein affinity, active in docetaxel-resistant disease.",
    "approvals": [
      {
        "region": "US",
        "year": 2010,
        "indication": "mCRPC after docetaxel"
      }
    ],
    "indications": [
      "prostate",
      "prostate-mcrpc"
    ],
    "trials": [
      "therap",
      "nct07611110"
    ]
  },
  {
    "kind": "drug",
    "asOf": "2026-09-07",
    "id": "cabozantinib",
    "name": "Cabozantinib",
    "brand": "Cabometyx",
    "modality": "Small-molecule multi-kinase inhibitor (MET, VEGFR2, AXL, RET)",
    "status": "approved",
    "wikipedia": "https://en.wikipedia.org/wiki/Cabozantinib",
    "tldr": "A pill that blocks both blood-vessel growth and the MET escape pathway, used in kidney, liver, thyroid and, since 2025, neuroendocrine cancers.",
    "summary": "CELESTIAL: OS 10.2 vs 8.0 months after sorafenib in HCC (HR 0.76). CheckMate 9ER: with nivolumab, first-line RCC. CABINET (2024-25): PFS 13.8 vs 4.4 months in pancreatic NETs and 8.4 vs 3.9 months in extra-pancreatic NETs after prior therapy, leading to FDA approval in March 2025; ESMO 2025 subgroup showed an 81% reduction in progression risk in lung and thymic NETs. COSMIC-312 (with atezolizumab, first-line HCC) improved PFS but not OS.",
    "mechanism": "Oral inhibitor of MET, VEGFR2, AXL, RET, KIT and FLT3; MET/AXL inhibition counters anti-VEGF resistance.",
    "mechanismSteps": [
      "Blocks VEGFR2 on endothelium",
      "Blocks MET and AXL, which tumours upregulate under hypoxia to escape anti-VEGF therapy",
      "Reduces invasion and metastasis signalling"
    ],
    "dosing": {
      "route": "Oral",
      "schedule": "60 mg daily (Cabometyx tablets)",
      "modifications": "40 mg then 20 mg for intolerance",
      "monitoring": "Blood pressure, liver enzymes, wound healing"
    },
    "toxicity": [
      {
        "event": "Hand-foot skin reaction",
        "anyGradePct": 46,
        "grade3PlusPct": 17,
        "note": "CELESTIAL"
      },
      {
        "event": "Hypertension",
        "anyGradePct": 29,
        "grade3PlusPct": 16,
        "note": "CELESTIAL"
      },
      {
        "event": "Diarrhoea",
        "anyGradePct": 54,
        "grade3PlusPct": 10,
        "note": "CELESTIAL"
      }
    ],
    "approvals": [
      {
        "region": "US",
        "year": 2012,
        "indication": "Medullary thyroid cancer (Cometriq)"
      },
      {
        "region": "US",
        "year": 2016,
        "indication": "Advanced RCC"
      },
      {
        "region": "US",
        "year": 2019,
        "indication": "HCC previously treated with sorafenib"
      },
      {
        "region": "US",
        "year": 2025,
        "indication": "Advanced pancreatic and extra-pancreatic neuroendocrine tumours after prior therapy (CABINET)"
      },
      {
        "region": "US",
        "year": 2017,
        "indication": "First-line advanced RCC (CABOSUN)"
      },
      {
        "region": "US",
        "year": 2021,
        "indication": "First-line advanced RCC with nivolumab (CheckMate 9ER)"
      },
      {
        "region": "EU",
        "year": 2014,
        "indication": "Cometriq for medullary thyroid cancer; 21 Mar 2014. Cabometyx (RCC) Sep 2016"
      }
    ],
    "regulatoryEvents": [
      {
        "date": "2025-03-26",
        "type": "approval",
        "region": "US",
        "note": "NET indication on CABINET",
        "source": "https://www.ncf.net/post/2025-highlights-in-neuroendocrine-cancer"
      }
    ],
    "indications": [
      "hcc",
      "rcc",
      "neuroendocrine",
      "thyroid"
    ],
    "trials": [
      "cabinet",
      "nct03690388"
    ],
    "links": [
      {
        "label": "FDA label (DailyMed)",
        "url": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=Cabozantinib"
      }
    ],
    "notes": [
      "In kidney cancer: CABOSUN (first line versus sunitinib, PFS benefit), METEOR (second line versus everolimus, OS 21.4 versus 16.5 months), CheckMate 9ER (with nivolumab, OS benefit), COSMIC-313 (triplet, no OS gain) and CONTACT-03 (no benefit from adding atezolizumab). The dose is 40 mg daily with nivolumab, and about 65 percent of patients have a grade 3 or higher event; the long half-life of about 99 hours matters when toxicity appears."
    ]
  },
  {
    "kind": "drug",
    "asOf": "2026-09-10",
    "status": "approved",
    "id": "capecitabine",
    "trials": [
      "nct06247995",
      "nct04919226"
    ],
    "name": "Capecitabine",
    "brand": "Xeloda",
    "modality": "Oral fluoropyrimidine prodrug (antimetabolite)",
    "mechanism": "Converted in three steps, the last by thymidine phosphorylase enriched in tumours, to fluorouracil; FdUMP blocks thymidylate synthase and FUTP is incorporated into RNA.",
    "wikipedia": "https://en.wikipedia.org/wiki/Capecitabine",
    "tldr": "Capecitabine (Xeloda) is a tablet form of the chemotherapy fluorouracil. It is a backbone of treatment for bowel cancer and a standard option in advanced breast cancer.",
    "summary": "Capecitabine was approved by the FDA in 1998 for anthracycline- and taxane-resistant metastatic breast cancer and later for adjuvant stage III colon cancer (X-ACT: disease-free survival at least equivalent to bolus fluorouracil and leucovorin), metastatic colorectal cancer, perioperative chemoradiotherapy for rectal cancer and, with docetaxel, for anthracycline-pretreated breast cancer. The EU authorised Xeloda in 2001; it is also approved there for gastric cancer. It is the oral partner in CAPOX and CAPTEM and in the CREATE-X post-neoadjuvant breast regimen. Hand-foot syndrome, diarrhoea and cardiotoxicity are the key toxicities, and DPD deficiency (DPYD variants) causes severe or fatal toxicity, so genotype-guided dosing is increasingly used. Warfarin interaction carries a boxed warning.",
    "approvals": [
      {
        "region": "US",
        "year": 1998,
        "indication": "Metastatic breast cancer after anthracycline and taxane; later adjuvant and metastatic colorectal cancer, rectal chemoradiotherapy"
      },
      {
        "region": "EU",
        "year": 2001,
        "indication": "Colorectal, gastric and breast cancer"
      }
    ],
    "indications": [
      "breast-her2-positive"
    ],
    "links": [
      {
        "label": "US label (DailyMed)",
        "url": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=all&query=capecitabine"
      },
      {
        "label": "NCI drug page",
        "url": "https://www.cancer.gov/about-cancer/treatment/drugs/capecitabine"
      },
      {
        "label": "EPAR",
        "url": "https://www.ema.europa.eu/en/medicines/human/EPAR/xeloda"
      }
    ],
    "tags": [
      "nci-list",
      "generic"
    ]
  },
  {
    "kind": "drug",
    "asOf": "2026-09-08",
    "id": "choline-c11",
    "name": "Choline C-11",
    "brand": "Choline C 11 Injection",
    "aka": [
      "[11C]choline"
    ],
    "modality": "PET radiotracer, intravenous",
    "mechanism": "Carbon-11-labelled choline is taken up by cells with high phosphatidylcholine synthesis, including prostate cancer, and imaged by PET within minutes because of the isotope's 20-minute half-life.",
    "status": "established",
    "wikipedia": "https://en.wikipedia.org/wiki/Choline_C-11",
    "tldr": "Choline C-11 was the first PET tracer approved in the United States, in 2012, to find where prostate cancer has come back when PSA rises after treatment; PSMA tracers have now largely replaced it.",
    "summary": "The FDA approved Choline C 11 Injection in September 2012, produced at the Mayo Clinic, for PET imaging of patients with suspected prostate cancer recurrence and non-informative bone scan, CT or MRI, the first approval of a PET agent for prostate cancer. Its 20-minute half-life means it must be made on site with a cyclotron, which confined it to a few centres. From 2020 the PSMA-targeted tracers gallium-68 PSMA-11 and piflufolastat F-18, with higher sensitivity at low PSA and longer half-lives, took over most recurrence imaging, and fluciclovine F-18 offered a distributable amino-acid alternative.",
    "approvals": [
      {
        "region": "US",
        "year": 2012,
        "indication": "PET imaging of suspected prostate cancer recurrence with non-informative conventional imaging"
      }
    ],
    "indications": [
      "prostate"
    ],
    "technologies": [
      "pet",
      "psma-pet"
    ],
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Choline_C-11"
      },
      {
        "label": "Label (DailyMed)",
        "url": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=all&query=choline%20c%2011"
      }
    ],
    "tags": [
      "gap-fill",
      "chembl-universe"
    ]
  },
  {
    "kind": "drug",
    "asOf": "2026-09-10",
    "status": "approved",
    "id": "dexrazoxane",
    "companies": [
      "pfizer"
    ],
    "name": "Dexrazoxane",
    "brand": "Zinecard / Totect",
    "aka": [
      "Cardioxane",
      "Savene"
    ],
    "modality": "Cardioprotectant and extravasation antidote (bisdioxopiperazine)",
    "mechanism": "Cyclic EDTA derivative hydrolysed intracellularly to a metal chelator that removes iron from anthracycline-iron complexes, limiting free-radical cardiac injury; also a catalytic topoisomerase II inhibitor, which underlies its action against extravasation injury.",
    "wikipedia": "https://en.wikipedia.org/wiki/Dexrazoxane",
    "tldr": "Dexrazoxane protects the heart from the cumulative damage of doxorubicin in women with metastatic breast cancer who need to keep receiving it, and, as Totect, limits tissue destruction when an anthracycline leaks out of a vein.",
    "summary": "Dexrazoxane (Zinecard) was approved in May 1995 to reduce the incidence and severity of doxorubicin cardiomyopathy in women with metastatic breast cancer who have received a cumulative 300 mg/m2 and will continue doxorubicin, on randomised trials that markedly reduced cardiac events; it is not used from the start of treatment because of an early signal of reduced response, later not confirmed. Totect was approved in 2007 for anthracycline extravasation, given within six hours on three consecutive days, on two single-arm European studies in which surgery was avoided in the great majority. Dexrazoxane is also used in paediatric leukaemia and lymphoma protocols to protect against late cardiotoxicity, an area where long-term Children's Oncology Group follow-up has been reassuring about secondary malignancy. Myelosuppression adds to that of chemotherapy.",
    "approvals": [
      {
        "region": "US",
        "year": 1995,
        "indication": "Reduction of doxorubicin cardiomyopathy in women with metastatic breast cancer after 300 mg/m2 cumulative dose (Zinecard)"
      },
      {
        "region": "US",
        "year": 2007,
        "indication": "Anthracycline extravasation (Totect)"
      }
    ],
    "links": [
      {
        "label": "US label (DailyMed)",
        "url": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=all&query=dexrazoxane"
      },
      {
        "label": "NCI drug page",
        "url": "https://www.cancer.gov/about-cancer/treatment/drugs/dexrazoxanehydrochloride"
      }
    ],
    "tags": [
      "nci-list",
      "supportive"
    ]
  },
  {
    "kind": "drug",
    "asOf": "2026-09-06",
    "id": "docetaxel",
    "links": [
      {
        "label": "FDA label (DailyMed)",
        "url": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=Docetaxel"
      }
    ],
    "name": "Docetaxel",
    "brand": "Taxotere (generic)",
    "modality": "Cytotoxic chemotherapy (taxane)",
    "status": "approved",
    "wikipedia": "https://en.wikipedia.org/wiki/Docetaxel",
    "tldr": "The first chemotherapy to extend life in prostate cancer (2004), now part of triplet therapy at first metastatic diagnosis.",
    "summary": "Docetaxel is a taxane that stabilises microtubules and arrests dividing cells; in prostate cancer it also disrupts androgen receptor nuclear trafficking. It was the first chemotherapy to extend life in metastatic castration-resistant prostate cancer (TAX 327, 2004) and later moved to first metastatic diagnosis: CHAARTED (OS 57.6 versus 44.0 months, HR 0.61) and STAMPEDE showed an overall survival benefit in high-volume hormone-sensitive disease, and PEACE-1 and ARASENS built triplets by adding abiraterone or darolutamide. It is also widely used in breast, lung, gastric and head and neck cancers. Neutropenia, neuropathy and fluid retention limit its use in frail patients, and whether men with low-volume metastatic disease gain anything from it remains contested. For a newcomer, it is the workhorse chemotherapy given every three weeks across many cancers.",
    "mechanism": "Microtubule stabilisation; also disrupts AR nuclear trafficking.",
    "approvals": [
      {
        "region": "US",
        "year": 1996,
        "indication": "Locally advanced or metastatic breast cancer after chemotherapy (Taxotere, NDA 020449)"
      },
      {
        "region": "US",
        "year": 2004,
        "indication": "Metastatic CRPC (with prednisone)"
      }
    ],
    "indications": [
      "prostate",
      "prostate-mhspc",
      "prostate-mcrpc"
    ],
    "trials": [
      "chaarted",
      "stampede",
      "nct06520345",
      "nct07590934"
    ]
  },
  {
    "kind": "drug",
    "asOf": "2026-09-10",
    "id": "donafenib",
    "name": "Donafenib",
    "brand": "Zepsun",
    "code": "CM4307",
    "modality": "Small-molecule multi-kinase inhibitor (deuterated sorafenib)",
    "status": "approved",
    "wikipedia": "https://en.wikipedia.org/wiki/Donafenib",
    "mechanism": "Deuterium-substituted analogue of sorafenib inhibiting RAF kinases and VEGFR/PDGFR; deuteration slows metabolism and raises exposure.",
    "tldr": "Donafenib is a Chinese redesign of sorafenib that lived longer than the original in a head-to-head liver cancer trial and is approved in China as a first-line option.",
    "summary": "Zelgen's donafenib was approved by the NMPA in June 2021 for first-line unresectable hepatocellular carcinoma on the ZGDH3 trial (668 patients: median overall survival 12.1 versus 10.3 months with sorafenib, hazard ratio 0.83; Journal of Clinical Oncology 2021), the first drug to beat sorafenib on survival in this setting. Radioiodine-refractory differentiated thyroid cancer followed in 2022. A modest gain, but a first for a Chinese company and a model of incremental chemistry (deuteration) turned into an approval.",
    "approvals": [
      {
        "region": "China",
        "year": 2021,
        "indication": "First-line unresectable hepatocellular carcinoma (ZGDH3)"
      },
      {
        "region": "China",
        "year": 2022,
        "indication": "Radioiodine-refractory differentiated thyroid cancer"
      }
    ],
    "indications": [
      "hcc",
      "thyroid"
    ],
    "links": [
      {
        "label": "Suzhou Zelgen Biopharmaceuticals",
        "url": "https://www.zelgen.com/en/"
      },
      {
        "label": "ZGDH3 (J Clin Oncol 2021)",
        "url": "https://doi.org/10.1200/JCO.20.02672"
      },
      {
        "label": "NMPA (National Medical Products Administration)",
        "url": "https://www.nmpa.gov.cn"
      }
    ],
    "tags": [
      "china"
    ]
  },
  {
    "id": "durvalumab",
    "kind": "drug",
    "links": [
      {
        "label": "FDA label (DailyMed)",
        "url": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=Durvalumab"
      }
    ],
    "name": "Durvalumab",
    "brand": "Imfinzi",
    "modality": "Monoclonal antibody (anti-PD-L1)",
    "asOf": "2026-09-04",
    "status": "approved",
    "wikipedia": "https://en.wikipedia.org/wiki/Durvalumab",
    "tldr": "A PD-L1 blocker that became standard after chemoradiation for stage III lung cancer, and now in bladder, biliary, and gastric cancers.",
    "summary": "PACIFIC (unresectable stage III NSCLC), ADRIATIC (limited-stage SCLC, 2024), TOPAZ-1 (biliary tract), HIMALAYA (HCC with tremelimumab), NIAGARA (perioperative muscle-invasive bladder cancer, 2025), MATTERHORN (perioperative gastric, 2025), and Q2 2026 high-risk non-muscle-invasive bladder cancer with BCG (POTOMAC). Partner of Dato-DXd in TROPION-Breast05.",
    "mechanism": "Human IgG1 anti-PD-L1 with reduced Fc effector function.",
    "approvals": [
      {
        "region": "US",
        "year": 2017,
        "indication": "Locally advanced or metastatic urothelial carcinoma after platinum (accelerated; indication withdrawn 2021)"
      },
      {
        "region": "US",
        "year": 2018,
        "indication": "Unresectable stage III NSCLC after chemoradiation"
      },
      {
        "region": "US",
        "year": 2026,
        "indication": "High-risk NMIBC with BCG"
      }
    ],
    "companies": [
      "astrazeneca"
    ],
    "indications": [
      "sclc",
      "hcc",
      "hcc-intermediate"
    ],
    "trials": [
      "nct05063565",
      "nct06040099"
    ],
    "dosing": {
      "route": "IV infusion",
      "schedule": "10 mg/kg every 2 weeks or 1,500 mg every 4 weeks (≥30 kg); up to 12 months after chemoradiation in stage III NSCLC",
      "modifications": "Hold for grade 2 pneumonitis; discontinue for grade 3-4",
      "monitoring": "Respiratory symptoms after chemoradiation, thyroid, LFTs, creatinine",
      "source": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8baba4ea-2855-42fa-9bd9-5a7548d4cec3"
    },
    "toxicity": [
      {
        "event": "Pneumonitis (any cause, PACIFIC)",
        "anyGradePct": 18.3,
        "source": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8baba4ea-2855-42fa-9bd9-5a7548d4cec3",
        "note": "vs 12.8% placebo; 1.1% fatal"
      },
      {
        "event": "Cough",
        "source": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8baba4ea-2855-42fa-9bd9-5a7548d4cec3",
        "note": "PACIFIC; all-grade ≥20%"
      },
      {
        "event": "Fatigue",
        "source": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8baba4ea-2855-42fa-9bd9-5a7548d4cec3",
        "note": "PACIFIC; all-grade ≥20%"
      },
      {
        "event": "Radiation pneumonitis",
        "source": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8baba4ea-2855-42fa-9bd9-5a7548d4cec3",
        "note": "PACIFIC; all-grade ≥20%"
      },
      {
        "event": "Upper respiratory infection",
        "source": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8baba4ea-2855-42fa-9bd9-5a7548d4cec3",
        "note": "PACIFIC; all-grade ≥20%"
      },
      {
        "event": "Dyspnoea",
        "source": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8baba4ea-2855-42fa-9bd9-5a7548d4cec3",
        "note": "PACIFIC; all-grade ≥20%"
      },
      {
        "event": "Rash",
        "source": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8baba4ea-2855-42fa-9bd9-5a7548d4cec3",
        "note": "PACIFIC; all-grade ≥20%"
      }
    ],
    "access": [
      {
        "country": "US",
        "reimbursement": "Medicare Part B (physician-administered); commercial plans per formulary",
        "assistance": "https://www.astrazeneca-us.com/medicines/access-360",
        "source": "https://www.cms.gov/medicare/payment/part-b-drugs/asp-pricing-files",
        "asOf": "2026-09-06"
      },
      {
        "country": "UK",
        "reimbursement": "NICE: recommended after chemoradiation in stage III NSCLC (TA798), biliary tract cancer, limited-stage SCLC, perioperative bladder and gastric cancer",
        "source": "https://www.nice.org.uk/guidance/published?ngt=Technology%20appraisal%20guidance",
        "asOf": "2026-09-06"
      }
    ],
    "regulatoryEvents": [
      {
        "date": "2017-05-01",
        "type": "approval",
        "region": "US",
        "note": "Urothelial carcinoma (accelerated; later withdrawn 2021)",
        "source": "https://www.fda.gov/drugs/resources-information-approved-drugs/oncology-cancer-hematologic-malignancies-approval-notifications"
      },
      {
        "date": "2018-02-16",
        "type": "approval",
        "region": "US",
        "note": "Unresectable stage III NSCLC after chemoradiation (PACIFIC)",
        "source": "https://www.fda.gov/drugs/resources-information-approved-drugs/oncology-cancer-hematologic-malignancies-approval-notifications"
      },
      {
        "date": "2020-03-27",
        "type": "approval",
        "region": "US",
        "note": "Extensive-stage SCLC with chemotherapy (CASPIAN)",
        "source": "https://www.fda.gov/drugs/resources-information-approved-drugs/oncology-cancer-hematologic-malignancies-approval-notifications"
      },
      {
        "date": "2022-09-02",
        "type": "approval",
        "region": "US",
        "note": "Biliary tract cancer with chemotherapy (TOPAZ-1)",
        "source": "https://www.fda.gov/drugs/resources-information-approved-drugs/oncology-cancer-hematologic-malignancies-approval-notifications"
      },
      {
        "date": "2022-10-21",
        "type": "approval",
        "region": "US",
        "note": "HCC with tremelimumab (HIMALAYA)",
        "source": "https://www.fda.gov/drugs/resources-information-approved-drugs/oncology-cancer-hematologic-malignancies-approval-notifications"
      },
      {
        "date": "2024-12-04",
        "type": "approval",
        "region": "US",
        "note": "Limited-stage SCLC after chemoradiation (ADRIATIC)",
        "source": "https://www.fda.gov/drugs/resources-information-approved-drugs/oncology-cancer-hematologic-malignancies-approval-notifications"
      },
      {
        "date": "2025-03-28",
        "type": "approval",
        "region": "US",
        "note": "Perioperative muscle-invasive bladder cancer (NIAGARA)",
        "source": "https://www.fda.gov/drugs/resources-information-approved-drugs/oncology-cancer-hematologic-malignancies-approval-notifications"
      },
      {
        "date": "2025-11",
        "type": "approval",
        "region": "US",
        "note": "Perioperative gastric/GEJ cancer with FLOT (MATTERHORN)",
        "source": "https://www.fda.gov/drugs/resources-information-approved-drugs/oncology-cancer-hematologic-malignancies-approval-notifications"
      },
      {
        "date": "2026-05-28",
        "type": "approval",
        "region": "US",
        "note": "High-risk non-muscle-invasive bladder cancer with BCG (POTOMAC)",
        "source": "https://www.fda.gov/drugs/resources-information-approved-drugs/fda-approves-durvalumab-combination-bacillus-calmette-guerin-high-risk-non-muscle-invasive-bladder"
      }
    ],
    "mechanismSteps": [
      "Antibody binds PD-L1",
      "PD-1/PD-L1 engagement between T cell and tumour is blocked",
      "Exhausted tumour-reactive T cells regain effector function",
      "Interferon-γ and cytotoxic granules are released at the tumour",
      "Tumour cells are killed; memory T cells persist"
    ]
  },
  {
    "kind": "drug",
    "asOf": "2026-09-06",
    "id": "enzalutamide",
    "links": [
      {
        "label": "FDA label (DailyMed)",
        "url": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=Enzalutamide"
      }
    ],
    "name": "Enzalutamide",
    "brand": "Xtandi",
    "modality": "Small-molecule AR antagonist",
    "status": "approved",
    "wikipedia": "https://en.wikipedia.org/wiki/Enzalutamide",
    "tldr": "Enzalutamide is a second-generation androgen-receptor blocker that stops the receptor binding testosterone, entering the nucleus and switching on genes. It is approved at every stage of advanced prostate cancer, from rising PSA after surgery to castration-resistant disease, and fatigue, falls and memory problems are its main drawbacks.",
    "summary": "Enzalutamide is a second-generation androgen receptor antagonist that blocks ligand binding, nuclear translocation and DNA binding, giving more complete AR blockade than older antiandrogens. It is approved across every stage of advanced prostate cancer: AFFIRM and PREVAIL (mCRPC), PROSPER (nmCRPC), ARCHES and ENZAMET (mHSPC, overall survival benefit; ARCHES OS HR 0.66) and EMBARK (high-risk biochemical recurrence, 2023, metastasis-free survival HR 0.42 with leuprolide). It is the partner in TALAPRO-2 (talazoparib) and the MEVPRO trials (mevrometostat), so the next generation of combinations is built on it. Fatigue, falls and cognitive effects are the main toxicities, which is why darolutamide or apalutamide is sometimes preferred in frail men. For a newcomer, enzalutamide is the most widely used androgen-receptor blocker, from rising PSA after surgery to late-stage disease.",
    "mechanism": "Second-generation AR antagonist blocking ligand binding, nuclear translocation, and DNA binding.",
    "approvals": [
      {
        "region": "US",
        "year": 2012,
        "indication": "mCRPC after docetaxel (pre-chemo 2014)"
      },
      {
        "region": "US",
        "year": 2018,
        "indication": "Non-metastatic CRPC"
      },
      {
        "region": "US",
        "year": 2019,
        "indication": "mHSPC (ARCHES)"
      },
      {
        "region": "US",
        "year": 2023,
        "indication": "High-risk biochemical recurrence (EMBARK)"
      }
    ],
    "companies": [
      "pfizer"
    ],
    "indications": [
      "prostate",
      "prostate-mhspc",
      "prostate-nmcrpc",
      "prostate-mcrpc",
      "prostate-bcr"
    ],
    "trials": [
      "embark",
      "nct06520345",
      "nct07611110"
    ],
    "terms": [
      "mcrpc-mhspc"
    ]
  },
  {
    "kind": "drug",
    "asOf": "2026-09-07",
    "id": "everolimus",
    "name": "Everolimus",
    "brand": "Afinitor",
    "modality": "Small-molecule mTOR inhibitor",
    "status": "approved",
    "wikipedia": "https://en.wikipedia.org/wiki/Everolimus",
    "tldr": "An mTOR-blocking pill that doubled progression-free time with exemestane in 2012 and is now paired with the oral SERD giredestrant.",
    "summary": "Everolimus is a rapalog that binds FKBP12 and allosterically inhibits mTORC1, a growth-signalling hub downstream of PI3K and AKT. It is approved in HR-positive breast cancer with exemestane after non-steroidal aromatase inhibitor failure, in progressive pancreatic, lung and GI neuroendocrine tumours, and in advanced RCC after sunitinib or sorafenib. BOLERO-2 showed PFS of 7.8 versus 3.2 months for everolimus plus exemestane versus exemestane alone, with no OS benefit; RADIANT-3 and RADIANT-4 showed PFS of 11.0 versus 4.6 and 3.9 months in NETs. Stomatitis (mitigated by dexamethasone mouthwash, SWISH), pneumonitis and hyperglycaemia are the main toxicities. evERA (2025) revived it as the partner of giredestrant after CDK4/6 inhibitors; it is the comparator beaten in LITESPARK-005 and COMPETE. For a newcomer, it is a growth-pathway pill with several niches rather than one dominant use.",
    "mechanism": "Allosteric mTORC1 inhibitor (rapalog) via FKBP12.",
    "dosing": {
      "route": "Oral",
      "schedule": "10 mg once daily",
      "modifications": "5 mg for stomatitis or pneumonitis",
      "monitoring": "Glucose, lipids, pneumonitis symptoms; steroid mouthwash prophylaxis"
    },
    "toxicity": [
      {
        "event": "Stomatitis",
        "anyGradePct": 59,
        "grade3PlusPct": 8
      },
      {
        "event": "Pneumonitis",
        "anyGradePct": 16,
        "grade3PlusPct": 3
      },
      {
        "event": "Hyperglycaemia",
        "anyGradePct": 14,
        "grade3PlusPct": 5
      }
    ],
    "approvals": [
      {
        "region": "US",
        "year": 2012,
        "indication": "HR+/HER2- advanced breast cancer with exemestane after NSAI failure"
      },
      {
        "region": "US",
        "year": 2011,
        "indication": "Progressive pancreatic NETs"
      },
      {
        "region": "US",
        "year": 2016,
        "indication": "Progressive non-functional lung and GI NETs"
      },
      {
        "region": "US",
        "year": 2009,
        "indication": "Advanced RCC after sunitinib or sorafenib"
      }
    ],
    "companies": [
      "novartis"
    ],
    "indications": [
      "rcc",
      "neuroendocrine"
    ],
    "trials": [
      "nct04919226",
      "radiant-3-4",
      "compete"
    ],
    "links": [
      {
        "label": "FDA label (DailyMed)",
        "url": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=Everolimus"
      }
    ],
    "notes": [
      "In neuroendocrine tumours: RADIANT-3 (2011) gave PFS 11.0 versus 4.6 months in pancreatic NETs and RADIANT-4 (2016) PFS 11.0 versus 3.9 months in lung and GI NETs; it is now the comparator that 177Lu-edotreotide beat in COMPETE. In RADIANT-3 stomatitis affected 64 percent (7 percent grade 3 or higher), rash 49 percent and pneumonitis 17 percent; dexamethasone mouthwash (SWISH) prevents most stomatitis.",
      "In kidney cancer: RECORD-1 (2008) gave PFS 4.9 versus 1.9 months against placebo after a VEGF-TKI, making everolimus the second-line standard from 2009; it has since been beaten by nivolumab (CheckMate 025), cabozantinib (METEOR), lenvatinib plus everolimus (Study 205) and belzutifan (LITESPARK-005), and is now mostly a comparator arm and a partner for lenvatinib at 5 mg daily. Feedback activation of AKT limits its cytostatic effect."
    ]
  },
  {
    "id": "fap-2286",
    "trials": [
      "nct05939414",
      "nct06520345",
      "nct07219238",
      "nct05413850",
      "nct06894511",
      "nct05142696",
      "nct04939610"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov: trials of FAP-2286 (177Lu / 68Ga)",
        "url": "https://clinicaltrials.gov/search?intr=FAP-2286"
      }
    ],
    "kind": "drug",
    "name": "FAP-2286 (177Lu / 68Ga)",
    "code": "FAP-2286",
    "modality": "Theranostic pair (peptide radioligand)",
    "asOf": "2026-09-04",
    "status": "phase-2",
    "tldr": "A FAP-targeted theranostic pair: one version images almost any solid tumour, the other treats it with radiation.",
    "summary": "FAP-2286 is a theranostic pair: a cyclic peptide that binds fibroblast activation protein (FAP), linked to a DOTA chelator carrying 68Ga for PET imaging or 177Lu for beta therapy. FAP sits on cancer-associated fibroblasts in the stroma of most solid tumours rather than on cancer cells, so one agent can image and irradiate many tumour types, and the cyclic peptide gives longer tumour retention than the FAPI small molecules used for imaging. Clovis Oncology developed it until its 2022 bankruptcy; Novartis then acquired it via 3B Pharmaceuticals. The 177Lu-FAP-2286 LuMIERE phase 1/2 trial is dose-escalating in cycles every 6 weeks with pancreatic, sarcoma and breast cohorts. For a newcomer: a radioligand aimed at the scaffolding around tumours rather than the tumour cells.",
    "mechanism": "Cyclic peptide FAP binder with DOTA chelator for 68Ga (imaging) or 177Lu (therapy).",
    "targets": [
      "fap"
    ],
    "technologies": [
      "fapi-pet",
      "radioligand-therapy"
    ],
    "companies": [
      "novartis"
    ],
    "dosing": {
      "route": "IV infusion (177Lu) or injection (68Ga)",
      "schedule": "LuMIERE phase 1/2 dose escalation, cycles every 6 weeks",
      "monitoring": "Blood counts, renal function",
      "source": "https://clinicaltrials.gov/study/NCT04939610"
    },
    "toxicity": [
      {
        "event": "Anaemia"
      },
      {
        "event": "Thrombocytopenia"
      },
      {
        "event": "Fatigue"
      },
      {
        "event": "Nausea"
      }
    ],
    "access": [
      {
        "country": "US",
        "reimbursement": "Investigational",
        "asOf": "2026-09-06"
      }
    ],
    "regulatoryEvents": [
      {
        "date": "2023-01",
        "type": "filing",
        "region": "US",
        "note": "Novartis acquires rights after Clovis bankruptcy",
        "source": "https://www.fda.gov/drugs/resources-information-approved-drugs/oncology-cancer-hematologic-malignancies-approval-notifications"
      }
    ],
    "mechanismSteps": [
      "Radioligand circulates and binds FAP on cancer-associated fibroblasts on tumour cells",
      "Ligand is internalised or retained at the membrane",
      "Beta emissions deposit energy within a short range",
      "Clustered DNA double-strand breaks form in the tumour cell and its neighbours (crossfire)",
      "Cells die; unbound ligand is cleared via the kidneys"
    ]
  },
  {
    "id": "florastamin-f18",
    "kind": "drug",
    "name": "Florastamin F-18",
    "brand": "ProstaView",
    "code": "FC303",
    "aka": [
      "18F-florastamin",
      "ProstaView",
      "Prostaview Injection",
      "florastamine",
      "flortastamine F-18"
    ],
    "modality": "PSMA-targeted PET radiotracer, fluorine-18",
    "mechanism": "A fluorine-18-labelled ligand of prostate-specific membrane antigen that lights up prostate cancer on PET wherever it has spread.",
    "status": "approved",
    "asOf": "2026-09-22",
    "tags": [
      "diagnostic",
      "psma",
      "korea",
      "ctgov-ingest"
    ],
    "provenance": {
      "editedBy": "Nuclide ingestion (ClinicalTrials.gov v2, curated); Korean approval read from the company's announcement in the English editions of Seoul Economic Daily and Edaily",
      "editedOn": "2026-09-22"
    },
    "tldr": "Florastamin is FutureChem's fluorine-18 PSMA PET tracer, and the first prostate cancer diagnostic developed in South Korea to be approved there — Korea's 43rd domestically developed new drug.",
    "summary": "FutureChem, a Seoul radiopharmaceutical company, developed florastamin (FC303) as a fluorine-18 PSMA ligand for PET imaging of prostate cancer. Korea's Ministry of Food and Drug Safety approved it on 30 April 2026 as ProstaView injection, the country's 43rd domestically developed new drug and its first home-grown prostate cancer diagnostic; first commercial sales followed on 20 August 2026, the four-month gap being the reimbursement notice and hospital code registration every new Korean drug waits through. The company romanises the brand as both ProstaView and Prostaview and the ingredient appears as florastamin, florastamine and, in one wire report, flortastamine.\n\nThe registrational evidence is a domestic phase 3 trial at 11 institutions in men whose conventional imaging suggested recurrence or metastasis. Positive predictive value, the primary endpoint, was 86.96 per cent with a 95 per cent confidence interval lower bound of 79.01, against a pre-specified benchmark of 60.6; the CT, MRI and bone scans those same patients had already had returned about 60.16 per cent. A separate prospective study in 59 men with suspected intermediate-risk disease (Clinical Nuclear Medicine, 2025) put sensitivity at 72.4 per cent and specificity at 83.3 per cent against biopsy, with multiparametric MRI more sensitive at 89.7 per cent but less specific at 66.7 per cent and the same overall accuracy of 78 per cent — a fair description of what PSMA PET adds to MRI rather than replaces.\n\nRegistered phase 3 trials also cover initial staging of high-risk prostate cancer, the setting where gallium-68 PSMA-11 and piflufolastat are already approved in the United States and Europe. The approval matters beyond Korea because it is the diagnostic half of a domestic theranostic pair: FutureChem's lutetium-177 therapy FC705 (ludotadipep) targets the same antigen and is in phase 3 in Korea, so the approved tracer is the selection tool that therapy will be filed with.",
    "approvals": [
      {
        "region": "South Korea",
        "year": 2026,
        "indication": "PET imaging of PSMA-positive lesions in men with prostate cancer whose existing imaging suggests recurrence or metastasis",
        "note": "MFDS marketing approval 30 April 2026; Korea's 43rd domestically developed new drug"
      }
    ],
    "regulatoryEvents": [
      {
        "date": "2026-04-30",
        "type": "approval",
        "region": "South Korea",
        "note": "MFDS marketing approval as Korea's 43rd domestically developed new drug",
        "source": "https://en.sedaily.com/finance/2026/05/04/futurechem-wins-approval-for-koreas-first-prostate-cancer"
      }
    ],
    "targets": [
      "psma"
    ],
    "indications": [
      "prostate"
    ],
    "technologies": [
      "psma-pet",
      "pet"
    ],
    "companies": [
      "futurechem"
    ],
    "trials": [
      "nct05936658",
      "nct05004285",
      "nct06754085"
    ],
    "related": [
      "ksnm",
      "nuclear-medicine-and-molecular-imaging",
      "f-18",
      "prostate-bcr"
    ],
    "links": [
      {
        "label": "FutureChem wins approval for Korea's first prostate cancer diagnostic (Seoul Economic Daily, English)",
        "url": "https://en.sedaily.com/finance/2026/05/04/futurechem-wins-approval-for-koreas-first-prostate-cancer"
      },
      {
        "label": "First sales, with the 30 April 2026 approval date (Edaily, English)",
        "url": "https://en.edaily.co.kr/news/eda202608205175/"
      },
      {
        "label": "Diagnostic accuracy of 18F-florastamin PET/CT in intermediate-risk suspected prostate cancer (Clin Nucl Med, 2025)",
        "url": "https://doi.org/10.1097/RLU.0000000000005798"
      },
      {
        "label": "18F-florastamin PET/CT in men with clinical suspicion of prostate cancer (Prostate International, 2025)",
        "url": "https://doi.org/10.1016/j.prnil.2025.07.001"
      },
      {
        "label": "ClinicalTrials.gov: trials of Florastamin F-18",
        "url": "https://clinicaltrials.gov/search?intr=FC303"
      }
    ]
  },
  {
    "kind": "drug",
    "asOf": "2026-09-06",
    "id": "flotufolastat",
    "links": [
      {
        "label": "FDA label (DailyMed)",
        "url": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=Flotufolastat%20F-18"
      }
    ],
    "name": "Flotufolastat F-18",
    "brand": "Posluma",
    "code": "18F-rhPSMA-7.3",
    "modality": "PET imaging agent",
    "status": "approved",
    "tldr": "Flotufolastat is a third PSMA PET tracer, with a radiohybrid chemistry designed to be reused for therapy.",
    "summary": "Flotufolastat F-18 (Posluma) is a radiohybrid PSMA ligand: a silicon-fluoride acceptor allows 18F labelling for PET while the same scaffold can carry 177Lu for therapy, so imaging and treatment agents share one chemistry. It is used for PSMA PET in men with prostate cancer at initial staging and at biochemical recurrence. The LIGHTHOUSE (initial staging) and SPOTLIGHT (biochemical recurrence) trials supported approval in May 2023. Low urinary excretion aids reading of the pelvis, where bladder activity can obscure local recurrence with other tracers. It is the third PSMA PET tracer in the US after gallium-68 PSMA-11 and Pylarify, and head-to-head comparisons are limited. For a newcomer, it is a PSMA scan agent designed from the start to be reused for therapy.",
    "mechanism": "Radiohybrid PSMA ligand; silicon-fluoride acceptor allows 18F imaging and 177Lu therapy on the same scaffold.",
    "approvals": [
      {
        "region": "US",
        "year": 2023,
        "indication": "PSMA PET in prostate cancer"
      }
    ],
    "targets": [
      "psma"
    ],
    "technologies": [
      "psma-pet"
    ],
    "companies": [
      "blue-earth-diagnostics"
    ],
    "indications": [
      "prostate"
    ]
  },
  {
    "kind": "drug",
    "asOf": "2026-09-08",
    "id": "fluciclovine-f18",
    "name": "Fluciclovine F-18",
    "brand": "Axumin",
    "modality": "PET radiotracer (synthetic amino acid)",
    "mechanism": "18F-labelled leucine analogue taken up via LAT1/ASCT2 amino-acid transporters upregulated in prostate cancer; low urinary excretion improves pelvic imaging.",
    "status": "approved",
    "wikipedia": "https://en.wikipedia.org/wiki/Fluciclovine_(18F)",
    "tldr": "Fluciclovine F-18 was the first PET tracer approved for finding recurrent prostate cancer after treatment (2016), and has been largely superseded since 2020 by PSMA PET.",
    "summary": "Approved May 2016 for suspected recurrence with rising PSA; detection ~68% overall, lower at low PSA. EMSPOT/EMPIRE-1 (Lancet 2021) showed fluciclovine-guided salvage radiotherapy improved failure-free survival. PSMA PET (Ga-68 PSMA-11, piflufolastat, flotufolastat) has higher detection and displaced it.",
    "approvals": [
      {
        "region": "US",
        "year": 2016,
        "indication": "PET imaging in men with suspected prostate cancer recurrence based on elevated PSA"
      },
      {
        "region": "EU",
        "year": 2017,
        "indication": "Same"
      }
    ],
    "indications": [
      "prostate",
      "glioblastoma"
    ],
    "companies": [
      "blue-earth-diagnostics"
    ],
    "technologies": [
      "pet",
      "pet-ct"
    ],
    "terms": [
      "biochemical-recurrence"
    ],
    "links": [
      {
        "label": "Label (DailyMed)",
        "url": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=all&query=Axumin"
      }
    ],
    "tags": [
      "gap-fill",
      "diagnostic"
    ]
  },
  {
    "kind": "drug",
    "asOf": "2026-09-10",
    "tags": [
      "test"
    ],
    "id": "fludeoxyglucose-f18",
    "name": "Fludeoxyglucose F-18 (FDG)",
    "brand": "FDG (multiple manufacturers)",
    "modality": "PET imaging agent (glucose analogue)",
    "status": "approved",
    "wikipedia": "https://en.wikipedia.org/wiki/Fludeoxyglucose_(18F)",
    "mechanism": "18F-labelled glucose analogue taken up through GLUT transporters and trapped after phosphorylation by hexokinase, so metabolically active tumours accumulate signal.",
    "tldr": "The radioactive sugar used in almost every cancer PET scan, approved in the 1990s and made fresh each day by regional cyclotrons.",
    "summary": "Fludeoxyglucose F-18 was the first PET radiopharmaceutical approved by the FDA (1994, initially for epilepsy foci and cardiac viability) and gained its oncology indication in 2000 for assessing abnormal glucose metabolism to assist in evaluating malignancy in patients with known or suspected cancer. It is produced under multiple abbreviated NDAs by commercial and academic cyclotron networks (PETNET, Cardinal Health, SOFIE, hospital sites) and is the tracer behind staging, response assessment (Deauville in lymphoma, PERCIST) and surveillance across most solid tumours. Its weaknesses, uptake in inflammation and poor sensitivity for indolent or low-glucose tumours, drive the development of target-specific tracers.",
    "approvals": [
      {
        "region": "US",
        "year": 1994,
        "indication": "First FDG NDA (neurology and cardiology indications)"
      },
      {
        "region": "US",
        "year": 2000,
        "indication": "Oncology: assessment of abnormal glucose metabolism to assist in evaluating malignancy"
      }
    ],
    "notes": [
      "What a result means: 'hot spots' show tissue burning glucose fast; in a person with cancer they usually mark tumour, but infection, healing and brown fat can light up too, so findings are interpreted with CT and biopsy."
    ],
    "companies": [
      "petnet-solutions",
      "cardinal-health",
      "sofie-biosciences"
    ],
    "technologies": [
      "fdg-pet",
      "pet-ct",
      "pet"
    ],
    "terms": [
      "suv"
    ],
    "links": [
      {
        "label": "FDA label (DailyMed)",
        "url": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=Fludeoxyglucose%20F%2018"
      }
    ],
    "indications": [
      "nsclc"
    ]
  },
  {
    "kind": "drug",
    "asOf": "2026-09-08",
    "id": "fluoroestradiol-f18",
    "name": "Fluoroestradiol F-18 (FES PET)",
    "brand": "Cerianna",
    "modality": "PET radiotracer (oestrogen receptor ligand)",
    "mechanism": "18F-labelled oestradiol binds oestrogen receptor alpha, imaging ER expression across all lesions non-invasively.",
    "status": "approved",
    "wikipedia": "https://en.wikipedia.org/wiki/Fluoroestradiol_F-18",
    "tldr": "A PET scan that shows which breast cancer deposits still have oestrogen receptors, helping decide whether hormone therapy will work when biopsy is impractical.",
    "summary": "Fluoroestradiol F-18 is a PET radiotracer in which 18F-labelled oestradiol binds oestrogen receptor alpha, imaging ER expression across every lesion in the body in a single non-invasive scan. It was approved in the US in May 2020 as an adjunct to biopsy for detecting ER-positive lesions in recurrent or metastatic breast cancer, and entered NCCN guidelines in 2024. It is used when biopsy is impractical or when lesions may have lost ER, because it predicts endocrine responsiveness and reveals heterogeneous receptor loss that a single biopsy would miss. It also serves as a pharmacodynamic tool in trials of ER degraders, measuring receptor occupancy, and is under study in ER-positive ovarian and endometrial cancers. Uptake in the liver limits assessment of hepatic metastases. FES PET tells the oncologist whether hormone therapy still has a target.",
    "approvals": [
      {
        "region": "US",
        "year": 2020,
        "indication": "Detection of ER-positive lesions as an adjunct to biopsy in patients with recurrent or metastatic breast cancer"
      }
    ],
    "companies": [
      "ge-healthcare"
    ],
    "technologies": [
      "pet",
      "pet-ct"
    ],
    "links": [
      {
        "label": "Label (DailyMed)",
        "url": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=all&query=Cerianna"
      }
    ],
    "tags": [
      "gap-fill",
      "diagnostic"
    ]
  },
  {
    "id": "fpi-2265",
    "kind": "drug",
    "name": "FPI-2265",
    "aka": [
      "Ac225-PSMA I&T"
    ],
    "modality": "radioligand",
    "status": "phase-2",
    "asOf": "2026-09-11",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "provenance": {
      "editedBy": "Nuclide ingestion (ClinicalTrials.gov v2 + sponsor pipeline pages)",
      "editedOn": "2026-09-11"
    },
    "mechanism": "A PSMA-targeting ligand (PSMA-I&T) radiolabeled with the alpha-emitter actinium-225, delivering targeted alpha radiotherapy to PSMA-positive prostate cancer cells.",
    "tldr": "FPI-2265 is an experimental radioligand therapy from Fusion Pharmaceuticals in phase 2 trials for prostate cancer, aimed at PSMA.",
    "summary": "FPI-2265 is a radioligand therapy developed by Fusion Pharmaceuticals. Its target is PSMA (the sponsor names PSMA). The sponsor states: A PSMA-targeting ligand (PSMA-I&T) radiolabeled with the alpha-emitter actinium-225, delivering targeted alpha radiotherapy to PSMA-positive prostate cancer cells. ClinicalTrials.gov describes the intervention as: Small molecule capable of binding to the domain of PSMA radiolabeled with Ac225. It is the investigational product in 3 recruiting or active industry-led phase 2 and phase 3 interventional cancer trials, in prostate cancer. The largest, NCT05219500, plans to enrol 115 participants with primary completion was scheduled for 2025-05-30 on the registry. Status reflects the highest phase registered on ClinicalTrials.gov; no efficacy results are recorded here.",
    "targets": [
      "psma"
    ],
    "indications": [
      "prostate"
    ],
    "companies": [
      "astrazeneca"
    ],
    "trials": [
      "nct07611110",
      "nct05219500",
      "nct07590934",
      "nct06909825"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov: trials of FPI-2265",
        "url": "https://clinicaltrials.gov/search?intr=FPI-2265"
      }
    ]
  },
  {
    "kind": "drug",
    "asOf": "2026-09-08",
    "id": "ga68-dotatate",
    "name": "Gallium-68 DOTATATE (and Cu-64 DOTATATE)",
    "brand": "Netspot / Detectnet",
    "modality": "PET radiotracer (somatostatin receptor ligand)",
    "mechanism": "Radiolabelled somatostatin analogue binding SSTR2 on neuroendocrine tumours; PET replaces the older In-111 octreotide SPECT with higher sensitivity and same-day imaging.",
    "status": "approved",
    "tldr": "The PET scan for neuroendocrine tumours that finds far more disease than older scans and confirms eligibility for lutetium radioligand therapy (the theranostic pair).",
    "summary": "Ga-68 DOTATATE (Netspot, kit) approved June 2016; Cu-64 DOTATATE (Detectnet, 12.7-hour half-life allows central production) approved September 2020; Ga-68 DOTATOC (2019, academic). Changes management in about a third of patients; required before Lu-177 DOTATATE (Lutathera). Also images meningioma and paraganglioma.",
    "approvals": [
      {
        "region": "US",
        "year": 2016,
        "indication": "PET localisation of SSTR-positive neuroendocrine tumours (Ga-68 DOTATATE)"
      },
      {
        "region": "US",
        "year": 2020,
        "indication": "Same (Cu-64 DOTATATE)"
      },
      {
        "region": "EU",
        "year": 2017,
        "indication": "SomaKit TOC (Ga-68 DOTATOC)"
      }
    ],
    "targets": [
      "sstr2"
    ],
    "indications": [
      "neuroendocrine",
      "small-intestinal-net",
      "pancreatic-net",
      "lung-net"
    ],
    "companies": [
      "novartis",
      "curium"
    ],
    "technologies": [
      "sstr-pet",
      "pet-ct",
      "prrt",
      "radioligand-therapy"
    ],
    "terms": [
      "theranostics",
      "prrt-term"
    ],
    "links": [
      {
        "label": "Label: Netspot (DailyMed)",
        "url": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=all&query=Netspot"
      },
      {
        "label": "Label: Detectnet (DailyMed)",
        "url": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=all&query=Detectnet"
      }
    ],
    "tags": [
      "gap-fill",
      "diagnostic"
    ]
  },
  {
    "kind": "drug",
    "asOf": "2026-09-06",
    "id": "ga68-psma-11",
    "trials": [
      "nct07052214"
    ],
    "links": [
      {
        "label": "FDA label (DailyMed)",
        "url": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=Gallium-68%20gozetotide"
      }
    ],
    "name": "Gallium-68 gozetotide (PSMA-11)",
    "brand": "Illuccix / Gozellix / Locametz",
    "modality": "PET imaging agent",
    "status": "approved",
    "tldr": "Gallium-68 PSMA-11 was the first PSMA PET tracer approved in the US (2020), and is made on site from a generator or cyclotron.",
    "summary": "Gallium-68 gozetotide (PSMA-11) is a 68Ga-labelled urea-based ligand that binds prostate-specific membrane antigen, lighting up prostate cancer on PET wherever it has spread. It is made on site from a germanium-68 generator or cyclotron and used for initial staging of higher-risk disease, for biochemical recurrence, and to confirm PSMA expression before 177Lu-PSMA-617 therapy. The UCLA/UCSF academic NDA (2020) established PSMA PET in the US, followed by Telix's Illuccix kit (2021) and Gozellix (2025, longer shelf-life) and Novartis' Locametz (2022, companion for Pluvicto). It competes with 18F agents (Pylarify, Posluma) that offer central distribution and a longer half-life. Whether findings on PSMA PET should change treatment in the absence of outcome trials remains debated. In plain terms, it was the first PSMA PET tracer approved in the US.",
    "mechanism": "68Ga-labelled urea-based PSMA ligand.",
    "approvals": [
      {
        "region": "US",
        "year": 2020,
        "indication": "PSMA PET (UCLA/UCSF NDA); kits 2021-2022"
      }
    ],
    "targets": [
      "psma"
    ],
    "technologies": [
      "psma-pet"
    ],
    "companies": [
      "telix",
      "novartis"
    ],
    "indications": [
      "prostate"
    ],
    "institutions": [
      "ucla-jonsson",
      "ucsf"
    ]
  },
  {
    "id": "girentuximab-zr89",
    "kind": "drug",
    "name": "Zirconium-89 girentuximab",
    "code": "TLX250-CDx",
    "aka": [
      "89Zr-DFO-girentuximab",
      "Zircaix"
    ],
    "modality": "PET imaging antibody labelled with zirconium-89",
    "mechanism": "Girentuximab binds carbonic anhydrase IX, expressed by nearly all clear cell renal cell carcinomas but not by normal kidney; the zirconium-89 label shows the tumour on PET days after injection.",
    "status": "phase-3",
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "provenance": {
      "editedBy": "Nuclide ingestion (ClinicalTrials.gov v2, curated)",
      "editedOn": "2026-09-16"
    },
    "tldr": "Zirconium-89 girentuximab is Telix's PET scan that tells whether a kidney mass is clear cell renal cell carcinoma without a biopsy; the phase 3 ZIRCON trial met its endpoints in 2023 and the product is under regulatory review.",
    "summary": "Telix Pharmaceuticals' TLX250-CDx labels the anti-CAIX antibody girentuximab with zirconium-89. In the ZIRCON phase 3 trial of 300 patients with indeterminate renal masses, the scan identified clear cell renal cell carcinoma with high sensitivity and specificity against surgical histology. Telix filed with the FDA, which issued a refusal-to-file letter in 2024 over manufacturing information, and a resubmission followed. A further phase 3 trial is registered.",
    "indications": [
      "rcc"
    ],
    "technologies": [
      "immuno-pet",
      "pet"
    ],
    "companies": [
      "telix"
    ],
    "trials": [
      "nct06750419"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov: trials of Zirconium-89 girentuximab",
        "url": "https://clinicaltrials.gov/search?intr=TLX250-CDx"
      }
    ]
  },
  {
    "id": "hrs-4357",
    "kind": "drug",
    "name": "HRS-4357",
    "aka": [],
    "modality": "not stated (registered as a drug or biological on ClinicalTrials.gov)",
    "status": "phase-3",
    "asOf": "2026-09-11",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "provenance": {
      "editedBy": "Nuclide ingestion (ClinicalTrials.gov v2 + sponsor pipeline pages)",
      "editedOn": "2026-09-11"
    },
    "mechanism": "Investigational agent whose form is not stated in the registry directed at PSMA, as stated in the ClinicalTrials.gov intervention record; the detailed mechanism is not stated.",
    "tldr": "HRS-4357 is an experimental investigational agent whose form is not stated in the registry from Jiangsu HengRui Medicine in phase 3 trials for prostate cancer, aimed at PSMA.",
    "summary": "HRS-4357 is an investigational agent whose form is not stated in the registry developed by Jiangsu HengRui Medicine. Its target is PSMA (the sponsor names PSMA (inferred from trial population)). ClinicalTrials.gov describes the intervention as: HRS-4357 injection are administered each time, with dosing for 4 to 6 cycles. It is the investigational product in 1 recruiting or active industry-led phase 2 and phase 3 interventional cancer trial, including the phase 3 study NCT07311694 (A Phase III Study Comparing HRS-4357 With Novel Androgen Receptor Pathway Inhibitors in Patients With Progressive, PSMA-Positive Metastatic Castration-Resistant Prostate Cancer), in prostate cancer. The largest, NCT07311694, plans to enrol 370 participants with primary completion expected 2027-12. Status reflects the highest phase registered on ClinicalTrials.gov; no efficacy results are recorded here.",
    "targets": [
      "psma"
    ],
    "indications": [
      "prostate"
    ],
    "trials": [
      "nct07311694"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov: trials of HRS-4357",
        "url": "https://clinicaltrials.gov/search?intr=HRS-4357"
      }
    ]
  },
  {
    "kind": "drug",
    "asOf": "2026-09-07",
    "id": "i131-mibg",
    "companies": [
      "lantheus"
    ],
    "name": "131I-MIBG (iobenguane I-131) therapy",
    "modality": "Radioligand therapy (beta, norepinephrine transporter)",
    "status": "established",
    "wikipedia": "https://en.wikipedia.org/wiki/Iobenguane",
    "tldr": "High-dose radioactive MIBG delivers radiation from inside neuroblastoma cells that take up noradrenaline; used for relapsed disease and tested in upfront therapy.",
    "summary": "Response rate ~30-40% in relapsed/refractory MIBG-avid neuroblastoma (NANT, COG studies), with myelosuppression requiring stem-cell support at ≥12 mCi/kg. COG ANBL1531 randomised 131I-MIBG added to induction (primary results pending 2026). Commercial Azedra (for pheochromocytoma) was discontinued in 2024, leaving compounding and academic supply.",
    "mechanism": "Norepinephrine transporter uptake of radio-iodinated benzylguanidine; 131I beta emission (2 mm range).",
    "dosing": {
      "route": "IV",
      "schedule": "12-18 mCi/kg single or tandem doses with autologous stem-cell support; thyroid blockade with potassium iodide",
      "monitoring": "Radiation isolation, counts, thyroid function, secondary malignancy"
    },
    "technologies": [
      "mibg-theranostics",
      "radioligand-therapy"
    ],
    "indications": [
      "neuroblastoma",
      "neuroblastoma-high-risk",
      "metastatic-ppgl"
    ],
    "trials": [
      "anbl1531"
    ],
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Iobenguane"
      }
    ]
  },
  {
    "kind": "drug",
    "asOf": "2026-09-10",
    "status": "approved",
    "id": "ibritumomab-tiuxetan",
    "name": "Ibritumomab tiuxetan",
    "brand": "Zevalin",
    "aka": [
      "Y-90 ibritumomab",
      "Zevalin therapeutic regimen"
    ],
    "modality": "Radioimmunotherapy (yttrium-90 labelled anti-CD20 antibody)",
    "mechanism": "Murine anti-CD20 IgG1 (the parent of rituximab) chelated via tiuxetan to yttrium-90; beta emission delivers radiation to CD20-positive B cells and neighbouring tumour cells (crossfire), given after rituximab to clear circulating B cells.",
    "wikipedia": "https://en.wikipedia.org/wiki/Ibritumomab_tiuxetan",
    "tldr": "Zevalin is an antibody carrying a radioactive isotope that seeks out CD20 on lymphoma cells. It treats follicular lymphoma that has relapsed and is given as a one-off consolidation after chemotherapy.",
    "summary": "Ibritumomab tiuxetan was the first radioimmunotherapy approved by the FDA, in February 2002, for relapsed or refractory low-grade, follicular or transformed B-cell non-Hodgkin lymphoma including rituximab-refractory disease (Study 106-06: response in a majority of 54 rituximab-refractory patients), and in 2009 for consolidation after first-line chemotherapy in follicular lymphoma with a response (FIT trial: prolonged progression-free survival). The EU authorised Zevalin in 2004. Despite efficacy and a single-day treatment, use collapsed because of logistics between nuclear medicine and haematology, prolonged cytopenias and competition from rituximab maintenance and later agents; tositumomab (Bexxar) was discontinued in 2014. Severe cytopenias and infusion reactions carry boxed warnings.",
    "approvals": [
      {
        "region": "US",
        "year": 2002,
        "indication": "Relapsed or refractory low-grade, follicular or transformed B-cell NHL including rituximab-refractory follicular lymphoma"
      },
      {
        "region": "US",
        "year": 2009,
        "indication": "Consolidation after first-line chemotherapy in previously untreated follicular NHL"
      },
      {
        "region": "EU",
        "year": 2004,
        "indication": "Rituximab-relapsed or refractory CD20-positive follicular lymphoma; first-line consolidation added 2008"
      }
    ],
    "targets": [
      "cd20"
    ],
    "indications": [
      "follicular-lymphoma"
    ],
    "companies": [
      "acrotech-biopharma"
    ],
    "technologies": [
      "radioimmunotherapy"
    ],
    "related": [
      "rituximab"
    ],
    "links": [
      {
        "label": "US label (DailyMed)",
        "url": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=all&query=ibritumomab%20tiuxetan"
      },
      {
        "label": "NCI drug page",
        "url": "https://www.cancer.gov/about-cancer/treatment/drugs/ibritumomabtiuxetan"
      },
      {
        "label": "EPAR",
        "url": "https://www.ema.europa.eu/en/medicines/human/EPAR/zevalin"
      }
    ],
    "tags": [
      "nci-list"
    ]
  },
  {
    "kind": "drug",
    "asOf": "2026-09-10",
    "tags": [
      "test"
    ],
    "id": "illuccix",
    "name": "Illuccix (kit for Ga-68 gozetotide)",
    "brand": "Illuccix / Gozellix",
    "modality": "PET imaging agent kit (PSMA, gallium-68)",
    "status": "approved",
    "mechanism": "Kit for on-site labelling of PSMA-11 (gozetotide) with gallium-68 from a generator or cyclotron; the tracer binds PSMA on prostate cancer cells for PET imaging.",
    "tldr": "Telix's ready-to-label kit that lets any nuclear medicine department make the gallium PSMA scan for prostate cancer.",
    "summary": "Illuccix was approved by the FDA in December 2021 for PET imaging of PSMA-positive lesions in men with suspected metastasis who are candidates for definitive therapy and in men with suspected recurrence based on rising PSA, and in 2025 the label was extended to selecting patients for PSMA radioligand therapy. Gozellix, a second-generation kit with longer post-labelling shelf life, was approved in 2025. Illuccix is also registered in Australia and several other markets. The kit format made PSMA PET available to centres without access to the cyclotron-produced 18F tracers.",
    "approvals": [
      {
        "region": "US",
        "year": 2021,
        "indication": "PSMA PET imaging in prostate cancer (initial staging with suspected metastasis; suspected recurrence)"
      },
      {
        "region": "Australia",
        "year": 2021,
        "indication": "PSMA PET imaging in prostate cancer"
      },
      {
        "region": "US",
        "year": 2025,
        "indication": "Gozellix kit; selection of patients for PSMA-targeted radioligand therapy"
      }
    ],
    "notes": [
      "What a result means: PSMA-avid spots on the scan indicate prostate cancer deposits and decide between local treatment, systemic therapy or radioligand therapy."
    ],
    "targets": [
      "psma"
    ],
    "indications": [
      "prostate"
    ],
    "companies": [
      "telix"
    ],
    "drugs": [
      "pluvicto"
    ],
    "technologies": [
      "psma-pet",
      "pet-ct"
    ],
    "terms": [
      "biochemical-recurrence",
      "theranostics"
    ],
    "related": [
      "ga68-psma-11",
      "locametz",
      "pylarify"
    ],
    "links": [
      {
        "label": "FDA label (DailyMed)",
        "url": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=Illuccix"
      }
    ]
  },
  {
    "kind": "drug",
    "asOf": "2026-09-10",
    "status": "withdrawn",
    "id": "iobenguane-i-131",
    "name": "Iobenguane I-131 (therapeutic)",
    "brand": "Azedra",
    "aka": [
      "131I-MIBG",
      "Ultratrace iobenguane"
    ],
    "modality": "Radiopharmaceutical therapy (beta and gamma emitter)",
    "mechanism": "Noradrenaline analogue taken up by the noradrenaline transporter into chromaffin and neuroendocrine tumour cells; iodine-131 beta emission delivers targeted radiation.",
    "wikipedia": "https://en.wikipedia.org/wiki/Iobenguane",
    "tldr": "Azedra was a radioactive drug that homed in on adrenal-type tumours (phaeochromocytoma and paraganglioma) that could not be removed and delivered radiation from inside. It was approved in 2018 and discontinued by its maker in 2024.",
    "summary": "High-specific-activity iobenguane I-131 (Azedra) was approved by the FDA in July 2018 for adults and children aged 12 and over with iobenguane scan-positive, unresectable, locally advanced or metastatic phaeochromocytoma or paraganglioma requiring systemic therapy, on a single-arm phase 2 study in which a quarter of patients halved their antihypertensive medication for at least six months and most had tumour control. It was the first approved therapy for these tumours. Progenics (later Lantheus) discontinued manufacture in 2024, so patients rely on compounded low-specific-activity 131I-MIBG or lutetium-177 dotatate. Myelosuppression, secondary MDS and leukaemia, hypothyroidism and renal toxicity were the main risks; the diagnostic-dose iobenguane (AdreView) is an imaging agent covered separately.",
    "approvals": [
      {
        "region": "US",
        "year": 2018,
        "indication": "Iobenguane scan-positive unresectable, locally advanced or metastatic phaeochromocytoma or paraganglioma in patients 12 and older (discontinued 2024)"
      }
    ],
    "indications": [
      "neuroendocrine"
    ],
    "companies": [
      "lantheus"
    ],
    "technologies": [
      "mibg-theranostics",
      "radioligand-therapy"
    ],
    "related": [
      "lutathera"
    ],
    "links": [
      {
        "label": "US label (DailyMed)",
        "url": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=all&query=iobenguane"
      },
      {
        "label": "NCI drug page",
        "url": "https://www.cancer.gov/about-cancer/treatment/drugs/iobenguanei131"
      }
    ],
    "tags": [
      "nci-list"
    ],
    "notes": [
      "Phaeochromocytoma and paraganglioma have no cancer record yet; linked to neuroendocrine tumours."
    ],
    "terms": [
      "radioiodine-term"
    ]
  },
  {
    "id": "iomab-b",
    "kind": "drug",
    "name": "Iomab-B",
    "aka": [
      "Apamistamab-I131",
      "131I-apamistamab"
    ],
    "modality": "Radioimmunotherapy conditioning agent (anti-CD45 antibody labelled with iodine-131)",
    "mechanism": "An antibody against CD45, found on all white blood cells, carries iodine-131 to the marrow and leukaemia cells and ablates them in place of high-dose chemotherapy before a stem cell transplant.",
    "status": "phase-3",
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "provenance": {
      "editedBy": "Nuclide ingestion (ClinicalTrials.gov v2, curated)",
      "editedOn": "2026-09-16"
    },
    "tldr": "Iomab-B is Actinium's radioactive antibody that clears the bone marrow before a transplant for older patients with active relapsed acute myeloid leukaemia; the phase 3 SIERRA trial met its primary endpoint but the FDA asked for another study.",
    "summary": "Iomab-B delivers iodine-131 to CD45-positive cells, allowing patients with relapsed or refractory acute myeloid leukaemia who would not tolerate conventional myeloablative conditioning to proceed to allogeneic transplant. In the phase 3 SIERRA trial, Iomab-B followed by transplant produced durable complete remission at six months in a substantially higher share of patients than conventional care. Actinium reported in 2024 that the FDA requested an additional randomised trial before filing, and it is seeking partners; the trial is recorded here.",
    "technologies": [
      "radioimmunotherapy",
      "radioligand-therapy"
    ],
    "companies": [
      "actinium-pharmaceuticals"
    ],
    "trials": [
      "nct02665065"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov: trials of Iomab-B",
        "url": "https://clinicaltrials.gov/search?intr=Iomab-B"
      }
    ]
  },
  {
    "kind": "drug",
    "asOf": "2026-09-07",
    "id": "itm-11",
    "links": [
      {
        "label": "ClinicalTrials.gov NCT03049189 (COMPETE)",
        "url": "https://clinicaltrials.gov/study/NCT03049189"
      }
    ],
    "name": "177Lu-edotreotide",
    "code": "ITM-11, n.c.a. 177Lu-DOTATOC",
    "modality": "Radioligand therapy (beta)",
    "status": "phase-3",
    "tldr": "A second lutetium radioligand for neuroendocrine tumours that beat the standard pill everolimus in a head-to-head trial and is awaiting an FDA decision.",
    "summary": "COMPETE (Lancet 2025; 309 patients, grade 1-2 GEP-NETs): PFS 23.9 vs 14.1 months versus everolimus (HR 0.67); response rate higher; interim OS 63.4 vs 58.7 months, a difference that did not reach statistical significance (HR 0.78). Uses non-carrier-added 177Lu from ITM's own supply. NDA accepted with PDUFA 28 August 2026. COMPOSE (grade 2-3, versus CAPTEM/everolimus/FOLFOX) ongoing.",
    "mechanism": "DOTATOC peptide (SSTR2 agonist) chelating 177Lu; four cycles of 7.5 GBq every 3 months.",
    "dosing": {
      "route": "Intravenous",
      "schedule": "7.5 GBq every 3 months × 4 with amino-acid renal protection"
    },
    "regulatoryEvents": [
      {
        "date": "2025-03",
        "type": "designation",
        "region": "US",
        "note": "COMPETE topline at ENETS 2025",
        "source": "https://www.itm-radiopharma.com/news/press-releases/press-releases-detail/itm-presents-positive-topline-phase-3-compete-trial-data-with-nca-177lu-edotreotide-itm-11-a-targeted-radiopharmaceutical-therapy-in-patients-with-grade-1-or-2-gastroenteropancreatic-neuroendocrine-tumors-at-the-enets-2025-conference-688/"
      },
      {
        "date": "2026-08-28",
        "type": "pdufa",
        "region": "US",
        "note": "PDUFA goal date for GEP-NET indication",
        "source": "https://www.cancernetwork.com/view/fda-accepts-new-drug-application-for-177lu-edotreotide-in-gep-nets"
      }
    ],
    "targets": [
      "sstr2"
    ],
    "technologies": [
      "prrt",
      "radioligand-therapy"
    ],
    "companies": [
      "itm"
    ],
    "indications": [
      "neuroendocrine",
      "grade-3-net"
    ],
    "trials": [
      "compete",
      "nct04919226"
    ]
  },
  {
    "id": "jnj-87189401",
    "kind": "drug",
    "name": "JNJ-87189401",
    "aka": [],
    "modality": "costimulatory bispecific antibody (PSMA x CD28, per the sponsor's pipeline page)",
    "status": "phase-3",
    "asOf": "2026-09-11",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "provenance": {
      "editedBy": "Nuclide ingestion (ClinicalTrials.gov v2 + sponsor pipeline pages)",
      "editedOn": "2026-09-11"
    },
    "mechanism": "A PSMA-CD28 costimulatory agent intended to enhance T-cell activation via PSMA engagement plus CD28 costimulation.",
    "tldr": "JNJ-87189401 is an experimental costimulatory agent from Janssen Research & Development in phase 3 trials for prostate cancer, aimed at PSMA.",
    "summary": "JNJ-87189401 is a costimulatory agent developed by Janssen Research & Development. Its target is PSMA (the sponsor names PSMA / CD28). The sponsor states: A PSMA-CD28 costimulatory agent intended to enhance T-cell activation via PSMA engagement plus CD28 costimulation. It is the investigational product in 1 recruiting or active industry-led phase 2 and phase 3 interventional cancer trial, including the phase 3 study NCT07164443 (A Study of Pasritamig With or Without JNJ-87189401 Versus Placebo for Late Line Metastatic Castration-resistant Prostate Cancer (mCRPC)), in prostate cancer. The largest, NCT07164443, plans to enrol 1203 participants with primary completion expected 2028-08-18. Status reflects the highest phase registered on ClinicalTrials.gov; no efficacy results are recorded here.",
    "targets": [
      "psma"
    ],
    "indications": [
      "prostate"
    ],
    "companies": [
      "johnson-johnson"
    ],
    "trials": [
      "mcrpc"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov: trials of JNJ-87189401",
        "url": "https://clinicaltrials.gov/search?intr=JNJ-87189401"
      }
    ]
  },
  {
    "kind": "drug",
    "asOf": "2026-09-10",
    "tags": [
      "test"
    ],
    "id": "locametz",
    "name": "Locametz (kit for Ga-68 gozetotide)",
    "brand": "Locametz",
    "modality": "PET imaging agent kit (PSMA, gallium-68)",
    "status": "approved",
    "mechanism": "Kit for on-site labelling of gozetotide (PSMA-11) with gallium-68; the resulting tracer images PSMA-expressing prostate cancer and identifies candidates for lutetium-177 PSMA therapy.",
    "tldr": "Novartis' gallium PSMA scan kit, approved the same day as Pluvicto as the test that qualifies men for that radioactive drug.",
    "summary": "Locametz was approved by the FDA on 23 March 2022, alongside Pluvicto (lutetium-177 vipivotide tetraxetan), with an explicit indication for selecting patients with metastatic castration-resistant prostate cancer for PSMA-directed therapy, as well as for initial staging and biochemical recurrence. The European Commission approved it in December 2022. It is manufactured by Advanced Accelerator Applications, the Novartis radiopharmaceutical unit, and was the first PSMA PET agent approved in the EU. The scan-then-treat pairing is the template for theranostics.",
    "approvals": [
      {
        "region": "US",
        "year": 2022,
        "indication": "PSMA PET in prostate cancer, including selection of patients for PSMA radioligand therapy"
      },
      {
        "region": "EU",
        "year": 2022,
        "indication": "PSMA PET in prostate cancer"
      }
    ],
    "notes": [
      "What a result means: enough PSMA uptake on the scan is required before Pluvicto can be given; a scan without uptake means the drug is unlikely to work."
    ],
    "targets": [
      "psma"
    ],
    "indications": [
      "prostate"
    ],
    "companies": [
      "novartis",
      "advanced-accelerator-applications"
    ],
    "drugs": [
      "pluvicto"
    ],
    "trials": [
      "vision"
    ],
    "technologies": [
      "psma-pet",
      "pet-ct",
      "radioligand-therapy"
    ],
    "terms": [
      "theranostics"
    ],
    "related": [
      "ga68-psma-11",
      "illuccix"
    ],
    "links": [
      {
        "label": "FDA label (DailyMed)",
        "url": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=Locametz"
      }
    ]
  },
  {
    "kind": "drug",
    "asOf": "2026-09-06",
    "id": "lu177-psma-it",
    "name": "177Lu-PSMA-I&T",
    "code": "PNT2002 (Lantheus); Curium 177Lu-PSMA-I&T",
    "modality": "Radioligand therapy (beta)",
    "status": "phase-3",
    "tldr": "177Lu-PSMA-I&T is a second PSMA radioligand, chemically different from Pluvicto, that has passed two phase 3 trials on progression but has not yet shown a survival benefit.",
    "summary": "SPLASH (Lantheus PNT2002, ESMO 2024): rPFS 9.5 vs 6.0 months (HR 0.71) vs ARPI switch in taxane-naive mCRPC; interim OS HR 1.11 (immature, crossover). ECLIPSE (Curium, 7.4 GBq × 6): met rPFS endpoint vs ARPI in the same setting; OS maturing; FDA submission plan pending. Curium's Japanese registrational trial with PeptiDream started February 2026. Widely used off-protocol in Germany and Australia.",
    "mechanism": "Urea-based PSMA ligand with DOTAGA chelator carrying 177Lu; beta emission.",
    "targets": [
      "psma"
    ],
    "technologies": [
      "radioligand-therapy",
      "psma-pet"
    ],
    "companies": [
      "lantheus",
      "curium"
    ],
    "indications": [
      "prostate",
      "prostate-mcrpc"
    ],
    "trials": [
      "splash",
      "eclipse-psma"
    ],
    "links": [
      {
        "label": "SPLASH primary analysis (Lantheus, ESMO 2024)",
        "url": "https://lantheusholdings.gcs-web.com/news-releases/news-release-details/lantheus-presents-results-primary-analysis-phase-3-pivotal"
      },
      {
        "label": "ECLIPSE meets rPFS (OncLive)",
        "url": "https://www.onclive.com/view/177lu-psma-i-t-meets-rpfs-end-point-in-psma-mcrpc"
      }
    ]
  },
  {
    "id": "lutathera",
    "trials": [
      "netter-1",
      "nct04711135",
      "nct05142696",
      "nct03972488"
    ],
    "kind": "drug",
    "links": [
      {
        "label": "FDA label (DailyMed)",
        "url": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=Lutetium-177%20dotatate"
      }
    ],
    "name": "Lutetium-177 dotatate",
    "brand": "Lutathera",
    "code": "177Lu-DOTATATE",
    "modality": "Radioligand therapy (beta)",
    "asOf": "2026-09-04",
    "status": "approved",
    "wikipedia": "https://en.wikipedia.org/wiki/Lutetium_(177Lu)_oxodotreotide",
    "tldr": "Lutetium-177 dotatate was the first modern radioligand therapy (2018), for neuroendocrine tumours, and is now used in first line.",
    "summary": "Lutetium-177 dotatate is a radioligand therapy: the somatostatin analogue DOTATATE binds SSTR2 on neuroendocrine tumour cells and carries the beta emitter 177Lu into them, irradiating over a few millimetres. NETTER-1 established it in midgut NETs progressing on octreotide, and NETTER-2 (2024) moved it into first line for higher grade-2 and grade-3 GEP-NETs with PFS 22.8 versus 8.5 months. It was approved in 2018 for SSTR-positive GEP-NETs, with paediatric use from age 12 added in 2024. Dosing is 7.4 GBq every 8 weeks for 4 doses with an amino acid infusion to protect the kidneys; lymphopenia is common, and myelodysplastic syndrome (2.3%) and acute leukaemia (0.5%) are rare late risks. Alpha-emitting successors RYZ101 and AlphaMedix are in phase 3. For a newcomer: the first modern radioligand therapy and the template for a whole class.",
    "mechanism": "SSTR2 agonist peptide with 177Lu.",
    "approvals": [
      {
        "region": "US",
        "year": 2018,
        "indication": "SSTR+ GEP-NETs"
      },
      {
        "region": "US",
        "year": 2024,
        "indication": "Paediatric ≥12 years; first-line (NETTER-2 label)"
      },
      {
        "region": "EU",
        "year": 2017,
        "indication": "First approval globally (Sep 2017)"
      }
    ],
    "targets": [
      "sstr2"
    ],
    "technologies": [
      "radioligand-therapy"
    ],
    "companies": [
      "novartis"
    ],
    "indications": [
      "neuroendocrine",
      "small-intestinal-net",
      "pancreatic-net",
      "grade-3-net",
      "metastatic-ppgl"
    ],
    "terms": [
      "prrt-term"
    ],
    "dosing": {
      "route": "IV infusion",
      "schedule": "7.4 GBq (200 mCi) every 8 weeks for 4 doses, with amino acid infusion starting 30 minutes before and continuing ≥3 hours",
      "modifications": "Hold for grade ≥3 haematologic toxicity or renal toxicity; discontinue after 16-week delay",
      "monitoring": "Blood counts, creatinine, LFTs before each dose; long-term MDS/AML surveillance",
      "source": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=72d1a024-00b7-418a-b36e-b2cb48f2ab55"
    },
    "toxicity": [
      {
        "event": "Lymphopenia",
        "grade3PlusPct": 44,
        "source": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=72d1a024-00b7-418a-b36e-b2cb48f2ab55",
        "note": "NETTER-1; grade 3-4 rates"
      },
      {
        "event": "GGT increased",
        "grade3PlusPct": 20,
        "source": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=72d1a024-00b7-418a-b36e-b2cb48f2ab55",
        "note": "NETTER-1; grade 3-4 rates"
      },
      {
        "event": "Vomiting",
        "grade3PlusPct": 7,
        "source": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=72d1a024-00b7-418a-b36e-b2cb48f2ab55",
        "note": "NETTER-1; grade 3-4 rates"
      },
      {
        "event": "Nausea",
        "grade3PlusPct": 5,
        "source": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=72d1a024-00b7-418a-b36e-b2cb48f2ab55",
        "note": "NETTER-1; grade 3-4 rates"
      },
      {
        "event": "AST increased",
        "grade3PlusPct": 5,
        "source": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=72d1a024-00b7-418a-b36e-b2cb48f2ab55",
        "note": "NETTER-1; grade 3-4 rates"
      },
      {
        "event": "ALT increased",
        "grade3PlusPct": 4,
        "source": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=72d1a024-00b7-418a-b36e-b2cb48f2ab55",
        "note": "NETTER-1; grade 3-4 rates"
      },
      {
        "event": "Hyperglycaemia",
        "grade3PlusPct": 4,
        "source": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=72d1a024-00b7-418a-b36e-b2cb48f2ab55",
        "note": "NETTER-1; grade 3-4 rates"
      },
      {
        "event": "Hypokalaemia",
        "grade3PlusPct": 4,
        "source": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=72d1a024-00b7-418a-b36e-b2cb48f2ab55",
        "note": "NETTER-1; grade 3-4 rates"
      },
      {
        "event": "Myelodysplastic syndrome",
        "anyGradePct": 2.3,
        "source": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=72d1a024-00b7-418a-b36e-b2cb48f2ab55",
        "note": "Median onset 29 months"
      },
      {
        "event": "Acute leukaemia",
        "anyGradePct": 0.5,
        "source": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=72d1a024-00b7-418a-b36e-b2cb48f2ab55",
        "note": "NETTER-1; grade 3-4 rates"
      }
    ],
    "access": [
      {
        "country": "US",
        "reimbursement": "Medicare Part B (physician-administered); commercial plans per formulary",
        "source": "https://www.cms.gov/medicare/payment/part-b-drugs/asp-pricing-files",
        "asOf": "2026-09-06",
        "listPrice": "~$47,500 per dose (launch price 2018)"
      },
      {
        "country": "UK",
        "reimbursement": "NICE: recommended for unresectable/metastatic GEP-NETs (TA539)",
        "source": "https://www.nice.org.uk/guidance/published?ngt=Technology%20appraisal%20guidance",
        "asOf": "2026-09-06"
      }
    ],
    "regulatoryEvents": [
      {
        "date": "2017-09-26",
        "type": "approval",
        "region": "EU",
        "note": "EMA approval: first modern PRRT",
        "source": "https://www.fda.gov/drugs/resources-information-approved-drugs/oncology-cancer-hematologic-malignancies-approval-notifications"
      },
      {
        "date": "2018-01-26",
        "type": "approval",
        "region": "US",
        "note": "SSTR+ gastroenteropancreatic NETs (NETTER-1)",
        "source": "https://www.fda.gov/drugs/resources-information-approved-drugs/oncology-cancer-hematologic-malignancies-approval-notifications"
      },
      {
        "date": "2024-04-23",
        "type": "approval",
        "region": "US",
        "note": "Paediatric patients ≥12 years",
        "source": "https://www.fda.gov/drugs/resources-information-approved-drugs/oncology-cancer-hematologic-malignancies-approval-notifications"
      },
      {
        "date": "2024-06",
        "type": "label-change",
        "region": "US",
        "note": "First-line label based on NETTER-2",
        "source": "https://www.fda.gov/drugs/resources-information-approved-drugs/oncology-cancer-hematologic-malignancies-approval-notifications"
      }
    ],
    "mechanismSteps": [
      "Radioligand circulates and binds Somatostatin receptor 2 on tumour cells",
      "Ligand is internalised or retained at the membrane",
      "Beta emissions deposit energy within a short range",
      "Clustered DNA double-strand breaks form in the tumour cell and its neighbours (crossfire)",
      "Cells die; unbound ligand is cleared via the kidneys"
    ]
  },
  {
    "id": "olaparib",
    "kind": "drug",
    "links": [
      {
        "label": "FDA label (DailyMed)",
        "url": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=Olaparib"
      }
    ],
    "name": "Olaparib",
    "brand": "Lynparza",
    "modality": "Small-molecule PARP inhibitor",
    "asOf": "2026-09-04",
    "status": "approved",
    "wikipedia": "https://en.wikipedia.org/wiki/Olaparib",
    "tldr": "Olaparib was the first PARP inhibitor, and turned an inherited BRCA mutation from a risk factor into a drug target, including after surgery in breast cancer.",
    "summary": "Approved 2014 (ovarian), then maintenance first-line (SOLO-1, 7-year OS benefit), with bevacizumab (PAOLA-1, HRD+), metastatic BRCA breast (OlympiAD), adjuvant germline-BRCA HER2-negative early breast cancer (OlympiA, OS HR 0.72), pancreatic maintenance (POLO), and prostate (PROfound; PROpel with abiraterone). AstraZeneca/Merck.",
    "mechanism": "PARP1/2 inhibitor and trapper; synthetic lethality with HRD.",
    "approvals": [
      {
        "region": "US",
        "year": 2014,
        "indication": "gBRCA ovarian cancer ≥3 lines"
      },
      {
        "region": "US",
        "year": 2018,
        "indication": "gBRCA HER2- metastatic breast cancer"
      },
      {
        "region": "US",
        "year": 2022,
        "indication": "Adjuvant gBRCA high-risk HER2- early breast cancer"
      }
    ],
    "targets": [
      "parp"
    ],
    "companies": [
      "astrazeneca",
      "merck"
    ],
    "indications": [
      "prostate",
      "prostate-mcrpc"
    ],
    "trials": [
      "nct06909825"
    ],
    "dosing": {
      "route": "Oral",
      "schedule": "300 mg twice daily; 1 year adjuvant (OlympiA); 2 years first-line ovarian maintenance; until progression otherwise",
      "modifications": "200 mg BID for moderate renal impairment; hold for grade ≥3 anaemia; discontinue for MDS/AML or pneumonitis",
      "monitoring": "Blood counts monthly; respiratory symptoms; embryo-fetal counselling",
      "source": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=741ff3e3-dc1a-45a6-84e5-2481b27131aa"
    },
    "toxicity": [
      {
        "event": "Nausea",
        "anyGradePct": 57,
        "grade3PlusPct": 0.8,
        "source": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=741ff3e3-dc1a-45a6-84e5-2481b27131aa",
        "note": "OlympiA adjuvant, n=911"
      },
      {
        "event": "Fatigue",
        "anyGradePct": 42,
        "grade3PlusPct": 1.8,
        "source": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=741ff3e3-dc1a-45a6-84e5-2481b27131aa",
        "note": "OlympiA adjuvant, n=911"
      },
      {
        "event": "Anaemia",
        "anyGradePct": 24,
        "grade3PlusPct": 9,
        "source": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=741ff3e3-dc1a-45a6-84e5-2481b27131aa",
        "note": "OlympiA adjuvant, n=911"
      },
      {
        "event": "Vomiting",
        "anyGradePct": 23,
        "grade3PlusPct": 0.7,
        "source": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=741ff3e3-dc1a-45a6-84e5-2481b27131aa",
        "note": "OlympiA adjuvant, n=911"
      },
      {
        "event": "Diarrhoea",
        "anyGradePct": 18,
        "grade3PlusPct": 0.3,
        "source": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=741ff3e3-dc1a-45a6-84e5-2481b27131aa",
        "note": "OlympiA adjuvant, n=911"
      },
      {
        "event": "Leukopenia",
        "anyGradePct": 17,
        "grade3PlusPct": 3,
        "source": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=741ff3e3-dc1a-45a6-84e5-2481b27131aa",
        "note": "OlympiA adjuvant, n=911"
      },
      {
        "event": "Neutropenia",
        "anyGradePct": 16,
        "grade3PlusPct": 5,
        "source": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=741ff3e3-dc1a-45a6-84e5-2481b27131aa",
        "note": "OlympiA adjuvant, n=911"
      },
      {
        "event": "MDS/AML",
        "anyGradePct": 1.2,
        "source": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=741ff3e3-dc1a-45a6-84e5-2481b27131aa",
        "note": "Cumulative across trials; 54% fatal"
      },
      {
        "event": "Pneumonitis",
        "anyGradePct": 1,
        "source": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=741ff3e3-dc1a-45a6-84e5-2481b27131aa",
        "note": "OlympiA adjuvant, n=911"
      },
      {
        "event": "Venous thromboembolism (prostate)",
        "anyGradePct": 8,
        "source": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=741ff3e3-dc1a-45a6-84e5-2481b27131aa",
        "note": "OlympiA adjuvant, n=911"
      }
    ],
    "access": [
      {
        "country": "US",
        "reimbursement": "Medicare Part D (oral); commercial plans per formulary, often with prior authorisation",
        "assistance": "https://www.astrazeneca-us.com/medicines/access-360",
        "source": "https://www.cms.gov/medicare/payment/part-b-drugs/asp-pricing-files",
        "asOf": "2026-09-06"
      },
      {
        "country": "UK",
        "reimbursement": "NICE: recommended in ovarian maintenance (TA598, TA620), adjuvant gBRCA breast (TA886), metastatic breast (TA1100), prostate (TA887)",
        "source": "https://www.nice.org.uk/guidance/published?ngt=Technology%20appraisal%20guidance",
        "asOf": "2026-09-06"
      },
      {
        "country": "EU",
        "reimbursement": "EMA approved across indications",
        "asOf": "2026-09-06"
      }
    ],
    "regulatoryEvents": [
      {
        "date": "2014-12-19",
        "type": "approval",
        "region": "US",
        "note": "gBRCA advanced ovarian cancer after ≥3 lines: first PARP inhibitor",
        "source": "https://www.fda.gov/drugs/resources-information-approved-drugs/oncology-cancer-hematologic-malignancies-approval-notifications"
      },
      {
        "date": "2017-08-17",
        "type": "approval",
        "region": "US",
        "note": "Maintenance in platinum-sensitive recurrent ovarian cancer; tablet formulation",
        "source": "https://www.fda.gov/drugs/resources-information-approved-drugs/oncology-cancer-hematologic-malignancies-approval-notifications"
      },
      {
        "date": "2018-01-12",
        "type": "approval",
        "region": "US",
        "note": "gBRCA HER2-negative metastatic breast cancer (OlympiAD)",
        "source": "https://www.fda.gov/drugs/resources-information-approved-drugs/oncology-cancer-hematologic-malignancies-approval-notifications"
      },
      {
        "date": "2018-12-19",
        "type": "approval",
        "region": "US",
        "note": "First-line maintenance in BRCA-mutated ovarian cancer (SOLO-1)",
        "source": "https://www.fda.gov/drugs/resources-information-approved-drugs/oncology-cancer-hematologic-malignancies-approval-notifications"
      },
      {
        "date": "2019-12-27",
        "type": "approval",
        "region": "US",
        "note": "gBRCA metastatic pancreatic cancer maintenance (POLO)",
        "source": "https://www.fda.gov/drugs/resources-information-approved-drugs/oncology-cancer-hematologic-malignancies-approval-notifications"
      },
      {
        "date": "2020-05-19",
        "type": "approval",
        "region": "US",
        "note": "HRR-mutant mCRPC (PROfound)",
        "source": "https://www.fda.gov/drugs/resources-information-approved-drugs/oncology-cancer-hematologic-malignancies-approval-notifications"
      },
      {
        "date": "2022-03-11",
        "type": "approval",
        "region": "US",
        "note": "Adjuvant gBRCA high-risk HER2-negative early breast cancer (OlympiA)",
        "source": "https://www.fda.gov/drugs/resources-information-approved-drugs/oncology-cancer-hematologic-malignancies-approval-notifications"
      },
      {
        "date": "2023-05-31",
        "type": "approval",
        "region": "US",
        "note": "With abiraterone in BRCA-mutated mCRPC (PROpel)",
        "source": "https://www.fda.gov/drugs/resources-information-approved-drugs/oncology-cancer-hematologic-malignancies-approval-notifications"
      }
    ],
    "mechanismSteps": [
      "Olaparib binds PARP1/2 at sites of single-strand DNA breaks",
      "PARP is trapped on DNA and repair of single-strand breaks stops",
      "Replication forks collide with trapped PARP and collapse into double-strand breaks",
      "BRCA-deficient cells cannot repair the breaks by homologous recombination",
      "Genomic catastrophe and apoptosis in tumour cells; normal cells with intact BRCA survive"
    ]
  },
  {
    "kind": "drug",
    "asOf": "2026-09-17",
    "tags": [
      "subtype-drugs-wave"
    ],
    "id": "pasireotide",
    "name": "Pasireotide",
    "brand": "Signifor / Signifor LAR",
    "aka": [
      "SOM230"
    ],
    "modality": "Multireceptor somatostatin analogue (subcutaneous or monthly depot)",
    "status": "approved",
    "mechanism": "Binds somatostatin receptors 1, 2, 3 and 5, with far higher affinity for SSTR5 than octreotide; SSTR5 dominates on corticotroph adenomas, so it suppresses ACTH in Cushing's disease and growth hormone in acromegaly resistant to first-generation analogues.",
    "tldr": "Pasireotide is a second-generation somatostatin analogue that hits more receptor types than octreotide. It is approved for Cushing's disease and acromegaly caused by pituitary tumours when surgery has not cured them, at the cost of frequent high blood sugar.",
    "summary": "Pasireotide (SOM230) was developed by Novartis and is now marketed by Recordati. The FDA approved the twice-daily subcutaneous form in 2012 for Cushing's disease when surgery is not an option or has failed, the first drug approved for that indication, and the monthly long-acting depot in 2014 for acromegaly inadequately controlled by surgery. It normalises cortisol in a minority and growth hormone and IGF-1 in a larger fraction of patients, and shrinks tumours in many.\n\nHyperglycaemia, from suppression of insulin and incretins, is the main side effect and often needs treatment. Beyond the pituitary, the phase 2 LUNA trial tested it alone and with everolimus in lung and thymic neuroendocrine tumours and found activity in each arm, without a placebo comparison. The pituitary tumours and lung neuroendocrine tumour pages name it.",
    "approvals": [
      {
        "region": "US",
        "year": 2012,
        "indication": "Cushing's disease when pituitary surgery is not an option or has not been curative"
      },
      {
        "region": "US",
        "year": 2014,
        "indication": "Acromegaly inadequately controlled by surgery or for whom surgery is not an option (long-acting depot)"
      }
    ],
    "targets": [
      "sstr2"
    ],
    "indications": [
      "lung-net"
    ],
    "related": [
      "everolimus"
    ],
    "wikipedia": "https://en.wikipedia.org/wiki/Pasireotide",
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Pasireotide"
      }
    ]
  },
  {
    "id": "pembrolizumab",
    "kind": "drug",
    "links": [
      {
        "label": "FDA label (DailyMed)",
        "url": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=Pembrolizumab"
      }
    ],
    "name": "Pembrolizumab",
    "brand": "Keytruda / Keytruda Qlex (SC)",
    "modality": "Monoclonal antibody (anti-PD-1)",
    "asOf": "2026-09-04",
    "status": "approved",
    "wikipedia": "https://en.wikipedia.org/wiki/Pembrolizumab",
    "tldr": "Pembrolizumab is a PD-1 blocking antibody approved in more than 40 settings, from melanoma and lung cancer to the first tumour-agnostic approval for mismatch-repair-deficient tumours in 2017, and before and after surgery in triple-negative breast cancer. A subcutaneous form arrived in 2025, and it is the backbone partner for ADCs and personalised neoantigen vaccines.",
    "summary": "Approvals span melanoma, NSCLC, head and neck, Hodgkin, urothelial, MSI-H/dMMR tumours (first tumour-agnostic approval, 2017), gastric, oesophageal, cervical, HCC, RCC, endometrial, TNBC (KEYNOTE-355 metastatic CPS ≥10; KEYNOTE-522 neoadjuvant/adjuvant with 7-year OS benefit), TMB-high, and more. 2026 additions include platinum-resistant PD-L1+ ovarian cancer, adjuvant RCC with belzutifan, and combination labels with sacituzumab govitecan (ASCENT-04) and enfortumab vedotin. Subcutaneous Keytruda Qlex approved 2025. Backbone for neoantigen vaccines (intismeran).",
    "mechanism": "Humanised IgG4 blocking PD-1; restores T-cell effector function.",
    "approvals": [
      {
        "region": "US",
        "year": 2014,
        "indication": "Melanoma (first of >40 indications)"
      },
      {
        "region": "US",
        "year": 2017,
        "indication": "MSI-H/dMMR solid tumours (tumour-agnostic)"
      },
      {
        "region": "US",
        "year": 2020,
        "indication": "Metastatic TNBC, PD-L1 CPS ≥10, with chemotherapy"
      },
      {
        "region": "US",
        "year": 2021,
        "indication": "High-risk early TNBC, neoadjuvant + adjuvant (KEYNOTE-522)"
      },
      {
        "region": "US",
        "year": 2026,
        "indication": "Platinum-resistant PD-L1+ ovarian cancer; adjuvant RCC with belzutifan; with sacituzumab govitecan in 1L TNBC"
      }
    ],
    "companies": [
      "merck"
    ],
    "indications": [
      "hcc",
      "rcc"
    ],
    "dosing": {
      "route": "IV infusion over 30 min (subcutaneous Keytruda Qlex available)",
      "schedule": "200 mg every 3 weeks or 400 mg every 6 weeks; paediatric 2 mg/kg (max 200 mg) every 3 weeks; up to 24 months in most metastatic settings",
      "modifications": "Hold for grade 2 immune-mediated events; permanently discontinue for grade 4 or recurrent grade 3",
      "monitoring": "Thyroid function, LFTs, creatinine, glucose at baseline and periodically; patient education on immune-related symptoms",
      "source": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9333c79b-d487-4538-a9f0-71b91a02b287"
    },
    "toxicity": [
      {
        "event": "Hypothyroidism (immune-mediated)",
        "anyGradePct": 8,
        "source": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9333c79b-d487-4538-a9f0-71b91a02b287",
        "note": "Pooled monotherapy data, >2,800 patients"
      },
      {
        "event": "Pneumonitis (immune-mediated)",
        "anyGradePct": 3.4,
        "source": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9333c79b-d487-4538-a9f0-71b91a02b287",
        "note": "Pooled monotherapy data, >2,800 patients"
      },
      {
        "event": "Colitis (immune-mediated)",
        "anyGradePct": 1.7,
        "source": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9333c79b-d487-4538-a9f0-71b91a02b287",
        "note": "Pooled monotherapy data, >2,800 patients"
      },
      {
        "event": "Hepatitis (immune-mediated)",
        "anyGradePct": 0.7,
        "source": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9333c79b-d487-4538-a9f0-71b91a02b287",
        "note": "Pooled monotherapy data, >2,800 patients"
      },
      {
        "event": "Fatigue",
        "source": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9333c79b-d487-4538-a9f0-71b91a02b287",
        "note": "Pooled monotherapy data, >2,800 patients"
      },
      {
        "event": "Musculoskeletal pain",
        "source": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9333c79b-d487-4538-a9f0-71b91a02b287",
        "note": "Pooled monotherapy data, >2,800 patients"
      },
      {
        "event": "Rash",
        "source": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9333c79b-d487-4538-a9f0-71b91a02b287",
        "note": "Pooled monotherapy data, >2,800 patients"
      },
      {
        "event": "Diarrhoea",
        "source": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9333c79b-d487-4538-a9f0-71b91a02b287",
        "note": "Pooled monotherapy data, >2,800 patients"
      },
      {
        "event": "Pyrexia",
        "source": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9333c79b-d487-4538-a9f0-71b91a02b287",
        "note": "Pooled monotherapy data, >2,800 patients"
      }
    ],
    "access": [
      {
        "country": "US",
        "reimbursement": "Medicare Part B (physician-administered); commercial plans per formulary",
        "assistance": "https://www.merckaccessprogram-keytruda.com",
        "source": "https://www.cms.gov/medicare/payment/part-b-drugs/asp-pricing-files",
        "asOf": "2026-09-06",
        "listPrice": "$11,564 per 200 mg dose (WAC, Merck price disclosure 2024)"
      },
      {
        "country": "UK",
        "reimbursement": "NICE: recommended across many indications (melanoma, NSCLC, TNBC KEYNOTE-522/355, RCC, HNSCC, cervical, oesophageal and others)",
        "source": "https://www.nice.org.uk/guidance/published?ngt=Technology%20appraisal%20guidance",
        "asOf": "2026-09-06"
      },
      {
        "country": "EU",
        "reimbursement": "EMA approved; reimbursed in all member states for core indications",
        "asOf": "2026-09-06"
      }
    ],
    "regulatoryEvents": [
      {
        "date": "2014-09-04",
        "type": "approval",
        "region": "US",
        "note": "Accelerated approval, advanced melanoma after ipilimumab; first PD-1 inhibitor in the US",
        "source": "https://www.fda.gov/drugs/resources-information-approved-drugs/oncology-cancer-hematologic-malignancies-approval-notifications"
      },
      {
        "date": "2015-10-02",
        "type": "approval",
        "region": "US",
        "note": "PD-L1+ NSCLC after platinum",
        "source": "https://www.fda.gov/drugs/resources-information-approved-drugs/oncology-cancer-hematologic-malignancies-approval-notifications"
      },
      {
        "date": "2017-05-23",
        "type": "approval",
        "region": "US",
        "note": "MSI-H/dMMR solid tumours: first tumour-agnostic approval",
        "source": "https://www.fda.gov/drugs/resources-information-approved-drugs/oncology-cancer-hematologic-malignancies-approval-notifications"
      },
      {
        "date": "2020-06-16",
        "type": "approval",
        "region": "US",
        "note": "TMB-high solid tumours (tumour-agnostic)",
        "source": "https://www.fda.gov/drugs/resources-information-approved-drugs/oncology-cancer-hematologic-malignancies-approval-notifications"
      },
      {
        "date": "2020-11-13",
        "type": "approval",
        "region": "US",
        "note": "Metastatic TNBC, PD-L1 CPS ≥10, with chemotherapy (KEYNOTE-355)",
        "source": "https://www.fda.gov/drugs/resources-information-approved-drugs/oncology-cancer-hematologic-malignancies-approval-notifications"
      },
      {
        "date": "2021-07-26",
        "type": "approval",
        "region": "US",
        "note": "High-risk early TNBC, neoadjuvant and adjuvant (KEYNOTE-522)",
        "source": "https://www.fda.gov/drugs/resources-information-approved-drugs/oncology-cancer-hematologic-malignancies-approval-notifications"
      },
      {
        "date": "2023-10-16",
        "type": "approval",
        "region": "US",
        "note": "Perioperative NSCLC (KEYNOTE-671)",
        "source": "https://www.fda.gov/drugs/resources-information-approved-drugs/oncology-cancer-hematologic-malignancies-approval-notifications"
      },
      {
        "date": "2025-09",
        "type": "approval",
        "region": "US",
        "note": "Subcutaneous pembrolizumab (Keytruda Qlex)",
        "source": "https://www.fda.gov/drugs/resources-information-approved-drugs/oncology-cancer-hematologic-malignancies-approval-notifications"
      },
      {
        "date": "2026-Q1",
        "type": "approval",
        "region": "US",
        "note": "Platinum-resistant PD-L1+ ovarian cancer",
        "source": "https://www.fda.gov/drugs/resources-information-approved-drugs/oncology-cancer-hematologic-malignancies-approval-notifications"
      },
      {
        "date": "2026-06-12",
        "type": "approval",
        "region": "US",
        "note": "Adjuvant RCC with belzutifan (LITESPARK-022)",
        "source": "https://www.fda.gov/drugs/resources-information-approved-drugs/fda-approves-belzutifan-pembrolizumab-adjuvant-treatment-renal-cell-carcinoma"
      },
      {
        "date": "2026-06-24",
        "type": "approval",
        "region": "US",
        "note": "First-line PD-L1+ TNBC with sacituzumab govitecan (ASCENT-04)",
        "source": "https://www.fda.gov/drugs/resources-information-approved-drugs/fda-approves-sacituzumab-govitecan-hziy-monotherapy-and-combination-pembrolizumab-first-line"
      },
      {
        "date": "2026-07-10",
        "type": "approval",
        "region": "US",
        "note": "Muscle-invasive bladder cancer with enfortumab vedotin, as pembrolizumab or pembrolizumab with berahyaluronidase alfa",
        "source": "https://www.fda.gov/drugs/resources-information-approved-drugs/fda-approves-pembrolizumab-or-pembrolizumab-and-berahyaluronidase-alfa-pmph-each-enfortumab-vedotin"
      }
    ],
    "mechanismSteps": [
      "Antibody binds PD-1 on T cells",
      "PD-1/PD-L1 engagement between T cell and tumour is blocked",
      "Exhausted tumour-reactive T cells regain effector function",
      "Interferon-γ and cytotoxic granules are released at the tumour",
      "Tumour cells are killed; memory T cells persist"
    ]
  },
  {
    "kind": "drug",
    "asOf": "2026-09-17",
    "tags": [
      "subtype-drugs-wave"
    ],
    "id": "phosphorus-32",
    "name": "Phosphorus-32 (radiophosphorus)",
    "aka": [
      "Radiophosphorus",
      "Sodium phosphate P-32",
      "32P"
    ],
    "modality": "Intravenous radiopharmaceutical (beta emitter; historic)",
    "status": "historic",
    "mechanism": "Phosphate labelled with the beta emitter phosphorus-32 is taken up by rapidly dividing marrow cells and incorporated into their DNA, where the radiation suppresses the overactive marrow of polycythaemia vera.",
    "tldr": "Radiophosphorus was one of the first treatments for polycythaemia vera, from the 1940s: a radioactive phosphate injection that quietened the overactive bone marrow for a year or more. It was abandoned when trials showed it raised the risk of leukaemia.",
    "summary": "Phosphorus-32 was introduced by John Lawrence at Berkeley in the late 1930s as the first therapeutic use of an artificial radionuclide, and became a standard treatment for polycythaemia vera and essential thrombocythaemia. A single intravenous dose controlled blood counts for one to two years and was convenient for older patients.\n\nThe Polycythemia Vera Study Group's first randomised trial, launched in 1967, compared phlebotomy alone, phlebotomy plus radiophosphorus and phlebotomy plus chlorambucil, and showed that both radiophosphorus and chlorambucil raised the risk of acute leukaemia several-fold. Radiophosphorus was thereafter restricted to the very elderly and is now rarely used, replaced by hydroxyurea, interferon and JAK inhibitors. The polycythaemia vera page records it in the history of the disease.",
    "approvals": [],
    "wikipedia": "https://en.wikipedia.org/wiki/Phosphorus-32",
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Phosphorus-32"
      }
    ]
  },
  {
    "id": "pluvicto",
    "kind": "drug",
    "links": [
      {
        "label": "FDA label (DailyMed)",
        "url": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=Lutetium-177%20vipivotide%20tetraxetan"
      }
    ],
    "name": "Lutetium-177 vipivotide tetraxetan",
    "brand": "Pluvicto",
    "code": "177Lu-PSMA-617",
    "modality": "Radioligand therapy (beta)",
    "asOf": "2026-09-04",
    "status": "approved",
    "wikipedia": "https://en.wikipedia.org/wiki/Lutetium_(177Lu)_vipivotide_tetraxetan",
    "tldr": "A radioactive drug that seeks out PSMA on prostate cancer cells; the best-selling radiopharmaceutical ever.",
    "summary": "VISION (2021): OS 15.3 vs 11.3 months in post-chemotherapy mCRPC. PSMAfore (2023) led to a 2025 label before chemotherapy. July 2026 FDA action further expanded the label (per AACR/FDA roundups). PSMAddition tests it in hormone-sensitive disease. Requires PSMA PET positivity. Six cycles every 6 weeks; xerostomia, cytopenias, renal monitoring.",
    "mechanism": "Small-molecule PSMA ligand chelated to 177Lu; beta emission with 2 mm range.",
    "approvals": [
      {
        "region": "US",
        "year": 2022,
        "indication": "PSMA+ mCRPC after ARPI and taxane"
      },
      {
        "region": "US",
        "year": 2025,
        "indication": "PSMA+ mCRPC after ARPI, before chemotherapy"
      },
      {
        "region": "US",
        "year": 2026,
        "indication": "Label expansion (July 2026)"
      },
      {
        "region": "EU",
        "year": 2022,
        "indication": "mCRPC post-ARPI and taxane; pre-chemo 2025"
      }
    ],
    "targets": [
      "psma"
    ],
    "technologies": [
      "radioligand-therapy",
      "psma-pet"
    ],
    "companies": [
      "novartis"
    ],
    "indications": [
      "prostate",
      "prostate-mcrpc",
      "prostate-mhspc"
    ],
    "trials": [
      "vision",
      "psmafore",
      "nct05682443",
      "nct06894511",
      "nct06004661"
    ],
    "people": [
      "louise-emmett"
    ],
    "dosing": {
      "route": "IV injection",
      "schedule": "7.4 GBq (200 mCi) every 6 weeks for up to 6 doses",
      "modifications": "Hold for grade ≥3 myelosuppression or renal impairment; permanently discontinue for grade 4 haematologic toxicity",
      "monitoring": "Blood counts and renal function before each dose; hydration; radiation-protection instructions for 7 days",
      "source": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=14908037-2892-4d98-a053-253ce35afb1a"
    },
    "toxicity": [
      {
        "event": "Lymphocytes decreased",
        "anyGradePct": 85,
        "grade3PlusPct": 47,
        "source": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=14908037-2892-4d98-a053-253ce35afb1a",
        "note": "VISION"
      },
      {
        "event": "Haemoglobin decreased",
        "anyGradePct": 64,
        "grade3PlusPct": 15,
        "source": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=14908037-2892-4d98-a053-253ce35afb1a",
        "note": "VISION"
      },
      {
        "event": "Fatigue",
        "anyGradePct": 48,
        "source": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=14908037-2892-4d98-a053-253ce35afb1a",
        "note": "VISION"
      },
      {
        "event": "Dry mouth",
        "anyGradePct": 39,
        "source": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=14908037-2892-4d98-a053-253ce35afb1a",
        "note": "VISION"
      },
      {
        "event": "Nausea",
        "anyGradePct": 36,
        "source": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=14908037-2892-4d98-a053-253ce35afb1a",
        "note": "VISION"
      },
      {
        "event": "Decreased appetite",
        "anyGradePct": 21,
        "source": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=14908037-2892-4d98-a053-253ce35afb1a",
        "note": "VISION"
      },
      {
        "event": "Platelets decreased",
        "grade3PlusPct": 9,
        "source": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=14908037-2892-4d98-a053-253ce35afb1a",
        "note": "VISION"
      }
    ],
    "access": [
      {
        "country": "US",
        "reimbursement": "Medicare Part B (physician-administered); commercial plans per formulary",
        "assistance": "https://www.novartis.com/us-en/patient-support",
        "source": "https://www.cms.gov/medicare/payment/part-b-drugs/asp-pricing-files",
        "asOf": "2026-09-06",
        "listPrice": "~$42,500 per dose (Novartis, 2022 launch price)"
      },
      {
        "country": "UK",
        "reimbursement": "NICE: recommended for PSMA+ mCRPC after ARPI and taxane (2025); pre-chemotherapy appraisal in progress",
        "source": "https://www.nice.org.uk/guidance/published?ngt=Technology%20appraisal%20guidance",
        "asOf": "2026-09-06"
      }
    ],
    "regulatoryEvents": [
      {
        "date": "2021-06",
        "type": "designation",
        "region": "US",
        "note": "Breakthrough Therapy designation",
        "source": "https://www.fda.gov/drugs/resources-information-approved-drugs/oncology-cancer-hematologic-malignancies-approval-notifications"
      },
      {
        "date": "2022-03-23",
        "type": "approval",
        "region": "US",
        "note": "PSMA+ mCRPC after ARPI and taxane (VISION)",
        "source": "https://www.fda.gov/drugs/resources-information-approved-drugs/oncology-cancer-hematologic-malignancies-approval-notifications"
      },
      {
        "date": "2022-12",
        "type": "approval",
        "region": "EU",
        "note": "EMA approval",
        "source": "https://www.fda.gov/drugs/resources-information-approved-drugs/oncology-cancer-hematologic-malignancies-approval-notifications"
      },
      {
        "date": "2025-03-28",
        "type": "approval",
        "region": "US",
        "note": "PSMA+ mCRPC after ARPI, before chemotherapy (PSMAfore)",
        "source": "https://www.fda.gov/drugs/resources-information-approved-drugs/oncology-cancer-hematologic-malignancies-approval-notifications"
      },
      {
        "date": "2026-07-31",
        "type": "approval",
        "region": "US",
        "note": "PSMA+ metastatic hormone-sensitive prostate cancer with ARPI (PSMAddition)",
        "source": "https://www.fda.gov/drugs/resources-information-approved-drugs/oncology-cancer-hematologic-malignancies-approval-notifications"
      }
    ],
    "mechanismSteps": [
      "Radioligand circulates and binds PSMA on tumour cells",
      "Ligand is internalised or retained at the membrane",
      "Beta emissions deposit energy within a short range",
      "Clustered DNA double-strand breaks form in the tumour cell and its neighbours (crossfire)",
      "Cells die; unbound ligand is cleared via the kidneys"
    ]
  },
  {
    "id": "psma-1007-f18",
    "kind": "drug",
    "name": "PSMA-1007 F-18",
    "aka": [],
    "modality": "PSMA-targeted PET radiotracer, fluorine-18",
    "mechanism": "A fluorine-18 PSMA ligand excreted mainly through the liver rather than the kidneys, so the bladder does not obscure the prostate bed on PET.",
    "status": "phase-3",
    "asOf": "2026-09-16",
    "tags": [
      "pipeline",
      "ctgov-ingest"
    ],
    "provenance": {
      "editedBy": "Nuclide ingestion (ClinicalTrials.gov v2, curated)",
      "editedOn": "2026-09-16"
    },
    "tldr": "PSMA-1007 is a fluorine-18 PSMA PET tracer from ABX in Germany, widely used in Europe for prostate cancer staging because little of it reaches the bladder, and in a phase 3 trial registered by its maker.",
    "summary": "PSMA-1007, developed at Heidelberg and manufactured by ABX advanced biochemical compounds in Radeberg, is a fluorine-18 PSMA ligand whose low urinary excretion improves views of the prostate bed and pelvic nodes. It is authorised in several European countries and Canada and used in many centres alongside gallium-68 PSMA-11 and piflufolastat; a phase 3 trial by ABX is registered on ClinicalTrials.gov.",
    "targets": [
      "psma"
    ],
    "indications": [
      "prostate"
    ],
    "technologies": [
      "psma-pet",
      "pet"
    ],
    "companies": [
      "abx-advanced-biochemical-compounds"
    ],
    "trials": [
      "nct06122584"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov: trials of PSMA-1007 F-18",
        "url": "https://clinicaltrials.gov/search?intr=PSMA-1007%20F-18"
      }
    ]
  },
  {
    "id": "pylarify",
    "kind": "drug",
    "links": [
      {
        "label": "FDA label (DailyMed)",
        "url": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=Piflufolastat%20F-18"
      }
    ],
    "name": "Piflufolastat F-18 / Pylarify TruVu",
    "brand": "Pylarify",
    "code": "18F-DCFPyL",
    "modality": "PET imaging agent",
    "asOf": "2026-09-04",
    "status": "approved",
    "wikipedia": "https://en.wikipedia.org/wiki/Piflufolastat_F-18",
    "tldr": "Piflufolastat F-18 (Pylarify) is the leading PSMA PET tracer for prostate cancer, with a new formulation approved in March 2026.",
    "summary": "Piflufolastat F-18 is a PET tracer: an 18F-labelled urea that binds prostate-specific membrane antigen (PSMA), lighting up prostate cancer deposits that conventional CT and bone scan miss. It was approved in 2021 for PSMA PET in initial staging and biochemical recurrence, and Lantheus' Pylarify TruVu formulation, approved on 9 March 2026, offers an improved formulation and distribution profile. A single 333 MBq dose is injected and imaging follows 60 to 120 minutes later; adverse effects are minor. The 18F label allows central manufacture and shipping, unlike generator-produced 68Ga agents, and it competes with Illuccix/Gozellix (68Ga, Telix), Locametz (Novartis) and Posluma. The open question is whether the management changes PSMA PET triggers translate into longer survival. For a newcomer: the leading tracer for seeing where prostate cancer actually is.",
    "mechanism": "18F-labelled PSMA-binding urea.",
    "approvals": [
      {
        "region": "US",
        "year": 2021,
        "indication": "PSMA PET imaging in prostate cancer"
      },
      {
        "region": "US",
        "year": 2026,
        "indication": "Pylarify TruVu formulation"
      },
      {
        "region": "EU",
        "year": 2023,
        "indication": "EU brand Pylclari (Curium)"
      }
    ],
    "targets": [
      "psma"
    ],
    "technologies": [
      "psma-pet"
    ],
    "companies": [
      "lantheus"
    ],
    "indications": [
      "prostate"
    ],
    "dosing": {
      "route": "IV injection (diagnostic)",
      "schedule": "333 MBq (9 mCi) single dose; imaging 60-120 minutes later",
      "monitoring": "Hydration and voiding to reduce bladder dose",
      "source": "https://www.fda.gov/drugs/resources-information-approved-drugs/oncology-cancer-hematologic-malignancies-approval-notifications"
    },
    "toxicity": [
      {
        "event": "Headache",
        "note": "Rare; diagnostic dose"
      },
      {
        "event": "Dysgeusia"
      },
      {
        "event": "Fatigue"
      }
    ],
    "access": [
      {
        "country": "US",
        "reimbursement": "Medicare pass-through/payment for PSMA PET; broad commercial coverage for staging and biochemical recurrence",
        "source": "https://www.cms.gov/medicare/payment/part-b-drugs/asp-pricing-files",
        "asOf": "2026-09-06"
      }
    ],
    "regulatoryEvents": [
      {
        "date": "2021-05-26",
        "type": "approval",
        "region": "US",
        "note": "PSMA PET imaging in prostate cancer: first 18F PSMA agent",
        "source": "https://www.fda.gov/drugs/resources-information-approved-drugs/oncology-cancer-hematologic-malignancies-approval-notifications"
      },
      {
        "date": "2026-03-09",
        "type": "approval",
        "region": "US",
        "note": "Pylarify TruVu formulation",
        "source": "https://www.fda.gov/drugs/resources-information-approved-drugs/oncology-cancer-hematologic-malignancies-approval-notifications"
      }
    ],
    "mechanismSteps": [
      "18F-labelled small molecule binds the PSMA active site",
      "Tracer is internalised and retained in prostate cancer cells",
      "Positron emissions are detected by the PET scanner",
      "Whole-body map of PSMA-expressing disease is produced",
      "Result selects patients for PSMA radioligand therapy"
    ]
  },
  {
    "kind": "drug",
    "asOf": "2026-09-07",
    "id": "radioactive-iodine",
    "links": [
      {
        "label": "FDA label (DailyMed)",
        "url": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=Radioactive%20iodine"
      }
    ],
    "name": "Radioactive iodine (I-131)",
    "brand": "Sodium iodide I-131",
    "modality": "Radiopharmaceutical (beta/gamma emitter, natural uptake)",
    "status": "approved",
    "wikipedia": "https://en.wikipedia.org/wiki/Iodine-131",
    "tldr": "The original targeted radiotherapy: thyroid cells soak up iodine, so radioactive iodine destroys leftover thyroid tissue and metastases while sparing everything else.",
    "summary": "In use since 1946 for differentiated thyroid cancer; the archetype of theranostics (I-123 or I-131 scans image the same uptake). Roles: remnant ablation after thyroidectomy (now omitted in low-risk disease after ESTIMABL2, IoN, HiLo), adjuvant treatment of intermediate/high-risk disease, and treatment of iodine-avid metastases. Given after TSH stimulation (withdrawal or recombinant TSH). Salivary damage, secondary malignancy at high cumulative doses, and refractoriness in dedifferentiated tumours are the limits.",
    "mechanism": "Sodium-iodide symporter (NIS) concentrates iodide in thyroid follicular cells; I-131 beta particles (mean path ~0.8 mm) irradiate the cell and neighbours; gamma emission enables imaging.",
    "mechanismSteps": [
      "TSH stimulation upregulates the sodium-iodide symporter on thyroid cells",
      "Oral I-131 is absorbed and concentrated in thyroid tissue and iodine-avid metastases",
      "Beta decay deposits radiation within ~1 mm, killing the cells over weeks",
      "Gamma emission allows a post-therapy scan to map uptake"
    ],
    "dosing": {
      "route": "Oral capsule or solution",
      "schedule": "1.1 GBq (30 mCi) for remnant ablation (HiLo); 3.7-7.4 GBq for adjuvant or metastatic treatment; low-iodine diet and TSH stimulation beforehand",
      "monitoring": "Post-therapy whole-body scan; thyroglobulin; salivary and marrow function",
      "source": "https://www.thyroid.org/professionals/ata-professional-guidelines/"
    },
    "toxicity": [
      {
        "event": "Sialadenitis / xerostomia",
        "note": "Dose-dependent; common after repeated high-activity treatment",
        "source": "https://www.thyroid.org/professionals/ata-professional-guidelines/"
      }
    ],
    "approvals": [
      {
        "region": "US",
        "year": 1951,
        "indication": "Hyperthyroidism and thyroid carcinoma (first radiopharmaceutical approval)"
      }
    ],
    "regulatoryEvents": [
      {
        "date": "1946",
        "type": "approval",
        "region": "US",
        "note": "First therapeutic use in thyroid cancer (Seidlin); formal approval followed"
      }
    ],
    "targets": [
      "sstr2"
    ],
    "technologies": [
      "radioiodine-therapy",
      "radioligand-therapy"
    ],
    "indications": [
      "thyroid"
    ],
    "trials": [
      "hilo",
      "estimabl2",
      "ion-trial"
    ],
    "terms": [
      "theranostics",
      "radioiodine-term"
    ]
  },
  {
    "kind": "drug",
    "asOf": "2026-09-06",
    "id": "radium-223",
    "links": [
      {
        "label": "FDA label (DailyMed)",
        "url": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=Radium-223%20dichloride"
      }
    ],
    "name": "Radium-223 dichloride",
    "brand": "Xofigo",
    "modality": "Targeted alpha therapy (bone-seeking)",
    "status": "approved",
    "wikipedia": "https://en.wikipedia.org/wiki/Radium-223",
    "tldr": "Radium-223 was the first alpha-emitting drug ever approved (2013). It homes to bone like calcium and treats prostate cancer that has spread only to bone.",
    "summary": "Radium-223 is a calcium mimetic incorporated into bone matrix at sites of metastatic bone turnover, where each decay chain delivers four alpha emissions over a range of a few cells, killing tumour while largely sparing marrow. It is given intravenously to men with symptomatic castration-resistant prostate cancer whose spread is confined to bone without visceral disease. ALSYMPCA showed overall survival of 14.9 versus 11.3 months (HR 0.70) and fewer skeletal events, and it became the first alpha-emitting drug ever approved (2013). ERA 223 showed excess fractures when combined with abiraterone, now contraindicated without bone protection, while PEACE III (2024) with enzalutamide plus bone-protecting agents was positive for rPFS and overall survival. How to sequence it with 177Lu-PSMA therapy is unresolved. Simply put, it is a radioactive calcium look-alike that homes to bone metastases.",
    "mechanism": "Calcium mimetic incorporated into bone matrix at metastases; four alpha emissions per decay chain.",
    "approvals": [
      {
        "region": "US",
        "year": 2013,
        "indication": "Symptomatic bone-metastatic CRPC without visceral disease"
      }
    ],
    "technologies": [
      "targeted-alpha-therapy"
    ],
    "companies": [
      "bayer"
    ],
    "indications": [
      "prostate",
      "prostate-mcrpc"
    ],
    "trials": [
      "alsympca"
    ],
    "terms": [
      "alpha-vs-beta"
    ]
  },
  {
    "kind": "drug",
    "asOf": "2026-09-07",
    "id": "rituximab",
    "aka": [
      "Rituximab and Hyaluronidase Human",
      "Rituxan Hycela"
    ],
    "links": [
      {
        "label": "FDA label (DailyMed)",
        "url": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=Rituximab"
      }
    ],
    "name": "Rituximab",
    "brand": "Rituxan / MabThera (and biosimilars)",
    "modality": "Monoclonal antibody (anti-CD20, chimeric)",
    "status": "approved",
    "wikipedia": "https://en.wikipedia.org/wiki/Rituximab",
    "tldr": "Rituximab was the first antibody ever approved for cancer (1997). It made chemoimmunotherapy the CLL standard for a decade, and biosimilars keep it cheap and everywhere.",
    "summary": "Approved in follicular lymphoma (1997), DLBCL (2006, R-CHOP), CLL (2010, with fludarabine-cyclophosphamide: FCR, the first regimen to show OS benefit in CLL). Superseded in CLL by targeted agents (CLL13, CLL14, ELEVATE-TN) but still used with venetoclax in relapse (MURANO: venetoclax-rituximab 24 months) and in resource-limited settings. Biosimilars (Truxima, Ruxience, Riabni) since 2018.",
    "mechanism": "Chimeric type I anti-CD20 IgG1: CDC, ADCC, and modest direct signalling.",
    "mechanismSteps": [
      "Binds CD20 and clusters it into lipid rafts",
      "Complement is fixed (CDC) and NK cells recruited (ADCC)",
      "B cells and CLL cells are lysed; normal B cells recover after 6-12 months"
    ],
    "dosing": {
      "route": "IV or subcutaneous (Rituxan Hycela)",
      "schedule": "CLL: 375 mg/m² cycle 1 then 500 mg/m² cycles 2-6 with chemotherapy or venetoclax",
      "monitoring": "Infusion reactions, HBV reactivation (boxed), PML (boxed), late-onset neutropenia",
      "source": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=all&query=Rituxan"
    },
    "toxicity": [
      {
        "event": "Infusion-related reactions (first infusion)",
        "anyGradePct": 77,
        "note": "Historic lymphoma data; lower with premedication",
        "source": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=all&query=Rituxan"
      },
      {
        "event": "Hepatitis B reactivation",
        "note": "Boxed warning; screen all patients"
      },
      {
        "event": "Late-onset neutropenia",
        "anyGradePct": 8
      }
    ],
    "approvals": [
      {
        "region": "US",
        "year": 1997,
        "indication": "Relapsed follicular lymphoma; first antibody approved for cancer"
      },
      {
        "region": "US",
        "year": 2010,
        "indication": "CLL with fludarabine and cyclophosphamide"
      }
    ],
    "targets": [
      "cd20"
    ],
    "indications": [
      "dlbcl"
    ]
  },
  {
    "id": "ryz101",
    "trials": [
      "nct06590857"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov: trials of Actinium-225 DOTATATE",
        "url": "https://clinicaltrials.gov/search?intr=RYZ101"
      }
    ],
    "kind": "drug",
    "name": "Actinium-225 DOTATATE",
    "code": "RYZ101",
    "modality": "Targeted alpha therapy",
    "asOf": "2026-09-04",
    "status": "phase-3",
    "tldr": "An alpha-particle version of Lutathera for neuroendocrine tumours that have stopped responding to the beta version.",
    "summary": "RYZ101 is actinium-225 DOTATATE, a targeted alpha therapy: the same SSTR2-binding peptide as Lutathera but chelating 225Ac, whose alpha decay chain delivers dense, short-range double-strand DNA breaks that beta particles cannot match. Bristol Myers Squibb acquired it with RayzeBio in 2024 for $4.1B. The ACTION-1 phase 3 trial tests it in SSTR-positive GEP-NETs progressing after 177Lu-SSTR therapy, at 10.5 MBq/kg every 8 weeks for 4 cycles, and it is also being combined with chemo-immunotherapy in extensive-stage small-cell lung cancer. Nausea, fatigue and lymphopenia are expected, and renal function is monitored because the kidneys clear the peptide. Whether alpha emission overcomes resistance to beta therapy, and whether 225Ac supply can meet demand, are the open questions. For a newcomer: an alpha-particle upgrade of an approved neuroendocrine radioligand.",
    "mechanism": "DOTATATE chelating 225Ac; alpha decay chain.",
    "targets": [
      "sstr2"
    ],
    "technologies": [
      "targeted-alpha-therapy"
    ],
    "companies": [
      "bms",
      "rayzebio"
    ],
    "indications": [
      "neuroendocrine",
      "sclc"
    ],
    "dosing": {
      "route": "IV infusion",
      "schedule": "10.5 MBq/kg every 8 weeks for 4 cycles (ACTION-1)",
      "monitoring": "Renal function, blood counts, amino acid co-infusion",
      "source": "https://clinicaltrials.gov/study/NCT05477576"
    },
    "toxicity": [
      {
        "event": "Nausea"
      },
      {
        "event": "Fatigue"
      },
      {
        "event": "Lymphopenia"
      },
      {
        "event": "Renal toxicity (monitor)"
      }
    ],
    "access": [
      {
        "country": "US",
        "reimbursement": "Investigational",
        "asOf": "2026-09-06"
      }
    ],
    "regulatoryEvents": [
      {
        "date": "2024-02-26",
        "type": "filing",
        "region": "US",
        "note": "BMS completes RayzeBio acquisition ($4.1B)",
        "source": "https://www.fda.gov/drugs/resources-information-approved-drugs/oncology-cancer-hematologic-malignancies-approval-notifications"
      }
    ],
    "mechanismSteps": [
      "Radioligand circulates and binds Somatostatin receptor 2 on tumour cells",
      "Ligand is internalised or retained at the membrane",
      "Alpha (225Ac) emissions deposit energy within a short range",
      "Clustered DNA double-strand breaks form in the tumour cell and its neighbours (crossfire)",
      "Cells die; unbound ligand is cleared via the kidneys"
    ]
  },
  {
    "kind": "drug",
    "asOf": "2026-09-10",
    "status": "approved",
    "id": "samarium-153-lexidronam",
    "name": "Samarium-153 lexidronam",
    "brand": "Quadramet",
    "aka": [
      "153Sm-EDTMP",
      "Samarium Sm 153 lexidronam pentasodium"
    ],
    "modality": "Bone-seeking therapeutic radiopharmaceutical (beta emitter)",
    "mechanism": "Samarium-153 chelated to the tetraphosphonate EDTMP concentrates in areas of high bone turnover around osteoblastic metastases; beta emission (1.9 day half-life) irradiates the metastases and relieves pain, with gamma emission allowing imaging.",
    "wikipedia": "https://en.wikipedia.org/wiki/Samarium_(153Sm)_lexidronam",
    "tldr": "Quadramet (samarium-153 lexidronam) is a radioactive bone-seeking injection that lodges in bone metastases and irradiates them from inside, approved in 1997 to relieve pain from prostate, breast and other cancers spread to bone. Most patients get relief within one to two weeks, but marrow suppression follows at three to five weeks, and radium-223 and PSMA radioligands have largely replaced it.",
    "summary": "Samarium-153 lexidronam was approved by the FDA in March 1997 and authorised in the EU in February 1998 for relief of pain in patients with confirmed osteoblastic metastatic bone lesions that take up technetium-labelled bisphosphonate on bone scan, on placebo-controlled trials in which most patients had pain relief within one to two weeks lasting for months. It and strontium-89 (Metastron) were the bone-pain radiopharmaceuticals of the 1990s; radium-223 (Xofigo), which extends survival in prostate cancer, and PSMA radioligands have since taken most of their role. A single intravenous dose is given; transient marrow suppression, with nadir at three to five weeks, is the main toxicity, and a pain flare can occur early. Distributed by Lantheus in the US and Curium in Europe.",
    "approvals": [
      {
        "region": "US",
        "year": 1997,
        "indication": "Relief of pain in patients with confirmed osteoblastic metastatic bone lesions that enhance on radionuclide bone scan"
      },
      {
        "region": "EU",
        "year": 1998,
        "indication": "Relief of bone pain from multiple painful osteoblastic skeletal metastases (Quadramet)"
      }
    ],
    "indications": [
      "prostate"
    ],
    "companies": [
      "lantheus",
      "curium"
    ],
    "technologies": [
      "radioligand-therapy"
    ],
    "related": [
      "radium-223"
    ],
    "links": [
      {
        "label": "EPAR (EMA)",
        "url": "https://www.ema.europa.eu/en/medicines/human/EPAR/quadramet"
      },
      {
        "label": "US label (DailyMed)",
        "url": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=all&query=samarium"
      }
    ],
    "tags": [
      "ema-list",
      "supportive"
    ]
  },
  {
    "kind": "drug",
    "asOf": "2026-09-07",
    "id": "sorafenib",
    "links": [
      {
        "label": "FDA label (DailyMed)",
        "url": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=Sorafenib"
      }
    ],
    "name": "Sorafenib",
    "brand": "Nexavar",
    "modality": "Small-molecule multi-kinase inhibitor (VEGFR, PDGFR, RAF)",
    "status": "approved",
    "wikipedia": "https://en.wikipedia.org/wiki/Sorafenib",
    "tldr": "The first drug ever to extend life in advanced liver cancer (2007), now mostly a comparator arm that newer combinations are measured against.",
    "summary": "SHARP: OS 10.7 vs 7.9 months versus placebo (HR 0.69). Standard first-line therapy for a decade until REFLECT (lenvatinib non-inferior) and IMbrave150 (atezolizumab-bevacizumab superior). Also approved in RCC and radioiodine-refractory thyroid cancer. Hand-foot skin reaction and diarrhoea dominate toxicity.",
    "mechanism": "Oral inhibitor of VEGFR1-3, PDGFR-β, KIT, FLT3 and RAF kinases; anti-angiogenic and anti-proliferative.",
    "mechanismSteps": [
      "Enters tumour and endothelial cells",
      "Blocks VEGFR/PDGFR signalling in vessels, cutting blood supply",
      "Inhibits RAF-MEK-ERK in tumour cells",
      "Tumour growth slows; rarely shrinks"
    ],
    "dosing": {
      "route": "Oral",
      "schedule": "400 mg twice daily continuously",
      "modifications": "Dose reduction to 400 mg daily for grade 2-3 hand-foot skin reaction",
      "monitoring": "Blood pressure, skin, liver function"
    },
    "toxicity": [
      {
        "event": "Diarrhoea",
        "anyGradePct": 39,
        "grade3PlusPct": 8,
        "note": "SHARP"
      },
      {
        "event": "Hand-foot skin reaction",
        "anyGradePct": 21,
        "grade3PlusPct": 8,
        "note": "SHARP"
      },
      {
        "event": "Fatigue",
        "anyGradePct": 22,
        "grade3PlusPct": 4,
        "note": "SHARP"
      }
    ],
    "approvals": [
      {
        "region": "US",
        "year": 2005,
        "indication": "Advanced RCC"
      },
      {
        "region": "US",
        "year": 2007,
        "indication": "Unresectable HCC"
      },
      {
        "region": "US",
        "year": 2013,
        "indication": "Radioiodine-refractory differentiated thyroid cancer"
      }
    ],
    "regulatoryEvents": [
      {
        "date": "2007-11-16",
        "type": "approval",
        "region": "US",
        "note": "Unresectable HCC on SHARP"
      }
    ],
    "companies": [
      "bayer"
    ],
    "indications": [
      "hcc",
      "rcc",
      "thyroid"
    ]
  },
  {
    "kind": "drug",
    "asOf": "2026-09-07",
    "id": "sunitinib",
    "links": [
      {
        "label": "FDA label (DailyMed)",
        "url": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=Sunitinib"
      }
    ],
    "name": "Sunitinib",
    "brand": "Sutent",
    "modality": "Small-molecule multi-kinase inhibitor (VEGFR, PDGFR, KIT)",
    "status": "approved",
    "wikipedia": "https://en.wikipedia.org/wiki/Sunitinib",
    "tldr": "Sunitinib is an anti-angiogenic pill approved for pancreatic neuroendocrine tumours, kidney cancer and GIST.",
    "summary": "Sunitinib is an oral inhibitor of VEGFR1-3, PDGFR, KIT, FLT3 and RET that blocks tumour blood-vessel growth and, in GIST, the KIT driver itself. It is approved for advanced renal cell carcinoma and imatinib-resistant GIST (2006), progressive pancreatic neuroendocrine tumours (2011, 37.5 mg daily continuously) and, little used, as adjuvant therapy in high-risk RCC (S-TRAC, 2017). The pancreatic NET phase 3 (Raymond 2011) showed PFS of 11.4 versus 5.5 months and was stopped early for benefit. In kidney cancer it has been largely displaced by immunotherapy combinations and is the control arm they beat in CheckMate 214, KEYNOTE-426, CheckMate 9ER and CLEAR, while it is still standard second line in GIST. Fatigue, diarrhoea, hand-foot syndrome, hypertension and hypothyroidism are common. For a newcomer, sunitinib defined first-line kidney cancer treatment before immunotherapy.",
    "mechanism": "Oral inhibitor of VEGFR1-3, PDGFR, KIT, FLT3, RET.",
    "dosing": {
      "route": "Oral",
      "schedule": "37.5 mg daily continuously (pNET)",
      "monitoring": "Blood pressure, thyroid, cardiac function"
    },
    "toxicity": [
      {
        "event": "Diarrhoea",
        "anyGradePct": 59
      },
      {
        "event": "Nausea",
        "anyGradePct": 45
      },
      {
        "event": "Hypertension",
        "anyGradePct": 26,
        "grade3PlusPct": 10
      },
      {
        "event": "Hand-foot syndrome",
        "anyGradePct": 23,
        "grade3PlusPct": 6
      }
    ],
    "approvals": [
      {
        "region": "US",
        "year": 2006,
        "indication": "Advanced RCC; GIST after imatinib"
      },
      {
        "region": "US",
        "year": 2011,
        "indication": "Progressive pancreatic NETs"
      },
      {
        "region": "US",
        "year": 2017,
        "indication": "Adjuvant RCC at high risk (S-TRAC), little used"
      }
    ],
    "companies": [
      "pfizer"
    ],
    "indications": [
      "neuroendocrine",
      "rcc",
      "metastatic-ppgl"
    ],
    "notes": [
      "In kidney cancer: Motzer 2007 showed PFS 11 versus 5 months against interferon alfa and OS 26.4 versus 21.8 months, and sunitinib then served as the control arm of CheckMate 214, KEYNOTE-426, CheckMate 9ER and CLEAR; it is now mainly used in favourable-risk disease, where immunotherapy doublets show no OS gain, and in GIST, and has been generic since 2021. Resistance runs through alternative angiogenic pathways (FGF, MET, AXL)."
    ]
  },
  {
    "kind": "drug",
    "asOf": "2026-09-08",
    "id": "technetium-sulfur-colloid",
    "name": "Technetium Tc-99m sulfur colloid",
    "brand": "Technetium Tc 99m Sulfur Colloid Kit",
    "aka": [
      "Tc-99m sulphur colloid"
    ],
    "modality": "Radiopharmaceutical for lymphatic mapping and liver, spleen and marrow imaging",
    "mechanism": "Colloidal particles labelled with technetium-99m are taken up by macrophages; injected near a tumour they drain to and lodge in the first (sentinel) lymph nodes, which a gamma probe then finds during surgery.",
    "status": "established",
    "wikipedia": "https://en.wikipedia.org/wiki/Technetium_(99mTc)_sulfur_colloid",
    "tldr": "Technetium sulfur colloid is the radioactive tracer injected around a breast cancer or melanoma before surgery so the surgeon can find the first lymph node the tumour drains to and remove only that node instead of the whole basin.",
    "summary": "Technetium-99m sulfur colloid has been used for liver, spleen and bone marrow scintigraphy since the 1970s, and the FDA label was extended to lymphatic mapping to localise lymph nodes draining a primary breast tumour or melanoma. Sentinel node biopsy guided by the tracer, often with blue dye, replaced routine axillary dissection in breast cancer and elective node dissection in melanoma after the NSABP B-32 and MSLT-I trials, sparing most patients lymphoedema. Tilmanocept (Lymphoseek), a purpose-designed mannose receptor agent, is the newer alternative.",
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Technetium_(99mTc)_sulfur_colloid"
      },
      {
        "label": "Label (DailyMed)",
        "url": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=all&query=technetium%20tc%2099m%20sulfur%20colloid"
      }
    ],
    "tags": [
      "gap-fill",
      "chembl-universe"
    ]
  },
  {
    "id": "temozolomide",
    "companies": [
      "merck"
    ],
    "kind": "drug",
    "name": "Temozolomide",
    "brand": "Temodar",
    "modality": "Oral alkylating chemotherapy",
    "asOf": "2026-09-06",
    "status": "standard-of-care",
    "wikipedia": "https://en.wikipedia.org/wiki/Temozolomide",
    "tldr": "The only chemotherapy proven to extend life in glioblastoma, given during and after radiation. It works best when the tumour has switched off a repair gene called MGMT.",
    "summary": "Stupp/EORTC 26981-NCIC (2005): adding concurrent and adjuvant temozolomide to radiotherapy raised median OS from 12.1 to 14.6 months and 2-year survival from 10% to 27%. Benefit concentrates in MGMT-promoter-methylated tumours (median OS ~23 months vs ~13 months unmethylated). Also standard with radiotherapy in grade 3 astrocytoma (CATNON) and, with PCV as an alternative, in oligodendroglioma. Oral, well tolerated; lymphopenia and hypermutation at recurrence are the costs.",
    "mechanism": "Prodrug of MTIC; methylates O6-guanine; cytotoxicity depends on unrepaired lesions when MGMT is silenced.",
    "approvals": [
      {
        "region": "US",
        "year": 1999,
        "indication": "Refractory anaplastic astrocytoma"
      },
      {
        "region": "US",
        "year": 2005,
        "indication": "Newly diagnosed glioblastoma with radiotherapy"
      },
      {
        "region": "EU",
        "year": 1999,
        "indication": "Temodal; malignant glioma (recurrent 1999; newly diagnosed glioblastoma with radiotherapy 2005); 26 Jan 1999"
      }
    ],
    "indications": [
      "glioblastoma"
    ],
    "trials": [
      "nct04919226"
    ],
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Temozolomide"
      }
    ]
  },
  {
    "kind": "drug",
    "asOf": "2026-09-10",
    "status": "approved",
    "id": "thyrotropin-alfa",
    "name": "Thyrotropin alfa",
    "brand": "Thyrogen",
    "aka": [
      "Recombinant human TSH",
      "rhTSH"
    ],
    "modality": "Recombinant human thyroid-stimulating hormone",
    "mechanism": "Recombinant TSH stimulates iodine uptake and thyroglobulin release from thyroid remnants and differentiated thyroid cancer cells, allowing radioiodine ablation and thyroglobulin testing without stopping levothyroxine.",
    "wikipedia": "https://en.wikipedia.org/wiki/Thyrotropin_alfa",
    "tldr": "Thyrogen is an injected version of thyroid-stimulating hormone that lets people with thyroid cancer have radioiodine treatment and follow-up blood tests without stopping their thyroid hormone tablets and suffering weeks of hypothyroidism.",
    "summary": "Thyrotropin alfa was approved by the FDA in November 1998 as an adjunctive diagnostic tool for serum thyroglobulin testing with or without radioiodine imaging in the follow-up of well-differentiated thyroid cancer, and in 2007 for pre-therapeutic stimulation before radioiodine remnant ablation after thyroidectomy in patients without distant metastases; the EU authorised Thyrogen in 2000 with the same uses. The HiLo and ESTIMABL trials showed that rhTSH-stimulated low-dose (1.1 GBq) radioiodine ablation is as effective as high-dose ablation after thyroid hormone withdrawal, sparing patients hypothyroid symptoms and reducing radiation exposure. Nausea and headache are the main adverse effects; transient tumour swelling can occur with CNS or spinal metastases. Marketed by Sanofi (Genzyme).",
    "approvals": [
      {
        "region": "US",
        "year": 1998,
        "indication": "Adjunctive diagnostic tool for thyroglobulin testing in well-differentiated thyroid cancer; pre-therapeutic stimulation for radioiodine remnant ablation added 2007"
      },
      {
        "region": "EU",
        "year": 2000,
        "indication": "Thyroglobulin testing and radioiodine imaging in thyroid cancer follow-up; pre-therapeutic stimulation for radioiodine ablation"
      }
    ],
    "indications": [
      "thyroid"
    ],
    "technologies": [
      "radioiodine-therapy"
    ],
    "links": [
      {
        "label": "EPAR (EMA)",
        "url": "https://www.ema.europa.eu/en/medicines/human/EPAR/thyrogen"
      },
      {
        "label": "US label (DailyMed)",
        "url": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=all&query=thyrotropin%20alfa"
      }
    ],
    "tags": [
      "ema-list",
      "supportive"
    ],
    "terms": [
      "radioiodine-term"
    ]
  },
  {
    "kind": "drug",
    "asOf": "2026-09-08",
    "id": "tilmanocept-tc99m",
    "companies": [
      "navidea"
    ],
    "name": "Technetium-99m tilmanocept",
    "brand": "Lymphoseek",
    "modality": "Radiopharmaceutical lymphatic mapping agent",
    "mechanism": "Mannosylated dextran that binds CD206 (mannose receptor) on macrophages in sentinel nodes, giving rapid uptake and low pass-through to second-echelon nodes.",
    "status": "approved",
    "wikipedia": "https://en.wikipedia.org/wiki/Tilmanocept",
    "tldr": "The purpose-built tracer for sentinel lymph node mapping in breast cancer, melanoma and oral cancer, replacing off-label sulfur colloid.",
    "summary": "Technetium-99m tilmanocept is a mannosylated dextran labelled with technetium-99m that binds CD206, the mannose receptor on macrophages in lymph nodes. Because it is small it drains rapidly from the injection site, and because it binds a receptor it stays in the sentinel node rather than passing through to second-echelon nodes, which simplifies surgery. It was the first agent purpose-built for sentinel lymph node mapping, replacing off-label sulfur colloid. The FDA approved it in March 2013 for breast cancer and melanoma, in 2014 for sentinel node localisation in oral cavity squamous cell carcinoma, where mapping showed 97.8% sensitivity, and extended it to children in 2017; the EU approved it in 2014. It is detected with a handheld gamma counter in theatre. Tilmanocept finds the first node a cancer would spread to so that only that node needs removal.",
    "approvals": [
      {
        "region": "US",
        "year": 2013,
        "indication": "Lymphatic mapping with a handheld gamma counter in breast cancer and melanoma"
      },
      {
        "region": "US",
        "year": 2014,
        "indication": "Sentinel lymph node localisation in oral cavity squamous cell carcinoma"
      },
      {
        "region": "EU",
        "year": 2014,
        "indication": "Sentinel node imaging in breast cancer, melanoma, oral SCC"
      }
    ],
    "technologies": [
      "spect"
    ],
    "links": [
      {
        "label": "Label (DailyMed)",
        "url": "https://dailymed.nlm.nih.gov/dailymed/search.cfm?labeltype=all&query=Lymphoseek"
      }
    ],
    "tags": [
      "gap-fill",
      "diagnostic"
    ]
  }
];
