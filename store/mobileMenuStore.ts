import { defineStore } from "pinia";

export const useMobileMenuStore = defineStore("mobileMenu", () => {
  const Active = ref<boolean>(false);
  const isOnce = ref<boolean>(true);
  const timerRef = ref<any>(-1);

  const getActive = computed(() => {
    return Active.value;
  });

  const getOnce = computed(() => {
    return isOnce.value;
  });

  function setActive(paramActive: boolean) {
    Active.value = paramActive;
    isOnce.value = Active.value;

    if (isOnce.value) {
      timerRef.value = setTimeout(() => {
        isOnce.value = false;
        if (timerRef.value !== -1) {
          clearTimeout(timerRef.value);
          timerRef.value = -1;
        }
      }, 500);
    }
  }

  return {
    getActive,
    getOnce,
    setActive,
  };
});
