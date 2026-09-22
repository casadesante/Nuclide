# Nuclide: total information dominance on radiopharmaceuticals.

Nuclide is an open, cited knowledge graph of nuclear medicine — **therapy and diagnostic imaging alike**. Every isotope, ligand, tracer, therapy, target, indication, trial, company, institution, person, technology, key paper, journal, pairing, roadmap, bottleneck and idea gets one page, with a plain-English TL;DR before the technical layer and links in every direction.

It exists so that a clinician, a medical physicist, a radiochemist, a manufacturer, an investor or a patient can start at any object — lutetium-177, PSMA, Pluvicto, VISION, a Ga-68 generator, the actinium-225 supply problem — and walk to everything connected to it: the state of the art, the history, the supply chain, and what is coming.

The whole corpus is in this repository as TypeScript records: data under **CC BY-NC 4.0**, code under **MIT**. Corrections are welcome as issues or pull requests; the same validation gate runs on every contribution.

> **Work in progress. Verify at source.** Every fact here is being built and checked in the open and may be incomplete, out of date or wrong. Nothing here is medical advice. Check anything that matters at its primary source — every record links its own.

## What is in the corpus

811 records, each with a TL;DR, a technical summary, an `asOf` date and at least one source link:

- 36 isotopes — half-life, emission class, tissue range, production route, supply state, theranostic partners
- 95 agents — approved therapies and tracers plus clinical-stage candidates, with their regulatory history
- 68 technologies — chelation chemistry, generators, cyclotron and reactor production, scanners, dosimetry, quality control
- 29 targets, 44 indications, 12 fronts, 4 pathways
- 135 trials, 14 pairings (theranostic pairs, combinations, sequences and cautions)
- 83 companies, 54 institutions, 47 people, 21 journals, 23 key papers, 12 collections
- 14 bottlenecks, 36 ideas, 8 roadmaps, 76 glossary terms

Coverage is deliberately wider than oncology: prostate and neuroendocrine theranostics sit beside amyloid and tau PET, myocardial perfusion and amyloidosis imaging, infection imaging, radioiodine for thyroid disease, radioembolisation and bone-targeted therapy.

Print the counts yourself with `npm run validate`.

## Provenance and attribution

