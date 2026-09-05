import Link from "next/link";
import Image from "next/image";
import PricingCard from "@/components/PricingCard";
import Reveal from "@/components/Reveal";
import Spotlight from "@/components/Spotlight";
import StatsStrip from "@/components/StatsStrip";
import TechMarquee from "@/components/TechMarquee";
import {
  SERVICES,
  WHY_WEBZYRA,
  PROCESS_STEPS,
  PLANS,
  TRUST_STRIP,
  WHAT_YOU_GET,
  IMAGES,
} from "@/lib/data";

const FEATURED_SERVICES = SERVICES.slice(0, 3);

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <Spotlight className="relative overflow-hidden bg-paper mesh-light">
        <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-blue/10 blur-3xl animate-floatSlow" />
        <div aria-hidden className="pointer-events-none absolute top-40 -left-32 w-[360px] h-[360px] rounded-full bg-violet/10 blur-3xl animate-floatSlow" style={{ animationDelay: "1.5s" }} />

        <div className="relative max-w-content mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-16 md:pb-20 grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
          <div className="animate-fadeUp">
            <p className="eyebrow mb-6">Website design &amp; development</p>
            <h1 className="text-[42px] leading-[1.05] sm:text-5xl md:text-[58px] font-display font-bold tracking-tight text-balance">
              Professional websites,
              <br />
              <span className="text-gradient">built for your business.</span>
            </h1>
            <p className="mt-6 text-muted text-[17px] md:text-lg leading-relaxed max-w-lg">
              Webzyra builds professional websites for businesses and
              individuals — custom-built, responsive, and ready to represent
              your brand properly.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Link href="/services" className="btn-blue">
                View Services
              </Link>
              <Link href="/checkout" className="btn-outline">
                Start a Project
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-2">
              {TRUST_STRIP.slice(0, 3).map((item) => (
                <span key={item} className="pill-blue">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative animate-fadeIn">
            <div className="relative rounded-xl overflow-hidden border border-line shadow-premium-lg h-[420px] md:h-[480px]">
              <Image
                src={IMAGES.hero.src}
                alt={IMAGES.hero.alt}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl" />
            </div>

            <div className="absolute -bottom-6 -left-6 hidden sm:block glass-light rounded-md shadow-premium px-6 py-4 animate-float">
              <p className="font-display text-2xl font-semibold text-ink">
                7–10<span className="text-blue">days</span>
              </p>
              <p className="text-[12.5px] text-muted mt-0.5">typical delivery, Professional plan</p>
            </div>

            <div className="absolute -top-5 -right-4 hidden sm:flex items-center gap-2 glass-light rounded-full shadow-premium px-4 py-2.5 animate-float" style={{ animationDelay: "1.2s" }}>
              <span className="w-2 h-2 rounded-full bg-ok animate-pulse" />
              <span className="text-[12.5px] font-medium text-ink/80">100% Responsive</span>
            </div>
          </div>
        </div>

        {/* TRUST STRIP */}
        <div className="relative border-t border-line">
          <div className="max-w-content mx-auto px-6 md:px-10 py-5 flex flex-wrap items-center justify-center sm:justify-between gap-x-8 gap-y-2 text-[12px] font-mono uppercase tracking-[0.14em] text-muted">
            {TRUST_STRIP.map((item, i) => (
              <span key={item} className="flex items-center gap-8">
                <span>{item}</span>
                {i < TRUST_STRIP.length - 1 && (
                  <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-line" />
                )}
              </span>
            ))}
          </div>
        </div>
      </Spotlight>

      {/* STATS */}
      <section className="section">
        <div className="section-inner !py-14 md:!py-16">
          <Reveal>
            <StatsStrip />
          </Reveal>
        </div>
      </section>

      {/* SERVICES TEASER */}
      <section className="section">
        <div className="section-inner">
          <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="eyebrow mb-4">What we build</p>
              <h2 className="text-3xl md:text-4xl font-display font-semibold max-w-lg text-balance">
                Every kind of website your business needs.
              </h2>
            </div>
            <Link href="/services" className="btn-ghost font-mono text-[14px] shrink-0">
              See all services &amp; pricing →
            </Link>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-px bg-line border border-line rounded-md overflow-hidden">
            {FEATURED_SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 90} className="bg-paper p-8 hover:bg-surface-blue/40 transition-colors duration-300">
                <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-muted text-[14.5px] leading-relaxed">{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="section bg-surface" id="pricing-preview">
        <div className="section-inner">
          <Reveal>
            <p className="eyebrow mb-4">Pricing</p>
            <h2 className="text-3xl md:text-4xl font-display font-semibold max-w-lg mb-3 text-balance">
              Straightforward plans, clearly scoped.
            </h2>
            <p className="text-muted max-w-xl mb-12">
              Prices are Webzyra's service charge for design and development.
              Domain, hosting, and any other third-party costs are separate.
            </p>
          </Reveal>
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-4 items-stretch">
            {PLANS.map((plan, i) => (
              <Reveal key={plan.id} delay={i * 100} className="h-full">
                <PricingCard plan={plan} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link href="/services" className="btn-outline">
              View Full Services
            </Link>
          </div>
        </div>
      </section>

      {/* BANNER */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={IMAGES.workBanner.src}
            alt={IMAGES.workBanner.alt}
            fill
            loading="lazy"
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 banner-scrim-blue" />
        </div>
        <div className="relative max-w-content mx-auto px-6 md:px-10 pt-24 md:pt-32 pb-10 md:pb-14 text-white text-center flex flex-col items-center">
          <Reveal>
            <p className="eyebrow-light mb-5">webzyra.xyz</p>
            <h2 className="text-3xl md:text-[44px] font-display font-semibold max-w-2xl text-balance">
              A website that looks like you mean business.
            </h2>
            <p className="mt-4 text-white/70 max-w-md mx-auto">
              Custom-built, responsive, and ready to represent your brand properly.
            </p>
            <Link href="/services" className="btn-blue mt-8">
              View Services
            </Link>
          </Reveal>
        </div>
        <div className="relative border-t border-white/10 py-6">
          <TechMarquee />
        </div>
      </section>

      {/* WHY WEBZYRA */}
      <section className="section">
        <div className="section-inner">
          <Reveal>
            <p className="eyebrow mb-4">Why choose Webzyra</p>
            <h2 className="text-3xl md:text-4xl font-display font-semibold max-w-lg mb-12 text-balance">
              Built with intent, not templates.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {WHY_WEBZYRA.map((item, i) => (
              <Reveal key={item.title} delay={(i % 4) * 80} className="border-t-2 border-ink pt-4 hover:border-blue transition-colors duration-300">
                <h3 className="font-display text-[17px] font-semibold">{item.title}</h3>
                <p className="mt-2 text-muted text-[14px] leading-relaxed">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="section bg-surface">
        <div className="section-inner">
          <Reveal>
            <p className="eyebrow mb-4">What's included</p>
            <h2 className="text-3xl md:text-4xl font-display font-semibold max-w-lg mb-12 text-balance">
              What you get with your Webzyra website.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-4">
            {WHAT_YOU_GET.map((item, i) => (
              <Reveal key={item} delay={(i % 6) * 60} className="flex items-center gap-3">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue shrink-0"
                  aria-hidden
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span className="text-[15px] text-ink/85">{item}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="section-inner">
          <Reveal>
            <p className="eyebrow mb-4">How it works</p>
            <h2 className="text-3xl md:text-4xl font-display font-semibold max-w-lg mb-12 text-balance">
              From plan to delivered website.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-5 gap-8">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.title} delay={i * 90}>
                <span className="font-display text-2xl text-gradient">0{i + 1}</span>
                <h3 className="mt-2 font-display text-[17px] font-semibold">{step.title}</h3>
                <p className="mt-2 text-muted text-[13.5px] leading-relaxed">{step.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 mesh-dark" aria-hidden />
        <div className="grain-overlay" aria-hidden />
        <div className="section-inner relative text-center flex flex-col items-center">
          <Reveal>
            <h2 className="text-3xl md:text-[44px] font-display font-semibold max-w-2xl text-balance">
              Ready to build your website?
            </h2>
            <p className="mt-4 text-white/60 max-w-md mx-auto">
              Tell us what you need and let's build a professional web presence
              around it.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/checkout" className="btn-blue">
                Start a Project
              </Link>
              <Link href="/contact" className="btn-outline-light">
                Contact Webzyra
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
