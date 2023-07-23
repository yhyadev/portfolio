const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["JetBrains Mono", ...defaultTheme.fontFamily.sans]
      }
    },
  },

  daisyui: {
    themes: [
      {
        theme: {
          primary: "#feae00",
          secondary: "#2d2d2d",
          accent: "#fb6000",
          neutral: "#2a323c",
          "base-100": "#121212",
          "base-content": "#fafafa",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
