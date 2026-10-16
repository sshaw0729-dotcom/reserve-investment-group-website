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

const VERTICAL_SERVICES = [
  { title: "Medicare Education", href: "/medicare/", description: "How Medicare works, explained before anyone tries to sell you anything: the four parts, the enrollment windows that matter, and the Medigap vs. Medicare Advantage tradeoffs. Education only — never plan recommendations." },
  { title: "Life Insurance", href: "/life-insurance/", description: "Term, indexed universal life, and final-expense options, matched to your stage of life." },
  { title: "Auto & Home Insurance", href: "/auto-home-insurance/", description: "Personal and commercial insurance options reviewed with a licensed agent." },
  { title: "Merchant Services", href: "/merchant-services/", description: "A complimentary review of your payment-processing statement — see what you are actually paying." },
];

export default function ServicesPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services/" }]} />
      <section className="container">
        <h1>Services</h1>
        <p>
                    Our services cover financial planning, wealth management, retirement planning, and related considerations for individuals, families, and business owners. Learn more about each service below.
        </p>
      </section>
      <CardGrid items={SERVICES} />
      <section className="container">
        <h2>Insurance &amp; merchant services</h2>
        <p>
          As an insurance agency, we also provide Medicare education, life insurance, auto and home coverage, and merchant services — each explained in plain English on its own page.
        </p>
      </section>
      <CardGrid items={VERTICAL_SERVICES} />
      <CTAStrip label="Learn about our approach" href="/our-approach/" />
    </main>
  );
}
