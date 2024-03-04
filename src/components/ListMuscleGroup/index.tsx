"use client";
import { CardSelectable } from "@/components/CardSelectable";
import { getMuscleGroups } from "@/services/trainingService";
import {
  selectMusclesSelected,
  toggleMuscle,
} from "@/store/slices/TrainingSlice";
import { MuscleGroup } from "@/types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ListMuscleGroup = ({
  onClick,
}: {
  onClick?: (muscleGroup: MuscleGroup) => void;
}) => {
  const [muscleGroups, setMuscleGroups] = useState<MuscleGroup[]>([]);

  const dispatch = useDispatch();

  const selectedMuscleGroups = useSelector(selectMusclesSelected);

  useEffect(() => {
    getMuscleGroups().then((res) => setMuscleGroups(res));
  }, []);

  return (
    <div className="flex justify-center pb-4 w-full">
      <div className="flex flex-row gap-2 flex-wrap">
        {muscleGroups.map((muscle) => (
          <CardSelectable
            description={muscle.descricao}
            key={muscle.id}
            selected={
              !!selectedMuscleGroups.find((item) => item.id === muscle.id)
            }
            onClick={() => {
              onClick ? onClick(muscle) : dispatch(toggleMuscle(muscle));
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ListMuscleGroup;
