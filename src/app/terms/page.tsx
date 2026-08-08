// Terms of Use — CORE-013. Draft, pending legal review.
import type { Metadata } from "next";
import { Breadcrumbs } from "../../components/marketing/Breadcrumbs";
import { AlertBlock } from "../../components/ui/AlertBlock";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for the Reserve Investment Group, Inc website.",
};

export default function TermsPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Terms of Use", href: "/terms/" }]} />
      <section className="container">
        <h1>Terms of Use</h1>
        <AlertBlock tone="warning">
          [LEGAL REVIEW REQUIRED] — this page is a placeholder pending
          legal review.
        </AlertBlock>
      </section>
    </main>
  );
}
