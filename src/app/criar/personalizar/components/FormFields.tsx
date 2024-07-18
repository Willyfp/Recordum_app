"use client";

import ButtonComponent from "@/components/Button";
import Select from "@/components/Select";
import TextField from "@/components/TextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { schemaValidation } from "./schemaValidation";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFormState,
  selectMusclesSelected,
  setTrainingInfo,
  toggleMuscle,
} from "@/store/slices/TrainingSlice";
import { useRouter } from "next/navigation";
import ListMuscleGroup from "@/components/ListMuscleGroup";
import { useEffect, useState } from "react";
import { Exercises } from "./Exercises";
import { Exercise } from "@/types";
import { selectUser } from "@/store/slices/authSlice";
import { getTrainingById } from "@/services/trainingService";

export const FormFields = ({ id }: { id?: string | number }) => {
  const selectedMuscleGroups = useSelector(selectMusclesSelected);
  const form = useForm({ resolver: yupResolver(schemaValidation) });
  const formState = useSelector(selectFormState);

  const [loading, setLoading] = useState(false);
  const user = useSelector(selectUser);

  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
    setValue,
  } = form;

  const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      getTrainingById(id).then((response) => {
        Object.entries(response).forEach(([key, value]) => {
          if (key === "gruposMusculares") {
            value.map((item) => {
              dispatch(toggleMuscle({ ...item, isAdd: true }));
            });

            return;
          }

          if (key === "exerciciosTreino") {
            setValue(
              "exercicios",
              value.map((item) => ({
                ...item,
                id: item.exercicio.id,
                descricao: item.exercicio.descricao,
              }))
            );

            return;
          }

          setValue(key, value);
        });
      });
    }
  }, []);

  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      dispatch(
        setTrainingInfo({
          id,
          usuario: {
            id: user.id,
          },
          descricao: data.descricao,
          gruposMusculares: selectedMuscleGroups.map((item) => ({
            id: item.id,
            descricao: item.descricao,
          })),
          exercicios: data.exercicios.map((item) => ({
            exercicio: { ...item.exercicio, descricao: item.descricao },
            series: item.seriesTreino?.length,
            seriesTreino: item.seriesTreino,
          })),
        })
      );

      router.push("/criar/confirmar");
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (formState) {
      Object.entries(formState).forEach(([key, value]) => {
        setValue(key, value);
      });
    }
  }, [formState]);

  useEffect(() => {
    if (selectedMuscleGroups.length > 0 && watch("exercicios")?.length > 0) {
      setValue(
        "exercicios",
        watch("exercicios")?.filter((e: Exercise) =>
          selectedMuscleGroups.find((item) => item?.id === e?.grupoMuscular?.id)
        )
      );
    }
  }, [selectedMuscleGroups]);

  return (
    <div className="flex w-full flex-col gap-[1rem] flex-1">
      <FormProvider {...form}>
        <div className="flex flex-1 w-full flex-col gap-[0.5rem]">
          <TextField
            {...register("descricao")}
            className={"input-bordered border-color-background w-[100%]"}
            labelStyle="text-black"
            label="Nome do treino"
            placeholder="Digite uma descrição"
            errorMessage={errors?.descricao?.message}
          />

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-black font-semibold text-description">
                Grupo muscular
              </p>
              <p className="text-black font-description text-button_primary">
                Selecione um ou mais grupos
              </p>
            </div>
          </div>

          <ListMuscleGroup />

          <Exercises />
        </div>

        <ButtonComponent
          className="btn-primary w-full"
          onClick={handleSubmit(onSubmit)}
          disabled={!watch("descricao") || selectedMuscleGroups.length === 0}
        >
          Continuar
        </ButtonComponent>
      </FormProvider>
    </div>
  );
};
