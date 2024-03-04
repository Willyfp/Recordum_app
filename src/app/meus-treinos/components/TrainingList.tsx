"use client";

import { getTrainingsByUser } from "@/services/trainingService";
import { selectUser } from "@/store/slices/authSlice";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TrainingCard } from "./TrainingCard";
import ButtonComponent from "@/components/Button";
import { useRouter } from "next/navigation";
import { Training } from "@/types";

export const TrainingList = ({ userID }: { userID?: string | number }) => {
  const [trainingList, setTrainingList] = useState<Training[]>([]);

  const user = useSelector(selectUser);

  const router = useRouter();

  useEffect(() => {
    if (user || userID)
      getTrainingsByUser(userID ?? user?.id).then((response) => {
        setTrainingList(response);
      });
  }, [user, userID]);

  return (
    <>
      <div className="flex flex-col flex-1 overflow-auto gap-4">
        {trainingList?.map((item) => (
          <TrainingCard key={item.id} training={item} />
        ))}
      </div>

      {!userID && (
        <ButtonComponent
          className="btn-primary w-full"
          onClick={() => router.push("/criar/personalizar")}
        >
          Montar novo treino
        </ButtonComponent>
      )}
    </>
  );
};
