import { SerieForm } from "@/app/criar/personalizar/components/SerieForm";
import DatePickerComponent from "@/components/DatePicker";
import TextField from "@/components/TextField";
import { Exercise, MuscleGroup } from "@/types";
import { FormProvider, useForm } from "react-hook-form";
import { FormSeries } from "./FormSeries";
import { useEffect, useState } from "react";
import {
  createTrainingLog,
  getEquipmentsByGym,
} from "@/services/trainingService";
import { useCookies } from "next-client-cookies";
import Select from "@/components/Select";
import ButtonComponent from "@/components/Button";
import { formatDataTraining } from "@/utils";
import dayjs from "dayjs";
import { store } from "@/store/store";
import { setSuccessBottomSheet } from "@/store/slices/globalSlice";
import { useRouter } from "next/navigation";

export const FormFields = ({
  exercise,
  trainingId,
  disableExercise,
  submitPath,
}: {
  exercise?: Exercise;
  trainingId?: number;
  disableExercise?: boolean;
  submitPath?: string;
}) => {
  const [equipmentsList, setEquipmentsList] = useState([]);

  const [loading, setLoading] = useState(false);

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
  });

  const cookies = useCookies();

  const gymId = cookies.get("GYM_ID");
  const userID = cookies.get("user_id");

  useEffect(() => {
    getEquipmentsByGym(gymId).then((equipments) => {
      setEquipmentsList(equipments);
    });
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
          usuario: userID,
          exercicioTreino: ["number", "string"].includes(typeof exercise)
            ? exercise
            : exercise?.id,
          treino: trainingId,
          data: dayjs(data.data).toISOString(),
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

        <Select
          options={equipmentsList?.map((equip) => ({
            label: equip.descricao,
            value: equip.id,
          }))}
          {...register("equipamento")}
          label="Equipamento"
          errorMessage={errors?.equipamento?.message}
        />

        <DatePickerComponent
          value={watch("data")}
          onChange={(value) => {
            setValue("data", value);
            clearErrors();
          }}
          errorMessage={errors?.data?.message}
          label="Data"
          labelStyle="text-black"
        />
        <div className="flex flex-row items-center gap-9">
          <h2 className="text-xl mb-4 min-w-[4.5rem] text-black">Série</h2>

          <div className="flex flex-row items-center gap-2">
            <h2 className="text-xl mb-4 min-w-[5.5rem] text-black">
              Repetição
            </h2>
            <h2 className="text-xl mb-4 min-w-[5.5rem] text-black">Carga</h2>
          </div>
        </div>
        {watch("series")?.map((serie, index) => (
          <FormSeries
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
