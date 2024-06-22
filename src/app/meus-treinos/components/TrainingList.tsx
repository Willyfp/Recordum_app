"use client";

import { getTrainingsByUser } from "@/services/trainingService";
import { selectUser } from "@/store/slices/authSlice";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TrainingCard } from "./TrainingCard";
import ButtonComponent from "@/components/Button";
import { useRouter } from "next/navigation";
import { Training } from "@/types";

export const TrainingList = ({
  userID,
  route,
}: {
  userID?: string | number;
  route: (training: Training) => string;
}) => {
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
        {trainingList
          ?.filter((item) => item.status !== "INATIVO")
          .map((item) => (
            <TrainingCard
              setTrainingList={setTrainingList}
              userID={user?.id ?? userID}
              key={item.id}
              training={item}
              route={route}
            />
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
