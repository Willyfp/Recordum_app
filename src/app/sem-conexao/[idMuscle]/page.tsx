"use client";
import { FormFields } from "@/app/meus-treinos/[id]/exercicio/[idExercicio]/components/FormFields";
import DefaultContainer from "@/components/DefaultContainer";
import Header from "@/components/Header";
import ListMuscleGroup from "@/components/ListMuscleGroup";
import Select from "@/components/Select";
import {
  getExercisesByMuscle,
  getMuscleGroupById,
} from "@/services/trainingService";
import { Exercise, MuscleGroup } from "@/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Exercicios = () => {
  const params = useParams();

  const [musclegroup, setMuscleGroup] = useState<MuscleGroup>();

  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    if (params.idMuscle) {
      getMuscleGroupById(params.idMuscle).then((response) => {
        setMuscleGroup(response);
      });

      getExercisesByMuscle(params.idMuscle).then((response) => {
        setExercises(response);
      });
    }
  }, [params.idMuscle]);

  const { register, watch } = useForm();

  return (
    <DefaultContainer>
      <Header title={musclegroup?.descricao ?? "Selecionar exercício"} />

      <div className="flex w-full p-[1.5rem] flex-col gap-[1.5rem]">
        <Select
          options={
            exercises?.map((exercise: Exercise) => ({
              label: exercise.descricao,
              value: exercise.id,
            })) ?? []
          }
          {...register("exercicio")}
          label="Exercício"
        />

        <FormFields
          disableExercise
          exercise={watch("exercicio")}
          submitPath="/inicio"
        />
      </div>
    </DefaultContainer>
  );
};

export default Exercicios;
