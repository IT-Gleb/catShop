<script setup lang="ts">
const myError = useError();

const handleError = () => {
  clearError({
    redirect: "/",
  });
};
</script>

<template>
  <NuxtLayout name="err-0">
    <section
      v-if="myError?.statusCode === 404"
      class="w-[95%] xl:w-[70%] min-h-[70vh] mx-auto mt-20"
    >
      <h1
        class="w-fit mx-auto font-montserrat font-extrabold text-[52px]/[58px] text-[#FF0000]"
      >
        404
      </h1>
      <h1 class="w-fit mx-auto my-12 text-[20px]/[24px]">
        Страница не найдена
      </h1>
      <div class="w-fit mx-auto mt-[120px]">
        <button
          class="min-w-[120px] h-[42px] rounded-[8px] px-2 py-3 bg-[#121212] text-white active:scale-75"
          @click="handleError"
        >
          Вернуться
        </button>
      </div>
    </section>
    <section v-else class="w-fit mx-auto mt-[20px]">
      <p>Возникла ошибка - {{ myError?.statusCode }}</p>
      <p>{{ myError?.statusMessage }}</p>
      <p>{{ myError?.message }}</p>

      <div class="w-fit mx-auto mt-[120px]">
        <button
          class="min-w-[120px] h-[42px] rounded-[8px] px-2 py-3 bg-[#121212] text-white active:scale-75"
          @click="handleError"
        >
          Вернуться
        </button>
      </div>
    </section>
  </NuxtLayout>
</template>
