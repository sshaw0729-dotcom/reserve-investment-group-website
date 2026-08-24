"use client";

import { useEffect, useRef } from "react";
import "../../styles/funnel.css";
import { useFunnelTheme } from "./useFunnelTheme";
import { HUB_BODY_HTML } from "./content/hub.body";
import { track } from "../../lib/analytics/track";

/**
 * Overview/hub page linking to the three vertical funnel pages
 * (P&C, Life Insurance, Merchant Services). No interactive form —
 * just the theme toggle from the shared footer.
 */
export default function RigFunnelHub() {
  const rootRef = useRef<HTMLDivElement>(null);
  useFunnelTheme(rootRef);

  useEffect(() => {
    track("page_viewed", { page_type: "hub", page_slug: "/insurance-and-payments/", service_category: "insurance-and-payments" });
  }, []);

  return (
    <div
      ref={rootRef}
      className="rig-funnel-page"
      data-theme="light"
      dangerouslySetInnerHTML={{ __html: HUB_BODY_HTML }}
    />
  );
}
