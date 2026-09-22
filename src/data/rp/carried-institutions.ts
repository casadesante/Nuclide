/**
 * Institutions: records carried over from Nuclide.
 *
 * Carried over from the Nuclide corpus (https://github.com/casadesante/Nuclide), CC BY-NC 4.0, and narrowed to
 * radiopharmaceutical use. Facts and sources are as Nuclide held them on the `asOf` date of each record;
 * check anything that matters at the primary source each record links.
 */
import type { EntityInput } from "@/lib/schema";

export const carriedInstitutions: EntityInput[] = [
  {
    "kind": "institution",
    "asOf": "2026-09-09",
    "id": "aiims-delhi",
    "wikipedia": "https://en.wikipedia.org/wiki/All_India_Institute_of_Medical_Sciences,_Delhi",
    "name": "All India Institute of Medical Sciences, New Delhi",
    "aka": [
      "AIIMS",
      "Dr B.R. Ambedkar Institute Rotary Cancer Hospital",
      "National Cancer Institute Jhajjar"
    ],
    "city": "New Delhi",
    "country": "IN",
    "lat": 28.567,
    "lng": 77.21,
    "institutionType": "hospital",
    "website": "https://www.aiims.edu",
    "tldr": "AIIMS New Delhi is India's flagship public medical institute; its Rotary Cancer Hospital and the National Cancer Institute campus at Jhajjar anchor government cancer research, and its investigators lead Indian studies in paediatric oncology, gallbladder cancer, PSMA radioligand therapy and low-cost CAR-T.",
    "summary": "AIIMS New Delhi was created by an Act of Parliament in 1956 as India's flagship medical institute and hospital. Cancer care is concentrated in the Dr B.R. Ambedkar Institute Rotary Cancer Hospital, opened in 1983, and in the National Cancer Institute at Jhajjar, Haryana, a large AIIMS-run cancer campus commissioned from 2019 with proton therapy planned and a national biobank and screening research mandate. AIIMS investigators lead Indian studies in paediatric oncology, gallbladder cancer (unusually common in northern India), oral and cervical cancer screening, radiation oncology and nuclear medicine (PSMA and FAPI PET, radioligand therapy), and haematology including low-cost CAR-T development with IIT Bombay partners. It sets national training standards and publishes the largest volume of oncology research of any Indian public institution.",
    "programs": [
      "Rotary Cancer Hospital",
      "National Cancer Institute Jhajjar",
      "Nuclear medicine and theranostics",
      "Paediatric oncology",
      "Gallbladder cancer"
    ],
    "links": [
      {
        "label": "AIIMS New Delhi",
        "url": "https://www.aiims.edu"
      }
    ],
    "indications": [
      "prostate"
    ],
    "technologies": [
      "radioligand-therapy",
      "psma-pet",
      "fapi-pet"
    ]
  },
  {
    "kind": "institution",
    "asOf": "2026-09-09",
    "id": "anzup",
    "name": "ANZUP Cancer Trials Group",
    "aka": [
      "Australian and New Zealand Urogenital and Prostate Cancer Trials Group",
      "ANZUP"
    ],
    "institutionType": "consortium",
    "city": "Sydney",
    "country": "AU",
    "lat": -33.868,
    "lng": 151.209,
    "website": "https://anzup.org.au",
    "tldr": "The Australian genitourinary trials group behind TheraP and proPSMA, the trials that put PSMA imaging and lutetium-PSMA therapy on the map.",
    "summary": "Formed in 2008 to unite Australia and New Zealand's prostate, kidney, bladder, testicular and penile cancer researchers. ANZUP 1603 TheraP was the first randomised trial of lutetium-177 PSMA-617, showing higher PSA response than cabazitaxel and paving the way for VISION and the Pluvicto approval, and proPSMA (ANZUP 1702) showed PSMA PET-CT outperforms conventional imaging for staging high-risk prostate cancer. ENZAMET and ENZARAD tested enzalutamide with docetaxel and with radiotherapy. Trials are run through the NHMRC Clinical Trials Centre at the University of Sydney, and consumer advisory panels are built into every study.",
    "programs": [
      "TheraP (Lu-PSMA vs cabazitaxel)",
      "proPSMA (PSMA PET staging)",
      "ENZAMET / ENZARAD",
      "Bladder and kidney cancer trials",
      "Consumer involvement"
    ],
    "links": [
      {
        "label": "ANZUP",
        "url": "https://anzup.org.au"
      },
      {
        "label": "Trials",
        "url": "https://anzup.org.au/trials/"
      }
    ],
    "trials": [
      "therap",
      "propsma"
    ],
    "drugs": [
      "pluvicto"
    ],
    "technologies": [
      "radioligand-therapy",
      "psma-pet"
    ],
    "indications": [
      "prostate",
      "rcc"
    ],
    "people": [
      "hofman-michael",
      "sandhu-shahneen"
    ],
    "institutions": [
      "peter-mac"
    ],
    "terms": [
      "theranostics"
    ]
  },
  {
    "kind": "institution",
    "asOf": "2026-09-09",
    "id": "ccc-wuerzburg",
    "name": "Comprehensive Cancer Center Mainfranken, University Hospital Würzburg",
    "aka": [
      "CCC Mainfranken",
      "Universitätsklinikum Würzburg",
      "NCT WERA"
    ],
    "city": "Würzburg",
    "country": "DE",
    "lat": 49.802,
    "lng": 9.957,
    "institutionType": "cancer-center",
    "website": "https://www.ccc.ukw.de",
    "university": "Julius-Maximilians-Universität Würzburg",
    "tldr": "The university where Röntgen discovered X-rays, now a world centre for CAR-T and bispecific antibodies in multiple myeloma under Hermann Einsele.",
    "summary": "Wilhelm Conrad Röntgen discovered X-rays at Würzburg in 1895, the founding moment of radiation medicine. Today the CCC Mainfranken is a German Cancer Aid Oncology Center of Excellence and, with Erlangen, Regensburg and Augsburg, one of the National Center for Tumor Diseases sites (NCT WERA) since 2023. Hermann Einsele's Department of Internal Medicine II has been a leading European site for BCMA-directed CAR-T and bispecific antibodies in myeloma, including the CARTITUDE and MajesTEC programmes, and was among the first in Europe to treat patients with these agents. The centre also has strong programmes in stem cell transplantation, neuro-oncology, nuclear medicine and theranostics, and translational immunology.",
    "programs": [
      "Multiple myeloma CAR-T and bispecifics",
      "Stem cell transplantation",
      "Theranostics",
      "NCT WERA"
    ],
    "indications": [
      "dlbcl"
    ],
    "technologies": [
      "radioligand-therapy"
    ],
    "companies": [
      "johnson-johnson"
    ],
    "links": [
      {
        "label": "CCC Mainfranken",
        "url": "https://www.ccc.ukw.de"
      },
      {
        "label": "Universitätsklinikum Würzburg",
        "url": "https://www.ukw.de"
      },
      {
        "label": "NCT WERA",
        "url": "https://www.nct-wera.de"
      }
    ]
  },
  {
    "kind": "institution",
    "asOf": "2026-09-10",
    "id": "centre-eugene-marquis",
    "name": "Centre Eugène Marquis",
    "city": "Rennes",
    "country": "FR",
    "lat": 48.117,
    "lng": -1.68,
    "institutionType": "cancer-center",
    "website": "https://www.centre-eugene-marquis.fr",
    "tldr": "The Unicancer cancer centre for Brittany in Rennes, accredited by OECI as a Comprehensive Cancer Centre.",
    "summary": "Centre Eugène Marquis is the Centre de Lutte Contre le Cancer for Rennes and Brittany, one of the 18 Unicancer centres in France. It provides medical oncology, radiotherapy, nuclear medicine and supportive care on the Pontchaillou campus shared with the CHU de Rennes, and its research groups work with Inserm and the University of Rennes on radiotherapy physics, medical imaging and cancer genomics. The centre is accredited by the Organisation of European Cancer Institutes as a Comprehensive Cancer Centre and coordinates regional cancer research through the Breton cancer network.",
    "programs": [
      "Radiotherapy physics",
      "Nuclear medicine",
      "Cancer genomics"
    ],
    "links": [
      {
        "label": "Official website",
        "url": "https://www.centre-eugene-marquis.fr"
      }
    ],
    "tags": [
      "oeci-accredited",
      "oeci-comprehensive-cancer-centre",
      "unicancer"
    ]
  },
  {
    "kind": "institution",
    "asOf": "2026-09-04",
    "id": "charite",
    "aka": [
      "Charité Comprehensive Cancer Center",
      "Charité Comprehensive Cancer Center (CCCC)"
    ],
    "links": [
      {
        "label": "Official website",
        "url": "https://www.charite.de"
      },
      {
        "label": "PTCOG: particle therapy facilities in operation",
        "url": "https://www.ptcog.site/index.php/facilities-in-operation-public"
      }
    ],
    "name": "Charité Universitätsmedizin Berlin",
    "city": "Berlin",
    "country": "DE",
    "lat": 52.527,
    "lng": 13.377,
    "institutionType": "university",
    "website": "https://www.charite.de",
    "newsweekOncology2026": 12,
    "tldr": "Charité is Europe's largest university hospital, with a Comprehensive Cancer Center and the Berlin Institute of Health.",
    "summary": "Charité, Universitätsmedizin Berlin, is Europe's largest university hospital and hosts the Charité Comprehensive Cancer Center and the Berlin Institute of Health; it ranks twelfth in the Newsweek/Statista oncology list. Its cancer strengths lie in haematology, cell therapy and translational research carried out with the Max Delbrück Center for Molecular Medicine, with Ulrich Keilholz, Christof von Kalle, Lars Bullinger and the paediatric oncologist Angelika Eggert among its leaders. Nuclide links it to the Atlas pathology foundation model developed with Aignostics and Mayo Clinic, to Deutsche Krebshilfe and SIOP Europe, and to the idea of hospital-exemption cell therapies made at scale with a shared registry. Whether academic cell therapy manufacturing can match industry on quality and cost is the open question. Its cell therapy programme is the place to start.",
    "programs": [
      "Cell therapy",
      "Haematology",
      "Precision oncology"
    ]
  },
  {
    "id": "curanosticum",
    "kind": "institution",
    "name": "Curanosticum Wiesbaden-Frankfurt",
    "city": "Wiesbaden",
    "country": "DE",
    "lat": 50.08,
    "lng": 8.24,
    "institutionType": "hospital",
    "website": "https://www.curanosticum.de/",
    "asOf": "2026-09-09",
    "tags": [
      "fcct-directory"
    ],
    "tldr": "Curanosticum is a nuclear medicine practice in Wiesbaden and Frankfurt led by Richard Baum, one of the pioneers of peptide receptor radionuclide therapy, offering FAPI PET and investigational radioligand therapies.",
    "summary": "Curanosticum Wiesbaden-Frankfurt describes itself as modern nuclear medicine in the Rhine-Main region: precise diagnostics and individual therapy from an experienced team. Led by Richard Baum, it offers FAPI PET imaging and investigational radioligand therapies alongside established theranostics, and is patient-bookable through an oncology referral.",
    "technologies": [
      "radioligand-therapy",
      "fapi-pet",
      "lu177-radioligand-therapy"
    ],
    "people": [
      "richard-baum"
    ],
    "links": [
      {
        "label": "Official website",
        "url": "https://www.curanosticum.de/"
      },
      {
        "label": "Listed on Future of Cancer Care Today (Sijbrandij Foundation)",
        "url": "https://sijbrandijfoundation.org/fcct"
      }
    ]
  },
  {
    "kind": "institution",
    "asOf": "2026-09-04",
    "id": "dana-farber",
    "links": [
      {
        "label": "Official website",
        "url": "https://www.dana-farber.org"
      }
    ],
    "name": "Dana-Farber Brigham Cancer Center",
    "city": "Boston",
    "country": "US",
    "lat": 42.338,
    "lng": -71.108,
    "institutionType": "cancer-center",
    "website": "https://www.dana-farber.org",
    "nci": "comprehensive",
    "newsweekOncology2026": 15,
    "university": "Harvard University",
    "tldr": "Where chemotherapy began (Farber, 1948) and where much of modern breast, lung, and myeloma oncology was defined.",
    "summary": "Dana-Farber Brigham Cancer Center in Boston is where chemotherapy began, with Farber's aminopterin remissions in 1948, and through Dana-Farber/Harvard Cancer Center it is the largest NCI-designated centre by grant funding and fifteenth in the Newsweek/Statista oncology list. Its firsts include the discovery of EGFR mutations in lung cancer by Jänne and Johnson, KEYNOTE-522 leadership by Tolaney with Schmid in triple-negative breast cancer, Anderson's myeloma drug development and the Profile genomic testing programme. Nuclide links it to BWEL and RASolute 302, to pathology foundation models from the Mahmood and Yu labs, to the Cancer Dependency Map and clonal haematopoiesis papers, and to people including Paul G. Richardson, Benjamin L. Ebert and Ann H. Partridge. Data silos are the bottleneck Nuclide records against it. Its breast, lung, myeloma and paediatric programmes are listed below.",
    "programs": [
      "Breast oncology (KEYNOTE-522, ADCs)",
      "Lung cancer genomics",
      "Myeloma",
      "Paediatric oncology"
    ]
  },
  {
    "kind": "institution",
    "asOf": "2026-09-09",
    "id": "eanm",
    "name": "European Association of Nuclear Medicine",
    "aka": [
      "EANM"
    ],
    "institutionType": "consortium",
    "city": "Vienna",
    "country": "AT",
    "lat": 48.208,
    "lng": 16.373,
    "website": "https://www.eanm.org",
    "tldr": "Europe's nuclear medicine society, whose congress and guidelines shaped the clinical adoption of PSMA PET and lutetium radioligand therapy that began in European centres.",
    "summary": "Founded in 1985 and based in Vienna, EANM represents nuclear medicine across Europe and publishes the European Journal of Nuclear Medicine and Molecular Imaging. Its annual congress is the largest nuclear medicine meeting in Europe and was the early forum for PSMA-PET and Lu-177 PSMA work from Heidelberg, Munich, Bad Berka and other centres before the VISION trial. EANM issues procedure guidelines with SNMMI on PSMA PET, PRRT for neuroendocrine tumours, dosimetry and FDG PET response criteria, runs the EARL accreditation programme that harmonises PET scanners across trial sites, and operates the European School of Multimodality Imaging and Therapy. It advocates on isotope supply and reimbursement for theranostics in Europe.",
    "programs": [
      "EANM Congress",
      "EARL PET accreditation",
      "Procedure guidelines (with SNMMI)",
      "European Journal of Nuclear Medicine and Molecular Imaging",
      "ESMIT education"
    ],
    "links": [
      {
        "label": "EANM",
        "url": "https://www.eanm.org"
      }
    ],
    "technologies": [
      "psma-pet",
      "fapi-pet",
      "pet-ct",
      "radioligand-therapy",
      "targeted-alpha-therapy"
    ],
    "drugs": [
      "pluvicto",
      "lutathera"
    ],
    "terms": [
      "theranostics",
      "dosimetry"
    ],
    "people": [
      "uwe-haberkorn",
      "frederik-giesel",
      "clemens-kratochwil",
      "paola-anna-erba"
    ],
    "institutions": [
      "snmmi",
      "heidelberg-nct",
      "lmu-munich"
    ]
  },
  {
    "kind": "institution",
    "asOf": "2026-09-09",
    "id": "ema",
    "name": "European Medicines Agency",
    "aka": [
      "EMA",
      "CHMP"
    ],
    "institutionType": "government",
    "city": "Amsterdam",
    "country": "NL",
    "lat": 52.339,
    "lng": 4.873,
    "website": "https://www.ema.europa.eu",
    "tldr": "The EU agency whose Committee for Medicinal Products for Human Use recommends the marketing authorisations for cancer drugs across all member states.",
    "summary": "Founded in 1995 in London and relocated to Amsterdam in 2019, the EMA coordinates the scientific evaluation of medicines for the European Union through the centralised procedure, which is mandatory for cancer drugs and advanced therapies. The Committee for Medicinal Products for Human Use (CHMP) issues opinions that the European Commission converts into EU-wide authorisations, while the Committee for Advanced Therapies handles CAR-T and gene therapies and PRIME gives early support to promising medicines. The agency publishes European Public Assessment Reports and clinical data, runs conditional marketing authorisation for unmet need, and since 2025 works alongside the EU Health Technology Assessment Regulation's joint clinical assessments, which begin with oncology medicines. Trial registration runs through CTIS.",
    "programs": [
      "Centralised procedure and CHMP opinions",
      "Committee for Advanced Therapies",
      "PRIME and conditional marketing authorisation",
      "Clinical data publication and CTIS"
    ],
    "links": [
      {
        "label": "EMA",
        "url": "https://www.ema.europa.eu"
      },
      {
        "label": "CHMP",
        "url": "https://www.ema.europa.eu/en/committees/committee-medicinal-products-human-use-chmp"
      }
    ],
    "institutions": [
      "mhra"
    ]
  },
  {
    "kind": "institution",
    "asOf": "2026-09-09",
    "id": "erasmus-mc",
    "name": "Erasmus MC Cancer Institute",
    "aka": [
      "Erasmus MC",
      "Daniel den Hoed",
      "Erasmus University Medical Center"
    ],
    "city": "Rotterdam",
    "country": "NL",
    "lat": 51.91,
    "lng": 4.468,
    "institutionType": "cancer-center",
    "website": "https://www.erasmusmc.nl/en/cancer-institute",
    "university": "Erasmus University Rotterdam",
    "tldr": "Rotterdam's OECI-accredited comprehensive cancer centre, where peptide receptor radionuclide therapy with lutetium-177 was pioneered and Europe's largest screening trials were led.",
    "summary": "Erasmus MC Cancer Institute unites the former Daniel den Hoed cancer clinic with the oncology departments of Erasmus University Medical Center and holds OECI comprehensive cancer centre accreditation. Its nuclear medicine group under Eric Krenning and Dik Kwekkeboom developed somatostatin-receptor imaging and then 177Lu-DOTATATE peptide receptor radionuclide therapy for neuroendocrine tumours, the treatment later validated in NETTER-1 and approved as Lutathera. Erasmus MC epidemiologists coordinated the European Randomized Study of Screening for Prostate Cancer and the NELSON lung screening trial, which showed a mortality reduction from low-dose CT screening. The institute co-founded the Holland Proton Therapy Centre in Delft with LUMC and TU Delft, and is a leading sarcoma, breast and neuro-oncology trial site under Stefan Sleijfer.",
    "programs": [
      "Peptide receptor radionuclide therapy",
      "Cancer screening trials (ERSPC, NELSON)",
      "Holland Proton Therapy Centre",
      "Sarcoma",
      "Neuro-oncology"
    ],
    "indications": [
      "neuroendocrine",
      "prostate",
      "glioblastoma"
    ],
    "technologies": [
      "radioligand-therapy",
      "spect",
      "pet-ct",
      "ct"
    ],
    "drugs": [
      "lutathera"
    ],
    "targets": [
      "sstr2"
    ],
    "companies": [
      "novartis"
    ],
    "terms": [
      "theranostics"
    ],
    "links": [
      {
        "label": "Homepage",
        "url": "https://www.erasmusmc.nl/en/cancer-institute"
      },
      {
        "label": "HollandPTC",
        "url": "https://www.hollandptc.nl"
      }
    ]
  },
  {
    "kind": "institution",
    "asOf": "2026-09-09",
    "id": "essen-wtz",
    "name": "West German Cancer Center (WTZ), University Hospital Essen",
    "aka": [
      "Westdeutsches Tumorzentrum",
      "Universitätsklinikum Essen",
      "NCT West"
    ],
    "city": "Essen",
    "country": "DE",
    "lat": 51.437,
    "lng": 6.992,
    "institutionType": "cancer-center",
    "website": "https://www.wtz-essen.de",
    "university": "Universität Duisburg-Essen",
    "tldr": "One of Germany's oldest and largest cancer centres, home to the West German Proton Therapy Centre and a leading melanoma and theranostics programme.",
    "summary": "Founded in 1967, the Westdeutsches Tumorzentrum at University Hospital Essen was among the first German Cancer Aid Oncology Centers of Excellence and became a National Center for Tumor Diseases site (NCT West, with Cologne) in 2023. It operates the West German Proton Therapy Centre Essen (WPE), Europe's largest university-based proton facility, treating many paediatric patients. The dermato-oncology group under Dirk Schadendorf has led melanoma immunotherapy and adjuvant trials, and the nuclear medicine department under Ken Herrmann is a high-volume theranostics centre for PSMA and somatostatin-receptor radioligands. Other strengths include sarcoma, uveal melanoma, stem cell transplantation and neuro-oncology.",
    "programs": [
      "West German Proton Therapy Centre",
      "Melanoma and dermato-oncology",
      "Theranostics and nuclear medicine",
      "Stem cell transplantation",
      "NCT West"
    ],
    "indications": [
      "prostate",
      "neuroendocrine"
    ],
    "technologies": [
      "radioligand-therapy",
      "psma-pet"
    ],
    "drugs": [
      "pluvicto",
      "lutathera"
    ],
    "trials": [
      "vision"
    ],
    "companies": [
      "iba"
    ],
    "links": [
      {
        "label": "Homepage",
        "url": "https://www.wtz-essen.de"
      },
      {
        "label": "WPE proton centre",
        "url": "https://www.wpe-uk.de"
      },
      {
        "label": "NCT West",
        "url": "https://www.nct-west.de"
      },
      {
        "label": "PTCOG: particle therapy facilities in operation",
        "url": "https://www.ptcog.site/index.php/facilities-in-operation-public"
      }
    ],
    "people": [
      "ken-herrmann"
    ]
  },
  {
    "id": "excel-diagnostics-nuclear-oncology",
    "kind": "institution",
    "name": "Excel Diagnostics and Nuclear Oncology Center",
    "city": "Houston",
    "country": "US",
    "lat": 29.74,
    "lng": -95.56,
    "institutionType": "hospital",
    "website": "https://exceldiagnostics.com/",
    "asOf": "2026-09-09",
    "tags": [
      "fcct-directory"
    ],
    "tldr": "Excel Diagnostics is a Houston nuclear medicine centre offering molecular imaging and radioligand therapies, bookable through an oncology referral.",
    "summary": "Excel Diagnostics and Nuclear Oncology Center in Houston provides molecular imaging and theranostic treatments, the pairing of a targeted scan with a matched radioactive drug, for patients referred by their oncologists.",
    "technologies": [
      "radioligand-therapy",
      "psma-pet"
    ],
    "people": [
      "ebrahim-delpassand"
    ],
    "links": [
      {
        "label": "Official website",
        "url": "https://exceldiagnostics.com/"
      },
      {
        "label": "Listed on Future of Cancer Care Today (Sijbrandij Foundation)",
        "url": "https://sijbrandijfoundation.org/fcct"
      }
    ]
  },
  {
    "kind": "institution",
    "asOf": "2026-09-04",
    "id": "fuscc",
    "wikipedia": "https://en.wikipedia.org/wiki/Shanghai_Cancer_Center",
    "links": [
      {
        "label": "Official website",
        "url": "https://www.shca.org.cn"
      },
      {
        "label": "PTCOG: particle therapy facilities in operation",
        "url": "https://www.ptcog.site/index.php/facilities-in-operation-public"
      }
    ],
    "name": "Fudan University Shanghai Cancer Center",
    "city": "Shanghai",
    "country": "CN",
    "lat": 31.191,
    "lng": 121.437,
    "institutionType": "cancer-center",
    "website": "https://www.shca.org.cn",
    "newsweekOncology2026": 55,
    "tldr": "Fudan University Shanghai Cancer Center is China's leading breast cancer centre and the site of first-in-human TROP2 PET imaging.",
    "summary": "Fudan University Shanghai Cancer Center is China's leading breast cancer centre, ranked fifty-fifth in the Newsweek/Statista oncology list, and the site of the first-in-human TROP2 PET imaging study. Shao Zhimin's molecular subtyping of triple-negative breast cancer and the FUTURE umbrella trial built on it, the gallium-68 TROP2 nanobody PET tracer from Shaoli Song, and the highest breast cancer surgical volume in the world are its distinguishing contributions, with Yi-Zhou Jiang, Xichun Hu and Dingwei Ye also listed. Nuclide links it to triple-negative breast cancer, to TROP2 as a target and TROP2 PET as a technology, and to Zhongshan Hospital and the Chinese Society of Clinical Oncology. Whether subtype-directed treatment of TNBC improves on a single standard is the question FUTURE was designed to answer. Its TNBC, TROP2 PET and surgery programmes are listed below.",
    "programs": [
      "TNBC subtyping (FUTURE trial)",
      "TROP2 PET",
      "Breast surgery"
    ],
    "technologies": [
      "trop2-pet"
    ],
    "targets": [
      "trop2"
    ],
    "people": [
      "song-shaoli"
    ]
  },
  {
    "kind": "institution",
    "asOf": "2026-09-04",
    "id": "heidelberg-nct",
    "links": [
      {
        "label": "Official website",
        "url": "https://www.nct-heidelberg.de"
      },
      {
        "label": "PTCOG: particle therapy facilities in operation",
        "url": "https://www.ptcog.site/index.php/facilities-in-operation-public"
      }
    ],
    "name": "Heidelberg University Hospital / NCT / DKFZ",
    "city": "Heidelberg",
    "country": "DE",
    "lat": 49.417,
    "lng": 8.67,
    "institutionType": "cancer-center",
    "website": "https://www.nct-heidelberg.de",
    "newsweekOncology2026": 18,
    "university": "Heidelberg University",
    "tldr": "Heidelberg is Germany's cancer research capital, home to the DKFZ (largest cancer research institute in Germany) and the NCT, and the birthplace of FAPI PET and the brain tumour methylation classifier.",
    "summary": "Heidelberg University Hospital, with the National Center for Tumor Diseases and the German Cancer Research Center (DKFZ), is Germany's cancer research capital and ranks eighteenth in the Newsweek/Statista oncology list. Its record includes the FAPI PET tracers from Haberkorn, Giesel and Kratochwil, the first-in-human actinium-225 PSMA therapy, the Heidelberg Ion-Beam Therapy Center for carbon ions, the DKFZ brain tumour methylation classifier from Pfister and von Deimling, and the MASTER precision oncology programme, with Stefan Fröhling among its leaders. Nuclide links it to FAP and PSMA as targets, to SOFIE Biosciences, to the first vaccine trial against shared neoantigens of mismatch-repair-deficient cancers, and to ideas for a university cyclotron network and core-funded radiotherapy trials. Turning tracers into approved therapies at scale is the open problem. The DKFZ has its own page.",
    "programs": [
      "FAPI PET",
      "Alpha PSMA therapy",
      "Carbon-ion therapy",
      "CNS methylation classifier",
      "DKFZ basic research"
    ],
    "technologies": [
      "fapi-pet",
      "targeted-alpha-therapy"
    ],
    "targets": [
      "fap",
      "psma"
    ],
    "people": [
      "clemens-kratochwil",
      "frederik-giesel",
      "uwe-haberkorn"
    ]
  },
  {
    "kind": "institution",
    "asOf": "2026-09-09",
    "id": "iaea",
    "name": "International Atomic Energy Agency: Rays of Hope",
    "aka": [
      "IAEA",
      "Rays of Hope",
      "PACT"
    ],
    "institutionType": "government",
    "city": "Vienna",
    "country": "AT",
    "lat": 48.234,
    "lng": 16.416,
    "website": "https://www.iaea.org/services/rays-of-hope",
    "tldr": "The UN nuclear agency's programme to bring radiotherapy and nuclear medicine to the dozens of countries that have no or too few treatment machines.",
    "summary": "The IAEA has supported radiotherapy and nuclear medicine in member states for decades through technical cooperation, dosimetry audits and the Human Health Programme, and in 2022 launched Rays of Hope to close the gap in countries where most cancer patients who need radiotherapy cannot get it. Rays of Hope funds equipment, training and quality assurance, working first in African countries with no linear accelerators, and creates Anchor Centres of expertise. The agency's Programme of Action for Cancer Therapy (PACT) runs imPACT reviews of national cancer control capacity with WHO and IARC, and its Dosimetry Laboratory underpins radiotherapy calibration worldwide. The IAEA also supports radiopharmaceutical production capacity for theranostics.",
    "programs": [
      "Rays of Hope (radiotherapy access)",
      "imPACT reviews (with WHO and IARC)",
      "Dosimetry and quality audit services",
      "Radiopharmaceutical capacity building"
    ],
    "links": [
      {
        "label": "Rays of Hope",
        "url": "https://www.iaea.org/services/rays-of-hope"
      },
      {
        "label": "IAEA cancer",
        "url": "https://www.iaea.org/topics/cancer"
      }
    ],
    "technologies": [
      "radioligand-therapy",
      "pet-ct"
    ],
    "terms": [
      "dosimetry"
    ],
    "people": [
      "rafael-mariano-grossi"
    ]
  },
  {
    "kind": "institution",
    "asOf": "2026-09-10",
    "id": "ico-angers-nantes",
    "name": "Institut de Cancérologie de l'Ouest (ICO)",
    "aka": [
      "ICO Paul Papin",
      "ICO René Gauducheau",
      "Integrated Center for Oncology"
    ],
    "city": "Angers",
    "country": "FR",
    "lat": 47.478,
    "lng": -0.563,
    "institutionType": "cancer-center",
    "website": "https://www.institut-cancerologie-ouest.com",
    "tldr": "The Unicancer cancer centre for western France, with sites in Angers and Nantes, accredited by OECI as a Comprehensive Cancer Centre.",
    "summary": "The Institut de Cancérologie de l'Ouest was created by merging the Centre Paul Papin in Angers and the Centre René Gauducheau in Saint-Herblain near Nantes, and is one of the 18 Centres de Lutte Contre le Cancer of the Unicancer network. It delivers surgery, radiotherapy, medical oncology and nuclear medicine across the Pays de la Loire, hosts an early-phase trials unit, and works with the universities of Angers and Nantes and Inserm on radiopharmaceuticals, alpha-emitter therapy and immuno-oncology, drawing on the Nantes nuclear medicine and cyclotron infrastructure. The ICO is accredited by the Organisation of European Cancer Institutes as a Comprehensive Cancer Centre.",
    "programs": [
      "Radiopharmaceuticals and alpha therapy",
      "Early-phase trials",
      "Radiotherapy"
    ],
    "links": [
      {
        "label": "Official website",
        "url": "https://www.institut-cancerologie-ouest.com"
      }
    ],
    "tags": [
      "oeci-accredited",
      "oeci-comprehensive-cancer-centre",
      "unicancer"
    ],
    "technologies": [
      "targeted-alpha-therapy"
    ]
  },
  {
    "kind": "institution",
    "asOf": "2026-09-09",
    "id": "inselspital-bern",
    "name": "Inselspital, Bern University Hospital / University Cancer Center Inselspital",
    "aka": [
      "Inselspital",
      "UCI Bern",
      "Bern Center for Precision Medicine"
    ],
    "city": "Bern",
    "country": "CH",
    "lat": 46.948,
    "lng": 7.423,
    "institutionType": "hospital",
    "website": "https://www.tumorzentrum.insel.ch",
    "university": "Universität Bern",
    "tldr": "Bern's university hospital, a high-volume radioligand therapy centre and home to the Bern Center for Precision Medicine and the SAKK trial group.",
    "summary": "The University Cancer Center Inselspital coordinates cancer care at Switzerland's capital university hospital. Its nuclear medicine department under Axel Rominger is one of Europe's largest PSMA and somatostatin-receptor radioligand therapy centres with a strong dosimetry programme, and Mark Rubin, co-discoverer of the TMPRSS2-ERG fusion in prostate cancer, directs the Department for BioMedical Research and the Bern Center for Precision Medicine. The hospital runs neuro-oncology and neurosurgery, thoracic and gastrointestinal surgery, haematology and CAR-T, and is a lead site for the Swiss Group for Clinical Cancer Research (SAKK), whose coordinating centre is in Bern. The Insel Gruppe covers a large catchment across the Bernese region.",
    "programs": [
      "Radioligand therapy and dosimetry",
      "Bern Center for Precision Medicine",
      "Prostate cancer genomics",
      "Neuro-oncology",
      "SAKK trials"
    ],
    "indications": [
      "prostate",
      "neuroendocrine",
      "glioblastoma"
    ],
    "technologies": [
      "radioligand-therapy",
      "psma-pet"
    ],
    "drugs": [
      "pluvicto",
      "lutathera"
    ],
    "targets": [
      "psma",
      "sstr2"
    ],
    "terms": [
      "dosimetry",
      "theranostics"
    ],
    "institutions": [
      "usz-zurich"
    ],
    "links": [
      {
        "label": "Tumorzentrum Inselspital",
        "url": "https://www.tumorzentrum.insel.ch"
      },
      {
        "label": "Bern Center for Precision Medicine",
        "url": "https://www.bcpm.unibe.ch"
      },
      {
        "label": "SAKK",
        "url": "https://www.sakk.ch"
      }
    ]
  },
  {
    "kind": "institution",
    "asOf": "2026-09-09",
    "id": "institut-jules-bordet",
    "wikipedia": "https://en.wikipedia.org/wiki/Institut_Jules_Bordet",
    "name": "Institut Jules Bordet",
    "aka": [
      "Jules Bordet Institute",
      "Bordet",
      "Hôpital Universitaire de Bruxelles"
    ],
    "city": "Brussels",
    "country": "BE",
    "lat": 50.813,
    "lng": 4.265,
    "institutionType": "cancer-center",
    "website": "https://www.bordet.be",
    "university": "Université libre de Bruxelles",
    "tldr": "Belgium's only hospital devoted entirely to cancer, birthplace of the Breast International Group and a world centre for breast cancer trials.",
    "summary": "The Institut Jules Bordet opened in 1939, named after the Nobel laureate immunologist Jules Bordet, and moved to a new building beside Erasme Hospital in Anderlecht in 2021 as part of the Hôpital Universitaire de Bruxelles. It is OECI-accredited as a comprehensive cancer centre. Martine Piccart co-founded the Breast International Group here and led the HERA trial of adjuvant trastuzumab; Christos Sotiriou's laboratory developed gene expression signatures for breast cancer and Michail Ignatiadis leads circulating tumour DNA studies, while Ahmad Awada's early-phase unit tests new agents. Bordet is also strong in haematology, nuclear medicine and surgical oncology, and Brussels hosts both BIG and EORTC headquarters.",
    "programs": [
      "Breast International Group",
      "Breast cancer genomics and ctDNA",
      "Early-phase trials",
      "Haematology",
      "Nuclear medicine"
    ],
    "indications": [
      "breast-her2-positive",
      "dlbcl"
    ],
    "drugs": [
      "pembrolizumab"
    ],
    "links": [
      {
        "label": "Homepage",
        "url": "https://www.bordet.be"
      },
      {
        "label": "Breast International Group",
        "url": "https://www.bigagainstbreastcancer.org"
      }
    ]
  },
  {
    "kind": "institution",
    "asOf": "2026-09-09",
    "id": "iov-veneto",
    "name": "Istituto Oncologico Veneto IRCCS",
    "aka": [
      "IOV",
      "Veneto Institute of Oncology"
    ],
    "city": "Padua",
    "country": "IT",
    "lat": 45.407,
    "lng": 11.894,
    "institutionType": "cancer-center",
    "website": "https://www.ioveneto.it",
    "university": "Università degli Studi di Padova",
    "tldr": "The Veneto region's OECI-accredited comprehensive cancer centre in Padua, strong in breast cancer trials, melanoma and tumour immunology.",
    "summary": "Founded in 2005, the Istituto Oncologico Veneto is the IRCCS cancer institute of the Veneto region and coordinates the regional oncology network; it is accredited by the OECI as a comprehensive cancer centre. Pierfranco Conte and Valentina Guarneri's breast oncology group led the ShortHER trial of trastuzumab duration and many neoadjuvant studies, the melanoma unit is a leading Italian immunotherapy trial site, and Vincenzo Bronte's immunology programme is known for myeloid-derived suppressor cells. The institute runs gastrointestinal, thoracic and gynaecological oncology, radiotherapy and nuclear medicine across Padua and Castelfranco Veneto, with a phase 1 unit and the University of Padua's oncology school.",
    "programs": [
      "Breast cancer trials",
      "Melanoma immunotherapy",
      "Tumour immunology (myeloid cells)",
      "Veneto oncology network",
      "Phase 1 unit"
    ],
    "indications": [
      "breast-her2-positive"
    ],
    "links": [
      {
        "label": "Homepage",
        "url": "https://www.ioveneto.it"
      },
      {
        "label": "Research",
        "url": "https://www.ioveneto.it/ricerca/"
      }
    ]
  },
  {
    "kind": "institution",
    "asOf": "2026-09-09",
    "id": "irst-meldola",
    "name": "IRCCS Istituto Romagnolo per lo Studio dei Tumori 'Dino Amadori' (IRST)",
    "aka": [
      "IRST Meldola",
      "IRST IRCCS"
    ],
    "city": "Meldola",
    "country": "IT",
    "lat": 44.129,
    "lng": 12.061,
    "institutionType": "cancer-center",
    "website": "https://www.irst.emr.it",
    "university": "Università di Bologna",
    "tldr": "The Romagna cancer institute, known for radioligand therapy, nuclear medicine and genitourinary and sarcoma trials.",
    "summary": "IRST opened in 2007 in Meldola near Forlì as the cancer research institute for the Romagna area of Emilia-Romagna and was named after its founder, the oncologist Dino Amadori. Its nuclear medicine department under Giovanni Paganelli, a pioneer of peptide receptor radionuclide therapy with yttrium-90 and lutetium-177 DOTATOC, is one of Italy's leading radioligand therapy centres, and Ugo De Giorgi's genitourinary and sarcoma unit runs PSMA and immunotherapy trials. The institute has an osteoncology and rare tumour centre, a bioscience laboratory for genomics and liquid biopsy, and an early-phase unit, and delivers medical oncology across the Romagna hospital network.",
    "programs": [
      "Radioligand therapy and nuclear medicine",
      "Genitourinary oncology",
      "Osteoncology and rare tumours",
      "Liquid biopsy laboratory"
    ],
    "indications": [
      "neuroendocrine",
      "prostate"
    ],
    "technologies": [
      "radioligand-therapy",
      "psma-pet"
    ],
    "drugs": [
      "lutathera",
      "pluvicto"
    ],
    "targets": [
      "sstr2",
      "psma"
    ],
    "terms": [
      "theranostics",
      "dosimetry"
    ],
    "institutions": [
      "sant-orsola-bologna"
    ],
    "links": [
      {
        "label": "Homepage",
        "url": "https://www.irst.emr.it"
      }
    ]
  },
  {
    "kind": "institution",
    "asOf": "2026-09-10",
    "id": "ivo-valencia",
    "name": "Fundación Instituto Valenciano de Oncología (IVO)",
    "aka": [
      "IVO"
    ],
    "city": "Valencia",
    "country": "ES",
    "lat": 39.481,
    "lng": -0.389,
    "institutionType": "cancer-center",
    "website": "https://www.ivo.es",
    "tldr": "A private non-profit dedicated cancer hospital in Valencia, accredited by OECI as a Cancer Centre.",
    "summary": "The Instituto Valenciano de Oncología is a non-profit foundation hospital devoted entirely to cancer, providing surgical oncology, medical oncology, radiation oncology, nuclear medicine, diagnostic imaging and pathology for patients from the Valencian Community and beyond under agreements with the public health system. It runs a clinical trials unit and research programmes in breast, urological and gastrointestinal cancers, radiotherapy techniques and hereditary cancer, and is accredited by the Organisation of European Cancer Institutes as a Cancer Centre.",
    "programs": [
      "Dedicated cancer hospital",
      "Radiation oncology",
      "Clinical trials unit"
    ],
    "links": [
      {
        "label": "Official website",
        "url": "https://www.ivo.es"
      }
    ],
    "tags": [
      "oeci-accredited",
      "oeci-cancer-centre"
    ],
    "institutions": [
      "la-fe-valencia"
    ]
  },
  {
    "kind": "institution",
    "asOf": "2026-09-04",
    "id": "johns-hopkins",
    "links": [
      {
        "label": "Official website",
        "url": "https://www.hopkinsmedicine.org/kimmel-cancer-center"
      },
      {
        "label": "PTCOG: particle therapy facilities in operation",
        "url": "https://www.ptcog.site/index.php/facilities-in-operation-public"
      }
    ],
    "name": "Johns Hopkins Hospital / Sidney Kimmel Comprehensive Cancer Center",
    "city": "Baltimore",
    "country": "US",
    "lat": 39.297,
    "lng": -76.593,
    "institutionType": "cancer-center",
    "website": "https://www.hopkinsmedicine.org/kimmel-cancer-center",
    "nci": "comprehensive",
    "newsweekOncology2026": 10,
    "university": "Johns Hopkins University",
    "tldr": "Johns Hopkins is the birthplace of cancer genomics (Vogelstein), MSI-high immunotherapy (Le, Diaz), and liquid biopsy and MCED science (CancerSEEK).",
    "summary": "Johns Hopkins Hospital and its Sidney Kimmel Comprehensive Cancer Center in Baltimore are where cancer genomics began with Vogelstein and Kinzler, and the centre holds NCI comprehensive designation and tenth place in the Newsweek/Statista oncology ranking. Its record includes pembrolizumab in mismatch-repair-deficient tumours, the first tumour-agnostic approval, led by Le and Diaz, the CancerSEEK liquid biopsy that fed Exact Sciences' multi-cancer early detection programme, and the Bloomberg-Kimmel Institute for Cancer Immunotherapy under Drew M. Pardoll and Elizabeth M. Jaffee. Nuclide links it to DELFI Diagnostics, to the DETECT-A, DYNAMIC and CheckMate 816 papers, and to pathways from epigenetic reprogramming to telomere maintenance. Whether blood-based early detection lowers harm as well as finding cancers is the question its own work posed. Programmes and people are listed below.",
    "programs": [
      "Cancer genomics",
      "MSI-H immunotherapy",
      "Liquid biopsy / MCED",
      "Bloomberg-Kimmel Immunotherapy"
    ],
    "drugs": [
      "pembrolizumab"
    ]
  },
  {
    "kind": "institution",
    "asOf": "2026-09-04",
    "id": "karolinska",
    "wikipedia": "https://en.wikipedia.org/wiki/Karolinska_University_Hospital",
    "aka": [
      "Karolinska Comprehensive Cancer Center"
    ],
    "links": [
      {
        "label": "Official website",
        "url": "https://www.karolinska.se"
      }
    ],
    "name": "Karolinska University Hospital",
    "city": "Stockholm",
    "country": "SE",
    "lat": 59.35,
    "lng": 18.034,
    "institutionType": "university",
    "website": "https://www.karolinska.se",
    "newsweekOncology2026": 39,
    "university": "Karolinska Institutet",
    "tldr": "Sweden's leading cancer hospital, linked to the Karolinska Institutet and Nobel Assembly, with strong registry-based research.",
    "summary": "Karolinska University Hospital in Stockholm is Sweden's leading cancer hospital, linked to the Karolinska Institutet and the Nobel Assembly, and ranks thirty-ninth in the Newsweek/Statista oncology list. Its Comprehensive Cancer Centre is known for registry-based research, because Sweden's national quality registries make real-world evidence and registry-randomised trials possible, and it collaborates with the Skandion proton clinic in Uppsala; Per Hall, Jonas Bergh and Thomas Helleday are among the people Nuclide lists. Nuclide links it to the ALASCCA aspirin trial, to the Swedish registry study of HPV vaccination and cervical cancer, and to ideas on randomising inside cancer registries and a registry-based MCED trial. Whether registry designs can carry regulatory weight outside the Nordics is the open question. Its registry and haematology programmes are listed below.",
    "programs": [
      "Registry research",
      "Haematology"
    ]
  },
  {
    "kind": "institution",
    "asOf": "2026-09-09",
    "id": "kfshrc",
    "wikipedia": "https://en.wikipedia.org/wiki/King_Faisal_Specialist_Hospital_and_Research_Centre",
    "name": "King Faisal Specialist Hospital and Research Centre",
    "aka": [
      "KFSH&RC",
      "KFSHRC",
      "مستشفى الملك فيصل التخصصي"
    ],
    "city": "Riyadh",
    "country": "SA",
    "lat": 24.69,
    "lng": 46.674,
    "institutionType": "hospital",
    "website": "https://www.kfshrc.edu.sa",
    "tldr": "Saudi Arabia's flagship tertiary hospital, whose Oncology Centre runs the Gulf's largest transplant, CAR-T and proton therapy programmes.",
    "summary": "King Faisal Specialist Hospital and Research Centre opened in Riyadh in 1975 and, with campuses in Jeddah and Madinah, is the leading referral hospital of Saudi Arabia and the wider Gulf. Its Oncology Centre and King Fahad National Centre for Children's Cancer deliver high-volume adult and paediatric cancer care, including one of the largest haematopoietic stem cell transplant programmes in the region, locally manufactured CAR-T therapy, robotic surgery, radioligand therapy and the first proton therapy facility in the Middle East, opened in Riyadh. The Research Centre hosts genomics under the Saudi Human Genome Program, cancer biology and clinical trials units, and the hospital houses the Saudi Cancer Registry's largest contributing service and pioneering work on thyroid, breast and hereditary cancers common in the Kingdom.",
    "programs": [
      "Oncology Centre and children's cancer centre",
      "Stem cell transplant and CAR-T",
      "Proton therapy",
      "Saudi Human Genome Program"
    ],
    "links": [
      {
        "label": "KFSH&RC",
        "url": "https://www.kfshrc.edu.sa"
      }
    ],
    "indications": [
      "thyroid",
      "dlbcl"
    ],
    "technologies": [
      "radioligand-therapy"
    ]
  },
  {
    "kind": "institution",
    "asOf": "2026-09-09",
    "id": "la-fe-valencia",
    "name": "Hospital Universitari i Politècnic La Fe",
    "aka": [
      "Hospital La Fe",
      "IIS La Fe"
    ],
    "city": "Valencia",
    "country": "ES",
    "lat": 39.443,
    "lng": -0.376,
    "institutionType": "hospital",
    "website": "https://www.lafe.san.gva.es",
    "university": "Universitat de València",
    "tldr": "Valencia's flagship public hospital, with a haematology department that shaped the treatment of acute promyelocytic leukaemia through the PETHEMA group.",
    "summary": "La Fe is the largest hospital complex of the Valencian region and hosts the IIS La Fe research institute. Its haematology department, long led by Miguel Ángel Sanz, designed the PETHEMA protocols that established risk-adapted all-trans retinoic acid and anthracycline therapy for acute promyelocytic leukaemia and remains a reference for acute leukaemias and transplantation within Spain's PETHEMA cooperative group. The hospital runs a large medical oncology service, paediatric oncology, radiotherapy including stereotactic programmes, a nuclear medicine and PET unit and an early-phase trials unit. It is a regional hub for molecular diagnostics and hereditary cancer counselling.",
    "programs": [
      "Acute leukaemia (PETHEMA)",
      "Transplantation",
      "Paediatric oncology",
      "Radiotherapy",
      "Molecular diagnostics"
    ],
    "technologies": [
      "pet-ct"
    ],
    "links": [
      {
        "label": "Homepage",
        "url": "https://www.lafe.san.gva.es"
      },
      {
        "label": "IIS La Fe",
        "url": "https://www.iislafe.es"
      }
    ]
  },
  {
    "kind": "institution",
    "asOf": "2026-09-04",
    "id": "lmu-munich",
    "links": [
      {
        "label": "Official website",
        "url": "https://www.lmu-klinikum.de"
      }
    ],
    "name": "LMU Klinikum München",
    "city": "Munich",
    "country": "DE",
    "lat": 48.11,
    "lng": 11.47,
    "institutionType": "university",
    "website": "https://www.lmu-klinikum.de",
    "newsweekOncology2026": 31,
    "university": "Ludwig-Maximilians-Universität",
    "tldr": "LMU Klinikum is Munich's university cancer centre, with strengths in PSMA theranostics and haematology.",
    "summary": "LMU Klinikum München is the university hospital of Ludwig-Maximilians-Universität and, with TUM, forms the Comprehensive Cancer Center Munich; it ranks thirty-first in the Newsweek/Statista World's Best Specialized Hospitals list for oncology. Its nuclear medicine leadership in PSMA imaging and radioligand therapy is the reason it appears on theranostics pages, and haematology is its other declared strength, with Peter Bartenstein, Michael von Bergwelt, Martin Dreyling, Nadia Harbeck, Volker Heinemann and Claus Belka among the people Nuclide lists. Nuclide links it to PSMA PET, to the European Association of Nuclear Medicine and Deutsche Krebshilfe, and to its partner TUM Klinikum rechts der Isar. How theranostics scales from a few academic centres to routine care is the open question. Its theranostics and haematology programmes are listed below.",
    "programs": [
      "Theranostics",
      "Haematology"
    ],
    "technologies": [
      "psma-pet"
    ],
    "people": [
      "peter-bartenstein"
    ]
  },
  {
    "kind": "institution",
    "asOf": "2026-09-04",
    "id": "mayo-clinic",
    "wikipedia": "https://en.wikipedia.org/wiki/Mayo_Clinic",
    "links": [
      {
        "label": "Official website",
        "url": "https://www.mayoclinic.org"
      },
      {
        "label": "PTCOG: particle therapy facilities in operation",
        "url": "https://www.ptcog.site/index.php/facilities-in-operation-public"
      }
    ],
    "name": "Mayo Clinic",
    "city": "Rochester, MN",
    "country": "US",
    "lat": 44.022,
    "lng": -92.467,
    "institutionType": "hospital",
    "website": "https://www.mayoclinic.org",
    "nci": "comprehensive",
    "newsweekOncology2026": 5,
    "tldr": "Consistently the top-ranked US hospital overall, with strong proton therapy and the first US carbon-ion centre under construction.",
    "summary": "Mayo Clinic, headquartered in Rochester, Minnesota, is consistently the top-ranked US hospital overall and holds NCI comprehensive designation through the Mayo Clinic Comprehensive Cancer Center, which spans Rochester, Phoenix and Jacksonville; it sits fifth in the Newsweek/Statista oncology ranking. Its cancer strengths are multiple myeloma, lymphoma and individualised medicine, with proton therapy and the first US carbon-ion facility under construction in Jacksonville. Nuclide links it to the Atlas pathology model built with Aignostics and Charité, to liver transplantation for cancer, to senescence and JAK-STAT pathway work, and to people including S. Vincent Rajkumar, Shaji K. Kumar and Matthew P. Goetz. Whether carbon-ion therapy earns its cost against protons is the open question its new centre will help answer. The Arizona and Florida campuses have their own Nuclide pages.",
    "programs": [
      "Carbon-ion therapy (Jacksonville)",
      "Myeloma",
      "Proton therapy"
    ],
    "people": [
      "oliver-sartor"
    ]
  },
  {
    "kind": "institution",
    "asOf": "2026-09-04",
    "id": "md-anderson",
    "wikipedia": "https://en.wikipedia.org/wiki/MD_Anderson_Cancer_Center",
    "links": [
      {
        "label": "Official website",
        "url": "https://www.mdanderson.org"
      },
      {
        "label": "PTCOG: particle therapy facilities in operation",
        "url": "https://www.ptcog.site/index.php/facilities-in-operation-public"
      }
    ],
    "name": "MD Anderson Cancer Center",
    "city": "Houston",
    "country": "US",
    "lat": 29.707,
    "lng": -95.397,
    "institutionType": "cancer-center",
    "website": "https://www.mdanderson.org",
    "nci": "comprehensive",
    "newsweekOncology2026": 2,
    "university": "University of Texas",
    "tldr": "MD Anderson is the largest cancer centre in the world by patient volume, with the biggest phase 1 programme and a leading CAR-NK effort.",
    "summary": "MD Anderson Cancer Center in Houston, part of the University of Texas and founded in 1941, is the largest cancer centre in the world by patient volume and holds NCI comprehensive designation and second place in the Newsweek/Statista oncology ranking. It runs the biggest early-phase trial unit anywhere, the Moon Shots programme, a proton therapy centre and a leading CAR-NK effort with Takeda, and its breast group under Symmans defined the Residual Cancer Burden index used to grade response after neoadjuvant treatment. Nuclide links it to LACC in cervical cancer and the ROAR anaplastic thyroid cohort, to work on the gut microbiome and dietary fibre in immunotherapy response, and to pathways from cancer neuroscience to cachexia. Whether its scale translates into faster answers than smaller centres remains a fair question. The people listed here show who leads which programme.",
    "programs": [
      "Phase 1 trials",
      "CAR-NK",
      "Residual Cancer Burden index",
      "Proton therapy",
      "Moon Shots"
    ]
  },
  {
    "kind": "institution",
    "asOf": "2026-09-09",
    "id": "mhra",
    "name": "Medicines and Healthcare products Regulatory Agency",
    "aka": [
      "MHRA"
    ],
    "institutionType": "government",
    "city": "London",
    "country": "GB",
    "lat": 51.503,
    "lng": -0.02,
    "website": "https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency",
    "tldr": "The UK medicines and devices regulator, which since Brexit runs its own approvals, joins Project Orbis and uses international reliance routes to speed cancer drug access.",
    "summary": "Formed in 2003 by merging the Medicines Control Agency and the Medical Devices Agency, the MHRA became the UK's standalone regulator for new medicines after the UK left the EU in 2021. It participates in the FDA-led Project Orbis and the Access Consortium (with Australia, Canada, Singapore and Switzerland), uses the International Recognition Procedure to rely on approvals by trusted regulators, and runs the Innovative Licensing and Access Pathway with NICE and the Scottish Medicines Consortium to align licensing and reimbursement. The MHRA also regulates clinical trials, devices including AI software, and blood and tissue products, and operates the Yellow Card safety scheme.",
    "programs": [
      "Project Orbis and Access Consortium",
      "International Recognition Procedure",
      "Innovative Licensing and Access Pathway (with NICE and SMC)",
      "Clinical trials and device regulation"
    ],
    "links": [
      {
        "label": "MHRA",
        "url": "https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency"
      }
    ],
    "institutions": [
      "ema"
    ]
  },
  {
    "kind": "institution",
    "asOf": "2026-09-04",
    "id": "mskcc",
    "wikipedia": "https://en.wikipedia.org/wiki/Memorial_Sloan_Kettering_Cancer_Center",
    "links": [
      {
        "label": "Official website",
        "url": "https://www.mskcc.org"
      }
    ],
    "name": "Memorial Sloan Kettering Cancer Center",
    "city": "New York",
    "country": "US",
    "lat": 40.764,
    "lng": -73.956,
    "institutionType": "cancer-center",
    "website": "https://www.mskcc.org",
    "nci": "comprehensive",
    "newsweekOncology2026": 1,
    "tldr": "The world's top-ranked cancer hospital, home of MSK-IMPACT sequencing, the dostarlimab rectal cancer study, and CAR-T pioneers.",
    "summary": "Memorial Sloan Kettering Cancer Center is a New York cancer centre founded in 1884, NCI-designated as comprehensive and ranked first in the Newsweek/Statista World's Best Specialized Hospitals list for oncology, which makes it the reference point against which other cancer hospitals are measured. Its firsts include MSK-IMPACT, an FDA-authorised tumour sequencing panel that feeds OncoKB and cBioPortal, co-development of CD19 CAR-T cell therapy with Sadelain's group, the dostarlimab study in mismatch-repair-deficient rectal cancer led by Andrea Cercek, and the Paige AI digital pathology spin-out. It runs one of the largest oncology trial portfolios in the United States. The open question for a centre this large is how quickly its knowledge reaches practice elsewhere, a bottleneck Nuclide tracks explicitly. Its people and trials pages are the best way into the detail.",
    "programs": [
      "MSK-IMPACT / OncoKB",
      "CAR-T (Sadelain)",
      "dMMR rectal organ preservation",
      "Paige AI",
      "Radiopharmaceutical development"
    ],
    "people": [
      "jason-lewis",
      "michael-morris"
    ]
  },
  {
    "kind": "institution",
    "asOf": "2026-09-04",
    "id": "nci",
    "links": [
      {
        "label": "Official website",
        "url": "https://www.cancer.gov"
      }
    ],
    "name": "National Cancer Institute (NIH)",
    "city": "Bethesda, MD",
    "country": "US",
    "lat": 39.003,
    "lng": -77.104,
    "institutionType": "government",
    "website": "https://www.cancer.gov",
    "tldr": "The NCI is the US government's cancer research agency, spending ~$7B a year and running the Cancer Centers Program, TCGA, and Rosenberg's cell therapy lab.",
    "summary": "The National Cancer Institute, part of the US National Institutes of Health in Bethesda, is the US government's cancer research agency; it runs the Cancer Centers Program that designates seventy-four centres, The Cancer Genome Atlas and its Genomic Data Commons, the RAS Initiative, the SEER registry and the cooperative groups NRG, SWOG, Alliance and ECOG-ACRIN. Its Surgery Branch under Rosenberg developed tumour-infiltrating lymphocyte therapy and neoantigen TCR-T, and its Pediatric MATCH and myeloMATCH trials, its CPTAC and PDQ resources and the JNCI journal all sit in Nuclide. It is linked to bottlenecks on data silos, hidden failures, funding that follows fashion and slow translation, and to ideas for a national non-profit CRO and perpetual platform trials. Whether it can fund infrastructure rather than projects is the standing question. Douglas R. Lowy is among the people listed. The institutions linked below are the NCI-designated cancer centres in Nuclide, its intramural Center for Cancer Research and the Frederick National Laboratory; the trials are those whose sponsor field names the NCI.",
    "programs": [
      "Cancer Centers Program (74 centres)",
      "TCGA / GDC",
      "Cooperative groups",
      "Surgery Branch cell therapy"
    ],
    "institutions": [
      "dana-farber",
      "johns-hopkins",
      "mayo-clinic",
      "md-anderson",
      "mskcc",
      "penn-abramson",
      "ucla-jonsson",
      "ucsf"
    ]
  },
  {
    "kind": "institution",
    "asOf": "2026-09-09",
    "id": "nct-dresden",
    "name": "NCT/UCC Dresden, University Hospital Carl Gustav Carus",
    "aka": [
      "National Center for Tumor Diseases Dresden",
      "University Cancer Center Dresden",
      "OncoRay",
      "National Cancer Center Dresden",
      "NCT Dresden"
    ],
    "city": "Dresden",
    "country": "DE",
    "lat": 51.056,
    "lng": 13.78,
    "institutionType": "cancer-center",
    "website": "https://www.nct-dresden.de",
    "university": "Technische Universität Dresden",
    "tldr": "The second National Center for Tumor Diseases site, known for proton therapy research at OncoRay and AI in pathology and surgery.",
    "summary": "NCT/UCC Dresden was founded in 2015 as a partnership between the DKFZ, the University Hospital Carl Gustav Carus, TU Dresden's medical faculty and the Helmholtz-Zentrum Dresden-Rossendorf. The OncoRay centre and the University Proton Therapy Dresden facility (treating since 2014) pursue biologically adapted, image-guided and laser-driven particle therapy; the DKFZ's chairman Michael Baumann previously directed radiation oncology there. The Else Kröner Fresenius Center for Digital Health hosts groups such as Jakob Nikolas Kather's on deep learning in pathology, and the hospital's surgical oncology programme develops AI-assisted surgery. Clinical strengths include haematology and transplantation, gastrointestinal surgery and precision oncology through a DKTK-wide molecular tumour board.",
    "programs": [
      "OncoRay and proton therapy",
      "Digital health and computational pathology",
      "Haematology",
      "Surgical oncology",
      "Precision oncology (DKTK MASTER)"
    ],
    "institutions": [
      "heidelberg-nct"
    ],
    "links": [
      {
        "label": "Homepage",
        "url": "https://www.nct-dresden.de"
      },
      {
        "label": "OncoRay",
        "url": "https://www.oncoray.de"
      },
      {
        "label": "EKFZ for Digital Health",
        "url": "https://digitalhealth.tu-dresden.de"
      },
      {
        "label": "PTCOG: particle therapy facilities in operation",
        "url": "https://www.ptcog.site/index.php/facilities-in-operation-public"
      }
    ]
  },
  {
    "kind": "institution",
    "asOf": "2026-09-09",
    "id": "oslo-radium-hospital",
    "name": "Oslo University Hospital, The Norwegian Radium Hospital",
    "aka": [
      "Radiumhospitalet",
      "Institute for Cancer Research Oslo",
      "OUS"
    ],
    "city": "Oslo",
    "country": "NO",
    "lat": 59.933,
    "lng": 10.66,
    "institutionType": "cancer-center",
    "website": "https://www.ous-research.no/institute/",
    "university": "University of Oslo",
    "tldr": "Norway's national cancer hospital and research institute, where the alpha emitter radium-223 (Xofigo) and Photocure's bladder imaging agent were born.",
    "summary": "The Norwegian Radium Hospital opened in 1932 as Norway's specialist cancer hospital and became part of Oslo University Hospital in 2009; its Institute for Cancer Research dates from 1954 and is a European reference for cancer genomics, immunology and radiation biology. Roy Larsen and Øyvind Bruland developed radium-223 there and founded Algeta, whose Xofigo became the first approved targeted alpha therapy after Bayer's acquisition, and the hospital also spun out Photocure and Ultimovacs. Current groups include Johanna Olweus on T-cell receptor therapies, Ragnhild Lothe on colorectal genomics, Ola Myklebost on sarcoma and Åslaug Helland, who leads the national IMPRESS-Norway precision medicine trial. The campus is being rebuilt with a new clinic and Norway's first proton therapy centre, and it anchors the Oslo Cancer Cluster innovation park.",
    "programs": [
      "Institute for Cancer Research",
      "Targeted alpha therapy heritage (radium-223)",
      "IMPRESS-Norway precision medicine",
      "Sarcoma and rare cancers",
      "Proton therapy centre"
    ],
    "indications": [
      "prostate"
    ],
    "technologies": [
      "targeted-alpha-therapy",
      "radioligand-therapy"
    ],
    "companies": [
      "bayer"
    ],
    "terms": [
      "alpha-vs-beta"
    ],
    "institutions": [
      "karolinska"
    ],
    "links": [
      {
        "label": "Institute for Cancer Research",
        "url": "https://www.ous-research.no/institute/"
      },
      {
        "label": "Oslo University Hospital",
        "url": "https://www.oslo-universitetssykehus.no"
      },
      {
        "label": "Oslo Cancer Cluster",
        "url": "https://oslocancercluster.no"
      }
    ]
  },
  {
    "kind": "institution",
    "asOf": "2026-09-04",
    "id": "penn-abramson",
    "links": [
      {
        "label": "Official website",
        "url": "https://www.pennmedicine.org/cancer"
      },
      {
        "label": "PTCOG: particle therapy facilities in operation",
        "url": "https://www.ptcog.site/index.php/facilities-in-operation-public"
      }
    ],
    "name": "Abramson Cancer Center, University of Pennsylvania",
    "city": "Philadelphia",
    "country": "US",
    "lat": 39.949,
    "lng": -75.194,
    "institutionType": "cancer-center",
    "website": "https://www.pennmedicine.org/cancer",
    "nci": "comprehensive",
    "university": "University of Pennsylvania",
    "tldr": "Where CAR-T became a drug (June, Levine; Emily Whitehead), mRNA was made druggable (Karikó, Weissman), and PARP PET was invented.",
    "summary": "The Abramson Cancer Center at the University of Pennsylvania in Philadelphia, NCI-designated as comprehensive, is where CAR-T became a drug through Carl H. June, Bruce L. Levine and the treatment of Emily Whitehead, where Karikó and Drew Weissman made mRNA druggable, recognised by the 2023 Nobel Prize, and where PARP PET was invented. Its record covers CTL019, now tisagenlecleucel, proved in ELIANA and JULIET, the in vivo CAR-T origins behind Capstan and Interius BioTherapeutics, 18F-FluorThanatrace PARP PET, proton therapy and the Basser Center for BRCA, with Robert H. Vonderheide and Robert H. Mach among its people. Nuclide links it to CAR-T for glioma, to the PROSE paper on preventive surgery in BRCA carriers, and to Children's Hospital of Philadelphia. Whether in vivo CAR-T can match ex vivo products is the question its spin-outs now test. Programmes are listed below.",
    "programs": [
      "CAR-T and in vivo CAR",
      "mRNA",
      "PARP PET",
      "BRCA (Basser Center)"
    ],
    "technologies": [
      "parp-pet"
    ],
    "targets": [
      "parp"
    ],
    "people": [
      "robert-mach"
    ]
  },
  {
    "kind": "institution",
    "asOf": "2026-09-04",
    "id": "peter-mac",
    "wikipedia": "https://en.wikipedia.org/wiki/Peter_MacCallum_Cancer_Centre",
    "links": [
      {
        "label": "Official website",
        "url": "https://www.petermac.org"
      }
    ],
    "name": "Peter MacCallum Cancer Centre",
    "city": "Melbourne",
    "country": "AU",
    "lat": -37.799,
    "lng": 144.956,
    "institutionType": "cancer-center",
    "website": "https://www.petermac.org",
    "newsweekOncology2026": 14,
    "tldr": "Peter Mac is Australia's only dedicated cancer hospital and a leader in theranostics, CAR-T, and radiation oncology.",
    "summary": "Peter MacCallum Cancer Centre in Melbourne is Australia's only dedicated cancer hospital, the core of the Victorian Comprehensive Cancer Centre, and ranks fourteenth in the Newsweek/Statista oncology list. It pioneered PSMA PET imaging and lutetium-177 PSMA radioligand therapy through Hofman's TheraP and proPSMA trials, became Australia's first CAR-T centre, and has a strong radiation oncology programme, with Sarah-Jane Dawson, Joseph Trapani, Declan G. Murphy, Andrew H. Wei and Grant McArthur among its people. Nuclide links it to prostate cancer, to the CROWN and DYNAMIC papers, to ANZUP and other Australian trial groups, and to ideas for a rapid research autopsy network and a shared cyclotron network for new tracers. Getting radioligand supply and regulation to match demand is the open problem its theranostics work exposes. Its trial and people pages carry the detail.",
    "programs": [
      "PSMA theranostics (TheraP, proPSMA)",
      "CAR-T",
      "Radiation oncology"
    ],
    "technologies": [
      "psma-pet",
      "radioligand-therapy"
    ],
    "drugs": [
      "pluvicto"
    ],
    "people": [
      "declan-murphy",
      "hofman-michael",
      "sandhu-shahneen"
    ]
  },
  {
    "kind": "institution",
    "asOf": "2026-09-09",
    "id": "pla-general-hospital",
    "wikipedia": "https://en.wikipedia.org/wiki/People's_Liberation_Army_General_Hospital_and_Medical_School",
    "name": "Chinese PLA General Hospital",
    "aka": [
      "301 Hospital",
      "解放军总医院"
    ],
    "city": "Beijing",
    "country": "CN",
    "lat": 39.907,
    "lng": 116.283,
    "institutionType": "hospital",
    "website": "https://www.301hospital.com.cn",
    "tldr": "China's military flagship hospital, known in oncology for early CAR-T and gene-edited T-cell trials, minimally invasive liver surgery and nuclear medicine.",
    "summary": "The Chinese PLA General Hospital, commonly called 301 Hospital, is the largest military hospital in China and a comprehensive tertiary centre in Beijing. Its Department of Bio-therapeutics under Weidong Han ran some of the earliest Chinese CAR-T and CRISPR-edited T-cell studies in lymphoma and solid tumours, and its haematology, hepatobiliary surgery (including laparoscopic and robotic hepatectomy), urology and interventional radiology departments are national leaders. The hospital has a large PET/CT and nuclear medicine service and serves as a national referral centre for complex cases from across China.",
    "programs": [
      "CAR-T and gene-edited T-cell trials",
      "Hepatobiliary and robotic surgery",
      "Nuclear medicine",
      "Haematology"
    ],
    "links": [
      {
        "label": "Chinese PLA General Hospital",
        "url": "https://www.301hospital.com.cn"
      }
    ],
    "indications": [
      "dlbcl",
      "hcc",
      "prostate"
    ],
    "technologies": [
      "pet-ct"
    ]
  },
  {
    "kind": "institution",
    "asOf": "2026-09-09",
    "id": "pmda",
    "name": "Pharmaceuticals and Medical Devices Agency",
    "aka": [
      "PMDA",
      "独立行政法人医薬品医療機器総合機構"
    ],
    "institutionType": "government",
    "city": "Tokyo",
    "country": "JP",
    "lat": 35.674,
    "lng": 139.762,
    "website": "https://www.pmda.go.jp/english/",
    "tldr": "Japan's drug and device review agency, which works with the health ministry to approve cancer drugs and has largely closed the historical 'drug lag' with the US and Europe.",
    "summary": "Established in 2004, the PMDA conducts scientific review of new drugs, devices and regenerative medicine products, with final approval by the Ministry of Health, Labour and Welfare. It introduced the SAKIGAKE fast-track designation, conditional early approval for regenerative medicines, and the Orphan and Conditional approval pathways, and it has been a full participant in ICH harmonisation. Japan approved many antibody-drug conjugates and targeted lung cancer agents at or near the same time as the FDA, and its requirements for Japanese patient data shaped global trial designs. The PMDA also runs post-marketing safety surveillance and the relief system for adverse drug reactions.",
    "programs": [
      "New drug and device review",
      "SAKIGAKE designation",
      "Conditional and time-limited approval for regenerative medicine",
      "Post-marketing safety"
    ],
    "links": [
      {
        "label": "PMDA",
        "url": "https://www.pmda.go.jp/english/"
      }
    ],
    "institutions": [
      "ema"
    ]
  },
  {
    "kind": "institution",
    "asOf": "2026-09-09",
    "id": "qst-hospital",
    "name": "QST Hospital (National Institutes for Quantum Science and Technology)",
    "aka": [
      "NIRS Hospital",
      "HIMAC",
      "QST病院"
    ],
    "city": "Chiba",
    "country": "JP",
    "lat": 35.634,
    "lng": 140.104,
    "institutionType": "research-institute",
    "website": "https://www.qst.go.jp/",
    "tldr": "The world's first carbon-ion therapy hospital (HIMAC, 1994), which established the clinical evidence base for heavy-ion radiotherapy.",
    "summary": "QST Hospital, formerly the National Institute of Radiological Sciences hospital, began treating patients with carbon ions at the Heavy Ion Medical Accelerator in Chiba (HIMAC) in 1994, the first dedicated medical heavy-ion facility. Over three decades it has treated more carbon-ion patients than any other centre, developed hypofractionated protocols for prostate, lung, liver, pancreatic, bone and soft-tissue sarcoma and head and neck tumours, and pioneered scanning beam delivery, respiratory gating and the rotating gantry now used in newer facilities. The institute leads Japan's quantum-scanning carbon-ion programme, radiopharmaceutical research including astatine-211 targeted alpha therapy, and international training for centres in Europe and Asia.",
    "programs": [
      "Carbon-ion therapy (HIMAC)",
      "Compact carbon-ion technology",
      "Astatine-211 alpha therapy",
      "Radiation biology"
    ],
    "links": [
      {
        "label": "QST Hospital (page moved; nearest live section)",
        "url": "https://www.qst.go.jp/"
      },
      {
        "label": "QST",
        "url": "https://www.qst.go.jp/site/qst-english/"
      },
      {
        "label": "PTCOG: particle therapy facilities in operation",
        "url": "https://www.ptcog.site/index.php/facilities-in-operation-public"
      }
    ],
    "indications": [
      "prostate",
      "hcc"
    ],
    "technologies": [
      "targeted-alpha-therapy"
    ],
    "terms": [
      "alpha-vs-beta"
    ]
  },
  {
    "kind": "institution",
    "asOf": "2026-09-10",
    "id": "radboudumc",
    "name": "Radboudumc Centre for Oncology",
    "aka": [
      "Radboud University Medical Center"
    ],
    "city": "Nijmegen",
    "country": "NL",
    "lat": 51.824,
    "lng": 5.86,
    "institutionType": "hospital",
    "website": "https://www.radboudumc.nl",
    "university": "Radboud University",
    "tldr": "The university hospital of Nijmegen, a leading Dutch centre for prostate imaging, dendritic cell vaccines and tumour immunology, currently in OECI accreditation.",
    "summary": "Radboud University Medical Center is the academic hospital of Radboud University and a tertiary cancer centre for the east of the Netherlands. Its Centre for Oncology integrates medical oncology, radiotherapy, haematology, surgical oncology and urology, and its research is internationally recognised in prostate MRI and PSMA imaging, dendritic cell vaccination and tumour immunology (Radboud Institute for Molecular Life Sciences), hereditary cancer, and hepatobiliary and pancreatic surgery. Radboudumc is listed by the Organisation of European Cancer Institutes as in accreditation.",
    "programs": [
      "Prostate imaging and PSMA",
      "Dendritic cell vaccines",
      "Tumour immunology",
      "Hereditary cancer"
    ],
    "links": [
      {
        "label": "Official website",
        "url": "https://www.radboudumc.nl"
      }
    ],
    "tags": [
      "oeci-in-accreditation"
    ],
    "technologies": [
      "psma-pet"
    ],
    "indications": [
      "prostate"
    ]
  },
  {
    "kind": "institution",
    "asOf": "2026-09-04",
    "id": "royal-marsden",
    "links": [
      {
        "label": "Official website",
        "url": "https://www.royalmarsden.nhs.uk"
      }
    ],
    "name": "The Royal Marsden",
    "city": "London",
    "country": "GB",
    "lat": 51.49,
    "lng": -0.172,
    "institutionType": "cancer-center",
    "website": "https://www.royalmarsden.nhs.uk",
    "newsweekOncology2026": 7,
    "tldr": "The Royal Marsden was the world's first hospital dedicated to cancer (1851) and is paired with the Institute of Cancer Research.",
    "summary": "The Royal Marsden in London was the world's first hospital dedicated to cancer, opened in 1851, and works as a pair with The Institute of Cancer Research; it ranks seventh in the Newsweek/Statista oncology list. Together they discovered abiraterone and worked out the clinical path for olaparib and PARP inhibition in BRCA-mutated cancers, with Johann de Bono and Andrew Tutt central, and the hospital leads the STAMPEDE prostate platform and breast trials while pioneering MR-linac adaptive radiotherapy. Nuclide links it to the KEYNOTE-048 head and neck paper, to prostate, mesothelioma, sarcoma and neuroendocrine tumour pages, and to bottlenecks about surgery and radiotherapy being under-funded relative to drugs. The question it keeps raising is how to fund trials of treatments no company owns. Stephen Johnston and James Larkin are among the people listed here.",
    "programs": [
      "Prostate cancer (abiraterone, PARP)",
      "MR-linac",
      "Breast cancer"
    ],
    "drugs": [
      "olaparib"
    ]
  },
  {
    "kind": "institution",
    "asOf": "2026-09-10",
    "id": "sacro-cuore-don-calabria",
    "name": "IRCCS Sacro Cuore Don Calabria Hospital",
    "aka": [
      "Ospedale Sacro Cuore Don Calabria, Negrar"
    ],
    "city": "Negrar di Valpolicella (Verona)",
    "country": "IT",
    "lat": 45.53,
    "lng": 10.938,
    "institutionType": "hospital",
    "website": "https://www.sacrocuore.it",
    "tldr": "Sacro Cuore Don Calabria Hospital in Negrar, near Verona, is a Catholic non-profit hospital recognised as an IRCCS research hospital; it runs medical oncology, radiotherapy, robotic and hepatobiliary surgery and an early-phase trials unit, and OECI accredits it as a Cancer Centre.",
    "summary": "The Sacro Cuore Don Calabria Hospital in Negrar, run by the Opera Don Calabria, is a private non-profit hospital recognised by the Italian Ministry of Health as an IRCCS (scientific research hospital). It has a large oncology department with medical oncology, radiotherapy, oncological surgery including robotic and hepatobiliary surgery, nuclear medicine and an early-phase trials unit, and is accredited by the Organisation of European Cancer Institutes as a Cancer Centre. Its research also covers infectious and tropical diseases, and the hospital collaborates with the University of Verona.",
    "programs": [
      "Medical oncology and early-phase trials",
      "Robotic and hepatobiliary surgery",
      "Radiotherapy"
    ],
    "links": [
      {
        "label": "Official website",
        "url": "https://www.sacrocuore.it"
      }
    ],
    "tags": [
      "oeci-accredited",
      "oeci-cancer-centre",
      "irccs"
    ]
  },
  {
    "kind": "institution",
    "asOf": "2026-09-09",
    "id": "sahlgrenska",
    "name": "Sahlgrenska University Hospital / Sahlgrenska Center for Cancer Research",
    "aka": [
      "Sahlgrenska",
      "Gothenburg University Hospital"
    ],
    "city": "Gothenburg",
    "country": "SE",
    "lat": 57.683,
    "lng": 11.96,
    "institutionType": "hospital",
    "website": "https://www.sahlgrenska.se/en/",
    "university": "University of Gothenburg",
    "tldr": "Western Sweden's university hospital, with a cancer research centre known for melanoma models, radionuclide dosimetry and childhood cancer.",
    "summary": "Sahlgrenska University Hospital is one of the largest hospitals in northern Europe and the cancer centre for the Västra Götaland region. The Sahlgrenska Center for Cancer Research at the University of Gothenburg hosts groups including Jonas Nilsson's on patient-derived melanoma models and immunotherapy, Eva Forssell-Aronsson's on radionuclide therapy dosimetry and Göran Landberg's on breast cancer microenvironment, and the Queen Silvia Children's Hospital is a national paediatric oncology centre. The hospital runs regional radiotherapy, surgical oncology including high-volume colorectal and oesophageal surgery, and haematology with CAR-T, and contributes to Swedish quality registers used in outcomes research.",
    "programs": [
      "Melanoma patient-derived models",
      "Radionuclide therapy dosimetry",
      "Paediatric oncology",
      "Surgical oncology",
      "Quality registers"
    ],
    "indications": [
      "neuroblastoma"
    ],
    "technologies": [
      "radioligand-therapy"
    ],
    "terms": [
      "dosimetry"
    ],
    "institutions": [
      "karolinska"
    ],
    "links": [
      {
        "label": "Homepage",
        "url": "https://www.sahlgrenska.se/en/"
      }
    ]
  },
  {
    "kind": "institution",
    "asOf": "2026-09-09",
    "id": "sant-orsola-bologna",
    "name": "IRCCS Azienda Ospedaliero-Universitaria di Bologna, Policlinico Sant'Orsola",
    "aka": [
      "Sant'Orsola-Malpighi",
      "Policlinico Sant'Orsola",
      "Istituto di Ematologia Seràgnoli"
    ],
    "city": "Bologna",
    "country": "IT",
    "lat": 44.496,
    "lng": 11.36,
    "institutionType": "hospital",
    "website": "https://www.aosp.bo.it",
    "university": "Università di Bologna",
    "tldr": "Bologna's university hospital, home of the Seràgnoli haematology institute and a leading Italian centre for myeloma, lymphoma and CAR-T.",
    "summary": "The Policlinico Sant'Orsola is the university hospital of the world's oldest university and an IRCCS for transplant and oncology. Its Seràgnoli Institute of Haematology, associated with Michele Cavo (myeloma), Pier Luigi Zinzani (lymphoma) and the GIMEMA cooperative group, has run pivotal Italian trials in myeloma transplantation and lymphoma and is one of Italy's principal CAR-T and allogeneic transplant centres. Medical oncology under Andrea Ardizzoni is active in thoracic and gastrointestinal trials, and the hospital has large paediatric oncology, surgical oncology and nuclear medicine departments. The Emilia-Romagna regional network links it with IRST Meldola.",
    "programs": [
      "Seràgnoli haematology institute",
      "Myeloma and lymphoma trials (GIMEMA)",
      "CAR-T and transplantation",
      "Thoracic oncology",
      "Paediatric oncology"
    ],
    "indications": [
      "dlbcl"
    ],
    "targets": [
      "cd20"
    ],
    "institutions": [
      "irst-meldola"
    ],
    "links": [
      {
        "label": "Homepage",
        "url": "https://www.aosp.bo.it"
      },
      {
        "label": "Haematology",
        "url": "https://www.aosp.bo.it/content/ematologia"
      }
    ]
  },
  {
    "kind": "institution",
    "asOf": "2026-09-09",
    "id": "shandong-cancer-hospital",
    "name": "Shandong Cancer Hospital and Institute",
    "aka": [
      "Shandong First Medical University Affiliated Cancer Hospital",
      "山东省肿瘤医院"
    ],
    "city": "Jinan",
    "country": "CN",
    "lat": 36.651,
    "lng": 117.12,
    "institutionType": "cancer-center",
    "website": "https://www.sdzlyy.org.cn",
    "university": "Shandong First Medical University",
    "tldr": "Shandong Cancer Hospital runs one of China's largest radiotherapy departments under Jinming Yu, with a proton therapy centre and PET-guided adaptive radiotherapy; it has led Chinese trials combining radiotherapy with immunotherapy in lung and oesophageal cancer and studies of brain metastasis management.",
    "summary": "Shandong Cancer Hospital and Institute, founded in 1958 and affiliated to Shandong First Medical University and the Shandong Academy of Medical Sciences, is best known for radiation oncology under Jinming Yu, with one of the largest radiotherapy departments in China, a proton therapy centre and heavy investment in PET-guided and adaptive radiotherapy. It has led Chinese trials combining radiotherapy with immunotherapy in lung and oesophageal cancer and studies of brain metastasis management. The hospital also runs strong thoracic surgery, breast and gynaecological programmes and a provincial cancer registry.",
    "programs": [
      "Radiation oncology",
      "Proton therapy",
      "Radio-immunotherapy trials",
      "Thoracic oncology"
    ],
    "links": [
      {
        "label": "Shandong Cancer Hospital",
        "url": "https://www.sdzlyy.org.cn"
      },
      {
        "label": "Shandong First Medical University",
        "url": "https://www.sdfmu.edu.cn"
      }
    ],
    "indications": [
      "sclc"
    ],
    "technologies": [
      "pet-ct"
    ]
  },
  {
    "kind": "institution",
    "asOf": "2026-09-09",
    "id": "snmmi",
    "name": "Society of Nuclear Medicine and Molecular Imaging",
    "aka": [
      "SNMMI",
      "Society of Nuclear Medicine"
    ],
    "institutionType": "consortium",
    "city": "Reston, VA",
    "country": "US",
    "lat": 38.958,
    "lng": -77.357,
    "website": "https://www.snmmi.org",
    "tldr": "The Society of Nuclear Medicine and Molecular Imaging represents US nuclear medicine and publishes the Journal of Nuclear Medicine; its annual meeting is where new PET tracers and radioligand therapy results are presented, and its procedure standards guide PSMA and somatostatin receptor imaging.",
    "summary": "Founded in 1954 as the Society of Nuclear Medicine, SNMMI represents physicians, technologists and scientists in nuclear medicine and molecular imaging and publishes the Journal of Nuclear Medicine and the Journal of Nuclear Medicine Technology. Its annual meeting is where new PET tracers and radioligand therapy results are presented, its procedure standards and appropriate use criteria guide PSMA PET, FDG PET and somatostatin receptor imaging, and its Clinical Trials Network qualifies sites and scanners for multicentre trials. SNMMI runs the Mars Shot fund for radiopharmaceutical research, the Value Initiative on access and reimbursement, and dosimetry and radiation safety education, and it partners with EANM on joint guidelines and the theranostics centres of excellence programme.",
    "programs": [
      "SNMMI Annual Meeting",
      "Journal of Nuclear Medicine",
      "Clinical Trials Network",
      "Appropriate use criteria and procedure standards",
      "Mars Shot Fund"
    ],
    "links": [
      {
        "label": "SNMMI",
        "url": "https://www.snmmi.org"
      }
    ],
    "related": [
      "src-snmmi"
    ],
    "technologies": [
      "pet",
      "pet-ct",
      "psma-pet",
      "fdg-pet",
      "radioligand-therapy",
      "targeted-alpha-therapy",
      "spect"
    ],
    "drugs": [
      "pluvicto",
      "lutathera",
      "pylarify"
    ],
    "terms": [
      "theranostics",
      "dosimetry",
      "suv"
    ],
    "institutions": [
      "eanm"
    ],
    "people": [
      "virginia-pappas"
    ]
  },
  {
    "kind": "institution",
    "asOf": "2026-09-09",
    "id": "tum-munich",
    "name": "TUM Klinikum rechts der Isar / CCC München",
    "aka": [
      "Klinikum rechts der Isar",
      "Technical University of Munich",
      "Comprehensive Cancer Center Munich (TUM)"
    ],
    "city": "Munich",
    "country": "DE",
    "lat": 48.137,
    "lng": 11.6,
    "institutionType": "university",
    "website": "https://www.mri.tum.de",
    "university": "Technische Universität München",
    "tldr": "Munich's technical university hospital, one half of the Comprehensive Cancer Center Munich and a leader in PSMA imaging and radiopharmaceutical chemistry.",
    "summary": "The Klinikum rechts der Isar is the university hospital of the Technical University of Munich and, with the LMU, forms the CCC München, a German Cancer Aid Oncology Center of Excellence and DKTK partner site. Its nuclear medicine and radiopharmacy groups developed the radiohybrid PSMA ligands (rhPSMA) that became flotufolastat F-18, and run large theranostic programmes in prostate and neuroendocrine cancer. The TranslaTUM centre houses translational oncology, imaging and immunology, and the hospital has strong pancreatic surgery, haematology and gastrointestinal oncology programmes. Patients access molecular tumour boards and early-phase trials across both Munich university sites.",
    "programs": [
      "Radiopharmaceutical chemistry and PSMA theranostics",
      "TranslaTUM",
      "Pancreatic surgery",
      "Haematology",
      "CCC München (with LMU)"
    ],
    "indications": [
      "prostate",
      "neuroendocrine"
    ],
    "technologies": [
      "psma-pet",
      "radioligand-therapy",
      "pet-mri",
      "fapi-pet"
    ],
    "drugs": [
      "pluvicto",
      "lutathera"
    ],
    "institutions": [
      "lmu-munich"
    ],
    "terms": [
      "theranostics"
    ],
    "links": [
      {
        "label": "Homepage",
        "url": "https://www.mri.tum.de"
      },
      {
        "label": "CCC München",
        "url": "https://www.ccc-muenchen.de"
      },
      {
        "label": "TranslaTUM",
        "url": "https://www.translatum.tum.de"
      }
    ],
    "people": [
      "wolfgang-weber"
    ]
  },
  {
    "kind": "institution",
    "asOf": "2026-09-10",
    "id": "turku-university-hospital",
    "name": "Turku University Hospital Cancer Centre",
    "aka": [
      "Tyks",
      "FICAN West"
    ],
    "city": "Turku",
    "country": "FI",
    "lat": 60.451,
    "lng": 22.267,
    "institutionType": "hospital",
    "website": "https://www.varha.fi",
    "university": "University of Turku",
    "tldr": "The university hospital of south-west Finland and host of FICAN West, with OECI Cancer Centre accreditation and a strong PET imaging tradition.",
    "summary": "Turku University Hospital (Tyks) is the tertiary hospital for the Wellbeing Services County of Southwest Finland and the teaching hospital of the University of Turku. Its Cancer Centre hosts the Western Finland Cancer Centre (FICAN West) within the national Finnish Cancer Centre network and is accredited by the Organisation of European Cancer Institutes as a Cancer Centre. Turku is home to the national Turku PET Centre, which supports molecular imaging and radiopharmaceutical research in oncology, and the hospital's research groups are active in prostate cancer, breast cancer and haematological malignancies alongside the University of Turku's Institute of Biomedicine.",
    "programs": [
      "FICAN West regional cancer centre",
      "PET imaging (Turku PET Centre)",
      "Prostate and breast cancer research"
    ],
    "links": [
      {
        "label": "Official website",
        "url": "https://www.varha.fi"
      }
    ],
    "tags": [
      "oeci-accredited",
      "oeci-cancer-centre"
    ],
    "technologies": [
      "psma-pet"
    ]
  },
  {
    "kind": "institution",
    "asOf": "2026-09-04",
    "id": "ucla-jonsson",
    "links": [
      {
        "label": "Official website",
        "url": "https://www.uclahealth.org/cancer"
      }
    ],
    "name": "UCLA Jonsson Comprehensive Cancer Center",
    "city": "Los Angeles",
    "country": "US",
    "lat": 34.066,
    "lng": -118.446,
    "institutionType": "cancer-center",
    "website": "https://www.uclahealth.org/cancer",
    "nci": "comprehensive",
    "university": "University of California, Los Angeles",
    "tldr": "Where trastuzumab (Slamon) and palbociclib were developed clinically, and a leader in PSMA PET and melanoma immunotherapy (Ribas).",
    "summary": "The UCLA Jonsson Comprehensive Cancer Center in Los Angeles holds NCI comprehensive designation and is where trastuzumab was developed clinically through Slamon's HER2 work, where palbociclib entered the clinic, and where Antoni Ribas built a leading melanoma immunotherapy programme in checkpoint and TIL research. Johannes Czernin and Jeremie Calais made it a centre for PSMA PET, Hurvitz ran its breast trials programme before moving to Fred Hutch, and Michael A. Teitell, Amar U. Kishan, Aditya Bardia, Denise R. Aberle and the patient Barbara Bradfield are also listed. Nuclide links it to HER2 and PSMA as targets, to trastuzumab, palbociclib and gallium-68 PSMA-11, and to melanoma and prostate cancer. How to extend the HER2 model of target, drug and companion test to new targets remains its recurring theme. Its HER2, melanoma and PSMA programmes are the ones to read.",
    "programs": [
      "HER2 (Slamon)",
      "Melanoma immunotherapy (Ribas)",
      "PSMA PET"
    ],
    "targets": [
      "her2",
      "psma"
    ],
    "technologies": [
      "psma-pet"
    ],
    "people": [
      "johannes-czernin",
      "jeremie-calais"
    ]
  },
  {
    "kind": "institution",
    "asOf": "2026-09-04",
    "id": "ucsf",
    "wikipedia": "https://en.wikipedia.org/wiki/UCSF_Helen_Diller_Family_Comprehensive_Cancer_Center",
    "links": [
      {
        "label": "Official website",
        "url": "https://cancer.ucsf.edu"
      }
    ],
    "name": "UCSF Helen Diller Family Comprehensive Cancer Center",
    "city": "San Francisco",
    "country": "US",
    "lat": 37.765,
    "lng": -122.458,
    "institutionType": "cancer-center",
    "website": "https://cancer.ucsf.edu",
    "nci": "comprehensive",
    "newsweekOncology2026": 33,
    "university": "University of California, San Francisco",
    "tldr": "UCSF is the birthplace of oncogene biology (Bishop, Varmus) and KRAS G12C drugging (Shokat), and a leader in I-SPY adaptive breast trials.",
    "summary": "The UCSF Helen Diller Family Comprehensive Cancer Center in San Francisco is the birthplace of oncogene biology, where Bishop and Varmus made their Nobel-winning discovery, and of KRAS G12C drugging through Shokat's switch-II pocket; it holds NCI comprehensive designation and ranks thirty-third in the Newsweek/Statista oncology list. It leads the I-SPY 2 adaptive platform trial in breast cancer under Laura J. Esserman, runs the UCSF500 panel, and pioneered PSMA PET with Thomas A. Hope, alongside neuro-oncology and prostate programmes. Nuclide links it to KRAS and PSMA, to gallium-68 PSMA-11, to the Ostrem and Shokat paper, and to the MYC and telomere pathways. Whether MYC can be drugged directly, and tolerated, is the open question it is linked to. Alan Ashworth, Eric J. Small and Alan P. Venook are among the people listed.",
    "programs": [
      "I-SPY 2 platform trial",
      "KRAS chemistry",
      "PSMA PET",
      "Neuro-oncology"
    ],
    "targets": [
      "psma"
    ],
    "technologies": [
      "psma-pet"
    ],
    "people": [
      "rahul-aggarwal",
      "thomas-hope",
      "emily-bergsland",
      "katherine-matthay"
    ]
  },
  {
    "kind": "institution",
    "asOf": "2026-09-09",
    "id": "uk-duesseldorf",
    "name": "University Hospital Düsseldorf / CIO Düsseldorf",
    "aka": [
      "Universitätsklinikum Düsseldorf",
      "UKD",
      "Centrum für Integrierte Onkologie Aachen Bonn Köln Düsseldorf"
    ],
    "city": "Düsseldorf",
    "country": "DE",
    "lat": 51.194,
    "lng": 6.788,
    "institutionType": "hospital",
    "website": "https://www.uniklinik-duesseldorf.de",
    "university": "Heinrich-Heine-Universität Düsseldorf",
    "tldr": "Düsseldorf's university hospital, a partner in the CIO cancer centre alliance and a leading site for FAPI and PSMA imaging under Frederik Giesel.",
    "summary": "University Hospital Düsseldorf forms, with Aachen, Bonn and Cologne, the Centrum für Integrierte Onkologie (CIO ABCD), a German Cancer Aid Oncology Center of Excellence. Its nuclear medicine department is directed by Frederik Giesel, co-inventor of FAPI PET tracers at Heidelberg, and runs theranostic programmes in prostate and neuroendocrine cancers. The hospital has a large paediatric oncology and haematology department, hepatology and liver cancer programmes, and neurosurgical oncology. Trials from the CIO network give patients access to early-phase immunotherapy and cell therapy studies.",
    "programs": [
      "FAPI and PSMA PET",
      "Theranostics",
      "Paediatric oncology",
      "CIO ABCD"
    ],
    "indications": [
      "prostate",
      "neuroendocrine",
      "hcc"
    ],
    "technologies": [
      "fapi-pet",
      "psma-pet",
      "radioligand-therapy"
    ],
    "targets": [
      "fap",
      "psma"
    ],
    "drugs": [
      "fap-2286",
      "pluvicto"
    ],
    "people": [
      "frederik-giesel"
    ],
    "institutions": [
      "heidelberg-nct"
    ],
    "links": [
      {
        "label": "Homepage",
        "url": "https://www.uniklinik-duesseldorf.de"
      }
    ]
  },
  {
    "kind": "institution",
    "asOf": "2026-09-10",
    "id": "umcg-groningen",
    "name": "University Medical Center Groningen Comprehensive Cancer Center",
    "aka": [
      "UMCG",
      "UMCG Cancer Center"
    ],
    "city": "Groningen",
    "country": "NL",
    "lat": 53.221,
    "lng": 6.575,
    "institutionType": "hospital",
    "website": "https://www.umcg.nl",
    "university": "University of Groningen",
    "tldr": "The university hospital of the northern Netherlands, home of the country's first proton therapy centre and accredited by OECI as a Comprehensive Cancer Centre.",
    "summary": "The University Medical Center Groningen is the academic hospital of the University of Groningen and the tertiary cancer centre for the northern Netherlands. Its Comprehensive Cancer Center integrates medical oncology, radiotherapy, haematology, surgical oncology, paediatric oncology and molecular imaging, and it opened the first proton therapy centre in the Netherlands in 2018. UMCG is known for molecular imaging with radiolabelled antibodies and drugs (immuno-PET), for lung and breast cancer research, for radiotherapy model-based selection, and for large-scale population research through the Lifelines cohort. It is accredited by the Organisation of European Cancer Institutes as a Comprehensive Cancer Centre.",
    "programs": [
      "Proton therapy",
      "Molecular imaging (immuno-PET)",
      "Lung and breast cancer research",
      "Paediatric oncology"
    ],
    "links": [
      {
        "label": "Official website",
        "url": "https://www.umcg.nl"
      },
      {
        "label": "PTCOG: particle therapy facilities in operation",
        "url": "https://www.ptcog.site/index.php/facilities-in-operation-public"
      }
    ],
    "tags": [
      "oeci-accredited",
      "oeci-comprehensive-cancer-centre"
    ]
  },
  {
    "kind": "institution",
    "asOf": "2026-09-09",
    "id": "uppsala-akademiska",
    "name": "Uppsala University Hospital / Uppsala University",
    "aka": [
      "Akademiska sjukhuset",
      "Skandion Clinic",
      "Rudbeck Laboratory"
    ],
    "city": "Uppsala",
    "country": "SE",
    "lat": 59.849,
    "lng": 17.637,
    "institutionType": "hospital",
    "website": "https://www.akademiska.se",
    "university": "Uppsala University",
    "tldr": "Uppsala University Hospital is Sweden's oldest; its neuroendocrine tumour centre built by Kjell Öberg is an ENETS Centre of Excellence with long experience of somatostatin analogues and radionuclide therapy, and Sweden's national Skandion proton clinic opened next door in 2015.",
    "summary": "Akademiska sjukhuset and Uppsala University form one of Scandinavia's leading cancer research environments. Uppsala's neuroendocrine tumour centre, built by Kjell Öberg, is an ENETS Centre of Excellence with long experience of somatostatin analogues and peptide receptor radionuclide therapy, and Bengt Glimelius's group shaped Nordic rectal cancer radiotherapy trials. The Skandion Clinic, Sweden's national proton therapy facility co-owned by the university regions, opened in Uppsala in 2015 using IBA equipment. Tobias Sjöblom's laboratory contributed to the first colorectal cancer exome sequencing and runs the U-CAN biobank, Uppsala scientists founded Olink Proteomics, and the Uppsala Clinical Research Center supports national trials.",
    "programs": [
      "Neuroendocrine tumour centre",
      "Skandion proton clinic",
      "Gastrointestinal radiotherapy trials",
      "U-CAN biobank",
      "Proteomics"
    ],
    "indications": [
      "neuroendocrine",
      "prostate",
      "glioblastoma"
    ],
    "technologies": [
      "radioligand-therapy"
    ],
    "drugs": [
      "lutathera"
    ],
    "targets": [
      "sstr2"
    ],
    "companies": [
      "iba"
    ],
    "institutions": [
      "karolinska"
    ],
    "links": [
      {
        "label": "Homepage",
        "url": "https://www.akademiska.se"
      },
      {
        "label": "Skandion Clinic",
        "url": "https://www.skandionkliniken.se"
      }
    ]
  },
  {
    "kind": "institution",
    "asOf": "2026-09-09",
    "id": "usb-basel",
    "name": "University Hospital Basel / Tumour Centre",
    "aka": [
      "USB",
      "Universitätsspital Basel",
      "Tumorzentrum Basel"
    ],
    "city": "Basel",
    "country": "CH",
    "lat": 47.561,
    "lng": 7.582,
    "institutionType": "hospital",
    "website": "https://www.unispital-basel.ch/en/",
    "university": "Universität Basel",
    "tldr": "University Hospital Basel coordinates cancer care in the home city of Roche and Novartis; its groups run early-phase tumour immunology trials, study breast cancer metastasis, and develop peptide radioligands such as exendin-based imaging of insulinomas.",
    "summary": "The Tumour Centre of University Hospital Basel coordinates cancer care in a city that is also headquarters to Roche and Novartis and home to the Friedrich Miescher Institute and the University of Basel's Department of Biomedicine. Alfred Zippelius and Heinz Läubli lead tumour immunology and early-phase immunotherapy trials, Mohamed Bentires-Alj studies breast cancer metastasis, Viola Heinzelmann-Schwarz heads gynaecological oncology, and the nuclear medicine and radiopharmaceutical chemistry groups (Damian Wild, Melpomeni Fani) develop novel peptide radioligands, including exendin-based imaging of insulinomas. The hospital runs haematology and CAR-T, thoracic and visceral surgery, and radiotherapy, and hosts SAKK and pharma-sponsored trials.",
    "programs": [
      "Tumour immunology and early-phase immunotherapy",
      "Radiopharmaceutical chemistry",
      "Breast cancer metastasis research",
      "Gynaecological oncology",
      "Haematology and CAR-T"
    ],
    "indications": [
      "neuroendocrine"
    ],
    "technologies": [
      "radioligand-therapy",
      "pet-ct"
    ],
    "companies": [
      "novartis"
    ],
    "institutions": [
      "inselspital-bern",
      "usz-zurich"
    ],
    "links": [
      {
        "label": "Homepage",
        "url": "https://www.unispital-basel.ch/en/"
      },
      {
        "label": "Tumorzentrum",
        "url": "https://www.unispital-basel.ch/en/tumorzentrum"
      }
    ]
  },
  {
    "kind": "institution",
    "asOf": "2026-09-09",
    "id": "usz-zurich",
    "name": "University Hospital Zurich / Comprehensive Cancer Center Zurich",
    "aka": [
      "USZ",
      "CCCZ",
      "UniversitätsSpital Zürich"
    ],
    "city": "Zurich",
    "country": "CH",
    "lat": 47.376,
    "lng": 8.551,
    "institutionType": "hospital",
    "website": "https://www.usz.ch/en/",
    "university": "University of Zurich",
    "tldr": "Zurich's university hospital and cancer centre, a world reference in neuro-oncology, melanoma and single-cell tumour imaging.",
    "summary": "The Comprehensive Cancer Center Zurich brings together the University Hospital Zurich, the University of Zurich and ETH Zurich. Michael Weller's neurology department chairs the EORTC Brain Tumor Group and shapes glioma guidelines, and Zurich was a leading site in the glioblastoma trials that introduced temozolomide and tumour-treating fields. Reinhard Dummer's dermatology clinic is one of Europe's foremost melanoma centres and led oncolytic virus and targeted therapy studies, Bernd Bodenmiller's laboratory developed imaging mass cytometry for spatial single-cell tumour analysis, and the haematology and nuclear medicine departments run CAR-T and theranostics programmes. The centre is OECI-accredited and hosts a large early-phase unit.",
    "programs": [
      "Neuro-oncology (EORTC Brain Tumor Group)",
      "Melanoma and dermato-oncology",
      "Imaging mass cytometry",
      "CAR-T and haematology",
      "Theranostics"
    ],
    "indications": [
      "glioblastoma",
      "dlbcl"
    ],
    "technologies": [
      "radioligand-therapy"
    ],
    "links": [
      {
        "label": "Homepage",
        "url": "https://www.usz.ch/en/"
      },
      {
        "label": "Comprehensive Cancer Center Zurich",
        "url": "https://www.cccz.ch"
      }
    ]
  }
];
