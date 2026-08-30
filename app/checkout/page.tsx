import type { Metadata } from "next";
import Checkout from "@/components/Checkout";
import { PLANS, type PlanId } from "@/lib/data";

export const metadata: Metadata = {
  title: "Order Request",
  description: "Submit a website service request to Webzyra and choose how to get in touch.",
  robots: { index: false, follow: true },
};

export default function CheckoutPage({
  searchParams,
}: {
  searchParams: { plan?: string };
}) {
  const validIds = PLANS.map((p) => p.id);
  const initialPlan = validIds.includes(searchParams.plan as PlanId)
    ? (searchParams.plan as PlanId)
    : undefined;

  return (
    <section className="section-inner !pt-16 md:!pt-20">
      <p className="eyebrow mb-4">Order request</p>
      <h1 className="text-4xl md:text-5xl font-display font-bold max-w-xl mb-4">
        Start your website request.
      </h1>
      <p className="text-muted text-lg max-w-xl mb-14 leading-relaxed">
        This is a service request, not an online payment — you'll confirm
        everything directly with Webzyra over WhatsApp or email.
      </p>
      <Checkout initialPlan={initialPlan} />
    </section>
  );
}
