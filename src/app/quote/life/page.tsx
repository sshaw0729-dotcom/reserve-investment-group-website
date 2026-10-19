import type { Metadata } from "next";
import { QuoteLifePage } from "../../../components/rig-funnel/QuotePages";

export const metadata: Metadata = {
  title: "Life Insurance Quote Worksheet",
  description:
    "Health picture, coverage goal, existing coverage, and beneficiaries — what a licensed Reserve Investment Group insurance agent needs to quote life insurance.",
  alternates: { canonical: "/quote/life" },
};

export default function Page() {
  return <QuoteLifePage />;
}
