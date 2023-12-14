import DatePickerComponent from "@/components/DatePicker";
import TextField from "@/components/TextField";
import { Exercise } from "@/types";
import { useForm } from "react-hook-form";

export const FormFields = ({ exercise }: { exercise?: Exercise }) => {
  const {
    watch,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm();

  return (
    <div className="flex flex-col gap-1">
      <TextField
        value={exercise?.grupoMuscular.descricao}
        className={"input-bordered border-color-background"}
        labelStyle="text-black"
        label="Grupo muscular"
        placeholder="Grupo muscular"
        disabled
      />

      <TextField
        value={exercise?.descricao}
        className={"input-bordered border-color-background"}
        labelStyle="text-black"
        label="Nome do exercício"
        placeholder="Nome do exercício"
        disabled
      />

      <DatePickerComponent
        value={watch("data")}
        onChange={(value) => {
          setValue("data", value);
          clearErrors();
        }}
        errorMessage={errors?.data?.message}
        label="Data de nascimento"
        labelStyle="text-black"
      />
    </div>
  );
};
