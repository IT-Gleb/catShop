<script setup lang="ts">
const isSelected = ref<boolean>(false);
const { formData, v$ } = useValidateForm();
//const phone = defineModel("phone");

const changePrefix = (event: Event) => {
  const target = <HTMLInputElement>event.target;
  formData.prefix = target.value;
  //console.log(formData.prefix);
};

watch(formData, () => {
  v$.value.$validate();
});
</script>

<template>
  <div class="grid grid-cols-1 items-start">
    <div
      class="flex items-start before:content-[url('/assets/images/body/icon-phone.svg')] before:w-[32px] before:h-[32px] before:p-1 before:mr-1 border-b-2"
      :class="
        v$.phone.$error
          ? 'border-b-[#FF0000]'
          : isSelected
          ? 'border-b-[#000000]'
          : 'border-b-[#D9D9D9]'
      "
    >
      <span class="py-2 px-0 h-[32px] text-[14px]/[16px] font-bold">+7(</span>
      <input
        class="h-[32px] w-fit bg-white outline-none py-2 px-0 text-[14px]/[16px] text-center font-bold"
        type="text"
        maxlength="3"
        size="3"
        placeholder="code"
        @focus="
          () => {
            v$.prefix.$touch;
            isSelected = true;
          }
        "
        @blur="
          () => {
            isSelected = false;
          }
        "
        :value="formData.prefix"
        @change="changePrefix"
      />
      <span class="py-2 px-0 h-[32px] text-[14px]/[16px] font-bold">)</span>
      <input
        class="w-[100%] h-[32px] ml-2 pl-0 pr-2 py-2 outline-none bg-white font-[300] text-[#4C4C4C] text-[16px]/[18px]"
        type="text"
        name="phone"
        id="phone"
        v-model="formData.phone"
        maxlength="12"
        placeholder="Tелефон..."
        @focus="
          () => {
            isSelected = true;
            v$.phone.$touch;
          }
        "
        @blur="
          () => {
            isSelected = false;
          }
        "
      />
    </div>
    <div
      v-if="v$.prefix.$error"
      class="mt-[4px] col-span-2 text-[12px]/[14px] text-[#FF0000] font-[300] first-letter:uppercase self-start"
    >
      <div v-for="err in v$.prefix.$errors" :key="err.$uid">
        {{ err.$message }}
      </div>
    </div>

    <div
      v-if="v$.phone.$error"
      class="mt-[4px] col-span-2 text-[12px]/[14px] text-[#FF0000] font-[300] first-letter:uppercase self-start"
    >
      <div v-for="err in v$.phone.$errors" :key="err.$uid">
        {{ err.$message }}
      </div>
    </div>
  </div>
</template>
