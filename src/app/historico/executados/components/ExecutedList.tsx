"use client";

import {
  getExecutedExercises,
  getTrainingsByUser,
} from "@/services/trainingService";
import { selectUser } from "@/store/slices/authSlice";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ButtonComponent from "@/components/Button";
import { useRouter } from "next/navigation";
import { Exercise, Training } from "@/types";
import { useCookies } from "next-client-cookies";
import dayjs from "dayjs";
import { MdChevronRight } from "react-icons/md";

const ExerciseCard = ({ exercise }: { exercise: Exercise }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/historico/executados/${exercise.id}`)}
      className="flex flex-row items-center justify-between w-full p-4 shadow-card_muscle bg-white rounded-lg"
    >
      <div className="flex flex-row gap-4 items-center cursor-pointer">
        <div className="flex flex-col gap-1">
          <span className="text-black font-title_bottom_sheet text-button_primary">
            {exercise.exercicio.descricao}
          </span>

          <span className="text-black text-button_ghost">
            {dayjs(exercise.dataInicio).format("DD/MM/YYYY")}
          </span>
        </div>
      </div>

      <MdChevronRight className="text-[2rem] text-icon_bottom" />
    </div>
  );
};

export const ExecutedList = () => {
  const [exerciseList, setExerciseList] = useState<Exercise[]>([]);

  const cookies = useCookies();

  const router = useRouter();

  const userId = cookies.get("user_id");

  useEffect(() => {
    if (userId)
      getExecutedExercises(userId).then((response) => {
        setExerciseList(response);
      });
  }, [userId]);

  return (
    <>
      <div className="flex flex-col flex-1 overflow-auto gap-4">
        {exerciseList.map((item) => (
          <ExerciseCard key={item.id} exercise={item} />
        ))}
      </div>
    </>
  );
};
