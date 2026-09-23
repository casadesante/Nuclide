import { describe, it, expect } from "vitest";
import { benchmark, scoreAnswer } from "./benchmark";
import { askEval, askEvalNew } from "./ask-eval";
import { ALL_INPUTS } from "./index";

/**
 * The guard that keeps the accuracy harness honest.
 *
 * A rubric is only a measurement if its accepted phrases are things the corpus actually says. OnCo's
 * inherited set drifted into scoring phrases no record contained, which made the harness look like it
 * was testing the corpus when it was testing nothing. These tests re-implement, in the repo itself, the
 * checks the questions were authored against: ids resolve, rubrics are the right size, and every rubric
 * point has at least one phrase that appears verbatim in the text of the records the question points at.
 */

type Rec = { id: string; name?: string; brand?: string; code?: string; aka?: string[]; tldr?: string; summary?: string };

const byId = new Map<string, Rec>();
for (const r of ALL_INPUTS as unknown as Rec[]) byId.set(r.id, r);

/** The text a good answer can be built from: the same fields the search index and Ask pipeline surface. */
function textOf(ids: string[]): string {
  return ids
    .map((id) => {
      const r = byId.get(id);
      if (!r) return "";
      return [r.name, r.brand, r.code, (r.aka ?? []).join(" "), r.tldr, r.summary].filter(Boolean).join(" ");
    })
    .join(" ")
    .toLowerCase();
}

describe("open benchmark", () => {
  it("has a substantial set of questions", () => {
    expect(benchmark.length).toBeGreaterThanOrEqual(100);
  });

  it("has unique ids", () => {
    const ids = benchmark.map((q) => q.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("points only at records that exist", () => {
    const dangling = benchmark.flatMap((q) => q.entities.filter((e) => !byId.has(e)).map((e) => `${q.id} -> ${e}`));
    expect(dangling).toEqual([]);
  });

  it("gives every question at least one record and a real expected answer", () => {
    const thin = benchmark.filter((q) => q.entities.length === 0 || q.expected.trim().length < 40).map((q) => q.id);
    expect(thin).toEqual([]);
  });

  it("uses 3-5 rubric points, none of them empty", () => {
    const bad = benchmark
      .filter((q) => q.rubric.length < 3 || q.rubric.length > 5 || q.rubric.some((p) => p.length === 0))
      .map((q) => `${q.id} (${q.rubric.length})`);
    expect(bad).toEqual([]);
  });

  it("grounds every rubric point in its own records", () => {
    const ungrounded: string[] = [];
    for (const q of benchmark) {
      const text = textOf(q.entities);
      q.rubric.forEach((point, i) => {
        if (!point.some((p) => text.includes(p.toLowerCase()))) ungrounded.push(`${q.id} point ${i}: ${point.join("/")}`);
      });
    }
    expect(ungrounded).toEqual([]);
  });

  it("covers every category, difficulty and audience", () => {
    for (const c of ["factual", "procedural", "reasoning"]) expect(benchmark.filter((q) => q.category === c).length).toBeGreaterThanOrEqual(10);
    for (const d of [1, 2, 3]) expect(benchmark.filter((q) => q.difficulty === d).length).toBeGreaterThanOrEqual(10);
    for (const a of ["patient", "clinician", "analyst"]) expect(benchmark.filter((q) => q.audience === a).length).toBeGreaterThanOrEqual(10);
  });

  it("exercises a wide spread of the corpus, not one corner of it", () => {
    const ids = new Set(benchmark.flatMap((q) => q.entities));
    expect(ids.size).toBeGreaterThanOrEqual(100);
  });

  it("scores a perfect answer at 1 and an empty one at 0", () => {
    const q = benchmark[0];
    expect(scoreAnswer(q, q.rubric.map((p) => p[0]).join(" ")).score).toBe(1);
    expect(scoreAnswer(q, "").score).toBe(0);
  });
});

describe("Ask natural-question set", () => {
  const all = [...askEval, ...askEvalNew];

  it("has a substantial set with unique ids", () => {
    expect(all.length).toBeGreaterThanOrEqual(40);
    expect(new Set(all.map((q) => q.id)).size).toBe(all.length);
  });

  it("points only at records that exist", () => {
    const dangling = all.flatMap((q) => q.entities.filter((e) => !byId.has(e)).map((e) => `${q.id} -> ${e}`));
    expect(dangling).toEqual([]);
  });

  it("grounds every rubric point in its own records", () => {
    const ungrounded: string[] = [];
    for (const q of all) {
      const text = textOf(q.entities);
      q.rubric.forEach((point, i) => {
        if (!point.some((p) => text.includes(p.toLowerCase()))) ungrounded.push(`${q.id} point ${i}: ${point.join("/")}`);
      });
    }
    expect(ungrounded).toEqual([]);
  });

  it("covers all three audiences", () => {
    for (const a of ["patient", "clinician", "investor"]) expect(all.filter((q) => q.audience === a).length).toBeGreaterThanOrEqual(10);
  });
});
