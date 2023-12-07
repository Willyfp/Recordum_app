import TextField from "@/components/TextField";
import { MdAdd, MdMinimize } from "react-icons/md";
import { FaMinus, FaPlus } from "react-icons/fa";

export const SerieForm = ({
  index,
  serie,
  arr,
}: {
  index: number;
  serie: {
    carga: number;
    repeticao: number;
  };
  arr: any[];
}) => {
  return (
    <div className="flex">
      <span className="text-button_primary text-[#979797] font-bold min-w-[2.5rem]">
        {index + 1}ª
      </span>

      <div className="flex w-full items-center justify-center">
        <div
          className={`flex p-1 flex-row items-center gap-2 bg-input_number rounded-[0.5rem] ${
            arr.length - 1 === index && "rounded-r-full"
          } ${index > 0 && arr.length - 1 === index && "rounded-l-full"}`}
          style={
            index === 0
              ? {
                  borderRadius: 8,
                  borderTopRightRadius: 20000,
                  borderBottomRightRadius: 20000,
                  marginLeft: "2rem",
                }
              : {}
          }
        >
          <div
            className={`flex w-8 h-8 rounded-full justify-center items-center bg-button_number ${
              index === 0 && "hidden"
            }`}
          >
            <FaMinus size={18} color={"#fff"} />
          </div>

          <TextField
            className={
              "input-bordered border-color-background max-w-[5.5rem] h-[2rem] "
            }
            labelStyle="text-black"
            placeholder="Nº"
            type="number"
            showErrorMessage={false}
            disableFullWidth
          />

          <TextField
            className={`input-bordered border-color-background max-w-[5.5rem] h-[2rem]`}
            labelStyle="text-black"
            placeholder="Nº"
            type="number"
            showErrorMessage={false}
            disableFullWidth
          />

          <div className="flex w-8 h-8 rounded-full justify-center items-center bg-button_number">
            <FaPlus size={18} color={"#fff"} />
          </div>
        </div>
      </div>
    </div>
  );
};
