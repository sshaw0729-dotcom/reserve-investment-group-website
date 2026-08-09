// COMBO-003 — Retirement Planning for Executives in Shaker Heights.
// KEYWORD-AND-INTENT-MAP.csv marks this "Build (Wave 1, pending
// office/service-area confirmation)" — do not publish until
// MISSING-INFORMATION-REGISTER.md item #14 (office/service area) is
// resolved, since this page's local framing depends on it.
import type { Metadata } from "next";
import { Breadcrumbs } from "../../../components/marketing/Breadcrumbs";
import { CTAStrip } from "../../../components/marketing/CTAStrip";
import { DisclosureBlock } from "../../../components/marketing/DisclosureBlock";

export const metadata: Metadata = {
  title: "Retirement Planning for Executives in Shaker Heights",
  description:
    "Retirement planning considerations for corporate executives in Shaker Heights, including equity compensation and deferred-income timing.",
};

export default function ExecutiveRetirementCombinedPage() {
  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services/" },
          { label: "Retirement Planning", href: "/services/retirement-planning/" },
          { label: "Retirement Planning for Executives in Shaker Heights", href: "/shaker-heights/retirement-planning-for-executives/" },
        ]}
      />
      <section className="container">
        <h1>Retirement Planning for Executives in Shaker Heights</h1>
        <p>
          Corporate executives in and around Shaker Heights often reach
          retirement planning with a more complex picture than salary and
          savings alone — equity compensation, deferred-compensation
          elections, and the timing of a transition out of a corporate role
          all factor in.
        </p>
        <h2>Considerations specific to this combination</h2>
        <ul>
          <li>Sequencing the exercise or vesting of equity compensation around a retirement timeline</li>
          <li>Deferred-compensation distribution timing and its planning implications</li>
          <li>Coordinating retirement income sources alongside any remaining equity or deferred awards</li>
        </ul>
        <h2>Related reading</h2>
        <ul>
          <li><a href="/services/retirement-planning/">Retirement Planning</a></li>
          <li><a href="/services/executive-financial-planning/">Executive Financial Planning</a></li>
          <li><a href="/who-we-help/corporate-executives/">Corporate Executives</a></li>
          <li><a href="/locations/shaker-heights/">Shaker Heights</a></li>
        </ul>
      </section>
      <DisclosureBlock>
        This page describes planning considerations that may apply to some
        executives; individual circumstances vary.
      </DisclosureBlock>
      <CTAStrip label="Request a complimentary retirement review" href="/retirement-review/" />
    </main>
  );
}
