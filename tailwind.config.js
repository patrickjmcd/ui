const colors = require("tailwindcss/colors");

/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // fontSize: {
    //   xs: '12px',
    //   sm: '14px',
    //   md: '16px',
    //   lg: '20px',
    //   h5: '24px',
    //   h4: '32px',
    //   h3: '40px',
    //   h2: '48px',
    //   h1: '60px',
    // },
    brightness: {
      88: ".88",
      92: ".92",
    },
    extend: {
      backgroundImage: {
        "circuit-board": "url('/img/circuit-board.svg')",
      },
      colors: {
        // primary: "rgb(103, 70, 140)",
        // dark: "rgb(46,46,46)",
        // "dark-bg": "#444444",
        // "light-bg": "#eeeeee",
        // "navbar-bg-dark": "#5f6360",
        // "navbar-bg": "rgb(46,46,46)",
        // "banner-bg-dark": "#626262",
        // "banner-bg": "#ededed",
        // "sidebar-bg-dark": "#444444",
        // "sidebar-bg": "#eeeeee",
        // "hero-bg": "#999999",
        // "hero-bg-dark": "#999999",
        // "footer-bg": "#999999",
        // "footer-bg-dark": "#999999",
        // "primary-1": "rgb(168 85 247)",
        // "secondary-1": "#4e4857",
        // "neutral-1": "#ffffff",
        // "neutral-2": "#ededed",
        // "neutral-3": "#6b7a79",
        // "neutral-4": "#4d2d68",
        // "neutral-5": "#000000",
        // "accent-1": "rgb(128, 84, 170)",
        // "accent-2": "#c4d8d0",
        // "accent-3": "#00624a",
        // "accent-4": "#fbd500",
        // "accent-5": "#f7a801",
        // "accent-6": "#ee8900",
        // "accent-7": "#d1a3ff",
        // "accent-8": "#aa66ee",
        // "accent-9": "#733caa",
        // "accent-10": "#84dece",
        // error: "#e85500",
        // success: "#1d864b",
        // emphasis: "#e85500",
      },
      borderRadius: {
        half: "50%",
      },
      animation: {
        "radix-expand": "accordion-down 0.2s ease-in-out",
        "radix-collapse": "accordion-up 0.2s ease-in-out",
      },
      keyframes: {
        "accordion-up": {
          "0%": { height: "var(--radix-accordion-content-height)" },
          "100%": { height: "0" },
        },
        "accordion-down": {
          "0%": { "max-height": "0" },
          "100%": { "max-height": "var(--radix-accordion-content-height)" },
        },
      },
    },
  },
  plugins: [],
};
