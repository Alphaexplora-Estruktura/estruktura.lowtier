import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "estruktura-bg": "#EFEBE6",      // Light neutral/bone background
        "estruktura-accent": "#5c5048",  // Rich taupe/brown accent
        "estruktura-gold": "#8c7e71",    // Muted warm stone/gold equivalent
        "estruktura-cream": "#2A2725",   // Dark charcoal/brown for text on light backgrounds
      },
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        sans: ['"Lato"', "sans-serif"],
      },
      animation: {
        "fade-in-up": "fadeInUp 1s ease-out forwards",
        "slow-fade": "fadeIn 1.5s ease-in forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
