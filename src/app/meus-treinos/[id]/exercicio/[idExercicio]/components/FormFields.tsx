import { SerieForm } from "@/app/criar/personalizar/components/SerieForm";
import DatePickerComponent from "@/components/DatePicker";
import TextField from "@/components/TextField";
import { Exercise, MuscleGroup, Training } from "@/types";
import { FormProvider, useForm } from "react-hook-form";
import { FormSeries } from "./FormSeries";
import { useEffect, useState } from "react";
import {
  createTrainingLog,
  getEquipmentsByGym,
  getTrainingById,
} from "@/services/trainingService";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useCookies } from "next-client-cookies";
import Select from "@/components/Select";
import ButtonComponent from "@/components/Button";
import { formatDataTraining } from "@/utils";
import dayjs from "dayjs";
import { store } from "@/store/store";
import { setSuccessBottomSheet } from "@/store/slices/globalSlice";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaValidation } from "./schemaValidation";

dayjs.extend(customParseFormat);

export const FormFields = ({
  exercise,
  trainingId,
  disableExercise,
  submitPath,
  musclegroup,
  idUser,
}: {
  exercise?: Exercise;
  trainingId?: number;
  disableExercise?: boolean;
  submitPath?: string;
  musclegroup?: MuscleGroup;
  idUser?: number;
}) => {
  const [equipmentsList, setEquipmentsList] = useState([]);

  const [training, setTraining] = useState<Training>();

  const [loading, setLoading] = useState(false);

  const [disabledSeries, setDisabledSeries] = useState(false);

  const router = useRouter();

  const form = useForm({
    defaultValues: {
      series: [
        {
          carga: 0,
          repeticao: 0,
        },
      ],
    },
    resolver: yupResolver(schemaValidation),
  });

  const cookies = useCookies();

  const gymId = cookies.get("GYM_ID");
  const userID = cookies.get("user_id");

  useEffect(() => {
    if (gymId === "NO_GYM") return;
    getEquipmentsByGym(gymId).then((equipments) => {
      setEquipmentsList(equipments);
    });
  }, []);

  useEffect(() => {
    if (trainingId) {
      getTrainingById(trainingId).then((response) => {
        setTraining(response);
      });
    }
  }, []);

  const {
    watch,
    handleSubmit,
    setValue,
    register,
    clearErrors,
    formState: { errors },
  } = form;

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      await createTrainingLog(
        formatDataTraining({
          ...data,
          usuario: idUser ?? userID,
          exercicioTreino: ["number", "string"].includes(typeof exercise)
            ? exercise
            : exercise?.id,
          treino: trainingId,
          data: dayjs(data.data, "DD/MM/YYYY").toISOString(),
        })
      );

      store.dispatch(
        setSuccessBottomSheet({
          open: true,
          title: "Execução salva",
          buttonText: "Ok",
          buttonAction: () =>
            router.push(submitPath ?? `/meus-treinos/${trainingId}`),
        })
      );
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormProvider {...form}>
      <div className="flex flex-col gap-1">
        {!disableExercise && (
          <>
            <TextField
              value={exercise?.grupoMuscular.descricao}
              className={"input-bordered border-color-background"}
              labelStyle="text-black"
              label="Grupo muscular"
              placeholder="Grupo muscular"
              disabled
            />

            <TextField
              value={exercise?.descricao}
              className={"input-bordered border-color-background"}
              labelStyle="text-black"
              label="Nome do exercício"
              placeholder="Nome do exercício"
              disabled
            />
          </>
        )}

        {gymId !== "NO_GYM" && (
          <Select
            options={equipmentsList?.map((equip) => ({
              label: equip.descricao,
              value: equip.id,
            }))}
            {...register("equipamento")}
            label="Equipamento"
            errorMessage={errors?.equipamento?.message}
          />
        )}

        <TextField
          className={"input-bordered border-color-background"}
          label="Data"
          mask="00/00/0000"
          placeholder="00/00/0000"
          onChange={(e) => {
            setValue("data", e.target.value);
            clearErrors("data");
          }}
          value={watch("data")}
          labelStyle="text-black"
          inputMode="numeric"
          errorMessage={errors?.data?.message}
        />

        {trainingId && (
          <div className="flex flex-col gap-2">
            <p className="text-black font-semibold text-description">
              Execução prevista
            </p>

            {training?.exerciciosTreino
              ?.find((item) => item.exercicio.id === exercise.id)
              ?.seriesTreino?.map((serie, index) => (
                <ul className="list-disc pl-4 pb-2" key={index}>
                  <li>
                    <strong>{index + 1}ª Série</strong>
                  </li>

                  <ul className="list-disc pl-4">
                    <li>Repetições: {serie.repeticao}</li>
                    <li>Carga: {serie.carga}</li>
                  </ul>
                </ul>
              ))}
          </div>
        )}

        {trainingId && (
          <div className="py-4">
            <input
              className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onChange={(e) => {
                if (e.target.checked) {
                  setValue(
                    "series",
                    training?.exerciciosTreino
                      .find((item) => item.exercicio.id === exercise.id)
                      ?.seriesTreino.map((serie) => ({
                        cargaInformada: serie.carga,
                        repeticao: serie.repeticao,
                      }))
                  );
                  setDisabledSeries(true);
                } else {
                  setValue("series", [
                    {
                      cargaInformada: 0,
                      repeticao: 0,
                    },
                  ]);

                  setDisabledSeries(false);
                }
              }}
            />
            <label
              className="inline-block pl-[0.15rem] hover:cursor-pointer"
              htmlFor="flexSwitchCheckDefault"
            >
              Definir execução prevista como padrão
            </label>
          </div>
        )}

        <div className="flex flex-row items-center gap-9">
          <h2 className="text-xl mb-4 min-w-[4.5rem] text-black">Série</h2>

          <div className="flex flex-row items-center gap-2">
            <h2 className="text-xl mb-4 min-w-[5.5rem] text-black">
              {exercise?.grupoMuscular?.descricao === "Cardio" ||
              musclegroup?.descricao === "Cardio"
                ? "Velocidade"
                : "Repetições"}
            </h2>
            <h2 className="text-xl mb-4 min-w-[5.5rem] text-black">
              {exercise?.grupoMuscular?.descricao === "Cardio" ||
              musclegroup?.descricao === "Cardio"
                ? "Tempo"
                : "Carga"}
            </h2>
          </div>
        </div>
        {watch("series")?.map((serie, index) => (
          <FormSeries
            disabled={disabledSeries}
            key={index}
            serie={serie}
            index={index}
            exercise={exercise}
            arr={watch("series")}
          />
        ))}
      </div>

      <ButtonComponent
        className="btn-primary w-full"
        onClick={handleSubmit(onSubmit)}
        loading={loading}
      >
        Salvar
      </ButtonComponent>
    </FormProvider>
  );
};
