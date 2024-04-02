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

const { v$, formData } = useValidateForm();

const clickClose = (event: Event) => {
  event.preventDefault();
  isOut.value = true;
  timerRef.value = setTimeout(() => {
    setOrderActive(false);
    isOut.value = false;
  }, delayButton);
};

const handleSubmit = async () => {
  const res = await v$.value.$validate();
  if (!res) {
    return;
  } else {
    formData.update_phone = "+7" + formData.prefix + formData.phone;
    formData.discount = allPriceWithDiscount.value;
    formData.price = allPrice.value;
    alert(
      "Успешная валидация!" +
        "\n" +
        formData.name +
        "\n" +
        formData.update_phone +
        "\n" +
        formData.info +
        "\n" +
        formData.price +
        "\n" +
        formData.discount
    );
  }
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

      <!-- Форма заказа и кнопки -->
      <form class="mt-[27px]" action="#" @submit.prevent="handleSubmit">
        <!-- Верхний блок курьер -->
        <div
          class="w-[540px] min-h-[154px] bg-white rounded-[8px] border-[1px] border-[#0C334A] px-[16px] pt-[20px] pb-[32px] mt-[14px]"
        >
          <div
            class="flex items-center justify-start gap-x-[14px] font-myArial"
          >
            <span
              class="block w-[32px] h-[32px] bg-[#D34A44] text-white text-[20px]/[22px] rounded-full text-center p-1"
              >1</span
            >
            <span>Способ доставки</span>
          </div>
          <div
            class="w-[100%] grid grid-cols-1 gap-y-[22px] font-myArial px-[46px]"
          ></div>
        </div>
        <!-- Поля ввода -->
        <div
          class="w-[540px] min-h-[270px] bg-white rounded-[8px] border-[1px] border-[#0C334A] px-[16px] pt-[20px] pb-[32px] mt-[14px]"
        >
          <div
            class="flex items-center justify-start gap-x-[14px] font-myArial"
          >
            <span
              class="block w-[32px] h-[32px] bg-[#D34A44] text-white text-[20px]/[22px] rounded-full text-center p-1"
              >2</span
            >
            <span>Данные для доставки</span>
          </div>
          <!-- Ввод данных телефон и прочее -->
          <div
            class="w-[100%] grid grid-cols-1 gap-y-[22px] font-myArial px-[46px]"
          >
            <div>
              <FormName v-model:client="formData.name" />
              <div
                v-if="v$.name.$error"
                class="w-[100%] font-myArial font-[300] text-[12px]/[14px] text-[#FF0000] mt-[4px]"
              >
                <span v-for="err in v$.name.$errors" :key="err.$uid">{{
                  err.$message
                }}</span>
              </div>
            </div>
            <div>
              <FormPhone
                v-model:prefix="formData.prefix"
                v-model:phone="formData.phone"
              />
              <div
                v-if="v$.phone.$error || v$.prefix.$error"
                class="w-[100%] font-myArial font-[300] text-[12px]/[14px] text-[#FF0000] mt-[4px]"
              >
                <span v-for="err in v$.prefix.$errors" :key="err.$uid">{{
                  err.$message
                }}</span>
                <span v-for="err in v$.phone.$errors" :key="err.$uid">{{
                  err.$message
                }}</span>
              </div>
            </div>
            <FormInfo v-model:info="formData.info" />
          </div>
        </div>

        <div
          class="w-[540px] min-h-[270px] bg-white rounded-[8px] border-[1px] border-[#0C334A] px-[16px] py-[32px] mt-[14px]"
        >
          <div
            class="w-[100%] grid grid-cols-[50%_200px] gap-x-[45px] gap-y-[20px] px-[46px] font-myArial font-[300] text-[18px]/[20px] text-[#222222]"
          >
            <input type="hidden" :value="allPrice" />
            <input type="hidden" :value="allPriceWithDiscount" />
            <span class="font-light">Cтоимость товаров</span
            ><span class="font-[400]">{{ allPrice }} ₽</span>
            <div class="col-span-2 border-t-2 border-t-[#D9D9D9]"></div>
            <span class="font-[400]"
              >Итого к оплате
              <span class="text-[12px]/[13px] text-blue-500 whitespace-nowrap">
                скидка (10%)</span
              ></span
            ><span class="font-[400]">{{ allPriceWithDiscount }} ₽</span>
          </div>
          <input
            class="col-span-2 w-[100%] bg-[#0C334A] text-white text-[18px]/[20px] tracking-[0.05em] font-medium mt-[40px] border-[1px] border-[#0C334A] rounded-[4px] py-[14px] active:scale-75"
            type="submit"
            value="Купить и оплатить"
          />
          <button
            @click="clickClose"
            class="col-span-2 w-[100%] bg-[#0C334A] text-white text-[18px]/[20px] tracking-[0.05em] font-medium mt-[8px] border-[1px] border-[#0C334A] rounded-[4px] py-[14px] active:scale-75"
          >
            Закрыть
          </button>
          <div class="col-span-2 mt-5 text-center">
            <span class="text-[12px]/[16px] font-[300] font-myArial"
              >Создавая заказ, вы соглашаетесь с
              <span class="text-blue-800"
                >политикой обработки персональных данных</span
              ></span
            >
          </div>
        </div>
      </form>
      <!--End of Форма заказа и кнопки -->
    </div>
  </div>
</template>
