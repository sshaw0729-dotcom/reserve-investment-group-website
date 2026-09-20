"use client";

import { useEffect, useState, type FormEvent } from "react";
import { SMS_CONSENT_COPY, SMS_CONSENT_VERSION } from "../../lib/sms/consent-policy";

type Availability = "checking" | "enabled" | "disabled";

export function SmsConsentForm() {
  const [availability, setAvailability] = useState<Availability>("checking");
  const [checked, setChecked] = useState(false);
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<"idle" | "recorded" | "error">("idle");
  const [reference, setReference] = useState("");

  useEffect(() => {
    let active = true;
    fetch("/api/sms-consent", { cache: "no-store" })
      .then((response) => response.ok ? response.json() : null)
      .then((data) => { if (active) setAvailability(data?.acceptingEnrollment === true ? "enabled" : "disabled"); })
      .catch(() => { if (active) setAvailability("disabled"); });
    return () => { active = false; };
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (availability !== "enabled" || !checked || busy) return;
    setBusy(true);
    setResult("idle");
    const data = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/sms-consent", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.get("firstName"), lastName: data.get("lastName"),
          email: data.get("email"), phone: data.get("phone"), website: data.get("website"),
          smsConsent: checked, consentVersion: SMS_CONSENT_VERSION, source: "/sms-consent/",
        }),
      });
      const output = await response.json();
      if (!response.ok || output.recorded !== true || typeof output.reference !== "string") throw new Error("not verified");
      setReference(output.reference);
      setResult("recorded");
    } catch { setResult("error"); }
    finally { setBusy(false); }
  }

  if (availability === "checking") return <p role="status">Checking enrollment availability…</p>;
  if (availability === "disabled") return <p role="status">SMS enrollment is not currently available. You can contact us at 216-284-3615 or through our <a href="/contact/">contact page</a>. Ordinary contact forms do not enroll you in text messaging.</p>;
  if (result === "recorded") return <div role="status"><h2>Consent recorded</h2><p>Your voluntary SMS preference has been stored and verified in our consent records. This form does not send a message or guarantee immediate enrollment with a carrier.</p><p>Confirmation reference: <code>{reference}</code></p></div>;

  return (
    <form onSubmit={submit} className="lead-form" noValidate={false}>
      <p>Complete this form only if you wish to receive optional Reserve Investment Group, Inc. text messages. Submitting our ordinary contact form does not enroll you.</p>
      <div style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }} aria-hidden="true">
        <label htmlFor="sms-website">Website</label><input id="sms-website" type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="form-field"><label htmlFor="sms-first">First name</label><input id="sms-first" name="firstName" required maxLength={80} autoComplete="given-name" /></div>
      <div className="form-field"><label htmlFor="sms-last">Last name</label><input id="sms-last" name="lastName" required maxLength={80} autoComplete="family-name" /></div>
      <div className="form-field"><label htmlFor="sms-email">Email</label><input id="sms-email" name="email" type="email" required maxLength={254} autoComplete="email" /></div>
      <div className="form-field"><label htmlFor="sms-phone">Mobile number (US)</label><input id="sms-phone" name="phone" type="tel" required autoComplete="tel" placeholder="(216) 555-0123" /></div>
      <div className="form-field form-field-checkbox">
        <input id="sms-opt-in" name="smsConsent" type="checkbox" checked={checked} onChange={(event) => setChecked(event.target.checked)} required />
        <label htmlFor="sms-opt-in">{SMS_CONSENT_COPY}</label>
      </div>
      <p>Read our <a href="/terms/">Terms of Use and SMS Program Terms</a> and <a href="/privacy/">Privacy Policy</a>. You may choose not to check the box; doing so has no effect on your ability to request other services.</p>
      <button className="btn btn-primary" type="submit" disabled={!checked || busy}>{busy ? "Verifying consent…" : "Record my SMS consent"}</button>
      {result === "error" && <p role="alert" className="form-error">We could not verify your consent record. No successful enrollment is confirmed. Please contact us using the contact page; do not assume texting is enabled.</p>}
    </form>
  );
}
