/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        main: {
          DEFAULT: "#1b29aa",
        },
      },
    },
  },
  plugins: [],
};
