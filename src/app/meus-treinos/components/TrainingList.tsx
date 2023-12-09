"use client";

import { getTrainingsByUser } from "@/services/trainingService";
import { selectUser } from "@/store/slices/authSlice";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TrainingCard } from "./TrainingCard";
import ButtonComponent from "@/components/Button";
import { useRouter } from "next/navigation";

export const TrainingList = () => {
  const [trainingList, setTrainingList] = useState([]);

  const user = useSelector(selectUser);

  const router = useRouter();

  useEffect(() => {
    if (user)
      getTrainingsByUser(user?.id).then((response) => {
        setTrainingList(response);
      });
  }, [user]);

  return (
    <>
      <div className="flex flex-col flex-1 overflow-auto gap-4">
        {trainingList.map((item) => (
          <TrainingCard training={item} />
        ))}
      </div>

      <ButtonComponent
        className="btn-primary w-full"
        onClick={() => router.push("/criar/personalizar")}
      >
        Montar novo treino
      </ButtonComponent>
    </>
  );
};
