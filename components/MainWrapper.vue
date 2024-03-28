<template>
  <main
    class="max-w-[100%] mx-auto appPadding min-h-[85vh] font-myArial px-2 lg:px-6 mt-5 xl:bg-[url('/assets/images/body/BG-menu.png')] xl:bg-cover xl:bg-left-top xl:bg-no-repeat"
  >
    <slot />
  </main>
</template>

<style scoped>
.appPadding {
  @apply px-[20px] xl:px-[100px] 2xl:px-[150px] 4xl:px-[375px];
}
</style>
