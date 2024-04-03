export function forButton() {
  const isShow = ref<boolean>(false);
  const show = () => {
    isShow.value = true;
  };
  const hide = () => {
    isShow.value = false;
  };

  return {
    isShow,
    show,
    hide,
  };
}
