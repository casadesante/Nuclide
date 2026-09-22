import type { EntityInput } from "@/lib/schema";

export const diagnosticOncologyAgents: EntityInput[] = [
  {
    id: "f-18-naf",
    kind: "drug",
    name: "Sodium fluoride F-18",
    aka: ["18F-NaF", "Na18F", "Fluoride F-18"],
    modality: "PET tracer",
    mechanism:
      "Fluoride ion exchanges with hydroxyl groups on the hydroxyapatite crystal surface of bone, concentrating wherever bone turnover (osteoblastic activity) is high. Uptake reflects blood flow and new bone formation rather than tumour cells directly, so it lights up both malignant and benign remodelling.",
    tldr: "A radioactive form of fluoride that collects in areas of bone rebuilding. A PET scan after the injection shows those hot spots, which can be cancer that has spread to bone or something harmless like a healed fracture.",
    summary:
      "Sodium fluoride F-18 is one of the oldest PET radiopharmaceuticals: it was first approved by FDA in 1972 (NDA 17-042, held by the predecessor of GE Healthcare) as a bone-imaging agent, then re-approved under a newer label format in 2011 (NDA 22-494, sponsor National Cancer Institute) after the original product had lapsed commercially. Both approvals cover PET imaging of bone to define areas of altered osteogenic activity; neither approval is oncology-specific, but the agent's principal modern use is detecting osteoblastic bone metastases, most often from prostate and breast cancer, where it offers higher sensitivity and better spatial resolution than technetium-99m bone scintigraphy.\n\nThe recommended adult dose is 300-450 MBq (8-12 mCi) intravenously, with imaging optimally at one to two hours; no adverse reactions have been established in the FDA label, and the main safety statement concerns cumulative radiation exposure rather than a pharmacological toxicity. Because uptake is a marker of bone turnover, not malignancy, degenerative disease, fracture healing and other benign remodelling can be false positives, and correlation with CT or MRI is standard practice.",
    status: "approved",
    asOf: "2026-09-22",
    approvals: [
      {
        region: "US",
        year: 1972,
        indication:
          "Diagnostic PET imaging of bone to define areas of altered osteogenic activity (NDA 17-042)",
      },
      {
        region: "US",
        year: 2011,
        indication:
          "Diagnostic PET imaging of bone to define areas of altered osteogenic activity (NDA 22-494, current labelling)",
      },
    ],
    dosing: {
      route: "Intravenous injection",
      schedule:
        "300-450 MBq (8-12 mCi) in adults; imaging can begin 1-2 hours after administration, optimally at one hour",
      source: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d867a881-108e-41fa-91ab-dc4df00cbb55",
    },
    targets: [],
    indications: ["prostate"],
    technologies: ["pet", "pet-ct"],
    companies: ["ge-healthcare"],
    links: [
      {
        label: "FDA label: Sodium Fluoride F 18 Injection (DailyMed)",
        url: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d867a881-108e-41fa-91ab-dc4df00cbb55",
      },
      {
        label: "FDA approval letter, NDA 22-494 (2011)",
        url: "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2011/022494Orig1s000Approv.pdf",
      },
    ],
    tags: ["bone imaging", "PET", "generic"],
  },

  {
    id: "ga-68-fapi-46",
    kind: "drug",
    name: "Gallium-68 FAPI-46",
    aka: ["68Ga-FAPI-46", "Ga-68 FAPi-46"],
    modality: "PET tracer",
    mechanism:
      "A quinoline-based fibroblast activation protein (FAP) inhibitor labelled with gallium-68. It binds tightly and is largely internalised by FAP-expressing cancer-associated fibroblasts in the tumour stroma, which surround the actual cancer cells in most solid epithelial tumours; the label therefore highlights the stromal reaction to a tumour rather than the tumour cells themselves.",
    tldr: "An experimental PET tracer that lights up the scaffolding cells cancers build around themselves, not the cancer cells directly. It is still being tested, not yet an approved medicine.",
    summary:
      "68Ga-FAPI-46 is one of the most advanced compounds in the FAPI family under joint development by SOFIE Biosciences and GE HealthCare (global licence signed 2024). It has been studied prospectively in several hundred patients across breast, colorectal, pancreatic, head and neck, and other solid tumours. In a single-centre phase 2 trial at University Hospital Essen (NCT05160051, 155 patients scanned, reported in Lancet Oncology 2025), the tracer's positive predictive value for detecting immunohistochemically FAP-positive tumours was 90% on a per-patient basis and 92% per region, meeting the trial's pre-specified threshold.\n\nSeparate US phase 2 studies are running in resectable or borderline-resectable pancreatic ductal adenocarcinoma (NCT05262855/NCT05518903) across Mayo Clinic, UCLA, NYU Langone and BAMF Health, comparing FAPI-46 PET detection of cancer-associated fibroblasts against surgical histopathology, with phase 3 planning under way as of mid-2024. The tracer is not marketed anywhere; it is supplied under investigational new drug exemptions, and adverse events reported so far have been mild and mostly unrelated to the drug (5 of 90 adverse events in the Essen trial were judged possibly related, none serious).",
    status: "phase-2",
    asOf: "2026-09-22",
    targets: ["fap"],
    indications: ["pancreatic-net", "nsclc"],
    technologies: ["fapi-pet", "pet-ct"],
    companies: ["ge-healthcare"],
    links: [
      {
        label:
          "Pabst et al., Lancet Oncology 2025: 68Ga-FAPI-46 PET accuracy for cancer imaging with histopathology validation (phase 2 trial)",
        url: "https://pubmed.ncbi.nlm.nih.gov/40774265/",
      },
      {
        label: "ClinicalTrials.gov NCT05160051 (68Ga-FAPI-46 PET for imaging of FAP-expressing cancer)",
        url: "https://clinicaltrials.gov/study/NCT05160051",
      },
      {
        label: "ClinicalTrials.gov NCT05518903 (68Ga-FAPI-46 PET/CT for localised pancreatic ductal adenocarcinoma)",
        url: "https://clinicaltrials.gov/study/NCT05518903",
      },
    ],
    tags: ["FAP", "stroma", "investigational"],
  },

  {
    id: "ga-68-pentixafor",
    kind: "drug",
    name: "Gallium-68 pentixafor",
    aka: ["68Ga-Pentixafor", "Gallium (68Ga) boclatixafortide"],
    modality: "PET tracer",
    mechanism:
      "A cyclic peptide analogue of the chemokine CXCL12, radiolabelled with gallium-68, that binds the chemokine receptor CXCR4. CXCR4 is upregulated on the surface of several haematological cancers (multiple myeloma, lymphomas, myeloproliferative neoplasms) and, less consistently, in solid tumours, so uptake marks tissue with high receptor density.",
    tldr: "An experimental PET tracer that looks for a specific docking protein (CXCR4) that some blood cancers and a minority of solid tumours carry in excess. It is a research tool, not an approved scan.",
    summary:
      "68Ga-Pentixafor has been used in over 1,300 patients across more than 75 publications, mostly at academic centres (Memorial Sloan Kettering, Technical University of Munich, and others) under investigator INDs, with no serious adverse events reported to date. Its clearest oncology signal is in multiple myeloma, indolent lymphomas and myeloproliferative neoplasms, where CXCR4 overexpression on malignant plasma cells or lymphocytes gives high image contrast; a first proof-of-principle study in myeloproliferative neoplasms found bone-marrow SUVmean of 6.45 versus 4.44 in healthy controls.\n\nIn solid tumours the picture is more mixed: a retrospective series of 142 patients across 23 histologies found discernible CXCR4 uptake above blood pool in only 68% of scans, indicating that receptor expression is present but inconsistent outside the haematological setting. Beyond oncology, the tracer is also being explored for primary aldosteronism lateralisation and unstable atherosclerotic plaque, reflecting CXCR4's broader role in inflammation. It has not been submitted for marketing approval anywhere and remains supplied through academic radiopharmacies under IND/IMPD exemptions.",
    status: "phase-2",
    asOf: "2026-09-22",
    targets: ["cxcr4"],
    indications: [],
    technologies: ["pet"],
    companies: [],
    links: [
      {
        label:
          "Advances in PET imaging of the CXCR4 receptor, Seminars in Nuclear Medicine 2023",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10792730/",
      },
      {
        label:
          "CXCR4-directed PET/CT with 68Ga-pentixafor in solid tumours (142 patients), 2023",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10957681/",
      },
    ],
    tags: ["CXCR4", "myeloma", "investigational"],
  },

  {
    id: "cu-64-dotatate",
    kind: "drug",
    name: "Copper-64 dotatate",
    aka: ["64Cu-DOTATATE", "Detectnet"],
    brand: "Detectnet",
    modality: "PET tracer",
    mechanism:
      "DOTATATE is a somatostatin analogue peptide that binds somatostatin receptor subtype 2 (SSTR2), which is overexpressed on most well-differentiated neuroendocrine tumour cells. Labelling it with copper-64 rather than gallium-68 gives a longer physical half-life (12.7 hours versus 68 minutes), which lets a single cyclotron batch supply multiple patients and imaging sites over the course of a working day without an on-site generator.",
    tldr: "An injectable tracer that sticks to a marker (somatostatin receptor) many neuroendocrine tumours carry. A PET scan afterwards shows where those tumours are, including small deposits that other scans can miss.",
    summary:
      "Detectnet (copper Cu 64 dotatate injection) was approved by FDA on 3 September 2020 under NDA 213227, sponsored by RadioMedix and commercialised by Curium, for use with PET to localise somatostatin-receptor-positive neuroendocrine tumours in adults. Approval rested on a US phase 3, reader-masked trial in 63 subjects (42 with known or suspected NETs, 21 healthy volunteers) run by Ebrahim Delpassand and colleagues, which found a diagnostic dose of 148 MBq (4 mCi) gave 100% sensitivity and 96.8% specificity after correcting an initial standard-of-truth misread, with excellent inter-reader agreement and no drug-related serious adverse events.\n\nCopper-64's longer half-life is the main practical advantage over the older gallium-68 tracers (NETSPOT/Ga-68 DOTATATE, Ga-68 DOTATOC): it permits central manufacture and next-day-style logistics, and its lower positron energy gives comparable or slightly better spatial resolution. Reported adverse reactions in the label are nausea, vomiting and flushing, with no listed contraindications. The recommended dose is 148 MBq (4 mCi) IV, with imaging roughly an hour later.",
    status: "approved",
    asOf: "2026-09-22",
    approvals: [
      {
        region: "US",
        year: 2020,
        indication:
          "PET localisation of somatostatin receptor-positive neuroendocrine tumours in adult patients",
      },
    ],
    dosing: {
      route: "Intravenous bolus injection",
      schedule: "148 MBq (4 mCi), imaging approximately 60 minutes after injection",
      source: "https://www.accessdata.fda.gov/Drugsatfda_Docs/Label/2020/213227s000lbl.Pdf",
    },
    toxicity: [
      { event: "Nausea", source: "https://www.accessdata.fda.gov/Drugsatfda_Docs/Label/2020/213227s000lbl.Pdf" },
      { event: "Vomiting", source: "https://www.accessdata.fda.gov/Drugsatfda_Docs/Label/2020/213227s000lbl.Pdf" },
      { event: "Flushing", source: "https://www.accessdata.fda.gov/Drugsatfda_Docs/Label/2020/213227s000lbl.Pdf" },
    ],
    targets: ["sstr2"],
    indications: ["neuroendocrine", "pancreatic-net", "small-intestinal-net"],
    technologies: ["sstr-pet", "pet-ct"],
    companies: ["radiomedix", "curium"],
    links: [
      {
        label: "FDA label: Detectnet (copper Cu 64 dotatate injection)",
        url: "https://www.accessdata.fda.gov/Drugsatfda_Docs/Label/2020/213227s000lbl.Pdf",
      },
      {
        label: "FDA approval letter, NDA 213227 (2020)",
        url: "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2020/213227Orig1s000Approv.pdf",
      },
      {
        label:
          "Delpassand et al., J Nucl Med 2020: 64Cu-DOTATATE PET/CT pivotal phase 3 trial",
        url: "https://pubmed.ncbi.nlm.nih.gov/31924723/",
      },
    ],
    related: ["ga68-dotatate", "ga-68-dotatoc"],
    tags: ["SSTR2", "NET imaging", "copper-64"],
  },

  {
    id: "ga-68-dotatoc",
    kind: "drug",
    name: "Gallium-68 edotreotide (DOTATOC)",
    aka: ["68Ga-DOTATOC", "Ga 68 DOTATOC Injection", "Edotreotide"],
    modality: "PET tracer",
    mechanism:
      "A somatostatin analogue peptide (octreotide backbone with a DOTA chelator) that binds somatostatin receptor subtype 2, the same receptor targeted by DOTATATE. DOTATOC has somewhat higher affinity for SSTR5 than DOTATATE, which can matter for a minority of tumours, but the two peptides are broadly interchangeable in practice.",
    tldr: "A cousin of the Ga-68 DOTATATE and Cu-64 DOTATATE scans: it sticks to the same receptor on neuroendocrine tumours and lets PET find them. It is FDA-approved but, unusually, has no brand name and no pharmaceutical-company sponsor.",
    summary:
      "Ga 68 DOTATOC Injection was approved by FDA on 21 August 2019 under NDA 210828, an unusual academic new drug application held by the University of Iowa Health Care PET Imaging Center rather than a company. Approval covered PET localisation of somatostatin receptor-positive neuroendocrine tumours in adult and paediatric patients, based on a retrospective analysis of three prospective trials plus a literature meta-analysis; no deaths or serious adverse events were reported among the 334 patients reviewed for the pivotal readout. In the EU, the equivalent product is licensed as SomaKit TOC (December 2016).\n\nThe adult dose is 148 MBq (4 mCi), with a paediatric weight-based dose of 1.59 MBq/kg (minimum 11.1 MBq, maximum 111 MBq). Because it has no proprietary name, it is often described in the literature simply as 68Ga-DOTATOC. In direct comparisons, 68Ga-DOTATOC and 64Cu-DOTATATE perform similarly, while 18F-FDOPA has shown superior sensitivity for pheochromocytoma specifically. The therapeutic counterpart of the same peptide, 177Lu-edotreotide (ITM-11), remains unapproved in the US as of September 2026 after a complete response letter over manufacturing issues.",
    status: "approved",
    asOf: "2026-09-22",
    approvals: [
      {
        region: "US",
        year: 2019,
        indication:
          "PET localisation of somatostatin receptor-positive neuroendocrine tumours in adult and paediatric patients",
      },
      {
        region: "EU",
        year: 2016,
        indication: "PET localisation of somatostatin receptor-positive gastroenteropancreatic neuroendocrine tumours (as SomaKit TOC)",
      },
    ],
    dosing: {
      route: "Intravenous injection",
      schedule:
        "Adults: 148 MBq (4 mCi), range 111-185 MBq; paediatric: 1.59 MBq/kg, minimum 11.1 MBq, maximum 111 MBq",
      source: "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2019/210828Orig1s000MultidisciplineR.pdf",
    },
    targets: ["sstr2"],
    indications: ["neuroendocrine", "pancreatic-net", "small-intestinal-net"],
    technologies: ["sstr-pet", "pet-ct"],
    companies: [],
    links: [
      {
        label: "FDA approval letter, NDA 210828, Ga-68-DOTATOC (2019)",
        url: "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2019/210828Orig1s000Approv.pdf",
      },
      {
        label: "FDA multi-discipline review, NDA 210828",
        url: "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2019/210828Orig1s000MultidisciplineR.pdf",
      },
      {
        label:
          "Sunderland & Graham, J Nucl Med 2020: an academic medical centre's journey through the FDA NDA process for 68Ga-DOTATOC",
        url: "https://jnm.snmjournals.org/content/jnumed/early/2020/02/06/jnumed.119.238287.full.pdf",
      },
    ],
    related: ["cu-64-dotatate", "ga68-dotatate", "itm-11"],
    tags: ["SSTR2", "NET imaging", "academic NDA"],
  },

  {
    id: "in-111-pentetreotide",
    kind: "drug",
    name: "Indium-111 pentetreotide",
    aka: ["111In-pentetreotide", "OctreoScan"],
    brand: "OctreoScan",
    modality: "SPECT tracer",
    mechanism:
      "Pentetreotide is an octreotide derivative conjugated to the chelator DTPA; once labelled with indium-111 it binds somatostatin receptor subtype 2 on neuroendocrine tumour cells. Because indium-111 is a gamma emitter rather than a positron emitter, imaging is by SPECT (or SPECT/CT) rather than PET.",
    tldr: "The original nuclear medicine scan for finding neuroendocrine tumours, used before PET scans like Ga-68 DOTATATE became available. It is still FDA-approved but has largely been superseded because PET gives sharper pictures with less radiation.",
    summary:
      "OctreoScan (kit for the preparation of indium In-111 pentetreotide) was approved by FDA in 1994 (NDA 020314) and is still marketed, now by Curium, as a two-vial kit that the radiopharmacy combines before injection. It is indicated for scintigraphic localisation of primary and metastatic neuroendocrine tumours bearing somatostatin receptors, at a recommended dose of 111 MBq (3 mCi) for planar imaging or 222 MBq (6 mCi) for SPECT.\n\nOctreoScan was the standard-of-care functional imaging test for neuroendocrine tumours for roughly two decades, but head-to-head studies have consistently shown that the newer PET tracers (68Ga-DOTATATE, 68Ga-DOTATOC, 64Cu-DOTATATE) detect more lesions with better spatial resolution and lower radiation dose, and most guideline bodies (SNMMI, ENETS) now favour SSTR-PET where it is available. OctreoScan remains relevant where PET access is limited, and it has a long track record: the label carries specific precautions for insulinoma patients, who can develop severe hypoglycaemia with unlabelled octreotide co-administration, and the finished radiopharmaceutical must be used within six hours of preparation.",
    status: "approved",
    asOf: "2026-09-22",
    approvals: [
      {
        region: "US",
        year: 1994,
        indication:
          "Scintigraphic localisation of primary and metastatic neuroendocrine tumours bearing somatostatin receptors",
      },
    ],
    dosing: {
      route: "Intravenous injection, after radiolabelling the kit",
      schedule:
        "111 MBq (3 mCi) for planar imaging; 222 MBq (6 mCi) for SPECT imaging; use within 6 hours of preparation",
      source: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2022/020314Orig1s000Lbl.pdf",
    },
    targets: ["sstr2"],
    indications: ["neuroendocrine", "pancreatic-net", "small-intestinal-net"],
    technologies: ["spect", "spect-ct"],
    companies: ["curium"],
    links: [
      {
        label: "FDA label: Octreoscan (kit for the preparation of Indium In 111 Pentetreotide Injection)",
        url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2022/020314Orig1s000Lbl.pdf",
      },
    ],
    related: ["cu-64-dotatate", "ga-68-dotatoc", "ga68-dotatate"],
    tags: ["SSTR2", "SPECT", "legacy agent"],
  },

  {
    id: "i-123-mibg",
    kind: "drug",
    name: "Iobenguane I-123",
    aka: ["123I-MIBG", "AdreView", "Iobenguane I 123 Injection"],
    brand: "AdreView",
    modality: "SPECT tracer",
    mechanism:
      "Iobenguane (meta-iodobenzylguanidine, MIBG) is structurally related to noradrenaline and is taken up by the noradrenaline transporter into sympathetic neurons and neuroendocrine cells derived from the neural crest, including pheochromocytoma, paraganglioma and neuroblastoma cells. Labelling with the gamma emitter iodine-123 allows whole-body gamma-camera or SPECT imaging.",
    tldr: "An injectable tracer that mimics a stress hormone and gets taken up by certain nerve-related tumours, such as pheochromocytoma and childhood neuroblastoma, so a scan afterwards can show where they are.",
    summary:
      "AdreView (Iobenguane I 123 Injection) was approved by FDA in 2008 for detection of primary or metastatic pheochromocytoma or neuroblastoma as an adjunct to other diagnostic tests, and gained a second, unrelated cardiac indication in 2013 (assessment of myocardial sympathetic innervation in heart failure via the heart-to-mediastinum ratio). The adult dose is 10 mCi (370 MBq) IV, and patients require thyroid-blocking medication beforehand to prevent free iodine-123 accumulating in the thyroid.\n\nThe most common adverse reactions in the pivotal trials -- dizziness, rash, pruritus, flushing, headache and injection-site haemorrhage -- occurred in under 1.3% of patients, and the product is contraindicated only in known hypersensitivity to iobenguane or iobenguane sulfate. It contains benzyl alcohol as a preservative, which carries a specific warning against use in premature or low-birth-weight infants (\"gasping syndrome\"). In oncology, 123I-MIBG scintigraphy remains part of SNMMI/EANM guideline workups for pheochromocytoma/paraganglioma and paediatric neuroblastoma, though 18F-FDOPA and 68Ga-DOTATATE PET have overtaken it in sensitivity for many indications, and 131I-MIBG is the therapeutic counterpart used once MIBG uptake is confirmed.",
    status: "approved",
    asOf: "2026-09-22",
    approvals: [
      {
        region: "US",
        year: 2008,
        indication:
          "Detection of primary or metastatic pheochromocytoma or neuroblastoma as an adjunct to other diagnostic tests",
      },
      {
        region: "US",
        year: 2013,
        indication:
          "Scintigraphic assessment of myocardial sympathetic innervation in NYHA class II/III heart failure with LVEF <=35% (non-oncology indication)",
      },
    ],
    dosing: {
      route: "Intravenous injection over 1-2 minutes",
      schedule:
        "10 mCi (370 MBq) for patients >=16 years or <16 years and >=70 kg; weight-scaled dose otherwise; thyroid blockade required beforehand",
      source: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2020/022290s005lbl.pdf",
    },
    toxicity: [
      {
        event: "Dizziness, rash, pruritus, flushing, headache or injection-site haemorrhage (combined)",
        anyGradePct: 1.3,
        source: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2020/022290s005lbl.pdf",
      },
    ],
    targets: [],
    indications: ["pheochromocytoma-paraganglioma", "neuroblastoma", "metastatic-ppgl"],
    technologies: ["spect", "mibg-theranostics"],
    companies: ["ge-healthcare"],
    links: [
      {
        label: "FDA label: AdreView (Iobenguane I 123 Injection)",
        url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2020/022290s005lbl.pdf",
      },
      {
        label: "FDA supplemental approval letter, NDA 22-290 (2013 cardiac indication)",
        url: "https://www.accessdata.fda.gov/drugsatfda_docs/appletter/2013/022290orig1s001ltr.pdf",
      },
    ],
    related: ["i131-mibg", "iobenguane-i-131"],
    tags: ["MIBG", "SPECT", "pheochromocytoma", "neuroblastoma"],
  },

  {
    id: "f-18-fdopa",
    kind: "drug",
    name: "Fluorodopa F-18",
    aka: ["18F-FDOPA", "6-[18F]fluoro-L-DOPA", "Fluorodopa F 18 Injection"],
    modality: "PET tracer",
    mechanism:
      "A fluorinated analogue of L-DOPA that is taken up by the amino-acid transport system and converted by aromatic L-amino-acid decarboxylase (AADC) into a trapped dopamine analogue. Dopaminergic neurons take it up for the FDA-approved neurological indication; the same AADC pathway is highly active in cells of neural-crest and neuroendocrine origin, which is why the tracer also concentrates strongly in pheochromocytoma, paraganglioma and other well-differentiated neuroendocrine tumours.",
    tldr: "A tracer originally built to look at brain dopamine cells in suspected Parkinson's disease. Because certain hormone-producing tumours use the same chemical machinery, doctors also use it, off-label, to find those tumours -- especially adrenal gland tumours called pheochromocytoma.",
    summary:
      "Fluorodopa F 18 Injection was approved by FDA in 2019 (NDA 200655, sponsor The Feinstein Institutes for Medical Research) solely for PET imaging of dopaminergic nerve terminals in adults with suspected Parkinsonian syndromes; that is a neurological indication, not an oncological one, and it is the only indication on the US label. The recommended dose is 185 MBq (5 mCi) IV.\n\nIn oncology, 18F-FDOPA is used off-label, but with strong evidence and explicit guideline support: the 2019 EANM/SNMMI procedure standard for phaeochromocytoma and paraganglioma names 18F-FDOPA (alongside 123I-MIBG) as a first-line tracer, ahead of 68Ga-DOTATATE and 18F-FDG. In a prospective head-to-head study of 97 patients, FDOPA detected all 55 confirmed pheochromocytomas versus 25 of 55 for 68Ga-DOTATOC (sensitivity 100% vs 49%, p<0.0001), though DOTATATE-family tracers retain an edge for extra-adrenal and SDHx-related metastatic disease. FDOPA is also used, again off-label, in brain tumour imaging (glioma grading and recurrence, alongside FET) under joint EANM/EANO/RANO/SNMMI amino-acid PET guidelines.",
    status: "approved",
    asOf: "2026-09-22",
    approvals: [
      {
        region: "US",
        year: 2019,
        indication:
          "PET imaging to visualise dopaminergic nerve terminals in the striatum in adults with suspected Parkinsonian syndromes (neurological indication; oncology use is off-label)",
      },
    ],
    dosing: {
      route: "Intravenous injection over 1 minute",
      schedule: "185 MBq (5 mCi) in adults",
      source: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2019/200655s000lbl.pdf",
    },
    targets: [],
    indications: ["pheochromocytoma-paraganglioma", "metastatic-ppgl", "neuroendocrine", "glioblastoma"],
    technologies: ["pet", "pet-ct"],
    companies: [],
    links: [
      {
        label: "FDA label: Fluorodopa F 18 Injection",
        url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2019/200655s000lbl.pdf",
      },
      {
        label:
          "Prospective comparison of 18F-FDOPA and 68Ga-DOTATOC PET/CT in pheochromocytoma/paraganglioma (2023)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10728412/",
      },
      {
        label: "EANM/SNMMI 2019 practice guideline for radionuclide imaging of phaeochromocytoma and paraganglioma",
        url: "https://snmmi.org/common/Uploaded%20files/Web/Clinical%20Practice/Procedure%20Standards/2019/EANM%20SNMMI%20guideline%20on%20radionuclide%20imaging%20of%20phaeochromocytoma%20and%20paraganglioma.pdf",
      },
    ],
    related: ["cu-64-dotatate", "ga-68-dotatoc", "i-123-mibg", "f-18-fet"],
    tags: ["amino acid PET", "off-label oncology use", "PPGL"],
  },

  {
    id: "f-18-fet",
    kind: "drug",
    name: "Floretyrosine F-18 (FET)",
    aka: ["18F-FET", "O-(2-[18F]fluoroethyl)-L-tyrosine", "Pixclara", "TLX101-Px"],
    brand: "Pixclara",
    modality: "PET tracer",
    mechanism:
      "An amino-acid analogue taken up by the L-type amino-acid transporters (LAT1/LAT2) that are upregulated on glioma cells, without being metabolically incorporated into protein. Because uptake tracks amino-acid transport rather than glucose metabolism, it gives much better contrast than FDG in the brain, where normal grey matter is a high glucose consumer but a low amino-acid transporter.",
    tldr: "A brain-tumour PET tracer that shows where active tumour tissue is by how much it grabs a labelled amino acid, which helps tell a true regrowing tumour apart from scan changes caused by past treatment. Approved by the FDA in September 2026, the first scan of its kind cleared for this use in the US.",
    summary:
      "Pixclara (floretyrosine F 18, 18F-FET) was approved by FDA on 11 September 2026 (the PDUFA goal date), after an initial complete response letter in April 2025 requesting additional confirmatory clinical evidence and a resubmission by Telix in March 2026. It is indicated for use with PET to differentiate recurrent or progressive glioma from treatment-related change, alongside other diagnostic evaluations, in adults and children from 1 month of age -- making it the first FDA-approved radiopharmaceutical imaging drug for glioma in the US. Safety was assessed in 382 glioma patients; the only adverse reaction at or above 0.5% incidence was headache, with nausea, injection-site reaction, fatigue and malaise each occurring in under 0.5%.\n\nFET-PET has been used in Europe and recommended by joint EANM/EANO/RANO/SNMMI guidelines for glioma imaging for over a decade, well ahead of US approval: recommended adult activity is 185-200 MBq, with a tumour-to-brain SUV ratio threshold of roughly 1.6-1.8 used to define biological tumour volume, and a maximum tumour-to-brain ratio of at least 2.5 associated with a 98% positive predictive value for neoplasm in newly diagnosed lesions. The Pixclara US label sets the adult dose at 185-259 MBq (5-7 mCi) and a paediatric weight-based dose from 1 month of age. The agent remains in a phase 3 registrational study for a possible brain-metastases indication, which is not yet part of the approved US label.",
    status: "approved",
    asOf: "2026-09-22",
    approvals: [
      {
        region: "US",
        year: 2026,
        indication:
          "Use with PET to differentiate recurrent or progressive glioma from treatment-related change, in conjunction with other diagnostic evaluations, in adults and paediatric patients 1 month of age and older",
      },
    ],
    dosing: {
      route: "Intravenous bolus injection",
      schedule:
        "Adults: 185-259 MBq (5-7 mCi); paediatric patients 1 month and older: 3 MBq/kg (0.081 mCi/kg), minimum 14 MBq, maximum 259 MBq",
      source: "https://telixpharma.com/wp-content/uploads/2026/09/USPI_PIXCLARA_Sep2026.pdf",
    },
    toxicity: [
      {
        event: "Headache",
        anyGradePct: 0.5,
        source: "https://telixpharma.com/wp-content/uploads/2026/09/USPI_PIXCLARA_Sep2026.pdf",
      },
    ],
    targets: [],
    indications: ["glioblastoma"],
    technologies: ["pet", "pet-ct"],
    companies: ["telix"],
    links: [
      {
        label: "Pixclara (floretyrosine F 18) US Prescribing Information, Telix Pharmaceuticals",
        url: "https://telixpharma.com/wp-content/uploads/2026/09/USPI_PIXCLARA_Sep2026.pdf",
      },
      {
        label: "Telix press release: FDA approves Pixclara, 14 September 2026",
        url: "https://telixpharma.com/news-views/fda-approves-telixs-brain-cancer-imaging-drug-pixclara/",
      },
      {
        label:
          "Joint EANM/EANO/RANO/SNMMI practice guidelines for PET imaging of gliomas with radiolabelled amino acids and FDG (2018)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6351513/",
      },
    ],
    related: ["f-18-fdopa"],
    tags: ["amino acid PET", "glioma", "newly approved"],
  },

  {
    id: "tc-99m-mdp",
    kind: "drug",
    name: "Technetium Tc-99m medronate (MDP)",
    aka: ["99mTc-MDP", "Technetium Tc 99m Medronate", "CIS-MDP", "Draximage MDP-25"],
    modality: "SPECT tracer",
    mechanism:
      "Medronate (methylene diphosphonate) is a bisphosphonate that chelates technetium-99m and, once injected, adsorbs onto the hydroxyapatite crystal surface of bone in proportion to local osteoblastic activity and blood flow -- the same underlying biology as 18F-NaF PET, but imaged with a conventional gamma camera or SPECT rather than PET.",
    tldr: "The standard, decades-old bone scan: a radioactive tracer that sticks to areas of bone rebuilding, so a gamma-camera picture afterwards shows where cancer may have spread to bone, or where a fracture or infection is healing.",
    summary:
      "Technetium Tc 99m Medronate is supplied as a cold kit -- a vial of medronic acid and stannous chloride that the radiopharmacy reconstitutes with the hospital's own technetium-99m generator eluate -- under several long-approved NDAs (e.g. Draximage MDP-25, NDA 018035; CIS-MDP, NDA 018124). It is indicated broadly as a bone imaging agent to delineate areas of altered osteogenesis, without an oncology-specific label claim, but the single largest clinical use remains detecting osteoblastic skeletal metastases, chiefly from prostate and breast cancer, alongside benign indications such as fracture, infection and metabolic bone disease.\n\nThe recommended adult dose is 370-740 MBq (10-20 mCi) IV, with optimal imaging 1-4 hours later; about half the injected dose is retained in the skeleton and half is excreted in urine within 24 hours. The label carries no listed contraindications but flags allergic dermatological reactions reported with the diphosphonate class, and a 2025 label update added a warning about altered biodistribution in the presence of high levels of certain cations (iron, calcium, aluminium). Despite the rise of 18F-NaF PET and, in prostate cancer, PSMA PET, 99mTc-MDP bone scintigraphy remains the most widely available and lowest-cost skeletal survey worldwide.",
    status: "approved",
    asOf: "2026-09-22",
    approvals: [
      {
        region: "US",
        year: 1972,
        indication: "Bone imaging agent to delineate areas of altered osteogenesis",
      },
    ],
    dosing: {
      route: "Intravenous injection over ~30 seconds, after kit reconstitution",
      schedule: "370-740 MBq (10-20 mCi) in an average 70 kg adult; optimal imaging 1-4 hours post-injection",
      source: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2025/018035s043lbl.pdf",
    },
    targets: [],
    indications: ["prostate"],
    technologies: ["spect", "spect-ct", "radionuclide-generators-kits"],
    companies: ["curium", "ge-healthcare"],
    links: [
      {
        label: "FDA label: Draximage MDP-25 (Kit for the Preparation of Technetium Tc 99m Medronate Injection)",
        url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2025/018035s043lbl.pdf",
      },
      {
        label: "FDA label: CIS-MDP (Kit for the Preparation of Technetium Tc 99m Medronate)",
        url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2005/018124s013lbl.pdf",
      },
    ],
    related: ["f-18-naf"],
    tags: ["bone scan", "SPECT", "cold kit", "generic"],
  },

  {
    id: "cu-64-sar-bispsma",
    kind: "drug",
    name: "Copper-64 SAR-bisPSMA",
    aka: ["64Cu-SAR-bisPSMA", "64Cu-bisPSMA"],
    modality: "PET tracer",
    mechanism:
      "A bivalent small-molecule ligand carrying two PSMA-binding moieties on a single sarcophagine (SAR) chelator backbone, labelled with copper-64. The bivalent design and copper-64's 12.7-hour half-life allow same-day and next-day imaging from a single injection, and Clarity Pharmaceuticals reports two- to three-fold higher tumour uptake (SUVmax) than the standard-of-care 68Ga-PSMA-11 in head-to-head comparisons.",
    tldr: "An experimental PET tracer for prostate cancer that binds the same target as approved PSMA scans (PSMA) but, because its radioactive tag lasts longer, can be re-imaged a day later to catch small deposits the first picture missed. It is not yet approved for sale.",
    summary:
      "64Cu-SAR-bisPSMA is Clarity Pharmaceuticals' diagnostic partner to its therapeutic 67Cu-SAR-bisPSMA, developed as a Targeted Copper Theranostic pair. In the phase 1 PROPELLER trial (NCT04839367, 30 men with intermediate-to-high-risk untreated prostate cancer), the optimal 200 MBq dose detected primary prostate cancer in 100% and 85.7% of patients by two independent readers, versus 77.8% and 83.3% for same-patient 68Ga-PSMA-11, with significantly higher SUVmax and tumour-to-background ratio (p<0.001 for both readers). In the Co-PSMA trial (NCT06907641, 50 men with biochemical recurrence after prostatectomy), 24-hour 64Cu-SAR-bisPSMA imaging found more than double the per-patient lesion count of same-day 68Ga-PSMA-11 (mean 1.26 vs 0.48 lesions, p<0.0001) and changed management in 44% of patients, published in European Urology in 2026.\n\nThe US FDA granted 64Cu-SAR-bisPSMA fast-track designation in August 2024 for PET imaging of PSMA-positive prostate cancer with suspected metastasis in patients eligible for initial definitive therapy. A registrational phase 3 trial, CLARIFY (NCT06056830), is evaluating same-day and next-day imaging ahead of radical prostatectomy. The therapeutic isotope pairing, 67Cu-SAR-bisPSMA, is being tested in the SECuRE trial (NCT04868604) for PSMA-expressing metastatic castration-resistant prostate cancer; both 64Cu- and 67Cu-SAR-bisPSMA remain unregistered products not yet assessed for approval by FDA or Australia's TGA, per the company's own disclosures.",
    status: "phase-3",
    asOf: "2026-09-22",
    targets: ["psma"],
    indications: ["prostate-high-risk", "prostate-bcr", "prostate-mcrpc"],
    technologies: ["psma-pet", "pet-ct"],
    companies: ["clarity-pharmaceuticals"],
    trials: ["nct04868604"],
    links: [
      {
        label:
          "Lengyelova, Wong, Lenzo, Parker, Emmett; JCO 2023: 64Cu-SAR-bisPSMA (PROPELLER) PET imaging in confirmed prostate cancer",
        url: "https://ascopubs.org/doi/10.1200/JCO.2023.41.16_suppl.5039",
      },
      {
        label:
          "Co-PSMA trial, European Urology 2026: prospective comparison of 64Cu-SAR-bisPSMA vs 68Ga-PSMA-11 for biochemical recurrence",
        url: "https://pubmed.ncbi.nlm.nih.gov/41904043/",
      },
      {
        label: "ClinicalTrials.gov NCT04868604 (SECuRE)",
        url: "https://clinicaltrials.gov/study/NCT04868604",
      },
    ],
    related: ["tc-99m-psma-imaging"],
    tags: ["PSMA", "copper-64", "theranostic pair", "investigational"],
  },

  {
    id: "tc-99m-psma-imaging",
    kind: "drug",
    name: "Technetium Tc-99m PSMA agents (PSMA-I&S)",
    aka: ["99mTc-PSMA-I&S", "Tc-99m PSMA imaging and surgery"],
    modality: "SPECT tracer",
    mechanism:
      "PSMA-I&S (\"imaging and surgery\") is a urea-based small-molecule PSMA inhibitor labelled with technetium-99m via a MAS3 chelator. It binds prostate-specific membrane antigen on prostate cancer cells; because technetium-99m is a gamma emitter available from any hospital's own generator (unlike gallium-68 or fluorine-18, which need a generator or cyclotron dedicated to PET production), it can be used both for pre-operative SPECT/CT localisation and, with a handheld gamma probe, for intraoperative radioguided surgery.",
    tldr: "A version of the PSMA prostate cancer scan that uses the same cheap, widely available radioactive tag as a standard bone scan instead of the PET tracers. Surgeons can also carry a small radiation detector into the operating room to help find and remove cancerous lymph nodes. It has not been through formal drug approval; it is used as an academic, in-house preparation.",
    summary:
      "99mTc-PSMA-I&S ([99mTc]Tc-mas3-y-nal-k(Sub-KuE)) was developed at the Technical University of Munich as a cost-effective, kit-based alternative to 111In-PSMA-I&T for PSMA-targeted radioguided surgery, first reported in the Journal of Nuclear Medicine in 2017. In that first-in-human report, preoperative SPECT/CT at 12 hours after injection showed high uptake in all lesions previously identified by 68Ga-PSMA-11 PET/MR, and a handheld gamma probe successfully guided intraoperative resection of metastatic lymph nodes down to 3 mm.\n\nBeyond radioguided surgery, retrospective single-centre series have used PSMA-I&S SPECT/CT as a stand-alone diagnostic tool: one series reported patient-based sensitivity, specificity and accuracy of 86%, 100% and 92% for detecting primary prostate cancer, and for restaging in biochemical recurrence, sensitivity of 67% with specificity of 100%, generally trailing PSMA-PET's reported sensitivity in the low-PSA setting but offering same-day, low-cost imaging with equipment most nuclear medicine departments already own. Because it is produced from an academic cold-kit under local institutional protocols rather than an FDA- or EMA-reviewed marketing application, it has no formal regulatory approval or labelled dose; reported clinical activities have ranged from roughly 500-700 MBq for combined SPECT-and-surgery protocols.",
    status: "emerging",
    asOf: "2026-09-22",
    targets: ["psma"],
    indications: ["prostate", "prostate-bcr"],
    technologies: ["spect", "spect-ct"],
    companies: [],
    links: [
      {
        label:
          "Robu et al., J Nucl Med 2017: preclinical evaluation and first patient application of 99mTc-PSMA-I&S for SPECT imaging and radioguided surgery in prostate cancer",
        url: "https://jnm.snmjournals.org/content/58/2/235.full.pdf",
      },
      {
        label:
          "Diagnostic value of 99mTc-PSMA-I&S SPECT/CT for prostate cancer detection and staging (2024)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10798073/",
      },
    ],
    related: ["cu-64-sar-bispsma", "in-111-pentetreotide"],
    tags: ["PSMA", "SPECT", "radioguided surgery", "academic cold kit"],
  },

  {
    id: "f-18-fluorothymidine",
    kind: "drug",
    name: "Fluorothymidine F-18 (FLT)",
    aka: ["18F-FLT", "3'-deoxy-3'-[18F]fluorothymidine"],
    modality: "PET tracer",
    mechanism:
      "A thymidine analogue that is taken up and phosphorylated by thymidine kinase 1 (TK1) during the S-phase of the cell cycle, then trapped intracellularly because the phosphorylated form cannot cross the cell membrane back out. Because TK1 activity tracks DNA synthesis, FLT uptake is a direct measure of cellular proliferation rather than glucose metabolism (which 18F-FDG measures) -- in principle a closer PET analogue of the Ki-67 proliferation index measured on biopsy.",
    tldr: "An experimental PET tracer that measures how fast tumour cells are dividing, rather than how much sugar they burn. It has been studied in research settings for over 20 years but has never been approved as a medicine.",
    summary:
      "18F-FLT has been an investigational PET agent since it was first reported in 1998, and remains one so today: it is supplied only under Investigational New Drug (IND) exemptions or Radioactive Drug Research Committee (RDRC)-approved basic science protocols, and no marketing application has been filed anywhere. The US National Cancer Institute's Cancer Imaging Program holds a centralised, multi-source IND that lets academic sites use FLT made by any of several suppliers with a Drug Master File on record, which has supported dozens of single- and multi-centre trials, mostly in breast, lung and brain cancer, evaluating early response to chemotherapy.\n\nFLT's main limitation is that its signal is diluted by TK1 activity in normal proliferating tissue -- bone marrow and liver in particular -- giving high background uptake that can obscure metastases in those organs, and its plasma level is affected by co-administered chemotherapy and some pain medications via hepatic glucuronidation. Studies correlate FLT uptake with the Ki-67 proliferation marker in breast, lung and brain tumours, and FLT-PET has shown early, quantifiable drops in uptake after starting chemotherapy, but larger controlled trials with survival endpoints have not been completed, and no clinical guideline currently recommends it outside a trial setting.",
    status: "phase-2",
    asOf: "2026-09-22",
    targets: [],
    indications: ["breast-her2-positive", "glioblastoma", "nsclc"],
    technologies: ["pet"],
    companies: [],
    links: [
      {
        label:
          "NCI Investigator's Brochure: [F-18]FLT, an investigational PET radiopharmaceutical",
        url: "https://dctd.cancer.gov/drug-discovery-development/reagents-materials/imaging-ind-resources/documentation/flt-ib.pdf",
      },
      {
        label: "Applications of PET imaging with the proliferation marker 18F-FLT (review, 2015)",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4415691/",
      },
      {
        label: "SNMMI PET Center of Excellence FLT factsheet",
        url: "https://snmmi.org/common/Uploaded%20files/Web/Centers/PET%20Center%20of%20Excellence/FLT_07-11-12%20Final.pdf",
      },
    ],
    tags: ["proliferation imaging", "investigational", "TK1"],
  },

  {
    id: "ga-67-citrate",
    kind: "drug",
    name: "Gallium citrate Ga-67",
    aka: ["67Ga-citrate", "Gallium Citrate Ga 67"],
    modality: "SPECT tracer",
    mechanism:
      "Free gallium ion, delivered as the citrate salt, is thought to accumulate in lysosomes and bind a soluble intracellular protein in certain viable tumours and in focal sites of infection or inflammation; the exact mechanism has never been fully characterised despite the tracer's decades of clinical use. Gallium-67 decays by electron capture with several gamma photopeaks, requiring a medium-energy collimator and triple-energy-window acquisition.",
    tldr: "One of the oldest cancer-imaging scans still on the market: an injectable form of radioactive gallium that collects in lymphomas and some other tumours (and in infections), imaged one to five days later. It has mostly been replaced by FDG-PET but is still FDA-approved and occasionally used.",
    summary:
      "Gallium Citrate Ga 67 Injection has held FDA approval since the 1970s (NDA 017478) for demonstrating the presence and extent of Hodgkin's disease, other lymphomas and bronchogenic carcinoma, and as an aid in detecting some acute inflammatory lesions; it is currently labelled and marketed by Curium. The adult dose is 74-185 MBq (2-5 mCi) IV, with optimal images typically obtained 48 hours post-injection, though acceptable images can be acquired anywhere from 6 to 120 hours afterward given considerable inter-patient biological variability.\n\nThe label itself flags the tracer's major limitation: up to 40% false-negative rates in some pathological conditions, an inability to distinguish tumour from acute inflammation without additional studies, and poor performance in lymphocytic lymphoma specifically, which the label states is not recommended for gallium imaging. FDG-PET has substantially displaced Ga-67 citrate for lymphoma staging and for fever-of-unknown-origin workups because it offers same-day imaging, higher spatial resolution and better sensitivity; gallium scintigraphy's most durable remaining niche is spinal and musculoskeletal infection imaging (often as SPECT/CT) in settings where FDG-PET is unavailable.",
    status: "approved",
    asOf: "2026-09-22",
    approvals: [
      {
        region: "US",
        year: 1976,
        indication:
          "Demonstrating the presence and extent of Hodgkin's disease, lymphoma and bronchogenic carcinoma; aid in detecting some acute inflammatory lesions",
      },
    ],
    dosing: {
      route: "Intravenous injection",
      schedule:
        "74-185 MBq (2-5 mCi) in an average 70 kg adult; optimal imaging around 48 hours post-injection, acceptable from 6-120 hours",
      source: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5f670c12-cca5-4d73-8a88-241f753d1bc7",
    },
    targets: [],
    indications: [],
    technologies: ["spect", "spect-ct"],
    companies: ["curium"],
    links: [
      {
        label: "FDA label: Gallium Citrate Ga-67 Injection (DailyMed, Curium US LLC)",
        url: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5f670c12-cca5-4d73-8a88-241f753d1bc7",
      },
    ],
    tags: ["legacy agent", "lymphoma imaging", "SPECT"],
  },
];
