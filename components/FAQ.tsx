"use client";

import { useState } from "react";
import { FAQS } from "@/lib/data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line border border-line rounded-lg bg-white/60 backdrop-blur-sm shadow-premium overflow-hidden">
      {FAQS.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.q} className={open ? "bg-surface-blue/40" : ""}>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              className="w-full flex items-start justify-between gap-6 px-6 md:px-8 py-6 text-left group"
            >
              <span
                className={`font-display text-lg md:text-xl transition-colors ${
                  open ? "text-blue" : "text-ink group-hover:text-blue"
                }`}
              >
                {item.q}
              </span>
              <span
                className={`flex items-center justify-center w-8 h-8 rounded-full shrink-0 mt-0.5 font-mono text-lg transition-all duration-300 ${
                  open ? "rotate-45 bg-blue text-white" : "text-blue border border-line bg-white"
                }`}
                aria-hidden
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 md:px-8 pb-6 text-[15px] leading-relaxed text-muted max-w-2xl">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
