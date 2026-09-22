import { describe, expect, it } from "vitest";
import { brokenLinkIssueUrl, kindFromPath, MISSED_PATHS_CAP, parseMissed, pathToQuery, pathTokens, recordMiss } from "./not-found-query";

describe("pathToQuery", () => {
  it("splits on slashes and hyphens and drops the kind plural", () => {
    expect(pathToQuery("/drugs/piflufolastat-pylarify/")).toBe("piflufolastat pylarify");
    expect(pathToQuery("/indications/prostate-cancer-mcrpc/")).toBe("prostate cancer mcrpc");
    expect(pathToQuery("/key-papers/vision-lancet-oncology/")).toBe("vision lancet oncology");
  });

  it("drops numbers, plumbing and file extensions but keeps registry ids", () => {
    expect(pathToQuery("/trials/2019/index.html")).toBe("");
    expect(pathToQuery("/trials/nct04567890.html")).toBe("nct04567890");
    expect(pathToQuery("/api/v1/drugs.json")).toBe("");
  });

  it("decodes percent-encoding, lower-cases and dedupes", () => {
    expect(pathTokens("/Targets/HER2%20low/her2")).toEqual(["her2", "low"]);
    expect(pathTokens("/%E0%A4%A")).toEqual([]);
  });

  it("returns nothing for the root and single letters", () => {
    expect(pathToQuery("/")).toBe("");
    expect(pathToQuery("/a/b/")).toBe("");
  });
});

describe("kindFromPath", () => {
  it("maps the first segment to a kind hub", () => {
    expect(kindFromPath("/drugs/not-a-real-drug/")).toBe("drug");
    expect(kindFromPath("/key-papers/x/")).toBe("paper");
    expect(kindFromPath("/fronts/")).toBe("section");
    expect(kindFromPath("/nowhere/")).toBeNull();
    expect(kindFromPath("/")).toBeNull();
  });
});

describe("missed paths list", () => {
  it("appends, moves repeats to the end and caps at fifty", () => {
    expect(recordMiss([], "/a/")).toEqual(["/a/"]);
    expect(recordMiss(["/a/", "/b/"], "/a/")).toEqual(["/b/", "/a/"]);
    const many = Array.from({ length: 60 }, (_, i) => `/p${i}/`);
    const full = many.reduce((acc, p) => recordMiss(acc, p), [] as string[]);
    expect(full).toHaveLength(MISSED_PATHS_CAP);
    expect(full[0]).toBe("/p10/");
    expect(full.at(-1)).toBe("/p59/");
  });

  it("parses stored values defensively", () => {
    expect(parseMissed(null)).toEqual([]);
    expect(parseMissed("not json")).toEqual([]);
    expect(parseMissed('{"a":1}')).toEqual([]);
    expect(parseMissed('["/x/", 3, "/y/"]')).toEqual(["/x/", "/y/"]);
  });
});

describe("brokenLinkIssueUrl", () => {
  it("opens the bug form with the address and referrer prefilled", () => {
    const u = new URL(brokenLinkIssueUrl("/drugs/gone/", "https://example.org/list"));
    expect(u.pathname).toBe("/casadesante/Nuclide/issues/new");
    expect(u.searchParams.get("template")).toBe("bug.yml");
    expect(u.searchParams.get("url")).toBe("https://nuclide.cc/drugs/gone/");
    expect(u.searchParams.get("what")).toContain("Linked from: https://example.org/list");
    expect(u.searchParams.get("title")).toBe("bug: broken link /drugs/gone/");
    expect(new URL(brokenLinkIssueUrl("/x/")).searchParams.get("what")).not.toContain("Linked from");
  });
});
