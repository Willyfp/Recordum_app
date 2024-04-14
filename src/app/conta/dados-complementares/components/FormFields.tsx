"use client";

import ButtonComponent from "@/components/Button";
import DatePickerComponent from "@/components/DatePicker";
import Select from "@/components/Select";
import TextField from "@/components/TextField";
import { editUserRequest } from "@/services/userService";
import { selectUser } from "@/store/slices/authSlice";
import { setSuccessBottomSheet } from "@/store/slices/globalSlice";
import { store } from "@/store/store";
import { decryptStrData } from "@/utils";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

const FormFields = () => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
    clearErrors,
    handleSubmit,
  } = useForm();

  const [loading, setLoading] = React.useState(false);

  const router = useRouter();

  const user = useSelector(selectUser);

  useEffect(() => {
    if (user) {
      Object.entries(user).forEach(([key, value]) => {
        if (["nome", "email"].includes(key)) {
          setValue(key, decryptStrData(value));
        } else if (key === "dataNascimento") {
          setValue(key, dayjs(value).format("DD/MM/YYYY"));
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
        disabled={!!user?.altura}
        className={"input-bordered border-color-background"}
        labelStyle="text-black"
        label="Altura"
        placeholder="Cm"
        type="number"
        inputMode="numeric"
      />

      <TextField
        {...register("peso")}
        disabled={!!user?.peso}
        className={"input-bordered border-color-background w-[100%]"}
        labelStyle="text-black"
        label="Peso"
        placeholder="Kg"
        type="number"
        inputMode="numeric"
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
