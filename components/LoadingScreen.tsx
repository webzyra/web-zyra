"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [phase, setPhase] = useState<"loading" | "leaving" | "done">("loading");

  useEffect(() => {
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      setPhase("done");
      return;
    }

    // Plain `overflow: hidden` on <body> does NOT reliably block scrolling
    // on iOS Safari — the page can still be touch-dragged behind a fixed
    // overlay. Pinning <body> with position:fixed (and restoring the exact
    // scroll position afterwards) is the standard cross-browser-safe lock.
    const scrollY = window.scrollY;
    const html = document.documentElement;
    const { body } = document;
    const prevHtmlOverflow = html.style.overflow;
    const prevBodyPosition = body.style.position;
    const prevBodyTop = body.style.top;
    const prevBodyWidth = body.style.width;

    html.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";

    const restoreScroll = () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.position = prevBodyPosition;
      body.style.top = prevBodyTop;
      body.style.width = prevBodyWidth;
      window.scrollTo(0, scrollY);
    };

    const leaveTimer = setTimeout(() => setPhase("leaving"), 1650);
    const doneTimer = setTimeout(() => {
      setPhase("done");
      restoreScroll();
    }, 2150);

    return () => {
      clearTimeout(leaveTimer);
      clearTimeout(doneTimer);
      restoreScroll();
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      aria-hidden="true"
      style={{ overscrollBehavior: "none", touchAction: "none" }}
      className={`fixed inset-0 z-[999] flex items-center justify-center bg-paper transition-opacity duration-500 ease-out ${
        phase === "leaving" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* faint blueprint grid backdrop — on-brand, restrained */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#0A0C10 1px, transparent 1px), linear-gradient(90deg, #0A0C10 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative flex flex-col items-center px-6">
        <div className="loader-logo-mask">
          <Image
            src="/logo.png"
            alt="Webzyra"
            width={280}
            height={94}
            priority
            className="h-8 sm:h-10 md:h-12 w-auto max-w-[70vw]"
          />
        </div>

        <div className="mt-6 sm:mt-7 w-32 sm:w-40 h-[3px] bg-line rounded-full overflow-hidden">
          <div className="h-full bg-blue rounded-full loader-bar" />
        </div>
      </div>
    </div>
  );
}

