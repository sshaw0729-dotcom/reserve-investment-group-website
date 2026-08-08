import type { MetadataRoute } from "next";
import { SERVICES } from "../lib/content/services";
import { PERSONAS } from "../lib/content/personas";
import { LOCATIONS } from "../lib/content/locations";
import { INSIGHTS } from "../lib/content/insights";
import { LEAD_MAGNETS } from "../lib/content/leadmagnets";

// Scaffold sitemap generator. Lists routes that exist in src/app today,
// including the dynamic service/persona/location spokes. Replace with a
// read from CONTENT-MANIFEST.csv / the content model once pages exist,
// filtered to status: "Published" only — an unpublished Draft page
// should never appear here in a real deploy.
//
// Deliberately EXCLUDED, do not add back without clearing the named gate:
// - /shaker-heights/retirement-planning-for-executives/ (COMBO-003) —
//   gated on office/service-area confirmation, KEYWORD-AND-INTENT-MAP.csv
// - /business-fee-audit/** (all 5 pages) — gated on entity/compensation
//   disclosure, MISSING-INFORMATION-REGISTER.md #23
const STATIC_ROUTES: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/about/", priority: 0.8 },
  { path: "/our-approach/", priority: 0.8 },
  { path: "/services/", priority: 0.8 },
  { path: "/who-we-help/", priority: 0.8 },
  { path: "/locations/", priority: 0.8 },
  { path: "/insights/", priority: 0.6 },
  { path: "/resources/", priority: 0.6 },
  { path: "/faq/", priority: 0.6 },
  { path: "/contact/", priority: 0.7 },
  { path: "/schedule/", priority: 0.7 },
  { path: "/disclosures/", priority: 0.4 },
  { path: "/privacy/", priority: 0.3 },
  { path: "/terms/", priority: 0.3 },
  { path: "/accessibility/", priority: 0.3 },
  { path: "/financial-review/", priority: 0.7 },
  { path: "/retirement-review/", priority: 0.7 },
  { path: "/business-owner-financial-review/", priority: 0.7 },
  { path: "/greater-cleveland/financial-planning-for-physicians/", priority: 0.6 },
  { path: "/greater-cleveland/business-owner-financial-planning/", priority: 0.6 },
  { path: "/retirement-planning-cleveland/", priority: 0.6 },
  { path: "/wealth-management-cleveland/", priority: 0.6 },
  { path: "/manufacturing-business-advisors/", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://reserveinvestmentgroup.com";

  const serviceRoutes = SERVICES.map((s) => ({ path: `/services/${s.slug}/`, priority: 0.7 }));
  const personaRoutes = PERSONAS.map((p) => ({ path: `/who-we-help/${p.slug}/`, priority: 0.7 }));
  const locationRoutes = LOCATIONS.map((l) => ({ path: `/locations/${l.slug}/`, priority: 0.7 }));
  const insightRoutes = INSIGHTS.map((i) => ({
    path: `/insights/${i.slug}/`,
    priority: i.contentType === "pillar" ? 0.6 : 0.5,
  }));
  const leadMagnetRoutes = LEAD_MAGNETS.map((m) => ({ path: `/resources/${m.slug}/`, priority: 0.5 }));

  return [...STATIC_ROUTES, ...serviceRoutes, ...personaRoutes, ...locationRoutes, ...insightRoutes, ...leadMagnetRoutes].map((route) => ({
    url: `${siteUrl}${route.path}`,
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
