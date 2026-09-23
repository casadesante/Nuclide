/**
 * Ask Nuclide natural-question set: 52 questions written the way a patient, a clinician or an investor
 * actually types them ("who owns pluvicto", "how long am I radioactive after radioiodine"), each with the
 * records that carry the answer and a rubric of must-mention points (any phrase in a point satisfies it,
 * case-insensitive substring). Complements the open benchmark (benchmark.ts), which is phrased more
 * formally. Scored by scripts/benchmark-ask.ts and floored in src/lib/ask.test.ts.
 *
 * As in the benchmark, every rubric phrase is grounded: at least one accepted phrase per point is a
 * verbatim substring of the listed records' own text, enforced by src/data/benchmark.test.ts. Retrieval
 * recall is measured against the entity ids, so those list the records that genuinely answer the question
 * rather than everything related to it.
 */
export type AskEvalQuestion = {
  id: string;
  question: string;
  audience: "patient" | "clinician" | "investor";
  /** Record ids that carry the answer; retrieval recall is measured against these. */
  entities: string[];
  /** Must-mention points, each a list of accepted phrases. */
  rubric: string[][];
};

const Q = (id: string, audience: AskEvalQuestion["audience"], question: string, entities: string[], rubric: string[][]): AskEvalQuestion => ({ id, audience, question, entities, rubric });

