<script setup lang="ts">
import { Cats_URL, Run_URL, Action_URL, Contacts_URL } from "~/mytypes/lib";
</script>

<template>
  <div class="w-[100%] h-[82px] bg-[#062D4E] text-white font-montserrat">
    <section
      class="w-[98%] xl:max-w-[100%] mx-auto appPadding grid grid-cols-[24px_1fr_24px] md:grid-cols-[20px_90px_1fr_240px] lg:grid-cols-[20px_1fr_1fr_240px] xl:grid-cols-[204px_1fr_280px_280px]"
    >
      <div class="block xl:hidden pt-7">
        <UIBurgerButton />
      </div>
      <div class="w-[90px] mx-auto md:ml-[16px] xl:w-[204px] xl:ml-0">
        <div class="xl:hidden flex items-center justify-center">
          <img
            class="w-[98px] pt-4"
            src="/assets/images/header/smallLogo.png"
            alt="small-logo"
            loading="lazy"
          />
        </div>
        <RouterLink class="hidden xl:block" to="/">
          <img
            class="w-[204px] drop-shadow-[1px_-1px_16px_0px_#0000000F]"
            src="/assets/images/header/logoCat.svg"
            alt="main-logo"
            loading="lazy"
          />
        </RouterLink>
      </div>
      <div class="hidden xl:block">
        <ul
          class="flex items-center justify-center gap-x-4 text-[16px]/[20px] p-8 tracking-[0.05em]"
        >
          <li><RouterLink :to="Cats_URL">Котики</RouterLink></li>
          <li>
            <span class="block w-[4px] h-[4px] rounded-full bg-white"></span>
          </li>
          <li><RouterLink :to="Run_URL">Доставка</RouterLink></li>
          <li>
            <span class="block w-[4px] h-[4px] rounded-full bg-white"></span>
          </li>
          <li><RouterLink :to="Action_URL">Акции</RouterLink></li>
          <li>
            <span class="block w-[4px] h-[4px] rounded-full bg-white"></span>
          </li>
          <li><RouterLink :to="Contacts_URL">Контакты</RouterLink></li>
        </ul>
      </div>
      <div
        class="ml-0 md:w-fit md:mx-auto xl:ml-[30px] 2xl:ml-[40px] 3xl:ml-[80px]"
      >
        <div class="flex items-center justify-center py-8 gap-x-[6px]">
          <a href="tel:+79037009791">
            <img
              class="block"
              src="/assets/images/header/phone.svg"
              alt="phone"
              loading="lazy"
            />
          </a>
          <a class="hidden md:block" href="tel:+79037009791">
            <span
              class="font-[400] text-[18px]/[24px] tracking-[0.01em] whitespace-nowrap"
            >
              +7 903 700 97 91
            </span>
          </a>
        </div>
      </div>
      <div
        class="hidden md:block ml-0 xl:ml-[15px] 2xl:ml-[30px] 3xl:ml-[102px]"
      >
        <div class="flex items-center justify-center gap-x-[24px] py-6">
          <UIBagButton />
          <UILoginButton />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.appPadding {
  @apply px-[20px] xl:px-[40px] 2xl:px-[120px] 4xl:px-[375px];
}
</style>
