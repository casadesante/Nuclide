/**
 * Indications: records carried over from Nuclide.
 *
 * Carried over from the Nuclide corpus (https://github.com/casadesante/Nuclide), CC BY-NC 4.0, and narrowed to
 * radiopharmaceutical use. Facts and sources are as Nuclide held them on the `asOf` date of each record;
 * check anything that matters at the primary source each record links.
 */
import type { EntityInput } from "@/lib/schema";

export const carriedIndications: EntityInput[] = [
  {
    "kind": "indication",
    "asOf": "2026-09-07",
    "id": "breast-her2-positive",
    "name": "HER2-positive breast cancer",
    "group": "breast",
    "wikipedia": "https://en.wikipedia.org/wiki/HER2-positive_breast_cancer",
    "burden": "15-20% of breast cancers (roughly 400,000 cases per year worldwide). Ten-year survival for early-stage disease treated with trastuzumab-based therapy exceeds 80%.",
    "tldr": "HER2-positive breast cancer was once the most aggressive subtype and is now one of the most treatable, thanks to trastuzumab and, more recently, Enhertu.",
    "summary": "HER2-positive breast cancer (15-20% of cases; HER2 IHC 3+ or ISH-amplified) was the most aggressive subtype until trastuzumab (1998) made it one of the most treatable. The modern curative pathway is response-adapted: neoadjuvant chemotherapy with dual HER2 blockade (or, since 2026, T-DXd followed by THP), surgery, then either antibody completion for patients with a pathologic complete response or an ADC for residual disease (T-DM1 from KATHERINE, now T-DXd from DESTINY-Breast05). Small node-negative tumours are cured with paclitaxel-trastuzumab alone; PHERGain showed that an early PET response can spare a third of patients chemotherapy altogether. Extended adjuvant neratinib and adjuvant pertuzumab add small gains in higher-risk, node-positive disease.\n\nMetastatic disease has been transformed twice: by CLEOPATRA's pertuzumab (OS 57 months) and then by trastuzumab deruxtecan, which beat T-DM1 by a wide margin in second line (DESTINY-Breast03) and beat THP in first line (DESTINY-Breast09, PFS 40.7 months; approved 2025). Brain metastases, which develop in up to half of patients, are now treatable systemically with tucatinib (HER2CLIMB) and T-DXd (DESTINY-Breast12). HER2CLIMB-05 (tucatinib maintenance) and PATINA (palbociclib maintenance in HR+/HER2+, approved 2026) intensify chemotherapy-free maintenance, and a wave of Chinese HER2 ADCs (trastuzumab rezetecan, BL-M07D1, ARX788, disitamab vedotin) is producing Enhertu-scale results.\n\nOpen problems are the sequencing of HER2 ADCs after T-DXd (payload cross-resistance), interstitial lung disease, cardiotoxicity across years of therapy, the cost and duration of antibody therapy, brain metastases prevention, and de-escalation: identifying the substantial fraction of patients who are over-treated. The pipeline is defined by T-DXd's move into every curative setting, tucatinib-based maintenance, next-generation and biparatopic HER2 ADCs (zanidatamab zovodotin), HER2 CAR-T and vaccines, and imaging- and ctDNA-adapted de-escalation trials.",
    "biomarkers": [
      "HER2 IHC 3+ or ISH-amplified",
      "HR status",
      "pCR after neoadjuvant therapy",
      "HER2 IHC 3+ or IHC 2+ with ISH amplification (ASCO/CAP 2018 criteria); HER2 heterogeneity",
      "HR status (drives triple-positive management, PATINA eligibility)",
      "Pathologic complete response after neoadjuvant therapy (selects T-DM1/T-DXd post-neoadjuvant)",
      "Early FDG-PET response (PHERGain de-escalation)",
      "LVEF by echocardiography or MUGA every 3 months on anti-HER2 therapy",
      "Brain MRI when symptomatic; surveillance MRI debated",
      "HER2 status on re-biopsy at progression (conversion in 10-15%)",
      "PIK3CA mutation (lower pCR; INAVO122 tests inavolisib in HER2+)",
      "ctDNA MRD (investigational for post-neoadjuvant escalation)"
    ],
    "standardOfCare": [
      {
        "setting": "Early stage",
        "approach": "Neoadjuvant THP or T-DXd → surgery → trastuzumab/pertuzumab (pCR) or T-DXd/T-DM1 (residual).",
        "guideline": {
          "nccn": "Category 1, preferred: neoadjuvant pertuzumab + trastuzumab + chemotherapy; adjuvant trastuzumab; T-DM1 for residual disease Category 1",
          "esmoMcbs": "A (KATHERINE); A (HERA); C (NeoSphere, APHINITY)",
          "version": "NCCN Guidelines: Breast Cancer",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC13114725/"
        }
      },
      {
        "setting": "Metastatic",
        "approach": "T-DXd + pertuzumab first line (DESTINY-Breast09); tucatinib + trastuzumab + capecitabine for brain metastases; palbociclib maintenance if HR+.",
        "guideline": {
          "esmoMcbs": "4 (DESTINY-Breast03); 4 (CLEOPATRA); 4 (HER2CLIMB)",
          "version": "NCCN Guidelines: Breast Cancer",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC13114725/"
        }
      },
      {
        "setting": "Stage I (≤2-3 cm, node-negative)",
        "approach": "Surgery then weekly paclitaxel × 12 + trastuzumab × 1 year (APT); T-DM1 × 17 cycles is an alternative (ATEMPT). Endocrine therapy if HR+.",
        "guideline": {
          "nccn": "2A",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1419"
        }
      },
      {
        "setting": "Stage II-III, neoadjuvant",
        "approach": "TCHP (docetaxel, carboplatin, trastuzumab, pertuzumab) or anthracycline-taxane + HP; from 2026, T-DXd × 4 → THP (DESTINY-Breast11, pCR 67%). PET-adapted chemotherapy omission (PHERGain) in trials.",
        "refs": [
          "phergain"
        ],
        "guideline": {
          "nccn": "1",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1419"
        }
      },
      {
        "setting": "Post-neoadjuvant, pathologic complete response",
        "approach": "Complete 1 year of trastuzumab (± pertuzumab if node-positive at diagnosis); endocrine therapy if HR+; radiation per stage.",
        "guideline": {
          "nccn": "1",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1419"
        }
      },
      {
        "setting": "Post-neoadjuvant, residual invasive disease",
        "approach": "T-DXd (DESTINY-Breast05, iDFS HR 0.47 vs T-DM1; approved 2026) replacing T-DM1 (KATHERINE); consider extended adjuvant neratinib for HR+ high-risk.",
        "guideline": {
          "nccn": "1 (T-DM1); T-DXd pending update",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1419"
        }
      },
      {
        "setting": "Adjuvant (upfront surgery), node-positive",
        "approach": "Chemotherapy + trastuzumab + pertuzumab for 1 year (APHINITY); trastuzumab alone for lower risk; 6 months acceptable where resources are limited (PERSEPHONE).",
        "guideline": {
          "nccn": "1",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1419"
        }
      },
      {
        "setting": "Metastatic, first line",
        "approach": "T-DXd + pertuzumab (DESTINY-Breast09, PFS 40.7 months; approved 2025) or taxane + trastuzumab + pertuzumab (CLEOPATRA) followed by maintenance: HP ± tucatinib (HER2CLIMB-05) and, if HR+, endocrine therapy + palbociclib (PATINA, approved 2026).",
        "guideline": {
          "nccn": "1, preferred (T-DXd + pertuzumab)",
          "esmoMcbs": "4 (CLEOPATRA)",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1419"
        }
      },
      {
        "setting": "Metastatic, second line",
        "approach": "T-DXd if not used first line (DESTINY-Breast03, PFS HR 0.33 vs T-DM1); tucatinib + trastuzumab + capecitabine, especially with brain metastases (HER2CLIMB).",
        "guideline": {
          "nccn": "1",
          "esmoMcbs": "4 (DESTINY-Breast03)",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1419"
        }
      },
      {
        "setting": "Metastatic, later lines",
        "approach": "T-DM1; neratinib or lapatinib + capecitabine; margetuximab + chemotherapy; trastuzumab + chemotherapy (continued HER2 blockade); zanidatamab and Chinese ADCs (trastuzumab rezetecan, disitamab vedotin) where available; trials.",
        "guideline": {
          "nccn": "2A",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1419"
        }
      },
      {
        "setting": "Brain metastases",
        "approach": "Systemic: tucatinib triplet or T-DXd (DESTINY-Breast12, intracranial ORR 72%); local: stereotactic radiosurgery or surgery for symptomatic or large lesions; whole-brain RT reserved.",
        "guideline": {
          "nccn": "1 (tucatinib triplet)",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1419"
        }
      },
      {
        "setting": "Cardiac monitoring and survivorship",
        "approach": "LVEF every 3 months during anti-HER2 therapy; hold and cardioprotect for declines; anthracycline-free regimens preferred; long-term surveillance for late recurrence in HR+/HER2+."
      }
    ],
    "stateOfArt": [
      "T-DXd across the disease continuum.",
      "Chemotherapy de-escalation guided by early response.",
      "Ten-year survival above 80% for early disease: the subtype with the poorest outlook in the 1990s is now one of the most treatable.",
      "Response-adapted curative therapy: pCR patients de-escalate, residual disease escalates to an ADC (now T-DXd, iDFS HR 0.47 vs T-DM1).",
      "T-DXd across the continuum: neoadjuvant (2026), post-neoadjuvant (2026), first-line metastatic with pertuzumab (2025, PFS 40.7 months), second line, and brain metastases.",
      "Systemic control of brain metastases (tucatinib, T-DXd) allowing deferral of radiation.",
      "Chemotherapy-free maintenance intensification: tucatinib (HER2CLIMB-05) and palbociclib for HR+/HER2+ (PATINA).",
      "Chemotherapy omission for a third of patients using early PET response (PHERGain)."
    ],
    "history": [
      {
        "year": 1987,
        "title": "Slamon shows HER2 amplification marks aggressive disease, and a drug target"
      },
      {
        "year": 1987,
        "title": "Slamon shows HER2 amplification marks aggressive disease, and a drug target",
        "note": "Science paper identifying HER2/neu amplification in 25-30% of breast cancers.",
        "refs": [
          "her2"
        ]
      },
      {
        "year": 1998,
        "title": "Trastuzumab approved"
      },
      {
        "year": 1998,
        "title": "Trastuzumab approved for metastatic disease",
        "note": "First antibody for a solid tumour; OS benefit with chemotherapy."
      },
      {
        "year": 2005,
        "title": "Adjuvant trastuzumab halves recurrence (HERA, B-31/N9831)"
      },
      {
        "year": 2007,
        "title": "Lapatinib: first HER2 pill"
      },
      {
        "year": 2012,
        "title": "Pertuzumab and dual blockade (CLEOPATRA)"
      },
      {
        "year": 2013,
        "title": "First solid-tumour ADC: T-DM1"
      },
      {
        "year": 2013,
        "title": "T-DM1: first solid-tumour ADC; pertuzumab first pCR-based approval"
      },
      {
        "year": 2015,
        "title": "APT: de-escalation for small tumours"
      },
      {
        "year": 2017,
        "title": "First trastuzumab biosimilar; neratinib; APHINITY"
      },
      {
        "year": 2018,
        "title": "KATHERINE: T-DM1 for residual disease"
      },
      {
        "year": 2019,
        "title": "T-DXd approved; HER2CLIMB proves CNS benefit"
      },
      {
        "year": 2020,
        "title": "Tucatinib, margetuximab, Phesgo approved"
      },
      {
        "year": 2021,
        "title": "T-DXd beats T-DM1 (DESTINY-Breast03)"
      },
      {
        "year": 2021,
        "title": "DESTINY-Breast03: T-DXd beats T-DM1"
      },
      {
        "year": 2024,
        "title": "PHERGain chemotherapy omission; DESTINY-Breast12 brain metastases; zanidatamab approved (BTC)",
        "refs": [
          "phergain"
        ]
      },
      {
        "year": 2025,
        "title": "DESTINY-Breast09 first-line approval; DESTINY-Breast05 and HER2CLIMB-05 positive; trastuzumab rezetecan approved (China, NSCLC)"
      },
      {
        "year": 2026,
        "title": "T-DXd approved in early-stage disease"
      },
      {
        "year": 2026,
        "title": "T-DXd approved neoadjuvant and post-neoadjuvant; palbociclib maintenance for HR+/HER2+ (PATINA)"
      }
    ],
    "pipeline": [
      "her2-pet",
      "phergain"
    ],
    "openProblems": [
      "Brain metastases in ~50% of metastatic patients.",
      "Which patients can skip chemotherapy entirely.",
      "Sequencing after T-DXd: no randomised data on which HER2 ADC or TKI works after TOP1-payload failure.",
      "Interstitial lung disease with T-DXd in curative settings, where patients would otherwise be cured.",
      "Over-treatment: which patients need pertuzumab, a full year of antibodies, or any chemotherapy at all (PHERGain-2, response-adapted trials).",
      "Brain metastasis prevention and whether systemic-first strategies preserve cognition.",
      "HR+/HER2+ ('triple-positive') disease: optimal integration of endocrine therapy, CDK4/6 inhibitors, and HER2 blockade.",
      "Cardiotoxicity surveillance burden versus event rates in low-risk patients.",
      "Global access: biosimilars have widened trastuzumab access but pertuzumab, T-DM1, and T-DXd remain unavailable in much of the world.",
      "HER2 heterogeneity and HER2 conversion at relapse require re-biopsy strategies or HER2 PET."
    ],
    "targets": [
      "her2"
    ],
    "technologies": [
      "her2-pet",
      "fdg-pet",
      "site-specific-conjugation"
    ],
    "tags": [
      "breast",
      "spike"
    ],
    "trials": [
      "phergain"
    ],
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/HER2-positive_breast_cancer"
      }
    ],
    "subtypes": [
      "HER2-enriched (PAM50; highest pCR rates to HER2 blockade)",
      "HR+/HER2+ ('triple-positive', ~50% of HER2+; lower pCR, endocrine therapy and CDK4/6 maintenance relevant)",
      "HR-/HER2+ (higher pCR, more relapse in first 3 years)",
      "HER2-mutant (activating mutations without amplification; T-DXd tumour-agnostic, HER2 TKIs; more common in lobular and HER2-low)",
      "HER2 heterogeneous tumours (mixed amplified and non-amplified clones; lower pCR)",
      "Small node-negative (stage I) disease cured by de-escalated therapy"
    ],
    "companies": [
      "astrazeneca",
      "pfizer",
      "johnson-johnson"
    ]
  },
  {
    "kind": "indication",
    "asOf": "2026-09-07",
    "id": "dlbcl",
    "name": "Diffuse large B-cell lymphoma",
    "group": "haematologic",
    "wikipedia": "https://en.wikipedia.org/wiki/Diffuse_large_B-cell_lymphoma",
    "burden": "~150,000 new cases a year worldwide; ~25,000 in the US; median age 65; about 60% cured with first-line therapy.",
    "tldr": "Diffuse large B-cell lymphoma (DLBCL) is an aggressive but curable lymphoma. CAR-T cures about 40% of relapsed patients, and off-the-shelf bispecifics are now approved.",
    "summary": "Diffuse large B-cell lymphoma is the most common aggressive lymphoma, about 30% of all non-Hodgkin lymphoma, with a median age around 65. It is curable: R-CHOP (rituximab plus cyclophosphamide, doxorubicin, vincristine, prednisone) cures roughly 60% of patients, more with low IPI and fewer with high-risk features (IPI 3-5, double-hit MYC/BCL2 rearrangement, activated B-cell origin, TP53 loss). Staging uses PET-CT and the Lugano classification; biology is read from cell of origin and FISH for MYC, BCL2 and BCL6, with genetic classifiers (LymphGen) and ctDNA emerging.\n\nFrontline therapy stood still for twenty years until POLARIX (2022) showed that replacing vincristine with the CD79b ADC polatuzumab vedotin improves progression-free survival (5-year 64.9% vs 59.1%), and frontMIND (Lancet 2026) showed tafasitamab plus lenalidomide added to R-CHOP improves PFS in IPI 3-5 disease (HR 0.75); epcoritamab plus R-CHOP (EPCORE DLBCL-2) and golcadomide plus R-CHOP (GOLSEEK-1) follow. For the 30-40% who relapse, the sequence has been rebuilt around T-cell redirection: CD19 CAR-T (axi-cel, liso-cel) beats salvage chemotherapy and transplant for relapse within a year (ZUMA-7 with an overall survival benefit; TRANSFORM), while transplant remains for later chemosensitive relapse. Off-the-shelf CD20×CD3 bispecifics (glofitamab, epcoritamab, mosunetuzumab, odronextamab) give complete remissions in about 40% of heavily pretreated patients, and chemotherapy-free doublets such as mosunetuzumab-polatuzumab (SUNMO) beat salvage chemotherapy. CD19 ADC (loncastuximab), tafasitamab-lenalidomide, and the ROR1 ADC zilovertamab vedotin fill later lines.\n\nThe open questions are regulatory as much as scientific. EPCORE DLBCL-1 (2026) improved PFS but not overall survival against chemotherapy; STARGLO's survival benefit was rejected by the FDA because the trial was mostly enrolled in Asia. Nobody has compared bispecifics with CAR-T head to head. ctDNA (PhasED-seq) predicts cure better than PET and is the obvious tool for response-adapted frontline therapy. Primary refractory disease, CNS relapse, older and frail patients, and access to CAR-T outside major centres remain the hard problems.",
    "biomarkers": [
      "Cell of origin (GCB/ABC)",
      "Double-hit (MYC/BCL2)",
      "CD19/CD20",
      "ctDNA MRD",
      "IPI / NCCN-IPI",
      "Cell of origin (Hans IHC, Lymph2Cx)",
      "MYC, BCL2, BCL6 FISH",
      "TP53 mutation",
      "CD19 and CD20 expression (loss after CAR-T or bispecific)",
      "Interim and end-of-treatment PET (Deauville)",
      "ctDNA (PhasED-seq, clonoSEQ)",
      "LDH",
      "CNS-IPI for CNS prophylaxis decisions"
    ],
    "standardOfCare": [
      {
        "setting": "Frontline",
        "approach": "R-CHOP or Pola-R-CHP.",
        "guideline": {
          "version": "NCCN Guidelines: B-Cell Lymphomas",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1480"
        }
      },
      {
        "setting": "Early relapse",
        "approach": "CD19 CAR-T.",
        "guideline": {
          "version": "NCCN Guidelines: B-Cell Lymphomas",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1480"
        }
      },
      {
        "setting": "Later",
        "approach": "CD20×CD3 bispecifics, loncastuximab, tafasitamab.",
        "guideline": {
          "version": "NCCN Guidelines: B-Cell Lymphomas",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1480"
        }
      },
      {
        "setting": "Limited stage (I-II, non-bulky)",
        "approach": "R-CHOP × 4 with PET-guided omission of radiation (FLYER, S1001): 4 cycles if interim PET negative; involved-site radiotherapy if PET positive.",
        "refs": [
          "fdg-pet"
        ],
        "guideline": {
          "nccn": "Category 1 (R-CHOP × 4 PET-adapted for stage I-II)",
          "version": "NCCN B-Cell Lymphomas 2026",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1480"
        }
      },
      {
        "setting": "Advanced stage, IPI 0-1",
        "approach": "R-CHOP × 6 (or Pola-R-CHP); consider 4 cycles plus 2 rituximab in young low-risk patients (FLYER).",
        "guideline": {
          "nccn": "Category 1",
          "version": "NCCN 2026"
        }
      },
      {
        "setting": "Advanced stage, IPI 2-5",
        "approach": "Pola-R-CHP × 6 (POLARIX) or R-CHOP × 6; tafasitamab + lenalidomide + R-CHOP (frontMIND) pending approval for IPI 3-5; DA-EPOCH-R for double-hit lymphoma; CNS prophylaxis for high CNS-IPI (contested).",
        "guideline": {
          "nccn": "Pola-R-CHP category 1 for IPI 2-5",
          "version": "NCCN 2026"
        }
      },
      {
        "setting": "Frail or elderly",
        "approach": "R-mini-CHOP; epcoritamab-based regimens in trials for the elderly (EPCORE NHL-2 cohorts); tafasitamab-lenalidomide where transplant is never an option."
      },
      {
        "setting": "Primary refractory or relapse within 12 months",
        "approach": "CD19 CAR-T (axi-cel or liso-cel) preferred over salvage chemotherapy and transplant (ZUMA-7, TRANSFORM); bridging therapy while manufacturing; bispecific ± chemotherapy if CAR-T unavailable.",
        "guideline": {
          "nccn": "Category 1 (axi-cel, liso-cel)",
          "version": "NCCN 2026"
        }
      },
      {
        "setting": "Late relapse (>12 months), transplant-eligible",
        "approach": "Salvage chemotherapy (R-ICE, R-DHAP, R-GemOx) → high-dose therapy and autologous transplant if chemosensitive; CAR-T if not."
      },
      {
        "setting": "Relapse, transplant-ineligible",
        "approach": "CD20×CD3 bispecific (glofitamab, epcoritamab) or mosunetuzumab-polatuzumab (SUNMO); pola-BR; tafasitamab-lenalidomide; loncastuximab tesirine."
      },
      {
        "setting": "Third line and beyond",
        "approach": "CAR-T if not yet given; bispecific after CAR-T (active in CD19-negative relapse if CD20 retained); loncastuximab; zilovertamab vedotin (trial); allogeneic transplant in selected fit patients; clinical trials."
      }
    ],
    "stateOfArt": [
      "CAR-T second line.",
      "Bispecifics as off-the-shelf T-cell therapy.",
      "Frontline has moved: Pola-R-CHP (POLARIX) is standard for IPI 2-5, and frontMIND (tafasitamab-lenalidomide-R-CHOP) is the first phase 3 to beat R-CHOP in IPI 3-5 disease since rituximab.",
      "CD19 CAR-T is second-line standard for early relapse, with an overall survival benefit in ZUMA-7 (4-year OS 54.6% vs 46.0%).",
      "Four CD20×CD3 bispecifics approved or conditionally approved worldwide give ~40% complete remissions off the shelf; chemotherapy-free doublets (mosun-pola) beat salvage chemotherapy.",
      "ctDNA by phased-variant sequencing detects residual lymphoma below PET sensitivity and is entering response-adapted trials.",
      "Regulators now scrutinise generalisability (STARGLO CRL) and demand overall survival for confirmatory bispecific trials (EPCORE DLBCL-1 missed OS)."
    ],
    "history": [
      {
        "year": 1976,
        "title": "CHOP regimen introduced",
        "note": "Cyclophosphamide, doxorubicin, vincristine, prednisone becomes the backbone for aggressive lymphoma."
      },
      {
        "year": 1993,
        "title": "CHOP proves equal to more intensive regimens; IPI published"
      },
      {
        "year": 1997,
        "title": "Rituximab: first antibody for cancer"
      },
      {
        "year": 1997,
        "title": "Rituximab: first monoclonal antibody approved for cancer",
        "refs": [
          "cd20"
        ]
      },
      {
        "year": 2000,
        "title": "Gene-expression profiling defines GCB and ABC subtypes"
      },
      {
        "year": 2002,
        "title": "GELA LNH-98.5: R-CHOP improves survival over CHOP",
        "note": "Rituximab added to CHOP raises cure rates by ~15 points; the standard for the next twenty years."
      },
      {
        "year": 2014,
        "title": "Lugano classification unifies PET-based staging and response",
        "refs": [
          "fdg-pet"
        ]
      },
      {
        "year": 2017,
        "title": "Axi-cel CAR-T approved"
      },
      {
        "year": 2017,
        "title": "Axi-cel: first CAR-T approved for large B-cell lymphoma (ZUMA-1)"
      },
      {
        "year": 2019,
        "title": "Polatuzumab vedotin approved with BR for relapsed disease"
      },
      {
        "year": 2020,
        "title": "Tafasitamab-lenalidomide (L-MIND) approved for transplant-ineligible relapse"
      },
      {
        "year": 2021,
        "title": "Loncastuximab tesirine approved; BELINDA fails while ZUMA-7 and TRANSFORM succeed"
      },
      {
        "year": 2022,
        "title": "ZUMA-7: CAR-T beats transplant"
      },
      {
        "year": 2022,
        "title": "POLARIX: first frontline improvement on R-CHOP in twenty years; CAR-T approved second line"
      },
      {
        "year": 2023,
        "title": "Glofitamab, epcoritamab approved"
      },
      {
        "year": 2023,
        "title": "Glofitamab and epcoritamab approved: off-the-shelf T-cell redirection"
      },
      {
        "year": 2024,
        "title": "STARGLO shows OS benefit for glofitamab-GemOx; odronextamab approved in EU"
      },
      {
        "year": 2025,
        "title": "SUNMO positive (mosun-pola); FDA rejects STARGLO indication over applicability; POLARIX 5-year data"
      },
      {
        "year": 2026,
        "title": "frontMIND published in Lancet; EPCORE DLBCL-1 misses OS; frontline bispecific data (EPCORE DLBCL-2) at EHA"
      }
    ],
    "openProblems": [
      "Primary refractory disease.",
      "CAR-T access and cost.",
      "Primary refractory disease (~10-15%) still has poor outcomes even with CAR-T; CD19-negative and CD20-negative escape after targeted therapy.",
      "No head-to-head comparison of bispecifics and CAR-T; sequencing is by access rather than evidence.",
      "Overall survival is hard to demonstrate for bispecifics against chemotherapy with crossover and effective later lines (EPCORE DLBCL-1).",
      "Trial generalisability: STARGLO's rejection shows regional enrolment can decide approvals.",
      "CNS relapse: prophylaxis with high-dose methotrexate is of uncertain benefit and CNS-penetrant options are few.",
      "Older and frail patients are underrepresented; R-mini-CHOP cure rates lag and cellular therapies carry toxicity.",
      "Cost and access: CAR-T requires certified centres; bispecific CRS management needs infrastructure; lenalidomide-based triplets add expense.",
      "Response-adapted therapy: interim PET is unreliable and ctDNA is not yet a regulatory endpoint."
    ],
    "targets": [
      "cd20"
    ],
    "technologies": [
      "fdg-pet"
    ],
    "tags": [
      "heme",
      "spike"
    ],
    "related": [
      "follicular-lymphoma"
    ],
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Diffuse_large_B-cell_lymphoma"
      }
    ],
    "companies": [
      "bms",
      "merck",
      "novartis"
    ],
    "subtypes": [
      "Germinal-centre B-cell-like (GCB) vs activated B-cell-like (ABC / non-GCB)",
      "High-grade B-cell lymphoma with MYC and BCL2 rearrangements (double hit)",
      "LymphGen genetic subtypes: MCD, BN2, N1, EZB, ST2, A53",
      "Primary mediastinal B-cell lymphoma (distinct; PD-1 responsive)",
      "Primary CNS lymphoma (distinct; methotrexate-based)",
      "Transformed indolent lymphoma (Richter, transformed follicular)",
      "EBV-positive DLBCL of the elderly",
      "Primary refractory vs early relapse (<12 months) vs late relapse"
    ],
    "institutions": [
      "mskcc",
      "md-anderson",
      "dana-farber",
      "mayo-clinic"
    ]
  },
  {
    "kind": "indication",
    "asOf": "2026-09-08",
    "id": "follicular-lymphoma",
    "name": "Follicular lymphoma",
    "group": "haematologic",
    "wikipedia": "https://en.wikipedia.org/wiki/Follicular_lymphoma",
    "burden": "Follicular lymphoma is the second most common non-Hodgkin lymphoma in the West (~20% of NHL; about 3-4 per 100,000 per year), median age ~65.",
    "tldr": "Follicular lymphoma is the most common slow-growing lymphoma, defined in about 85% of cases by a BCL2 translocation. Most people live with it for decades, treated only when it causes problems; it can be controlled repeatedly with anti-CD20 antibodies, chemotherapy, bispecifics or CAR-T but rarely cured, and a small share transform into an aggressive lymphoma each year.",
    "summary": "Follicular lymphoma (FL) is an indolent germinal-centre B-cell lymphoma defined by t(14;18) BCL2 overexpression in ~85% and frequent CREBBP, KMT2D and EZH2 mutations. Median survival now exceeds 15-20 years, so the questions are when to treat, how to avoid over-treatment, and how to manage the ~20% who progress within 24 months (POD24) and the 2-3% per year who transform to DLBCL.\n\nAsymptomatic low-burden disease is watched or given rituximab monotherapy; symptomatic or high-burden disease receives anti-CD20 (rituximab or obinutuzumab) with bendamustine, CHOP or CVP, or with lenalidomide (R², RELEVANCE), usually followed by anti-CD20 maintenance (PRIMA). Relapsed disease has the richest menu in lymphoma: lenalidomide-rituximab (AUGMENT), CD20×CD3 bispecifics (mosunetuzumab 2022, epcoritamab 2024, odronextamab EU), CD19 CAR-T (axicabtagene 2021, tisagenlecleucel 2022, lisocabtagene 2024), zanubrutinib-obinutuzumab (ROSEWOOD, 2024) and radioimmunotherapy historically. Tazemetostat (EZH2) was withdrawn worldwide in March 2026.\n\nOpen questions: whether bispecifics or CAR-T should move to second line or even first line (EPCORE FL-1, MorningSun), PET/ctDNA-guided de-escalation, and biology-based prediction of POD24 and transformation.",
    "subtypes": [
      "Classic FL (grades 1-3A)",
      "Follicular large B-cell lymphoma (formerly 3B)",
      "FL with unusual cytological features",
      "Duodenal-type FL",
      "Paediatric-type FL",
      "Transformed FL"
    ],
    "biomarkers": [
      "t(14;18)/BCL2",
      "FLIPI / FLIPI2 / m7-FLIPI",
      "PET-CT (Lugano) staging and end-of-induction response",
      "POD24 (progression within 24 months)",
      "EZH2 mutation",
      "ctDNA (investigational MRD)"
    ],
    "standardOfCare": [
      {
        "setting": "Limited stage (I-II)",
        "approach": "Involved-site radiotherapy 24 Gy (FoRT); rituximab alone or observation in selected cases.",
        "refs": [
          "rituximab"
        ],
        "guideline": {
          "nccn": "Category 1 (ISRT)",
          "version": "NCCN Guidelines: B-Cell Lymphomas",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1480"
        }
      },
      {
        "setting": "Advanced, low burden, asymptomatic",
        "approach": "Watch and wait (no survival penalty), or rituximab monotherapy to delay chemotherapy.",
        "refs": [
          "rituximab"
        ]
      },
      {
        "setting": "Advanced, high burden (GELF criteria)",
        "approach": "Bendamustine-rituximab or bendamustine-obinutuzumab (GALLIUM), R-CHOP, or lenalidomide-rituximab (RELEVANCE); anti-CD20 maintenance 2 years (PRIMA).",
        "refs": [
          "rituximab"
        ],
        "guideline": {
          "nccn": "Category 1",
          "esmoMcbs": "3 (GALLIUM)",
          "version": "NCCN Guidelines: B-Cell Lymphomas"
        }
      },
      {
        "setting": "Relapsed (≥2 lines)",
        "approach": "Lenalidomide-rituximab (AUGMENT); CD20×CD3 bispecific (mosunetuzumab, epcoritamab); CD19 CAR-T (axi-cel, tisa-cel, liso-cel); zanubrutinib + obinutuzumab; clinical trials.",
        "guideline": {
          "nccn": "Category 2A",
          "version": "NCCN Guidelines: B-Cell Lymphomas"
        }
      }
    ],
    "stateOfArt": [
      "Chemotherapy-free options now exist at every line: R² first line, bispecifics and BTK-anti-CD20 combinations at relapse.",
      "CAR-T gives durable remissions in heavily pretreated FL (ZUMA-5 ~50% progression-free at 4 years) and is being tested against bispecifics.",
      "POD24 identifies the high-risk fifth; how to treat them differently up front is still unknown.",
      "Trials of bispecific plus lenalidomide first line (EPCORE FL-2, CELESTIMO) will decide whether chemotherapy leaves front-line FL."
    ],
    "history": [
      {
        "year": 1984,
        "title": "t(14;18) links BCL2 to follicular lymphoma",
        "note": "Tsujimoto and Croce clone the breakpoint; BCL2 becomes the first anti-apoptotic oncogene."
      },
      {
        "year": 1997,
        "title": "Rituximab approved",
        "note": "First monoclonal antibody for cancer, in relapsed indolent lymphoma.",
        "refs": [
          "rituximab"
        ]
      },
      {
        "year": 2004,
        "title": "FLIPI prognostic index"
      },
      {
        "year": 2011,
        "title": "PRIMA: rituximab maintenance",
        "note": "Two years of maintenance doubles PFS after chemo-immunotherapy.",
        "refs": [
          "rituximab"
        ]
      },
      {
        "year": 2017,
        "title": "Obinutuzumab first line (GALLIUM)"
      },
      {
        "year": 2018,
        "title": "RELEVANCE: chemo-free R²",
        "note": "Lenalidomide-rituximab matches chemo-immunotherapy first line."
      },
      {
        "year": 2021,
        "title": "CAR-T enters FL",
        "note": "Axicabtagene (ZUMA-5) approved; tisagenlecleucel (ELARA) 2022; lisocabtagene 2024."
      },
      {
        "year": 2022,
        "title": "First bispecific: mosunetuzumab",
        "note": "Off-the-shelf CD20×CD3 with ~60% CR in third line."
      },
      {
        "year": 2024,
        "title": "Epcoritamab and zanubrutinib-obinutuzumab approved for relapsed FL"
      },
      {
        "year": 2026,
        "title": "Tazemetostat withdrawn worldwide",
        "note": "Secondary haematologic malignancies; EZH2 leaves the FL armamentarium."
      }
    ],
    "openProblems": [
      "Transformation to DLBCL cannot be predicted or prevented.",
      "Sequencing bispecifics vs CAR-T.",
      "Whether earlier intensive therapy for POD24 patients improves survival.",
      "Late toxicities of decades of therapy (secondary cancers, infections, immunoglobulin loss)."
    ],
    "targets": [
      "cd20"
    ],
    "technologies": [
      "pet-ct",
      "radioimmunotherapy"
    ],
    "drugs": [
      "rituximab",
      "ibritumomab-tiuxetan"
    ],
    "links": [
      {
        "label": "NCCN Guidelines: B-Cell Lymphomas",
        "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1480"
      },
      {
        "label": "NCI PDQ: adult NHL",
        "url": "https://www.cancer.gov/types/lymphoma/patient/adult-nhl-treatment-pdq"
      },
      {
        "label": "Lymphoma Research Foundation: FL",
        "url": "https://lymphoma.org/understanding-lymphoma/aboutlymphoma/nhl/fl/"
      }
    ],
    "tags": [
      "gap-fill",
      "haematologic"
    ],
    "related": [
      "dlbcl"
    ]
  },
  {
    "kind": "indication",
    "asOf": "2026-09-17",
    "id": "glioblastoma",
    "companies": [
      "bms"
    ],
    "name": "Glioma & glioblastoma",
    "group": "central nervous system",
    "wikipedia": "https://en.wikipedia.org/wiki/Glioblastoma",
    "burden": "About 300,000 CNS tumours occur per year, most of them not glioblastoma; IDH-mutant and paediatric low-grade gliomas can be lived with for decades and now have targeted drugs. Median survival for glioblastoma with maximal therapy is about 15 months.",
    "tldr": "Gliomas are now diagnosed by molecular class, and three classes got their first targeted drugs in 2024-25 (vorasidenib for IDH-mutant glioma, tovorafenib for BRAF-altered paediatric glioma, dordaviprone for H3 K27M). Glioblastoma itself is the hardest to treat and has kept the same standard since 2005; CAR-T delivered into the brain and focused-ultrasound drug delivery are the live directions.",
    "summary": "Gliomas are classified by the WHO 2021 system on molecular grounds: IDH-wild-type glioblastoma (grade 4, ~50% of gliomas, median age 65, median survival ~15 months with maximal therapy), IDH-mutant astrocytoma (grades 2-4) and 1p/19q-codeleted oligodendroglioma (better prognosis, decades of survival possible), and paediatric-type tumours including H3 K27M-mutant diffuse midline glioma (median survival ~11 months) and BRAF-altered low-grade glioma (the commonest childhood brain tumour, rarely life-threatening but chronically disabling). The two shared barriers are the blood-brain barrier, which excludes most drugs, and diffuse infiltration, which makes complete resection impossible.\n\nGlioblastoma treatment has been static since 2005: maximal safe resection (improved by 5-ALA fluorescence, intraoperative MRI, and awake mapping; the extent of resection is itself prognostic and is now graded by the RANO resect classes), radiotherapy with concurrent and adjuvant temozolomide (Stupp), and tumour treating fields (EF-14). MGMT promoter methylation predicts temozolomide benefit; unmethylated tumours gain less, though not nothing, and how much remains debated (in the elderly trials NOA-08 and Nordic, unmethylated tumours did better with radiotherapy than with temozolomide alone). Every major systemic trial since has failed: bevacizumab (PFS only), rindopepimut (ACT IV), nivolumab (CheckMate 143, 498, 548), depatuxizumab mafodotin (INTELLANCE-1), and many more. At recurrence, lomustine, re-resection, re-irradiation, LITT, and bevacizumab for oedema are the options, with median survival under a year. DCVax-L's externally controlled phase 3 remains contested.\n\nProgress has come at the edges. Vorasidenib (INDIGO, approved 2024) is the first targeted therapy for grade 2 IDH-mutant glioma, delaying radiation and chemotherapy by years. Dabrafenib with trametinib (2023) was the first targeted therapy approved for BRAF V600E paediatric low-grade glioma; tovorafenib (2024) followed for relapsed or refractory BRAF-altered tumours, including BRAF fusions. Dordaviprone (August 2025) is the first drug approved for H3 K27M diffuse midline glioma. Methylation-based classification and intraoperative nanopore sequencing have transformed diagnosis. For glioblastoma itself the most promising directions are locoregional CAR-T (IL13Rα2, GD2, multi-target), focused-ultrasound and LITT-based barrier opening to deliver ADCs, radioconjugates, and chemotherapy, neoadjuvant immunotherapy with window designs, personalised neoantigen vaccines (NeoVax), and combinations built on the unmethylated-MGMT population where temozolomide adds nothing.",
    "biomarkers": [
      "IDH1/2",
      "1p/19q codeletion",
      "MGMT methylation",
      "H3K27M",
      "EGFR amplification",
      "Methylation class",
      "IDH1/2 mutation (vorasidenib eligibility)",
      "MGMT promoter methylation (temozolomide benefit)",
      "H3 K27M (dordaviprone eligibility)",
      "BRAF fusion / V600E (tovorafenib, dabrafenib-trametinib)",
      "TERT promoter, EGFR amplification, +7/−10 (molecular glioblastoma)",
      "CDKN2A/B homozygous deletion (grade 4 astrocytoma)",
      "DNA methylation class (Heidelberg classifier)",
      "NTRK/ALK/ROS1 fusions (infant gliomas)",
      "TMB / mismatch repair (rare hypermutant, IO-responsive)"
    ],
    "standardOfCare": [
      {
        "setting": "Glioblastoma",
        "approach": "Resection → RT + temozolomide → TTFields; lomustine/bevacizumab at relapse.",
        "guideline": {
          "version": "NCCN Guidelines: Central Nervous System Cancers",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1425"
        }
      },
      {
        "setting": "IDH-mutant grade 2",
        "approach": "Resection → vorasidenib or observation; RT/PCV for high-risk.",
        "guideline": {
          "version": "NCCN Guidelines: Central Nervous System Cancers",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1425"
        }
      },
      {
        "setting": "Diagnosis",
        "approach": "MRI with contrast; maximal safe resection with 5-ALA and intraoperative mapping, with early postoperative MRI to measure the extent of resection; integrated histo-molecular diagnosis with methylation classification where available."
      },
      {
        "setting": "Glioblastoma, newly diagnosed",
        "approach": "Radiotherapy 60 Gy in 30 fractions with concurrent and 6 cycles adjuvant temozolomide; from age 65, short-course radiotherapy (40 Gy in 15 fractions) with temozolomide (CCTG CE.6); for older patients unfit for combined treatment, temozolomide alone or hypofractionated radiotherapy alone, chosen by MGMT status (Nordic, NOA-08); TTFields with maintenance temozolomide; trials for MGMT-unmethylated patients.",
        "refs": [
          "temozolomide"
        ]
      },
      {
        "setting": "Glioblastoma, recurrent",
        "approach": "Re-resection or LITT if feasible; lomustine; bevacizumab for oedema/steroid sparing; re-irradiation; clinical trial (CAR-T, FUS-BBB, vaccines) strongly preferred."
      },
      {
        "setting": "IDH-mutant grade 2 glioma",
        "approach": "Maximal resection; vorasidenib for residual/recurrent disease (INDIGO); radiotherapy plus PCV or temozolomide for high-risk or progressive disease."
      },
      {
        "setting": "Oligodendroglioma grade 3 / astrocytoma grade 3",
        "approach": "Radiotherapy plus PCV (RTOG 9402, EORTC 26951) or temozolomide (CATNON).",
        "refs": [
          "temozolomide"
        ]
      },
      {
        "setting": "H3 K27M diffuse midline glioma",
        "approach": "Radiotherapy; dordaviprone at progression (2025); GD2 CAR-T and ONC201 first-line trials."
      },
      {
        "setting": "Paediatric low-grade glioma",
        "approach": "Resection where safe; chemotherapy (carboplatin/vincristine) or tovorafenib / dabrafenib-trametinib for BRAF-altered relapsed disease; avoid radiation in young children."
      }
    ],
    "stateOfArt": [
      "Vorasidenib in low-grade glioma.",
      "Methylation-based diagnosis.",
      "TTFields.",
      "Three first-in-class targeted approvals for glioma subtypes in 2024-25: vorasidenib (IDH-mutant), tovorafenib (BRAF paediatric), dordaviprone (H3 K27M).",
      "Molecular classification (WHO 2021, methylation classifier, intraoperative nanopore) now defines diagnosis.",
      "Locoregional CAR-T produces objective responses in recurrent glioblastoma and DIPG, though transient.",
      "Focused ultrasound opens the blood-brain barrier in humans with 4-6x higher drug delivery; efficacy trials underway."
    ],
    "history": [
      {
        "year": 1926,
        "title": "Bailey and Cushing classify gliomas",
        "note": "Histologic classification that lasted, in essence, until 2016."
      },
      {
        "year": 1978,
        "title": "Radiotherapy proven to extend survival (BTSG)",
        "note": "Whole-brain then involved-field radiation becomes standard."
      },
      {
        "year": 1999,
        "title": "Temozolomide approved (anaplastic astrocytoma)",
        "refs": [
          "temozolomide"
        ]
      },
      {
        "year": 2005,
        "title": "Stupp regimen: temozolomide + RT"
      },
      {
        "year": 2008,
        "title": "IDH1 mutations discovered in glioma",
        "note": "Parsons/Vogelstein glioblastoma genome sequencing; reclassification follows."
      },
      {
        "year": 2009,
        "title": "Bevacizumab accelerated approval at recurrence",
        "note": "Radiographic response without survival benefit."
      },
      {
        "year": 2014,
        "title": "AVAglio / RTOG 0825: bevacizumab no OS benefit; 5-ALA and methylation classifier emerge"
      },
      {
        "year": 2015,
        "title": "TTFields improves OS (EF-14)"
      },
      {
        "year": 2016,
        "title": "WHO 2016 integrates molecular markers; ACT IV vaccine fails"
      },
      {
        "year": 2017,
        "title": "Short-course radiotherapy plus temozolomide extends survival from age 65 (CCTG CE.6)"
      },
      {
        "year": 2020,
        "title": "CheckMate 143: immunotherapy fails at recurrence",
        "note": "CheckMate 548 (2022) and CheckMate 498 (2023) follow in newly diagnosed disease; all three negative."
      },
      {
        "year": 2021,
        "title": "WHO 2021: IDH-wild-type glioblastoma defined molecularly"
      },
      {
        "year": 2022,
        "title": "GD2 CAR-T responses in DIPG (Stanford)"
      },
      {
        "year": 2023,
        "title": "INDIGO: vorasidenib in grade 2 IDH-mutant glioma; DCVax-L contested publication"
      },
      {
        "year": 2024,
        "title": "Vorasidenib approved"
      },
      {
        "year": 2025,
        "title": "Dordaviprone approved for H3 K27M diffuse midline glioma",
        "note": "6 August 2025; first systemic therapy for the disease."
      },
      {
        "year": 2026,
        "title": "ASCO 2026: NeoVax personalised vaccine immune responses; multi-target CAR-T; tovorafenib EU approval"
      }
    ],
    "openProblems": [
      "Blood-brain barrier.",
      "Immunologically cold, heterogeneous, infiltrative.",
      "Glioblastoma: no systemic drug has beaten the 2005 standard; getting drugs across the blood-brain barrier is the crux.",
      "Glioblastoma's standard has not changed since 2005: every phase 3 systemic agent since temozolomide has failed, so median survival has not moved in 20 years.",
      "MGMT-unmethylated glioblastoma (~60%) gains almost nothing from chemotherapy and has no approved alternative.",
      "Blood-brain barrier and diffuse infiltration limit delivery and resection; imaging cannot distinguish progression from pseudoprogression reliably.",
      "Immunotherapy failure: low TMB, T-cell exclusion, dexamethasone, and treatment-induced lymphopenia; neoadjuvant approaches are the only signal.",
      "Antigen heterogeneity and loss (EGFRvIII, IL13Rα2) undermine single-target vaccines, ADCs, and CAR-T.",
      "Paediatric tumours (DIPG) have one approved drug with 22% response; durable control remains out of reach.",
      "Trial design: single-arm and external-control comparisons (DCVax-L, historical vaccine data) have repeatedly misled the field."
    ],
    "targets": [
      "b7h3"
    ],
    "tags": [
      "cns",
      "spike"
    ],
    "related": [
      "meningioma"
    ],
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Glioblastoma"
      }
    ],
    "subtypes": [
      "Glioblastoma, IDH-wild-type (WHO grade 4; TERT promoter, EGFR amplification, +7/−10)",
      "Astrocytoma, IDH-mutant (grades 2-4; CDKN2A/B deletion defines grade 4)",
      "Oligodendroglioma, IDH-mutant and 1p/19q-codeleted (grades 2-3)",
      "Diffuse midline glioma, H3 K27M-altered (including DIPG)",
      "Paediatric low-grade glioma (BRAF fusion or V600E, NF1)",
      "Diffuse hemispheric glioma H3 G34-mutant; infant-type hemispheric glioma (NTRK/ALK/ROS1 fusions)"
    ],
    "institutions": [
      "penn-abramson",
      "heidelberg-nct"
    ]
  },
  {
    "id": "grade-3-net",
    "related": [
      "lung-net",
      "pancreatic-net",
      "small-intestinal-net"
    ],
    "kind": "indication",
    "name": "Grade 3 well-differentiated neuroendocrine tumour",
    "group": "endocrine",
    "parent": "neuroendocrine",
    "asOf": "2026-09-17",
    "tags": [
      "subtype-page",
      "endocrine"
    ],
    "wikipedia": "https://en.wikipedia.org/wiki/Neuroendocrine_tumor",
    "keyPapers": [
      "paper-netter-2-lancet-2024"
    ],
    "aka": [
      "NET G3",
      "Grade 3 NET",
      "Well-differentiated grade 3 neuroendocrine tumour",
      "High-grade well-differentiated NET"
    ],
    "burden": "A small fraction of neuroendocrine neoplasms, most often pancreatic; recognised as a separate entity by the WHO in 2017 for the pancreas and 2019 for the whole digestive system after series showed it outlives neuroendocrine carcinoma and responds less to platinum.",
    "tldr": "Grade 3 well-differentiated neuroendocrine tumours divide fast enough to be called grade 3 yet still look and behave like their slower relatives rather than like neuroendocrine carcinoma. Recognised as separate since 2017, they keep the somatostatin receptor, respond less well to platinum chemotherapy, and in the NETTER-2 trial were among the first treated with lutetium-177 dotatate up front.",
    "summary": "Until 2017 every neuroendocrine neoplasm with a Ki-67 above 20 percent was called neuroendocrine carcinoma and treated like small-cell lung cancer. Pathologists noticed that some of these tumours kept the organoid architecture, uniform nuclei and somatostatin receptor expression of well-differentiated tumours, and that their patients lived far longer than those with carcinoma. Multicentre series, notably Heetfeld and colleagues (2015), showed that these tumours, usually pancreatic and usually with a Ki-67 between 20 and 55 percent, responded poorly to platinum-etoposide but survived longer, and the NORDIC NEC series (2013) had already found that a Ki-67 below 55 percent predicted the same pattern. The WHO classified pancreatic NET G3 as a distinct entity in 2017 and extended it to the whole digestive system in 2019; molecularly these tumours carry the MEN1, DAXX and ATRX changes of neuroendocrine tumours and retain p53 and Rb, whereas carcinoma loses them, which is why p53 and Rb immunohistochemistry is now used when morphology is ambiguous.\n\nTreatment evidence is thin because the entity is new and small. Capecitabine with temozolomide is the most used chemotherapy, on the basis of pancreatic tumour data from E2211 and retrospective grade 3 series, and everolimus and sunitinib are used with less evidence. Somatostatin receptor PET is usually positive, often with FDG avidity as well, and this dual pattern makes radioligand therapy plausible: NETTER-2 (Lancet 2024) was designed to include grade 3 tumours with a Ki-67 up to 55 percent alongside higher grade 2 tumours, and first-line lutetium-177 dotatate lengthened progression-free survival from 8.5 to 22.8 months across the 226 patients, the first randomised evidence in this group. COMPOSE randomises well-differentiated aggressive grade 2 and grade 3 gastroenteropancreatic tumours between 177Lu-edotreotide and CAPTEM, everolimus or FOLFOX, and is due to report in 2027.\n\nThe practical decisions are about tempo and receptor status. Tumours near the upper end of Ki-67, growing fast or losing receptor expression on PET are treated more like carcinoma with platinum-etoposide, while receptor-positive tumours with slower tempo are treated like grade 2 tumours with radioligand therapy or CAPTEM. Surgery and liver-directed therapy are used as for other well-differentiated tumours when disease is limited. Whether grade 3 tumours should be graded further, and where the Ki-67 line between tumour and carcinoma really lies, remain open.",
    "subtypes": [
      "Grade 3 well-differentiated pancreatic NET (the commonest site)",
      "Grade 3 well-differentiated small intestinal and other gastroenteropancreatic NET",
      "NET G3 with Ki-67 20 to 55 percent, somatostatin receptor-positive (radioligand candidates)",
      "NET G3 with high FDG avidity or falling receptor expression (carcinoma-like behaviour)",
      "Grade 2 to grade 3 progression within a known neuroendocrine tumour"
    ],
    "biomarkers": [
      "Ki-67 above 20 percent (usually 20 to 55 percent) with well-differentiated morphology",
      "Retained p53 and Rb by immunohistochemistry (abnormal in carcinoma)",
      "Somatostatin receptor PET, usually positive, with FDG PET for dual-tracer assessment",
      "Chromogranin A (monitoring)",
      "MEN1, DAXX and ATRX alterations (tumour lineage, research)",
      "MGMT status (CAPTEM response, investigational)"
    ],
    "standardOfCare": [
      {
        "setting": "Diagnosis",
        "approach": "Morphology, Ki-67 and p53 or Rb immunohistochemistry to separate grade 3 tumour from carcinoma; somatostatin receptor and FDG PET together.",
        "refs": [
          "net-grade-ki67",
          "sstr-pet",
          "pet"
        ],
        "guideline": {
          "version": "NCCN Guidelines: Neuroendocrine and Adrenal Tumors",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1448"
        }
      },
      {
        "setting": "Advanced, somatostatin receptor-positive",
        "approach": "Lutetium-177 dotatate first line for Ki-67 up to 55 percent (NETTER-2); somatostatin analogue alongside.",
        "refs": [
          "lutathera",
          "nct03972488",
          "prrt"
        ],
        "guideline": {
          "version": "NCCN Guidelines: Neuroendocrine and Adrenal Tumors",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1448"
        }
      },
      {
        "setting": "Advanced, shrinkage needed or receptor-negative",
        "approach": "Capecitabine with temozolomide; everolimus or sunitinib for pancreatic tumours; platinum-etoposide for carcinoma-like tempo or Ki-67 near 55 percent.",
        "refs": [
          "everolimus",
          "sunitinib"
        ],
        "guideline": {
          "version": "NCCN Guidelines: Neuroendocrine and Adrenal Tumors",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1448"
        }
      },
      {
        "setting": "Trials",
        "approach": "COMPOSE: 177Lu-edotreotide against CAPTEM, everolimus or FOLFOX in aggressive grade 2 and grade 3 gastroenteropancreatic tumours.",
        "refs": [
          "nct04919226",
          "itm-11"
        ],
        "guideline": {
          "version": "NCCN Guidelines: Neuroendocrine and Adrenal Tumors",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1448"
        }
      },
      {
        "setting": "Limited disease",
        "approach": "Resection and liver-directed therapy as for other well-differentiated tumours.",
        "guideline": {
          "version": "NCCN Guidelines: Neuroendocrine and Adrenal Tumors",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1448"
        }
      }
    ],
    "stateOfArt": [
      "The 2017 and 2019 WHO classifications turned a pathology observation into a treatable category and spared these patients platinum they did not benefit from.",
      "NETTER-2 supplied the first randomised evidence in grade 3 tumours and put radioligand therapy first line.",
      "p53 and Rb immunohistochemistry and dual-tracer PET give practical tools for the ambiguous case."
    ],
    "history": [
      {
        "year": 2013,
        "title": "NORDIC NEC: Ki-67 below 55 percent marks a less platinum-sensitive, longer-surviving group"
      },
      {
        "year": 2015,
        "title": "Heetfeld and colleagues characterise well-differentiated grade 3 tumours as distinct from carcinoma"
      },
      {
        "year": 2017,
        "title": "WHO classification of pancreatic tumours creates NET G3",
        "refs": [
          "net-grade-ki67"
        ]
      },
      {
        "year": 2019,
        "title": "WHO digestive system classification extends NET G3 to the whole gut",
        "refs": [
          "net-grade-ki67"
        ]
      },
      {
        "year": 2021,
        "title": "COMPOSE opens: 177Lu-edotreotide against chemotherapy or everolimus in aggressive grade 2 and grade 3 tumours",
        "refs": [
          "nct04919226",
          "itm-11"
        ]
      },
      {
        "year": 2024,
        "title": "NETTER-2: first-line lutetium-177 dotatate in grade 2 to 3 tumours with Ki-67 up to 55 percent",
        "refs": [
          "nct03972488",
          "lutathera"
        ]
      }
    ],
    "pipeline": [
      "nct04919226",
      "itm-11",
      "lutathera",
      "idea-net-dosimetry-prrt"
    ],
    "openProblems": [
      "The Ki-67 boundary between grade 3 tumour and carcinoma is not sharp, and some cases can only be settled by molecular testing.",
      "No trial has been run in grade 3 tumours alone; NETTER-2 and COMPOSE mix them with grade 2.",
      "Whether platinum-etoposide, CAPTEM or radioligand therapy should come first in the fastest grade 3 tumours is unknown."
    ],
    "drugs": [
      "lutathera",
      "everolimus",
      "sunitinib",
      "itm-11"
    ],
    "trials": [
      "nct03972488",
      "nct04919226",
      "compete"
    ],
    "technologies": [
      "sstr-pet",
      "prrt",
      "pet",
      "radioligand-therapy"
    ],
    "terms": [
      "net-grade-ki67",
      "prrt-term"
    ],
    "targets": [
      "sstr2"
    ],
    "links": [
      {
        "label": "NETTER-2 (Lancet 2024)",
        "url": "https://doi.org/10.1016/S0140-6736(24)00701-3"
      },
      {
        "label": "Heetfeld et al. (Endocrine-Related Cancer 2015)",
        "url": "https://doi.org/10.1530/ERC-15-0119"
      },
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Neuroendocrine_tumor"
      }
    ]
  },
  {
    "kind": "indication",
    "asOf": "2026-09-04",
    "id": "hcc",
    "aka": [
      "Liver Cancer"
    ],
    "companies": [
      "astrazeneca",
      "bms",
      "merck",
      "bayer",
      "eli-lilly",
      "sirtex",
      "boston-scientific"
    ],
    "name": "Hepatocellular carcinoma",
    "group": "gastrointestinal",
    "wikipedia": "https://en.wikipedia.org/wiki/Hepatocellular_carcinoma",
    "burden": "Roughly 900,000 liver cancer cases a year worldwide (GLOBOCAN), ~80% in Asia and Africa, and largely preventable: HBV vaccination and HCV cure have cut incidence in Taiwan, Japan and Egypt. Deaths are ~800,000 a year, and in the United States the death rate has risen faster than for any other cancer over the past two decades, driven by hepatitis C and fatty liver disease.",
    "tldr": "Liver cancer almost always grows in a liver already damaged by hepatitis, alcohol or fatty liver disease. It is one of the most preventable cancers, and since 2020 immunotherapy combinations have roughly doubled how long people with advanced disease live.",
    "summary": "Hepatocellular carcinoma is the dominant primary liver cancer (~75-85%) and one of the most preventable: HBV vaccination and HCV cure have cut incidence wherever they were deployed. Its defining feature is that it arises in a diseased organ: chronic hepatitis B, hepatitis C, alcohol-related and metabolic (MASLD) cirrhosis account for most cases, so the liver's remaining function (Child-Pugh, ALBI) matters as much as tumour stage. The BCLC system integrates both and maps each stage to a treatment: ablation, resection or transplantation for early disease; TACE or radioembolisation for intermediate disease; systemic therapy for advanced disease. Surveillance of at-risk patients with six-monthly ultrasound is recommended but poorly adopted, and most patients still present beyond curative stages, which is why it remains the third leading cause of cancer death worldwide.\n\nSystemic therapy changed completely between 2018 and 2026. Sorafenib (SHARP, 2007) was the only option for a decade. Lenvatinib matched it (REFLECT), then IMbrave150 made atezolizumab plus bevacizumab the first regimen to beat sorafenib on survival (OS 19.2 vs 13.4 months). HIMALAYA's STRIDE regimen (single-dose tremelimumab plus durvalumab) followed with a doubling of five-year survival (19.6% vs 9.4%), and CheckMate 9DW's nivolumab plus ipilimumab reached a median OS of 23.7 months (approved 2025). Camrelizumab plus rivoceranib (CARES-310, OS 23.8 vs 15.2 months) is approved in China but has received three FDA complete response letters for manufacturing reasons, most recently in July 2026. Second-line options after sorafenib (regorafenib, cabozantinib, ramucirumab for AFP ≥400) lack data after immunotherapy, the setting most patients now reach.\n\nThe frontier is combining local and systemic therapy. Three phase 3 trials (EMERALD-1, LEAP-012, EMERALD-3) show that adding immunotherapy and anti-VEGF drugs to TACE prolongs progression-free survival by about 30%, but LEAP-012's final overall-survival hazard ratio of 0.98 shows PFS is a weak surrogate here, and adjuvant atezolizumab-bevacizumab (IMbrave050) lost its early benefit with follow-up. Open questions include the right therapy after first-line immunotherapy, the role of immunotherapy before transplantation, GPC3-directed cell therapy, and above all prevention: HBV vaccination and HCV cure could avert most cases, while MASLD-driven HCC in non-cirrhotic livers is rising and escapes surveillance.",
    "biomarkers": [
      "AFP",
      "GPC3 (trials)",
      "Child-Pugh / ALBI liver function",
      "AFP (prognosis; ≥400 ng/mL for ramucirumab)",
      "BCLC stage and performance status",
      "Portal vein tumour thrombus",
      "HBV/HCV status",
      "AFP-L3 and DCP (GALAD score)"
    ],
    "standardOfCare": [
      {
        "setting": "Early",
        "approach": "Resection, ablation, transplant.",
        "guideline": {
          "version": "NCCN Guidelines: Hepatocellular Carcinoma",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1514"
        }
      },
      {
        "setting": "Intermediate",
        "approach": "TACE/TARE ± systemic therapy.",
        "refs": [
          "radioligand-therapy"
        ],
        "guideline": {
          "version": "NCCN Guidelines: Hepatocellular Carcinoma",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1514"
        }
      },
      {
        "setting": "Advanced",
        "approach": "Atezolizumab-bevacizumab, durvalumab-tremelimumab, or nivolumab-ipilimumab.",
        "refs": [
          "durvalumab"
        ],
        "guideline": {
          "version": "NCCN Guidelines: Hepatocellular Carcinoma",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1514"
        }
      },
      {
        "setting": "Prevention",
        "approach": "Universal HBV vaccination; antiviral suppression of HBV; direct-acting antiviral cure of HCV; alcohol and metabolic risk reduction.",
        "guideline": {
          "nccn": "Hepatobiliary Cancers",
          "version": "AASLD 2023 / EASL 2025"
        }
      },
      {
        "setting": "Surveillance",
        "approach": "Six-monthly ultrasound ± AFP in cirrhosis and high-risk HBV carriers; abbreviated MRI where ultrasound is inadequate.",
        "guideline": {
          "version": "AASLD 2023 Practice Guidance"
        }
      },
      {
        "setting": "Very early / early (BCLC 0-A)",
        "approach": "Ablation (RFA/microwave) for ≤3 cm; resection for preserved liver function; transplantation within Milan or downstaged criteria; radiation segmentectomy as an alternative.",
        "refs": [
          "radioembolisation-tare"
        ],
        "guideline": {
          "nccn": "Category 1 for resection/ablation/transplant"
        }
      },
      {
        "setting": "Intermediate (BCLC B)",
        "approach": "TACE (conventional or DEB-TACE) or TARE; systemic therapy for high tumour burden or TACE-refractory disease; TACE + durvalumab-bevacizumab or STRIDE + lenvatinib prolong PFS (OS unproven).",
        "refs": [
          "radioembolisation-tare"
        ],
        "guideline": {
          "nccn": "TACE category 1; combinations not yet standard"
        }
      },
      {
        "setting": "Advanced (BCLC C), first line",
        "approach": "Atezolizumab + bevacizumab (IMbrave150), STRIDE tremelimumab + durvalumab (HIMALAYA), or nivolumab + ipilimumab (CheckMate 9DW); lenvatinib or sorafenib if immunotherapy is contraindicated (transplant, active autoimmune disease).",
        "refs": [
          "durvalumab",
          "sorafenib"
        ],
        "guideline": {
          "nccn": "Category 1 (preferred) for all three IO regimens",
          "esmoMcbs": "IMbrave150 grade 5"
        }
      },
      {
        "setting": "Advanced, second line and beyond",
        "approach": "After immunotherapy: lenvatinib, sorafenib, cabozantinib or regorafenib by extrapolation (no dedicated phase 3); ramucirumab if AFP ≥400 ng/mL; clinical trials.",
        "refs": [
          "cabozantinib"
        ],
        "guideline": {
          "nccn": "Category 2A after IO"
        }
      },
      {
        "setting": "Adjuvant after resection/ablation",
        "approach": "No approved adjuvant therapy; IMbrave050 benefit not sustained. Surveillance imaging every 3-6 months."
      },
      {
        "setting": "Portal vein tumour thrombosis",
        "approach": "Systemic immunotherapy; Y-90 radioembolisation where TACE is contraindicated; radiotherapy to the thrombus in selected patients.",
        "refs": [
          "radioembolisation-tare"
        ]
      }
    ],
    "stateOfArt": [
      "IO doublets first line.",
      "GPC3 CAR-T and bispecifics emerging.",
      "Three first-line immunotherapy regimens with overall-survival benefit over sorafenib; median OS approaching two years and five-year survival of one in five with STRIDE.",
      "Choice of regimen is driven by bleeding risk (varices), autoimmune disease and transplant candidacy rather than a predictive biomarker.",
      "Radioembolisation and radiation segmentectomy offer curative-intent options for small tumours and for portal vein thrombosis.",
      "TACE plus systemic therapy prolongs PFS in intermediate-stage disease in three phase 3 trials, but overall survival is unproven (LEAP-012 OS HR 0.98).",
      "Prevention works: HBV vaccination and HCV antivirals have cut incidence in Taiwan, Japan and Egypt; MASLD is the rising cause.",
      "Living-donor transplantation and downstaging widen the pool of curable patients, led by Asian high-volume centres."
    ],
    "history": [
      {
        "year": 1941,
        "title": "Hepatocellular carcinoma linked to cirrhosis in large autopsy series",
        "note": "Establishes the disease-in-a-diseased-organ paradigm."
      },
      {
        "year": 1964,
        "title": "Hepatitis B surface antigen discovered (Blumberg)",
        "note": "Nobel Prize 1976; leads to the vaccine."
      },
      {
        "year": 1984,
        "title": "Taiwan begins universal HBV vaccination",
        "note": "Childhood HCC incidence later falls ~70%."
      },
      {
        "year": 1996,
        "title": "Milan criteria for liver transplantation",
        "note": "Mazzaferro: ~70% five-year survival for small tumours."
      },
      {
        "year": 1999,
        "title": "BCLC staging system published"
      },
      {
        "year": 2002,
        "title": "TACE proven to prolong survival (Llovet, Lo)"
      },
      {
        "year": 2007,
        "title": "Sorafenib: first systemic therapy"
      },
      {
        "year": 2007,
        "title": "SHARP: sorafenib, the first systemic therapy",
        "refs": [
          "sorafenib"
        ]
      },
      {
        "year": 2014,
        "title": "Direct-acting antivirals cure hepatitis C",
        "note": "HCC risk falls ~70% after cure."
      },
      {
        "year": 2017,
        "title": "RESORCE: regorafenib, first second-line benefit; SARAH/SIRveNIB negative for Y-90 vs sorafenib",
        "refs": [
          "sarah-sirvenib"
        ]
      },
      {
        "year": 2018,
        "title": "REFLECT: lenvatinib non-inferior first line; CELESTIAL: cabozantinib second line"
      },
      {
        "year": 2020,
        "title": "IMbrave150: atezolizumab-bevacizumab"
      },
      {
        "year": 2020,
        "title": "IMbrave150: atezolizumab + bevacizumab beats sorafenib",
        "note": "First regimen to improve OS over sorafenib; new standard."
      },
      {
        "year": 2022,
        "title": "HIMALAYA: STRIDE approved; BCLC update adds systemic therapy for some BCLC-B"
      },
      {
        "year": 2024,
        "title": "EMERALD-1 and LEAP-012: TACE + systemic therapy improves PFS; HIMALAYA 5-year OS 19.6%"
      },
      {
        "year": 2025,
        "title": "CheckMate 9DW approval (nivolumab + ipilimumab); second FDA CRL for camrelizumab-rivoceranib"
      },
      {
        "year": 2026,
        "title": "EMERALD-3 positive for PFS; LEAP-012 final OS HR 0.98; IMbrave050 update negative; third camrelizumab-rivoceranib CRL (23 July)"
      }
    ],
    "pipeline": [
      "fapi-pet",
      "radioembolisation-tare",
      "gpc3",
      "cabozantinib"
    ],
    "openProblems": [
      "Liver function limits therapy.",
      "Surveillance uptake in cirrhosis is poor.",
      "No predictive biomarker chooses among the three first-line immunotherapy regimens; PD-L1, TMB and viral aetiology are weak.",
      "Second-line therapy after immunotherapy failure is extrapolated from the sorafenib era; no dedicated phase 3 has read out.",
      "TACE combinations prolong PFS but not (yet) OS; sequencing local and systemic therapy is unresolved.",
      "Adjuvant therapy after curative resection remains unproven; recurrence is ~70% at five years.",
      "Surveillance uptake is below 25% and ultrasound misses early tumours in obese, steatotic livers; MASLD-HCC often arises without cirrhosis.",
      "Immunotherapy in transplant candidates risks rejection; safe washout intervals are undefined.",
      "Child-Pugh B patients are excluded from almost every trial yet make up a large share of real-world patients.",
      "Global inequity: most cases occur in Asia and Africa, where HBV vaccination, HCV treatment and systemic therapy access are uneven."
    ],
    "targets": [
      "gpc3",
      "fap"
    ],
    "technologies": [
      "radioembolisation-tare"
    ],
    "tags": [
      "gi",
      "spike"
    ],
    "terms": [
      "dosimetry"
    ],
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Hepatocellular_carcinoma"
      }
    ],
    "subtypes": [
      "Viral (HBV, HCV) HCC",
      "Alcohol-related HCC",
      "MASLD/MASH-related HCC (often non-cirrhotic)",
      "Fibrolamellar carcinoma (young adults, DNAJB1-PRKACA fusion)",
      "Combined hepatocellular-cholangiocarcinoma",
      "BCLC stages 0/A, B, C, D"
    ],
    "institutions": [
      "mayo-clinic",
      "mskcc"
    ]
  },
  {
    "id": "hcc-intermediate",
    "kind": "indication",
    "name": "Intermediate hepatocellular carcinoma (BCLC B)",
    "group": "gastrointestinal",
    "parent": "hcc",
    "asOf": "2026-09-17",
    "tags": [
      "subtype-page"
    ],
    "wikipedia": "https://en.wikipedia.org/wiki/Transcatheter_arterial_chemoembolization",
    "aka": [
      "Intermediate-stage HCC",
      "Multinodular HCC",
      "TACE-eligible hepatocellular carcinoma",
      "BCLC B"
    ],
    "burden": "Multiple tumours confined to a liver that still functions, without vein invasion or spread; the most heterogeneous BCLC stage, for which the 2022 update expects a median survival above two and a half years with chemoembolisation and now systemic therapy.",
    "tldr": "Intermediate hepatocellular carcinoma is several tumours inside a working liver, too many to cut out but with no spread beyond it. The standard treatment for two decades has been chemoembolisation through the hepatic artery, and trials now show that adding immunotherapy and anti-angiogenic drugs to it delays progression.",
    "summary": "BCLC stage B covers multinodular hepatocellular carcinoma with preserved liver function, no cancer-related symptoms and no macrovascular invasion or extrahepatic spread. The 2022 BCLC update split it into three groups: patients whose tumour burden allows downstaging or extended transplant criteria, those with well-defined nodules suited to transarterial chemoembolisation, and those with diffuse, infiltrative or bilobar disease who do better moving straight to systemic therapy, a change described as treatment stage migration.\n\nTransarterial chemoembolisation delivers chemotherapy-loaded particles or drug-eluting beads into the arteries feeding the tumours and blocks them; two randomised trials in 2002 (Llovet in Barcelona and Lo in Hong Kong) showed it prolongs survival, and it has been the standard since. Radioembolisation with yttrium-90 microspheres is an alternative with fewer post-procedure symptoms, though phase 3 trials against sorafenib in more advanced disease were negative. Repeated embolisation damages the liver, so the ART and other scores guide when to stop and switch.\n\nTwo phase 3 trials published in the Lancet in 2025 added systemic therapy to chemoembolisation: EMERALD-1 combined durvalumab and bevacizumab with TACE and extended median progression-free survival from 8.2 to 15.0 months, and LEAP-012 combined lenvatinib and pembrolizumab with TACE and extended it from 10.0 to 14.6 months; overall survival was immature in both at first analysis. EMERALD-3, testing durvalumab and tremelimumab with TACE, reported a benefit in 2026. The atezolizumab-bevacizumab and other advanced-stage regimens are also used directly in patients with high tumour burden, and ongoing trials compare systemic therapy alone with the combinations.",
    "subtypes": [
      "Multinodular HCC in a cirrhotic liver within the up-to-seven criteria (downstaging or extended transplant)",
      "Well-defined nodules suitable for TACE",
      "Diffuse or infiltrative bilobar HCC (systemic therapy first)",
      "TACE-refractory HCC",
      "BCLC B treated with TACE plus systemic therapy (EMERALD-1, LEAP-012)"
    ],
    "biomarkers": [
      "Tumour number and size (up-to-seven and other burden criteria)",
      "Child-Pugh and ALBI liver function before and after each embolisation",
      "Alpha-fetoprotein response",
      "Modified RECIST response on contrast imaging",
      "Absence of macrovascular invasion and extrahepatic spread (defines the stage)"
    ],
    "standardOfCare": [
      {
        "setting": "Well-defined nodules, preserved liver function",
        "approach": "Transarterial chemoembolisation, conventional or with drug-eluting beads, repeated on demand; radioembolisation as an alternative.",
        "refs": [
          "radioembolisation-tare"
        ]
      },
      {
        "setting": "TACE plus systemic therapy",
        "approach": "Durvalumab with bevacizumab (EMERALD-1) or lenvatinib with pembrolizumab (LEAP-012) added to TACE, where approved; durvalumab-tremelimumab with TACE after EMERALD-3.",
        "refs": [
          "durvalumab",
          "pembrolizumab"
        ]
      },
      {
        "setting": "High burden or diffuse disease",
        "approach": "Systemic therapy as for advanced disease (atezolizumab-bevacizumab or durvalumab-tremelimumab) instead of embolisation.",
        "refs": [
          "durvalumab"
        ]
      },
      {
        "setting": "Within transplant criteria after downstaging",
        "approach": "Chemoembolisation or radioembolisation as a bridge, then liver transplantation."
      }
    ],
    "stateOfArt": [
      "Chemoembolisation remains the backbone, but the 2022 BCLC update sends patients with diffuse or high-burden disease straight to systemic therapy.",
      "EMERALD-1 and LEAP-012 are the first phase 3 trials to improve on TACE alone in twenty years.",
      "Whether the combinations lengthen life, not just time to progression, is still awaited."
    ],
    "history": [
      {
        "year": 2002,
        "title": "Llovet and Lo randomised trials: chemoembolisation prolongs survival"
      },
      {
        "year": 2010,
        "title": "Drug-eluting bead TACE (PRECISION V) matches conventional TACE with less toxicity"
      },
      {
        "year": 2022,
        "title": "BCLC update subdivides intermediate stage and introduces treatment stage migration"
      },
      {
        "year": 2025,
        "title": "EMERALD-1 and LEAP-012: systemic therapy plus TACE delays progression"
      },
      {
        "year": 2026,
        "title": "EMERALD-3: durvalumab-tremelimumab plus TACE reported positive"
      }
    ],
    "pipeline": [
      "radioembolisation-tare",
      "durvalumab"
    ],
    "openProblems": [
      "No overall survival gain yet shown for TACE combinations.",
      "Which patients should skip embolisation and go straight to systemic therapy.",
      "Liver damage from repeated embolisation limits later treatment options."
    ],
    "links": [
      {
        "label": "EMERALD-1 (Lancet 2025)",
        "url": "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(24)02551-0/abstract"
      },
      {
        "label": "LEAP-012 (Lancet 2025)",
        "url": "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(24)02575-3/abstract"
      },
      {
        "label": "BCLC 2022 update (J Hepatol)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/34801630/"
      },
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Transcatheter_arterial_chemoembolization"
      }
    ]
  },
  {
    "id": "hereditary-ppgl",
    "related": [
      "metastatic-ppgl",
      "pheochromocytoma-paraganglioma"
    ],
    "kind": "indication",
    "name": "Hereditary pheochromocytoma and paraganglioma (SDHx, VHL, RET, NF1, MAX and TMEM127)",
    "group": "endocrine",
    "parent": "pheochromocytoma-paraganglioma",
    "asOf": "2026-09-18",
    "tags": [
      "subtype-page",
      "endocrine"
    ],
    "wikipedia": "https://en.wikipedia.org/wiki/Paraganglioma",
    "aka": [
      "Familial paraganglioma syndromes",
      "SDHB-related paraganglioma",
      "SDHD-related head and neck paraganglioma",
      "VHL-associated pheochromocytoma",
      "MEN2-associated pheochromocytoma",
      "Hereditary PPGL"
    ],
    "burden": "Up to four in ten pheochromocytomas and paragangliomas are caused by a germline mutation, the highest proportion of any cancer, so every patient is offered genetic testing; carriers face lifelong surveillance for new tumours.",
    "tldr": "Hereditary pheochromocytoma and paraganglioma is the inherited form of these adrenaline-producing tumours, caused by a fault in one of more than a dozen genes, most often SDHB, SDHD, VHL and RET. Knowing the gene changes care: SDHB carriers have the highest risk of spread, VHL and MEN2 patients get adrenal-sparing surgery because tumours arise on both sides, and relatives are screened.",
    "summary": "Pheochromocytomas (adrenal) and paragangliomas (sympathetic chain, head and neck) have the strongest hereditary basis of any tumour type: germline mutations are found in 30 to 40 percent of patients, in the succinate dehydrogenase genes (SDHB, SDHD, SDHC, SDHA and SDHAF2), VHL, RET (MEN2), NF1, MAX, TMEM127, FH and others, and the Endocrine Society guideline recommends that all patients be offered testing. The genes fall into two clusters that shape the tumour: cluster 1 (SDHx, VHL, FH, EPAS1) tumours are pseudohypoxic, noradrenergic or non-secreting, often extra-adrenal and multiple, and express somatostatin receptors strongly; cluster 2 (RET, NF1, MAX, TMEM127) tumours are kinase-driven, adrenergic and usually adrenal. SDHB mutations carry the highest risk of metastasis, SDHD (paternally inherited) causes multiple head and neck paragangliomas, VHL and MEN2 cause bilateral pheochromocytomas alongside their other tumours, and SDHx carriers are also at risk of gastrointestinal stromal tumours, renal cell carcinoma and pituitary adenomas.\n\nManagement differs from sporadic disease at every step. Diagnosis rests on plasma or urinary metanephrines and, for non-secreting head and neck tumours, imaging; SDHB immunohistochemistry on the tumour flags an SDHx mutation, and 68Ga-DOTATATE PET is the preferred whole-body scan for cluster 1 disease because of its somatostatin receptor expression. Surgery follows alpha-blockade, and in VHL and MEN2 a cortical-sparing adrenalectomy is preferred to avoid lifelong steroid dependence after bilateral tumours; head and neck paragangliomas, which rarely secrete and grow slowly, are often watched or irradiated rather than resected because surgery risks the cranial nerves. Carriers enter lifelong surveillance with annual metanephrines and periodic whole-body MRI from childhood in SDHB and SDHD families, and cascade testing is offered to relatives. For carriers who develop advanced disease, the HIF-2 alpha inhibitor belzutifan, approved for VHL-associated tumours in 2021 and for advanced pheochromocytoma and paraganglioma in 2025, exploits the pseudohypoxia pathway directly, and radioligand therapy with lutetium-177 dotatate suits the somatostatin-receptor-rich cluster 1 tumours. The genetics also guide prognosis: metastatic risk, multiplicity and the chance of a second primary all follow the gene.",
    "subtypes": [
      "SDHB-related paraganglioma (highest metastatic risk; extra-adrenal, abdominal and thoracic)",
      "SDHD-related head and neck paraganglioma (multiple, paternal inheritance, rarely secreting)",
      "SDHC, SDHA and SDHAF2-related paraganglioma (rarer, lower penetrance)",
      "VHL-associated pheochromocytoma (bilateral, noradrenergic; belzutifan eligible)",
      "MEN2 (RET)-associated pheochromocytoma (bilateral, adrenergic; with medullary thyroid cancer)",
      "NF1, MAX and TMEM127-associated pheochromocytoma (adrenal, later onset)",
      "Carney triad and Carney-Stratakis dyad (paraganglioma with gastrointestinal stromal tumour)"
    ],
    "biomarkers": [
      "Germline panel testing (SDHA, SDHB, SDHC, SDHD, SDHAF2, VHL, RET, NF1, MAX, TMEM127, FH, EPAS1)",
      "Plasma free or urinary fractionated metanephrines (noradrenergic pattern in cluster 1)",
      "SDHB immunohistochemistry (loss indicates any SDHx mutation)",
      "68Ga-DOTATATE PET (somatostatin receptor expression, staging and radioligand eligibility)",
      "Tumour size, extra-adrenal site and SDHB status as metastatic risk factors",
      "Surveillance whole-body MRI in carriers"
    ],
    "standardOfCare": [
      {
        "setting": "Genetic diagnosis",
        "approach": "Germline panel testing offered to every patient; SDHB immunohistochemistry on tumour tissue; cascade testing of relatives with genetic counselling.",
        "refs": [
          "sdh-deficiency"
        ],
        "guideline": {
          "version": "Endocrine Society clinical practice guideline 2014; NCCN Neuroendocrine and Adrenal Tumors",
          "url": "https://doi.org/10.1210/jc.2014-1498"
        }
      },
      {
        "setting": "Biochemical and imaging work-up",
        "approach": "Plasma or urinary metanephrines; CT or MRI; 68Ga-DOTATATE PET as the preferred functional scan for SDHx and other cluster 1 disease.",
        "refs": [
          "sstr-pet",
          "ct"
        ],
        "guideline": {
          "version": "Endocrine Society clinical practice guideline 2014; NCCN Neuroendocrine and Adrenal Tumors",
          "url": "https://doi.org/10.1210/jc.2014-1498"
        }
      },
      {
        "setting": "Adrenal tumours in VHL and MEN2",
        "approach": "Alpha-blockade then cortical-sparing (partial) adrenalectomy to preserve adrenal function given the risk of bilateral disease.",
        "guideline": {
          "version": "Endocrine Society clinical practice guideline 2014; NCCN Neuroendocrine and Adrenal Tumors",
          "url": "https://doi.org/10.1210/jc.2014-1498"
        }
      },
      {
        "setting": "Head and neck paragangliomas",
        "approach": "Observation for small asymptomatic tumours; surgery or fractionated or stereotactic radiotherapy when growing or symptomatic, weighing cranial nerve risk.",
        "guideline": {
          "version": "Endocrine Society clinical practice guideline 2014; NCCN Neuroendocrine and Adrenal Tumors",
          "url": "https://doi.org/10.1210/jc.2014-1498"
        }
      },
      {
        "setting": "Surveillance of carriers",
        "approach": "Annual metanephrines and clinical review from childhood, with whole-body MRI every two to three years in SDHB and SDHD carriers; screening for associated tumours (GIST, renal cell carcinoma, pituitary).",
        "guideline": {
          "version": "Endocrine Society clinical practice guideline 2014; NCCN Neuroendocrine and Adrenal Tumors",
          "url": "https://doi.org/10.1210/jc.2014-1498"
        }
      },
      {
        "setting": "Advanced disease in carriers",
        "approach": "Belzutifan (approved for VHL-associated tumours 2021 and for advanced pheochromocytoma and paraganglioma 2025); lutetium-177 dotatate for somatostatin-receptor-positive disease; see the metastatic record.",
        "refs": [
          "lutathera",
          "prrt"
        ],
        "guideline": {
          "version": "Endocrine Society clinical practice guideline 2014; NCCN Neuroendocrine and Adrenal Tumors",
          "url": "https://doi.org/10.1210/jc.2014-1498"
        }
      }
    ],
    "stateOfArt": [
      "Universal germline testing and gene-based surveillance find tumours before they cause harm.",
      "The cluster 1 and cluster 2 framework links gene, biochemistry, imaging and therapy.",
      "Belzutifan is the first drug aimed at the pseudohypoxia pathway that drives cluster 1 tumours."
    ],
    "history": [
      {
        "year": 1993,
        "title": "RET mutations identified in MEN2; VHL gene cloned"
      },
      {
        "year": 2000,
        "title": "SDHD mutations found in familial head and neck paraganglioma; SDHB follows in 2001",
        "refs": [
          "sdh-deficiency"
        ]
      },
      {
        "year": 2014,
        "title": "Endocrine Society guideline recommends germline testing for all patients"
      },
      {
        "year": 2017,
        "title": "TCGA analysis defines the pseudohypoxia and kinase clusters"
      },
      {
        "year": 2021,
        "title": "Belzutifan approved for VHL-associated tumours"
      },
      {
        "year": 2025,
        "title": "Belzutifan approved for advanced pheochromocytoma and paraganglioma"
      }
    ],
    "pipeline": [
      "lutathera",
      "prrt"
    ],
    "openProblems": [
      "Penetrance of SDHx mutations is incomplete and variable, so how intensively to screen carriers is debated.",
      "No treatment prevents new tumours in carriers.",
      "Whether belzutifan works in SDHx-related as well as VHL-related disease needs more data.",
      "Head and neck paragangliomas have no effective medical therapy."
    ],
    "drugs": [
      "lutathera"
    ],
    "technologies": [
      "sstr-pet",
      "radioligand-therapy",
      "prrt",
      "ct"
    ],
    "terms": [
      "sdh-deficiency"
    ],
    "targets": [
      "sstr2"
    ],
    "links": [
      {
        "label": "Endocrine Society PPGL guideline 2014",
        "url": "https://doi.org/10.1210/jc.2014-1498"
      },
      {
        "label": "Belzutifan in VHL (NEJM 2021)",
        "url": "https://doi.org/10.1056/NEJMoa2103425"
      },
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Paraganglioma"
      }
    ]
  },
  {
    "id": "lung-net",
    "related": [
      "grade-3-net",
      "pancreatic-net",
      "small-intestinal-net"
    ],
    "kind": "indication",
    "name": "Lung neuroendocrine tumours (typical and atypical carcinoid)",
    "group": "lung",
    "parent": "neuroendocrine",
    "asOf": "2026-09-17",
    "tags": [
      "subtype-page",
      "endocrine",
      "lung"
    ],
    "wikipedia": "https://en.wikipedia.org/wiki/Neuroendocrine_tumor",
    "keyPapers": [
      "paper-cabinet-cabozantinib-nejm-2024"
    ],
    "aka": [
      "Bronchial carcinoid",
      "Pulmonary carcinoid",
      "Typical carcinoid",
      "Atypical carcinoid",
      "Lung NET",
      "Bronchopulmonary neuroendocrine tumour"
    ],
    "burden": "A small minority of lung cancers, occurring in younger patients and non-smokers more often than other lung cancers; typical carcinoids are usually cured by surgery, atypical carcinoids recur more often.",
    "tldr": "Lung neuroendocrine tumours, called typical and atypical carcinoids, are slow-growing tumours of the airways that are usually cured by surgery. When they spread, everolimus is the one drug tested in a randomised trial for this site, cabozantinib was approved in 2025, and somatostatin analogues and lutetium radioligand therapy are borrowed from gut tumours.",
    "summary": "Lung neuroendocrine tumours are graded differently from their gut counterparts: the WHO lung classification separates typical carcinoid (fewer than two mitoses per two square millimetres and no necrosis) from atypical carcinoid (two to ten mitoses or foci of necrosis), with Ki-67 used to support the count rather than define it, and places both alongside small-cell and large-cell neuroendocrine carcinoma in a single neuroendocrine group. Most typical carcinoids sit centrally in a main or lobar bronchus and present with cough, wheeze, haemoptysis or recurrent pneumonia behind an obstructed airway; peripheral tumours are found incidentally. A few produce ectopic ACTH and Cushing's syndrome, carcinoid syndrome is uncommon without liver metastases, and diffuse idiopathic pulmonary neuroendocrine cell hyperplasia is a rare precursor that seeds multiple tumourlets. About a twentieth arise in patients with MEN1.\n\nSurgery is the treatment for localised disease and usually the cure: lobectomy or a parenchyma-sparing sleeve resection with systematic nodal dissection, with endobronchial resection reserved for patients who cannot tolerate an operation. Adjuvant therapy has no proven benefit and follow-up is prolonged because atypical carcinoids can recur years later. For advanced disease the evidence is thin. RADIANT-4 (Lancet 2016) is the only randomised trial to include lung tumours in numbers: 302 patients with non-functional lung or gastrointestinal neuroendocrine tumours were randomised to everolimus or placebo and progression-free survival lengthened from 3.9 to 11.0 months, and the FDA approved everolimus for lung neuroendocrine tumours in 2016. The phase 2 LUNA trial (2017) tested pasireotide, everolimus and the combination in lung and thymic tumours and found each active, without a randomised comparison against placebo.\n\nThe rest of the sequence is borrowed. Somatostatin analogues are used for somatostatin receptor-positive tumours on the strength of gut trials and the small SPINET study of lanreotide, and lutetium-177 dotatate is given off-label to receptor-positive lung tumours on series data, since NETTER-1 and NETTER-2 enrolled only gastroenteropancreatic disease. CABINET (New England Journal of Medicine 2024) included lung and thymic tumours in its extra-pancreatic cohort, where cabozantinib lengthened progression-free survival from 3.9 to 8.4 months, and a subgroup analysis presented in 2025 showed a large reduction in progression risk in the lung and thymic tumours; cabozantinib's 2025 approval covers them. Temozolomide-based chemotherapy is used for atypical carcinoids that need shrinkage, and platinum-etoposide is reserved for tumours behaving like carcinoma.",
    "subtypes": [
      "Typical carcinoid of the central bronchus (low mitotic count, no necrosis)",
      "Atypical carcinoid (two to ten mitoses or necrosis, higher recurrence)",
      "Peripheral lung neuroendocrine tumour (incidental, sometimes multiple)",
      "Diffuse idiopathic pulmonary neuroendocrine cell hyperplasia (DIPNECH) with tumourlets",
      "Lung carcinoid with ectopic ACTH and Cushing's syndrome",
      "MEN1-associated lung neuroendocrine tumour",
      "Thymic neuroendocrine tumour (grouped with lung in trials)"
    ],
    "biomarkers": [
      "Mitotic count and necrosis (WHO typical versus atypical)",
      "Ki-67 index (supportive, not definitional in the lung)",
      "Somatostatin receptor PET (staging and somatostatin analogue or radioligand eligibility)",
      "Chromogranin A (monitoring)",
      "ACTH and cortisol where Cushing's syndrome is suspected",
      "Germline MEN1 in young or multiple tumours"
    ],
    "standardOfCare": [
      {
        "setting": "Diagnosis and staging",
        "approach": "Bronchoscopy with biopsy for central tumours, CT of the chest and abdomen, somatostatin receptor PET, and pathology graded by mitotic count and necrosis.",
        "refs": [
          "ct",
          "sstr-pet",
          "ga68-dotatate",
          "net-grade-ki67"
        ],
        "guideline": {
          "version": "NCCN Guidelines: Neuroendocrine and Adrenal Tumors",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1448"
        }
      },
      {
        "setting": "Localised disease",
        "approach": "Lobectomy or sleeve resection with systematic nodal dissection; endobronchial resection for patients unfit for surgery; no adjuvant therapy.",
        "guideline": {
          "version": "NCCN Guidelines: Neuroendocrine and Adrenal Tumors",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1448"
        }
      },
      {
        "setting": "Advanced, somatostatin receptor-positive, slow tempo",
        "approach": "Octreotide or lanreotide, by extrapolation from gut trials and the SPINET study.",
        "guideline": {
          "version": "NCCN Guidelines: Neuroendocrine and Adrenal Tumors",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1448"
        }
      },
      {
        "setting": "Advanced, progressive",
        "approach": "Everolimus (RADIANT-4); cabozantinib (CABINET); lutetium-177 dotatate off-label for receptor-positive tumours; temozolomide-based chemotherapy for atypical carcinoids needing shrinkage.",
        "refs": [
          "everolimus",
          "radiant-3-4",
          "cabozantinib",
          "cabinet",
          "lutathera",
          "prrt"
        ],
        "guideline": {
          "version": "NCCN Guidelines: Neuroendocrine and Adrenal Tumors",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1448"
        }
      },
      {
        "setting": "Hormone syndromes",
        "approach": "Somatostatin analogues for carcinoid syndrome; steroidogenesis inhibitors or resection for ectopic ACTH.",
        "guideline": {
          "version": "NCCN Guidelines: Neuroendocrine and Adrenal Tumors",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1448"
        }
      }
    ],
    "stateOfArt": [
      "Surgery cures most typical carcinoids, and parenchyma-sparing sleeve resection preserves lung function.",
      "Everolimus is the only drug with randomised evidence specific to lung neuroendocrine tumours, and cabozantinib joined it in 2025 through the CABINET extra-pancreatic cohort.",
      "The lung classification by mitotic count and necrosis, rather than Ki-67, still governs treatment, and the two systems are being reconciled."
    ],
    "history": [
      {
        "year": 1972,
        "title": "Arrigoni defines atypical carcinoid as a separate entity"
      },
      {
        "year": 2015,
        "title": "WHO lung classification groups carcinoids with small-cell and large-cell neuroendocrine carcinoma as neuroendocrine tumours",
        "refs": [
          "net-grade-ki67"
        ]
      },
      {
        "year": 2016,
        "title": "RADIANT-4: everolimus approved for lung neuroendocrine tumours",
        "refs": [
          "radiant-3-4",
          "everolimus"
        ]
      },
      {
        "year": 2017,
        "title": "LUNA: pasireotide and everolimus active in lung and thymic tumours"
      },
      {
        "year": 2024,
        "title": "CABINET published with lung and thymic tumours in the extra-pancreatic cohort",
        "refs": [
          "cabinet"
        ]
      },
      {
        "year": 2025,
        "title": "Cabozantinib approved for previously treated neuroendocrine tumours including lung; ESMO subgroup analysis",
        "refs": [
          "cabozantinib",
          "cabinet"
        ]
      }
    ],
    "pipeline": [
      "cabinet",
      "prrt",
      "sstr-pet"
    ],
    "openProblems": [
      "No randomised trial has tested somatostatin analogues or radioligand therapy specifically in lung neuroendocrine tumours.",
      "Lung and gastroenteropancreatic grading systems disagree, so trial eligibility and guideline advice do not map cleanly.",
      "Atypical carcinoids relapse late and there is no proven adjuvant therapy."
    ],
    "drugs": [
      "everolimus",
      "cabozantinib",
      "lutathera",
      "ga68-dotatate",
      "pasireotide"
    ],
    "trials": [
      "radiant-3-4",
      "cabinet",
      "nct03972488"
    ],
    "technologies": [
      "sstr-pet",
      "prrt",
      "ct"
    ],
    "terms": [
      "net-grade-ki67"
    ],
    "targets": [
      "sstr2"
    ],
    "links": [
      {
        "label": "RADIANT-4 (Lancet 2016)",
        "url": "https://doi.org/10.1016/S0140-6736(15)00817-X"
      },
      {
        "label": "CABINET (NEJM 2024)",
        "url": "https://doi.org/10.1056/NEJMoa2403991"
      },
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Neuroendocrine_tumor"
      }
    ]
  },
  {
    "id": "meningioma",
    "kind": "indication",
    "name": "Meningioma",
    "group": "central nervous system",
    "asOf": "2026-09-17",
    "tags": [
      "subtype-page",
      "cns"
    ],
    "wikipedia": "https://en.wikipedia.org/wiki/Meningioma",
    "aka": [
      "Meningeal tumour",
      "Atypical meningioma",
      "Anaplastic meningioma",
      "Malignant meningioma"
    ],
    "burden": "The commonest primary intracranial tumour, found in about one in a hundred adults on imaging, mostly women; the great majority are grade 1 and never threaten life, while grade 3 tumours behave like cancers and have no approved drug.",
    "tldr": "Meningiomas grow from the membranes covering the brain and spinal cord rather than from the brain itself. Most are slow and benign and are either watched or removed; radiotherapy or radiosurgery treats what surgery cannot reach or what grows back, and no drug has yet been approved for them.",
    "summary": "Meningiomas arise from arachnoid cap cells and are graded 1 to 3 in WHO 2021 by mitotic count, brain invasion and specific histological patterns, with two molecular criteria that assign grade 3 regardless of appearance: homozygous CDKN2A/B deletion and TERT promoter mutation. About half of sporadic tumours carry NF2 loss with monosomy 22, and most of the rest carry mutually exclusive mutations in TRAF7, KLF4, AKT1, SMO, PIK3CA or POLR2A that cluster at the skull base (Clark and Brastianos, 2013). DNA methylation classes and integrated molecular grading (Sahm 2017, Nassiri 2021) predict recurrence better than histology alone. Radiation exposure is the only established environmental cause; progesterone and oestrogen receptors explain the female excess and the link to some progestogens.\n\nIncidental small meningiomas are watched with MRI. Symptomatic or growing tumours are resected, with completeness graded by the Simpson scale, and complete resection of a grade 1 tumour is usually curative. Radiosurgery controls most small tumours (under about 3 cm) and is the usual choice for skull base and cavernous sinus lesions that cannot be safely removed. Fractionated radiotherapy is given after incomplete resection of grade 2 tumours and after any resection of grade 3 tumours, following the phase 2 EORTC 22042-26042 and RTOG 0539 studies; whether completely resected grade 2 tumours need radiotherapy is the question of the ROAM/EORTC 1308 and NRG BN003 randomised trials. Proton therapy is used for large skull base and re-irradiation cases.\n\nNo systemic therapy is approved. Hydroxyurea, somatostatin analogues, interferon and mifepristone have all failed or shown marginal activity; bevacizumab and sunitinib produce modest control in recurrent high-grade disease, everolimus with octreotide has phase 2 activity (CEVOREM), and Alliance A071401 is testing mutation-matched drugs (the FAK inhibitor GSK2256098 in NF2-mutant tumours, SMO and AKT inhibitors, CDK inhibitors). Somatostatin receptor 2 expression makes DOTATATE PET useful for imaging and has led to trials of peptide receptor radionuclide therapy. Grade 3 and recurrent unresectable meningiomas remain a real unmet need.",
    "subtypes": [
      "Meningioma, grade 1 (meningothelial, fibrous, transitional, psammomatous and other benign patterns)",
      "Meningioma, grade 2 (atypical; chordoid and clear cell patterns)",
      "Meningioma, grade 3 (anaplastic; or any meningioma with CDKN2A/B homozygous deletion or TERT promoter mutation)",
      "NF2-related meningioma (multiple, often with schwannoma)",
      "Skull base meningioma with TRAF7, KLF4, AKT1, SMO or PIK3CA mutation (convexity tumours are mostly NF2-driven)",
      "Spinal meningioma (intradural extramedullary)"
    ],
    "biomarkers": [
      "WHO grade with mitotic count and brain invasion",
      "CDKN2A/B homozygous deletion and TERT promoter mutation (assign grade 3)",
      "NF2 loss and monosomy 22",
      "TRAF7, KLF4, AKT1, SMO, PIK3CA and POLR2A mutations",
      "DNA methylation class and integrated molecular grade",
      "Somatostatin receptor 2 expression (DOTATATE PET)",
      "Simpson grade of resection"
    ],
    "standardOfCare": [
      {
        "setting": "Incidental or small asymptomatic",
        "approach": "Observation with serial MRI; many never grow. Treatment when growth or symptoms appear.",
        "guideline": {
          "version": "NCCN Guidelines: Central Nervous System Cancers",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1425"
        }
      },
      {
        "setting": "Symptomatic or growing, accessible",
        "approach": "Surgical resection as complete as safely possible; complete resection of a grade 1 tumour is usually curative and needs no adjuvant treatment.",
        "guideline": {
          "version": "NCCN Guidelines: Central Nervous System Cancers",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1425"
        }
      },
      {
        "setting": "Small, skull base or surgically inaccessible",
        "approach": "Stereotactic radiosurgery (Gamma Knife, CyberKnife or linac) or fractionated stereotactic radiotherapy, with high long-term control rates for grade 1 tumours.",
        "guideline": {
          "version": "NCCN Guidelines: Central Nervous System Cancers",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1425"
        }
      },
      {
        "setting": "Grade 2, incompletely resected, and all grade 3",
        "approach": "Fractionated radiotherapy after surgery (EORTC 22042-26042, RTOG 0539); proton therapy for large or re-irradiated skull base tumours; observation versus radiotherapy after complete resection of grade 2 tumours is under trial (ROAM/EORTC 1308, NRG BN003).",
        "guideline": {
          "version": "NCCN Guidelines: Central Nervous System Cancers",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1425"
        }
      },
      {
        "setting": "Recurrent, no surgical or radiotherapy option",
        "approach": "No approved drug. Bevacizumab, sunitinib or everolimus with a somatostatin analogue on phase 2 evidence; mutation-matched trials (Alliance A071401) and peptide receptor radionuclide therapy studies preferred.",
        "refs": [
          "sunitinib",
          "everolimus",
          "prrt"
        ],
        "guideline": {
          "version": "NCCN Guidelines: Central Nervous System Cancers",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1425"
        }
      }
    ],
    "stateOfArt": [
      "Two molecular markers now assign grade 3 regardless of histology, and methylation classes forecast recurrence better than the microscope.",
      "Radiosurgery controls most small meningiomas without an operation and has become the default for skull base disease.",
      "Meningioma is the commonest brain tumour and still has no approved systemic therapy; mutation-matched and radionuclide trials are the first rational attempts."
    ],
    "history": [
      {
        "year": 1922,
        "title": "Cushing coins the term meningioma",
        "note": "Cushing and Eisenhardt's 1938 monograph followed, with the first large surgical series."
      },
      {
        "year": 1957,
        "title": "Simpson grades completeness of resection and links it to recurrence"
      },
      {
        "year": 1993,
        "title": "NF2 gene identified on chromosome 22",
        "note": "Trofatter and Rouleau clone the gene whose loss drives most meningiomas and schwannomas."
      },
      {
        "year": 2013,
        "title": "Exome sequencing finds TRAF7, KLF4, AKT1 and SMO mutations in NF2-intact meningiomas",
        "note": "Clark and colleagues (Science) and Brastianos and colleagues (Nature Genetics)."
      },
      {
        "year": 2017,
        "title": "DNA methylation classes of meningioma predict recurrence",
        "note": "Sahm and colleagues (Lancet Oncology)."
      },
      {
        "year": 2021,
        "title": "WHO 2021 adds CDKN2A/B deletion and TERT promoter mutation as grade 3 criteria"
      }
    ],
    "pipeline": [
      "prrt",
      "everolimus"
    ],
    "openProblems": [
      "No approved systemic therapy; grade 3 and recurrent unresectable tumours have few options.",
      "Whether completely resected grade 2 meningiomas need radiotherapy (ROAM, NRG BN003).",
      "Which incidental meningiomas will grow; most never do.",
      "Long-term cognitive and endocrine effects of radiotherapy to the skull base."
    ],
    "technologies": [
      "prrt"
    ],
    "drugs": [
      "sunitinib",
      "everolimus"
    ],
    "related": [
      "glioblastoma"
    ],
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Meningioma"
      },
      {
        "label": "EANO guideline on meningiomas (Neuro-Oncology 2021)",
        "url": "https://doi.org/10.1093/neuonc/noab150"
      }
    ]
  },
  {
    "id": "metastatic-ppgl",
    "related": [
      "hereditary-ppgl",
      "pheochromocytoma-paraganglioma",
      "small-intestinal-net"
    ],
    "kind": "indication",
    "name": "Metastatic pheochromocytoma and paraganglioma",
    "group": "endocrine",
    "parent": "pheochromocytoma-paraganglioma",
    "asOf": "2026-09-18",
    "tags": [
      "subtype-page",
      "endocrine"
    ],
    "wikipedia": "https://en.wikipedia.org/wiki/Pheochromocytoma",
    "aka": [
      "Malignant pheochromocytoma",
      "Metastatic paraganglioma",
      "Advanced PPGL",
      "Unresectable pheochromocytoma and paraganglioma"
    ],
    "burden": "About one in ten pheochromocytomas and up to a third or more of sympathetic paragangliomas, especially SDHB-related ones, metastasise to bone, lymph nodes, liver and lung; the course ranges from indolent over decades to rapidly fatal.",
    "tldr": "Metastatic pheochromocytoma and paraganglioma is disease that has spread to bone, lymph nodes, liver or lungs, the only way these adrenaline-producing tumours are called malignant. It is often slow, so treatment starts with blood pressure control and watching, then moves through radioactive drugs that home to the tumour, the kinase inhibitor sunitinib, chemotherapy and, since 2025, belzutifan.",
    "summary": "No pathological feature reliably separates benign from malignant pheochromocytoma and paraganglioma; malignancy is defined by metastases at sites where chromaffin tissue does not normally occur, above all bone, lymph nodes, liver and lung. Metastatic disease occurs in about a tenth of adrenal tumours and a much larger share of extra-adrenal sympathetic paragangliomas, and SDHB mutation, large size, extra-adrenal site and a noradrenergic or dopaminergic profile are the main risk factors. The course is heterogeneous: some patients live for decades with stable bone metastases, others progress within months, so the first decision is whether to treat at all. Catecholamine excess is controlled throughout with alpha-blockade (phenoxybenzamine or doxazosin) and beta-blockade added second, with metyrosine for refractory cases, and any procedure, including biopsy and embolisation, is done under blockade to avoid a hypertensive crisis. Somatostatin receptor PET (68Ga-DOTATATE) and 123I-MIBG scintigraphy stage the disease and, by showing uptake, select patients for the corresponding radionuclide therapy.\n\nTreatment is sequenced by pace. Indolent disease is watched or treated locally with surgery, radiotherapy, ablation or embolisation of dominant lesions. For progressive disease, radionuclide therapy is the first systemic step: high-specific-activity 131I-MIBG (iobenguane, Azedra) was approved in 2018 after a phase 2 trial in which a quarter of patients halved their antihypertensive medication and about a fifth had tumour responses, though the manufacturer withdrew it from the market in 2024, and lutetium-177 dotatate, approved for gastroenteropancreatic neuroendocrine tumours, is used for somatostatin-receptor-positive disease on the strength of retrospective series and phase 2 trials. Sunitinib is the one systemic drug with randomised evidence: FIRSTMAPPP (Lancet 2024), an academic phase 2 trial that took twelve years to enrol 78 patients, showed 12-month progression-free survival of 36 percent against 19 percent on placebo. Cyclophosphamide, vincristine and dacarbazine (CVD) chemotherapy, in use since 1988, and temozolomide, which is active particularly in SDHB-mutant tumours, are the cytotoxic options, and cabozantinib showed activity in the phase 2 NATALIE trial. Belzutifan, the HIF-2 alpha inhibitor, was approved in the United States in May 2025 for adults and children over 12 with locally advanced, unresectable or metastatic disease after a response rate of 26 percent in the LITESPARK-015 cohort, the first approval for the disease in seven years and the first to exploit the pseudohypoxia biology of cluster 1 tumours; the imipridone ONC206 and radioligand combinations are in trials. Bone metastases, the commonest site, are treated with denosumab or bisphosphonates and palliative radiotherapy.",
    "subtypes": [
      "Indolent metastatic pheochromocytoma or paraganglioma (bone-predominant, observation or local therapy)",
      "Progressive somatostatin-receptor-positive metastatic paraganglioma (lutetium-177 dotatate)",
      "MIBG-avid metastatic pheochromocytoma (131I-MIBG where available)",
      "SDHB-related metastatic paraganglioma (temozolomide-sensitive, belzutifan candidate)",
      "Rapidly progressive metastatic pheochromocytoma or paraganglioma (CVD chemotherapy)",
      "Metastatic pheochromocytoma or paraganglioma with uncontrolled catecholamine excess"
    ],
    "biomarkers": [
      "Plasma or urinary metanephrines and 3-methoxytyramine (secretory profile, monitoring)",
      "Germline and somatic SDHB, VHL and other cluster status (prognosis, belzutifan and temozolomide sensitivity)",
      "68Ga-DOTATATE PET uptake (lutetium-177 dotatate eligibility)",
      "123I-MIBG uptake (131I-MIBG eligibility)",
      "Rate of progression on serial imaging (decides when to treat)",
      "Bone scan or FDG-PET for skeletal disease"
    ],
    "standardOfCare": [
      {
        "setting": "All patients",
        "approach": "Alpha-blockade with beta-blockade added second; metyrosine for refractory symptoms; blockade before every procedure; bone-protective agents for skeletal metastases.",
        "guideline": {
          "version": "Endocrine Society clinical practice guideline 2014; NCCN Neuroendocrine and Adrenal Tumors",
          "url": "https://doi.org/10.1210/jc.2014-1498"
        }
      },
      {
        "setting": "Staging",
        "approach": "68Ga-DOTATATE PET, 123I-MIBG scintigraphy where 131I-MIBG is available, CT or MRI, FDG-PET for SDHB-related disease; germline testing.",
        "refs": [
          "sstr-pet",
          "mibg-theranostics",
          "fdg-pet"
        ],
        "guideline": {
          "version": "Endocrine Society clinical practice guideline 2014; NCCN Neuroendocrine and Adrenal Tumors",
          "url": "https://doi.org/10.1210/jc.2014-1498"
        }
      },
      {
        "setting": "Indolent disease",
        "approach": "Active surveillance; resection, radiotherapy, thermal ablation or embolisation of dominant or symptomatic lesions.",
        "guideline": {
          "version": "Endocrine Society clinical practice guideline 2014; NCCN Neuroendocrine and Adrenal Tumors",
          "url": "https://doi.org/10.1210/jc.2014-1498"
        }
      },
      {
        "setting": "Progressive disease, radionuclide therapy",
        "approach": "Lutetium-177 dotatate for somatostatin-receptor-positive disease; 131I-MIBG for MIBG-avid disease where still available (approved 2018, withdrawn from market 2024).",
        "refs": [
          "lutathera",
          "prrt",
          "radioligand-therapy",
          "i131-mibg",
          "mibg-theranostics"
        ],
        "guideline": {
          "version": "Endocrine Society clinical practice guideline 2014; NCCN Neuroendocrine and Adrenal Tumors",
          "url": "https://doi.org/10.1210/jc.2014-1498"
        }
      },
      {
        "setting": "Progressive disease, systemic drugs",
        "approach": "Belzutifan (approved 2025); sunitinib (FIRSTMAPPP); cabozantinib; cyclophosphamide, vincristine and dacarbazine or temozolomide for rapidly progressive or SDHB-related disease.",
        "refs": [
          "sunitinib",
          "cabozantinib",
          "temozolomide"
        ],
        "guideline": {
          "version": "Endocrine Society clinical practice guideline 2014; NCCN Neuroendocrine and Adrenal Tumors",
          "url": "https://doi.org/10.1210/jc.2014-1498"
        }
      },
      {
        "setting": "Trials",
        "approach": "ONC206, radioligand combinations and next-generation HIF-2 alpha inhibitors.",
        "guideline": {
          "version": "Endocrine Society clinical practice guideline 2014; NCCN Neuroendocrine and Adrenal Tumors",
          "url": "https://doi.org/10.1210/jc.2014-1498"
        }
      }
    ],
    "stateOfArt": [
      "Belzutifan is the first approved targeted drug and the first to act on the tumour's own hypoxia biology.",
      "FIRSTMAPPP proved that randomised trials are possible in this ultra-rare disease and validated sunitinib.",
      "Radionuclide therapy gives durable control to patients whose tumours take up the tracer."
    ],
    "history": [
      {
        "year": 1988,
        "title": "Cyclophosphamide, vincristine and dacarbazine chemotherapy reported at the NIH"
      },
      {
        "year": 1991,
        "title": "131I-MIBG therapy in malignant pheochromocytoma reported",
        "refs": [
          "i131-mibg",
          "mibg-theranostics"
        ]
      },
      {
        "year": 2018,
        "title": "High-specific-activity 131I-MIBG (Azedra) approved in the United States",
        "refs": [
          "i131-mibg"
        ]
      },
      {
        "year": 2024,
        "title": "FIRSTMAPPP: sunitinib improves progression-free survival; Azedra withdrawn from the market",
        "refs": [
          "sunitinib",
          "i131-mibg"
        ]
      },
      {
        "year": 2025,
        "title": "Belzutifan approved for advanced pheochromocytoma and paraganglioma"
      }
    ],
    "pipeline": [
      "lutathera",
      "prrt",
      "sunitinib",
      "cabozantinib"
    ],
    "openProblems": [
      "No randomised trial has compared radionuclide therapy with drugs or defined their order.",
      "Azedra's withdrawal leaves MIBG-avid, somatostatin-receptor-negative patients without a radionuclide option in many countries.",
      "Catecholamine crises during treatment remain dangerous.",
      "The disease is too rare and too slow for conventional trial designs."
    ],
    "keyPapers": [
      "paper-pryma-high-specific-activity-i131-mibg-ppgl-jnm-2019"
    ],
    "drugs": [
      "sunitinib",
      "cabozantinib",
      "lutathera",
      "i131-mibg",
      "temozolomide"
    ],
    "technologies": [
      "radioligand-therapy",
      "prrt",
      "mibg-theranostics",
      "sstr-pet",
      "fdg-pet"
    ],
    "terms": [
      "sdh-deficiency"
    ],
    "targets": [
      "sstr2"
    ],
    "links": [
      {
        "label": "FIRSTMAPPP (Lancet 2024)",
        "url": "https://doi.org/10.1016/S0140-6736(23)02554-0"
      },
      {
        "label": "Endocrine Society PPGL guideline 2014",
        "url": "https://doi.org/10.1210/jc.2014-1498"
      },
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Pheochromocytoma"
      }
    ]
  },
  {
    "kind": "indication",
    "asOf": "2026-09-10",
    "id": "multiple-endocrine-neoplasia",
    "name": "Multiple endocrine neoplasia syndromes (MEN1, MEN2, MEN4)",
    "group": "endocrine",
    "wikipedia": "https://en.wikipedia.org/wiki/Multiple_endocrine_neoplasia",
    "aka": [
      "MEN1",
      "MEN2A",
      "MEN2B",
      "MEN4",
      "Wermer syndrome",
      "Sipple syndrome"
    ],
    "burden": "MEN1 affects about 2 to 3 per 100,000 people and MEN2 about 1 in 30,000; both are inherited in an autosomal dominant pattern with near-complete penetrance.",
    "tldr": "The MEN syndromes are inherited faults in a single gene that cause tumours in several hormone glands over a lifetime. Because the gene can be found in childhood, at-risk relatives can be tested, watched and in MEN2 have the thyroid removed before cancer develops; and for MEN2 thyroid cancer that does spread there is now a precise pill, selpercatinib, that blocks the faulty RET protein.",
    "summary": "MEN1 is caused by germline loss-of-function mutations in MEN1, encoding the tumour suppressor menin, and produces parathyroid hyperplasia (nearly universal), duodenopancreatic neuroendocrine tumours (gastrinoma, insulinoma, non-functioning PanNETs, the main cause of death), anterior pituitary tumours, and adrenal, thymic and bronchial neuroendocrine tumours. MEN2 is caused by germline activating mutations in the RET receptor tyrosine kinase: MEN2A (codon 634 most often) causes medullary thyroid carcinoma (MTC), pheochromocytoma and parathyroid disease; MEN2B (M918T) causes early aggressive MTC, pheochromocytoma, mucosal neuromas and a marfanoid habitus. MEN4 (CDKN1B) is a rare MEN1 phenocopy. These syndromes are on the NCI list because their management is oncological: surveillance, prophylactic surgery and, when tumours spread, targeted therapy.\n\nManagement is genotype-driven. In MEN2, the American Thyroid Association (2015) assigns RET codons to risk levels that set the age of prophylactic thyroidectomy (within the first year for M918T, before age 5 for codon 634, later with calcitonin monitoring for moderate-risk codons), an intervention that prevents MTC in carriers identified early. Pheochromocytoma must be excluded before any surgery. Advanced RET-mutant MTC is treated with selpercatinib, which outperformed cabozantinib or vandetanib in the randomised LIBRETTO-531 trial (NEJM 2023), with pralsetinib as an alternative. In MEN1, surveillance (calcium and PTH, gastrin and fasting gut hormones, pituitary hormones, pancreatic MRI or endoscopic ultrasound) begins in childhood; parathyroidectomy, proton pump inhibitors for gastrinoma, and surgery for PanNETs above about 2 cm or functioning; advanced PanNETs are treated as sporadic NETs with somatostatin analogues, everolimus, sunitinib and 177Lu-DOTATATE.\n\nOpen problems are the timing of pancreatic surgery in MEN1, the lack of menin-directed therapy for MEN1 tumours (menin inhibitors developed for leukaemia work by a different mechanism), and equitable access to genetic testing and lifelong surveillance.",
    "subtypes": [
      "MEN1 (menin; parathyroid, pancreatic NET, pituitary)",
      "MEN2A (RET; medullary thyroid carcinoma, pheochromocytoma, parathyroid)",
      "MEN2B (RET M918T; early MTC, pheochromocytoma, mucosal neuromas)",
      "Familial medullary thyroid carcinoma (MEN2A variant)",
      "MEN4 (CDKN1B)"
    ],
    "biomarkers": [
      "Germline MEN1, RET or CDKN1B mutation (diagnostic; codon defines MEN2 risk level)",
      "Calcitonin and CEA (MTC surveillance)",
      "Calcium and PTH, gastrin, fasting glucose and insulin, prolactin and IGF-1 (MEN1 surveillance)",
      "Plasma metanephrines before any surgery (pheochromocytoma exclusion)",
      "Pancreatic imaging (MRI, endoscopic ultrasound, 68Ga-DOTATATE PET)"
    ],
    "standardOfCare": [
      {
        "setting": "MEN2 carriers (RET-positive)",
        "approach": "Prophylactic total thyroidectomy timed by ATA risk level (highest risk within the first year, high risk before age 5, moderate risk guided by calcitonin); annual screening for pheochromocytoma and hyperparathyroidism.",
        "refs": [
          "thyroid",
          "pheochromocytoma-paraganglioma"
        ],
        "guideline": {
          "version": "American Thyroid Association medullary thyroid carcinoma guideline 2015",
          "url": "https://doi.org/10.1089/thy.2014.0335"
        }
      },
      {
        "setting": "Advanced RET-mutant medullary thyroid carcinoma",
        "approach": "Selpercatinib (LIBRETTO-531: superior to cabozantinib or vandetanib); pralsetinib, cabozantinib or vandetanib as alternatives.",
        "refs": [
          "cabozantinib"
        ],
        "guideline": {
          "nccn": "Category 1 (selpercatinib)",
          "version": "NCCN Thyroid Carcinoma",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1470"
        }
      },
      {
        "setting": "MEN1 carriers",
        "approach": "Surveillance from childhood; subtotal or total parathyroidectomy with autotransplantation for hyperparathyroidism; proton pump inhibitors for gastrinoma; resection of functioning or larger PanNETs; sporadic NET pathways (somatostatin analogues, everolimus, sunitinib, PRRT) for advanced disease.",
        "refs": [
          "everolimus",
          "sunitinib",
          "lutathera",
          "prrt",
          "neuroendocrine"
        ],
        "guideline": {
          "version": "MEN1 clinical practice guidelines (Thakker, JCEM 2012)",
          "url": "https://doi.org/10.1210/jc.2012-1230"
        }
      }
    ],
    "stateOfArt": [
      "MEN2 is the clearest example of genotype-directed prevention in oncology: a RET codon result sets the age of an operation that prevents a lethal cancer.",
      "Selpercatinib converted RET-mutant MTC from multikinase-inhibitor territory into precision oncology, with better responses and fewer toxicities in a randomised comparison.",
      "MEN1 surveillance protocols detect pancreatic NETs early, and 68Ga-DOTATATE PET and endoscopic ultrasound have replaced CT for pancreatic screening in many centres.",
      "Cascade genetic testing of relatives, often in childhood, is standard and effective."
    ],
    "history": [
      {
        "year": 1954,
        "title": "Wermer describes familial adenomatosis of endocrine glands (MEN1)"
      },
      {
        "year": 1961,
        "title": "Sipple describes the association of pheochromocytoma and thyroid carcinoma (MEN2)"
      },
      {
        "year": 1993,
        "title": "RET mutations cause MEN2A",
        "note": "Mulligan and colleagues, Nature; Donis-Keller and colleagues."
      },
      {
        "year": 1997,
        "title": "MEN1 gene cloned",
        "note": "Chandrasekharappa and colleagues, Science; menin identified."
      },
      {
        "year": 2015,
        "title": "ATA guideline: codon-based timing of prophylactic thyroidectomy",
        "refs": [
          "thyroid"
        ]
      },
      {
        "year": 2020,
        "title": "Selpercatinib and pralsetinib approved for RET-mutant MTC"
      },
      {
        "year": 2023,
        "title": "LIBRETTO-531: selpercatinib beats multikinase inhibitors in RET-mutant MTC",
        "note": "Hadoux and colleagues, NEJM."
      }
    ],
    "pipeline": [
      "lutathera",
      "everolimus"
    ],
    "openProblems": [
      "MEN1 has no menin-restoring or pathway-directed therapy; PanNET progression remains the main cause of death, addressed by earlier detection and NET therapies.",
      "Timing and extent of pancreatic surgery in MEN1: prospective registries are comparing strategies.",
      "Resistance to selpercatinib (RET solvent-front mutations): next-generation RET inhibitors are in trials.",
      "Lifelong surveillance costs and psychological burden in carriers identified as children."
    ],
    "targets": [
      "sstr2"
    ],
    "technologies": [
      "prrt",
      "sstr-pet"
    ],
    "drugs": [
      "cabozantinib",
      "everolimus",
      "sunitinib",
      "lutathera"
    ],
    "companies": [
      "eli-lilly"
    ],
    "related": [
      "neuroendocrine",
      "thyroid",
      "pheochromocytoma-paraganglioma"
    ],
    "links": [
      {
        "label": "NCI PDQ: multiple endocrine neoplasia syndromes",
        "url": "https://www.cancer.gov/types/multiple-endocrine-neoplasia"
      },
      {
        "label": "ATA medullary thyroid carcinoma guideline (2015)",
        "url": "https://doi.org/10.1089/thy.2014.0335"
      },
      {
        "label": "MEN1 clinical practice guidelines (JCEM 2012)",
        "url": "https://doi.org/10.1210/jc.2012-1230"
      },
      {
        "label": "LIBRETTO-531 (NEJM 2023)",
        "url": "https://doi.org/10.1056/NEJMoa2309719"
      }
    ],
    "tags": [
      "nci-coverage",
      "rare",
      "endocrine",
      "hereditary"
    ]
  },
  {
    "kind": "indication",
    "asOf": "2026-09-07",
    "id": "neuroblastoma",
    "name": "Neuroblastoma (paediatric)",
    "group": "paediatric",
    "wikipedia": "https://en.wikipedia.org/wiki/Neuroblastoma",
    "burden": "~7-8% of childhood cancers; ~800 US cases a year; median age at diagnosis ~18 months; 5-year survival >90% for low/intermediate risk and ~50-60% for high risk.",
    "tldr": "Neuroblastoma is a childhood nerve-cell cancer where anti-GD2 antibodies and, recently, GD2 CAR-T have improved survival in high-risk disease.",
    "summary": "Neuroblastoma arises from developing sympathetic nerve cells, usually in the adrenal gland or along the spine, and is the most common cancer of infants and the most common extracranial solid tumour of childhood. It spans the widest clinical range in oncology: some infant tumours (stage MS) regress without treatment, while high-risk disease (about half of patients, defined by INRG stage, age over 18 months, MYCN amplification and other genomic features) is cured in only 50-60% despite the most intensive therapy given to children, which is where anti-GD2 antibodies and CAR-T have made their gains. ALK mutations (~10%) are the main druggable driver; MYCN, though not directly druggable, points to polyamine and ALK biology.\n\nHigh-risk therapy is a year-long sequence: five to six cycles of induction chemotherapy, surgery, myeloablative chemotherapy with autologous stem-cell rescue (tandem transplant in North America after ANBL0532; busulfan-melphalan single transplant in Europe after HR-NBL1), radiotherapy to the primary site, then anti-GD2 immunotherapy (dinutuximab or dinutuximab beta with GM-CSF; IL-2 abandoned after HR-NBL1) and isotretinoin. Anti-GD2 antibody raised survival by about 20 points (ANBL0032). Since December 2023, two years of oral eflornithine (DFMO) is approved as maintenance on the strength of an externally controlled study; naxitamab and irinotecan-temozolomide-dinutuximab treat relapse; lorlatinib is being added for ALK-aberrant tumours and 131I-MIBG tested in induction (ANBL1531).\n\nNeuroblastoma is also where CAR-T first produced lasting cures in a solid tumour: GD2-CART01 (Bambino Gesù, NEJM 2023) achieved 63% responses and 33% complete remissions in relapsed disease, with some remissions lasting more than a decade. The open questions are whether cell therapy can consolidate first-line remission, how to reduce the lifelong burden of hearing loss, infertility and second cancers in survivors, how to treat MYCN-amplified relapse, and how to bring anti-GD2 therapy to the majority of children in the world who cannot access it.",
    "biomarkers": [
      "MYCN amplification",
      "ALK mutation",
      "Age, stage, ploidy",
      "Segmental chromosome aberrations",
      "INRG stage and image-defined risk factors",
      "Age (<18 months)",
      "MYCN amplification (FISH)",
      "ALK mutation/amplification",
      "11q aberration, 1p deletion, ploidy, segmental chromosomal aberrations",
      "INPC histology",
      "Urinary catecholamines (VMA/HVA)",
      "123I-MIBG Curie score / 18F-MFBG PET",
      "Bone marrow minimal residual disease (PHOX2B, TH qPCR)",
      "GD2 expression (near-universal)"
    ],
    "standardOfCare": [
      {
        "setting": "High-risk",
        "approach": "Induction chemo → surgery → tandem transplant → RT → anti-GD2 + isotretinoin; lorlatinib if ALK-mutant.",
        "guideline": {
          "version": "NCI PDQ: Neuroblastoma Treatment (COG risk groups)",
          "url": "https://www.cancer.gov/types/neuroblastoma/hp/neuroblastoma-treatment-pdq"
        }
      },
      {
        "setting": "Very-low / low risk (L1, MS)",
        "approach": "Observation with serial imaging for asymptomatic L1/MS (many regress); surgery alone for resectable L1; short chemotherapy only for symptoms or progression.",
        "guideline": {
          "nccn": "COG/SIOPEN low-risk protocols (observation or surgery)",
          "version": "COG ANBL1232 / SIOPEN LINES"
        }
      },
      {
        "setting": "Intermediate risk",
        "approach": "2-8 cycles of moderate chemotherapy (carboplatin, etoposide, cyclophosphamide, doxorubicin) guided by response and biology; surgery; isotretinoin in some protocols."
      },
      {
        "setting": "High risk: induction",
        "approach": "5-6 cycles (COG: topotecan-cyclophosphamide × 2 then cisplatin-etoposide, cyclophosphamide-doxorubicin-vincristine; SIOPEN: rapid COJEC); stem-cell harvest; ANBL1531 adds 131I-MIBG (randomised) or lorlatinib (ALK); ANBL17P1 adds dinutuximab to induction.",
        "refs": [
          "anbl1531",
          "i131-mibg"
        ],
        "guideline": {
          "nccn": "COG ANBL1531 backbone",
          "version": "COG 2026"
        }
      },
      {
        "setting": "High risk: local control",
        "approach": "Surgical resection of primary after induction (gross total where safe); external-beam radiotherapy 21.6 Gy to primary site (boost to residual) and MIBG-avid metastatic sites; proton therapy where available."
      },
      {
        "setting": "High risk: consolidation",
        "approach": "Tandem autologous transplant (thiotepa-cyclophosphamide, then CEM) in North America (ANBL0532); single busulfan-melphalan transplant in Europe (HR-NBL1).",
        "guideline": {
          "nccn": "COG standard (tandem); SIOPEN standard (BuMel)",
          "version": "2026"
        }
      },
      {
        "setting": "High risk: post-consolidation",
        "approach": "Anti-GD2 antibody (dinutuximab + GM-CSF + isotretinoin; dinutuximab beta in Europe, no IL-2) × 5-6 cycles; then eflornithine maintenance 2 years (US, 2023).",
        "guideline": {
          "nccn": "Dinutuximab: FDA-approved standard; eflornithine: FDA-approved maintenance",
          "version": "2026"
        }
      },
      {
        "setting": "Relapsed / refractory",
        "approach": "Irinotecan-temozolomide + dinutuximab or naxitamab (ANBL1221); naxitamab + GM-CSF for marrow/bone disease; 131I-MIBG for MIBG-avid disease; lorlatinib for ALK; GD2 CAR-T (Italy, trials); DFMO-based maintenance; palliative radiotherapy.",
        "refs": [
          "i131-mibg"
        ]
      },
      {
        "setting": "Survivorship",
        "approach": "Audiology (platinum, DFMO), endocrine and fertility follow-up, cardiac surveillance (anthracycline), second-malignancy screening, neurocognitive support; lifelong late-effects clinic."
      }
    ],
    "stateOfArt": [
      "Anti-GD2 raised high-risk survival to ~60%.",
      "GD2 CAR-T responses.",
      "Anti-GD2 immunotherapy after transplant is standard worldwide (ANBL0032), with IL-2 removed after HR-NBL1 showed no benefit.",
      "Tandem transplant (North America) and busulfan-melphalan (Europe) are the two evidence-based consolidation standards.",
      "Eflornithine is the first oral maintenance therapy approved (December 2023), on an externally controlled study.",
      "GD2 CAR-T produced durable complete remissions in relapsed neuroblastoma, the first such result in a childhood solid tumour.",
      "ALK inhibition with lorlatinib for ALK-aberrant tumours and 131I-MIBG during induction are being tested in ANBL1531.",
      "Risk-adapted de-escalation: many infants and low-risk patients are observed or cured with surgery alone."
    ],
    "history": [
      {
        "year": 1910,
        "title": "James Homer Wright describes neuroblastoma and its rosettes"
      },
      {
        "year": 1971,
        "title": "Spontaneous regression of stage IV-S (now MS) disease recognised (Evans staging)"
      },
      {
        "year": 1983,
        "title": "MYCN amplification linked to aggressive disease (Brodeur, Schwab)"
      },
      {
        "year": 1985,
        "title": "131I-MIBG therapy first used in relapsed neuroblastoma",
        "refs": [
          "mibg-theranostics"
        ]
      },
      {
        "year": 1999,
        "title": "CCG-3891: myeloablative therapy with autologous rescue and isotretinoin improve survival"
      },
      {
        "year": 2008,
        "title": "ALK mutations identified as a hereditary and somatic driver"
      },
      {
        "year": 2009,
        "title": "INRG classification unifies international risk grouping"
      },
      {
        "year": 2010,
        "title": "Anti-GD2 (ch14.18) improves EFS"
      },
      {
        "year": 2010,
        "title": "ANBL0032: anti-GD2 immunotherapy raises survival ~20 points (NEJM)"
      },
      {
        "year": 2015,
        "title": "Dinutuximab approved (US); dinutuximab beta in EU 2017"
      },
      {
        "year": 2017,
        "title": "HR-NBL1: busulfan-melphalan beats CEM; IL-2 adds no benefit (2018)"
      },
      {
        "year": 2019,
        "title": "ANBL0532: tandem transplant improves EFS (JAMA)"
      },
      {
        "year": 2020,
        "title": "Naxitamab approved for relapsed disease (accelerated)"
      },
      {
        "year": 2023,
        "title": "GD2 CAR-T phase 1/2 in NEJM"
      },
      {
        "year": 2023,
        "title": "GD2-CART01 in NEJM: durable CAR-T remissions in a solid tumour; eflornithine approved (13 Dec)"
      },
      {
        "year": 2025,
        "title": "Long-term GD2 CAR-T follow-up (Nature Medicine); naxitamab primary-refractory phase 2 (75% CR); eflornithine EU filing"
      },
      {
        "year": 2026,
        "title": "ANBL1531 MIBG randomisation maturing; ALK arm reports",
        "refs": [
          "anbl1531"
        ]
      }
    ],
    "pipeline": [
      "anbl1531",
      "i131-mibg",
      "idea-mfbg-pet-replaces-mibg",
      "mibg-theranostics",
      "y-mabs"
    ],
    "openProblems": [
      "Relapsed high-risk disease.",
      "Long-term toxicity of intensive therapy.",
      "Relapsed high-risk neuroblastoma is rarely curable; MYCN-amplified relapse worst of all.",
      "Anti-GD2 therapy causes severe neuropathic pain; less painful antibody formats (e.g., humanised, Fc-engineered) and CAR-T are needed.",
      "Long-term toxicity of tandem transplant, cisplatin (hearing loss), and radiation in children who will live 70 years.",
      "Eflornithine's approval rests on an external control; a randomised trial is unlikely, so uncertainty persists.",
      "Access: anti-GD2 antibodies are expensive and unavailable in most low- and middle-income countries where most children with cancer live.",
      "MYCN remains undruggable directly; polyamine and Aurora/BET strategies are indirect.",
      "GD2 CAR-T needs randomised evidence and manufacturing at scale; only a few centres can deliver it.",
      "Imaging burden: repeated MIBG scans with sedation; MFBG PET adoption is slow."
    ],
    "technologies": [
      "radioligand-therapy",
      "mibg-theranostics"
    ],
    "tags": [
      "paediatric",
      "spike"
    ],
    "trials": [
      "nct04724369"
    ],
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Neuroblastoma"
      }
    ],
    "subtypes": [
      "Very-low and low risk (L1, MS in infants; often observation or surgery alone)",
      "Intermediate risk (L2, M in infants; moderate chemotherapy)",
      "High risk (stage M >18 months, or MYCN-amplified at any age)",
      "ALK-mutated or amplified (~10%; lorlatinib-responsive)",
      "MYCN-amplified (~20%)",
      "Relapsed/refractory (MIBG-avid vs non-avid; marrow vs soft-tissue)",
      "Ganglioneuroblastoma / ganglioneuroma (differentiated spectrum)",
      "Opsoclonus-myoclonus-associated (paraneoplastic)"
    ],
    "companies": [
      "y-mabs"
    ],
    "institutions": [
      "mskcc",
      "dana-farber"
    ]
  },
  {
    "id": "neuroblastoma-high-risk",
    "kind": "indication",
    "name": "High-risk neuroblastoma",
    "group": "paediatric",
    "parent": "neuroblastoma",
    "asOf": "2026-09-17",
    "tags": [
      "subtype-page",
      "paediatric"
    ],
    "wikipedia": "https://en.wikipedia.org/wiki/Neuroblastoma",
    "aka": [
      "INRG high-risk neuroblastoma",
      "Metastatic neuroblastoma",
      "MYCN-amplified neuroblastoma",
      "Stage 4 neuroblastoma"
    ],
    "burden": "About half of children with neuroblastoma have high-risk disease, metastatic at over 18 months of age or MYCN-amplified at any age; it accounts for around one in eight childhood cancer deaths, and only about half of children are cured despite the most intensive treatment given to any child.",
    "tldr": "High-risk neuroblastoma has spread widely in a child over 18 months old or carries extra copies of the MYCN gene. Treatment lasts about 18 months and uses every tool: chemotherapy, surgery, high-dose chemotherapy with stem cell rescue, radiotherapy, and the anti-GD2 antibody dinutuximab, which raised survival in ANBL0032; eflornithine, given afterwards, was approved in 2023 to lower relapse.",
    "summary": "High-risk disease is stage M neuroblastoma in a child over 18 months, MYCN-amplified disease at any age and stage, and a few L2 and infant M cases with unfavourable genetics. Treatment runs in blocks. Induction with five or six cycles (cyclophosphamide and topotecan, cisplatin and etoposide, cyclophosphamide with doxorubicin and vincristine in the COG regimen; rapid COJEC in Europe) brings most children to a partial response and clears the marrow; surgery removes the primary; consolidation with myeloablative chemotherapy and autologous stem cell rescue follows; radiotherapy to the primary site and residual metastases; then post-consolidation immunotherapy with an anti-GD2 antibody and isotretinoin for six months. CCG-3891, reported in 1999, established both myeloablative therapy with autologous marrow rescue and 13-cis-retinoic acid maintenance: three-year event-free survival 34 percent against 22 percent with transplant, and 46 percent against 29 percent with retinoic acid.\n\nANBL0032 randomised 226 children after transplant to isotretinoin alone or with the chimeric anti-GD2 antibody ch14.18 (dinutuximab), GM-CSF and interleukin-2: two-year event-free survival 66 percent against 46 percent and overall survival 86 percent against 75 percent, and dinutuximab was approved in March 2015. SIOPEN HR-NBL1 showed that busulfan and melphalan beat carboplatin, etoposide and melphalan as the myeloablative regimen, three-year event-free survival 50 percent against 38 percent, and that adding interleukin-2 to dinutuximab beta brought toxicity without benefit. COG ANBL0532 showed tandem transplant with thiotepa-cyclophosphamide then carboplatin-etoposide-melphalan beat a single transplant, three-year event-free survival 61.6 percent against 48.4 percent. Eflornithine (DFMO), an ornithine decarboxylase inhibitor that lowers MYCN-driven polyamine synthesis, was approved in December 2023 as two years of maintenance after immunotherapy on the basis of the NMTRC003 and 003B single-arm studies compared with matched ANBL0032 controls, the first approval in neuroblastoma on an external control. Naxitamab, a humanised anti-GD2 antibody given with GM-CSF, was granted accelerated approval in November 2020 for relapsed or refractory disease in bone or marrow.\n\nAbout half of children still relapse, and relapsed high-risk disease is rarely cured. Irinotecan and temozolomide with dinutuximab (ANBL1221) is the standard relapse chemo-immunotherapy; iodine-131 MIBG delivers targeted radiation to the roughly 90 percent of tumours that take up the tracer and is being tested in induction in ANBL1531, which also gives lorlatinib to the roughly one in ten children whose tumours carry an ALK mutation after the NANT phase 1 showed responses in relapsed ALK-mutant disease. GD2 CAR T-cells produced remissions in relapsed children in the Bambino Gesù phase 1/2 trial reported in 2023, anti-GD2 antibody is being moved into induction alongside chemotherapy, and fluorine-18 MFBG PET may replace MIBG scans. The survivors carry the heaviest late-effect burden in childhood oncology: cisplatin hearing loss in most, infertility, growth failure, cardiac and renal damage, and second cancers.",
    "subtypes": [
      "Stage M neuroblastoma over 18 months without MYCN amplification",
      "MYCN-amplified neuroblastoma at any age or stage (about a fifth of all neuroblastoma)",
      "ALK-mutated or ALK-amplified high-risk neuroblastoma (lorlatinib added in ANBL1531)",
      "Ultra-high-risk neuroblastoma (poor end-of-induction response, or MYCN amplification with ALK or TERT alterations)",
      "Relapsed or refractory high-risk neuroblastoma (MIBG-avid and MIBG-non-avid; bone and marrow versus soft tissue)",
      "Adolescent and adult neuroblastoma (indolent, chemotherapy-resistant; ALK and ATRX alterations)"
    ],
    "biomarkers": [
      "MYCN amplification",
      "ALK mutation or amplification",
      "11q loss, 1p loss and 17q gain",
      "TERT rearrangement and ATRX loss (telomere maintenance)",
      "MIBG avidity and Curie or SIOPEN score",
      "End-of-induction response (INRC)",
      "Marrow minimal residual disease by GD2 synthase or PHOX2B PCR",
      "Urinary catecholamine metabolites"
    ],
    "standardOfCare": [
      {
        "setting": "Induction",
        "approach": "Five or six cycles of cyclophosphamide-topotecan, cisplatin-etoposide and cyclophosphamide-doxorubicin-vincristine (COG) or rapid COJEC (SIOPEN); iodine-131 MIBG and, for ALK-mutant disease, lorlatinib within ANBL1531; surgery after induction.",
        "refs": [
          "anbl1531",
          "i131-mibg",
          "mibg-theranostics"
        ],
        "guideline": {
          "version": "NCI PDQ: Neuroblastoma Treatment (health professional version)",
          "url": "https://www.cancer.gov/types/neuroblastoma/hp/neuroblastoma-treatment-pdq"
        }
      },
      {
        "setting": "Consolidation",
        "approach": "Busulfan-melphalan (HR-NBL1) or tandem thiotepa-cyclophosphamide then carboplatin-etoposide-melphalan (ANBL0532) with autologous stem cell rescue.",
        "guideline": {
          "version": "NCI PDQ: Neuroblastoma Treatment (health professional version)",
          "url": "https://www.cancer.gov/types/neuroblastoma/hp/neuroblastoma-treatment-pdq"
        }
      },
      {
        "setting": "Local control",
        "approach": "Radiotherapy to the primary site bed and residual MIBG-avid metastases after transplant.",
        "guideline": {
          "version": "NCI PDQ: Neuroblastoma Treatment (health professional version)",
          "url": "https://www.cancer.gov/types/neuroblastoma/hp/neuroblastoma-treatment-pdq"
        }
      },
      {
        "setting": "Post-consolidation",
        "approach": "Dinutuximab with GM-CSF and isotretinoin for five cycles (ANBL0032; interleukin-2 dropped after HR-NBL1), then two years of eflornithine maintenance.",
        "guideline": {
          "version": "NCI PDQ: Neuroblastoma Treatment (health professional version)",
          "url": "https://www.cancer.gov/types/neuroblastoma/hp/neuroblastoma-treatment-pdq"
        }
      },
      {
        "setting": "Relapsed or refractory",
        "approach": "Irinotecan-temozolomide with dinutuximab (ANBL1221) or naxitamab with GM-CSF; iodine-131 MIBG for avid disease; lorlatinib for ALK-mutant disease; GD2 CAR T-cells in trials.",
        "refs": [
          "temozolomide",
          "i131-mibg"
        ],
        "guideline": {
          "version": "NCI PDQ: Neuroblastoma Treatment (health professional version)",
          "url": "https://www.cancer.gov/types/neuroblastoma/hp/neuroblastoma-treatment-pdq"
        }
      },
      {
        "setting": "Survivorship",
        "approach": "Hearing, cardiac, renal, endocrine, fertility and second-cancer follow-up for life.",
        "guideline": {
          "version": "NCI PDQ: Neuroblastoma Treatment (health professional version)",
          "url": "https://www.cancer.gov/types/neuroblastoma/hp/neuroblastoma-treatment-pdq"
        }
      }
    ],
    "stateOfArt": [
      "Anti-GD2 immunotherapy after transplant raised two-year event-free survival from 46 to 66 percent in ANBL0032 and is standard worldwide.",
      "Tandem transplant (ANBL0532) and busulfan-melphalan (HR-NBL1) each beat the older single-transplant regimens.",
      "Eflornithine maintenance, approved in 2023 on an external-control comparison, and lorlatinib for ALK-mutant disease are the newest additions; GD2 CAR T-cells have produced remissions in relapse."
    ],
    "history": [
      {
        "year": 1985,
        "title": "Iodine-131 MIBG therapy first given for neuroblastoma",
        "refs": [
          "i131-mibg",
          "mibg-theranostics"
        ]
      },
      {
        "year": 1999,
        "title": "CCG-3891: myeloablative therapy with autologous rescue and 13-cis-retinoic acid each improve event-free survival"
      },
      {
        "year": 2010,
        "title": "ANBL0032: anti-GD2 antibody with GM-CSF and interleukin-2 raises two-year event-free survival from 46 to 66 percent"
      },
      {
        "year": 2015,
        "title": "Dinutuximab approved for high-risk neuroblastoma"
      },
      {
        "year": 2017,
        "title": "HR-NBL1: busulfan-melphalan beats carboplatin-etoposide-melphalan"
      },
      {
        "year": 2019,
        "title": "ANBL0532: tandem transplant beats single transplant"
      },
      {
        "year": 2020,
        "title": "Naxitamab granted accelerated approval for relapsed or refractory bone or marrow disease"
      },
      {
        "year": 2023,
        "title": "Eflornithine approved as maintenance on an external-control comparison; GD2 CAR T-cells produce remissions in relapsed disease"
      }
    ],
    "pipeline": [
      "anbl1531",
      "i131-mibg",
      "idea-mfbg-pet-replaces-mibg",
      "mibg-theranostics"
    ],
    "openProblems": [
      "About half of children relapse and relapsed disease is rarely cured.",
      "MYCN has no direct inhibitor; eflornithine and lorlatinib act around it.",
      "Cisplatin hearing loss, infertility and second cancers in survivors of the most intensive regimen in paediatric oncology."
    ],
    "terms": [
      "curie-siopen-score"
    ],
    "technologies": [
      "mibg-theranostics"
    ],
    "companies": [
      "y-mabs"
    ],
    "links": [
      {
        "label": "Wikipedia: Neuroblastoma",
        "url": "https://en.wikipedia.org/wiki/Neuroblastoma"
      },
      {
        "label": "NCI PDQ: Neuroblastoma Treatment",
        "url": "https://www.cancer.gov/types/neuroblastoma/hp/neuroblastoma-treatment-pdq"
      }
    ]
  },
  {
    "kind": "indication",
    "asOf": "2026-09-04",
    "id": "neuroendocrine",
    "aka": [
      "Gastrointestinal Neuroendocrine Tumors",
      "Pancreatic Neuroendocrine Tumors (Islet Cell Tumors)"
    ],
    "companies": [
      "sinotau-pharmaceutical",
      "novartis",
      "itm",
      "orano-med",
      "radiomedix",
      "rayzebio",
      "bms",
      "pfizer"
    ],
    "trials": [
      "netter-1",
      "nct05459844",
      "nct06398444",
      "nct04919226"
    ],
    "name": "Neuroendocrine tumours",
    "group": "endocrine",
    "wikipedia": "https://en.wikipedia.org/wiki/Neuroendocrine_tumor",
    "burden": "About 7 per 100,000 people per year in the US, rising six-fold since the 1970s; prevalence is high because many patients live for years (>170,000 living with NETs in the US).",
    "tldr": "A family of usually slow-growing tumours that start in hormone-producing cells of the gut, pancreas and lungs. They pioneered the idea of using the same molecule to see a tumour on a scan and then to treat it with radiation.",
    "summary": "Neuroendocrine neoplasms range from indolent grade 1 tumours that patients live with for decades to poorly differentiated neuroendocrine carcinomas that behave like small-cell lung cancer. Most arise in the small bowel, pancreas, rectum or lung; many secrete hormones (serotonin, insulin, gastrin) that cause syndromes, and most well-differentiated tumours express somatostatin receptor 2 (SSTR2), which is the hinge of both diagnosis and therapy. Incidence has risen six-fold over 40 years, largely from incidental detection on imaging and endoscopy.\n\nTherapy is sequenced by grade, receptor status and tempo. Somatostatin analogues (octreotide, lanreotide) control symptoms and slow growth (PROMID, CLARINET). For progression, peptide receptor radionuclide therapy with 177Lu-DOTATATE (NETTER-1; NETTER-2 first line for grade 2-3) is standard, and 177Lu-edotreotide beat everolimus head-to-head in COMPETE (PFS 23.9 vs 14.1 months) with an FDA decision due August 2026. Targeted pills (everolimus, sunitinib, and since March 2025 cabozantinib after CABINET) and chemotherapy (CAPTEM for pancreatic NETs; platinum-etoposide for neuroendocrine carcinoma) fill in. Surgery and liver-directed therapy (resection, embolisation, ablation, transplant in rare cases) remain central because disease is often liver-dominant.\n\nThe frontier is alpha-emitting PRRT: 212Pb-DOTAMTATE (AlphaMedix) met all primary endpoints in phase 2 with a 54% response rate in PRRT-naive patients and Breakthrough designation, and 225Ac-DOTATATE (RYZ101) is in the phase 3 ACTION-1 trial after lutetium failure. SSTR antagonist ligands, dosimetry-personalised dosing, and combinations with CAPTEM or immunotherapy are being tested. Open problems include the lack of randomised evidence for sequencing, the absence of effective therapy for SSTR-negative and high-grade disease, a 2-3% risk of therapy-related leukaemia after PRRT, and isotope supply.",
    "biomarkers": [
      "Ki-67 grade",
      "SSTR PET uptake",
      "Chromogranin A",
      "MEN1, DAXX/ATRX",
      "Ki-67 index and mitotic count (WHO grade)",
      "SSTR2 expression by 68Ga/64Cu-DOTATATE PET",
      "FDG PET avidity (high-grade or dedifferentiated disease)",
      "Chromogranin A (monitoring)",
      "24-hour urinary 5-HIAA (carcinoid syndrome)",
      "Germline MEN1, VHL, SDHx testing",
      "MGMT status (CAPTEM response, investigational)"
    ],
    "standardOfCare": [
      {
        "setting": "Localised",
        "approach": "Resection.",
        "guideline": {
          "version": "NCCN Guidelines: Neuroendocrine and Adrenal Tumors",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1448"
        }
      },
      {
        "setting": "Advanced",
        "approach": "SSA → 177Lu-DOTATATE → everolimus/cabozantinib/chemotherapy; alpha therapy in trials.",
        "refs": [
          "lutathera",
          "ryz101"
        ],
        "guideline": {
          "version": "NCCN Guidelines: Neuroendocrine and Adrenal Tumors",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1448"
        }
      },
      {
        "setting": "Diagnosis and staging",
        "approach": "Histology with Ki-67 grading; 68Ga/64Cu-DOTATATE PET/CT ± FDG PET; triple-phase CT or MRI of the liver; chromogranin A and syndrome-specific hormones; germline testing for pancreatic NETs and paragangliomas.",
        "refs": [
          "sstr-pet",
          "net-grade-ki67"
        ],
        "guideline": {
          "nccn": "Neuroendocrine and Adrenal Tumors",
          "version": "NCCN 2026 / ENETS 2023"
        }
      },
      {
        "setting": "Localised disease",
        "approach": "Surgical resection (including primary tumour resection with liver metastases where feasible); endoscopic resection for small rectal/gastric NETs; surveillance for small incidental lesions.",
        "guideline": {
          "nccn": "Category 2A"
        }
      },
      {
        "setting": "Advanced, grade 1-2, SSTR-positive, first line",
        "approach": "Somatostatin analogue (octreotide LAR or lanreotide); 177Lu-DOTATATE first line for grade 2-3 (NETTER-2) with high burden.",
        "refs": [
          "lutathera",
          "prrt"
        ],
        "guideline": {
          "nccn": "Category 1 (SSA); category 1 PRRT for grade 2-3 first line"
        }
      },
      {
        "setting": "Advanced, progression on SSA",
        "approach": "PRRT with 177Lu-DOTATATE (or 177Lu-edotreotide if approved); everolimus; sunitinib (pancreatic); cabozantinib (CABINET, all sites).",
        "refs": [
          "lutathera",
          "itm-11",
          "compete",
          "everolimus",
          "radiant-3-4",
          "sunitinib",
          "cabozantinib",
          "cabinet"
        ],
        "guideline": {
          "nccn": "Category 1 for PRRT and cabozantinib; 2A sequencing"
        }
      },
      {
        "setting": "Advanced pancreatic NET needing tumour shrinkage",
        "approach": "CAPTEM (E2211); PRRT; liver-directed therapy for hepatic-dominant disease.",
        "refs": [
          "radioembolisation-tare"
        ],
        "guideline": {
          "nccn": "Category 2A"
        }
      },
      {
        "setting": "Carcinoid syndrome",
        "approach": "SSA dose escalation; telotristat ethyl for refractory diarrhoea; octreotide infusion peri-procedurally; echocardiographic screening for carcinoid heart disease.",
        "guideline": {
          "nccn": "Category 2A"
        }
      },
      {
        "setting": "Neuroendocrine carcinoma (poorly differentiated)",
        "approach": "Platinum-etoposide (as in SCLC) ± PD-L1 inhibitor by extrapolation; FOLFIRINOX or CAPTEM in later lines; DLL3-directed agents in trials.",
        "guideline": {
          "nccn": "Category 2A"
        }
      },
      {
        "setting": "After PRRT failure",
        "approach": "Everolimus or cabozantinib; alpha PRRT in trials (ACTION-1, AlphaMedix); PRRT retreatment in selected patients.",
        "refs": [
          "ryz101",
          "action-1",
          "alphamedix",
          "prrt-then-alpha-net"
        ],
        "guideline": {
          "nccn": "Trials preferred"
        }
      },
      {
        "setting": "VHL-associated pancreatic NET",
        "approach": "Belzutifan (approved 2021) for non-metastatic tumours not requiring immediate surgery.",
        "guideline": {
          "nccn": "Category 2A"
        }
      }
    ],
    "stateOfArt": [
      "Theranostic paradigm; first-line PRRT in higher-grade disease.",
      "Theranostic paradigm is routine: SSTR PET selects, 177Lu-DOTATATE treats, including first line for grade 2-3 disease.",
      "First head-to-head radioligand-versus-drug trial (COMPETE) won on PFS; FDA decision on 177Lu-edotreotide due 28 August 2026.",
      "Cabozantinib approved (2025) across pancreatic and extra-pancreatic NETs after prior therapy, with an 81% reduction in progression risk in lung/thymic NETs.",
      "Alpha PRRT (212Pb-DOTAMTATE) met all phase 2 endpoints with Breakthrough designation; 225Ac-DOTATATE in phase 3.",
      "Germline testing and syndrome-directed care (belzutifan for VHL) are standard for pancreatic NETs."
    ],
    "history": [
      {
        "year": 1907,
        "title": "Oberndorfer coins 'Karzinoid' for small-bowel tumours"
      },
      {
        "year": 1954,
        "title": "Carcinoid syndrome described (Thorson)"
      },
      {
        "year": 1987,
        "title": "Octreotide approved"
      },
      {
        "year": 1988,
        "title": "Octreotide approved for carcinoid syndrome"
      },
      {
        "year": 1994,
        "title": "111In-octreotide scintigraphy (OctreoScan) approved",
        "note": "First SSTR imaging; later replaced by PET.",
        "refs": [
          "sstr-pet"
        ]
      },
      {
        "year": 2000,
        "title": "First 90Y- and 177Lu-DOTATOC/DOTATATE PRRT series (Rotterdam, Basel)",
        "refs": [
          "prrt"
        ]
      },
      {
        "year": 2009,
        "title": "PROMID: octreotide slows tumour growth"
      },
      {
        "year": 2011,
        "title": "Everolimus (RADIANT-3) and sunitinib approved for pancreatic NETs",
        "refs": [
          "radiant-3-4",
          "everolimus",
          "sunitinib"
        ]
      },
      {
        "year": 2014,
        "title": "CLARINET: lanreotide antiproliferative approval"
      },
      {
        "year": 2016,
        "title": "68Ga-DOTATATE PET (Netspot) approved; RADIANT-4 extends everolimus to lung/GI NETs",
        "refs": [
          "sstr-pet",
          "radiant-3-4"
        ]
      },
      {
        "year": 2018,
        "title": "Lutathera approved",
        "refs": [
          "lutathera"
        ]
      },
      {
        "year": 2018,
        "title": "Lutathera approved (NETTER-1): PRRT enters standard care",
        "refs": [
          "lutathera",
          "prrt"
        ]
      },
      {
        "year": 2020,
        "title": "SANET trials positive in China (surufatinib)"
      },
      {
        "year": 2024,
        "title": "NETTER-2: first-line PRRT"
      },
      {
        "year": 2024,
        "title": "NETTER-2: PRRT first line in grade 2-3; CABINET published; AlphaMedix Breakthrough designation",
        "refs": [
          "lutathera",
          "cabinet",
          "alphamedix"
        ]
      },
      {
        "year": 2025,
        "title": "Cabozantinib approved (March); COMPETE positive (ENETS, Lancet); AlphaMedix phase 2 meets all endpoints (October)",
        "refs": [
          "cabozantinib",
          "compete",
          "alphamedix-02"
        ]
      },
      {
        "year": 2026,
        "title": "FDA accepts 177Lu-edotreotide NDA (PDUFA 28 August); ACTION-1 dosimetry published; pancreatic subgroup of COMPETE at ENETS",
        "refs": [
          "itm-11",
          "action-1"
        ]
      }
    ],
    "pipeline": [
      "ryz101",
      "itm-11",
      "compete",
      "alphamedix",
      "alphamedix-02",
      "action-1",
      "prrt",
      "sstr-pet",
      "cabozantinib",
      "idea-net-dosimetry-prrt",
      "idea-net-antagonist-ligands",
      "prrt-then-alpha-net",
      "dll3"
    ],
    "openProblems": [
      "Neuroendocrine carcinoma (high grade) behaves like SCLC.",
      "Sequencing of PRRT vs targeted therapy.",
      "Sequencing is unproven: no randomised trial orders SSA, PRRT, everolimus, cabozantinib and chemotherapy.",
      "SSTR-negative, FDG-avid and high-grade disease has few options; neuroendocrine carcinoma outcomes remain poor.",
      "Therapy-related MDS/AML (~2-3%) and renal toxicity after PRRT; long-term data on retreatment are thin.",
      "Overall survival benefits are hard to demonstrate because patients live for years and cross over.",
      "Isotope supply (177Lu, 212Pb, 225Ac) and nuclear-medicine capacity limit access outside major centres.",
      "Chromogranin A is an unreliable marker; better blood tests (NETest, ctDNA) are not validated for decisions.",
      "Rare syndromic and paediatric NETs lack trials; hereditary carriers need lifelong surveillance protocols."
    ],
    "targets": [
      "sstr2",
      "dll3"
    ],
    "technologies": [
      "radioligand-therapy",
      "targeted-alpha-therapy",
      "pet",
      "sstr-pet",
      "prrt",
      "pet-ct",
      "radioembolisation-tare"
    ],
    "tags": [
      "endocrine",
      "spike"
    ],
    "drugs": [
      "iobenguane-i-131"
    ],
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Neuroendocrine_tumor"
      }
    ],
    "subtypes": [
      "Small-bowel (midgut) NET, often with carcinoid syndrome",
      "Pancreatic NET (functioning: insulinoma, gastrinoma, glucagonoma; non-functioning)",
      "Lung NET (typical and atypical carcinoid)",
      "Rectal and appendiceal NET (often incidental, excellent prognosis)",
      "Grade 3 well-differentiated NET",
      "Neuroendocrine carcinoma (small- and large-cell), treated like SCLC",
      "Hereditary: MEN1, VHL, NF1, TSC; paraganglioma/phaeochromocytoma (SDHx)"
    ],
    "terms": [
      "net-grade-ki67",
      "theranostics",
      "alpha-vs-beta",
      "dosimetry"
    ],
    "institutions": [
      "mskcc",
      "heidelberg-nct",
      "royal-marsden"
    ],
    "related": [
      "sstr-pet-to-prrt",
      "prrt-then-alpha-net",
      "radiopharma-roadmap",
      "beta-then-alpha"
    ]
  },
  {
    "kind": "indication",
    "asOf": "2026-09-08",
    "id": "osteosarcoma",
    "name": "Osteosarcoma",
    "group": "paediatric",
    "wikipedia": "https://en.wikipedia.org/wiki/Osteosarcoma",
    "burden": "The most common primary bone cancer; ~1,000 cases per year in the US with peaks in adolescence and over 60 (Paget disease, radiation); 5-year survival ~70% localised, ~25% metastatic.",
    "tldr": "Osteosarcoma is the most common bone cancer, mostly in teenagers. Chemotherapy plus surgery cures about two-thirds when it has not spread; because no new drug has beaten that chemotherapy in a large trial in 30 years, the next gains are being sought in cellular therapy against GD2, HER2 and B7-H3.",
    "summary": "Osteosarcoma is a high-grade bone sarcoma with chaotic genomes (TP53 and RB1 loss, chromothripsis, no recurrent targetable driver), arising in the metaphyses of long bones during growth spurts and in older adults after Paget disease or radiation. Germline predisposition (Li-Fraumeni, hereditary retinoblastoma, Rothmund-Thomson) accounts for a meaningful fraction.\n\nStandard therapy since the 1980s is neoadjuvant MAP (high-dose methotrexate, doxorubicin, cisplatin), limb-salvage surgery, and adjuvant MAP; histologic response (≥90% necrosis) is prognostic but intensifying therapy for poor responders (EURAMOS-1: adding ifosfamide-etoposide) did not help, nor did interferon maintenance. Mifamurtide (liposomal MTP-PE) is approved in the EU (INT-0133) but not in the US. Lung metastases are resected whenever possible. Relapsed disease has ~20% survival; multikinase inhibitors (regorafenib in SARC024/REGOBONE, cabozantinib in CABONE, sorafenib) give short PFS gains. Novel approaches: GD2- and HER2-directed CAR-T, B7-H3 ADCs, radiopharmaceuticals (Ra-223, Sm-153), and biology from canine osteosarcoma.",
    "subtypes": [
      "Conventional high-grade (osteoblastic, chondroblastic, fibroblastic)",
      "Telangiectatic",
      "Small cell",
      "Low-grade central and parosteal (surgery alone)",
      "Periosteal (intermediate grade)",
      "Secondary (Paget, post-radiation)"
    ],
    "biomarkers": [
      "Histologic necrosis after neoadjuvant chemotherapy (≥90% good response)",
      "Alkaline phosphatase and LDH",
      "Metastases at diagnosis (lung, bone)",
      "Germline TP53 / RB1 / RECQL4",
      "GD2, HER2, B7-H3 expression (trial eligibility)",
      "ctDNA copy-number burden (prognostic, emerging)"
    ],
    "standardOfCare": [
      {
        "setting": "Localised high-grade",
        "approach": "Neoadjuvant MAP (methotrexate, doxorubicin, cisplatin) ×2 cycles, limb-salvage resection with wide margins (amputation if required), adjuvant MAP to ~29 weeks; mifamurtide added in EU.",
        "guideline": {
          "nccn": "Category 1 (MAP)",
          "version": "NCCN Guidelines: Bone Cancer",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1418"
        }
      },
      {
        "setting": "Metastatic at diagnosis",
        "approach": "Same chemotherapy with resection of all metastases (thoracotomy) when feasible; survival ~25-30%.",
        "guideline": {
          "nccn": "Category 2A",
          "version": "NCCN Guidelines: Bone Cancer"
        }
      },
      {
        "setting": "Relapsed",
        "approach": "Surgical resection of recurrence; ifosfamide ± etoposide, gemcitabine-docetaxel; regorafenib or cabozantinib; clinical trials (CAR-T, ADCs).",
        "refs": [
          "cabozantinib",
          "docetaxel"
        ],
        "guideline": {
          "nccn": "Category 2A",
          "version": "NCCN Guidelines: Bone Cancer"
        }
      },
      {
        "setting": "Unresectable / axial",
        "approach": "Carbon-ion or proton radiotherapy for craniofacial and pelvic tumours; Sm-153 or Ra-223 for bone-forming metastases (investigational).",
        "refs": [
          "radium-223"
        ]
      }
    ],
    "stateOfArt": [
      "MAP chemotherapy, unchanged since the 1980s, remains the standard; EURAMOS-1 (2,260 patients) closed the door on intensification.",
      "Limb salvage is possible in >90% with expandable prostheses for growing children.",
      "Multikinase inhibitors are the only agents with randomised evidence at relapse, and the gain is months.",
      "Immunotherapy has largely failed (checkpoint inhibitors inactive); cellular therapy against GD2/HER2/B7-H3 is the active frontier."
    ],
    "history": [
      {
        "year": 1970,
        "title": "Amputation alone cures <20%; lung metastases the rule"
      },
      {
        "year": 1972,
        "title": "High-dose methotrexate with leucovorin rescue (Jaffe) and adriamycin (Cortes) show activity"
      },
      {
        "year": 1979,
        "title": "Rosen's T-10: neoadjuvant chemotherapy and limb salvage"
      },
      {
        "year": 1986,
        "title": "Randomised proof that adjuvant chemotherapy cures (Link, NEJM; MIOS)"
      },
      {
        "year": 2008,
        "title": "INT-0133: mifamurtide improves overall survival; EU approval 2009"
      },
      {
        "year": 2016,
        "title": "EURAMOS-1: no benefit from intensifying for poor responders or interferon for good responders"
      },
      {
        "year": 2019,
        "title": "Regorafenib (SARC024, REGOBONE) and cabozantinib (CABONE) show activity at relapse",
        "refs": [
          "cabozantinib"
        ]
      }
    ],
    "pipeline": [
      "cabozantinib",
      "radium-223",
      "b7h3"
    ],
    "openProblems": [
      "No survival improvement since the 1980s; metastatic and relapsed disease ~20-30% survival.",
      "No recurrent druggable driver; genomic chaos.",
      "Chemotherapy toxicity: cardiotoxicity, hearing loss, infertility, second cancers.",
      "Rarity fragments trials; international cooperation (EURAMOS) needed for every question."
    ],
    "targets": [
      "her2",
      "b7h3"
    ],
    "technologies": [
      "radioligand-therapy"
    ],
    "drugs": [
      "cabozantinib",
      "docetaxel",
      "radium-223"
    ],
    "companies": [
      "bayer"
    ],
    "links": [
      {
        "label": "NCCN Guidelines: Bone Cancer",
        "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1418"
      },
      {
        "label": "EURAMOS-1 (Lancet Oncol 2016)",
        "url": "https://doi.org/10.1016/S1470-2045(16)30214-5"
      },
      {
        "label": "NCI PDQ: osteosarcoma",
        "url": "https://www.cancer.gov/types/bone/patient/osteosarcoma-treatment-pdq"
      }
    ],
    "tags": [
      "gap-fill",
      "paediatric",
      "sarcoma",
      "aya"
    ]
  },
  {
    "id": "pancreatic-net",
    "related": [
      "grade-3-net",
      "lung-net",
      "small-intestinal-net"
    ],
    "kind": "indication",
    "name": "Pancreatic neuroendocrine tumours",
    "group": "endocrine",
    "parent": "neuroendocrine",
    "asOf": "2026-09-17",
    "tags": [
      "subtype-page",
      "endocrine"
    ],
    "wikipedia": "https://en.wikipedia.org/wiki/Pancreatic_neuroendocrine_tumor",
    "keyPapers": [
      "paper-netter-2-lancet-2024",
      "paper-cabinet-cabozantinib-nejm-2024"
    ],
    "aka": [
      "pNET",
      "Islet cell tumour",
      "Pancreatic NET",
      "Insulinoma",
      "Gastrinoma",
      "Non-functioning pancreatic neuroendocrine tumour"
    ],
    "burden": "A small minority of pancreatic cancers but the site with the most approved drugs of any neuroendocrine tumour; most are non-functioning and found on imaging, while insulinomas and gastrinomas announce themselves through their hormones.",
    "tldr": "Pancreatic neuroendocrine tumours arise from the hormone-producing islet cells of the pancreas and behave very differently from ordinary pancreatic cancer, often growing for years. Surgery cures localised tumours; advanced disease is treated in sequence with somatostatin analogues, lutetium-177 dotatate, targeted tablets and oral chemotherapy, and a minority secrete insulin or gastrin.",
    "summary": "Pancreatic neuroendocrine tumours arise from islet cells and are graded by Ki-67 like other neuroendocrine tumours, but their genetics are their own: MEN1 is the most commonly mutated gene in sporadic tumours, with DAXX or ATRX loss and mutations in the mTOR pathway following, while KRAS and TP53, the drivers of ductal adenocarcinoma, are absent. Most are non-functioning and present as a mass or as liver metastases; the functioning minority cause syndromes, insulinoma with fasting hypoglycaemia (usually benign and cured by enucleation), gastrinoma with the ulcer disease of Zollinger-Ellison syndrome (controlled with proton-pump inhibitors, often malignant and often part of MEN1), and rarer glucagonomas and VIPomas. Germline testing is offered because MEN1, VHL, neurofibromatosis type 1 and tuberous sclerosis all predispose, and small non-functioning tumours under about two centimetres are often watched rather than removed.\n\nSurgery is curative for localised disease: enucleation or distal pancreatectomy for small tumours and a Whipple procedure for those in the head. For advanced disease, 2011 brought two tablets at once. RADIANT-3 (New England Journal of Medicine 2011) randomised 410 patients with progressive tumours to everolimus or placebo and lengthened progression-free survival from 4.6 to 11.0 months; the sunitinib phase 3 (New England Journal of Medicine 2011) was stopped early after 171 patients with 11.4 against 5.5 months. CLARINET (2014), in which almost half the patients had pancreatic tumours, established lanreotide as antiproliferative first-line therapy, and the E2211 trial (Journal of Clinical Oncology 2023) showed that adding capecitabine to temozolomide lengthened progression-free survival from 14.4 to 22.7 months with a higher response rate, making CAPTEM the chemotherapy of choice when shrinkage is needed. Streptozocin, approved in 1982, remains a guideline option.\n\nRadioligand therapy and cabozantinib have since reordered the sequence. Lutathera's 2018 approval covered all gastroenteropancreatic tumours on the strength of NETTER-1 in midgut disease, and NETTER-2 (Lancet 2024), in which more than half the patients had pancreatic tumours, showed first-line lutetium-177 dotatate lengthened progression-free survival from 8.5 to 22.8 months in grade 2 and 3 disease. CABINET (New England Journal of Medicine 2024) randomised a separate pancreatic cohort to cabozantinib or placebo after prior therapy and lengthened progression-free survival from 4.4 to 13.8 months, leading to approval in March 2025. Belzutifan was approved in 2021 for VHL-associated pancreatic tumours not needing immediate surgery, and its LITESPARK-015 trial has a sporadic pancreatic NET cohort. COMPETE (Lancet 2025) and COMPOSE test 177Lu-edotreotide against everolimus and against chemotherapy, and hepatic-dominant disease is still treated with embolisation, ablation and resection.",
    "subtypes": [
      "Non-functioning pancreatic NET (the majority, found as a mass or liver metastases)",
      "Insulinoma (fasting hypoglycaemia, usually benign, cured by enucleation)",
      "Gastrinoma and Zollinger-Ellison syndrome (often duodenal or pancreatic head, often MEN1)",
      "Glucagonoma, VIPoma and somatostatinoma (rare functioning tumours)",
      "MEN1- and VHL-associated pancreatic NET (multiple, young onset)",
      "Grade 1 to 2 pancreatic NET (somatostatin analogue, radioligand, everolimus, sunitinib, cabozantinib)",
      "Grade 3 well-differentiated pancreatic NET (see the grade 3 record)"
    ],
    "biomarkers": [
      "Ki-67 index and mitotic count (WHO grade)",
      "Chromogranin A (monitoring)",
      "Somatostatin receptor PET (staging and radioligand eligibility)",
      "Fasting glucose, insulin, C-peptide and proinsulin (insulinoma)",
      "Fasting gastrin and gastric pH (gastrinoma)",
      "Germline MEN1, VHL, NF1 and TSC testing",
      "MEN1, DAXX and ATRX status in the tumour (prognostic, research)",
      "MGMT status (CAPTEM response, investigational)"
    ],
    "standardOfCare": [
      {
        "setting": "Diagnosis and staging",
        "approach": "Contrast CT or MRI, somatostatin receptor PET, biopsy with Ki-67 grading, chromogranin A, hormone assays where a syndrome is suspected, and germline testing.",
        "refs": [
          "sstr-pet",
          "ga68-dotatate",
          "net-grade-ki67"
        ],
        "guideline": {
          "version": "NCCN Guidelines: Neuroendocrine and Adrenal Tumors",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1448"
        }
      },
      {
        "setting": "Localised, resectable",
        "approach": "Enucleation or distal pancreatectomy for small tumours, Whipple procedure for tumours in the head, lymphadenectomy for tumours over two centimetres; surveillance for small non-functioning tumours.",
        "guideline": {
          "version": "NCCN Guidelines: Neuroendocrine and Adrenal Tumors",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1448"
        }
      },
      {
        "setting": "Functioning syndromes",
        "approach": "Surgery for insulinoma with diazoxide or everolimus to control hypoglycaemia beforehand; high-dose proton-pump inhibitors and resection for gastrinoma; somatostatin analogues for glucagonoma and VIPoma.",
        "refs": [
          "everolimus"
        ],
        "guideline": {
          "version": "NCCN Guidelines: Neuroendocrine and Adrenal Tumors",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1448"
        }
      },
      {
        "setting": "Advanced, first line",
        "approach": "Lanreotide or octreotide (CLARINET); lutetium-177 dotatate first line for grade 2 to 3 tumours with a Ki-67 of 10 percent or more (NETTER-2); CAPTEM when shrinkage is needed.",
        "refs": [
          "lutathera",
          "nct03972488",
          "prrt"
        ],
        "guideline": {
          "version": "NCCN Guidelines: Neuroendocrine and Adrenal Tumors",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1448"
        }
      },
      {
        "setting": "Progression on a somatostatin analogue",
        "approach": "Lutetium-177 dotatate; everolimus (RADIANT-3); sunitinib; cabozantinib (CABINET); CAPTEM or streptozocin-based chemotherapy.",
        "refs": [
          "lutathera",
          "everolimus",
          "radiant-3-4",
          "sunitinib",
          "cabozantinib",
          "cabinet"
        ],
        "guideline": {
          "version": "NCCN Guidelines: Neuroendocrine and Adrenal Tumors",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1448"
        }
      },
      {
        "setting": "Liver-dominant disease",
        "approach": "Resection, thermal ablation, chemoembolisation or radioembolisation, alongside systemic therapy.",
        "refs": [
          "radioembolisation-tare"
        ],
        "guideline": {
          "version": "NCCN Guidelines: Neuroendocrine and Adrenal Tumors",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1448"
        }
      },
      {
        "setting": "VHL-associated pancreatic NET",
        "approach": "Belzutifan for tumours not requiring immediate surgery (approved 2021).",
        "guideline": {
          "version": "NCCN Guidelines: Neuroendocrine and Adrenal Tumors",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1448"
        }
      }
    ],
    "stateOfArt": [
      "Five approved systemic drug classes (somatostatin analogues, radioligand therapy, mTOR inhibition, anti-angiogenic kinase inhibitors and oral chemotherapy) give years of sequential control.",
      "NETTER-2 put lutetium-177 dotatate in first line for grade 2 to 3 disease and CABINET added cabozantinib after prior therapy.",
      "Belzutifan was the first drug approved for a hereditary neuroendocrine syndrome, in VHL disease."
    ],
    "history": [
      {
        "year": 1927,
        "title": "Wilder describes hyperinsulinism from an islet cell tumour; first successful insulinoma resection follows in 1929"
      },
      {
        "year": 1955,
        "title": "Zollinger and Ellison describe the gastrinoma syndrome"
      },
      {
        "year": 1982,
        "title": "Streptozocin approved for metastatic islet cell carcinoma"
      },
      {
        "year": 2011,
        "title": "RADIANT-3 and the sunitinib phase 3 published; everolimus and sunitinib approved; MEN1, DAXX and ATRX mutations mapped by exome sequencing",
        "refs": [
          "radiant-3-4",
          "everolimus",
          "sunitinib"
        ]
      },
      {
        "year": 2014,
        "title": "CLARINET: lanreotide approved as antiproliferative therapy"
      },
      {
        "year": 2018,
        "title": "Lutathera approved for gastroenteropancreatic tumours",
        "refs": [
          "lutathera",
          "prrt"
        ]
      },
      {
        "year": 2021,
        "title": "Belzutifan approved for VHL-associated pancreatic NET"
      },
      {
        "year": 2023,
        "title": "E2211 final analysis: CAPTEM beats temozolomide alone"
      },
      {
        "year": 2024,
        "title": "NETTER-2: first-line lutetium-177 dotatate in grade 2 to 3 disease; CABINET pancreatic cohort published",
        "refs": [
          "nct03972488",
          "lutathera",
          "cabinet"
        ]
      },
      {
        "year": 2025,
        "title": "Cabozantinib approved; COMPETE published",
        "refs": [
          "cabozantinib",
          "compete"
        ]
      }
    ],
    "pipeline": [
      "itm-11",
      "compete",
      "nct04919226",
      "ryz101",
      "action-1",
      "alphamedix",
      "nct05884255",
      "idea-net-dosimetry-prrt"
    ],
    "openProblems": [
      "The best order of radioligand therapy, everolimus, sunitinib, cabozantinib and CAPTEM is unknown.",
      "Which small non-functioning tumours can safely be watched rather than resected.",
      "MGMT and other predictors of CAPTEM response are not validated for decisions.",
      "Grade 3 well-differentiated tumours sit between the tumour and carcinoma paradigms and need their own trials."
    ],
    "drugs": [
      "lutathera",
      "everolimus",
      "sunitinib",
      "cabozantinib",
      "ga68-dotatate",
      "itm-11"
    ],
    "trials": [
      "radiant-3-4",
      "cabinet",
      "nct03972488",
      "netter-1",
      "compete",
      "nct04919226"
    ],
    "technologies": [
      "sstr-pet",
      "prrt",
      "radioligand-therapy",
      "radioembolisation-tare"
    ],
    "terms": [
      "net-grade-ki67",
      "prrt-term"
    ],
    "targets": [
      "sstr2"
    ],
    "links": [
      {
        "label": "RADIANT-3 (NEJM 2011)",
        "url": "https://doi.org/10.1056/NEJMoa1009290"
      },
      {
        "label": "Sunitinib in pancreatic NET (NEJM 2011)",
        "url": "https://doi.org/10.1056/NEJMoa1003825"
      },
      {
        "label": "CABINET (NEJM 2024)",
        "url": "https://doi.org/10.1056/NEJMoa2403991"
      },
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Pancreatic_neuroendocrine_tumor"
      }
    ]
  },
  {
    "kind": "indication",
    "asOf": "2026-09-10",
    "id": "pheochromocytoma-paraganglioma",
    "name": "Pheochromocytoma and paraganglioma (PPGL)",
    "group": "endocrine",
    "wikipedia": "https://en.wikipedia.org/wiki/Pheochromocytoma",
    "aka": [
      "Pheochromocytoma",
      "Paraganglioma",
      "PPGL",
      "Phaeochromocytoma"
    ],
    "burden": "About 2 to 8 cases per million people per year; roughly one in ten pheochromocytomas and a higher share of paragangliomas are metastatic, and about 40 percent of all cases are hereditary.",
    "tldr": "Pheochromocytomas and paragangliomas are tumours of adrenaline-producing tissue that cause dangerous blood pressure surges. Surgery after careful blood-pressure blockade cures most, genetic testing finds an inherited cause in nearly half, and for the minority that spread there are now radioactive drugs that home to the tumour and, since 2025, the first oral targeted pill, belzutifan.",
    "summary": "PPGL are catecholamine-secreting tumours of the adrenal medulla (pheochromocytoma) or extra-adrenal sympathetic and parasympathetic paraganglia. They have the highest heritability of any human tumour: about 40 percent carry germline mutations in one of more than 15 genes, grouped into cluster 1 (pseudohypoxia: SDHA/B/C/D, VHL, FH, EPAS1) and cluster 2 (kinase signalling: RET, NF1, TMEM127, MAX). SDHB carriers have the highest metastatic risk. Diagnosis rests on plasma free or urinary fractionated metanephrines, then anatomical imaging and functional imaging with 68Ga-DOTATATE PET (most sensitive for SDHx and metastatic disease) or 18F-FDOPA. Endocrine Society guidance recommends germline testing for every patient.\n\nSurgery after 7 to 14 days of alpha-adrenergic blockade is curative for localised disease, with cortical-sparing adrenalectomy in hereditary bilateral cases. Metastatic disease is treated to control catecholamine excess and tumour burden: 177Lu-DOTATATE for SSTR-positive tumours (NCCN-listed; prospective trials ongoing), high-specific-activity 131I-MIBG (iobenguane I-131, Azedra; FDA 2018, though the manufacturer later announced its commercial discontinuation), cyclophosphamide-vincristine-dacarbazine or temozolomide chemotherapy (particularly SDHB-mutant), and sunitinib, which improved progression-free survival versus placebo in the randomised FIRSTMAPPP trial (Lancet 2024). Belzutifan, the HIF-2alpha inhibitor first approved for VHL-associated tumours, received FDA approval on 14 May 2025 for locally advanced, unresectable or metastatic PPGL in patients aged 12 and older on the basis of the LITESPARK-015 cohort (objective response rate 26 percent), the first oral therapy approved for the disease and a direct hit on the pseudohypoxia biology of cluster 1 tumours.\n\nOpen problems are predicting metastasis (no histological criterion is reliable), lifelong surveillance of gene carriers, and sequencing radioligand, HIF-2alpha and kinase therapy.",
    "subtypes": [
      "Adrenal pheochromocytoma",
      "Sympathetic paraganglioma (abdominal, thoracic)",
      "Head and neck (parasympathetic) paraganglioma, usually non-secreting",
      "Hereditary PPGL (SDHx, VHL, RET/MEN2, NF1, MAX, TMEM127)",
      "Metastatic PPGL"
    ],
    "biomarkers": [
      "Plasma free or urinary fractionated metanephrines",
      "Germline panel testing (SDHA/B/C/D, SDHAF2, VHL, RET, NF1, MAX, TMEM127, FH, EPAS1)",
      "SDHB immunohistochemistry (loss indicates SDHx)",
      "68Ga-DOTATATE PET (SSTR2 expression; selects for PRRT)",
      "123I-MIBG scintigraphy (selects for 131I-MIBG)",
      "Tumour size, extra-adrenal location and SDHB status as metastatic risk factors"
    ],
    "standardOfCare": [
      {
        "setting": "Localised, secreting",
        "approach": "Alpha-blockade (phenoxybenzamine or doxazosin) for 7 to 14 days, volume expansion, then laparoscopic or open adrenalectomy; cortical-sparing surgery in hereditary bilateral disease.",
        "guideline": {
          "version": "Endocrine Society clinical practice guideline 2014; NCCN Neuroendocrine and Adrenal Tumors",
          "url": "https://doi.org/10.1210/jc.2014-1498"
        }
      },
      {
        "setting": "All patients",
        "approach": "Germline genetic testing and, for carriers, lifelong biochemical and imaging surveillance; cascade testing of relatives.",
        "guideline": {
          "version": "Endocrine Society 2014",
          "url": "https://doi.org/10.1210/jc.2014-1498"
        }
      },
      {
        "setting": "Metastatic or unresectable",
        "approach": "Belzutifan (FDA May 2025, LITESPARK-015); 177Lu-DOTATATE for SSTR-positive disease; 131I-MIBG where available; sunitinib (FIRSTMAPPP); CVD or temozolomide chemotherapy for rapidly progressive or SDHB-mutant disease; alpha-blockade throughout.",
        "refs": [
          "lutathera",
          "prrt",
          "i131-mibg",
          "mibg-theranostics",
          "sunitinib",
          "temozolomide"
        ],
        "guideline": {
          "nccn": "Category 2A",
          "version": "NCCN Neuroendocrine and Adrenal Tumors"
        }
      }
    ],
    "stateOfArt": [
      "Belzutifan is the first drug to target the pseudohypoxia biology (HIF-2alpha) shared by SDHx- and VHL-driven tumours, and the first oral therapy approved for PPGL (2025).",
      "Theranostics matured here early: 123I-MIBG and 68Ga-DOTATATE imaging select patients for 131I-MIBG or 177Lu-DOTATATE treatment of the same target.",
      "FIRSTMAPPP was the first randomised phase 2 in metastatic PPGL, showing that trials are possible in a disease this rare and that sunitinib delays progression.",
      "Universal germline testing has turned PPGL into a model for hereditary cancer surveillance, with SDHB carriers identified before tumours form."
    ],
    "history": [
      {
        "year": 1886,
        "title": "Fränkel describes bilateral adrenal tumours in an 18-year-old",
        "note": "Later shown by genetic analysis to be a case of MEN2."
      },
      {
        "year": 1926,
        "title": "First successful resection (Roux in Lausanne, Mayo in Rochester)"
      },
      {
        "year": 2000,
        "title": "SDHD mutations in hereditary paraganglioma",
        "note": "Baysal and colleagues, Science: metabolic enzyme genes as tumour suppressors."
      },
      {
        "year": 2014,
        "title": "Endocrine Society guideline recommends germline testing for all"
      },
      {
        "year": 2018,
        "title": "High-specific-activity 131I-MIBG (Azedra) approved",
        "note": "FDA, July 2018, for unresectable MIBG-positive PPGL; later discontinued commercially.",
        "refs": [
          "i131-mibg"
        ]
      },
      {
        "year": 2024,
        "title": "FIRSTMAPPP: sunitinib delays progression",
        "note": "Baudin and colleagues, Lancet: first randomised trial in metastatic PPGL.",
        "refs": [
          "sunitinib"
        ]
      },
      {
        "year": 2025,
        "title": "Belzutifan approved for PPGL",
        "note": "FDA, 14 May 2025, LITESPARK-015 cohort A1; first oral therapy for the disease."
      }
    ],
    "pipeline": [
      "lutathera",
      "prrt",
      "sunitinib",
      "cabozantinib"
    ],
    "openProblems": [
      "No reliable predictor of metastasis at diagnosis: molecular classifiers and SDHB status are being validated.",
      "Withdrawal of 131I-MIBG from the market left a gap that 177Lu-DOTATATE and alpha-emitters are filling.",
      "Sequencing belzutifan, radioligand therapy and kinase inhibitors: no comparative data.",
      "Lifelong surveillance burden for gene carriers, with children of SDHB carriers screened from early childhood."
    ],
    "targets": [
      "sstr2"
    ],
    "technologies": [
      "radioligand-therapy",
      "prrt",
      "mibg-theranostics",
      "sstr-pet"
    ],
    "drugs": [
      "lutathera",
      "i131-mibg",
      "sunitinib",
      "temozolomide",
      "cabozantinib"
    ],
    "pathways": [
      "hif-vhl"
    ],
    "companies": [
      "merck",
      "novartis",
      "pfizer"
    ],
    "links": [
      {
        "label": "NCI PDQ: pheochromocytoma and paraganglioma",
        "url": "https://www.cancer.gov/types/pheochromocytoma"
      },
      {
        "label": "FDA approval of belzutifan for PPGL (May 2025)",
        "url": "https://www.fda.gov/drugs/resources-information-approved-drugs/fda-approves-belzutifan-pheochromocytoma-or-paraganglioma"
      },
      {
        "label": "Endocrine Society guideline 2014",
        "url": "https://doi.org/10.1210/jc.2014-1498"
      },
      {
        "label": "FIRSTMAPPP (Lancet 2024)",
        "url": "https://doi.org/10.1016/S0140-6736(23)02554-0"
      }
    ],
    "tags": [
      "nci-coverage",
      "rare",
      "endocrine"
    ]
  },
  {
    "kind": "indication",
    "asOf": "2026-09-06",
    "id": "prostate",
    "trials": [
      "nct06855277",
      "nct06780670",
      "mcrpc",
      "nct07311694",
      "nct07615101",
      "nct07649122",
      "nct05381103",
      "pop-rt",
      "nct05939414",
      "nct06520345",
      "nct07052214",
      "nct07611110",
      "nct04557059",
      "nct06235151",
      "nct06754085"
    ],
    "name": "Prostate cancer",
    "group": "genitourinary",
    "wikipedia": "https://en.wikipedia.org/wiki/Prostate_cancer",
    "burden": "~1.5 million new cases per year worldwide; lifetime risk ~1 in 8 men in high-income countries; median age at diagnosis 67; most PSA-detected disease is indolent and safely watched. ~400,000 deaths per year worldwide, mostly from disease that was already metastatic at diagnosis.",
    "prognosis": {
      "text": "In the United States, 98.2% of men diagnosed with prostate cancer in 2016-2022 were alive five years later, relative to men of the same age without the disease. For the 69% found while confined to the prostate and the 14% with regional spread, five-year relative survival is 100%; for the 9% found with distant spread it is 40.1%. Most prostate cancers grow slowly, and for many men the question is whether treatment is needed at all rather than whether it will work.",
      "sources": [
        {
          "label": "SEER Cancer Stat Facts: Prostate Cancer",
          "url": "https://seer.cancer.gov/statfacts/html/prost.html"
        }
      ]
    },
    "tldr": "Prostate cancer is the home of theranostics: PSMA PET finds it, PSMA radioligands treat it. Hormonal therapy remains the foundation, with PARP and AKT inhibitors added by genotype.",
    "summary": "Prostate cancer is the most common cancer in men in most high-income countries and a spectrum: most PSA-detected disease is indolent and safely watched (ProtecT: ~3% prostate-cancer mortality at 15 years whatever the strategy), while de novo metastatic disease, treated with hormonal doublets and triplets and since 2026 with radioligand therapy added, still has a median survival of about five years, which makes it the second most common cause of cancer death in men. Diagnosis now runs PSA → multiparametric MRI (PRECISION) → targeted biopsy → Grade Group, with germline and somatic HRR testing for advanced disease and PSMA PET for staging (proPSMA) and recurrence. Digital-pathology AI (ArteraAI Prostate, 2025) and gene-expression classifiers (Decipher) refine who needs treatment and who benefits from adding hormone therapy.\n\nTreatment is built on androgen deprivation, the first targeted cancer therapy (Huggins, 1941). Metastatic hormone-sensitive disease is treated with doublets (ADT + abiraterone, enzalutamide, apalutamide or darolutamide) or triplets adding docetaxel (ARASENS, PEACE-1), and since 31 July 2026 with 177Lu-PSMA-617 added to ADT + ARPI (PSMAddition, rPFS HR 0.72). PTEN-deficient disease gained capivasertib + abiraterone in 2026. In castration-resistant disease the sequence includes ARPI switch, PARP inhibitors for HRR-mutant tumours (PROfound, PROpel, TALAPRO-2 with OS benefit), docetaxel and cabazitaxel, radium-223 for bone-only disease, and 177Lu-PSMA-617 before or after chemotherapy (VISION, PSMAfore). Enzalutamide is approved even for high-risk PSA-only recurrence (EMBARK).\n\nProstate cancer is the proving ground for theranostics: PSMA PET selects and PSMA radioligands treat. Competing 177Lu-PSMA-I&T products (SPLASH, ECLIPSE) have improved progression but not yet survival; alpha-emitting 225Ac-PSMA agents are in phase 3 (AlphaBreak, AcTION) and produce responses after lutetium failure. T-cell engagers against STEAP1 (xaluritamig, XALute) and KLK2 (pasritamig) are the first immunotherapies with real activity in a disease that ignores checkpoint inhibitors; EZH2 inhibition (mevrometostat, MEVPRO) aims to re-sensitise to hormonal therapy. The unsolved problems are neuroendocrine transformation, AR-V7-driven resistance (the N-terminal-domain inhibitor masofaniten failed), Ac-225 supply, and the over- versus under-diagnosis tension in screening.",
    "biomarkers": [
      "PSA",
      "Gleason / Grade Group",
      "PSMA PET",
      "HRR genes (BRCA2, ATM, etc.)",
      "PTEN",
      "MSI",
      "AR-V7 (research)",
      "Decipher / ArteraAI",
      "PSA, PSA density, PSA doubling time",
      "Grade Group (Gleason) and cribriform/intraductal pattern",
      "mpMRI PI-RADS score",
      "PSMA PET (SUVmax, total tumour volume) for staging and radioligand eligibility",
      "Germline and somatic HRR genes (BRCA2, BRCA1, ATM, PALB2, CDK12)",
      "PTEN loss (IHC or NGS) for capivasertib",
      "MSI/dMMR (~3%, pembrolizumab)",
      "Decipher genomic classifier; ArteraAI digital pathology",
      "AR-V7 (CTC) in research/limited use",
      "Testosterone level (castration confirmation)",
      "Neuroendocrine markers (chromogranin, synaptophysin, RB1/TP53 loss) on progression"
    ],
    "standardOfCare": [
      {
        "setting": "Localised",
        "approach": "Active surveillance, prostatectomy, or radiation ± ADT (duration guided by risk/ArteraAI).",
        "guideline": {
          "version": "NCCN Guidelines: Prostate Cancer",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1459"
        }
      },
      {
        "setting": "Metastatic hormone-sensitive",
        "approach": "ADT + ARPI ± docetaxel; PSMA PET staging; capivasertib if PTEN-deficient.",
        "refs": [
          "psma-pet"
        ],
        "guideline": {
          "version": "NCCN Guidelines: Prostate Cancer",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1459"
        }
      },
      {
        "setting": "Castration-resistant",
        "approach": "ARPI switch, PARP inhibitor combinations (HRR+), 177Lu-PSMA-617, docetaxel/cabazitaxel, radium-223.",
        "refs": [
          "pluvicto",
          "olaparib",
          "vision",
          "psmafore"
        ],
        "guideline": {
          "version": "NCCN Guidelines: Prostate Cancer",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1459"
        }
      },
      {
        "setting": "Screening",
        "approach": "Shared-decision PSA testing from 50 (45 if Black or family history/BRCA), risk-adapted intervals; MRI before biopsy; avoid biopsy if MRI negative and PSA density low."
      },
      {
        "setting": "Localised, low / favourable-intermediate risk",
        "approach": "Active surveillance (PSA, MRI, repeat biopsy) for Grade Group 1 and many favourable GG2; genomic classifier or ArteraAI to refine."
      },
      {
        "setting": "Localised, unfavourable-intermediate / high risk",
        "approach": "Radical prostatectomy (robotic) or radiotherapy (hypofractionated IMRT, SBRT, or brachytherapy boost) with 4-6 months (intermediate) to 18-36 months (high risk) of ADT; abiraterone added for very high risk (STAMPEDE); ArteraAI predicts ADT benefit.",
        "refs": [
          "stampede"
        ]
      },
      {
        "setting": "Biochemical recurrence",
        "approach": "PSMA PET to localise; salvage radiotherapy ± ADT after prostatectomy; metastasis-directed SBRT for oligorecurrence (investigational for survival); enzalutamide ± ADT for high-risk BCR (EMBARK).",
        "refs": [
          "psma-pet",
          "biochemical-recurrence",
          "embark",
          "enzalutamide",
          "idea-psma-pet-guided-mdt"
        ]
      },
      {
        "setting": "Metastatic hormone-sensitive (mAPMN/S)",
        "approach": "ADT (GnRH agonist/antagonist, e.g., relugolix) + ARPI (abiraterone, enzalutamide, apalutamide, or darolutamide); add docetaxel for high-volume de novo disease (ARASENS, PEACE-1); add 177Lu-PSMA-617 if PSMA-positive (PSMAddition, approved 31 Jul 2026); capivasertib + abiraterone if PTEN-deficient (2026); prostate RT for low-volume disease.",
        "refs": [
          "abiraterone",
          "enzalutamide",
          "docetaxel",
          "pluvicto",
          "psmaddition"
        ]
      },
      {
        "setting": "Non-metastatic CRPC",
        "approach": "Apalutamide, enzalutamide, or darolutamide (SPARTAN, PROSPER, ARAMIS); PSMA PET usually reclassifies as metastatic.",
        "refs": [
          "enzalutamide",
          "psma-pet"
        ]
      },
      {
        "setting": "Metastatic CRPC, first line",
        "approach": "ARPI (if not used earlier); PARP inhibitor + ARPI for BRCA/HRR-mutant (olaparib-abiraterone, talazoparib-enzalutamide, niraparib-abiraterone); docetaxel; 177Lu-PSMA-617 after one ARPI before chemotherapy (PSMAfore); pembrolizumab if MSI-high.",
        "refs": [
          "olaparib",
          "pluvicto",
          "psmafore",
          "docetaxel",
          "pembrolizumab"
        ]
      },
      {
        "setting": "Metastatic CRPC, later lines",
        "approach": "177Lu-PSMA-617 post-taxane (VISION); cabazitaxel (CARD); radium-223 for bone-only symptomatic disease (with bone protection); 225Ac-PSMA, xaluritamig, pasritamig, mevrometostat in trials; platinum-etoposide for neuroendocrine transformation; tarlatamab/I-DXd trials for DLL3/B7-H3.",
        "refs": [
          "pluvicto",
          "vision",
          "cabazitaxel",
          "radium-223",
          "alsympca",
          "ac225-psma",
          "alphabreak"
        ]
      }
    ],
    "stateOfArt": [
      "Theranostic pairing of PSMA PET and Pluvicto.",
      "Genotype-directed doublets.",
      "AI pathology guiding ADT duration.",
      "Radioligand therapy across the metastatic continuum: 177Lu-PSMA-617 approved post-taxane (2022), pre-taxane (2025), and at first metastatic diagnosis with ARPI (31 July 2026).",
      "Triplet therapy (ADT + ARPI + docetaxel) for high-volume de novo disease, with OS HR ~0.7 (ARASENS, PEACE-1).",
      "Genotype-directed doublets: PARP inhibitor + ARPI for HRR-mutant (OS benefit in TALAPRO-2) and capivasertib + abiraterone for PTEN-deficient disease (2026).",
      "Diagnostic pathway rebuilt around MRI-first biopsy and PSMA PET staging; active surveillance is default for low-risk disease.",
      "AI pathology (ArteraAI Prostate) is FDA-authorised to predict who benefits from adding hormone therapy to radiation.",
      "First immunotherapies with real activity: STEAP1 and KLK2 T-cell engagers in phase 3, after checkpoint inhibitors failed in unselected disease."
    ],
    "history": [
      {
        "year": 1941,
        "title": "Huggins: castration controls prostate cancer"
      },
      {
        "year": 1941,
        "title": "Huggins shows castration controls metastatic prostate cancer",
        "note": "Nobel Prize 1966; the first hormonal therapy of any cancer."
      },
      {
        "year": 1966,
        "title": "Gleason grading system published"
      },
      {
        "year": 1986,
        "title": "PSA test approved for monitoring; screening spreads in the 1990s"
      },
      {
        "year": 2004,
        "title": "Docetaxel: first chemotherapy to extend survival (TAX 327)",
        "refs": [
          "docetaxel"
        ]
      },
      {
        "year": 2011,
        "title": "Abiraterone approved"
      },
      {
        "year": 2011,
        "title": "Abiraterone approved; enzalutamide follows in 2012",
        "note": "Proof that castration-resistant disease is still AR-driven.",
        "refs": [
          "abiraterone",
          "enzalutamide"
        ]
      },
      {
        "year": 2013,
        "title": "Radium-223: first alpha emitter approved"
      },
      {
        "year": 2013,
        "title": "Radium-223: first alpha emitter approved (ALSYMPCA)",
        "refs": [
          "radium-223",
          "alsympca"
        ]
      },
      {
        "year": 2015,
        "title": "CHAARTED and STAMPEDE: docetaxel at first metastatic diagnosis",
        "refs": [
          "chaarted",
          "stampede"
        ]
      },
      {
        "year": 2016,
        "title": "ProtecT validates active surveillance"
      },
      {
        "year": 2017,
        "title": "LATITUDE and STAMPEDE: abiraterone in mHSPC",
        "refs": [
          "stampede"
        ]
      },
      {
        "year": 2018,
        "title": "PRECISION: MRI before biopsy"
      },
      {
        "year": 2020,
        "title": "PSMA PET approved; olaparib in HRR-mutant mCRPC",
        "refs": [
          "psma-pet",
          "olaparib"
        ]
      },
      {
        "year": 2020,
        "title": "PSMA PET approved; PROfound approves olaparib for HRR-mutant mCRPC",
        "refs": [
          "ga68-psma-11",
          "propsma",
          "olaparib"
        ]
      },
      {
        "year": 2021,
        "title": "VISION: 177Lu-PSMA-617 improves survival; TheraP beats cabazitaxel on response",
        "refs": [
          "vision",
          "therap"
        ]
      },
      {
        "year": 2022,
        "title": "Pluvicto approved",
        "refs": [
          "pluvicto",
          "vision"
        ]
      },
      {
        "year": 2022,
        "title": "Pluvicto approved; ARASENS establishes triplet therapy",
        "refs": [
          "pluvicto"
        ]
      },
      {
        "year": 2023,
        "title": "PARP + ARPI combinations approved (TALAPRO-2, PROpel, MAGNITUDE); EMBARK for biochemical recurrence",
        "refs": [
          "embark"
        ]
      },
      {
        "year": 2024,
        "title": "SPLASH: second PSMA radioligand improves rPFS but not OS",
        "refs": [
          "splash",
          "lu177-psma-it"
        ]
      },
      {
        "year": 2025,
        "title": "ArteraAI Prostate: first predictive AI pathology test"
      },
      {
        "year": 2025,
        "title": "Pluvicto pre-chemotherapy (PSMAfore); ArteraAI Prostate FDA-authorised; PSMAddition positive; ECLIPSE positive; masofaniten discontinued",
        "refs": [
          "psmafore",
          "psmaddition",
          "eclipse-psma"
        ]
      },
      {
        "year": 2026,
        "title": "Pluvicto approved in metastatic hormone-sensitive disease (31 July); capivasertib + abiraterone approved for PTEN-deficient disease",
        "refs": [
          "psmaddition",
          "pluvicto"
        ]
      }
    ],
    "pipeline": [
      "ac225-psma",
      "aaa817",
      "jnj-87189401",
      "hrs-4357",
      "fpi-2265",
      "alphabreak",
      "lu177-psma-it",
      "eclipse-psma",
      "idea-psma-pet-guided-mdt",
      "idea-alpha-first-mhspc",
      "grpr"
    ],
    "openProblems": [
      "Overdiagnosis vs. underdiagnosis in screening.",
      "Neuroendocrine transformation.",
      "Ac-225 supply.",
      "Screening trade-off: PSA reduces mortality by ~20% but overdiagnoses; MRI-first and risk-adapted intervals are only partly adopted.",
      "Neuroendocrine / lineage-plastic transformation in ~15-20% of late mCRPC has no targeted therapy; DLL3 and B7-H3 agents are being borrowed from SCLC.",
      "AR-V7 and N-terminal-domain resistance: masofaniten failed; AR degraders remain preclinical/early.",
      "Radioligand sequencing and resistance: 10% PSMA-negative disease, heterogeneity, and no proven therapy after 177Lu failure outside trials; Ac-225 supply is the constraint.",
      "Overall survival has been hard to show for PSMA radioligands beyond VISION (SPLASH, PSMAfore, TheraP confounded by crossover).",
      "Immunotherapy: checkpoint inhibitors fail in unselected disease; engagers bring cytokine release and need outpatient models.",
      "Equity: Black men have ~70% higher incidence and double the mortality yet are under-enrolled in trials; earlier, risk-adapted screening is the lever.",
      "Bone health, cardiovascular risk, and cognitive effects of long-term ADT in men living a decade or more."
    ],
    "targets": [
      "psma",
      "parp",
      "b7h3",
      "dll3",
      "steap1",
      "klk2",
      "grpr"
    ],
    "technologies": [
      "psma-pet",
      "radioligand-therapy",
      "targeted-alpha-therapy"
    ],
    "pathways": [
      "prostate-cancer-signalling"
    ],
    "tags": [
      "gu",
      "spike"
    ],
    "drugs": [
      "samarium-153-lexidronam"
    ],
    "terms": [
      "biochemical-recurrence",
      "psa50",
      "theranostics",
      "oligometastatic",
      "crossover"
    ],
    "related": [
      "radiopharma-roadmap",
      "psma-pet-to-rlt",
      "beta-then-alpha",
      "src-urotoday"
    ],
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Prostate_cancer"
      }
    ],
    "companies": [
      "futurechem",
      "novartis",
      "bayer",
      "pfizer",
      "johnson-johnson",
      "astrazeneca",
      "lantheus",
      "telix",
      "curium"
    ],
    "subtypes": [
      "Localised: low / favourable-intermediate / unfavourable-intermediate / high risk (NCCN)",
      "Non-metastatic castration-resistant (nmCRPC)",
      "Metastatic hormone-sensitive (mHSPC; FDA 2026 term 'androgen pathway modulation-naive or -sensitive'), de novo vs recurrent, high vs low volume (CHAARTED)",
      "Metastatic castration-resistant (mCRPC)",
      "HRR-mutant (~20-25% of mCRPC; BRCA2 most actionable)",
      "PTEN-deficient (~25%)",
      "PSMA-low / heterogeneous (~10%)",
      "Treatment-emergent neuroendocrine prostate cancer (~15-20% of late mCRPC)",
      "Ductal and intraductal / cribriform variants (aggressive)"
    ],
    "institutions": [
      "royal-marsden",
      "peter-mac",
      "ucla-jonsson",
      "johns-hopkins"
    ]
  },
  {
    "id": "prostate-bcr",
    "related": [
      "prostate-high-risk",
      "prostate-nmcrpc",
      "prostate-mhspc"
    ],
    "kind": "indication",
    "name": "Biochemical recurrence of prostate cancer",
    "group": "genitourinary",
    "parent": "prostate",
    "asOf": "2026-09-17",
    "tags": [
      "subtype-page"
    ],
    "wikipedia": "https://en.wikipedia.org/wiki/Biochemical_recurrence",
    "keyPapers": [
      "paper-propsma-hofman-lancet-2020"
    ],
    "aka": [
      "Biochemically recurrent prostate cancer",
      "PSA recurrence",
      "Rising PSA after local therapy",
      "nmHSPC"
    ],
    "burden": "A rising PSA follows a quarter to a third of prostatectomies and radiotherapy courses; only a minority of these men develop metastases on scans within ten years, and the PSA doubling time tells the two apart.",
    "tldr": "Biochemical recurrence of prostate cancer is a rising PSA after surgery or radiotherapy with nothing yet visible on scans. Salvage radiotherapy can still cure it after surgery, and for a fast-doubling PSA the EMBARK trial showed that enzalutamide with or without hormone therapy delays spread.",
    "summary": "Biochemical recurrence is defined as a PSA of 0.2 ng/mL or more, confirmed, after radical prostatectomy, or a rise of 2 ng/mL above the nadir after radiotherapy (the Phoenix definition). It is found by routine PSA follow-up; PSMA PET now locates the recurrence in most men once PSA passes about 0.5 ng/mL, and often shows disease that conventional imaging misses. After prostatectomy, early salvage radiotherapy to the prostate bed, started before PSA reaches 0.5, cures many men, with short-term hormone therapy added for higher-risk features. After radiotherapy, local salvage by surgery, brachytherapy, cryotherapy or high-intensity focused ultrasound is possible for confirmed local recurrence. Men with a PSA doubling time under nine months are at high risk of metastasis: EMBARK randomised 1,068 such men and showed enzalutamide with leuprolide, or enzalutamide alone, cut metastasis or death by about half compared with leuprolide alone, and the FDA approved enzalutamide for this setting in 2023. Slowly rising PSA can be watched, and PSMA PET-directed stereotactic radiotherapy to a few metastases is under study.",
    "subtypes": [
      "Biochemical recurrence after prostatectomy (PSA 0.2 or more)",
      "Biochemical recurrence after radiotherapy (nadir plus 2)",
      "High-risk biochemical recurrence (PSA doubling time under 9 months, non-metastatic hormone-sensitive)",
      "PSMA PET-detected oligorecurrence"
    ],
    "biomarkers": [
      "PSA and PSA doubling time",
      "PSMA PET (positive in most men above 0.5 ng/mL)",
      "Decipher on the prostatectomy specimen",
      "Interval from local therapy to recurrence"
    ],
    "terms": [
      "psa-kinetics"
    ],
    "standardOfCare": [
      {
        "setting": "After prostatectomy",
        "approach": "Early salvage radiotherapy to the prostate bed, with or without pelvic nodes and four to six months of androgen deprivation for adverse features; observation for slow doubling times.",
        "guideline": {
          "version": "NCCN Guidelines: Prostate Cancer",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1459"
        }
      },
      {
        "setting": "After radiotherapy, local recurrence",
        "approach": "Salvage prostatectomy, brachytherapy, cryotherapy or high-intensity focused ultrasound in fit men with biopsy-proven local disease and no metastases on PSMA PET.",
        "refs": [
          "psma-pet"
        ],
        "guideline": {
          "version": "NCCN Guidelines: Prostate Cancer",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1459"
        }
      },
      {
        "setting": "High-risk biochemical recurrence (doubling time under 9 months)",
        "approach": "Enzalutamide with leuprolide, or enzalutamide alone (EMBARK); PSMA PET before starting; intermittent therapy with treatment suspension when PSA becomes undetectable.",
        "refs": [
          "enzalutamide",
          "embark",
          "psma-pet"
        ],
        "guideline": {
          "version": "NCCN Guidelines: Prostate Cancer",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1459"
        }
      },
      {
        "setting": "PSMA PET-detected oligorecurrence",
        "approach": "Stereotactic radiotherapy to the visible metastases, usually within trials or with hormone therapy; the survival benefit is unproven.",
        "refs": [
          "oligometastatic",
          "idea-psma-pet-guided-mdt"
        ]
      }
    ],
    "stateOfArt": [
      "PSMA PET has turned biochemical recurrence from an invisible number into a map, though it also finds disease the trials never saw.",
      "EMBARK is the first trial to show that treating a fast-rising PSA with an androgen receptor inhibitor delays metastasis.",
      "Intermittent therapy with a treatment holiday is built into the approved EMBARK regimen."
    ],
    "history": [
      {
        "year": 1997,
        "title": "ASTRO consensus defines PSA failure after radiotherapy"
      },
      {
        "year": 2005,
        "title": "Phoenix definition: nadir plus 2 ng/mL"
      },
      {
        "year": 2017,
        "title": "RTOG 9601: bicalutamide with salvage radiotherapy improves survival"
      },
      {
        "year": 2020,
        "title": "PSMA PET approved for recurrence",
        "refs": [
          "psma-pet"
        ]
      },
      {
        "year": 2023,
        "title": "EMBARK: enzalutamide delays metastasis in high-risk biochemical recurrence",
        "refs": [
          "embark",
          "enzalutamide"
        ]
      }
    ],
    "pipeline": [
      "psma-pet",
      "enzalutamide",
      "idea-psma-pet-guided-mdt"
    ],
    "openProblems": [
      "Whether treating PSMA PET-detected metastases early lengthens life or only lowers PSA.",
      "How to spare men with slow doubling times from years of hormone therapy.",
      "The trials that defined recurrence used conventional imaging; PSMA PET restages many of these men as metastatic."
    ],
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Biochemical_recurrence"
      },
      {
        "label": "NCCN Guidelines: Prostate Cancer",
        "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1459"
      }
    ]
  },
  {
    "id": "prostate-high-risk",
    "related": [
      "prostate-bcr",
      "prostate-mhspc"
    ],
    "kind": "indication",
    "name": "Localised prostate cancer, high and very high risk",
    "group": "genitourinary",
    "parent": "prostate",
    "asOf": "2026-09-17",
    "tags": [
      "subtype-page"
    ],
    "wikipedia": "https://en.wikipedia.org/wiki/Prostate_cancer_staging",
    "keyPapers": [
      "paper-propsma-hofman-lancet-2020"
    ],
    "aka": [
      "High-risk prostate cancer",
      "Very high risk prostate cancer",
      "Locally advanced prostate cancer",
      "Grade Group 4 and 5 prostate cancer",
      "Non-metastatic high-risk prostate cancer"
    ],
    "burden": "About one in five newly diagnosed localised cancers and most of the deaths from disease found before it spreads; ten-year cancer-specific survival is around 85 percent with combined treatment.",
    "tldr": "High-risk prostate cancer has Grade Group 4 or 5 disease, a PSA above 20 or a tumour growing beyond the gland. It is still curable, but needs radiotherapy with two to three years of hormone therapy, or surgery followed by radiotherapy, and adding abiraterone to hormone therapy now lengthens life in the highest-risk men.",
    "summary": "High-risk localised prostate cancer is defined by the NCCN as any of clinical stage T3a, Grade Group 4 or 5, or PSA above 20 ng/mL; very high risk adds T3b to T4 disease, primary Gleason pattern 5, more than four cores of Grade Group 4 or 5, or two or more high-risk features. It is found by PSA and biopsy and staged with PSMA PET, which proPSMA showed is far more accurate than CT and bone scan. Standard treatment is external beam radiotherapy to the prostate and pelvic nodes with 18 to 36 months of androgen deprivation, often with a brachytherapy boost, or radical prostatectomy with extended node dissection followed by radiotherapy when the pathology warrants it. STAMPEDE showed that adding two years of abiraterone to androgen deprivation and radiotherapy in men with very high risk or node-positive disease cuts metastasis and death, and this is now guideline care for the highest-risk group. Salvage options after failure are covered under biochemical recurrence.",
    "subtypes": [
      "High risk (T3a, or Grade Group 4 or 5, or PSA above 20)",
      "Very high risk (T3b to T4, primary pattern 5, more than 4 high-grade cores, or 2 or more high-risk features)",
      "Locally advanced adenocarcinoma with seminal vesicle invasion (T3b)",
      "Clinically node-positive (N1) non-metastatic disease"
    ],
    "biomarkers": [
      "Gleason Grade Group 4 or 5",
      "PSA above 20 ng/mL",
      "PSMA PET staging",
      "Germline and tumour HRR testing (BRCA2 in particular)",
      "Decipher genomic classifier"
    ],
    "standardOfCare": [
      {
        "setting": "High risk",
        "approach": "External beam radiotherapy to prostate and pelvic nodes with 18 to 36 months of androgen deprivation, with or without brachytherapy boost; or radical prostatectomy with extended lymph node dissection.",
        "guideline": {
          "version": "NCCN Guidelines: Prostate Cancer",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1459"
        }
      },
      {
        "setting": "Very high risk and node-positive",
        "approach": "Radiotherapy plus androgen deprivation with two years of abiraterone (STAMPEDE); PSMA PET staging before treatment.",
        "refs": [
          "abiraterone",
          "stampede",
          "psma-pet",
          "propsma"
        ],
        "guideline": {
          "version": "NCCN Guidelines: Prostate Cancer",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1459"
        }
      },
      {
        "setting": "After prostatectomy with adverse pathology",
        "approach": "Adjuvant or early salvage radiotherapy guided by PSA, with hormone therapy for higher-risk features.",
        "refs": [
          "biochemical-recurrence"
        ]
      }
    ],
    "stateOfArt": [
      "PSMA PET has replaced bone scan and CT for staging, reclassifying about a quarter of men.",
      "Abiraterone with radiotherapy and hormone therapy is the first drug to improve survival in high-risk non-metastatic disease.",
      "Genomic classifiers and AI pathology are being tested to choose hormone therapy duration."
    ],
    "history": [
      {
        "year": 1997,
        "title": "EORTC 22863: adding three years of hormone therapy to radiotherapy improves survival"
      },
      {
        "year": 2009,
        "title": "Long-course beats short-course androgen deprivation with radiotherapy in high-risk disease"
      },
      {
        "year": 2020,
        "title": "proPSMA: PSMA PET more accurate than conventional staging",
        "refs": [
          "propsma",
          "psma-pet"
        ]
      },
      {
        "year": 2022,
        "title": "STAMPEDE: abiraterone improves survival in high-risk non-metastatic disease",
        "refs": [
          "stampede",
          "abiraterone"
        ]
      }
    ],
    "pipeline": [
      "psma-pet",
      "abiraterone"
    ],
    "openProblems": [
      "How long hormone therapy should last when abiraterone is added.",
      "Whether PSMA PET-detected nodes should change treatment when the trials were staged conventionally.",
      "Which men with high-risk disease are better served by surgery than radiotherapy."
    ],
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Prostate_cancer_staging"
      },
      {
        "label": "NCCN Guidelines: Prostate Cancer",
        "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1459"
      }
    ]
  },
  {
    "id": "prostate-mcrpc",
    "related": [
      "prostate-mhspc",
      "prostate-nmcrpc",
      "prostate-nepc",
      "prostate-bcr"
    ],
    "kind": "indication",
    "name": "Metastatic castration-resistant prostate cancer",
    "group": "genitourinary",
    "parent": "prostate",
    "asOf": "2026-09-17",
    "tags": [
      "subtype-page"
    ],
    "wikipedia": "https://en.wikipedia.org/wiki/Castration-resistant_prostate_cancer",
    "keyPapers": [
      "paper-vision-nejm-2021",
      "paper-alsympca-radium-223-nejm-2013"
    ],
    "aka": [
      "mCRPC",
      "Metastatic CRPC",
      "Castration-resistant metastatic prostate cancer",
      "Hormone-refractory prostate cancer (older term)"
    ],
    "burden": "The state in which nearly all prostate cancer deaths occur, about 400,000 a year worldwide; median survival from first treatment is now around three years, longer for men who have not had an androgen receptor inhibitor.",
    "tldr": "Metastatic castration-resistant prostate cancer is disease that grows despite castrate testosterone. Sequenced treatments now include androgen receptor inhibitors, docetaxel and cabazitaxel, PARP inhibitors for men with BRCA-type mutations, the radioligand 177Lu-PSMA-617 and radium-223 for bone-predominant disease.",
    "summary": "Metastatic castration-resistant prostate cancer is defined by progression on scans or PSA, or new metastases, with castrate testosterone. Nearly every man reaches it from hormone-sensitive disease, and the treatment chosen depends on what he has already had. Men who have not had an androgen receptor pathway inhibitor receive abiraterone or enzalutamide; PROpel, TALAPRO-2 and MAGNITUDE showed that adding olaparib, talazoparib or niraparib helps men with BRCA and other homologous recombination repair mutations, and PROfound showed olaparib alone beats a second hormonal agent in these men. Docetaxel and then cabazitaxel remain the chemotherapies. VISION established 177Lu-PSMA-617 after chemotherapy and PSMAfore moved it before, for PSMA PET-positive disease; 177Lu-PSMA-I&T (SPLASH, ECLIPSE) follows the same path. Radium-223 lengthens life in symptomatic bone-predominant disease without visceral metastases (ALSYMPCA), sipuleucel-T is still approved for minimally symptomatic disease, and pembrolizumab is used for the rare mismatch repair-deficient tumour. Tumour and germline testing for HRR genes and mismatch repair is standard. Actinium-225 PSMA agents, the STEAP1 T-cell engager xaluritamig and the EZH2 inhibitor mevrometostat are in phase 3.",
    "subtypes": [
      "mCRPC, androgen receptor pathway inhibitor-naive",
      "mCRPC after an androgen receptor pathway inhibitor, chemotherapy-naive",
      "mCRPC after taxane chemotherapy",
      "HRR-mutant mCRPC (BRCA1, BRCA2, ATM and others; PARP inhibitors)",
      "PSMA PET-positive mCRPC (radioligand therapy)",
      "Bone-predominant mCRPC without visceral metastases (radium-223)",
      "Mismatch repair-deficient mCRPC (pembrolizumab)"
    ],
    "biomarkers": [
      "Tumour and germline HRR genes (BRCA2 above all)",
      "PSMA PET uptake and FDG discordance",
      "Mismatch repair deficiency and tumour mutational burden",
      "PSA and alkaline phosphatase",
      "Circulating tumour DNA (AR amplification, BRCA2 reversion)",
      "AR-V7 in circulating tumour cells (research)"
    ],
    "standardOfCare": [
      {
        "setting": "First line, androgen receptor pathway inhibitor-naive",
        "approach": "Abiraterone or enzalutamide; add olaparib, talazoparib or niraparib for HRR-mutant, above all BRCA-mutant, disease (PROpel, TALAPRO-2, MAGNITUDE).",
        "refs": [
          "abiraterone",
          "enzalutamide",
          "olaparib"
        ],
        "guideline": {
          "version": "NCCN Guidelines: Prostate Cancer",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1459"
        }
      },
      {
        "setting": "After an androgen receptor pathway inhibitor",
        "approach": "Docetaxel; olaparib or rucaparib for BRCA-mutant disease (PROfound); 177Lu-PSMA-617 for PSMA-positive disease before chemotherapy (PSMAfore); pembrolizumab for mismatch repair-deficient tumours.",
        "refs": [
          "docetaxel",
          "olaparib",
          "pluvicto",
          "psmafore",
          "pembrolizumab"
        ],
        "guideline": {
          "version": "NCCN Guidelines: Prostate Cancer",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1459"
        }
      },
      {
        "setting": "After docetaxel",
        "approach": "177Lu-PSMA-617 (VISION), cabazitaxel, radium-223 for symptomatic bone-only disease (ALSYMPCA), or a PARP inhibitor if not yet used.",
        "refs": [
          "pluvicto",
          "vision",
          "cabazitaxel",
          "radium-223",
          "alsympca",
          "therap"
        ],
        "guideline": {
          "version": "NCCN Guidelines: Prostate Cancer",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1459"
        }
      },
      {
        "setting": "Bone health",
        "approach": "Denosumab or zoledronic acid to prevent skeletal events, with calcium and vitamin D; palliative radiotherapy to painful metastases.",
        "guideline": {
          "version": "NCCN Guidelines: Prostate Cancer",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1459"
        }
      },
      {
        "setting": "Phase 3 options",
        "approach": "Actinium-225 PSMA radioligands, the STEAP1 T-cell engager xaluritamig, the EZH2 inhibitor mevrometostat and 177Lu-PSMA-I&T within trials.",
        "refs": [
          "ac225-psma",
          "lu177-psma-it",
          "alphabreak",
          "splash",
          "eclipse-psma"
        ]
      }
    ],
    "stateOfArt": [
      "PSMA PET and 177Lu-PSMA-617 make prostate cancer the model for theranostics.",
      "PARP inhibitors gave prostate cancer its first genotype-directed treatment.",
      "Survival in this once six-month setting is now measured in years, built from sequenced drugs rather than one breakthrough."
    ],
    "history": [
      {
        "year": 2004,
        "title": "TAX 327: docetaxel is the first drug to lengthen life in castration-resistant disease",
        "refs": [
          "docetaxel"
        ]
      },
      {
        "year": 2010,
        "title": "Cabazitaxel and sipuleucel-T approved",
        "refs": [
          "cabazitaxel"
        ]
      },
      {
        "year": 2011,
        "title": "Abiraterone approved after docetaxel",
        "refs": [
          "abiraterone"
        ]
      },
      {
        "year": 2012,
        "title": "Enzalutamide approved",
        "refs": [
          "enzalutamide"
        ]
      },
      {
        "year": 2013,
        "title": "ALSYMPCA: radium-223, the first alpha emitter",
        "refs": [
          "alsympca",
          "radium-223"
        ]
      },
      {
        "year": 2020,
        "title": "PROfound: olaparib for HRR-mutant disease",
        "refs": [
          "olaparib"
        ]
      },
      {
        "year": 2021,
        "title": "VISION: 177Lu-PSMA-617 lengthens life",
        "refs": [
          "vision",
          "pluvicto"
        ]
      },
      {
        "year": 2022,
        "title": "PROpel and MAGNITUDE: PARP inhibitor plus abiraterone"
      },
      {
        "year": 2023,
        "title": "PSMAfore and TALAPRO-2",
        "refs": [
          "psmafore"
        ]
      },
      {
        "year": 2025,
        "title": "ECLIPSE: 177Lu-PSMA-I&T meets its endpoint",
        "refs": [
          "eclipse-psma"
        ]
      }
    ],
    "pipeline": [
      "ac225-psma",
      "lu177-psma-it",
      "fpi-2265"
    ],
    "openProblems": [
      "The best sequence of radioligand, PARP inhibitor and chemotherapy is untested.",
      "Actinium-225 supply and the lack of alpha-emitter dosimetry.",
      "Lineage plasticity to neuroendocrine disease under androgen receptor blockade.",
      "Resistance to 177Lu-PSMA-617 in PSMA-low or FDG-discordant disease."
    ],
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Castration-resistant_prostate_cancer"
      },
      {
        "label": "NCCN Guidelines: Prostate Cancer",
        "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1459"
      }
    ]
  },
  {
    "id": "prostate-mhspc",
    "related": [
      "prostate-mcrpc",
      "prostate-nmcrpc",
      "prostate-bcr",
      "prostate-high-risk"
    ],
    "kind": "indication",
    "name": "Metastatic hormone-sensitive prostate cancer",
    "group": "genitourinary",
    "parent": "prostate",
    "asOf": "2026-09-17",
    "tags": [
      "subtype-page"
    ],
    "wikipedia": "https://en.wikipedia.org/wiki/Prostate_cancer#Metastatic_disease",
    "aka": [
      "mHSPC",
      "Metastatic castration-sensitive prostate cancer",
      "mCSPC",
      "De novo metastatic prostate cancer",
      "Hormone-naive metastatic prostate cancer"
    ],
    "burden": "About one in twenty prostate cancers are metastatic at diagnosis in high-income countries and far more elsewhere; median survival has risen from under four years to more than five with combination therapy.",
    "tldr": "Metastatic hormone-sensitive prostate cancer is disease that has spread but still responds to lowering testosterone. Hormone therapy alone is no longer enough: adding an androgen receptor inhibitor, and docetaxel for high-volume disease, lengthens life by years.",
    "summary": "Metastatic hormone-sensitive prostate cancer has spread to bone, nodes or organs and has not yet been exposed to, or is still controlled by, androgen deprivation. It is found by PSA, biopsy and imaging, increasingly PSMA PET, and is split into high volume (four or more bone metastases with one outside the spine and pelvis, or visceral disease) and low volume, and into de novo and recurrent disease. Androgen deprivation with a GnRH agonist or antagonist is the backbone. CHAARTED and STAMPEDE showed docetaxel added to it lengthens life, mainly in high-volume disease; LATITUDE and STAMPEDE showed the same for abiraterone; TITAN (apalutamide), ENZAMET and ARCHES (enzalutamide) and ARANOTE (darolutamide) extended the benefit to every androgen receptor pathway inhibitor. PEACE-1 and ARASENS proved triplet therapy with docetaxel plus abiraterone or darolutamide for men fit for chemotherapy with high-volume disease. Radiotherapy to the prostate improves survival in low-volume disease (STAMPEDE). CAPItello-281 added capivasertib for PTEN-deficient tumours in 2026, and PSMAddition brought 177Lu-PSMA-617 into this setting the same year. Hormone therapy alone is now reserved for frail men.",
    "subtypes": [
      "De novo high-volume mHSPC (4 or more bone metastases or visceral disease)",
      "De novo low-volume mHSPC (oligometastatic, prostate radiotherapy helps)",
      "Recurrent metastatic hormone-sensitive disease after local therapy",
      "PTEN-deficient mHSPC (capivasertib)",
      "PSMA-positive mHSPC (177Lu-PSMA-617)"
    ],
    "biomarkers": [
      "Disease volume (CHAARTED criteria)",
      "De novo versus recurrent",
      "PTEN loss by immunohistochemistry",
      "PSMA PET positivity",
      "Germline and tumour HRR genes",
      "PSA fall to below 0.2 at seven months (prognostic)"
    ],
    "standardOfCare": [
      {
        "setting": "All patients, backbone",
        "approach": "Continuous androgen deprivation with a GnRH agonist, GnRH antagonist or orchiectomy; never alone in fit men.",
        "guideline": {
          "version": "NCCN Guidelines: Prostate Cancer",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1459"
        }
      },
      {
        "setting": "Doublet therapy",
        "approach": "Androgen deprivation plus abiraterone (LATITUDE, STAMPEDE), enzalutamide (ARCHES, ENZAMET), apalutamide (TITAN) or darolutamide (ARANOTE).",
        "refs": [
          "abiraterone",
          "enzalutamide",
          "stampede"
        ],
        "guideline": {
          "version": "NCCN Guidelines: Prostate Cancer",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1459"
        }
      },
      {
        "setting": "Triplet therapy, high volume, fit for chemotherapy",
        "approach": "Androgen deprivation plus docetaxel plus darolutamide (ARASENS) or abiraterone (PEACE-1).",
        "refs": [
          "docetaxel",
          "abiraterone",
          "chaarted"
        ],
        "guideline": {
          "version": "NCCN Guidelines: Prostate Cancer",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1459"
        }
      },
      {
        "setting": "Low-volume disease",
        "approach": "Doublet therapy plus radiotherapy to the prostate (STAMPEDE); metastasis-directed radiotherapy within trials.",
        "refs": [
          "stampede",
          "oligometastatic"
        ],
        "guideline": {
          "version": "NCCN Guidelines: Prostate Cancer",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1459"
        }
      },
      {
        "setting": "Biomarker-selected additions (2026)",
        "approach": "Capivasertib with abiraterone for PTEN-deficient tumours (CAPItello-281); 177Lu-PSMA-617 with androgen receptor pathway inhibitor for PSMA-positive disease (PSMAddition).",
        "refs": [
          "pluvicto",
          "psmaddition"
        ]
      }
    ],
    "stateOfArt": [
      "Combination therapy from diagnosis has lifted median survival past five years, and past eight in low-volume disease.",
      "Triplet therapy is standard for high-volume disease in men fit for docetaxel.",
      "The first biomarker-selected drugs, capivasertib and 177Lu-PSMA-617, entered this setting in 2026."
    ],
    "history": [
      {
        "year": 1941,
        "title": "Huggins shows castration controls metastatic prostate cancer"
      },
      {
        "year": 2015,
        "title": "CHAARTED: docetaxel with hormone therapy lengthens life",
        "refs": [
          "chaarted",
          "docetaxel"
        ]
      },
      {
        "year": 2016,
        "title": "STAMPEDE confirms docetaxel at first diagnosis",
        "refs": [
          "stampede"
        ]
      },
      {
        "year": 2017,
        "title": "LATITUDE and STAMPEDE: abiraterone at first diagnosis",
        "refs": [
          "stampede",
          "abiraterone"
        ]
      },
      {
        "year": 2019,
        "title": "TITAN, ENZAMET and ARCHES: androgen receptor inhibitors for all",
        "refs": [
          "enzalutamide"
        ]
      },
      {
        "year": 2021,
        "title": "PEACE-1: European triplet therapy"
      },
      {
        "year": 2022,
        "title": "ARASENS: darolutamide triplet cuts death by a third"
      },
      {
        "year": 2026,
        "title": "Capivasertib for PTEN-deficient and 177Lu-PSMA-617 for PSMA-positive disease approved",
        "refs": [
          "psmaddition",
          "pluvicto"
        ]
      }
    ],
    "pipeline": [
      "pluvicto",
      "psmaddition",
      "psma-pet"
    ],
    "openProblems": [
      "Who needs triplet therapy and who is overtreated by it.",
      "Whether intermittent or de-escalated therapy is safe after a deep PSA response.",
      "PSMA PET restages many men the trials called non-metastatic, and the evidence has not caught up."
    ],
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Prostate_cancer"
      },
      {
        "label": "NCCN Guidelines: Prostate Cancer",
        "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1459"
      }
    ]
  },
  {
    "id": "prostate-nepc",
    "related": [
      "prostate-mcrpc",
      "prostate-mhspc",
      "prostate-nmcrpc"
    ],
    "kind": "indication",
    "name": "Neuroendocrine and small-cell prostate cancer",
    "group": "genitourinary",
    "parent": "prostate",
    "asOf": "2026-09-17",
    "tags": [
      "subtype-page"
    ],
    "wikipedia": "https://en.wikipedia.org/wiki/Prostate_cancer",
    "aka": [
      "NEPC",
      "Treatment-emergent neuroendocrine prostate cancer",
      "t-NEPC",
      "Small-cell carcinoma of the prostate",
      "Aggressive variant prostate cancer"
    ],
    "burden": "Pure small-cell prostate cancer is under 1 percent of new diagnoses, but neuroendocrine features emerge in 10 to 20 percent of men treated with potent androgen receptor inhibitors; median survival after diagnosis is about a year.",
    "tldr": "Neuroendocrine prostate cancer is a form that has stopped depending on the androgen receptor, either from the start or after years of hormone therapy. It no longer shows up on PSA, spreads to the liver and brain, and is treated with the platinum chemotherapy used for small-cell lung cancer.",
    "summary": "Neuroendocrine prostate cancer includes rare de novo small-cell carcinoma and, far more often, treatment-emergent disease that arises when adenocarcinoma under prolonged androgen receptor blockade switches lineage, typically with combined loss of RB1 and TP53, PTEN loss, MYCN or AURKA amplification and loss of androgen receptor and PSA expression. It is suspected when disease progresses with a low or flat PSA, visceral or lytic bone metastases, raised chromogranin, neuron-specific enolase or lactate dehydrogenase, or FDG-avid but PSMA-negative lesions, and confirmed by biopsy showing small-cell morphology or synaptophysin and chromogranin staining. There is no approved therapy specific to it: platinum with etoposide, or carboplatin with docetaxel for mixed histology, is standard, with response rates of about half but brief duration, and androgen deprivation is usually continued. Immunotherapy adds little outside mismatch repair deficiency. DLL3 is expressed in most neuroendocrine prostate cancers, and the DLL3 T-cell engager tarlatamab, approved for small-cell lung cancer, is in trials here; EZH2 inhibitors and aurora kinase inhibitors are being tested against the lineage switch itself.",
    "subtypes": [
      "De novo small-cell carcinoma of the prostate",
      "Treatment-emergent neuroendocrine prostate cancer (after androgen receptor pathway inhibitors)",
      "Mixed adenocarcinoma and neuroendocrine carcinoma",
      "Aggressive variant prostate cancer (clinical definition, low PSA, visceral spread)",
      "Large-cell neuroendocrine carcinoma of the prostate"
    ],
    "biomarkers": [
      "Synaptophysin, chromogranin and INSM1 staining",
      "Loss of androgen receptor and PSA expression",
      "Combined RB1 and TP53 loss",
      "MYCN and AURKA amplification",
      "DLL3 expression",
      "Serum chromogranin A, neuron-specific enolase and lactate dehydrogenase",
      "FDG PET-avid, PSMA PET-negative lesions"
    ],
    "standardOfCare": [
      {
        "setting": "Small-cell or predominantly neuroendocrine",
        "approach": "Cisplatin or carboplatin with etoposide, as for small-cell lung cancer; continue androgen deprivation; brain imaging.",
        "guideline": {
          "version": "NCCN Guidelines: Prostate Cancer",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1459"
        }
      },
      {
        "setting": "Mixed adenocarcinoma and neuroendocrine, or aggressive variant",
        "approach": "Carboplatin plus docetaxel or cabazitaxel, then platinum with etoposide; clinical trial enrolment preferred.",
        "refs": [
          "docetaxel",
          "cabazitaxel"
        ],
        "guideline": {
          "version": "NCCN Guidelines: Prostate Cancer",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1459"
        }
      },
      {
        "setting": "Recognition and biopsy",
        "approach": "Biopsy any progression with low PSA, visceral metastases or PSMA-negative FDG-avid lesions; test for mismatch repair deficiency (pembrolizumab) and HRR genes.",
        "refs": [
          "psma-pet",
          "pet",
          "pembrolizumab"
        ]
      },
      {
        "setting": "Trials",
        "approach": "DLL3 T-cell engagers (tarlatamab), EZH2 inhibitors and aurora kinase inhibitors against the lineage switch; lurbinectedin borrowed from small-cell lung cancer.",
        "refs": [
          "dll3"
        ]
      }
    ],
    "stateOfArt": [
      "Sequencing has shown that neuroendocrine prostate cancer evolves from the same clone as the adenocarcinoma rather than arising anew.",
      "DLL3 gives the disease its first surface target, borrowed from small-cell lung cancer.",
      "Lineage plasticity is now studied as a drug target in its own right."
    ],
    "history": [
      {
        "year": 1977,
        "title": "Small-cell carcinoma of the prostate first described",
        "refs": [
          "sclc"
        ]
      },
      {
        "year": 2011,
        "title": "Beltran finds AURKA and MYCN amplification in neuroendocrine prostate cancer"
      },
      {
        "year": 2016,
        "title": "Divergent clonal evolution from adenocarcinoma shown by sequencing"
      },
      {
        "year": 2017,
        "title": "RB1 and TP53 loss drive lineage plasticity in models"
      },
      {
        "year": 2018,
        "title": "Aggarwal: 17 percent of men on potent hormone therapy have neuroendocrine features at biopsy"
      },
      {
        "year": 2024,
        "title": "Tarlatamab shows activity against DLL3-positive neuroendocrine prostate cancer",
        "refs": [
          "dll3"
        ]
      }
    ],
    "openProblems": [
      "No approved therapy specific to the disease; every regimen is borrowed from lung cancer.",
      "No blood test reliably detects the lineage switch before it shows on scans.",
      "Whether androgen receptor blockade should be de-escalated to slow the switch."
    ],
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Prostate_cancer"
      },
      {
        "label": "NCCN Guidelines: Prostate Cancer",
        "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1459"
      }
    ]
  },
  {
    "id": "prostate-nmcrpc",
    "related": [
      "prostate-bcr",
      "prostate-mhspc",
      "prostate-mcrpc"
    ],
    "kind": "indication",
    "trials": [
      "prosper"
    ],
    "name": "Non-metastatic castration-resistant prostate cancer",
    "group": "genitourinary",
    "parent": "prostate",
    "asOf": "2026-09-17",
    "tags": [
      "subtype-page"
    ],
    "wikipedia": "https://en.wikipedia.org/wiki/Castration-resistant_prostate_cancer",
    "aka": [
      "nmCRPC",
      "M0 CRPC",
      "Non-metastatic CRPC",
      "Rising PSA on hormone therapy without metastases"
    ],
    "burden": "A shrinking group, because PSMA PET reveals metastases in most men once called non-metastatic; about a third with a PSA doubling time under ten months developed visible metastases within two years on hormone therapy alone.",
    "tldr": "Non-metastatic castration-resistant prostate cancer is a PSA that keeps rising on hormone therapy while scans still show nothing. Three androgen receptor blockers, apalutamide, enzalutamide and darolutamide, each delay metastasis by about two years and lengthen life, and darolutamide is the gentlest.",
    "summary": "Non-metastatic castration-resistant prostate cancer is defined by a rising PSA with castrate testosterone (below 50 ng/dL) and no metastases on CT and bone scan. It is found in men on long-term androgen deprivation, and the risk is judged by PSA doubling time: under ten months marks high risk. Three trials in men with a doubling time of ten months or less changed care in 2018 and 2019: SPARTAN (apalutamide), PROSPER (enzalutamide) and ARAMIS (darolutamide) each roughly doubled metastasis-free survival, from about 16 to 18 months to 36 to 40 months, and each later showed longer overall survival, so all three are approved. Darolutamide crosses into the brain least and causes the fewest falls, fractures and cognitive effects. Men with a slow doubling time can be observed on hormone therapy. PSMA PET now finds metastases in most of these men, which moves them into metastatic castration-resistant disease on paper without changing their biology, so guidelines still treat by the conventional imaging that the trials used.",
    "subtypes": [
      "High-risk nmCRPC (PSA doubling time 10 months or less)",
      "Low-risk nmCRPC (slow PSA doubling time, observation)",
      "PSMA PET-positive, conventional imaging-negative castration-resistant disease"
    ],
    "biomarkers": [
      "Castrate testosterone (below 50 ng/dL)",
      "PSA doubling time",
      "Conventional imaging negative",
      "PSMA PET (often positive)",
      "AR alterations and AR-V7 (research)"
    ],
    "terms": [
      "psa-kinetics"
    ],
    "standardOfCare": [
      {
        "setting": "High-risk nmCRPC (doubling time 10 months or less)",
        "approach": "Continue androgen deprivation and add apalutamide (SPARTAN), enzalutamide (PROSPER) or darolutamide (ARAMIS); darolutamide preferred when falls or cognition are concerns.",
        "refs": [
          "enzalutamide"
        ],
        "guideline": {
          "version": "NCCN Guidelines: Prostate Cancer",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1459"
        }
      },
      {
        "setting": "Low-risk nmCRPC",
        "approach": "Observation on androgen deprivation with PSA monitoring and imaging; first-generation antiandrogen or its withdrawal as older options.",
        "guideline": {
          "version": "NCCN Guidelines: Prostate Cancer",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1459"
        }
      },
      {
        "setting": "Staging",
        "approach": "PSMA PET locates disease in most men; conventional imaging still defines the setting the trials studied.",
        "refs": [
          "psma-pet",
          "mcrpc-mhspc"
        ]
      }
    ],
    "stateOfArt": [
      "Three androgen receptor inhibitors, each proven in its own trial, give men a choice weighted by side effects.",
      "Metastasis-free survival was accepted by regulators as a surrogate endpoint on the strength of these trials.",
      "PSMA PET is dissolving the category from the inside."
    ],
    "history": [
      {
        "year": 2012,
        "title": "Metastasis-free survival validated as a surrogate for survival in prostate cancer"
      },
      {
        "year": 2018,
        "title": "SPARTAN and PROSPER: apalutamide and enzalutamide approved for nmCRPC",
        "refs": [
          "enzalutamide"
        ]
      },
      {
        "year": 2019,
        "title": "ARAMIS: darolutamide approved for nmCRPC"
      },
      {
        "year": 2020,
        "title": "All three trials report longer overall survival",
        "refs": [
          "enzalutamide"
        ]
      }
    ],
    "pipeline": [
      "psma-pet"
    ],
    "openProblems": [
      "Whether PSMA PET-detected metastases should be treated locally or the man treated as metastatic.",
      "Cost and side effects of years of androgen receptor inhibition in men without symptoms.",
      "No trial compares the three drugs head to head."
    ],
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Castration-resistant_prostate_cancer"
      },
      {
        "label": "NCCN Guidelines: Prostate Cancer",
        "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1459"
      }
    ]
  },
  {
    "kind": "indication",
    "asOf": "2026-09-07",
    "id": "rcc",
    "companies": [
      "bms",
      "merck",
      "pfizer",
      "novartis",
      "telix"
    ],
    "trials": [
      "nct07197580"
    ],
    "name": "Renal cell carcinoma",
    "aka": [
      "RCC"
    ],
    "group": "genitourinary",
    "wikipedia": "https://en.wikipedia.org/wiki/Renal_cell_carcinoma",
    "burden": "Renal cell carcinoma causes about 430,000 cases a year worldwide, with incidence rising as imaging finds more small tumours, many of which need no treatment; ~20-30% are metastatic at diagnosis, and immunotherapy doublets now give durable remissions in about a fifth of those patients. ~180,000 deaths a year; registry five-year survival for metastatic disease is ~15% overall, higher with modern IO regimens.",
    "prognosis": {
      "text": "In the United States, 79.2% of people diagnosed with kidney or renal pelvis cancer in 2016-2022 were alive five years later, relative to people of the same age without the disease. Two thirds (66%) are found while confined to the kidney, often incidentally on a scan for something else, with five-year relative survival of 93.6%; it is 77.6% for regional disease (17% of cases) and 20.3% for distant disease (15% of cases). The distant-stage figure only partly reflects the immunotherapy combinations that became first-line treatment during this period.",
      "sources": [
        {
          "label": "SEER Cancer Stat Facts: Kidney and Renal Pelvis Cancer",
          "url": "https://seer.cancer.gov/statfacts/html/kidrp.html"
        }
      ]
    },
    "tldr": "Kidney cancer is where anti-angiogenic drugs and immunotherapy came together, and where a Nobel-winning oxygen-sensing pathway yielded a drug, belzutifan.",
    "summary": "Renal cell carcinoma is a cancer of the kidney's tubules, increasingly found by chance on scans done for other reasons. Three quarters are clear-cell tumours defined by loss of the VHL gene, which leaves the oxygen-sensing HIF-2α switch permanently on and makes the tumour intensely vascular and immune-infiltrated. That biology explains the whole modern treatment story: anti-VEGF pills (2005-2012), immunotherapy (2015 onward), their combination (2018 onward), and the first HIF-2α inhibitor, belzutifan (2021).\n\nFor metastatic disease, four immunotherapy-based first-line regimens have survival benefit: nivolumab-ipilimumab (CheckMate 214, durable remissions in a fifth of intermediate/poor-risk patients, still visible at eight years) and three IO-TKI doublets (pembrolizumab-axitinib, nivolumab-cabozantinib, lenvatinib-pembrolizumab). Attempts to do better in first line with triplets failed on survival (COSMIC-313) or fell short (LITESPARK-012), and two trials (CONTACT-03, TiNivo-2) showed that restarting immunotherapy after it fails does not help. After surgery, adjuvant pembrolizumab (KEYNOTE-564) was the first adjuvant immunotherapy in any solid tumour to improve overall survival, and in 2026 belzutifan plus pembrolizumab (LITESPARK-022) became the first adjuvant combination, though three other adjuvant immunotherapy trials were negative.\n\nWhat comes next: selecting who needs adjuvant therapy (ctDNA is weak in RCC; CAIX PET and gene signatures are candidates); CAIX theranostics with radiolabelled girentuximab; zanzalintinib and next-generation TKIs; HIF-2α combinations in the right setting; CD70 and CAIX cell therapies; treatment-free survival as an endpoint; and better management of the small renal masses that make up an increasing share of diagnoses, many of which need no treatment at all. Non-clear-cell histologies (papillary, chromophobe, translocation) remain under-served.",
    "biomarkers": [
      "Clear-cell vs non-clear-cell histology",
      "VHL",
      "IMDC risk",
      "CAIX (imaging, 89Zr-girentuximab)",
      "IMDC risk group (six clinical factors)",
      "Histology and sarcomatoid features",
      "VHL / HIF-2α axis (belzutifan)",
      "PD-L1 (not used for selection)",
      "CAIX (imaging; theranostic target)",
      "CD70 (CAR-T target)",
      "MET (papillary type 1)",
      "Gene-expression signatures (angiogenesis vs T-effector; research)",
      "ctDNA (low shedding; research)"
    ],
    "standardOfCare": [
      {
        "setting": "Localised",
        "approach": "Partial/radical nephrectomy or ablation; adjuvant pembrolizumab ± belzutifan for high risk.",
        "refs": [
          "pembrolizumab"
        ],
        "guideline": {
          "version": "NCCN Guidelines: Kidney Cancer",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1440"
        }
      },
      {
        "setting": "Metastatic",
        "approach": "IO-TKI or IO-IO doublet; belzutifan, cabozantinib, lenvatinib-everolimus later.",
        "refs": [
          "pembrolizumab"
        ],
        "guideline": {
          "version": "NCCN Guidelines: Kidney Cancer",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1440"
        }
      },
      {
        "setting": "Small renal mass (<4 cm)",
        "approach": "Active surveillance, partial nephrectomy (usually robotic), or thermal ablation depending on growth, comorbidity, and biopsy; renal mass biopsy increasingly used.",
        "guideline": {
          "nccn": "2A",
          "version": "NCCN Kidney v3.2026"
        }
      },
      {
        "setting": "Localised T1b-T3",
        "approach": "Partial or radical nephrectomy; no adjuvant therapy for low/intermediate risk.",
        "guideline": {
          "nccn": "1 (surgery)"
        }
      },
      {
        "setting": "High-risk after nephrectomy (clear-cell)",
        "approach": "Adjuvant pembrolizumab for 1 year (KEYNOTE-564, OS benefit); pembrolizumab + belzutifan approved 2026 (LITESPARK-022); sunitinib adjuvant rarely used.",
        "refs": [
          "pembrolizumab"
        ],
        "guideline": {
          "nccn": "1 (pembrolizumab)",
          "esmoMcbs": "A"
        }
      },
      {
        "setting": "Metastatic, intermediate/poor risk, first line",
        "approach": "Nivolumab + ipilimumab, or an IO-TKI doublet (pembrolizumab + axitinib, nivolumab + cabozantinib, lenvatinib + pembrolizumab); cytoreductive nephrectomy deferred or omitted (CARMENA) except in selected cases.",
        "refs": [
          "pembrolizumab",
          "cabozantinib"
        ],
        "guideline": {
          "nccn": "1 (preferred: all four regimens)",
          "esmoMcbs": "4"
        }
      },
      {
        "setting": "Metastatic, favourable risk, first line",
        "approach": "IO-TKI doublet (PFS benefit; OS benefit unproven in this group) or single-agent TKI (sunitinib, pazopanib) with deferred IO; active surveillance for indolent low-volume disease.",
        "refs": [
          "pembrolizumab",
          "cabozantinib",
          "sunitinib"
        ],
        "guideline": {
          "nccn": "1 (IO-TKI); 2A (TKI alone)"
        }
      },
      {
        "setting": "Second line after IO-based therapy",
        "approach": "Single-agent TKI (cabozantinib, axitinib, lenvatinib + everolimus, tivozanib); belzutifan after both IO and VEGF-TKI (LITESPARK-005). Do not rechallenge PD-1 (CONTACT-03, TiNivo-2).",
        "refs": [
          "cabozantinib",
          "everolimus"
        ],
        "guideline": {
          "nccn": "1 (cabozantinib, belzutifan)"
        }
      },
      {
        "setting": "Oligometastatic / oligoprogressive disease",
        "approach": "Metastasectomy or SBRT to limited sites with continuation of systemic therapy or observation.",
        "guideline": {
          "nccn": "2A"
        }
      },
      {
        "setting": "Non-clear-cell RCC",
        "approach": "Cabozantinib (PAPMET), lenvatinib + pembrolizumab (KEYNOTE-B61), or nivolumab + cabozantinib; MET inhibitors for MET-driven papillary; trials preferred.",
        "refs": [
          "cabozantinib",
          "pembrolizumab"
        ],
        "guideline": {
          "nccn": "2A"
        }
      },
      {
        "setting": "VHL disease",
        "approach": "Belzutifan for VHL-associated RCC, CNS haemangioblastoma, and pNET not requiring immediate surgery (LITESPARK-004).",
        "guideline": {
          "nccn": "1"
        }
      }
    ],
    "stateOfArt": [
      "Adjuvant immunotherapy with OS benefit.",
      "HIF-2α inhibition.",
      "Four immunotherapy-based first-line regimens with survival benefit; durable remissions off treatment in ~20% with nivolumab-ipilimumab at 8 years.",
      "Adjuvant pembrolizumab improves overall survival (KEYNOTE-564); pembrolizumab + belzutifan approved as adjuvant combination (2026).",
      "Belzutifan validates HIF-2α as a target in VHL disease and pretreated RCC.",
      "Two negative rechallenge trials (CONTACT-03, TiNivo-2) and two failed first-line intensification trials (COSMIC-313, LITESPARK-012) have sharpened the algorithm rather than widened it.",
      "Active surveillance and nephron-sparing approaches are standard for small renal masses.",
      "CAIX PET (ZIRCON) offers non-invasive diagnosis of clear-cell RCC; approval delayed by a 2025 CRL."
    ],
    "history": [
      {
        "year": 1992,
        "title": "High-dose IL-2 approved"
      },
      {
        "year": 1992,
        "title": "High-dose IL-2 approved: first immunotherapy for RCC, with rare cures"
      },
      {
        "year": 1993,
        "title": "VHL gene identified; the molecular basis of clear-cell RCC"
      },
      {
        "year": 2001,
        "title": "Cytoreductive nephrectomy improves survival with interferon (SWOG 8949)"
      },
      {
        "year": 2005,
        "title": "Sorafenib/sunitinib: VEGF era"
      },
      {
        "year": 2005,
        "title": "Sorafenib approved: first VEGF-pathway TKI in RCC"
      },
      {
        "year": 2006,
        "title": "Sunitinib approved; replaces interferon",
        "refs": [
          "sunitinib"
        ]
      },
      {
        "year": 2009,
        "title": "Everolimus approved second line (RECORD-1)",
        "refs": [
          "everolimus"
        ]
      },
      {
        "year": 2012,
        "title": "Axitinib approved (AXIS)"
      },
      {
        "year": 2015,
        "title": "Nivolumab beats everolimus (CheckMate 025): immunotherapy returns to RCC"
      },
      {
        "year": 2016,
        "title": "Cabozantinib approved (METEOR)",
        "refs": [
          "cabozantinib"
        ]
      },
      {
        "year": 2018,
        "title": "Nivolumab-ipilimumab first line"
      },
      {
        "year": 2018,
        "title": "Nivolumab-ipilimumab first line (CheckMate 214); CARMENA questions cytoreductive nephrectomy"
      },
      {
        "year": 2019,
        "title": "Pembrolizumab-axitinib and avelumab-axitinib: IO-TKI era begins"
      },
      {
        "year": 2021,
        "title": "Belzutifan approved"
      },
      {
        "year": 2021,
        "title": "Nivolumab-cabozantinib, lenvatinib-pembrolizumab, adjuvant pembrolizumab, belzutifan (VHL), tivozanib approved"
      },
      {
        "year": 2023,
        "title": "COSMIC-313 triplet fails on OS; CONTACT-03 closes IO rechallenge; belzutifan approved after IO/TKI (LITESPARK-005); ZIRCON validates CAIX PET",
        "refs": [
          "caix-pet"
        ]
      },
      {
        "year": 2024,
        "title": "KEYNOTE-564 shows OS benefit; CheckMate 214 8-year data; TiNivo-2 negative"
      },
      {
        "year": 2026,
        "title": "LITESPARK-022 positive and approved (adjuvant belzutifan + pembrolizumab); LITESPARK-012 first-line triplet falls short"
      }
    ],
    "pipeline": [
      "caix-pet",
      "idea-caix-theranostics",
      "radioimmunotherapy"
    ],
    "openProblems": [
      "Non-clear-cell histologies understudied.",
      "No validated predictive biomarker for IO.",
      "No predictive biomarker to choose between IO-IO and IO-TKI, or to identify the 20% who achieve durable remission.",
      "Adjuvant therapy treats many who would never relapse; ctDNA shedding is too low for standard MRD approaches.",
      "Favourable-risk disease has no proven OS benefit from any first-line combination.",
      "Non-clear-cell histologies lack dedicated phase 3 evidence.",
      "First-line intensification (triplets) has failed twice; the next step in first line is unclear.",
      "Treatment-free survival and de-escalation after deep response are unstudied prospectively.",
      "Toxicity and dose reductions with lenvatinib-pembrolizumab limit real-world durability.",
      "Small renal mass overtreatment and the absence of a reliable non-invasive diagnostic (CAIX PET awaits approval)."
    ],
    "technologies": [
      "caix-pet",
      "radioimmunotherapy"
    ],
    "pathways": [
      "hif-vhl"
    ],
    "tags": [
      "gu"
    ],
    "terms": [
      "oligometastatic"
    ],
    "related": [
      "src-urotoday"
    ],
    "subtypes": [
      "Clear-cell (~75%; VHL loss, HIF-2α driven)",
      "Papillary type 1 (MET) and type 2 (FH, others)",
      "Chromophobe",
      "Translocation (TFE3/TFEB)",
      "Collecting duct and medullary (SMARCB1)",
      "Sarcomatoid differentiation (any histology, ~10%)",
      "Hereditary syndromes: VHL, HLRCC (FH), BHD (FLCN), HPRC (MET)"
    ],
    "institutions": [
      "mskcc",
      "md-anderson",
      "dana-farber"
    ],
    "links": [
      {
        "label": "NCI PDQ: renal cell cancer treatment",
        "url": "https://www.cancer.gov/types/kidney/hp/kidney-treatment-pdq"
      },
      {
        "label": "CheckMate 214 8-year follow-up",
        "url": "https://www.annalsofoncology.org/article/S0923-7534(24)01516-3/fulltext"
      }
    ]
  },
  {
    "kind": "indication",
    "asOf": "2026-09-07",
    "id": "sclc",
    "companies": [
      "astrazeneca",
      "merck",
      "bms"
    ],
    "name": "Small-cell lung cancer",
    "group": "lung",
    "wikipedia": "https://en.wikipedia.org/wiki/Small-cell_carcinoma",
    "burden": "Small-cell lung cancer makes up about 15% of lung cancers, roughly 250,000 cases a year worldwide, almost entirely in current or former smokers. Limited-stage disease is treated with curative intent and now with durvalumab consolidation. Median survival is nearly five years in limited-stage and about one year in extensive-stage disease.",
    "tldr": "A fast-growing lung cancer that responds to chemotherapy then relapses quickly. After 30 years without progress, T-cell engagers and ADCs are finally moving the needle.",
    "summary": "Small-cell lung cancer is a high-grade neuroendocrine carcinoma, almost always caused by smoking, defined by near-universal loss of TP53 and RB1 and by explosive growth. It presents as extensive-stage disease in two thirds of patients, responds to chemotherapy in most, and relapses in almost all. For three decades the treatment was platinum-etoposide, thoracic radiotherapy for limited-stage disease, prophylactic cranial irradiation, and topotecan at relapse.\n\nThe field moved in three steps. First-line chemo-immunotherapy (IMpower133 2018, CASPIAN 2019, ASTRUM-005 2022) added two to five months of median survival and a small tail of long-term survivors. Consolidation durvalumab after chemoradiotherapy for limited-stage disease (ADRIATIC, approved December 2024) was the first curative-intent advance in 30 years, lifting median survival to nearly five years. In relapsed disease, tarlatamab, the DLL3 T-cell engager, became the first drug to beat chemotherapy on overall survival (DeLLphi-304; full FDA approval November 2025), and lurbinectedin plus atezolizumab became the first approved first-line maintenance regimen (IMforte, October 2025).\n\nWhat is next: maintenance intensification with tarlatamab (DeLLphi-305), the B7-H3 ADC ifinatamab deruxtecan in second line (IDeate-Lung02), alpha-emitting SSTR radioligands (RYZ101), subtype-directed therapy (ASCL1, NEUROD1, POU2F3, inflamed), bispecific and trispecific DLL3 engagers, and the settled question of whether MRI surveillance can replace prophylactic cranial irradiation. Screening remains limited to low-dose CT in smokers, which detects few small-cell cancers early.",
    "biomarkers": [
      "DLL3 (not required for tarlatamab)",
      "B7-H3",
      "SCLC-A/N/P/I subtypes (research)",
      "Stage (limited vs extensive) is the dominant decision",
      "B7-H3 (I-DXd trials)",
      "SSTR2 (RYZ101)",
      "Transcription-factor subtype (ASCL1/NEUROD1/POU2F3/YAP1, research)",
      "PD-L1 and TMB (not predictive in SCLC)",
      "SLFN11 (chemotherapy/PARP sensitivity, research)",
      "ctDNA (research)"
    ],
    "standardOfCare": [
      {
        "setting": "Limited stage",
        "approach": "Chemoradiation → durvalumab; prophylactic cranial irradiation or MRI surveillance.",
        "refs": [
          "durvalumab"
        ],
        "guideline": {
          "version": "NCCN Guidelines: Small Cell Lung Cancer",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1462"
        }
      },
      {
        "setting": "Extensive stage",
        "approach": "Platinum-etoposide + atezolizumab/durvalumab; lurbinectedin + atezolizumab maintenance.",
        "refs": [
          "durvalumab"
        ],
        "guideline": {
          "version": "NCCN Guidelines: Small Cell Lung Cancer",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1462"
        }
      },
      {
        "setting": "Relapsed",
        "approach": "Tarlatamab (preferred), lurbinectedin, topotecan; I-DXd in trials.",
        "guideline": {
          "version": "NCCN Guidelines: Small Cell Lung Cancer",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1462"
        }
      },
      {
        "setting": "Screening and diagnosis",
        "approach": "Low-dose CT screening in heavy smokers finds some SCLC but stage shift is limited; diagnosis by bronchoscopic or CT-guided biopsy; staging with PET/CT and brain MRI.",
        "refs": [
          "ct",
          "pet-ct"
        ],
        "guideline": {
          "nccn": "SCLC guideline, staging workup",
          "version": "NCCN SCLC v2.2026"
        }
      },
      {
        "setting": "Very limited stage (T1-2 N0, ~5%)",
        "approach": "Lobectomy with mediastinal node dissection or SBRT, followed by adjuvant platinum-etoposide; PCI or MRI surveillance.",
        "guideline": {
          "nccn": "2A"
        }
      },
      {
        "setting": "Limited stage",
        "approach": "Concurrent cisplatin-etoposide with thoracic radiotherapy (45 Gy twice daily or 60-70 Gy once daily), then durvalumab consolidation up to 2 years (ADRIATIC); PCI or MRI surveillance.",
        "refs": [
          "durvalumab"
        ],
        "guideline": {
          "nccn": "1 (durvalumab consolidation, category 1)",
          "esmoMcbs": "A",
          "version": "NCCN SCLC v2.2026"
        }
      },
      {
        "setting": "Extensive stage, first line",
        "approach": "Carboplatin-etoposide plus atezolizumab or durvalumab (4 cycles), then maintenance immunotherapy; lurbinectedin added to atezolizumab maintenance since 2025 (IMforte). Serplulimab-chemotherapy where approved. Consolidative thoracic radiotherapy for residual thoracic disease in good responders.",
        "refs": [
          "durvalumab"
        ],
        "guideline": {
          "nccn": "1 (chemo-IO); 2A (lurbinectedin maintenance)",
          "esmoMcbs": "3"
        }
      },
      {
        "setting": "Relapsed, platinum-sensitive (≥90 days)",
        "approach": "Tarlatamab (preferred, OS benefit); platinum-etoposide rechallenge; lurbinectedin; topotecan.",
        "guideline": {
          "nccn": "1 (tarlatamab)",
          "esmoMcbs": "4"
        }
      },
      {
        "setting": "Relapsed, platinum-resistant (<90 days)",
        "approach": "Tarlatamab; lurbinectedin; topotecan; clinical trials (I-DXd, RYZ101, DLL3 bispecifics).",
        "refs": [
          "ryz101"
        ],
        "guideline": {
          "nccn": "1 (tarlatamab)"
        }
      },
      {
        "setting": "Brain metastases",
        "approach": "Whole-brain radiotherapy or, increasingly, stereotactic radiosurgery for limited numbers of lesions; PCI decisions individualised."
      },
      {
        "setting": "Transformed SCLC (from EGFR-mutant NSCLC)",
        "approach": "Platinum-etoposide, often with continued EGFR TKI; immunotherapy benefit uncertain; trials."
      }
    ],
    "stateOfArt": [
      "Tarlatamab: first OS improvement in relapsed SCLC in decades.",
      "Immunotherapy consolidation in limited stage.",
      "Limited-stage: chemoradiation followed by durvalumab consolidation (ADRIATIC), median OS approaching five years.",
      "Extensive-stage first line: chemo-immunotherapy, now with lurbinectedin-atezolizumab maintenance (IMforte, 2025).",
      "Relapse: tarlatamab (DLL3×CD3) improved OS over chemotherapy (DeLLphi-304) and received full approval in November 2025.",
      "B7-H3 ADC ifinatamab deruxtecan and alpha-emitting SSTR radioligand RYZ101 are in phase 3.",
      "MRI surveillance is displacing prophylactic cranial irradiation while the definitive trial (SWOG S1827) reads out.",
      "Molecular subtypes (A/N/P/I) explain heterogeneity and are moving toward prospective use."
    ],
    "history": [
      {
        "year": 1973,
        "title": "VA Lung Study Group defines limited vs extensive stage"
      },
      {
        "year": 1980,
        "title": "Platinum-etoposide becomes standard"
      },
      {
        "year": 1985,
        "title": "Platinum-etoposide becomes the standard regimen"
      },
      {
        "year": 1992,
        "title": "Meta-analysis: thoracic radiotherapy improves survival in limited-stage disease"
      },
      {
        "year": 1996,
        "title": "Topotecan approved for relapsed disease"
      },
      {
        "year": 1999,
        "title": "Prophylactic cranial irradiation improves survival in complete responders"
      },
      {
        "year": 1999,
        "title": "Twice-daily 45 Gy (Turrisi) sets the limited-stage radiotherapy standard"
      },
      {
        "year": 2017,
        "title": "CONVERT: once-daily 66 Gy not superior to twice-daily 45 Gy"
      },
      {
        "year": 2017,
        "title": "Japanese trial: PCI gives no survival benefit in extensive-stage disease with MRI surveillance"
      },
      {
        "year": 2018,
        "title": "IMpower133: first immunotherapy OS benefit"
      },
      {
        "year": 2018,
        "title": "IMpower133: first survival gain in decades with atezolizumab"
      },
      {
        "year": 2019,
        "title": "Rovalpituzumab tesirine (first DLL3 ADC) fails"
      },
      {
        "year": 2019,
        "title": "Rovalpituzumab tesirine (first DLL3 ADC) fails",
        "refs": [
          "dll3"
        ]
      },
      {
        "year": 2019,
        "title": "CASPIAN confirms chemo-immunotherapy with durvalumab",
        "refs": [
          "durvalumab"
        ]
      },
      {
        "year": 2020,
        "title": "Lurbinectedin accelerated approval in relapsed SCLC"
      },
      {
        "year": 2021,
        "title": "SCLC molecular subtypes (A, N, P, I) proposed"
      },
      {
        "year": 2024,
        "title": "Tarlatamab approved"
      },
      {
        "year": 2024,
        "title": "Tarlatamab accelerated approval; ADRIATIC changes limited-stage care"
      },
      {
        "year": 2025,
        "title": "DeLLphi-304 OS benefit and full approval of tarlatamab; IMforte maintenance approved"
      },
      {
        "year": 2026,
        "title": "Phase 3 readouts pending for I-DXd and tarlatamab maintenance"
      }
    ],
    "pipeline": [
      "ryz101",
      "targeted-alpha-therapy"
    ],
    "openProblems": [
      "Rapid chemoresistance.",
      "Brain metastases.",
      "No screening beyond CT for smokers.",
      "Extensive-stage disease almost always relapses after first-line therapy, so maintenance (lurbinectedin-atezolizumab, tarlatamab) is the current lever; median survival is still barely over a year.",
      "No validated predictive biomarker for immunotherapy benefit; PD-L1 and TMB do not work in SCLC.",
      "Sequencing of tarlatamab, I-DXd, lurbinectedin, and platinum rechallenge is untested.",
      "Cytokine release syndrome and neurotoxicity of T-cell engagers require inpatient step-up dosing that many community centres cannot provide.",
      "Prophylactic cranial irradiation versus MRI surveillance remains unresolved until SWOG S1827 reads out.",
      "Transformed SCLC arising from EGFR-mutant NSCLC has no dedicated evidence base.",
      "Screening rarely catches SCLC early; prevention is tobacco control.",
      "Trials rarely enrol patients with poor performance status, who are common in this disease."
    ],
    "targets": [
      "dll3",
      "b7h3",
      "sstr2",
      "parp"
    ],
    "technologies": [
      "targeted-alpha-therapy"
    ],
    "tags": [
      "lung"
    ],
    "subtypes": [
      "Limited-stage (one hemithorax, ~30%)",
      "Extensive-stage (~70%)",
      "SCLC-A (ASCL1-driven, DLL3-high; ~50%)",
      "SCLC-N (NEUROD1)",
      "SCLC-P (POU2F3, tuft-cell-like)",
      "SCLC-I (inflamed, IO-responsive)",
      "Transformed SCLC (from EGFR-mutant NSCLC under TKI)",
      "Combined small-cell / non-small-cell histology"
    ],
    "institutions": [
      "mskcc",
      "md-anderson",
      "dana-farber"
    ],
    "links": [
      {
        "label": "NCI PDQ: small cell lung cancer treatment",
        "url": "https://www.cancer.gov/types/lung/hp/small-cell-lung-treatment-pdq"
      },
      {
        "label": "IASLC: tarlatamab first-line maintenance data",
        "url": "https://www.iaslc.org/iaslc-news/press-release/tarlatamab-anti-pd-l1-first-line-maintenance-after-chemo-immunotherapy-es"
      }
    ]
  },
  {
    "id": "small-intestinal-net",
    "related": [
      "grade-3-net",
      "lung-net",
      "pancreatic-net"
    ],
    "kind": "indication",
    "name": "Small intestinal neuroendocrine tumours",
    "group": "endocrine",
    "parent": "neuroendocrine",
    "asOf": "2026-09-17",
    "tags": [
      "subtype-page",
      "endocrine"
    ],
    "wikipedia": "https://en.wikipedia.org/wiki/Neuroendocrine_tumor",
    "keyPapers": [
      "paper-netter-2-lancet-2024",
      "paper-clarinet-lanreotide-nejm-2014",
      "paper-netter-1-nejm-2017"
    ],
    "aka": [
      "Midgut neuroendocrine tumour",
      "Small bowel NET",
      "Ileal carcinoid",
      "Jejunoileal neuroendocrine tumour",
      "SI-NET"
    ],
    "burden": "The commonest neuroendocrine tumour of the gut in Western series and now the commonest cancer of the small intestine; most are grade 1 or 2 and many are found only after they have reached the mesenteric nodes or the liver.",
    "tldr": "Small intestinal neuroendocrine tumours are slow-growing hormone-producing tumours of the ileum and jejunum, often found only after they have spread to lymph nodes and the liver. Monthly somatostatin analogue injections control symptoms and growth, lutetium-177 dotatate is the main second treatment, and everolimus, cabozantinib and surgery fill in.",
    "summary": "Small intestinal neuroendocrine tumours arise from enterochromaffin cells of the distal jejunum and ileum, are often multiple along the same segment, and stay small while their mesenteric node metastases and the fibrosis around them grow large enough to kink the bowel and its blood supply. Most are well differentiated with a low Ki-67 index, nearly all express somatostatin receptor 2, and about a fifth to a third of patients with liver metastases develop carcinoid syndrome from serotonin that escapes the liver's first-pass clearance; years of exposure can scar the right-sided heart valves. Diagnosis rests on somatostatin receptor PET, chromogranin A and 24-hour urinary 5-HIAA, and the grade is read from Ki-67 and mitotic count on biopsy.\n\nThe treatment sequence was built by a short chain of trials. PROMID (Journal of Clinical Oncology 2009) randomised 85 patients with treatment-naive metastatic midgut tumours to octreotide LAR or placebo and lengthened time to progression from 6.0 to 14.3 months, the first proof that a somatostatin analogue slows growth as well as symptoms; CLARINET (New England Journal of Medicine 2014) did the same for lanreotide across enteropancreatic tumours, with the median progression-free survival not reached against 18.0 months on placebo. NETTER-1 (New England Journal of Medicine 2017) then randomised 231 patients with midgut tumours progressing on octreotide to lutetium-177 dotatate with octreotide or to high-dose octreotide; 65.2 percent against 10.8 percent were progression-free at 20 months, responses rose from 3 to 18 percent, and the final analysis gave median overall survival of 48.0 against 36.3 months, a difference that did not reach statistical significance because of crossover. Lutathera was approved in 2018, and NETTER-2 (Lancet 2024) moved it to first line for grade 2 and 3 tumours with a Ki-67 of 10 percent or more, lengthening progression-free survival from 8.5 to 22.8 months. Everolimus earned its gut indication in RADIANT-4 (Lancet 2016), where progression-free survival was 11.0 against 3.9 months in non-functional lung and gastrointestinal tumours, and cabozantinib was approved in 2025 after the extra-pancreatic cohort of CABINET (New England Journal of Medicine 2024) showed 8.4 against 3.9 months.\n\nSurgery keeps its place even in metastatic disease: resection of the primary with its mesenteric nodes prevents obstruction and ischaemia, and liver metastases are debulked, ablated or embolised when the liver dominates. Carcinoid syndrome is treated by raising the somatostatin analogue dose, adding telotristat ethyl for diarrhoea that persists (TELESTAR, 2017), and giving octreotide by infusion around operations and embolisation to prevent carcinoid crisis. The order of radioligand therapy, everolimus and cabozantinib after somatostatin analogues has never been randomised; COMPETE (Lancet 2025) showed 177Lu-edotreotide beat everolimus on progression-free survival in grade 1 to 2 gastroenteropancreatic tumours, alpha-emitting radioligands are in phase 3 after lutetium failure, and the oral somatostatin agonist paltusotine and a subcutaneous octreotide depot are being tested for carcinoid syndrome.",
    "subtypes": [
      "Ileal neuroendocrine tumour (the classic site, often multifocal)",
      "Jejunal neuroendocrine tumour",
      "Duodenal neuroendocrine tumour (gastrinoma, somatostatinoma, ampullary)",
      "Small bowel NET with carcinoid syndrome and liver metastases",
      "Small bowel NET with mesenteric fibrosis and obstruction",
      "Grade 1 (Ki-67 under 3 percent) and grade 2 (3 to 20 percent) small intestinal NET"
    ],
    "biomarkers": [
      "Ki-67 index and mitotic count (WHO grade, nearly always grade 1 or 2)",
      "Chromogranin A (monitoring, raised by proton-pump inhibitors and kidney disease)",
      "24-hour urinary 5-HIAA (carcinoid syndrome)",
      "Somatostatin receptor PET with gallium-68 or copper-64 DOTATATE (staging and radioligand eligibility)",
      "Echocardiography for carcinoid heart disease",
      "Germline CDKN1B in familial small intestinal NET (rare)"
    ],
    "standardOfCare": [
      {
        "setting": "Diagnosis and staging",
        "approach": "Biopsy with Ki-67 grading, somatostatin receptor PET, cross-sectional imaging of the liver, chromogranin A and urinary 5-HIAA, echocardiography if carcinoid syndrome is present.",
        "refs": [
          "sstr-pet",
          "ga68-dotatate",
          "net-grade-ki67"
        ],
        "guideline": {
          "version": "NCCN Guidelines: Neuroendocrine and Adrenal Tumors",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1448"
        }
      },
      {
        "setting": "Localised or resectable disease",
        "approach": "Segmental small bowel resection with mesenteric lymphadenectomy, inspecting the whole small bowel for further primaries; the primary is often removed even when liver metastases are present.",
        "guideline": {
          "version": "NCCN Guidelines: Neuroendocrine and Adrenal Tumors",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1448"
        }
      },
      {
        "setting": "Advanced, first line",
        "approach": "Octreotide LAR or lanreotide (PROMID, CLARINET); lutetium-177 dotatate first line for grade 2 to 3 tumours with a Ki-67 of 10 percent or more (NETTER-2).",
        "refs": [
          "lutathera",
          "nct03972488",
          "prrt"
        ],
        "guideline": {
          "version": "NCCN Guidelines: Neuroendocrine and Adrenal Tumors",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1448"
        }
      },
      {
        "setting": "Progression on a somatostatin analogue",
        "approach": "Lutetium-177 dotatate (NETTER-1); everolimus (RADIANT-4); cabozantinib (CABINET); liver-directed therapy for hepatic-dominant disease.",
        "refs": [
          "lutathera",
          "netter-1",
          "everolimus",
          "radiant-3-4",
          "cabozantinib",
          "cabinet",
          "radioembolisation-tare"
        ],
        "guideline": {
          "version": "NCCN Guidelines: Neuroendocrine and Adrenal Tumors",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1448"
        }
      },
      {
        "setting": "Carcinoid syndrome",
        "approach": "Somatostatin analogue dose escalation, telotristat ethyl for refractory diarrhoea, octreotide infusion around procedures to prevent carcinoid crisis, valve surgery for carcinoid heart disease.",
        "guideline": {
          "version": "NCCN Guidelines: Neuroendocrine and Adrenal Tumors",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1448"
        }
      },
      {
        "setting": "After radioligand therapy",
        "approach": "Everolimus or cabozantinib; 177Lu-edotreotide if approved; alpha-emitting radioligands and retreatment in trials.",
        "refs": [
          "everolimus",
          "cabozantinib",
          "itm-11",
          "compete",
          "ryz101",
          "action-1",
          "alphamedix"
        ],
        "guideline": {
          "version": "NCCN Guidelines: Neuroendocrine and Adrenal Tumors",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1448"
        }
      }
    ],
    "stateOfArt": [
      "NETTER-1 made this the first cancer treated by a modern radioligand and NETTER-2 has moved that treatment to first line for the faster-growing tumours.",
      "Somatostatin analogues remain the first drug for almost every patient, controlling both hormone symptoms and growth.",
      "Cabozantinib gives a fourth approved systemic option, and COMPETE was the first head-to-head win for a radioligand over a targeted tablet."
    ],
    "history": [
      {
        "year": 1907,
        "title": "Oberndorfer names the small bowel tumours 'Karzinoid'"
      },
      {
        "year": 1954,
        "title": "Carcinoid syndrome described"
      },
      {
        "year": 1988,
        "title": "Octreotide approved for carcinoid syndrome symptoms"
      },
      {
        "year": 2009,
        "title": "PROMID: octreotide LAR slows midgut tumour growth"
      },
      {
        "year": 2014,
        "title": "CLARINET: lanreotide halves the risk of progression in enteropancreatic tumours"
      },
      {
        "year": 2016,
        "title": "RADIANT-4 extends everolimus to gut and lung tumours; gallium-68 DOTATATE PET approved",
        "refs": [
          "radiant-3-4",
          "everolimus",
          "sstr-pet",
          "ga68-dotatate"
        ]
      },
      {
        "year": 2017,
        "title": "NETTER-1 published; telotristat ethyl approved for carcinoid syndrome diarrhoea",
        "refs": [
          "netter-1"
        ]
      },
      {
        "year": 2018,
        "title": "Lutathera approved in the United States and Europe",
        "refs": [
          "lutathera",
          "prrt"
        ]
      },
      {
        "year": 2024,
        "title": "NETTER-2: lutetium-177 dotatate first line for grade 2 to 3 tumours; CABINET published",
        "refs": [
          "nct03972488",
          "lutathera",
          "cabinet"
        ]
      },
      {
        "year": 2025,
        "title": "Cabozantinib approved for previously treated neuroendocrine tumours; COMPETE published",
        "refs": [
          "cabozantinib",
          "compete"
        ]
      }
    ],
    "pipeline": [
      "itm-11",
      "compete",
      "ryz101",
      "action-1",
      "alphamedix",
      "idea-net-antagonist-ligands",
      "idea-net-dosimetry-prrt"
    ],
    "openProblems": [
      "No randomised trial orders radioligand therapy, everolimus and cabozantinib after somatostatin analogues.",
      "Whether removing the primary improves survival in patients with liver metastases has never been tested prospectively.",
      "Chromogranin A is unreliable and no blood test yet replaces imaging for follow-up.",
      "Overall survival gains are hard to show because patients live for years and cross over."
    ],
    "drugs": [
      "lutathera",
      "everolimus",
      "cabozantinib",
      "ga68-dotatate",
      "itm-11"
    ],
    "trials": [
      "netter-1",
      "nct03972488",
      "radiant-3-4",
      "cabinet",
      "compete"
    ],
    "technologies": [
      "sstr-pet",
      "prrt",
      "radioligand-therapy",
      "radioembolisation-tare"
    ],
    "terms": [
      "net-grade-ki67",
      "prrt-term"
    ],
    "targets": [
      "sstr2"
    ],
    "links": [
      {
        "label": "PROMID (JCO 2009)",
        "url": "https://doi.org/10.1200/JCO.2009.22.8510"
      },
      {
        "label": "NETTER-1 (NEJM 2017)",
        "url": "https://doi.org/10.1056/NEJMoa1607427"
      },
      {
        "label": "NETTER-2 (Lancet 2024)",
        "url": "https://doi.org/10.1016/S0140-6736(24)00701-3"
      },
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Neuroendocrine_tumor"
      }
    ]
  },
  {
    "kind": "indication",
    "asOf": "2026-09-04",
    "id": "thyroid",
    "trials": [
      "nct06860971",
      "nct03690388",
      "select-lenvatinib",
      "decision-sorafenib",
      "estimabl2",
      "ion-trial",
      "hilo",
      "astra"
    ],
    "name": "Thyroid cancer",
    "group": "endocrine",
    "wikipedia": "https://en.wikipedia.org/wiki/Thyroid_cancer",
    "burden": "~820,000 cases per year; most are indolent papillary cancers with >98% survival.",
    "tldr": "Thyroid cancer is usually curable with surgery and radioactive iodine, the original theranostic. Rare aggressive forms respond to RET and BRAF inhibitors.",
    "summary": "Thyroid cancer is really several diseases. Differentiated thyroid cancer (papillary ~85%, follicular, oncocytic) arises from follicular cells, retains iodine uptake, and has a 10-year survival above 95%; its incidence has tripled in many countries because ultrasound finds tiny tumours that would never have caused harm. Medullary thyroid cancer comes from calcitonin-producing C cells, is driven by RET mutations (hereditary in MEN2), and does not take up iodine. Anaplastic thyroid cancer is rare, dedifferentiated, and historically progressed within months; BRAF/MEK inhibition and immunotherapy have started to change that.\n\nDifferentiated disease is treated by surgery, with radioactive iodine (the first theranostic, 1946) reserved for intermediate and high-risk patients after HiLo, ESTIMABL2, and IoN showed low-risk patients gain nothing from it; active surveillance is accepted for microcarcinomas, and lobectomy suffices for many. When cancer becomes radioiodine-refractory, lenvatinib (SELECT) and sorafenib (DECISION) extend progression-free survival, and genotype directs selective therapy: selpercatinib for RET fusions, larotrectinib for NTRK, dabrafenib-trametinib for BRAF. Medullary cancer moved from vandetanib and cabozantinib to RET-selective selpercatinib after LIBRETTO-531 (2023). Anaplastic cancer with BRAF V600E responds to dabrafenib-trametinib (ROAR), often enabling surgery, and triplets with pembrolizumab are producing multi-year survivors.\n\nThe field's biggest problems are the opposite of most cancers': over-detection and over-treatment of indolent disease, alongside the unsolved lethality of anaplastic and RAI-refractory disease, resistance to RET inhibitors (solvent-front mutations), and the toxicity of long-term multikinase therapy.",
    "biomarkers": [
      "BRAF V600E",
      "RET fusion/mutation",
      "NTRK",
      "RAS",
      "TERT",
      "Thyroglobulin and anti-Tg antibodies (surveillance of differentiated cancer)",
      "Calcitonin and CEA (medullary)",
      "Germline RET (MEN2 screening, prophylactic thyroidectomy)",
      "Somatic RET fusion/mutation (selpercatinib)",
      "BRAF V600E (prognosis; anaplastic targeted therapy; redifferentiation)",
      "TERT promoter (aggressiveness)",
      "NTRK, ALK fusions (tumour-agnostic drugs)",
      "Bethesda cytology category and molecular classifier result",
      "Radioiodine avidity on diagnostic scan"
    ],
    "standardOfCare": [
      {
        "setting": "Differentiated",
        "approach": "Thyroidectomy ± radioactive iodine; TSH suppression.",
        "refs": [
          "radioligand-therapy"
        ],
        "guideline": {
          "version": "NCCN Guidelines: Thyroid Carcinoma",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1470"
        }
      },
      {
        "setting": "Advanced/refractory",
        "approach": "Lenvatinib; selpercatinib (RET); BRAF/MEK (anaplastic).",
        "guideline": {
          "version": "NCCN Guidelines: Thyroid Carcinoma",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1470"
        }
      },
      {
        "setting": "Nodule work-up",
        "approach": "Ultrasound with TI-RADS; FNA only for nodules meeting size/appearance thresholds; Bethesda reporting; molecular classifier (Afirma, ThyroSeq) for indeterminate results.",
        "guideline": {
          "nccn": "2A",
          "url": "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1470"
        }
      },
      {
        "setting": "Papillary microcarcinoma (≤1 cm, no spread)",
        "approach": "Active surveillance or lobectomy; total thyroidectomy and radioiodine not indicated.",
        "guideline": {
          "nccn": "2A"
        }
      },
      {
        "setting": "Low-risk differentiated (pT1-T2 N0)",
        "approach": "Lobectomy or total thyroidectomy; no radioiodine ablation (ESTIMABL2, IoN); modest TSH suppression then normal-range TSH.",
        "refs": [
          "estimabl2",
          "ion-trial"
        ],
        "guideline": {
          "nccn": "2A"
        }
      },
      {
        "setting": "Intermediate/high-risk differentiated",
        "approach": "Total thyroidectomy with therapeutic node dissection; radioiodine (1.1-3.7 GBq adjuvant; higher for known metastases) after recombinant TSH; TSH suppression.",
        "refs": [
          "radioactive-iodine",
          "radioiodine-therapy",
          "hilo"
        ],
        "guideline": {
          "nccn": "2A"
        }
      },
      {
        "setting": "Radioiodine-refractory, progressive",
        "approach": "Genotype first: selpercatinib (RET fusion), larotrectinib/entrectinib (NTRK), dabrafenib-trametinib (BRAF V600E); otherwise lenvatinib (or sorafenib); consider MAPK-inhibitor redifferentiation to restore iodine uptake.",
        "refs": [
          "select-lenvatinib",
          "decision-sorafenib"
        ],
        "guideline": {
          "nccn": "1 (lenvatinib)",
          "esmoMcbs": "3"
        }
      },
      {
        "setting": "Medullary, localised",
        "approach": "Total thyroidectomy with central neck dissection; prophylactic thyroidectomy in RET germline carriers by codon-based age; calcitonin surveillance.",
        "guideline": {
          "nccn": "2A"
        }
      },
      {
        "setting": "Medullary, advanced progressive RET-mutant",
        "approach": "Selpercatinib first line (LIBRETTO-531); cabozantinib or vandetanib if RET-selective therapy unavailable or failed.",
        "guideline": {
          "nccn": "1 (preferred)",
          "esmoMcbs": "3"
        }
      },
      {
        "setting": "Anaplastic, BRAF V600E",
        "approach": "Rapid BRAF testing; dabrafenib-trametinib (ROAR), often with pembrolizumab, then surgery and radiation if rendered resectable.",
        "guideline": {
          "nccn": "2A"
        }
      },
      {
        "setting": "Anaplastic, BRAF wild-type",
        "approach": "Multimodal chemoradiation (paclitaxel-based) if feasible; lenvatinib; immunotherapy for PD-L1-high or TMB-high; NTRK/RET/ALK agents if fusion-positive; early palliative care.",
        "refs": [
          "pembrolizumab"
        ]
      },
      {
        "setting": "Survivorship",
        "approach": "Lifelong levothyroxine with risk-adapted TSH targets; calcium/PTH monitoring after surgery; salivary care after radioiodine; low-risk patients can be discharged to primary care."
      }
    ],
    "stateOfArt": [
      "Genotype-directed therapy for aggressive subtypes.",
      "De-escalation is the story: radioiodine omitted for low-risk disease (ESTIMABL2, IoN), low-dose ablation when needed (HiLo), lobectomy and active surveillance for small tumours.",
      "Genotype-directed therapy covers most aggressive disease: RET (selpercatinib beat multikinase inhibitors head to head), BRAF, NTRK, ALK.",
      "Anaplastic thyroid cancer with BRAF V600E has moved from a median survival under six months to 15 months with the doublet and longer with immunotherapy added, and neoadjuvant use enables surgery.",
      "Molecular classifiers on needle biopsies have halved diagnostic surgery for indeterminate nodules.",
      "Redifferentiation with MAPK inhibitors can restore radioiodine uptake in about half of refractory patients."
    ],
    "history": [
      {
        "year": 1946,
        "title": "Radioactive iodine: first theranostic"
      },
      {
        "year": 1946,
        "title": "First patient treated with radioactive iodine for metastatic thyroid cancer",
        "note": "Seidlin, Marinelli, and Oshry: the first theranostic.",
        "refs": [
          "radioactive-iodine",
          "radioiodine-therapy"
        ]
      },
      {
        "year": 1985,
        "title": "RET proto-oncogene identified; MEN2 germline RET mutations follow (1993)"
      },
      {
        "year": 2003,
        "title": "BRAF V600E found in ~45% of papillary thyroid cancers"
      },
      {
        "year": 2009,
        "title": "Bethesda System for thyroid cytology standardises nodule reporting"
      },
      {
        "year": 2011,
        "title": "Vandetanib: first drug for medullary thyroid cancer"
      },
      {
        "year": 2012,
        "title": "HiLo and ESTIMABL1: low-dose radioiodine ablation is enough",
        "refs": [
          "hilo"
        ]
      },
      {
        "year": 2013,
        "title": "Sorafenib approved for RAI-refractory disease (DECISION); selumetinib redifferentiation proof of concept",
        "refs": [
          "decision-sorafenib"
        ]
      },
      {
        "year": 2015,
        "title": "Lenvatinib approved (SELECT); ATA guidelines endorse active surveillance and less radioiodine",
        "refs": [
          "select-lenvatinib"
        ]
      },
      {
        "year": 2018,
        "title": "Dabrafenib-trametinib approved for BRAF V600E anaplastic thyroid cancer (ROAR); larotrectinib tumour-agnostic"
      },
      {
        "year": 2020,
        "title": "Selpercatinib approved"
      },
      {
        "year": 2020,
        "title": "Selpercatinib and pralsetinib: RET-selective inhibitors approved"
      },
      {
        "year": 2022,
        "title": "ESTIMABL2: no radioiodine for low-risk disease; ASTRA adjuvant redifferentiation negative",
        "refs": [
          "estimabl2",
          "astra"
        ]
      },
      {
        "year": 2023,
        "title": "LIBRETTO-531: selpercatinib beats cabozantinib/vandetanib in medullary cancer"
      },
      {
        "year": 2025,
        "title": "IoN confirms omission of radioiodine in low-risk disease (Lancet)",
        "refs": [
          "ion-trial"
        ]
      },
      {
        "year": 2026,
        "title": "Selpercatinib label update (July 2026)"
      }
    ],
    "pipeline": [
      "al2846",
      "pembrolizumab",
      "targeted-alpha-therapy"
    ],
    "openProblems": [
      "Overdiagnosis of microcarcinoma.",
      "Anaplastic thyroid cancer: BRAF V600E cases now respond to dabrafenib-trametinib, often enough to allow surgery; the 60% without the mutation still have few options.",
      "Overdiagnosis: incidence has tripled with no change in mortality; most detected cancers would never have caused harm, yet surveillance uptake outside Japan and Korea remains low.",
      "Anaplastic thyroid cancer without BRAF V600E (about 60%) still has a median survival of a few months.",
      "Resistance to RET-selective inhibitors via solvent-front (G810) mutations has no approved next-generation drug.",
      "Multikinase inhibitors for RAI-refractory disease cause hypertension, weight loss, and fatigue; most patients need dose reductions and quality of life suffers.",
      "No validated way to predict which low-risk patients will be the rare ones to recur, so follow-up intensity is uniform.",
      "Redifferentiation works in about half of refractory patients but predictors and optimal regimens are undefined.",
      "Paediatric and radiation-induced thyroid cancers (Chernobyl, Fukushima cohorts) have distinct fusion-driven biology that is under-studied.",
      "Hereditary MEN2 requires lifelong surveillance and prophylactic surgery in children; long-term outcomes of RET-selective therapy in this group are unknown."
    ],
    "technologies": [
      "radioligand-therapy",
      "radioiodine-therapy"
    ],
    "tags": [
      "endocrine",
      "spike"
    ],
    "drugs": [
      "radioactive-iodine",
      "thyrotropin-alfa"
    ],
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Thyroid_cancer"
      }
    ],
    "subtypes": [
      "Papillary (~85%; BRAF V600E ~50%, RET/PTC fusions, RAS)",
      "Follicular (RAS, PAX8-PPARG)",
      "Oncocytic (Hürthle cell)",
      "Poorly differentiated",
      "Anaplastic (BRAF V600E ~40%, TP53, TERT)",
      "Medullary (RET germline in MEN2 ~25%; somatic RET M918T)",
      "Papillary microcarcinoma (≤1 cm; surveillance candidate)",
      "Paediatric differentiated thyroid cancer (fusion-driven, often nodal, excellent survival)"
    ],
    "terms": [
      "theranostics"
    ],
    "companies": [
      "eli-lilly",
      "bayer",
      "novartis",
      "astrazeneca"
    ],
    "institutions": [
      "md-anderson",
      "mskcc"
    ],
    "related": [
      "radiopharma-roadmap",
      "theranostics"
    ]
  }
];
