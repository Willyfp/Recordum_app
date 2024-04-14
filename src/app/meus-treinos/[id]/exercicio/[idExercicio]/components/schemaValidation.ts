import * as Yup from "yup";
import customParseFormat from "dayjs/plugin/customParseFormat";
import dayjs from "dayjs";

dayjs.extend(customParseFormat);

export const schemaValidation = Yup.object().shape({
  data: Yup.string()
    .required("Campo obrigatório")
    .test("valid-date", "Data inválida", (value) => {
      return dayjs(value, "DD/MM/YYYY").isValid();
    }),
});
