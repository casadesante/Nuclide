import { describe, expect, it } from "vitest";
import { assembleTopic } from "./WhatIsBeingDone";

const ids = (data: NonNullable<ReturnType<typeof assembleTopic>>) => [
  ...data.now,
  ...data.trials,
  ...data.ideas,
  ...data.background,
].map((entity) => entity.id);

function lateDiagnosis(indicationId?: string) {
  const data = assembleTopic("late-diagnosis", indicationId);
  expect(data).not.toBeNull();
  if (!data) throw new Error("Expected late-diagnosis data");
  return ids(data);
}

describe("assembleTopic", () => {
  it("shows only late-diagnosis work applicable to glioblastoma", () => {
    const data = assembleTopic("late-diagnosis", "glioblastoma");
    expect(data).not.toBeNull();
    if (!data) throw new Error("Expected late-diagnosis data");
    const applicable = ids(data);

    // f-18-fet and f-18-fdopa are amino-acid PET tracers actually indicated for glioblastoma in the corpus.
    expect(applicable).toEqual(expect.arrayContaining(["f-18-fet", "f-18-fdopa"]));
    // These are seeded for the general topic but indicated for other cancers, so they should drop out here.
    for (const id of ["psma-pet", "sstr-pet", "caix-pet", "fapi-pet", "her2-pet", "mibg-theranostics"]) {
      expect(applicable).not.toContain(id);
    }
    expect(data.background).toEqual([]);
  });

  it("keeps the general topic broad while filtering another cancer-specific card", () => {
    const general = lateDiagnosis();
    expect(general).toEqual(expect.arrayContaining([
      "psma-pet",
      "caix-pet",
      "fapi-pet",
      "her2-pet",
      "mibg-theranostics",
    ]));

    const hcc = lateDiagnosis("hcc");
    expect(hcc).toContain("fapi-pet");
    expect(hcc).not.toContain("caix-pet");
  });
});
