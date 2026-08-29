type Variant = "home" | "services" | "info" | "contact" | "work";

const FONT = "ui-monospace, 'IBM Plex Mono', monospace";

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* drop shadow */}
      <rect x="845" y="158" width="700" height="462" rx="14" fill="#000000" opacity="0.28" />
      {/* browser panel */}
      <rect
        x="815"
        y="128"
        width="700"
        height="462"
        rx="14"
        fill="rgba(255,255,255,0.05)"
        stroke="rgba(255,255,255,0.16)"
      />
      {/* top bar */}
      <path d="M815 142a14 14 0 0 1 14-14h672a14 14 0 0 1 14 14v30H815z" fill="rgba(255,255,255,0.07)" />
      <circle cx="843" cy="157" r="5" fill="rgba(255,255,255,0.28)" />
      <circle cx="863" cy="157" r="5" fill="rgba(255,255,255,0.28)" />
      <circle cx="883" cy="157" r="5" fill="rgba(255,255,255,0.28)" />
      <rect x="905" y="149" width="260" height="16" rx="8" fill="rgba(255,255,255,0.09)" />
      {children}
    </>
  );
}

export default function BannerArt({ variant }: { variant: Variant }) {
  return (
    <svg
      viewBox="0 0 1600 800"
      preserveAspectRatio="xMidYMid slice"
      className="w-full h-full"
      role="img"
      aria-label="Webzyra — website design and development"
    >
      <defs>
        <linearGradient id="bg" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0A0C10" />
          <stop offset="55%" stopColor="#0E1330" />
          <stop offset="100%" stopColor="#16266E" />
        </linearGradient>
        <pattern id="grid" width="42" height="42" patternUnits="userSpaceOnUse">
          <path d="M42 0H0V42" fill="none" stroke="rgba(255,255,255,0.055)" strokeWidth="1" />
        </pattern>
        <radialGradient id="glow" cx="80%" cy="15%" r="60%">
          <stop offset="0%" stopColor="#2451FF" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#2451FF" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="1600" height="800" fill="url(#bg)" />
      <rect width="1600" height="800" fill="url(#glow)" />
      <rect width="1600" height="800" fill="url(#grid)" />

      {variant === "home" && (
        <Frame>
          {/* nav */}
          <rect x="855" y="214" width="46" height="10" rx="5" fill="rgba(255,255,255,0.35)" />
          <rect x="915" y="214" width="46" height="10" rx="5" fill="rgba(255,255,255,0.35)" />
          <rect x="975" y="214" width="46" height="10" rx="5" fill="rgba(255,255,255,0.35)" />
          <rect x="1385" y="206" width="90" height="26" rx="6" fill="#2451FF" />

          {/* headline blocks */}
          <rect x="855" y="278" width="380" height="20" rx="4" fill="rgba(255,255,255,0.85)" />
          <rect x="855" y="310" width="260" height="20" rx="4" fill="rgba(255,255,255,0.5)" />
          <rect x="855" y="345" width="330" height="12" rx="4" fill="rgba(255,255,255,0.25)" />
          <rect x="855" y="365" width="280" height="12" rx="4" fill="rgba(255,255,255,0.25)" />

          {/* buttons */}
          <rect x="855" y="400" width="130" height="40" rx="8" fill="#2451FF" />
          <rect x="998" y="400" width="120" height="40" rx="8" fill="none" stroke="rgba(255,255,255,0.35)" />

          {/* image block */}
          <rect x="1260" y="278" width="220" height="270" rx="10" fill="rgba(36,81,255,0.16)" stroke="#4E6BFF" />
          <circle cx="1305" cy="330" r="16" fill="rgba(255,255,255,0.4)" />
          <path d="M1275 470l45-55 35 35 30-40 55 60z" fill="rgba(255,255,255,0.22)" />
        </Frame>
      )}

      {variant === "services" && (
        <Frame>
          {[
            { x: 855, popular: false },
            { x: 1058, popular: true },
            { x: 1261, popular: false },
          ].map((c) => (
            <g key={c.x}>
              <rect
                x={c.x}
                y="214"
                width="182"
                height="300"
                rx="10"
                fill={c.popular ? "rgba(36,81,255,0.16)" : "rgba(255,255,255,0.045)"}
                stroke={c.popular ? "#2451FF" : "rgba(255,255,255,0.15)"}
                strokeWidth={c.popular ? 2 : 1}
              />
              {c.popular && (
                <rect x={c.x + 20} y="200" width="86" height="22" rx="11" fill="#2451FF" />
              )}
              <rect x={c.x + 20} y="244" width="90" height="16" rx="4" fill="rgba(255,255,255,0.6)" />
              <rect x={c.x + 20} y="272" width="120" height="24" rx="4" fill="rgba(255,255,255,0.9)" />
              {[0, 1, 2, 3].map((i) => (
                <g key={i}>
                  <circle cx={c.x + 26} cy={320 + i * 26} r="3" fill="#6C86FF" />
                  <rect x={c.x + 38} y={317 + i * 26} width="110" height="8" rx="4" fill="rgba(255,255,255,0.3)" />
                </g>
              ))}
              <rect
                x={c.x + 20}
                y="464"
                width="142"
                height="34"
                rx="7"
                fill={c.popular ? "#2451FF" : "none"}
                stroke={c.popular ? "none" : "rgba(255,255,255,0.35)"}
              />
            </g>
          ))}
        </Frame>
      )}

      {variant === "info" && (
        <Frame>
          <line x1="890" y1="360" x2="1450" y2="360" stroke="rgba(255,255,255,0.18)" strokeWidth="2" />
          {[0, 1, 2, 3, 4].map((i) => {
            const x = 900 + i * 140;
            return (
              <g key={i}>
                <circle cx={x} cy="360" r="24" fill={i === 2 ? "#2451FF" : "rgba(255,255,255,0.08)"} stroke={i === 2 ? "#2451FF" : "rgba(255,255,255,0.3)"} />
                <text x={x} y="367" textAnchor="middle" fontFamily={FONT} fontSize="15" fill="#ffffff" opacity={i === 2 ? 1 : 0.65}>
                  0{i + 1}
                </text>
                <rect x={x - 34} y="404" width="68" height="9" rx="4" fill="rgba(255,255,255,0.25)" />
              </g>
            );
          })}
          <rect x="900" y="240" width="300" height="18" rx="4" fill="rgba(255,255,255,0.55)" />
          <rect x="900" y="270" width="220" height="12" rx="4" fill="rgba(255,255,255,0.25)" />
        </Frame>
      )}

      {variant === "contact" && (
        <Frame>
          {/* chat bubbles */}
          <rect x="860" y="220" width="300" height="60" rx="16" fill="rgba(255,255,255,0.08)" />
          <rect x="884" y="238" width="220" height="10" rx="5" fill="rgba(255,255,255,0.4)" />
          <rect x="884" y="256" width="150" height="10" rx="5" fill="rgba(255,255,255,0.25)" />

          <rect x="1180" y="300" width="290" height="60" rx="16" fill="rgba(36,81,255,0.22)" stroke="#2451FF" />
          <rect x="1204" y="318" width="200" height="10" rx="5" fill="rgba(255,255,255,0.55)" />
          <rect x="1204" y="336" width="140" height="10" rx="5" fill="rgba(255,255,255,0.35)" />

          {/* form */}
          <rect x="860" y="410" width="120" height="10" rx="4" fill="rgba(255,255,255,0.3)" />
          <rect x="860" y="428" width="300" height="34" rx="7" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.2)" />
          <rect x="860" y="474" width="120" height="10" rx="4" fill="rgba(255,255,255,0.3)" />
          <rect x="860" y="492" width="300" height="34" rx="7" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.2)" />
          <rect x="860" y="540" width="140" height="36" rx="7" fill="#2451FF" />
        </Frame>
      )}

      {variant === "work" && (
        <Frame>
          {[0, 1].map((row) =>
            [0, 1].map((col) => {
              const x = 855 + col * 340;
              const y = 214 + row * 180;
              return (
                <g key={`${row}-${col}`}>
                  <rect x={x} y={y} width="310" height="150" rx="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.15)" />
                  <circle cx={x + 34} cy={y + 34} r="12" fill="rgba(255,255,255,0.3)" />
                  <path d={`M${x + 20} ${y + 118} l55 -50 40 35 40 -45 60 60z`} fill="rgba(255,255,255,0.18)" />
                </g>
              );
            })
          )}
        </Frame>
      )}
    </svg>
  );
}
