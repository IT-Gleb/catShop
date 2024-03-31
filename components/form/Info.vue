<script setup lang="ts">
const isSelected = ref<boolean>(false);
</script>

<template>
  <div
    class="mt-[18px] flex items-start justify-start gap-x-1 border-b-2 outline-none before:w-[32px] before:h-[32px] before:p-2 before:content-[url('/assets/images/body/info.svg')]"
    :class="isSelected ? 'border-b-[#FF0000]' : ' border-b-[#D9D9D9]'"
  >
    <input
      class="w-[100%] h-[32px] outline-none bg-white text-[#4C4C4C] font-[300] text-[16px]/[18px] p-2"
      type="text"
      name="info"
      id="info"
      placeholder="Дополнительная информация..."
      @focus="() => (isSelected = true)"
      @blur="() => (isSelected = false)"
    />
  </div>
</template>
