import type { Metadata } from "next";
import { Breadcrumbs } from "../../components/marketing/Breadcrumbs";
import { SmsOptOutForm } from "../../components/forms/SmsOptOutForm";

export const metadata: Metadata = {
  title: "Withdraw SMS Consent",
  description: "Withdraw voluntary text messaging consent with Reserve Investment Group, Inc.",
  alternates: { canonical: "/sms-opt-out/" },
  robots: { index: false, follow: true },
};

export default function SmsOptOutPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "SMS Opt-Out", href: "/sms-opt-out/" }]} />
      <section className="container">
        <h1>Withdraw SMS Consent</h1>
        <p>Reply STOP to a text message to unsubscribe from the messaging provider. You may also submit the website withdrawal request below or call 216-284-3615. We do not treat an ordinary website inquiry as permission to resume texting.</p>
        <SmsOptOutForm />
      </section>
    </main>
  );
}
