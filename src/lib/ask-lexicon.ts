/**
 * Hand-curated aliases for Ask Nuclide entity resolution: the ways people actually write a record's name in a
 * question that the record's own `name`, `aka`, `brand` and `code` fields do not cover ("lutetium PSMA" for
 * pluvicto, "Keytruda" for pembrolizumab, "CT scan" for ct). Keys are record ids; a vitest checks that every
 * id exists. Matching is case-insensitive and hyphen/space tolerant (see ask-index.ts), so one spelling of
 * each variant is enough. Pure data, browser-safe.
 */
export const ASK_ALIASES: Record<string, string[]> = {
  "breast-her2-positive": ["HER2-positive breast cancer", "HER2+ breast cancer", "HER2-positive"],
  sclc: ["SCLC", "small-cell lung cancer", "small cell lung cancer"],
  prostate: ["mCRPC", "castration-resistant prostate cancer", "mHSPC", "advanced prostate cancer"],
  hcc: ["HCC", "liver cancer", "hepatocellular carcinoma"],
  rcc: ["RCC", "kidney cancer", "renal cell carcinoma", "renal cancer"],
  glioblastoma: ["GBM", "glioblastoma", "glioma", "gliomas", "brain tumour", "brain tumor", "brain cancer"],
  dlbcl: ["DLBCL", "large B-cell lymphoma", "diffuse large B-cell lymphoma", "LBCL"],
  "follicular-lymphoma": ["follicular lymphoma"],
  thyroid: ["thyroid cancer"],
  neuroblastoma: ["neuroblastoma"],
  neuroendocrine: ["neuroendocrine tumour", "neuroendocrine tumours", "neuroendocrine tumor", "neuroendocrine tumors", "NET", "NETs"],
  ct: ["CT scan", "CT scans", "computed tomography", "CAT scan"],
  pet: ["PET scan", "PET scans", "positron emission tomography"],
  "fdg-pet": ["FDG PET", "FDG-PET", "FDG scan", "FDG"],
  "fapi-pet": ["FAPI PET", "FAPI-PET", "FAPI PET scan", "FAPI"],
  "trop2-pet": ["TROP2 PET", "TROP2 PET scan", "TROP2 PET tracer"],
  "psma-pet": ["PSMA PET scan", "PSMA-PET"],
  "radioligand-therapy": ["radioligand therapy", "radioligand", "radioligands", "radiopharmaceutical therapy", "lutetium therapy", "PSMA radioligand", "radiopharmaceuticals"],
  pembrolizumab: ["Keytruda", "pembro"],
  durvalumab: ["Imfinzi"],
  olaparib: ["Lynparza"],
  pluvicto: ["Pluvicto", "lutetium PSMA", "Lu-PSMA", "177Lu-PSMA-617", "lutetium-177 PSMA", "Lu-177 PSMA", "PSMA-617", "lutetium PSMA-617"],
  lutathera: ["Lutathera", "lutetium dotatate", "177Lu-DOTATATE"],
  her2: ["HER2", "ERBB2", "HER-2", "HER2-positive tumours"],
  trop2: ["TROP2", "TROP-2", "Trop-2"],
  psma: ["PSMA"],
  cd20: ["CD20"],
  dll3: ["DLL3"],
  nectin4: ["Nectin-4", "nectin4"],
  theranostics: ["theranostic"],
  mskcc: ["MSK", "MSKCC", "Memorial Sloan Kettering", "Sloan Kettering"],
  "md-anderson": ["MD Anderson", "M.D. Anderson"],
  "dana-farber": ["Dana-Farber", "Dana Farber"],
  "royal-marsden": ["Royal Marsden"],
  merck: ["Merck", "MSD", "Merck & Co"],
  bms: ["BMS", "Bristol Myers Squibb", "Bristol-Myers Squibb", "Bristol Myers"],
  pfizer: ["Pfizer", "Seagen"],
  astrazeneca: ["AstraZeneca", "Astra Zeneca"],
  "eli-lilly": ["Lilly", "Eli Lilly"],
  "johnson-johnson": ["J&J", "Johnson & Johnson", "Janssen"],
  novartis: ["Novartis"],
  nci: ["NCI", "National Cancer Institute"],
  "clinicaltrials-gov": ["ClinicalTrials.gov", "clinicaltrials gov"],
  "lancet-oncology": ["Lancet Oncology"],
  lancet: ["Lancet"],
  nejm: ["New England Journal"],
  jco: ["Journal of Clinical Oncology"],
  "radiopharma-roadmap": ["radiopharmaceutical roadmap", "radiopharma roadmap", "radioligand roadmap"],
  "molecular-imaging-roadmap": ["imaging roadmap", "molecular imaging roadmap"],
};

