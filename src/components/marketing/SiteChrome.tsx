"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { referenceRigArtwork } from "../../lib/brand/referenceRigArtwork";
import { track } from "../../lib/analytics/track";
import { SiteHeader } from "./SiteHeader";

const STRIPPED_FUNNEL_PATHS = new Set([
  "/auto-home-insurance",
  "/life-insurance",
  "/merchant-services",
]);

function FunnelHeader() {
  const pathname = usePathname();
  return (
    <header className="funnel-site-header container">
      <Link href="/" className="site-header-logo" aria-label="Reserve Investment Group, Inc. home">
        <span className="site-brand-mark" aria-hidden="true">
          <Image className="site-brand-mark-image" src={referenceRigArtwork} alt="" width={335} height={315} unoptimized />
        </span>
        <span className="site-brand-name">Reserve Investment Group, Inc.</span>
      </Link>
      <div className="funnel-site-header-actions">
        <a href="tel:+12162843615" onClick={() => track("phone_link_clicked", { page_slug: pathname })}>
          (216) 284-3615
        </a>
        <Link href="/" onClick={() => track("secondary_cta_clicked", { page_slug: pathname, cta_location: "funnel_header_back" })}>
          Back to main site
        </Link>
      </div>
    </header>
  );
}

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname().replace(/\/$/, "") || "/";
  return (
    <>
      {STRIPPED_FUNNEL_PATHS.has(pathname) ? <FunnelHeader /> : <SiteHeader />}
      {children}
    </>
  );
}
