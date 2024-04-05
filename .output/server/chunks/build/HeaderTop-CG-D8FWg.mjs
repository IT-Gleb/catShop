import { b as buildAssetsURL } from '../routes/renderer.mjs';
import { useSSRContext, defineComponent, mergeProps, ref, withCtx, createVNode, unref, createTextVNode } from 'vue';
import { s as storeToRefs } from './server.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { a as useMobileMenuStore, u as useCatStore, _ as __nuxt_component_1 } from './mobileMenuStore-CrWCBfEn.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
import 'lodash-es';

const Cats_URL = "/Cats";
const Run_URL = "/RunPage";
const Action_URL = "/ActionPage";
const Contacts_URL = "/ContactsPage";
const _imports_0$2 = "data:image/svg+xml,%3csvg%20width='24'%20height='25'%20viewBox='0%200%2024%2025'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3%206.78357H21M3%2012.7836H21M3%2018.7836H21'%20stroke='white'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "BurgerButton",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useMobileMenuStore();
    storeToRefs(store);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({ class: "w-[18px] h-[16px] active:scale-75" }, _attrs))}><img${ssrRenderAttr("src", _imports_0$2)} alt="menu" loading="lazy"></button>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/BurgerButton.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _imports_0$1 = "data:image/svg+xml,%3csvg%20width='8'%20height='5'%20viewBox='0%200%208%205'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.00247%200.5C1.98607%200.5%200.345703%202.14779%200.345703%204.17288V4.24817H1.45384V4.17288C1.45384%202.76136%202.59704%201.61287%204.00251%201.61287C5.40798%201.61287%206.55117%202.76136%206.55117%204.17288V4.24817H7.65927V4.17288C7.65923%202.14779%206.01887%200.5%204.00247%200.5Z'%20fill='%23212121'/%3e%3c/svg%3e";
const _imports_1$1 = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15.491%2012.168L14.6462%201.47652C14.5938%200.787665%2014.0135%200.248283%2013.3257%200.248283H11.6569V2.73152C11.6569%203.03904%2011.409%203.28797%2011.1028%203.28797C10.797%203.28797%2010.5488%203.03904%2010.5488%202.73152V0.248283H5.45147V2.73152C5.45147%203.03904%205.20324%203.28797%204.89741%203.28797C4.5912%203.28797%204.34334%203.03904%204.34334%202.73152V0.248283H2.67453C1.98677%200.248283%201.40647%200.787665%201.35404%201.47504L0.508918%2012.1695C0.443553%2013.026%200.739412%2013.8785%201.32042%2014.5084C1.90146%2015.1383%202.72515%2015.5%203.58025%2015.5H12.42C13.2751%2015.5%2014.0988%2015.1383%2014.6799%2014.5084C15.2609%2013.8785%2015.5567%2013.026%2015.491%2012.168ZM7.20357%209.73316L7.22121%209.74884C7.22121%209.74127%207.22121%209.74884%207.23886%209.76452C7.22121%209.74884%207.22121%209.74884%207.20357%209.73316L7.23886%209.76452C7.23886%209.76452%207.22121%209.74884%207.20357%209.73316Z'%20fill='%23212121'/%3e%3c/svg%3e";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "BagButton",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useCatStore();
    storeToRefs(store);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        title: "\u041A\u043E\u0440\u0437\u0438\u043D\u0430",
        class: "w-[42px] h-[42px] bg-white rounded-full overflow-hidden active:scale-75"
      }, _attrs))}><div class="w-[100%] h-[100%] relative"><img class="absolute left-[50%] top-[19%] translate-x-[-52%] translate-y-[-19%]"${ssrRenderAttr("src", _imports_0$1)} alt="bag" loading="lazy"><img class="absolute left-[49%] top-[52%] translate-x-[-49%] translate-y-[-52%]"${ssrRenderAttr("src", _imports_1$1)} alt="bag" loading="lazy"></div></button>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/BagButton.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({ class: "w-[115px] h-[42px] bg-white text-[#212121] rounded-[30px] px-[30px] pt-[12px] pb-[10px] active:scale-75" }, _attrs))}> \u0412\u043E\u0439\u0442\u0438 </button>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/LoginButton.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _imports_0 = "" + buildAssetsURL("smallLogo.CmQuEqVc.png");
