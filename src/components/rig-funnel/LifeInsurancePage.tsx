"use client";

import { useEffect, useRef } from "react";
import "../../styles/funnel.css";
import { useFunnelTheme } from "./useFunnelTheme";
import { wireMultiStepForm } from "./wireMultiStepForm";
import { LIFE_BODY_HTML } from "./content/life.body";
import { track } from "../../lib/analytics/track";

/**
 * /life-insurance — three-path selector (Term / IUL / Final Expense).
 * Term and Final Expense each have their own multi-step form
 * (#term-form-el, #fe-form-el); IUL uses a single-step appointment
 * form with native browser validation only, so it needs no JS wiring.
 */
export default function LifeInsurancePage() {
  const rootRef = useRef<HTMLDivElement>(null);
  useFunnelTheme(rootRef);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    track("page_viewed", { page_type: "service", page_slug: "/life-insurance/", service_category: "life-insurance" });
    const cleanupTerm = wireMultiStepForm(root.querySelector<HTMLFormElement>("#term-form-el"), {
      formId: "term-life-review",
      pageSlug: "/life-insurance/",
    });
    const cleanupIul = wireMultiStepForm(root.querySelector<HTMLFormElement>("#iul-form-el"), {
      formId: "iul-conversation",
      pageSlug: "/life-insurance/",
    });
    const cleanupFE = wireMultiStepForm(root.querySelector<HTMLFormElement>("#fe-form-el"), {
      formId: "final-expense-review",
      pageSlug: "/life-insurance/",
    });
    return () => {
      cleanupTerm();
      cleanupIul();
      cleanupFE();
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="rig-funnel-page"
      data-theme="light"
      dangerouslySetInnerHTML={{ __html: LIFE_BODY_HTML }}
    />
  );
}
