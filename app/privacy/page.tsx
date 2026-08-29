import type { Metadata } from "next";
import { CONTACT } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Webzyra collects, uses, and protects information submitted through this website.",
  alternates: { canonical: "https://webzyra.xyz/privacy" },
};

const SECTIONS = [
  {
    title: "1. Information we collect",
    body: "Webzyra collects information you voluntarily submit through the contact form or checkout/request flow on this website — including your name, email address, selected plan or service, and any message or project notes you provide.",
  },
  {
    title: "2. How information is used",
    body: "Information submitted is used solely to respond to your enquiry, discuss your project, and provide the requested service. It is not sold or shared with third parties for marketing purposes.",
  },
  {
    title: "3. How you're contacted",
    body: "Webzyra may contact you back using the email address or WhatsApp number you provide, to follow up on a service request or contact form submission.",
  },
  {
    title: "4. Form submissions",
    body: "The contact and checkout forms on this website prepare a message that is sent through your own WhatsApp or email application when you choose to send it — this website does not store form submissions on a server or database.",
  },
  {
    title: "5. Third-party services",
    body: "This website does not currently integrate third-party analytics, advertising, or payment processing services. If that changes in the future, this policy will be updated to reflect it.",
  },
  {
    title: "6. Cookies",
    body: "This website does not currently use tracking or advertising cookies. Only cookies strictly necessary for basic site functionality, if any, may be used.",
  },
  {
    title: "7. Data retention",
    body: "Since form submissions are sent directly through your own email or WhatsApp app rather than stored on a Webzyra server, retention of that information is governed by your own email or WhatsApp account.",
  },
  {
    title: "8. Security",
    body: "Reasonable care is taken in how this website is built and deployed to avoid exposing sensitive information. No online system can be guaranteed 100% secure.",
  },
  {
    title: "9. Your rights",
    body: "You can ask Webzyra to delete any information previously shared with it by contacting the email address below.",
  },
];

export default function PrivacyPage() {
  return (
    <section className="section-inner !pt-16 md:!pt-20 max-w-3xl">
      <p className="eyebrow mb-4">Privacy Policy</p>
      <h1 className="text-4xl md:text-5xl font-display font-bold">Privacy Policy</h1>
      <p className="mt-5 text-muted leading-relaxed">
        This policy explains what information is collected through
        webzyra.xyz and how it's used. It covers this website only.
      </p>

      <div className="mt-14 space-y-10">
        {SECTIONS.map((s) => (
          <div key={s.title} className="border-t border-line pt-8">
            <h2 className="font-display text-xl font-semibold">{s.title}</h2>
            <p className="mt-3 text-muted leading-relaxed">{s.body}</p>
          </div>
        ))}
        <div className="border-t border-line pt-8">
          <h2 className="font-display text-xl font-semibold">10. Contact</h2>
          <p className="mt-3 text-muted leading-relaxed">
            For privacy-related questions or requests, contact{" "}
            <a href={`mailto:${CONTACT.email}`} className="text-blue underline underline-offset-2">
              {CONTACT.email}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
