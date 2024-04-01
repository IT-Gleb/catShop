<script setup lang="ts">
import { delayButton } from "~/mytypes/lib";
import { useCatStore } from "~/store/catStore";
import { useOrder } from "~/store/orderStore";

const store = useCatStore();

const { allPrice, allPriceWithDiscount } = storeToRefs(store);

const orderStore = useOrder();
const { getActive } = storeToRefs(orderStore);
const { setOrderActive } = orderStore;

const isShow = ref<boolean>(false);
const isOut = ref<boolean>(false);
const timerRef = ref<any>(-1);

const clickClose = (event: Event) => {
  event.preventDefault();
  isOut.value = true;
  timerRef.value = setTimeout(() => {
    setOrderActive(false);
    isOut.value = false;
  }, delayButton);
};

watch(getActive, () => {
  isShow.value = getActive.value;
  //console.log(isShow.value);
});

onUnmounted(() => {
  if (timerRef.value !== -1) {
    clearTimeout(timerRef.value);
  }
});
</script>

<template>
  <div
    v-if="isShow"
    class="fixed top-0 bottom-0 right-0 z-40"
    :class="isOut ? 'animate-toTop' : 'animate-fromTop'"
  >
    <div
      class="bg-[#EBE1D7] w-[612px] h-[100vh] font-neucha font-[400] p-[36px] overflow-hidden"
    >
      <div class="flex items-center justify-center gap-x-[15px]">
        <span class="w-[8px] h-[8px] bg-[#191919] rounded-full"></span>
        <h2 class="text-[#191919] text-[32px]/[36px]">Оформление заказа</h2>
        <span class="w-[8px] h-[8px] bg-[#191919] rounded-full"></span>
      </div>

      <div
        class="min-w-[540px] max-h-[154px] overflow-hidden rounded-[8px] bg-white p-4 mt-7 border-[0.5px] border-[#A5A5A5]"
      >
        <div class="flex items-center justify-start gap-x-[14px] font-myArial">
          <div
            class="w-[32px] h-[32px] rounded-full text-center p-1 font-[400] text-[20px]/[24px] text-white bg-[#D34A44]"
          >
            1
          </div>
          <h4 class="font-[300] text-[22px]/[24px] text-[#191919]">
            Способ доставки
          </h4>
        </div>

        <div
          class="pl-[62px] pr-[32px] font-myArial grid grid-cols-[32px_32px_1fr_1fr] gap-x-5 gap-y-[14px] mt-3"
        >
          <div
            class="w-[32px] h-[32px] rounded-full border-[0.5px] border-[#A5A5A5]"
          ></div>
          <div>
            <img
              class="w-[32px]"
              src="/assets/images/body/delivery.svg"
              alt="delivery"
              loading="lazy"
            />
          </div>
          <div class="text-[#A5A5A5] text-[18px]/[20px] ml-5">Курьер</div>
          <div class="text-[#FF0000] text-[12px]/[14px]">
            Временно не доступно
          </div>
          <!-- 2 stroka -->
          <div class="w-[32px] h-[32px] relative rounded-full bg-[#0ACF83]">
            <img
              class="w-[16px] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
              src="/assets/images/body/check.svg"
              alt="check"
              loading="lazy"
            />
          </div>
          <div>
            <img
              class="w-[30px]"
              src="/assets/images/body/shopping-bag.svg"
              alt="bag"
              loading="lazy"
            />
          </div>
          <div class="text-[#A5A5A5] text-[18px]/[20px] ml-5">Самовывоз</div>
          <div class="font-myArial text-[#3F4871]">
            <span class="block font-[700] text-[14px]/[16px]">Скидка - 10%</span
            ><span class="block font-[700] text-[8px]/[10px]"
              >на стоиомость покупки</span
            >
          </div>
        </div>
      </div>
      <!-- Форма ввода и валидации -->
      <FormData />

      <div
        class="mt-[14px] w-[540px] min-h-[290px] px-4 pt-4 overflow-hidden bg-white border-[1px] border-[#0C334A] rounded-[8px]"
      >
        <div class="grid grid-cols-2 font-myArial text-[18px]/[20px] px-12">
          <div class="pt-[16px] pb-[20px] font-[300] text-[#222222]/80">
            Cтоимость товаров
          </div>
          <div
            class="font-[400] pt-[16px] pb-[20px] text-[18px]/[20px] text-[#222222]"
          >
            {{ allPrice }} ₽
          </div>
          <div class="col-span-2 border-t-[1px] border-t-[#D9D9D9]"></div>
          <div class="pt-[16px] pb-[20px] font-[400] text-[#222222]">
            Итого к оплате
            <span class="text-[11px]/[13px] text-blue-800 font-light"
              >(скидка 10%)</span
            >
          </div>
          <div
            class="font-[400] pt-[16px] pb-[20px] text-[18px]/[20px] text-[#222222]"
          >
            {{ allPriceWithDiscount }} ₽
          </div>
        </div>

        <div class="mt-[40px] flex flex-col gap-y-2">
          <button
            title="Купить и оплатить"
            class="w-[508px] h-[48px] rounded-[4px] border-[1px] border-[#0C334A] bg-[#0C334A] text-center text-white text-[18px]/[20px] tracking-[0.05em] active:scale-75"
          >
            Купить и оплатить
          </button>
          <button
            title="Закрыть"
            @click.stop="clickClose"
            class="w-[508px] h-[48px] rounded-[4px] border-[1px] border-[#0C334A] bg-[#0C334A] text-center text-white text-[18px]/[20px] tracking-[0.05em] active:scale-75"
          >
            Закрыть
          </button>
        </div>
        <div class="mt-5 mb-8 font-myArial text-[12px]/[16px] text-center">
          <span>Создавая заказ, вы соглашаетесь с</span>
          <span class="text-blue-600">
            политикой обработки персональных данных</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
