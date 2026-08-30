import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import EmailButton from "@/components/EmailButton";
import FAQ from "@/components/FAQ";
import PageBanner from "@/components/PageBanner";
import { CONTACT, IMAGES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Webzyra by WhatsApp, email, or the contact form to start your website project.",
  alternates: { canonical: "https://webzyra.xyz/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageBanner
        eyebrow="Get in touch"
        title="Let's talk about your website."
        subtitle="Send a message below, or reach out directly over WhatsApp or email — whichever is easier for you."
        image={IMAGES.contactBanner}
        compact
      />

      <section className="section">
        <div className="section-inner grid lg:grid-cols-[1fr_0.75fr] gap-14">
          <ContactForm />

          <div className="space-y-8">
            <div className="card p-7">
              <p className="eyebrow mb-3">Direct contact</p>
              <div className="space-y-3">
                <WhatsAppButton label={`WhatsApp — ${CONTACT.whatsappDisplay}`} className="btn-blue w-full" />
                <EmailButton label={CONTACT.email} className="btn-outline w-full" />
              </div>
            </div>

            <div className="card p-7">
              <p className="eyebrow mb-3">Before you write in</p>
              <ul className="space-y-3 text-[14.5px] text-ink/75 leading-relaxed">
                <li>· Let us know which plan or type of website you're considering.</li>
                <li>· A rough idea of pages/sections helps scope things faster.</li>
                <li>· Mention your timeline if you have one in mind.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <p className="eyebrow mb-4">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold max-w-xl mb-12">
            Before you reach out.
          </h2>
          <FAQ />
        </div>
      </section>
    </>
  );
}
