// Form CRS & Disclosures — CORE-011. Draft, pending compliance/legal
// review. Every value here is a placeholder pending firm confirmation —
// see DISCLOSURE-INVENTORY.md and MISSING-INFORMATION-REGISTER.md.
import type { Metadata } from "next";
import { Breadcrumbs } from "../../components/marketing/Breadcrumbs";
import { AlertBlock } from "../../components/ui/AlertBlock";

export const metadata: Metadata = {
  title: "Form CRS & Disclosures",
  description: "Regulatory disclosures for Reserve Investment Group, Inc.",
};

export default function DisclosuresPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Form CRS & Disclosures", href: "/disclosures/" }]} />
      <section className="container">
        <h1>Form CRS &amp; Disclosures</h1>
        <AlertBlock tone="warning">
          This page is a placeholder. Do not publish until compliance and
          legal have supplied and approved final disclosure text.
        </AlertBlock>
        <p>Firm: Reserve Investment Group, Inc.</p>
        <p>[APPROVED BROKER-DEALER DISCLOSURE]</p>
        <p>[APPROVED INVESTMENT-ADVISER DISCLOSURE]</p>
        <p>[FORM CRS LINK REQUIRED]</p>
        <p>[APPROVED DESIGNATIONS — per named individual, pending approval]</p>
      </section>
    </main>
  );
}
