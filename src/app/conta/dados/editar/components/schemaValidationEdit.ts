import * as yup from "yup";

export const schemaValidationEdit = yup.object().shape({
  email: yup.string().email("Email inválido").required("Campo obrigatório"),
  nome: yup.string().required("Campo obrigatório"),
});
