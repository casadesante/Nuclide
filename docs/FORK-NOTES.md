# Fork notes (read this before editing copy or tests)

Nuclide is a fork of OnCo (https://github.com/judegomila/OnCo), an oncology knowledge graph, re-scoped to
radiopharmaceuticals: therapy (radioligand therapy, targeted alpha therapy, PRRT, radioiodine,
radioembolisation, bone-targeted) and diagnostics (PET and SPECT tracers, in oncology, neurology,
cardiology, infection and endocrine disease).

Facts about this repository, for anyone (human or agent) editing it:

- Brand: **Nuclide**. Tagline: "total information dominance on radiopharmaceuticals." Repo:
  https://github.com/casadesante/Nuclide. No domain is registered; `SITE` in `src/lib/seo.ts` is a
  placeholder and every canonical URL derives from it.
- Kinds: the OnCo `cancer` kind is now `indication` (route `/indications/`), and there is a new
  first-class `isotope` kind (route `/isotopes/`). `drug` covers therapeutic agents **and** diagnostic
  tracers; its plural label is "Agents".
- The corpus lives in `src/data/rp/`. Files named `carried-*.ts` hold records carried from OnCo and
  re-scoped; the rest are new. `src/data/index.ts` assembles `ALL_INPUTS` and derives isotope links.
- Oncology-only features were deleted, not ported: chemotherapy regimens, staging, immune-related adverse
  events, side-effect and symptom lookups, survivorship, hair loss, tumour boards, biomarker matrix,
  patient navigator, prep packs, second opinions, complementary medicine, incidence maps, the "for me"
  personalisation, coverage/HTA of cancer drugs, and the completeness dashboard (its denominators were
  oncology lists). Do not reintroduce them; if a test or a page still references one, delete the
  reference.
- Never invent a fact. No number, date, approval, half-life, price, count or citation goes in unless a
  real source says it. Omit the field instead. Every record needs at least one real source URL.
- British English. Plain-English `tldr`, technical `summary`, `asOf` set to the date the fact was checked.
- Corpus rules in full: `docs/corpus-guide.md`. Ids available to reference: `docs/corpus-ids.md`
  (regenerate with `npx tsx scripts/gen-ids.ts`).
- Gates: `npx tsc --noEmit`, `npx tsx scripts/validate.ts`, `npx vitest run`, `npx next build`.
