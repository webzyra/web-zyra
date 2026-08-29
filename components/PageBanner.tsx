import type { ReactNode } from "react";

export default function PageBanner({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
  cta,
  compact = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
  imageAlt: string;
  cta?: ReactNode;
  compact?: boolean;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 banner-scrim-blue" />
      </div>
      <div
        className={`relative max-w-content mx-auto px-6 md:px-10 text-white ${
          compact ? "pt-28 pb-16 md:pt-32 md:pb-20" : "pt-32 pb-20 md:pt-40 md:pb-28"
        }`}
      >
        {eyebrow && <p className="eyebrow-light mb-5">{eyebrow}</p>}
        <h1 className="text-4xl md:text-5xl lg:text-[52px] font-display font-semibold max-w-2xl text-balance leading-[1.08]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-white/75 text-lg max-w-xl leading-relaxed">
            {subtitle}
          </p>
        )}
        {cta && <div className="mt-8">{cta}</div>}
      </div>
    </section>
  );
}
