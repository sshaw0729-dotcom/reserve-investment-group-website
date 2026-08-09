// Services hub — CORE-005. Draft, pending compliance review.
import type { Metadata } from "next";
import { Breadcrumbs } from "../../components/marketing/Breadcrumbs";
import { CardGrid } from "../../components/marketing/CardGrid";
import { CTAStrip } from "../../components/marketing/CTAStrip";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Financial planning, wealth management, retirement planning, and related services offered by Reserve Investment Group, Inc.",
  alternates: { canonical: "/services/" },
};

const SERVICES = [
  { title: "Financial Planning", href: "/services/financial-planning/", description: "Organizing your goals and current financial picture into a coordinated plan." },
  { title: "Wealth Management", href: "/services/wealth-management/", description: "Ongoing coordination of your financial decisions as circumstances change." },
  { title: "Retirement Planning", href: "/services/retirement-planning/", description: "Planning considerations for income, spending, and timing around retirement." },
  { title: "Investment Strategy", href: "/services/investment-strategy/", description: "Coordinating an investment approach aligned to your goals and time horizon." },
  { title: "Business-Owner Planning", href: "/services/business-owner-planning/", description: "Balancing business and personal financial considerations." },
  { title: "Executive Financial Planning", href: "/services/executive-financial-planning/", description: "Planning around equity compensation, deferred income, and career transitions." },
  { title: "Business Succession Planning", href: "/services/business-succession-planning/", description: "Planning considerations for transitioning or exiting a business." },
  { title: "Estate-Planning Coordination", href: "/services/estate-planning-coordination/", description: "Coordinating with your legal professionals on estate-planning considerations." },
  { title: "Insurance and Risk Planning", href: "/services/insurance-and-risk-planning/", description: "Identifying unmanaged risks and reviewing coverage considerations." },
  { title: "Tax-Aware Financial Planning", href: "/services/tax-aware-financial-planning/", description: "Coordinating with your tax professional on planning considerations." },
];

export default function ServicesPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services/" }]} />
      <section className="container">
        <h1>Services</h1>
        <p>
          Our services are designed to help identify financial
          inefficiencies, address unmanaged risks, and coordinate your
          financial decisions around your goals. [COMPLIANCE REVIEW REQUIRED]
        </p>
      </section>
      <CardGrid items={SERVICES} />
      <CTAStrip label="Learn about our approach" href="/our-approach/" />
    </main>
  );
}
