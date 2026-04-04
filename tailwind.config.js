/** @type {import('tailwindcss').Config} */
/**
 * Neutrals + accent pulled from live site theme (Atelier “accent” / .accent-bg):
 * https://tampabaylaser.com/
 */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 45s linear infinite",
      },
      colors: {
        cream: "#ffffff",
        ink: "#222222",
        charcoal: "#222222",
        section: "#f7f7f7",
        accent: {
          DEFAULT: "#dcc16c",
          dark: "#222222",
        },
      },
      fontFamily: {
        sans: ["\"Outfit\"", "system-ui", "sans-serif"],
        display: ["\"Fraunces\"", "Georgia", "serif"],
      },
      fontSize: {
        "display-sm": ["2.75rem", { lineHeight: "1.06", letterSpacing: "-0.02em" }],
        display: ["3.5rem", { lineHeight: "1.04", letterSpacing: "-0.025em" }],
        "display-lg": ["4.25rem", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
      },
      boxShadow: {
        lift: "0 22px 50px -18px rgba(34, 34, 34, 0.18)",
        card: "0 1px 0 rgba(255,255,255,0.6) inset, 0 18px 40px -28px rgba(34, 34, 34, 0.2)",
      },
    },
  },
  plugins: [],
};
