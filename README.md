# Webzyra

The official website for **Webzyra** — a professional website design and
development service. Built with Next.js (App Router), TypeScript, and
Tailwind CSS.

Live domain: **webzyra.xyz**

## Features

- Home, Services & Pricing, Info, Contact, Website Concepts, Terms, and
  Privacy pages, plus a custom 404 page
- Three pricing plans (Basic, Professional, Ecommerce) with an order
  request / checkout flow that ends in a WhatsApp or email handoff —
  no fake payment processing
- Contact form that prepares a message and opens it in WhatsApp or the
  user's email client (no backend/database required)
- Custom-designed brand illustrations (`BannerArt`, `ConceptArt`) —
  hand-built SVG website/browser mockups in the brand's own colors,
  used for every page banner and concept card instead of stock photos
- A branded loading screen on first load: your logo wipe-reveals in
  with a progress bar, then fades — skipped automatically for visitors
  with reduced-motion preferences enabled
- A dedicated favicon cropped from your logo's "W" mark, separate from
  the full wordmark used in the header/footer
- Sticky responsive header with a mobile hamburger menu
- Clean, unique URLs (`/services`, `/contact`, `/info`, etc. — no
  `?page=` or `.html` routes)
- SEO basics: per-page metadata, Open Graph tags, `sitemap.xml`,
  `robots.txt`, and a web manifest
- Accessible forms with validation and error states, visible focus
  states, and `prefers-reduced-motion` support
- Component-based architecture (Header, Footer, PricingCard, FAQ,
  ContactForm, Checkout, WhatsAppButton, EmailButton, Logo, BannerArt,
  ConceptArt, LoadingScreen, PageBanner)

## Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [React 18](https://react.dev/) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) with a custom design-token
  theme (colors, type scale, radii) in `tailwind.config.ts`
- Fonts loaded via `next/font/google`: Sora (display), Inter (body),
  IBM Plex Mono (labels/eyebrows)

No database, CMS, or payment gateway is included — this is a static,
front-end-only marketing/checkout-request site, matching what's
actually implemented (see **Important notes** below).

## Installation

