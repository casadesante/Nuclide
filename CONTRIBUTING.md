# Contributing to Nuclide

Thank you. Nuclide is a public map of radiopharmaceuticals — therapy and diagnostic imaging alike — and it is only as good as its facts. This guide covers how to propose or fix records, how to deepen an indication, how reviews work, and the checks every change must pass.

## The two rules

1. **Cite it.** New facts need a source URL in `links` (or a `wikipedia` link plus a trial `nct`). If you cannot source it, leave the field out. Unknown beats guessed.
2. **Date it.** Update `asOf` on any record you change.

And one hard line: **no patient data.** The corpus holds public information about isotopes, agents, technologies, products, organisations, trials, and public professional figures only.

## One gate: every change starts as an issue

Nothing on Nuclide is edited directly, and the site carries no "edit this record" links. Every correction and improvement enters through an issue form so it can be checked for sourcing, safety (no patient data, no medical advice, no promotional claims) and validity before anyone sees it. The forms live in `.github/ISSUE_TEMPLATE/` and are opened, prefilled, from the site:

| Form | Use it when |
|---|---|
| Suggest an edit | A field on a record is wrong or missing and you have a source. Opened from the sidebar of every page. |
| Fact correction | Text states something false; quote it and say what it should say. |
| Stale fact | It was true and events overtook it (a readout, a withdrawal, a new guideline). |
| Trial readout | A trial reported, was updated or stopped; give the figures and the source. |
| Regional approval | A product was approved, filed, rejected or withdrawn in a region we do not show. |
| New object | Something is missing. `npm run new -- --kind drug --name "X"` writes a validated stub to paste into the issue (kind `drug` covers therapeutic agents and diagnostic tracers). |
| Translation fix / Translation review | A translated TL;DR is wrong, or you speak the language and want to sign off a batch. |
| Review this page | You checked a page against its sources as a clinician, scientist, regulatory specialist or advocate. |
| Accessibility, Bug report | The site, not the content, is broken. |

Then:

1. A maintainer triages within a week and asks for a source if one is missing. Unsourced changes are not merged.
2. The issue gets a review track (clinical, scientific, regulatory, patient advocate, organisation self-edit; see `.github/REVIEWERS.md`).
3. The maintainer makes the edit, or, if you can code, points you at the file. **Pull requests that change `src/data/` must reference a triaged issue**; the PR template asks for it. Record confirmed errors in `CORRECTIONS.md` in the same PR.
4. Merged changes appear at the next deploy and in `CHANGELOG.md`.

Discussion is separate from change: questions, interpretations and "is anyone working on this" go to the GitHub Discussions thread that the *Discuss* link on every page finds or starts (category "Objects", form in `.github/DISCUSSION_TEMPLATE/`). A discussion that ends in a fact becomes an issue.

## Ways to contribute

- **Fix a fact.** Use "Suggest an edit" on any page.
- **Fill a gap.** `/gaps/` lists objects with missing sources, thin links or empty sections.
- **Review a page.** `/review/` ranks the pages that most need a named reviewer, by track. See "Review tracks".
- **Review translations.** `/review/#translations` shows coverage per language; the Translation review form records your sign-off in `src/data/i18n/reviewed.ts`.
- **Add an object.** See below.
- **Deepen an indication.** Extend a record under `src/data/rp/`.

## Adding an object

