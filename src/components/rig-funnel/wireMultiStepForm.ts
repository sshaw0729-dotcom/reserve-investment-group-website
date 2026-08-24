type FunnelLeadOptions = { formId: string; pageSlug: string; successPanel?: HTMLElement | null };

function fieldValue(form: HTMLFormElement, selectors: string) {
  return form.querySelector<HTMLInputElement>(selectors)?.value.trim() ?? "";
}

export async function submitFunnelLead(form: HTMLFormElement, options: FunnelLeadOptions) {
  const firstName = fieldValue(form, '[name="firstName"], #fname, #tfname, #ifname, #fefname, #bfname');
  const lastName = fieldValue(form, '[name="lastName"], #lname, #tlname, #ilname, #felname, #blname');
  const email = fieldValue(form, '[name="email"], #email, #temail, #iemail, #feemail, #bemail');
  const phone = fieldValue(form, '[name="phone"], #phone, #tphone, #iphone, #fephone, #bphone');
  const consent = Boolean(form.querySelector<HTMLInputElement>('input[name="consent"]:checked'));
  const submitButton = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  if (!form.reportValidity() || !firstName || !lastName || !email || !consent) return false;
  submitButton?.setAttribute("disabled", "true");
  const priorLabel = submitButton?.textContent ?? "Submit";
  if (submitButton) submitButton.textContent = "Submitting…";
  try {
    const response = await fetch("/.netlify/functions/submit-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, email, phone, areaOfInterest: "other", preferredContactMethod: phone ? "phone" : "email", consent, formId: options.formId, pageSlug: options.pageSlug, website: "" }),
    });
    if (!response.ok) throw new Error("Lead submission failed");
    form.querySelectorAll<HTMLElement>(".form-step").forEach((step) => (step.hidden = true));
    const success = options.successPanel ?? form.querySelector<HTMLElement>("[data-success]");
    if (success) success.hidden = false;
    else form.innerHTML = '<div class="success-panel"><h3>Request received.</h3><p>A member of our team will typically respond within 24 hours.</p></div>';
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
  };
}
