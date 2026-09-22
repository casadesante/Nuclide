import { ALL_INPUTS } from "@/data";
import { writeFileSync } from "node:fs";
const by: Record<string, string[]> = {};
for (const e of ALL_INPUTS) (by[e.kind] ??= []).push(`${e.id}  —  ${e.name}`);
let out = "# Ids in the corpus\n\nEvery object already in the graph. Reference these ids when you link a record; do not invent new ones for things that are already here.\n";
for (const k of Object.keys(by).sort()) { out += `\n## ${k} (${by[k].length})\n\n`; out += by[k].sort().map((l) => `- ${l}`).join("\n") + "\n"; }
writeFileSync("docs/corpus-ids.md", out);
console.log("wrote", ALL_INPUTS.length);
