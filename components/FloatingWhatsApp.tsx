"use client";

import { useEffect, useState } from "react";
import { CONTACT } from "@/lib/data";

export default function FloatingWhatsApp() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={`https://wa.me/${CONTACT.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Webzyra on WhatsApp"
      className={`group fixed bottom-6 right-5 md:bottom-8 md:right-8 z-40 flex items-center gap-0 rounded-full bg-[#25D366] text-white shadow-[0_14px_36px_-10px_rgba(37,211,102,0.55)] transition-all duration-500 ease-out hover:pr-5 hover:gap-2.5 ${
        show ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0 pointer-events-none"
      }`}
    >
      <span className="relative flex h-14 w-14 shrink-0 items-center justify-center">
        <span className="absolute inset-0 rounded-full animate-ringPulse" />
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M17.6 6.32A8.86 8.86 0 0 0 12 4.2 8.83 8.83 0 0 0 3.17 13a8.7 8.7 0 0 0 1.19 4.4L3 21l3.7-1.32A8.85 8.85 0 0 0 12 21.05 8.83 8.83 0 0 0 20.83 13a8.77 8.77 0 0 0-3.23-6.68Zm-5.6 13.5a7.3 7.3 0 0 1-3.73-1.03l-.27-.16-2.2.78.72-2.15-.18-.28A7.32 7.32 0 1 1 12 19.82Zm4.01-5.47c-.22-.11-1.3-.64-1.5-.72s-.35-.11-.5.11-.57.72-.7.87-.26.17-.48.06a6 6 0 0 1-1.77-1.09 6.6 6.6 0 0 1-1.23-1.53c-.13-.22 0-.34.1-.45s.22-.26.32-.39a1.5 1.5 0 0 0 .22-.37.4.4 0 0 0 0-.39c-.06-.11-.5-1.2-.68-1.65s-.36-.37-.5-.38h-.43a.82.82 0 0 0-.6.28 2.5 2.5 0 0 0-.78 1.85 4.35 4.35 0 0 0 .91 2.3 9.95 9.95 0 0 0 3.8 3.36c.53.23.94.36 1.26.47.53.17 1.01.14 1.39.09.43-.07 1.3-.53 1.48-1.04s.19-.95.13-1.04-.2-.14-.42-.25Z" />
        </svg>
      </span>
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-[13.5px] font-medium transition-all duration-500 group-hover:max-w-[130px]">
        Chat with us
      </span>
    </a>
  );
}
