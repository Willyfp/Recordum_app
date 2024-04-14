import dayjs from "dayjs";
import * as yup from "yup";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

export const schemaValidationAdvanced = yup.object().shape({
  nome: yup.string().required("Campo obrigatório"),
  sexo: yup.string().required("Campo obrigatório"),
  dataNascimento: yup
    .string()
    .required("Campo obrigatório")
    .test("valid-date", "Data inválida", (value) => {
      return dayjs(value, "DD/MM/YYYY").isValid();
    }),
  pesoAtual: yup
    .number()
    .notRequired()
    .transform((value) => (isNaN(value) ? undefined : value))
    .nullable(),
  pesoMeta: yup.number().when("pesoAtual", {
    is: (val?: number) => val !== undefined,
    then: () =>
      yup
        .number()
        .transform((value) => (isNaN(value) ? undefined : value))
        .required("Campo obrigatório"),
    otherwise: () =>
      yup
        .number()
        .notRequired()
        .transform((value) => (isNaN(value) ? undefined : value))
        .nullable(),
  }),
  altura: yup
    .number()
    .notRequired()
    .transform((value) => (isNaN(value) ? undefined : value))
    .nullable(),
});
