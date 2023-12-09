import BottomSheet from "@/components/BottomSheet";
import ButtonComponent from "@/components/Button";
import { Training } from "@/types";
import { useState } from "react";
import { FaExclamation, FaPlay } from "react-icons/fa";
import { MdClose } from "react-icons/md";

export const ExecutableExerciseList = ({
  training,
}: {
  training?: Training;
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex flex-col flex-1 p-[1.5rem] gap-4">
      {training?.exerciciosTreino?.map((item, i) => (
        <>
          <div className="flex flex-row items-center justify-between">
            <span className="text-black text-description">
              {item.exercicio.descricao}
            </span>

            <div
              className="flex h-10 w-10 rounded-full bg-white shadow-card_muscle items-center justify-center cursor-pointer"
              onClick={() => setVisible(true)}
            >
              <FaPlay className="w-4 h-4 text-black" />
            </div>
          </div>
          {i > training.exerciciosTreino.length - 1 && (
            <div className="divider m-0" />
          )}

          <BottomSheet
            open={visible}
            closeAction={() => setVisible(false)}
            icon={
              <div className="flex w-16 h-16 justify-center items-center rounded-[1.5rem] bg-[#f9c459]">
                <FaExclamation className="w-8 h-8 text-white" />
              </div>
            }
            title={item.exercicio.descricao}
          >
            <div className="flex flex-col gap-4 w-full items-center py-5">
              <span className="text-black text-description text-center">
                Aproxime-se do equipamento e escaneie o código para se conectar
                ao aparelho
              </span>

              <div className="flex flex-col w-full pt-4 gap-4">
                <ButtonComponent
                  // loading={loading}
                  className="w-full btn-primary"
                  // onClick={onSubmit}
                >
                  Iniciar
                </ButtonComponent>

                <ButtonComponent
                  className="btn-outline w-full border-color-background text-black"
                  // onClick={() => router.back()}
                >
                  Utilizar sem conexão
                </ButtonComponent>
              </div>
            </div>
          </BottomSheet>
        </>
      ))}
    </div>
  );
};
