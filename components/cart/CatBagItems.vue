<script setup lang="ts">
import { useCatStore } from "~/store/catStore";

const store = useCatStore();
const { itemsSize, allItems } = storeToRefs(store);
</script>

<template>
  <div v-if="itemsSize > 0" class="mt-[30px] px-[45px]">
    <div v-for="item in allItems" :key="item.id">
      {{ item.name + "  -  " + item.count }}
      <div>{{ item.description }}</div>
    </div>
  </div>
</template>