Nuclide is a fork of **[OnCo](https://github.com/judegomila/OnCo)** by Jude Gomila — its knowledge-graph engine, site, static API, MCP server, CLI and validation gate, adapted to a new domain:

- **530 records** were carried over from OnCo's corpus, being the radiopharmaceutical-relevant slice of it (agents, trials, targets, institutions, people, papers and related records), and were re-scoped for this corpus. Every carried file keeps a header crediting OnCo, and the data licence (CC BY-NC 4.0) follows the records.
- **~280 records** are new to Nuclide: every isotope, the physics and radiochemistry glossary, the supply-chain bottlenecks, non-oncology indications, diagnostic tracers, and the fronts and roadmaps of the field.
- The engine gained an `isotope` kind, and OnCo's `cancer` kind became `indication` so that cardiology, neurology and infectious disease fit beside oncology.
- Oncology-only surfaces that do not transfer (chemotherapy regimens, staging, immune-related adverse events, survivorship, tumour boards, patient navigator, incidence maps) were removed rather than half-ported. What remains is listed below.

## What the site does

- **One page per object**, with backlinks: everything that references a record is shown on it.
- **Isotope pages** give the physics (half-life, emissions, particle class, range in tissue), the production route, the supply position and the theranostic partner.
- **Indexes with facets** for every kind: sort agents by approval year, isotopes by emission, trials by phase.
- **Explore, Compare, Landscape grid, Path finder, Query builder, Graph explorer, Timeline** — the cross-cutting views.
- **Ask** answers a question from the corpus with citations, never from a model's memory.
- **Evidence and trial pages** state results as published, with endpoints in plain words.
- **Supply, manufacturing and bottleneck pages** for the constraint that actually governs this field.
- **Audit, freshness, history, corrections and changelog** pages that say out loud what is stale, contradictory or wrong.
- **Static JSON API** under `/api/v1/` with CORS, per-record Markdown context files for language models, Atom feeds and RDF triples.
- **MCP server and CLI** in `packages/`, so an agent or a script can search, fetch, compare and ask over the corpus.

## Quickstart

```bash
npm install
npm run validate        # loads the graph: schema, ids, references, counts per kind
npm run dev             # http://localhost:3000
npm run build           # static export into out/
npm test                # unit tests
npm run typecheck
```

`npm run build` regenerates the JSON API, the ask index, embeddings, feeds and freshness data before exporting the site. Some of those steps fetch public data (Europe PMC, ClinicalTrials.gov, GitHub) and skip cleanly when offline.

### How the data stays current

Every pipeline below was re-pointed from oncology to nuclear medicine and run once against this
corpus before its cron was armed, so a scheduled run does work rather than fail. All times are UTC.

- `propose.yml` daily 03:23 — reads every snapshot and writes ranked record proposals to `public/proposals/latest.json`.
- `refresh-trials.yml` Mondays 06:17 — ClinicalTrials.gov counts and status changes for all 95 products.
- `a11y.yml` Mondays 05:17, `factcheck.yml` 06:41, `refresh-votes.yml` 07:17, `newsletter.yml` 07:31.
- `refresh-papers.yml` Tuesdays 05:41 — Europe PMC literature per entity.
- `links.yml` Wednesdays 04:17 — every external URL in the corpus.
- `refresh-fda.yml` Wednesdays 06:07 — openFDA Drugs@FDA, both submissions for corpus products and a
  radiopharmaceutical sweep by established pharmacologic class and by nuclide in the generic name.
- `refresh-preprints.yml` Wednesdays 06:17, `refresh-regional.yml` 06:37 — EMA register, ATC V09/V10.
- `refresh-research.yml` Thursdays 04:23, `refresh-pulse.yml` 05:17 (the nuclear-medicine journals,
  regulators and news wires, plus the congress harvest), `roadmap-watch.yml` 05:29.
- `refresh-hta.yml` 1st of each month 05:47 — NICE and G-BA decisions.

The refresh jobs open a pull request rather than committing to `main`, and leave it open, so nothing
machine-generated lands unread; one branch per pipeline, reused, so the queue stays small. Two repo
settings make that work, both under Settings -> Actions -> General: workflow permissions set to
read and write, and "Allow GitHub Actions to create and approve pull requests" enabled. GitHub will
not run checks on a pull request opened with `GITHUB_TOKEN` until someone approves them, so each of
these arrives with its checks pending approval. `ci.yml` runs on every push and pull request:
validate, typecheck, lint, tests, the freshness gate and a full build.

A feed that finds nothing reports zero rather than widening its filter, and no pipeline writes a
record: they write proposals for a human to check against the primary source.

The canonical origin lives in `src/lib/seo.ts` (`SITE`). It is a placeholder: **no domain is registered for this project yet**, so set it to your own before deploying — every canonical URL, sitemap entry and JSON-LD `url` is built from it.

## Repository layout

```
src/data/            The corpus: TypeScript records, one array per theme
  index.ts           ALL_INPUTS: every array that becomes part of the graph, plus derived isotope links
  rp/                The radiopharmaceutical corpus
    isotopes-therapy.ts, isotopes-imaging.ts     Isotope records
    agents-*.ts, targets-new.ts, technologies-new.ts, trials-new.ts, ...   New records
    carried-*.ts                                  Records carried from OnCo and re-scoped
  regional-approvals.ts, payloads.ts, calendar.ts, ...   Structured side data
src/lib/schema.ts    Zod schemas for every kind, KIND_META (routes, labels), REL_FIELDS
src/lib/graph.ts     Builds the graph: validates ids, resolves references, derives backlinks
src/lib/nav.ts       Navigation groups and every top-level route
src/app/             Next.js App Router pages; src/app/[kind]/ renders every index
src/components/      UI: EntityDetail (every object page), EntityBrowser (the shared table), schematics, icons, maps
scripts/             Validation, corpus tooling, API build, data refreshes
  validate.ts        The gate: schema + reference integrity
  check-records.ts   Check one corpus file before wiring it in
  gen-ids.ts         Regenerate docs/corpus-ids.md
docs/corpus-guide.md How to write a record that passes review
docs/corpus-ids.md   Every id in the corpus, by kind, for referencing
mcp/, packages/      MCP server, published MCP package and CLI
```

## Adding to the corpus

1. Read `docs/corpus-guide.md` (the rules) and `docs/corpus-ids.md` (the ids you can reference).
2. Write records into a file under `src/data/rp/`.
3. `npx tsx scripts/check-records.ts src/data/rp/<your-file>.ts` until it reports no errors.
4. Wire the export into `src/data/index.ts`, then `npm run validate`.

The rules that matter: never invent a number, date, approval, half-life or citation; omit a field rather than guess it; every record carries at least one real source URL; ids are kebab-case; British English; a plain-English `tldr` and a technical `summary`; `asOf` is the date you checked.

## Licence

- Code: MIT (`LICENSE`)
- Data and prose: CC BY-NC 4.0 (`LICENSE-DATA`), including the records carried from OnCo, which are attributed there.
