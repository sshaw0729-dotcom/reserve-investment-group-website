"use client";
import { useRef, useState } from "react";
import { track } from "../../lib/analytics/track";

type LeadFormProps = {
  formId: string;
  pageSlug: string;
  areaOfInterestDefault?: string;
  downloadHref?: string;
  downloadLabel?: string;
  variant?: "full" | "compact";
  submitLabel?: string;
};

type FieldErrors = Partial<Record<"firstName" | "lastName" | "email" | "consent", string>>;

export function LeadForm({ formId, pageSlug, areaOfInterestDefault, downloadHref, downloadLabel, variant = "full", submitLabel }: LeadFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const startedRef = useRef(false);
  const compact = variant === "compact";

  function handleFocus() {
    if (!startedRef.current) {
      startedRef.current = true;
      track("form_started", { form_id: formId, page_slug: pageSlug });
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const firstName = String(formData.get("firstName") ?? "").trim();
    const lastName = String(formData.get("lastName") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const consent = formData.get("consent") === "on";

    const nextErrors: FieldErrors = {};
    if (!firstName) nextErrors.firstName = "First name is required.";
    if (!lastName) nextErrors.lastName = "Last name is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Enter a valid email address.";
    if (!consent) nextErrors.consent = "Please confirm you'd like us to contact you.";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      track("form_validation_error", { form_id: formId, page_slug: pageSlug });
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      const res = await fetch("/.netlify/functions/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone: formData.get("phone") ?? "",
          areaOfInterest: formData.get("areaOfInterest") ?? "",
          preferredContactMethod: formData.get("preferredContactMethod") ?? "email",
          consent,
          formId,
          pageSlug,
          website: formData.get("website") ?? "",
        }),
      });
      if (!res.ok) throw new Error("submission failed");
      setStatus("success");
      track("form_submitted", { form_id: formId, page_slug: pageSlug });
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="form-success">
        <p>Thank you — we&apos;ve received your request and will be in touch.</p>
        {downloadHref && (
          <p>
            <a
              href={downloadHref}
              className="btn btn-primary"
              onClick={() => track("resource_downloaded", { resource_id: formId, page_slug: pageSlug })}
            >
              {downloadLabel ?? "Download now"}
            </a>
          </p>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} onFocus={handleFocus} noValidate className={compact ? "lead-form lead-form-compact" : "lead-form"}>
      <p className="lead-form-privacy-notice">
        Do not submit confidential account information, Social Security
        numbers, passwords, tax documents, investment statements, or other
        sensitive information through this form.
      </p>

      <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
        <label htmlFor={`${formId}-website`}>Website</label>
        <input id={`${formId}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="form-field">
        <label htmlFor={`${formId}-firstName`}>First name</label>
        <input id={`${formId}-firstName`} name="firstName" type="text" autoComplete="given-name" aria-invalid={Boolean(errors.firstName)} aria-describedby={errors.firstName ? `${formId}-firstName-error` : undefined} />
        {errors.firstName && <span id={`${formId}-firstName-error`} className="form-error">{errors.firstName}</span>}
      </div>

      <div className="form-field">
        <label htmlFor={`${formId}-lastName`}>Last name</label>
        <input id={`${formId}-lastName`} name="lastName" type="text" autoComplete="family-name" aria-invalid={Boolean(errors.lastName)} aria-describedby={errors.lastName ? `${formId}-lastName-error` : undefined} />
        {errors.lastName && <span id={`${formId}-lastName-error`} className="form-error">{errors.lastName}</span>}
      </div>

      <div className="form-field">
        <label htmlFor={`${formId}-email`}>Email</label>
        <input id={`${formId}-email`} name="email" type="email" autoComplete="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? `${formId}-email-error` : undefined} />
        {errors.email && <span id={`${formId}-email-error`} className="form-error">{errors.email}</span>}
      </div>

      {compact ? (
        <>
          <input type="hidden" name="areaOfInterest" value={areaOfInterestDefault ?? ""} />
          <input type="hidden" name="preferredContactMethod" value="email" />
        </>
      ) : (
        <>
          <div className="form-field">
            <label htmlFor={`${formId}-phone`}>Phone (optional)</label>
            <input id={`${formId}-phone`} name="phone" type="tel" autoComplete="tel" />
          </div>

          <div className="form-field">
            <label htmlFor={`${formId}-areaOfInterest`}>General area of interest</label>
            <select id={`${formId}-areaOfInterest`} name="areaOfInterest" defaultValue={areaOfInterestDefault ?? ""}>
              <option value="">Select one</option>
              <option value="financial-planning">Financial Planning</option>
              <option value="retirement-planning">Retirement Planning</option>
              <option value="business-owner-planning">Business Owner Planning</option>
              <option value="wealth-management">Wealth Management</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-field">
            <label htmlFor={`${formId}-preferredContactMethod`}>Preferred contact method</label>
            <select id={`${formId}-preferredContactMethod`} name="preferredContactMethod" defaultValue="email">
              <option value="email">Email</option>
              <option value="phone">Phone</option>
            </select>
          </div>
        </>
      )}

      <div className="form-field form-field-checkbox">
        <input id={`${formId}-consent`} name="consent" type="checkbox" aria-invalid={Boolean(errors.consent)} aria-describedby={errors.consent ? `${formId}-consent-error` : undefined} />
        <label htmlFor={`${formId}-consent`}>
          I&apos;d like to be contacted about the services described on this page. See our <a href="/privacy/">Privacy Policy</a>.
        </label>
        {errors.consent && <span id={`${formId}-consent-error`} className="form-error">{errors.consent}</span>}
      </div>

      <button type="submit" className="btn btn-primary" disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting…" : (submitLabel ?? "Submit")}
      </button>

      {status === "error" && <p role="alert" className="form-error">Something went wrong. Please try again, or contact us directly.</p>}
    </form>
  );
}
