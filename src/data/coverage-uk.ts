/**
 * What the NHS offers for indication: NICE technology appraisal (TA) outcomes, Indication Drugs Fund (CDF) managed
 * access, and Scottish Medicines Consortium (SMC) advice for approved oncology products, plus a plain-English
 * explainer of how NHS cancer care and drug funding are organised.
 *
 * Rules: a TA number and year are recorded only where the appraisal is well known and the number could be
 * stated with confidence; the row links to the guidance page so it can be checked in one click. Where the
 * outcome is known but the TA number was not verified, no number is recorded and the row links to a NICE
 * search. Where nothing could be stated confidently the status is "unknown" with a NICE search link, which
 * means "not yet researched", not "not funded". Many products have several TAs (one per indication); the row
 * records one flagship appraisal and names others in the note. SMC status is "accepted" if SMC has accepted
 * the medicine for at least one cancer indication (often restricted); it is omitted where not checked.
 * Long-established generics (platinums, taxanes, anthracyclines, hormones) were never appraised as TAs and
 * are funded routinely through local formularies and NHS England chemotherapy protocols; they are marked
 * "not appraised" with that note. Verify at nice.org.uk and with the treating team before relying on a row.
 */

export type NiceStatus = "recommended" | "optimised" | "cdf" | "not recommended" | "in development" | "terminated" | "not appraised" | "unknown";

export type UkCoverage = {
  drugId: string;
  nice: { status: NiceStatus; ta?: string; year?: number; indication?: string; url?: string; note?: string };
  smc?: { status: string; id?: string; url?: string };
  awmsg?: string;
  nhsEnglandCommissioned?: boolean;
  cdfNote?: string;
  sources: Array<{ label: string; url: string }>;
};

/** Display order: what the NHS funds first, then pending, then refusals, then gaps in our research. */
export const NICE_STATUS_ORDER: NiceStatus[] = ["recommended", "optimised", "cdf", "in development", "not recommended", "terminated", "not appraised", "unknown"];

export const NICE_STATUS_LABEL: Record<NiceStatus, string> = {
  recommended: "NICE recommended",
  optimised: "Recommended (optimised)",
  cdf: "Indication Drugs Fund",
  "not recommended": "Not recommended",
  "in development": "Appraisal in progress",
  terminated: "Appraisal terminated",
  "not appraised": "Not appraised",
  unknown: "Not yet researched",
};

export const NICE_STATUS_TIP: Record<NiceStatus, string> = {
  recommended: "NICE published a technology appraisal recommending the medicine; NHS England and Wales must fund it within 90 days for the appraised indication.",
  optimised: "Recommended for a narrower group than the licence, or with a condition such as a stopping rule or a confidential discount.",
  cdf: "Recommended for use through the Indication Drugs Fund under a managed access agreement while more data are collected; NICE reappraises at the end of the period.",
  "not recommended": "NICE did not recommend routine NHS funding for the appraised indication at the price offered. Individual funding requests or later resubmissions are possible.",
  "in development": "An appraisal is scheduled or in progress. The medicine may be available through the company's early access scheme or the CDF interim funding route.",
  terminated: "NICE stopped the appraisal, usually because the company did not submit evidence; the medicine is not routinely funded for that indication.",
  "not appraised": "No technology appraisal exists: either a long-established generic that is funded routinely, or a product not licensed in the UK. Read the note.",
  unknown: "Nuclide has not yet sourced the NICE position for this product; follow the link to search NICE.",
};

export const NICE_SEARCH = (q: string) => `https://www.nice.org.uk/search?q=${encodeURIComponent(q)}`;
export const CDF_LIST_URL = "https://www.england.nhs.uk/cancer/cdf/cancer-drugs-fund-list/";
export const SMC_SEARCH = (q: string) => `https://scottishmedicines.org.uk/medicines-advice/?keywords=${encodeURIComponent(q)}`;
const ta = (n: number) => `https://www.nice.org.uk/guidance/ta${n}`;

type Opts = { note?: string; smc?: string; cdfNote?: string; awmsg?: string; commissioned?: boolean };

function row(drugId: string, name: string, status: NiceStatus, taNo: number | undefined, year: number | undefined, indication: string | undefined, o: Opts = {}): UkCoverage {
  const url = taNo ? ta(taNo) : NICE_SEARCH(name);
  const sources: UkCoverage["sources"] = [{ label: taNo ? `NICE TA${taNo}` : `NICE search: ${name}`, url }];
  if (status === "cdf") sources.push({ label: "NHS England Indication Drugs Fund list", url: CDF_LIST_URL });
  if (o.smc) sources.push({ label: `SMC advice: ${name}`, url: SMC_SEARCH(name) });
  return {
    drugId,
    nice: { status, ta: taNo ? `TA${taNo}` : undefined, year, indication, url, note: o.note },
    smc: o.smc ? { status: o.smc, url: SMC_SEARCH(name) } : undefined,
    awmsg: o.awmsg,
    nhsEnglandCommissioned: o.commissioned ?? (status === "recommended" || status === "optimised" || status === "cdf" ? true : undefined),
    cdfNote: o.cdfNote,
    sources,
  };
}

