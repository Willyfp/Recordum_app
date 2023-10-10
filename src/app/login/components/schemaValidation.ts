import * as yup from "yup";

export const schemaValidation = yup.object().shape({
  username: yup
    .string()
    .email("Insira um e-mail válido!")
    .required("Campo obrigatório!"),
  password: yup.string().required("Campo obrigatório!"),
});
