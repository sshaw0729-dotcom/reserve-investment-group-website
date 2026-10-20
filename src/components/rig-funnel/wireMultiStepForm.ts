import { track } from "../../lib/analytics/track";

type FunnelLeadOptions = { formId: string; pageSlug: string; successPanel?: HTMLElement | null };

function fieldValue(form: HTMLFormElement, selectors: string) {
  return form.querySelector<HTMLInputElement>(selectors)?.value.trim() ?? "";
}

function selectValue(form: HTMLFormElement, selector: string) {
  return form.querySelector<HTMLInputElement | HTMLSelectElement>(selector)?.value.trim() ?? "";
}

function collectFunnelData(form: HTMLFormElement, formId: string) {
  if (formId === "auto-home-insurance-review") {
    return {
      coverage_type: selectValue(form, "#coverage"),
      zip_code: selectValue(form, "#zip"),
      currently_insured: selectValue(form, "#currently"),
      renewal_date: selectValue(form, "#renewal"),
    };
  }
  if (formId === "term-life-review") {
    return {
      age: selectValue(form, "#age"),
      term_length: selectValue(form, "#term-len"),
      coverage_amount: selectValue(form, "#coverage-amt"),
      tobacco_use: selectValue(form, "#tobacco"),
    };
  }
  if (formId === "iul-conversation") return { planning_goal: selectValue(form, "#igoal") };
  if (formId === "final-expense-review") {
    return {
      age: selectValue(form, "#feage"),
      health_conditions: selectValue(form, "#fehealth"),
      final_expense_coverage: selectValue(form, "#fecov"),
    };
  }
  if (formId === "merchant-statement-review") return { business_name: selectValue(form, "#bname") };
  if (formId === "medicare-one-pager") return { medicare_status: selectValue(form, "#mstatus") };
  return {};
}

// Quote worksheets (/quote/*) collect every field generically: each
// worksheet input carries data-qfield="<label>", and the server writes
// the full label/value list into the Folk note and the alert email.
function collectQuoteData(form: HTMLFormElement) {
  const data: { label: string; value: string }[] = [];
  form.querySelectorAll<HTMLElement>("[data-qfield]").forEach((el) => {
    const label = el.getAttribute("data-qfield") ?? "";
    if (!label) return;
    let value = "";
    if (el instanceof HTMLInputElement && (el.type === "checkbox" || el.type === "radio")) {
      if (el.checked) value = el.value.trim() || "Yes";
    } else if (el instanceof HTMLInputElement || el instanceof HTMLSelectElement || el instanceof HTMLTextAreaElement) {
      value = el.value.trim();
    }
    if (value) data.push({ label, value });
  });
  return data;
}

// Annuity Checkup application (/annuity-checkup/apply/) collects its
// qualification fields via data-cfield="<key>" attributes into one
// structured object; the server labels, tier-scores, and files it.
// Disabled fields (e.g. owner-only questions hidden by the "not yet"
// variant) are skipped so hidden defaults never reach the lead record.
function collectCheckupData(form: HTMLFormElement) {
  const data: Record<string, string> = {};
  form.querySelectorAll<HTMLElement>("[data-cfield]").forEach((el) => {
    const key = el.getAttribute("data-cfield") ?? "";
    if (!key) return;
    if (el instanceof HTMLInputElement && el.type === "radio") {
      if (el.checked && !el.disabled) data[key] = el.value.trim();
    } else if (el instanceof HTMLInputElement && el.type === "checkbox") {
      if (el.checked && !el.disabled) {
        const value = el.value.trim();
        if (value) data[key] = data[key] ? `${data[key]}; ${value}` : value;
      }
    } else if (el instanceof HTMLInputElement || el instanceof HTMLSelectElement || el instanceof HTMLTextAreaElement) {
      if (!el.disabled) {
        const value = el.value.trim();
        if (value) data[key] = value;
      }
    }
  });
  return data;
}

