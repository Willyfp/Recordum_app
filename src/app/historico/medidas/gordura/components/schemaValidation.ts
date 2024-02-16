import * as Yup from "yup";

export const schemaValidation = Yup.object().shape({
  data: Yup.string().required("Campo obrigatório"),
});
