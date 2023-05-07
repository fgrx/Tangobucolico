/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  theme: {
    extend: {
      colors: {
        primary: "#65a30d",
        primaryMedium: "#b0cf76",
        primaryLight: "#dce6ca",
        secondary: "#b91c1c",
        secondaryLight: "#fecaca",
        backgroundDarker: "#f4efd9",
        background: "#fdfaee",
        dark: "#414141",
        light: "#fff",
        menuLight: "#b0cf76",
        menuDark: "#65a30d",
      },
    },
  },
  safelist: [
    "bg-primary",
    "bg-primaryMedium",
    "bg-primaryLight",
    "bg-secondary",
    "bg-secondaryLight",
    "bg-background",
    "bg-backgroundDarker",
    "bg-dark",
    "bg-menu",
  ],
  plugins: [require("@tailwindcss/forms")],
};
