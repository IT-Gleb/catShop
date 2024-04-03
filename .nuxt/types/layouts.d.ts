import type { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "default" | "err-0" | "footer-bottom" | "header-top"
declare module "../../node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}