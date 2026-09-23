/**
 * Dump the corpus in the shape the benchmark questions are authored against.
 *
 * Writes one text file per kind (### id [kind] Name, then TLDR and SUM) plus corpus.json, a flat
 * id -> { kind, name, text } map where text is the same name/brand/code/aka/tldr/summary string the
 * search index and the Ask pipeline surface. That is the text a rubric phrase has to appear in, so the
 * dump is what makes it possible to check a question is answerable from the corpus before writing it —
 * the rule src/data/benchmark.test.ts then enforces for every question in src/data/benchmark.ts and
 * src/data/ask-eval.ts. Usage: npx tsx scripts/dump-corpus.ts, output under /tmp/nuclide-corpus unless
 * OUT_DIR is set.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { ALL_INPUTS } from "../src/data/index";
const OUT = process.env.OUT_DIR ?? "/tmp/nuclide-corpus";
mkdirSync(OUT, { recursive: true });
type Rec = { id: string; kind: string; name: string; brand?: string; code?: string; aka?: string[]; tldr?: string; summary?: string };
const all = ALL_INPUTS as unknown as Rec[];
const map: Record<string, { kind: string; name: string; text: string }> = {};
const byKind: Record<string, string[]> = {};
for (const e of all) {
  const text = [e.name, e.brand, e.code, (e.aka ?? []).join(" "), e.tldr, e.summary].filter(Boolean).join(" ");
  map[e.id] = { kind: e.kind, name: e.name, text };
  const line = `### ${e.id} [${e.kind}] ${e.name}${e.brand ? " / " + e.brand : ""}${e.code ? " / " + e.code : ""}\nTLDR: ${e.tldr ?? ""}\nSUM: ${(e.summary ?? "").slice(0, 1400)}\n`;
  (byKind[e.kind] ??= []).push(line);
}
writeFileSync(`${OUT}/corpus.json`, JSON.stringify(map));
for (const [k, lines] of Object.entries(byKind)) writeFileSync(`${OUT}/${k}.txt`, lines.join("\n"));
console.log("entities", Object.keys(map).length, "->", OUT);