/**
 * Ordinary words that are also record names or aliases. Never used as entity anchors in a question,
 * whatever the kind (cf. STOP in term-hover.tsx).
 */
export const ASK_STOP = new Set([
  "indication", "indications", "cancer", "cancers", "cell", "cells", "blood", "brain", "skin", "bone", "liver", "lung", "breast", "colon", "the", "and", "for", "with",
  "breast cancer", "breast indications", "solid tumours", "solid tumors", "tumour", "tumor", "tumours", "tumors", "patients", "patient", "oncology", "cancer care",
  "uk", "eu", "us", "usa", "united kingdom", "european union", "america", "europe", "australia", "germany", "france", "india", "korea", "canada",
  "science", "nature", "cell press", "target", "targets", "trial", "trials", "study", "group", "center", "centre", "institute", "hospital",
  "university", "foundation", "society", "china", "japan", "europe", "united states", "other", "protein", "gene", "genes", "dose",
  "stage", "grade", "cure", "cost", "price", "net", "nets", "her", "therap", "phikon", "gears", "hibou", "musk", "chief",
]);

/**
 * Record names that are also ordinary words (mostly trial acronyms and regulators). They resolve only when the
 * question writes them in capitals ("VISION", "FDA") or follows them with "trial" or "study" ("the Vision trial").
 */
export const ASK_CASE_SENSITIVE = new Set([
  "vision", "destiny", "ascent", "monarch", "paradigm", "checkmate", "keynote", "impassion", "javelin", "pacific", "aurora", "orbit",
  "spotlight", "clear", "match", "action", "crown", "emerald", "prima", "solo", "select", "reflect", "compete", "motion", "atlas", "voyager",
  "insight", "convert", "columbus", "bond", "fires", "hilo", "glow", "sano", "splash", "amplify", "tower", "sunrise", "sunlight", "cabinet",
  "harmoni", "dream", "libretto", "magnitude", "belinda", "indigo", "pluto", "merlin", "midnight", "mirai", "flash", "sting", "ras", "ev",
  "io", "ici", "all", "protect", "embark", "arches", "latitude", "profound", "propel", "resonate", "sequoia", "stellar", "transform",
  "felix", "captivate", "alpine", "astra", "cross", "defi", "extreme", "frontmind", "invictus", "maps", "mirasol", "outback", "persephone",
  "perseus", "polo", "rainbow", "ruby", "sharp", "stampede", "thor", "vital", "whel", "lidera", "liger", "rathl", "gemelli", "candiolo",
  "big", "pumch", "smc", "sheba", "hcg", "falp", "arc", "fda", "ema", "nice", "tga", "pbac", "mhra", "pmda", "nci", "net", "mcl", "who", "has", "arc", "indication", "aims", "gog", "big", "cog", "trog", "ion", "ash", "asco", "esmo", "sso", "eha", "ecco", "estro", "astro", "snmmi",
  // investors, fronts and codes that are also words or short tokens
  "yc", "gv", "ai", "arch", "lux", "flagship", "polaris", "versant", "perceptive", "mpm", "s32", "lls", "psk", "cbt", "tcm", "thc", "cbd", "keto", "detox", "b17", "tmh", "race act",
]);