const rec = (id: string, name: string, taNo: number, year: number, ind: string, o: Opts = {}) => row(id, name, "recommended", taNo, year, ind, o);
const opt = (id: string, name: string, taNo: number, year: number, ind: string, o: Opts = {}) => row(id, name, "optimised", taNo, year, ind, o);
const cdf = (id: string, name: string, taNo: number, year: number, ind: string, o: Opts = {}) => row(id, name, "cdf", taNo, year, ind, { ...o, cdfNote: o.cdfNote ?? "Entered the Indication Drugs Fund under a managed access agreement; check the current CDF list for whether it has since moved to routine commissioning." });
const notRec = (id: string, name: string, taNo: number, year: number, ind: string, o: Opts = {}) => row(id, name, "not recommended", taNo, year, ind, o);
const term = (id: string, name: string, taNo: number, year: number, ind: string, o: Opts = {}) => row(id, name, "terminated", taNo, year, ind, o);
const recNoTa = (id: string, name: string, ind: string, o: Opts = {}) => row(id, name, "recommended", undefined, undefined, ind, { ...o, note: `${o.note ? o.note + " " : ""}TA number not verified; follow the NICE search link.` });
const generic = (id: string, name: string, note?: string) => row(id, name, "not appraised", undefined, undefined, undefined, { note: note ?? "Long-established generic: never subject to a technology appraisal; funded routinely through hospital formularies and NHS England systemic anti-cancer therapy protocols.", commissioned: true });
const notUk = (id: string, name: string, note?: string) => row(id, name, "not appraised", undefined, undefined, undefined, { note: note ?? "No UK marketing authorisation yet, so no NICE appraisal. Access only through a clinical trial or a company early access scheme.", commissioned: false });
const inDev = (id: string, name: string, note?: string) => row(id, name, "in development", undefined, undefined, undefined, { note: note ?? "Recently licensed; a NICE appraisal is scheduled or in progress. Interim access may be possible via the CDF interim funding route once NICE issues positive draft guidance." });

