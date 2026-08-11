import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "../styles/globals.css";
import "../components/ui/button.css";
import { SiteHeader } from "../components/marketing/SiteHeader";
import { SiteFooter } from "../components/marketing/SiteFooter";

// Brand type (Canva "Conversion Website v2" concept, confirmed by the
// practice owner 2026-08-11): Playfair Display for headings, Inter for
// body copy. Exposed as CSS variables consumed by src/styles/tokens.css
// (--font-serif / --font-sans) so every page picks them up automatically.
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfairDisplay = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://reserveinvestmentgroup.com"),
  title: {
    default: "Reserve Investment Group, Inc | Financial Planning, Greater Cleveland",
    template: "%s | Reserve Investment Group, Inc",
  },
  description:
    "We help individuals, families, and business owners identify financial inefficiencies, address unmanaged risks, and coordinate their financial decisions around the goals that matter to them.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
