import type { Metadata } from "next";
import { CONTACT } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "General terms of service for Webzyra website design and development projects.",
  alternates: { canonical: "https://webzyra.xyz/terms" },
};

const SECTIONS = [
  {
    title: "1. Service requests",
    body: "Submitting a plan selection or contact form on this website is a service request, not a binding order or a payment. A project only begins once scope, price, and timeline are confirmed directly between you and Webzyra over WhatsApp or email.",
  },
  {
    title: "2. Pricing & website charges",
    body: "Prices listed on the Services page are Webzyra's service charge for design and development, starting from the stated amount ('+') depending on project complexity. Final pricing is confirmed after requirements are discussed.",
  },
  {
    title: "3. Domain, hosting & third-party services",
    body: "Domain registration, hosting, email services, and any other third-party tools or subscriptions are not included in Webzyra's listed prices and are the customer's responsibility unless otherwise agreed in writing.",
  },
  {
    title: "4. Delivery timelines",
    body: "Delivery windows listed per plan (e.g. 3–5 days, 7–10 days) are estimates for typical projects and begin once requirements are finalized and any requested materials are received. Ecommerce and custom projects are timed individually.",
  },
  {
    title: "5. Revisions",
    body: "A reasonable number of revision rounds is included as part of each project and agreed on before work begins. Requests that significantly change the original scope may be treated as additional work.",
  },
  {
    title: "6. Customer responsibilities",
    body: "Customers are responsible for providing accurate content, images, and information needed to complete the website in a timely manner, and for reviewing delivered work within a reasonable period.",
  },
  {
    title: "7. Ecommerce functionality",
    body: "The Ecommerce plan covers a functioning store structure — listings, cart, and checkout flow. Payment gateway integration, shipping configuration, tax handling, and inventory systems are scoped and priced separately unless explicitly agreed.",
  },
  {
    title: "8. Cancellation & refunds",
    body: "Cancellation and refund terms are agreed on a per-project basis before work begins, and generally account for work already completed at the time of cancellation.",
  },
  {
    title: "9. Intellectual property",
    body: "Once a project is paid in full, the customer owns the final delivered website files, excluding any third-party assets, fonts, or licensed components that carry their own usage terms.",
  },
  {
    title: "10. Project approval",
    body: "A project is considered complete once the customer reviews and approves the final delivery, or after a reasonable review period has passed without response.",
  },
  {
    title: "11. Communication",
    body: "Project communication takes place primarily over WhatsApp and email. Response times may vary outside of business hours.",
  },
];

export default function TermsPage() {
  return (
    <section className="section-inner !pt-16 md:!pt-20 max-w-3xl">
      <p className="eyebrow mb-4">Terms of Service</p>
      <h1 className="text-4xl md:text-5xl font-display font-semibold">Terms of Service</h1>
      <p className="mt-5 text-muted leading-relaxed">
        These are general business terms for projects undertaken by Webzyra.
        They are provided for clarity and may be reviewed or updated as the
        business develops. They do not constitute formal legal advice.
      </p>

      <div className="mt-14 space-y-10">
        {SECTIONS.map((s) => (
          <div key={s.title} className="border-t border-line pt-8">
            <h2 className="font-display text-xl font-semibold">{s.title}</h2>
            <p className="mt-3 text-muted leading-relaxed">{s.body}</p>
          </div>
        ))}
        <div className="border-t border-line pt-8">
          <h2 className="font-display text-xl font-semibold">12. Contact</h2>
          <p className="mt-3 text-muted leading-relaxed">
            Questions about these terms can be sent to{" "}
            <a href={`mailto:${CONTACT.email}`} className="text-blue underline underline-offset-2">
              {CONTACT.email}
            </a>{" "}
            or via WhatsApp at {CONTACT.whatsappDisplay}.
          </p>
        </div>
      </div>
    </section>
  );
}
