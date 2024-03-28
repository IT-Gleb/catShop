<script setup lang="ts">
import type { TItem } from "~/mytypes/lib";
import { useCatStore } from "~/store/catStore";

const props = defineProps<{ pItem: TItem }>();
const isActive = ref<boolean>(false);
const ThisItem = ref<TItem>(props.pItem);

const store = useCatStore();
const { AddItem, setItemCount, DeleteItem, inBag } = store;

const clickActive = () => {
  isActive.value = !isActive.value;
  if (isActive.value) {
    ThisItem.value.count++;
    AddItem(ThisItem.value);
  }
};

const addCount = () => {
  ThisItem.value.count++;

  setItemCount(ThisItem.value.id, ThisItem.value.count);
  //console.log(itemsSize.value);
};

const minusCount = () => {
  ThisItem.value.count--;
  if (ThisItem.value.count < 1) {
    ThisItem.value.count = 0;
  }
  setItemCount(ThisItem.value.id, ThisItem.value.count);
  //Закрыть количество, Удалить из хранилища(корзины)
  if (ThisItem.value.count === 0) {
    DeleteItem(ThisItem.value.id);
  }
  //console.log(itemsSize.value);
};
watchEffect(() => {
  isActive.value = inBag(ThisItem.value.id).value;
});
</script>

<template>
  <div
    class="max-w-[270px] min-h-[390px] overflow-hidden rounded-[8px] transition-all flex flex-col py-[30px] shadow-[0px_0px_12px_0px_#00000040]"
    :class="isActive ? 'bg-[#312525] text-white' : 'bg-[#FAFAFA]'"
  >
    <header class="w-[100%]">
      <div class="w-fit mx-auto flex items-start justify-stretch">
        <img src="/assets/images/body/cat.png" alt="catItem" loading="lazy" />
        <UIHeartButton :is-heart="pItem.heart" />
      </div>
    </header>
    <main class="w-[100%] px-[30px] mt-6 h-[35%] flex-auto">
      <div class="flex items-start justify-between gap-x-[20px]">
        <span
          class="font-neucha font-[400] text-[19px]/[25px] tracking-[0.1em] uppercase"
          :class="isActive ? 'text-white' : 'text-[#141414]'"
          >{{ pItem.name }}</span
        >
        <span
          class="font-myArial text-[13px]/[15px] font-[400] tracking-[0.04em]"
          :class="isActive ? 'text-white' : 'text-[#808080]'"
          >{{ pItem.weight }}г.</span
        >
      </div>
      <p class="mt-[20px] h-[60%] overflow-x-hidden overflow-y-auto mb-3">
        {{ pItem.description }}
      </p>
    </main>
    <footer class="w-[100%] px-[30px]">
      <div class="flex items-center justify-between">
        <span
          class="font-neucha font-[400] text-[19px]/[21px] tracking-[0.05em]"
          :class="isActive ? 'text-white' : 'text-[#141414]'"
          >{{ pItem.price }} ₽</span
        >
        <UIInBagButton v-if="!isActive" @activited="clickActive" />
        <UIMinPlusButton
          v-if="isActive"
          :id="ThisItem.id"
          @minus="minusCount"
          @plus="addCount"
        />
      </div>
    </footer>
  </div>
</template>
