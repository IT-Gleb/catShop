<script setup lang="ts">
import { useCatStore } from "~/store/catStore";

const store = useCatStore();
const { isActive } = storeToRefs(store);
const { setActive, setPanel } = store;

const callStore = (event: Event) => {
  event.preventDefault();
  if (isActive.value) {
    setActive(false);
  } else {
    setPanel(true);
    setActive(true);
  }
};
</script>

<template>
  <button
    title="Корзина"
    @click="callStore"
    class="w-[42px] h-[42px] bg-white rounded-full overflow-hidden active:scale-75"
  >
    <div class="w-[100%] h-[100%] relative">
      <img
        class="absolute left-[50%] top-[19%] translate-x-[-52%] translate-y-[-19%]"
        src="/assets/images/header/bag-r.svg"
        alt="bag"
        loading="lazy"
      />
      <img
        class="absolute left-[49%] top-[52%] translate-x-[-49%] translate-y-[-52%]"
        src="/assets/images/header/bag.svg"
        alt="bag"
        loading="lazy"
      />
    </div>
  </button>
</template>
