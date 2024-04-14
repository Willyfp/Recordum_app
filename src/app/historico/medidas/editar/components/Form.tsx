"use client";
import ButtonComponent from "@/components/Button";
import DatePickerComponent from "@/components/DatePicker";

import { editMeasures } from "@/services/userService";
import { selectUser } from "@/store/slices/authSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import dayjs, { Dayjs } from "dayjs";
import { store } from "@/store/store";
import { setSuccessBottomSheet } from "@/store/slices/globalSlice";
import TextField from "@/components/TextField";
import { schemaValidation } from "./schemaValidation";

export const Form = () => {
  const [loading, setLoading] = useState(false);

  const user = useSelector(selectUser);

  const router = useRouter();

  const {
    register,
    formState: { errors },
    watch,
    setValue,
    clearErrors,
    handleSubmit,
  } = useForm({
    defaultValues: { data: dayjs().format("DD/MM/YYYY") },
    resolver: yupResolver(schemaValidation),
  });

  const onSubmit = async (data: any) => {
    setLoading(true);
    await editMeasures({
      idUsuario: user.id,
      data: { ...data, data: dayjs(data.data).toISOString() },
    }).then((res) => {
      store.dispatch(
        setSuccessBottomSheet({
          open: true,
          title: "Dados salvos",
          description: "Realize a atualização dos dados quando quiser!",
          buttonText: "Ok",
          buttonAction: () => router.push("/historico/medidas"),
          closeAction: () => router.push("/historico/medidas"),
        })
      );
    });
    setLoading(false);
  };

  return (
    <>
      <div className="flex flex-col gap-1 flex-1">
        <TextField
          {...register("torax")}
          className={"input-bordered border-color-background"}
          labelStyle="text-black"
          label="Tórax/Peito"
          placeholder="Cm"
          type="number"
          inputMode="numeric"
        />

        <TextField
          {...register("abdomen")}
          className={"input-bordered border-color-background"}
          labelStyle="text-black"
          label="Abdômen"
          placeholder="Cm"
          inputMode="numeric"
          type="number"
        />

        <div className="flex flex-row items-start gap-[1rem] justify-between">
          <TextField
            {...register("bicepsE")}
            className={"input-bordered border-color-background w-[100%]"}
            labelStyle="text-black"
            label="Bíceps (E)"
            placeholder="Cm"
            inputMode="numeric"
            type="number"
          />

          <TextField
            {...register("bicepsD")}
            className={"input-bordered border-color-background w-[100%]"}
            labelStyle="text-black"
            label="Bíceps (D)"
            placeholder="Cm"
            inputMode="numeric"
            type="number"
            errorMessage={errors?.pesoMeta?.message}
          />
        </div>

        <div className="flex flex-row items-start gap-[1rem] justify-between">
          <TextField
            {...register("antebracoE")}
            className={"input-bordered border-color-background w-[100%]"}
            labelStyle="text-black"
            label="Antebraço (E)"
            inputMode="numeric"
            placeholder="Cm"
            type="number"
          />

          <TextField
            {...register("antebracoD")}
            className={"input-bordered border-color-background w-[100%]"}
            labelStyle="text-black"
            inputMode="numeric"
            label="Antebraço (D)"
            placeholder="Cm"
            type="number"
            errorMessage={errors?.pesoMeta?.message}
          />
        </div>

        <TextField
          {...register("quadril")}
          className={"input-bordered border-color-background"}
          labelStyle="text-black"
          inputMode="numeric"
          label="Quadril"
          placeholder="Cm"
          type="number"
        />

        <div className="flex flex-row items-start gap-[1rem] justify-between">
          <TextField
            {...register("coxaE")}
            className={"input-bordered border-color-background w-[100%]"}
            labelStyle="text-black"
            label="Coxa (E)"
            inputMode="numeric"
            placeholder="Cm"
            type="number"
          />

          <TextField
            {...register("coxaD")}
            className={"input-bordered border-color-background w-[100%]"}
            labelStyle="text-black"
            label="Coxa (D)"
            inputMode="numeric"
            placeholder="Cm"
            type="number"
            errorMessage={errors?.pesoMeta?.message}
          />
        </div>

        <div className="flex flex-row items-start gap-[1rem] justify-between">
          <TextField
            {...register("panturrilhaE")}
            className={"input-bordered border-color-background w-[100%]"}
            labelStyle="text-black"
            label="Panturrilha (E)"
            inputMode="numeric"
            placeholder="Cm"
            type="number"
          />

          <TextField
            {...register("panturrilhaD")}
            className={"input-bordered border-color-background w-[100%]"}
            labelStyle="text-black"
            label="Panturrilha (D)"
            inputMode="numeric"
            placeholder="Cm"
            type="number"
            errorMessage={errors?.pesoMeta?.message}
          />
        </div>

        <TextField
          className={"input-bordered border-color-background"}
          label="Data"
          mask="00/00/0000"
          placeholder="00/00/0000"
          onChange={(e) => {
            setValue("data", e.target.value);
            clearErrors("data");
          }}
          value={watch("data")}
          labelStyle="text-black"
          inputMode="numeric"
          errorMessage={errors?.data?.message}
        />
      </div>

      <ButtonComponent
        className="btn-primary text-black"
        loading={loading}
        onClick={handleSubmit(onSubmit)}
      >
        Salvar
      </ButtonComponent>
    </>
  );
};
