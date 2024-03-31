<script setup lang="ts">
const isSelected = ref<boolean>(false);
</script>

<template>
  <div
    class="before:content-[url('/assets/images/body/icon-phone.svg')] before:w-[32px] before:h-[32px] before:p-1 before:mr-1 flex items-start outline-none border-b-2"
    :class="isSelected ? 'border-b-[#FF0000]' : 'border-b-[#D9D9D9]'"
  >
    <input
      class="w-[100%] h-[32px] px-2 py-2 outline-none bg-white font-[300] text-[#4C4C4C] text-[16px]/[18px] placeholder-shown:first-letter:uppercase"
      type="tel"
      name="phone"
      id="phone"
      placeholder="Tелефон..."
      @focus="() => (isSelected = true)"
      @blur="() => (isSelected = false)"
    />
  </div>
</template>
