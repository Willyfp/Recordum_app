"use client";
import DefaultContainer from "@/components/DefaultContainer";
import Header from "@/components/Header";
import { getTrainingById } from "@/services/trainingService";
import { Training, User } from "@/types";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ExecutableExerciseList } from "@/app/meus-treinos/[id]/components/ExecutableExerciseList";
import { TrainingList } from "@/app/meus-treinos/components/TrainingList";
import { getUserRequest } from "@/services/authService";
import { decryptStrData } from "@/utils";

const Treinar = ({ params }) => {
  const [training, setTraining] = useState<Training>();

  const [user, setUser] = useState<User>();

  console.log(params, "params");

  useEffect(() => {
    if (params.idUser)
      getUserRequest({ id: params.idUser }).then((response) => {
        setUser(response);
      });
  }, [params.idUser]);

  return (
    <DefaultContainer>
      <Header title="Meus treinos" />
      <div className="flex flex-col flex-1 p-[1.5rem] gap-4">
        <div className="flex flex-col gap-[0.25rem]">
          <p className="text-black font-semibold text-description">
            Treinos {decryptStrData(user?.nome).split(" ")?.[0]}
          </p>
          <p className="text-black font-description text-button_primary">
            Aqui você encontra todos os treinos salvos do usuário{" "}
            {decryptStrData(user?.nome).split(" ")?.[0]}
          </p>
        </div>

        <TrainingList
          userID={params.idUser}
          route={(training) => `/treinos/${params.idUser}/${training.id}`}
        />
      </div>
    </DefaultContainer>
  );
};

export default Treinar;
