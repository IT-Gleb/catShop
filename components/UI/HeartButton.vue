<script setup lang="ts">
import { useCatStore } from "~/store/catStore";

const props = withDefaults(
  defineProps<{ isHeart: boolean; isActive: boolean; paramId: number }>(),
  {
    isHeart: false,
    isActive: false,
    paramId: 0,
  }
);

const store = useCatStore();
const { setItemHeart, heartItem } = store;

const isHearted = ref<boolean>(props.isHeart);

const clickHeart = (event: Event) => {
  event.preventDefault();
  isHearted.value = !isHearted.value;

  setItemHeart(props.paramId, isHearted.value);
};

watch(heartItem(props.paramId), () => {
  isHearted.value = heartItem(props.paramId).value;
});
</script>

<template>
  <button
    class="w-[18px] h-[18px] overflow-hidden active:scale-75"
    @click="clickHeart"
  >
    <img
      v-if="!isHearted && !isActive"
      src="/assets/images/body/heart-null.svg"
      alt="heart"
      loading="lazy"
    />

    <svg
      v-if="!isHearted && isActive"
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.49999 14.1655C7.28644 14.1655 7.08056 14.0881 6.92011 13.9476C6.31415 13.4177 5.72993 12.9198 5.21449 12.4806L5.21186 12.4783C3.70067 11.1905 2.3957 10.0784 1.48773 8.98281C0.472755 7.75806 0 6.59683 0 5.32825C0 4.09573 0.42263 2.95864 1.18995 2.12631C1.96643 1.28414 3.03188 0.820312 4.19036 0.820312C5.05622 0.820312 5.84918 1.09406 6.54715 1.63387C6.8994 1.90636 7.21869 2.23984 7.49999 2.62882C7.7814 2.23984 8.10057 1.90636 8.45293 1.63387C9.15091 1.09406 9.94387 0.820312 10.8097 0.820312C11.9681 0.820312 13.0337 1.28414 13.8101 2.12631C14.5775 2.95864 15 4.09573 15 5.32825C15 6.59683 14.5273 7.75806 13.5124 8.9827C12.6044 10.0784 11.2995 11.1904 9.78857 12.4781C9.27221 12.918 8.68708 13.4167 8.07974 13.9478C7.91941 14.0881 7.71342 14.1655 7.49999 14.1655ZM4.19036 1.69899C3.28021 1.69899 2.44411 2.06223 1.83586 2.72186C1.21856 3.39146 0.878561 4.31705 0.878561 5.32825C0.878561 6.39519 1.2751 7.3494 2.16419 8.42216C3.02352 9.45911 4.30171 10.5484 5.78166 11.8096L5.78441 11.8119C6.30179 12.2528 6.8883 12.7527 7.49873 13.2865C8.11282 12.7517 8.70024 12.251 9.21866 11.8094C10.6985 10.5481 11.9766 9.45911 12.8359 8.42216C13.7249 7.3494 14.1214 6.39519 14.1214 5.32825C14.1214 4.31705 13.7814 3.39146 13.1641 2.72186C12.556 2.06223 11.7198 1.69899 10.8097 1.69899C10.143 1.69899 9.53085 1.91093 8.99035 2.32887C8.50867 2.70149 8.17313 3.17253 7.9764 3.50212C7.87524 3.67161 7.69717 3.77277 7.49999 3.77277C7.3028 3.77277 7.12473 3.67161 7.02357 3.50212C6.82696 3.17253 6.49142 2.70149 6.00962 2.32887C5.46912 1.91093 4.85698 1.69899 4.19036 1.69899Z"
        fill="violet"
      />
    </svg>

    <img
      v-if="isHearted"
      src="/assets/images/body/heart.svg"
      alt="heart"
      loading="lazy"
    />
  </button>
</template>
