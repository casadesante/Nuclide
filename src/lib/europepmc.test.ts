/**
 * The curated Europe PMC queries are looked up by technology id, so an entry for an id the corpus does
 * not have can never fire. The fork arrived with 87 of them (ADCs, CAR-T, chemotherapy, radiology
 * hardware); this keeps the map honest, and keeps the topical guard covering the whole field rather
 * than only its oncology end.
 */
import { describe, expect, it } from "vitest";
import { TECH_QUERIES } from "./europepmc";
import { ALL_INPUTS } from "@/data/index";

const TECHNOLOGY_IDS = new Set((ALL_INPUTS as Array<{ id: string; kind: string }>).filter((e) => e.kind === "technology").map((e) => e.id));

describe("curated Europe PMC queries", () => {
  it("are keyed by technologies that exist", () => {
    expect(Object.keys(TECH_QUERIES).filter((k) => !TECHNOLOGY_IDS.has(k))).toEqual([]);
  });

  it("guard vague names with the whole field, not just cancer", () => {
    const guarded = Object.entries(TECH_QUERIES).filter(([, q]) => q.includes("radiopharmaceutical OR"));
    expect(guarded.length).toBeGreaterThan(0);
    for (const [, q] of guarded) expect(q).toContain("\"nuclear medicine\"");
  });
});
