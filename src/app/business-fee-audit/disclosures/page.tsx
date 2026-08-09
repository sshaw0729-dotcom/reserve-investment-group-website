// EXT-004 — Business Fee Audit: Disclosures. All fields gated per
// MISSING-INFORMATION-REGISTER.md #23.
import type { Metadata } from "next";
import { Breadcrumbs } from "../../../components/marketing/Breadcrumbs";

export const metadata: Metadata = { title: "Disclosures", description: "Disclosures for the Business Fee Audit offer." };

export default function BfaDisclosuresPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Business Fee Audit", href: "/business-fee-audit/" }, { label: "Disclosures", href: "/business-fee-audit/disclosures/" }]} />
      <section className="container">
        <h1>Disclosures</h1>
        <p>Entity providing this service: Fiserv/CardConnect. Reserve Investment Group, Inc&apos;s agents introduce interested clients to Fiserv/CardConnect for this audit.</p>
        <p>Affiliation with Reserve Investment Group, Inc: This audit is conducted by Fiserv/CardConnect, not by Reserve Investment Group, Inc directly. Reserve Investment Group, Inc&apos;s agents introduce clients to Fiserv/CardConnect for this service.</p>
        <p>Compensation or referral arrangement: This audit is provided at no cost, and no fee is charged or received for conducting it. If you choose to switch your payment processing to Fiserv/CardConnect as a result of this audit, Reserve Investment Group, Inc. and/or its agents may receive a referral fee or other compensation from Fiserv/CardConnect.</p>
        <p>This service is separate from, and does not constitute, investment advice. Savings are not guaranteed. Changing payment processors may involve operational and contractual considerations.</p>
      </section>
    </main>
  );
}
