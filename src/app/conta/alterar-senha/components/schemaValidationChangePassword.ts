import * as yup from "yup";

export const schemaValidationChangePassword = yup.object().shape({
  senhaAtual: yup.string().required("Campo obrigatório"),
  novaSenha: yup.string().required("Campo obrigatório"),
  confirmarSenha: yup
    .string()
    .oneOf([yup.ref("novaSenha"), null], "As senhas devem ser iguais")
    .required("Campo obrigatório"),
});
