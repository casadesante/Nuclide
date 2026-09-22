/**
 * Check one corpus file before it is wired into the graph.
 *
 *   npx tsx scripts/check-records.ts src/data/rp/isotopes.ts
 *
 * Validates every exported record against the schema, enforces the id rules, and lists any
 * relationship that points at an id this repository does not hold (a warning, because the id may
 * live in a file another author is writing; the build itself rejects dangling references).
 */
import { EntitySchema, KINDS, REL_FIELDS } from "@/lib/schema";
import { ALL_INPUTS } from "@/data";
import { resolve } from "node:path";

const path = process.argv[2];
if (!path) {
  console.error("usage: npx tsx scripts/check-records.ts <file>");
  process.exit(2);
}

const ID_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const ID_KEYS = new Set([...REL_FIELDS, "refs", "pipeline", "investors", "pairedWith"]);
const SCALAR_ID_KEYS = new Set(["parent", "institutionId", "acquiredBy", "a", "b", "targetId", "indicationId"]);

function collectRefs(node: unknown, out: Set<string>): void {
  if (Array.isArray(node)) { for (const n of node) collectRefs(n, out); return; }
  if (node && typeof node === "object") {
    for (const [k, v] of Object.entries(node as Record<string, unknown>)) {
      if (ID_KEYS.has(k) && Array.isArray(v)) v.forEach((x) => typeof x === "string" && out.add(x));
      else if (SCALAR_ID_KEYS.has(k) && typeof v === "string") out.add(v);
      else collectRefs(v, out);
    }
  }
}

async function main() {
const mod: Record<string, unknown> = await import(resolve(process.cwd(), path));
const records = Object.values(mod).flatMap((v) => (Array.isArray(v) ? v : [])) as Array<Record<string, unknown>>;
if (!records.length) {
  console.error(`No exported array of records found in ${path}`);
  process.exit(1);
}

const errors: string[] = [];
const ids = new Set<string>();
const existing = new Set(ALL_INPUTS.map((e) => e.id));

for (const r of records) {
  const id = String(r.id ?? "<no id>");
  if (!ID_RE.test(id)) errors.push(`${id}: id must be kebab-case (a-z, 0-9 and hyphens)`);
  if (ids.has(id)) errors.push(`${id}: duplicate id inside this file`);
  ids.add(id);
  if (existing.has(id)) errors.push(`${id}: this id already exists in the corpus — extend that record instead`);
  if (!KINDS.includes(r.kind as never)) errors.push(`${id}: unknown kind "${String(r.kind)}"`);
  const parsed = EntitySchema.safeParse(r);
  if (!parsed.success) {
    for (const i of parsed.error.issues) errors.push(`${id}: ${i.path.join(".")} ${i.message}`);
  }
  const tldr = String(r.tldr ?? "");
  if (tldr && tldr.length < 25) errors.push(`${id}: tldr is too short to help anyone`);
  if (!Array.isArray(r.links) || (r.links as unknown[]).length === 0) errors.push(`${id}: needs at least one source in links[]`);
}

const refs = new Set<string>();
collectRefs(records, refs);
const unknown = [...refs].filter((r) => !ids.has(r) && !existing.has(r)).sort();

console.log(`${path}: ${records.length} records, ${errors.length} errors, ${unknown.length} references to ids not in this repository`);
if (errors.length) {
  console.log("\nERRORS");
  for (const e of errors) console.log("  " + e);
}
if (unknown.length) {
  console.log("\nREFERENCES NOT FOUND (remove them, or keep only if another file in the same batch defines them)");
  for (const u of unknown) console.log("  " + u);
}
process.exit(errors.length ? 1 : 0);
}
void main();
