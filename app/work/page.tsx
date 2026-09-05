import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import { CONCEPTS, IMAGES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Website Concepts",
  description: "Sample website design concepts illustrating the kind of websites Webzyra builds.",
  alternates: { canonical: "https://webzyra.xyz/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageBanner
        eyebrow="Website concepts"
        title="A sense of what Webzyra builds."
        subtitle="These are illustrative concept layouts, clearly labeled as such — not real client projects. They're a reference point for the kind of structure and quality Webzyra designs toward."
        image={IMAGES.workBanner}
      />

      <section className="section">
        <div className="section-inner grid sm:grid-cols-2 gap-6">
          {CONCEPTS.map((c, i) => (
            <Reveal key={c.title} delay={(i % 4) * 90} className="card overflow-hidden group">
              <div className="aspect-[16/10] relative overflow-hidden">
                <Image
                  src={c.image.src}
                  alt={c.image.alt}
                  fill
                  loading="lazy"
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute top-4 left-4 font-mono text-[11px] uppercase tracking-wide bg-ink/80 text-white px-2.5 py-1 rounded-sm backdrop-blur-sm">
                  {c.tag}
                </span>
              </div>
              <div className="p-7">
                <h3 className="font-display text-lg font-semibold group-hover:text-blue transition-colors">{c.title}</h3>
                <p className="mt-2 text-muted text-[14px] leading-relaxed">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 mesh-dark" aria-hidden />
        <div className="grain-overlay" aria-hidden />
        <div className="section-inner relative text-center flex flex-col items-center">
          <Reveal>
            <h2 className="text-3xl md:text-[42px] font-display font-semibold max-w-xl text-balance">
              Want something built for you?
            </h2>
            <Link href="/services" className="btn-blue mt-8">
              View Services
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
