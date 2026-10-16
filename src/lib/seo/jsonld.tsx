import type { ReactElement } from "react";
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

export function JsonLd({ data }: { data: object | null }): ReactElement | null {
  if (!data) return null;
  // Emit the script tag as a literal HTML string inside a hidden host
  // element. Rendering <script> as a React element (JSX or createElement)
  // produced NO script tag in the served HTML on this stack (verified
  // live 2026-10-16: Google Rich Results Test found zero structured data
  // on every page, including pages built long before this change), so
  // the tag is written as raw markup instead, which React passes through
  // verbatim. "<" is escaped as \u003c inside the JSON so content can
  // never break out of the script element.
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <span
      hidden
      dangerouslySetInnerHTML={{ __html: `<script type="application/ld+json">${json}</script>` }}
    />
  );
}
