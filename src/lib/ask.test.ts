import { describe, expect, it } from "vitest";
import MiniSearch from "minisearch";
import { answerText, composeAnswer, recordFromEntity, retrieveIds, sentences, type AskRecord } from "./ask";
import { benchmark, scoreAnswer } from "@/data/benchmark";
import { askEval, askEvalNew, scoreAskEval } from "@/data/ask-eval";
import { graph } from "./graph";
import { routeFor } from "./kinds";
import { searchDocs, type SearchDoc } from "./search-index";
import { buildSemanticIndex, semanticSearch } from "./semantic";
import { semanticDocs } from "./semantic-docs";
import { askHarness } from "./ask-harness";
import { analyseQuestion, classifyIntent } from "./ask-intent";
import { unknownLexiconIds } from "./ask-index-build";
import { abbreviation, decodeAskIndex, deriveAliases, encodeAskIndex, regionCode, shortName } from "./ask-index";
import { batchFromQuestion, followUpsFor, hasSurvivalFigure, regionFromQuestion } from "./ask-compose";

describe("sentences", () => {
  it("splits on sentence ends and drops fragments", () => {
    expect(sentences("Sacituzumab govitecan is a TROP2 ADC. It is approved in TNBC after two prior lines. Ok.")).toEqual([
      "Sacituzumab govitecan is a TROP2 ADC.", "It is approved in TNBC after two prior lines.",
    ]);
  });
});

describe("composeAnswer (extractive fallback)", () => {
  const records: AskRecord[] = [
    { id: "sg", kind: "drug", name: "Sacituzumab govitecan", route: "/drugs/sg/", tldr: "An antibody that carries chemotherapy to TROP2 on tumour cells.", passages: [
      { text: "An antibody that carries chemotherapy to TROP2 on tumour cells.", field: "TL;DR" },
      { text: "Sacituzumab govitecan is approved for metastatic triple-negative breast cancer after two prior therapies.", field: "summary" },
      { text: "Neutropenia and diarrhoea are the main grade 3 toxicities.", field: "summary" },
    ] },
    { id: "ascent", kind: "trial", name: "ASCENT", route: "/trials/ascent/", tldr: "The trial that proved sacituzumab govitecan in TNBC.", passages: [
      { text: "The trial that proved sacituzumab govitecan in TNBC.", field: "TL;DR" },
      { text: "ASCENT, overall survival: sacituzumab govitecan 12.1 months versus chemotherapy 6.7 months, hazard ratio 0.48.", field: "outcome" },
    ] },
  ];

  it("copies sentences verbatim with one citation per sentence, ordered by record", () => {
    const a = composeAnswer("What is the survival benefit of sacituzumab govitecan in TNBC?", records);
    expect(a.sentences.length).toBeGreaterThan(1);
    for (const s of a.sentences) expect(records.flatMap((r) => r.passages.map((p) => p.text))).toContain(s.text);
    expect(a.sentences.some((s) => s.text.startsWith("ASCENT, overall survival"))).toBe(true);
    expect(a.sources.map((s) => s.id)).toEqual(["sg", "ascent"]);
    expect(a.sentences.map((s) => s.cite)).toEqual([...a.sentences.map((s) => s.cite)].sort());
    expect(answerText(a)).toContain("[1] Sacituzumab govitecan (https://nuclide.cc/drugs/sg/)");
  });

  it("falls back to the top TL;DR and says so when nothing matches", () => {
    const a = composeAnswer("quantum chromodynamics", records);
    expect(a.confidence).toBe("low");
    expect(a.note).toBeDefined();
    expect(a.sentences.length).toBe(1);
    expect(a.sentences[0].field).toBe("TL;DR");
  });

  it("returns no sentences for no records", () => {
    expect(composeAnswer("anything", []).sentences).toEqual([]);
  });
});

