import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { Container, PageHeader } from "@/components/ui";
import stats from "@/data/universe-stats.json";
import { UniverseBrowser } from "@/components/universe/UniverseBrowser";

export const metadata: Metadata = pageMeta({ title: "Radiopharmaceutical papers", description: "Every article in the core nuclear medicine journals and radiopharmaceutical publications from Europe PMC since 2015, tagged by target, indication, isotope, role and paper type, one year at a time.", path: "/universe/papers/" });

export default function Page() {
  return (
    <>
      <PageHeader kicker={<Link href="/universe/" className="hover:underline">The universe</Link>} title="Radiopharmaceutical papers"
        lede={`${stats.papers.toLocaleString()} papers from ${stats.paperYears[0]} to ${stats.paperYears[stats.paperYears.length - 1]}: every article in the core nuclear medicine journals (J Nucl Med, EJNMMI, J Nucl Cardiol, Clin Nucl Med and others), plus radiopharmaceutical papers from any other journal in Europe PMC. The latest two years load first; add years from the Years menu.`} />
      <Container className="pb-16"><UniverseBrowser dataset="papers" years={stats.paperYears} /></Container>
    </>
  );
}
