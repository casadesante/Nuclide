/**
 * Technologies: records carried over from Nuclide.
 *
 * Carried over from the Nuclide corpus (https://github.com/casadesante/Nuclide), CC BY-NC 4.0, and narrowed to
 * radiopharmaceutical use. Facts and sources are as Nuclide held them on the `asOf` date of each record;
 * check anything that matters at the primary source each record links.
 */
import type { EntityInput } from "@/lib/schema";

export const carriedTechnologies: EntityInput[] = [
  {
    "kind": "technology",
    "asOf": "2026-09-17",
    "tags": [
      "manufacturing-wave"
    ],
    "provenance": {
      "editedBy": "Nuclide manufacturing expansion",
      "editedOn": "2026-09-17"
    },
    "id": "actinium-225-supply",
    "name": "Actinium-225 supply: thorium stocks, accelerators and radium targets",
    "status": "phase-3",
    "since": 2013,
    "tldr": "Actinium-225 is the alpha-emitting atom behind the most promising next wave of radioligand therapies, and there is not enough of it. Almost all of it used to come from one decaying stock of thorium in a US national laboratory. New routes use accelerators and old radium.",
    "summary": "Actinium-225 (half-life 9.9 days) delivers four alpha particles per decay chain, which is why it is being tested attached to PSMA ligands, somatostatin analogues and other carriers in Phase 3 programmes by Novartis, Bristol Myers Squibb (through RayzeBio), Bayer, AstraZeneca and others. Historically the world's supply came from thorium-229 that itself decays from uranium-233 held by the US Department of Energy, milked from generators at Oak Ridge National Laboratory and by the Institute for Transuranium Elements in Karlsruhe, and amounted to enough for only a few thousand patient doses a year. That is the binding constraint on targeted alpha therapy.\n\nFour routes are being built. First, more thorium-229: TerraPower Isotopes is extracting it from DOE uranium-233 as the material is downblended, and is building a production plant in Philadelphia. Second, high-energy proton spallation of thorium-232 at the DOE Tri-Lab effort (Brookhaven, Los Alamos and Oak Ridge), which yields large quantities contaminated with a small fraction of long-lived actinium-227 that complicates waste and regulatory acceptance. Third, radium-226 targets irradiated on medium-energy cyclotrons (the (p,2n) reaction), pursued by Eckert & Ziegler, Nusano, Ionetix and others, and photonuclear irradiation of radium with electron accelerators (NorthStar, Niowave), both of which depend on recovering and handling legacy radium sources. Fourth, in-house production by the sponsors themselves, as RayzeBio and Bayer have set up. The US DOE Isotope Program, the IAEA and industry groups track the totals; the pharmacopoeial question of how much actinium-227 is acceptable in a drug is unsettled and affects which routes can supply approved products. Lead-212, made from thorium-228 generators by Orano Med, is the main alpha-emitting alternative with its own supply chain.",
    "principle": "Alpha-emitter supply from thorium-229 generators, accelerator spallation of thorium-232 or irradiation of radium-226, each with a different impurity and waste profile.",
    "strengths": [
      "Several independent routes under construction",
      "Sponsors are integrating supply in-house",
      "Lead-212 offers an alternative alpha chain"
    ],
    "limitations": [
      "Supply is a fraction of Phase 3 demand",
      "Actinium-227 impurity from spallation",
      "Radium-226 targets are scarce and hazardous"
    ],
    "technologies": [
      "therapy-isotope-supply-chain",
      "targeted-alpha-therapy",
      "cyclotron-isotope-production",
      "research-reactor-isotope-production",
      "radiopharmaceutical-gmp-release",
      "alpha-nanogenerators"
    ],
    "drugs": [
      "ryz101",
      "ac225-psma",
      "fpi-2265",
      "alphamedix"
    ],
    "companies": [
      "terrapower-isotopes",
      "eckert-ziegler",
      "northstar-medical-radioisotopes",
      "nusano",
      "rayzebio",
      "bms",
      "bayer",
      "novartis",
      "astrazeneca",
      "orano-med",
      "itm"
    ],
    "indications": [
      "prostate",
      "neuroendocrine"
    ],
    "bottlenecks": [
      "b-manufacturing-cell-therapy"
    ],
    "links": [
      {
        "label": "US DOE Isotope Program",
        "url": "https://www.isotopes.gov/"
      },
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Actinium-225"
      }
    ]
  },
  {
    "id": "alpha-nanogenerators",
    "kind": "technology",
    "name": "Alpha-emitter nanogenerators and daughter trapping",
    "status": "preclinical",
    "asOf": "2026-09-08",
    "tldr": "Actinium-225 releases four alpha particles as it decays, but the daughters escape and irradiate the kidneys and salivary glands. Nanocarriers try to hold them in place.",
    "summary": "The therapeutic power of actinium-225 comes from its decay chain, but recoil energy ejects daughter nuclides from any chelator, causing off-target dose. Nanoparticle carriers (lanthanum phosphate, titanium dioxide, liposomes) and polymer cages are designed to retain daughters long enough for them to decay inside the tumour. Retention above 90% has been reported in animals; no such construct had reached human trials by 2026.",
    "principle": "Encapsulating the parent nuclide in a solid-state or multi-shell carrier physically retains recoiling daughters, converting a leaky decay chain into a contained one.",
    "strengths": [
      "Could remove the main toxicity limit on actinium therapy",
      "Multiplies alpha dose per targeting event",
      "Compatible with existing targeting ligands"
    ],
    "limitations": [
      "No human data",
      "Nanoparticle biodistribution favours liver and spleen",
      "No trodden regulatory path for a radioactive nanomaterial"
    ],
    "technologies": [
      "targeted-alpha-therapy",
      "radioligand-therapy"
    ],
    "terms": [
      "alpha-vs-beta",
      "dosimetry"
    ],
    "companies": [
      "perspective-therapeutics",
      "aktis-oncology",
      "terrapower-isotopes"
    ],
    "tags": [
      "frontier",
      "radical"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov: actinium-225",
        "url": "https://clinicaltrials.gov/search?term=actinium-225"
      }
    ]
  },
  {
    "id": "astatine-211-alpha-therapy",
    "dependsOn": [
      "targeted-alpha-therapy",
      "medical-cyclotrons-synthesis-modules"
    ],
    "kind": "technology",
    "name": "Astatine-211 alpha therapy",
    "status": "phase-1",
    "asOf": "2026-09-04",
    "wikipedia": "https://en.wikipedia.org/wiki/Astatine",
    "tldr": "A rare alpha-emitting halogen that can be attached to antibodies and small molecules like iodine, tested in leukaemia conditioning and brain and ovarian cancer.",
    "summary": "Astatine-211 is an alpha emitter with a 7.2-hour half-life that behaves chemically like iodine, so it can label antibodies and small molecules by radiohalogenation. Its short range and high energy suit micrometastatic and disseminated disease; academic programmes in Gothenburg, Seattle and Japan have tested At-211 antibodies in ovarian cancer and as anti-CD45 conditioning before transplant, and At-211 PSMA and MABG agents are in early trials. Production requires a cyclotron with alpha beams, limiting supply to a few centres.",
    "principle": "At-211 is produced by bombarding bismuth with alpha particles, labelled to a targeting molecule, and delivers high linear-energy-transfer alpha particles over a few cell diameters.",
    "strengths": [
      "Alpha emission kills with few decays and overcomes resistance",
      "Iodine-like chemistry fits existing tracers",
      "Short half-life limits residual dose"
    ],
    "limitations": [
      "Very limited production capacity",
      "Short half-life constrains logistics",
      "Early clinical stage"
    ],
    "technologies": [
      "targeted-alpha-therapy",
      "radioligand-therapy"
    ],
    "indications": [
      "prostate"
    ],
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Astatine"
      }
    ]
  },
  {
    "id": "auger-electron-therapy",
    "kind": "technology",
    "name": "Auger-electron therapy",
    "status": "preclinical",
    "asOf": "2026-09-08",
    "tldr": "Auger-electron therapy uses radioactive atoms such as iodine-125 or terbium-161 that release cascades of low-energy electrons travelling only nanometres to micrometres, so they kill a cell only if the atom sits on or inside its DNA and spare the neighbours. Terbium-161 can replace lutetium-177 in existing PSMA ligands; true nuclear delivery remains preclinical.",
    "summary": "Auger emitters such as iodine-125, indium-111 and terbium-161 release cascades of low-energy electrons with nanometre to micrometre range. Delivered into the nucleus they are exquisitely cytotoxic and, unlike alpha emitters, spare neighbouring cells almost entirely. Terbium-161 is closest to clinical use because it can be substituted for lutetium-177 in existing PSMA and somatostatin ligands, with first-in-human work reported; strategies that require true nuclear delivery remain preclinical.",
    "principle": "Electron-capture or internal-conversion decay releases multiple very low-energy electrons; energy deposition is confined to a few nanometres, so proximity to DNA determines lethality.",
    "strengths": [
      "Single-cell selectivity, well suited to micrometastases",
      "Minimal crossfire into normal tissue",
      "Terbium-161 slots into existing ligand chemistry"
    ],
    "limitations": [
      "Needs delivery into the nucleus for the pure Auger effect",
      "Isotope supply and short half-lives",
      "Dosimetry models built for beta emitters do not apply"
    ],
    "technologies": [
      "radioligand-therapy",
      "targeted-alpha-therapy",
      "radioimmunotherapy"
    ],
    "targets": [
      "psma",
      "sstr2"
    ],
    "terms": [
      "alpha-vs-beta",
      "dosimetry"
    ],
    "tags": [
      "frontier",
      "radical"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov: terbium-161",
        "url": "https://clinicaltrials.gov/search?term=terbium-161"
      }
    ]
  },
  {
    "id": "caix-pet",
    "links": [
      {
        "label": "Shuch et al., ZIRCON: 89Zr-girentuximab PET-CT imaging of clear-cell renal cell carcinoma (Lancet Oncology 2024)",
        "url": "https://doi.org/10.1016/S1470-2045(24)00402-9"
      }
    ],
    "kind": "technology",
    "name": "CAIX PET (89Zr-girentuximab)",
    "status": "phase-3",
    "asOf": "2026-09-07",
    "tldr": "CAIX PET is a scan using an antibody against a protein almost unique to clear-cell kidney cancer, to tell cancer from benign kidney lumps without a biopsy.",
    "summary": "CAIX PET uses 89Zr-labelled girentuximab, an antibody against carbonic anhydrase IX, a HIF target expressed in more than 95% of clear-cell renal cell carcinomas because of VHL loss. Imaging 5 days after injection shows whether an indeterminate renal mass is clear-cell cancer without a biopsy. In the ZIRCON phase 3 (2023) it achieved sensitivity 86% and specificity 87%, giving histology-level specificity and whole-body staging in one scan. Telix's TLX250-CDx received an FDA complete response letter in 2025 over manufacturing, and resubmission is planned, so it is not yet approved; the five-day imaging delay and the 89Zr dose are practical limitations. The same antibody labelled with 177Lu is being tested therapeutically in the STARLITE trials, making CAIX a theranostic pair. It tells cancer from a benign kidney lump by lighting up a protein almost unique to clear-cell kidney cancer.",
    "principle": "89Zr-labelled anti-CAIX antibody girentuximab imaged 5 days after injection; CAIX is a HIF target expressed in >95% of clear-cell RCC via VHL loss.",
    "strengths": [
      "Non-invasive histology-level specificity",
      "Whole-body staging of clear-cell disease"
    ],
    "limitations": [
      "Five-day imaging delay; 89Zr dose",
      "Not yet approved (CRL 2025)"
    ],
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
    "pathways": [
      "hif-vhl"
    ]
  },
  {
    "id": "ct",
    "kind": "technology",
    "name": "CT (computed tomography)",
    "status": "standard-of-care",
    "asOf": "2026-09-04",
    "since": 1971,
    "wikipedia": "https://en.wikipedia.org/wiki/CT_scan",
    "tldr": "A CT scan is a fast 3D X-ray that shows the size and shape of tumours and whether they have spread.",
    "summary": "Computed tomography rotates an X-ray source and detector around the body and reconstructs the measured attenuation into cross-sectional images, with iodinated contrast highlighting vasculature. In use since 1971, it is the workhorse of staging and response assessment and the standard measurement tool for RECIST. It is fast, ubiquitous, offers sub-millimetre resolution and is excellent for lung, liver, bone and lymph nodes. Its limits are that it shows anatomy only, so it cannot distinguish scar from live tumour or give biological information, it has limited soft-tissue contrast, it performs poorly for brain, marrow and small peritoneal disease, and it delivers ionising radiation. Photon-counting CT improves resolution at lower dose, while PET/CT and MRI fill the gaps in biology and soft tissue. CT is the quick 3D X-ray that most cancer decisions are measured against.",
    "principle": "A rotating X-ray source and detector measure attenuation, which is reconstructed into cross-sectional images. Iodinated contrast highlights vasculature.",
    "strengths": [
      "Fast, ubiquitous",
      "Sub-millimetre resolution",
      "Standard for RECIST response"
    ],
    "limitations": [
      "Anatomic only; cannot distinguish scar from live tumour",
      "Radiation dose",
      "Poor for brain, marrow, and small peritoneal disease"
    ],
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/CT_scan"
      }
    ],
    "companies": [
      "siemens-healthineers",
      "ge-healthcare",
      "canon-medical",
      "united-imaging"
    ]
  },
  {
    "kind": "technology",
    "asOf": "2026-09-17",
    "tags": [
      "manufacturing-wave"
    ],
    "provenance": {
      "editedBy": "Nuclide manufacturing expansion",
      "editedOn": "2026-09-17"
    },
    "id": "cyclotron-isotope-production",
    "name": "Cyclotron isotope production (F-18, Ga-68, Cu-64, Zr-89, At-211)",
    "status": "standard-of-care",
    "since": 1976,
    "tldr": "Proton-rich isotopes for PET scans and some therapies are made by hitting a target with a beam from a cyclotron. Fluorine-18 is made every morning within driving distance of the scanner; gallium-68 comes from either a generator or a cyclotron; copper-64 and zirconium-89 last long enough to ship across a country.",
    "summary": "A medical cyclotron accelerates protons (or for a few isotopes deuterons or alpha particles) into a target whose nuclei absorb them and emit neutrons. Fluorine-18 (half-life 110 minutes) is made from oxygen-18-enriched water in almost every PET-producing radiopharmacy and cyclotron centre, then built into FDG, PSMA and other tracers by automated synthesis modules; distribution is limited to a few hours' travel. Gallium-68 (68 minutes) has two routes: a germanium-68/gallium-68 generator that a hospital elutes several times a day for about a year (made by Eckert & Ziegler, IRE ELiT and ITM among others), or direct cyclotron production from zinc-68 targets, which regulators have accepted for PSMA kits in the United States and which frees users from generator allocation. Copper-64 (12.7 hours, from nickel-64) and zirconium-89 (78 hours, from yttrium-89) allow central manufacture and national shipping, so copper-64 dotatate is made at a few sites and flown to scanners across the United States. Astatine-211 for alpha therapy needs an alpha beam of about 28 MeV on bismuth, which only a handful of cyclotrons in the world can deliver, and actinium-225 can be made from radium-226 targets on medium-energy cyclotrons (covered in the actinium record).\n\nThe machines and the shielded hot cells and synthesis modules are covered in the existing cyclotron record; this record is about the isotopes and their supply. Capacity constraints are target material (enriched oxygen-18 water, zinc-68, nickel-64 and above all radium-226), beam time shared between commercial tracers, and the GMP burden on hospital sites under 21 CFR 212 and EU Annex 3. The cyclotron makers are IBA, GE HealthCare, Siemens Healthineers (through PETNET) and Sumitomo, and the commercial networks (PETNET, Cardinal Health, SOFIE, Curium, Jubilant) run most of the daily production.",
    "principle": "Charged-particle nuclear reactions on enriched targets produce short-lived positron emitters and some alpha emitters, distributed within hours or, for longer-lived isotopes, days.",
    "strengths": [
      "Distributed production near scanners",
      "No reactor or fissile material",
      "Cyclotron gallium relieves generator limits"
    ],
    "limitations": [
      "Enriched target materials",
      "Beam time and same-day logistics",
      "Only a few machines can make astatine-211"
    ],
    "technologies": [
      "medical-cyclotrons-synthesis-modules",
      "pet-tracer-manufacturing",
      "radionuclide-generators-kits",
      "radiopharmacy-network",
      "research-reactor-isotope-production",
      "actinium-225-supply",
      "pet",
      "psma-pet",
      "astatine-211-alpha-therapy"
    ],
    "drugs": [
      "ga68-dotatate"
    ],
    "companies": [
      "iba",
      "ge-healthcare",
      "siemens-healthineers",
      "petnet-solutions",
      "cardinal-health",
      "sofie-biosciences",
      "curium",
      "jubilant-radiopharma",
      "eckert-ziegler",
      "ire",
      "telix",
      "lantheus",
      "radiomedix"
    ],
    "links": [
      {
        "label": "21 CFR Part 212: current good manufacturing practice for PET drugs",
        "url": "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-C/part-212"
      },
      {
        "label": "IAEA: cyclotron produced radionuclides",
        "url": "https://www.iaea.org/publications/7892/cyclotron-produced-radionuclides-principles-and-practice"
      },
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Fluorine-18"
      }
    ]
  },
  {
    "id": "fapi-pet",
    "kind": "technology",
    "name": "FAPI PET",
    "status": "phase-3",
    "asOf": "2026-09-04",
    "since": 2018,
    "wikipedia": "https://en.wikipedia.org/wiki/Fibroblast_activation_protein,_alpha",
    "tldr": "FAPI PET is a PET scan that lights up the scaffolding around almost any solid tumour, including cancers the standard sugar scan misses.",
    "summary": "Quinoline-based FAP inhibitors (FAPI-04, FAPI-46, FAPI-74) labelled with 68Ga or 18F image cancer-associated fibroblasts. Superior to FDG in pancreatic, gastric, HCC, and peritoneal disease in head-to-head series. Registrational trials for 68Ga-FAPI-46 and 18F-FAPI-74 (Sofie) are underway. Pairs with FAP-targeted radioligands.",
    "principle": "Small molecule binds FAP on stromal fibroblasts; rapid uptake, low background, minimal brain and liver signal.",
    "strengths": [
      "Pan-cancer, high contrast",
      "No fasting needed",
      "Sees desmoplastic tumours FDG misses"
    ],
    "limitations": [
      "Also uptake in fibrosis, healing, arthritis",
      "Reports stroma not tumour cells",
      "Not yet approved"
    ],
    "technologies": [
      "pet"
    ],
    "targets": [
      "fap"
    ],
    "indications": [
      "hcc"
    ],
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Fibroblast_activation_protein,_alpha"
      }
    ]
  },
  {
    "id": "fdg-pet",
    "dependsOn": [
      "pet-ct"
    ],
    "kind": "technology",
    "name": "FDG PET",
    "status": "standard-of-care",
    "asOf": "2026-09-04",
    "wikipedia": "https://en.wikipedia.org/wiki/Fludeoxyglucose_(18F)",
    "tldr": "FDG PET is the standard PET scan. A radioactive sugar shows which tissues are burning glucose fast, which most cancers do.",
    "summary": "FDG PET uses 18F-fluorodeoxyglucose, a radioactive sugar analogue taken up through GLUT transporters and trapped after phosphorylation by hexokinase, exploiting the Warburg effect by which most cancers burn glucose fast. It is the standard PET scan for staging and response in lymphoma (scored on the Deauville scale), lung cancer, melanoma, head and neck cancer and oesophageal cancer, with universal availability and decades of validation. Its limits are biological: infection and inflammation are also hot, normal brain uptake creates a high background, and indolent tumours are poorly seen. It is weak in prostate cancer, low-grade neuroendocrine tumours, mucinous cancers and some breast cancers, which is why target-specific tracers such as PSMA and SSTR ligands exist. FDG PET shows which tissues are consuming glucose fastest, and most, though not all, cancers do.",
    "principle": "FDG is taken up via GLUT transporters and trapped after phosphorylation by hexokinase.",
    "strengths": [
      "Universal availability",
      "Decades of validation"
    ],
    "limitations": [
      "Non-specific: infection and inflammation are also hot",
      "Brain background",
      "Poor in indolent tumours"
    ],
    "technologies": [
      "pet"
    ],
    "terms": [
      "suv"
    ],
    "drugs": [
      "fludeoxyglucose-f18"
    ],
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Fludeoxyglucose_(18F)"
      }
    ]
  },
  {
    "id": "fes-pet",
    "kind": "technology",
    "name": "FES PET (oestrogen receptor imaging)",
    "status": "approved",
    "since": 2020,
    "asOf": "2026-09-17",
    "aka": [
      "18F-fluoroestradiol PET",
      "Cerianna",
      "oestrogen receptor PET",
      "ER PET"
    ],
    "tldr": "A PET scan using a radioactive form of oestrogen that lights up every tumour deposit still carrying the oestrogen receptor, so doctors can see whether metastases across the body will respond to hormone treatment without biopsying each one.",
    "summary": "What it measures. 18F-fluoroestradiol is oestradiol carrying a positron-emitting fluorine atom. Injected into a vein, it binds oestrogen receptors wherever they are expressed, and a PET scan maps that binding. A tumour that lights up is receptor positive; one that is dark either never had the receptor or has lost it, which happens in a quarter or more of metastases from an originally receptor-positive breast cancer.\n\nWho should have it. The FDA approved 18F-fluoroestradiol (Cerianna, developed by Zionexa and now sold by GE HealthCare) in May 2020 as an adjunct to biopsy in patients with recurrent or metastatic breast cancer, to detect oestrogen receptor positive lesions. The Society of Nuclear Medicine and Molecular Imaging's appropriate use criteria list it as appropriate when biopsy is not feasible or lesions are discordant, when deciding whether to continue endocrine therapy after progression, and in lobular and other cancers that FDG PET images poorly. It is not a screening or staging test and it is uninformative in a patient taking a drug that blocks the receptor, such as fulvestrant, unless that drug has been paused.\n\nWhat changes. A uniformly bright scan supports endocrine therapy or a hormone-based combination; dark lesions steer towards chemotherapy or an antibody-drug conjugate for those sites, and a mixed picture explains why a patient is progressing at one site on a treatment that works elsewhere. The tracer is made in regional cyclotron facilities and shipped, so availability follows the PET tracer network; the scan is priced like other specialist PET studies and is covered in the United States for the approved indication. In Europe it is available at a small number of centres under national rules.",
    "principle": "16-alpha-18F-fluoro-17-beta-oestradiol binds oestrogen receptor alpha with high affinity; PET quantifies uptake in each lesion, and standardised uptake thresholds separate receptor-positive from receptor-negative deposits.",
    "strengths": [
      "Whole-body map of receptor status without multiple biopsies",
      "Shows heterogeneity between metastases",
      "FDA approved with published appropriate use criteria"
    ],
    "limitations": [
      "Uninformative while a receptor-blocking drug is on board",
      "Liver uptake obscures liver metastases",
      "Limited tracer availability outside large centres"
    ],
    "technologies": [
      "pet",
      "pet-ct",
      "fdg-pet",
      "her2-pet",
      "psma-pet",
      "fapi-pet",
      "pet-tracer-manufacturing",
      "quantitative-imaging-biomarkers"
    ],
    "companies": [
      "ge-healthcare"
    ],
    "links": [
      {
        "label": "Wikipedia: Fluoroestradiol F-18",
        "url": "https://en.wikipedia.org/wiki/Fluoroestradiol_F-18"
      }
    ]
  },
  {
    "kind": "technology",
    "asOf": "2026-09-17",
    "tags": [
      "machines-wave2"
    ],
    "id": "gamma-probes-dose-calibrators",
    "name": "Gamma probes, handheld gamma cameras and dose calibrators",
    "status": "standard-of-care",
    "since": 1990,
    "tldr": "The small radiation detectors that make nuclear medicine and sentinel node surgery work: a pen-sized probe that clicks when the surgeon nears the radioactive lymph node, and the well counter in the hot lab that checks every dose before it is injected.",
    "summary": "Sentinel lymph node biopsy replaced full node clearance in breast cancer and melanoma because the surgeon can find the node with a handheld gamma probe: a collimated scintillation or semiconductor detector that counts the technetium-99m nanocolloid injected around the tumour, guiding the incision and confirming when the hot nodes are out. Devicor's Neoprobe (now under Mammotome), Eurorad's Europrobe, Crystal Photonics' CrystalProbe and drop-in probes for robotic surgery from Lightpoint Medical are the main devices; small handheld gamma cameras such as Sentinella and Crystal Cam image the node field, and PET-emitting tracers such as gallium-68 PSMA are detected with high-energy probes in radioguided prostate surgery. Magnetic tracers detected by Endomag's Sentimag (also now part of Mammotome) offer the same localisation without radioactivity. In the radiopharmacy and hot lab, dose calibrators, ionisation well chambers such as Capintec's CRC series (Mirion) and Comecer's, measure the activity of every syringe of diagnostic tracer or therapeutic radioligand against the prescription, and survey meters and contamination monitors protect staff.\n\nThe probe technique needs a nuclear medicine department to inject and image the tracer, a supply of technetium-99m from molybdenum generators, and radiation-protection handling of specimens; magnetic and fluorescent alternatives remove the isotope but have their own artefacts. Dose calibrators are inexpensive but require regular constancy, linearity and geometry checks and isotope-specific calibration factors, especially for the new alpha and beta therapy isotopes.",
    "principle": "Collimated scintillation or cadmium zinc telluride detectors count gamma photons from a tracer in the sentinel node to guide surgical localisation; pressurised ionisation well chambers measure the activity of radiopharmaceutical doses by ionisation current with isotope-specific calibration factors.",
    "strengths": [
      "Enables sentinel node surgery and radioguided resection",
      "Every dose measured before injection",
      "Cheap and widely available"
    ],
    "limitations": [
      "Depends on isotope supply and a nuclear medicine department",
      "Radiation protection of theatre and pathology staff",
      "Calibration factors needed for new therapy isotopes"
    ],
    "indications": [
      "prostate"
    ],
    "technologies": [
      "spect-ct",
      "radioligand-therapy",
      "psma-pet",
      "radiopharmacy-network"
    ],
    "related": [
      "medical-cyclotrons-synthesis-modules",
      "radioligand-dosimetry"
    ],
    "companies": [
      "comecer"
    ],
    "links": [
      {
        "label": "Wikipedia: sentinel lymph node",
        "url": "https://en.wikipedia.org/wiki/Sentinel_lymph_node"
      },
      {
        "label": "Mammotome: Neoprobe gamma detection system",
        "url": "https://www.mammotome.com/"
      },
      {
        "label": "IAEA: quality assurance for radioactivity measurement in nuclear medicine (Technical Reports Series 454)",
        "url": "https://www.iaea.org/publications/7451/quality-assurance-for-radioactivity-measurement-in-nuclear-medicine"
      }
    ]
  },
  {
    "id": "her2-pet",
    "links": [
      {
        "label": "Gebhart et al., ZEPHIR: molecular imaging of heterogeneity in advanced HER2-positive breast cancer with 89Zr-trastuzumab PET (Annals of Oncology 2016)",
        "url": "https://doi.org/10.1093/annonc/mdv577"
      }
    ],
    "kind": "technology",
    "name": "HER2 PET",
    "status": "phase-2",
    "asOf": "2026-09-04",
    "since": 2010,
    "tldr": "HER2 PET is a PET scan using radiolabelled trastuzumab or smaller HER2 binders to map HER2 across all metastases at once.",
    "summary": "HER2 PET images HER2 across every metastasis at once using a radiolabelled HER2 binder, either 89Zr-trastuzumab or smaller 68Ga- and 18F-labelled affibodies and nanobodies such as 68Ga-ABY-025 and 18F-GE-226. The result is a whole-body receptor map rather than a single biopsy, which matters because HER2 expression varies between lesions. The ZEPHIR and IMPACT trials studied these tracers, and uptake was predictive of response to T-DM1. It is most useful in heterogeneous HER2-low disease, where one biopsy may be unrepresentative and HER2-directed ADCs now have indications. Studied since 2010, it is not yet approved; trials have been small, and full-antibody tracers need days between injection and imaging, which smaller binders aim to shorten. It shows how much HER2 each tumour deposit carries without a needle.",
    "principle": "Radiolabelled HER2 binder; whole-body receptor map.",
    "strengths": [
      "Captures inter-lesion heterogeneity",
      "Non-invasive re-assessment"
    ],
    "limitations": [
      "Not approved; small trials",
      "Antibody tracers need days"
    ],
    "technologies": [
      "pet",
      "immuno-pet"
    ],
    "targets": [
      "her2"
    ],
    "indications": [
      "breast-her2-positive"
    ]
  },
  {
    "id": "immuno-pet",
    "dependsOn": [
      "pet-ct"
    ],
    "kind": "technology",
    "name": "Immuno-PET",
    "status": "phase-2",
    "asOf": "2026-09-04",
    "tldr": "PET scans built from radiolabelled antibodies or their fragments, to see any protein an antibody can reach, including immune cells inside tumours.",
    "summary": "Immuno-PET attaches long-lived positron emitters such as 89Zr or 64Cu to antibodies, minibodies or nanobodies, so that any protein an antibody can reach can be imaged across the whole body. It covers 89Zr-antibody imaging of ADC targets including TROP2 and HER2, and T-cell imaging with 89Zr-crefmirlimab berdoxam, a CD8 minibody, and 18F-AraG, which marks activated T cells. CD8 PET is in phase 2/3 as a pharmacodynamic and predictive biomarker for checkpoint inhibitors, aiming to show whether T cells are entering tumours early in treatment. The strengths are non-invasive imaging of target and immune infiltrate, and the fact that any antibody can be turned into a tracer. Full antibodies have slow kinetics, requiring days before imaging, and 89Zr is costly. Immuno-PET turns therapeutic antibodies into imaging agents that show where their targets and the immune cells are.",
    "principle": "Long-lived positron emitters (89Zr, 64Cu) chelated to antibodies, minibodies, or nanobodies.",
    "strengths": [
      "Images target and immune infiltrate non-invasively",
      "Any antibody can be turned into a tracer"
    ],
    "limitations": [
      "Slow kinetics for full antibodies",
      "Cost of 89Zr"
    ],
    "technologies": [
      "pet"
    ],
    "targets": [
      "trop2",
      "her2"
    ],
    "links": [
      {
        "label": "Bensch et al., 89Zr-atezolizumab imaging as a non-invasive approach to assess clinical response to PD-L1 blockade (Nature Medicine 2018)",
        "url": "https://doi.org/10.1038/s41591-018-0255-8"
      }
    ]
  },
  {
    "kind": "technology",
    "asOf": "2026-09-17",
    "tags": [
      "radiation-wave1"
    ],
    "id": "in-vivo-dosimetry",
    "name": "In vivo dosimetry and patient-specific quality assurance",
    "status": "established",
    "since": 1990,
    "tldr": "Measuring the dose the patient actually receives, with detectors on the skin or the imaging panel behind them, to catch errors before they cause harm.",
    "summary": "Radiotherapy accidents, though rare, have come from wrong plans, wrong patients and machine faults. Patient-specific quality assurance checks each complex plan on a phantom before the first treatment, and in vivo dosimetry measures the dose during treatment with diodes, thermoluminescent detectors or, increasingly, the electronic portal imaging device behind the patient, which reconstructs the delivered dose in three dimensions. Several countries require in vivo dosimetry by regulation; it is also central to safe FLASH and ultra-high-dose-rate research.",
    "principle": "Independent measurement of the delivered dose, compared with the planned dose, detects errors in planning, setup or machine output.",
    "strengths": [
      "Catches gross errors",
      "Documents the dose actually given",
      "Portal dosimetry needs no extra hardware"
    ],
    "limitations": [
      "Adds workload",
      "Tolerance thresholds are debated",
      "Cannot detect all error types"
    ],
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Dosimetry"
      }
    ]
  },
  {
    "kind": "technology",
    "asOf": "2026-09-17",
    "tags": [
      "radiation-wave1"
    ],
    "id": "ldr-seed-brachytherapy",
    "name": "Low-dose-rate seed brachytherapy",
    "status": "established",
    "since": 1980,
    "tldr": "Dozens of rice-grain-sized radioactive seeds are implanted permanently in the prostate in a single procedure and deliver their dose over months.",
    "summary": "Permanent seed implantation uses iodine-125 or palladium-103 seeds placed through the perineum under ultrasound guidance in a one-off outpatient procedure. It is a curative option for low- and favourable intermediate-risk prostate cancer with control matching surgery and external radiotherapy, and is used as a boost in higher-risk disease (the ASCENDE-RT trial). The same seeds treat some lung and pancreatic tumours at surgery, and plaque brachytherapy with similar isotopes treats uveal melanoma.",
    "principle": "Permanently implanted low-activity sources deliver a continuous low dose rate over weeks to months, exploiting repair differences between tumour and normal tissue.",
    "strengths": [
      "Single procedure",
      "Excellent long-term control in low-risk prostate cancer",
      "Preserves continence for most"
    ],
    "limitations": [
      "Urinary symptoms for months",
      "Not suitable for large glands or prior TURP",
      "Radiation safety precautions after implant"
    ],
    "indications": [
      "prostate"
    ],
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Brachytherapy#Prostate_cancer"
      }
    ]
  },
  {
    "id": "lu177-radioligand-therapy",
    "trials": [
      "nct06184035",
      "nct05547061"
    ],
    "aka": [
      "177Lu",
      "Lu-177",
      "Lutetium-177"
    ],
    "dependsOn": [
      "radioligand-therapy",
      "therapy-isotope-supply-chain"
    ],
    "kind": "technology",
    "name": "Lutetium-177 radioligand therapy",
    "status": "approved",
    "asOf": "2026-09-04",
    "since": 2018,
    "wikipedia": "https://en.wikipedia.org/wiki/Lutetium-177",
    "tldr": "Cancer-seeking molecules carrying the radioactive metal lutetium-177, which delivers short-range radiation to tumours it binds; approved for neuroendocrine tumours and prostate cancer.",
    "summary": "Lutetium-177 emits beta particles with a range of a few millimetres and gamma rays that allow imaging, making it the workhorse isotope of radioligand therapy. Lutathera (Lu-177 dotatate, approved 2018) targets somatostatin receptors on neuroendocrine tumours, and Pluvicto (Lu-177 PSMA-617, approved 2022) targets PSMA on prostate cancer; both improved outcomes in randomised trials. Supply of no-carrier-added lutetium, dosimetry and combinations with earlier lines of therapy are the current frontiers.",
    "principle": "A peptide or small molecule with high affinity for a tumour receptor is chelated to Lu-177 and infused; bound molecules irradiate the cell and its neighbours over the isotope's 6.6-day half-life.",
    "strengths": [
      "Randomised survival benefit in two diseases",
      "Companion PET imaging selects patients",
      "Tolerable toxicity profile"
    ],
    "limitations": [
      "Isotope supply and logistics",
      "Marrow and kidney dose limits",
      "Resistance and heterogeneous uptake"
    ],
    "drugs": [
      "pluvicto",
      "lutathera"
    ],
    "targets": [
      "psma",
      "sstr2"
    ],
    "technologies": [
      "radioligand-therapy",
      "therapy-isotope-supply-chain"
    ],
    "indications": [
      "prostate",
      "neuroendocrine"
    ],
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Lutetium-177"
      }
    ]
  },
  {
    "kind": "technology",
    "asOf": "2026-09-08",
    "id": "medical-cyclotrons-synthesis-modules",
    "links": [
      {
        "label": "21 CFR Part 212: current good manufacturing practice for PET drugs",
        "url": "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-C/part-212"
      }
    ],
    "name": "Medical cyclotrons, hot cells, and synthesis modules",
    "status": "standard-of-care",
    "tldr": "The particle accelerators and shielded robotic chemistry boxes that make PET tracers in hospital basements and commercial pharmacies.",
    "summary": "Compact 11-30 MeV cyclotrons from IBA (Cyclone), GE HealthCare (PETtrace, MINItrace), Siemens (Eclipse), ACSI (TR-24), and Sumitomo produce 18F, 68Ga, 64Cu, and 89Zr; shielded hot cells (Comecer, Von Gahlen, Tema Sinergie) house automated synthesis modules (Trasis AllinOne, IBA Synthera, GE FASTlab, Eckert & Ziegler Modular-Lab, Siemens Explora) that run GMP radiochemistry from cassettes. Solid-target 68Ga production is displacing generators at high-volume sites.",
    "principle": "Proton bombardment of enriched targets produces the isotope; cassette-based automated modules perform labelling, purification, and formulation behind lead shielding with QC before release.",
    "strengths": [
      "On-site supply of short-lived isotopes",
      "Cassette chemistry standardises GMP production"
    ],
    "limitations": [
      "Capital and shielding cost ($2-5M per site)",
      "Skilled radiochemists scarce",
      "Site licensing takes years"
    ],
    "technologies": [
      "pet",
      "radiopharmacy-network",
      "pet-tracer-manufacturing",
      "radionuclide-generators-kits"
    ],
    "companies": [
      "iba",
      "ge-healthcare",
      "siemens-healthineers",
      "trasis",
      "comecer"
    ],
    "tags": [
      "supporting"
    ]
  },
  {
    "kind": "technology",
    "asOf": "2026-09-17",
    "tags": [
      "manufacturing-wave"
    ],
    "provenance": {
      "editedBy": "Nuclide manufacturing expansion",
      "editedOn": "2026-09-17"
    },
    "id": "medical-imaging-scanner-manufacturing",
    "name": "CT, MRI and PET scanner manufacturing",
    "status": "standard-of-care",
    "since": 1972,
    "tldr": "The scanners that find and stage cancer are built by five companies in a dozen factories. Detectors, superconducting magnets and the helium that cools them are the parts that run short.",
    "summary": "Computed tomography scanners are assembled around a rotating gantry carrying an X-ray tube and a detector arc of thousands of scintillator or, in the newest machines, cadmium telluride photon-counting elements; MRI systems around a superconducting magnet wound from niobium-titanium and cooled by liquid helium, with gradient coils and radiofrequency electronics; PET/CT around rings of lutetium-based scintillator crystals coupled to silicon photomultipliers. Siemens Healthineers builds CT in Forchheim and MRI in Erlangen, Germany, and PET/CT in Knoxville, Tennessee; GE HealthCare builds CT and PET in Waukesha, Wisconsin, and MRI in Florence, South Carolina, and makes the PETtrace cyclotron in Uppsala; Philips builds MRI in Best, in the Netherlands, and CT in Haifa, Israel; Canon Medical (the former Toshiba Medical) in Otawara, Japan; and United Imaging in Shanghai, which built the first total-body PET scanner with the University of California, Davis. The scanners then need siting, shielding, acceptance testing and service contracts, and their software is regulated as a medical device.\n\nSupply constraints are in the components. Helium shortages in 2022 and 2023 pushed makers toward sealed low-helium magnets (Philips BlueSeal, Siemens' sub-litre designs); lutetium oxyorthosilicate crystals and photon-counting detectors come from few sources; and X-ray tubes are made by the scanner companies and a small number of independents. Chinese makers now supply a large share of the domestic market, and the access gap in imaging tracks the radiotherapy gap. Recalls of scanners and their software are recorded in the FDA device recall database and national equivalents and are cited here only as a class. The image-guidance systems on linacs and the PET tracers that feed these scanners have their own records.",
    "principle": "Precision assembly of detectors, tubes, superconducting magnets and reconstruction software at a few global factories, dependent on a narrow set of materials.",
    "strengths": [
      "Five vendors compete on detectors and AI reconstruction",
      "Total-body and photon-counting scanners are step changes",
      "Long service life"
    ],
    "limitations": [
      "Helium and detector crystal supply",
      "High capital cost limits low-income access",
      "Service and software updates tie hospitals to the vendor"
    ],
    "technologies": [
      "ct",
      "pet-ct",
      "pet",
      "spect",
      "pet-tracer-manufacturing",
      "medical-cyclotrons-synthesis-modules"
    ],
    "companies": [
      "siemens-healthineers",
      "ge-healthcare",
      "canon-medical",
      "united-imaging"
    ],
    "links": [
      {
        "label": "FDA medical device recalls database",
        "url": "https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfres/res.cfm"
      },
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/CT_scan"
      },
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Physics_of_magnetic_resonance_imaging"
      }
    ]
  },
  {
    "kind": "technology",
    "asOf": "2026-09-07",
    "id": "mibg-theranostics",
    "name": "MIBG imaging and 131I-MIBG therapy",
    "status": "established",
    "since": 1985,
    "wikipedia": "https://en.wikipedia.org/wiki/Iobenguane",
    "tldr": "A noradrenaline look-alike that neuroblastoma cells swallow: labelled with a small amount of radioactivity it shows the tumour on a scan; with a large amount it treats it.",
    "summary": "123I-MIBG scintigraphy/SPECT is the standard staging scan (Curie score) in neuroblastoma, being partly replaced by 18F-MFBG PET. Therapeutic 131I-MIBG produces responses in ~30% of relapsed patients; COG ANBL1531 tested adding it to induction (results awaited). Also used in pheochromocytoma/paraganglioma (Azedra, discontinued 2024).",
    "principle": "Norepinephrine transporter (NET) uptake concentrates radio-iodinated MIBG in adrenergic tumours; 131I delivers beta radiation.",
    "strengths": [
      "Theranostic pair with decades of use",
      "Targets NET-positive disease irrespective of GD2"
    ],
    "limitations": [
      "Prolonged isolation and radiation precautions in children",
      "Myelosuppression requiring stem-cell support at high doses",
      "Azedra withdrawal reduced supply"
    ],
    "indications": [
      "neuroblastoma",
      "neuroendocrine"
    ],
    "technologies": [
      "radioligand-therapy",
      "spect",
      "pet"
    ],
    "drugs": [
      "i131-mibg"
    ],
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Iobenguane"
      }
    ]
  },
  {
    "kind": "technology",
    "asOf": "2026-09-08",
    "id": "nuclear-medicine-hardware",
    "links": [
      {
        "label": "Badawi et al., First human imaging studies with the EXPLORER total-body PET scanner (Journal of Nuclear Medicine 2019)",
        "url": "https://doi.org/10.2967/jnumed.119.226498"
      }
    ],
    "name": "Nuclear medicine and total-body PET hardware",
    "status": "established",
    "tldr": "Nuclear medicine hardware means the scanners themselves: PET/CT, SPECT/CT, and new total-body PET that images the whole body at once.",
    "summary": "Siemens Healthineers (Biograph Vision Quadra), GE HealthCare (Omni Legend), United Imaging (uEXPLORER, uMI Panorama), Canon Medical (Cartesion Prime), and Positron/Mediso occupy the PET/CT market; SPECT/CT for dosimetry from Siemens, GE, and Spectrum Dynamics. Total-body and long-axial-field-of-view PET raise sensitivity roughly 40-fold, enabling low-dose, dynamic, and multi-tracer studies relevant to theranostics.",
    "principle": "Silicon photomultiplier detector rings with time-of-flight, coupled to CT for attenuation correction; long axial coverage captures the whole body in one bed position.",
    "strengths": [
      "Sensitivity and speed",
      "Dosimetry for radioligand therapy"
    ],
    "limitations": [
      "Capital cost (total-body >$10M)",
      "Data volume",
      "Reimbursement not tied to sensitivity"
    ],
    "technologies": [
      "pet-ct",
      "spect",
      "radioligand-therapy"
    ],
    "companies": [
      "siemens-healthineers",
      "ge-healthcare",
      "united-imaging",
      "canon-medical"
    ],
    "tags": [
      "supporting"
    ]
  },
  {
    "id": "parp-pet",
    "links": [
      {
        "label": "Makvandi et al., A PET imaging agent for evaluating PARP-1 expression in ovarian cancer (Journal of Clinical Investigation 2018)",
        "url": "https://doi.org/10.1172/JCI97992"
      }
    ],
    "kind": "technology",
    "name": "PARP PET",
    "status": "phase-2",
    "asOf": "2026-09-04",
    "tldr": "A PET tracer that measures how much of the DNA repair enzyme PARP a tumour has, to predict response to PARP inhibitors.",
    "summary": "PARP PET uses radiolabelled analogues of the PARP inhibitors olaparib and rucaparib, such as 18F-FluorThanatrace (FTT, Penn) and 18F-PARPi (MSK), which bind PARP1 in the nucleus and so measure both expression of the enzyme and drug engagement at the target. The rationale is that genomic HRD tests read a permanent scar, whereas a PARP tracer reports the tumour's current state. Trials in ovarian, breast and head-and-neck cancer test whether uptake predicts benefit from PARP inhibitors beyond BRCA and HRD status, and whether a fall in uptake on treatment confirms target engagement. It offers a direct pharmacodynamic readout that complements genomic HRD, but remains at the research stage and is available at only a few academic sites. It is a scan that measures how much of the DNA repair enzyme a tumour has, to predict whether a PARP inhibitor will work.",
    "principle": "Radiolabelled olaparib or rucaparib analogues bind PARP1 in the nucleus.",
    "strengths": [
      "Direct pharmacodynamic readout",
      "Complements genomic HRD"
    ],
    "limitations": [
      "Research stage",
      "Limited to a few academic sites"
    ],
    "technologies": [
      "pet"
    ],
    "targets": [
      "parp"
    ]
  },
  {
    "id": "peptide-drug-conjugate",
    "links": [
      {
        "label": "Cooper et al., Peptides as a platform for targeted therapeutics for cancer: peptide-drug conjugates (Chemical Society Reviews 2021)",
        "url": "https://doi.org/10.1039/D0CS00556H"
      }
    ],
    "kind": "technology",
    "name": "Peptide-drug & small-molecule-drug conjugates",
    "status": "approved",
    "asOf": "2026-09-04",
    "tldr": "Like an ADC but with a small targeting peptide instead of an antibody, so it penetrates tumours faster and is cheaper to make.",
    "summary": "Peptide-drug conjugates replace the antibody of an ADC with a short or bicyclic peptide that binds the target, giving rapid tumour penetration and renal clearance, with a short half-life that reduces systemic exposure and cheaper synthesis. Examples include melflufen (Pepaxto, withdrawn in the US), lutetium radioligands (technically peptide-radionuclide conjugates), and clinical-stage PDCs such as BT8009 zelenectide pevedotin, a Nectin-4 Bicycle toxin conjugate, and CBX-12, an exatecan-SMDC. Bicycle's zelenectide pevedotin is in phase 2/3 in urothelial cancer. The same short half-life that limits toxicity also limits tumour exposure, and renal toxicity is a class concern. The simple version is an ADC with a small peptide as the address label, faster to penetrate tumours and cheaper to make.",
    "principle": "Short peptide or bicyclic peptide binds the target; short half-life reduces systemic exposure.",
    "strengths": [
      "Rapid penetration, renal clearance",
      "Cheaper synthesis"
    ],
    "limitations": [
      "Short half-life limits tumour exposure",
      "Renal toxicity"
    ],
    "targets": [
      "nectin4"
    ]
  },
  {
    "id": "pet",
    "trials": [
      "nct05381103",
      "nct06084806",
      "nct03444844",
      "nct07615101",
      "nct06754085",
      "nct06369831",
      "nct04724369",
      "nct07691775",
      "nct07649122",
      "nct06474806"
    ],
    "drugs": [
      "choline-c11"
    ],
    "dependsOn": [
      "nuclear-medicine-hardware",
      "pet-tracer-manufacturing"
    ],
    "kind": "technology",
    "name": "PET (positron emission tomography)",
    "status": "standard-of-care",
    "asOf": "2026-09-04",
    "since": 1975,
    "wikipedia": "https://en.wikipedia.org/wiki/Positron_emission_tomography",
    "tldr": "A scan that shows where a radioactive tracer accumulates, so it images what tumours are doing rather than what they look like.",
    "summary": "Positron emission tomography detects the paired 511 keV gamma photons produced when a positron from a radioactive tracer annihilates with an electron; coincidence detection localises the source and the standardised uptake value (SUV) quantifies it. Isotopes such as 18F, 68Ga, 89Zr and 64Cu are attached to a targeting molecule, and the tracer determines what is measured: glucose metabolism (FDG), receptor expression (PSMA, SSTR, TROP2, HER2), stroma (FAP), immune cells (CD8) or DNA repair (PARP). In clinical use since 1975, it is almost always combined with CT or MRI for anatomic reference. Its strengths are whole-body biology in one quantitative scan and the fact that any target with a ligand can in principle be imaged. Resolution of about 4 mm and tracer supply and cost are the main limitations. PET images what tumours are doing rather than what they look like.",
    "principle": "Positron-emitting isotopes (18F, 68Ga, 89Zr, 64Cu) attached to a targeting molecule; coincidence detection of 511 keV photons; standardised uptake value (SUV) quantifies uptake.",
    "strengths": [
      "Whole-body biology in one scan",
      "Quantitative",
      "Any target with a ligand can in principle be imaged"
    ],
    "limitations": [
      "Resolution ~4 mm",
      "Tracer supply and cost",
      "Inflammation confounds FDG"
    ],
    "technologies": [
      "fdg-pet",
      "psma-pet",
      "fapi-pet",
      "trop2-pet",
      "her2-pet",
      "immuno-pet",
      "parp-pet"
    ],
    "related": [
      "molecular-imaging-roadmap"
    ],
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Positron_emission_tomography"
      }
    ],
    "companies": [
      "alpha-9-oncology",
      "evergreen-theragnostics"
    ]
  },
  {
    "kind": "technology",
    "asOf": "2026-09-07",
    "id": "pet-adapted-therapy",
    "links": [
      {
        "label": "ClinicalTrials.gov NCT05675410: AHOD2131 (COG / NCTN)",
        "url": "https://clinicaltrials.gov/study/NCT05675410"
      },
      {
        "label": "ClinicalTrials.gov NCT02661503: GHSG HD21",
        "url": "https://clinicaltrials.gov/study/NCT02661503"
      }
    ],
    "name": "PET-adapted (response-adapted) therapy",
    "status": "standard-of-care",
    "since": 2016,
    "tldr": "Scan after two cycles of chemotherapy; if the tumour has gone dark, give less treatment, and if not, give more. Hodgkin lymphoma pioneered this.",
    "summary": "Interim FDG-PET after cycle 2 (PET2) scored on the Deauville scale steers escalation or de-escalation: RATHL (omit bleomycin if PET2-negative, no loss of efficacy), HD18 (shorten escalated BEACOPP), HD16/HD17 and RAPID (omit radiotherapy in early stage if PET-negative, at a small PFS cost), and HD21/S1826 (PET-guided consolidation). Being extended to DLBCL and to ctDNA-adapted designs.",
    "principle": "FDG-PET measures metabolic response early; Deauville ≥4 at PET2 predicts failure, allowing therapy to be tailored before completion.",
    "strengths": [
      "Spares most patients bleomycin, radiation or intensified chemotherapy",
      "Identifies the minority who need escalation"
    ],
    "limitations": [
      "Interim PET has imperfect positive predictive value (many PET2-positive patients are cured anyway)",
      "Omitting radiotherapy trades a few percent PFS for late-toxicity avoidance"
    ],
    "indications": [
      "dlbcl"
    ],
    "technologies": [
      "fdg-pet",
      "pet-ct"
    ]
  },
  {
    "id": "pet-ct",
    "trials": [
      "nct03444844",
      "nct07615101",
      "nct06754085",
      "nct06369831",
      "nct07691775",
      "nct07649122"
    ],
    "dependsOn": [
      "pet",
      "ct"
    ],
    "companies": [
      "siemens-healthineers",
      "ge-healthcare",
      "united-imaging",
      "canon-medical"
    ],
    "kind": "technology",
    "name": "PET/CT",
    "status": "standard-of-care",
    "asOf": "2026-09-04",
    "since": 2001,
    "wikipedia": "https://en.wikipedia.org/wiki/PET-CT",
    "tldr": "PET and CT in one machine, so hot spots on the PET are pinned to exact locations on the CT.",
    "summary": "PET/CT acquires PET and CT sequentially on one gantry; the CT provides attenuation correction for the PET data and pins each hot spot to an exact anatomical location. In clinical use since 2001, it is the default form of clinical PET and the standard for staging lymphoma, lung cancer, melanoma and head and neck cancer, combining anatomy with biology in one examination. Total-body PET/CT scanners such as the uEXPLORER and Biograph Vision Quadra image the whole body simultaneously with around 40 times the sensitivity of conventional scanners, enabling ultra-low-dose imaging and dynamic studies that follow tracer kinetics over time. The main drawback is that the CT adds radiation to the PET dose, which matters most in children and in patients scanned repeatedly. PET/CT is two scans in one machine so the biology shown by PET can be read against the anatomy shown by CT.",
    "principle": "Sequential PET and CT acquisition on one gantry; CT provides attenuation correction and anatomic localisation.",
    "strengths": [
      "Anatomy plus biology",
      "Standard for lymphoma, lung, melanoma, head and neck staging"
    ],
    "limitations": [
      "CT radiation added to PET dose"
    ],
    "technologies": [
      "pet",
      "ct"
    ],
    "drugs": [
      "fludeoxyglucose-f18"
    ],
    "related": [
      "molecular-imaging-roadmap",
      "spect-ct"
    ],
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/PET-CT"
      }
    ],
    "journals": [
      "cancer-imaging"
    ]
  },
  {
    "id": "pet-mri",
    "dependsOn": [
      "pet"
    ],
    "companies": [
      "siemens-healthineers",
      "ge-healthcare",
      "united-imaging"
    ],
    "kind": "technology",
    "name": "PET/MRI",
    "status": "established",
    "asOf": "2026-09-04",
    "since": 2010,
    "wikipedia": "https://en.wikipedia.org/wiki/PET-MRI",
    "tldr": "PET combined with MRI instead of CT, giving biology plus the best soft-tissue detail, at lower radiation dose.",
    "summary": "PET/MRI acquires PET and MRI simultaneously or sequentially using MR-compatible detectors, pairing PET's biological signal with MRI's superior soft-tissue contrast instead of CT. Because MRI adds no ionising radiation, the combined dose is lower than PET/CT, which is why it is valuable in paediatrics and in patients who need repeated scans. It is also used in brain tumours, prostate and pelvic cancers, where MRI already outperforms CT for local staging. In clinical use since 2010, it remains limited by cost, the small number of scanners and long acquisition times, and attenuation correction is harder than with CT because MRI does not directly measure tissue density. Whether the added detail changes management enough to justify the expense is still debated outside those niches. It is PET plus the best soft-tissue pictures, at lower radiation dose but with fewer machines available.",
    "principle": "PET and MRI are acquired simultaneously or sequentially with MR-compatible detectors.",
    "strengths": [
      "Lower radiation",
      "Superior soft tissue"
    ],
    "limitations": [
      "Expensive, few scanners",
      "Long acquisition"
    ],
    "technologies": [
      "pet"
    ],
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/PET-MRI"
      }
    ]
  },
  {
    "kind": "technology",
    "asOf": "2026-09-08",
    "id": "pet-tracer-manufacturing",
    "dependsOn": [
      "medical-cyclotrons-synthesis-modules"
    ],
    "links": [
      {
        "label": "21 CFR Part 212: current good manufacturing practice for PET drugs",
        "url": "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-C/part-212"
      }
    ],
    "name": "PET tracer manufacturing and distribution",
    "status": "standard-of-care",
    "tldr": "Making PSMA, FDG, and new tracers under drug-manufacturing rules and delivering them daily.",
    "summary": "FDA-approved PET drugs are made under cGMP at commercial radiopharmacies (PETNET, Cardinal Health, SOFIE, Jubilant, Curium) or academic sites under ANDA/NDA. New tracers (PSMA agents from Lantheus, Telix, Novartis; FES; FAPI in trials) rely on these networks for launch reach. Kits (Illuccix, Locametz) versus centrally produced doses (Pylarify) is a business-model divide.",
    "principle": "Automated radiosynthesis modules, cassette-based chemistry, and rapid QC (radiochemical purity, endotoxin) before release.",
    "strengths": [
      "Daily national coverage in the US and Europe"
    ],
    "limitations": [
      "Tracer approval per site",
      "Kit vs central-dose economics",
      "Limited reach in low-income countries"
    ],
    "technologies": [
      "pet",
      "psma-pet",
      "radiopharmacy-network"
    ],
    "companies": [
      "petnet-solutions",
      "cardinal-health",
      "sofie-biosciences",
      "lantheus",
      "telix",
      "jubilant-radiopharma"
    ],
    "tags": [
      "supporting"
    ]
  },
  {
    "kind": "technology",
    "asOf": "2026-09-07",
    "id": "prrt",
    "trials": [
      "netter-1"
    ],
    "dependsOn": [
      "radioligand-therapy",
      "sstr-pet"
    ],
    "name": "Peptide receptor radionuclide therapy (PRRT)",
    "status": "approved",
    "since": 2018,
    "wikipedia": "https://en.wikipedia.org/wiki/Peptide_receptor_radionuclide_therapy",
    "tldr": "A radioactive version of the hormone mimic used for the scan; it homes to neuroendocrine tumour cells and irradiates them from inside.",
    "summary": "177Lu-DOTATATE (Lutathera; NETTER-1 second line, NETTER-2 first line in grade 2-3) is the reference. 177Lu-edotreotide (ITM-11, COMPETE: PFS 23.9 vs 14.1 months vs everolimus; FDA PDUFA 28 August 2026) is the second beta-emitter. Alpha PRRT with 212Pb-DOTAMTATE (AlphaMedix, Breakthrough designation; phase 2 ORR 54% in PRRT-naive) and 225Ac-DOTATATE (RYZ101, ACTION-1 phase 3) aims at beta-refractory disease. Antagonist ligands (177Lu-satoreotide) bind more receptor sites than agonists.",
    "principle": "An SSTR2-binding peptide is chelated to a therapeutic radionuclide and internalised by the tumour cell; beta (177Lu) or alpha (212Pb, 225Ac) emission; usually four cycles.",
    "strengths": [
      "Systemic, receptor-targeted",
      "Response and quality-of-life benefit",
      "Imaging selects and monitors"
    ],
    "limitations": [
      "Myelosuppression, rare MDS/AML (~2-3%)",
      "Renal dose",
      "Not curative; retreatment data limited"
    ],
    "indications": [
      "neuroendocrine"
    ],
    "targets": [
      "sstr2"
    ],
    "technologies": [
      "radioligand-therapy",
      "targeted-alpha-therapy",
      "sstr-pet"
    ],
    "drugs": [
      "lutathera",
      "itm-11",
      "alphamedix",
      "ryz101"
    ],
    "companies": [
      "novartis",
      "itm",
      "orano-med",
      "radiomedix",
      "rayzebio"
    ],
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Peptide_receptor_radionuclide_therapy"
      }
    ]
  },
  {
    "id": "psma-pet",
    "trials": [
      "pop-rt"
    ],
    "drugs": [
      "choline-c11"
    ],
    "dependsOn": [
      "pet-ct",
      "radiopharmacy-network"
    ],
    "kind": "technology",
    "name": "PSMA PET",
    "status": "standard-of-care",
    "asOf": "2026-09-04",
    "since": 2020,
    "tldr": "A prostate-cancer-specific PET scan that finds spread far earlier than CT or bone scan, and tells you whether a matched radioactive drug will work.",
    "summary": "PSMA PET uses small-molecule urea-based ligands that bind the active site of prostate-specific membrane antigen and are internalised, labelled with 68Ga or 18F. Approved agents are 68Ga-PSMA-11 (Illuccix, Locametz), 18F-DCFPyL (Pylarify, with Pylarify TruVu approved in March 2026) and 18F-rhPSMA-7.3 (Posluma). In clinical use since 2020, it is standard for initial staging of high-risk disease and for biochemical recurrence, where it detects disease at PSA below 0.5 ng/mL, far earlier than CT or bone scan. It is also the theranostic gatekeeper: a PSMA-positive scan is required to select patients for 177Lu-PSMA-617, as in VISION and PSMAfore. Around 10% of patients have PSMA-negative disease, and uptake in ganglia and salivary glands can be mistaken for tumour. It finds spread early and predicts whether the matched radioactive drug will work.",
    "principle": "Small-molecule urea-based ligands bind PSMA's active site and are internalised.",
    "strengths": [
      "Detects recurrence at PSA <0.5 ng/mL",
      "Theranostic gatekeeper"
    ],
    "limitations": [
      "PSMA-negative disease in ~10%",
      "Uptake in ganglia, salivary glands"
    ],
    "technologies": [
      "pet",
      "radioligand-therapy"
    ],
    "targets": [
      "psma"
    ],
    "indications": [
      "prostate"
    ],
    "companies": [
      "clarity-pharmaceuticals"
    ],
    "links": [
      {
        "label": "VISION: lutetium-177 PSMA-617 radioligand therapy extends survival in advanced prostate cancer (New England Journal of Medicine 2021)",
        "url": "https://doi.org/10.1056/NEJMoa2107322"
      },
      {
        "label": "ClinicalTrials.gov NCT03392428: TheraP (ANZUP 1603)",
        "url": "https://clinicaltrials.gov/study/NCT03392428"
      }
    ]
  },
  {
    "id": "quantitative-imaging-biomarkers",
    "kind": "technology",
    "name": "Quantitative imaging biomarkers (RECIST, PERCIST, SUV, ADC)",
    "status": "standard-of-care",
    "since": 2000,
    "asOf": "2026-09-17",
    "aka": [
      "imaging biomarkers",
      "response criteria",
      "PERCIST",
      "standardised uptake value",
      "apparent diffusion coefficient",
      "Deauville score",
      "PI-RADS",
      "QIBA"
    ],
    "tldr": "The numbers pulled from scans that decide whether a cancer is shrinking, growing or dead: tumour diameters for RECIST, sugar uptake on PET, water movement on MRI; they run every trial and most clinic decisions, and they are only as good as the way the scan was taken.",
    "summary": "What they measure. A scan is a picture, but a decision needs a number. Response criteria turn measurements into categories: RECIST 1.1 sums the longest diameters of up to five target lesions on CT or MRI and calls response, stable disease or progression from the percentage change; PERCIST does the same with the peak standardised uptake value of FDG on PET; the Deauville five-point scale reads FDG uptake in lymphoma against liver and blood pool; PI-RADS, LI-RADS and BI-RADS grade the probability of prostate, liver and breast cancer on multiparametric imaging; the apparent diffusion coefficient on diffusion MRI measures how freely water moves, which falls in dense tumour and rises when cells die; and dynamic contrast measures such as Ktrans track blood vessel leakiness. Radiomics adds hundreds of texture and shape features on top of these.\n\nWho uses them and what changes. Every oncology trial defines its endpoints with these criteria, so a RECIST progression call ends a treatment on trial and usually in clinic too. Deauville scores after two cycles decide escalation and de-escalation in Hodgkin lymphoma; PI-RADS decides who is biopsied; the Lugano criteria decide remission in lymphoma; PSMA-RADS and PERCIST are being written into radioligand and immunotherapy trials. Immunotherapy needed its own variant, iRECIST, because tumours can swell before they shrink.\n\nWhat limits them. Diameters ignore necrosis and cavitation; standardised uptake values shift with scanner, reconstruction, glucose level and time after injection; and readers disagree, which is why pivotal trials use blinded central review. The RSNA Quantitative Imaging Biomarkers Alliance publishes profiles setting the acquisition and analysis standards under which a measurement can be trusted to a stated precision. None of these measures needs new equipment; the cost is in standardising protocols and training readers.",
    "principle": "Standardised measurement of lesion size, tracer uptake, diffusion or perfusion on routinely acquired images, converted by validated criteria into response categories or risk scores with known reproducibility.",
    "strengths": [
      "Uses scans already acquired in routine care",
      "Common language for trials and clinic",
      "Standardisation profiles define achievable precision"
    ],
    "limitations": [
      "Size change lags biology and misses necrosis",
      "Uptake and diffusion values vary with scanner and protocol",
      "Reader disagreement, so trials need central review"
    ],
    "indications": [
      "prostate",
      "hcc"
    ],
    "technologies": [
      "radiomics",
      "pet-adapted-therapy",
      "fdg-pet",
      "ct",
      "pet",
      "psma-pet",
      "fes-pet"
    ],
    "links": [
      {
        "label": "European Journal of Cancer 2009: New response evaluation criteria in solid tumours, revised RECIST guideline (version 1.1)",
        "url": "https://doi.org/10.1016/j.ejca.2008.10.026"
      },
      {
        "label": "RSNA Quantitative Imaging Biomarkers Alliance (QIBA)",
        "url": "https://www.rsna.org/research/quantitative-imaging-biomarkers-alliance"
      }
    ]
  },
  {
    "kind": "technology",
    "asOf": "2026-09-07",
    "id": "radioembolisation-tare",
    "name": "Radioembolisation (TARE / SIRT, yttrium-90)",
    "status": "established",
    "since": 2002,
    "wikipedia": "https://en.wikipedia.org/wiki/Selective_internal_radiation_therapy",
    "tldr": "Millions of tiny radioactive glass or resin beads are injected into the liver artery, lodging in the tumour and irradiating it from within.",
    "summary": "Yttrium-90 microspheres (TheraSphere glass, SIR-Spheres resin) deliver beta radiation to hepatic tumours. Randomised trials versus sorafenib in advanced HCC (SARAH, SIRveNIB) were negative for OS but showed better tolerability and response; personalised dosimetry (DOSISPHERE-01) and radiation segmentectomy (LEGACY) established curative-intent use in early-stage disease. Standard alternative to TACE and a bridge or downstaging tool to transplant.",
    "principle": "Arterial delivery of 20-60 µm microspheres carrying 90Y (beta emitter, 2.5 mm mean path, 64 h half-life); dose planned from 99mTc-MAA mapping and lung shunt fraction.",
    "strengths": [
      "Outpatient, single session",
      "Effective in portal vein thrombosis where TACE is contraindicated",
      "Radiation segmentectomy can be curative for small tumours"
    ],
    "limitations": [
      "Radioembolisation-induced liver disease",
      "Failed to beat sorafenib on OS in advanced disease",
      "Lung shunting excludes some patients"
    ],
    "indications": [
      "hcc",
      "neuroendocrine"
    ],
    "companies": [
      "sirtex",
      "boston-scientific"
    ],
    "technologies": [
      "radioligand-therapy",
      "spect"
    ],
    "terms": [
      "dosimetry"
    ],
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Selective_internal_radiation_therapy"
      }
    ]
  },
  {
    "id": "radioimmunotherapy",
    "dependsOn": [
      "therapy-isotope-supply-chain"
    ],
    "kind": "technology",
    "name": "Radio-antibody & radio-ADC",
    "status": "phase-2",
    "asOf": "2026-09-04",
    "wikipedia": "https://en.wikipedia.org/wiki/Radioimmunotherapy",
    "tldr": "Attaching a radioactive atom to an antibody, so an ADC's targeting is used to deliver radiation instead of chemotherapy.",
    "summary": "90Y-ibritumomab (Zevalin) and 131I-tositumomab proved the concept in lymphoma but were commercially abandoned. Renewed interest: 225Ac-labelled antibodies to PSMA (J591), CD33 (lintuzumab), DLL3, HER2, and 177Lu-labelled antibodies. Long antibody half-life is both a dosimetry advantage and a marrow-toxicity problem; pretargeting and fragment approaches address it.",
    "principle": "A chelator-conjugated antibody or fragment carries 177Lu, 225Ac, 212Pb, or 131I.",
    "strengths": [
      "Any ADC target becomes a radiation target",
      "Bystander crossfire independent of payload chemistry"
    ],
    "limitations": [
      "Marrow dose from circulating antibody",
      "Manufacturing complexity"
    ],
    "technologies": [
      "targeted-alpha-therapy"
    ],
    "targets": [
      "psma",
      "dll3",
      "her2"
    ],
    "tags": [
      "frontier"
    ],
    "related": [
      "idea-alpha-after-adc"
    ],
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Radioimmunotherapy"
      }
    ],
    "journals": [
      "cancer-biotherapy-and-radiopharmaceuticals"
    ],
    "companies": [
      "abdera-therapeutics",
      "actinium-pharmaceuticals",
      "convergent-therapeutics"
    ]
  },
  {
    "kind": "technology",
    "asOf": "2026-09-07",
    "id": "radioiodine-therapy",
    "name": "Radioiodine therapy and whole-body iodine scanning",
    "status": "standard-of-care",
    "since": 1946,
    "wikipedia": "https://en.wikipedia.org/wiki/Isotopes_of_iodine#Iodine-131",
    "tldr": "Using the thyroid's natural appetite for iodine to image and treat thyroid cancer with a radioactive form of it. The oldest theranostic, and now used more selectively than it was.",
    "summary": "I-123 or low-activity I-131 scans map iodine-avid tissue; therapeutic I-131 ablates remnants or treats metastases. Randomised trials (HiLo, ESTIMABL1/2, IoN) have progressively reduced activity and then removed ablation for low-risk disease. Refractory disease (no uptake, or progression despite uptake) defines the population for kinase inhibitors; redifferentiation with MEK/BRAF inhibitors can restore uptake in selected patients.",
    "principle": "Thyroid cells take up iodine through the sodium-iodide symporter after TSH stimulation; the beta emission treats, the gamma emission images.",
    "strengths": [
      "Highly selective without any engineered targeting",
      "Cheap, oral, curative in iodine-avid metastatic disease"
    ],
    "limitations": [
      "Dedifferentiated tumours lose uptake",
      "Salivary toxicity; radiation precautions; second cancers at high cumulative activity"
    ],
    "indications": [
      "thyroid"
    ],
    "drugs": [
      "radioactive-iodine"
    ],
    "technologies": [
      "radioligand-therapy",
      "spect"
    ],
    "terms": [
      "theranostics"
    ],
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Isotopes_of_iodine#Iodine-131"
      }
    ]
  },
  {
    "id": "radioligand-dosimetry",
    "dependsOn": [
      "spect"
    ],
    "kind": "technology",
    "name": "Radioligand dosimetry",
    "status": "established",
    "asOf": "2026-09-04",
    "wikipedia": "https://en.wikipedia.org/wiki/Dosimetry",
    "tldr": "Measuring, from scans taken after each dose, how much radiation a radioligand actually delivers to the tumour and to kidneys and marrow, so treatment can be personalised.",
    "summary": "Radioligand therapies are mostly given at fixed activities, unlike external radiotherapy which is planned to a dose. Post-treatment SPECT or PET imaging at several time points lets physicists calculate absorbed doses to tumours and organs at risk, and trials are testing dose escalation guided by kidney and marrow dosimetry. European regulation now expects dosimetry to be available, and software and imaging protocols are being standardised to make it routine.",
    "principle": "Serial quantitative imaging after administration measures activity in organs over time; time-integrated activity and dose kernels give absorbed dose per organ, which guides subsequent cycles.",
    "strengths": [
      "Personalises activity to each patient",
      "Explains variable toxicity and response",
      "Required by European regulation"
    ],
    "limitations": [
      "Extra imaging visits",
      "Methodological variation between centres",
      "Prospective outcome evidence still limited"
    ],
    "technologies": [
      "radioligand-therapy",
      "lu177-radioligand-therapy"
    ],
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Dosimetry"
      }
    ]
  },
  {
    "id": "radioligand-therapy",
    "dependsOn": [
      "therapy-isotope-supply-chain",
      "radiopharmacy-network",
      "medical-cyclotrons-synthesis-modules",
      "pet-ct",
      "radioligand-dosimetry"
    ],
    "kind": "technology",
    "name": "Radioligand therapy (beta emitters)",
    "status": "approved",
    "asOf": "2026-09-04",
    "since": 2018,
    "wikipedia": "https://en.wikipedia.org/wiki/Radioligand_therapy",
    "tldr": "A drug that finds tumour cells and carries a radioactive atom that irradiates them from inside the body.",
    "summary": "177Lu-DOTATATE (Lutathera, 2018) in neuroendocrine tumours and 177Lu-PSMA-617 (Pluvicto, 2022; pre-chemotherapy label 2025; 2026 label expansion) in prostate cancer are the approved beta-emitter therapies. Pipeline: 177Lu-FAP, 177Lu-PSMA-I&T, 177Lu-NeoB (GRPR), 177Lu-labelled antibodies. Dosimetry-guided personalised dosing is emerging.",
    "principle": "177Lu emits beta particles with ~2 mm range and gamma photons for SPECT imaging; the ligand determines biodistribution.",
    "strengths": [
      "Systemic, whole-body targeting of microscopic disease",
      "Crossfire kills antigen-negative neighbours",
      "Imaging companion selects patients"
    ],
    "limitations": [
      "Marrow and kidney dose",
      "Isotope logistics (6.7-day half-life)",
      "Not curative alone"
    ],
    "technologies": [
      "psma-pet",
      "spect",
      "targeted-alpha-therapy"
    ],
    "targets": [
      "psma",
      "sstr2",
      "fap"
    ],
    "drugs": [
      "pluvicto",
      "lutathera"
    ],
    "indications": [
      "prostate",
      "neuroendocrine"
    ],
    "companies": [
      "clarity-pharmaceuticals",
      "abdera-therapeutics",
      "alpha-9-oncology",
      "ariceum-therapeutics",
      "artbio",
      "atomic-alchemy",
      "evergreen-theragnostics",
      "mariana-oncology",
      "nucleus-radiopharma",
      "point-biopharma",
      "precirix",
      "radionetics-oncology",
      "ratio-therapeutics"
    ],
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Radioligand_therapy"
      }
    ],
    "journals": [
      "cancer-biotherapy-and-radiopharmaceuticals"
    ]
  },
  {
    "id": "radiomics",
    "related": [
      "quantitative-imaging-biomarkers"
    ],
    "kind": "technology",
    "name": "Radiomics",
    "status": "emerging",
    "asOf": "2026-09-04",
    "wikipedia": "https://en.wikipedia.org/wiki/Radiomics",
    "tldr": "Turning ordinary CT, MRI and PET scans into hundreds of measured features of shape and texture that computers relate to tumour biology and outcome.",
    "summary": "Radiomics, a term coined in 2012, extracts quantitative descriptors of intensity, shape and texture from medical images and links them to diagnosis, prognosis or treatment response. Radiogenomics goes a step further by relating imaging phenotypes to tumour mutations and expression. Reproducibility across scanners and protocols has been the main obstacle, addressed by the Image Biomarker Standardisation Initiative and by deep-learning models trained end to end.",
    "principle": "Segment the tumour, compute standardised feature sets or learned representations, then fit predictive models validated on external cohorts.",
    "strengths": [
      "Uses images already acquired in routine care",
      "Whole-tumour and longitudinal view without a biopsy",
      "Can complement genomics where tissue is scarce"
    ],
    "limitations": [
      "Features vary with scanner and reconstruction",
      "Many published signatures fail external validation",
      "Few prospective trials"
    ],
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Radiomics"
      }
    ]
  },
  {
    "kind": "technology",
    "asOf": "2026-09-08",
    "id": "radionuclide-generators-kits",
    "links": [
      {
        "label": "21 CFR Part 211: current good manufacturing practice for finished pharmaceuticals",
        "url": "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-C/part-211"
      }
    ],
    "name": "Radionuclide generators and cold kits",
    "status": "standard-of-care",
    "tldr": "Bench-top devices that 'milk' a short-lived isotope from a long-lived parent, plus vials of ready-to-label ligand. How most hospitals make PSMA and somatostatin PET tracers without a cyclotron.",
    "summary": "Ge-68/Ga-68 generators (Eckert & Ziegler GalliaPharm, IRE ELiT Galli Eo, ITG) elute Ga-68 for 6-12 months; Mo-99/Tc-99m generators (Curium, Lantheus, GE) underpin SPECT; kits such as Illuccix and Gozellix (Telix), Locametz (Novartis) and NETSPOT (Novartis/AAA) let a radiopharmacy label PSMA-11 or DOTATATE in minutes. Generator supply shortages (Ge-68 in 2018-19) and kit versus unit-dose economics shape tracer access.",
    "principle": "Parent isotope adsorbed on a column decays to the daughter, which is eluted on demand; cold kits contain lyophilised chelator-ligand and buffer for one-step labelling.",
    "strengths": [
      "Cyclotron-free access to PET tracers",
      "Decentralised, low-cost labelling"
    ],
    "limitations": [
      "Limited activity per elution (few patients per day)",
      "Generator supply concentrated in a few producers",
      "Regulatory status of kits varies by country"
    ],
    "technologies": [
      "psma-pet",
      "pet-tracer-manufacturing",
      "medical-cyclotrons-synthesis-modules",
      "spect"
    ],
    "companies": [
      "eckert-ziegler",
      "curium",
      "telix",
      "novartis",
      "lantheus"
    ],
    "tags": [
      "supporting"
    ]
  },
  {
    "id": "radionuclide-parp-combination",
    "kind": "technology",
    "name": "Radioligand plus DNA-repair inhibitor combinations",
    "status": "phase-1",
    "asOf": "2026-09-08",
    "tldr": "Adding a PARP or ATR inhibitor to a radioactive drug so the tumour cannot repair the damage the radiation causes.",
    "summary": "Radioligand therapy kills by DNA damage, so blocking repair should amplify it. Early-phase studies combine 177Lu-PSMA with olaparib in prostate cancer and 177Lu-DOTATATE with PARP inhibitors in neuroendocrine tumours; the recurring question is whether marrow toxicity rises faster than tumour control. No phase 3 had read out by 2026.",
    "principle": "Beta or alpha decay produces single- and double-strand breaks; PARP or ATR inhibition prevents repair, converting sublethal damage into cell death and lowering the activity required.",
    "strengths": [
      "Rational and mechanism-driven",
      "Both components already approved separately",
      "Could reduce the number of radioligand cycles"
    ],
    "limitations": [
      "Overlapping haematologic toxicity",
      "Optimal sequencing and timing unknown",
      "No randomised evidence yet"
    ],
    "technologies": [
      "radioligand-therapy",
      "targeted-alpha-therapy"
    ],
    "targets": [
      "parp",
      "psma",
      "sstr2"
    ],
    "indications": [
      "prostate",
      "neuroendocrine"
    ],
    "tags": [
      "frontier",
      "promising"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov: Lu-177 PSMA plus olaparib",
        "url": "https://clinicaltrials.gov/search?term=lutetium%20PSMA%20olaparib"
      }
    ]
  },
  {
    "kind": "technology",
    "asOf": "2026-09-17",
    "tags": [
      "manufacturing-wave"
    ],
    "provenance": {
      "editedBy": "Nuclide manufacturing expansion",
      "editedOn": "2026-09-17"
    },
    "id": "radiopharmaceutical-gmp-release",
    "name": "Radiopharmaceutical GMP and releasing a drug that decays",
    "status": "standard-of-care",
    "since": 2011,
    "tldr": "A radioactive medicine loses activity every hour, so it is made to order, tested in hours and often injected before the sterility test has finished. The rules for that are different from ordinary drugs, and the handful of plants that make lutetium therapies have had their own shortages.",
    "summary": "Radiopharmaceuticals are made under GMP frameworks written for their half-lives: 21 CFR 212 for PET drugs in the United States (with USP chapters 823 and 825 for compounding and nuclear pharmacy), 21 CFR 211 for therapeutic radiopharmaceuticals, and EU GMP Annex 3. Each batch is calibrated to a stated activity at a stated time, tested for radionuclidic purity (for example lutetium-177m in carrier-added lutetium-177), radiochemical purity (how much of the isotope is actually attached to the ligand), pH, endotoxin and appearance, and released within hours; the regulations allow release before the fourteen-day sterility test is complete because the product would otherwise have decayed, with the test finished retrospectively. Shelf life is measured in hours for PET tracers and a few days for lutetium products, so manufacture is scheduled against a named patient's appointment and the dose is shipped in a shielded container the same day.\n\nTherapeutic radioligands are made centrally. Novartis produces lutetium-177 dotatate and lutetium-177 vipivotide tetraxetan at plants in Millburn and Indianapolis in the United States, Zaragoza in Spain and Ivrea in Italy, and in 2022 paused Ivrea and Millburn over potential quality issues, then in 2023 limited new patient starts in the United States until the Indianapolis site was licensed and lutetium supply caught up. Curium, ITM, Telix and Lantheus run or contract their own radiopharmaceutical plants and radiopharmacy networks. Because any delay means a missed treatment rather than a late shipment, the sector has argued for regional radiopharmacy hubs and harmonised transport rules, ideas recorded elsewhere on this site.",
    "principle": "Time-stamped activity, rapid quality control and conditional release before sterility results, under GMP annexes written for half-lives of hours to days.",
    "strengths": [
      "Clear regulatory frameworks in the US and EU",
      "Quality control fits within the half-life",
      "Central plants give consistent product"
    ],
    "limitations": [
      "Missed slots are lost doses",
      "Few licensed therapeutic plants",
      "Cross-border transport of radioactive material"
    ],
    "technologies": [
      "therapy-isotope-supply-chain",
      "radiopharmacy-network",
      "pet-tracer-manufacturing",
      "research-reactor-isotope-production",
      "cyclotron-isotope-production",
      "radioligand-therapy",
      "radioligand-dosimetry"
    ],
    "drugs": [
      "pluvicto",
      "lutathera",
      "lu177-psma-it",
      "radium-223",
      "ga68-dotatate"
    ],
    "companies": [
      "novartis",
      "curium",
      "itm",
      "telix",
      "lantheus",
      "bayer",
      "petnet-solutions",
      "cardinal-health"
    ],
    "indications": [
      "prostate",
      "neuroendocrine"
    ],
    "bottlenecks": [
      "b-manufacturing-cell-therapy"
    ],
    "links": [
      {
        "label": "21 CFR Part 212: current good manufacturing practice for PET drugs",
        "url": "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-C/part-212"
      },
      {
        "label": "EU GMP Annex 3: manufacture of radiopharmaceuticals",
        "url": "https://health.ec.europa.eu/medicinal-products/eudralex/eudralex-volume-4_en"
      },
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Radiopharmaceutical"
      }
    ]
  },
  {
    "kind": "technology",
    "asOf": "2026-09-08",
    "id": "radiopharmacy-network",
    "dependsOn": [
      "medical-cyclotrons-synthesis-modules"
    ],
    "links": [
      {
        "label": "21 CFR Part 212: current good manufacturing practice for PET drugs",
        "url": "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-C/part-212"
      }
    ],
    "name": "Radiopharmacy and cyclotron networks",
    "status": "standard-of-care",
    "tldr": "The factories and courier routes that make and deliver short-lived radioactive tracers to hospitals within hours.",
    "summary": "PET tracers (18F, half-life 110 minutes) are produced in regional cyclotron pharmacies and driven or flown to scanners the same day; 68Ga comes from generators or cyclotrons on site; 177Lu and 225Ac therapies are made centrally and shipped globally against decay. Networks: PETNET (Siemens), Cardinal Health, SOFIE, Curium, Jubilant Radiopharma, Isologic/Isorad in Canada, with regional players in Europe and Asia. Capacity and licensing of nuclear pharmacies limits where radioligand therapy can be given.",
    "principle": "Cyclotron proton bombardment or generator elution produces the isotope; automated synthesis modules label the ligand; QC release within an hour; timed logistics deliver a calibrated activity.",
    "strengths": [
      "Same-day supply of 18F tracers across most high-income regions",
      "Established GMP frameworks"
    ],
    "limitations": [
      "Rural and low-income coverage gaps",
      "Therapy isotope logistics against decay",
      "Single points of failure in reactor supply"
    ],
    "technologies": [
      "pet",
      "psma-pet",
      "radioligand-therapy",
      "therapy-isotope-supply-chain"
    ],
    "companies": [
      "petnet-solutions",
      "cardinal-health",
      "sofie-biosciences",
      "curium",
      "jubilant-radiopharma"
    ],
    "tags": [
      "supporting"
    ]
  },
  {
    "kind": "technology",
    "asOf": "2026-09-17",
    "tags": [
      "manufacturing-wave"
    ],
    "provenance": {
      "editedBy": "Nuclide manufacturing expansion",
      "editedOn": "2026-09-17"
    },
    "id": "research-reactor-isotope-production",
    "name": "Research reactors for medical isotopes (Mo-99, Lu-177, I-131)",
    "status": "standard-of-care",
    "since": 1960,
    "tldr": "Most of the world's therapeutic and scanning isotopes are made by putting targets into about half a dozen ageing research reactors and flying the product out within days. When two reactors were down at once in 2009 and 2010, hospitals worldwide ran short of the most used scan isotope.",
    "summary": "Neutron-rich isotopes come from reactors. Molybdenum-99, parent of technetium-99m for most bone and SPECT scans, is made by fissioning uranium targets; lutetium-177 for radioligand therapy is made either directly by irradiating enriched lutetium-176 (carrier-added, with a long-lived Lu-177m impurity that complicates waste) or indirectly by irradiating enriched ytterbium-176 and chemically separating the lutetium that grows in (non-carrier-added, the route used by ITM, SHINE, Isotopia and others); iodine-131 comes from tellurium targets or fission. The irradiations happen in a small fleet of high-flux research reactors: BR2 at SCK CEN in Mol (Belgium), the High Flux Reactor at Petten (Netherlands), MARIA (Poland), LVR-15 (Czech Republic), SAFARI-1 at Pelindaba (South Africa), OPAL at Lucas Heights (Australia), MURR in Missouri and reactors in Russia. Processors such as Curium, IRE, NTP and ANSTO dissolve the targets in hot cells and ship purified product to generator and radiopharmaceutical makers; lutetium producers such as ITM, Isotopia, Eckert & Ziegler and Curium buy irradiation time and do the separation. Bruce Power in Ontario has shown that a commercial power reactor can irradiate ytterbium targets for ITM, opening a new class of supplier.\n\nThe fleet is old and outages coincide. When Canada's NRU reactor shut unexpectedly in 2009 and Petten's HFR followed in 2010, the world lost most of its Mo-99 for months; the OECD Nuclear Energy Agency's high-level group on medical radioisotopes was formed in response, pressed for full-cost pricing, scheduled reserve capacity and conversion of targets from highly enriched to low-enriched uranium (SAFARI-1 converted first), and still tracks the supply. NRU stopped isotope production in 2016 and closed in 2018; the Pallas reactor being built at Petten is the planned replacement for the HFR. Newer constraints are enriched ytterbium-176, most of which has historically come from Russian enrichment, and the surge in lutetium demand since lutetium-177 vipivotide tetraxetan was approved, which produced dose delays in 2022 and 2023.",
    "principle": "Neutron capture or fission in high-flux research reactors, followed by hot-cell chemistry and same-week logistics for isotopes with half-lives of days.",
    "strengths": [
      "Large activities per irradiation",
      "Well characterised routes with pharmacopoeial monographs",
      "Power reactors can now add capacity"
    ],
    "limitations": [
      "Half a dozen ageing reactors with coinciding outages",
      "Enriched target material from few sources",
      "Transport of short-lived product across borders"
    ],
    "technologies": [
      "therapy-isotope-supply-chain",
      "radionuclide-generators-kits",
      "cyclotron-isotope-production",
      "radiopharmaceutical-gmp-release",
      "radiopharmacy-network",
      "radioligand-therapy",
      "spect"
    ],
    "drugs": [
      "pluvicto",
      "lutathera",
      "lu177-psma-it"
    ],
    "companies": [
      "curium",
      "ire",
      "ntp-radioisotopes",
      "ansto",
      "itm",
      "isotopia",
      "eckert-ziegler",
      "nordion",
      "shine-technologies",
      "northstar-medical-radioisotopes",
      "novartis"
    ],
    "indications": [
      "prostate",
      "neuroendocrine"
    ],
    "bottlenecks": [
      "b-manufacturing-cell-therapy"
    ],
    "links": [
      {
        "label": "OECD Nuclear Energy Agency: supply of medical radioisotopes",
        "url": "https://www.oecd-nea.org/jcms/pl_20168/medical-radioisotopes"
      },
      {
        "label": "US DOE Isotope Program",
        "url": "https://www.isotopes.gov/"
      },
      {
        "label": "Wikipedia: technetium-99m and the Mo-99 supply crisis",
        "url": "https://en.wikipedia.org/wiki/Technetium-99m#Shortages"
      }
    ]
  },
  {
    "id": "site-specific-conjugation",
    "kind": "technology",
    "name": "Site-specific conjugation & linker chemistry",
    "status": "established",
    "asOf": "2026-09-04",
    "wikipedia": "https://en.wikipedia.org/wiki/Bioconjugation",
    "tldr": "Site-specific conjugation and linker chemistry decide exactly where and how many payloads attach to the antibody, which determines how safe and effective an ADC is.",
    "summary": "Random lysine or cysteine conjugation (T-DM1, brentuximab) gives heterogeneous mixtures. Engineered cysteines (THIOMAB), glycan remodelling (Synaffix GlycoConnect), enzymatic (sortase, transglutaminase), and non-natural amino acids (Ambrx, Sutro) yield homogeneous DAR. Hydrophilic linkers (Mersana Dolaflexin, Zymeworks ZD06519 platform, MediLink TMALIN) allow DAR 8 without aggregation; cleavable tetrapeptide GGFG (DXd) versus non-cleavable SMCC (T-DM1) governs bystander effect.",
    "principle": "Defined attachment sites and linker hydrophilicity control pharmacokinetics, aggregation, and payload release.",
    "strengths": [
      "Homogeneous product, better PK",
      "Enables high DAR and dual payloads"
    ],
    "limitations": [
      "Manufacturing complexity"
    ],
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Bioconjugation"
      }
    ]
  },
  {
    "id": "spect",
    "dependsOn": [
      "nuclear-medicine-hardware",
      "radionuclide-generators-kits"
    ],
    "related": [
      "radioligand-dosimetry",
      "spect-ct"
    ],
    "kind": "technology",
    "name": "SPECT & bone scan",
    "status": "standard-of-care",
    "asOf": "2026-09-04",
    "wikipedia": "https://en.wikipedia.org/wiki/Single-photon_emission_computed_tomography",
    "tldr": "SPECT and the bone scan are an older type of nuclear scan, still used for bone metastases and to check where a radioactive drug went after treatment.",
    "summary": "SPECT uses gamma cameras to detect single photons from isotopes such as 99mTc, 111In and 177Lu, rotating around the patient to reconstruct a 3D distribution. The 99mTc-MDP bone scan is its most familiar oncology use, detecting skeletal metastases through increased bone turnover, although PSMA PET is displacing it in prostate cancer. Its growing role is in theranostics: SPECT/CT after 177Lu therapy shows where the radioligand went and enables post-treatment dosimetry, a key enabler of personalised radioligand dosing. It is cheap and widespread, but its resolution and sensitivity are lower than PET, and standardising dosimetry protocols across centres remains work in progress. SPECT is the older nuclear scan still used for bone metastases and for checking where a radioactive drug ended up.",
    "principle": "Gamma cameras detect single photons from 99mTc, 111In, 177Lu; rotating acquisition reconstructs 3D distribution.",
    "strengths": [
      "Cheap, widespread",
      "Dosimetry for radioligand therapy"
    ],
    "limitations": [
      "Lower resolution and sensitivity than PET"
    ],
    "technologies": [
      "radioligand-therapy"
    ],
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Single-photon_emission_computed_tomography"
      }
    ],
    "companies": [
      "atomic-alchemy",
      "ge-healthcare",
      "siemens-healthineers",
      "mediso"
    ]
  },
  {
    "kind": "technology",
    "asOf": "2026-09-17",
    "tags": [
      "machines-wave"
    ],
    "id": "spect-ct",
    "name": "SPECT/CT",
    "status": "standard-of-care",
    "since": 1999,
    "wikipedia": "https://en.wikipedia.org/wiki/Single-photon_emission_computed_tomography",
    "tldr": "A gamma camera with a CT scanner bolted on, so a hot spot on a bone scan or a sentinel-node scan is pinned to the exact bone or lymph node, and the dose from a radioactive drug can be measured after treatment.",
    "summary": "SPECT/CT acquires a rotating gamma-camera study and a CT scan on one gantry. The CT corrects the SPECT for attenuation and places each focus of tracer anatomically, turning an ambiguous spot on a planar bone scan into a rib fracture or a metastasis and mapping a sentinel node to the correct basin before surgery. In oncology it is used for technetium bone scans in prostate and breast cancer, sentinel lymph node mapping in melanoma and breast cancer, radioiodine scans in thyroid cancer, MIBG in neuroblastoma, somatostatin-receptor scans where PET is not available and, increasingly, for quantitative imaging of lutetium-177 after radioligand therapy so the absorbed dose to tumour and kidneys can be calculated. Newer cameras replace sodium iodide crystals with cadmium zinc telluride detectors arranged in a ring (GE StarGuide, Siemens Symbia Pro.specta with digital detectors), which are faster and more quantitative.\n\nSPECT is cheaper and far more widely available than PET, and the tracers are generator-produced without a cyclotron, but its resolution and sensitivity are lower and scans are slower.",
    "principle": "Rotating gamma cameras record single photons from technetium-99m, iodine-123 or lutetium-177 tracers; a co-registered CT provides attenuation correction and anatomical localisation for a quantitative three-dimensional map.",
    "strengths": [
      "Widely available and cheaper than PET",
      "Tracers from generators, no cyclotron needed",
      "Dosimetry after lutetium-177 therapy"
    ],
    "limitations": [
      "Lower resolution and sensitivity than PET",
      "Slower acquisitions",
      "Fewer targeted tracers than PET"
    ],
    "indications": [
      "prostate",
      "thyroid",
      "neuroblastoma",
      "neuroendocrine"
    ],
    "technologies": [
      "spect",
      "ct",
      "radioligand-dosimetry"
    ],
    "related": [
      "radioligand-therapy",
      "pet-ct"
    ],
    "companies": [
      "ge-healthcare",
      "siemens-healthineers",
      "mediso"
    ],
    "links": [
      {
        "label": "Wikipedia: SPECT",
        "url": "https://en.wikipedia.org/wiki/Single-photon_emission_computed_tomography"
      },
      {
        "label": "GE HealthCare: SPECT/CT systems",
        "url": "https://www.gehealthcare.com/products/molecular-imaging/spect-ct"
      }
    ]
  },
  {
    "kind": "technology",
    "asOf": "2026-09-07",
    "id": "sstr-pet",
    "dependsOn": [
      "pet-ct",
      "radionuclide-generators-kits"
    ],
    "name": "Somatostatin receptor PET (68Ga/64Cu-DOTATATE)",
    "status": "standard-of-care",
    "since": 2016,
    "wikipedia": "https://en.wikipedia.org/wiki/DOTA-TATE",
    "tldr": "A PET scan using a radioactive hormone mimic that lights up neuroendocrine tumours and shows whether the matching radioactive treatment will work.",
    "summary": "68Ga-DOTATATE (Netspot, 2016), 68Ga-DOTATOC (2019) and 64Cu-DOTATATE (Detectnet, 2020) replaced 111In-octreotide scintigraphy, with far higher sensitivity for small lesions and bone disease. Mandatory for staging, for selecting patients for PRRT (Krenning score ≥3 or uptake above liver), and for detecting occult primaries. FDG PET complements it in high-grade or dedifferentiated disease ('flip-flop' pattern).",
    "principle": "Radiolabelled somatostatin analogue binds SSTR2 on tumour cells; positron emission imaged by PET/CT.",
    "strengths": [
      "Whole-body receptor map",
      "Theranostic gatekeeper for 177Lu-DOTATATE",
      "Changes management in ~40% of patients versus conventional imaging"
    ],
    "limitations": [
      "Physiologic uptake in pancreas uncinate, spleen, pituitary",
      "Poor sensitivity in SSTR-negative high-grade disease",
      "68Ga generator supply and short half-life"
    ],
    "indications": [
      "neuroendocrine",
      "sclc"
    ],
    "targets": [
      "sstr2"
    ],
    "technologies": [
      "pet",
      "pet-ct"
    ],
    "drugs": [
      "lutathera"
    ],
    "terms": [
      "theranostics"
    ],
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/DOTA-TATE"
      }
    ]
  },
  {
    "kind": "technology",
    "asOf": "2026-09-08",
    "id": "sterile-fill-finish",
    "links": [
      {
        "label": "FDA guidance: sterile drug products produced by aseptic processing",
        "url": "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/sterile-drug-products-produced-aseptic-processing-current-good-manufacturing-practice"
      }
    ],
    "name": "Sterile fill-finish and lyophilisation",
    "status": "standard-of-care",
    "tldr": "Sterile fill-finish is putting the finished drug into vials under sterile conditions. It is a frequent cause of shortages when capacity is tight.",
    "summary": "Fill-finish capacity for biologics, ADCs, and radiopharmaceutical kits is concentrated (Catalent, Vetter, Baxter BioPharma Solutions, Thermo Fisher, Lonza, Samsung Biologics); lyophilisation is common for ADCs and mRNA products. Shortages of cisplatin and carboplatin in 2023 traced to a single sterile injectables plant (Intas/Accord) failing inspection, exposing the fragility of generic oncology supply.",
    "principle": "Fill-finish relies on aseptic filling in isolators, lyophilisation cycles tuned to product stability, and 100% container-closure integrity inspection.",
    "strengths": [
      "Established GMP"
    ],
    "limitations": [
      "Concentrated capacity",
      "Generic injectable shortages",
      "Long qualification times"
    ],
    "tags": [
      "supporting"
    ]
  },
  {
    "id": "targeted-alpha-therapy",
    "dependsOn": [
      "therapy-isotope-supply-chain",
      "radiopharmacy-network",
      "radioligand-dosimetry"
    ],
    "related": [
      "astatine-211-alpha-therapy"
    ],
    "kind": "technology",
    "name": "Targeted alpha therapy",
    "status": "phase-3",
    "asOf": "2026-09-04",
    "wikipedia": "https://en.wikipedia.org/wiki/Targeted_alpha-particle_therapy",
    "tldr": "Like radioligand therapy but with alpha particles: far more destructive over a much shorter range, so single cells can be killed with less collateral damage.",
    "summary": "Actinium-225 and lead-212 agents (225Ac-PSMA-617, 225Ac-DOTATATE/RYZ101, 212Pb-DOTAMTATE/AlphaMedix, 225Ac-FAP) are in phase 3. Radium-223 (Xofigo) is the only approved alpha emitter, for bone metastases. Isotope supply (TerraPower, Orano, ITM) is the binding constraint. Alpha therapy after beta failure produces responses in PSMA-refractory disease.",
    "principle": "Alpha particles (4-9 MeV, <100 µm range) cause clustered double-strand breaks independent of oxygen and cell cycle.",
    "strengths": [
      "Overcomes beta resistance",
      "Kills micrometastases with minimal crossfire"
    ],
    "limitations": [
      "Ac-225 supply",
      "Daughter-nuclide redistribution (salivary, renal toxicity)",
      "Dosimetry difficult"
    ],
    "technologies": [
      "radioligand-therapy"
    ],
    "targets": [
      "psma",
      "sstr2",
      "fap"
    ],
    "companies": [
      "terrapower-isotopes",
      "orano-med",
      "itm",
      "rayzebio",
      "fusion-pharma",
      "abdera-therapeutics",
      "actinium-pharmaceuticals",
      "alpha-9-oncology",
      "ariceum-therapeutics",
      "artbio",
      "convergent-therapeutics",
      "ratio-therapeutics"
    ],
    "tags": [
      "frontier"
    ],
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Targeted_alpha-particle_therapy"
      }
    ]
  },
  {
    "kind": "technology",
    "asOf": "2026-09-08",
    "id": "therapy-isotope-supply-chain",
    "links": [
      {
        "label": "US Department of Energy Isotope Program",
        "url": "https://www.isotopes.gov/"
      }
    ],
    "name": "Therapeutic isotope supply chain (Mo-99, Lu-177, Ac-225)",
    "status": "established",
    "tldr": "Where the radioactive atoms for imaging and therapy actually come from: ageing reactors, new accelerators, and a scramble for actinium.",
    "summary": "Mo-99/Tc-99m for SPECT still depends on a few research reactors (BR2, HFR Petten, OPAL, SAFARI) with accelerator alternatives from NorthStar and SHINE. Lu-177 (non-carrier-added) is supplied by ITM, SHINE, Eckert & Ziegler, Curium and NorthStar; Ac-225 supply is the binding constraint for alpha therapy, with US DOE, TerraPower Isotopes, Orano Med (Pb-212), NorthStar, Niowave, and ITM expanding. Supply agreements are now a competitive asset for radiopharma companies.",
    "principle": "Reactor neutron capture (Lu-176→Lu-177), Th-229 decay chains and accelerator spallation (Ac-225), and electron-accelerator photonuclear routes (Mo-99) produce isotopes that are purified, calibrated, and shipped against decay.",
    "strengths": [
      "Multiple new non-reactor routes since 2020"
    ],
    "limitations": [
      "Ac-225 shortage until late 2020s",
      "Reactor outages cause global shortages",
      "Regulatory licensing of new production sites is slow"
    ],
    "technologies": [
      "radioligand-therapy",
      "targeted-alpha-therapy",
      "radiopharmacy-network"
    ],
    "companies": [
      "itm",
      "terrapower-isotopes",
      "orano-med",
      "northstar-medical-radioisotopes",
      "shine-technologies",
      "eckert-ziegler",
      "curium"
    ],
    "tags": [
      "supporting"
    ]
  },
  {
    "id": "total-body-pet-screening",
    "kind": "technology",
    "name": "Total-body PET for screening and ultra-low-dose imaging",
    "status": "concept",
    "asOf": "2026-09-08",
    "tldr": "Scanners sensitive enough to image the whole body in seconds at a fraction of the radiation dose, which raises the question of whether healthy people should be scanned at all.",
    "summary": "Total-body PET systems capture the entire body in one field of view with roughly forty times the sensitivity of conventional scanners, enabling minute-long scans, tracer doses a fraction of the usual, and dynamic whole-body kinetics. That makes asymptomatic screening technically conceivable for the first time, but there is no evidence of mortality benefit, and incidentalomas, cost and radiation argue against it. The near-term value is in dosimetry, paediatrics and pharmacokinetic research.",
    "principle": "A long axial field-of-view detector ring captures far more of the emitted photons, letting sensitivity be traded for dose, time, or both.",
    "strengths": [
      "Ultra-low-dose or ultra-fast scans",
      "Whole-body kinetic modelling for radioligand dosimetry",
      "Better paediatric and repeat imaging"
    ],
    "limitations": [
      "No screening evidence and likely overdiagnosis",
      "Scanner cost limits access",
      "Tracer supply and reimbursement"
    ],
    "technologies": [
      "pet-ct",
      "pet"
    ],
    "companies": [
      "united-imaging",
      "siemens-healthineers"
    ],
    "terms": [
      "dosimetry"
    ],
    "tags": [
      "frontier"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov: total-body PET",
        "url": "https://clinicaltrials.gov/search?term=total-body%20PET"
      }
    ]
  },
  {
    "id": "trop2-pet",
    "kind": "technology",
    "name": "TROP2 PET",
    "status": "phase-1",
    "asOf": "2026-09-04",
    "since": 2023,
    "tldr": "An experimental PET scan that shows whether a tumour carries the TROP2 protein, so doctors could pick the right ADC before giving it.",
    "summary": "89Zr-labelled anti-TROP2 antibodies and 68Ga/18F-labelled TROP2 nanobodies and peptides (Fudan University, Peking Union, others) have been imaged in first-in-human studies in breast, lung, and pancreatic cancer. The goal is non-invasive, whole-body, heterogeneity-aware selection and monitoring for sacituzumab govitecan, datopotamab deruxtecan, and sacituzumab tirumotecan, where IHC has been an unreliable predictor.",
    "principle": "A radiolabelled TROP2 binder is imaged; antibody tracers image at 3-6 days with 89Zr, nanobodies within 1-2 hours with 68Ga/18F.",
    "strengths": [
      "Whole-body target map",
      "Could resolve intratumoural heterogeneity",
      "Repeatable on progression"
    ],
    "limitations": [
      "Early stage; no validated SUV cut-off",
      "Antibody tracers are slow; nanobodies have renal uptake",
      "Unclear whether expression level predicts ADC response"
    ],
    "technologies": [
      "pet",
      "immuno-pet"
    ],
    "targets": [
      "trop2"
    ],
    "tags": [
      "frontier"
    ]
  }
];
