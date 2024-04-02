<script setup lang="ts">
const isSelected = ref<boolean>(false);

const phone = defineModel("phone");
const prefix = defineModel("prefix");

// const changePrefix = (event: Event) => {
//   const target = <HTMLInputElement>event.target;
//   formData.prefix = target.value;
//   //console.log(formData.prefix);
// };

// watch(formData, () => {
//   v$.value.$validate();
// });
</script>

<template>
  <div class="grid grid-cols-1 items-start">
    <div
      class="flex items-start before:content-[url('/assets/images/body/icon-phone.svg')] before:w-[32px] before:h-[32px] before:p-1 before:mr-1 border-b-2"
      :class="isSelected ? 'border-b-[blue]' : 'border-b-[#D9D9D9]'"
    >
      <span class="py-2 px-0 h-[32px] text-[14px]/[16px] font-bold">+7(</span>
      <input
        class="h-[32px] w-fit bg-white outline-none py-2 px-0 text-[14px]/[16px] text-center font-bold"
        type="text"
        maxlength="3"
        size="3"
        placeholder="code"
        v-model="prefix"
        @focus="
          () => {
            //v$.prefix.$touch();
            isSelected = true;
          }
        "
        @blur="
          () => {
            isSelected = false;
          }
        "
      />
      <span class="py-2 px-0 h-[32px] text-[14px]/[16px] font-bold">)</span>
      <input
        class="w-[100%] h-[32px] ml-2 pl-0 pr-2 py-2 outline-none bg-white font-[300] text-[#4C4C4C] text-[16px]/[18px]"
        type="text"
        name="phone"
        id="phone"
        v-model="phone"
        maxlength="12"
        placeholder="Tелефон..."
        @focus="
          () => {
            isSelected = true;
            //v$.phone.$touch();
          }
        "
        @blur="
          () => {
            isSelected = false;
          }
        "
      />
    </div>
  </div>
</template>
