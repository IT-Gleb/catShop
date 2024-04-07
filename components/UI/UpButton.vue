<script setup lang="ts">
const clickUp = () => {
  scrollTo(0, 0);
};
</script>

<template>
  <button
    @click.prevent="clickUp"
    title="К началу страницы"
    class="w-[60px] h-[60px] bg-[#312525] px-4 active:scale-75 rounded-full"
  >
    <img
      class="w-[32px] h-[32px]"
      src="/assets/images/body/arrow-up.svg"
      alt="up"
      loading="lazy"
    />
  </button>
</template>
