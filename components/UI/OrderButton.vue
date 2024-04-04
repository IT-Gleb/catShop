<script setup lang="ts">
const theEmit = defineEmits(["orderForm"]);

const clickOrder = (event: Event) => {
  event.preventDefault();
  theEmit("orderForm");
};
</script>

<template>
  <button
    title="Оформить заказ"
    @click="clickOrder"
    class="w-100% border-[1px] border-[#AFAFAF] text-white bg-[#312525] py-2 lg:py-[20px] px-3 lg:px-[24px] font-neucha text-[16px]/[18px] lg:text-[18px]/[20px] font-[400] tracking-[0.05em] rounded-[8px] h-[58px] shadow-[0px_0px_12px_0px_#00000040] active:scale-75"
  >
    Оформить заказ
  </button>
</template>
