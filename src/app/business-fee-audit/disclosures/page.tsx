// EXT-004 — Business Fee Audit: Disclosures. All fields gated per
// MISSING-INFORMATION-REGISTER.md #23.
import type { Metadata } from "next";
import { Breadcrumbs } from "../../../components/marketing/Breadcrumbs";
import { AlertBlock } from "../../../components/ui/AlertBlock";

export const metadata: Metadata = { title: "Disclosures", description: "Disclosures for the Business Fee Audit offer." };

export default function BfaDisclosuresPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Business Fee Audit", href: "/business-fee-audit/" }, { label: "Disclosures", href: "/business-fee-audit/disclosures/" }]} />
      <AlertBlock tone="warning">
        [ENTITY DISCLOSURE REQUIRED] — none of the fields below are final.
      </AlertBlock>
      <section className="container">
        <h1>Disclosures</h1>
        <p>Entity providing this service: [ENTITY DISCLOSURE REQUIRED]</p>
        <p>Affiliation with Reserve Investment Group, Inc: [ENTITY DISCLOSURE REQUIRED]</p>
        <p>Compensation or referral arrangement: [ENTITY DISCLOSURE REQUIRED]</p>
        <p>This service is separate from, and does not constitute, investment advice. Savings are not guaranteed. Changing payment processors may involve operational and contractual considerations.</p>
      </section>
    </main>
  );
}
