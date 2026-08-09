// OFR-003 — Business-Owner Financial Review offer. Draft, pending
// compliance review.
import type { Metadata } from "next";
import { Breadcrumbs } from "../../components/marketing/Breadcrumbs";
import { LeadForm } from "../../components/forms/LeadForm";
import { DisclosureBlock } from "../../components/marketing/DisclosureBlock";

export const metadata: Metadata = {
  title: "Complimentary Business-Owner Financial Review",
  description:
    "A high-level review of the relationship between your business, personal finances, risk planning, retirement objectives, and succession considerations.",
  alternates: { canonical: "/business-owner-financial-review/" },
};

export default function BusinessOwnerFinancialReviewPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Business-Owner Financial Review", href: "/business-owner-financial-review/" }]} />
      <section className="container">
        <h1>Complimentary Business-Owner Financial Review</h1>
        <p>
          A high-level review of the relationship between your business,
          personal finances, risk planning, retirement objectives, and
          succession considerations. This review does not constitute a
          complete financial plan.
        </p>
        <h2>What to expect</h2>
        <ul>
          <li>A conversation about both your business and personal financial goals</li>
          <li>A discussion of how the two currently relate to one another</li>
          <li>No obligation to continue working together afterward</li>
        </ul>
        <LeadForm formId="business-owner-financial-review" pageSlug="/business-owner-financial-review/" areaOfInterestDefault="business-owner-planning" />
      </section>
      <DisclosureBlock>
        This complimentary review is an introductory discussion and does
        not constitute a complete financial plan. [COMPLIANCE REVIEW REQUIRED]
      </DisclosureBlock>
    </main>
  );
}
