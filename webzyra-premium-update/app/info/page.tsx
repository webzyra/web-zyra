import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import { WHY_WEBZYRA, PROCESS_STEPS, IMAGES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Info",
  description:
    "How Webzyra approaches website design and development, the types of websites offered, and how the process works.",
  alternates: { canonical: "https://webzyra.xyz/info" },
};

export default function InfoPage() {
  return (
    <>
      <PageBanner
        eyebrow="How Webzyra works"
        title="How Webzyra approaches a website."
        subtitle="Webzyra designs and develops websites for businesses, brands, individuals, and online stores — built around what each project actually needs, not a fixed template."
        image={IMAGES.infoBanner}
      />

      <section className="section">
        <div className="section-inner grid md:grid-cols-2 gap-12">
          <Reveal>
            <h2 className="text-2xl font-display font-semibold">What Webzyra does</h2>
            <p className="mt-4 text-muted leading-relaxed">
              Webzyra plans, designs, and builds websites — from simple
              one-page sites to multi-page business websites and full
              ecommerce stores. Every project is custom-built rather than
              assembled from a fixed template, and structured to be
              responsive, fast, and easy to navigate.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="text-2xl font-display font-semibold">Design philosophy</h2>
            <p className="mt-4 text-muted leading-relaxed">
              A website should be easy to use before it's decorative. Layout,
              typography, and structure are chosen to support what a visitor
              is trying to do — whether that's understanding a service,
              browsing products, or getting in touch.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <h2 className="text-2xl font-display font-semibold">Types of websites</h2>
            <p className="mt-4 text-muted leading-relaxed">
              Business websites, portfolios, landing pages, and ecommerce
              stores — see the{" "}
              <Link href="/services" className="text-blue underline underline-offset-2">
                services and pricing page
              </Link>{" "}
              for the full breakdown of what's included at each level.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <h2 className="text-2xl font-display font-semibold">Why it matters</h2>
            <p className="mt-4 text-muted leading-relaxed">
              For most businesses, the website is the first real interaction
              a visitor has with the brand. A clear, professional site builds
              trust before a single word is exchanged.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <Reveal>
            <p className="eyebrow mb-4">How it works</p>
            <h2 className="text-3xl md:text-4xl font-display font-semibold max-w-xl mb-12">
              From your first message to a delivered website.
            </h2>
          </Reveal>
          <div className="relative grid md:grid-cols-5 gap-8">
            <div className="hidden md:block absolute top-[13px] left-0 right-0 h-px bg-gradient-to-r from-blue via-violet to-blue/20" />
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.title} delay={i * 90} className="relative border-t-2 border-ink pt-4">
                <span className="font-mono text-[13px] text-blue">0{i + 1}</span>
                <h3 className="mt-2 font-display text-[17px] font-semibold">{step.title}</h3>
                <p className="mt-2 text-muted text-[13.5px] leading-relaxed">{step.desc}</p>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-[13.5px] text-muted max-w-2xl">
            Timelines follow the delivery windows listed on each plan. Larger
            or more custom projects — particularly ecommerce builds — are
            scoped and timed individually once requirements are discussed.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <Reveal>
            <p className="eyebrow mb-4">Why Webzyra</p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_WEBZYRA.map((item, i) => (
              <Reveal key={item.title} delay={(i % 4) * 80}>
                <h3 className="font-display text-[17px] font-semibold">{item.title}</h3>
                <p className="mt-2 text-muted text-[14px] leading-relaxed">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
