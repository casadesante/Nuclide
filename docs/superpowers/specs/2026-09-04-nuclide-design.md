# Nuclide design (2026-09-04, updated for the radiopharmaceutical fork)

This spec originally described OnCo, an oncology knowledge graph. Nuclide forked that engine on 2026-09-22 and
re-scoped it to radiopharmaceuticals; the sections below are updated to match. See `docs/FORK-NOTES.md` for the
authoritative summary of what changed.

## Purpose

A public web app and repository that lets anyone see, for every isotope, agent, technology, target and indication in
nuclear medicine (therapy and diagnostic imaging alike), the current state of the art, the history, and what is
coming, and follow links between technologies, targets, agents, companies, institutions, pathways, trials, pairings,
roadmaps, ideas, and terms. Non-technical readers get a TL;DR on every page; technical readers get a sourced summary.

## Non-goals

- No user accounts, server, or database. Static export only.
- No patient data, ever.
- No live domain claim: `SITE` in `src/lib/seo.ts` is a placeholder until one is registered.

## Architecture

- **Corpus**: TypeScript records in `src/data/rp/` (and a handful of shared side-data files directly under `src/data/`), typed by Zod schemas in `src/lib/schema.ts`. One discriminated union `Entity` with the kinds listed in `src/lib/kinds.ts` (`KINDS`), including the `isotope` kind added for this fork. Base fields shared; kind-specific fields per schema.
- **Graph**: `src/lib/graph.ts` parses all records, enforces unique ids and resolves references, and derives backlinks (`incoming`) and neighbourhoods (`neighbours`).
- **Rendering**: Next.js App Router with `output: "export"`. Routes: `/` home, `/[kind]/` index (with special layouts for sections, technologies, indications, drugs, terms, companies, institutions), `/[kind]/[id]/` generic detail with kind-specific blocks, `/universities/`, `/about/`, `/api/`.
- **Search**: MiniSearch in the browser over `/api/v1/search.json`.
- **Map**: d3-geo Natural Earth projection over world-atlas TopoJSON fetched client-side; dot size = score.
- **Ranking**: `src/lib/ranking.ts`, disclosed formula (institution rank, corpus link count).
- **API**: `scripts/build-api.ts` emits `public/api/v1/{all,search,<kind>,ranking,meta}.json` and `entities/<id>.json`. CORS headers via `vercel.json`.
- **Validation**: `npm run validate` and vitest. Build fails on dangling references.

## Data model decisions (carried from OnCo, still true)

- Relationship arrays of ids rather than a separate edge table: simplest to author, and backlinks are derived so consistency is automatic.
- Pairings are first-class objects (`a`, `b`, `pairingType` including `caution`) because "what works together" and "what does not" is a core question (theranostic pairs, combinations, sequences).
- Roadmaps are ordered steps with `status` (historic/current/emerging/speculative) and refs, so speculation is visually separated from evidence.
- Ideas carry `hypothesis`, `rationale`, `test`, `maturity`.
- Indications carry `standardOfCare` by setting, `stateOfArt`, `history` timeline with refs, `pipeline`, `openProblems`.

## What changed in the fork

- Added the `isotope` kind (route `/isotopes/`): half-life, emission class, tissue range, production route, supply state, theranostic partner.
- Renamed OnCo's `cancer` kind to `indication` so cardiology, neurology, infection and endocrine disease sit beside oncology.
- `drug` now covers therapeutic agents and diagnostic tracers together.
- Removed oncology-only surfaces that do not transfer to this scope (see `docs/FORK-NOTES.md` for the list) rather than half-porting them.
- 530 records carried over from OnCo and re-scoped; roughly 280 records written new for isotopes, physics/radiochemistry terms, supply-chain bottlenecks and non-oncology indications.

## Editorial rules

See `docs/FORK-NOTES.md` and `docs/corpus-guide.md`. Summarised: date everything, cite over recall, prefer unknown to guessed, no patient data, no invented numbers.

## Deployment

Public GitHub repository `casadesante/Nuclide`; Vercel static deployment via CLI.

## Open questions

- Whether to move the corpus to a non-TypeScript format for non-developer contributors.
- Automated ClinicalTrials.gov and FDA/EMA ingestion cadence for the radiopharmaceutical-specific fields (supply state, production route).
- Expert review workflow and badges for the isotope and radiochemistry tracks.
