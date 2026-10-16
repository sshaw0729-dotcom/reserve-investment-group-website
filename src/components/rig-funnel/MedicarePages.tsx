"use client";

import { useEffect, useRef } from "react";
import "../../styles/funnel.css";
import { useFunnelTheme } from "./useFunnelTheme";
import { wireMultiStepForm } from "./wireMultiStepForm";
import {
  MEDICARE_BODY_HTML,
  MEDICARE_TURNING65_BODY_HTML,
  MEDICARE_PERIODS_BODY_HTML,
} from "./content/medicare.body";

/**
 * /medicare — the Medicare education hub. The one-pager form
 * (#medicare-onepager-form) is a single-step lead form wired through
 * the shared funnel submitter (formId "medicare-one-pager"); on
 * success the shared submitter hides the form step and reveals the
 * [data-success] panel carrying the one-pager download.
 */
export function MedicarePage() {
  const rootRef = useRef<HTMLDivElement>(null);
  useFunnelTheme(rootRef);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const cleanup = wireMultiStepForm(root.querySelector<HTMLFormElement>("#medicare-onepager-form"), {
      formId: "medicare-one-pager",
      pageSlug: "/medicare/",
    });
    return () => cleanup();
  }, []);

  return (
    <div
      ref={rootRef}
      className="rig-funnel-page"
      data-theme="light"
      dangerouslySetInnerHTML={{ __html: MEDICARE_BODY_HTML }}
    />
  );
}

/** /medicare/turning-65 — static education page, no form wiring. */
export function MedicareTurning65Page() {
  const rootRef = useRef<HTMLDivElement>(null);
  useFunnelTheme(rootRef);

  return (
    <div
      ref={rootRef}
      className="rig-funnel-page"
      data-theme="light"
      dangerouslySetInnerHTML={{ __html: MEDICARE_TURNING65_BODY_HTML }}
    />
  );
}

/** /medicare/enrollment-periods — static education page, no form wiring. */
export function MedicarePeriodsPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  useFunnelTheme(rootRef);

  return (
    <div
      ref={rootRef}
      className="rig-funnel-page"
      data-theme="light"
      dangerouslySetInnerHTML={{ __html: MEDICARE_PERIODS_BODY_HTML }}
    />
  );
}