const list: UkCoverage[] = [
  // ================= Checkpoint inhibitors =================
  opt("pembrolizumab", "pembrolizumab", 531, 2018, "Untreated PD-L1 ≥50% metastatic NSCLC (2-year stopping rule)", { note: "One of NICE's most-appraised medicines: melanoma (TA357, TA366, adjuvant TA766), NSCLC (TA428, TA531, TA557, TA600), classical Hodgkin lymphoma (TA540), urothelial (TA522), head and neck (TA661), RCC with axitinib (TA692), TNBC (TA801, TA851), MSI-H colorectal (TA709), oesophageal (TA737) and more. Most are optimised with a 2-year treatment stop. With chemoradiotherapy for untreated FIGO 2014 stage 3 to 4A locally advanced cervical cancer (KEYNOTE-A18): TA1177 (July 2026), within the licence. Relapsed or refractory classical Hodgkin lymphoma from age 3 after 2 or more treatments when a transplant is not possible: TA967 (May 2024). Adjuvant treatment of high-risk resected NSCLC after platinum chemotherapy (KEYNOTE-091): TA1037 (February 2025), within the licence. With gemcitabine and cisplatin for untreated advanced biliary tract indication: TA966 (April 2024), terminated appraisal. Adjuvant renal cell carcinoma at increased risk of recurrence after nephrectomy (KEYNOTE-564): TA830 (October 2022), within the licence. Adjuvant completely resected stage 2B or 2C melanoma from age 12 (KEYNOTE-716): TA837 (October 2022).", smc: "accepted" }),
  cdf("durvalumab", "durvalumab", 578, 2019, "Unresectable stage III NSCLC after chemoradiation (PACIFIC)", { note: "Moved to routine commissioning after the CDF period. Also extensive-stage SCLC with platinum-etoposide (TA798), and with tremelimumab in HCC (TA916). Perioperative treatment with FLOT then adjuvant durvalumab alone for resectable gastric or gastro-oesophageal junction adenocarcinoma: TA1160 (June 2026). Untreated advanced or recurrent mismatch repair deficient endometrial cancer with platinum chemotherapy then maintenance durvalumab: TA1190 (September 2026), with a 3-year stop; the maintenance combination with olaparib for mismatch repair proficient disease was not recommended in the same guidance. Limited-stage small cell lung cancer that has not progressed after platinum chemoradiotherapy (ADRIATIC): TA1099 (October 2025), within the licence.", smc: "accepted" }),

  // ================= ADCs =================

  // ================= Bispecifics and T-cell engagers =================

  // ================= Cell and gene therapies =================

  // ================= Breast =================
  rec("everolimus", "everolimus", 432, 2017, "Advanced renal cell carcinoma after previous treatment", { note: "Also HR-positive breast cancer with exemestane (TA421, 2016) and neuroendocrine tumours (TA449, 2017, with sunitinib).", smc: "accepted" }),
  rec("olaparib", "olaparib", 381, 2016, "Maintenance for relapsed platinum-sensitive BRCA-mutated ovarian cancer", { note: "First-line ovarian maintenance TA598 (2019, CDF); adjuvant BRCA-mutated HER2-negative early breast cancer TA886 (2023); BRCA-mutated mCRPC TA887 (2023). With abiraterone for untreated hormone-relapsed metastatic prostate cancer when docetaxel is unsuitable (PROpel): TA951 (February 2024), within the licence. Germline BRCA-mutated HER2-negative advanced breast cancer after anthracycline and taxane (OlympiAD): TA1040 (February 2025), within the licence. Previously treated BRCA-mutated hormone-relapsed metastatic prostate cancer was first appraised as TA831 (October 2022).", smc: "accepted" }),

  // ================= Lung =================

  // ================= Gastrointestinal and hepatobiliary =================
  rec("sorafenib", "sorafenib", 474, 2017, "Advanced HCC (Child-Pugh A)", { note: "Originally rejected (TA189, 2010) and funded via the old CDF; recommended after a price cut. Also differentiated thyroid cancer (TA535, 2018).", smc: "accepted" }),
  rec("cabozantinib", "cabozantinib", 463, 2017, "Advanced RCC after VEGF-targeted therapy", { note: "Untreated RCC: TA542 (2018). Advanced hepatocellular carcinoma after sorafenib, Child-Pugh A and good performance status only: TA849 (December 2022), with a commercial arrangement. With nivolumab for untreated RCC: TA964 (2024). Previously treated differentiated thyroid cancer unsuitable for or refractory to radioactive iodine: TA928 (November 2023), not recommended.", smc: "accepted" }),
  generic("docetaxel", "docetaxel", "Generic; TA101 (2006) recommended docetaxel for metastatic hormone-refractory prostate cancer and it is standard in breast, lung, gastric and head and neck regimens."),

  // ================= Genitourinary =================
  rec("abiraterone", "abiraterone", 259, 2012, "Metastatic castration-resistant prostate cancer after docetaxel", { note: "Before chemotherapy: TA387 (2016). Newly diagnosed high-risk hormone-sensitive disease (STAMPEDE/LATITUDE) was not recommended in TA721 (2021), but abiraterone went generic in 2022 and NHS England commissioned it for mHSPC via national policy.", smc: "accepted" }),
  rec("enzalutamide", "enzalutamide", 316, 2014, "Metastatic castration-resistant prostate cancer after docetaxel", { note: "Before chemotherapy: TA377 (2016). Hormone-sensitive metastatic disease: TA712 (2021). Non-metastatic CRPC: TA580 (2019). Non-metastatic prostate cancer after radical prostatectomy or radiotherapy: TA994 (August 2024), terminated appraisal.", smc: "accepted" }),
  rec("cabazitaxel", "cabazitaxel", 391, 2016, "Metastatic hormone-relapsed prostate cancer after docetaxel", { smc: "accepted" }),
  opt("radium-223", "radium-223 dichloride", 412, 2016, "Hormone-relapsed prostate cancer, symptomatic bone metastases and no known visceral metastases, only after docetaxel or where docetaxel is unsuitable", { smc: "accepted (restricted)", note: "TA412 recommends it as an option only with the discount agreed in the patient access scheme." }),
  notRec("pluvicto", "lutetium-177 vipivotide tetraxetan", 930, 2023, "PSMA-positive hormone-relapsed metastatic prostate cancer after 2 or more treatments (VISION)", { note: "TA930, published 15 November 2023, does not recommend it: the cost-effectiveness estimates were above the range NICE considers an acceptable use of NHS resources, and the committee also concluded it was not suitable for the Cancer Drugs Fund. A second evaluation, of use after an anti-androgen but before a taxane, was terminated on 16 July 2026 because the company made no evidence submission (TA1179). Individual funding requests and a resubmission remain possible." }),
  rec("sunitinib", "sunitinib", 169, 2009, "First-line advanced or metastatic RCC", { note: "GIST after imatinib: TA179 (2009). Pancreatic NETs: TA449 (2017). Generic since 2022.", smc: "accepted" }),

  // ================= Haematology: myeloma =================

  // ================= Haematology: lymphoma and CLL =================
  rec("rituximab", "rituximab", 65, 2003, "Aggressive (diffuse large B-cell) non-Hodgkin lymphoma with CHOP", { note: "Follicular lymphoma (TA110, TA137, TA226), CLL (TA174, TA193). Biosimilars since 2017 dominate NHS use. Subcutaneous form available.", smc: "accepted" }),

  // ================= Haematology: leukaemia and myeloid =================

  // ================= Sarcoma, bone, neuroendocrine, thyroid, CNS, rare =================
  opt("y-90-resin-microspheres", "SIR-Spheres yttrium-90 resin microspheres", 688, 2021, "Unresectable advanced hepatocellular carcinoma, Child-Pugh grade A, where conventional transarterial therapies are inappropriate", { note: "TA688 appraised the selective internal radiation therapies together and recommends SIR-Spheres as an option under a commercial arrangement; last updated 3 July 2024." }),
  opt("y-90-glass-microspheres", "TheraSphere yttrium-90 glass microspheres", 688, 2021, "Unresectable advanced hepatocellular carcinoma, Child-Pugh grade A, where conventional transarterial therapies are inappropriate", { note: "TA688 recommends TheraSphere as an option under a commercial arrangement; QuiremSpheres was appraised in the same guidance." }),
  rec("lutathera", "lutetium-177 dotatate", 539, 2018, "Unresectable or metastatic, progressive, well-differentiated somatostatin receptor-positive GEP-NETs", { smc: "accepted" }),
  generic("radioactive-iodine", "radioactive iodine (I-131)", "Standard of care for differentiated thyroid cancer for 80 years; delivered through NHS nuclear medicine departments (BTA guideline). No TA."),

  // ================= Vaccines, diagnostics and imaging agents =================
  row("ga68-psma-11", "gallium-68 PSMA-11 PET", "not appraised", undefined, undefined, "PSMA PET-CT for prostate cancer staging and recurrence", { note: "Radiopharmaceuticals are not appraised as TAs. PSMA PET-CT is commissioned by NHS England (clinical commissioning policy) for biochemical recurrence and high-risk staging, and is required to select patients for Pluvicto. Locametz and Illuccix are MHRA-licensed kits.", commissioned: true }),
  row("ga68-dotatate", "gallium-68 DOTATATE PET", "not appraised", undefined, undefined, "Somatostatin receptor PET for neuroendocrine tumours", { note: "Available at NHS PET centres and required before Lutathera (TA539). No TA.", commissioned: true }),
  notUk("pylarify", "piflufolastat F-18", "US product; UK PSMA PET uses gallium-68 PSMA-11 or F-18 PSMA-1007 supplied by NHS radiopharmacies."),
  notUk("flotufolastat", "flotufolastat F-18"),
  notUk("fluciclovine-f18", "fluciclovine F-18", "EU-licensed but not commissioned for routine NHS use; PSMA PET is preferred."),
  notUk("fluoroestradiol-f18", "fluoroestradiol F-18"),
  row("tilmanocept-tc99m", "technetium-99m tilmanocept", "not appraised", undefined, undefined, undefined, { note: "EU-licensed sentinel node tracer; NHS sentinel node biopsy mostly uses Tc-99m nanocolloid. No TA.", commissioned: false }),
];

