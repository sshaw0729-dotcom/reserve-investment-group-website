// Home — wired to the design-system components. Practice owner approved
// publication and instructed removal of the pre-launch banner 2026-08-08
// (see MISSING-INFORMATION-REGISTER.md, COMPLIANCE-PACKAGE-TEMPLATE.md
// asset CORE-001).

import { Hero } from "../components/marketing/Hero";
import { CTAStrip } from "../components/marketing/CTAStrip";
import { JsonLd, localBusinessJsonLd } from "../lib/seo/jsonld";

// Office address and phone confirmed by practice owner 2026-08-06
// (MISSING-INFORMATION-REGISTER.md #14/#15) — this is the first page in
// the codebase to call localBusinessJsonLd() now that real NAP data
// exists. areaServed intentionally lists South Euclid (the actual office
// city) plus the broader Wave 1 service area already used elsewhere on
// the site, rather than implying an office in every listed city.
//
// 216-284-3615 is confirmed correct and is now the primary number on
// the live Google Business Profile (updated 2026-08-06, pending Google's
// review). See MISSING-INFORMATION-REGISTER.md #15.
const HOME_LOCAL_BUSINESS_SCHEMA = localBusinessJsonLd({
  name: "Reserve Investment Group, Inc",
  description:
    "Financial planning for individuals, families, and business owners in the Greater Cleveland area.",
  url: "https://reserveinvestmentgroup.com/",
  telephone: "216-284-3615",
  address: {
    streetAddress: "1414 S. Green Rd., Suite 105",
    addressLocality: "South Euclid",
    addressRegion: "OH",
    postalCode: "44121",
    addressCountry: "US",
  },
  areaServed: ["South Euclid", "Cleveland", "Cleveland Heights", "Shaker Heights", "Beachwood", "Solon", "Willoughby", "Mentor"],
});

export default function HomePage() {
  return (
    <main>
      <JsonLd data={HOME_LOCAL_BUSINESS_SCHEMA} />
      <Hero
        eyebrow="Reserve Investment Group, Inc"
        title="Financial planning built around your goals"
        subhead="We help individuals, families, and business owners identify financial inefficiencies, address unmanaged risks, and coordinate their financial decisions around the goals that matter to them."
      />
      <CTAStrip label="Schedule an introductory conversation" href="/schedule/" />
    </main>
  );
}
