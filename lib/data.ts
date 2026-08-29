export const CONTACT = {
  whatsapp: "923313403618", // international format, no + or leading 0, for wa.me links
  whatsappDisplay: "0331 3403618",
  email: "ghazanfaranees00@gmail.com",
};

// Centralized stock photography (Unsplash, free-to-use). Swap any of these
// for your own photography later by changing the URL in one place.
const unsplash = (id: string, params = "q=80&w=1800&auto=format&fit=crop") =>
  `https://images.unsplash.com/${id}?${params}`;

export const IMAGES = {
  hero: unsplash("photo-1498050108023-c5249f4df085"), // code on a laptop, busy desk
  teamBanner: unsplash("photo-1666698809123-44e998e93f23"), // team working together on laptops
  servicesBanner: unsplash("photo-1688733720228-4f7a18681c4f"), // clean desk, laptop + monitor
  infoBanner: unsplash("photo-1651684195895-38708dc94cfa"), // focused work on a laptop
  workBanner: unsplash("photo-1621857093087-7daa85ab14a6"), // designer working on a MacBook
  contactBanner: unsplash("photo-1624555130858-7ea5b8192c49"), // people in conversation, business setting
  conceptBusiness: unsplash("photo-1688733720228-4f7a18681c4f", "q=80&w=1000&h=760&auto=format&fit=crop"),
  conceptPortfolio: unsplash("photo-1651684195895-38708dc94cfa", "q=80&w=1000&h=760&auto=format&fit=crop"),
  conceptEcommerce: unsplash("photo-1621857093087-7daa85ab14a6", "q=80&w=1000&h=760&auto=format&fit=crop"),
  conceptLanding: unsplash("photo-1569534108101-c29c57e3df89", "q=80&w=1000&h=760&auto=format&fit=crop"),
};

  // Ecommerce / online-business style concept
  conceptEcommerce: unsplash(
    "GQOylIn892U",
    "q=80&w=1000&h=760&auto=format&fit=crop"
  ),

  // Landing-page / web-development concept
  conceptLanding: unsplash(
    "pKiBD4eoOqE",
    "q=80&w=1000&h=760&auto=format&fit=crop"
  ),
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Info", href: "/info" },
  { label: "Contact", href: "/contact" },
];

export type PlanId = "basic" | "pro" | "ecommerce";

export const PLANS: {
  id: PlanId;
  name: string;
  tagline: string;
  price: string;
  delivery: string;
  features: string[];
  suitedFor: string[];
  popular?: boolean;
}[] = [
  {
    id: "basic",
    name: "Basic Website",
    tagline: "A clean, functional site to establish your presence online.",
    price: "Rs. 8,000+",
    delivery: "3–5 days delivery",
    features: [
      "1–3 page website",
      "Responsive, mobile-friendly layout",
      "Professional modern design",
      "Contact section / form",
      "Basic SEO-friendly structure",
      "Social media links",
      "Basic animations",
      "Basic performance optimization",
    ],
    suitedFor: ["Personal websites", "Small businesses", "Simple portfolios", "Service providers"],
  },
  {
    id: "pro",
    name: "Professional Website",
    tagline: "A custom, fully-featured site built for growing businesses.",
    price: "Rs. 25,000+",
    delivery: "7–10 days delivery",
    features: [
      "1–7 professional pages",
      "Fully responsive design",
      "Custom professional UI",
      "Modern animations",
      "Contact forms",
      "Professional navigation",
      "SEO-friendly structure",
      "Performance optimization",
      "Social media integration",
      "Google-friendly technical structure",
      "Professional page layouts",
      "Deeper customization",
    ],
    suitedFor: ["Businesses", "Professionals", "Brands", "Agencies", "Growing companies"],
    popular: true,
  },
  {
    id: "ecommerce",
    name: "Professional Ecommerce Website",
    tagline: "A complete online store, built to sell.",
    price: "Rs. 30,000+",
    delivery: "Timeline discussed per project",
    features: [
      "Fully professional ecommerce website",
      "Product listing system",
      "Product detail pages",
      "Categories",
      "Shopping cart",
      "Checkout system",
      "Responsive ecommerce design",
      "SEO-friendly structure",
      "Product organization",
      "Professional ecommerce UI",
      "Mobile optimization",
      "Search functionality",
      "Business / contact sections",
      "Performance optimization",
    ],
    suitedFor: ["Online stores", "Product businesses", "Retail businesses", "Growing ecommerce brands"],
  },
];