export const askEval: AskEvalQuestion[] = [
  // ---------------- patient ----------------
  Q("p-01", "patient", "what actually happens during a PSMA PET scan", ["psma-pet", "pylarify"], [["68ga-psma-11", "68ga"], ["60 to 120 minutes"], ["333 mbq"], ["biochemical recurrence"]]),
  Q("p-02", "patient", "what happens when I go in for Lutathera treatment", ["lutathera", "renal-protection-amino-acids"], [["7.4 gbq"], ["every 8 weeks"], ["lysine", "arginine"], ["kidney", "kidneys"]]),
  Q("p-03", "patient", "how many Pluvicto infusions will I need and how far apart", ["pluvicto"], [["six cycles"], ["every 6 weeks"], ["xerostomia", "cytopenias"], ["psma pet positivity", "psma pet"]]),
  Q("p-04", "patient", "what tests will I need before I can have radioactive iodine for my overactive thyroid", ["graves-hyperthyroidism"], [["thyroid function tests"], ["radioiodine uptake"], ["antithyroid drugs", "methimazole"], ["hypothyroidism"]]),
  Q("p-05", "patient", "how long do I have to stay away from my kids after radioiodine", ["patient-release-criteria"], [["5 msv", "0.5 rem"], ["1 msv", "0.1 rem"], ["breastfeeding"], ["written instructions"]]),
  Q("p-06", "patient", "is it safe to be around my family the same day as my Lutetium-177 treatment", ["patient-release-criteria"], [["tede", "total effective dose equivalent"], ["5 msv"], ["lutetium-177 radioligand therapy"], ["same-day release"]]),
  Q("p-07", "patient", "why do the staff use lead shields and tongs instead of just handing me the dose", ["alara"], [["shielding"], ["distance"], ["as low as is reasonably achievable"], ["10 cfr 20.1003", "10 cfr part 20"]]),
  Q("p-08", "patient", "what happens if the radioactive injection leaks out of my vein", ["extravasation-radiopharmaceutical"], [["extravasation"], ["skin necrosis"], ["stop the infusion"], ["plastic surgeon"]]),
  Q("p-09", "patient", "will Pluvicto give me a dry mouth and does it go away", ["salivary-gland-toxicity"], [["39%"], ["dry mouth"], ["xerostomia"], ["dose reduction", "dose modifications"]]),
  Q("p-10", "patient", "why do I need blood tests so often during my radioligand therapy", ["myelosuppression-after-rlt"], [["blood counts"], ["decreased platelets", "thrombocytopenia"], ["withhold"], ["grade 3"]]),
  Q("p-11", "patient", "why do I get an amino acid drip before my Lutathera dose and will it make me feel sick", ["renal-protection-amino-acids"], [["lysine", "arginine"], ["kidney"], ["nausea", "vomiting"], ["4 hours"]]),
  Q("p-12", "patient", "my PSMA PET report gives a score, what does that mean", ["psma-rads"], [["psma-rads"], ["biopsy"], ["prostate cancer almost certainly present"], ["benign"]]),
  Q("p-13", "patient", "what does my Krenning score mean for whether I can have PRRT", ["krenning-score"], [["krenning"], ["liver"], ["peptide receptor radionuclide therapy", "prrt"], ["grade 2"]]),
  Q("p-14", "patient", "how soon will the bone pain injection actually start working", ["bone-pain-palliation"], [["one to a few weeks"], ["bone scan"], ["extravasation"], ["survival benefit"]]),

  // ---------------- clinician ----------------
  Q("c-01", "clinician", "how do I know if my mCRPC patient is eligible for Pluvicto", ["pluvicto", "vision"], [["psma pet positivity", "psma-positive"], ["androgen receptor pathway inhibitor and a taxane"], ["six cycles"]]),
  Q("c-02", "clinician", "what Krenning score do I need to select a patient for PRRT", ["krenning-score", "netter-1"], [["grade 2 or above", "krenning grade 2"], ["score greater than 2"], ["netter-1"]]),
  Q("c-03", "clinician", "which prostate cancer patients actually qualify for radium-223", ["alsympca", "radium-223"], [["symptomatic bone-metastatic"], ["no visceral disease"], ["monotherapy"]]),
  Q("c-04", "clinician", "when should I start the amino acid infusion before a PRRT dose", ["renal-protection-amino-acids"], [["30-60 minutes", "30 to 60 minutes"], ["lysine", "arginine"], ["4 hours"]]),
  Q("c-05", "clinician", "what's the SPECT imaging schedule for kidney dosimetry after 177Lu therapy", ["spect-dosimetry-workflow"], [["24 hours and 7 days", "24 hours to 7 days"], ["kidney dosimetry"], ["renal cortex"]]),
  Q("c-06", "clinician", "what does a PSMA-RADS 5 lesion on the report mean for management", ["psma-rads"], [["prostate cancer almost certainly present"], ["intense uptake"], ["corresponding conventional-imaging finding"]]),
  Q("c-07", "clinician", "how do I interpret a Deauville score of 3 on the interim PET", ["deauville-for-pet"], [["complete metabolic response"], ["mediastinal blood pool", "liver"], ["good-prognosis"]]),
  Q("c-08", "clinician", "should I give Pluvicto before or after chemotherapy in mCRPC", ["psmafore", "vision"], [["before chemotherapy"], ["taxane-naive"], ["crossover"]]),
  Q("c-09", "clinician", "does adding lutetium-PSMA to enzalutamide up front actually improve survival", ["enza-p"], [["34 vs 26 months", "overall survival"], ["hr 0.55"], ["anaemia and thrombocytopenia"]]),
  Q("c-10", "clinician", "my patient on Pluvicto has grade 3 dry mouth, what do I do", ["salivary-gland-toxicity"], [["withhold and reduce"], ["5.9 gbq"], ["grade 3"]]),
  Q("c-11", "clinician", "what blood count monitoring does Pluvicto need and when do I hold the dose", ["myelosuppression-after-rlt"], [["complete blood counts"], ["withhold for grade 2"], ["reduce the dose by 20%"]]),
  Q("c-12", "clinician", "what did NETTER-1 actually show for progression-free survival", ["netter-1"], [["65.2%"], ["10.8%"], ["octreotide"]]),
  Q("c-13", "clinician", "what were the headline results of the VISION trial", ["vision"], [["831 men"], ["overall and radiographic progression-free survival"], ["androgen receptor pathway inhibitor and a taxane"]]),
  Q("c-14", "clinician", "which low-risk thyroid cancer patients can I safely skip radioiodine in after surgery", ["estimabl2", "ion-trial"], [["pt1a to t1b", "pt1 to t2"], ["node-negative"], ["non-inferiority"]]),

  // ---------------- investor ----------------
  Q("i-01", "investor", "who owns pluvicto", ["novartis", "advanced-accelerator-applications"], [["novartis"], ["1.5 billion"], ["cern", "3.9 billion"]]),
  Q("i-02", "investor", "who owns xofigo", ["bayer"], [["bayer"], ["radium-223"], ["only approved alpha emitter"]]),
  Q("i-03", "investor", "who owns pylarify", ["lantheus"], [["lantheus"], ["piflufolastat"], ["leading psma pet agent"]]),
  Q("i-04", "investor", "how much actinium-225 supply is there each year", ["ac-225", "b-ac225-supply"], [["63 gbq", "1.7 ci"], ["100-200", "100 to 200"], ["185 gbq", "5 ci"]]),
  Q("i-05", "investor", "why did rayzebio pause enrollment in the action-1 trial", ["b-ac225-supply", "action-1"], [["could not secure enough actinium-225", "paused new-patient enrolment"], ["single global supplier", "one ac-225 supplier"], ["june 2024"]]),
  Q("i-06", "investor", "what did the vision trial mean for pluvicto's sales", ["vision", "novartis"], [["overall and radiographic progression-free survival", "progression-free survival"], ["1.5 billion"], ["831 men"]]),
  Q("i-07", "investor", "what did alphamedix-02 show and who owns the drug", ["alphamedix-02", "orano-med", "radiomedix"], [["54.3 percent", "objective response rate"], ["orano med"], ["radiomedix"], ["sanofi"]]),
  Q("i-08", "investor", "who supplies lutetium-177", ["itm", "isotopia", "lu-177"], [["largest supplier"], ["endolucinbeta"], ["isotopia"], ["6.65-day", "6.65 day"]]),
  Q("i-09", "investor", "how many doses a year can nucleus radiopharma manufacture", ["nucleus-radiopharma"], [["50,000 patient doses", "50000 patient doses"], ["rochester"], ["spring house"]]),
  Q("i-10", "investor", "which companies are racing to build alpha-emitting psma drugs", ["fusion-pharma", "novartis", "bayer"], [["225ac-psma-i&t", "psma-i&t"], ["225ac-psma-617", "psma-617"], ["225ac-psma-trillium", "psma-trillium"]]),
  Q("i-11", "investor", "why does a single reactor outage cause a molybdenum-99 shortage so fast", ["mo-99", "b-mo99-supply"], [["65.94-hour", "66 hours"], ["research reactors"], ["hfr", "october 2024"]]),
  Q("i-12", "investor", "who processes molybdenum-99 in south africa", ["ntp-radioisotopes"], [["safari-1"], ["low-enriched uranium"], ["2017 and 2018", "2018"]]),

  // ---------------- lung agents (added with the Technegas, MAA and PSV359 records) ----------------
  Q("p-16", "patient", "what is the gas they make me breathe for a lung scan", ["technegas"], [["technegas"], ["carbon"], ["breath", "inhal"], ["ventilation"]]),
  Q("p-17", "patient", "is the injection for a lung perfusion scan safe if I have pulmonary hypertension", ["tc-99m-maa"], [["contraindicated", "deaths have been reported"], ["pulmonary hypertension"], ["particle"]]),
  Q("c-15", "clinician", "lung shunt fraction threshold before y-90", ["tc-99m-maa"], [["30 gy", "50 gy"], ["20%", "shunt"], ["hepatic artery", "radioembolisation"]]),
  Q("i-14", "investor", "does telix have a lung cancer programme", ["telix"], [["regeneron"], ["dll3"], ["discovery", "pre-clinical", "no asset"], ["lung cancer"]]),
  Q("c-16", "clinician", "how do I calculate predicted postoperative fev1 before a pneumonectomy", ["split-function-lung-perfusion"], [["fraction of total perfusion"], ["preoperative fev1"], ["60%", "30%"]]),
  Q("c-17", "clinician", "can I do ventilation and perfusion at the same time with krypton", ["kr-81m"], [["190 kev"], ["simultaneously"], ["140 kev", "technetium"]]),
  // Carried from OnCo's set: still true of this corpus, renumbered to fit the new ids.
  Q("p-15", "patient", "What is the difference between a PET scan and a CT scan?", ["pet", "ct"], [["tracer", "glucose", "fdg", "metabol", "radioactive"], ["x-ray", "anatom", "structure", "cross-section"], ["pet"], ["ct"]]),
  Q("i-13", "investor", "Who are the main companies in radioligand therapy?", ["radioligand-therapy", "novartis"], [["novartis"], ["pluvicto", "lutathera"]]),
];

