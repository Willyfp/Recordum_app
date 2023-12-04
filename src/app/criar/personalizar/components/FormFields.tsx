"use client";

import ButtonComponent from "@/components/Button";
import Select from "@/components/Select";
import TextField from "@/components/TextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schemaValidation } from "./schemaValidation";
import { useDispatch } from "react-redux";
import { setTrainingInfo } from "@/store/slices/TrainingSlice";
import { useRouter } from "next/navigation";

export const FormFields = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schemaValidation) });

  const dispatch = useDispatch();

  const router = useRouter();

  const onSubmit = (data) => {
    dispatch(setTrainingInfo(data));

    router.push("/criar/personalizar/exercicios");
  };

  return (
    <div className="flex w-full flex-col gap-[1rem] flex-1">
      <div className="flex flex-1 w-full flex-col gap-[0.5rem]">
        <TextField
          {...register("descricao")}
          className={"input-bordered border-color-background w-[100%]"}
          labelStyle="text-black"
          label="Nome do treino"
          placeholder="Digite uma descrição"
          errorMessage={errors?.descricao?.message}
        />

        <Select
          {...register("periodicidade")}
          label="Quantidade de treinos por semana"
          errorMessage={errors?.periodicidade?.message}
          options={[
            { label: "1 Treino", value: 1 },
            { label: "2 Treinos", value: 2 },
            { label: "3 Treinos", value: 3 },
            { label: "4 Treinos", value: 4 },
            { label: "5 Treinos", value: 5 },
            { label: "6 Treinos", value: 6 },
            { label: "7 Treinos", value: 7 },
          ]}
        />
      </div>

      <ButtonComponent
        className="btn-primary w-full"
        onClick={handleSubmit(onSubmit)}
      >
        Continuar
      </ButtonComponent>
    </div>
  );
};
