import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "estruktura-bg": "#EAE0D5",      // Light neutral taupe background
        "estruktura-accent": "#D8C3A5",  // Mocha accent overlay
        "estruktura-gold": "#8c7e71",    // Muted warm stone
        "estruktura-cream": "#F4F1EA",   // Pure cream for dark bg text
        "estruktura-text": "#1C1915",    // Dark contrast text
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
