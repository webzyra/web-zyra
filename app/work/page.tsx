import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import ConceptArt from "@/components/ConceptArt";
import { CONCEPTS } from "@/lib/data";

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
        variant="work"
      />

      <section className="section">
        <div className="section-inner grid sm:grid-cols-2 gap-6">
          {CONCEPTS.map((c) => (
            <div key={c.title} className="card overflow-hidden">
              <div className="aspect-[16/10] relative">
                <ConceptArt variant={c.variant} />
                <span className="absolute top-4 left-4 font-mono text-[11px] uppercase tracking-wide bg-ink/80 text-white px-2.5 py-1 rounded-sm backdrop-blur-sm">
                  {c.tag}
                </span>
              </div>
              <div className="p-7">
                <h3 className="font-display text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-muted text-[14px] leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-gradient-to-b from-ink to-ink2 text-white">
        <div className="section-inner text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-[42px] font-display font-semibold max-w-xl text-balance">
            Want something built for you?
          </h2>
          <Link href="/services" className="btn-blue mt-8">
            View Services
          </Link>
        </div>
      </section>
    </>
  );
}
