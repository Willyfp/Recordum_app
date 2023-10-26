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
import DatePicker from "tailwind-datepicker-react";
import DatePickerComponent from "@/components/DatePicker";

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
    watch,
    setValue,
    clearErrors,
  } = useForm({
    resolver: yupResolver(schemaValidationAdvanced),
  });

  useEffect(() => {
    if (!basicInfo) {
      router.push("/cadastro");
    }

    if (basicInfo) {
      Object.entries(basicInfo).forEach(([key, value]) => {
        if (key === "dataNascimento") {
          setValue(key, new Date(value));
          return;
        }

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
        dataNascimento: new Date(data.dataNascimento).toISOString(),
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

        <DatePickerComponent
          value={watch("dataNascimento")}
          onChange={(value) => {
            setValue("dataNascimento", value);
            clearErrors();
          }}
          errorMessage={errors?.dataNascimento?.message}
          label="Data de nascimento"
          labelStyle="text-black"
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
