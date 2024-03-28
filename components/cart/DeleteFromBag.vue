<script setup lang="ts">
import { useCatStore } from "~/store/catStore";

const props = defineProps<{ paramId: number }>();

const store = useCatStore();
const { DeleteItem } = store;

const deleteClickButton = (event: Event) => {
  event.preventDefault();
  DeleteItem(props.paramId);
};
</script>

<template>
  <div>
    <div class="w-[100%] h-[100%] overflow-hidden">
      <div
        @click="deleteClickButton"
        class="bg-black w-[45px] h-[64px] rounded-[200px_0px_0px_200px] ml-auto cursor-pointer relative"
      >
        <img
          class="absolute left-[50%] top-[48%] translate-x-[-50%] translate-y-[-48%]"
          src="/assets/images/body/trash.svg"
          alt="bag"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>
