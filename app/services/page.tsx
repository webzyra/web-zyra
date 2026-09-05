import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import PricingCard from "@/components/PricingCard";
import CompareTable from "@/components/CompareTable";
import FAQ from "@/components/FAQ";
import Reveal from "@/components/Reveal";
import { SERVICES, PLANS, IMAGES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Website development services and pricing plans from Webzyra — Basic, Professional, and Ecommerce websites.",
  alternates: { canonical: "https://webzyra.xyz/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        eyebrow="Services & pricing"
        title="What Webzyra builds — and what it costs."
        subtitle="Every website is custom-built, responsive, and structured with SEO in mind. Choose a plan below, or get in touch if your project needs something more specific."
        image={IMAGES.servicesBanner}
      />

      <section className="section">
        <div className="section-inner">
          <Reveal>
            <p className="eyebrow mb-4">Capabilities</p>
            <h2 className="text-3xl md:text-4xl font-display font-semibold max-w-lg mb-12 text-balance">
              What's covered on every project.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded-md overflow-hidden">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 80} className="bg-paper p-7 hover:bg-surface-blue/40 transition-colors duration-300">
                <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-muted text-[14.5px] leading-relaxed">{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-surface" id="pricing">
        <div className="section-inner">
          <Reveal>
            <p className="eyebrow mb-4">Pricing</p>
            <h2 className="text-3xl md:text-4xl font-display font-semibold max-w-xl mb-3 text-balance">
              Three plans, clearly scoped.
            </h2>
            <p className="text-muted max-w-xl mb-12">
              Prices are Webzyra's service charge for design and development.
              Domain, hosting, and any other third-party costs are separate and
              discussed directly.
            </p>
          </Reveal>
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-4 items-stretch">
            {PLANS.map((plan, i) => (
              <Reveal key={plan.id} delay={i * 100} className="h-full">
                <PricingCard plan={plan} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <Reveal>
            <p className="eyebrow mb-4">Side by side</p>
            <h2 className="text-3xl md:text-4xl font-display font-semibold max-w-xl mb-3 text-balance">
              Compare every plan at a glance.
            </h2>
            <p className="text-muted max-w-xl mb-10">
              A quick breakdown of what changes between Basic, Professional,
              and Ecommerce — straight from the scope listed above.
            </p>
          </Reveal>
          <Reveal>
            <CompareTable />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <Reveal>
            <p className="eyebrow mb-4">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-display font-semibold max-w-xl mb-12 text-balance">
              Questions about the plans.
            </h2>
          </Reveal>
          <Reveal>
            <FAQ />
          </Reveal>
        </div>
      </section>

      <section className="section relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 mesh-dark" aria-hidden />
        <div className="grain-overlay" aria-hidden />
        <div className="section-inner relative text-center flex flex-col items-center">
          <Reveal>
            <h2 className="text-3xl md:text-[42px] font-display font-semibold max-w-xl text-balance">
              Not sure which plan fits?
            </h2>
            <p className="mt-4 text-white/60 max-w-md mx-auto">
              Reach out directly and Webzyra will help you figure out the right scope.
            </p>
            <Link href="/contact" className="btn-blue mt-8">
              Contact Webzyra
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
