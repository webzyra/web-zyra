import Link from "next/link";
import type { PLANS } from "@/lib/data";

type Plan = (typeof PLANS)[number];

export default function PricingCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={`relative h-full transition-all duration-500 ${
        plan.popular ? "md:-translate-y-3" : ""
      }`}
    >
      {plan.popular && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10 bg-gradient-to-r from-blue to-violet text-white text-[11.5px] font-mono uppercase tracking-wide px-4 py-1.5 rounded-full shadow-glow-blue">
          Most Popular
        </span>
      )}

      <div
        className={`card-premium h-full ${
          plan.popular ? "from-blue via-blue-light to-violet shadow-glow-blue-lg" : ""
        }`}
      >
        <div className="card-premium-inner flex flex-col h-full p-8">
          <p className="font-mono text-[13px] uppercase tracking-wide text-muted">
            {plan.delivery}
          </p>
          <h3 className="text-2xl md:text-[26px] mt-2 font-display font-semibold">
            {plan.name}
          </h3>
          <p className="mt-2 text-muted text-[15px] leading-relaxed">{plan.tagline}</p>

          <div className="mt-6 flex items-baseline gap-2">
            <span className="text-3xl font-display font-semibold text-gradient">
              {plan.price}
            </span>
            <span className="text-muted text-[13px]">website charges</span>
          </div>
          <p className="text-[12px] text-muted mt-1">
            Domain, hosting, and other third-party costs are separate.
          </p>

          <ul className="mt-7 space-y-3 flex-1">
            {plan.features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-[14.5px] text-ink/85">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue shrink-0 mt-[3px]"
                  aria-hidden
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-7 pt-6 border-t border-line">
            <p className="font-mono text-[12px] uppercase tracking-wide text-muted mb-2">
              Recommended for
            </p>
            <p className="text-[14px] text-ink/70">{plan.suitedFor.join(" · ")}</p>
          </div>

          <Link
            href={`/checkout?plan=${plan.id}`}
            className={`mt-7 w-full ${plan.popular ? "btn-blue" : "btn-outline"}`}
          >
            Choose {plan.name.split(" ")[0]}
          </Link>
        </div>
      </div>
    </div>
  );
}
