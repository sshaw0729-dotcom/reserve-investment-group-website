"use client";

import { useEffect, useRef } from "react";
import "../../styles/funnel.css";
import { useFunnelTheme } from "./useFunnelTheme";
import { wireMultiStepForm } from "./wireMultiStepForm";
import {
  ANNUITY_LANDING_BODY_HTML,
  ANNUITY_APPLY_BODY_HTML,
  ANNUITY_SHEET_BODY_HTML,
} from "./content/annuity.body";

/**
 * /annuity-checkup/* — the Annuity Owner's Checkup funnel. The landing
 * page carries the magnet opt-in form; the application is a multi-step
 * qualification form wired through the shared funnel submitter; the
 * checkup sheet is the magnet itself, as a web page.
 */
export function AnnuityLandingPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  useFunnelTheme(rootRef);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const cleanup = wireMultiStepForm(root.querySelector<HTMLFormElement>("#annuity-optin-form"), {
      formId: "annuity-checkup-optin",
      pageSlug: "/annuity-checkup/",
    });
    return () => cleanup();
  }, []);

  return (
    <div
      ref={rootRef}
      className="rig-funnel-page"
      data-theme="light"
      dangerouslySetInnerHTML={{ __html: ANNUITY_LANDING_BODY_HTML }}
    />
  );
}

export function AnnuityApplyPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  useFunnelTheme(rootRef);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const form = root.querySelector<HTMLFormElement>("#annuity-apply-form");
    const cleanup = wireMultiStepForm(form, {
      formId: "annuity-checkup-apply",
      pageSlug: "/annuity-checkup/apply/",
    });
    if (!form) return cleanup;

    // "Not yet" variant: owner-only questions (type, carrier, purchase
    // window, income) hide and disable so their defaults never submit;
    // the value band stays live and its label switches to the amount
    // being considered.
    const ownerFields = root.querySelector<HTMLElement>("#ac-owner-fields");
    const ownerControls = Array.from(form.querySelectorAll<HTMLInputElement | HTMLSelectElement>(".ac-owner-only"));
    const valueLabel = root.querySelector<HTMLElement>("#ac-value-label");
    const onOwnsChange = () => {
      const owns = form.querySelector<HTMLInputElement>('input[name="ac-owns"]:checked')?.value;
      const isOwner = owns !== "Not yet";
      if (ownerFields) ownerFields.hidden = !isOwner;
      ownerControls.forEach((control) => {
        control.disabled = !isOwner;
      });
      if (valueLabel) valueLabel.textContent = isOwner ? "Approximate contract value" : "Amount you are considering";
    };
    const ownsRadios = Array.from(form.querySelectorAll<HTMLInputElement>('input[name="ac-owns"]'));
    ownsRadios.forEach((radio) => radio.addEventListener("change", onOwnsChange));
    onOwnsChange();

    // Out-of-area path: the shared submitter reveals whichever panel
    // carries [data-success]; point it at the polite-close panel when
    // the visitor's state is outside OH/MI/FL.
    const successPanel = root.querySelector<HTMLElement>("#ac-success");
    const disqualifiedPanel = root.querySelector<HTMLElement>("#ac-disqualified");
    const stateSelect = form.querySelector<HTMLSelectElement>("#cstate");
    const onStateChange = () => {
      const outOfArea = stateSelect?.value === "Other state";
      if (outOfArea) {
        successPanel?.removeAttribute("data-success");
        disqualifiedPanel?.setAttribute("data-success", "");
      } else {
        disqualifiedPanel?.removeAttribute("data-success");
        successPanel?.setAttribute("data-success", "");
      }
    };
    stateSelect?.addEventListener("change", onStateChange);
    onStateChange();

    return () => {
      cleanup();
      ownsRadios.forEach((radio) => radio.removeEventListener("change", onOwnsChange));
      stateSelect?.removeEventListener("change", onStateChange);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="rig-funnel-page"
      data-theme="light"
      dangerouslySetInnerHTML={{ __html: ANNUITY_APPLY_BODY_HTML }}
    />
  );
}

/** /annuity-checkup/checkup-sheet — the magnet as a web page, no form. */
export function AnnuitySheetPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  useFunnelTheme(rootRef);

  return (
    <div
      ref={rootRef}
      className="rig-funnel-page"
      data-theme="light"
      dangerouslySetInnerHTML={{ __html: ANNUITY_SHEET_BODY_HTML }}
    />
  );
}
