// COMBO-002 — Wealth Management for Business Owners in Greater Cleveland.
// Validated "Build (Wave 1)" recommendation. Dual parent: Wealth
// Management (service) + Business Owners (persona).
import type { Metadata } from "next";
import { Breadcrumbs } from "../../../components/marketing/Breadcrumbs";
import { CTAStrip } from "../../../components/marketing/CTAStrip";
import { DisclosureBlock } from "../../../components/marketing/DisclosureBlock";

export const metadata: Metadata = {
  title: "Wealth Management for Business Owners in Greater Cleveland",
  description:
    "Wealth management considerations for business owners in Greater Cleveland, coordinating business and personal financial decisions.",
  alternates: { canonical: "/greater-cleveland/business-owner-financial-planning/" },
};

export default function BusinessOwnerCombinedPage() {
  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services/" },
          { label: "Wealth Management", href: "/services/wealth-management/" },
          { label: "Wealth Management for Business Owners in Greater Cleveland", href: "/greater-cleveland/business-owner-financial-planning/" },
        ]}
      />
      <section className="container">
        <h1>Wealth Management for Business Owners in Greater Cleveland</h1>
        <p>
          For many business owners across Greater Cleveland&apos;s
          manufacturing, professional-services, and healthcare-adjacent
          business communities, personal wealth is closely tied to the
          business itself. Wealth management for business owners is
          designed to integrate business considerations — cash flow,
          retirement-plan design, eventual succession — with your personal
          financial picture rather than treating the two separately.
        </p>
        <h2>Considerations specific to this area</h2>
        <ul>
          <li>Coordinating retirement-plan design for the business with personal retirement goals</li>
          <li>Planning around eventual succession or sale, whatever the timeline</li>
          <li>Balancing reinvestment in the business against personal savings goals</li>
        </ul>
        <h2>Related reading</h2>
        <ul>
          <li><a href="/services/wealth-management/">Wealth Management</a></li>
          <li><a href="/services/business-succession-planning/">Business Succession Planning</a></li>
          <li><a href="/who-we-help/business-owners/">Business Owners</a></li>
        </ul>
      </section>
      <DisclosureBlock>
        This page describes planning considerations that may apply to some
        business owners; individual circumstances vary. Reserve Investment Group, Inc. is not a registered investment adviser or broker-dealer. See our{" "}
        <a href="/disclosures/">Form CRS &amp; Disclosures</a> page for additional information.
      </DisclosureBlock>
      <CTAStrip label="Request a complimentary financial review" href="/business-owner-financial-review/" />
    </main>
  );
}
