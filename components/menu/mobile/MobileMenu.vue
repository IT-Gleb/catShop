<script setup lang="ts">
import { useMobileMenuStore } from "~/store/mobileMenuStore";
import { useCatStore } from "~/store/catStore";

const catStore = useCatStore();
const { isActive } = storeToRefs(catStore);
const { setActive, setPanel } = catStore;

const callStore = (event: Event) => {
  event.preventDefault();
  if (isActive.value) {
    setActive(false);
  } else {
    setPanel(true);
    setActive(true);
  }
};
const store = useMobileMenuStore();

const { getActive } = storeToRefs(store);
</script>

<template>
  <section
    v-if="getActive"
    class="inline-block w-[100%] min-h-[5vh] bg-slate-100 font-montserrat p-4 lg:hidden shadow-[0px_4px_4px_0_rgba(0,_0,_0,_0.25)]"
    :class="getActive ? ' animate-fromRight' : ' animate-toTop'"
  >
    <ul
      class="flex items-center justify-center gap-x-3 text-[10px]/[16px] font-bold uppercase"
    >
      <li class="block cursor-pointer md:hidden">
        <NuxtLink class="flex items-start justify-start" @click="callStore">
          <img
            class="block w-[14px] h-[14px]"
            src="/assets/images/body/shopping-bag.svg"
            alt="bag"
            loading="lazy"
          />
          <span> Корзина </span>
        </NuxtLink>
      </li>
      <li><NuxtLink to="/Cats">Котики</NuxtLink></li>
      <li><NuxtLink to="/RunPage">Доставка</NuxtLink></li>
      <li><NuxtLink to="/ActionPage">Акции</NuxtLink></li>
      <li><NuxtLink to="/ContactsPage">Контакты</NuxtLink></li>
    </ul>
  </section>
</template>
