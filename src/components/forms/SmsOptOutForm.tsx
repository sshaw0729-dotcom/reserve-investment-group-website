"use client";

import { useState, type FormEvent } from "react";

export function SmsOptOutForm() {
  const [busy, setBusy] = useState(false);
  const [state, setState] = useState<"idle" | "recorded" | "error">("idle");
  const [reference, setReference] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    setBusy(true);
    setState("idle");
    const form = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/sms-opt-out", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.get("email"), phone: form.get("phone") }),
      });
      const output = await response.json();
      if (!response.ok || output.recorded !== true || typeof output.reference !== "string") throw new Error("Not verified");
      setReference(output.reference);
      setState("recorded");
    } catch { setState("error"); }
    finally { setBusy(false); }
  }

  if (state === "recorded") return <div role="status"><h2>Opt-out recorded</h2><p>Your website withdrawal has been stored and verified. You can also reply STOP to any text you receive.</p><p>Confirmation reference: <code>{reference}</code></p></div>;

  return (
    <form onSubmit={submit} className="lead-form">
      <p>Withdraw any SMS permission you previously provided. Enter the email and mobile number associated with your enrollment. You can also reply STOP to any SMS message.</p>
      <div className="form-field"><label htmlFor="sms-stop-email">Email</label><input id="sms-stop-email" type="email" name="email" autoComplete="email" maxLength={254} required /></div>
      <div className="form-field"><label htmlFor="sms-stop-phone">Mobile number</label><input id="sms-stop-phone" type="tel" name="phone" autoComplete="tel" required /></div>
      <button className="btn btn-primary" type="submit" disabled={busy}>{busy ? "Verifying withdrawal…" : "Withdraw my SMS consent"}</button>
      {state === "error" && <p role="alert" className="form-error">We could not verify this website withdrawal. Reply STOP to any text message you receive or call us at 216-284-3615 for assistance. No confirmation has been issued.</p>}
    </form>
  );
}
