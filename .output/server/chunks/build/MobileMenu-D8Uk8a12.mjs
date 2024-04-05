import { b as buildAssetsURL } from '../routes/renderer.mjs';
import { useSSRContext, ref, computed, defineComponent, unref, mergeProps, withCtx, createVNode, createTextVNode, watch, watchEffect, onUnmounted, useModel, reactive } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrGetDirectiveProps, ssrGetDynamicModelProps, ssrIncludeBooleanAttr, ssrLooseEqual, ssrRenderTeleport, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { u as useCatStore, a as useMobileMenuStore, _ as __nuxt_component_1 } from './mobileMenuStore-CrWCBfEn.mjs';
import { d as defineStore, s as storeToRefs } from './server.mjs';
import { useVuelidate } from '@vuelidate/core';
import { helpers, required, minLength, numeric } from '@vuelidate/validators';

const _sfc_main$d = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "max-w-[100%] mx-auto appPadding min-h-[85vh] font-myArial px-2 lg:px-6 mt-5 xl:bg-[url('/assets/images/body/BG-menu.png')] xl:bg-cover xl:bg-left-top xl:bg-no-repeat" }, _attrs))} data-v-1d62978d>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MainWrapper.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-1d62978d"]]);
const _imports_0$4 = "data:image/svg+xml,%3csvg%20width='15'%20height='15'%20viewBox='0%200%2015%2015'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.49999%2014.1655C7.28644%2014.1655%207.08056%2014.0881%206.92011%2013.9476C6.31415%2013.4177%205.72993%2012.9198%205.21449%2012.4806L5.21186%2012.4783C3.70067%2011.1905%202.3957%2010.0784%201.48773%208.98281C0.472755%207.75806%200%206.59683%200%205.32825C0%204.09573%200.42263%202.95864%201.18995%202.12631C1.96643%201.28414%203.03188%200.820312%204.19036%200.820312C5.05622%200.820312%205.84918%201.09406%206.54715%201.63387C6.8994%201.90636%207.21869%202.23984%207.49999%202.62882C7.7814%202.23984%208.10057%201.90636%208.45293%201.63387C9.15091%201.09406%209.94387%200.820312%2010.8097%200.820312C11.9681%200.820312%2013.0337%201.28414%2013.8101%202.12631C14.5775%202.95864%2015%204.09573%2015%205.32825C15%206.59683%2014.5273%207.75806%2013.5124%208.9827C12.6044%2010.0784%2011.2995%2011.1904%209.78857%2012.4781C9.27221%2012.918%208.68708%2013.4167%208.07974%2013.9478C7.91941%2014.0881%207.71342%2014.1655%207.49999%2014.1655ZM4.19036%201.69899C3.28021%201.69899%202.44411%202.06223%201.83586%202.72186C1.21856%203.39146%200.878561%204.31705%200.878561%205.32825C0.878561%206.39519%201.2751%207.3494%202.16419%208.42216C3.02352%209.45911%204.30171%2010.5484%205.78166%2011.8096L5.78441%2011.8119C6.30179%2012.2528%206.8883%2012.7527%207.49873%2013.2865C8.11282%2012.7517%208.70024%2012.251%209.21866%2011.8094C10.6985%2010.5481%2011.9766%209.45911%2012.8359%208.42216C13.7249%207.3494%2014.1214%206.39519%2014.1214%205.32825C14.1214%204.31705%2013.7814%203.39146%2013.1641%202.72186C12.556%202.06223%2011.7198%201.69899%2010.8097%201.69899C10.143%201.69899%209.53085%201.91093%208.99035%202.32887C8.50867%202.70149%208.17313%203.17253%207.9764%203.50212C7.87524%203.67161%207.69717%203.77277%207.49999%203.77277C7.3028%203.77277%207.12473%203.67161%207.02357%203.50212C6.82696%203.17253%206.49142%202.70149%206.00962%202.32887C5.46912%201.91093%204.85698%201.69899%204.19036%201.69899Z'%20fill='black'/%3e%3c/svg%3e";
const _imports_1 = "data:image/svg+xml,%3csvg%20width='20'%20height='18'%20viewBox='0%200%2020%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18.4134%201.83508C17.3781%200.712189%2015.9575%200.09375%2014.413%200.09375C13.2585%200.09375%2012.2012%200.45874%2011.2704%201.1785C10.8008%201.54181%2010.3752%201.9863%2010%202.5051C9.62494%201.98645%209.19922%201.54181%208.7294%201.1785C7.79877%200.45874%206.74149%200.09375%205.58701%200.09375C4.04251%200.09375%202.62177%200.712189%201.58646%201.83508C0.563507%202.94485%200%204.46097%200%206.10434C0%207.79578%200.630341%209.34409%201.98364%2010.9771C3.19427%2012.4378%204.93423%2013.9207%206.94916%2015.6377C7.63718%2016.2241%208.41705%2016.8888%209.22684%2017.5968C9.44077%2017.7842%209.71527%2017.8873%2010%2017.8873C10.2846%2017.8873%2010.5592%2017.7842%2010.7729%2017.5971C11.5826%2016.8889%2012.363%2016.224%2013.0513%2015.6373C15.0659%2013.9205%2016.8059%2012.4378%2018.0165%2010.9769C19.3698%209.34409%2020%207.79578%2020%206.10419C20%204.46097%2019.4365%202.94485%2018.4134%201.83508Z'%20fill='%23F34942'/%3e%3c/svg%3e";
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "HeartButton",
  __ssrInlineRender: true,
  props: {
    isHeart: { type: Boolean, default: false },
    isActive: { type: Boolean, default: false },
    paramId: { default: 0 }
  },
  setup(__props) {
    const props = __props;
    const store = useCatStore();
    const { setItemHeart, heartItem } = store;
    const isHearted = ref(props.isHeart);
    watch(heartItem(props.paramId), () => {
      isHearted.value = heartItem(props.paramId).value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({ class: "w-[18px] h-[18px] overflow-hidden active:scale-75" }, _attrs))}>`);
      if (!unref(isHearted) && !_ctx.isActive) {
        _push(`<img${ssrRenderAttr("src", _imports_0$4)} alt="heart" loading="lazy">`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(isHearted) && _ctx.isActive) {
        _push(`<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.49999 14.1655C7.28644 14.1655 7.08056 14.0881 6.92011 13.9476C6.31415 13.4177 5.72993 12.9198 5.21449 12.4806L5.21186 12.4783C3.70067 11.1905 2.3957 10.0784 1.48773 8.98281C0.472755 7.75806 0 6.59683 0 5.32825C0 4.09573 0.42263 2.95864 1.18995 2.12631C1.96643 1.28414 3.03188 0.820312 4.19036 0.820312C5.05622 0.820312 5.84918 1.09406 6.54715 1.63387C6.8994 1.90636 7.21869 2.23984 7.49999 2.62882C7.7814 2.23984 8.10057 1.90636 8.45293 1.63387C9.15091 1.09406 9.94387 0.820312 10.8097 0.820312C11.9681 0.820312 13.0337 1.28414 13.8101 2.12631C14.5775 2.95864 15 4.09573 15 5.32825C15 6.59683 14.5273 7.75806 13.5124 8.9827C12.6044 10.0784 11.2995 11.1904 9.78857 12.4781C9.27221 12.918 8.68708 13.4167 8.07974 13.9478C7.91941 14.0881 7.71342 14.1655 7.49999 14.1655ZM4.19036 1.69899C3.28021 1.69899 2.44411 2.06223 1.83586 2.72186C1.21856 3.39146 0.878561 4.31705 0.878561 5.32825C0.878561 6.39519 1.2751 7.3494 2.16419 8.42216C3.02352 9.45911 4.30171 10.5484 5.78166 11.8096L5.78441 11.8119C6.30179 12.2528 6.8883 12.7527 7.49873 13.2865C8.11282 12.7517 8.70024 12.251 9.21866 11.8094C10.6985 10.5481 11.9766 9.45911 12.8359 8.42216C13.7249 7.3494 14.1214 6.39519 14.1214 5.32825C14.1214 4.31705 13.7814 3.39146 13.1641 2.72186C12.556 2.06223 11.7198 1.69899 10.8097 1.69899C10.143 1.69899 9.53085 1.91093 8.99035 2.32887C8.50867 2.70149 8.17313 3.17253 7.9764 3.50212C7.87524 3.67161 7.69717 3.77277 7.49999 3.77277C7.3028 3.77277 7.12473 3.67161 7.02357 3.50212C6.82696 3.17253 6.49142 2.70149 6.00962 2.32887C5.46912 1.91093 4.85698 1.69899 4.19036 1.69899Z" fill="violet"></path></svg>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(isHearted)) {
        _push(`<img${ssrRenderAttr("src", _imports_1)} alt="heart" loading="lazy">`);
      } else {
        _push(`<!---->`);
      }
      _push(`</button>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/HeartButton.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "MinusPlusBag",
  __ssrInlineRender: true,
  props: {
    param: {}
  },
  setup(__props) {
    const props = __props;
    const thisItem = ref(props.param);
    const store = useCatStore();
    const { setItemCount, DeleteItem, ItemCount, priceItem } = store;
    const count = ref(ItemCount(thisItem.value.id).value);
    const thisPrice = ref(priceItem(thisItem.value.id).value);
    watchEffect(() => {
      count.value = ItemCount(thisItem.value.id).value;
      thisPrice.value = priceItem(thisItem.value.id).value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 gap-y-[12px] text-center" }, _attrs))}><div class="font-neucha font-[400] text-[#141414] text-[13px]/[14px] tracking-[0.05em]"> \u0426\u0435\u043D\u0430: <span class="text-[16px]/[18px]">${ssrInterpolate(unref(thisItem).price)} \u20BD</span></div><div class="flex items-center justify-center gap-x-2"><button class="w-[25px] h-[25px] bg-[#312525] text-white rounded-full relative active:scale-75"><div class="absolute left-[50%] top-[50%] translate-x-[-50%] translate-t-[-50%]"><svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.3337 1.00024H1.66699" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div></button><span class="font-neucha font-[400] text-[16px]/[18px] tracking-[0.05em] text-[#353535]">${ssrInterpolate(unref(count))}</span><button class="w-[25px] h-[25px] bg-[#312525] text-white rounded-full active:scale-75"> + </button></div><div class="font-neucha font-[400] text-[#141414] text-[13px]/[14px] tracking-[0.05em]"> \u0421\u0443\u043C\u043C\u0430: <span class="text-[16px]/[18px]">${ssrInterpolate(unref(thisPrice))} \u20BD</span></div></div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cart/MinusPlusBag.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _imports_0$3 = "data:image/svg+xml,%3csvg%20width='15'%20height='15'%20viewBox='0%200%2015%2015'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_103_697)'%3e%3cpath%20d='M13.9287%202.14286H10.1788V1.60714C10.1788%200.71954%209.45923%200%208.57163%200H6.42876C5.54116%200%204.82162%200.71954%204.82162%201.60714V2.14286H1.07161C0.775736%202.14286%200.535889%202.38271%200.535889%202.67859C0.535889%202.97446%200.775767%203.21428%201.07161%203.21428H1.65392L2.67875%2014.513C2.70402%2014.7897%202.93665%2015.0011%203.21448%2015H11.7859C12.0637%2015.0011%2012.2963%2014.7897%2012.3216%2014.513L13.3464%203.21428H13.9288C14.2247%203.21428%2014.4645%202.97443%2014.4645%202.67856C14.4645%202.38268%2014.2246%202.14286%2013.9287%202.14286ZM5.89304%201.60714C5.89304%201.31126%206.13289%201.07142%206.42876%201.07142H8.57163C8.86751%201.07142%209.10735%201.31126%209.10735%201.60714V2.14286H5.89307V1.60714H5.89304ZM11.2968%2013.9285H3.70359L2.73234%203.21428H5.35735H12.2707L11.2968%2013.9285Z'%20fill='white'/%3e%3cpath%20d='M5.89285%2012.2855C5.89279%2012.2848%205.89276%2012.2841%205.8927%2012.2833L5.35697%204.78335C5.33597%204.48748%205.07908%204.26467%204.78323%204.28567C4.48735%204.30667%204.26455%204.56356%204.28555%204.85941L4.82128%2012.3594C4.84127%2012.6403%205.07537%2012.8578%205.357%2012.8571H5.39558C5.69074%2012.8366%205.91338%2012.5807%205.89285%2012.2855Z'%20fill='white'/%3e%3cpath%20d='M7.50008%204.28564C7.2042%204.28564%206.96436%204.52549%206.96436%204.82137V12.3214C6.96436%2012.6172%207.2042%2012.8571%207.50008%2012.8571C7.79596%2012.8571%208.0358%2012.6172%208.0358%2012.3214V4.82137C8.0358%204.52549%207.79596%204.28564%207.50008%204.28564Z'%20fill='white'/%3e%3cpath%20d='M10.2166%204.28567C9.92076%204.26467%209.6639%204.48748%209.6429%204.78335L9.10718%2012.2833C9.08549%2012.5784%209.3071%2012.8352%209.60216%2012.8569C9.60307%2012.8569%209.60395%2012.857%209.60486%2012.8571H9.6429C9.92452%2012.8578%2010.1586%2012.6403%2010.1786%2012.3594L10.7143%204.85941C10.7353%204.56356%2010.5125%204.3067%2010.2166%204.28567Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_103_697'%3e%3crect%20width='15'%20height='15'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "DeleteFromBag",
  __ssrInlineRender: true,
  props: {
    paramId: {}
  },
  setup(__props) {
    useCatStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="w-[100%] h-[100%] overflow-hidden"><div class="bg-black w-[45px] h-[64px] rounded-[200px_0px_0px_200px] ml-auto cursor-pointer relative"><img class="absolute left-[50%] top-[48%] translate-x-[-50%] translate-y-[-48%]"${ssrRenderAttr("src", _imports_0$3)} alt="bag" loading="lazy"></div></div></div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cart/DeleteFromBag.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _imports_0$2 = "" + buildAssetsURL("cat_80x60.A8T1WFEj.png");
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "CatBagItem",
  __ssrInlineRender: true,
  props: {
    paramItem: {}
  },
  setup(__props) {
    const store = useCatStore();
    const { inBag, heartItem } = store;
    const props = __props;
    const thisItem = ref(props.paramItem);
    const selected = ref(false);
    watchEffect(() => {
      selected.value = inBag(thisItem.value.id).value;
      if (selected.value) {
        thisItem.value.heart = heartItem(thisItem.value.id).value;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIHeartButton = _sfc_main$c;
      const _component_CartMinusPlusBag = _sfc_main$b;
      const _component_CartDeleteFromBag = _sfc_main$a;
      if (unref(thisItem)) {
        _push(`<div${ssrRenderAttrs(_attrs)}><div class="min-w-[200px] h-[112px] bg-[#FAFAFA] shadow-[0px_0px_12px_0px_#00000040] rounded-[8px] pt-[8px] lg:pt-[15px] pb-[8px] lg:pb-[15px] pl-[15px] pr-0 overflow-hidden"><div class="w-[100%] grid grid-cols-[40px_3fr_2fr_1fr] lg:grid-cols-[80px_3fr_2fr_1fr] gap-x-[12px] lg:gap-x-[25px]"><div><img class="block w-[40px] lg:w-[80px]"${ssrRenderAttr("src", _imports_0$2)} alt="cat" loading="lazy"></div><div><div class="flex itemx-start justify-between"><span class="font-neucha font-[400] text-[16px]/[25px] tracking-[0.1em] text-[#141414] uppercase">${ssrInterpolate(unref(thisItem).name)}</span>`);
        _push(ssrRenderComponent(_component_UIHeartButton, {
          "is-heart": unref(thisItem).heart,
          "is-active": unref(selected),
          "param-id": unref(thisItem).id
        }, null, _parent));
        _push(`</div><p class="col-span-2 font-ptSansNarrow text-[#717171] text-[13px]/[16px] first-letter:uppercase">${ssrInterpolate(unref(thisItem).description)} <span class="block">(${ssrInterpolate(unref(thisItem).weight)}) \u0433.</span></p></div><div>`);
        _push(ssrRenderComponent(_component_CartMinusPlusBag, { param: unref(thisItem) }, null, _parent));
        _push(`</div><div>`);
        _push(ssrRenderComponent(_component_CartDeleteFromBag, {
          "param-id": unref(thisItem).id
        }, null, _parent));
        _push(`</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cart/CatBagItem.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "CatBagItems",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useCatStore();
    const { itemsSize, allItems } = storeToRefs(store);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CartCatBagItem = _sfc_main$9;
      if (unref(itemsSize) > 0) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-[30px] px-[4px] lg:px-[45px] h-[62vh] overflow-x-hidden overflow-y-auto" }, _attrs))} data-v-0bbe8f8c><div class="grid grid-cols-1 gap-y-[6px]" data-v-0bbe8f8c><!--[-->`);
        ssrRenderList(unref(allItems), (item) => {
          _push(ssrRenderComponent(_component_CartCatBagItem, {
            key: item.id,
            "param-item": item
          }, null, _parent));
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cart/CatBagItems.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-0bbe8f8c"]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "BackToZakazButton",
  __ssrInlineRender: true,
  setup(__props) {
    useCatStore();
    const timerRef = ref(-1);
    onUnmounted(() => {
      if (timerRef.value !== -1) {
        clearTimeout(timerRef.value);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        title: "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043A \u043F\u043E\u043A\u0443\u043F\u043A\u0430\u043C",
        class: "border-[1px] border-[#AFAFAF] bg-white py-[8px] px-[12px] lg:py-[20px] lg:px-[16px] xl:px-[18px] 2xl:px-[24px] font-neucha whitespace-nowrap text-[14px]/[16px] lg:text-[16px]/[18px] 2xl:text-[18px]/[20px] font-[400] tracking-[0.05em] rounded-[8px] text-black h-[58px] shadow-[0px_0px_12px_0px_#00000040] active:scale-75 overflow-hidden"
      }, _attrs))}> \u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043A \u043F\u043E\u043A\u0443\u043F\u043A\u0430\u043C </button>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/BackToZakazButton.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "OrderButton",
  __ssrInlineRender: true,
  emits: ["orderForm"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        title: "\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437",
        class: "w-100% border-[1px] border-[#AFAFAF] text-white bg-[#312525] py-2 lg:py-[20px] lg:px-[16px] xl:px-[18px] 2xl:px-[24px] whitespace-nowrap font-neucha text-[14px]/[16px] lg:text-[16px]/[18px] 2xl:text-[18px]/[20px] font-[400] tracking-[0.05em] rounded-[8px] h-[58px] shadow-[0px_0px_12px_0px_#00000040] active:scale-75"
      }, _attrs))}> \u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437 </button>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/OrderButton.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Name",
  __ssrInlineRender: true,
  props: {
    "client": {},
    "clientModifiers": {}
  },
  emits: ["update:client"],
  setup(__props) {
    const isSelected = ref(false);
    const client = useModel(__props, "client");
    const vMyFocus = {
      mounted: (el) => el.focus()
    };
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-[100%] grid grid-cols-1 items-start gap-y-2" }, _attrs))}><div class="${ssrRenderClass([unref(isSelected) ? "border-b-[blue]" : "border-b-[#D9D9D9]", "w-[100%] h-[32px] border-b-2 flex items-start justify-start py-8 before:w-[32px] before:h-[32px] before:p-1 before:content-[url('/assets/images/body/icon-user.svg')]"])}"><input${ssrRenderAttrs((_temp0 = mergeProps({
        class: "w-[100%] h-[32px] outline-none bg-white text-[#4C4C4C] font-[300] text-[16px]/[18px] p-2",
        type: "text",
        name: "UserName",
        id: "UserName",
        value: client.value,
        placeholder: "\u0418\u043C\u044F...",
        autocomplete: "off",
        maxlength: "100"
      }, ssrGetDirectiveProps(_ctx, vMyFocus)), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, client.value))))}></div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/Name.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Phone",
  __ssrInlineRender: true,
  props: {
    "phone": {},
    "phoneModifiers": {},
    "prefix": {},
    "prefixModifiers": {}
  },
  emits: ["update:phone", "update:prefix"],
  setup(__props) {
    const isSelected = ref(false);
    const phone = useModel(__props, "phone");
    const prefix = useModel(__props, "prefix");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 items-start" }, _attrs))}><div class="${ssrRenderClass([unref(isSelected) ? "border-b-[blue]" : "border-b-[#D9D9D9]", "flex items-start before:content-[url('/assets/images/body/icon-phone.svg')] before:w-[32px] before:h-[32px] before:p-1 before:mr-1 border-b-2"])}"><span class="py-2 px-0 h-[32px] text-[14px]/[16px] font-bold">+7(</span><input class="h-[32px] w-fit bg-white outline-none py-2 px-0 text-[14px]/[16px] text-center font-bold" type="text" maxlength="3" size="3" placeholder="\u041A\u043E\u0434" autocomplete="off"${ssrRenderAttr("value", prefix.value)}><span class="py-2 px-0 h-[32px] text-[14px]/[16px] font-bold">)</span><input class="w-[100%] h-[32px] ml-2 pl-0 pr-2 py-2 outline-none bg-white font-[300] text-[#4C4C4C] text-[16px]/[18px]" type="text" name="phone" id="phone"${ssrRenderAttr("value", phone.value)} maxlength="12" placeholder="T\u0435\u043B\u0435\u0444\u043E\u043D..." autocomplete="off"></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/Phone.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Info",
  __ssrInlineRender: true,
  props: {
    "info": {},
    "infoModifiers": {}
  },
  emits: ["update:info"],
  setup(__props) {
    const isSelected = ref(false);
    const info = useModel(__props, "info");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["mt-[18px] flex items-start justify-start gap-x-1 border-b-2 outline-none before:w-[32px] before:h-[32px] before:p-2 before:content-[url('/assets/images/body/info.svg')]", unref(isSelected) ? "border-b-[blue]" : " border-b-[#D9D9D9]"]
      }, _attrs))}><input class="w-[100%] h-[32px] outline-none bg-white text-[#4C4C4C] font-[300] text-[16px]/[18px] p-2" type="text" name="info" id="info"${ssrRenderAttr("value", info.value)} autocomplete="off" maxlength="150" placeholder="\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F..."></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/Info.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
