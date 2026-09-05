"use client";

import { useState, type FormEvent } from "react";
import WhatsAppButton from "./WhatsAppButton";
import EmailButton from "./EmailButton";

const SERVICE_OPTIONS = [
  "Basic Website",
  "Professional Website",
  "Ecommerce Website",
  "Something else / not sure yet",
];

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(SERVICE_OPTIONS[0]);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): boolean {
    const next: Errors = {};
    if (!name.trim()) next.name = "Please enter your name.";
    if (!email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "Enter a valid email address.";
    }
    if (!message.trim() || message.trim().length < 10) {
      next.message = "Tell us a little about your project (10+ characters).";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  }

  const summary = `Hi Webzyra, I'm ${name || "[name]"}.\nInterested in: ${service}\n\n${message}\n\n— ${email}`;

  if (submitted) {
    return (
      <div className="card-premium animate-fadeUp">
        <div className="card-premium-inner p-8 md:p-10">
          <p className="eyebrow mb-3">Request ready</p>
          <h3 className="text-2xl font-display font-semibold">
            Thanks, {name.split(" ")[0]}. Choose how you'd like to reach Webzyra.
          </h3>
          <p className="mt-3 text-muted text-[15px] leading-relaxed">
            Your message is prepared below — pick WhatsApp or email to send it. Nothing
            is sent automatically; each button opens your own app so you're in control.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <WhatsAppButton message={summary} className="btn-blue flex-1" />
            <EmailButton
              subject={`Website enquiry — ${service}`}
              body={summary}
              className="btn-outline flex-1"
            />
          </div>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-6 text-[14px] font-mono text-muted hover:text-blue transition-colors"
          >
            ← Edit message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="card p-8 md:p-10 shadow-premium">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="field-label">
            Name
          </label>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="field-input"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="text-err text-[13px] mt-1.5">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="field-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="field-input"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="text-err text-[13px] mt-1.5">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="service" className="field-label">
          Interested in
        </label>
        <select
          id="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="field-input"
        >
          {SERVICE_OPTIONS.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className="mt-6">
        <label htmlFor="message" className="field-label">
          Tell us about your project
        </label>
        <textarea
          id="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="field-input resize-none"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="text-err text-[13px] mt-1.5">
            {errors.message}
          </p>
        )}
      </div>

      <button type="submit" className="btn-blue w-full sm:w-auto mt-8">
        Prepare Request
      </button>
    </form>
  );
}
