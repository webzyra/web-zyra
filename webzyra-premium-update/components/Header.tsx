"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { NAV_LINKS } from "@/lib/data";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/80 backdrop-blur-xl border-b border-line shadow-[0_1px_0_rgba(10,12,16,0.06)]"
          : "bg-paper/40 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="max-w-content mx-auto px-6 md:px-10 h-16 md:h-[72px] flex items-center justify-between">
        <Logo />

        <nav
          className="hidden md:flex items-center gap-1 rounded-full border border-line/70 bg-white/60 backdrop-blur-sm px-1.5 py-1.5"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-mono text-[12.5px] uppercase tracking-wide transition-colors px-4 py-2 rounded-full ${
                  active ? "text-white" : "text-ink/70 hover:text-blue"
                }`}
              >
                {active && (
                  <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-blue to-violet shadow-glow-blue" />
                )}
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link href="/checkout" className="btn-blue">
            Start a Project
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden relative w-10 h-10 flex items-center justify-center"
        >
          <span
            className={`absolute h-[1.5px] w-6 bg-ink transition-transform duration-300 ${
              open ? "rotate-45" : "-translate-y-[6px]"
            }`}
          />
          <span
            className={`absolute h-[1.5px] w-6 bg-ink transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-[1.5px] w-6 bg-ink transition-transform duration-300 ${
              open ? "-rotate-45" : "translate-y-[6px]"
            }`}
          />
        </button>
      </div>

      <div
        className={`md:hidden fixed inset-x-0 top-16 bottom-0 bg-paper/95 backdrop-blur-xl mesh-light transition-all duration-500 ease-out ${
          open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col px-6 pt-10 gap-1" aria-label="Mobile">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                transitionDelay: open ? `${i * 60}ms` : "0ms",
              }}
              className={`font-display text-3xl py-4 border-b border-line text-ink transition-all duration-500 ${
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/checkout" className="btn-blue mt-8 w-full">
            Start a Project
          </Link>
        </nav>
      </div>
    </header>
  );
}
