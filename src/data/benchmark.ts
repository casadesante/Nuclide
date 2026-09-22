/**
 * The Nuclide open benchmark: questions a patient, carer, clinician, or analyst might ask.
 *
 * Fork note: OnCo published 100 questions here, almost all of them about cancer drugs and oncology
 * practice. This fork kept only the questions whose answers and record ids are true of a
 * radiopharmaceutical corpus, and deleted the rest rather than rewording them — a rubric that no longer
 * matches the records behind it measures nothing. Writing a full radiopharmaceutical question set
 * (imaging protocols, dosimetry, isotope supply, theranostic pairs, regulation) is open work; see
 * docs/FORK-NOTES.md.
 *
 * Each question has an expected answer grounded in the corpus (with the entity ids that carry it)
 * and a rubric: 3-5 must-mention points, each expressed as a list of accepted phrases. A system's
 * free-text answer scores one point per rubric item for which at least one phrase appears
 * (case-insensitive substring), normalised to 0-1. The same rubric scores Nuclide itself
 * (scripts/benchmark-run.ts, retrieval proxy) and any external system (scripts/benchmark-score.ts).
 *
 * Categories: factual (a checkable fact), procedural (what to do / ask), reasoning (why / trade-off).
 * Difficulty: 1 easy, 2 medium, 3 hard. Answers reflect the corpus as of September 2026.
 */
export type Category = "factual" | "procedural" | "reasoning";
export type Question = {
  id: string;
  question: string;
  category: Category;
  difficulty: 1 | 2 | 3;
  audience: "patient" | "clinician" | "analyst";
  expected: string;
  /** Entity ids that carry the answer. */
  entities: string[];
  /** Each rubric point: accepted phrases (any one satisfies the point). */
  rubric: string[][];
};

export type Scored = {
  id: string; category: Category; difficulty: number; score: number; met: number; total: number; missed: string[];
  retrievedEntities?: string[]; retrievalRecall?: number; answer?: string;
};

/** Score a free-text answer against a question's rubric. */
export function scoreAnswer(q: Question, answer: string): Scored {
  const text = (answer ?? "").toLowerCase();
  const missed: string[] = [];
  let met = 0;
  for (const point of q.rubric) {
    if (point.some((p) => text.includes(p.toLowerCase()))) met++;
    else missed.push(point[0]);
  }
  return { id: q.id, category: q.category, difficulty: q.difficulty, score: q.rubric.length ? met / q.rubric.length : 0, met, total: q.rubric.length, missed };
}

const Q = (id: string, question: string, category: Category, difficulty: 1 | 2 | 3, audience: Question["audience"], expected: string, entities: string[], rubric: string[][]): Question => ({ id, question, category, difficulty, audience, expected, entities, rubric });

