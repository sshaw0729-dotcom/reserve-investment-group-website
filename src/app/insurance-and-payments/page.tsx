import type { Metadata } from "next";
import RigFunnelHub from "../../components/rig-funnel/RigFunnelHub";
import { JsonLd, faqJsonLd } from "../../lib/seo/jsonld";
import { HUB_FAQS } from "../../components/rig-funnel/content/hub.faq";

export const metadata: Metadata = {
  title: "Insurance & Payment Processing",
  description:
    "Explore property and casualty insurance, life insurance, and third-party merchant-processing options with Reserve Investment Group in Greater Cleveland.",
  alternates: { canonical: "/insurance-and-payments" },
};

export default function Page() {
  return (
    <>
      <JsonLd data={faqJsonLd(HUB_FAQS)} />
      <RigFunnelHub />
    </>
  );
}
