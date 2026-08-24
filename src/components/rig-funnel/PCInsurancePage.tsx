"use client";

import { useEffect, useRef } from "react";
import "../../styles/funnel.css";
import { useFunnelTheme } from "./useFunnelTheme";
import { wireMultiStepForm } from "./wireMultiStepForm";
import { PC_BODY_HTML } from "./content/pc.body";
import { track } from "../../lib/analytics/track";

/**
 * /auto-home-insurance — P&C quote funnel (auto, home, renters, condo,
 * commercial). Wires the 3-step #pc-form the same way the prototype did.
 */
export default function PCInsurancePage() {
  const rootRef = useRef<HTMLDivElement>(null);
  useFunnelTheme(rootRef);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    track("page_viewed", { page_type: "service", page_slug: "/auto-home-insurance/", service_category: "property-casualty-insurance" });
    const form = root.querySelector<HTMLFormElement>("#pc-form");
    return wireMultiStepForm(form, {
      formId: "auto-home-insurance-review",
      pageSlug: "/auto-home-insurance/",
    });
  }, []);

  return (
    <div
      ref={rootRef}
      className="rig-funnel-page"
      data-theme="light"
      dangerouslySetInnerHTML={{ __html: PC_BODY_HTML }}
    />
  );
}
