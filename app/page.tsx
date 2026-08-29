import Link from "next/link";
import BannerArt from "@/components/BannerArt";
import { SERVICES, WHY_WEBZYRA, PROCESS_STEPS } from "@/lib/data";

const FEATURED_SERVICES = SERVICES.slice(0, 3);

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-paper">
        <div className="max-w-content mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-20 md:pb-28 grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
          <div className="animate-fadeUp">
            <p className="eyebrow mb-6">Website design &amp; development</p>
            <h1 className="text-[42px] leading-[1.05] sm:text-5xl md:text-[58px] font-display font-bold tracking-tight text-balance">
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

            <div className="mt-12 flex items-center gap-6 text-[13px] font-mono text-muted uppercase tracking-wide">
              <span>Responsive</span>
              <span className="w-1 h-1 rounded-full bg-line" />
              <span>SEO-friendly</span>
              <span className="w-1 h-1 rounded-full bg-line" />
              <span>Fast</span>
            </div>
          </div>

          <div className="relative animate-fadeIn">
            <div className="relative rounded-lg overflow-hidden border border-line shadow-[0_20px_60px_-20px_rgba(10,12,16,0.35)] h-[420px] md:h-[480px]">
              <BannerArt variant="home" />
            </div>

            <div className="absolute -bottom-6 -left-6 hidden sm:block bg-white border border-line rounded-md shadow-[0_12px_30px_-8px_rgba(10,12,16,0.2)] px-6 py-4">
              <p className="font-display text-2xl font-semibold text-ink">7–10<span className="text-blue">days</span></p>
              <p className="text-[12.5px] text-muted mt-0.5">typical delivery, Professional plan</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES TEASER */}
      <section className="section">
        <div className="section-inner">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="eyebrow mb-4">What we build</p>
              <h2 className="text-3xl md:text-4xl font-display font-semibold max-w-lg text-balance">
                Every kind of website your business needs.
              </h2>
            </div>
            <Link href="/services" className="btn-ghost font-mono text-[14px] shrink-0">
              See all services &amp; pricing →
            </Link>
          </div>
          <div className="grid sm:grid-cols-3 gap-px bg-line border border-line rounded-md overflow-hidden">
            {FEATURED_SERVICES.map((s) => (
              <div key={s.title} className="bg-paper p-8">
                <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-muted text-[14.5px] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <BannerArt variant="work" />
        </div>
        <div className="relative max-w-content mx-auto px-6 md:px-10 py-24 md:py-32 text-white text-center flex flex-col items-center">
          <p className="eyebrow-light mb-5">webzyra.xyz</p>
          <h2 className="text-3xl md:text-[44px] font-display font-semibold max-w-2xl text-balance">
            A website that looks like you mean business.
          </h2>
          <p className="mt-4 text-white/70 max-w-md">
            Custom-built, responsive, and ready to represent your brand properly.
          </p>
          <Link href="/services" className="btn-blue mt-8">
            View Services
          </Link>
        </div>
      </section>

      {/* WHY WEBZYRA */}
      <section className="section">
        <div className="section-inner">
          <p className="eyebrow mb-4">Why Webzyra</p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold max-w-lg mb-12 text-balance">
            Built with intent, not templates.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {WHY_WEBZYRA.map((item) => (
              <div key={item.title} className="border-t border-ink pt-4">
                <h3 className="font-display text-[17px] font-semibold">{item.title}</h3>
                <p className="mt-2 text-muted text-[14px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section bg-surface">
        <div className="section-inner">
          <p className="eyebrow mb-4">How it works</p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold max-w-lg mb-12 text-balance">
            From plan to delivered website.
          </h2>
          <div className="grid md:grid-cols-5 gap-8">
            {PROCESS_STEPS.map((step, i) => (
              <div key={step.title}>
                <span className="font-display text-2xl text-blue">0{i + 1}</span>
                <h3 className="mt-2 font-display text-[17px] font-semibold">{step.title}</h3>
                <p className="mt-2 text-muted text-[13.5px] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section bg-gradient-to-b from-ink to-ink2 text-white">
        <div className="section-inner text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-[44px] font-display font-semibold max-w-2xl text-balance">
            Let's build your website.
          </h2>
          <p className="mt-4 text-white/60 max-w-md">
            Pick a plan or get in touch directly to talk through what you need.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link href="/services" className="btn-blue">
              View Services
            </Link>
            <Link href="/contact" className="btn-outline-light">
              Contact Webzyra
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
