// Who We Help hub — CORE-004. Draft, pending compliance review.
import type { Metadata } from "next";
import { Breadcrumbs } from "../../components/marketing/Breadcrumbs";
import { CardGrid } from "../../components/marketing/CardGrid";
import { CTAStrip } from "../../components/marketing/CTAStrip";

export const metadata: Metadata = {
  title: "Who We Help",
  description:
    "Reserve Investment Group, Inc works with a range of individuals, families, and business owners across Greater Cleveland on financial planning considerations.",
};

const PERSONAS = [
  { title: "Business Owners", href: "/who-we-help/business-owners/", description: "Planning considerations for owners balancing business and personal finances." },
  { title: "Healthcare Professionals", href: "/who-we-help/healthcare-professionals/", description: "Considerations around variable compensation and career-stage planning." },
  { title: "Physicians", href: "/who-we-help/physicians/", description: "Planning considerations involving liability exposure and retirement plans." },
  { title: "Manufacturing Leaders", href: "/who-we-help/manufacturing-leaders/", description: "Considerations for executives and owners in manufacturing businesses." },
  { title: "Contractors", href: "/who-we-help/contractors/", description: "Planning considerations for trade-business owners and contractors." },
  { title: "Corporate Executives", href: "/who-we-help/corporate-executives/", description: "Considerations around equity compensation and deferred income." },
  { title: "Pre-Retirees", href: "/who-we-help/pre-retirees/", description: "Planning priorities as retirement approaches." },
  { title: "Retirees", href: "/who-we-help/retirees/", description: "Coordinating income, spending, and legacy considerations in retirement." },
  { title: "High-Net-Worth Families", href: "/who-we-help/high-net-worth-families/", description: "Coordinating complex planning considerations across generations." },
];

export default function WhoWeHelpPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Who We Help", href: "/who-we-help/" }]} />
      <section className="container">
        <h1>Who We Help</h1>
        <p>
          We work with individuals, families, and business owners across a
          range of circumstances. Every person&apos;s situation is different —
          the descriptions below are educational starting points, not an
          assumption that everyone in a given group has the same needs.
        </p>
      </section>
      <CardGrid items={PERSONAS} />
      <CTAStrip label="Speak with our team" href="/schedule/" />
    </main>
  );
}
