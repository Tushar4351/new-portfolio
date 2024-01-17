/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      purple: "#7e5bef",
      black1: "#343434",
      principal: "#ffa97a",
      Blanc: "#fcfafa",
      gray1: "#C5C6D0",
      pink1: "#DE3163",
      green1: "#aac402",
    },

    fontFamily: {
      argenExtra: ["ArgentumSans-ExtraBold"],
      argenBold: ["ArgentumSans-Bold"],
      argenMed: ["ArgentumSans-Medium"],
      argenSemiBold: ["ArgentumSans-SemiBold"],
    },
    extend: {
      screens: {
        xsm: "450px",
        xll: "1380px",
      },
    },
  },
  plugins: [],
};
