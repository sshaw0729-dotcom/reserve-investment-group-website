// About — CORE-002. Draft, pending compliance review. See
// COMPLIANCE-PACKAGE-TEMPLATE.md and MISSING-INFORMATION-REGISTER.md.
import type { Metadata } from "next";
import { Breadcrumbs } from "../../components/marketing/Breadcrumbs";
import { CTAStrip } from "../../components/marketing/CTAStrip";
import { DisclosureBlock } from "../../components/marketing/DisclosureBlock";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Reserve Investment Group, Inc — how we work with individuals, families, and business owners on financial planning. [COMPLIANCE REVIEW REQUIRED]",
};

export default function AboutPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About", href: "/about/" }]} />
      <section className="container">
        <h1>About Reserve Investment Group, Inc</h1>
        <p>
          Reserve Investment Group, Inc works with individuals, families, and
          business owners to identify financial inefficiencies, address
          unmanaged risks, and coordinate financial decisions around the
          goals that matter to them.
        </p>
        <p>[FACT TO VERIFY — insert firm history, team background, and approved credentials once confirmed]</p>
      </section>
      <DisclosureBlock>
        [APPROVED BROKER-DEALER DISCLOSURE] [APPROVED INVESTMENT-ADVISER DISCLOSURE]. [FORM CRS LINK REQUIRED].
      </DisclosureBlock>
      <CTAStrip label="Schedule an introductory conversation" href="/schedule/" />
    </main>
  );
}
