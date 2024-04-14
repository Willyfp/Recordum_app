import TextField from "@/components/TextField";
import { MdAdd, MdMinimize } from "react-icons/md";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useFormContext } from "react-hook-form";
import { Exercise } from "@/types";

export const FormSeries = ({
  index,
  serie,
  exercise,
  arr,
  indexExercise,
}: {
  index: number;
  indexExercise: number;
  serie: {
    carga: number;
    repeticao: number;
  };
  exercise: Exercise;
  arr: any[];
}) => {
  const {
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-row items-center">
      <span className="text-button_primary text-[#979797] font-bold min-w-[2.5rem]">
        {index + 1}ª
      </span>

      <div className="flex w-full items-center justify-center">
        <div
          className={`flex p-1 flex-row items-center gap-2 bg-input_number rounded-lg ${
            arr.length - 1 === index && "rounded-r-full"
          } ${index > 0 && arr.length - 1 === index && "rounded-l-full"}`}
          style={
            index === 0 && arr.length - 1 === index
              ? {
                  borderTopRightRadius: 20000,
                  borderBottomRightRadius: 20000,
                  marginLeft: "2rem",
                }
              : {}
          }
        >
          <div
            className={`flex w-8 h-8 rounded-full justify-center items-center bg-button_number cursor-pointer ${
              index === 0 && "hidden"
            } ${index !== arr.length - 1 && "hidden"}`}
            onClick={() => {
              setValue(
                "series",
                arr.filter((_, i) => i !== index)
              );
            }}
          >
            <FaMinus size={18} color={"#fff"} />
          </div>

          <TextField
            className={
              "input-bordered border-color-background max-w-[5.5rem] h-[2rem] "
            }
            labelStyle="text-black"
            placeholder="Nº"
            inputMode="numeric"
            onChange={(e) => {
              setValue(
                "series",
                watch("series").map((s, i) =>
                  i === index ? { ...s, repeticao: e.target.value } : s
                )
              );
            }}
            errorMessage={errors?.series?.[index]?.repeticao?.message}
            type="number"
            showErrorMessage={false}
            disableFullWidth
          />

          <TextField
            className={`input-bordered border-color-background max-w-[5.5rem] h-[2rem]`}
            inputMode="numeric"
            onChange={(e) => {
              setValue(
                "series",
                watch("series").map((s, i) =>
                  i === index ? { ...s, cargaInformada: e.target.value } : s
                )
              );
            }}
            errorMessage={errors?.series?.[index]?.cargaInformada?.message}
            labelStyle="text-black"
            placeholder="Nº"
            type="number"
            showErrorMessage={false}
            disableFullWidth
          />

          <div
            className={`flex w-8 h-8 rounded-full justify-center items-center bg-button_number cursor-pointer ${
              index !== arr.length - 1 && "hidden"
            }`}
            onClick={() => {
              setValue("series", [...arr, { carga: 0, repeticao: 0 }]);
            }}
          >
            <FaPlus size={18} color={"#fff"} />
          </div>
        </div>
      </div>
    </div>
  );
};
