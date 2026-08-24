import type { Metadata } from "next";
import RigFunnelHub from "../../components/rig-funnel/RigFunnelHub";

export const metadata: Metadata = {
  title: "Insurance & Payment Processing",
  description:
    "Explore property and casualty insurance, life insurance, and third-party merchant-processing options with Reserve Investment Group in Greater Cleveland.",
  alternates: { canonical: "/insurance-and-payments" },
};

export default function Page() {
  return <RigFunnelHub />;
}