export async function submitFunnelLead(form: HTMLFormElement, options: FunnelLeadOptions) {
  const firstName = fieldValue(form, '[name="firstName"], #fname, #tfname, #ifname, #fefname, #bfname');
  const lastName = fieldValue(form, '[name="lastName"], #lname, #tlname, #ilname, #felname, #blname');
  const email = fieldValue(form, '[name="email"], #email, #temail, #iemail, #feemail, #bemail');
  const phone = fieldValue(form, '[name="phone"], #phone, #tphone, #iphone, #fephone, #bphone');
  const consent = Boolean(form.querySelector<HTMLInputElement>('input[name="consent"]:checked'));
  const submitButton = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  if (!form.reportValidity() || !firstName || !lastName || !email || !consent) {
    track("form_validation_error", { form_id: options.formId, page_slug: options.pageSlug });
    return false;
  }
  submitButton?.setAttribute("disabled", "true");
  const priorLabel = submitButton?.textContent ?? "Submit";
  if (submitButton) submitButton.textContent = "Submitting…";
  try {
    const response = await fetch("/.netlify/functions/submit-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, email, phone, areaOfInterest: "other", preferredContactMethod: phone ? "phone" : "email", consent, formId: options.formId, pageSlug: options.pageSlug, website: "", funnelData: collectFunnelData(form, options.formId), ...(options.formId.startsWith("quote-") ? { quoteData: collectQuoteData(form) } : {}), ...(options.formId === "annuity-checkup-apply" ? { checkupData: collectCheckupData(form) } : {}) }),
    });
    if (!response.ok) throw new Error("Lead submission failed");
    form.querySelectorAll<HTMLElement>(".form-step").forEach((step) => (step.hidden = true));
    const success = options.successPanel ?? form.querySelector<HTMLElement>("[data-success]");
    if (success) success.hidden = false;
    else form.innerHTML = '<div class="success-panel"><h3>Request received.</h3><p>A member of our team will typically respond within 24 hours.</p></div>';
    track("form_submitted", { form_id: options.formId, page_slug: options.pageSlug });
    return true;
  } catch {
    let error = form.querySelector<HTMLElement>("[data-submit-error]");
    if (!error) {
      error = document.createElement("p");
      error.dataset.submitError = "true";
      error.className = "form-error";
      error.setAttribute("role", "alert");
      form.append(error);
    }
    error.textContent = "Something went wrong. Please try again or call (216) 284-3615.";
    return false;
  } finally {
    submitButton?.removeAttribute("disabled");
    if (submitButton?.isConnected) submitButton.textContent = priorLabel;
  }
}

export function wireMultiStepForm(form: HTMLFormElement | null, options: FunnelLeadOptions) {
  if (!form) return () => {};
  const steps = Array.from(form.querySelectorAll<HTMLElement>(".form-step"));
  const dots = Array.from(form.querySelectorAll<HTMLElement>("[data-step-dot]"));
  let current = 1;
  let started = false;
  const onFocus = () => {
    if (started) return;
    started = true;
    track("form_started", { form_id: options.formId, page_slug: options.pageSlug });
  };
  form.addEventListener("focusin", onFocus);
  function show(n: number) {
    steps.forEach((step) => (step.hidden = String(n) !== step.getAttribute("data-step")));
    dots.forEach((dot) => dot.classList.toggle("active", Number.parseInt(dot.getAttribute("data-step-dot") || "0", 10) <= n));
    current = n;
  }
  const nextButtons = Array.from(form.querySelectorAll<HTMLElement>("[data-next]"));
  const onNext = () => {
    const fields = steps[current - 1]?.querySelectorAll<HTMLInputElement | HTMLSelectElement>("input[required], select[required]");
    for (const field of Array.from(fields ?? [])) {
      if (!field.checkValidity()) { field.reportValidity(); return; }
    }
    show(current + 1);
  };
  nextButtons.forEach((button) => button.addEventListener("click", onNext));
  const backButtons = Array.from(form.querySelectorAll<HTMLElement>("[data-back]"));
  const onBack = () => show(current - 1);
  backButtons.forEach((button) => button.addEventListener("click", onBack));
  const onSubmit = (event: SubmitEvent) => { event.preventDefault(); void submitFunnelLead(form, options); };
  form.addEventListener("submit", onSubmit as EventListener);
  return () => {
    nextButtons.forEach((button) => button.removeEventListener("click", onNext));
    backButtons.forEach((button) => button.removeEventListener("click", onBack));
    form.removeEventListener("submit", onSubmit as EventListener);
    form.removeEventListener("focusin", onFocus);
  };
}