describe("Ask index", () => {
  it("names only records that exist in the lexicon", () => {
    expect(unknownLexiconIds()).toEqual([]);
  });

  it("derives aliases from name, abbreviation, brand and code", () => {
    const a = deriveAliases({ id: "pluvicto", kind: "drug", name: "Lutetium-177 vipivotide tetraxetan", brand: "Pluvicto", code: "177Lu-PSMA-617" });
    expect(a).toEqual(expect.arrayContaining(["Lutetium-177 vipivotide tetraxetan", "Pluvicto", "177Lu-PSMA-617"]));
    const c = deriveAliases({ id: "biochemical-recurrence", kind: "term", name: "Biochemical recurrence (BCR)" });
    expect(c).toEqual(expect.arrayContaining(["Biochemical recurrence", "BCR"]));
    expect(deriveAliases({ id: "x", kind: "term", name: "Cancer" })).toEqual([]);
  });

  it("round-trips through the compact wire format and derives routes", { timeout: 120_000 }, () => {
    const { index } = askHarness();
    const back = decodeAskIndex(JSON.parse(JSON.stringify(encodeAskIndex(index))));
    expect(back.entries.length).toBe(index.entries.length);
    const bcr = back.entries.find((e) => e.id === "biochemical-recurrence")!;
    expect(bcr.kind).toBe("term");
    expect(bcr.route).toBe("/terms/biochemical-recurrence/");
    expect(bcr.aliases).toContain("BCR");
    expect(back.pairs.length).toBeGreaterThanOrEqual(benchmark.length);
  });

  it("uses the abbreviation as the short name for indications", () => {
    expect(shortName({ kind: "term", name: "Biochemical recurrence (BCR)" })).toBe("BCR");
    expect(shortName({ kind: "drug", name: "Lutetium-177 vipivotide tetraxetan" })).toBe("Lutetium-177 vipivotide tetraxetan");
    expect(shortName({ kind: "technology", name: "CT (computed tomography)" })).toBe("CT");
  });
});

describe("intent and entity resolution", () => {
  it("classifies the common question shapes", () => {
    expect(classifyIntent("What does 'biochemical recurrence' mean after prostatectomy?")).toBe("define");
    expect(classifyIntent("How is biochemical recurrence treated?")).toBe("treatments");
    expect(classifyIntent("Is Pluvicto approved in the UK?")).toBe("approval");
    expect(classifyIntent("How does lutetium-177 vipivotide tetraxetan work?")).toBe("mechanism");
    expect(classifyIntent("What are the side effects of Lutathera?")).toBe("side-effects");
    expect(classifyIntent("What trials are open for pancreatic neuroendocrine tumours?")).toBe("trials");
    expect(classifyIntent("Pluvicto vs Lutathera")).toBe("compare");
    expect(classifyIntent("Pluvicto vs Lutathera", 1)).not.toBe("compare");
    expect(classifyIntent("What is the survival rate for prostate cancer?")).toBe("prognosis");
    expect(classifyIntent("Who makes Keytruda?")).toBe("who");
    expect(classifyIntent("How much does Pluvicto cost?")).toBe("cost");
    expect(classifyIntent("What did the VISION trial show?")).toBe("results");
    expect(classifyIntent("What is the standard treatment for metastatic castration-resistant prostate cancer today?")).toBe("treatments");
  });

  it("resolves aliases, abbreviations, hyphen and quote variants", () => {
    const { index } = askHarness();
    const ids = (q: string) => analyseQuestion(q, index).entities.filter((e) => e.strong).map((e) => e.entry.id);
    expect(ids("What does 'biochemical recurrence' mean after prostatectomy?")[0]).toBe("biochemical-recurrence");
    expect(ids("What does “BCR” mean?")[0]).toBe("biochemical-recurrence");
    expect(ids("Is Pluvicto approved in the UK?")).toEqual(["pluvicto"]);
    expect(ids("Lutathera side effects")).toContain("lutathera");
    expect(ids("What did the VISION trial show?")).toContain("vision");
    expect(ids("Who makes Keytruda?")).toEqual(["pembrolizumab"]);
  });

  it("matches a benchmark question to its curated pair", () => {
    const { index } = askHarness();
    // The first question of the filtered benchmark (see src/data/benchmark.ts), asked verbatim.
    const a = analyseQuestion("What is theranostics and what is the best-known example?", index);
    expect(a.pair?.pair.ids.length).toBeGreaterThan(0);
    expect(a.pair?.similarity).toBe(1);
  });

  it("reads a region named in the question", () => {
    expect(regionFromQuestion("Is Pluvicto approved in the UK?")).toBe("UK");
    expect(regionFromQuestion("Is Pluvicto approved in Japan?")).toBe("JP");
    expect(regionFromQuestion("Is Pluvicto approved?")).toBeUndefined();
  });

  it("suggests follow-ups that skip the current intent", () => {
    const f = followUpsFor({ kind: "indication", name: "Prostate cancer" }, "define");
    expect(f).toContain("How is Prostate cancer treated?");
    expect(f).toContain("What trials are open for Prostate cancer?");
    expect(f.some((x) => x.startsWith("What is Prostate cancer"))).toBe(false);
  });
});

