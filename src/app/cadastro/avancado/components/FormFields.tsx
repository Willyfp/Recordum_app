"use client";
import ButtonComponent from "@/components/Button";
import TextField from "@/components/TextField";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import { useForm } from "react-hook-form";
import { store } from "@/store/store";

import {
  selectBasicInfo,
  selectWeightGoal,
  setBasicInfo,
  setWeightGoal,
} from "@/store/slices/registerSlice";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Select from "@/components/Select";
import { schemaValidationAdvanced } from "../schemaValidationAdvanced";

const FormFields = ({
  setStep,
}: {
  setStep: Dispatch<SetStateAction<number>>;
}) => {
  const [loading, setLoading] = React.useState(false);

  const basicInfo = useSelector(selectBasicInfo);

  const weightGoal = useSelector(selectWeightGoal);

  const router = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
    clearErrors,
    setValue,
    watch,
  } = useForm({
    resolver: yupResolver(schemaValidationAdvanced),
  });

  useEffect(() => {
    if (!basicInfo) {
      router.push("/cadastro");
    }

    if (basicInfo) {
      Object.entries(basicInfo).forEach(([key, value]) => {
        setValue(key, value);
      });
    }

    if (weightGoal) {
      Object.entries(weightGoal).forEach(([key, value]) => {
        setValue(key, value);
      });
    }
  }, []);

  const onSubmit = async (data) => {
    setLoading(true);

    await store.dispatch(
      setBasicInfo({
        ...basicInfo,
        nome: data.nome,
        sexo: data.sexo,
        altura: data.altura,
      })
    );

    if (data.pesoAtual && data.pesoMeta) {
      await store.dispatch(
        setWeightGoal({
          pesoAtual: data.pesoAtual,
          pesoMeta: data.pesoMeta,
        })
      );
    }

    setStep(1);
    setLoading(false);
  };

  console.log(watch("dataNascimento"));

  return (
    <div className="flex flex-1 w-full gap-[2rem] flex-col py-[1rem]">
      <div className="flex flex-1 flex-col ">
        <TextField
          {...register("nome")}
          className={"input-bordered border-color-background"}
          labelStyle="text-black"
          label="Nome *"
          placeholder="Digite aqui seu nome"
          errorMessage={errors?.nome?.message}
        />

        <Select
          {...register("sexo")}
          label="Sexo *"
          errorMessage={errors?.sexo?.message}
          options={[
            { label: "Masculino", value: "MASCULINO" },
            { label: "Feminino", value: "FEMININO" },
            { label: "Outro", value: "OUTRO" },
          ]}
        />

        <TextField
          className={"input-bordered border-color-background"}
          label="Data de nascimento"
          mask="00/00/0000"
          placeholder="00/00/0000"
          onChange={(e) => {
            setValue("dataNascimento", e.target.value);
            clearErrors("dataNascimento");
          }}
          value={watch("dataNascimento")}
          labelStyle="text-black"
          inputMode="numeric"
          errorMessage={errors?.dataNascimento?.message}
        />

        <TextField
          {...register("altura")}
          className={"input-bordered border-color-background"}
          labelStyle="text-black"
          label="Altura"
          placeholder="Cm"
          type="number"
          inputMode="numeric"
        />

        <div className="flex flex-row items-start gap-[1rem] justify-between">
          <TextField
            {...register("pesoAtual")}
            className={"input-bordered border-color-background w-[100%]"}
            labelStyle="text-black"
            label="Peso atual"
            placeholder="Kg"
            type="number"
            inputMode="numeric"
          />

          <TextField
            {...register("pesoMeta")}
            className={"input-bordered border-color-background w-[100%]"}
            labelStyle="text-black"
            label="Meta de peso"
            placeholder="Kg"
            type="number"
            errorMessage={errors?.pesoMeta?.message}
            inputMode="numeric"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <ButtonComponent
          loading={loading}
          className="w-full btn-primary"
          onClick={handleSubmit(onSubmit)}
        >
          Próximo
        </ButtonComponent>
      </div>
    </div>
  );
};

export default FormFields;
