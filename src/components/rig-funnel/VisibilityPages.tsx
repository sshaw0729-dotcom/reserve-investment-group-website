"use client";

import { useRef } from "react";
import "../../styles/funnel.css";
import { useFunnelTheme } from "./useFunnelTheme";
import { PROCESSING_COST_BODY_HTML } from "./content/processing.body";
import { MEDICARE_ANSWERS_BODY_HTML } from "./content/medicare-answers.body";

/**
 * AI-visibility education pages (built 2026-10-22 from Ron-approved
 * drafts): static, citable, question-shaped pages. No forms — the
 * processing page's offer is the Processing Cost Review (worked through
 * /merchant-services and the AUDIT comment funnel); the Medicare page is
 * education only, per the CMS discipline in the draft.
 */

/** /cleveland-credit-card-processing-costs — static education page. */
export function ProcessingCostPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  useFunnelTheme(rootRef);

  return (
    <div
      ref={rootRef}
      className="rig-funnel-page"
      data-theme="light"
      dangerouslySetInnerHTML={{ __html: PROCESSING_COST_BODY_HTML }}
    />
  );
}

/** /medicare-answers-cleveland — static education page. */
export function MedicareAnswersPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  useFunnelTheme(rootRef);

  return (
    <div
      ref={rootRef}
      className="rig-funnel-page"
      data-theme="light"
      dangerouslySetInnerHTML={{ __html: MEDICARE_ANSWERS_BODY_HTML }}
    />
  );
}
