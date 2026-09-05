import { TECH_STACK } from "@/lib/data";

export default function TechMarquee() {
  const items = [...TECH_STACK, ...TECH_STACK];
  return (
    <div className="marquee-mask overflow-hidden">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="mx-4 shrink-0 font-mono text-[13px] uppercase tracking-[0.14em] text-white/45 flex items-center gap-4"
          >
            {item}
            <span className="w-1 h-1 rounded-full bg-white/25" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  );
}
