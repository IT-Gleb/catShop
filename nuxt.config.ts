// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["~/assets/css/tailwind.css"],
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  pinia: {
    storesDirs: ["~/store/**"],
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
