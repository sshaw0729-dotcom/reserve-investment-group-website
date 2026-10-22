import type { Metadata } from "next";
import MerchantServicesPage from "../../components/rig-funnel/MerchantServicesPage";
import { JsonLd, faqJsonLd } from "../../lib/seo/jsonld";
import { MERCHANT_FAQS } from "../../components/rig-funnel/content/merchant.faq";

export const metadata: Metadata = {
  title: "Credit Card Processing & Merchant Services",
  description:
    "Request a complimentary merchant-statement review and compare illustrative processing costs with Reserve Investment Group.",
  alternates: { canonical: "/merchant-services" },
};

export default function Page() {
  return (
    <>
      <JsonLd data={faqJsonLd(MERCHANT_FAQS)} />
      <MerchantServicesPage />
    </>
  );
}
