import * as yup from "yup";

export const schemaValidation = yup.object().shape({
  descricao: yup.string().required("Campo obrigatório"),
  exercicios: yup
    .array()
    .of(
      yup.object().shape({
        series: yup.number().required("Campo obrigatório"),
        exercicio: yup.object().shape({
          id: yup.number().required("Campo obrigatório"),
        }),
        seriesTreino: yup.array().of(
          yup.object().shape({
            repeticao: yup.number().required("Campo obrigatório"),
            carga: yup.number().required("Campo obrigatório"),
          }),
        ),
      })
    )
    .min(1, "Selecione pelo menos um exercício"), 
});
