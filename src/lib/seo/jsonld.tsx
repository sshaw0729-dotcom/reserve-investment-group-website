import type { Faq } from "../content/types";

/**
 * JSON-LD builders per SEO-STRATEGY.md. Consumers render the result via
 * a <script type="application/ld+json"> tag. No fabricated ratings,
 * review counts, or aggregateRating fields are ever included here.
 */

export function faqJsonLd(faqs: Faq[]) {
  if (faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

export function breadcrumbJsonLd(items: { label: string; href: string }[], siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: `${siteUrl}${item.href}`,
    })),
  };
}

export function articleJsonLd(params: { headline: string; description: string; url: string; datePublished: string; dateModified: string; publisherName: string }) {
  // Educational/informational article schema for Insights content-cluster
  // pages. No author-credential claims, ratings, or performance figures.
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: params.headline,
    description: params.description,
    url: params.url,
    datePublished: params.datePublished,
    dateModified: params.dateModified,
    publisher: { "@type": "Organization", name: params.publisherName },
  };
}

// LocalBusiness/FinancialService schema — LOCAL-SEO-OPERATIONS.md
// Section 4. Deliberately requires the caller to supply real address
// and telephone data; there is no default/placeholder NAP baked in
// here. Do not call this with fabricated or approximate address data —
// SEO-STRATEGY.md prohibits fabricated office locations in structured
// data. As of 2026-08-06 no page in this codebase calls this function;
// it is gated on MISSING-INFORMATION-REGISTER.md #14 (office/service
// area) and #15 (phone number).
export function localBusinessJsonLd(params: {
  name: string;
  description: string;
  url: string;
  telephone: string;
  address: { streetAddress: string; addressLocality: string; addressRegion: string; postalCode: string; addressCountry: string };
  areaServed?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: params.name,
    description: params.description,
    url: params.url,
    telephone: params.telephone,
    address: {
      "@type": "PostalAddress",
      streetAddress: params.address.streetAddress,
      addressLocality: params.address.addressLocality,
      addressRegion: params.address.addressRegion,
      postalCode: params.address.postalCode,
      addressCountry: params.address.addressCountry,
    },
    ...(params.areaServed ? { areaServed: params.areaServed } : {}),
  };
}

export function serviceJsonLd(params: { name: string; description: string; url: string; providerName: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: params.name,
    description: params.description,
    url: params.url,
    provider: { "@type": "FinancialService", name: params.providerName },
  };
}

export function JsonLd({ data }: { data: object | null }) {
  if (!data) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