export const SERVICES = [
  { title: "Custom Website Development", desc: "Hand-built sites, not templates — structured around how your business actually works." },
  { title: "Business Websites", desc: "A clear, professional home for your company online." },
  { title: "Portfolio Websites", desc: "Sites that let your work speak first." },
  { title: "Landing Pages", desc: "Focused, single-purpose pages built to convert." },
  { title: "Ecommerce Websites", desc: "Product catalogs, carts, and checkout flows that work." },
  { title: "Responsive Design", desc: "Every layout tested across phone, tablet, and desktop." },
  { title: "UI/UX Design", desc: "Interfaces planned around what a visitor is trying to do." },
  { title: "SEO-Friendly Structure", desc: "Semantic markup and clean structure search engines can read." },
  { title: "Website Optimization", desc: "Faster load times, leaner code, better Core Web Vitals." },
  { title: "Contact & Lead Forms", desc: "Validated forms that route enquiries where they need to go." },
  { title: "Basic Website Maintenance", desc: "Ongoing updates and small changes after launch." },
];

export const FAQS = [
  {
    q: "How long does a website take?",
    a: "Basic websites are typically delivered in 3–5 days, and Professional websites in 7–10 days. Ecommerce timelines are discussed per project since scope varies. Exact timelines are confirmed once requirements are finalized.",
  },
  {
    q: "What is included in the Basic plan?",
    a: "A 1–3 page responsive website with a professional design, a contact section, basic SEO-friendly structure, social media links, and basic animations and performance optimization.",
  },
  {
    q: "What is included in the Pro plan?",
    a: "A 1–7 page custom-built responsive website with professional UI, modern animations, contact forms, SEO-friendly structure, performance optimization, and social media integration.",
  },
  {
    q: "What is included in the Ecommerce plan?",
    a: "A full online store: product listings, product detail pages, categories, cart, checkout system, search, and a responsive ecommerce UI. Advanced features like payment gateways, shipping, tax, or inventory systems are scoped and discussed separately, and are not assumed to be included by default.",
  },
  {
    q: "Are domain and hosting included?",
    a: "No. The listed price covers the Webzyra service charge only. Domain registration, hosting, and any other third-party costs are separate and are discussed as part of your project.",
  },
  {
    q: "Can I request custom features?",
    a: "Yes. Custom requirements are discussed directly after you choose a plan, and are scoped and quoted based on what you need.",
  },
  {
    q: "How do I contact Webzyra after selecting a plan?",
    a: "After submitting a request, you'll be shown direct WhatsApp and email options to discuss your project and confirm the details.",
  },
  {
    q: "Can I request changes?",
    a: "Yes. Revisions are part of the process — the number and scope of revision rounds is agreed on before work begins.",
  },
  {
    q: "Do you build mobile-friendly websites?",
    a: "Every website is built responsive by default, tested across common phone, tablet, and desktop widths.",
  },
  {
    q: "Can you build ecommerce websites?",
    a: "Yes — the Ecommerce plan covers a full store setup. Advanced integrations (payments, shipping, inventory) are scoped separately based on your needs.",
  },
];

export const WHY_WEBZYRA = [
  { title: "Professional design", desc: "Every layout is planned with intent — nothing dropped in from a generic template." },
  { title: "Responsive by default", desc: "Built and tested across phone, tablet, and desktop from day one." },
  { title: "Custom layouts", desc: "Structure fitted to your content, not the other way around." },
  { title: "Clean development", desc: "Readable, maintainable code — component-based and organized." },
  { title: "Mobile-first experience", desc: "Designed for how most visitors will actually arrive: on a phone." },
  { title: "Performance-conscious", desc: "Optimized images, lean code, and fast load times." },
  { title: "SEO-friendly foundations", desc: "Semantic HTML and proper structure from the first commit." },
  { title: "Clear communication", desc: "Direct contact by WhatsApp or email — no ticket queues." },
];

export const PROCESS_STEPS = [
  { title: "Choose a plan", desc: "Pick the service that fits — Basic, Pro, or Ecommerce." },
  { title: "Discuss requirements", desc: "Get in touch over WhatsApp or email to walk through what you need." },
  { title: "Design & development", desc: "The website is designed and built to match your requirements." },
  { title: "Review", desc: "You review the build and request any changes." },
  { title: "Delivery", desc: "The finished website is handed over." },
];

export const CONCEPTS = [
  { title: "Business Website", tag: "Concept", desc: "A multi-section company site — services, credibility, and a clear path to contact.", image: IMAGES.conceptBusiness },
  { title: "Portfolio", tag: "Concept", desc: "A focused, image-led layout that puts the work in front first.", image: IMAGES.conceptPortfolio },
  { title: "Ecommerce", tag: "Concept", desc: "A product-first store layout — browse, product detail, cart, checkout.", image: IMAGES.conceptEcommerce },
  { title: "Landing Page", tag: "Concept", desc: "A single-purpose page built around one action.", image: IMAGES.conceptLanding },
];
