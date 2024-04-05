import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "w-[100%] min-h-[40px] bg-[#243139] text-white mt-[120px] font-montserrat py-4" }, _attrs))}><div class="w-fit mx-auto font-ptSansNarrow text-[14px]/[18px]"> \u0412\u0435\u0440\u0441\u0442\u043A\u0430 \u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 by Gleb Torgashin. March-April 2024. </div></footer>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/footer/FooterBottom.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FooterBottom = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { FooterBottom as default };
//# sourceMappingURL=FooterBottom-Bh_LN9am.mjs.map
