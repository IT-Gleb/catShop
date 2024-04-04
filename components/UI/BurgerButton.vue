<script setup lang="ts">
import { useMobileMenuStore } from "~/store/mobileMenuStore";
const store = useMobileMenuStore();

const { setActive } = store;
const { getActive } = storeToRefs(store);

const clickMenu = () => {
  setActive(!getActive.value);
};
</script>

<template>
  <button @click.prevent="clickMenu" class="w-[18px] h-[16px] active:scale-75">
    <img
      src="/assets/images/header/burger-menu.svg"
      alt="menu"
      loading="lazy"
    />
  </button>
</template>
