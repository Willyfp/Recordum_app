"use client";
import ButtonComponent from "@/components/Button";
import TextField from "@/components/TextField";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import { useForm } from "react-hook-form";
import { store } from "@/store/store";
import {
  selectBasicInfo,
  selectMeasures,
  setMeasures,
} from "@/store/slices/registerSlice";

import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const FormFieldSubcutaneous = ({
  setStep,
}: {
  setStep: Dispatch<SetStateAction<number>>;
}) => {
  const router = useRouter();

  const basicInfo = useSelector(selectBasicInfo);
  const measures = useSelector(selectMeasures);
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setValue,
  } = useForm();

  useEffect(() => {
    if (!basicInfo) {
      router.push("/cadastro");
    }

    if (measures) {
      Object.entries(measures).forEach(([key, value]) => {
        setValue(key, value);
      });
    }
  }, []);

  const onSubmit = (data) => {
    store.dispatch(setMeasures(measures ? { ...measures, ...data } : data));
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
            errorMessage={errors?.pesoMeta?.message}
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
      </div>

      <div className="flex flex-col">
        <ButtonComponent
          className="w-full btn-primary"
          onClick={handleSubmit(onSubmit)}
        >
          Finalizar
        </ButtonComponent>
      </div>
    </div>
  );
};

export default FormFieldSubcutaneous;