"use client";
import ButtonComponent from "@/components/Button";
import { registerTraining } from "@/services/trainingService";
import { selectTrainingInfo } from "@/store/slices/TrainingSlice";
import { setSuccessBottomSheet } from "@/store/slices/globalSlice";
import { useRouter } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import { FaShareAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

export const Summary = () => {
  const trainingInfo = useSelector(selectTrainingInfo);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!trainingInfo) {
      router.push("/criar");
    }
  }, [trainingInfo]);

  const onSubmit = async () => {
    try {
      setLoading(true);

      await registerTraining({
        ...trainingInfo,
        gruposMusculares: trainingInfo?.gruposMusculares.map((item) => ({
          id: item.id,
        })),
        exercicios: trainingInfo.exercicios.map((item) => ({
          exercicio: { id: item.exercicio.id },
          series: item.seriesTreino?.length,
          seriesTreino: item.seriesTreino,
        })),
      });
      
      dispatch(
        setSuccessBottomSheet({
          title: "Treino salvo",
          open: true,
          description:
            "Para acessar treino, entre em treinos no menu e procure por Treinos personalizados",
          buttonText: "Ok",
          buttonAction: () => router.push("/inicio"),
        })
      );

      setLoading(false);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-10 flex-1 w-full h-full">
      <div className="flex flex-1 w-full h-full">
        <div className="flex flex-col py-6 px-4 gap-6 shadow-[0px 4px 10px 0px rgba(147, 147, 147, 0.25)] rounded-[1.25rem] bg-white w-full">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row w-full justify-between items-center">
              <span className="font-semibold text-description text-black">
                {trainingInfo?.descricao}
              </span>

              <FaShareAlt className="w-[1rem] h-[1rem] text-black" />
            </div>

            <div className="flex flex-col gap-2">
              {trainingInfo?.gruposMusculares.map((grupoMuscular, index) => (
                <Fragment key={index}>
                  <span className="text-button_primary text-black font-title_bottom_sheet">
                    {grupoMuscular.descricao}
                  </span>

                  <ul className="list-disc pl-4">
                    {trainingInfo?.exercicios.map((exercicio, index) => (
                      <li key={index}>
                        <span className="text-button_primary text-black font-description">
                          {exercicio.exercicio.descricao}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 py-4">
        <ButtonComponent
          loading={loading}
          className="w-full btn-primary"
          onClick={onSubmit}
        >
          Confirmar
        </ButtonComponent>

        <ButtonComponent
          className="btn-outline w-full border-color-background text-black"
          onClick={() => router.back()}
        >
          Revisar
        </ButtonComponent>
      </div>
    </div>
  );
};
