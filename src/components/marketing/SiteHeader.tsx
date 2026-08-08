"use client";
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
      <a href="/" className="site-header-logo">
        Reserve Investment Group, Inc
      </a>
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
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
        <a href="/schedule/" className="site-header-cta">
          Schedule a Conversation
        </a>
      </nav>
    </header>
  );
}
