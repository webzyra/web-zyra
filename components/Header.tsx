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
      className={`sticky top-0 z-50 bg-paper/95 backdrop-blur border-b border-line transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_0_rgba(10,12,16,0.06)]" : ""
      }`}
    >
      <div className="max-w-content mx-auto px-6 md:px-10 h-16 md:h-[72px] flex items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center gap-9" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-mono text-[13px] uppercase tracking-wide transition-colors ${
                  active ? "text-blue" : "text-ink/80 hover:text-blue"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link href="/checkout" className="btn-primary">
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
        className={`md:hidden fixed inset-x-0 top-16 bottom-0 bg-paper transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col px-6 pt-10 gap-1" aria-label="Mobile">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display text-3xl py-4 border-b border-line text-ink"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/checkout" className="btn-primary mt-8 w-full">
            Start a Project
          </Link>
        </nav>
      </div>
    </header>
  );
}
