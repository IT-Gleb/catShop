<script setup lang="ts">
import { delayButton } from "~/mytypes/lib";
import { useCatStore } from "~/store/catStore";

const store = useCatStore();
const { setActive, setPanel } = store;
const timerRef = ref<any>(-1);

const clickButton = (event: Event) => {
  event.preventDefault();
  setPanel(false); //Закрыть панедб
  timerRef.value = setTimeout(() => {
    setActive(false);
  }, delayButton);
};

onUnmounted(() => {
  if (timerRef.value !== -1) {
    clearTimeout(timerRef.value);
  }
});
</script>

<template>
  <button
    title="Вернуться к покупкам"
    @click="clickButton"
    class="border-[1px] border-[#AFAFAF] bg-white py-[8px] px-[12px] lg:py-[20px] lg:px-[16px] xl:px-[18px] 2xl:px-[24px] font-neucha whitespace-nowrap text-[14px]/[16px] lg:text-[16px]/[18px] 2xl:text-[18px]/[20px] font-[400] tracking-[0.05em] rounded-[8px] text-black h-[58px] shadow-[0px_0px_12px_0px_#00000040] active:scale-75 overflow-hidden"
  >
    Вернуться к покупкам
  </button>
</template>