describe("September 2026 kinds: intents, aliases, index extras, survival guard", () => {
  it("classifies the new question shapes", () => {
    // "Which investors back X" / "Who invests in Y" and YC-batch questions still classify correctly even
    // though this corpus has very little venture data (see the "investors"/"companies" end-to-end tests below).
    expect(classifyIntent("Which investors back radioligand startups?")).toBe("investors");
    expect(classifyIntent("Who invests in Atomic Alchemy?")).toBe("investors");
    expect(classifyIntent("Which YC companies work on radiopharmaceuticals?")).toBe("companies");
    expect(classifyIntent("Which YC W19 companies are working on isotopes?")).toBe("companies");
    expect(classifyIntent("What did India approve for PSMA PET?")).toBe("regional-approvals");
    expect(classifyIntent("Which drugs did China approve for prostate cancer?")).toBe("regional-approvals");
    // No regulator named: an ordinary approval question, not a regional listing.
    expect(classifyIntent("Which radioligand therapies are approved for metastatic castration-resistant prostate cancer?")).toBe("approval");
    expect(classifyIntent("What is the roadmap for radiopharmaceuticals?")).toBe("roadmap");
    expect(classifyIntent("Where is molecular imaging heading over the next decade?")).toBe("roadmap");
    expect(classifyIntent("Which journals publish nuclear medicine research?")).toBe("journals");
    expect(classifyIntent("Which journals cover radiation oncology?")).toBe("journals");
    expect(classifyIntent("Which KEGG pathway covers prostate cancer?")).toBe("define");
  });

  // The "evidence" grading template (complementary-medicine claims such as the ketogenic diet, scalp cooling
  // or St John's wort, each graded strong/insufficient/harm) is a deleted oncology-only feature per
  // docs/FORK-NOTES.md ("complementary medicine"); this corpus carries no graded entities, so the two tests
  // that exercised it ("drops the evidence reading...", "states the evidence grade first...",
  // "grades an insufficient approach...") are removed rather than asserting on fabricated data.

  it("resolves the new aliases and kinds", () => {
    const { index } = askHarness();
    const ids = (q: string) => analyseQuestion(q, index).entities.filter((e) => e.strong).map((e) => e.entry.id);
    expect(ids("Which KEGG pathway covers prostate cancer?")[0]).toBe("prostate-cancer-signalling");
    expect(ids("What is hsa05215?")).toContain("prostate-cancer-signalling");
    expect(ids("What is the Lancet Oncology?")[0]).toBe("lancet-oncology");
  });

  // "carries grade, batch and approved regions" relied entirely on complementary-medicine grades (deleted
  // feature) and on CAR-T/investor fixtures (granza-bio, talicabtagene-autoleucel, sintilimab) that do not
  // exist in this corpus; this corpus's only ycBatch holder is exercised in the "companies" test below.

  it("treats a bracketed gloss as a gloss, not an abbreviation", () => {
    expect(abbreviation("Prostate cancer (KEGG map)")).toBeUndefined();
    expect(abbreviation("Biochemical recurrence (BCR)")).toBe("BCR");
    expect(abbreviation("Cognitive behavioural therapy for insomnia (CBT-I)")).toBe("CBT-I");
  });

  it("recognises survival and mortality figures but not trial medians or toxicity rates", () => {
    expect(hasSurvivalFigure("Five-year survival is 12%.")).toBe(true);
    expect(hasSurvivalFigure("About 2.6 million cancer deaths in 2022.")).toBe(true);
    expect(hasSurvivalFigure("People who chose alternative medicine were two and a half times as likely to die.")).toBe(true);
    expect(hasSurvivalFigure("Mortality was 96 per 100,000.")).toBe(true);
    expect(hasSurvivalFigure("Approved 2022 for post-chemotherapy mCRPC (VISION: OS 15.3 vs 11.3 months) and 2025 before chemotherapy.")).toBe(false);
    expect(hasSurvivalFigure("Xerostomia occurred in 49% of patients.")).toBe(false);
  });

  it("reads YC batches and region codes", () => {
    expect(batchFromQuestion("Which YC W19 companies work on isotopes?")).toBe("W19");
    expect(batchFromQuestion("What did the S21 trial show?")).toBeUndefined();
    expect(regionCode("China")).toBe("CN");
    expect(regionCode("IN")).toBe("IN");
    expect(regionCode("Japan")).toBe("JP");
    expect(regionCode("Switzerland")).toBeUndefined();
  });
});

