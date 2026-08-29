import Link from "next/link";
import Logo from "./Logo";
import { CONTACT, NAV_LINKS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t-2 border-blue bg-gradient-to-b from-ink to-ink2 text-white">
      <div className="max-w-content mx-auto px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-12">
        <div>
          <div
            className="w-fit [filter:drop-shadow(0_0_1px_rgba(255,255,255,0.55))_drop-shadow(0_0_10px_rgba(255,255,255,0.12))]"
          >
            <Logo />
          </div>
          <p className="mt-5 text-white/60 max-w-xs text-[15px] leading-relaxed">
            Webzyra designs and builds professional websites for businesses,
            brands, individuals, and online stores.
          </p>
        </div>

        <div>
          <p className="eyebrow-muted mb-4">Navigate</p>
          <ul className="space-y-3">
            {[...NAV_LINKS, { label: "Terms", href: "/terms" }, { label: "Privacy", href: "/privacy" }].map(
              (l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/75 hover:text-blue-light transition-colors text-[15px]">
                    {l.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        <div>
          <p className="eyebrow-muted mb-4">Contact</p>
          <ul className="space-y-3 text-[15px]">
            <li>
              <a
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/75 hover:text-blue-light transition-colors"
              >
                WhatsApp — {CONTACT.whatsappDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-white/75 hover:text-blue-light transition-colors break-all"
              >
                {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-content mx-auto px-6 md:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[13px] font-mono text-white/40">
          <p>© 2026 Webzyra. All rights reserved.</p>
          <p>webzyra.xyz</p>
        </div>
      </div>
    </footer>
  );
}
