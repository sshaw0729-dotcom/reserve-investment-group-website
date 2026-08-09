// Form CRS & Disclosures — CORE-011. Placeholder banner removed and
// designation field resolved 2026-08-08 with owner-supplied final text,
// confirmed by practice owner 2026-08-08 as attorney-reviewed. See
// DISCLOSURE-INVENTORY.md and MISSING-INFORMATION-REGISTER.md.
import type { Metadata } from "next";
import { Breadcrumbs } from "../../components/marketing/Breadcrumbs";

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
        <h2>Important Disclosures</h2>
        <p>
          This page provides important information and disclosures
          concerning our business, services, professional relationships,
          and regulatory responsibilities.
        </p>
        <p>
          The nature and scope of services available to you may depend on
          the individual or entity providing the service, the capacity in
          which that person or entity is acting, applicable registrations
          or licenses, and the agreements governing your relationship.
        </p>
        <p>
          Please review the applicable disclosures and Form CRS carefully.
          You may contact us if you have questions about the capacity in
          which a financial professional is acting, the services available
          to you, fees and costs, conflicts of interest, or the standards
          applicable to a particular relationship.
        </p>
        <p>
          Nothing on this page changes or supersedes the terms of an
          applicable client agreement, Form CRS, regulatory disclosure,
          prospectus, offering document, insurance contract, or other
          controlling document.
        </p>
        <h2>Important Information About Our Services</h2>
        <p>
          Financial professionals may provide different types of financial
          services depending on their registrations, licenses,
          affiliations, and the nature of the relationship with the
          client.
        </p>
        <p>
          Brokerage services and investment advisory services are
          different and are governed by different agreements, fees,
          obligations, and standards of conduct. A financial
          professional&apos;s obligations may therefore depend on the
          capacity in which the professional is acting with respect to a
          particular service or recommendation.
        </p>
        <p>
          Please review the applicable agreements, Form CRS, and other
          disclosures for additional information regarding services, fees,
          conflicts of interest, and standards of conduct.
        </p>
        <p>Firm: Reserve Investment Group, Inc.</p>
        {/*
          Filled 2026-08-08 per practice-owner confirmation: Reserve
          Investment Group, Inc. is not itself a separately registered
          broker-dealer or investment adviser. Still needs formal
          compliance sign-off before publish.
        */}
        <p>
          Reserve Investment Group, Inc. is not itself a registered
          investment adviser or broker-dealer. It provides financial
          planning and insurance-related services. Any brokerage or
          investment-advisory services referenced in connection with your
          relationship with us are provided separately, through a
          registration held individually and not through Reserve
          Investment Group, Inc.
        </p>
        <p>
          Reserve Investment Group, Inc. does not itself hold a
          broker-dealer or investment-adviser registration and does not
          have its own Form CRS.
        </p>
        {/* Designation field deleted 2026-08-08 per owner instruction: no
            verified, currently-authorized professional designation (e.g.
            CFP®, ChFC®) has been confirmed for any named individual, and
            Series 7/66 registrations are not professional designations.
            Re-add only with a specific verified designation and name. */}
      </section>
    </main>
  );
}
