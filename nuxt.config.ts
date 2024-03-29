// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["~/assets/css/tailwind.css"],
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "nuxt-lodash"],
  pinia: {
    storesDirs: ["~/store/**"],
  },
  lodash: {
    prefix: "_",
    prefixSkip: ["string"],
    upperAfterPrefix: false,
    exclude: ["map"],
    alias: [
      ["camelCase", "stringToCamelCase"], // => stringToCamelCase
      ["kebabCase", "stringToKebab"], // => stringToKebab
      ["isDate", "isLodashDate"], // => _isLodashDate
    ],
  },

  tailwindcss: {
    cssPath: ["~/assets/css/tailwind.css", { injectPosition: "last" }],
    configPath: "~/tailwind.config.js",
    exposeConfig: { level: 4 },

    config: {},

    viewer: true,
  },

  components: [
    {
      path: "~/components",
    },
  ],
});