1. Pick the kind: isotopes, agents, targets, technologies, trials and the rest each have a home under `src/data/rp/` (new material in `<kind>-new.ts`; records carried from OnCo in `carried-<kind>.ts`).
2. Scaffold it: `npm run new -- --kind <kind> --name "<name>"` writes `src/data/drafts/<id>.ts`, a schema-valid stub with every required field filled with a `TODO` placeholder and a checklist in the header. Or copy a neighbouring record. Ids are kebab-case and globally unique across all kinds; the scaffolder refuses an id that exists.
3. Write the `tldr` for someone with no background: one or two sentences, no jargon, no numbers unless essential. Write the `summary` for a clinician, scientist or radiochemist.
4. Link it: relationship arrays (`indications`, `targets`, `drugs`, `companies`, `trials`, ...) hold ids. Declare a link once; the other direction is derived.
5. Fill the structured fields where they apply: trials get `outcomes`, `enrolled`; agents get `dosing`, `regulatoryEvents`; isotopes get their physics fields (half-life, emission, production route).
6. Move the object into its data file under `src/data/rp/`, delete the draft, and run `npm run validate` (fails on a bad id, duplicate id or schema error) and `npm test`.
7. Propose it through the New object form, pasting the record. If you are also opening a PR, reference the issue and use the PR template.

## Style

- British English.
- No superlatives without a comparator. "First", "largest", "only" need a source.
- Failures are welcome: negative trials, withdrawn approvals, discontinued programmes. Mark them `status: "negative"` or `"withdrawn"`.
- Statuses are honest: `approved` means a regulator approved it; regional approvals go in `src/data/regional-approvals.ts` with the region.
- Never invent a number, date, approval, half-life, dose or citation. Omit the field instead.

## Review tracks

Two badges can appear on a page. Both are statements about the page on a date, not endorsements.

- **Expert** (`track: "expert"`): a named clinician, scientist or regulatory specialist read the page and its linked sources, checked the trial figures against the primary publication or the approval dates and indications against the label, flagged anything wrong, and signed off.
- **Patient advocate** (`track: "advocate"`): a named advocate or advocacy organisation reviewed the TL;DRs and the simple text for clarity, tone, and what a patient would need that is missing.

To review, pick a page from `/review/` (or click *Review this page* on any unreviewed page) and complete the Review issue form: the checklist for your track, what you found (with sources), your name, role and organisation, a profile URL for verification, and a **conflict-of-interest statement** (funding, employment, advisory roles, equity in the last three years; "None declared" is valid and is displayed). A maintainer verifies identity, fixes what you flagged through the normal gate, and records the sign-off in `src/data/reviews.ts`. Reviews without a COI statement are not recorded. See `.github/REVIEWERS.md` for tracks and verification rules.

## Organisation self-edits

Companies and institutions may propose changes to their own records through "Suggest an edit" with an official email domain or profile URL for verification. Promotional language is edited out; facts with sources are welcome.

## Trust and community tooling

- `npm run audit` — contradictions and staleness from the corpus alone (`public/audit.json`, rendered at `/audit/`).
- `npm run factcheck` — openFDA and ClinicalTrials.gov comparisons (`public/factcheck.json`); weekly via GitHub Actions.
- `npm run provenance` — last-edit commit per record from `git blame` (`public/provenance.json`, shown on each page).
- `npx tsx scripts/gen-issue-forms.ts` — keeps the kind and language dropdowns in the issue forms in sync with `KINDS` and `LANGS`; `--check` fails when they drift (also run by the tests).
- `CORRECTIONS.md` — every confirmed factual correction.
- `src/data/confidence.ts` — named probability estimates for ideas and speculative roadmap steps. Propose revisions with your name and reasoning.

## Code

TypeScript strict, Next.js App Router, static export, Tailwind. Keep components small; keep data out of components; keep shared-file edits (schema, layout, `EntityDetail`) separate from data PRs. `npm run typecheck`, `npm run lint`, `npm test`, and `npm run build` must pass; CI runs them on every pull request.

## Conduct and security

This project follows the [Contributor Covenant](CODE_OF_CONDUCT.md). Report security concerns as described in [SECURITY.md](SECURITY.md).

## Provenance

Part of this corpus (530 records: agents, trials, targets, institutions, people, papers and related records) was carried over from [OnCo](https://github.com/judegomila/OnCo) and re-scoped for radiopharmaceuticals. Data carried from OnCo is credited in the file header and remains under CC BY-NC 4.0. Do not remove that attribution.
