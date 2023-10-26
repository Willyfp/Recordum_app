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

const FormFieldsMeasures = ({
  setStep,
}: {
  setStep: Dispatch<SetStateAction<number>>;
}) => {
  const router = useRouter();
  const measures = useSelector(selectMeasures);
  const basicInfo = useSelector(selectBasicInfo);

  const [loading, setLoading] = React.useState(false);

  const {
    register,
    setValue,
    formState: { errors },
    handleSubmit,
    watch,
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

  const onSubmit = async (data) => {
    setLoading(true);
    await store.dispatch(setMeasures(data));

    setStep(2);

    setLoading(false);
  };

  return (
    <div className="flex flex-1 w-full gap-[2rem] flex-col py-[1rem]">
      <div className="flex flex-1 flex-col ">
        <TextField
          {...register("torax")}
          className={"input-bordered border-color-background"}
          labelStyle="text-black"
          label="Tórax/Peito"
          placeholder="Cm"
          type="number"
        />

        <TextField
          {...register("abdomen")}
          className={"input-bordered border-color-background"}
          labelStyle="text-black"
          label="Abdômen"
          placeholder="Cm"
          type="number"
        />

        <div className="flex flex-row items-start gap-[1rem] justify-between">
          <TextField
            {...register("bicepsE")}
            className={"input-bordered border-color-background w-[100%]"}
            labelStyle="text-black"
            label="Bíceps (E)"
            placeholder="Cm"
            type="number"
          />

          <TextField
            {...register("bicepsD")}
            className={"input-bordered border-color-background w-[100%]"}
            labelStyle="text-black"
            label="Bíceps (D)"
            placeholder="Cm"
            type="number"
            errorMessage={errors?.pesoMeta?.message}
          />
        </div>

        <div className="flex flex-row items-start gap-[1rem] justify-between">
          <TextField
            {...register("antebracoE")}
            className={"input-bordered border-color-background w-[100%]"}
            labelStyle="text-black"
            label="Antebraço (E)"
            placeholder="Cm"
            type="number"
          />

          <TextField
            {...register("antebracoD")}
            className={"input-bordered border-color-background w-[100%]"}
            labelStyle="text-black"
            label="Antebraço (D)"
            placeholder="Cm"
            type="number"
            errorMessage={errors?.pesoMeta?.message}
          />
        </div>

        <TextField
          {...register("quadril")}
          className={"input-bordered border-color-background"}
          labelStyle="text-black"
          label="Quadril"
          placeholder="Cm"
          type="number"
        />

        <div className="flex flex-row items-start gap-[1rem] justify-between">
          <TextField
            {...register("coxaE")}
            className={"input-bordered border-color-background w-[100%]"}
            labelStyle="text-black"
            label="Coxa (E)"
            placeholder="Cm"
            type="number"
          />

          <TextField
            {...register("coxaD")}
            className={"input-bordered border-color-background w-[100%]"}
            labelStyle="text-black"
            label="Coxa (D)"
            placeholder="Cm"
            type="number"
            errorMessage={errors?.pesoMeta?.message}
          />
        </div>

        <div className="flex flex-row items-start gap-[1rem] justify-between">
          <TextField
            {...register("panturrilhaE")}
            className={"input-bordered border-color-background w-[100%]"}
            labelStyle="text-black"
            label="Panturrilha (E)"
            placeholder="Cm"
            type="number"
          />

          <TextField
            {...register("panturrilhaD")}
            className={"input-bordered border-color-background w-[100%]"}
            labelStyle="text-black"
            label="Panturrilha (D)"
            placeholder="Cm"
            type="number"
            errorMessage={errors?.pesoMeta?.message}
          />
        </div>
      </div>

      <div className="flex flex-col">
        <ButtonComponent
          className="w-full btn-primary"
          onClick={handleSubmit(onSubmit)}
          loading={loading}
        >
          Próximo
        </ButtonComponent>
      </div>
    </div>
  );
};

export default FormFieldsMeasures;
