<script setup lang="ts">
import { useCatStore } from "~/store/catStore";

const theEmit = defineEmits(["minus", "plus"]);
const props = defineProps<{ id: number }>();

const store = useCatStore();
const { ItemCount } = store;

const thisCount = ref<number>(ItemCount(props.id).value);

const clickMinus = (event: Event) => {
  event.preventDefault();
  theEmit("minus");
};

const clickPlus = (event: Event) => {
  event.preventDefault();
  theEmit("plus");
};

watchEffect(() => {
  thisCount.value = ItemCount(props.id).value;
});
</script>

<template>
  <div class="w-fit p-1 flex items-center justify-center gap-x-[12px]">
    <button
      @click.stop="clickMinus"
      class="w-[30px] h-[30px] bg-white p-[7px] font-bold text-black rounded-full active:scale-75"
    >
      <img src="/assets/images/body/minus.svg" alt="minus" loading="lazy" />
    </button>
    <span class="font-neucha font-[400] text-[19px]/[20px] tracking-[0.05em]">{{
      thisCount
    }}</span>
    <button
      @click.stop="clickPlus"
      class="w-[30px] h-[30px] relative bg-white p-[7px] font-bold text-black rounded-full active:scale-75"
    >
      <img
        class="block absolute left-[48%] top-[50%] translate-x-[-50%] translate-y-[-48%]"
        src="/assets/images/body/plus.svg"
        alt="plus"
        loading="lazy"
      />
    </button>
  </div>
</template>
