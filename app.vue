<script setup lang="ts">
useHead({
  htmlAttrs: { lang: "ru" },
  link: [{ rel: "icon", type: "image/x-icon", href: "favicon.ico" }],
});
useSeoMeta({
  charset: "utf-8",
  viewport: "width=device-width, initial-scale=1",
  title: "CatShop::Верстка и программирование by Gleb Torgashin. March 2024.",
  description: "Верстка и программирование by Gleb Torgashin. March 2024.",
  ogDescription: "Верстка и программирование by Gleb Torgashin. March 2024.",

  ogImage: {
    url: "/assets/images/cat1.png",
    width: 24,
    height: 24,
    type: "image/png",
  },
});
</script>
<template>
  <NuxtLoadingIndicator color="blue" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
