import * as yup from "yup";

export const schemaValidation = yup.object().shape({
  muscleGroup: yup.string().required("Campo obrigatório"),
  exercise: yup.string().required("Campo obrigatório"),
});
