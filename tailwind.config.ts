import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "ink-black": "#0a0908",
        charcoal: "#14120f",
        graphite: "#201d19",
        wood: {
          1: "#241a12",
          2: "#2f2115",
          3: "#1a120c",
        },
        "off-white": "#f4efe4",
        "off-white-dim": "#e8e0cf",
        "text-dark": "#211d17",
        "text-dark-dim": "#55503f",
        gold: {
          DEFAULT: "#c6a15b",
          soft: "#d8bb84",
          deep: "#8a6a2f",
        },
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderColor: {
        goldline: "rgba(198,161,91,0.35)",
        "line-dark": "rgba(244,239,228,0.14)",
        "line-light": "rgba(33,29,23,0.14)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(.22,.61,.36,1)",
      },
    },
  },
  plugins: [],
};
export default config;
