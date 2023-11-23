"use client";
import ButtonComponent from "@/components/Button";
import TextField from "@/components/TextField";
import { selectUser } from "@/store/slices/authSlice";
import { decryptStrData } from "@/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { use, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { schemaValidationEdit } from "./schemaValidationEdit";
import { editUserRequest } from "@/services/userService";
import { store } from "@/store/store";
import { setSuccessBottomSheet } from "@/store/slices/globalSlice";
import { useRouter } from "next/navigation";

const FormFields = () => {
  const user = useSelector(selectUser);

  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaValidationEdit) });

  useEffect(() => {
    if (user) {
      Object.entries(user).forEach(([key, value]) => {
        if (["nome", "email"].includes(key)) {
          setValue(key, decryptStrData(value));
        } else {
          setValue(key, value);
        }
      });
    }
  }, [user]);

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      await editUserRequest({ user: data });

      store.dispatch(
        setSuccessBottomSheet({
          open: true,
          title: "Dados salvos",
          description: "Seus dados foram salvos com sucesso.",
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
      <TextField
        {...register("nome")}
        className={"input-bordered border-color-background w-[100%]"}
        labelStyle="text-black"
        label="Nome"
        placeholder="Nome do usuário"
        errorMessage={errors?.nome?.message}
      />

      <TextField
        {...register("email")}
        className={"input-bordered border-color-background w-[100%]"}
        labelStyle="text-black"
        label="Email"
        type="email"
        placeholder="Email do usuário"
        errorMessage={errors?.email?.message}
      />

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
