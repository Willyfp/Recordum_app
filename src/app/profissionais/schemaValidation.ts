import * as yup from "yup";

export const schemaValidation = yup.object().shape({
  codigoVinculo: yup.string().required("Campo obrigatório"),
});
