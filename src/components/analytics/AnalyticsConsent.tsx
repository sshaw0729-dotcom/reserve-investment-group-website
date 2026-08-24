"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  disableAnalytics,
  initAnalyticsAfterConsent,
  track,
} from "../../lib/analytics/track";

type ConsentPreference = "granted" | "denied";

const STORAGE_KEY = "rig_analytics_consent";

function recordPageView(pathname: string) {
  const pageSlug = `${pathname.replace(/\/$/, "") || "/"}/`.replace("//", "/");
  const serviceCategories: Record<string, string> = {
    "/auto-home-insurance/": "property-casualty-insurance",
    "/life-insurance/": "life-insurance",
    "/merchant-services/": "merchant-services",
    "/insurance-and-payments/": "insurance-and-payments",
  };
  track("page_viewed", {
    page_slug: pageSlug,
    page_type: pageSlug === "/insurance-and-payments/" ? "hub" : serviceCategories[pageSlug] ? "service" : "utility",
    service_category: serviceCategories[pageSlug],
  });
}

export function AnalyticsConsent() {
  const pathname = usePathname();
  const [preference, setPreference] = useState<ConsentPreference | null>(null);
  const [showPanel, setShowPanel] = useState(false);
  const [resolved, setResolved] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "granted") {
        setPreference("granted");
        initAnalyticsAfterConsent();
      } else if (saved === "denied") {
        setPreference("denied");
        disableAnalytics();
      } else {
        setShowPanel(true);
      }
      setResolved(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (preference === "granted") recordPageView(pathname);
  }, [pathname, preference]);

  function accept() {
    window.localStorage.setItem(STORAGE_KEY, "granted");
    setPreference("granted");
    setShowPanel(false);
    initAnalyticsAfterConsent();
    track("consent_preference_updated");
  }

  function decline() {
    window.localStorage.setItem(STORAGE_KEY, "denied");
    setPreference("denied");
    setShowPanel(false);
    disableAnalytics();
  }

  if (!resolved) return null;

  return (
    <>
      {showPanel && (
        <section className="analytics-consent" role="dialog" aria-modal="false" aria-labelledby="analytics-consent-title">
          <div>
            <h2 id="analytics-consent-title">Your privacy choices</h2>
            <p>
              We use privacy-configured analytics to understand which pages and tools are useful. Analytics remains off unless you accept. We do not send form answers or contact information to analytics. Read our <a href="/privacy/">Privacy Policy</a>.
            </p>
          </div>
          <div className="analytics-consent-actions">
            <button className="btn btn-secondary" type="button" onClick={decline}>Decline analytics</button>
            <button className="btn btn-primary" type="button" onClick={accept}>Accept analytics</button>
          </div>
        </section>
      )}
      {!showPanel && preference && (
        <button className="analytics-settings-trigger" type="button" onClick={() => setShowPanel(true)}>
          Analytics settings
        </button>
      )}
    </>
  );
}
