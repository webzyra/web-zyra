import Counter from "./Counter";
import { STATS } from "@/lib/data";

export default function StatsStrip() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-line border border-line rounded-md overflow-hidden">
      {STATS.map((s) => (
        <div key={s.label} className="bg-paper p-7 md:p-8">
          <p className="font-display text-4xl md:text-[42px] font-bold text-gradient">
            <Counter value={s.value} suffix={s.suffix} />
          </p>
          <p className="mt-2 text-muted text-[13.5px] leading-relaxed">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
