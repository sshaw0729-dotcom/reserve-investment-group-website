// Contact — CORE-009. SMS consent clarification proposed September 20, 2026.
// Review with compliance before publication.
import type { Metadata } from "next";
import { Breadcrumbs } from "../../components/marketing/Breadcrumbs";
import { LeadForm } from "../../components/forms/LeadForm";
import { DisclosureBlock } from "../../components/marketing/DisclosureBlock";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Reserve Investment Group, Inc.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact", href: "/contact/" }]} />
      <section className="container">
        <h1>Contact Us</h1>
        <p>
          Reach out and we&apos;ll follow up to schedule a time to talk.
          Prefer to call? 216-284-3615.
        </p>
        <p>1414 S. Green Rd., Suite 105, South Euclid, OH 44121</p>
        <LeadForm formId="contact" pageSlug="/contact/" />
      </section>
      <DisclosureBlock>
        <h2>Contact Consent</h2>
        <p>
          By submitting this form, you request that Reserve Investment Group,
          Inc. and its representatives respond to your inquiry using your
          provided contact details by your selected or otherwise appropriate
          non-SMS contact method. Providing a mobile number, selecting a
          preferred contact method, or submitting this form does not enroll
          you in an SMS messaging program. SMS messaging requires a separate,
          voluntary, express opt-in through an approved enrollment method.
        </p>
        <p>
          Submitting this form does not create an investment advisory,
          brokerage, insurance, legal, tax, or other professional
          relationship, and does not obligate you to purchase any product
          or service.
        </p>
        <p>
          Where offered, SMS enrollment is optional and is not a condition
          of purchasing any product or service. Program messages may include
          appointment reminders, responses to inquiries, requested resources,
          event information, and support communications. Message frequency
          varies; message and data rates may apply. Reply STOP to opt out
          or HELP for assistance. Review the <a href="/terms/">SMS Messaging
          Terms</a> and <a href="/privacy/">Privacy Policy</a> before opting in.
        </p>
        <p>
          Please do not submit confidential, sensitive, or
          account-specific information through this form.
        </p>
      </DisclosureBlock>
    </main>
  );
}
