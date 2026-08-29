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
        paper: "#FBFBF9",
        blue: {
          DEFAULT: "#2451FF",
          dark: "#1633B0",
          light: "#6C86FF",
        },
        line: "#E2E4EA",
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
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "6px",
        md: "10px",
        lg: "16px",
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
      },
      animation: {
        fadeUp: "fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) both",
        fadeIn: "fadeIn 0.5s ease both",
      },
    },
  },
  plugins: [],
};

export default config;