Requires [Node.js](https://nodejs.org/) 18.17 or newer.

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Production Build

```bash
npm run build
npm run start
```

`npm run build` compiles an optimized production build; `npm run
start` serves that build locally on port 3000 so you can verify it
before deploying.

## GitHub Publishing

From inside the project folder:

```bash
git init
git add .
git commit -m "Initial commit — Webzyra website"
git branch -M main
git remote add origin https://github.com/<your-username>/webzyra.git
git push -u origin main
```

Replace `<your-username>` with your GitHub username (create the empty
`webzyra` repository on GitHub first, without a README, so there's no
merge conflict on first push).

## Deployment

The project deploys cleanly to any Next.js-compatible host. The
simplest path is [Vercel](https://vercel.com/), the company behind
Next.js:

1. Push the project to GitHub (see above).
2. In Vercel, choose **Add New → Project** and import the `webzyra`
   repository.
3. Framework preset: **Next.js** (auto-detected). Leave build/output
   settings as default (`npm run build`).
4. Deploy. Vercel will give you a `*.vercel.app` URL immediately.

Other hosts that support Next.js (Netlify, Render, a Node server, or
a Docker container running `npm run build && npm run start`) work the
same way — install dependencies, run `next build`, then run `next
start` (or the platform's equivalent).

### Connecting webzyra.xyz

1. In your hosting provider's dashboard, add `webzyra.xyz` (and
   `www.webzyra.xyz` if you want both) as a custom domain for this
   project.
2. At your domain registrar, update the DNS records to the values
   your host gives you — typically an `A`/`ALIAS` record for the root
   domain and a `CNAME` for `www`.
3. Wait for DNS to propagate (usually minutes to a few hours), then
   confirm HTTPS is active — most hosts (including Vercel) provision
   an SSL certificate automatically once DNS resolves.
4. Set **webzyra.xyz** (not the `www` version) as the canonical
   domain if your host offers that option, to match the metadata
   already configured in this project.

## Environment Variables

None are required to run this project as delivered — see
`.env.example`. If you later add a backend, form-handling service, or
payment gateway, document the required variables there and in your
hosting provider's environment settings. Never commit a real `.env`
or `.env.local` file containing secrets to GitHub.

## Project Structure

```
app/
  layout.tsx          Root layout: fonts, global metadata, Header/Footer
  page.tsx             Home page
  services/page.tsx    Services & pricing
  info/page.tsx         About / how it works
  contact/page.tsx      Contact page
  work/page.tsx          Website concepts (sample layouts, clearly labeled)
  checkout/page.tsx      Order request flow
  terms/page.tsx          Terms of Service
  privacy/page.tsx        Privacy Policy
  not-found.tsx            Custom 404 page
  sitemap.ts, robots.ts, manifest.ts   SEO/technical files
  globals.css               Tailwind + design-system utility classes
components/
  Header.tsx, Footer.tsx, Logo.tsx
  PricingCard.tsx, FAQ.tsx
  ContactForm.tsx, Checkout.tsx
  WhatsAppButton.tsx, EmailButton.tsx
  PageBanner.tsx           Photographic-style page-top banner wrapper
  BannerArt.tsx              Custom SVG illustration used inside banners
                              (variants: home, services, info, contact, work)
  ConceptArt.tsx               Custom SVG thumbnails for the four Work concepts
  LoadingScreen.tsx             Branded first-load animation
lib/
  data.ts                Central content: nav links, pricing plans,
                          services, FAQ, contact info — edit here first
public/
  logo.png                Your full Webzyra wordmark (used as-is in the
                          header, footer, and social preview image)
  favicon.png              A standalone copy of the cropped "W" mark
app/
  icon.png                The "W" mark Next.js serves as the favicon
                          (auto-detected by file name — no manifest edit needed)
  apple-icon.png            Same mark, sized for iOS home-screen icons
```

## Customization

Most day-to-day changes only require editing **`lib/data.ts`**:

- **Pricing** — edit the `PLANS` array (name, price, delivery time,
  features, "recommended for" list).
- **Contact information** — edit `CONTACT` (WhatsApp number in
  international format without `+`, and email address).
- **Services list** — edit `SERVICES`.
- **FAQ** — edit `FAQS`.
- **Navigation** — edit `NAV_LINKS`.

Other customization:

- **Logo** — replace `public/logo.png` with a new file of the same
  name (or update the `src` in `components/Logo.tsx`) to swap the
  logo everywhere it's used: header, footer, and social preview. To
  change the favicon, replace `app/icon.png` / `app/apple-icon.png`
  with a new cropped mark.
- **Banner illustrations** — edit `components/BannerArt.tsx` (page
  banners) and `components/ConceptArt.tsx` (Work page thumbnails) to
  adjust the custom SVG mockups, or swap in real photography by
  replacing the `<BannerArt variant="..." />` usage in a page with an
  `<img>`.
- **Colors** — edit the `colors` block in `tailwind.config.ts`
  (`ink`, `ink2`, `blue`, `paper`, `muted`, `line`, `surface`) — the
  banner illustrations and loading screen also read from these.
- **Fonts** — edit the `next/font/google` imports in `app/layout.tsx`
  (currently Sora for headings, Inter for body text).
- **Website content/copy** — each page's text lives directly in its
  `app/**/page.tsx` file.

## Important notes

- The checkout and contact flows are **service request** flows, not
  online payment processing — no payment gateway is connected. Both
  end by opening the visitor's own WhatsApp or email app with a
  prepared message; nothing is stored on a server or database.
- The "Website Concepts" page shows illustrative concept layouts,
  clearly labeled as concepts — not real client projects.
- Prices shown are Webzyra's service charge only; domain, hosting, and
  other third-party costs are called out as separate throughout the
  site.
- The loading screen (`components/LoadingScreen.tsx`) plays once per
  full page load — not on every internal navigation — and is skipped
  automatically for visitors with `prefers-reduced-motion` enabled.
- All banner and concept imagery is hand-built SVG (`BannerArt.tsx`,
  `ConceptArt.tsx`) rather than stock photography, so there's nothing
  to license or attribute.
