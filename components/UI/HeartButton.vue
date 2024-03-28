<script setup lang="ts">
const props = withDefaults(defineProps<{ isHeart: boolean }>(), {
  isHeart: false,
});

const isHearted = ref<boolean>(props.isHeart);
const clickHeart = (event: Event) => {
  event.preventDefault();
  isHearted.value = !isHearted.value;
};
</script>

<template>
  <button
    class="w-[18px] h-[18px] overflow-hidden active:scale-75"
    @click="clickHeart"
  >
    <img
      v-if="!isHearted"
      src="/assets/images/body/heart-null.svg"
      alt="heart"
      loading="lazy"
    />
    <img
      v-else="isHearted"
      src="/assets/images/body/heart.svg"
      alt="heart"
      loading="lazy"
    />
  </button>
</template>
