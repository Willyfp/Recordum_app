"use client";
import ButtonComponent from "@/components/Button";
import DatePickerComponent from "@/components/DatePicker";
import TextField from "@/components/TextField";
import { editWeightGoal, getWeightGoal } from "@/services/userService";
import { selectUser } from "@/store/slices/authSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { schemaValidation } from "./schemaValidation";
import { useRouter } from "next/navigation";
import dayjs, { Dayjs } from "dayjs";
import { store } from "@/store/store";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { setSuccessBottomSheet } from "@/store/slices/globalSlice";
dayjs.extend(customParseFormat);

export const Form = () => {
  const [weightGoal, setWeightGoal] = useState<any>(null);
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
    resolver: yupResolver(schemaValidation),
    defaultValues: { data: dayjs().format("DD/MM/YYYY") },
  });

  useEffect(() => {
    getWeightGoal().then((res) => {
      setWeightGoal(res);
      setValue("pesoMeta", res?.pesoMeta);
    });
  }, []);

  const onSubmit = async (data: any) => {
    setLoading(true);
    await editWeightGoal({
      ...data,
      idUsuario: user.id,
      data: dayjs(data.data, "DD/MM/YYYY").toISOString(),
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
          {...register("pesoAtual")}
          inputMode="numeric"
          className={"input-bordered border-color-background w-[100%]"}
          labelStyle="text-black"
          label="Peso atual"
          placeholder="Kg"
          type="number"
          errorMessage={errors?.pesoAtual?.message}
        />

        <TextField
          {...register("pesoMeta")}
          inputMode="numeric"
          className={"input-bordered border-color-background w-[100%]"}
          labelStyle="text-black"
          label="Meta de peso"
          disabled={weightGoal?.pesoMeta}
          placeholder="Kg"
          type="number"
          errorMessage={errors?.pesoMeta?.message}
        />

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
