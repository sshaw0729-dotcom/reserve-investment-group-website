// Privacy Policy — CORE-012. Retention/jurisdiction language filled
// 2026-08-08 with owner-supplied final text, confirmed by practice
// owner 2026-08-08 as attorney-reviewed.
import type { Metadata } from "next";
import { Breadcrumbs } from "../../components/marketing/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Reserve Investment Group, Inc collects, uses, and protects your information.",
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy Policy", href: "/privacy/" }]} />
      <section className="container">
        <h1>Privacy Policy</h1>
        {/* Items filled 2026-08-08 with owner-supplied final language.
            Confirmed by practice owner 2026-08-08 as attorney-reviewed. */}
        <h2>Information we collect</h2>
        <p>
          Contact form submissions (name, email, phone if provided, area of
          interest, preferred contact method) are sent directly to our
          client relationship system — never to our analytics platform. We
          do not collect account numbers, Social Security numbers, or other
          sensitive financial information through public forms; if we ever
          need documents like these from you, we&apos;ll direct you to a
          separately secured channel, not a public form.
        </p>
        <h2>Analytics</h2>
        <p>
          We use a privacy-configured analytics platform (PostHog) that
          only records a limited, pre-approved set of events — page views,
          button clicks, scroll depth, and resource downloads. It never
          receives form field values, names, emails, phone numbers, or any
          free-form text you type, and it identifies visitors with an
          anonymous ID rather than your name or contact information.
        </p>
        <h2>Session recording</h2>
        <p>
          We do not record sessions (video-style playback of how you use
          this site). This feature exists in our analytics platform but is
          disabled and will not be activated without written privacy,
          compliance, and information-security approval, an updated
          disclosure here, and a working consent mechanism first.
        </p>
        <h2>How Long We Keep Information</h2>
        <p>
          We retain personal information only for as long as reasonably
          necessary to fulfill the purposes for which it was collected,
          provide requested services, maintain appropriate business and
          regulatory records, comply with applicable legal and regulatory
          obligations, resolve disputes, enforce agreements, and protect
          our legal and business interests.
        </p>
        <p>
          The length of time information is retained may vary depending on
          the type of information, the nature of our relationship with
          you, applicable regulatory and recordkeeping requirements, and
          legitimate business needs.
        </p>
        <p>
          When personal information is no longer reasonably required for
          these purposes, we may delete, destroy, anonymize, or otherwise
          dispose of it in accordance with applicable law and our
          records-retention practices.
        </p>
        <h2>Website Analytics Information</h2>
        <p>
          We may use website analytics technologies and service providers,
          including PostHog, to help us understand how visitors use our
          website, identify technical issues, improve website
          functionality, and evaluate general website usage.
        </p>
        <p>
          Analytics information may include information such as device and
          browser characteristics, pages viewed, referring pages,
          approximate location derived from network information,
          interaction data, and similar technical information.
        </p>
        <p>
          Analytics information is retained in accordance with our
          configured service settings, applicable contractual
          arrangements, legitimate business needs, and applicable legal or
          regulatory requirements. We periodically review these settings
          and may adjust retention periods as appropriate.
        </p>
        <p>
          We do not intend to use website analytics information to provide
          individualized investment recommendations or financial advice.
        </p>
        <h2>Where This Privacy Policy Applies</h2>
        <p>
          This Privacy Policy applies to personal information collected
          through this website and through communications or interactions
          with us that reference or are subject to this Privacy Policy.
        </p>
        <p>
          Our collection, use, retention, disclosure, and protection of
          personal information are also subject to applicable federal and
          state laws, regulations, regulatory requirements, and our
          obligations as a financial-services organization.
        </p>
        <p>
          Depending on where you reside and the nature of your
          relationship with us, you may have rights under applicable
          privacy or financial-services laws that are different from or
          in addition to those described in this Privacy Policy.
        </p>
        <p>
          Nothing in this Privacy Policy is intended to limit any right or
          protection that cannot lawfully be limited or waived.
        </p>
        <p>
          If another privacy notice provided to you applies specifically
          to a financial account, product, service, or relationship, that
          notice may supplement this Privacy Policy and will control to
          the extent required by applicable law.
        </p>
        <h2>Questions about your privacy</h2>
        <p>
          Contact us through our <a href="/contact/">contact page</a> with
          any questions about how your information is collected or used.
        </p>
      </section>
    </main>
  );
}
