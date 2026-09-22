/**
 * Lung cancer indication records.
 *
 * Non-small cell lung cancer is the single largest workload in oncological PET, and until this file
 * the corpus carried only small-cell lung cancer and lung neuroendocrine tumours, so the agents used
 * every day for lung staging had no indication page to link to.
 *
 * Every figure below was read on 22 September 2026 from the source named beside it: the IARC Global
 * Cancer Observatory factsheet for the worldwide burden, SEER Cancer Stat Facts for survival by
 * stage, the NCI PDQ health-professional summary for histology, presentation and the pooled FDG PET
 * staging performance, the published ninth-edition TNM review for the 2025 staging change, the
 * USPSTF statement for screening, and the Journal of Nuclear Medicine for the FAPI nodal data.
 * Nothing here is written from memory.
 */
import type { EntityInput } from "@/lib/schema";

export const lungIndications: EntityInput[] = [
  {
    id: "nsclc",
    kind: "indication",
    name: "Non-small cell lung cancer",
    aka: ["NSCLC", "lung cancer", "lung adenocarcinoma", "lung squamous cell carcinoma", "large cell lung carcinoma"],
    group: "lung",
    wikipedia: "https://en.wikipedia.org/wiki/Non-small-cell_lung_cancer",
    tldr: "The cancer that kills more people than any other, and the reason most PET scanners are busy. Most cases are found once the disease has already spread, and a scan with radioactive sugar is what decides who can still be cured by surgery.",
    summary:
      "Non-small cell lung cancer is the group of lung carcinomas that are not small-cell: adenocarcinoma (about 40% of all lung cancers), squamous cell carcinoma (about 25%) and large cell carcinoma (about 10%), classified by the World Health Organization together with the International Association for the Study of Lung Cancer, with adenosquamous, sarcomatoid and salivary gland-type tumours making up the remainder. Squamous tumours usually start near a central bronchus, adenocarcinomas peripherally. Smoking is the dominant cause: on average a smoker's risk is tenfold that of a lifetime non-smoker, and radon, asbestos, air pollution, prior radiation, family history and HIV infection add to it. Subsets of adenocarcinoma carry targetable alterations in EGFR, ALK, ROS1, BRAF, RET, NTRK1-3, MET, KRAS and HER2; EGFR and ALK predominate in never-smokers while KRAS and BRAF are commoner in current and former smokers, so molecular typing and PD-L1 scoring now precede treatment in metastatic disease.\n\nNuclear medicine's role here is diagnostic and it is decisive. The staging work-up runs from history, examination and contrast-enhanced chest CT to 18F-FDG PET, with tissue taken by bronchoscopy, mediastinoscopy or anterior mediastinotomy. Across 44 studies and 2,865 patients, FDG PET detected mediastinal nodal metastasis with a pooled sensitivity of 74% (95% CI 69-79) and specificity of 85% (95% CI 82-88), against roughly 61% and 79% for CT, and a randomised trial found that adding FDG PET to conventional staging significantly reduced the number of thoracotomies. It does not replace sampling: because false positives are frequent enough that forgoing mediastinoscopy on a PET-positive node was judged unsafe, a positive mediastinum is still biopsied, while PET's main practical value is finding the distant deposit that makes surgery futile. Since 1 January 2025 the reporting task has changed shape: the ninth edition of TNM splits N2 into N2a (single-station) and N2b (multiple-station) and M1c into M1c1 (several metastases in one organ system) and M1c2 (several organ systems), so a scan report now has to count nodal stations and organ systems rather than simply call the mediastinum positive.\n\nWhat is moving. China approved technetium (99mTc) pexiretide in April 2026, an integrin alpha-v-beta-3 RGD peptide that puts the same staging question on a SPECT/CT scanner, which matters where SPECT capacity far exceeds PET capacity. 68Ga-FAPI-04, which targets the fibroblast scaffolding rather than glucose metabolism, detected primary NSCLC with 96.7% sensitivity and staged nodal stations at 72.0% sensitivity and 93.1% specificity in a 91-patient series, the specificity FDG lacks. Research tracers including 18F-FLT for proliferation and 18F-F-AraG for T-cell activity are in trials aimed at response rather than extent. Therapy is the gap: no radiopharmaceutical is approved to treat lung cancer of any histology anywhere, and the alpha-emitting DLL3 programmes now in the clinic are aimed at small-cell disease, which has its own record.",
    burden:
      "Lung cancer ranks first worldwide in both incidence and mortality: GLOBOCAN 2024 estimates 2,637,005 new cases (age-standardised rate 23.9 per 100,000) and 1,861,839 deaths (16.3 per 100,000) a year. The NCI estimated 226,650 new US cases and 124,730 deaths for 2025, small-cell and non-small-cell combined, making it the leading cause of cancer death in the United States. Non-small-cell histologies are the large majority of that total.",
    subtypes: [
      "Adenocarcinoma (about 40% of all lung cancers; usually peripheral)",
      "Squamous cell carcinoma (about 25%; usually near a central bronchus)",
      "Large cell carcinoma (about 10%)",
      "Adenosquamous carcinoma",
      "Sarcomatoid carcinoma",
      "Salivary gland-type tumours of the lung",
    ],
    biomarkers: [
      "EGFR",
      "ALK",
      "ROS1",
      "BRAF",
      "RET",
      "NTRK1, NTRK2, NTRK3",
      "MET",
      "KRAS",
      "HER2",
      "PD-L1 tumour proportion score (22C3 immunohistochemistry)",
      "Stage (ninth-edition TNM) remains the dominant treatment determinant",
    ],
    standardOfCare: [
      {
        setting: "Screening in people at risk",
        approach:
          "Annual low-dose CT for adults aged 50 to 80 with a 20 pack-year smoking history who still smoke or quit within the past 15 years; stopped after 15 smoke-free years or when a competing health problem limits benefit.",
        refs: ["ct"],
        guideline: { version: "USPSTF final recommendation statement, 9 March 2021", url: "https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/lung-cancer-screening" },
      },
      {
        setting: "Diagnosis and initial staging",
        approach:
          "History, examination, laboratory tests, chest radiograph and contrast-enhanced chest CT, then 18F-FDG PET; tissue obtained by bronchoscopy, mediastinoscopy or anterior mediastinotomy.",
        refs: ["ct", "fdg-pet", "pet-ct", "fludeoxyglucose-f18"],
        guideline: { version: "NCCN Guidelines: Non-Small Cell Lung Cancer", url: "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1450" },
      },
      {
        setting: "Mediastinal nodes positive on PET",
        approach:
          "Pathological confirmation before a curative-intent plan is abandoned, because the false-positive rate makes PET alone an unsafe basis for withholding surgery.",
        refs: ["fdg-pet", "pet-ct"],
        guideline: { version: "NCCN Guidelines: Non-Small Cell Lung Cancer", url: "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1450" },
      },
      {
        setting: "Suspected distant spread",
        approach:
          "Bone scintigraphy and CT or MRI of the brain when symptoms, signs, laboratory findings or perceived risk suggest metastatic disease that PET may not resolve.",
        refs: ["tc-99m-mdp", "ct"],
        guideline: { version: "NCI PDQ, NSCLC treatment (health professional)", url: "https://www.cancer.gov/types/lung/hp/non-small-cell-lung-treatment-pdq" },
      },
      {
        setting: "Resectable early-stage disease",
        approach:
          "Surgery with mediastinal nodal evaluation, with adjuvant systemic therapy for larger or node-positive tumours; stereotactic body radiotherapy or conventional radiotherapy where the patient is inoperable.",
        refs: [],
        guideline: { version: "NCCN Guidelines: Non-Small Cell Lung Cancer", url: "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1450" },
      },
      {
        setting: "Locally advanced unresectable disease",
        approach: "Radiotherapy combined with chemotherapy, with long-term survival achievable in a minority.",
        refs: [],
        guideline: { version: "NCI PDQ, NSCLC treatment (health professional)", url: "https://www.cancer.gov/types/lung/hp/non-small-cell-lung-treatment-pdq" },
      },
      {
        setting: "Advanced metastatic disease",
        approach:
          "Systemic therapy directed by molecular typing and PD-L1 score: targeted agents where a driver alteration is present, chemotherapy and immunotherapy otherwise, alongside supportive care.",
        refs: [],
        guideline: { version: "NCCN Guidelines: Non-Small Cell Lung Cancer", url: "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1450" },
      },
    ],
    stateOfArt: [
      "18F-FDG PET/CT is the staging backbone. Pooled across 44 studies and 2,865 patients, sensitivity for mediastinal nodal metastasis was 74% (95% CI 69-79) and specificity 85% (95% CI 82-88), against about 61% and 79% for CT; the median prevalence of mediastinal metastases in those series was 29%.",
      "PET changes management mainly by finding disease outside the chest. A randomised study found significantly fewer thoracotomies when FDG PET was added to conventional staging, but the trials disagree on how many futile operations it prevents, and PET-positive mediastinal nodes still require sampling.",
      "The ninth edition of TNM, effective 1 January 2025, leaves the T categories unchanged but divides N2 into N2a (single-station) and N2b (multiple-station) and M1c into M1c1 (multiple metastases in one organ system) and M1c2 (metastases in multiple organ systems), which moves some patients to a lower stage group and puts the burden of counting stations and organ systems onto the imaging report.",
      "Technetium (99mTc) pexiretide, approved by China's NMPA on 2 April 2026, is the first approved alternative that answers the nodal-staging question on SPECT/CT rather than PET/CT, a distinction that matters in health systems whose SPECT installed base is several times their PET capacity.",
      "68Ga-FAPI-04 PET/CT detected the primary tumour with 96.7% sensitivity and 100% positive predictive value, and staged nodal stations with 72.0% sensitivity, 93.1% specificity and 89.4% accuracy, in 91 patients with NSCLC; uptake correlated with fibroblast activation protein expression in resected specimens.",
      "No radiopharmaceutical therapy is approved for lung cancer of any histology. Targets identified in lung tumours (fibroblast activation protein, integrin alpha-v-beta-3) are so far used for imaging only, and the alpha-emitting DLL3 programmes in the clinic are directed at small-cell disease.",
    ],
    history: [
      { year: 2010, title: "Revised international staging system adopted by AJCC and UICC", note: "Built from a clinical database of more than 5,000 patients; gave greater prognostic specificity to the stage groups." },
      { year: 2021, title: "USPSTF widens low-dose CT screening", note: "Final statement of 9 March 2021: annual LDCT for adults aged 50 to 80 with a 20 pack-year history who smoke or quit within 15 years, lowering both the age and pack-year thresholds." },
      { year: 2025, title: "Ninth-edition TNM takes effect on 1 January", note: "N2 splits into N2a and N2b, M1c into M1c1 and M1c2; T categories unchanged.", refs: ["pet-ct"] },
      { year: 2026, title: "China approves technetium (99mTc) pexiretide for nodal staging", note: "NMPA approval on 2 April 2026 of an integrin alpha-v-beta-3 RGD peptide for SPECT/CT assessment of regional lymph nodes in suspected lung cancer.", refs: ["pexiretide-tc99m"] },
    ],
    pipeline: ["pexiretide-tc99m", "ga-68-fapi-46", "fapi-pet", "f-18-fluorothymidine", "nct06107374", "nct07276789"],
    openProblems: [
      "FDG PET misses about a quarter of mediastinal nodal metastases, so a negative mediastinum on PET does not reliably spare a patient invasive staging when the pre-test probability is high.",
      "False positives are frequent enough that a PET-positive mediastinal node cannot be treated as proof of spread; the money saved by skipping mediastinoscopy was judged not to justify the error rate.",
      "Glucose metabolism is a non-specific target. FAP and integrin imaging offer higher specificity for nodal disease but neither has a regulatory approval outside China, and neither has been tested head-to-head against FDG in a registrational trial.",
      "There is no theranostic pair in lung cancer: every approved agent here is diagnostic, and no radioligand therapy has reached approval in any lung histology.",
      "The ninth-edition N2a/N2b and M1c1/M1c2 subdivisions require station-level and organ-system-level reporting that most existing structured-report templates and PET reporting software do not yet produce.",
      "Most of the world's 2.6 million annual cases arise where PET capacity is thinnest, which is the practical argument for the SPECT-based alternative China approved rather than for a better PET tracer.",
    ],
    basics: {
      symptoms: [
        "Worsening cough, chest pain, haemoptysis, malaise, weight loss, breathlessness and hoarseness are the commonest presenting complaints.",
        "Many tumours are found incidentally on chest imaging performed for another reason.",
        "Symptoms may come from local invasion or compression of adjacent structures, for example dysphagia from oesophageal compression or hoarseness from laryngeal nerve involvement.",
      ],
      diagnosis: [
        "Tissue is obtained by bronchoscopy, mediastinoscopy or anterior mediastinotomy; histology is classified under the WHO/IASLC system.",
        "Imaging work-up is contrast-enhanced chest CT followed by 18F-FDG PET, with bone scintigraphy and brain CT or MRI when distant spread is suspected.",
        "Molecular testing for EGFR, ALK, ROS1, BRAF, RET, NTRK, MET, KRAS and HER2, plus PD-L1 immunohistochemistry, directs systemic treatment in advanced disease.",
      ],
      staging: [
        "The ninth edition of TNM has applied since 1 January 2025.",
        "N2 is now split into N2a (single nodal station) and N2b (multiple stations); M1c is split into M1c1 (multiple metastases in a single organ system) and M1c2 (metastases in multiple organ systems). The T categories are unchanged from the eighth edition.",
        "Pathological staging requires examination of the tumour, knowledge of the resection margins and determination of nodal status; clinical and pathological stage can differ.",
      ],
      sources: [
        { label: "NCI PDQ: non-small cell lung cancer treatment (health professional)", url: "https://www.cancer.gov/types/lung/hp/non-small-cell-lung-treatment-pdq" },
        { label: "Implementation of the 9th TNM for lung cancer: practical points (2025)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12165876/" },
      ],
    },
    prognosis: {
      text:
        "Five-year relative survival for lung and bronchus cancer is 29.5% in SEER 21 (excluding Illinois) for 2016-2022, and stage at diagnosis dominates it: 24% of cases are localised with 65.5% survival, 21% regional with 38.2%, and 51% distant with 10.5%; 4% are unstaged at 17.5%. US incidence is 47.2 and mortality 30.2 per 100,000 per year. Because half of all patients are already metastatic when they are diagnosed, the population figure is pulled far below what any individual early-stage patient should expect, and the numbers pool small-cell with non-small-cell disease.",
      sources: [{ label: "SEER Cancer Stat Facts: lung and bronchus cancer", url: "https://seer.cancer.gov/statfacts/html/lungb.html" }],
    },
    asOf: "2026-09-22",
    links: [
      { label: "NCI PDQ: non-small cell lung cancer treatment (health professional)", url: "https://www.cancer.gov/types/lung/hp/non-small-cell-lung-treatment-pdq" },
      { label: "SEER Cancer Stat Facts: lung and bronchus cancer", url: "https://seer.cancer.gov/statfacts/html/lungb.html" },
      { label: "IARC Global Cancer Observatory: trachea, bronchus and lung factsheet (GLOBOCAN 2024)", url: "https://gco.iarc.fr/media/globocan/factsheets/cancers/15-trachea-bronchus-and-lung-fact-sheet.pdf" },
      { label: "NCCN Guidelines: Non-Small Cell Lung Cancer", url: "https://www.nccn.org/guidelines/guidelines-detail?category=1&id=1450" },
      { label: "USPSTF: lung cancer screening, final recommendation statement (2021)", url: "https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/lung-cancer-screening" },
      { label: "Implementation of the 9th TNM for lung cancer: practical points (2025)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12165876/" },
      { label: "18F-FLT and 18F-FDG uptake versus Ki-67 in NSCLC (Eur J Nucl Med Mol Imaging, 2007)", url: "https://doi.org/10.1007/s00259-007-0449-7" },
      { label: "68Ga-FAPI-04 PET/CT in NSCLC: nodal metastasis and FAP expression (J Nucl Med, 2024)", url: "https://doi.org/10.2967/jnumed.123.266806" },
    ],
    related: ["sclc", "lung-net", "f-18", "tc-99m", "ga-68"],
    indications: ["sclc", "lung-net"],
    technologies: ["fdg-pet", "pet-ct", "ct", "spect-ct", "fapi-pet", "radiomics"],
    targets: ["glut-hexokinase", "fap", "integrin-avb3"],
    drugs: ["fludeoxyglucose-f18", "pexiretide-tc99m", "ga-68-fapi-46", "f-18-fluorothymidine", "tc-99m-mdp"],
    trials: ["nct06107374", "nct07276789"],
    tags: ["lung", "diagnostic", "staging"],
  },
];
