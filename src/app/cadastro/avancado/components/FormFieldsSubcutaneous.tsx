"use client";
import ButtonComponent from "@/components/Button";
import TextField from "@/components/TextField";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import { useForm } from "react-hook-form";
import { store } from "@/store/store";
import {
  selectBasicInfo,
  selectMeasures,
  selectWeightGoal,
  setMeasures,
} from "@/store/slices/registerSlice";

import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import {
  registerMeasuresRequest,
  registerRequest,
  registerWeightGoalRequest,
} from "@/services/RegisterService";
import { loginRequest } from "@/services/authService";
import { setSuccessBottomSheet } from "@/store/slices/globalSlice";
import { useCookies } from "next-client-cookies";
import { selectUser } from "@/store/slices/authSlice";

const FormFieldSubcutaneous = ({
  setStep,
}: {
  setStep: Dispatch<SetStateAction<number>>;
}) => {
  const router = useRouter();

  const [loading, setLoading] = React.useState(false);

  const basicInfo = useSelector(selectBasicInfo);
  const weightGoal = useSelector(selectWeightGoal);
  const measures = useSelector(selectMeasures);
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setValue,
  } = useForm();

  const cookies = useCookies();

  useEffect(() => {
    if (!basicInfo) {
      router.push("/cadastro");
    }

    if (measures) {
      Object.entries(measures).forEach(([key, value]) => {
        setValue(key, value);
      });
    }
  }, []);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await store.dispatch(
        setMeasures(measures ? { ...measures, ...data } : data)
      );
      await registerRequest({
        user: {
          ...basicInfo,
          confirmarSenha: undefined,
          confirmarEmail: undefined,
        },
      });

      const user = await loginRequest({
        username: basicInfo.email,
        password: basicInfo.senha,
        cookies,
      });

      if (
        weightGoal &&
        !Object.values(weightGoal).every((value) => value === "")
      ) {
        await registerWeightGoalRequest({ ...weightGoal, idUsuario: user.id });
      }
      if (measures && !Object.values(measures).every((value) => value === "")) {
        await registerMeasuresRequest({ measures, idUsuario: user.id });
      }

      store.dispatch(
        setSuccessBottomSheet({
          open: true,
          title: "Cadastro concluído",
          description:
            "Seus dados estão salvos, você pode atualizar ou acrescentar novos dados a qualquer momento no App",
          buttonText: "Iniciar sessão",
          buttonAction: () => router.push("/inicio"),
          closeAction: () => router.push("/inicio"),
        })
      );
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-1 w-full gap-[2rem] flex-col py-[1rem]">
      <div className="flex flex-1 flex-col ">
        <TextField
          {...register("subescapular")}
          className={"input-bordered border-color-background"}
          labelStyle="text-black"
          label="Subescapular"
          placeholder="Digite aqui"
          type="number"
          inputMode="numeric"
        />

        <div className="flex flex-row items-start gap-[1rem] justify-between">
          <TextField
            {...register("bicepsBI")}
            className={"input-bordered border-color-background w-[100%]"}
            labelStyle="text-black"
            label="Bíceps (BI)"
            placeholder="Digite aqui"
            type="number"
            inputMode="numeric"
          />

          <TextField
            {...register("tricepsTR")}
            className={"input-bordered border-color-background w-[100%]"}
            labelStyle="text-black"
            label="Tríceps (TR)"
            placeholder="Digite aqui"
            type="number"
            inputMode="numeric"
          />
        </div>

        <TextField
          {...register("axilarMedia")}
          className={"input-bordered border-color-background"}
          labelStyle="text-black"
          label="Axilar média (AM)"
          placeholder="Digite aqui"
          type="number"
          inputMode="numeric"
        />

        <TextField
          {...register("toraxica")}
          className={"input-bordered border-color-background"}
          labelStyle="text-black"
          label="Torácica ou peitoral (TX)"
          placeholder="Digite aqui"
          type="number"
          inputMode="numeric"
        />

        <div className="flex flex-row items-start gap-[1rem] justify-between">
          <TextField
            {...register("suprailiaca")}
            className={"input-bordered border-color-background w-[100%]"}
            labelStyle="text-black"
            label="Supra-ilíaca (SI)"
            placeholder="Digite aqui"
            type="number"
            inputMode="numeric"
          />

          <TextField
            {...register("supraespinal")}
            className={"input-bordered border-color-background w-[100%]"}
            labelStyle="text-black"
            label="Supra-espinal (SE)"
            placeholder="Digite aqui"
            type="number"
            errorMessage={errors?.pesoMeta?.message}
            inputMode="numeric"
          />
        </div>

        <TextField
          {...register("coxa")}
          className={"input-bordered border-color-background"}
          labelStyle="text-black"
          label="Coxa (CX)"
          placeholder="Digite aqui"
          type="number"
          inputMode="numeric"
        />

        <TextField
          {...register("panturrilhaMedial")}
          className={"input-bordered border-color-background"}
          labelStyle="text-black"
          label="Panturrilha medial (PM)"
          placeholder="Digite aqui"
          type="number"
          inputMode="numeric"
        />

        <TextField
          {...register("metaGordura")}
          className={"input-bordered border-color-background"}
          labelStyle="text-black"
          label="Meta de % de gordura"
          placeholder="Digite aqui"
          type="number"
          inputMode="numeric"
        />
      </div>

      <div className="flex flex-col">
        <ButtonComponent
          className="w-full btn-primary"
          onClick={handleSubmit(onSubmit)}
          loading={loading}
        >
          Finalizar
        </ButtonComponent>
      </div>
    </div>
  );
};

export default FormFieldSubcutaneous;
