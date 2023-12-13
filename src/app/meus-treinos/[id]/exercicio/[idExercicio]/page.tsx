"use client";
import DefaultContainer from "@/components/DefaultContainer";
import Header from "@/components/Header";
import { getExerciseById, getTrainingById } from "@/services/trainingService";
import { Exercise, Training } from "@/types";
import { useEffect, useState } from "react";
import { FormFields } from "./components/FormFields";

const Treinar = ({ params }: { params: {id: number; idExercicio: number} }) => {
  const [exercise, setExercise] = useState<Exercise>();

  useEffect(() => {
    if (params.idExercicio)
      getExerciseById(params.idExercicio).then((response) => {
        setExercise(response);
      });
  }, [params.idExercicio]);

  return (
    <DefaultContainer>
      <Header title={exercise?.descricao} />

      <div className="flex w-full p-[1.5rem] flex-col gap-[1.5rem]">
        <div className="flex flex-col gap-[0.25rem]">
          <p className="text-black font-semibold text-description">
            Execução do exercício
          </p>
          <p className="text-black font-description text-button_primary">
            Anote aqui os detalhes da execussão
          </p>
        </div>

        <FormFields exercise={exercise} />
      </div>
    </DefaultContainer>
  );
};

export default Treinar;
