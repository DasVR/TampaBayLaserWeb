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
      spacing: {
        /** Horizontal page gutters — scales with viewport */
        page: "clamp(0.875rem, 0.55rem + 1.6vw, 2rem)",
        /** Vertical section rhythm */
        section: "clamp(3.25rem, 2.15rem + 4.8vw, 8rem)",
        hero: "clamp(2.25rem, 1.5rem + 2.75vw, 6rem)",
      },
      fontSize: {
        "display-sm": ["2.75rem", { lineHeight: "1.06", letterSpacing: "-0.02em" }],
        display: ["3.5rem", { lineHeight: "1.04", letterSpacing: "-0.025em" }],
        "display-lg": ["4.25rem", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "fluid-hero": [
          "clamp(1.875rem, 1.2rem + 3.1vw, 4.125rem)",
          { lineHeight: "1.06", letterSpacing: "-0.02em" },
        ],
        "fluid-page-title": [
          "clamp(2rem, 1.45rem + 2.2vw, 3.5rem)",
          { lineHeight: "1.06", letterSpacing: "-0.02em" },
        ],
        "fluid-section": [
          "clamp(1.5rem, 1.12rem + 1.5vw, 2.75rem)",
          { lineHeight: "1.08", letterSpacing: "-0.02em" },
        ],
        "fluid-section-lg": [
          "clamp(1.625rem, 1.15rem + 1.85vw, 3.125rem)",
          { lineHeight: "1.06", letterSpacing: "-0.02em" },
        ],
        "fluid-subhead": [
          "clamp(1.1875rem, 1rem + 0.75vw, 1.875rem)",
          { lineHeight: "1.2", letterSpacing: "-0.02em" },
        ],
        "fluid-card-title": [
          "clamp(1.0625rem, 0.94rem + 0.45vw, 1.375rem)",
          { lineHeight: "1.25" },
        ],
        "fluid-body": [
          "clamp(0.9375rem, 0.88rem + 0.32vw, 1.125rem)",
          { lineHeight: "1.7" },
        ],
        "fluid-body-lg": [
          "clamp(1rem, 0.9rem + 0.38vw, 1.1875rem)",
          { lineHeight: "1.65" },
        ],
        "fluid-caps": [
          "clamp(0.5625rem, 0.5rem + 0.22vw, 0.6875rem)",
          { lineHeight: "1.45", letterSpacing: "0.2em" },
        ],
        "fluid-caps-wide": [
          "clamp(0.5625rem, 0.48rem + 0.28vw, 0.6875rem)",
          { lineHeight: "1.45", letterSpacing: "0.32em" },
        ],
        "fluid-caps-tight": [
          "clamp(0.5625rem, 0.52rem + 0.15vw, 0.625rem)",
          { lineHeight: "1.4", letterSpacing: "0.18em" },
        ],
        "fluid-brand": [
          "clamp(0.6875rem, 0.62rem + 0.28vw, 0.875rem)",
          { lineHeight: "1.25", letterSpacing: "0.18em" },
        ],
        "fluid-stat": [
          "clamp(1.375rem, 1rem + 1.5vw, 2.25rem)",
          { lineHeight: "1.1" },
        ],
        "fluid-stat-label": [
          "clamp(0.5625rem, 0.48rem + 0.3vw, 0.6875rem)",
          { lineHeight: "1.35", letterSpacing: "0.16em" },
        ],
        "fluid-eyebrow": [
          "clamp(0.5625rem, 0.5rem + 0.22vw, 0.625rem)",
          { lineHeight: "1.45", letterSpacing: "0.36em" },
        ],
        "fluid-caption": [
          "clamp(0.5625rem, 0.5rem + 0.18vw, 0.625rem)",
          { lineHeight: "1.5", letterSpacing: "0.18em" },
        ],
      },
      colors: {
        cream: "#FAF8F4",
        ink: "#222222",
        charcoal: "#222222",
        section: "#f7f7f7",
        accent: {
          DEFAULT: "#dcc16c",
          dark: "#222222",
        },
      },
      fontFamily: {
        sans: ['"Outfit"', "system-ui", "sans-serif"],
        display: ['"Fraunces"', "Georgia", "serif"],
      },
      boxShadow: {
        lift: "0 22px 50px -18px rgba(34, 34, 34, 0.18)",
        card: "0 1px 0 rgba(255,255,255,0.6) inset, 0 18px 40px -28px rgba(34, 34, 34, 0.2)",
      },
    },
  },
  plugins: [],
};
