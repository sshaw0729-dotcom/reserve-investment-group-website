// EXT-003 — Business Fee Audit: Privacy. Distinct from the main site's
// privacy policy because this offer may involve reviewing processing
// statements, which is more sensitive than the standard lead-form data.
import type { Metadata } from "next";
import { Breadcrumbs } from "../../../components/marketing/Breadcrumbs";
import { AlertBlock } from "../../../components/ui/AlertBlock";

export const metadata: Metadata = { title: "Privacy", description: "Privacy practices for the Business Fee Audit offer." };

export default function BfaPrivacyPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Business Fee Audit", href: "/business-fee-audit/" }, { label: "Privacy", href: "/business-fee-audit/privacy/" }]} />
      <AlertBlock tone="warning">
        [PRIVACY REVIEW REQUIRED] — placeholder. Statement review likely
        involves more sensitive data than the standard lead form; do not
        route processing statements through the public form. Use a
        separately approved secure-upload channel once one is selected.
      </AlertBlock>
      <section className="container">
        <h1>Privacy</h1>
        <p>[PRIVACY REVIEW REQUIRED — full policy pending, including retention period for any statements reviewed]</p>
      </section>
    </main>
  );
}
