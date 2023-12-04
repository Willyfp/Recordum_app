import * as yup from "yup";

export const schemaValidation = yup.object().shape({
  descricao: yup.string().required("Campo obrigatório"),
  periodicidade: yup
    .number()
    .typeError("Campo obrigatório")
    .required("Campo obrigatório"),
});
