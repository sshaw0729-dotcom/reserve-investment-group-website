import type { Metadata } from "next";
import { Breadcrumbs } from "../../components/marketing/Breadcrumbs";
import { SmsConsentForm } from "../../components/forms/SmsConsentForm";

export const metadata: Metadata = {
  title: "Optional SMS Enrollment",
  description: "Optional text message consent for Reserve Investment Group, Inc.",
  alternates: { canonical: "/sms-consent/" },
  robots: { index: false, follow: true },
};

export default function SmsConsentPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "SMS Enrollment", href: "/sms-consent/" }]} />
      <section className="container">
        <h1>Optional SMS Enrollment</h1>
        <p>Reserve Investment Group, Inc. offers text communications only to people who provide separate, express consent. Enrollment is not required to use this website or request services.</p>
        <SmsConsentForm />
        <p>Already enrolled? <a href="/sms-opt-out/">Withdraw your SMS consent</a> or reply STOP to a message you receive.</p>
      </section>
    </main>
  );
}
