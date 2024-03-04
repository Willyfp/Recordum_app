import BottomSheet from "@/components/BottomSheet";
import ButtonComponent from "@/components/Button";
import { connectToEquipment } from "@/services/trainingService";
import { setApiError, setSuccessBottomSheet } from "@/store/slices/globalSlice";
import { store } from "@/store/store";
import { Training } from "@/types";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaExclamation, FaPlay } from "react-icons/fa";
import QrReader from "react-qr-scanner";

export const ExecutableExerciseList = ({
  training,
}: {
  training?: Training;
}) => {
  const [visible, setVisible] = useState(false);

  const router = useRouter();

  const [isConnection, setIsConnection] = useState(false);

  const [loading, setLoading] = useState(false);

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
            closeAction={() => {
              setVisible(false);
              setIsConnection(false);
            }}
            icon={
              <div className="flex w-16 h-16 justify-center items-center rounded-[1.5rem] bg-[#f9c459]">
                <FaExclamation className="w-8 h-8 text-white" />
              </div>
            }
            title={item.exercicio.descricao}
          >
            {isConnection ? (
              <div className="flex flex-1 justify-center items-center flex-col gap-8 pt-4">
                <span className="text-[18px] text-center">
                  Aproxime-se do equipamento e escaneie o código para se
                  conectar ao aparelho
                </span>

                <QrReader
                  className="border rounded-lg items-center justify-center flex w-[250px] max-h-[250px] max-w-[250px]"
                  delay={200}
                  onError={(e) => {
                    store.dispatch(setApiError("QR code inválido!"));
                  }}
                  onScan={async (result) => {
                    if (result) {
                      try {
                        if (!loading) {
                          setLoading(true);

                          await connectToEquipment(result.text);

                          setIsConnection(false);
                          setVisible(false);

                          store.dispatch(
                            setSuccessBottomSheet({
                              open: true,
                              title: "Conectado",
                              description:
                                "Conectado com sucesso! Clique para iniciar os exercícios",
                              buttonText: "OK",
                              buttonAction: () => {},
                              closeAction: () => {},
                            })
                          );
                          setLoading(false);
                        }
                      } catch (error) {
                        store.dispatch(setApiError("QR code inválido!"));
                        setLoading(false);
                      }
                    }
                  }}
                  style={{ padding: 0, margin: 0, lineHeight: 0 }}
                />
              </div>
            ) : (
              <div className="flex flex-col gap-4 w-full items-center py-5">
                <span className="text-black text-description text-center">
                  Aproxime-se do equipamento e escaneie o código para se
                  conectar ao aparelho
                </span>

                <div className="flex flex-col w-full pt-4 gap-4">
                  <ButtonComponent
                    // loading={loading}
                    className="w-full btn-primary"
                    onClick={() => setIsConnection(true)}
                  >
                    Iniciar
                  </ButtonComponent>

                  <ButtonComponent
                    className="btn-outline w-full border-color-background text-black"
                    onClick={() =>
                      router.push(
                        `/meus-treinos/${training.id}/exercicio/${item.exercicio.id}`
                      )
                    }
                  >
                    Utilizar sem conexão
                  </ButtonComponent>
                </div>
              </div>
            )}
          </BottomSheet>
        </>
      ))}
    </div>
  );
};
