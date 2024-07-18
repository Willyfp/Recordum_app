"use client";
import ButtonComponent from "@/components/Button";
import DefaultContainer from "@/components/DefaultContainer";
import Header from "@/components/Header";
import Select from "@/components/Select";
import {
  getExercisesByMuscle,
  getMuscleGroups,
} from "@/services/trainingService";
import { Exercise, MuscleGroup } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { schemaValidation } from "./components/schemaValidation";
import { useRouter } from "next/navigation";

const Desempenho = () => {
  const [muscleGroups, setMuscleGroups] = React.useState<MuscleGroup[]>([]);

  const [exercises, setExercises] = React.useState<Exercise[]>([]);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schemaValidation) });

  useEffect(() => {
    getMuscleGroups().then((response) => {
      setMuscleGroups(response);
    });
  }, []);

  useEffect(() => {
    if (watch("muscleGroup")) {
      getExercisesByMuscle(watch("muscleGroup")).then((response) => {
        setExercises(response);
      });
    }
  }, [watch("muscleGroup")]);

  const onSubmit = (data) => {
    router.push(`/historico/desempenho/${data.exercise}`);
  };

  return (
    <DefaultContainer>
      <Header title="Desempenho geral" />
      <div className="flex flex-col flex-1 p-[1.5rem] gap-4">
        <div className="flex flex-col gap-[0.25rem]">
          <p className="text-black font-semibold text-description">
            Progressão de carga
          </p>
          <p className="text-black font-description text-button_primary">
            Para visualizar qual melhor exercício, é possível filtrar por
            período ou dia especifico.
          </p>
        </div>

        <Select
          {...register("muscleGroup")}
          label="Grupo muscular"
          errorMessage={errors?.muscleGroup?.message}
          options={muscleGroups?.map((muscle) => ({
            label: muscle.descricao,
            value: muscle.id,
          }))}
        />

        <Select
          {...register("exercise")}
          label="Exercício"
          errorMessage={errors?.exercise?.message}
          options={exercises?.map((exercise) => ({
            label: exercise.descricao,
            value: exercise.id,
          }))}
          disabled={!watch("muscleGroup")}
        />

        <div className="flex w-[48%] flex-row items-center justify-between gap-4">
          <ButtonComponent
            className="btn-outline w-full border-color-background text-black"
            onClick={() => {
              reset();
            }}
          >
            Limpar
          </ButtonComponent>

          <ButtonComponent
            // loading={loading}
            disabled={!watch("exercise")}
            className="btn-primary w-full"
            onClick={handleSubmit(onSubmit)}
          >
            + Gerar gráfico
          </ButtonComponent>
        </div>
      </div>
    </DefaultContainer>
  );
};

export default Desempenho;
