import { type DirectiveBinding } from "vue";

const vIntercept = {
  mounted(el: HTMLElement, binding: DirectiveBinding<any>) {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: [1.0],
    };

    const this_Callback = (entries: any) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          if (binding.value.func && typeof binding.value.func === "function")
            binding.value.func();
        }
      });
    };
    const this_observer = new IntersectionObserver(this_Callback, options);
    this_observer.observe(el);
  },
  name: "Intercept",
};

export default vIntercept;
