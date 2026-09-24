import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { Container, PageHeader } from "@/components/ui";
import stats from "@/data/universe-stats.json";
import { UniverseBrowser } from "@/components/universe/UniverseBrowser";

export const metadata: Metadata = pageMeta({ title: "Congress abstracts", description: "Abstracts from SNMMI, EANM, ASNC and WMIC annual meetings: title, authors, code, tags and the official link. Abstract text stays with the publisher.", path: "/universe/abstracts/" });

export default function Page() {
  return (
    <>
      <PageHeader kicker={<Link href="/universe/" className="hover:underline">The universe</Link>} title="Congress abstracts"
        lede={`${stats.abstracts.toLocaleString()} abstracts from ${stats.meetings.length} meetings, ${stats.abstractYears[0]} to ${stats.abstractYears[stats.abstractYears.length - 1]} (${stats.meetings.join(", ")}). The latest two years load first; add years from the Years menu.`} />
      <Container className="pb-16"><UniverseBrowser dataset="abstracts" years={stats.abstractYears} /></Container>
    </>
  );
}
