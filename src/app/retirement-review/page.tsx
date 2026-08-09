// OFR-002 — Retirement Review offer. Draft, pending compliance review.
import type { Metadata } from "next";
import { Breadcrumbs } from "../../components/marketing/Breadcrumbs";
import { LeadForm } from "../../components/forms/LeadForm";
import { DisclosureBlock } from "../../components/marketing/DisclosureBlock";

export const metadata: Metadata = {
  title: "Complimentary Retirement Review",
  description:
    "A preliminary discussion regarding retirement goals, income considerations, risk tolerance, time horizon, and planning priorities.",
};

export default function RetirementReviewPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Retirement Review", href: "/retirement-review/" }]} />
      <section className="container">
        <h1>Complimentary Retirement Review</h1>
        <p>
          A preliminary discussion regarding your retirement goals, income
          considerations, risk tolerance, time horizon, and planning
          priorities. This review does not constitute a complete financial
          plan.
        </p>
        <h2>What to expect</h2>
        <ul>
          <li>A conversation about your retirement timeline and goals</li>
          <li>A discussion of income sources and how they may work together</li>
          <li>No obligation to continue working together afterward</li>
        </ul>
        <LeadForm formId="retirement-review" pageSlug="/retirement-review/" areaOfInterestDefault="retirement-planning" />
      </section>
      <DisclosureBlock>
        This complimentary review is an introductory discussion and does
        not constitute a complete financial plan. Reserve Investment Group, Inc. is not a registered investment adviser or broker-dealer. See our{" "}
        <a href="/disclosures/">Form CRS &amp; Disclosures</a> page for additional information.
      </DisclosureBlock>
    </main>
  );
}
