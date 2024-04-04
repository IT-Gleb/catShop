<script setup lang="ts">
const props = withDefaults(defineProps<{ title: string }>(), { title: "lala" });
</script>

<template>
  <div>
    <button
      :title="props.title"
      class="min-w-[80px] h-[44px] xl:min-w-[140px] xl:h-[64px] rounded-[100px] py-[12px] px-[18px] xl:py-[16px] xl:px-[32px] uppercase font-neucha text-[16px]/[20px] xl:text-[28px]/[32px] text-[#B3A296] hover:bg-[#312525] focus:bg-[#312525] hover:text-white focus:text-white active:scale-75"
    >
      {{ props.title }}
    </button>
  </div>
</template>
