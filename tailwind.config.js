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
      keyframes: {
        fromRight: {
          "0%": { transform: "translateX(6500px)" },
          "100%": { transform: "translateX(0)" },
        },
        toRight: {
          "0%": { transform: "translateX(0)", opacity: "1" },
          "100%": { transform: "translateX(6500px)", opacity: "0" },
        },
        fromTop: {
          from: { transform: "translateY(-4500px)" },
          to: { transform: "translateY(0)" },
        },
        toTop: {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(-4500px)" },
        },
      },
      animation: {
        fromRight: "fromRight 0.35s ease",
        toRight: "toRight 0.6s linear",
        fromTop: "fromTop 0.35s ease",
        toTop: "toTop 0.35s ease",
      },
    },
  },
  plugins: [],
};
