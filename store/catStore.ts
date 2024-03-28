import { defineStore } from "pinia";
import type { TItem, TItemData } from "~/mytypes/lib";

export const useCatStore = defineStore("catStore", () => {
  const items = ref<TItemData>([]);
  const active = ref<boolean>(false); //Для показа корзины заказов

  const itemsSize = computed(() => {
    return items.value.length;
  });

  const isActive = computed(() => active.value);

  const allItems = computed(() => items.value);

  const ItemCount = (paramId: number) =>
    computed(() => {
      let found = items.value.find((item) => item.id === paramId);
      if (found !== undefined) {
        return found.count;
      } else {
        return 0;
      }
    });

  const inBag = (paramId: number) =>
    computed(() => {
      let found = items.value.find((item) => item.id === paramId);
      if (found !== undefined) {
        return true;
      } else {
        return false;
      }
    });

  function AddItem(param: TItem) {
    let found = items.value.find(
      (item) =>
        item.id === param.id &&
        item.name.trim().toLowerCase() === param.name.trim().toLowerCase()
    );
    if (found === undefined) {
      items.value.push(param);
    }
  }

  function DeleteItem(paramId: number) {
    items.value = items.value.filter((item) => item.id !== paramId);
  }

  function setItemCount(paramId: number, paramCount: number) {
    let found: TItem | undefined = items.value.find(
      (item) => item.id === paramId
    );
    if (found !== undefined) {
      found.count = paramCount;
    }
  }

  function setActive(param: boolean) {
    active.value = param;
  }

  return {
    itemsSize,
    isActive,
    allItems,
    inBag,
    setActive,
    ItemCount,
    AddItem,
    DeleteItem,
    setItemCount,
  };
});
