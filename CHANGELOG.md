# Changelog

All notable changes to Nuclide are recorded here. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [0.1.0] - 2026-09-22

- Nuclide forked from [OnCo](https://github.com/judegomila/OnCo), an oncology knowledge graph, and re-scoped to radiopharmaceuticals: therapy (radioligand therapy, targeted alpha therapy, PRRT, radioiodine, radioembolisation, bone-targeted) and diagnostics (PET and SPECT tracers, across oncology, neurology, cardiology, infection and endocrine disease).
- Engine changes: added a first-class `isotope` kind (route `/isotopes/`); renamed OnCo's `cancer` kind to `indication` (route `/indications/`); the `drug` kind now covers therapeutic agents and diagnostic tracers together, labelled "Agents".
- Carried over 530 records from OnCo's corpus (agents, trials, targets, institutions, people, papers and related records that are relevant to radiopharmaceuticals) and re-scoped them for the new domain. Each carried file keeps a header crediting OnCo; the data licence (CC BY-NC 4.0) follows the records.
- Wrote roughly 280 new records: every isotope, the physics and radiochemistry glossary, supply-chain bottlenecks, non-oncology indications, diagnostic tracers, and the fronts and roadmaps of the field.
- Removed oncology-only surfaces that do not transfer to this scope, rather than half-porting them: chemotherapy regimens, staging, immune-related adverse events, side-effect and symptom lookups, survivorship, hair loss, tumour boards, the biomarker matrix, patient navigator, prep packs, second opinions, complementary medicine, incidence maps, the "for me" personalisation, coverage/HTA of cancer drugs, and the completeness dashboard.

For current record counts by kind, run `npm run validate`.
