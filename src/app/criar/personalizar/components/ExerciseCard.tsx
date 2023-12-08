import { Exercise } from "@/types";
import Image from "next/image";
import { useFormContext } from "react-hook-form";

export const ExerciseCard = ({ exercise }: { exercise: Exercise }) => {
  const { setValue, watch } = useFormContext();

  return (
    <div className="flex flex-row items-center w-full justify-between py-4 gap-3">
      <Image
        src={"/images/exercise_default.png"}
        width={44}
        height={50}
        alt={exercise.descricao}
      />

      <div className="h-full w-full">
        <span className="text-description text-black">
          {exercise.descricao}
        </span>
      </div>

      <input
        type="checkbox"
        checked={!!watch("exercicios")?.find((e) => e?.id === exercise?.id)}
        onChange={() => {
          if (watch("exercicios")?.find((e) => e.id === exercise.id)) {
            setValue(
              "exercicios",
              watch("exercicios")?.filter((e) => e.id !== exercise.id)
            );
          } else {
            if (!watch("exercicios")) {
              setValue("exercicios", [
                {
                  ...exercise,
                  series: 1,
                  exercicio: {
                    id: exercise.id,
                  },
                  seriesTreino: [{ carga: undefined, repeticao: undefined }],
                },
              ]);
            } else {
              setValue("exercicios", [
                ...watch("exercicios"),
                {
                  ...exercise,
                  series: 1,
                  exercicio: {
                    id: exercise.id,
                  },
                  seriesTreino: [{ carga: undefined, repeticao: undefined }],
                },
              ]);
            }
          }
        }}
        className="checkbox checkbox-primary border-[#666666] bg-[#D9D9D9]"
      />
    </div>
  );
};
