# Writing records

Every object in the graph is one record in a TypeScript file under `src/data/rp/`. One file per slice
of the field, one exported array per file:

```ts
import type { EntityInput } from "@/lib/schema";

export const therapyIsotopes: EntityInput[] = [
  { ... },
];
```

Check a file before it is wired in:

```bash
npx tsx scripts/check-records.ts src/data/rp/isotopes-therapy.ts
```

It must print `0 errors`. References to ids that do not exist yet are reported separately; remove them
unless another file in the same batch defines them.

## The rules

1. **Plain English first.** `tldr` is for someone with no background: one or two sentences, no jargon,
   no abbreviations that have not been spelled out. `summary` is for a clinician, physicist or
   engineer; paragraphs separated by blank lines.
2. **Never invent a number.** Doses, half-lives, response rates, prices, dates and supply figures come
   from a source you actually read, and that source goes in `links`. If you cannot verify a field,
   leave it out. An empty field is honest; a plausible-looking wrong one is not.
3. **Cite the primary source.** FDA label or approval letter, EMA EPAR, the registry entry on
   ClinicalTrials.gov, the paper's DOI, the society guideline, the company's own announcement.
   News write-ups only when nothing better exists, and then say so in the link label.
4. **`asOf`** is the date you checked the facts, `YYYY-MM-DD`.
5. **Ids are kebab-case** and stable: `lu-177`, `psma`, `netter-1`, `blue-earth-diagnostics`. Isotopes
   use element-mass (`ac-225`, `tc-99m`), agents use the generic name or the common shorthand
   (`lu-177-psma-617`, `f-18-flurpiridaz`), trials use the acronym (`zircon`, `netter-2`), people use
   `firstname-surname`.
6. **Link in every direction you can.** The relationship arrays (`indications`, `targets`,
   `technologies`, `isotopes`, `drugs`, `companies`, `institutions`, `trials`, `people`, `terms`,
   `keyPapers`, `journals`, `bottlenecks`, `related`) are what turn records into a graph. Declare a
   link once, on whichever side is more natural; the backlink is derived at build time.
   Only use ids listed in `docs/corpus-ids.md` or created in your own file.
7. **British English**, sentence case for headings and labels, no marketing language. Say what is
   known, say what is uncertain, and say who disputes it.
8. **Uncertainty is content.** If supply is contested or a readout is pending, write that in
   `summary` or `notes` with the date and the source.

## Fields every record has

`id`, `kind`, `name`, `tldr`, `summary`, `asOf`, and at least one entry in `links`.
Optional everywhere: `aka`, `status`, `wikipedia`, `tags`, `notes`, `simple`, `related`.

## Fields by kind

- **isotope** — `symbol` ("177Lu"), `element`, `massNumber`, `halfLife`, `emissions[]`,
  `emissionClass` (alpha | beta-minus | positron | gamma | auger | mixed), `use` (therapy | imaging |
  both), `tissueRange`, `production`, `supply` (adequate | tight | constrained | emerging |
  research-only), `supplyNote`, `chelators[]`, `pairedWith[]` (isotope ids), `since`.
- **drug** (any product: therapeutic radiopharmaceutical, diagnostic tracer, cold kit, device-like
  agent) — `modality` ("radioligand therapy", "PET tracer", "SPECT tracer", "alpha therapy",
  "radioembolisation", "cold kit"), `mechanism`, `brand`, `code`, `approvals[]`
  ({region, year, indication}), `dosing` ({route, schedule, monitoring, source}), `toxicity[]`
  ({event, anyGradePct, grade3PlusPct, source}), `regulatoryEvents[]`.
- **isotope vs drug**: `ac-225` is an isotope; `ac-225-psma-617` is a drug that uses it. Link the drug
  to the isotope through `related`.
- **indication** (disease or clinical question a radiopharmaceutical answers, oncological or not) —
  `group` ("prostate", "neuroendocrine", "neurology", "cardiology", "infection", "thyroid"),
  `burden`, `standardOfCare[]`, `stateOfArt[]`, `openProblems[]`.
