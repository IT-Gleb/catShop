<script setup lang="ts">
import type { TItem } from "~/mytypes/lib";
import { useCatStore } from "~/store/catStore";

const props = defineProps<{ param: TItem }>();
const thisItem = ref<TItem>(props.param);

const store = useCatStore();

const { setItemCount, DeleteItem, ItemCount, priceItem } = store;

const count = ref<number>(ItemCount(thisItem.value.id).value);
const thisPrice = ref<number>(priceItem(thisItem.value.id).value);

const plusClickButton = (event: Event) => {
  event.preventDefault();
  thisItem.value.count++;
  setItemCount(thisItem.value.id, thisItem.value.count);
};

const minusClickButton = (event: Event) => {
  event.preventDefault();
  thisItem.value.count--;
  setItemCount(thisItem.value.id, thisItem.value.count);
  if (thisItem.value.count < 1) {
    DeleteItem(thisItem.value.id);
  }
};

watchEffect(() => {
  count.value = ItemCount(thisItem.value.id).value;
  thisPrice.value = priceItem(thisItem.value.id).value;
});
</script>

<template>
  <div class="grid grid-cols-1 gap-y-[12px] text-center">
    <div
      class="font-neucha font-[400] text-[#141414] text-[13px]/[14px] tracking-[0.05em]"
    >
      Цена: <span class="text-[16px]/[18px]">{{ thisItem.price }} ₽</span>
    </div>
    <div class="flex items-center justify-center gap-x-2">
      <button
        @click="minusClickButton"
        class="w-[25px] h-[25px] bg-[#312525] text-white rounded-full active:scale-75"
      >
        -
      </button>
      <span
        class="font-neucha font-[400] text-[16px]/[18px] tracking-[0.05em] text-[#353535]"
        >{{ count }}</span
      >
      <button
        @click="plusClickButton"
        class="w-[25px] h-[25px] bg-[#312525] text-white rounded-full active:scale-75"
      >
        +
      </button>
    </div>
    <div
      class="font-neucha font-[400] text-[#141414] text-[13px]/[14px] tracking-[0.05em]"
    >
      Сумма: <span class="text-[16px]/[18px]">{{ thisPrice }} ₽</span>
    </div>
  </div>
</template>
