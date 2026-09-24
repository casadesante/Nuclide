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
        lede={`${stats.abstracts.toLocaleString()} abstracts from ${stats.meetings.length} meetings (${stats.meetings.join(", ")}).`} />
      <Container className="pb-16"><UniverseBrowser dataset="abstracts" /></Container>
    </>
  );
}
