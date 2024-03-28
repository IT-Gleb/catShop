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
      <div
        @click.stop="
          () => {
            return true;
          }
        "
        class="w-[612px] h-[100%] bg-[#EBE1D7] relative z-30 ml-auto animate-fromRight"
      >
        <div
          class="w-fit mx-auto text-[#312525] flex items-center justify-center gap-x-[40px] pt-[40px]"
        >
          <span class="w-[8px] h-[8px] rounded-full bg-[#312525]"></span>
          <h2 class="uppercase font-neucha text-[48px]/[52px] font-[400]">
            корзина
          </h2>
          <span class="w-[8px] h-[8px] rounded-full bg-[#312525]"></span>
        </div>
        <!-- Заказы в корзине -->
        <CartCatBagItems />

        <!-- //Кнопки заказов -->
        <div
          class="fixed px-[70px] w-fit mx-auto bottom-11 flex items-center justify-evenly gap-x-[30px]"
        >
          <UIBackToZakazButton />
          <UIOrderButton />
        </div>
      </div>
    </div>
  </Teleport>
</template>
