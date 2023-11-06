"use client";
import ButtonComponent from "@/components/Button";
import TextField from "@/components/TextField";
import { recoverPasswordRequest } from "@/services/authService";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const Steps = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    recoverPasswordRequest(data);
  };

  const stepsObject = {
    0: "Para redefinir a senha digite o e-mail vinculado a sua conta, vamos encaminhar um código de validação.",
    1: "Digite o código de confirmação que foi encaminhado para seu e-mail.",
    2: "Lembre-se de utilizar uma senha forte.",
  };

  const stepsComponents = {
    0: (
      <TextField
        {...register("email")}
        className={"input-bordered border-color-background"}
        labelStyle="text-black"
        label="E-mail"
        type="email"
        placeholder="Digite aqui seu e-mail"
        errorMessage={errors?.email?.message}
      />
    ),
    1: (
      <TextField
        {...register("token")}
        className={"input-bordered border-color-background"}
        labelStyle="text-black"
        label="Código"
        type="number"
        placeholder="Digite aqui"
        errorMessage={errors?.token?.message}
      />
    ),
    2: (
      <>
        <TextField
          {...register("password")}
          className={"input-bordered border-color-background"}
          labelStyle="text-black"
          label="Senha"
          type="password"
          placeholder="Digite aqui sua senha"
          errorMessage={errors?.password?.message}
        />

        <TextField
          {...register("confirmPassword")}
          className={"input-bordered border-color-background"}
          labelStyle="text-black"
          label="Confirmar senha"
          type="password"
          placeholder="Confirme aqui sua senha"
          errorMessage={errors?.confirmPassword?.message}
        />
      </>
    ),
  };

  const [step, setStep] = useState<keyof typeof stepsObject>(0);

  return (
    <div className="flex flex-1 gap=[0.5rem] flex-col">
      <div className="flex flex-1 gap=[0.5rem] flex-col">
        <p className="text-button_primary font-description">
          {stepsObject[step]}
        </p>

        {stepsComponents[step]}
      </div>

      <ButtonComponent onClick={handleSubmit(onSubmit)}>
        Confirmar
      </ButtonComponent>
    </div>
  );
};
