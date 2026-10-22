import type { Metadata } from "next";
import PCInsurancePage from "../../components/rig-funnel/PCInsurancePage";
import { JsonLd, faqJsonLd } from "../../lib/seo/jsonld";
import { PC_FAQS } from "../../components/rig-funnel/content/pc.faq";

export const metadata: Metadata = {
  title: "Auto, Home & Business Insurance Quotes",
  description:
    "Request a complimentary review of auto, home, renters, condo, or commercial insurance options with a licensed Reserve Investment Group insurance agent.",
  alternates: { canonical: "/auto-home-insurance" },
};

export default function Page() {
  return (
    <>
      <JsonLd data={faqJsonLd(PC_FAQS)} />
      <PCInsurancePage />
    </>
  );
}
