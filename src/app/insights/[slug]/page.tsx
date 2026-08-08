// Insights spoke pages (content clusters / pillar pages) — dynamic route
// driven by src/lib/content/insights.ts. Educational framing only; every
// article carries a disclosure block and no promised outcomes, specific
// investment recommendations, or performance figures anywhere in this
// template or its content source. See PROJECT-BRIEF.md,
// COMPLIANCE-RISK-MAP.md.
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { INSIGHTS } from "../../../lib/content/insights";
import { SERVICES } from "../../../lib/content/services";
import { PERSONAS } from "../../../lib/content/personas";
import { Breadcrumbs } from "../../../components/marketing/Breadcrumbs";
import { CTAStrip } from "../../../components/marketing/CTAStrip";
import { DisclosureBlock } from "../../../components/marketing/DisclosureBlock";
import { AccordionItem } from "../../../components/ui/Accordion";
import { JsonLd, faqJsonLd, articleJsonLd } from "../../../lib/seo/jsonld";

export function generateStaticParams() {
  return INSIGHTS.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const insight = INSIGHTS.find((i) => i.slug === params.slug);
  if (!insight) return {};
  return { title: insight.title, description: insight.metaDescription };
}

export default function InsightPage({ params }: { params: { slug: string } }) {
  const insight = INSIGHTS.find((i) => i.slug === params.slug);
  if (!insight) return notFound();

  const relatedServices = SERVICES.filter((s) => insight.relatedServiceSlugs.includes(s.slug));
  const relatedPersonas = PERSONAS.filter((p) => insight.relatedPersonaSlugs.includes(p.slug));
  const clusterSiblings = INSIGHTS.filter(
    (i) => insight.relatedInsightSlugs.includes(i.slug) && i.slug !== insight.slug
  );
  const publishedDate = "2026-08-06"; // [FACT TO VERIFY — replace with real publish workflow date once CMS/publishing process is defined]

  return (
    <main>
      <JsonLd
        data={articleJsonLd({
          headline: insight.title,
          description: insight.metaDescription,
          url: `/insights/${insight.slug}/`,
          datePublished: publishedDate,
          dateModified: publishedDate,
          publisherName: "Reserve Investment Group, Inc",
        })}
      />
      <JsonLd data={faqJsonLd(insight.faqs)} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Insights", href: "/insights/" },
          { label: insight.clusterTitle, href: "/insights/" },
          { label: insight.title, href: `/insights/${insight.slug}/` },
        ]}
      />
      <section className="container">
        {insight.contentType === "cluster" && (
          <p className="insight-cluster-label">
            Part of: <a href={`/insights/#${insight.clusterId}`}>{insight.clusterTitle}</a>
          </p>
        )}
        <h1>{insight.title}</h1>
        <p>{insight.intro}</p>

        {insight.sections.map((s) => (
          <div key={s.heading}>
            <h2>{s.heading}</h2>
            <p>{s.body}</p>
          </div>
        ))}

        {insight.keyTakeaways.length > 0 && (
          <div className="insight-key-takeaways">
            <h2>Key takeaways</h2>
            <ul>
              {insight.keyTakeaways.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        )}

        {clusterSiblings.length > 0 && (
          <>
            <h2>More in this series</h2>
            <ul>
              {clusterSiblings.map((sib) => (
                <li key={sib.slug}>
                  <a href={`/insights/${sib.slug}/`}>{sib.title}</a>
                </li>
              ))}
            </ul>
          </>
        )}

        {relatedServices.length > 0 && (
          <>
            <h2>Related services</h2>
            <ul>
              {relatedServices.map((s) => (
                <li key={s.slug}>
                  <a href={`/services/${s.slug}/`}>{s.title}</a>
                </li>
              ))}
            </ul>
          </>
        )}

        {relatedPersonas.length > 0 && (
          <>
            <h2>Who this may be relevant for</h2>
            <ul>
              {relatedPersonas.map((p) => (
                <li key={p.slug}>
                  <a href={`/who-we-help/${p.slug}/`}>{p.title}</a>
                </li>
              ))}
            </ul>
          </>
        )}

        {insight.faqs.length > 0 && (
          <>
            <h2>Frequently asked questions</h2>
            <div className="accordion">
              {insight.faqs.map((faq) => (
                <AccordionItem key={faq.q} question={faq.q} pageSlug={`/insights/${insight.slug}/`}>
                  <p>{faq.a}</p>
                </AccordionItem>
              ))}
            </div>
          </>
        )}
      </section>

      <DisclosureBlock>
        This content is educational and informational only. It is not
        individualized investment, tax, or legal advice, and it should
        not be relied on as the sole basis for any financial decision.
        [COMPLIANCE REVIEW REQUIRED]
      </DisclosureBlock>
      <CTAStrip label="Schedule an introductory conversation" href="/schedule/" />
    </main>
  );
}
