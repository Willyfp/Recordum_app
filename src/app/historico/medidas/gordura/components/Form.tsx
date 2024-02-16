"use client";
import ButtonComponent from "@/components/Button";
import TextField from "@/components/TextField";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import { useForm } from "react-hook-form";
import { store } from "@/store/store";
import {
  selectBasicInfo,
  selectMeasures,
  selectWeightGoal,
  setMeasures,
} from "@/store/slices/registerSlice";

import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import {
  registerMeasuresRequest,
  registerRequest,
  registerWeightGoalRequest,
} from "@/services/RegisterService";
import { loginRequest } from "@/services/authService";
import { setSuccessBottomSheet } from "@/store/slices/globalSlice";
import { useCookies } from "next-client-cookies";
import { selectUser } from "@/store/slices/authSlice";
import DatePickerComponent from "@/components/DatePicker";
import dayjs from "dayjs";
import { schemaValidation } from "./schemaValidation";
import { yupResolver } from "@hookform/resolvers/yup";

const Form = () => {
  const router = useRouter();

  const [loading, setLoading] = React.useState(false);

  const weightGoal = useSelector(selectWeightGoal);
  const measures = useSelector(selectMeasures);
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    clearErrors,
    setValue,
  } = useForm({
    resolver: yupResolver(schemaValidation),
    defaultValues: { data: dayjs() },
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      if (
        weightGoal &&
        !Object.values(weightGoal).every((value) => value === "")
      ) {
        await registerWeightGoalRequest({ ...weightGoal, idUsuario: user.id });
      }
      if (measures && !Object.values(measures).every((value) => value === "")) {
        await registerMeasuresRequest({ measures, idUsuario: user.id });
      }

      store.dispatch(
        setSuccessBottomSheet({
          open: true,
          title: "Dados salvos",
          description: "Realize a atualização dos dados quando quiser!",
          buttonText: "OK",
          buttonAction: () => router.push("/historico/medidas"),
          closeAction: () => router.push("/historico/medidas"),
        })
      );
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-1 w-full gap-[2rem] flex-col py-[1rem]">
      <div className="flex flex-1 flex-col ">
        <TextField
          {...register("subescapular")}
          className={"input-bordered border-color-background"}
          labelStyle="text-black"
          label="Subescapular"
          placeholder="Digite aqui"
          type="number"
        />

        <div className="flex flex-row items-start gap-[1rem] justify-between">
          <TextField
            {...register("bicepsBI")}
            className={"input-bordered border-color-background w-[100%]"}
            labelStyle="text-black"
            label="Bíceps (BI)"
            placeholder="Digite aqui"
            type="number"
          />

          <TextField
            {...register("tricepsTR")}
            className={"input-bordered border-color-background w-[100%]"}
            labelStyle="text-black"
            label="Tríceps (TR)"
            placeholder="Digite aqui"
            type="number"
            errorMessage={errors?.pesoMeta?.message}
          />
        </div>

        <TextField
          {...register("axilarMedia")}
          className={"input-bordered border-color-background"}
          labelStyle="text-black"
          label="Axilar média (AM)"
          placeholder="Digite aqui"
          type="number"
        />

        <TextField
          {...register("toraxica")}
          className={"input-bordered border-color-background"}
          labelStyle="text-black"
          label="Torácica ou peitoral (TX)"
          placeholder="Digite aqui"
          type="number"
        />

        <div className="flex flex-row items-start gap-[1rem] justify-between">
          <TextField
            {...register("suprailiaca")}
            className={"input-bordered border-color-background w-[100%]"}
            labelStyle="text-black"
            label="Supra-ilíaca (SI)"
            placeholder="Digite aqui"
            type="number"
          />

          <TextField
            {...register("supraespinal")}
            className={"input-bordered border-color-background w-[100%]"}
            labelStyle="text-black"
            label="Supra-espinal (SE)"
            placeholder="Digite aqui"
            type="number"
          />
        </div>

        <TextField
          {...register("coxa")}
          className={"input-bordered border-color-background"}
          labelStyle="text-black"
          label="Coxa (CX)"
          placeholder="Digite aqui"
          type="number"
        />

        <TextField
          {...register("panturrilhaMedial")}
          className={"input-bordered border-color-background"}
          labelStyle="text-black"
          label="Panturrilha medial (PM)"
          placeholder="Digite aqui"
          type="number"
        />

        <TextField
          {...register("metaGordura")}
          className={"input-bordered border-color-background"}
          labelStyle="text-black"
          label="Meta de % de gordura"
          placeholder="Digite aqui"
          type="number"
        />

        <DatePickerComponent
          value={watch("data")}
          onChange={(value) => {
            setValue("data", value);
            clearErrors("data");
          }}
          errorMessage={errors?.data?.message}
          label="Data"
          labelStyle="text-black"
        />
      </div>

      <div className="flex flex-col">
        <ButtonComponent
          className="w-full btn-primary"
          onClick={handleSubmit(onSubmit)}
          loading={loading}
        >
          Finalizar
        </ButtonComponent>
      </div>
    </div>
  );
};

export default Form;
