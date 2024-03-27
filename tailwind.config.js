/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "~/app.vue",
    "~/components/**/*.{vue,ts,html}",
    "~/pages/**/*.{vue,ts,html}",
    "~/layout/**/*.{vue,ts}",
  ],
  theme: {
    screens: {
      sm: "320px",
      md: "568px",
      lg: "980px",
      xl: "1144px",
      "2xl": "1280px",
      "3xl": "1530px",
      "4xl": "1920px",
    },
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
        neucha: ["Neucha"],
        ptSansNarrow: ["PTSansNarrow"],
        myArial: ["Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
