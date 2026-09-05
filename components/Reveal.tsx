"use client";

import { useEffect, useRef, type ReactNode, type ElementType } from "react";

/**
 * Fades + lifts its children into view the first time they cross into the
 * viewport. Pure CSS transition (see `[data-reveal]` in globals.css) driven
 * by a single shared IntersectionObserver per instance — no animation
 * libraries required.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className = "",
  once = true,
}: {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
  once?: boolean;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      el.setAttribute("data-visible", "true");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.setAttribute("data-visible", "true");
            if (once) observer.unobserve(el);
          } else if (!once) {
            el.setAttribute("data-visible", "false");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref}
      data-reveal=""
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
      className={className}
    >
      {children}
    </Tag>
  );
}
