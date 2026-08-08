import type { Metadata } from "next";
import "../styles/globals.css";
import "../components/ui/button.css";
import { SiteHeader } from "../components/marketing/SiteHeader";
import { SiteFooter } from "../components/marketing/SiteFooter";

export const metadata: Metadata = {
  title: {
    default: "Reserve Investment Group, Inc | Financial Planning, Greater Cleveland",
    template: "%s | Reserve Investment Group, Inc",
  },
  description:
    "[COMPLIANCE REVIEW REQUIRED] We help individuals, families, and business owners identify financial inefficiencies, address unmanaged risks, and coordinate their financial decisions around the goals that matter to them.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
