type Variant = "business" | "portfolio" | "ecommerce" | "landing";

export default function ConceptArt({ variant }: { variant: Variant }) {
  return (
    <svg
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      className="w-full h-full"
      role="img"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`bg-${variant}`} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0A0C10" />
          <stop offset="100%" stopColor="#16266E" />
        </linearGradient>
        <pattern id={`grid-${variant}`} width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M28 0H0V28" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="400" height="300" fill={`url(#bg-${variant})`} />
      <rect width="400" height="300" fill={`url(#grid-${variant})`} />

      {/* shared browser chrome */}
      <rect x="30" y="34" width="340" height="232" rx="10" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.16)" />
      <path d="M30 46a10 10 0 0 1 10-10h300a10 10 0 0 1 10 10v14H30z" fill="rgba(255,255,255,0.07)" />
      <circle cx="46" cy="53" r="3.5" fill="rgba(255,255,255,0.3)" />
      <circle cx="58" cy="53" r="3.5" fill="rgba(255,255,255,0.3)" />
      <circle cx="70" cy="53" r="3.5" fill="rgba(255,255,255,0.3)" />

      {variant === "business" && (
        <>
          <rect x="52" y="78" width="30" height="8" rx="4" fill="rgba(255,255,255,0.35)" />
          <rect x="90" y="78" width="30" height="8" rx="4" fill="rgba(255,255,255,0.35)" />
          <rect x="308" y="72" width="46" height="18" rx="5" fill="#2451FF" />
          <rect x="52" y="108" width="180" height="16" rx="4" fill="rgba(255,255,255,0.85)" />
          <rect x="52" y="132" width="140" height="10" rx="4" fill="rgba(255,255,255,0.4)" />
          {[0, 1, 2].map((i) => (
            <rect key={i} x={52 + i * 106} y="168" width="90" height="70" rx="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.15)" />
          ))}
        </>
      )}

      {variant === "portfolio" && (
        <>
          {[0, 1].map((row) =>
            [0, 1].map((col) => (
              <rect
                key={`${row}-${col}`}
                x={52 + col * 158}
                y={78 + row * 92}
                width="140"
                height="76"
                rx="8"
                fill="rgba(255,255,255,0.05)"
                stroke="rgba(255,255,255,0.15)"
              />
            ))
          )}
          <circle cx="92" cy="108" r="10" fill="rgba(255,255,255,0.3)" />
          <circle cx="250" cy="108" r="10" fill="rgba(255,255,255,0.3)" />
        </>
      )}

      {variant === "ecommerce" && (
        <>
          <rect x="52" y="78" width="140" height="10" rx="4" fill="rgba(255,255,255,0.5)" />
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <rect x={52 + i * 106} y="104" width="90" height="70" rx="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.15)" />
              <circle cx={52 + i * 106 + 20} cy="122" r="7" fill="rgba(255,255,255,0.3)" />
              <rect x={52 + i * 106 + 12} y="150" width="50" height="8" rx="4" fill="rgba(255,255,255,0.3)" />
              <rect x={52 + i * 106 + 12} y="184" width="40" height="16" rx="8" fill="#2451FF" />
            </g>
          ))}
        </>
      )}

      {variant === "landing" && (
        <>
          <rect x="110" y="90" width="180" height="16" rx="4" fill="rgba(255,255,255,0.85)" />
          <rect x="140" y="116" width="120" height="10" rx="4" fill="rgba(255,255,255,0.4)" />
          <rect x="150" y="150" width="100" height="34" rx="8" fill="#2451FF" />
          <circle cx="200" cy="222" r="4" fill="rgba(255,255,255,0.35)" />
          <circle cx="216" cy="222" r="4" fill="rgba(255,255,255,0.2)" />
          <circle cx="184" cy="222" r="4" fill="rgba(255,255,255,0.2)" />
        </>
      )}
    </svg>
  );
}
