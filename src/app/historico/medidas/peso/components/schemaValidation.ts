import dayjs from "dayjs";
import * as yup from "yup";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

export const schemaValidation = yup.object().shape({
  pesoMeta: yup
    .number()
    .typeError("Campo obrigatório")
    .required("Campo obrigatório"),
  pesoAtual: yup
    .number()
    .typeError("Campo obrigatório")
    .required("Campo obrigatório"),
  data: yup
    .string()
    .required("Campo obrigatório")
    .test("valid-date", "Data inválida", (value) => {
      return dayjs(value, "DD/MM/YYYY").isValid();
    }),
});
