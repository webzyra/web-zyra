"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { PLANS, type PlanId } from "@/lib/data";
import WhatsAppButton from "./WhatsAppButton";
import EmailButton from "./EmailButton";

const STEPS = ["Select plan", "Order summary", "Contact Webzyra"];

export default function Checkout({ initialPlan }: { initialPlan?: PlanId }) {
  const [planId, setPlanId] = useState<PlanId | undefined>(initialPlan);
  const [step, setStep] = useState(initialPlan ? 1 : 0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const plan = PLANS.find((p) => p.id === planId);

  function selectPlan(id: PlanId) {
    setPlanId(id);
    setStep(1);
  }

  function handleContinue(e: FormEvent) {
    e.preventDefault();
    const next: { name?: string; email?: string } = {};
    if (!name.trim()) next.name = "Please enter your name.";
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "Please enter a valid email.";
    }
    setErrors(next);
    if (Object.keys(next).length === 0) setStep(2);
  }

  const orderSummary = plan
    ? `Service Request — Webzyra\n\nPlan: ${plan.name} (${plan.price} website charges)\nDelivery: ${plan.delivery}\n\nName: ${name}\nEmail: ${email}\n${
        notes ? `\nNotes: ${notes}` : ""
      }\n\nThis is a service request, not a payment confirmation.`
    : "";

  return (
    <div className="max-w-2xl">
      {/* Stepper — numbers + connecting lines always show; labels only from sm+
          so three full-length labels never force horizontal overflow on
          narrow phones (320–375px). */}
      <ol className="flex items-center gap-2 sm:gap-3 mb-10 sm:mb-12 font-mono text-[12px] uppercase tracking-wide overflow-x-auto">
        {STEPS.map((label, i) => (
          <li key={label} className="flex items-center gap-2 sm:gap-3 shrink-0">
            <span
              className={`flex items-center gap-2 ${
                i <= step ? "text-blue" : "text-muted/60"
              }`}
            >
              <span
                className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] border shrink-0 ${
                  i <= step ? "border-blue bg-blue text-white" : "border-line"
                }`}
              >
                {i + 1}
              </span>
              <span className="hidden sm:inline">{label}</span>
            </span>
            {i < STEPS.length - 1 && <span className="w-4 sm:w-6 h-px bg-line shrink-0" />}
          </li>
        ))}
      </ol>

      {step === 0 && (
        <div>
          <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6">
            Select a plan to continue
          </h2>
          <div className="grid gap-4">
            {PLANS.map((p) => (
              <button
                key={p.id}
                onClick={() => selectPlan(p.id)}
                className="text-left card p-6 hover:border-blue transition-colors flex items-center justify-between gap-4"
              >
                <div>
                  <p className="font-display text-lg font-semibold">{p.name}</p>
                  <p className="text-muted text-[14px] mt-1">{p.delivery}</p>
                </div>
                <span className="font-display text-lg text-blue whitespace-nowrap">
                  {p.price}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 1 && plan && (
        <div className="animate-fadeUp">
          <button
            onClick={() => setStep(0)}
            className="font-mono text-[13px] text-muted hover:text-blue mb-6"
          >
            ← Change plan
          </button>
          <div className="card p-6 mb-8">
            <p className="font-mono text-[12px] uppercase tracking-wide text-muted">
              Selected plan
            </p>
            <div className="flex items-baseline justify-between mt-2">
              <p className="font-display text-xl font-semibold">{plan.name}</p>
              <p className="font-display text-xl text-blue">{plan.price}</p>
            </div>
            <p className="text-muted text-[14px] mt-1">{plan.delivery} · website charges only</p>
            <ul className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-2">
              {plan.features.slice(0, 6).map((f) => (
                <li key={f} className="text-[13.5px] text-ink/75 flex items-start gap-2">
                  <span className="mt-[6px] w-1 h-1 rounded-full bg-blue shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[12.5px] text-muted border-t border-line pt-4">
              Domain, hosting, and any other third-party services are separate from
              this price and are discussed directly with Webzyra.
            </p>
          </div>

          <form onSubmit={handleContinue} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="co-name" className="field-label">
                  Your name
                </label>
                <input
                  id="co-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="field-input"
                />
                {errors.name && <p className="text-err text-[13px] mt-1.5">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="co-email" className="field-label">
                  Your email
                </label>
                <input
                  id="co-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="field-input"
                />
                {errors.email && <p className="text-err text-[13px] mt-1.5">{errors.email}</p>}
              </div>
            </div>
            <div>
              <label htmlFor="co-notes" className="field-label">
                Anything specific about your project? (optional)
              </label>
              <textarea
                id="co-notes"
                rows={4}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="field-input resize-none"
              />
            </div>
            <button type="submit" className="btn-blue w-full sm:w-auto">
              Review Request
            </button>
          </form>
        </div>
      )}

      {step === 2 && plan && (
        <div className="animate-fadeUp">
          <div className="card p-8 md:p-10 border-blue">
            <p className="eyebrow mb-3">Service request — not a payment</p>
            <h2 className="text-2xl md:text-3xl font-display font-semibold">
              Your request is ready. Choose how you'd like to contact Webzyra.
            </h2>
            <p className="mt-3 text-muted text-[15px] leading-relaxed">
              This submits a service request, not an online payment. Pricing,
              timeline, and next steps are confirmed once you connect directly.
            </p>

            <div className="mt-6 bg-surface rounded-sm p-5 font-mono text-[13px] leading-relaxed whitespace-pre-wrap text-ink/80">
              {orderSummary}
            </div>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <WhatsAppButton message={orderSummary} className="btn-blue flex-1" />
              <EmailButton
                subject={`Service Request — ${plan.name}`}
                body={orderSummary}
                className="btn-outline flex-1"
              />
            </div>
          </div>
          <Link href="/services" className="inline-block mt-6 font-mono text-[13px] text-muted hover:text-blue">
            ← Back to plans
          </Link>
        </div>
      )}
    </div>
  );
}
