import Link from "next/link";
import PricingCard from "@/components/PricingCard";
import FAQ from "@/components/FAQ";
import { PLANS, SERVICES, WHY_WEBZYRA, PROCESS_STEPS, CONCEPTS } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-content mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-20 md:pb-28 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
          <div className="animate-fadeUp">
            <p className="eyebrow mb-6">webzyra.xyz</p>
            <h1 className="text-[40px] leading-[1.06] sm:text-5xl md:text-6xl font-display font-semibold tracking-tight">
              Professional websites,
              <br />
              built for your business.
            </h1>
            <p className="mt-6 text-muted text-[17px] md:text-lg leading-relaxed max-w-lg">
              Webzyra designs and develops responsive, custom-built websites for
              businesses, brands, individuals, and online stores — planned around
              how your site actually needs to work.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Link href="/services" className="btn-blue">
                View Services
              </Link>
              <Link href="/contact" className="btn-outline">
                Contact Webzyra
              </Link>
            </div>
          </div>

          {/* Signature element: browser-chrome blueprint */}
          <div className="relative animate-fadeIn">
            <div className="border border-line rounded-md bg-white overflow-hidden shadow-[0_1px_0_#E4E4E1]">
              <div className="flex items-center gap-2 border-b border-line px-4 py-3">
                <span className="w-2.5 h-2.5 rounded-full border border-ink/20" />
                <span className="w-2.5 h-2.5 rounded-full border border-ink/20" />
                <span className="w-2.5 h-2.5 rounded-full border border-ink/20" />
                <span className="ml-3 font-mono text-[11px] text-muted flex-1 truncate">
                  webzyra.xyz
                </span>
              </div>
              <div className="p-6 space-y-4">
                <div className="h-3 w-2/3 bg-ink/90 rounded-sm" />
                <div className="h-3 w-1/2 bg-line rounded-sm" />
                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="h-16 rounded-sm bg-surface border border-line" />
                  <div className="h-16 rounded-sm bg-blue/10 border border-blue/30" />
                  <div className="h-16 rounded-sm bg-surface border border-line" />
                </div>
                <div className="flex gap-3 pt-1">
                  <div className="h-8 w-24 rounded-sm bg-blue" />
                  <div className="h-8 w-20 rounded-sm border border-line" />
                </div>
              </div>
            </div>
            <p className="mt-4 font-mono text-[12px] text-muted text-center">
              // responsive by default — desktop, tablet, mobile
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="section">
        <div className="section-inner">
          <p className="eyebrow mb-4">What we build</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-semibold max-w-xl">
              Every kind of website your business needs.
            </h2>
            <Link href="/services" className="btn-ghost font-mono text-[14px] shrink-0">
              See all services →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
            {SERVICES.slice(0, 6).map((s) => (
              <div key={s.title} className="bg-paper p-7">
                <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-muted text-[14.5px] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section">
        <div className="section-inner">
          <p className="eyebrow mb-4">Pricing</p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold max-w-xl mb-12">
            Straightforward plans. No surprises.
          </h2>
          <div className="grid lg:grid-cols-3 gap-6 items-stretch">
            {PLANS.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY WEBZYRA */}
      <section className="section">
        <div className="section-inner">
          <p className="eyebrow mb-4">Why Webzyra</p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold max-w-xl mb-12">
            Built with intent, not templates.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_WEBZYRA.map((item) => (
              <div key={item.title}>
                <h3 className="font-display text-[17px] font-semibold">{item.title}</h3>
                <p className="mt-2 text-muted text-[14px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="section-inner">
          <p className="eyebrow mb-4">How it works</p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold max-w-xl mb-12">
            From plan to delivered website.
          </h2>
          <div className="grid md:grid-cols-5 gap-8">
            {PROCESS_STEPS.map((step, i) => (
              <div key={step.title} className="border-t border-ink pt-4">
                <span className="font-mono text-[13px] text-blue">0{i + 1}</span>
                <h3 className="mt-2 font-display text-[17px] font-semibold">{step.title}</h3>
                <p className="mt-2 text-muted text-[13.5px] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONCEPTS */}
      <section className="section">
        <div className="section-inner">
          <p className="eyebrow mb-4">Website concepts</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-semibold max-w-xl mb-3">
                A sense of what Webzyra builds.
              </h2>
              <p className="text-muted max-w-xl">
                These are illustrative concept layouts, not real client projects —
                useful as a reference point for the kind of structure Webzyra designs.
              </p>
            </div>
            <Link href="/work" className="btn-ghost font-mono text-[14px] shrink-0">
              See all concepts →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {CONCEPTS.map((c) => (
              <div key={c.title} className="card p-7">
                <div className="aspect-[16/10] rounded-sm bg-surface border border-line mb-5 flex items-center justify-center">
                  <span className="font-mono text-[12px] text-muted">{c.title} layout</span>
                </div>
                <span className="font-mono text-[11px] uppercase tracking-wide text-blue">
                  {c.tag}
                </span>
                <h3 className="mt-1 font-display text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-muted text-[14px] leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="section-inner">
          <p className="eyebrow mb-4">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold max-w-xl mb-12">
            Common questions.
          </h2>
          <FAQ />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section bg-ink text-white">
        <div className="section-inner text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-[44px] font-display font-semibold max-w-2xl">
            Let's build your website.
          </h2>
          <p className="mt-4 text-white/60 max-w-md">
            Pick a plan or get in touch directly to talk through what you need.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link href="/services" className="btn-blue">
              View Services
            </Link>
            <Link href="/contact" className="btn border border-white/25 text-white hover:border-white">
              Contact Webzyra
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
