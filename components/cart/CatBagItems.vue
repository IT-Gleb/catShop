<script setup lang="ts">
import { useCatStore } from "~/store/catStore";

const store = useCatStore();
const { itemsSize, allItems } = storeToRefs(store);
</script>

<template>
  <div
    v-if="itemsSize > 0"
    class="mt-[30px] px-[4px] lg:px-[45px] h-[62vh] overflow-x-hidden overflow-y-auto"
  >
    <div class="grid grid-cols-1 gap-y-[6px]">
      <TransitionGroup name="items">
        <CartCatBagItem
          v-for="item in allItems"
          :key="item.id"
          :param-item="item"
        />
      </TransitionGroup>
    </div>
  </div>
</template>

<style scoped>
.items-move,
.items-enter-active,
.items-leave-active {
  transition: all 0.35s ease;
}

.items-enter-from,
.items-leave-to {
  opacity: 0;
  transform: scaleX(25%);
}

.items-leave-active {
  position: absolute;
}
</style>
