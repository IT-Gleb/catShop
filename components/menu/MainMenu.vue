<script setup lang="ts"></script>

<template>
  <div>
    <section class="mt-[22px] lg:mt-[100px]">
      <div
        class="w-fit mx-auto flex items-center justify-center gap-x-[10px] lg:gap-x-[40px]"
      >
        <span
          class="bg-[#312525] w-[5px] lg:w-[10px] h-[5px] lg:h-[10px] rounded-full"
        ></span>
        <h2
          class="font-neucha font-[400] text-[22px]/[24px] lg:text-[60px]/[67px] text-[#191919] lg:text-[#312525] uppercase"
        >
          меню
        </h2>
        <span
          class="bg-[#312525] w-[5px] lg:w-[10px] h-[5px] lg:h-[10px] rounded-full"
        ></span>
      </div>
      <div
        class="mt-[10px] lg:mt-[50px] flex items-center justify-center flex-wrap gap-x-[2px] lg:gap-x-2"
      >
        <MenuItem title="Роллы" />
        <MenuItem title="суши и гунканы" />
        <MenuItem title="сеты" />
        <MenuItem title="лапша и рис" />
        <MenuItem title="салаты" />
        <MenuItem title="Горячие блюда" />
      </div>
    </section>
  </div>
</template>
