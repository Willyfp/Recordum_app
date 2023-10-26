"use client";
import ButtonComponent from "@/components/Button";
import TextField from "@/components/TextField";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { initialSchemaValidation } from "../schemaValidation";
import { store } from "@/store/store";
import { selectBasicInfo, setBasicInfo } from "@/store/slices/registerSlice";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const FormFields = () => {
  const basicInfo = useSelector(selectBasicInfo);

  const route = useRouter();

  const [loading, setLoading] = React.useState(false);

  const {
    register,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(initialSchemaValidation),
  });

  useEffect(() => {
    if (basicInfo) {
      Object.entries(basicInfo).forEach(([key, value]) => {
        setValue(key, value);
      });
    }
  }, []);

  const onSubmit = async (data) => {
    setLoading(true);
    await store.dispatch(setBasicInfo({ ...data, usuarioTipo: "ALUNO" }));
    await route.push("/cadastro/avancado");

    setLoading(false);
  };

  return (
    <div className="flex h-[70%] w-full gap-[32px] flex-col pb-[64px]">
      <div className="flex flex-1 flex-col">
        <TextField
          {...register("email")}
          className={"input-bordered border-color-background"}
          labelStyle="text-black"
          label="E-mail"
          type="email"
          placeholder="Digite aqui seu e-mail"
          errorMessage={errors?.email?.message}
        />

        <TextField
          {...register("confirmarEmail")}
          className={"input-bordered border-color-background"}
          labelStyle="text-black"
          label="Confirmar E-mail"
          type="email"
          placeholder="Confirme aqui seu e-mail"
          errorMessage={errors?.confirmarEmail?.message}
        />

        <TextField
          {...register("senha")}
          className={"input-bordered border-color-background"}
          labelStyle="text-black"
          label="Senha"
          type="password"
          placeholder="Digite aqui sua senha"
          errorMessage={errors?.senha?.message}
        />

        <TextField
          {...register("confirmarSenha")}
          className={"input-bordered border-color-background"}
          labelStyle="text-black"
          label="Confirmar senha"
          type="password"
          placeholder="Confirme aqui sua senha"
          errorMessage={errors?.confirmarSenha?.message}
        />
      </div>

      <div className="flex-1">
        <ButtonComponent
          className="w-full btn-primary"
          onClick={handleSubmit(onSubmit)}
          loading={loading}
        >
          Cadastrar
        </ButtonComponent>
      </div>
    </div>
  );
};

export default FormFields;
