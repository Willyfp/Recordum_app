"use client";

import Header from "@/components/Header";
import Stepper from "@/components/Stepper";
import TextField from "@/components/TextField";
import { selectTrainingInfo } from "@/store/slices/TrainingSlice";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import ListMuscleGroup from "@/components/ListMuscleGroup";

export const Body = () => {
  const trainingInfo = useSelector(selectTrainingInfo);

  const {
    setValue,
    watch,
    register,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (trainingInfo)
      Object.entries(trainingInfo).forEach(([key, value]) => {
        setValue(key, value);
      });
  }, [trainingInfo]);

  return (
    <>
      <Header title={watch("descricao") ?? "Novo treino"} />

      <div className="flex flex-col flex-1">
        {watch("periodicidade") > 1 && (
          <Stepper
            numberOfSteps={watch("periodicidade")}
            actualStep={0}
            disablePadding
          />
        )}

        <div className="flex flex-col px-6 gap-8">
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
        </div>
      </div>
    </>
  );
};
