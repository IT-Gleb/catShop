<script setup lang="ts">
import { useCatStore } from "~/store/catStore";
import { useOrder } from "~/store/orderStore";

const store = useCatStore();
const { isActive, isActivePanel, allPrice } = storeToRefs(store);
const { setActive } = store;

const order = useOrder();
const { setOrderActive } = order;

const activate = ref<boolean>(false);
const isClosePanel = ref<boolean>(false);
const allItemsSum = ref<number>(0);
const showOrder = ref<boolean>(false);

const clickDeactivate = (event: Event) => {
  event.preventDefault();
  setOrderActive(false);
  setActive(false);
};

const showOrderForm = () => {
  showOrder.value = true;
  setOrderActive(showOrder.value);
  showOrder.value = false;
};

//console.log(props.isActive);
watchEffect(() => {
  activate.value = isActive.value;
  isClosePanel.value = isActivePanel.value;
  allItemsSum.value = allPrice.value;
  // console.log(activate.value);
});
</script>

<template>
  <Teleport to="body">
    <div
      v-if="activate"
      @click.stop="clickDeactivate"
      class="fixed left-0 top-0 bottom-0 right-0 bg-black/70 z-10"
    >
      <div
        class="w-[100%] h-[100%] absolute left-0 top-0 z-20 backdrop-blur-sm"
      ></div>
      <div
        @click.stop="
          () => {
            return false;
          }
        "
        class="w-[612px] h-[100%] bg-[#EBE1D7] relative z-30 ml-auto"
        :class="isClosePanel ? 'animate-fromRight' : 'animate-toRight'"
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

        <!-- Общая сумма -->
        <div class="pl-[45px] mt-8 max-w-[70%]">
          <span
            class="font-neucha font-[400] text-[20px]/[22px] tracking-[0.05em] text-black"
            >Общая сумма: {{ allItemsSum }} ₽
          </span>
          <p class="mt-4 text-[16px]/[20px] tracking-[0.03em]">
            *Сумма заказа для доставки курьером должна составлять не менее 500 ₽
          </p>
        </div>

        <!-- //Кнопки заказов -->
        <div
          class="fixed px-[70px] w-fit mx-auto bottom-11 flex items-center justify-evenly gap-x-[30px]"
        >
          <UIBackToZakazButton />
          <UIOrderButton @order-form="showOrderForm" />
        </div>
        <!-- Форма заказа -->
        <FormOrder />
      </div>
    </div>
  </Teleport>
</template>
