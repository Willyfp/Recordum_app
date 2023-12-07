"use client";

import ButtonComponent from "@/components/Button";
import Select from "@/components/Select";
import TextField from "@/components/TextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { schemaValidation } from "./schemaValidation";
import { useDispatch, useSelector } from "react-redux";
import {
  selectMusclesSelected,
  setTrainingInfo,
} from "@/store/slices/TrainingSlice";
import { useRouter } from "next/navigation";
import ListMuscleGroup from "@/components/ListMuscleGroup";
import { useEffect, useState } from "react";
import { Exercises } from "./Exercises";
import { Exercise } from "@/types";

export const FormFields = () => {
  const selectedMuscleGroups = useSelector(selectMusclesSelected);
  const form = useForm({ resolver: yupResolver(schemaValidation) });

  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
    setValue,
  } = form;

  const dispatch = useDispatch();

  const router = useRouter();

  const onSubmit = (data) => {
    dispatch(setTrainingInfo(data));

    // router.push("/criar/personalizar/exercicios");
  };

  useEffect(() => {
    if (selectedMuscleGroups.length > 0 && watch("exercicios")?.length > 0) {
      setValue(
        "exercicios",
        watch("exercicios")?.filter(
          (e: Exercise) =>
            selectedMuscleGroups.find((item) => item.id === e.grupoMuscular.id)
        )
      );
    }
  }, [selectedMuscleGroups]);

  return (
    <div className="flex w-full flex-col gap-[1rem] flex-1">
      <FormProvider {...form}>
        <div className="flex flex-1 w-full flex-col gap-[0.5rem]">
          <TextField
            {...register("descricao")}
            className={"input-bordered border-color-background w-[100%]"}
            labelStyle="text-black"
            label="Nome do treino"
            placeholder="Digite uma descrição"
            errorMessage={errors?.descricao?.message}
          />

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-black font-semibold text-description">
                Grupo muscular
              </p>
              <p className="text-black font-description text-button_primary">
                Selecione um ou mais grupos
              </p>
            </div>
          </div>

          <ListMuscleGroup />

          <Exercises />
        </div>

        <ButtonComponent
          className="btn-primary w-full"
          onClick={handleSubmit(onSubmit)}
          disabled={!watch("descricao") || selectedMuscleGroups.length === 0}
        >
          Continuar
        </ButtonComponent>
      </FormProvider>
    </div>
  );
};
