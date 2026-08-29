"use client";

import { useEffect, useState } from "react";

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
    const leaveTimer = setTimeout(() => setPhase("leaving"), 1200);
    const doneTimer = setTimeout(() => {
      setPhase("done");
      document.body.style.overflow = "";
    }, 1650);

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
      className={`fixed inset-0 z-[999] flex items-center justify-center bg-ink transition-opacity duration-[450ms] ease-out ${
        phase === "leaving" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-5">
        <div className="relative w-[72px] h-[72px]">
          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="3"
            />
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="#2451FF"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="264"
              strokeDashoffset="264"
              className="loader-ring"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center font-display font-semibold text-white text-xl">
            W
          </span>
        </div>
        <p className="loader-pulse font-mono text-[11px] uppercase tracking-[0.3em] text-white/60">
          Webzyra
        </p>
      </div>
    </div>
  );
}
