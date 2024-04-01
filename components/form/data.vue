<script setup lang="ts"></script>

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
        <FormName />
        <FormPhone />
        <FormInfo />
      </form>
    </div>
  </div>
</template>
