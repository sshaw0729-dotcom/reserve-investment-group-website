import type { Metadata } from "next";
import MerchantServicesPage from "../../components/rig-funnel/MerchantServicesPage";

export const metadata: Metadata = {
  title: "Credit Card Processing & Merchant Services | Reserve Investment Group",
  description:
    "Request a complimentary merchant-statement review and compare illustrative processing costs with Reserve Investment Group.",
  alternates: { canonical: "/merchant-services" },
};

export default function Page() {
  return <MerchantServicesPage />;
}
