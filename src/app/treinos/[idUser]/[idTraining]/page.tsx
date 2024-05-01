"use client";
import DefaultContainer from "@/components/DefaultContainer";
import Header from "@/components/Header";
import { getTrainingById } from "@/services/trainingService";
import { Training } from "@/types";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ExecutableExerciseList } from "@/app/meus-treinos/[id]/components/ExecutableExerciseList";

const Treinar = ({ params }) => {
  const [training, setTraining] = useState<Training>();

  useEffect(() => {
    if (params.idTraining)
      getTrainingById(params.idTraining).then((response) => {
        setTraining(response);
      });
  }, [params.idTraining]);

  const router = useRouter();

  return (
    <DefaultContainer>
      <Header title={training?.descricao ?? ""} />

      <ExecutableExerciseList idUser={params.idUser} training={training} />
    </DefaultContainer>
  );
};

export default Treinar;
