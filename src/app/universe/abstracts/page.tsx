import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { Container, PageHeader } from "@/components/ui";
import stats from "@/data/universe-stats.json";
import { UniverseBrowser } from "@/components/universe/UniverseBrowser";
import { societySummary } from "@/lib/universe";

export const metadata: Metadata = pageMeta({ title: "Congress abstracts", description: "Radiopharmaceutical and nuclear-imaging abstracts from the nuclear medicine congresses (SNMMI, EANM, ASNC, WMIC) and the oncology congresses (ASCO, ESMO, AACR): title, authors, code, tags and the official link. Abstract text stays with the publisher.", path: "/universe/abstracts/" });

export default function Page() {
  return (
    <>
      <PageHeader kicker={<Link href="/universe/" className="hover:underline">The universe</Link>} title="Congress abstracts"
        lede={`${stats.abstracts.toLocaleString()} abstracts from ${stats.meetings.length} meetings: ${societySummary(stats.meetings)}. From the oncology congresses (ASCO, ESMO, AACR and the other meetings published in their journals), only abstracts about a radiopharmaceutical or nuclear imaging are included. The latest two years load first; add years from the Years menu, or pick a society.`} />
      <Container className="pb-16"><UniverseBrowser dataset="abstracts" years={stats.abstractYears} /></Container>
    </>
  );
}
