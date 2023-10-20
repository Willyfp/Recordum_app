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
  const basicInfo = useSelector(selectBasicInfo);

  const weightGoal = useSelector(selectWeightGoal);

  const router = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setValue,
  } = useForm({
    resolver: yupResolver(schemaValidationAdvanced),
  });

  useEffect(() => {
    // if (!basicInfo) {
    //   router.push("/cadastro");
    // }

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

  const onSubmit = (data) => {
    store.dispatch(
      setBasicInfo({
        ...basicInfo,
        nome: data.nome,
        sexo: data.sexo,
        idade: data.idade,
        altura: data.altura,
      })
    );

    if (data.pesoAtual && data.pesoMeta) {
      store.dispatch(
        setWeightGoal({
          pesoAtual: data.pesoAtual,
          pesoMeta: data.pesoMeta,
        })
      );
    }

    setStep(1);
  };

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
          {...register("idade")}
          className={"input-bordered border-color-background"}
          labelStyle="text-black"
          label="Idade *"
          placeholder="Digite aqui sua idade"
          errorMessage={errors?.idade?.message}
          type="number"
        />

        <TextField
          {...register("altura")}
          className={"input-bordered border-color-background"}
          labelStyle="text-black"
          label="Altura"
          placeholder="Cm"
          type="number"
        />

        <div className="flex flex-row items-start gap-[1rem] justify-between">
          <TextField
            {...register("pesoAtual")}
            className={"input-bordered border-color-background w-[100%]"}
            labelStyle="text-black"
            label="Peso atual"
            placeholder="Kg"
            type="number"
          />

          <TextField
            {...register("pesoMeta")}
            className={"input-bordered border-color-background w-[100%]"}
            labelStyle="text-black"
            label="Meta de peso"
            placeholder="Kg"
            type="number"
            errorMessage={errors?.pesoMeta?.message}
          />
        </div>
      </div>

      <div className="flex flex-col">
        <ButtonComponent
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
