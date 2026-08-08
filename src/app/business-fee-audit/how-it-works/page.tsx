// EXT-002 — Business Fee Audit: How It Works. Same entity-disclosure
// gate as the home page.
import type { Metadata } from "next";
import { Breadcrumbs } from "../../../components/marketing/Breadcrumbs";
import { AlertBlock } from "../../../components/ui/AlertBlock";
import { LeadForm } from "../../../components/forms/LeadForm";

export const metadata: Metadata = {
  title: "How It Works",
  description: "How the Business Fee Audit process works.",
};

export default function HowItWorksPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Business Fee Audit", href: "/business-fee-audit/" }, { label: "How It Works", href: "/business-fee-audit/how-it-works/" }]} />
      <AlertBlock tone="warning">
        [ENTITY DISCLOSURE REQUIRED] — do not publish until the entity
        relationship above is confirmed.
      </AlertBlock>
      <section className="container">
        <h1>How It Works</h1>
        <ol>
          <li>Share your recent processing statements — see the privacy notice below the form for what not to submit here</li>
          <li>[ENTITY DISCLOSURE REQUIRED — describe who reviews the statements and how]</li>
          <li>Receive a summary of findings; savings are not guaranteed and any decision to switch processors is yours alone</li>
        </ol>
        <LeadForm formId="business-fee-audit" pageSlug="/business-fee-audit/how-it-works/" areaOfInterestDefault="other" />
      </section>
    </main>
  );
}
