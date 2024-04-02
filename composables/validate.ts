import { useVuelidate } from "@vuelidate/core";
import {
  required,
  minLength,
  helpers,
  between,
  numeric,
  alphaNum,
} from "@vuelidate/validators";

export function useValidateForm() {
  const formData = reactive({
    name: "",
    prefix: "",
    phone: "",
    info: "",
    price: 0,
    discount: 0,
    update_phone: "",
  });

  const rules = computed(() => {
    return {
      name: {
        requred: helpers.withMessage(
          "Обязательное поле.Не менее 3-х символов...",
          required
        ),
        minLength: helpers.withMessage(
          "Длина имени должна быть больше 3-х символов...",
          minLength(3)
        ),
      },
      prefix: {
        required: helpers.withMessage("Обязательное поле...", required),
        numeric: helpers.withMessage("Только цифры...", numeric),
        minLength: helpers.withMessage("Не меньше 3-х цифр...", minLength(3)),
      },
      phone: {
        required: helpers.withMessage("Обязательное поле...", required),
        numeric: helpers.withMessage("Только цифры...", numeric),
        minLength: helpers.withMessage("Не меньше 7-ми цифр...", minLength(7)),
      },
    };
  });

  const v$ = useVuelidate(rules, formData);

  return {
    formData,
    v$,
  };
}
