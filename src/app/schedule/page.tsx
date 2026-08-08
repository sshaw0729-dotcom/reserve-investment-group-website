// Schedule a Conversation — CORE-010. Draft, pending compliance review.
// Scheduling widget destination is a MISSING-INFORMATION-REGISTER.md
// open item (#16) — placeholder link block until confirmed.
import type { Metadata } from "next";
import { Breadcrumbs } from "../../components/marketing/Breadcrumbs";
import { AlertBlock } from "../../components/ui/AlertBlock";

export const metadata: Metadata = {
  title: "Schedule a Conversation",
  description: "Schedule an introductory conversation with Reserve Investment Group, Inc.",
};

export default function SchedulePage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Schedule a Conversation", href: "/schedule/" }]} />
      <section className="container">
        <h1>Schedule an Introductory Conversation</h1>
        <p>
          Pick a time that works for you. This is a no-pressure conversation
          about your goals and current planning.
        </p>
        <AlertBlock tone="info">
          [FACT TO VERIFY] — scheduling system not yet confirmed
          (MISSING-INFORMATION-REGISTER.md #16). This page will embed the
          approved scheduling widget once selected.
        </AlertBlock>
      </section>
    </main>
  );
}
