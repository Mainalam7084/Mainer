import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        vault: {
          bg: "#0F0F14",
          card: "#1A1A22",
          soft: "#22222C",
          primary: "#7C5CFF",
          secondary: "#00D1B2",
          accent: "#FACC15",
          danger: "#ff4d6d",
          text: "#F5F5F7",
          muted: "#A1A1AA",
          border: "#2E2E3A",
        },
      },
      boxShadow: {
        vault: "0 0 0 2px #2E2E3A, 0 10px 24px rgba(0, 0, 0, 0.35)",
        "vault-hover": "0 0 0 2px #7C5CFF, 0 14px 34px rgba(124, 92, 255, 0.45)",
        gold: "0 0 0 2px #FACC15, 0 12px 30px rgba(250, 204, 21, 0.35)",
      },
      borderRadius: {
        vault: "1rem",
      },
      keyframes: {
        "counter-rise": {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "soft-glow": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(124, 92, 255, 0.45)" },
          "50%": { boxShadow: "0 0 0 6px rgba(124, 92, 255, 0)" },
        },
      },
      animation: {
        "counter-rise": "counter-rise 450ms ease-out",
        "soft-glow": "soft-glow 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
