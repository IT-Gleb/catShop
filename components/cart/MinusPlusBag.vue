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
        class="w-[25px] h-[25px] bg-[#312525] text-white rounded-full relative active:scale-75"
      >
        <div
          class="absolute left-[50%] top-[50%] translate-x-[-50%] translate-t-[-50%]"
        >
          <svg
            width="14"
            height="2"
            viewBox="0 0 14 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.3337 1.00024H1.66699"
              stroke="#FFFFFF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
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
