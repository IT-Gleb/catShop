<script setup lang="ts">
import { useCatStore } from "~/store/catStore";

const store = useCatStore();
const { setActive } = store;

const clickButton = (event: Event) => {
  event.preventDefault();
  setActive(false);
};
</script>

<template>
  <button
    title="Вернуться к покупкам"
    @click="clickButton"
    class="border-[1px] border-[#AFAFAF] bg-white py-[20px] px-[24px] font-neucha text-[18px]/[20px] font-[400] tracking-[0.05em] rounded-[8px] text-black h-[58px] shadow-[0px_0px_12px_0px_#00000040] active:scale-75"
  >
    Вернуться к покупкам
  </button>
</template>