function useValidateForm() {
  const formData = reactive({
    name: "",
    prefix: "",
    phone: "",
    info: "",
    price: 0,
    discount: 0,
    update_phone: ""
  });
  const rules = computed(() => {
    return {
      name: {
        requred: helpers.withMessage(
          "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.\u041D\u0435 \u043C\u0435\u043D\u0435\u0435 3-\u0445 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432...",
          required
        ),
        minLength: helpers.withMessage(
          "\u0414\u043B\u0438\u043D\u0430 \u0438\u043C\u0435\u043D\u0438 \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435 3-\u0445 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432...",
          minLength(3)
        )
      },
      prefix: {
        required: helpers.withMessage("\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435...", required),
        numeric: helpers.withMessage("\u0422\u043E\u043B\u044C\u043A\u043E \u0446\u0438\u0444\u0440\u044B...", numeric),
        minLength: helpers.withMessage("\u041D\u0435 \u043C\u0435\u043D\u044C\u0448\u0435 3-\u0445 \u0446\u0438\u0444\u0440...", minLength(3))
      },
      phone: {
        required: helpers.withMessage("\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435...", required),
        numeric: helpers.withMessage("\u0422\u043E\u043B\u044C\u043A\u043E \u0446\u0438\u0444\u0440\u044B...", numeric),
        minLength: helpers.withMessage("\u041D\u0435 \u043C\u0435\u043D\u044C\u0448\u0435 7-\u043C\u0438 \u0446\u0438\u0444\u0440...", minLength(7))
      }
    };
  });
  const v$ = useVuelidate(rules, formData);
  return {
    formData,
    v$
  };
}
const _imports_0$1 = "data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.6577%2017.8362C20.5726%2017.8362%2018.8762%2019.5325%2018.8762%2021.6177C18.8762%2023.7029%2020.5726%2025.3992%2022.6577%2025.3992C24.7433%2025.3992%2026.4393%2023.7029%2026.4393%2021.6177C26.4393%2019.5325%2024.7429%2017.8362%2022.6577%2017.8362ZM22.6577%2023.5085C21.615%2023.5085%2020.767%2022.6604%2020.767%2021.6177C20.767%2020.575%2021.615%2019.7269%2022.6577%2019.7269C23.7005%2019.7269%2024.5485%2020.575%2024.5485%2021.6177C24.5485%2022.6605%2023.7005%2023.5085%2022.6577%2023.5085Z'%20fill='%23A5A5A5'/%3e%3cpath%20d='M9.73733%2017.8362C7.65216%2017.8362%205.95581%2019.5325%205.95581%2021.6177C5.95581%2023.7029%207.65216%2025.3992%209.73733%2025.3992C11.8225%2025.3992%2013.5189%2023.7029%2013.5189%2021.6177C13.5189%2019.5325%2011.8225%2017.8362%209.73733%2017.8362ZM9.73733%2023.5085C8.6946%2023.5085%207.84657%2022.6604%207.84657%2021.6177C7.84657%2020.575%208.6946%2019.7269%209.73733%2019.7269C10.7798%2019.7269%2011.6281%2020.575%2011.6281%2021.6177C11.6281%2022.6605%2010.7801%2023.5085%209.73733%2023.5085Z'%20fill='%23A5A5A5'/%3e%3cpath%20d='M25.204%207.01218C25.0433%206.69296%2024.7165%206.49158%2024.3591%206.49158H19.3801V8.38234H23.7761L26.3504%2013.5025L28.0401%2012.6529L25.204%207.01218Z'%20fill='%23A5A5A5'/%3e%3cpath%20d='M19.8216%2020.7036H12.6682V22.5944H19.8216V20.7036Z'%20fill='%23A5A5A5'/%3e%3cpath%20d='M6.90108%2020.7036H3.62382C3.10163%2020.7036%202.67847%2021.1268%202.67847%2021.649C2.67847%2022.1712%203.10169%2022.5943%203.62382%2022.5943H6.90114C7.42333%2022.5943%207.84649%2022.1711%207.84649%2021.649C7.84649%2021.1268%207.42327%2020.7036%206.90108%2020.7036Z'%20fill='%23A5A5A5'/%3e%3cpath%20d='M29.8013%2014.9243L27.9418%2012.5294C27.7631%2012.2987%2027.4874%2012.1638%2027.1952%2012.1638H20.3255V5.54618C20.3255%205.02399%2019.9023%204.60083%2019.3801%204.60083H3.62382C3.10163%204.60083%202.67847%205.02405%202.67847%205.54618C2.67847%206.06831%203.10169%206.49153%203.62382%206.49153H18.4347V13.1092C18.4347%2013.6314%2018.8579%2014.0545%2019.3801%2014.0545H26.7323L28.1091%2015.828V20.7037H25.4935C24.9713%2020.7037%2024.5482%2021.1269%2024.5482%2021.649C24.5482%2022.1712%2024.9714%2022.5944%2025.4935%2022.5944H29.0544C29.5766%2022.5944%2029.9998%2022.1712%2029.9998%2021.649V15.5042C29.9998%2015.2943%2029.9299%2015.0901%2029.8013%2014.9243Z'%20fill='%23A5A5A5'/%3e%3cpath%20d='M6.83831%2015.9138H2.48954C1.96735%2015.9138%201.54419%2016.337%201.54419%2016.8592C1.54419%2017.3814%201.96741%2017.8045%202.48954%2017.8045H6.83825C7.36044%2017.8045%207.7836%2017.3813%207.7836%2016.8592C7.78366%2016.337%207.36044%2015.9138%206.83831%2015.9138Z'%20fill='%23A5A5A5'/%3e%3cpath%20d='M9.0126%2012.1954H0.945352C0.423223%2012.1954%200%2012.6187%200%2013.1408C0%2013.663%200.423223%2014.0862%200.945352%2014.0862H9.0126C9.53479%2014.0862%209.95795%2013.663%209.95795%2013.1408C9.95795%2012.6187%209.53479%2012.1954%209.0126%2012.1954Z'%20fill='%23A5A5A5'/%3e%3cpath%20d='M10.5568%208.47693H2.48954C1.96735%208.47693%201.54419%208.90015%201.54419%209.42228C1.54419%209.94447%201.96741%2010.3676%202.48954%2010.3676H10.5568C11.079%2010.3676%2011.5021%209.94441%2011.5021%209.42228C11.5022%208.90015%2011.079%208.47693%2010.5568%208.47693Z'%20fill='%23A5A5A5'/%3e%3c/svg%3e";
const _imports_0 = "data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_103_821)'%3e%3cpath%20d='M25.334%2027.3722L23.8127%209.07532C23.7712%208.57565%2023.3834%208.19292%2022.919%208.19292H19.7818V6.66483C19.7818%203.81694%2017.6366%201.5%2014.9998%201.5C12.3631%201.5%2010.2182%203.81694%2010.2182%206.66483V8.19292H7.07886C6.61441%208.19292%206.22664%208.57565%206.18513%209.07532L4.65788%2027.4442C4.63539%2027.7153%204.71938%2027.9839%204.88939%2028.1847C5.05941%2028.3855%205.29977%2028.4999%205.55162%2028.4999H24.4464C24.4471%2028.4999%2024.448%2028.4999%2024.4487%2028.4999C24.9444%2028.4999%2025.3461%2028.066%2025.3461%2027.5308C25.346%2027.4769%2025.3419%2027.4238%2025.334%2027.3722ZM12.0128%206.66483C12.0128%204.88568%2013.3528%203.43822%2014.9999%203.43822C16.6472%203.43822%2017.9873%204.88568%2017.9873%206.66483V8.19292H12.0128V6.66483ZM6.53317%2026.5618L7.89925%2010.1311H10.2182V11.8642C10.2182%2012.3994%2010.6198%2012.8333%2011.1155%2012.8333C11.6112%2012.8333%2012.0128%2012.3994%2012.0128%2011.8642V10.1311H17.9873V11.8642C17.9873%2012.3994%2018.389%2012.8333%2018.8846%2012.8333C19.3803%2012.8333%2019.782%2012.3994%2019.782%2011.8642V10.1311H22.0987L23.4648%2026.5618H6.53317Z'%20fill='%23222222'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_103_821'%3e%3crect%20width='25'%20height='27'%20fill='white'%20transform='translate(2.5%201.5)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
const useOrder = defineStore("orderForm", () => {
  const isActive = ref(false);
  const getActive = computed(() => {
    return isActive.value;
  });
  function setOrderActive(param) {
    isActive.value = param;
  }
  return {
    getActive,
    setOrderActive
  };
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Order",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useCatStore();
    const { allPrice, allPriceWithDiscount } = storeToRefs(store);
    const orderStore = useOrder();
    const { getActive } = storeToRefs(orderStore);
    const isShow = ref(false);
    const isOut = ref(false);
    const timerRef = ref(-1);
    const pickValues = ref(["\u041A\u0443\u0440\u044C\u0435\u0440", "\u0421\u0430\u043C\u043E\u0432\u044B\u0432\u043E\u0437"]);
    const Picked = ref(pickValues.value[1]);
    const { v$, formData } = useValidateForm();
    watch(getActive, () => {
      isShow.value = getActive.value;
    });
    onUnmounted(() => {
      if (timerRef.value !== -1) {
        clearTimeout(timerRef.value);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FormName = _sfc_main$5;
      const _component_FormPhone = _sfc_main$4;
      const _component_FormInfo = _sfc_main$3;
      if (unref(isShow)) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["fixed top-0 bottom-0 right-0 w-[98%] lg:w-auto z-40", unref(isOut) ? "animate-toTop" : "animate-fromTop"]
        }, _attrs))}><div class="bg-[#EBE1D7] min-w-[320px] lg:w-[612px] h-[100vh] font-neucha font-[400] p-4 lg:p-[36px] overflow-hidden"><div class="w-fit mx-auto flex items-center justify-center gap-x-[15px]"><span class="w-[8px] h-[8px] bg-[#191919] rounded-full"></span><h2 class="text-[#191919] text-[32px]/[36px]">\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435 \u0437\u0430\u043A\u0430\u0437\u0430</h2><span class="w-[8px] h-[8px] bg-[#191919] rounded-full"></span></div><div class="w-[100%] max-h-[100vh] tall:max-h-[500px] overflow-x-hidden overflow-y-auto"><form class="mt-3 lg:mt-[27px]" action="#"><div class="w-[99%] lg:w-[540px] min-h-[154px] bg-white rounded-[8px] border-[1px] border-[#0C334A] px-2 lg:px-[16px] pt-3 lg:pt-[20px] pb-4 lg:pb-[32px] mt-[14px]"><div class="flex items-center justify-start gap-x-[8px] lg:gap-x-[14px] font-myArial"><span class="block w-[32px] h-[32px] bg-[#D34A44] text-white text-[14px]/[16px] lg:text-[20px]/[22px] rounded-full text-center p-2 lg:p-1">1</span><span class="text-[14px]/[16px] lg:text-[18px]/[20px]">\u0421\u043F\u043E\u0441\u043E\u0431 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438</span></div><div class="w-[100%] grid grid-cols-1 gap-y-[14px] lg:gap-y-[22px] font-myArial px-[22px] lg:px-[46px]"><div class="grid grid-cols-[32px_32px_1fr_2fr] gap-x-[20px] lg:gap-x-[40px] gap-y-[10px] lg:gap-y-[14px] items-center justify-start mt-[12px]"><label for="delivery"><input class="inline-block w-[0px] h-[0px] opacity-0 cursor-pointer peer" type="radio" name="delivery" id="delivery"${ssrRenderAttr("value", unref(pickValues)[0])}${ssrIncludeBooleanAttr(ssrLooseEqual(unref(Picked), unref(pickValues)[0])) ? " checked" : ""}><div class="inline-block w-[32px] h-[32px] rounded-full p-2 bg-[lightgrey]/50 bg-[url(&#39;/assets/images/body/check-box.svg&#39;)] bg-[length:32px_32px] bg-no-repeat bg-center cursor-pointer mt-[-12px] peer-checked:bg-[green] peer-checked:bg-[length:12px_12px] peer-checked:bg-[url(&#39;assets/images/body/check.svg&#39;)]"></div></label><img class="block w-[30px] h-[30px]"${ssrRenderAttr("src", _imports_0$1)} alt="delivery" loading="lazy"><span class="font-myArial text-[14px]/[16px] lg:text-[18px]/[20px] text-[#A5A5A5]">\u041A\u0443\u0440\u044C\u0435\u0440</span><span class="font-myArial text-[12px]/[14px] text-[#FF0000] font-[300] ml-[18px] lg:ml-[35px] whitespace-normal lg:whitespace-nowrap">\u0412\u0440\u0435\u043C\u0435\u043D\u043D\u043E \u043D\u0435 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E</span><label><input class="inline-block w-[0px] h-[0px] opacity-0 cursor-pointer peer" type="radio" name="delivery"${ssrRenderAttr("value", unref(pickValues)[1])} checked${ssrIncludeBooleanAttr(ssrLooseEqual(unref(Picked), unref(pickValues)[1])) ? " checked" : ""}><div class="inline-block w-[32px] h-[32px] rounded-full p-2 bg-[lightgrey]/50 bg-[url(&#39;/assets/images/body/check-box.svg&#39;)] bg-[length:32px_32px] bg-no-repeat bg-center cursor-pointer mt-[-12px] peer-checked:bg-[green] peer-checked:bg-[length:12px_12px] peer-checked:bg-[url(&#39;assets/images/body/check.svg&#39;)]"></div></label><img class="block w-[30px] h-[30px]"${ssrRenderAttr("src", _imports_0)} alt="delivery" loading="lazy"><span class="font-myArial text-[14px]/[16px] lg:text-[18px]/[20px] text-[#222222]">\u0421\u0430\u043C\u043E\u0432\u044B\u0432\u043E\u0437</span><span class="font-myArial text-[14px]/[16px] text-[#3F4871] font-[700] ml-[18px] lg:ml-[35px]">\u0421\u043A\u0438\u0434\u043A\u0430 - 10% <span class="block text-[8px]/[9px]">\u043D\u0430 \u0441\u0442\u043E\u0438\u043E\u043C\u043E\u0441\u0442\u044C \u043F\u043E\u043A\u0443\u043F\u043A\u0438</span></span></div></div></div><div class="w-[99%] lg:w-[540px] min-h-[270px] bg-white rounded-[8px] border-[1px] border-[#0C334A] px-2 lg:px-[16px] pt-[10px] lg:pt-[20px] pb-4 lg:pb-[32px] mt-[14px]"><div class="flex items-center justify-start gap-x-[10px] lg:gap-x-[14px] font-myArial"><span class="block w-[32px] h-[32px] bg-[#D34A44] text-white text-[14px]/[16px] lg:text-[20px]/[22px] rounded-full text-center p-2 lg:p-1">2</span><span class="text-[14px]/[16px] lg:text-[20px]/[22px]">\u0414\u0430\u043D\u043D\u044B\u0435 \u0434\u043B\u044F \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438</span></div><div class="w-[100%] grid grid-cols-1 gap-y-[14px] lg:gap-y-[22px] font-myArial px-[22px] lg:px-[46px]"><div>`);
        _push(ssrRenderComponent(_component_FormName, {
          client: unref(formData).name,
          "onUpdate:client": ($event) => unref(formData).name = $event
        }, null, _parent));
        if (unref(v$).name.$error) {
          _push(`<div class="w-[100%] font-myArial font-[300] text-[12px]/[14px] text-[#FF0000] mt-[4px]"><!--[-->`);
          ssrRenderList(unref(v$).name.$errors, (err) => {
            _push(`<span>${ssrInterpolate(err.$message)}</span>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div>`);
        _push(ssrRenderComponent(_component_FormPhone, {
          prefix: unref(formData).prefix,
          "onUpdate:prefix": ($event) => unref(formData).prefix = $event,
          phone: unref(formData).phone,
          "onUpdate:phone": ($event) => unref(formData).phone = $event
        }, null, _parent));
        if (unref(v$).phone.$error || unref(v$).prefix.$error) {
          _push(`<div class="w-[100%] font-myArial font-[300] text-[12px]/[14px] text-[#FF0000] mt-[4px]"><!--[-->`);
          ssrRenderList(unref(v$).prefix.$errors, (err) => {
            _push(`<span>${ssrInterpolate(err.$message)}</span>`);
          });
          _push(`<!--]--><!--[-->`);
          ssrRenderList(unref(v$).phone.$errors, (err) => {
            _push(`<span>${ssrInterpolate(err.$message)}</span>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        _push(ssrRenderComponent(_component_FormInfo, {
          info: unref(formData).info,
          "onUpdate:info": ($event) => unref(formData).info = $event
        }, null, _parent));
        _push(`</div></div><div class="w-[99%] lg:w-[540px] min-h-[270px] bg-white rounded-[8px] border-[1px] border-[#0C334A] px-[10px] lg:px-[16px] py-4 lg:py-[32px] mt-[14px]"><div class="w-[90%] mx-auto lg:w-[100%] overflow-hidden grid grid-cols-[50%_200px] gap-x-[22px] lg:gap-x-[45px] gap-y-[20px] lg:px-[46px] font-myArial font-[300] text-[14px]/[16px] lg:text-[18px]/[20px] text-[#222222]"><input type="hidden"${ssrRenderAttr("value", unref(allPrice))}><input type="hidden"${ssrRenderAttr("value", unref(allPriceWithDiscount))}><span class="font-light text-[16px]/[18px] lg:text-[18px]/[20px]">C\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0442\u043E\u0432\u0430\u0440\u043E\u0432</span><span class="font-[400]">${ssrInterpolate(unref(allPrice))} \u20BD</span><div class="col-span-2 border-t-2 border-t-[#D9D9D9]"></div><span class="font-[400] text-[16px]/[18px] lg:text-[18px]/[20px]">\u0418\u0442\u043E\u0433\u043E \u043A \u043E\u043F\u043B\u0430\u0442\u0435 `);
        if (unref(Picked) === unref(pickValues)[1]) {
          _push(`<span class="text-[12px]/[13px] text-blue-500 whitespace-nowrap"> \u0441\u043A\u0438\u0434\u043A\u0430 (10%)</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</span>`);
        if (unref(Picked) === unref(pickValues)[1]) {
          _push(`<span class="font-[400]">${ssrInterpolate(unref(allPriceWithDiscount))} \u20BD</span>`);
        } else {
          _push(`<span>${ssrInterpolate(unref(allPrice))} \u20BD</span>`);
        }
        _push(`</div><input class="col-span-2 w-[100%] bg-[#0C334A] text-white text-[14px]/[16px] lg:text-[18px]/[20px] tracking-[0.05em] font-medium mt-[40px] border-[1px] border-[#0C334A] rounded-[4px] py-[14px] active:scale-75" type="submit" value="\u041A\u0443\u043F\u0438\u0442\u044C \u0438 \u043E\u043F\u043B\u0430\u0442\u0438\u0442\u044C"><button class="col-span-2 w-[100%] bg-[#0C334A] text-white text-[14px]/[16px] lg:text-[18px]/[20px] tracking-[0.05em] font-medium mt-[8px] border-[1px] border-[#0C334A] rounded-[4px] py-[14px] active:scale-75"> \u0417\u0430\u043A\u0440\u044B\u0442\u044C </button><div class="col-span-2 mt-5 text-center"><span class="text-[12px]/[16px] font-[300] font-myArial">\u0421\u043E\u0437\u0434\u0430\u0432\u0430\u044F \u0437\u0430\u043A\u0430\u0437, \u0432\u044B \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044C \u0441 <span class="text-blue-800">\u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445</span></span></div></div></form></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/Order.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CatBag",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useCatStore();
    const { isActive, isActivePanel, allPrice } = storeToRefs(store);
    const order = useOrder();
    const { setOrderActive } = order;
    const activate = ref(false);
    const isClosePanel = ref(false);
    const allItemsSum = ref(0);
    const showOrder = ref(false);
    const showOrderForm = () => {
      showOrder.value = true;
      setOrderActive(showOrder.value);
      showOrder.value = false;
    };
    watchEffect(() => {
      activate.value = isActive.value;
      isClosePanel.value = isActivePanel.value;
      allItemsSum.value = allPrice.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CartCatBagItems = __nuxt_component_0;
      const _component_UIBackToZakazButton = _sfc_main$7;
      const _component_UIOrderButton = _sfc_main$6;
      const _component_FormOrder = _sfc_main$2;
      ssrRenderTeleport(_push, (_push2) => {
        if (unref(activate)) {
          _push2(`<div class="fixed left-0 top-0 bottom-0 right-0 bg-black/70 z-10"><div class="w-[100%] h-[100%] absolute left-0 top-0 z-20 backdrop-blur-sm"></div><div class="${ssrRenderClass([unref(isClosePanel) ? "animate-fromRight" : "animate-toRight", "w-[98%] lg:w-[612px] h-[100%] bg-[#EBE1D7] relative z-30 ml-auto"])}"><div class="w-fit mx-auto text-[#312525] flex items-center justify-center gap-x-[40px] pt-[16px] lg:pt-[40px]"><span class="w-[8px] h-[8px] rounded-full bg-[#312525]"></span><h2 class="uppercase font-neucha text-[32px]/[40px] lg:text-[48px]/[52px] font-[400]"> \u043A\u043E\u0440\u0437\u0438\u043D\u0430 </h2><span class="w-[8px] h-[8px] rounded-full bg-[#312525]"></span></div>`);
          _push2(ssrRenderComponent(_component_CartCatBagItems, null, null, _parent));
          _push2(`<div class="w-[100%] px-[10px] lg:px-0 lg:pl-[45px] mt-2 lg:mt-8 lg:max-w-[70%]"><span class="font-neucha font-[400] text-[16px]/[20px] lg:text-[20px]/[22px] tracking-[0.05em] text-black">\u041E\u0431\u0449\u0430\u044F \u0441\u0443\u043C\u043C\u0430: ${ssrInterpolate(unref(allItemsSum))} \u20BD </span><p class="mt-2 lg:mt-4 text-[12px]/[16px] lg:text-[16px]/[20px] tracking-[0.03em]"> *\u0421\u0443\u043C\u043C\u0430 \u0437\u0430\u043A\u0430\u0437\u0430 \u0434\u043B\u044F \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \u043A\u0443\u0440\u044C\u0435\u0440\u043E\u043C \u0434\u043E\u043B\u0436\u043D\u0430 \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0442\u044C \u043D\u0435 \u043C\u0435\u043D\u0435\u0435 500 \u20BD </p></div><div class="fixed lg:px-[70px] xl:px-[10px] w-[100%] bottom-1 lg:bottom-11"><div class="w-[100%] grid grid-cols-1 lg:grid-cols-[25%_25%] xl:grid-cols-[16%_16%] gap-y-[12px] items-start px-6 lg:gap-x-[30px]">`);
          _push2(ssrRenderComponent(_component_UIBackToZakazButton, null, null, _parent));
          _push2(ssrRenderComponent(_component_UIOrderButton, { onOrderForm: showOrderForm }, null, _parent));
          _push2(`</div></div>`);
          _push2(ssrRenderComponent(_component_FormOrder, null, null, _parent));
          _push2(`</div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cart/CatBag.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MobileMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const catStore = useCatStore();
    const { isActive } = storeToRefs(catStore);
    const { setActive, setPanel } = catStore;
    const callStore = (event) => {
      event.preventDefault();
      if (isActive.value) {
        setActive(false);
      } else {
        setPanel(true);
        setActive(true);
      }
    };
    const store = useMobileMenuStore();
    const { getActive } = storeToRefs(store);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1;
      if (unref(getActive)) {
        _push(`<section${ssrRenderAttrs(mergeProps({
          class: ["inline-block w-[100%] h-fit bg-slate-100 font-montserrat px-4 pt-4 pb-0 lg:hidden shadow-[0px_4px_4px_0_rgba(0,_0,_0,_0.1)]", unref(getActive) ? " animate-fromRight" : " animate-toTop"]
        }, _attrs))}><ul class="flex items-center justify-center gap-x-3 text-[10px]/[16px] font-bold uppercase"><li class="block cursor-pointer md:hidden">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "flex items-start justify-start",
          onClick: callStore
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img class="block w-[14px] h-[14px]"${ssrRenderAttr("src", _imports_0)} alt="bag" loading="lazy"${_scopeId}><span${_scopeId}> \u041A\u043E\u0440\u0437\u0438\u043D\u0430 </span>`);
            } else {
              return [
                createVNode("img", {
                  class: "block w-[14px] h-[14px]",
                  src: _imports_0,
                  alt: "bag",
                  loading: "lazy"
                }),
                createVNode("span", null, " \u041A\u043E\u0440\u0437\u0438\u043D\u0430 ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/Cats",
          "exact-active-class": "bg-[#121212] text-white text-[12px]/[16px] rounded-t-md p-2 pb-0 font-normal"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u041A\u043E\u0442\u0438\u043A\u0438`);
            } else {
              return [
                createTextVNode("\u041A\u043E\u0442\u0438\u043A\u0438")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/RunPage",
          "exact-active-class": "bg-[#121212] text-white text-[12px]/[16px] rounded-t-md p-2 pb-0 font-normal"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430`);
            } else {
              return [
                createTextVNode("\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/ActionPage",
          "exact-active-class": "bg-[#121212] text-white text-[12px]/[16px] rounded-t-md p-2 pb-0 font-normal"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u0410\u043A\u0446\u0438\u0438`);
            } else {
              return [
                createTextVNode("\u0410\u043A\u0446\u0438\u0438")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/ContactsPage",
          "exact-active-class": "bg-[#121212] text-white text-[12px]/[16px] rounded-t-md p-2 pb-0 font-normal"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B`);
            } else {
              return [
                createTextVNode("\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li></ul></section>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/menu/mobile/MobileMenu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _, __nuxt_component_0$1 as a, _sfc_main$1 as b, _sfc_main$c as c };
//# sourceMappingURL=MobileMenu-D8Uk8a12.mjs.map
