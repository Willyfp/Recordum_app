"use client";

import { TrainingList } from "@/app/meus-treinos/components/TrainingList";
import DefaultContainer from "@/components/DefaultContainer";
import Header from "@/components/Header";
import { getUserRequest } from "@/services/authService";
import { User } from "@/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Usuario = () => {
  const [user, setUser] = useState<User>({});

  const params = useParams();

  console.log(params);

  useEffect(() => {
    if (params?.id)
      getUserRequest(params).then((res) => {
        setUser(res);
      });
  }, [params?.id]);

  return (
    <DefaultContainer>
      <Header title={user?.nome ?? "Usuário"} />

      <div className="flex flex-col flex-1 p-[1.5rem] gap-4">
        <TrainingList userID={params.id as string} />
      </div>
    </DefaultContainer>
  );
};

export default Usuario;
