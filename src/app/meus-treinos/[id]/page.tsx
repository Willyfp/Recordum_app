"use client";
import DefaultContainer from "@/components/DefaultContainer";
import Header from "@/components/Header";
import { getTrainingById } from "@/services/trainingService";
import { Training } from "@/types";
import { useEffect, useState } from "react";
import { ExecutableExerciseList } from "./components/ExecutableExerciseList";

const Treinar = ({ params }) => {
  const [training, setTraining] = useState<Training>();

  useEffect(() => {
    if (params.id)
      getTrainingById(params.id).then((response) => {
        setTraining(response);
      });
  }, [params.id]);

  return (
    <DefaultContainer>
      <Header title={training?.descricao} />

      <ExecutableExerciseList training={training} />
    </DefaultContainer>
  );
};

export default Treinar;
