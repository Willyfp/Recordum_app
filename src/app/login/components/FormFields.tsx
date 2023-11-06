"use client";

import React from "react";
import ButtonComponent from "@components/Button";
import TextField from "@components/TextField";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { loginRequest } from "@/services/authService";
import { schemaValidation } from "./schemaValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCookies } from "next-client-cookies";
import { useRouter } from "next/navigation";

const FormFields = () => {
  const [loading, setLoading] = React.useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{
    username: string;
    password: string;
  }>({ resolver: yupResolver(schemaValidation) });

  const cookies = useCookies();

  const onSubmit = async (data: { username: string; password: string }) => {
    try {
      setLoading(true);

      await loginRequest({ ...data, cookies });
      window.location.href = "/inicio";
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <div className="flex flex-1 justify-center items-center">
        <Image
          src="/images/logo_recordum.png"
          alt="Logo Recordum"
          width={120}
          height={120}
        />
      </div>

      <div className="flex h-[55%] w-full gap-[16px] flex-col">
        <div className="flex flex-1 flex-col ">
          <TextField
            label="E-mail"
            type="email"
            placeholder="Digite seu e-mail"
            {...register("username")}
            errorMessage={errors.username?.message}
          />

          <TextField
            label="Senha"
            type="password"
            placeholder="Digite sua senha"
            {...register("password")}
            errorMessage={errors.password?.message}
          />
        </div>

        <div className="flex flex-col gap-[16px]">
          <div className="flex-1">
            <ButtonComponent
              className="btn-primary w-full"
              loading={loading}
              onClick={handleSubmit(onSubmit)}
            >
              Acessar conta
            </ButtonComponent>
          </div>

          <ButtonComponent
            className="btn-ghost text-secondary w-full"
            loading={loading}
            onClick={() => router.push("/recuperar")}
          >
            Esqueceu a senha?
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
};

export default FormFields;
