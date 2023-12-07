import { getExercisesByMuscle } from "@/services/trainingService";
import {
  selectExercisesByMuscle,
  selectMusclesSelected,
  setExercisesByMuscle,
} from "@/store/slices/TrainingSlice";
import { Exercise } from "@/types";
import { use, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ExerciseCard } from "./ExerciseCard";
import { useFieldArray, useFormContext } from "react-hook-form";
import { SerieForm } from "./SerieForm";

export const Exercises = () => {
  const selectedMuscleGroups = useSelector(selectMusclesSelected);

  const dispatch = useDispatch();

  const exercisesByMuscle = useSelector(selectExercisesByMuscle);

  useEffect(() => {
    Promise.all(
      selectedMuscleGroups.map((muscle) => getExercisesByMuscle(muscle.id))
    ).then((exercises) => {
      const formatedExercises = exercises.map(
        (exercise: Exercise[], index) => ({
          id: exercise?.[0]?.grupoMuscular.id,
          exercises: exercise,
        })
      );

      dispatch(
        setExercisesByMuscle(formatedExercises.filter((item) => item.id))
      );
    });
  }, [selectedMuscleGroups]);

  const { watch } = useFormContext();

  return (
    <div className="pt-4 gap-6 flex w-full flex-col">
      {selectedMuscleGroups?.map((muscle) => (
        <div key={muscle.id} className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-1">
            <span className="text-description text-black font-semibold">
              Exercícios ({muscle.descricao})
            </span>

            <span className="text-button_primary text-black font-description">
              Selecione um ou mais exercícios
            </span>
          </div>

          {exercisesByMuscle
            ?.find((item) => item.id === muscle.id)
            ?.exercises?.map((exercise, i) => (
              <div key={exercise.id} className="flex flex-col w-full">
                <ExerciseCard exercise={exercise} />

                {watch("exercicios")
                  ?.find((e) => e.id === exercise.id)
                  ?.seriesTreino?.length > 0 && (
                <>
                  <div className="flex flex-row items-center gap-9">
                    <h2 className="text-xl mb-4 min-w-[4.5rem] text-black">Série</h2>

                    <div className="flex flex-row items-center gap-2">
                      <h2 className="text-xl mb-4 min-w-[5.5rem] text-black">Repetição</h2>
                      <h2 className="text-xl mb-4 min-w-[5.5rem] text-black">Carga</h2>
                    </div>
                  </div>


                  <div key={exercise.id} className="flex flex-col gap-2 w-full">
                    {watch("exercicios")
                      ?.find((e) => e.id === exercise.id)
                      ?.seriesTreino?.map((serie, index, arr) => (
                        <SerieForm
                          key={index}
                          serie={serie}
                          index={index}
                          exercise={exercise}
                          arr={arr}
                        />
                      ))}

                    {i < exercisesByMuscle.length - 1 && (
                      <div className="divider m-0" />
                    )}
                  </div>
                </>
                )}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};
