/**
 * Ask Nuclide natural-question set: questions written the way a patient, a clinician or an investor would
 * type them, each with the records that carry the answer and a rubric of must-mention points (any phrase in
 * a point satisfies it, case-insensitive substring). Complements the open benchmark (benchmark.ts), which is
 * phrased more formally. Scored by scripts/benchmark-ask.ts and floored in src/lib/ask.test.ts.
 *
 * Fork note: this set was inherited from OnCo, where it held 60 oncology questions. Only the ones whose
 * rubric and record ids still hold in a radiopharmaceutical corpus were kept; the rest were removed rather
 * than reworded, because a rubric is only meaningful if its accepted phrases are true of the records behind
 * it. A purpose-written radiopharmaceutical set (imaging, dosimetry, isotope supply, theranostic pairs) is
 * still to be authored; see the open benchmark in benchmark.ts for the same note.
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
  Q("p-13", "patient", "What is the difference between a PET scan and a CT scan?", ["pet", "ct"], [["tracer", "glucose", "fdg", "metabol", "radioactive"], ["x-ray", "anatom", "structure", "cross-section"], ["pet"], ["ct"]]),

  // ---------------- clinician ----------------

  // ---------------- investor / analyst ----------------
  Q("i-54", "investor", "Who are the main companies in radioligand therapy?", ["radioligand-therapy", "novartis"], [["novartis"], ["pluvicto", "lutathera"]]),
];

/**
 * A second set, kept as the place where new questions land. OnCo's entries here were all oncology-specific
 * (PD-1 antibodies, ADC deals, investor portfolios) and were removed with the fork rather than reworded.
 */
export const askEvalNew: AskEvalQuestion[] = [];

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
