import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { Container, PageHeader } from "@/components/ui";
import stats from "@/data/universe-stats.json";
import { UniverseBrowser } from "@/components/universe/UniverseBrowser";

export const metadata: Metadata = pageMeta({ title: "Approved and registered products", description: "Every radiopharmaceutical registration found at 28 regulators, from the FDA and EMA to China, Japan, Korea, India, Latin America, Russia and the Middle East, with the regulator's own link.", path: "/universe/products/" });

export default function Page() {
  return (
    <>
      <PageHeader kicker={<Link href="/universe/" className="hover:underline">The universe</Link>} title="Approved and registered products"
        lede={`${stats.products.toLocaleString()} registrations in ${stats.regions} countries and regions, grouped into ${stats.agents} agents. Non-English names are kept alongside the English.`} />
      <Container className="pb-16"><UniverseBrowser dataset="products" /></Container>
    </>
  );
}
