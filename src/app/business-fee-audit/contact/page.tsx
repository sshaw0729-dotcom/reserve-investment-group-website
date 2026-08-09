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
      <DisclosureBlock>
          This audit is conducted by Reserve Investment Group, Inc. It is provided at no cost. If you choose to switch your payment processing to Fiserv/CardConnect as a result, Reserve Investment Group, Inc. and/or its agents may receive a referral fee or other compensation from Fiserv/CardConnect.
        </DisclosureBlock>
    </main>
  );
}
