<script setup lang="ts">
import { useCatStore } from "~/store/catStore";

const store = useCatStore();
const { allPrice, allPriceWithDiscount } = storeToRefs(store);

const { formData, v$ } = useValidateForm();

const submitClick = () => {
  v$.value.validate();
  if (v$.value.error) {
    console.log("Форма заказа заполнена не правильно...");
    return false;
  } else {
  }
};

watch(formData, () => {
  formData.discount = allPriceWithDiscount.value;
  formData.price = allPrice.value;
  //formData.phone = formData.phone.replaceAll("(", "").replaceAll(")", "");
  // console.log(
  //   formData.name,
  //   formData.phone,
  //   formData.info,
  //   formData.price.toFixed(2)
  // );

  // console.log(v$);
});
</script>

<template>
  <div class="mt-[14px]">
    <div
      class="w-[540px] min-h-[267px] p-4 bg-white font-myArial border-[0.5px] border-[#0C334A] rounded-[8px] overflow-hidden"
    >
      <div class="flex items-start justify-start gap-x-[14px]">
        <div
          class="w-[32px] h-[32px] text-center text-white text-[20px]/[22px] p-1 bg-[#D34A44] rounded-full"
        >
          2
        </div>
        <div class="text-[#191919] text-[22px]/[26px] font-[300]">
          Данные для доставки
        </div>
      </div>
      <form
        class="w-[100%] px-[46px] pb-[28px] mt-2 grid grid-cols-1 gap-y-[22px]"
        action="#"
      >
        <!-- <FormName v-model:client="formData.name" /> -->
        <FormName />
        <FormPhone />
        <FormInfo v-model:info="formData.info" />
        <input type="hidden" name="price" :value="allPrice" />
        <input type="hidden" name="discount" :value="allPriceWithDiscount" />
      </form>
    </div>
  </div>
</template>
