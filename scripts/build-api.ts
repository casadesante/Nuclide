/**
 * Emits the corpus as static files under public/api/v1/ (and the Atom feeds under public/feeds/).
 * Run before `next build` (see package.json). Output is gitignored.
 *
 *   all.json            every entity plus an incoming-link map          all.ndjson   one entity per line
 *   <plural>.json       entities of one kind                             <plural>.csv the same, flattened
 *   entities/<id>.json  one entity with its neighbours                   schema.json  JSON Schema of an entity
 *   search.json, ranking.json, benchmark.json, meta.json                 feeds: see scripts/build-feeds.ts
 *   my-indications.json the indication chooser list the header fetches on demand
 */
import { existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { z } from "zod";
import { graph } from "../src/lib/graph";
import { EntitySchema, KIND_META, KINDS, routeFor } from "../src/lib/schema";
import { siteSearchDocs } from "../src/lib/search-index";
import { myCancerList } from "../src/lib/my-indication-list";
import { rankInstitutions } from "../src/lib/ranking";
import { benchmark } from "../src/data/benchmark";
import { flattenForCsv, toCsv, toNdjson, EXPORT_LICENCE } from "../src/lib/csv";
import { buildFeeds } from "./build-feeds";
import { apiFiles, FEEDS } from "./api-layout";

const out = join(process.cwd(), "public", "api", "v1");
// Clear the previous build, keeping rdf/: scripts/build-triples.ts rewrites only the Turtle files whose content changed
// (about 11,000 small files) and removes stale ones itself, so incremental builds do not touch them all.
if (existsSync(out)) for (const name of readdirSync(out)) if (name !== "rdf") rmSync(join(out, name), { recursive: true, force: true });
mkdirSync(join(out, "entities"), { recursive: true });
mkdirSync(join(out, "for-me"), { recursive: true });

const g = graph();
const write = (name: string, data: unknown) => writeFileSync(join(out, name), JSON.stringify(data, null, 0));
const writeText = (name: string, text: string) => writeFileSync(join(out, name), text);

const incoming: Record<string, Array<{ id: string; kind: string }>> = {};
for (const e of g.entities) {
  const groups = g.incoming(e.id);
  incoming[e.id] = [...groups.values()].flat().map((x) => ({ id: x.id, kind: x.kind }));
}

write("all.json", { entities: g.entities, incoming });
writeText("all.ndjson", toNdjson(g.entities.map((e) => ({ ...e, route: routeFor(e) }))));
write("search.json", siteSearchDocs());
for (const k of KINDS) {
  const list = g.kind(k);
  write(`${KIND_META[k].plural}.json`, list);
  // CSV: one row per entity, scalars as-is, arrays of scalars joined with "; ", nested records as JSON; column order is the union of keys in first-seen order.
  const rows = list.map((e) => flattenForCsv({ ...(e as unknown as Record<string, unknown>), route: routeFor(e) }));
  writeText(`${KIND_META[k].plural}.csv`, toCsv(rows));
}
for (const e of g.entities) {
  const neighbours: Record<string, Array<{ id: string; kind: string; name: string; route: string }>> = {};
  for (const [k, list] of g.neighbours(e.id)) neighbours[k] = list.map((x) => ({ id: x.id, kind: x.kind, name: x.name, route: routeFor(x) }));
  write(`entities/${e.id}.json`, { entity: e, route: routeFor(e), neighbours });
}
// JSON Schema of one entity (the discriminated union over kinds), generated from the Zod schema that validates the corpus.
try {
  const schema = z.toJSONSchema(EntitySchema, { unrepresentable: "any", io: "output" }) as Record<string, unknown>;
  write("schema.json", { $schema: "https://json-schema.org/draft/2020-12/schema", $id: "https://nuclide.cc/api/v1/schema.json", title: "Nuclide entity", description: "One record of the Nuclide corpus. Generated from src/lib/schema.ts, which is the source of truth and is enforced at build time.", ...schema });
} catch (err) {
  console.warn(`api: schema.json not written (${err instanceof Error ? err.message : String(err)})`);
}

// The three files the /api, /build and /eval pages document: the indication chooser list the header
// fetches on demand, the institution ranking with its score components, and the open question set.
write("my-indications.json", myCancerList());
write("ranking.json", rankInstitutions());
write("benchmark.json", benchmark);

const feeds = buildFeeds();

// The file list and feed list live in scripts/api-layout.ts, shared with the OpenAPI description (build-openapi.ts).
const counts = Object.fromEntries(KINDS.map((k) => [k, g.kind(k).length])) as Record<(typeof KINDS)[number], number>;
write("meta.json", {
  built: new Date().toISOString(), schema: 1, version: process.env.npm_package_version ?? null,
  attribution: EXPORT_LICENCE, licenseUrl: "https://creativecommons.org/licenses/by-nc/4.0/",
  counts, total: g.entities.length, license: "CC BY-NC 4.0", source: "https://github.com/casadesante/Nuclide",
  files: apiFiles(counts),
  feeds: FEEDS,
  openapi: "/api/v1/openapi.json",
  citation: "https://github.com/casadesante/Nuclide/blob/main/CITATION.cff",
  releases: "https://github.com/casadesante/Nuclide/releases",
});

console.log(`api: wrote ${g.entities.length} entities to public/api/v1 (json, ndjson, ${KINDS.length} csv, schema); feeds: ${feeds.join(", ")}`);
