import type { EntityInput } from "@/lib/schema";

export const neuroAgents: EntityInput[] = [
  {
    id: "alzheimers-disease",
    kind: "indication",
    name: "Alzheimer's disease",
    group: "neurology",
    tldr: "The most common cause of dementia, in which sticky amyloid protein and tangled tau protein build up in the brain and damage memory and thinking over years.",
    summary:
      "Alzheimer's disease (AD) is a progressive neurodegenerative disease and the leading cause of dementia. Pathologically it is defined by extracellular amyloid-beta neuritic plaques and intracellular tau neurofibrillary tangles, which typically precede clinical symptoms by a decade or more. Clinical diagnosis on history and neuropsychological testing alone is imprecise, particularly in atypical or early presentations, so tissue-level confirmation of amyloid and, increasingly, tau pathology has become part of routine specialist work-up.\n\nAmyloid PET tracers (florbetapir, flutemetamol, florbetaben) and the tau tracer flortaucipir let clinicians see this pathology in a living patient. A negative amyloid scan is strong evidence against AD as the cause of cognitive impairment; a positive scan is consistent with AD but is not diagnostic on its own, since amyloid deposition also occurs in a minority of cognitively normal older adults. The 2024 Alzheimer's Association revised criteria treat a positive amyloid biomarker (PET or CSF) as a 'Core 1' biomarker sufficient, together with clinical context, to support a biological diagnosis of AD, with tau PET as a 'Core 2' biomarker used to stage disease severity.\n\nFrom 2023 onward the field entered a treatment era: the anti-amyloid monoclonal antibodies lecanemab (Leqembi) and donanemab (Kisunla) received full FDA approval for early symptomatic AD (mild cognitive impairment or mild dementia), and both require documented amyloid pathology, established by PET or CSF, before starting therapy. This has turned amyloid PET from a largely diagnostic-exclusion tool into a gatekeeping test for a treatable population, and serial quantitative amyloid PET (reported in Centiloids) is used by some centres to decide when plaque clearance is sufficient to stop donanemab dosing.",
    asOf: "2026-09-22",
    links: [
      { label: "SNMMI/Alzheimer's Association: updated appropriate use criteria for amyloid and tau PET (2025)", url: "https://jnm.snmjournals.org/content/early/2025/01/07/jnumed.124.268756" },
      { label: "FDA: Amyvid label update supporting amyloid-targeting therapy selection (June 2025)", url: "https://investor.lilly.com/news-releases/news-release-details/fda-approves-updated-label-lillys-amyvid-florbetapir-f-18" },
    ],
    related: ["f-18-florbetapir", "f-18-flutemetamol", "f-18-florbetaben", "f-18-flortaucipir", "f-18-fdg-brain"],
    tags: ["neurology", "dementia"],
  },
  {
    id: "parkinsonian-syndromes",
    kind: "indication",
    name: "Parkinsonian syndromes",
    group: "neurology",
    tldr: "A group of movement disorders, including Parkinson's disease, that cause tremor, stiffness and slow movement because the brain loses nerve cells that make dopamine.",
    summary:
      "Parkinsonian syndromes include idiopathic Parkinson's disease and the atypical parkinsonisms multiple system atrophy and progressive supranuclear palsy. All share loss of dopaminergic nerve terminals in the striatum, which produces the clinical triad of tremor, rigidity and bradykinesia. A common diagnostic problem is distinguishing these conditions, in their early stages, from essential tremor and other tremor syndromes that do not involve dopaminergic degeneration and are managed quite differently.\n\nDopamine transporter (DAT) SPECT imaging with ioflupane I-123 visualises the density of presynaptic dopamine transporters in the striatum. A normal scan argues strongly against a parkinsonian syndrome and points to essential tremor or a non-degenerative cause; an abnormal scan (reduced or absent striatal uptake) supports a diagnosis of a parkinsonian syndrome but, as the drug label makes explicit, cannot distinguish Parkinson's disease from multiple system atrophy or progressive supranuclear palsy, which all produce similar transporter loss. The same tracer is also used to separate dementia with Lewy bodies, which has striatal dopaminergic loss, from Alzheimer's disease, which does not.\n\nDAT SPECT does not have an equivalent role to amyloid PET in gatekeeping a disease-modifying drug: there is no approved therapy that requires a positive DAT scan before treatment. Its clinical value is diagnostic clarification early in the disease course, when clinical signs are ambiguous and management (dopaminergic therapy vs none) hinges on getting the category right.",
    asOf: "2026-09-22",
    links: [
      { label: "EMA EPAR: DaTSCAN (ioflupane (123I))", url: "https://www.ema.europa.eu/en/medicines/human/EPAR/datscan" },
      { label: "FDA label: DaTscan (ioflupane I 123 injection)", url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2022/022454s010lbl.pdf" },
    ],
    related: ["i-123-ioflupane"],
    tags: ["neurology", "movement disorder"],
  },
  {
    id: "f-18-florbetapir",
    kind: "drug",
    name: "Florbetapir F-18",
    aka: ["Amyvid", "18F-AV-45"],
    modality: "PET tracer",
    mechanism:
      "A fluorine-18 labelled stilbene derivative that binds to fibrillar amyloid-beta neuritic plaques in the brain; the F-18 positron signal is detected by PET, giving a picture of cortical amyloid burden rather than blood flow or metabolism.",
    brand: "Amyvid",
    status: "approved",
    tldr: "A PET scan tracer that shows whether a patient's brain contains the sticky amyloid protein clumps linked to Alzheimer's disease, and whether they qualify for amyloid-lowering drugs.",
    summary:
      "Florbetapir F-18 (Amyvid, Eli Lilly) was the first amyloid PET tracer approved by the FDA, in April 2012, for imaging beta-amyloid neuritic plaque density in adults with cognitive impairment being evaluated for Alzheimer's disease (AD) and other causes of cognitive decline. In June 2025 the FDA approved a label update adding a second indication: selection of patients who are candidates for amyloid-beta-directed therapy, reflecting the arrival of approved anti-amyloid antibodies. A negative scan indicates sparse to no neuritic plaques and reduces the likelihood that AD explains the impairment; a positive scan indicates moderate to frequent plaques, a pattern also seen in some cognitively normal older adults, so it does not by itself establish an AD diagnosis and is meant to be used alongside full clinical evaluation.\n\nThe recommended dose is 370 MBq (10 mCi) as a single intravenous bolus in up to 10 mL, followed by a saline flush, with 10-minute PET images acquired approximately 30 to 50 minutes after injection. The maximum mass dose is 50 micrograms. Effective dose from a 370 MBq administration is about 7 mSv in an adult. Reading is by visual assessment of cortical grey-white contrast loss by a trained reader; quantification against the Centiloid scale can be used alongside the visual read, per the 2025 label update, and is the metric used to track amyloid clearance during anti-amyloid antibody therapy.\n\nIn the clinical pathway defined by the 2025 SNMMI/Alzheimer's Association appropriate use criteria, amyloid PET is rated 'appropriate' both for diagnostic clarification in patients with an uncertain aetiology after specialist assessment and, with the highest confidence rating, for determining eligibility for an approved amyloid-targeting therapy such as lecanemab or donanemab. In the United States, Medicare coverage of amyloid PET is no longer restricted: CMS retired the national coverage determination at 42 CFR 220.6.20 effective 13 October 2023, ending the prior coverage-with-evidence-development framework and the one-scan-per-lifetime limit, and coverage decisions (including for repeat scans to document plaque clearance) now sit with local Medicare Administrative Contractors rather than a single national rule.",
    approvals: [
      { region: "US", year: 2012, indication: "PET imaging of the brain to estimate beta-amyloid neuritic plaque density in adults with cognitive impairment being evaluated for AD and other causes of cognitive decline" },
      { region: "US", year: 2025, indication: "Label update adding selection of patients indicated for amyloid beta-directed therapy" },
    ],
    dosing: {
      route: "Intravenous bolus",
      schedule: "370 MBq (10 mCi) single dose in up to 10 mL, followed by ~10 mL saline flush; PET imaging 30-50 minutes after injection",
      monitoring: "Visual read of cortical uptake pattern by a trained reader; quantitative Centiloid analysis may be used alongside the visual read",
      source: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2025/202008s046lbl.pdf",
    },
    asOf: "2026-09-22",
    links: [
      { label: "FDA label: Amyvid (florbetapir F 18 injection), 2025 revision", url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2025/202008s046lbl.pdf" },
      { label: "Eli Lilly: FDA approves updated Amyvid label for treatment selection (25 June 2025)", url: "https://investor.lilly.com/news-releases/news-release-details/fda-approves-updated-label-lillys-amyvid-florbetapir-f-18" },
      { label: "CMS: decision memo removing the amyloid PET national coverage determination (NCA-CAL 308)", url: "https://www.cms.gov/medicare-coverage-database/view/ncacal-decision-memo.aspx?proposed=N&ncaid=308" },
      { label: "SNMMI/Alzheimer's Association: updated appropriate use criteria for amyloid and tau PET (2025)", url: "https://jnm.snmjournals.org/content/early/2025/01/07/jnumed.124.268756" },
    ],
    related: ["alzheimers-disease", "f-18-flutemetamol", "f-18-florbetaben", "f-18-flortaucipir", "eli-lilly"],
    tags: ["amyloid PET", "diagnostic", "neurology"],
  },
  {
    id: "f-18-flutemetamol",
    kind: "drug",
    name: "Flutemetamol F-18",
    aka: ["Vizamyl"],
    modality: "PET tracer",
    mechanism:
      "A fluorine-18 labelled benzothiazole derivative, structurally related to Pittsburgh Compound-B, that binds fibrillar beta-amyloid plaques for PET detection of cortical amyloid burden.",
    brand: "Vizamyl",
    status: "approved",
    tldr: "A PET scan tracer used to check whether a patient's brain has amyloid plaques, the hallmark of Alzheimer's disease, and whether they can be treated with amyloid-lowering drugs.",
    summary:
      "Flutemetamol F-18 (Vizamyl, GE HealthCare) was FDA-approved in October 2013 for PET imaging of the brain to estimate beta-amyloid neuritic plaque density in adults with cognitive impairment being evaluated for AD and other causes of cognitive decline. As with the other amyloid tracers, the US label was updated (current version dated 2025/2026) to add a second indication, selection of patients indicated for amyloid beta-directed therapy, alongside the diagnostic indication. The EMA-approved indication (EPAR, EU) is imaging to help diagnose Alzheimer's disease and other causes of memory loss.\n\nThe recommended dose is 185 MBq (5 mCi) given as an intravenous bolus over 40 seconds in up to 10 mL, maximum mass dose 20 micrograms, with 10 to 20-minute PET images acquired 60 to 120 minutes after injection; the resulting effective dose is about 5.9 mSv (32 microSv/MBq). Vizamyl is contraindicated in patients with known hypersensitivity to polysorbate 80, an excipient, which is a distinguishing safety point versus the other amyloid tracers.\n\nInterpretation is by visual assessment of grey-white matter contrast (a positive scan shows loss of the normal grey-white distinction from cortical tracer retention), and flutemetamol has a validated tracer-specific linear conversion to the Centiloid scale, allowing quantitative reporting alongside the qualitative read. In the US, amyloid PET coverage for Medicare beneficiaries, including flutemetamol scans, follows the post-2023 framework in which CMS retired the national coverage determination and left individual coverage decisions to local Medicare Administrative Contractors, removing the former one-scan-per-lifetime limit.",
    approvals: [
      { region: "US", year: 2013, indication: "PET imaging of the brain to estimate beta-amyloid neuritic plaque density in adults with cognitive impairment being evaluated for AD and other causes of cognitive decline" },
      { region: "US", year: 2025, indication: "Label update adding selection of patients indicated for amyloid beta-directed therapy" },
      { region: "EU", year: 2014, indication: "Diagnostic use to help diagnose Alzheimer's disease and other causes of memory loss" },
    ],
    dosing: {
      route: "Intravenous bolus",
      schedule: "185 MBq (5 mCi) single dose within 40 seconds, in up to 10 mL, flushed with 5-15 mL saline; PET imaging 60-120 minutes after injection",
      monitoring: "Visual read of cortical grey-white contrast; Centiloid quantification available as an adjunct using a validated tracer-specific conversion equation",
      source: "https://dailymed.nlm.nih.gov/dailymed/getFile.cfm?setid=b3558f16-8f9a-4e55-8d9c-836427ebaa57&type=pdf",
    },
    asOf: "2026-09-22",
    links: [
      { label: "FDA label: Vizamyl (flutemetamol F 18 injection)", url: "https://dailymed.nlm.nih.gov/dailymed/getFile.cfm?setid=b3558f16-8f9a-4e55-8d9c-836427ebaa57&type=pdf" },
      { label: "EMA EPAR product information: Vizamyl", url: "https://www.ema.europa.eu/en/documents/product-information/vizamyl-epar-product-information_en.pdf" },
      { label: "Zhang et al.: Centiloid scaling for quantification of brain amyloid with [18F]flutemetamol", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6281542/" },
      { label: "CMS: decision memo removing the amyloid PET national coverage determination (NCA-CAL 308)", url: "https://www.cms.gov/medicare-coverage-database/view/ncacal-decision-memo.aspx?proposed=N&ncaid=308" },
    ],
    related: ["alzheimers-disease", "f-18-florbetapir", "f-18-florbetaben", "ge-healthcare"],
    tags: ["amyloid PET", "diagnostic", "neurology"],
  },
  {
    id: "f-18-florbetaben",
    kind: "drug",
    name: "Florbetaben F-18",
    aka: ["Neuraceq"],
    modality: "PET tracer",
    mechanism:
      "A fluorine-18 labelled stilbene derivative that binds fibrillar beta-amyloid plaques in cortical grey matter, giving a PET signal proportional to plaque density.",
    brand: "Neuraceq",
    status: "approved",
    tldr: "A PET scan tracer that lights up amyloid plaques in the brain, helping doctors work out whether memory problems are due to Alzheimer's disease and whether the patient can have amyloid-lowering treatment.",
    summary:
      "Florbetaben F-18 (Neuraceq, originally Piramal, now Life Molecular Imaging/Lantheus) was FDA-approved in March 2014 and EMA-approved in February 2014, for PET imaging of the brain to estimate beta-amyloid neuritic plaque density in adults with cognitive impairment being evaluated for AD and other causes of cognitive decline. As with florbetapir and flutemetamol, the current US label has been updated to add selection of patients for amyloid beta-directed therapy as a second indication.\n\nThe recommended dose is 300 MBq (8.1 mCi) given as a slow intravenous bolus (6 seconds/mL) in up to 10 mL, maximum mass dose 30 micrograms; PET imaging in the US label starts 45 to 130 minutes post-injection (commonly around 90 minutes), and the EU posology allows 240-360 MBq with the target at 300 MBq. Effective dose from a 300 MBq administration is about 5.8 mSv.\n\nVisual interpretation looks for loss of the normal grey-white matter contrast from increased cortical tracer retention; florbetaben has its own validated linear conversion to the Centiloid scale, and the 2024 EMA/CHMP qualification opinion on the Centiloid measure discusses florbetaben-specific data showing that values above about 35 CL indicate established amyloid pathology while values below about 20 CL are compatible with a negative visual read, with 20-35 CL an ambiguous zone. Neuraceq sits in the same US clinical-use and Medicare-coverage landscape as the other amyloid tracers: appropriate for diagnostic work-up in uncertain cognitive impairment and for confirming eligibility for anti-amyloid antibody therapy per the 2025 SNMMI/Alzheimer's Association appropriate use criteria, with Medicare coverage now determined locally following the October 2023 retirement of the national coverage determination.",
    approvals: [
      { region: "US", year: 2014, indication: "PET imaging of the brain to estimate beta-amyloid neuritic plaque density in adults with cognitive impairment being evaluated for AD and other causes of cognitive decline" },
      { region: "EU", year: 2014, indication: "PET imaging of beta-amyloid neuritic plaque density in adults with cognitive impairment being evaluated for Alzheimer's disease and other causes of cognitive impairment" },
    ],
    dosing: {
      route: "Intravenous slow bolus (6 sec/mL)",
      schedule: "300 MBq (8.1 mCi) single dose in up to 10 mL; PET imaging roughly 45-130 minutes after injection (US label)",
      monitoring: "Visual read of cortical grey-white contrast; tracer-specific Centiloid conversion available for quantification",
      source: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/204677s041lbl.pdf",
    },
    asOf: "2026-09-22",
    links: [
      { label: "FDA label: Neuraceq (florbetaben F 18 injection)", url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/204677s041lbl.pdf" },
      { label: "EMA EPAR: Neuraceq", url: "https://www.ema.europa.eu/en/medicines/human/EPAR/neuraceq" },
      { label: "EMA CHMP: qualification opinion for Centiloid measure of amyloid PET (25 June 2024)", url: "https://www.ema.europa.eu/system/files/documents/other/qualification-opinion-centiloid-measure-amyloid-pet-quantify-brain-amyloid-deposition-en.pdf" },
      { label: "CMS: decision memo removing the amyloid PET national coverage determination (NCA-CAL 308)", url: "https://www.cms.gov/medicare-coverage-database/view/ncacal-decision-memo.aspx?proposed=N&ncaid=308" },
    ],
    related: ["alzheimers-disease", "f-18-florbetapir", "f-18-flutemetamol", "lantheus"],
    tags: ["amyloid PET", "diagnostic", "neurology"],
  },
  {
    id: "f-18-flortaucipir",
    kind: "drug",
    name: "Flortaucipir F-18",
    aka: ["Tauvid", "18F-AV-1451", "18F-T807"],
    modality: "PET tracer",
    mechanism:
      "A fluorine-18 labelled tracer that binds paired helical filament tau, the aggregated, phosphorylated form of tau protein found in neurofibrillary tangles, allowing PET visualisation of the density and spatial spread of tau pathology.",
    brand: "Tauvid",
    status: "approved",
    tldr: "A PET scan tracer that shows the tangled tau protein build-up in the brain seen in Alzheimer's disease, used alongside amyloid testing and clinical assessment, not on its own.",
    summary:
      "Flortaucipir F-18 (Tauvid, Eli Lilly, developed by Avid Radiopharmaceuticals) was approved by the FDA on 28 May 2020, the first tau PET tracer to reach the US market. It is indicated for PET imaging of the brain to estimate the density and distribution of aggregated tau neurofibrillary tangles in adult patients with cognitive impairment being evaluated for AD; the label explicitly states Tauvid is not indicated for evaluating chronic traumatic encephalopathy, since tau conformation and distribution differ in that condition. The EMA-approved indication (Tauvid EPAR) is PET imaging to assess the neocortical distribution of aggregated tau neurofibrillary tangles.\n\nThe recommended dose is 370 MBq (10 mCi) as an intravenous bolus in up to 10 mL, with a 20-minute PET image acquired starting about 80 minutes post-injection; the maximum mass dose is 20 micrograms and effective dose from 370 MBq is about 8.7 mSv. A positive scan (Braak-stage-like scoring, described in the label as 'B3' tau pathology, meaning widely distributed neocortical uptake in posterolateral temporal, occipital or parietal/precuneus regions with or without frontal involvement) supports a diagnosis of AD only in conjunction with clinical and other diagnostic evaluation; the EMA label also notes variable specificity and the possibility of false positives.\n\nIn the 2024 Alzheimer's Association revised diagnostic criteria, tau PET is treated as a 'Core 2' biomarker used to stage AD severity once amyloid positivity (Core 1) has established the diagnosis, rather than as a stand-alone diagnostic test. The 2025 SNMMI/Alzheimer's Association appropriate use criteria rate tau PET as 'appropriate' (score 8) alongside amyloid PET for determining eligibility for an approved amyloid-targeting therapy, though the workgroup notes that tau PET for treatment eligibility is not itself required in the FDA prescribing information for lecanemab or donanemab. There is no dedicated Medicare national coverage determination for tau PET; it falls under the same PET framework applied by CMS and local Medicare Administrative Contractors as other diagnostic radiopharmaceuticals.",
    approvals: [
      { region: "US", year: 2020, indication: "PET imaging of the brain to estimate density and distribution of aggregated tau neurofibrillary tangles in adults with cognitive impairment being evaluated for Alzheimer's disease" },
    ],
    dosing: {
      route: "Intravenous bolus",
      schedule: "370 MBq (10 mCi) single dose in up to 10 mL; 20-minute PET image starting approximately 80 minutes after injection",
      monitoring: "Visual scoring of neocortical tau pattern distribution (B1-B3 Braak-like staging); used alongside amyloid PET/CSF as a Core 2 staging biomarker",
      source: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/212123s031lbl.pdf",
    },
    asOf: "2026-09-22",
    links: [
      { label: "FDA label: Tauvid (flortaucipir F 18 injection)", url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/212123s031lbl.pdf" },
      { label: "EMA EPAR product information: Tauvid", url: "https://www.ema.europa.eu/en/documents/product-information/tauvid-epar-product-information_en.pdf" },
      { label: "SNMMI/Alzheimer's Association: updated appropriate use criteria for amyloid and tau PET (2025)", url: "https://jnm.snmjournals.org/content/early/2025/01/07/jnumed.124.268756" },
      { label: "PMC review: Tauvid, the first FDA-approved PET tracer for imaging tau pathology", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7911942/" },
    ],
    related: ["alzheimers-disease", "f-18-florbetapir", "f-18-flutemetamol", "f-18-florbetaben", "eli-lilly"],
    tags: ["tau PET", "diagnostic", "neurology"],
  },
  {
    id: "i-123-ioflupane",
    kind: "drug",
    name: "Ioflupane I-123",
    aka: ["DaTscan", "DaTSCAN", "123I-FP-CIT"],
    modality: "SPECT tracer",
    mechanism:
      "An iodine-123 labelled cocaine analogue (N-omega-fluoropropyl-2beta-carbomethoxy-3beta-(4-iodophenyl)nortropane) that binds presynaptic dopamine transporters on striatal nerve terminals, allowing SPECT visualisation of dopaminergic neuron density.",
    brand: "DaTscan",
    status: "approved",
    tldr: "A brain scan that shows how many dopamine-releasing nerve endings remain in a part of the brain called the striatum, helping tell shaking from Parkinson's-type disease apart from other kinds of tremor and from Alzheimer's-type memory loss.",
    summary:
      "Ioflupane I-123 (DaTscan in the US, DaTSCAN in the EU; GE Healthcare) was approved by the FDA in January 2011 and by the EMA in 2000. It is a SPECT radiopharmaceutical indicated as an adjunct to other diagnostic evaluations for striatal dopamine transporter visualisation in adult patients with suspected Parkinsonian syndromes, to help differentiate essential tremor from tremor due to Parkinson's disease, multiple system atrophy or progressive supranuclear palsy (the scan cannot distinguish between these three), and in adult patients to help differentiate probable dementia with Lewy bodies from Alzheimer's disease (it also cannot separate dementia with Lewy bodies from Parkinson's disease dementia).\n\nThe recommended dose is 111-185 MBq (3-5 mCi) given as a slow intravenous injection over at least 15-20 seconds; a thyroid-blocking agent (potassium iodide solution, Lugol's solution or potassium perchlorate) must be given at least one hour beforehand to limit thyroid uptake of free iodine-123. SPECT imaging is performed 3 to 6 hours after injection. Effective dose is about 3.9-4.6 mSv from a 185 MBq administration, depending on the dosimetry source.\n\nInterpretation is by visual (and increasingly semi-quantitative, using striatal binding ratios against normative databases) assessment of striatal uptake shape and intensity: a normal, symmetric comma- or crescent-shaped pattern argues against a parkinsonian syndrome, while reduced, asymmetric or absent putamen uptake supports one. Unlike amyloid PET, DAT SPECT does not currently gate access to any approved disease-modifying therapy; its clinical role remains diagnostic clarification, particularly in early or atypical presentations where tremor aetiology or the AD-versus-Lewy-body-dementia distinction is unclear on clinical grounds alone.",
    approvals: [
      { region: "US", year: 2011, indication: "Striatal dopamine transporter SPECT imaging as an adjunct in adults with suspected Parkinsonian syndromes, to help differentiate essential tremor from tremor due to Parkinsonian syndromes" },
      { region: "EU", year: 2000, indication: "Detecting loss of functional dopaminergic neuron terminals in the striatum in clinically uncertain Parkinsonian syndromes, and to help differentiate probable dementia with Lewy bodies from Alzheimer's disease" },
    ],
    dosing: {
      route: "Slow intravenous injection (>=15-20 seconds)",
      schedule: "111-185 MBq (3-5 mCi) single dose; thyroid blockade at least 1 hour before injection; SPECT imaging 3-6 hours after injection",
      monitoring: "Visual assessment of striatal uptake pattern, often supported by semi-quantitative striatal binding ratio software against normative reference data",
      source: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2022/022454s010lbl.pdf",
    },
    asOf: "2026-09-22",
    links: [
      { label: "FDA label: DaTscan (ioflupane I 123 injection)", url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2022/022454s010lbl.pdf" },
      { label: "EMA EPAR product information: DaTSCAN", url: "https://www.ema.europa.eu/en/documents/product-information/datscan-epar-product-information_en.pdf" },
      { label: "EMA EPAR summary: DaTSCAN", url: "https://www.ema.europa.eu/en/medicines/human/EPAR/datscan" },
    ],
    related: ["parkinsonian-syndromes", "alzheimers-disease", "ge-healthcare"],
    tags: ["SPECT", "diagnostic", "neurology", "movement disorder"],
  },
  {
    id: "tc-99m-hmpao-brain",
    kind: "drug",
    name: "Technetium-99m exametazime (brain perfusion)",
    aka: ["Ceretec", "Tc-99m HMPAO", "HMPAO"],
    modality: "SPECT tracer",
    mechanism:
      "A lipophilic technetium-99m complex of hexamethylpropyleneamine oxime (HMPAO/exametazime) that crosses the intact blood-brain barrier, is trapped intracellularly by conversion to a hydrophilic species, and distributes in proportion to regional cerebral blood flow, allowing SPECT mapping of brain perfusion.",
    brand: "Ceretec",
    status: "approved",
    tldr: "A cold-kit radioactive tracer that maps blood flow inside the brain on a SPECT scan, used mainly to look for the effects of stroke and, off-label in practice, to help support a diagnosis of brain death.",
    summary:
      "Technetium-99m exametazime (Ceretec, GE Healthcare) is a cold kit reconstituted with the user's own technetium-99m generator eluate. Its FDA-labelled indications are cerebral scintigraphy as an adjunct in the detection of altered regional cerebral perfusion in stroke, and, as a separate use of the same kit, radiolabelling of autologous leukocytes for localising intra-abdominal infection and inflammatory bowel disease; it is approved in adults and in paediatric patients aged 2-17. It is a much older, non-specific perfusion agent rather than a targeted molecular tracer: unlike the amyloid, tau and dopamine transporter tracers in this group, HMPAO shows blood flow, not a disease-specific molecular target.\n\nFor cerebral scintigraphy the FDA label recommends 370-740 MBq (10-20 mCi) intravenously, with dynamic imaging in the first 10 minutes and static (planar or SPECT) imaging from 15 minutes up to 6 hours after injection; an SNMMI fact sheet on the brain-death application cites a higher adult range of 370-1110 MBq (10-30 mCi). For leukocyte labelling the recommended adult dose is 185-370 MBq (5-10 mCi) of labelled cells, re-injected within about an hour of labelling. Effective dose at the upper cerebral dose of 1110 MBq is roughly 10.3 mSv.\n\nBeyond its labelled stroke indication, Tc-99m HMPAO brain SPECT is used clinically, per SNMMI practice guidance, as an ancillary test to help confirm the absence of cerebral blood flow in patients with an equivocal clinical diagnosis of brain death, a use it shares conceptually with EEG and cerebral angiography. It has also historically been used for perfusion patterns in dementia work-up, but F-18 FDG PET has largely superseded SPECT perfusion imaging for that purpose because of better spatial resolution and more extensive validation.",
    approvals: [
      { region: "US", year: 1994, indication: "Cerebral scintigraphy as an adjunct in the detection of altered regional cerebral perfusion in stroke; and leukocyte-labelled scintigraphy for localising intra-abdominal infection and inflammatory bowel disease" },
    ],
    dosing: {
      route: "Intravenous injection (cerebral scintigraphy) or re-injection of labelled autologous leukocytes",
      schedule: "Cerebral scintigraphy: 370-740 MBq (10-20 mCi) IV; imaging 15 minutes to 6 hours post-injection. Leukocyte labelling: 185-370 MBq (5-10 mCi) of labelled cells, given within about 1 hour of labelling",
      monitoring: "Visual/semi-quantitative assessment of regional cerebral perfusion on planar or SPECT images",
      source: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2018/019829s034lbl.pdf",
    },
    asOf: "2026-09-22",
    links: [
      { label: "FDA label: Ceretec (technetium Tc99m exametazime kit)", url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2018/019829s034lbl.pdf" },
      { label: "SNMMI fact sheet: brain death assessment with Ceretec (Tc-99m HMPAO)", url: "https://snmmi.org/common/Uploaded%20files/Web/Education%20and%20Meetings/SNMMI%20Fact%20Sheet_Brain%20Death%20Fact%20Sheet%20Ceretec%20-Tc-99m%20HMPAO.pdf" },
    ],
    related: ["ge-healthcare", "spect", "f-18-fdg-brain"],
    tags: ["SPECT", "diagnostic", "neurology", "perfusion imaging"],
  },
  {
    id: "f-18-fdg-brain",
    kind: "drug",
    name: "Fludeoxyglucose F-18 (brain metabolism)",
    aka: ["FDG-PET brain", "18F-FDG"],
    modality: "PET tracer",
    mechanism:
      "A glucose analogue labelled with fluorine-18 that is taken up by cells in proportion to glucose metabolism and trapped after phosphorylation; in the brain, regional FDG uptake reflects synaptic activity, so characteristic patterns of reduced metabolism can distinguish different neurodegenerative diseases.",
    brand: undefined,
    status: "approved",
    tldr: "The standard PET tracer for measuring how the brain is using energy; a pattern of low activity in particular brain regions can help doctors work out which type of dementia a patient has.",
    summary:
      "Fludeoxyglucose F-18 (FDG) is the general-purpose PET metabolic tracer used across oncology, cardiology and neurology; it is not brain-specific as a product, but brain FDG PET is a distinct, well-established clinical application. Reduced glucose metabolism follows a regional pattern that differs by disease: temporoparietal and posterior cingulate hypometabolism is typical of Alzheimer's disease, while frontal and/or anterior temporal hypometabolism points to frontotemporal dementia, and this pattern difference is the main clinical use of FDG-PET in cognitive impairment.\n\nIn the United States, Medicare's national coverage determination for FDG-PET in dementia (NCD 220.6.13) covers a scan specifically to help differentiate Alzheimer's disease from frontotemporal dementia, in patients with a recent dementia diagnosis and at least 6 months of documented cognitive decline whose presentation leaves this distinction clinically uncertain after a comprehensive specialist evaluation; a prior brain SPECT or FDG-PET scan for the same question generally precludes a repeat scan within a year. All other dementia uses of FDG-PET (for example distinguishing other neurodegenerative diseases, or use outside a CMS-approved clinical trial in mild cognitive impairment) remain nationally non-covered under this determination, a materially narrower coverage pathway than the one now in force for amyloid PET.\n\nFDG-PET brain imaging does not require thyroid blockade or specialised handling beyond standard F-18 PET radiopharmacy practice, and dosing follows general oncologic/neurologic FDG protocols (typically around 185-370 MBq IV, imaging beginning about 30-45 minutes later, with the patient resting quietly in a darkened, low-stimulation room during uptake to standardise regional brain activity). Because FDG uptake reflects neuronal activity rather than a specific pathological protein, it complements rather than replaces amyloid and tau PET: FDG shows the functional consequence of neurodegeneration, while amyloid and tau tracers show the underlying molecular pathology.",
    approvals: [
      { region: "US", year: 2004, indication: "FDG-PET nationally covered by Medicare specifically to differentiate Alzheimer's disease from frontotemporal dementia in patients with an uncertain diagnosis after comprehensive specialist evaluation (NCD 220.6.13)" },
    ],
    dosing: {
      route: "Intravenous injection",
      schedule: "Typical adult brain FDG-PET protocol: ~185-370 MBq IV, patient rested in a quiet, dimly lit room during the ~30-45 minute uptake phase, then PET imaging",
      monitoring: "Visual and statistical/voxel-based comparison of regional glucose metabolism against normative databases to identify disease-specific hypometabolism patterns",
      source: "https://www.cms.gov/regulations-and-guidance/guidance/transmittals/downloads/r24ncd.pdf",
    },
    asOf: "2026-09-22",
    links: [
      { label: "CMS NCD 220.6.13: FDG PET for Dementia and Neurodegenerative Diseases", url: "https://www.cms.gov/regulations-and-guidance/guidance/transmittals/downloads/r24ncd.pdf" },
      { label: "CMS coding article: PET scan coverage reference table including FDG dementia indication (A53134)", url: "https://www.cms.gov/medicare-coverage-database/view/article.aspx?articleId=53134" },
    ],
    related: ["alzheimers-disease", "fludeoxyglucose-f18", "fdg-pet", "tc-99m-hmpao-brain"],
    tags: ["FDG PET", "diagnostic", "neurology", "metabolic imaging"],
  },
];
