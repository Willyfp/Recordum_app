"use client";
import { FormFields } from "@/app/meus-treinos/[id]/exercicio/[idExercicio]/components/FormFields";
import DefaultContainer from "@/components/DefaultContainer";
import Header from "@/components/Header";
import { getExerciseById, getTrainingById } from "@/services/trainingService";
import { Exercise, Training } from "@/types";
import { useEffect, useState } from "react";

const Treinar = ({
  params,
}: {
  params: { idUser: number; idTraining: number; idExercise: number };
}) => {
  const [exercise, setExercise] = useState<Exercise>();

  useEffect(() => {
    if (params.idExercise)
      getExerciseById(params.idExercise).then((response) => {
        setExercise(response);
      });
  }, [params.idExercise]);

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

        <FormFields
          submitPath={`/treinos/${params.idUser}/${params.idTraining}`}
          exercise={exercise}
          trainingId={params.id}
          idUser={params.idUser}
        />
      </div>
    </DefaultContainer>
  );
};

export default Treinar;
