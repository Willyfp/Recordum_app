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

const ListMuscleGroup = () => {
  const [muscleGroups, setMuscleGroups] = useState<MuscleGroup[]>([]);

  const dispatch = useDispatch();

  const selectedMuscleGroups = useSelector(selectMusclesSelected);

  useEffect(() => {
    getMuscleGroups().then((res) => setMuscleGroups(res));
  }, []);

  return (
    <div className="flex justify-center pb-4">
      <div className="flex flex-row gap-2 flex-wrap">
        {muscleGroups.map((muscle) => (
          <CardSelectable
            description={muscle.descricao}
            key={muscle.id}
            selected={selectedMuscleGroups.includes(muscle.id)}
            onClick={() => {
              dispatch(toggleMuscle(muscle.id));
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ListMuscleGroup;
