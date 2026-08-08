// Contact — CORE-009. Draft, pending compliance review.
import type { Metadata } from "next";
import { Breadcrumbs } from "../../components/marketing/Breadcrumbs";
import { LeadForm } from "../../components/forms/LeadForm";
import { DisclosureBlock } from "../../components/marketing/DisclosureBlock";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Reserve Investment Group, Inc.",
};

export default function ContactPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact", href: "/contact/" }]} />
      <section className="container">
        <h1>Contact Us</h1>
        <p>
          Reach out and we&apos;ll follow up to schedule a time to talk.
          Prefer to call? 216-284-3615.
        </p>
        {/* 216-284-3615 confirmed correct and now the primary number on
            the live Google Business Profile (updated 2026-08-06). */}
        <p>
          1414 S. Green Rd., Suite 105, South Euclid, OH 44121
        </p>
        <LeadForm formId="contact" pageSlug="/contact/" />
      </section>
      <DisclosureBlock>
        By submitting this form you consent to be contacted by Reserve
        Investment Group, Inc. See our Privacy Policy for details on how
        your information is used. [PRIVACY REVIEW REQUIRED]
      </DisclosureBlock>
    </main>
  );
}
