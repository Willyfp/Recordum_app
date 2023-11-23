"use client";
import ButtonComponent from "@/components/Button";
import TextField from "@/components/TextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { set, useForm } from "react-hook-form";
import { schemaValidationChangePassword } from "./schemaValidationChangePassword";
import { changePasswordRequest } from "@/services/userService";
import { useSelector } from "react-redux";
import { selectUser } from "@/store/slices/authSlice";
import { useState } from "react";
import { store } from "@/store/store";
import { setSuccessBottomSheet } from "@/store/slices/globalSlice";
import { useRouter } from "next/navigation";

const FormFields = () => {
  const user = useSelector(selectUser);

  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaValidationChangePassword) });

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await changePasswordRequest({ id: user?.id, ...data });

      store.dispatch(
        setSuccessBottomSheet({
          title: "Senha alterada",
          open: true,
          description: "Sua senha foi alterada com sucesso.",
          buttonText: "Ok",
          buttonAction: () => router.push("/conta"),
        })
      );
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-[1rem] flex-1">
        <TextField
          {...register("senhaAtual")}
          className={"input-bordered border-color-background w-[100%]"}
          labelStyle="text-black"
          label="Senha atual"
          placeholder="Senha atual"
          type="password"
          errorMessage={errors?.senhaAtual?.message}
        />

        <TextField
          {...register("novaSenha")}
          className={"input-bordered border-color-background w-[100%]"}
          labelStyle="text-black"
          label="Nova senha"
          placeholder="Nova senha"
          type="password"
          errorMessage={errors?.novaSenha?.message}
        />

        <TextField
          {...register("confirmarSenha")}
          className={"input-bordered border-color-background w-[100%]"}
          labelStyle="text-black"
          label="Confirmar senha"
          placeholder="Confirmar senha"
          type="password"
          errorMessage={errors?.confirmarSenha?.message}
        />
      </div>

      <ButtonComponent
        className="btn-primary w-full"
        onClick={handleSubmit(onSubmit)}
        loading={loading}
      >
        Salvar
      </ButtonComponent>
    </>
  );
};

export default FormFields;
