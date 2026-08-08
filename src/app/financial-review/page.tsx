// OFR-001 — Financial Review offer. Draft, pending compliance review.
import type { Metadata } from "next";
import { Breadcrumbs } from "../../components/marketing/Breadcrumbs";
import { LeadForm } from "../../components/forms/LeadForm";
import { DisclosureBlock } from "../../components/marketing/DisclosureBlock";

export const metadata: Metadata = {
  title: "Complimentary Financial Review",
  description:
    "A complimentary introductory financial review to discuss your goals, current planning, and areas that may benefit from further analysis.",
};

export default function FinancialReviewPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Financial Review", href: "/financial-review/" }]} />
      <section className="container">
        <h1>Complimentary Financial Review</h1>
        <p>
          A complimentary introductory financial review to discuss your
          goals, current planning, and areas that may benefit from further
          analysis. This review does not constitute a complete financial
          plan.
        </p>
        <h2>What to expect</h2>
        <ul>
          <li>A conversation about your goals and current financial picture</li>
          <li>A discussion of areas that may warrant a closer look</li>
          <li>No obligation to continue working together afterward</li>
        </ul>
        <h2>What we&apos;ll ask for</h2>
        <p>
          Just your contact information to get started — see the note below
          the form about what not to submit here.
        </p>
        <LeadForm formId="financial-review" pageSlug="/financial-review/" areaOfInterestDefault="financial-planning" />
      </section>
      <DisclosureBlock>
        This complimentary review is an introductory discussion and does
        not constitute a complete financial plan. [COMPLIANCE REVIEW REQUIRED]
      </DisclosureBlock>
    </main>
  );
}
