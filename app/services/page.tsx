import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import PricingCard from "@/components/PricingCard";
import FAQ from "@/components/FAQ";
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
        imageAlt="A clean desk with a laptop and monitor, representing a Webzyra project setup"
      />

      <section className="section">
        <div className="section-inner">
          <p className="eyebrow mb-4">Capabilities</p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold max-w-lg mb-12 text-balance">
            What's covered on every project.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded-md overflow-hidden">
            {SERVICES.map((s) => (
              <div key={s.title} className="bg-paper p-7">
                <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-muted text-[14.5px] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-surface" id="pricing">
        <div className="section-inner">
          <p className="eyebrow mb-4">Pricing</p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold max-w-xl mb-3 text-balance">
            Three plans, clearly scoped.
          </h2>
          <p className="text-muted max-w-xl mb-12">
            Prices are Webzyra's service charge for design and development.
            Domain, hosting, and any other third-party costs are separate and
            discussed directly.
          </p>
          <div className="grid lg:grid-cols-3 gap-6 items-stretch">
            {PLANS.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <p className="eyebrow mb-4">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold max-w-xl mb-12 text-balance">
            Questions about the plans.
          </h2>
          <FAQ />
        </div>
      </section>

      <section className="section bg-gradient-to-b from-ink to-ink2 text-white">
        <div className="section-inner text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-[42px] font-display font-semibold max-w-xl text-balance">
            Not sure which plan fits?
          </h2>
          <p className="mt-4 text-white/60 max-w-md">
            Reach out directly and Webzyra will help you figure out the right scope.
          </p>
          <Link href="/contact" className="btn-blue mt-8">
            Contact Webzyra
          </Link>
        </div>
      </section>
    </>
  );
}
