"use client";

import { useEffect, useRef } from "react";
import "../../styles/funnel.css";
import { useFunnelTheme } from "./useFunnelTheme";
import { wireMultiStepForm } from "./wireMultiStepForm";
import {
  QUOTE_INDEX_BODY_HTML,
  QUOTE_AUTO_BODY_HTML,
  QUOTE_HOME_BODY_HTML,
  QUOTE_LIFE_BODY_HTML,
  QUOTE_HEALTH_BODY_HTML,
  QUOTE_CONDO_BODY_HTML,
  QUOTE_MOTORCYCLE_BODY_HTML,
  QUOTE_BOAT_BODY_HTML,
  QUOTE_RV_BODY_HTML,
} from "./content/quote.body";

/**
 * /quote/* — link-sendable quote worksheets. Each worksheet page carries
 * one multi-step form (#quote-form-el) wired through the shared funnel
 * submitter with its own formId; worksheet fields are collected
 * generically via data-qfield attributes (see wireMultiStepForm.ts) and
 * the full detail lands in Folk + the team alert email.
 */
function QuoteWorksheetPage({ bodyHtml, formId, pageSlug }: { bodyHtml: string; formId: string; pageSlug: string }) {
  const rootRef = useRef<HTMLDivElement>(null);
  useFunnelTheme(rootRef);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const cleanup = wireMultiStepForm(root.querySelector<HTMLFormElement>("#quote-form-el"), {
      formId,
      pageSlug,
    });
    return () => cleanup();
  }, [formId, pageSlug]);

  return (
    <div
      ref={rootRef}
      className="rig-funnel-page"
      data-theme="light"
      dangerouslySetInnerHTML={{ __html: bodyHtml }}
    />
  );
}

/** /quote — worksheet index, no form. */
export function QuoteIndexPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  useFunnelTheme(rootRef);

  return (
    <div
      ref={rootRef}
      className="rig-funnel-page"
      data-theme="light"
      dangerouslySetInnerHTML={{ __html: QUOTE_INDEX_BODY_HTML }}
    />
  );
}

export function QuoteAutoPage() {
  return <QuoteWorksheetPage bodyHtml={QUOTE_AUTO_BODY_HTML} formId="quote-auto" pageSlug="/quote/auto/" />;
}

export function QuoteHomePage() {
  return <QuoteWorksheetPage bodyHtml={QUOTE_HOME_BODY_HTML} formId="quote-home" pageSlug="/quote/home/" />;
}

export function QuoteLifePage() {
  return <QuoteWorksheetPage bodyHtml={QUOTE_LIFE_BODY_HTML} formId="quote-life" pageSlug="/quote/life/" />;
}

export function QuoteHealthPage() {
  return <QuoteWorksheetPage bodyHtml={QUOTE_HEALTH_BODY_HTML} formId="quote-health" pageSlug="/quote/health/" />;
}

export function QuoteCondoPage() {
  return <QuoteWorksheetPage bodyHtml={QUOTE_CONDO_BODY_HTML} formId="quote-condo" pageSlug="/quote/condo/" />;
}

export function QuoteMotorcyclePage() {
  return <QuoteWorksheetPage bodyHtml={QUOTE_MOTORCYCLE_BODY_HTML} formId="quote-motorcycle" pageSlug="/quote/motorcycle/" />;
}

export function QuoteBoatPage() {
  return <QuoteWorksheetPage bodyHtml={QUOTE_BOAT_BODY_HTML} formId="quote-boat" pageSlug="/quote/boat/" />;
}

export function QuoteRvPage() {
  return <QuoteWorksheetPage bodyHtml={QUOTE_RV_BODY_HTML} formId="quote-rv" pageSlug="/quote/rv/" />;
}
