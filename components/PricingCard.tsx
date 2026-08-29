import Link from "next/link";
import type { PLANS } from "@/lib/data";

type Plan = (typeof PLANS)[number];

export default function PricingCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={`relative flex flex-col h-full rounded-md border p-8 transition-shadow duration-300 ${
        plan.popular
          ? "border-blue shadow-[0_0_0_1px_#1E42FF] bg-white"
          : "border-line bg-white hover:border-ink/30"
      }`}
    >
      {plan.popular && (
        <span className="absolute -top-3 left-8 bg-blue text-white text-[12px] font-mono uppercase tracking-wide px-3 py-1 rounded-sm">
          Most Popular
        </span>
      )}

      <p className="font-mono text-[13px] uppercase tracking-wide text-muted">
        {plan.delivery}
      </p>
      <h3 className="text-2xl md:text-[26px] mt-2 font-display font-semibold">
        {plan.name}
      </h3>
      <p className="mt-2 text-muted text-[15px] leading-relaxed">{plan.tagline}</p>

      <div className="mt-6 flex items-baseline gap-2">
        <span className="text-3xl font-display font-semibold">{plan.price}</span>
        <span className="text-muted text-[13px]">website charges</span>
      </div>
      <p className="text-[12px] text-muted mt-1">
        Domain, hosting, and other third-party costs are separate.
      </p>

      <ul className="mt-7 space-y-3 flex-1">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-[14.5px] text-ink/85">
            <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-blue shrink-0" />
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
  );
}
