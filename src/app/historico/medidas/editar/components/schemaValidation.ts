import * as yup from "yup";

export const schemaValidation = yup.object().shape({
  data: yup.date().required("Data é obrigatório"),
});
