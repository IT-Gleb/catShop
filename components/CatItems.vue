<script setup lang="ts">
const { pending, error, data } = await useAsyncData("catItems", () =>
  $fetch("/api/items")
);
</script>

<template>
  <div v-if="pending">Loading...</div>
  <section v-if="!pending && !error" class="mt-[50px] w-fit mx-auto gridData">
    <ItemCat v-for="item in data" :key="item.id" :p-item="item" />
  </section>
</template>

<style scoped>
.gridData {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7;
}
</style>