- **technology** — `principle`, `strengths[]`, `limitations[]`, `since`, `dependsOn[]`.
- **target** — `biology`, `targetClass`, `symbol`, `whereFound[]`.
- **trial** — `phase` ("1" | "1/2" | "2" | "2/3" | "3" | "4" | "observational" | "platform"),
  `setting`, `nct`, `sponsor`, `result`, `yearReported`, `enrolled`, `outcomes[]`.
- **paper** — `journal`, `year`, `authors` ("Surname A, Surname B, et al."), `paperType`,
  `findings[]`, `whatItMeans`, `caveats[]`, `doi`, `pmid`, `participants`.
- **person** — `role`, `institutionId`, `specialisms[]`, `profiles[]`, `papers[]`, `orcid`.
- **company** — `hq`, `country` (two letters), `companyType` (pharma | biotech | diagnostics |
  imaging | devices | ai-software | radiopharma | cell-therapy | cro-services | nonprofit |
  investor), `website`, `ticker`, `founded`, `stage`.
- **institution** — `city`, `country`, `lat`, `lng`, `institutionType` (cancer-center | university |
  hospital | research-institute | government | consortium), `programs[]`.
- **bottleneck** — `stage`, `severity`, `metrics[]` ({label, value, url}), `causes[]`,
  `currentEfforts[]`, `successLooksLike`.
- **idea** — `hypothesis`, `rationale`, `test`, `maturity`, `actor`, `cost`, `horizonYears`.
- **roadmap** — `steps[]` ({era, title, description, status}), at least two, plus `watch[]`.
- **term** — `category` ("physics", "chemistry", "imaging", "therapy", "dosimetry", "regulation",
  "safety", "trials").
- **pairing** — `a`, `b` (ids), `rationale`, `evidence`, `pairingType` (combination | sequence |
  diagnostic-therapeutic | platform | caution).
- **collection** — `url`, `holds`, `license`, `maintainer`.
- **journal** — `publisher`, `url`, `scope`, `access`, `matchNames[]`.
- **section** (a front: a whole area of the field) — `order`, `icon`.

## A worked record

```ts
{
  id: "lu-177",
  kind: "isotope",
  name: "Lutetium-177",
  aka: ["177Lu", "Lu-177"],
  symbol: "177Lu",
  element: "Lutetium",
  massNumber: 177,
  tldr: "A radioactive metal that gives off short-range radiation. Attached to a molecule that sticks to a tumour, it irradiates the tumour from the inside while sparing most healthy tissue.",
  summary: "Lutetium-177 is the workhorse therapeutic radionuclide of the theranostic era...\n\nIts 208 keV gamma emission is imageable, so the same injection that treats the patient can be used for post-therapy SPECT and dosimetry.",
  halfLife: "6.65 days",
  emissions: ["β− 497 keV maximum (mean 134 keV)", "γ 113 keV (6.2%)", "γ 208 keV (10.4%)"],
  emissionClass: "beta-minus",
  use: "therapy",
  tissueRange: "Up to about 2 mm, mean roughly 0.7 mm",
  production: "Reactor. Carrier-added 176Lu(n,γ)177Lu, or no-carrier-added via 176Yb(n,γ)177Yb which decays to 177Lu.",
  supply: "tight",
  supplyNote: "Demand rose sharply after Pluvicto's approval; reactor capacity and enriched 176Yb are the constraints.",
  chelators: ["DOTA", "DOTAGA"],
  pairedWith: ["ga-68"],
  status: "approved",
  asOf: "2026-09-22",
  links: [
    { label: "IAEA: production of lutetium-177", url: "https://www.iaea.org/..." },
    { label: "FDA label: Pluvicto", url: "https://www.accessdata.fda.gov/..." },
  ],
  related: ["pluvicto", "lutathera"],
  tags: ["therapy", "beta emitter"],
}
```
