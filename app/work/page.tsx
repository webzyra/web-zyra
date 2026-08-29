import type { Metadata } from "next";
import Link from "next/link";
import { CONCEPTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Website Concepts",
  description: "Sample website design concepts illustrating the kind of websites Webzyra builds.",
  alternates: { canonical: "https://webzyra.xyz/work" },
};

export default function WorkPage() {
  return (
    <>
      <section className="section-inner !pt-16 md:!pt-20 !pb-14">
        <p className="eyebrow mb-4">Website concepts</p>
        <h1 className="text-4xl md:text-5xl font-display font-semibold max-w-2xl">
          A sense of what Webzyra builds.
        </h1>
        <p className="mt-5 text-muted text-lg max-w-xl leading-relaxed">
          These are illustrative concept layouts, clearly labeled as such —
          not real client projects. They're a reference point for the kind of
          structure and quality Webzyra designs toward.
        </p>
      </section>

      <section className="section">
        <div className="section-inner grid sm:grid-cols-2 gap-6">
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
      </section>

      <section className="section bg-ink text-white">
        <div className="section-inner text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-[42px] font-display font-semibold max-w-xl">
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
