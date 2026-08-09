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
        <p>
          Insurance products, where offered through Reserve Investment Group,
          Inc., are offered under state insurance license number 1293258.
        </p>
        <h2>Unpaid, Unaffiliated Referrals and Third-Party Professionals</h2>
        <p>
          Reserve Investment Group, Inc. may occasionally introduce
          individuals to independent professionals, businesses, service
          providers, or other third-party resources when we believe an
          introduction may be helpful.
        </p>
        <p>
          Unless specifically disclosed otherwise, these third parties are
          independent of and unaffiliated with Reserve Investment Group,
          Inc. They are not employees, agents, representatives, partners, or
          joint ventures of Reserve Investment Group, Inc.
        </p>
        <p>
          Reserve Investment Group, Inc. does not receive or pay referral
          fees, commissions, transaction-based compensation, revenue
          sharing, or other compensation in connection with the unpaid
          referrals described on this website.
        </p>
        <p>
          Any introduction is provided solely as a convenience and should
          not be interpreted as a guarantee or representation regarding the
          qualifications, licensing, services, advice, products,
          performance, or results of any third party. Individuals are
          encouraged to independently evaluate any professional or service
          provider before engaging them.
        </p>
        <p>
          Third-party professionals are responsible for their own services,
          recommendations, licensing, regulatory obligations,
          representations, fees, and business practices. Reserve Investment
          Group, Inc. does not control and is not responsible for services
          independently provided by an unaffiliated third party.
        </p>
        <p>
          An individual is never required to use a professional or service
          provider introduced by Reserve Investment Group, Inc., and
          choosing or declining to work with a referred third party will not
          affect the services otherwise available to that individual.
        </p>
        <p>
          Individuals who make unpaid introductions to Reserve Investment
          Group, Inc. are not authorized, solely by virtue of making an
          introduction, to provide investment advice, recommend securities
          or investment strategies, solicit or negotiate securities
          transactions, sell or solicit insurance, discuss specific
          insurance policy terms or conditions, make representations on
          behalf of Reserve Investment Group, Inc., or bind Reserve
          Investment Group, Inc. in any manner.
        </p>
        <p>
          Where applicable, securities, investment advisory, insurance,
          legal, tax, accounting, or other regulated services are offered
          only through appropriately licensed or registered persons or
          entities and are subject to the laws, regulations, licensing
          requirements, and professional standards applicable to those
          persons or entities.
        </p>
        <p>
          A referral or introduction does not create an advisory,
          fiduciary, agency, brokerage, insurance, attorney-client,
          accounting, or other professional relationship between Reserve
          Investment Group, Inc., the individual making the referral, the
          third-party professional, and the person receiving the referral.
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
