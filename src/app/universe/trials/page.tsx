import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { Container, PageHeader } from "@/components/ui";
import stats from "@/data/universe-stats.json";
import { UniverseBrowser } from "@/components/universe/UniverseBrowser";

export const metadata: Metadata = pageMeta({ title: "Radiopharmaceutical trials", description: "Every radiopharmaceutical trial found on ClinicalTrials.gov and the EU Clinical Trials Information System, tagged by target, indication, isotope, role, phase and sponsor.", path: "/universe/trials/" });

export default function Page() {
  return (
    <>
      <PageHeader kicker={<Link href="/universe/" className="hover:underline">The universe</Link>} title="Radiopharmaceutical trials"
        lede={`${stats.trials.toLocaleString()} trials: ${stats.trialsCTG.toLocaleString()} from ClinicalTrials.gov and ${stats.trialsCTIS.toLocaleString()} from the EU register. Filter to trials where the radiopharmaceutical is the agent under study, or include those that use one as a tool.`} />
      <Container className="pb-16"><UniverseBrowser dataset="trials" /></Container>
    </>
  );
}
