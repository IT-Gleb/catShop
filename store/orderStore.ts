import { defineStore } from "pinia";

export const useOrder = defineStore("orderForm", () => {
  const isActive = ref<boolean>(false);

  const getActive = computed(() => {
    return isActive.value;
  });

  function setOrderActive(param: boolean) {
    isActive.value = param;
  }

  return {
    getActive,
    setOrderActive,
  };
});
