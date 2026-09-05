import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0C10",
        ink2: "#12151D",
        ink3: "#191D29",
        paper: "#FBFBF9",
        paper2: "#F5F5F1",
        blue: {
          DEFAULT: "#2451FF",
          dark: "#1633B0",
          light: "#6C86FF",
          soft: "#9FB0FF",
        },
        violet: {
          DEFAULT: "#7C5CFF",
          dark: "#5B3FDE",
          light: "#A996FF",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#F1D77E",
          dark: "#9A7B1E",
        },
        line: "#E2E4EA",
        line2: "#ECEDF2",
        muted: "#5B6272",
        surface: "#F2F3F7",
        "surface-blue": "#EEF1FF",
        ok: "#1F9D55",
        err: "#D64545",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "1180px",
        wide: "1360px",
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "6px",
        md: "10px",
        lg: "16px",
        xl: "22px",
        "2xl": "28px",
      },
      boxShadow: {
        premium: "0 24px 60px -24px rgba(10,12,16,0.28)",
        "premium-lg": "0 40px 100px -30px rgba(10,12,16,0.35)",
        "glow-blue": "0 0 0 1px rgba(36,81,255,0.35), 0 18px 46px -14px rgba(36,81,255,0.45)",
        "glow-blue-lg": "0 0 0 1px rgba(36,81,255,0.4), 0 30px 80px -20px rgba(36,81,255,0.55)",
        "glow-gold": "0 12px 34px -10px rgba(212,175,55,0.45)",
        "inner-line": "inset 0 0 0 1px rgba(10,12,16,0.06)",
        "inner-line-light": "inset 0 0 0 1px rgba(255,255,255,0.14)",
      },
      backgroundImage: {
        "mesh-dark":
          "radial-gradient(90% 60% at 85% 0%, rgba(124,92,255,0.35) 0%, rgba(124,92,255,0) 55%), radial-gradient(70% 50% at 10% 10%, rgba(36,81,255,0.35) 0%, rgba(36,81,255,0) 60%), radial-gradient(60% 60% at 50% 100%, rgba(36,81,255,0.15) 0%, rgba(36,81,255,0) 60%)",
        "mesh-light":
          "radial-gradient(60% 50% at 85% -10%, rgba(36,81,255,0.10) 0%, rgba(36,81,255,0) 60%), radial-gradient(50% 40% at 0% 0%, rgba(124,92,255,0.08) 0%, rgba(124,92,255,0) 60%)",
        "grain":
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-16px) rotate(2deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        gradientX: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        ringPulse: {
          "0%": { boxShadow: "0 0 0 0 rgba(36,81,255,0.45)" },
          "70%": { boxShadow: "0 0 0 14px rgba(36,81,255,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(36,81,255,0)" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both",
        fadeIn: "fadeIn 0.6s ease both",
        float: "float 5s ease-in-out infinite",
        floatSlow: "floatSlow 9s ease-in-out infinite",
        shimmer: "shimmer 2.6s linear infinite",
        marquee: "marquee 32s linear infinite",
        gradientX: "gradientX 6s ease infinite",
        ringPulse: "ringPulse 2.2s cubic-bezier(0.4,0,0.6,1) infinite",
        spinSlow: "spinSlow 16s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
