import type { Metadata } from "next";
import { MedicarePage } from "../../components/rig-funnel/MedicarePages";
import { MEDICARE_FAQ_JSONLD } from "../../components/rig-funnel/content/medicare.faq";

export const metadata: Metadata = {
  title: "Medicare, Explained in Plain English",
  description:
    "Turning 65 or reviewing your coverage? Plain-English Medicare education from a Cleveland-area insurance agency — Parts A–D, enrollment windows, and the honest tradeoffs. Education only, never a sales pitch.",
  alternates: { canonical: "/medicare" },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(MEDICARE_FAQ_JSONLD) }}
      />
      <MedicarePage />
    </>
  );
}