export const benchmark: Question[] = [
  // ---------------- TNBC and breast ----------------

  // ---------------- Lung ----------------

  // ---------------- Prostate and GU ----------------
  Q("prostate-23", "What is theranostics and what is the best-known example?", "factual", 1, "patient",
    "Using the same targeting molecule for a diagnostic scan and a treatment: PSMA PET shows where prostate cancer is, and 177Lu-PSMA-617 (Pluvicto) delivers radiation to the same target.",
    ["theranostics", "psma-pet", "pluvicto", "psma"],
    [["same", "pair", "diagnos"], ["psma"], ["pet", "scan", "imag"], ["pluvicto", "lutetium", "177lu", "radioligand"]]),
  Q("prostate-24", "What did the VISION trial show?", "factual", 2, "clinician",
    "177Lu-PSMA-617 plus standard care improved overall survival (15.3 vs 11.3 months, HR 0.62) in PSMA-positive metastatic castration-resistant prostate cancer after ARPI and taxane.",
    ["vision", "pluvicto"],
    [["pluvicto", "177lu", "lutetium", "psma-617"], ["overall survival", "os", "15.3", "11.3"], ["castration-resistant", "mcrpc"], ["0.62"]]),
  Q("prostate-25", "Why might an alpha-emitting PSMA drug work after lutetium PSMA has stopped working?", "reasoning", 3, "clinician",
    "Alpha particles (actinium-225) deposit far more energy over 50-100 µm, causing clustered double-strand breaks independent of oxygen and cell cycle, so beta-resistant, hypoxic, or small-volume disease can still be killed; retrospective series show PSA responses in about half after 177Lu failure. Supply of Ac-225 and salivary toxicity are the limits.",
    ["beta-then-alpha", "targeted-alpha-therapy", "ac225-psma", "alpha-vs-beta"],
    [["alpha"], ["actinium", "225ac", "ac-225"], ["double-strand", "energy", "let", "clustered"], ["supply", "salivary", "xerostomia", "toxicity"]]),

  // ---------------- GI ----------------

  // ---------------- Melanoma / immunotherapy ----------------

  // ---------------- Haematology ----------------

  // ---------------- Imaging and diagnostics ----------------
  Q("img-48", "What is the difference between a CT scan and a PET scan?", "factual", 1, "patient",
    "CT is a fast 3D X-ray showing size and shape; PET shows biology by tracking where a radioactive tracer accumulates (for example glucose uptake with FDG or a specific protein such as PSMA). PET/CT combines both.",
    ["ct", "pet", "pet-ct", "fdg-pet"],
    [["x-ray", "anatom", "shape", "size"], ["tracer", "radioactive", "biolog", "metabol"], ["glucose", "fdg", "psma"], ["pet/ct", "combine", "both"]]),
  Q("img-49", "What does a FAPI PET scan see that an FDG scan often misses?", "factual", 2, "clinician",
    "The activated fibroblasts (FAP) in tumour stroma, present in more than 90% of epithelial indications, giving high contrast in pancreatic, gastric, HCC, and peritoneal disease where FDG is weak; it is not yet approved.",
    ["fapi-pet", "fap"],
    [["fibroblast", "fap", "stroma"], ["pancrea", "gastric", "peritoneal", "hcc", "liver"], ["contrast", "background", "sensitiv"], ["not yet approved", "registration", "trial", "investigational"]]),

  // ---------------- Technologies and mechanisms ----------------
  Q("tech-63", "What is the difference between lutetium-177 and actinium-225 as therapeutic isotopes?", "factual", 2, "clinician",
    "177Lu emits beta particles (range 1-10 mm, crossfire helps bulky heterogeneous tumours, marrow toxicity, 6.7-day half-life); 225Ac emits alpha particles (range 50-100 µm, very high energy, oxygen-independent clustered DNA damage, good for micrometastases, daughter redistribution and supply constraints).",
    ["alpha-vs-beta", "radioligand-therapy", "targeted-alpha-therapy"],
    [["beta"], ["alpha"], ["range", "mm", "µm", "micromet"], ["supply", "daughter", "marrow", "toxicity"]]),
  Q("tech-64", "Why is actinium-225 supply a problem?", "reasoning", 2, "analyst",
    "It is made in tiny quantities from a legacy thorium-229 stockpile or accelerators; commercial-scale expansion is a 3-5 year effort (TerraPower's Philadelphia plant aims for a 20-fold increase), so phase 3 alpha trials and future launches are gated by production.",
    ["terrapower-isotopes", "targeted-alpha-therapy", "orano-med", "itm"],
    [["thorium", "stockpile", "accelerator", "produc"], ["terrapower"], ["years", "scale", "capacity"], ["trials", "launch", "gate", "bottleneck", "constraint"]]),

  // ---------------- Pathways ----------------

  // ---------------- Institutions, companies, collections ----------------
  Q("who-73", "Where was FAPI PET invented?", "factual", 2, "analyst",
    "Heidelberg (University Hospital, DKFZ/NCT; Haberkorn, Giesel, Kratochwil), which also ran the first-in-human 225Ac-PSMA therapy.",
    ["heidelberg-nct", "fapi-pet"],
    [["heidelberg"], ["dkfz", "nct", "university hospital"], ["haberkorn", "giesel", "kratochwil", "germany"], ["psma", "actinium", "225ac"]]),

  // ---------------- Procedural (patients, carers) ----------------

  // ---------------- Analyst / pipeline ----------------

  // ---------------- Reasoning / synthesis ----------------
];
