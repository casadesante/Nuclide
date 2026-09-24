import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { Container, PageHeader } from "@/components/ui";
import stats from "@/data/universe-stats.json";
import { UniverseBrowser } from "@/components/universe/UniverseBrowser";

export const metadata: Metadata = pageMeta({ title: "Unmet needs", description: "Single sentences from radiopharmaceutical papers and congress abstracts that state an unmet need, limitation or open question, each quoted with its citation and tagged by indication, target, isotope and theme.", path: "/universe/gaps/" });

export default function Page() {
  return (
    <>
      <PageHeader kicker={<Link href="/universe/" className="hover:underline">The universe</Link>} title="Unmet needs"
        lede={`${stats.gaps.toLocaleString()} statements quoted from the literature and congress abstracts. Pick an indication or theme to see where needs cluster, then open the source.`} />
      <Container className="pb-16"><UniverseBrowser dataset="gaps" /></Container>
    </>
  );
}
