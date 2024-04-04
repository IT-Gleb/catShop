<script setup lang="ts">
import MobileMenu from "~/components/menu/mobile/MobileMenu.vue";
</script>

<template>
  <NuxtLoadingIndicator color="navy" />

  <MobileMenu />
  <MainWrapper>
    <div>
      <CartCatBag></CartCatBag>
      <MenuMainMenu />
      <CatItems />
    </div>
  </MainWrapper>
</template>