/**
 * A second set, kept as the place where new questions land. OnCo's entries here were all oncology-specific
 * (PD-1 antibodies, ADC deals, investor portfolios) and were removed with the fork rather than reworded.
 */
export const askEvalNew: AskEvalQuestion[] = [
  // ---- Opportunities: the surfacing layer (Sep 2026) ----
  Q("ask-49", "investor", "where are the gaps in radiopharmaceutical diagnostics", ["opp-dll3-imaging-sclc", "opp-ceacam5-imaging-colorectal", "opp-caix-indeterminate-renal-mass"], [["tarlatamab", "dll3"], ["arcitumomab", "withdrawn"], ["zircon", "girentuximab"], ["no approved", "standalone"]]),
  Q("ask-50", "clinician", "what do you do when the PSMA scan is negative but the PSA is high", ["opp-grpr-psma-negative-prostate"], [["grpr", "68ga-rm2"], ["psma-negative", "negative on psma-pet"], ["177lu-neob", "9.25 gbq", "lancet oncology"]]),
  Q("ask-51", "investor", "which radiopharmaceutical diagnostics could sell without another company's drug", ["opp-caix-indeterminate-renal-mass", "opp-cxcr4-primary-aldosteronism"], [["standalone"], ["renal mass", "clear cell"], ["primary aldosteronism", "adrenal vein sampling"], ["85.5%", "90%"]]),
  Q("ask-52", "clinician", "is there any point imaging claudin 18.2 before starting zolbetuximab", ["opp-cldn18-2-imaging-gastric", "cldn18-2"], [["zolbetuximab"], ["58.8%", "12%"], ["ventana", "companion diagnostic"], ["first-in-human", "68ga-pmd22"]]),
];


export type AskEvalScored = { id: string; audience: AskEvalQuestion["audience"]; score: number; met: number; total: number; missed: string[]; retrievalRecall: number; answer?: string };

/** Score an answer text against a question's rubric and the record ids it consulted. */
export function scoreAskEval(q: AskEvalQuestion, answer: string, consulted: string[]): AskEvalScored {
  const text = answer.toLowerCase();
  const missed: string[] = [];
  let met = 0;
  for (const point of q.rubric) { if (point.some((p) => text.includes(p.toLowerCase()))) met++; else missed.push(point[0]); }
  const hit = q.entities.filter((id) => consulted.includes(id)).length;
  return { id: q.id, audience: q.audience, score: q.rubric.length ? met / q.rubric.length : 0, met, total: q.rubric.length, missed, retrievalRecall: q.entities.length ? hit / q.entities.length : 1, answer };
}