export const coverageUk: Record<string, UkCoverage> = Object.fromEntries(list.map((c) => [c.drugId, c]));

/** Plain-English explainer of how NHS cancer care and drug funding work across the four nations. */
export const NHS_SYSTEM: Array<{ id: string; title: string; plain: string; detail: string; links: Array<{ label: string; url: string }> }> = [
  {
    id: "pathway",
    title: "How you get into cancer care: GP, urgent referral, and the waiting-time standards",
    plain: "Almost everyone starts with their GP. If the GP suspects cancer they make an urgent referral and you should hear within two weeks and be told whether you have cancer within 28 days. If you do, treatment should start within 62 days of the referral.",
    detail: "NICE guideline NG12 sets the symptom thresholds at which a GP must refer on the urgent suspected cancer pathway (roughly a 3% risk of cancer). In England the old 'two-week wait' target was replaced in October 2023 by three standards: the 28-day Faster Diagnosis Standard (told you have or do not have cancer within 28 days of referral or screening; target 75%, rising to 80% by March 2026), the 31-day standard (treatment within a month of the decision to treat; 96%), and the 62-day standard (first treatment within 62 days of urgent referral, screening or consultant upgrade; 85%). Performance is published monthly and many trusts miss the 62-day target, so ask your cancer nurse specialist where you are on the pathway. Scotland, Wales and Northern Ireland publish their own 31- and 62-day figures. Emergency presentations (via A&E) account for roughly a fifth of diagnoses and have worse outcomes.",
    links: [
      { label: "NICE NG12: suspected cancer recognition and referral", url: "https://www.nice.org.uk/guidance/ng12" },
      { label: "NHS England: Faster Diagnosis Standard (archived copy)", url: "https://web.archive.org/web/20251231165538/https://www.england.nhs.uk/cancer/faster-diagnosis/" },
      { label: "Indication waiting times statistics", url: "https://www.england.nhs.uk/statistics/statistical-work-areas/cancer-waiting-times/" },
      { label: "NHS: cancer overview and referral", url: "https://www.nhs.uk/conditions/cancer/" },
    ],
  },
  {
    id: "mdt",
    title: "Who decides your treatment: the multidisciplinary team, cancer alliances and specialist centres",
    plain: "Your case is discussed by a team of specialists (the MDT) who agree a recommended plan before it is put to you. Common indications are treated locally; rare indications, complex surgery and cell therapy are concentrated in a small number of specialist centres.",
    detail: "Every NHS cancer patient should have their diagnosis and plan reviewed at a weekly multidisciplinary team meeting (surgeon, oncologist, radiologist, pathologist, clinical nurse specialist and others) and be assigned a named key worker, usually a clinical nurse specialist. England's Indication Alliances (around 20) coordinate services across regions and run rapid diagnostic centres and the lung screening programme. Care is tiered: local trusts deliver most chemotherapy and radiotherapy; tertiary centres such as The Royal Marsden, The Christie, UCLH, Guy's, Leeds, Birmingham, Glasgow's Beatson, Cardiff's Velindre and Belfast City deliver specialised surgery, sarcoma, neuro-oncology, teenage and young adult and paediatric oncology. Ask your MDT whether your cancer type has a nationally designated centre; you can be referred anywhere in the NHS.",
    links: [
      { label: "NHS England: Indication Alliances", url: "https://www.england.nhs.uk/cancer/cancer-alliances-improving-care-locally/" },
      { label: "Macmillan: your multidisciplinary team", url: "https://www.macmillan.org.uk/cancer-information-and-support/treatment/preparing-for-treatment/your-multidisciplinary-team" },
      { label: "NHS England: national cancer programme", url: "https://www.england.nhs.uk/cancer/" },
    ],
  },
  {
    id: "nice",
    title: "NICE technology appraisals: how a drug gets funded, and the cost-per-QALY threshold",
    plain: "A new cancer drug is only routinely available on the NHS in England, Wales and Northern Ireland once NICE has appraised it and judged that its benefit is worth its price. If NICE says yes, the NHS must fund it within three months. Almost all recent yes decisions depend on a confidential discount.",
    detail: "NICE runs a single technology appraisal (TA) for each new medicine and indication, usually in parallel with licensing so guidance lands within a few months of MHRA approval. The company submits a cost-effectiveness model; an independent evidence review group critiques it; a committee decides. NICE normally accepts treatments below £20,000 per quality-adjusted life year (QALY) and needs strong justification between £20,000 and £30,000. Until 2022 an 'end-of-life' rule let drugs for people with under 24 months to live and a gain of 3+ months be accepted up to about £50,000 per QALY. The 2022 methods update replaced it with a severity modifier that weights QALYs by 1.2 or 1.7 for conditions with large absolute and proportional health loss; this catches most advanced indications but not all, which is why some drugs for earlier-stage or HER2-low disease have been rejected. Outcomes are: recommended; recommended with optimisation (a narrower population, a stopping rule, or a Patient Access Scheme discount); recommended for the Indication Drugs Fund; or not recommended. NHS England must fund positive TAs within 90 days. Wales and Northern Ireland adopt NICE TAs; Scotland uses the SMC instead.",
    links: [
      { label: "NICE technology appraisal guidance list", url: "https://www.nice.org.uk/guidance/published?ngt=Technology%20appraisal%20guidance" },
      { label: "NICE health technology evaluations manual (PMG36)", url: "https://www.nice.org.uk/process/pmg36" },
      { label: "NICE: technology appraisal guidance explained", url: "https://www.nice.org.uk/about/what-we-do/our-programmes/nice-guidance/nice-technology-appraisal-guidance" },
    ],
  },
  {
    id: "cdf",
    title: "The Indication Drugs Fund and managed access",
    plain: "When NICE thinks a cancer drug is promising but the evidence is not yet good enough to say yes, it can be funded from the Indication Drugs Fund for about two years while more data are collected, then re-decided. Patients get it straight away; the company carries the financial risk.",
    detail: "The original CDF (2010-2016) paid for drugs NICE had rejected and overspent badly. Since July 2016 it has been a managed access fund run jointly by NICE and NHS England with a fixed budget (£340 million a year). A drug enters the CDF when NICE judges it has plausible potential to be cost-effective but material uncertainty; a managed access agreement sets the data to be collected (often from SACT, the national chemotherapy dataset, plus the ongoing trial) and a confidential price. Interim funding from the CDF starts from the point of positive draft guidance, so CDF drugs are often available in England before anywhere else in Europe. At the end of the period NICE reappraises and either moves the drug to routine commissioning or, occasionally, withdraws it for new patients (existing patients continue). Well over a hundred drug-indication pairs have passed through, including CAR-T therapies, osimertinib, durvalumab and pembrolizumab combinations. The live CDF list is published by NHS England and updated monthly.",
    links: [
      { label: "NHS England: Indication Drugs Fund", url: "https://www.england.nhs.uk/cancer/cdf/" },
      { label: "Current CDF list (updated monthly)", url: CDF_LIST_URL },
      { label: "NICE: managed access", url: "https://www.nice.org.uk/about/what-we-do/our-programmes/managed-access" },
    ],
  },
  {
    id: "imf",
    title: "The Innovative Medicines Fund",
    plain: "The Innovative Medicines Fund does for non-cancer medicines what the Indication Drugs Fund does for indication: it pays for promising treatments while evidence is collected. Some supportive treatments and rare-disease therapies relevant to cancer patients come through it.",
    detail: "Launched in June 2022 with £340 million a year, matching the CDF, the IMF extends managed access to any medicine NICE cannot yet recommend routinely, including gene therapies and treatments for rare inherited cancer syndromes or complications such as graft-versus-host disease. Together the two funds give NHS England a £680 million managed access envelope. The IMF uses the same interim funding mechanism from positive draft guidance and the same data-collection agreements. Patient charities have pressed for the two funds to be merged and for the managed access period to be more flexible.",
    links: [
      { label: "NHS England: Innovative Medicines Fund", url: "https://www.england.nhs.uk/medicines-2/innovative-medicines-fund/" },
    ],
  },
  {
    id: "specialised",
    title: "Specialised commissioning: CAR-T centres, proton beam therapy, stereotactic radiosurgery",
    plain: "The most complex treatments are paid for and planned nationally rather than locally, and delivered at a handful of accredited hospitals. If you need CAR-T, protons or radiosurgery you may travel, but the NHS funds it.",
    detail: "NHS England directly commissions around 150 specialised services. CAR-T cell therapy is delivered at JACIE-accredited centres (roughly 15 adult and 3 paediatric, including UCLH, King's, The Christie, Manchester Royal Infirmary, Birmingham, Bristol, Leeds, Newcastle, Glasgow, Cardiff and Great Ormond Street) after a national CAR-T clinical panel confirms eligibility; the drug cost sits with NICE-approved TAs and the CDF. High-energy proton beam therapy opened at The Christie (Manchester, 2018) and UCLH (London, 2021); indications are mainly paediatric and young adult tumours, base-of-skull chordoma and selected head and neck and spinal tumours, decided by a national proton panel, with overseas referral no longer routine. Stereotactic radiosurgery and stereotactic ablative radiotherapy (SABR) are commissioned at designated centres for brain metastases, vestibular schwannoma, early lung cancer and oligometastatic disease under national clinical commissioning policies. Blood and marrow transplantation, sarcoma surgery, hepatobiliary and oesophago-gastric surgery, teenage and young adult cancer and paediatric oncology are also nationally commissioned.",
    links: [
      { label: "NHS England: specialised services", url: "https://www.england.nhs.uk/commissioning/spec-services/" },
      { label: "NHS England: CAR-T therapy", url: "https://www.england.nhs.uk/cancer/cdf/car-t-therapy/" },
      { label: "NHS England: proton beam therapy", url: "https://www.england.nhs.uk/commissioning/spec-services/highly-spec-services/pbt/" },
      { label: "NHS England clinical commissioning policies", url: "https://www.england.nhs.uk/publication/?filter-category=clinical-commissioning-policies" },
    ],
  },
  {
    id: "scotland",
    title: "Scotland: the SMC, the New Medicines Fund and PACS",
    plain: "Scotland does not use NICE for new medicines. The Scottish Medicines Consortium decides, usually within months of licensing, and a New Medicines Fund covers the cost of end-of-life and rare-disease drugs. If a drug has been turned down, your consultant can still ask for it for you through PACS Tier 2.",
    detail: "The Scottish Medicines Consortium (SMC) appraises every new medicine for NHS Scotland; its decisions are 'accepted', 'accepted for restricted use' or 'not recommended', and health boards must make accepted medicines available. Since 2014 the Patient and Clinician Engagement (PACE) process gives extra weight to end-of-life and orphan medicines, and an ultra-orphan pathway allows three years of data collection. The New Medicines Fund (funded from pharmaceutical rebates) reimburses health boards for these medicines. Where SMC has not accepted a medicine, a clinician can apply under the Peer Approved Clinical System: PACS Tier 1 for ultra-orphan drugs and PACS Tier 2 (which replaced Individual Patient Treatment Requests in 2018) for any drug the SMC has rejected or not appraised. Scottish cancer waiting times use a 31-day and 62-day standard; the three regional cancer networks are NCA, SCAN and WoSCAN.",
    links: [
      { label: "Scottish Medicines Consortium: medicines advice", url: "https://scottishmedicines.org.uk/medicines-advice/" },
      { label: "Scottish Government: NHS medicines policy", url: "https://www.gov.scot/policies/nhs-medicines/" },
      { label: "PACS Tier 2 guidance", url: "https://www.gov.scot/publications/peer-approved-clinical-system-tier-two/" },
    ],
  },
  {
    id: "wales-ni",
    title: "Wales and Northern Ireland: AWTTC, One Wales and the New Treatment Fund; NI adoption of NICE",
    plain: "Wales and Northern Ireland follow NICE decisions, with their own rules on top. Wales has a fund that guarantees access within two months of a yes, and a One Wales route for medicines NICE has not looked at. Northern Ireland adopts NICE guidance a little later and runs its own individual funding requests.",
    detail: "In Wales, NICE TAs apply and the New Treatment Fund (since 2017) requires health boards to make newly recommended medicines available within 60 days. The All Wales Therapeutics and Toxicology Centre (AWTTC) supports the All Wales Medicines Strategy Group (AWMSG), which appraises medicines NICE does not intend to cover and runs the One Wales process for a consistent national position on unlicensed or non-appraised medicines, replacing seven different individual patient funding request policies. Velindre Cancer Centre (Cardiff) and the South West Wales and North Wales cancer centres deliver care, with Welsh patients travelling to English centres for CAR-T and protons. In Northern Ireland the Department of Health endorses NICE TAs (usually within weeks) and the Health and Social Care system funds them; regional cancer services are centred on Belfast City Hospital's Cancer Centre and the North West Cancer Centre at Altnagelvin, and an Individual Funding Request process covers non-approved treatments. NI cancer waiting-time performance has been the weakest in the UK.",
    links: [
      { label: "All Wales Therapeutics and Toxicology Centre", url: "https://awttc.nhs.wales/" },
      { label: "Welsh Government: New Treatment Fund", url: "https://www.gov.wales/new-treatment-fund" },
      { label: "Department of Health NI: NICE guidance endorsement", url: "https://www.health-ni.gov.uk/topics/safety-and-quality-standards/nice-guidance" },
    ],
  },
  {
    id: "screening",
    title: "Screening programmes: breast, bowel, cervical and lung",
    plain: "The NHS invites healthy people for four cancer screens: mammograms for women 50 to 71, a stool test for bowel cancer from 50, cervical screening for women 25 to 64, and low-dose CT lung checks for current and former smokers aged 55 to 74. You do not need a GP referral; invitations are automatic if you are registered with a GP.",
    detail: "Breast screening: three-yearly mammography for women 50-70 (invited up to 71; older women can self-refer); AI-assisted reading is being trialled (EDITH). Bowel screening: the faecal immunochemical test (FIT) every two years, extended in England from 60-74 down to 50-74 by 2025; a positive FIT leads to colonoscopy. Scotland has offered FIT from 50 since 2017; Wales and Northern Ireland are lowering to 50. Cervical screening: primary HPV testing, every three years at 25-49 and every five years at 50-64; England moved to five-yearly for HPV-negative women in July 2025 (Scotland and Wales already had), and HPV self-sampling is being introduced for under-screened women. Lung: the Targeted Lung Health Check programme (low-dose CT for people aged 55-74 who smoke or used to, identified via GP records) is being rolled out across England as the national NHS Lung Indication Screening Programme, with full coverage planned by 2029; it has raised the share of lung indications found at stage I-II to roughly three-quarters in screened areas. There is no national prostate screening; the UK National Screening Committee is reviewing PSA-based and risk-stratified screening (TRANSFORM trial) and has recommended a targeted programme for men with BRCA variants.",
    links: [
      { label: "NHS screening overview", url: "https://www.nhs.uk/conditions/nhs-screening/" },
      { label: "Breast screening", url: "https://www.nhs.uk/conditions/breast-screening-mammogram/" },
      { label: "Bowel cancer screening", url: "https://www.nhs.uk/conditions/bowel-cancer-screening/" },
      { label: "Cervical screening", url: "https://www.nhs.uk/conditions/cervical-screening/" },
      { label: "Lung cancer screening (Targeted Lung Health Checks)", url: "https://www.nhs.uk/conditions/lung-health-checks/" },
      { label: "UK National Screening Committee recommendations", url: "https://view-health-screening-recommendations.service.gov.uk/" },
    ],
  },
  {
    id: "genomics",
    title: "Genomic testing: the NHS Genomic Medicine Service and the National Genomic Test Directory",
    plain: "If your cancer is one where a gene test changes treatment, the NHS tests for it as standard through seven regional genomic laboratories. The list of what is tested for which cancer is public, so you can check whether your tumour should have been profiled.",
    detail: "The NHS Genomic Medicine Service (launched 2018, the first national system of its kind) delivers tumour and germline testing through seven Genomic Laboratory Hubs in England, with equivalent services in Scotland, Wales (All Wales Medical Genomics Service) and Northern Ireland. The National Genomic Test Directory, updated annually, lists every funded test by cancer type: small and large panels for solid tumours; fusion panels for lung and sarcoma; whole genome sequencing for sarcoma, paediatric indications, acute leukaemias and some CNS tumours; germline BRCA and Lynch testing with eligibility criteria; and pharmacogenomic tests such as DPYD before fluoropyrimidines. Turnaround targets are 14 to 21 days for panels. Liquid biopsy (ctDNA) for lung cancer mutations was added in 2024-25 after a national pilot. Ask your team which tests were requested and whether your tumour meets the criteria for a large panel or WGS; a companion diagnostic named in a NICE TA (e.g. HER2, PD-L1, FRα, CLDN18.2) must be available where the drug is.",
    links: [
      { label: "NHS Genomic Medicine Service", url: "https://www.england.nhs.uk/genomics/nhs-genomic-med-service/" },
      { label: "National Genomic Test Directory", url: "https://www.england.nhs.uk/publication/national-genomic-test-directories/" },
      { label: "Genomics England", url: "https://www.genomicsengland.co.uk/" },
    ],
  },
  {
    id: "trials",
    title: "Clinical trials: NIHR, Be Part of Research, and how to ask",
    plain: "Around one in eight NHS cancer patients joins a clinical trial. You can search for trials yourself and ask your oncologist to refer you to the trial site, which may be a different hospital. Trials give free access to drugs the NHS does not yet fund.",
    detail: "The National Institute for Health and Care Research (NIHR) funds the research infrastructure in every NHS trust in England, with parallel bodies in Scotland (NHS Research Scotland), Wales (Health and Care Research Wales) and Northern Ireland. The NIHR Be Part of Research service and Cancer Research UK's trial finder both list open UK cancer trials by cancer type and location. Experimental Indication Medicine Centres (ECMCs, 17 adult and a paediatric network) run early-phase trials of new drugs. Your oncologist can refer you to any UK trial site; travel costs may be reimbursed by the trial. Ask specifically whether a trial is open for your cancer at your line of treatment, and whether a molecular profiling study (e.g. DETERMINE for rare indications, or TARGET National) could open drug-matched options. Compassionate access outside trials is via the MHRA's Early Access to Medicines Scheme (EAMS) or company-funded named-patient programmes.",
    links: [
      { label: "NIHR Be Part of Research", url: "https://bepartofresearch.nihr.ac.uk/" },
      { label: "Cancer Research UK trial finder", url: "https://www.cancerresearchuk.org/about-cancer/find-a-clinical-trial" },
      { label: "Experimental Indication Medicine Centres", url: "https://www.ecmcnetwork.org.uk/" },
      { label: "MHRA Early Access to Medicines Scheme", url: "https://www.gov.uk/guidance/apply-for-the-early-access-to-medicines-scheme-eams" },
    ],
  },
  {
    id: "private",
    title: "Private and self-funded treatment, and how it fits with NHS care",
    plain: "You can pay privately for a drug the NHS will not fund and still receive the rest of your care on the NHS. The private drug must be given separately, but you cannot be removed from NHS care for paying for something extra. Many private hospitals host NHS consultants and can run trials too.",
    detail: "Since the 2009 Richards review, NHS patients in England may pay for additional private drugs ('top-ups') without losing NHS entitlement, provided the private element is delivered separately (different appointment or setting) so that NHS resources do not subsidise it. Private medical insurance typically covers licensed cancer drugs regardless of NICE status, subject to policy limits, and a growing share of new drugs are first used in the UK in the private sector. Self-funding costs are high: a year of a modern immunotherapy or ADC at list price is often £50,000 to £150,000, though some companies offer patient access schemes. Private hospital groups offer proton therapy, tumour treating fields and drugs NICE has rejected. A private consultation for a second opinion or a specific test can be followed by an NHS referral back; NHS consultants will accept privately obtained scans and genomics. Discuss any private element with your NHS team so records stay complete and drug interactions are managed.",
    links: [
      { label: "Guidance on NHS patients who wish to pay for additional private care", url: "https://www.gov.uk/government/publications/guidance-on-nhs-patients-who-wish-to-pay-for-additional-private-care" },
      { label: "Macmillan: private treatment", url: "https://www.macmillan.org.uk/cancer-information-and-support/treatment/getting-treatment/private-treatment" },
    ],
  },
  {
    id: "prescriptions",
    title: "Free prescriptions and help with NHS costs",
    plain: "If you have cancer in England you can get all your NHS prescriptions free, not only cancer drugs, with a medical exemption certificate your GP or oncologist signs. Prescriptions are already free for everyone in Scotland, Wales and Northern Ireland. Hospital-administered cancer drugs are always free.",
    detail: "Since April 2009 people undergoing treatment for cancer, the effects of cancer, or the effects of cancer treatment are entitled to a five-year medical exemption certificate (form FP92A, signed by a GP or hospital doctor) that covers all NHS prescriptions in England. The certificate can be renewed while any of those conditions applies. Wigs and fabric supports are free on the NHS in Wales and Scotland and on low income in England; dental treatment and sight tests may be free on income grounds. Hospital car parking must be free for frequent outpatient attenders including cancer patients in England (since 2020), and is free in Wales and Scotland. Travel to hospital may be reimbursed under the Healthcare Travel Costs Scheme if you receive qualifying benefits, and some Indication Alliances and charities run transport services.",
    links: [
      { label: "NHS: free prescriptions and medical exemption certificates", url: "https://www.nhs.uk/nhs-services/prescriptions/free-nhs-prescriptions/" },
      { label: "Healthcare Travel Costs Scheme", url: "https://www.nhs.uk/nhs-services/help-with-health-costs/healthcare-travel-costs-scheme-htcs/" },
      { label: "Macmillan: help with health costs", url: "https://www.macmillan.org.uk/cancer-information-and-support/get-help/financial-help" },
    ],
  },
  {
    id: "benefits",
    title: "Money: PIP, Universal Credit, sick pay, Macmillan grants and the special rules for terminal illness",
    plain: "Indication usually costs money: lost income, travel, heating. You may be able to claim Personal Independence Payment (or Attendance Allowance over state pension age), get faster and higher payments under the special rules if a clinician says you may have less than 12 months, and receive one-off grants from Macmillan and other charities.",
    detail: "Personal Independence Payment (PIP; Adult Disability Payment in Scotland) is not means-tested and pays roughly £70 to £190 a week depending on how cancer or its treatment affects daily living and mobility. If a clinician completes an SR1 form stating you may have 12 months or less to live, claims for PIP, Universal Credit, Employment and Support Allowance and Attendance Allowance are fast-tracked, paid at the highest rate and not subject to a face-to-face assessment. Employees are entitled to Statutory Sick Pay for up to 28 weeks, and cancer counts as a disability under the Equality Act from diagnosis, giving rights to reasonable adjustments and protection from dismissal. Macmillan grants (typically a few hundred pounds) help with heating, clothing and travel; Macmillan's welfare rights advisers and Citizens Advice can complete benefit forms with you. Carers may claim Carer's Allowance. Young people have specific support through Teenage Indication Trust and Young Lives vs Indication, which pays a registration grant.",
    links: [
      { label: "GOV.UK: Personal Independence Payment", url: "https://www.gov.uk/pip" },
      { label: "GOV.UK: special rules for end of life (SR1)", url: "https://www.gov.uk/government/publications/dwp-factual-medical-reports-guidance-for-healthcare-professionals/special-rules-for-end-of-life" },
      { label: "Macmillan grants", url: "https://www.macmillan.org.uk/cancer-information-and-support/get-help/financial-help/macmillan-grants" },
      { label: "Macmillan: benefits and financial support", url: "https://www.macmillan.org.uk/cancer-information-and-support/get-help/financial-help/benefits" },
    ],
  },
  {
    id: "palliative",
    title: "Palliative care and hospices",
    plain: "Palliative care is symptom control and support at any stage of cancer, not only at the end of life, and you can have it alongside active treatment. Hospice care is free, mostly charity-run with part NHS funding, and includes home visits, day services and inpatient stays.",
    detail: "Every NHS cancer centre has a specialist palliative care team (consultants in palliative medicine, nurses, sometimes pharmacists and social workers) who can be involved from diagnosis for pain, breathlessness, nausea and psychological distress; early palliative care improves quality of life and in some trials survival. Community palliative care is delivered by district nurses, GPs, Marie Curie nurses and hospice-at-home teams. The UK's 200-plus hospices are mostly charities receiving roughly a third of their funding from the NHS; care is free to patients. Advance care planning (ReSPECT forms, lasting power of attorney, preferred place of care) is offered and recorded on shared records. Fast-track NHS Continuing Healthcare funding covers a package of care at home or in a care home when someone is rapidly deteriorating. Children's palliative care is coordinated through Together for Short Lives.",
    links: [
      { label: "NHS: end of life care", url: "https://www.nhs.uk/conditions/end-of-life-care/" },
      { label: "Hospice UK: find a hospice", url: "https://www.hospiceuk.org/" },
      { label: "Marie Curie", url: "https://www.mariecurie.org.uk/" },
      { label: "NICE NG142: end of life care for adults", url: "https://www.nice.org.uk/guidance/ng142" },
    ],
  },
  {
    id: "second-opinion",
    title: "Second opinions and choosing where to be treated",
    plain: "You can ask for a second opinion within the NHS and you can ask to be treated at a different hospital, including a specialist centre. There is no legal right to a second opinion, but it is rarely refused, and your own consultant or GP can arrange it.",
    detail: "Under the NHS Constitution you have a right to choose the provider for your first outpatient appointment after GP referral, and once in cancer care your MDT can refer you to any NHS specialist centre for an opinion or treatment. A second opinion is usually arranged by your consultant or GP with a copy of your notes and imaging; specialist centres such as The Royal Marsden and The Christie receive many. For rare indications, ask whether your case has been discussed at a national or supra-regional MDT (e.g. sarcoma, neuro-oncology, ocular melanoma, thymic tumours). Patients sometimes seek a private second opinion for speed and then continue on the NHS. If you feel you have been refused reasonable care, the Patient Advice and Liaison Service (PALS) at each trust and Macmillan's support line can help you make the request.",
    links: [
      { label: "NHS: how to get a second opinion", url: "https://www.nhs.uk/nhs-services/gps/how-to-get-a-second-opinion/" },
      { label: "NHS Constitution for England", url: "https://www.gov.uk/government/publications/the-nhs-constitution-for-england" },
      { label: "Macmillan: getting a second opinion", url: "https://www.macmillan.org.uk/cancer-information-and-support/treatment/preparing-for-treatment/getting-a-second-opinion" },
    ],
  },
  {
    id: "help",
    title: "Where to get help now: Macmillan, Cancer Research UK nurses, Maggie's",
    plain: "Three free services answer questions and support anyone affected by cancer in the UK: Macmillan's support line (0808 808 00 00, 8am to 8pm every day), Cancer Research UK's nurse helpline (0808 800 4040, weekdays), and Maggie's centres next to major cancer hospitals where you can walk in without an appointment.",
    detail: "Macmillan Cancer Support runs the largest network: a support line staffed by nurses, welfare rights advisers, financial guides and work-support specialists; an online community; Macmillan nurses and information centres in most cancer hospitals; and grants. Cancer Research UK's nurse helpline answers questions about diagnosis, treatment, trials and evidence, and its Indication Chat forum is moderated by nurses. Maggie's has more than 20 walk-in centres at major UK cancer hospitals offering psychological support, benefits advice, exercise and relaxation classes and a kitchen table, plus online support. Cancer-specific charities (Breast Cancer Now, Prostate Indication UK, Bowel Indication UK, Roy Castle Lung Cancer Foundation, Blood Indication UK, Myeloma UK, Pancreatic Indication UK, The Brain Tumour Charity, Sarcoma UK, Teenage Indication Trust and many others) run helplines with specialist nurses. Mental health support is available via NHS Talking Therapies and, in many centres, clinical psychology within the cancer service.",
    links: [
      { label: "Macmillan Cancer Support", url: "https://www.macmillan.org.uk/" },
      { label: "Cancer Research UK: nurse helpline and Indication Chat", url: "https://www.cancerresearchuk.org/about-cancer/cancer-chat" },
      { label: "Maggie's centres", url: "https://www.maggies.org/" },
    ],
  },
];
