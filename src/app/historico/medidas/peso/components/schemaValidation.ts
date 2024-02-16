import * as yup from "yup";

export const schemaValidation = yup.object().shape({
  pesoMeta: yup
    .number()
    .typeError("Campo obrigatório")
    .required("Campo obrigatório"),
  pesoAtual: yup
    .number()
    .typeError("Campo obrigatório")
    .required("Campo obrigatório"),
  data: yup.string().required("Campo obrigatório"),
});
