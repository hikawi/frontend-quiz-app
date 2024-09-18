/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        xs: "360px",
      },
      colors: {
        purple: "#A729F5",
        "dark-navy": "#313E51",
        navy: "#3B4D66",
        "gray-navy": "#626C7F",
        "light-blue": "#ABC1E1",
        "light-gray": "#F4F6FA",
        white: "#FFFFFF",
        green: "#26D782",
        red: "#EE5454",
        html: "#FFF1E9",
        css: "#E0FDEF",
        js: "#EBF0FF",
        accessibility: "#F6E7FF",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
