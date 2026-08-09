// Contact — CORE-009. Draft, pending compliance review.
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
        {/* 216-284-3615 confirmed correct and now the primary number on
            the live Google Business Profile (updated 2026-08-06). */}
        <p>
          1414 S. Green Rd., Suite 105, South Euclid, OH 44121
        </p>
        <LeadForm formId="contact" pageSlug="/contact/" />
      </section>
      <DisclosureBlock>
        {/* Replaced 2026-08-08 with owner-supplied final consent language.
            Confirmed by practice owner 2026-08-08 as attorney-reviewed. */}
        <h2>Contact Consent</h2>
        <p>
          By submitting this form, you authorize Reserve Investment Group,
          Inc. and its representatives to contact you regarding your
          inquiry using the contact information you provide, including by
          telephone, email, or text message.
        </p>
        <p>
          Submitting this form does not create an investment advisory,
          brokerage, insurance, legal, tax, or other professional
          relationship, and does not obligate you to purchase any product
          or service.
        </p>
        <p>
          If you provide a mobile telephone number, you consent to
          receiving text messages related to your inquiry. Message and
          data rates may apply. Message frequency may vary. You may opt
          out of text messages at any time by replying STOP.
        </p>
        <p>
          Consent to receive communications is not a condition of
          purchasing any product or service.
        </p>
        <p>
          Please do not submit confidential, sensitive, or
          account-specific information through this form.
        </p>
      </DisclosureBlock>
    </main>
  );
}
