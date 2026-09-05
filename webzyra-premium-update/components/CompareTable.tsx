import { COMPARE_FEATURES, PLANS } from "@/lib/data";

function Cell({ value }: { value: string | null }) {
  if (value === null) {
    return <span className="text-muted/40">—</span>;
  }
  return (
    <span className="inline-flex items-start gap-2 text-ink/85">
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-blue shrink-0 mt-[3px]"
        aria-hidden
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
      <span>{value}</span>
    </span>
  );
}

export default function CompareTable() {
  return (
    <div className="overflow-x-auto rounded-lg border border-line bg-white/70 backdrop-blur-sm shadow-premium">
      <table className="w-full min-w-[720px] border-collapse text-[14.5px]">
        <thead>
          <tr className="border-b border-line">
            <th className="text-left font-mono text-[12px] uppercase tracking-wide text-muted px-6 py-5 w-[26%]">
              Feature
            </th>
            {PLANS.map((p) => (
              <th
                key={p.id}
                className={`text-left px-6 py-5 font-display text-[16px] font-semibold ${
                  p.popular ? "bg-surface-blue text-blue" : "text-ink"
                }`}
              >
                {p.name}
                {p.popular && (
                  <span className="ml-2 align-middle inline-block text-[10px] font-mono uppercase tracking-wide bg-blue text-white px-2 py-0.5 rounded-full">
                    Popular
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {COMPARE_FEATURES.map((row, i) => (
            <tr key={row.label} className={i % 2 === 1 ? "bg-surface/50" : ""}>
              <td className="px-6 py-4 font-medium text-ink/80 border-t border-line">{row.label}</td>
              <td className="px-6 py-4 border-t border-line">
                <Cell value={row.basic} />
              </td>
              <td className="px-6 py-4 border-t border-line bg-surface-blue/40">
                <Cell value={row.pro} />
              </td>
              <td className="px-6 py-4 border-t border-line">
                <Cell value={row.ecommerce} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
