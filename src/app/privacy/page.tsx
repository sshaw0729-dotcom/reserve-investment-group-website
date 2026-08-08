// Privacy Policy — CORE-012. Draft, pending privacy/legal review.
import type { Metadata } from "next";
import { Breadcrumbs } from "../../components/marketing/Breadcrumbs";
import { AlertBlock } from "../../components/ui/AlertBlock";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Reserve Investment Group, Inc collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy Policy", href: "/privacy/" }]} />
      <section className="container">
        <h1>Privacy Policy</h1>
        <AlertBlock tone="warning">
          [PRIVACY REVIEW REQUIRED] — this page is a placeholder pending
          privacy/legal review of jurisdiction scope, retention, and the
          approved consent model (see POSTHOG-PRIVACY-CONFIGURATION.md and
          PRIVACY-DATA-MAP.md).
        </AlertBlock>
        <h2>Information we collect</h2>
        <p>
          Contact form submissions (name, email, phone if provided, area of
          interest, preferred contact method). We do not collect account
          numbers, Social Security numbers, or other sensitive financial
          information through public forms.
        </p>
        <h2>Analytics</h2>
        <p>
          We use privacy-configured analytics that does not capture form
          field values, names, emails, or phone numbers. See
          PRIVACY-DATA-MAP.md for the full data inventory. [FACT TO VERIFY — retention period]
        </p>
      </section>
    </main>
  );
}
