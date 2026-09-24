import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { Container, PageHeader } from "@/components/ui";
import stats from "@/data/universe-stats.json";
import { UniverseIdeas } from "@/components/universe/UniverseIdeas";

export const metadata: Metadata = pageMeta({ title: "Ideas from the universe", description: "Computed openings in radiopharmaceuticals: every cross-link between approved products, trials, papers, congress abstracts, patents and published unmet needs, with the evidence behind each one.", path: "/universe/ideas/" });

export default function Page() {
  return (
    <>
      <PageHeader kicker={<Link href="/universe/" className="hover:underline">The universe</Link>} title="Ideas from the universe"
        ledeNode={<>{`${stats.ideas.toLocaleString()} ideas across ${Object.keys(stats.ideaLenses).length} lenses, rebuilt from the data on ${stats.generated}. Every idea is a count over public data with the rows behind it one click away.`} The hand-researched opportunities, each with full due diligence, are on <Link href="/opportunities/" className="text-accent hover:underline">Opportunities</Link>.</>} />
      <Container className="pb-16"><UniverseIdeas /></Container>
    </>
  );
}
