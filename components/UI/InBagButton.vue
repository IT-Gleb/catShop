<script setup lang="ts">
const theEmit = defineEmits(["activited"]);

const clickActivite = (event: Event) => {
  event.preventDefault();
  theEmit("activited");
};
</script>

<template>
  <button
    title="На главную"
    @click.stop="clickActivite"
    class="w-[100px] h-[35px] rounded-[8px] font-ptSansNarrow text-[15px]/[20px] font-[400] tracking-[0.04em] shadow-[0px_0px_12px_0px_#00000059] bg-[#312525] text-white active:scale-75"
  >
    В корзину
  </button>
</template>
