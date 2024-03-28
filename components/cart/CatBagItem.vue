<script setup lang="ts">
import type { TItem } from "~/mytypes/lib";

const props = defineProps<{ paramItem: TItem }>();

const thisItem = ref<TItem>(props.paramItem);
</script>

<template>
  <div v-if="thisItem">
    <div
      class="min-w-[200px] h-[112px] bg-[#FAFAFA] shadow-[0px_0px_12px_0px_#00000040] rounded-[8px] pt-[15px] pb-[15px] pl-[15px] pr-0 overflow-hidden"
    >
      <div class="w-[100%] grid grid-cols-[80px_3fr_2fr_1fr] gap-x-[25px]">
        <div>
          <img
            class="block w-[80px]"
            src="/assets/images/body/cat_80x60.png"
            alt="cat"
            loading="lazy"
          />
        </div>
        <div>
          <div class="flex itemx-start justify-between">
            <span
              class="font-neucha font-[400] text-[16px]/[25px] tracking-[0.1em] text-[#141414] uppercase"
              >{{ thisItem.name }}</span
            >
            <UIHeartButton :is-heart="thisItem.heart" />
          </div>

          <p
            class="col-span-2 font-ptSansNarrow text-[#717171] text-[13px]/[16px] first-letter:uppercase"
          >
            {{ thisItem.description }}
            <span class="block">({{ thisItem.weight }}) г.</span>
          </p>
        </div>
        <div>
          <CartMinusPlusBag :param="thisItem" />
        </div>
        <div>
          <CartDeleteFromBag :param-id="thisItem.id" />
        </div>
      </div>
    </div>
  </div>
</template>
