<script setup lang="ts">
const isSelected = ref<boolean>(false);
const client = defineModel("client");
//const { v$ } = useValidateForm();
</script>

<template>
  <div class="w-[100%] grid grid-cols-1 items-start gap-y-2">
    <div
      class="outline-none w-[100%] h-[32px] border-b-2 flex items-start justify-start py-8 before:w-[32px] before:h-[32px] before:p-1 before:content-[url('/assets/images/body/icon-user.svg')]"
      :class="isSelected ? 'border-b-[blue]' : 'border-b-[#D9D9D9]'"
    >
      <input
        class="w-[100%] h-[32px] outline-none bg-white text-[#4C4C4C] font-[300] text-[16px]/[18px] p-2"
        type="text"
        name="UserName"
        id="UserName"
        v-model="client"
        placeholder="Имя..."
        maxlength="100"
        @blur="() => (isSelected = false)"
        @focus="
          () => {
            isSelected = true;
            //v$.name.$touch();
          }
        "
      />
    </div>
  </div>
</template>
