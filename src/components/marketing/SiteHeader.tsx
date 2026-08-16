"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NAV_ITEMS = [
  { label: "About", href: "/about/" },
  { label: "Our Approach", href: "/our-approach/" },
  { label: "Services", href: "/services/" },
  { label: "Who We Help", href: "/who-we-help/" },
  { label: "Locations", href: "/locations/" },
  { label: "Insights", href: "/insights/" },
  { label: "Resources", href: "/resources/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Contact", href: "/contact/" },
];

/**
 * Accessible, keyboard-operable site header. Mobile nav uses a disclosure
 * button rather than hover-only menus. No autoplay, no interstitials.
 */
export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="site-header container">
      <Link href="/" className="site-header-logo" aria-label="Reserve Investment Group, Inc. home">
        <span className="site-brand-mark" aria-hidden="true">
          <Image src="/brand/rig-3d.png" alt="" width={335} height={315} className="site-brand-artwork" />
        </span>
        <span className="site-brand-name">Reserve Investment Group, Inc.</span>
      </Link>
      <button
        type="button"
        className="site-header-toggle"
        aria-expanded={mobileOpen}
        aria-controls="primary-nav"
        onClick={() => setMobileOpen((v) => !v)}
      >
        Menu
      </button>
      <nav id="primary-nav" aria-label="Primary" hidden={!mobileOpen} className="site-header-nav">
        <ul>
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <Link href="/schedule/" className="site-header-cta">
          Schedule an introductory conversation
        </Link>
      </nav>
    </header>
  );
}