describe("Ask Nuclide end to end, September 2026 kinds", () => {
  it("lists what a regulator approved, with brand and year, and reads the drug records", async () => {
    const a = await askHarness().ask("What did the UK approve for PSMA radioligand therapy?");
    expect(a.template).toBe("regional-approvals");
    const text = answerText(a);
    expect(text).toMatch(/approved in the United Kingdom by the MHRA/);
    expect(text).toMatch(/Pluvicto/);
    expect(a.consulted.some((s) => s.id === "pluvicto")).toBe(true);
  });

  // The YC-batch-filtered "companies" template only fires when the question names an investor-type company
  // record (e.g. a "Y Combinator" entity) as the primary match, so its portfolio can be filtered by batch;
  // this corpus carries no investor-type company (atomic-alchemy has a real ycBatch field, exercised in the
  // pure-parsing "reads YC batches and region codes" test above, but there is no Y Combinator record to name).

  it("says plainly when Nuclide records no investor for a field's companies", async () => {
    const a = await askHarness().ask("Which investors back radioligand startups?");
    expect(a.template).toBe("investors");
    expect(answerText(a)).toMatch(/records no investor/);
  });

  it("walks the roadmap built around a front", async () => {
    const a = await askHarness().ask("What is the radiopharmaceutical roadmap?");
    expect(a.template).toBe("roadmap");
    expect(a.sources.some((s) => s.id === "radiopharma-roadmap")).toBe(true);
    expect(answerText(a)).toMatch(/Coming next/);
  });

  it("matches journals on a topic and reads them", async () => {
    const a = await askHarness().ask("Which journals cover nuclear medicine?");
    expect(a.template).toBe("journals");
    expect(answerText(a)).toMatch(/Journal of Nuclear Medicine/i);
    expect(a.consulted.some((s) => s.id === "journal-of-nuclear-medicine")).toBe(true);
  });
});

