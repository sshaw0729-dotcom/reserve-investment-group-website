"use client";

import { useEffect, useRef } from "react";
import "../../styles/funnel.css";
import { useFunnelTheme } from "./useFunnelTheme";
import { submitFunnelLead } from "./wireMultiStepForm";
import { MERCHANT_BODY_HTML } from "./content/merchant.body";
import { track } from "../../lib/analytics/track";

/**
 * /merchant-services — statement-upload audit tool + savings calculator.
 * Ported 1:1 from the prototype's vanilla JS (same element IDs).
 */
export default function MerchantServicesPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  useFunnelTheme(rootRef);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const dz = root.querySelector<HTMLElement>("#dropzone");
    const fileInput = root.querySelector<HTMLInputElement>("#statement-file");
    const detailsForm = root.querySelector<HTMLFormElement>("#audit-details-form");
    const successPanel = root.querySelector<HTMLElement>("#audit-success");
    const dividerOr = root.querySelector<HTMLElement>(".divider-or");

    const cleanups: Array<() => void> = [];

    if (dz && fileInput) {
      const revealForm = () => {
        if (detailsForm) detailsForm.style.display = "block";
        detailsForm?.querySelector<HTMLInputElement>("input")?.focus();
      };
      const onDzClick = () => revealForm();
      const onDzKeydown = (e: KeyboardEvent) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          revealForm();
        }
      };
      dz.addEventListener("click", onDzClick);
      dz.addEventListener("keydown", onDzKeydown);
      cleanups.push(() => {
        dz.removeEventListener("click", onDzClick);
        dz.removeEventListener("keydown", onDzKeydown);
      });
    }

    if (detailsForm) {
      let formStarted = false;
      const onFocus = () => {
        if (formStarted) return;
        formStarted = true;
        track("form_started", { form_id: "merchant-statement-review", page_slug: "/merchant-services/" });
      };
      detailsForm.addEventListener("focusin", onFocus);
      const onSubmit = async (e: Event) => {
        e.preventDefault();
        const sent = await submitFunnelLead(detailsForm, {
          formId: "merchant-statement-review",
          pageSlug: "/merchant-services/",
          successPanel,
        });
        if (sent) {
          detailsForm.style.display = "none";
          if (dz) dz.style.display = "none";
          if (dividerOr) dividerOr.style.display = "none";
        }
      };
      detailsForm.addEventListener("submit", onSubmit);
      cleanups.push(() => {
        detailsForm.removeEventListener("focusin", onFocus);
        detailsForm.removeEventListener("submit", onSubmit);
      });
    }

    const calcBtn = root.querySelector<HTMLElement>("#calc-btn");
    if (calcBtn) {
      const onCalc = () => {
        const volEl = root.querySelector<HTMLInputElement>("#calc-volume");
        const rateEl = root.querySelector<HTMLInputElement>("#calc-rate");
        const compareRateEl = root.querySelector<HTMLInputElement>("#calc-compare-rate");
        const outputEl = root.querySelector<HTMLElement>("#calc-output");
        const vol = parseFloat((volEl?.value || "25000").replace(/[^0-9.]/g, "")) || 25000;
        const rate = parseFloat((rateEl?.value || "3.2").replace(/[^0-9.]/g, "")) || 3.2;
        const compareRate = parseFloat((compareRateEl?.value || "2.8").replace(/[^0-9.]/g, "")) || 2.8;
        const difference = Math.round(vol * ((rate - compareRate) / 100));
        if (outputEl) outputEl.textContent = `${difference < 0 ? "−" : ""}$${Math.abs(difference).toLocaleString()}/mo`;
        track("secondary_cta_clicked", { page_slug: "/merchant-services/", cta_location: "illustrative_cost_calculator" });
      };
      calcBtn.addEventListener("click", onCalc);
      cleanups.push(() => calcBtn.removeEventListener("click", onCalc));
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <div
      ref={rootRef}
      className="rig-funnel-page"
      data-theme="light"
      dangerouslySetInnerHTML={{ __html: MERCHANT_BODY_HTML }}
    />
  );
}
