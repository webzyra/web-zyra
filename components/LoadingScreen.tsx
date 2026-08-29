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

    document.body.style.overflow = "hidden";
    const leaveTimer = setTimeout(() => setPhase("leaving"), 1650);
    const doneTimer = setTimeout(() => {
      setPhase("done");
      document.body.style.overflow = "";
    }, 2150);

    return () => {
      clearTimeout(leaveTimer);
      clearTimeout(doneTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      aria-hidden="true"
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

      <div className="relative flex flex-col items-center">
        <div className="loader-logo-mask">
          <Image
            src="/logo.png"
            alt="Webzyra"
            width={280}
            height={94}
            priority
            className="h-10 md:h-12 w-auto"
          />
        </div>

        <div className="mt-7 w-40 h-[3px] bg-line rounded-full overflow-hidden">
          <div className="h-full bg-blue rounded-full loader-bar" />
        </div>
      </div>
    </div>
  );
}