describe("Ask Nuclide end to end", () => {
  it("answers the owner's example with the BCR TL;DR and the definition, cited", async () => {
    const a = await askHarness().ask("What does 'biochemical recurrence' mean after prostatectomy?", "UK");
    expect(a.intent).toBe("define");
    expect(a.template).toBe("define");
    expect(a.confidence).toBe("high");
    expect(a.entities[0].id).toBe("biochemical-recurrence");
    expect(a.sources[0].id).toBe("biochemical-recurrence");
    expect(a.sentences[0].cite).toBe(1);
    expect(a.sentences[0].text).toMatch(/PSA rising again after surgery or radiation/);
    const text = answerText(a).toLowerCase();
    for (const must of ["psa", "prostatectomy", "nadir"]) expect(text).toContain(must);
    expect(a.followUps).toContain("Which treatments depend on BCR?");
    expect(a.method).toMatch(/nothing is generated/);
    expect(a.readMore.some((r) => r.href === "/terms/biochemical-recurrence/")).toBe(true);
  });

  it("starts approval answers with the region the question names", async () => {
    const a = await askHarness().ask("Is Pluvicto approved in the UK?", "US");
    expect(a.template).toBe("approval");
    expect(answerText(a)).toMatch(/In the United Kingdom, Lutetium-177 vipivotide tetraxetan is approved by the MHRA/);
  });

  it("answers prognosis questions with the state of the art first and no bare figure", async () => {
    const a = await askHarness().ask("What is the survival rate for prostate cancer?");
    expect(a.template).toBe("prognosis");
    expect(a.sentences[0].field).toBe("TL;DR");
    expect(a.sentences.some((s) => s.field === "survival disclosure")).toBe(true);
    // The fork has no /survival/ room: the SEER figure sits on the record itself behind the survival
    // disclosure, and the answer reads on to the indications index instead.
    expect(a.readMore.some((r) => r.href === "/indications/")).toBe(true);
    expect(a.sentences[0].text).not.toMatch(/\d+%/);
  });

  it("compares two products side by side and links the compare page", async () => {
    const a = await askHarness().ask("Pluvicto vs Lutathera");
    expect(a.template).toBe("compare");
    expect(a.entities.map((e) => e.id).sort()).toEqual(["lutathera", "pluvicto"]);
    expect(a.readMore.some((r) => r.href.startsWith("/compare/?ids="))).toBe(true);
  });

  it("falls back to sentence retrieval when nothing is named", async () => {
    const a = await askHarness().ask("Which radiopharmaceutical drugs were approved in the US in July 2026?");
    expect(a.sentences.length).toBeGreaterThan(0);
    for (const s of a.sentences) expect(a.sources[s.cite - 1]).toBeDefined();
  });

  it("clears the floors on the open benchmark and the natural set (measured 2026-09-23)", { timeout: 300_000 }, async () => {
    // Re-measured 2026-09-23 on the 122-question benchmark and the 52-question natural set, after the 12
    // opportunity benchmark questions and the 4 opportunity natural questions were added: benchmark rubric
    // 0.41, recall 1.00; natural rubric 0.40, recall 0.81. These are honest numbers for an
    // extractive pipeline answering from record text — the rubrics ask for specific figures the composer does
    // not always surface. Floors sit just below each measured value so a retrieval or composition regression
    // fails loudly, and are raised as the pipeline improves. Never lower one to make a failing run pass.
    const h = askHarness();
    let bScore = 0, bRecall = 0;
    for (const q of benchmark) {
      const a = await h.ask(q.question, "US");
      bScore += scoreAnswer(q, answerText(a)).score;
      const ids = a.consulted.map((s) => s.id);
      bRecall += q.entities.length ? q.entities.filter((id) => ids.includes(id)).length / q.entities.length : 1;
    }
    expect(bScore / benchmark.length).toBeGreaterThanOrEqual(0.4);
    expect(bRecall / benchmark.length).toBeGreaterThanOrEqual(0.95);
    const natural = [...askEval, ...askEvalNew];
    let nScore = 0, nRecall = 0;
    for (const q of natural) {
      const a = await h.ask(q.question, "US");
      const s = scoreAskEval(q, answerText(a), a.consulted.map((x) => x.id));
      nScore += s.score; nRecall += s.retrievalRecall;
    }
    expect(nScore / natural.length).toBeGreaterThanOrEqual(0.38);
    expect(nRecall / natural.length).toBeGreaterThanOrEqual(0.75);
  });

  it("keeps the extractive path at or above its floors (measured 2026-09-23)", { timeout: 300_000 }, () => {
    // The path without the curated question/answer pairs: lexical plus semantic retrieval, top 6 records,
    // composed extractively. Measured rubric 0.36, recall 0.65 on the 122-question benchmark (2026-09-23). This is the
    // floor that catches a search or ranking regression, which the pipeline's curated pairs would otherwise hide.
    const g = graph();
    const ms = new MiniSearch<SearchDoc>({ fields: ["name", "aka", "tldr", "tags", "id"], storeFields: ["id"], searchOptions: { boost: { name: 4, aka: 3, id: 2 }, prefix: true, fuzzy: 0.2 } });
    ms.addAll(searchDocs());
    const sem = buildSemanticIndex(semanticDocs());
    let score = 0, recall = 0;
    for (const q of benchmark) {
      const ids = retrieveIds(ms.search(q.question).slice(0, 12).map((h) => ({ id: String(h.id) })), semanticSearch(sem, q.question, 12), 6);
      const records = ids.map((id) => { const e = g.must(id); return recordFromEntity(e, routeFor(e)); });
      score += scoreAnswer(q, answerText(composeAnswer(q.question, records))).score;
      recall += q.entities.length ? q.entities.filter((id) => ids.includes(id)).length / q.entities.length : 1;
    }
    expect(score / benchmark.length).toBeGreaterThanOrEqual(0.33);
    expect(recall / benchmark.length).toBeGreaterThanOrEqual(0.57);
  });
});
