// EXT-003 — Business Fee Audit: Privacy. Distinct from the main site's
// privacy policy because this offer may involve reviewing processing
// statements, which is more sensitive than the standard lead-form data.
import type { Metadata } from "next";
import { Breadcrumbs } from "../../../components/marketing/Breadcrumbs";

export const metadata: Metadata = { title: "Privacy", description: "Privacy practices for the Business Fee Audit offer." };

export default function BfaPrivacyPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Business Fee Audit", href: "/business-fee-audit/" }, { label: "Privacy", href: "/business-fee-audit/privacy/" }]} />
      <p>
        Please do not upload payment processing statements through the
        contact form on this site. After you reach out, we will provide
        instructions for sharing your statements directly with
        Fiserv/CardConnect, who performs this audit, through a secure
        channel.
      </p>
      <section className="container">
        <h1>Privacy</h1>
        <p>
          The payment processing statements you share are provided to
          Fiserv/CardConnect, who performs this audit and uses them
          solely to identify potential fee-reduction opportunities as
          part of this complimentary review. We do not sell your
          statements, and we do not share them with any third party
          other than Fiserv/CardConnect for this purpose. Fiserv/CardConnect
          retains your statements only as long as necessary to complete
          the review and communicate the results to you.
        </p>
      </section>
    </main>
  );
}
