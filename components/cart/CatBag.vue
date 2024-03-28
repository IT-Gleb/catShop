<script setup lang="ts">
import { useCatStore } from "~/store/catStore";

const store = useCatStore();
const { isActive } = storeToRefs(store);
const { setActive } = store;

const clickDeactivate = (event: Event) => {
  event.preventDefault();

  setActive(false);
};

//console.log(props.isActive);
</script>

<template>
  <Teleport to="body">
    <div
      v-if="isActive"
      @click.stop="clickDeactivate"
      class="fixed left-0 top-0 bottom-0 right-0 bg-black/70 z-10"
    >
      <div
        class="w-[100%] h-[100%] absolute left-0 top-0 z-20 backdrop-blur-sm"
      ></div>
    </div>
  </Teleport>
</template>
