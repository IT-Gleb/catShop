import { defineStore } from "pinia";
import type { TItem, TItemData } from "~/mytypes/lib";
import { _orderBy } from "#imports";

export const useCatStore = defineStore("catStore", () => {
  const items = ref<TItemData>([]);
  const active = ref<boolean>(false); //Для показа корзины заказов
  const activePanel = ref<boolean>(false); //Для скрытия панели
  const discount = ref<number>(10); //Скидка в процентах от общей цены

  const itemsSize = computed(() => {
    return items.value.length;
  });

  const isActive = computed(() => active.value);
  const isActivePanel = computed(() => activePanel.value);

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

  const heartItem = (paramId: number) =>
    computed(() => {
      let found: TItem | undefined = items.value.find(
        (item) => item.id === paramId
      );
      if (found === undefined) {
        return false;
      } else {
        return found.heart;
      }
    });

  const priceItem = (paramId: number) =>
    computed(() => {
      let found: TItem | undefined = items.value.find(
        (item) => item.id === paramId
      );
      if (found !== undefined) {
        return found.count * found.price;
      } else {
        return 0;
      }
    });

  const allPrice = computed(() => {
    return items.value.reduce((acc, item) => {
      return acc + item.count * item.price;
    }, 0);
  });

  const allPriceWithDiscount = computed(() => {
    return Math.round(allPrice.value - allPrice.value / discount.value);
  });

  function setPanel(param: boolean) {
    activePanel.value = param;
  }

  function AddItem(param: TItem) {
    let found = items.value.find(
      (item) =>
        item.id === param.id &&
        item.name.trim().toLowerCase() === param.name.trim().toLowerCase()
    );
    if (found === undefined) {
      items.value.push(param);
      if (items.value.length > 1) {
        items.value = _orderBy(items.value, ["price"], ["desc"]);
      }
    }
  }

  function DeleteItem(paramId: number) {
    items.value = items.value.filter((item) => item.id !== paramId);
    if (items.value.length > 1) {
      items.value = _orderBy(items.value, ["price"], ["desc"]);
    }
  }

  function setItemCount(paramId: number, paramCount: number) {
    let found: TItem | undefined = items.value.find(
      (item) => item.id === paramId
    );
    if (found !== undefined) {
      found.count = paramCount;
    }
  }

  function setItemHeart(paramId: number, paramHeart: boolean) {
    let found: TItem | undefined = items.value.find(
      (item) => item.id === paramId
    );
    if (found !== undefined) {
      found.heart = paramHeart;
    }
  }

  function setActive(param: boolean) {
    active.value = param;
  }

  return {
    itemsSize,
    isActive,
    allItems,
    isActivePanel,
    allPrice,
    allPriceWithDiscount,
    heartItem,
    inBag,
    setActive,
    ItemCount,
    AddItem,
    DeleteItem,
    setItemCount,
    setPanel,
    priceItem,
    setItemHeart,
  };
});
