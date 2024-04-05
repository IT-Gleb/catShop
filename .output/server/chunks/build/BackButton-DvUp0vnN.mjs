import { b as useRouter } from './server.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BackButton",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        title: "\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E",
        class: "w-[100px] h-[35px] rounded-[8px] font-ptSansNarrow shadow-[0px_0px_12px_0px_#00000059] bg-[#312525] text-white active:scale-75"
      }, _attrs))}> \u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F </button>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/BackButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=BackButton-DvUp0vnN.mjs.map
