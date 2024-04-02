<script setup lang="ts">
import { useCatStore } from "~/store/catStore";

const store = useCatStore();
const { allPrice, allPriceWithDiscount } = storeToRefs(store);

const { formData, v$ } = useValidateForm();

watch(formData, () => {
  v$.value.$validate();
  formData.discount = allPriceWithDiscount.value;
  formData.price = allPrice.value;
  //formData.phone = formData.phone.replaceAll("(", "").replaceAll(")", "");

  // console.log(v$);
});

const clickSubmit = async (event: Event) => {
  //console.log(event.target);
  console.log(
    formData.name,
    formData.prefix,
    formData.phone,
    formData.info,
    formData.price.toFixed(2),
    formData.discount.toFixed(2)
  );
  const res = await v$.value.$validate();
  if (!res) {
    console.log("Форма заполнена с ошибками!");
    return;
  }
  alert("Форма - OK");
  formData.update_phone = "+7" + formData.prefix + formData.phone;
  if (v$.value.$error) {
    console.log("Форма заполнена не правильно!");
    if (v$.value.$errors.length > 0) {
      let err = "";
      v$.value.$errors.forEach((item) => err + " " + item.$message);
      console.log(err);
    }

    console.log(v$.value.$errors.length);
    return false;
  } else {
    console.log("Форма заполнена корректно!", formData.update_phone);
    return true;
  }
};
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
        @submit.prevent="clickSubmit"
      >
        <!-- <FormName v-model:client="formData.name" /> -->
        <FormName v-model:client="formData.name" />
        <span
          v-if="v$.name.$error"
          class="w-[100%] text-[12px]/[14px] text-[#FF0000] font-[300] first-letter:uppercase"
        >
          <span v-for="err in v$.name.$errors" :key="err.$uid">
            {{ err.$message }}
          </span>
        </span>
        <FormPhone
          v-model:prefix="formData.prefix"
          v-model:phone="formData.phone"
        />
        <span
          v-if="v$.prefix.$error"
          class="text-[12px]/[14px] text-[#FF0000] font-[300] first-letter:uppercase self-start"
        >
          <span v-for="err in v$.prefix.$errors" :key="err.$uid">
            {{ err.$message }}
          </span>
        </span>

        <span
          v-if="v$.phone.$error"
          class="text-[12px]/[14px] text-[#FF0000] font-[300] first-letter:uppercase"
        >
          <span v-for="err in v$.phone.$errors" :key="err.$uid">
            {{ err.$message }}
          </span>
        </span>
        <FormInfo v-model:info="formData.info" />
        <input type="hidden" name="price" :value="allPrice" />
        <input type="hidden" name="discount" :value="allPriceWithDiscount" />
        <input
          type="submit"
          value="Abc"
          @click.stop="
            () => {
              return false;
            }
          "
        />
      </form>
    </div>
  </div>
</template>
