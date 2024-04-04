import { defineStore } from "pinia";

export const useMobileMenuStore = defineStore("mobileMenu", () => {
  const Active = ref<boolean>(false);
  const getActive = computed(() => {
    return Active.value;
  });
  function setActive(paramActive: boolean) {
    Active.value = paramActive;
  }

  return {
    getActive,
    setActive,
  };
});
