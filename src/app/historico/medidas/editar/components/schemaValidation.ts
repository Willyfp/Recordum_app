import dayjs from "dayjs";
import * as yup from "yup";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

export const schemaValidation = yup.object().shape({
  data: yup
    .string()
    .required("Data é obrigatório")
    .test("valid-date", "Data inválida", (value) => {
      return dayjs(value, "DD/MM/YYYY").isValid();
    }),
});
