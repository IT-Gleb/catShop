<script setup lang="ts">
const myRoute = useRouter();

const backClick = async (event: Event) => {
  event.preventDefault();
  await myRoute.push("/");
};
</script>

<template>
  <button
    title="На главную"
    @click="backClick"
    class="w-[100px] h-[35px] rounded-[8px] font-ptSansNarrow shadow-[0px_0px_12px_0px_#00000059] bg-[#312525] text-white active:scale-75"
  >
    Вернуться
  </button>
</template>
