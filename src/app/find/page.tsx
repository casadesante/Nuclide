import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { GroupLanding } from "@/components/GroupLanding";
export const metadata: Metadata = pageMeta({ title: "Find", description: "Start from your question: an isotope, an indication, two agents to compare, or the whole graph.", path: "/find/" });
export default function Page() { return <GroupLanding groupId="find" />; }
