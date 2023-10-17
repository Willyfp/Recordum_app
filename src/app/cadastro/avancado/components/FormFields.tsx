"use client";
import ButtonComponent from "@/components/Button";
import TextField from "@/components/TextField";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { store } from "@/store/store";
import { selectBasicInfo, setBasicInfo } from "@/store/slices/registerSlice";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Select from "@/components/Select";

const FormFields = () => {
  const basicInfo = useSelector(selectBasicInfo);

  const route = useRouter();

  const {
    register,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm({
    // resolver: yupResolver(initialSchemaValidation),
  });

  const onSubmit = (data) => {
    store.dispatch(setBasicInfo(data));
    route.push("/cadastro/avancado");
  };

  return (
    <div className="flex flex-1 w-full gap-[2rem] flex-col">
      <div className="flex flex-1 flex-col gap-[1rem]">
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
          placeholder="Digite aqui sua altura"
          type="number"
        />

        <div className="flex flex-row items-center gap-[1rem] justify-between">
          <TextField
            {...register("pesoAtual")}
            className={"input-bordered border-color-background w-[100%]"}
            labelStyle="text-black"
            label="Peso atual"
            placeholder="Kg"
            type="number"
          />

          <TextField
            {...register("metaPeso")}
            className={"input-bordered border-color-background w-[100%]"}
            labelStyle="text-black"
            label="Meta de peso"
            placeholder="Kg"
            type="number"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <ButtonComponent
          className="w-full btn-primary"
          // onClick={handleSubmit(onSubmit)}
        >
          Próximo
        </ButtonComponent>
      </div>
    </div>
  );
};

export default FormFields;
