<script setup lang="ts">
const isSelected = ref<boolean>(false);
//const client = defineModel("client", { required: true });
const { v$, formData } = useValidateForm();
watch(formData, () => {
  //console.log(formData.name);
  v$.value.$validate();
});
</script>

<template>
  <div class="grid grid-cols-1 items-start gap-y-2">
    <div
      class="outline-none w-[100%] h-[32px] border-b-2 flex items-start justify-start py-8 before:w-[32px] before:h-[32px] before:p-1 before:content-[url('/assets/images/body/icon-user.svg')]"
      :class="
        v$.name.$error
          ? 'border-b-[#FF0000]'
          : isSelected
          ? 'border-b-[#000000]'
          : 'border-b-[#D9D9D9]'
      "
    >
      <input
        class="w-[100%] h-[32px] outline-none bg-white text-[#4C4C4C] font-[300] text-[16px]/[18px] p-2"
        type="text"
        name="UserName"
        id="UserName"
        v-model="formData.name"
        placeholder="Имя..."
        maxlength="100"
        @blur="() => (isSelected = false)"
        @focus="
          () => {
            isSelected = true;
            v$.name.$touch;
          }
        "
      />
    </div>
    <div
      v-if="v$.name.$error"
      class="mt-[4px] col-span-2 text-[12px]/[14px] text-[#FF0000] font-[300] first-letter:uppercase self-start"
    >
      <div v-for="err in v$.name.$errors" :key="err.$uid">
        {{ err.$message }}
      </div>
    </div>
  </div>
</template>
