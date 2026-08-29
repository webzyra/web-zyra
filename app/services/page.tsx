import type { Metadata } from "next";
import Link from "next/link";
import PricingCard from "@/components/PricingCard";
import FAQ from "@/components/FAQ";
import { SERVICES, PLANS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Website development services and pricing plans from Webzyra — Basic, Professional, and Ecommerce websites.",
  alternates: { canonical: "https://webzyra.xyz/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="section-inner !pt-16 md:!pt-20 !pb-14">
        <p className="eyebrow mb-4">Services</p>
        <h1 className="text-4xl md:text-5xl font-display font-semibold max-w-2xl">
          What Webzyra builds — and what it costs.
        </h1>
        <p className="mt-5 text-muted text-lg max-w-xl leading-relaxed">
          Every website is custom-built, responsive, and structured with SEO in
          mind. Choose a plan below, or get in touch if your project needs
          something more specific.
        </p>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
            {SERVICES.map((s) => (
              <div key={s.title} className="bg-paper p-7">
                <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-muted text-[14.5px] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="pricing">
        <div className="section-inner">
          <p className="eyebrow mb-4">Pricing</p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold max-w-xl mb-3">
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
          <h2 className="text-3xl md:text-4xl font-display font-semibold max-w-xl mb-12">
            Questions about the plans.
          </h2>
          <FAQ />
        </div>
      </section>

      <section className="section bg-ink text-white">
        <div className="section-inner text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-[42px] font-display font-semibold max-w-xl">
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
