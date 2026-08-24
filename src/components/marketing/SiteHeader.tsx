"use client";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { referenceRigArtwork } from "../../lib/brand/referenceRigArtwork";

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
  const [mobileClosing, setMobileClosing] = useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimer = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const closeImmediately = useCallback(() => {
    clearCloseTimer();
    setMobileClosing(false);
    setMobileOpen(false);
  }, [clearCloseTimer]);

  const closeWithFade = useCallback(() => {
    if (!mobileOpen || mobileClosing) return;

    clearCloseTimer();
    setMobileClosing(true);
    closeTimerRef.current = setTimeout(() => {
      setMobileOpen(false);
      setMobileClosing(false);
      closeTimerRef.current = null;
    }, 140);
  }, [clearCloseTimer, mobileClosing, mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;

    window.addEventListener("scroll", closeImmediately, { passive: true });
    return () => window.removeEventListener("scroll", closeImmediately);
  }, [closeImmediately, mobileOpen]);

  useEffect(() => clearCloseTimer, [clearCloseTimer]);

  return (
    <header className="site-header container">
      <Link href="/" className="site-header-logo" aria-label="Reserve Investment Group, Inc. home">
        <span className="site-brand-mark" aria-hidden="true">
          <Image
            className="site-brand-mark-image"
            src={referenceRigArtwork}
            alt=""
            width={335}
            height={315}
            unoptimized
          />
        </span>
        <span className="site-brand-name">Reserve Investment Group, Inc.</span>
      </Link>
      <button
        type="button"
        className="site-header-toggle"
        aria-expanded={mobileOpen && !mobileClosing}
        aria-controls="primary-nav"
        onClick={() => {
          if (mobileOpen) {
            closeImmediately();
          } else {
            setMobileOpen(true);
          }
        }}
      >
        Menu
      </button>
      <nav
        id="primary-nav"
        aria-label="Primary"
        aria-hidden={mobileClosing || undefined}
        data-closing={mobileClosing || undefined}
        hidden={!mobileOpen}
        className="site-header-nav"
      >
        <ul>
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link href={item.href} onClick={closeWithFade}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/schedule/" className="site-header-cta" onClick={closeWithFade}>
          Schedule an introductory conversation
        </Link>
      </nav>
    </header>
  );
}
