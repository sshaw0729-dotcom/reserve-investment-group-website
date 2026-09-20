// Privacy Policy — CORE-012. Existing owner-approved language preserved.
// SMS additions proposed 2026-09-20; compliance/legal review required before production.
import type { Metadata } from "next";
import { Breadcrumbs } from "../../components/marketing/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Reserve Investment Group, Inc collects, uses, and protects your information, including mobile messaging consent.",
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy Policy", href: "/privacy/" }]} />
      <section className="container">
        <h1>Privacy Policy</h1>
        <p>Last updated: September 20, 2026</p>
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
        <h2>SMS and mobile messaging privacy</h2>
        <p>
          When you separately and voluntarily opt in to the Reserve Investment
          Group, Inc. SMS Program, we may collect your mobile number, date,
          time and method of consent, consent status, messaging preferences,
          message records, and opt-out requests. We use these details to
          provide requested appointment, inquiry, event, educational, and
          support messages; document consent; honor opt-outs; and meet
          applicable legal and recordkeeping requirements. SMS consent is
          optional and is not a condition of buying any product or service.
          Supplying a phone number or submitting a general contact form
          without separate SMS consent does not enroll you in the program.
        </p>
        <p>
          <strong>No mobile information, including mobile telephone numbers,
          SMS opt-in data, or text messaging consent, will be shared, sold,
          rented, or disclosed to third parties or affiliates for their own
          marketing or promotional purposes.</strong> All information-sharing
          categories in this Policy exclude SMS originator opt-in data and
          consent from marketing or promotional disclosure. We may provide
          only the information necessary to contracted messaging platforms,
          telecommunications carriers, or operational service providers
          solely to deliver and support requested SMS messages, subject to
          appropriate confidentiality and security safeguards. These
          providers are not authorized to use SMS consent for their own
          marketing.
        </p>
        <p>
          You may withdraw SMS consent at any time by replying STOP to a
          program message. Reply HELP for assistance or use our{" "}
          <a href="/contact/">contact page</a>. Withdrawal from SMS does
          not automatically withdraw any separate consent given for other
          contact channels. Do not text passwords, Social Security numbers,
          account credentials, account numbers, trading instructions, or
          wire-transfer details. SMS is not a secure channel for sensitive
          financial information. See the full program description,
          frequency, carrier-charge and opt-out provisions in our{" "}
          <a href="/terms/">Terms of Use</a>.
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
          SMS enrollment, consent, message and opt-out records are retained
          as needed to administer the program, demonstrate consent and
          withdrawal, and comply with applicable recordkeeping obligations.
          Applicable periods depend on the record type and governing rules;
          no universal retention period is promised.
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
          Identify privacy-rights requests as a Privacy Request.
        </p>
        <p>Also see our <a href="/terms/">Terms of Use</a> and <a href="/disclosures/">regulatory disclosures</a>.</p>
      </section>
    </main>
  );
}
