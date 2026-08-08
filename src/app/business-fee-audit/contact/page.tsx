// EXT-005 — Business Fee Audit: Contact.
import type { Metadata } from "next";
import { Breadcrumbs } from "../../../components/marketing/Breadcrumbs";
import { LeadForm } from "../../../components/forms/LeadForm";
import { DisclosureBlock } from "../../../components/marketing/DisclosureBlock";

export const metadata: Metadata = { title: "Contact", description: "Contact us about a Business Fee Audit." };

export default function BfaContactPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Business Fee Audit", href: "/business-fee-audit/" }, { label: "Contact", href: "/business-fee-audit/contact/" }]} />
      <section className="container">
        <h1>Contact Us</h1>
        <LeadForm formId="business-fee-audit-contact" pageSlug="/business-fee-audit/contact/" areaOfInterestDefault="other" />
      </section>
      <DisclosureBlock>[ENTITY DISCLOSURE REQUIRED]</DisclosureBlock>
    </main>
  );
}
