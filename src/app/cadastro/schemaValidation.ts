import * as Yup from "yup";

export const initialSchemaValidation = Yup.object().shape({
  email: Yup.string()
    .email("Digite um e-mail válido")
    .required("O e-mail é obrigatório"),
  confirmarEmail: Yup.string()
    .required("A confirmação do e-mail é obrigatória")
    .oneOf([Yup.ref("email"), null], "Os e-mails não conferem"),
  senha: Yup.string()
    .required("A senha é obrigatória")
    .min(6, "A senha deve ter no mínimo 6 caracteres"),
  confirmarSenha: Yup.string()
    .required("A confirmação da senha é obrigatória")
    .oneOf([Yup.ref("senha"), null], "As senhas não conferem"),
});
