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
        backgroundDarker: "#fffbeb",
        background: "#fdfaee",
        dark: "#2f2d2e",
        light: "#fff",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
