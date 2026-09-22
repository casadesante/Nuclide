/**
 * People: records carried over from Nuclide.
 *
 * Carried over from the Nuclide corpus (https://github.com/casadesante/Nuclide), CC BY-NC 4.0, and narrowed to
 * radiopharmaceutical use. Facts and sources are as Nuclide held them on the `asOf` date of each record;
 * check anything that matters at the primary source each record links.
 */
import type { EntityInput } from "@/lib/schema";

export const carriedPeople: EntityInput[] = [
  {
    "kind": "person",
    "asOf": "2026-09-18",
    "institutions": [
      "royal-marsden"
    ],
    "profiles": [
      {
        "label": "PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=Parker%5BAuthor%5D"
      }
    ],
    "id": "chris-parker",
    "name": "Chris C. Parker",
    "role": "Clinical oncologist, The Royal Marsden and The Institute of Cancer Research",
    "institutionId": "royal-marsden",
    "specialisms": [
      "Prostate radiotherapy",
      "Radium-223",
      "Post-prostatectomy radiotherapy"
    ],
    "tldr": "London radiation oncologist who led ALSYMPCA, the trial that showed radium-223 lengthens survival in prostate cancer that has spread to bone, and RADICALS-RT, which showed radiotherapy after prostatectomy can safely wait until the PSA rises.",
    "summary": "Chris Parker is a clinical oncologist at The Royal Marsden and The Institute of Cancer Research. He was first author of the 2013 New England Journal of Medicine report of ALSYMPCA, in which the alpha-emitter radium-223 improved overall survival in castration-resistant prostate cancer with bone metastases, and of the 2020 Lancet report of RADICALS-RT, which found that early salvage radiotherapy on PSA rise was as good as adjuvant radiotherapy after prostatectomy, with less toxicity.",
    "indications": [
      "prostate-mcrpc",
      "prostate-bcr",
      "prostate"
    ],
    "keyPapers": [
      "paper-alsympca-radium-223-nejm-2013"
    ],
    "tags": [
      "prostate",
      "radiotherapy",
      "trialist"
    ],
    "papers": [
      {
        "title": "ALSYMPCA: alpha emitter radium-223 and survival in metastatic prostate cancer with bone metastases",
        "journal": "New England Journal of Medicine",
        "year": 2013,
        "doi": "10.1056/NEJMoa1213755",
        "url": "https://doi.org/10.1056/NEJMoa1213755"
      },
      {
        "title": "RADICALS-RT: timing of radiotherapy after radical prostatectomy",
        "journal": "The Lancet",
        "year": 2020,
        "doi": "10.1016/S0140-6736(20)31553-1",
        "url": "https://doi.org/10.1016/S0140-6736(20)31553-1"
      }
    ]
  },
  {
    "kind": "person",
    "asOf": "2026-09-08",
    "links": [
      {
        "label": "PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=Kratochwil%20C%5BAuthor%5D%20225Ac%20PSMA"
      }
    ],
    "id": "clemens-kratochwil",
    "orcid": "0000-0003-1334-8260",
    "name": "Clemens Kratochwil",
    "role": "Nuclear medicine physician, Heidelberg University Hospital",
    "institutionId": "heidelberg-nct",
    "institutions": [
      "heidelberg-nct"
    ],
    "specialisms": [
      "Targeted alpha therapy",
      "PSMA radioligands",
      "Dosimetry"
    ],
    "tldr": "Clemens Kratochwil reported the first patients treated with actinium-225 PSMA therapy.",
    "summary": "Clemens Kratochwil is a nuclear medicine physician at Heidelberg University Hospital, working within the NCT and DKFZ network. His specialisms are targeted alpha therapy, PSMA radioligands and dosimetry in prostate cancer. He reported the first patients treated with actinium-225 PSMA therapy, published in the Journal of Nuclear Medicine as 225Ac-PSMA-617 for PSMA-targeted alpha-radiation therapy of metastatic castration-resistant prostate cancer. That first clinical experience launched the alpha-emitter era in prostate cancer, and he continues to work on actinium-225 PSMA agents and their dosimetry. His publications are listed on PubMed.",
    "profiles": [
      {
        "label": "PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=Kratochwil%20C%5BAuthor%5D%20225Ac%20PSMA"
      }
    ],
    "indications": [
      "prostate"
    ],
    "targets": [
      "psma"
    ],
    "technologies": [
      "targeted-alpha-therapy"
    ],
    "drugs": [
      "ac225-psma"
    ],
    "papers": [
      {
        "title": "225Ac-PSMA-617 for PSMA-targeted α-radiation therapy of metastatic castration-resistant prostate cancer",
        "journal": "Journal of Nuclear Medicine",
        "year": 2016,
        "doi": "10.2967/jnumed.116.178673"
      }
    ],
    "journals": [
      "journal-of-nuclear-medicine"
    ]
  },
  {
    "kind": "person",
    "asOf": "2026-09-10",
    "links": [
      {
        "label": "PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=Murphy%20DG%5BAuthor%5D%20PSMA%20prostate"
      }
    ],
    "id": "declan-murphy",
    "orcid": "0000-0002-7500-5899",
    "name": "Declan G. Murphy",
    "role": "Director of Genitourinary Oncology, Peter MacCallum Cancer Centre",
    "institutionId": "peter-mac",
    "institutions": [
      "peter-mac",
      "anzup"
    ],
    "specialisms": [
      "Urological surgery",
      "PSMA PET",
      "Robotic prostatectomy",
      "Prostate cancer staging"
    ],
    "tldr": "Urologist who co-led proPSMA, the trial that showed PSMA PET should replace CT and bone scan for staging prostate cancer.",
    "summary": "Declan Murphy was co-principal investigator of proPSMA, the randomised trial showing PSMA PET-CT is 27% more accurate than conventional imaging for staging high-risk prostate cancer, the evidence behind PSMA PET's adoption in guidelines. He directs GU oncology at Peter Mac, leads robotic surgery, and chairs the ANZUP theranostics and surgical sub-committees.",
    "profiles": [
      {
        "label": "PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=Murphy%20DG%5BAuthor%5D%20PSMA%20prostate"
      }
    ],
    "indications": [
      "prostate"
    ],
    "targets": [
      "psma"
    ],
    "trials": [
      "propsma"
    ],
    "technologies": [
      "psma-pet"
    ],
    "tags": [
      "prostate",
      "imaging",
      "surgery"
    ],
    "papers": [
      {
        "title": "Prostate-specific membrane antigen PET-CT in patients with high-risk prostate cancer before curative-intent surgery or radiotherapy (proPSMA)",
        "journal": "Lancet",
        "year": 2020,
        "doi": "10.1016/S0140-6736(20)30314-7"
      },
      {
        "title": "Prostate-specific membrane antigen positron emission tomography (PSMA-PET) for local staging of prostate cancer: a systematic review and meta-analysis",
        "journal": "European Urology",
        "year": 2020
      }
    ],
    "journals": [
      "european-urology"
    ]
  },
  {
    "kind": "person",
    "asOf": "2026-09-17",
    "institutions": [
      "excel-diagnostics-nuclear-oncology"
    ],
    "links": [
      {
        "label": "Excel Diagnostics",
        "url": "https://www.exceldiagnostics.com/"
      },
      {
        "label": "PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=Delpassand+ES%5BAuthor%5D"
      }
    ],
    "id": "ebrahim-delpassand",
    "name": "Ebrahim S. Delpassand",
    "role": "Chief Executive Officer and Medical Director, Excel Diagnostics and Nuclear Oncology Center",
    "institutionId": "excel-diagnostics-nuclear-oncology",
    "specialisms": [
      "Nuclear medicine",
      "Radiopharmaceutical therapy",
      "Molecular imaging",
      "Radiopharmaceutical trials"
    ],
    "tldr": "The nuclear medicine physician who founded and leads Excel Diagnostics in Houston, a radiopharmaceutical therapy centre that also runs early trials of new radioligands.",
    "summary": "Ebrahim Delpassand is Chief Executive Officer and medical director of Excel Diagnostics and Nuclear Oncology Center in Houston, which its site describes as a Radiopharmaceutical Therapy Center of Excellence designated by the Society of Nuclear Medicine and Molecular Imaging, offering PET-CT and other imaging, radionuclide therapy and clinical trials. He has been an investigator on early trials of somatostatin and PSMA radioligands. His publications are listed on PubMed.",
    "profiles": [
      {
        "label": "Excel Diagnostics",
        "url": "https://www.exceldiagnostics.com/"
      },
      {
        "label": "PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=Delpassand+ES%5BAuthor%5D"
      }
    ],
    "technologies": [
      "radioligand-therapy",
      "psma-pet"
    ],
    "tags": [
      "leadership"
    ]
  },
  {
    "id": "emily-bergsland",
    "kind": "person",
    "asOf": "2026-09-08",
    "name": "Emily K. Bergsland",
    "role": "Professor of Medicine; Associate Director for Education, UCSF Helen Diller Family Comprehensive Cancer Center",
    "institutionId": "ucsf",
    "institutions": [
      "ucsf"
    ],
    "specialisms": [
      "Neuroendocrine tumours",
      "Gastrointestinal oncology",
      "Clinical trials"
    ],
    "tldr": "Neuroendocrine tumour specialist who helps design the trials that set treatment for these rare cancers.",
    "summary": "Emily Bergsland is Professor of Medicine and Associate Director for Education at the UCSF Helen Diller Family Comprehensive Cancer Center. A medical oncologist focused on gastroenteropancreatic neuroendocrine tumours, she chaired the Alliance A021202 trial of pazopanib versus placebo in progressive carcinoid tumours and co-authors national neuroendocrine tumour treatment guidelines. Her papers include NCCN guidance on the management of advanced gastroenteropancreatic neuroendocrine tumours, a review of systemic therapies for advanced gastrointestinal carcinoid tumours and the A021202 trial report. Her record links to lutetium-177 dotatate, somatostatin receptor 2 and VEGF-directed therapy, and she leads UCSF's cancer education programmes.",
    "indications": [
      "neuroendocrine"
    ],
    "targets": [
      "sstr2"
    ],
    "drugs": [
      "lutathera"
    ],
    "technologies": [
      "radioligand-therapy"
    ],
    "profiles": [
      {
        "label": "UCSF profile",
        "url": "https://profiles.ucsf.edu/search/?searchtype=people&searchfor=Emily%20K.%20Bergsland"
      },
      {
        "label": "PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=Bergsland%20EK%5BAuthor%5D"
      },
      {
        "label": "Google Scholar",
        "url": "https://scholar.google.com/scholar?q=Emily%20K.%20Bergsland"
      }
    ],
    "papers": [
      {
        "title": "Management of Advanced Gastroenteropancreatic Neuroendocrine Tumors",
        "journal": "Journal of the National Comprehensive Cancer Network",
        "year": 2025,
        "doi": "10.6004/jnccn.2025.5012",
        "url": "https://doi.org/10.6004/jnccn.2025.5012"
      },
      {
        "title": "Systemic Therapies for Advanced Gastrointestinal Carcinoid Tumors",
        "journal": "Hematology/Oncology Clinics of North America",
        "year": 2016,
        "doi": "10.1016/j.hoc.2015.09.002",
        "url": "https://doi.org/10.1016/j.hoc.2015.09.002"
      },
      {
        "title": "Prospective randomized phase II trial of pazopanib versus placebo in patients with progressive carcinoid tumors (Alliance A021202)",
        "journal": "Journal of Clinical Oncology (ASCO Annual Meeting abstract)",
        "year": 2019,
        "doi": "10.1200/JCO.2019.37.15_suppl.4005",
        "url": "https://doi.org/10.1200/JCO.2019.37.15_suppl.4005"
      }
    ],
    "links": [
      {
        "label": "UCSF profile",
        "url": "https://profiles.ucsf.edu/search/?searchtype=people&searchfor=Emily%20K.%20Bergsland"
      },
      {
        "label": "PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=Bergsland%20EK%5BAuthor%5D"
      },
      {
        "label": "Google Scholar",
        "url": "https://scholar.google.com/scholar?q=Emily%20K.%20Bergsland"
      }
    ]
  },
  {
    "kind": "person",
    "asOf": "2026-09-08",
    "links": [
      {
        "label": "PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=Giesel%20FL%5BAuthor%5D%20FAPI"
      }
    ],
    "id": "frederik-giesel",
    "name": "Frederik Giesel",
    "role": "Director of Nuclear Medicine, University Hospital Düsseldorf; formerly Heidelberg",
    "institutionId": "heidelberg-nct",
    "institutions": [
      "heidelberg-nct"
    ],
    "specialisms": [
      "Molecular imaging",
      "FAPI PET",
      "PSMA theranostics"
    ],
    "tldr": "Frederik Giesel co-developed FAPI PET imaging and now leads nuclear medicine in Düsseldorf.",
    "summary": "Frederik Giesel is Director of Nuclear Medicine at University Hospital Düsseldorf, having previously worked at Heidelberg University Hospital within the NCT and DKFZ network. His specialisms are molecular imaging, FAPI PET and PSMA theranostics. He co-led the first-in-human FAPI PET studies in Heidelberg, and his Journal of Nuclear Medicine paper reported the biodistribution and preliminary dosimetry of two DOTA-containing FAP-targeting agents imaged with 68Ga-FAPI PET/CT. He continues to develop FAP-targeted imaging and therapy in Düsseldorf. His publications are listed on PubMed.",
    "profiles": [
      {
        "label": "PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=Giesel%20FL%5BAuthor%5D%20FAPI"
      }
    ],
    "targets": [
      "fap"
    ],
    "technologies": [
      "fapi-pet"
    ],
    "papers": [
      {
        "title": "68Ga-FAPI PET/CT: biodistribution and preliminary dosimetry estimate of 2 DOTA-containing FAP-targeting agents",
        "journal": "Journal of Nuclear Medicine",
        "year": 2019,
        "doi": "10.2967/jnumed.118.215913"
      }
    ],
    "journals": [
      "journal-of-nuclear-medicine"
    ]
  },
  {
    "kind": "person",
    "asOf": "2026-09-08",
    "links": [
      {
        "label": "Peter MacCallum Cancer Centre",
        "url": "https://www.petermac.org"
      },
      {
        "label": "PubMed author search",
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=Hofman%20MS%5BAuthor%5D%20PSMA"
      }
    ],
    "id": "hofman-michael",
    "orcid": "0000-0001-8622-159X",
    "name": "Michael Hofman",
    "role": "Professor of Nuclear Medicine; Director, Prostate Cancer Theranostics and Imaging Centre of Excellence",
    "institutionId": "peter-mac",
    "institutions": [
      "peter-mac"
    ],
    "specialisms": [
      "Theranostics",
      "PSMA PET",
      "Lutetium-PSMA therapy",
      "Nuclear medicine"
    ],
    "tldr": "Led proPSMA and TheraP, the trials that proved PSMA PET beats conventional imaging and that lutetium-PSMA beats chemotherapy.",
    "summary": "Michael Hofman is Professor of Nuclear Medicine and Director of the Prostate Cancer Theranostics and Imaging Centre of Excellence at the Peter MacCallum Cancer Centre in Melbourne. He led proPSMA, which proved that PSMA PET-CT beats conventional imaging for staging high-risk prostate cancer before curative-intent surgery or radiotherapy, and TheraP, the ANZUP trial that showed lutetium-177 PSMA-617 beats cabazitaxel chemotherapy in metastatic castration-resistant prostate cancer. His publications include the proPSMA and TheraP reports, and his trials made Australia a global centre of theranostics. He now leads trials of earlier-line and combination radioligand therapy.",
    "profiles": [
      {
        "label": "Peter MacCallum Cancer Centre",
        "url": "https://www.petermac.org"
      },
      {
        "label": "PubMed author search",
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=Hofman%20MS%5BAuthor%5D%20PSMA"
      }
    ],
    "papers": [
      {
        "title": "Prostate-specific membrane antigen PET-CT in patients with high-risk prostate cancer before curative-intent surgery or radiotherapy (proPSMA)",
        "journal": "Lancet",
        "year": 2020,
        "doi": "10.1016/S0140-6736(20)30314-7"
      },
      {
        "title": "[177Lu]Lu-PSMA-617 versus cabazitaxel in metastatic castration-resistant prostate cancer (TheraP)",
        "journal": "Lancet",
        "year": 2021,
        "doi": "10.1016/S0140-6736(21)00237-3"
      }
    ],
    "indications": [
      "prostate"
    ],
    "targets": [
      "psma"
    ],
    "technologies": [
      "psma-pet",
      "radioligand-therapy"
    ],
    "drugs": [
      "pluvicto"
    ],
    "trials": [
      "propsma",
      "therap"
    ]
  },
  {
    "kind": "person",
    "asOf": "2026-09-10",
    "links": [
      {
        "label": "PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=Lewis%20JS%5BAuthor%5D%20zirconium-89%20PET"
      }
    ],
    "id": "jason-lewis",
    "name": "Jason S. Lewis",
    "role": "Emily Tow Jackson Chair in Oncology and Chief Attending, Radiochemistry and Imaging Sciences Service, Memorial Sloan Kettering Cancer Center",
    "institutionId": "mskcc",
    "institutions": [
      "mskcc"
    ],
    "specialisms": [
      "Radiochemistry",
      "Immuno-PET",
      "Radiopharmaceutical development",
      "Targeted radiotherapy"
    ],
    "tldr": "Radiochemist who built the zirconium-89 immuno-PET platform and MSKCC's radiopharmaceutical pipeline.",
    "summary": "Jason Lewis developed methods for labelling antibodies with zirconium-89 that made immuno-PET a clinical reality, including 89Zr-trastuzumab and 89Zr-J591 PSMA imaging, and leads a laboratory translating new radiotracers and radioligand therapies from chemistry to first-in-human trials. He directs radiochemistry at MSKCC and has trained many of the field's leaders.",
    "profiles": [
      {
        "label": "PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=Lewis%20JS%5BAuthor%5D%20zirconium-89%20PET"
      }
    ],
    "targets": [
      "her2",
      "psma"
    ],
    "technologies": [
      "immuno-pet",
      "her2-pet",
      "radioligand-therapy"
    ],
    "tags": [
      "radiochemistry",
      "immuno-pet",
      "theranostics"
    ],
    "papers": [
      {
        "title": "89Zr-DFO-J591 for immunoPET of prostate-specific membrane antigen expression in vivo",
        "journal": "Journal of Nuclear Medicine",
        "year": 2010,
        "doi": "10.2967/jnumed.110.077982"
      },
      {
        "title": "Immuno-PET of HER2-positive breast cancer with 89Zr-trastuzumab: a first-in-human study",
        "journal": "Journal of Nuclear Medicine",
        "year": 2016
      }
    ],
    "journals": [
      "journal-of-nuclear-medicine"
    ]
  },
  {
    "id": "jeremie-calais",
    "kind": "person",
    "asOf": "2026-09-08",
    "name": "Jeremie Calais",
    "role": "Associate Professor; Director, Clinical Research Program, Ahmanson Translational Theranostics Division, UCLA",
    "institutionId": "ucla-jonsson",
    "institutions": [
      "ucla-jonsson"
    ],
    "specialisms": [
      "PSMA PET",
      "Radioligand therapy",
      "Clinical trials"
    ],
    "tldr": "Runs the UCLA theranostics trials that test PSMA imaging against conventional scans and lutetium against chemotherapy.",
    "summary": "Jeremie Calais is Associate Professor and Director of the Clinical Research Program in the Ahmanson Translational Theranostics Division at UCLA, part of the UCLA Jonsson Comprehensive Cancer Center. A nuclear medicine physician specialising in PSMA PET and radioligand therapy, he leads prospective PSMA PET and PSMA radioligand therapy trials, including the head-to-head comparison of PSMA PET with fluciclovine PET and dosimetry research. His papers include the Lancet Oncology comparative imaging trial of 18F-fluciclovine and 68Ga-PSMA-11 PET-CT in early biochemical recurrence after prostatectomy and the Journal of Nuclear Medicine RESIST-PC phase 2 trial of 177Lu-PSMA-617 in the UCLA cohort. His work centres on prostate cancer theranostics.",
    "indications": [
      "prostate"
    ],
    "targets": [
      "psma"
    ],
    "technologies": [
      "psma-pet",
      "radioligand-therapy"
    ],
    "profiles": [
      {
        "label": "UCLA profile",
        "url": "https://www.uclahealth.org/providers?q=Jeremie%20Calais"
      },
      {
        "label": "PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=Calais%20J%5BAuthor%5D"
      },
      {
        "label": "Google Scholar",
        "url": "https://scholar.google.com/scholar?q=Jeremie%20Calais"
      }
    ],
    "papers": [
      {
        "title": "18F-fluciclovine PET-CT and 68Ga-PSMA-11 PET-CT in patients with early biochemical recurrence after prostatectomy: a prospective, single-centre, single-arm, comparative imaging trial",
        "journal": "Lancet Oncology",
        "year": 2019,
        "doi": "10.1016/s1470-2045(19)30415-2",
        "url": "https://doi.org/10.1016/s1470-2045(19)30415-2"
      },
      {
        "title": "Prospective phase 2 trial of PSMA-targeted molecular RadiothErapy with (177)Lu-PSMA-617 for metastatic castration-reSISTant Prostate Cancer (RESIST-PC): efficacy results of the UCLA cohort",
        "journal": "Journal of Nuclear Medicine",
        "year": 2021,
        "doi": "10.2967/jnumed.121.261982",
        "url": "https://doi.org/10.2967/jnumed.121.261982"
      }
    ],
    "journals": [
      "journal-of-nuclear-medicine"
    ],
    "links": [
      {
        "label": "UCLA profile",
        "url": "https://www.uclahealth.org/providers?q=Jeremie%20Calais"
      },
      {
        "label": "PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=Calais%20J%5BAuthor%5D"
      },
      {
        "label": "Google Scholar",
        "url": "https://scholar.google.com/scholar?q=Jeremie%20Calais"
      }
    ]
  },
  {
    "id": "johannes-czernin",
    "kind": "person",
    "asOf": "2026-09-08",
    "name": "Johannes Czernin",
    "role": "Chief, Ahmanson Translational Theranostics Division, UCLA",
    "institutionId": "ucla-jonsson",
    "institutions": [
      "ucla-jonsson"
    ],
    "specialisms": [
      "Nuclear medicine",
      "PSMA theranostics",
      "PET imaging"
    ],
    "tldr": "Nuclear medicine leader who helped bring PSMA PET and radioligand therapy to the United States.",
    "summary": "Johannes Czernin is Chief of the Ahmanson Translational Theranostics Division at UCLA, within the UCLA Jonsson Comprehensive Cancer Center, and editor-in-chief of the Journal of Nuclear Medicine. A nuclear medicine physician specialising in PSMA theranostics and PET imaging, he co-led the UCLA and UCSF prospective PSMA PET trials behind FDA approval and the US experience with 177Lu-PSMA-617, now known as lutetium-177 vipivotide tetraxetan. His papers include the JAMA Oncology prospective single-arm trial assessing 68Ga-PSMA-11 PET accuracy in localising recurrent prostate cancer and an Annual Review of Medicine article on molecular imaging in the development of cancer therapeutics. He helped bring PSMA PET and radioligand therapy to the United States.",
    "indications": [
      "prostate"
    ],
    "targets": [
      "psma"
    ],
    "drugs": [
      "pluvicto"
    ],
    "technologies": [
      "psma-pet",
      "radioligand-therapy",
      "pet"
    ],
    "profiles": [
      {
        "label": "UCLA profile",
        "url": "https://www.uclahealth.org/providers?q=Johannes%20Czernin"
      },
      {
        "label": "PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=Czernin%20J%5BAuthor%5D"
      },
      {
        "label": "Google Scholar",
        "url": "https://scholar.google.com/scholar?q=Johannes%20Czernin"
      }
    ],
    "papers": [
      {
        "title": "Assessment of 68Ga-PSMA-11 PET Accuracy in Localizing Recurrent Prostate Cancer: A Prospective Single-Arm Clinical Trial",
        "journal": "JAMA Oncology",
        "year": 2019,
        "doi": "10.1001/jamaoncol.2019.0096",
        "url": "https://doi.org/10.1001/jamaoncol.2019.0096"
      },
      {
        "title": "Molecular imaging in the development of cancer therapeutics",
        "journal": "Annual Review of Medicine",
        "year": 2006,
        "doi": "10.1146/annurev.med.57.080904.190431",
        "url": "https://doi.org/10.1146/annurev.med.57.080904.190431"
      }
    ],
    "links": [
      {
        "label": "UCLA profile",
        "url": "https://www.uclahealth.org/providers?q=Johannes%20Czernin"
      },
      {
        "label": "PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=Czernin%20J%5BAuthor%5D"
      },
      {
        "label": "Google Scholar",
        "url": "https://scholar.google.com/scholar?q=Johannes%20Czernin"
      }
    ]
  },
  {
    "kind": "person",
    "asOf": "2026-09-10",
    "links": [
      {
        "label": "PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=Strosberg%20J%5BAuthor%5D%20neuroendocrine%20lutetium"
      }
    ],
    "id": "jonathan-strosberg",
    "name": "Jonathan R. Strosberg",
    "role": "Section Head, Neuroendocrine Tumor Program, Moffitt Cancer Center",
    "specialisms": [
      "Neuroendocrine tumours",
      "Peptide receptor radionuclide therapy",
      "Somatostatin analogues",
      "Radioligand trials"
    ],
    "tldr": "Led NETTER-1, the trial that made lutetium dotatate the first approved radioligand therapy for neuroendocrine tumours.",
    "summary": "Jonathan Strosberg was principal investigator of NETTER-1, which showed 177Lu-DOTATATE reduces the risk of progression by 79% in midgut neuroendocrine tumours and led to Lutathera's approval, the first radioligand therapy approved for a solid tumour and the template for PSMA-targeted therapy. He co-leads the NETTER-2 and COMPETE programmes and chairs the North American Neuroendocrine Tumor Society guidelines.",
    "profiles": [
      {
        "label": "PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=Strosberg%20J%5BAuthor%5D%20neuroendocrine%20lutetium"
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
    "trials": [
      "compete"
    ],
    "technologies": [
      "radioligand-therapy"
    ],
    "keyPapers": [
      "paper-netter-2-lancet-2024"
    ],
    "tags": [
      "neuroendocrine",
      "radioligand",
      "trialist"
    ],
    "papers": [
      {
        "title": "Phase 3 trial of 177Lu-Dotatate for midgut neuroendocrine tumors (NETTER-1)",
        "journal": "NEJM",
        "year": 2017,
        "doi": "10.1056/NEJMoa1607427"
      },
      {
        "title": "177Lu-Dotatate plus long-acting octreotide versus high-dose long-acting octreotide in patients with midgut neuroendocrine tumours (NETTER-1): final overall survival and long-term safety results",
        "journal": "Lancet Oncology",
        "year": 2021,
        "doi": "10.1016/S1470-2045(21)00572-6"
      },
      {
        "title": "NETTER-2: lutetium-177 dotatate as first treatment for higher-grade gastroenteropancreatic neuroendocrine tumours",
        "journal": "The Lancet",
        "year": 2024,
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=NETTER-2+lutetium+dotatate+first-line+Singh+Lancet"
      }
    ]
  },
  {
    "kind": "person",
    "asOf": "2026-09-08",
    "links": [
      {
        "label": "PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=Fizazi%20K%5BAuthor%5D%20prostate%20abiraterone"
      }
    ],
    "id": "karim-fizazi",
    "name": "Karim Fizazi",
    "role": "Head of Medical Oncology, Gustave Roussy; Professor, Paris-Saclay",
    "specialisms": [
      "Prostate cancer",
      "Genitourinary oncology",
      "Hormone therapy",
      "Radioligand therapy"
    ],
    "tldr": "Led LATITUDE and PEACE-1, which put abiraterone into first-line metastatic prostate cancer.",
    "summary": "Karim Fizazi is Head of Medical Oncology at Gustave Roussy and Professor at Paris-Saclay, with links to Centre Oscar Lambret. His specialisms are prostate cancer, genitourinary oncology, hormone therapy and radioligand therapy. He is one of the most influential prostate cancer trialists of the past two decades, leading LATITUDE, the New England Journal of Medicine trial of abiraterone plus prednisone in high-risk metastatic castration-sensitive prostate cancer, and PEACE-1, the Lancet trial adding abiraterone to androgen deprivation therapy and docetaxel in de novo metastatic disease. He has also led studies of radium-223 and PSMA radioligands, and is linked to the ALSYMPCA trial. His publications are listed on PubMed.",
    "profiles": [
      {
        "label": "PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=Fizazi%20K%5BAuthor%5D%20prostate%20abiraterone"
      }
    ],
    "indications": [
      "prostate"
    ],
    "drugs": [
      "abiraterone",
      "radium-223"
    ],
    "trials": [
      "alsympca"
    ],
    "papers": [
      {
        "title": "Abiraterone plus prednisone in metastatic, castration-sensitive prostate cancer (LATITUDE)",
        "journal": "NEJM",
        "year": 2017,
        "doi": "10.1056/NEJMoa1704174"
      },
      {
        "title": "Abiraterone plus prednisone added to androgen deprivation therapy and docetaxel in de novo metastatic castration-sensitive prostate cancer (PEACE-1)",
        "journal": "Lancet",
        "year": 2022,
        "doi": "10.1016/S0140-6736(22)00367-1"
      },
      {
        "title": "VISION: lutetium-177 PSMA-617 radioligand therapy extends survival in advanced prostate cancer",
        "journal": "New England Journal of Medicine",
        "year": 2021,
        "doi": "10.1056/NEJMoa2107322",
        "url": "https://doi.org/10.1056/NEJMoa2107322"
      },
      {
        "title": "ARAMIS: darolutamide in non-metastatic castration-resistant prostate cancer",
        "journal": "New England Journal of Medicine",
        "year": 2019,
        "doi": "10.1056/NEJMoa1815671",
        "url": "https://doi.org/10.1056/NEJMoa1815671"
      }
    ]
  },
  {
    "id": "katherine-matthay",
    "kind": "person",
    "asOf": "2026-09-08",
    "name": "Katherine K. Matthay",
    "role": "Professor Emerita of Pediatrics, UCSF; Children's Oncology Group neuroblastoma investigator",
    "institutionId": "ucsf",
    "institutions": [
      "ucsf"
    ],
    "specialisms": [
      "Paediatric oncology",
      "Neuroblastoma",
      "MIBG therapy"
    ],
    "tldr": "Paediatric oncologist whose trials established transplant and 13-cis-retinoic acid for high-risk neuroblastoma.",
    "summary": "Katherine Matthay is Professor Emerita of Pediatrics at UCSF, within the UCSF Helen Diller Family Comprehensive Cancer Center, and a neuroblastoma investigator with the Children's Oncology Group (COG). A paediatric oncologist and long-time chair of COG neuroblastoma studies, she led the CCG-3891 trial establishing myeloablative therapy and 13-cis-retinoic acid in high-risk neuroblastoma and pioneered 131I-MIBG therapy for relapsed disease. Her papers report the Children's Cancer Group trial of intensive chemotherapy, radiotherapy, autologous bone marrow transplantation and 13-cis-retinoic acid, and the long-term results of that randomised trial. Her work links iobenguane I-131 and radioligand therapy to paediatric neuroblastoma.",
    "indications": [
      "neuroblastoma"
    ],
    "drugs": [
      "i131-mibg"
    ],
    "technologies": [
      "radioligand-therapy"
    ],
    "profiles": [
      {
        "label": "UCSF profile",
        "url": "https://profiles.ucsf.edu/search/?searchtype=people&searchfor=Katherine%20K.%20Matthay"
      },
      {
        "label": "PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=Matthay%20KK%5BAuthor%5D"
      },
      {
        "label": "Google Scholar",
        "url": "https://scholar.google.com/scholar?q=Katherine%20K.%20Matthay"
      }
    ],
    "papers": [
      {
        "title": "Treatment of high-risk neuroblastoma with intensive chemotherapy, radiotherapy, autologous bone marrow transplantation, and 13-cis-retinoic acid. Children's Cancer Group",
        "journal": "New England Journal of Medicine",
        "year": 1999,
        "doi": "10.1056/NEJM199910143411601",
        "url": "https://doi.org/10.1056/NEJM199910143411601"
      },
      {
        "title": "Long-term results for children with high-risk neuroblastoma treated on a randomized trial of myeloablative therapy followed by 13-cis-retinoic acid: a children's oncology group study",
        "journal": "Journal of Clinical Oncology",
        "year": 2009,
        "doi": "10.1200/JCO.2007.13.8925",
        "url": "https://doi.org/10.1200/JCO.2007.13.8925"
      }
    ],
    "links": [
      {
        "label": "UCSF profile",
        "url": "https://profiles.ucsf.edu/search/?searchtype=people&searchfor=Katherine%20K.%20Matthay"
      },
      {
        "label": "PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=Matthay%20KK%5BAuthor%5D"
      },
      {
        "label": "Google Scholar",
        "url": "https://scholar.google.com/scholar?q=Katherine%20K.%20Matthay"
      }
    ]
  },
  {
    "kind": "person",
    "asOf": "2026-09-10",
    "links": [
      {
        "label": "PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=Herrmann%20K%5BAuthor%5D%20theranostics%20PSMA"
      }
    ],
    "id": "ken-herrmann",
    "orcid": "0000-0002-9662-7259",
    "name": "Ken Herrmann",
    "role": "Chair of Nuclear Medicine, University Hospital Essen",
    "institutionId": "essen-wtz",
    "institutions": [
      "essen-wtz",
      "eanm"
    ],
    "specialisms": [
      "Theranostics",
      "PSMA radioligand therapy",
      "Nuclear medicine",
      "Radiopharmaceutical trials"
    ],
    "tldr": "Nuclear medicine leader who co-led VISION and runs one of the world's largest theranostics programmes.",
    "summary": "Ken Herrmann was a lead investigator of VISION and of the German multicentre 177Lu-PSMA-617 registry, and leads the Essen theranostics centre that has treated thousands of patients with PSMA and somatostatin receptor radioligands. He has chaired the EANM oncology committee, co-authored the Lancet Oncology series on theranostics, and leads trials of alpha emitters and new targets such as FAP.",
    "profiles": [
      {
        "label": "PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=Herrmann%20K%5BAuthor%5D%20theranostics%20PSMA"
      }
    ],
    "indications": [
      "prostate",
      "neuroendocrine"
    ],
    "drugs": [
      "pluvicto",
      "lutathera"
    ],
    "targets": [
      "psma",
      "fap"
    ],
    "trials": [
      "vision"
    ],
    "technologies": [
      "radioligand-therapy",
      "psma-pet",
      "fapi-pet"
    ],
    "keyPapers": [
      "paper-vision-nejm-2021"
    ],
    "tags": [
      "radioligand",
      "nuclear-medicine",
      "germany"
    ],
    "papers": [
      {
        "title": "Lutetium-177-PSMA-617 for metastatic castration-resistant prostate cancer (VISION)",
        "journal": "NEJM",
        "year": 2021,
        "doi": "10.1056/NEJMoa2107322"
      },
      {
        "title": "Radiotheranostics: a roadmap for future development",
        "journal": "Lancet Oncology",
        "year": 2020,
        "doi": "10.1016/S1470-2045(19)30821-6"
      }
    ]
  },
  {
    "kind": "person",
    "asOf": "2026-09-10",
    "links": [
      {
        "label": "PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=Emmett%20L%5BAuthor%5D%20PSMA"
      }
    ],
    "id": "louise-emmett",
    "orcid": "0000-0002-4895-7384",
    "name": "Louise Emmett",
    "role": "Director of Theranostics and Nuclear Medicine, St Vincent's Hospital Sydney; Professor, UNSW",
    "specialisms": [
      "PSMA theranostics",
      "Nuclear medicine",
      "Prostate cancer imaging",
      "Radioligand trials"
    ],
    "tldr": "Nuclear medicine physician who leads ENZA-p and the PSMA imaging trials shaping Australian theranostics.",
    "summary": "Louise Emmett (St Vincent's Hospital, Sydney) was principal investigator of ENZA-p, the ANZUP trial showing that adding 177Lu-PSMA-617 to enzalutamide delays progression in castration-resistant prostate cancer, and led the PRIMARY study of PSMA PET for diagnosis. She co-leads the ANZUP theranostics programme and writes widely used guidance on PSMA PET reporting.",
    "profiles": [
      {
        "label": "PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=Emmett%20L%5BAuthor%5D%20PSMA"
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
      "psma-pet",
      "radioligand-therapy"
    ],
    "tags": [
      "prostate",
      "radioligand",
      "australia"
    ],
    "papers": [
      {
        "title": "[177Lu]Lu-PSMA-617 plus enzalutamide in patients with metastatic castration-resistant prostate cancer (ENZA-p): an open-label, multicentre, randomised, phase 2 trial",
        "journal": "Lancet Oncology",
        "year": 2024
      },
      {
        "title": "The additive diagnostic value of prostate-specific membrane antigen positron emission tomography computed tomography to multiparametric magnetic resonance imaging triage in the diagnosis of prostate cancer (PRIMARY)",
        "journal": "European Urology",
        "year": 2021,
        "doi": "10.1016/j.eururo.2021.08.002"
      }
    ],
    "journals": [
      "european-urology"
    ]
  },
  {
    "kind": "person",
    "asOf": "2026-09-08",
    "institutions": [
      "mskcc"
    ],
    "links": [
      {
        "label": "MSK profile",
        "url": "https://www.mskcc.org/cancer-care/doctors/michael-morris"
      },
      {
        "label": "PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=Morris%20MJ%5BAuthor%5D"
      }
    ],
    "id": "michael-morris",
    "name": "Michael J. Morris",
    "role": "Prostate Cancer Section Head, Genitourinary Oncology Service",
    "institutionId": "mskcc",
    "specialisms": [
      "Prostate cancer",
      "Radiopharmaceuticals",
      "PSMA theranostics"
    ],
    "tldr": "Principal investigator of the VISION trial that made lutetium-PSMA a standard prostate cancer treatment.",
    "summary": "Michael J. Morris is Prostate Cancer Section Head on the Genitourinary Oncology Service at Memorial Sloan Kettering Cancer Center. He is a medical oncologist known as principal investigator of the VISION trial, which made lutetium-177 PSMA radioligand therapy a standard prostate cancer treatment, and co-led PSMAfore and PSMA PET studies. His selected papers report lutetium-177 PSMA-617 for metastatic castration-resistant prostate cancer and the PSMAfore comparison against a change of androgen receptor pathway inhibitor in taxane-naive patients. He chaired the Alliance genitourinary committee and focuses on radioligand therapy and imaging biomarkers.",
    "profiles": [
      {
        "label": "MSK profile",
        "url": "https://www.mskcc.org/cancer-care/doctors/michael-morris"
      },
      {
        "label": "PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=Morris%20MJ%5BAuthor%5D"
      }
    ],
    "papers": [
      {
        "title": "Lutetium-177–PSMA-617 for metastatic castration-resistant prostate cancer",
        "journal": "New England Journal of Medicine",
        "year": 2021,
        "doi": "10.1056/NEJMoa2107322",
        "url": "https://doi.org/10.1056/NEJMoa2107322"
      },
      {
        "title": "177Lu-PSMA-617 versus a change of androgen receptor pathway inhibitor therapy for taxane-naive patients with progressive metastatic castration-resistant prostate cancer (PSMAfore)",
        "journal": "Lancet",
        "year": 2024,
        "doi": "10.1016/S0140-6736(24)01653-2",
        "url": "https://doi.org/10.1016/S0140-6736(24)01653-2"
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
    "trials": [
      "vision",
      "psmafore"
    ],
    "technologies": [
      "radioligand-therapy",
      "psma-pet"
    ]
  },
  {
    "kind": "person",
    "asOf": "2026-09-10",
    "links": [
      {
        "label": "PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=Sartor%20O%5BAuthor%5D%20PSMA%20lutetium"
      }
    ],
    "id": "oliver-sartor",
    "wikipedia": "https://en.wikipedia.org/wiki/Oliver_Sartor",
    "name": "A. Oliver Sartor",
    "role": "Professor of Medical Oncology and Urology, Mayo Clinic",
    "institutionId": "mayo-clinic",
    "institutions": [
      "mayo-clinic"
    ],
    "specialisms": [
      "Prostate cancer",
      "Radioligand therapy",
      "PSMA-targeted therapy",
      "Radium-223"
    ],
    "tldr": "Led VISION, the trial that made lutetium-PSMA the first radioligand therapy for prostate cancer.",
    "summary": "Oliver Sartor was co-principal investigator of VISION, which showed 177Lu-PSMA-617 improves survival in PSMA-positive metastatic castration-resistant prostate cancer and led to Pluvicto's approval, and was a lead investigator of PSMAfore, which moved the therapy before chemotherapy. He also co-led ALSYMPCA (radium-223). He directs the radiopharmaceutical trials programme at Mayo Clinic.",
    "profiles": [
      {
        "label": "PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=Sartor%20O%5BAuthor%5D%20PSMA%20lutetium"
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
    "trials": [
      "vision",
      "psmafore",
      "alsympca"
    ],
    "technologies": [
      "radioligand-therapy",
      "psma-pet"
    ],
    "keyPapers": [
      "paper-vision-nejm-2021"
    ],
    "tags": [
      "prostate",
      "radioligand",
      "trialist"
    ],
    "papers": [
      {
        "title": "Lutetium-177-PSMA-617 for metastatic castration-resistant prostate cancer (VISION)",
        "journal": "NEJM",
        "year": 2021,
        "doi": "10.1056/NEJMoa2107322"
      },
      {
        "title": "Alpha emitter radium-223 and survival in metastatic prostate cancer (ALSYMPCA)",
        "journal": "NEJM",
        "year": 2013,
        "doi": "10.1056/NEJMoa1213755"
      }
    ]
  },
  {
    "kind": "person",
    "asOf": "2026-09-10",
    "institutions": [
      "eanm"
    ],
    "links": [
      {
        "label": "Society page",
        "url": "https://eanm.org/the-eanm-community/organisation/board/"
      },
      {
        "label": "PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=Erba+PA%5BAuthor%5D"
      }
    ],
    "id": "paola-anna-erba",
    "name": "Paola Anna Erba",
    "role": "President (2025-2026)",
    "institutionId": "eanm",
    "specialisms": [
      "Nuclear medicine",
      "Theranostics",
      "Molecular imaging"
    ],
    "tldr": "Italian nuclear medicine physician serving as President of the European Association of Nuclear Medicine.",
    "summary": "Paola Anna Erba is President of the European Association of Nuclear Medicine (EANM) for the 2025-2026 term. She is a nuclear medicine physician and academic in Italy whose research covers molecular imaging, radioligand therapy and infection and inflammation imaging. As EANM President she leads the society's congress, guidelines and advocacy for nuclear medicine in oncology.",
    "profiles": [
      {
        "label": "Society page",
        "url": "https://eanm.org/the-eanm-community/organisation/board/"
      },
      {
        "label": "PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=Erba+PA%5BAuthor%5D"
      }
    ],
    "tags": [
      "leadership",
      "clinician-scientist",
      "nuclear medicine",
      "theranostics"
    ],
    "indications": [
      "neuroendocrine",
      "prostate"
    ],
    "papers": [
      {
        "title": "[18F]Choline PET/CT and stereotactic body radiotherapy on treatment decision making of oligometastatic prostate cancer patients: preliminary results",
        "journal": "Radiation Oncology",
        "year": 2016,
        "doi": "10.1186/s13014-016-0586-x"
      },
      {
        "title": "Artificial intelligence and hybrid imaging: the best match for personalized medicine in oncology",
        "journal": "European Journal of Hybrid Imaging",
        "year": 2020,
        "doi": "10.1186/s41824-020-00094-8"
      },
      {
        "title": "Differentiated Thyroid Cancer: A New Perspective with Radiolabeled Somatostatin Analogues for Imaging and Treatment of Patients",
        "journal": "Thyroid®",
        "year": 2014,
        "doi": "10.1089/thy.2013.0225"
      }
    ]
  },
  {
    "kind": "person",
    "asOf": "2026-09-08",
    "links": [
      {
        "label": "PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=Bartenstein%20P%5BAuthor%5D%20PSMA"
      }
    ],
    "id": "peter-bartenstein",
    "name": "Peter Bartenstein",
    "role": "Director, Department of Nuclear Medicine, LMU Munich",
    "institutionId": "lmu-munich",
    "institutions": [
      "lmu-munich"
    ],
    "specialisms": [
      "Nuclear medicine",
      "PSMA theranostics",
      "Neuro-imaging"
    ],
    "tldr": "Peter Bartenstein is a nuclear medicine head whose department is a leading European PSMA theranostics centre.",
    "summary": "Peter Bartenstein is Director of the Department of Nuclear Medicine at LMU Klinikum München. His specialisms are nuclear medicine, PSMA theranostics and neuro-imaging. His department is a leading European centre for PSMA PET and lutetium-177 PSMA radioligand therapy, and it co-developed 177Lu-PSMA-I&T. His papers include a dosimetry study of 177Lu-DKFZ-PSMA-617 as a new radiopharmaceutical for metastatic prostate cancer, the first clinical results of 18F-SiFAlin-TATE PET for imaging neuroendocrine tumours, and a European Urology study showing that 68Ga-PSMA PET/CT accurately stages lymph node regions before dissection in prostate cancer. His publications are listed on PubMed.",
    "profiles": [
      {
        "label": "PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=Bartenstein%20P%5BAuthor%5D%20PSMA"
      }
    ],
    "indications": [
      "prostate"
    ],
    "targets": [
      "psma"
    ],
    "technologies": [
      "psma-pet",
      "radioligand-therapy"
    ],
    "drugs": [
      "lu177-psma-it"
    ],
    "papers": [
      {
        "title": "Dosimetry for 177Lu-DKFZ-PSMA-617: a new radiopharmaceutical for the treatment of metastatic prostate cancer",
        "journal": "European Journal of Nuclear Medicine and Molecular Imaging",
        "year": 2015,
        "doi": "10.1007/s00259-015-3174-7"
      },
      {
        "title": "Biodistribution and first clinical results of 18F-SiFAlin-TATE PET: a novel 18F-labeled somatostatin analog for imaging of neuroendocrine tumors",
        "journal": "European Journal of Nuclear Medicine and Molecular Imaging",
        "year": 2019,
        "doi": "10.1007/s00259-019-04501-6"
      },
      {
        "title": "68Ga-PSMA Positron Emission Tomography/Computed Tomography Provides Accurate Staging of Lymph Node Regions Prior to Lymph Node Dissection in Patients with Prostate Cancer",
        "journal": "European Urology",
        "year": 2016,
        "doi": "10.1016/j.eururo.2015.12.051"
      }
    ]
  },
  {
    "kind": "person",
    "asOf": "2026-09-10",
    "links": [
      {
        "label": "Source: Centre Henri Becquerel organisation page",
        "url": "https://www.becquerel.fr/le-centre/decouvrir-le-centre/organisation/"
      }
    ],
    "id": "pierre-vera",
    "journals": [
      "lancet-oncology"
    ],
    "name": "Pierre Vera",
    "role": "Directeur Général (Director General), Centre Henri Becquerel",
    "specialisms": [
      "Nuclear medicine",
      "Cancer imaging",
      "Cancer centre management"
    ],
    "tldr": "Nuclear medicine physician who directs Centre Henri Becquerel, the comprehensive cancer centre for the Rouen area in Normandy.",
    "summary": "Professeur Pierre Vera is Directeur Général of Centre Henri Becquerel, the Centre de Lutte Contre le Cancer in Rouen. He is a nuclear medicine physician, and the centre's organisation page records his appointment to a five-year term beginning in 2017. He works with Artus Paty, Directeur Général Adjoint, who has been at the centre since 2016, supported by a Comité de Direction (CODIR) and a Conférence Médicale d'Etablissement (CME). The centre is overseen by a board of directors chaired by a representative of the State.",
    "profiles": [
      {
        "label": "Centre Henri Becquerel organisation page",
        "url": "https://www.becquerel.fr/le-centre/decouvrir-le-centre/organisation/"
      },
      {
        "label": "PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=Vera+P%5BAuthor%5D+AND+Rouen"
      }
    ],
    "tags": [
      "leadership",
      "clinician-scientist",
      "comprehensive-cancer-centre"
    ],
    "papers": [
      {
        "title": "Adaptive radiotherapy (up to 74 Gy) or standard radiotherapy (66 Gy) for patients with stage III non-small-cell lung cancer, according to [18F]FDG-PET tumour residual uptake at 42 Gy (RTEP7–IFCT-1402): a multicentre, randomised, controlled phase 2 trial",
        "journal": "The Lancet Oncology",
        "year": 2024,
        "doi": "10.1016/s1470-2045(24)00320-6"
      },
      {
        "title": "Radiomics: Principles and radiotherapy applications",
        "journal": "Critical Reviews in Oncology/Hematology",
        "year": 2019,
        "doi": "10.1016/j.critrevonc.2019.03.015"
      },
      {
        "title": "Non-invasive monitoring of diffuse large B-cell lymphoma by cell-free DNA high-throughput targeted sequencing: analysis of a prospective cohort",
        "journal": "Blood Cancer Journal",
        "year": 2018,
        "doi": "10.1038/s41408-018-0111-6"
      }
    ]
  },
  {
    "kind": "person",
    "asOf": "2026-09-10",
    "institutions": [
      "iaea"
    ],
    "links": [
      {
        "label": "Institution profile",
        "url": "https://www.iaea.org/services/rays-of-hope"
      }
    ],
    "id": "rafael-mariano-grossi",
    "name": "Rafael Mariano Grossi",
    "role": "Director General",
    "institutionId": "iaea",
    "specialisms": [
      "International diplomacy",
      "Nuclear applications in health",
      "Global cancer care access"
    ],
    "tldr": "Argentine diplomat leading the IAEA since 2019, whose Rays of Hope initiative expands radiotherapy and nuclear medicine access in low- and middle-income countries.",
    "summary": "Rafael Mariano Grossi has been Director General of the International Atomic Energy Agency since December 2019. Under his leadership the IAEA launched Rays of Hope, an initiative to close the gap in access to radiotherapy, diagnostic imaging and nuclear medicine for cancer in countries with little or no capacity. His role is recorded in the public record.",
    "profiles": [
      {
        "label": "Institution profile",
        "url": "https://www.iaea.org/services/rays-of-hope"
      }
    ],
    "tags": [
      "leadership",
      "radiotherapy",
      "global health"
    ],
    "papers": [
      {
        "title": "The IAEA’s Rays of Hope leverages nuclear science and collaboration to fight cancer in developing countries",
        "journal": "Journal of Cancer Policy",
        "year": 2022,
        "doi": "10.1016/j.jcpo.2022.100357"
      }
    ]
  },
  {
    "id": "rahul-aggarwal",
    "kind": "person",
    "asOf": "2026-09-08",
    "name": "Rahul Aggarwal",
    "role": "Associate Director for Clinical Sciences, UCSF Helen Diller Family Comprehensive Cancer Center",
    "institutionId": "ucsf",
    "institutions": [
      "ucsf"
    ],
    "specialisms": [
      "Prostate cancer",
      "Neuroendocrine prostate cancer",
      "PSMA theranostics"
    ],
    "tldr": "Prostate oncologist studying how tumours transform to escape hormone therapy and how to target them with radioligands.",
    "summary": "Rahul Aggarwal is Associate Director for Clinical Sciences at the UCSF Helen Diller Family Comprehensive Cancer Center. A medical oncologist specialising in prostate cancer, neuroendocrine prostate cancer and PSMA theranostics, he leads UCSF's early-phase and prostate cancer clinical research and defined treatment-emergent small-cell neuroendocrine prostate cancer, the way tumours transform to escape hormone therapy. His papers include a multi-institutional prospective study characterising that disease clinically and genomically, and a report on heterogeneous flare in PSMA PET tracer uptake after starting androgen pathway blockade. He leads PSMA radioligand and combination trials, including with lutetium-177 vipivotide tetraxetan.",
    "indications": [
      "prostate"
    ],
    "targets": [
      "psma"
    ],
    "drugs": [
      "pluvicto"
    ],
    "technologies": [
      "psma-pet",
      "radioligand-therapy"
    ],
    "profiles": [
      {
        "label": "UCSF profile",
        "url": "https://profiles.ucsf.edu/search/?searchtype=people&searchfor=Rahul%20Aggarwal"
      },
      {
        "label": "PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=Aggarwal%20R%5BAuthor%5D"
      },
      {
        "label": "Google Scholar",
        "url": "https://scholar.google.com/scholar?q=Rahul%20Aggarwal"
      }
    ],
    "papers": [
      {
        "title": "Clinical and Genomic Characterization of Treatment-Emergent Small-Cell Neuroendocrine Prostate Cancer: A Multi-institutional Prospective Study",
        "journal": "Journal of Clinical Oncology",
        "year": 2018,
        "doi": "10.1200/JCO.2017.77.6880",
        "url": "https://doi.org/10.1200/JCO.2017.77.6880"
      },
      {
        "title": "Heterogeneous Flare in Prostate-specific Membrane Antigen Positron Emission Tomography Tracer Uptake with Initiation of Androgen Pathway Blockade in Metastatic Prostate Cancer",
        "journal": "European Urology Oncology",
        "year": 2018,
        "doi": "10.1016/j.euo.2018.03.010",
        "url": "https://doi.org/10.1016/j.euo.2018.03.010"
      }
    ],
    "links": [
      {
        "label": "UCSF profile",
        "url": "https://profiles.ucsf.edu/search/?searchtype=people&searchfor=Rahul%20Aggarwal"
      },
      {
        "label": "PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=Aggarwal%20R%5BAuthor%5D"
      },
      {
        "label": "Google Scholar",
        "url": "https://scholar.google.com/scholar?q=Rahul%20Aggarwal"
      }
    ]
  },
  {
    "kind": "person",
    "asOf": "2026-09-17",
    "institutions": [
      "curanosticum"
    ],
    "links": [
      {
        "label": "Curanosticum",
        "url": "https://www.curanosticum.de/en/"
      },
      {
        "label": "PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=Baum+RP%5BAuthor%5D+radionuclide"
      }
    ],
    "id": "richard-baum",
    "name": "Richard P. Baum",
    "role": "Nuclear medicine specialist, Curanosticum Wiesbaden-Frankfurt",
    "institutionId": "curanosticum",
    "specialisms": [
      "Nuclear medicine",
      "Peptide receptor radionuclide therapy",
      "PSMA radioligand therapy",
      "Theranostics"
    ],
    "tldr": "One of the pioneers of peptide receptor radionuclide therapy for neuroendocrine tumours, now practising at the Curanosticum theranostics centre in Wiesbaden.",
    "summary": "Richard Baum is a specialist in nuclear medicine whom Curanosticum describes as one of the leading experts in therapeutic nuclear medicine and part of its medical team since 2020. The centre offers PET-CT, radioiodine therapy, PSMA radioligand therapy and DOTATOC receptor radionuclide therapy. Before Wiesbaden he built the theranostics programme at the Zentralklinik Bad Berka, where lutetium-177 and yttrium-90 labelled somatostatin analogues were used to treat thousands of patients with neuroendocrine tumours, work that preceded the approvals of lutetium-177 dotatate and lutetium-177 PSMA-617. His publications are listed on PubMed.",
    "profiles": [
      {
        "label": "Curanosticum",
        "url": "https://www.curanosticum.de/en/"
      },
      {
        "label": "PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=Baum+RP%5BAuthor%5D+radionuclide"
      }
    ],
    "papers": [
      {
        "title": "Phase 3 Trial of 177Lu-Dotatate for Midgut Neuroendocrine Tumors",
        "journal": "New England Journal of Medicine",
        "year": 2017,
        "doi": "10.1056/NEJMoa1607427",
        "url": "https://doi.org/10.1056/NEJMoa1607427",
        "note": "Europe PMC author record matched by affiliation"
      },
      {
        "title": "FDG PET and PET/CT: EANM procedure guidelines for tumour PET imaging: version 1.0",
        "journal": "European Journal of Nuclear Medicine and Molecular Imaging",
        "year": 2010,
        "doi": "10.1007/s00259-009-1297-4",
        "url": "https://doi.org/10.1007/s00259-009-1297-4",
        "note": "Europe PMC author record matched by affiliation"
      },
      {
        "title": "German Multicenter Study Investigating 177Lu-PSMA-617 Radioligand Therapy in Advanced Prostate Cancer Patients",
        "journal": "Journal of Nuclear Medicine",
        "year": 2017,
        "doi": "10.2967/jnumed.116.183194",
        "url": "https://doi.org/10.2967/jnumed.116.183194",
        "note": "Europe PMC author record matched by affiliation"
      }
    ],
    "technologies": [
      "radioligand-therapy",
      "lu177-radioligand-therapy",
      "psma-pet"
    ],
    "indications": [
      "neuroendocrine",
      "prostate"
    ],
    "tags": [
      "leadership"
    ]
  },
  {
    "kind": "person",
    "asOf": "2026-09-08",
    "institutions": [
      "penn-abramson"
    ],
    "links": [
      {
        "label": "PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=Mach%20RH%5BAuthor%5D"
      }
    ],
    "id": "robert-mach",
    "orcid": "0000-0002-7645-2869",
    "name": "Robert H. Mach",
    "role": "Britton Chance Professor of Radiology; Director, PET Radiochemistry",
    "institutionId": "penn-abramson",
    "specialisms": [
      "Radiochemistry",
      "PARP PET",
      "Molecular imaging"
    ],
    "tldr": "Robert Mach invented the PARP PET tracer FluorThanatrace that images DNA repair capacity in tumours.",
    "summary": "Robert H. Mach is the Britton Chance Professor of Radiology and Director of PET Radiochemistry at the Abramson Cancer Center, University of Pennsylvania. He is a radiochemist known for inventing the PARP PET tracer fluorine-18 FluorThanatrace, which images DNA repair capacity in tumours, alongside other tracers for imaging drug targets. His selected paper reports FluorThanatrace uptake as a marker of PARP1 expression and activity in breast cancer. His laboratory's tracers enable PARP-inhibitor patient selection studies and molecular imaging with PET.",
    "profiles": [
      {
        "label": "PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=Mach%20RH%5BAuthor%5D"
      }
    ],
    "papers": [
      {
        "title": "[18F]FluorThanatrace uptake as a marker of PARP1 expression and activity in breast cancer",
        "journal": "American Journal of Nuclear Medicine and Molecular Imaging",
        "year": 2018
      }
    ],
    "targets": [
      "parp"
    ],
    "technologies": [
      "parp-pet",
      "pet"
    ]
  },
  {
    "kind": "person",
    "asOf": "2026-09-08",
    "links": [
      {
        "label": "Peter MacCallum Cancer Centre",
        "url": "https://www.petermac.org"
      },
      {
        "label": "PubMed author search",
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=Sandhu%20S%5BAuthor%5D%20Peter%20MacCallum%20prostate%20PSMA"
      }
    ],
    "id": "sandhu-shahneen",
    "orcid": "0000-0002-8660-4475",
    "name": "Shahneen Sandhu",
    "role": "Medical oncologist; Lead, Genitourinary Oncology Theranostics, Peter Mac",
    "institutionId": "peter-mac",
    "institutions": [
      "peter-mac"
    ],
    "specialisms": [
      "Prostate cancer",
      "Theranostics",
      "Melanoma",
      "Early-phase trials"
    ],
    "tldr": "Runs the medical oncology side of Peter Mac's theranostics programme, combining lutetium-PSMA with hormonal and immune therapies.",
    "summary": "Shahneen Sandhu is a medical oncologist and Lead for Genitourinary Oncology Theranostics at the Peter MacCallum Cancer Centre in Melbourne. She runs the medical oncology side of Peter Mac's theranostics programme, leading combination trials such as PRINCE and UpFrontPSMA that pair lutetium-177 PSMA-617 with androgen receptor pathway inhibitors, chemotherapy and immunotherapy. Her publications include the UpFrontPSMA trial of sequential lutetium-177 PSMA-617 and docetaxel against docetaxel alone in metastatic hormone-sensitive prostate cancer. She also contributes to melanoma and early-phase research.",
    "profiles": [
      {
        "label": "Peter MacCallum Cancer Centre",
        "url": "https://www.petermac.org"
      },
      {
        "label": "PubMed author search",
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=Sandhu%20S%5BAuthor%5D%20Peter%20MacCallum%20prostate%20PSMA"
      }
    ],
    "papers": [
      {
        "title": "Sequential [177Lu]Lu-PSMA-617 and docetaxel versus docetaxel in metastatic hormone-sensitive prostate cancer (UpFrontPSMA)",
        "journal": "Lancet Oncology",
        "year": 2024,
        "doi": "10.1016/S1470-2045(24)00440-6"
      }
    ],
    "indications": [
      "prostate"
    ],
    "targets": [
      "psma"
    ],
    "drugs": [
      "pluvicto"
    ],
    "technologies": [
      "radioligand-therapy"
    ]
  },
  {
    "kind": "person",
    "asOf": "2026-09-10",
    "links": [
      {
        "label": "PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=Gillessen%20S%5BAuthor%5D%20prostate%20consensus"
      }
    ],
    "id": "silke-gillessen",
    "orcid": "0000-0001-5746-6555",
    "name": "Silke Gillessen",
    "role": "Medical and Scientific Director, Oncology Institute of Southern Switzerland (IOSI), Bellinzona",
    "specialisms": [
      "Prostate cancer",
      "Consensus guidelines",
      "Genitourinary oncology",
      "Treatment sequencing"
    ],
    "tldr": "Founder and chair of the APCCC consensus conference that guides advanced prostate cancer management worldwide.",
    "summary": "Silke Gillessen (IOSI, Bellinzona) founded the Advanced Prostate Cancer Consensus Conference, whose biennial reports are the most widely used expert guidance on managing advanced prostate cancer where trial evidence is lacking. She was a lead investigator in STAMPEDE and in trials of PSMA radioligand therapy and helped establish the Swiss Group for Clinical Cancer Research GU programme.",
    "profiles": [
      {
        "label": "PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=Gillessen%20S%5BAuthor%5D%20prostate%20consensus"
      }
    ],
    "indications": [
      "prostate"
    ],
    "trials": [
      "stampede"
    ],
    "tags": [
      "prostate",
      "guidelines",
      "switzerland"
    ],
    "papers": [
      {
        "title": "Management of patients with advanced prostate cancer: report from the Advanced Prostate Cancer Consensus Conference 2021",
        "journal": "European Urology",
        "year": 2022,
        "doi": "10.1016/j.eururo.2022.04.002"
      },
      {
        "title": "Abiraterone for prostate cancer not previously treated with hormone therapy (STAMPEDE)",
        "journal": "NEJM",
        "year": 2017,
        "doi": "10.1056/NEJMoa1702900"
      }
    ],
    "journals": [
      "european-urology"
    ]
  },
  {
    "kind": "person",
    "asOf": "2026-09-10",
    "links": [
      {
        "label": "PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=Singh%20S%5BAuthor%5D%20neuroendocrine%20NETTER-2"
      }
    ],
    "id": "simron-singh",
    "name": "Simron Singh",
    "role": "Medical Oncologist and Co-Director, Susan Leslie Clinic for Neuroendocrine Tumours, Sunnybrook Odette Cancer Centre",
    "specialisms": [
      "Neuroendocrine tumours",
      "Radioligand therapy",
      "Health services research",
      "Guidelines"
    ],
    "tldr": "Led NETTER-2, which moved lutetium dotatate into first-line treatment of higher-grade neuroendocrine tumours.",
    "summary": "Simron Singh was principal investigator of NETTER-2, which showed first-line 177Lu-DOTATATE plus octreotide dramatically improves progression-free survival over high-dose octreotide in grade 2-3 gastroenteropancreatic neuroendocrine tumours, extending radioligand therapy to newly diagnosed patients. He has led Canadian and international NET guidelines and studies of NET epidemiology and patient-reported outcomes.",
    "profiles": [
      {
        "label": "PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=Singh%20S%5BAuthor%5D%20neuroendocrine%20NETTER-2"
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
      "radioligand-therapy"
    ],
    "keyPapers": [
      "paper-netter-2-lancet-2024"
    ],
    "tags": [
      "neuroendocrine",
      "radioligand",
      "canada"
    ],
    "papers": [
      {
        "title": "[177Lu]Lu-DOTA-TATE plus long-acting octreotide versus high-dose long-acting octreotide for the treatment of newly diagnosed, advanced grade 2-3, well-differentiated, gastroenteropancreatic neuroendocrine tumours (NETTER-2)",
        "journal": "Lancet",
        "year": 2024,
        "doi": "10.1016/S0140-6736(24)00701-3"
      },
      {
        "title": "Commonwealth Neuroendocrine Tumour Research Collaboration and the North American Neuroendocrine Tumor Society guidelines for the diagnosis and management of patients with lung neuroendocrine tumors",
        "journal": "Journal of Thoracic Oncology",
        "year": 2020,
        "doi": "10.1016/j.jtho.2020.06.021"
      },
      {
        "title": "NETTER-2: lutetium-177 dotatate as first treatment for higher-grade gastroenteropancreatic neuroendocrine tumours",
        "journal": "The Lancet",
        "year": 2024,
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=NETTER-2+lutetium+dotatate+first-line+Singh+Lancet"
      }
    ]
  },
  {
    "kind": "person",
    "asOf": "2026-09-08",
    "links": [
      {
        "label": "Fudan University Shanghai Cancer Center",
        "url": "https://www.shca.org.cn"
      },
      {
        "label": "PubMed author search",
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=Song%20S%5BAuthor%5D%20Fudan%20TROP2%20PET"
      }
    ],
    "id": "song-shaoli",
    "name": "Shaoli Song",
    "role": "Professor and Director, Department of Nuclear Medicine, Fudan University Shanghai Cancer Center",
    "institutionId": "fuscc",
    "institutions": [
      "fuscc"
    ],
    "specialisms": [
      "Nuclear medicine",
      "PET tracer development",
      "TROP2 and HER2 PET",
      "Theranostics"
    ],
    "tldr": "Leads the nuclear medicine group behind the first human TROP2 PET imaging, aiming to pick patients for TROP2 ADCs with a scan.",
    "summary": "Shaoli Song is Professor and Director of the Department of Nuclear Medicine at Fudan University Shanghai Cancer Center. Her department developed and imaged the first TROP2-targeted PET tracers in patients with breast and other cancers, with the aim of selecting patients for TROP2 antibody-drug conjugates using a scan, alongside FAPI, HER2 and PSMA theranostic work. Her publications include head-to-head comparisons of FDG and FAPI PET-CT in recurrent soft tissue sarcoma and in platinum-sensitive recurrent ovarian cancer, and a study of preoperative FDG PET parameters for predicting microvascular invasion and recurrence in hepatocellular carcinoma. Her interests are PET tracer development and theranostics.",
    "profiles": [
      {
        "label": "Fudan University Shanghai Cancer Center",
        "url": "https://www.shca.org.cn"
      },
      {
        "label": "PubMed author search",
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=Song%20S%5BAuthor%5D%20Fudan%20TROP2%20PET"
      }
    ],
    "papers": [
      {
        "title": "Head-to-head evaluation of [18F]FDG and [68 Ga]Ga-DOTA-FAPI-04 PET/CT in recurrent soft tissue sarcoma",
        "journal": "European Journal of Nuclear Medicine and Molecular Imaging",
        "year": 2022,
        "doi": "10.1007/s00259-022-05700-4"
      },
      {
        "title": "Head-to-head comparison of [18F]-FDG and [68 Ga]-DOTA-FAPI-04 PET/CT for radiological evaluation of platinum-sensitive recurrent ovarian cancer",
        "journal": "European Journal of Nuclear Medicine and Molecular Imaging",
        "year": 2023,
        "doi": "10.1007/s00259-022-06096-x"
      },
      {
        "title": "The value of preoperative 18F-FDG PET metabolic and volumetric parameters in predicting microvascular invasion and postoperative recurrence of hepatocellular carcinoma",
        "journal": "Nuclear Medicine Communications",
        "year": 2021,
        "doi": "10.1097/mnm.0000000000001478"
      }
    ],
    "technologies": [
      "trop2-pet",
      "fapi-pet",
      "her2-pet"
    ],
    "targets": [
      "trop2",
      "fap"
    ]
  },
  {
    "id": "thomas-hope",
    "kind": "person",
    "asOf": "2026-09-08",
    "name": "Thomas A. Hope",
    "role": "Professor of Radiology; Chief of Nuclear Medicine, UCSF",
    "institutionId": "ucsf",
    "institutions": [
      "ucsf"
    ],
    "specialisms": [
      "Nuclear medicine",
      "PSMA PET",
      "Theranostics"
    ],
    "tldr": "Nuclear medicine physician who led the trials that got PSMA PET approved in the United States.",
    "summary": "Thomas Hope is Professor of Radiology and Chief of Nuclear Medicine at UCSF, within the UCSF Helen Diller Family Comprehensive Cancer Center. A nuclear medicine physician specialising in PSMA PET and theranostics, his prospective studies of 68Ga-PSMA-11 PET at UCSF and UCLA supported the first FDA approval of PSMA PET in the United States in 2020. His papers include a JAMA Oncology multicentre prospective phase 3 imaging trial of the diagnostic accuracy of 68Ga-PSMA-11 PET for pelvic nodal metastasis before radical prostatectomy and a JAMA Oncology prospective single-arm trial assessing its accuracy in localising recurrent prostate cancer. He leads theranostics research and PSMA radioligand dosimetry work in prostate cancer.",
    "indications": [
      "prostate"
    ],
    "targets": [
      "psma"
    ],
    "technologies": [
      "psma-pet",
      "radioligand-therapy",
      "pet"
    ],
    "profiles": [
      {
        "label": "UCSF profile",
        "url": "https://profiles.ucsf.edu/search/?searchtype=people&searchfor=Thomas%20A.%20Hope"
      },
      {
        "label": "PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=Hope%20TA%5BAuthor%5D"
      },
      {
        "label": "Google Scholar",
        "url": "https://scholar.google.com/scholar?q=Thomas%20A.%20Hope"
      }
    ],
    "papers": [
      {
        "title": "Diagnostic Accuracy of 68Ga-PSMA-11 PET for Pelvic Nodal Metastasis Detection Prior to Radical Prostatectomy and Pelvic Lymph Node Dissection: A Multicenter Prospective Phase 3 Imaging Trial",
        "journal": "JAMA Oncology",
        "year": 2021,
        "doi": "10.1001/jamaoncol.2021.3771",
        "url": "https://doi.org/10.1001/jamaoncol.2021.3771"
      },
      {
        "title": "Assessment of 68Ga-PSMA-11 PET Accuracy in Localizing Recurrent Prostate Cancer: A Prospective Single-Arm Clinical Trial",
        "journal": "JAMA Oncology",
        "year": 2019,
        "doi": "10.1001/jamaoncol.2019.0096",
        "url": "https://doi.org/10.1001/jamaoncol.2019.0096"
      }
    ],
    "links": [
      {
        "label": "UCSF profile",
        "url": "https://profiles.ucsf.edu/search/?searchtype=people&searchfor=Thomas%20A.%20Hope"
      },
      {
        "label": "PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=Hope%20TA%5BAuthor%5D"
      },
      {
        "label": "Google Scholar",
        "url": "https://scholar.google.com/scholar?q=Thomas%20A.%20Hope"
      }
    ]
  },
  {
    "kind": "person",
    "asOf": "2026-09-08",
    "links": [
      {
        "label": "PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=Haberkorn%20U%5BAuthor%5D%20FAPI"
      }
    ],
    "id": "uwe-haberkorn",
    "name": "Uwe Haberkorn",
    "role": "Head of Nuclear Medicine, Heidelberg University Hospital and DKFZ",
    "institutionId": "heidelberg-nct",
    "institutions": [
      "heidelberg-nct"
    ],
    "specialisms": [
      "Nuclear medicine",
      "FAP-targeted radiopharmaceuticals",
      "Theranostics"
    ],
    "tldr": "Nuclear medicine physician whose group invented FAPI PET tracers and pioneered PSMA and FAP radioligand therapy.",
    "summary": "Uwe Haberkorn is Head of Nuclear Medicine at Heidelberg University Hospital and the German Cancer Research Center (DKFZ). His specialisms are nuclear medicine, FAP-targeted radiopharmaceuticals and theranostics, with a focus on the FAP and PSMA targets. His Heidelberg group invented the quinoline-based FAP inhibitor (FAPI) tracers, and his Journal of Nuclear Medicine paper reported 68Ga-FAPI PET/CT tracer uptake across 28 different kinds of cancer. The group also led early PSMA-617 and FAP-targeted radioligand therapy in humans, and his record links him to FAP-2286 and lutetium-177 vipivotide tetraxetan. His publications are listed on PubMed.",
    "profiles": [
      {
        "label": "PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=Haberkorn%20U%5BAuthor%5D%20FAPI"
      }
    ],
    "targets": [
      "fap",
      "psma"
    ],
    "technologies": [
      "fapi-pet",
      "radioligand-therapy",
      "psma-pet"
    ],
    "drugs": [
      "fap-2286",
      "pluvicto"
    ],
    "papers": [
      {
        "title": "68Ga-FAPI PET/CT: tracer uptake in 28 different kinds of cancer",
        "journal": "Journal of Nuclear Medicine",
        "year": 2019,
        "doi": "10.2967/jnumed.119.227967"
      }
    ],
    "journals": [
      "journal-of-nuclear-medicine"
    ]
  },
  {
    "kind": "person",
    "asOf": "2026-09-10",
    "institutions": [
      "snmmi"
    ],
    "links": [
      {
        "label": "Society page",
        "url": "https://www.snmmi.org/"
      }
    ],
    "id": "virginia-pappas",
    "name": "Virginia Pappas",
    "role": "Chief Executive Officer",
    "institutionId": "snmmi",
    "specialisms": [
      "Association management",
      "Nuclear medicine advocacy"
    ],
    "tldr": "Long-serving CEO of the Society of Nuclear Medicine and Molecular Imaging.",
    "summary": "Virginia Pappas is Chief Executive Officer of the Society of Nuclear Medicine and Molecular Imaging (SNMMI), the principal US professional society for nuclear medicine physicians, scientists and technologists. She leads the society's staff and operations, supporting its scientific meetings, journals and advocacy for molecular imaging and radiopharmaceutical therapy in oncology.",
    "profiles": [
      {
        "label": "Society page",
        "url": "https://www.snmmi.org/"
      }
    ],
    "tags": [
      "leadership",
      "nuclear medicine"
    ]
  },
  {
    "kind": "person",
    "asOf": "2026-09-10",
    "links": [
      {
        "label": "PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=Weber%20WA%5BAuthor%5D%20PET"
      }
    ],
    "id": "wolfgang-weber",
    "orcid": "0000-0002-7854-4345",
    "name": "Wolfgang A. Weber",
    "role": "Chair of Nuclear Medicine, Klinikum rechts der Isar, Technical University of Munich",
    "institutionId": "tum-munich",
    "institutions": [
      "tum-munich",
      "snmmi"
    ],
    "specialisms": [
      "Molecular imaging",
      "PET response assessment",
      "Theranostics",
      "Radiopharmaceutical development"
    ],
    "tldr": "Nuclear medicine physician who established PET response criteria and leads Munich's radiopharmaceutical development pipeline.",
    "summary": "Wolfgang Weber led the early studies showing FDG-PET response after one cycle of chemotherapy predicts outcome in lung and gastro-oesophageal cancer and helped define PERCIST response criteria. He directs nuclear medicine at TUM, where PSMA ligands and FAP inhibitors were developed, and has been president of the Society of Nuclear Medicine and Molecular Imaging. His current focus is trial design for theranostics.",
    "profiles": [
      {
        "label": "PubMed",
        "url": "https://pubmed.ncbi.nlm.nih.gov/?term=Weber%20WA%5BAuthor%5D%20PET"
      }
    ],
    "technologies": [
      "pet",
      "fdg-pet",
      "radioligand-therapy",
      "fapi-pet"
    ],
    "tags": [
      "nuclear-medicine",
      "imaging",
      "theranostics"
    ],
    "papers": [
      {
        "title": "Positron emission tomography in non-small-cell lung cancer: prediction of response to chemotherapy by quantitative assessment of glucose use",
        "journal": "JCO",
        "year": 2003,
        "doi": "10.1200/JCO.2003.06.120"
      },
      {
        "title": "Prediction of response to preoperative chemotherapy in adenocarcinomas of the esophagogastric junction by metabolic imaging",
        "journal": "JCO",
        "year": 2001,
        "doi": "10.1200/JCO.2001.19.12.3058"
      }
    ]
  }
];
