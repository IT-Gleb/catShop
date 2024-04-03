<script setup lang="ts">
import vIntercept from "~/mytypes/InterceptDirective";

const { pending, error, data } = await useAsyncData(
  "catItems",
  async () => await $fetch("/api/items")
);

const { isShow, show, hide } = forButton();
</script>

<template>
  <div v-if="pending">Loading...</div>
  <div>
    <div v-intercept="{ func: hide }"></div>
    <section v-if="!pending && !error" class="mt-[50px] w-fit mx-auto gridData">
      <ItemCat v-for="item in data" :key="item.id" :p-item="item" />
      <div v-if="isShow" class="fixed bottom-16 right-8 animate-fromTop">
        <UIUpButton />
      </div>
    </section>
    <div v-intercept="{ func: show }"></div>
  </div>
</template>

<style scoped>
.gridData {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7;
}
</style>
