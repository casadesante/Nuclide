import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { Container, PageHeader } from "@/components/ui";
import stats from "@/data/universe-stats.json";
import { UniverseBrowser } from "@/components/universe/UniverseBrowser";

export const metadata: Metadata = pageMeta({ title: "Radiopharmaceutical patents", description: "Worldwide patent publications in the radiopharmaceutical classes (A61K51 and radioactive filings in C07B59, G21G1 and G21G4) since 2015, from every patent office Google Patents covers.", path: "/universe/patents/" });

export default function Page() {
  return (
    <>
      <PageHeader kicker={<Link href="/universe/" className="hover:underline">The universe</Link>} title="Radiopharmaceutical patents"
        lede={`${stats.patents.toLocaleString()} patent publications from ${stats.patentYears[0]} to ${stats.patentYears[stats.patentYears.length - 1]}, titles in English where the office provides one. The latest two years load first.`} />
      <Container className="pb-16"><UniverseBrowser dataset="patents" years={stats.patentYears} /></Container>
    </>
  );
}
