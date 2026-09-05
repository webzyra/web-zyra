# Webzyra — Premium Upgrade

## How to apply
Copy every file in this zip into your project at the **same path**,
overwriting the existing files. No new npm packages are required — the
upgrade uses only what your `package.json` already has (Next.js, React,
Tailwind). Just run your normal `npm install` (in case anything changed)
and `npm run dev` / `npm run build`.

Files touched:
- `app/globals.css`, `tailwind.config.ts` — new premium design system
- `app/layout.tsx` — wires in the new scroll progress bar + floating WhatsApp button
- `app/page.tsx`, `app/services/page.tsx`, `app/work/page.tsx`,
  `app/contact/page.tsx`, `app/info/page.tsx`, `app/checkout/page.tsx`,
  `app/not-found.tsx` — rebuilt with the new components/animations
- `components/*` — several rewritten (Header, Footer, PricingCard, FAQ,
  PageBanner, Checkout, ContactForm) + brand-new ones (see below)
- `lib/data.ts` — added `STATS`, `TECH_STACK`, `COMPARE_FEATURES` (all
  derived from your existing plan data — nothing invented)

## What's new

**Design system**
- Blue → violet gradient accents, gradient text, glass/blur surfaces
- Gradient-bordered "premium" cards (pricing, checkout, contact)
- Soft mesh-gradient backgrounds on dark sections + a subtle grain texture
- Custom scrollbar, refined shadows/glows, shine-sweep on primary buttons

**New components**
- `Reveal.tsx` — scroll-triggered fade/lift animation (IntersectionObserver, no libraries)
- `ScrollProgress.tsx` — thin gradient progress bar fixed to the top of the page
- `FloatingWhatsApp.tsx` — persistent WhatsApp bubble (appears after scrolling), expands on hover
- `Spotlight.tsx` — cursor-follow glow behind the homepage hero
- `Counter.tsx` + `StatsStrip.tsx` — animated count-up stats using numbers that already exist in your plans (100% responsive, 3 plans, 7 pages on Pro, 3–5 day fastest delivery) — no fabricated client counts or ratings were added
- `CompareTable.tsx` — full feature-by-feature comparison across Basic / Professional / Ecommerce on the Services page
- `TechMarquee.tsx` — infinite-scrolling strip naming the actual stack (Next.js, React, TypeScript, Tailwind)

**Interactions**
- Header: glass pill navigation with an animated active-page indicator, smoother staggered mobile drawer
- Pricing cards: gradient border, "Most Popular" plan lifted and glowing
- FAQ: rounded card, active-row highlight, smoother expand
- Work/Concepts: image zoom + gradient wash on hover
- Checkout: gradient stepper, glass summary card

**Honesty preserved**
Nothing fake was added — no invented testimonials, review stars, or client
counts. Every new number/stat traces back to something already stated in
`lib/data.ts` (plan scope, delivery windows, responsiveness).

## Verified
`npx tsc --noEmit` passes with zero errors, and a full `next build` was run
successfully (Google Fonts can't be fetched from this sandbox, so fonts were
temporarily stubbed only to confirm the build compiles — your real
environment with normal internet access will fetch Sora/Inter/IBM Plex Mono
as before, unchanged).