const _imports_1 = "" + buildAssetsURL("logoCat.DyIhhIsL.svg");
const _imports_2 = "data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15.984%2012.5283C14.8172%2011.5982%2013.6332%2011.0349%2012.4808%2011.9635L11.7927%2012.5248C11.2892%2012.9322%2010.3531%2014.8358%206.73382%2010.9555C3.11531%207.08008%205.26863%206.47668%205.77286%206.07277L6.46475%205.51081C7.61113%204.58006%207.17851%203.40838%206.3517%202.20228L5.85275%201.47173C5.02217%200.268437%204.11773%20-0.521817%202.96834%200.407522L2.3473%200.913285C1.8393%201.25819%200.419334%202.37929%200.0748931%204.50912C-0.339641%207.06462%200.968026%209.99102%203.96398%2013.2019C6.95617%2016.4142%209.88579%2018.0277%2012.6609%2017.9996C14.9672%2017.9765%2016.3601%2016.823%2016.7957%2016.4037L17.419%2015.8972C18.5654%2014.9686%2017.8531%2014.0231%2016.6857%2013.0909L15.984%2012.5283Z'%20fill='white'/%3e%3c/svg%3e";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HeaderTop",
  __ssrInlineRender: true,
  setup(__props) {
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIBurgerButton = _sfc_main$3;
      const _component_NuxtLink = __nuxt_component_1;
      const _component_UIBagButton = _sfc_main$2;
      const _component_UILoginButton = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-[100%] h-[82px] bg-[#062D4E] text-white font-montserrat" }, _attrs))} data-v-6e293717><section class="w-[98%] xl:max-w-[100%] mx-auto appPadding grid grid-cols-[24px_1fr_24px] md:grid-cols-[20px_90px_1fr_240px] lg:grid-cols-[20px_1fr_1fr_240px] xl:grid-cols-[204px_1fr_280px_280px]" data-v-6e293717><div class="block xl:hidden pt-7" data-v-6e293717>`);
      _push(ssrRenderComponent(_component_UIBurgerButton, null, null, _parent));
      _push(`</div><div class="w-[90px] mx-auto md:ml-[16px] xl:w-[204px] xl:ml-0" data-v-6e293717><div class="xl:hidden flex items-center justify-center" data-v-6e293717>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="w-[98px] pt-4"${ssrRenderAttr("src", _imports_0)} alt="small-logo" loading="lazy" data-v-6e293717${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                class: "w-[98px] pt-4",
                src: _imports_0,
                alt: "small-logo",
                loading: "lazy"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "hidden xl:block",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="w-[204px] drop-shadow-[1px_-1px_16px_0px_#0000000F]"${ssrRenderAttr("src", _imports_1)} alt="main-logo" loading="lazy" data-v-6e293717${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                class: "w-[204px] drop-shadow-[1px_-1px_16px_0px_#0000000F]",
                src: _imports_1,
                alt: "main-logo",
                loading: "lazy"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="hidden xl:block" data-v-6e293717><ul class="flex items-center justify-center gap-x-4 text-[16px]/[20px] p-8 tracking-[0.05em]" data-v-6e293717><li data-v-6e293717>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: unref(Cats_URL) }, {
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
      _push(`</li><li data-v-6e293717><span class="block w-[4px] h-[4px] rounded-full bg-white" data-v-6e293717></span></li><li data-v-6e293717>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: unref(Run_URL) }, {
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
      _push(`</li><li data-v-6e293717><span class="block w-[4px] h-[4px] rounded-full bg-white" data-v-6e293717></span></li><li data-v-6e293717>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: unref(Action_URL) }, {
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
      _push(`</li><li data-v-6e293717><span class="block w-[4px] h-[4px] rounded-full bg-white" data-v-6e293717></span></li><li data-v-6e293717>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: unref(Contacts_URL) }, {
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
      _push(`</li></ul></div><div class="ml-0 md:w-fit md:mx-auto xl:ml-[30px] 2xl:ml-[40px] 3xl:ml-[80px]" data-v-6e293717><div class="flex items-center justify-center py-8 gap-x-[6px]" data-v-6e293717><a href="tel:+79037009791" data-v-6e293717><img class="block"${ssrRenderAttr("src", _imports_2)} alt="phone" loading="lazy" data-v-6e293717></a><a class="hidden md:block" href="tel:+79037009791" data-v-6e293717><span class="font-[400] text-[18px]/[24px] tracking-[0.01em] whitespace-nowrap" data-v-6e293717> +7 903 700 97 91 </span></a></div></div><div class="hidden md:block ml-0 xl:ml-[15px] 2xl:ml-[30px] 3xl:ml-[102px]" data-v-6e293717><div class="flex items-center justify-center gap-x-[24px] py-6" data-v-6e293717>`);
      _push(ssrRenderComponent(_component_UIBagButton, null, null, _parent));
      _push(ssrRenderComponent(_component_UILoginButton, null, null, _parent));
      _push(`</div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/header/HeaderTop.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HeaderTop = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6e293717"]]);

export { HeaderTop as default };
//# sourceMappingURL=HeaderTop-CG-D8FWg.mjs.map
