<script setup lang="ts">
import type { TItem } from "~/mytypes/lib";

const props = defineProps<{ pItem: TItem }>();
</script>

<template>
  <div
    class="w-[270px] h-[390px] overflow-hidden rounded-[8px] flex flex-col py-[30px] bg-[#FAFAFA] shadow-[0px_0px_12px_0px_#00000040]"
  >
    <header class="w-[100%]">
      <div class="w-fit mx-auto flex items-start justify-stretch">
        <img src="/assets/images/body/cat.png" alt="catItem" loading="lazy" />
        <UIHeartButton :is-heart="pItem.heart" />
      </div>
    </header>
    <main class="w-[100%] px-[30px] mt-6 h-[30%] flex-auto">
      <div class="flex items-start justify-between gap-x-[20px]">
        <span
          class="font-neucha font-[400] text-[19px]/[25px] tracking-[0.1em] text-[#141414] uppercase"
          >{{ pItem.name }}</span
        >
        <span
          class="font-myArial text-[#808080] text-[13px]/[15px] font-[400] tracking-[0.04em]"
          >{{ pItem.weight }}г.</span
        >
      </div>
      <p class="mt-[20px]">
        {{ pItem.description }}
      </p>
    </main>
    <footer class="w-[100%] px-[30px]">
      <div class="flex items-center justify-between">
        <span
          class="font-neucha font-[400] text-[19px]/[21px] tracking-[0.05em] text-[#141414]"
          >{{ pItem.price }} ₽</span
        >
        <UIInBagButton />
      </div>
    </footer>
  </div>
</template>
