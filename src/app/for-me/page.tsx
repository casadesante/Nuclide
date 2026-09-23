import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { Container, GroupKicker, PageHeader } from "@/components/ui";
import { ForMePicker } from "@/components/ForMePicker";
import { myIndicationTiles } from "@/lib/my-indication-list";

export const metadata: Metadata = pageMeta({
  title: "For me",
  description: "Pick the indication you follow and Nuclide remembers it in this browser: a header chip, a pinned tile on the indications page and a one-tap trials filter.",
  path: "/for-me/",
  noindex: true,
});

export default function ForMePage() {
  return (
    <>
      <PageHeader kicker={<GroupKicker id="find" />} title="For me"
        lede="Pick the indication you follow. Nuclide then keeps a chip for it in the header, pins it at the top of the indications page, and can filter the trial table to it in one tap. It is stored in this browser only: there is no account, and nothing is sent anywhere." />
      <Container className="pb-16">
        <p className="text-sm text-muted mb-6 max-w-3xl">
          One indication at a time, and you can change or forget it whenever you like. If you would rather browse, every record is reachable from <Link className="underline" href="/indications/">indications</Link>, <Link className="underline" href="/explore/">explore</Link> or <Link className="underline" href="/search/">search</Link>.
        </p>
        <ForMePicker indications={myIndicationTiles()} />
      </Container>
    </>
  );
}
