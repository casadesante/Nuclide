import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { Container, PageHeader } from "@/components/ui";
import { UniverseSearch } from "@/components/universe/UniverseSearch";
import { LENS } from "@/lib/universe";
import stats from "@/data/universe-stats.json";

export const metadata: Metadata = pageMeta({
  title: "The radiopharmaceutical universe",
  description: "Everything public about radiopharmaceuticals in one searchable place: approved products in 28 countries and regions, every registered trial, papers, congress abstracts, patents and published unmet needs, cross-linked into computed ideas.",
  path: "/universe/",
});

const n = (x: number) => x.toLocaleString("en-GB");

const PARTS = [
  { href: "/universe/ideas/", title: "Ideas", count: stats.ideas, blurb: "Openings computed from the cross-links, each with its evidence: therapy without imaging, targets validated by ADCs, isotopes never trialled, agents approved abroad and more." },
  { href: "/universe/gaps/", title: "Unmet needs", count: stats.gaps, blurb: "Sentences from papers and congress abstracts that state an unmet need or limitation, quoted with the citation and tagged by indication, target and theme." },
  { href: "/universe/products/", title: "Approved and registered products", count: stats.products, blurb: `Registrations at ${stats.regions} regulators, grouped into ${stats.agents} agents, with the regulator's own link and non-English names kept.` },
  { href: "/universe/trials/", title: "Trials", count: stats.trials, blurb: `ClinicalTrials.gov (${n(stats.trialsCTG)}) and the EU Clinical Trials Information System (${n(stats.trialsCTIS)}), every radiopharmaceutical trial found.` },
  { href: "/universe/papers/", title: "Papers", count: stats.papers, blurb: `Europe PMC publications since ${stats.paperYears[0]}, tagged by target, indication, isotope and paper type.` },
  { href: "/universe/abstracts/", title: "Congress abstracts", count: stats.abstracts, blurb: `${stats.meetings.length} meetings since ${stats.abstractYears[0]}: SNMMI, EANM, ASNC and WMIC, plus the radiopharmaceutical abstracts of ASCO, ESMO and AACR. Title, authors, code and the official link.` },
  { href: "/universe/patents/", title: "Patents", count: stats.patents, blurb: "Worldwide patent publications in the radiopharmaceutical classes since 2015, from every office Google Patents indexes." },
];

export default function Page() {
  return (
    <>
      <PageHeader title="The radiopharmaceutical universe"
        lede={`Everything public about radiopharmaceuticals, in one place you can query: ${n(stats.products)} approved or registered products in ${stats.regions} countries and regions, ${n(stats.trials)} trials, ${n(stats.papers)} papers, ${n(stats.abstracts)} congress abstracts, ${n(stats.patents)} patents and ${n(stats.gaps)} published unmet needs, cross-linked into ${n(stats.ideas)} ideas.`} />
      <Container className="pb-16">
        <section aria-label="Search the universe" className="max-w-5xl">
          <UniverseSearch />
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold tracking-tight">Browse each part</h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {PARTS.map((p) => (
              <Link key={p.href} href={p.href} className="card p-4 hover:border-foreground/25">
                <p className="text-2xl font-semibold tabular-nums">{n(p.count)}</p>
                <p className="mt-0.5 font-semibold">{p.title}</p>
                <p className="mt-1 text-sm text-muted">{p.blurb}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-12 max-w-4xl">
          <h2 className="text-lg font-semibold tracking-tight">How the ideas are found</h2>
          <p className="mt-2 text-sm text-muted">Each lens is a rule run over the rows above. A lens that finds nothing shows zero rather than loosening its rule.</p>
          <ul className="mt-3 space-y-2 text-sm">
            {Object.entries(LENS).map(([k, v]) => (
              <li key={k}>
                <Link href={`/universe/ideas/?lens=${k}`} className="font-medium hover:underline">{v.label}</Link>
                <span className="ml-2 tabular-nums text-muted">{n((stats.ideaLenses as Record<string, number>)[k] ?? 0)}</span>
                <span className="block text-muted">{v.tip}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12 max-w-4xl text-sm text-muted">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">Sources and limits</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Products: FDA (openFDA Drugs@FDA), EMA, Health Canada, Swissmedic and public regulator lists or announcements for Japan, China, Korea, Taiwan, India, Australia, the UK, Ireland, Latin America, Russia, the Middle East and South-East Asia. New Zealand&apos;s Medsafe lists no radiopharmaceuticals.</li>
            <li>Trials: ClinicalTrials.gov and EU CTIS. The WHO registry portal and the Chinese and Japanese registries do not allow automated access, so their trials appear here only when also registered on ClinicalTrials.gov.</li>
            <li>Papers: Europe PMC, which includes PubMed, plus every article of 42 nuclear medicine journals.</li>
            <li>Congress abstracts: SNMMI (Journal of Nuclear Medicine supplements), EANM (EJNMMI supplements), ASNC (Journal of Nuclear Cardiology supplements) and WMIC (Molecular Imaging and Biology supplements). From ASCO (Journal of Clinical Oncology supplements), AACR (Cancer Research and Molecular Cancer Therapeutics supplements) and ESMO (Annals of Oncology, ESMO Open and ESMO Immuno-Oncology and Technology supplements, plus the 2015 European Cancer Congress, held jointly with ECCO, in the European Journal of Cancer), only the abstracts about a radiopharmaceutical or nuclear imaging. ESMO abstracts and the ASCO 2015, 2016 and 2018 annual meetings are screened on their titles, because their abstract text is not openly available. Behind paywalls and missing: EANM 2015, 2018 and 2019, ASNC 2015 to 2020 and 2023, WMIC 2017, 2018, 2023 and 2024.</li>
            <li>Patents: Google Patents, which indexes over 100 patent offices and gives English titles for most non-English filings.</li>
            <li>Tags come from word rules, not reading: an idea says what the data counts, and the evidence list is there to check it. Last rebuilt {stats.generated}.</li>
          </ul>
        </section>
      </Container>
    </>
  );
}
