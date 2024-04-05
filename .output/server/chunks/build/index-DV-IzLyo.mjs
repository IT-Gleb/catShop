import { b as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as __nuxt_component_0$1, a as asyncDataDefaults, u as useNuxtApp, c as createError } from './server.mjs';
import { _ as _sfc_main$8, a as __nuxt_component_0$1$1, b as _sfc_main$1$1, c as _sfc_main$c } from './MobileMenu-D8Uk8a12.mjs';
import { useSSRContext, defineComponent, withCtx, createVNode, mergeProps, ref, watchEffect, unref, withAsyncContext, shallowRef, toRef, getCurrentInstance, onServerPrefetch } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrGetDirectiveProps, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { u as useCatStore } from './mobileMenuStore-CrWCBfEn.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@vuelidate/core';
import '@vuelidate/validators';
import 'lodash-es';

const isDefer = (dedupe) => dedupe === "defer" || dedupe === false;
function useAsyncData(...args) {
  var _a2, _b2, _c, _d, _e, _f, _g, _h, _i;
  var _b;
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, _handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof _handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  const nuxtApp = useNuxtApp();
  const handler = _handler ;
  const getDefault = () => null;
  const getDefaultCachedData = () => nuxtApp.isHydrating ? nuxtApp.payload.data[key] : nuxtApp.static.data[key];
  options.server = (_a2 = options.server) != null ? _a2 : true;
  options.default = (_b2 = options.default) != null ? _b2 : getDefault;
  options.getCachedData = (_c = options.getCachedData) != null ? _c : getDefaultCachedData;
  options.lazy = (_d = options.lazy) != null ? _d : false;
  options.immediate = (_e = options.immediate) != null ? _e : true;
  options.deep = (_f = options.deep) != null ? _f : asyncDataDefaults.deep;
  options.dedupe = (_g = options.dedupe) != null ? _g : "cancel";
  const hasCachedData = () => options.getCachedData(key, nuxtApp) != null;
  if (!nuxtApp._asyncData[key] || !options.immediate) {
    (_h = (_b = nuxtApp.payload._errors)[key]) != null ? _h : _b[key] = null;
    const _ref = options.deep ? ref : shallowRef;
    nuxtApp._asyncData[key] = {
      data: _ref((_i = options.getCachedData(key, nuxtApp)) != null ? _i : options.default()),
      pending: ref(!hasCachedData()),
      error: toRef(nuxtApp.payload._errors, key),
      status: ref("idle")
    };
  }
  const asyncData = { ...nuxtApp._asyncData[key] };
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    var _a3;
    if (nuxtApp._asyncDataPromises[key]) {
      if (isDefer((_a3 = opts.dedupe) != null ? _a3 : options.dedupe)) {
        return nuxtApp._asyncDataPromises[key];
      }
      nuxtApp._asyncDataPromises[key].cancelled = true;
    }
    if ((opts._initial || nuxtApp.isHydrating && opts._initial !== false) && hasCachedData()) {
      return Promise.resolve(options.getCachedData(key, nuxtApp));
    }
    asyncData.pending.value = true;
    asyncData.status.value = "pending";
    const promise = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxtApp));
        } catch (err) {
          reject(err);
        }
      }
    ).then(async (_result) => {
      if (promise.cancelled) {
        return nuxtApp._asyncDataPromises[key];
      }
      let result = _result;
      if (options.transform) {
        result = await options.transform(_result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      nuxtApp.payload.data[key] = result;
      asyncData.data.value = result;
      asyncData.error.value = null;
      asyncData.status.value = "success";
    }).catch((error) => {
      if (promise.cancelled) {
        return nuxtApp._asyncDataPromises[key];
      }
      asyncData.error.value = createError(error);
      asyncData.data.value = unref(options.default());
      asyncData.status.value = "error";
    }).finally(() => {
      if (promise.cancelled) {
        return;
      }
      asyncData.pending.value = false;
      delete nuxtApp._asyncDataPromises[key];
    });
    nuxtApp._asyncDataPromises[key] = promise;
    return nuxtApp._asyncDataPromises[key];
  };
  asyncData.clear = () => clearNuxtDataByKey(nuxtApp, key);
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxtApp.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxtApp.hook("app:created", async () => {
        await promise;
      });
    }
  }
  const asyncDataPromise = Promise.resolve(nuxtApp._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function clearNuxtDataByKey(nuxtApp, key) {
  if (key in nuxtApp.payload.data) {
    nuxtApp.payload.data[key] = void 0;
  }
  if (key in nuxtApp.payload._errors) {
    nuxtApp.payload._errors[key] = null;
  }
  if (nuxtApp._asyncData[key]) {
    nuxtApp._asyncData[key].data.value = void 0;
    nuxtApp._asyncData[key].error.value = null;
    nuxtApp._asyncData[key].pending.value = false;
    nuxtApp._asyncData[key].status.value = "idle";
  }
  if (key in nuxtApp._asyncDataPromises) {
    nuxtApp._asyncDataPromises[key].cancelled = true;
    nuxtApp._asyncDataPromises[key] = void 0;
  }
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "MenuItem",
  __ssrInlineRender: true,
  props: {
    title: { default: "lala" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><button${ssrRenderAttr("title", props.title)} class="min-w-[80px] h-[44px] xl:min-w-[140px] xl:h-[64px] rounded-[100px] py-[12px] px-[18px] xl:py-[16px] xl:px-[32px] uppercase font-neucha text-[16px]/[20px] xl:text-[28px]/[32px] text-[#B3A296] hover:bg-[#312525] focus:bg-[#312525] hover:text-white focus:text-white active:scale-75">${ssrInterpolate(props.title)}</button></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/menu/MenuItem.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_MenuItem = _sfc_main$7;
  _push(`<div${ssrRenderAttrs(_attrs)}><section class="mt-[22px] lg:mt-[100px]"><div class="w-fit mx-auto flex items-center justify-center gap-x-[10px] lg:gap-x-[40px]"><span class="bg-[#312525] w-[5px] lg:w-[10px] h-[5px] lg:h-[10px] rounded-full"></span><h2 class="font-neucha font-[400] text-[22px]/[24px] lg:text-[60px]/[67px] text-[#191919] lg:text-[#312525] uppercase"> \u043C\u0435\u043D\u044E </h2><span class="bg-[#312525] w-[5px] lg:w-[10px] h-[5px] lg:h-[10px] rounded-full"></span></div><div class="mt-[10px] lg:mt-[50px] flex items-center justify-center flex-wrap gap-x-[2px] lg:gap-x-2">`);
  _push(ssrRenderComponent(_component_MenuItem, { title: "\u0420\u043E\u043B\u043B\u044B" }, null, _parent));
  _push(ssrRenderComponent(_component_MenuItem, { title: "\u0441\u0443\u0448\u0438 \u0438 \u0433\u0443\u043D\u043A\u0430\u043D\u044B" }, null, _parent));
  _push(ssrRenderComponent(_component_MenuItem, { title: "\u0441\u0435\u0442\u044B" }, null, _parent));
  _push(ssrRenderComponent(_component_MenuItem, { title: "\u043B\u0430\u043F\u0448\u0430 \u0438 \u0440\u0438\u0441" }, null, _parent));
  _push(ssrRenderComponent(_component_MenuItem, { title: "\u0441\u0430\u043B\u0430\u0442\u044B" }, null, _parent));
  _push(ssrRenderComponent(_component_MenuItem, { title: "\u0413\u043E\u0440\u044F\u0447\u0438\u0435 \u0431\u043B\u044E\u0434\u0430" }, null, _parent));
  _push(`</div></section></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/menu/MainMenu.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "InBagButton",
  __ssrInlineRender: true,
  emits: ["activited"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        title: "\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E",
        class: "w-[100px] h-[35px] rounded-[8px] font-ptSansNarrow text-[15px]/[20px] font-[400] tracking-[0.04em] shadow-[0px_0px_12px_0px_#00000059] bg-[#312525] text-white active:scale-75"
      }, _attrs))}> \u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443 </button>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/InBagButton.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _imports_0$2 = "data:image/svg+xml,%3csvg%20width='14'%20height='2'%20viewBox='0%200%2014%202'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.3337%201.00024H1.66699'%20stroke='%232A344A'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
const _imports_1 = "data:image/svg+xml,%3csvg%20width='10'%20height='10'%20viewBox='0%200%2010%2010'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.55545%204.99998H1.44434M4.99989%208.55545V1.44434'%20stroke='%232A344A'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "MinPlusButton",
  __ssrInlineRender: true,
  props: {
    id: {}
  },
  emits: ["minus", "plus"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const store = useCatStore();
    const { ItemCount } = store;
    const thisCount = ref(ItemCount(props.id).value);
    watchEffect(() => {
      thisCount.value = ItemCount(props.id).value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-fit p-1 flex items-center justify-center gap-x-[12px]" }, _attrs))}><button class="w-[30px] h-[30px] bg-white p-[7px] font-bold text-black rounded-full active:scale-75"><img${ssrRenderAttr("src", _imports_0$2)} alt="minus" loading="lazy"></button><span class="font-neucha font-[400] text-[19px]/[20px] tracking-[0.05em]">${ssrInterpolate(unref(thisCount))}</span><button class="w-[30px] h-[30px] relative bg-white p-[7px] font-bold text-black rounded-full active:scale-75"><img class="block absolute left-[48%] top-[50%] translate-x-[-50%] translate-y-[-48%]"${ssrRenderAttr("src", _imports_1)} alt="plus" loading="lazy"></button></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/MinPlusButton.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _imports_0$1 = "" + buildAssetsURL("cat.DKMas90h.png");
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ItemCat",
  __ssrInlineRender: true,
  props: {
    pItem: {}
  },
  setup(__props) {
    const props = __props;
    const isActive = ref(false);
    const ThisItem = ref(props.pItem);
    const store = useCatStore();
    const { AddItem, setItemCount, DeleteItem, inBag, heartItem } = store;
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
    };
    const minusCount = () => {
      ThisItem.value.count--;
      if (ThisItem.value.count < 1) {
        ThisItem.value.count = 0;
      }
      setItemCount(ThisItem.value.id, ThisItem.value.count);
      if (ThisItem.value.count === 0) {
        DeleteItem(ThisItem.value.id);
      }
    };
    watchEffect(() => {
      isActive.value = inBag(ThisItem.value.id).value;
      if (isActive.value) {
        ThisItem.value.heart = heartItem(ThisItem.value.id).value;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIHeartButton = _sfc_main$c;
      const _component_UIInBagButton = _sfc_main$5;
      const _component_UIMinPlusButton = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["max-w-[270px] min-h-[390px] overflow-hidden rounded-[8px] transition-all flex flex-col py-[30px] shadow-[0px_0px_12px_0px_#00000040]", unref(isActive) ? "bg-[#312525] text-white" : "bg-[#FAFAFA]"]
      }, _attrs))}><header class="w-[100%]"><div class="w-fit mx-auto flex items-start justify-stretch"><img${ssrRenderAttr("src", _imports_0$1)} alt="catItem" loading="lazy">`);
      _push(ssrRenderComponent(_component_UIHeartButton, {
        "is-heart": unref(ThisItem).heart,
        "is-active": unref(isActive),
        "param-id": unref(ThisItem).id
      }, null, _parent));
      _push(`</div></header><main class="w-[100%] px-[30px] mt-6 h-[35%] flex-auto"><div class="flex items-start justify-between gap-x-[20px]"><span class="${ssrRenderClass([unref(isActive) ? "text-white" : "text-[#141414]", "font-neucha font-[400] text-[19px]/[25px] tracking-[0.1em] uppercase"])}">${ssrInterpolate(_ctx.pItem.name)}</span><span class="${ssrRenderClass([unref(isActive) ? "text-white" : "text-[#808080]", "font-myArial text-[13px]/[15px] font-[400] tracking-[0.04em]"])}">${ssrInterpolate(_ctx.pItem.weight)}\u0433.</span></div><p class="mt-[20px] h-[60%] overflow-x-hidden overflow-y-auto mb-3">${ssrInterpolate(_ctx.pItem.description)}</p></main><footer class="w-[100%] px-[30px]"><div class="flex items-center justify-between"><span class="${ssrRenderClass([unref(isActive) ? "text-white" : "text-[#141414]", "font-neucha font-[400] text-[19px]/[21px] tracking-[0.05em]"])}">${ssrInterpolate(_ctx.pItem.price)} \u20BD</span>`);
      if (!unref(isActive)) {
        _push(ssrRenderComponent(_component_UIInBagButton, { onActivited: clickActive }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(isActive)) {
        _push(ssrRenderComponent(_component_UIMinPlusButton, {
          id: unref(ThisItem).id,
          onMinus: minusCount,
          onPlus: addCount
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></footer></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ItemCat.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _imports_0 = "data:image/svg+xml,%3csvg%20width='25'%20height='15'%20viewBox='0%200%2025%2015'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11.5245%200.555247L0.399387%2011.6806C0.141869%2011.9379%200%2012.2814%200%2012.6476C0%2013.0139%200.141869%2013.3574%200.399387%2013.6147L1.21849%2014.434C1.75222%2014.9671%202.61969%2014.9671%203.15262%2014.434L12.4948%205.0918L21.8474%2014.4444C22.1049%2014.7017%2022.4482%2014.8438%2022.8142%2014.8438C23.1807%2014.8438%2023.524%2014.7017%2023.7817%2014.4444L24.6006%2013.6251C24.8581%2013.3675%2025%2013.0243%2025%2012.658C25%2012.2917%2024.8581%2011.9482%2024.6006%2011.6909L13.4653%200.555247C13.207%200.297323%2012.8621%200.155658%2012.4954%200.156471C12.1273%200.155658%2011.7826%200.297323%2011.5245%200.555247Z'%20fill='white'/%3e%3c/svg%3e";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "UpButton",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        title: "\u041A \u043D\u0430\u0447\u0430\u043B\u0443 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B",
        class: "w-[60px] h-[60px] bg-[#312525] px-4 active:scale-75 rounded-full"
      }, _attrs))}><img class="w-[32px] h-[32px]"${ssrRenderAttr("src", _imports_0)} alt="up" losding="lazy"></button>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/UpButton.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
function forButton() {
  const isShow = ref(false);
  const show = () => {
    isShow.value = true;
  };
  const hide = () => {
    isShow.value = false;
  };
  return {
    isShow,
    show,
    hide
  };
}
const vIntercept = {
  mounted(el, binding) {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: [1]
    };
    const this_Callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (binding.value.func && typeof binding.value.func === "function")
            binding.value.func();
        }
      });
    };
    const this_observer = new IntersectionObserver(this_Callback, options);
    this_observer.observe(el);
  },
  name: "Intercept"
};
const vIntercept$1 = vIntercept;
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CatItems",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { pending, error, data } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      "catItems",
      async () => await $fetch("/api/items")
    )), __temp = await __temp, __restore(), __temp);
    const { isShow, show, hide } = forButton();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ItemCat = _sfc_main$3;
      const _component_UIUpButton = _sfc_main$2;
      _push(`<!--[-->`);
      if (unref(pending)) {
        _push(`<div data-v-45a62a66>Loading...</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div data-v-45a62a66><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, unref(vIntercept$1), { func: unref(hide) }))} data-v-45a62a66></div>`);
      if (!unref(pending) && !unref(error)) {
        _push(`<section class="mt-[50px] w-fit mx-auto gridData" data-v-45a62a66><!--[-->`);
        ssrRenderList(unref(data), (item) => {
          _push(ssrRenderComponent(_component_ItemCat, {
            key: item.id,
            "p-item": item
          }, null, _parent));
        });
        _push(`<!--]-->`);
        if (unref(isShow)) {
          _push(`<div class="fixed bottom-16 right-8 animate-fromTop" data-v-45a62a66>`);
          _push(ssrRenderComponent(_component_UIUpButton, null, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, unref(vIntercept$1), { func: unref(show) }))} data-v-45a62a66></div></div><!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CatItems.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-45a62a66"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLoadingIndicator = __nuxt_component_0$1;
      const _component_MainWrapper = __nuxt_component_0$1$1;
      const _component_CartCatBag = _sfc_main$1$1;
      const _component_MenuMainMenu = __nuxt_component_3;
      const _component_CatItems = __nuxt_component_4;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_NuxtLoadingIndicator, { color: "navy" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$8, null, null, _parent));
      _push(ssrRenderComponent(_component_MainWrapper, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_CartCatBag, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_MenuMainMenu, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CatItems, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode(_component_CartCatBag),
                createVNode(_component_MenuMainMenu),
                createVNode(_component_CatItems)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DV-IzLyo.mjs.map
