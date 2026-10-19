import type { Metadata } from "next";
import { QuoteHealthPage } from "../../../components/rig-funnel/QuotePages";

export const metadata: Metadata = {
  title: "Health & Medicare Quote Worksheet",
  description:
    "Your situation, doctors, and prescriptions, collected for an educational health and Medicare review with a licensed Reserve Investment Group insurance agent.",
  alternates: { canonical: "/quote/health" },
};

export default function Page() {
  return <QuoteHealthPage />;
}
