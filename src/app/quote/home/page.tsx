import type { Metadata } from "next";
import { QuoteHomePage } from "../../../components/rig-funnel/QuotePages";

export const metadata: Metadata = {
  title: "Home Insurance Quote Worksheet",
  description:
    "Property, construction, updates, and claims details for an accurate homeowners insurance quote from a licensed Reserve Investment Group insurance agent.",
  alternates: { canonical: "/quote/home" },
};

export default function Page() {
  return <QuoteHomePage />;
}
