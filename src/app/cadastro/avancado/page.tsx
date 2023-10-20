"use client";
import Header from "@/components/Header";
import Stepper from "@/components/Stepper";
import { useState } from "react";
import FormFields from "./components/FormFields";
import FormFieldsMeasures from "./components/FormFieldsMeasures";
import FormFieldSubcutaneous from "./components/FormFieldsSubcutaneous";

export default function Cadastro() {
  const [step, setStep] = useState(0);

  const textRegister = {
    0: (
      <span className="text-black text-button_primary">
        Dados básicos para realizar o acompanhamento de desempenho.
      </span>
    ),
    1: (
      <span className="text-black text-button_primary">
        Preencha com seus dados corporais, os dados não são obrigatórios e podem
        ser pulados. <strong>(Dados não obrigatórios)</strong>
      </span>
    ),
    2: (
      <span className="text-black text-button_primary">
        Preencha com os dados corporais, das dobras cutâneas para um
        monitoramento mais assertivo no seu processo.
        <strong>(Dados não obrigatórios)</strong>
      </span>
    ),
  };

  const formFieldsRegister = {
    0: <FormFields setStep={setStep} />,
    1: <FormFieldsMeasures setStep={setStep} />,
    2: <FormFieldSubcutaneous setStep={setStep} />,
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header
        title="Dados básicos"
        backButtonAction={
          step > 0 ? () => setStep((oldStep) => oldStep - 1) : undefined
        }
      />

      <Stepper actualStep={step} numberOfSteps={3} />

      <div className="px-[24px]">
        {textRegister[step as keyof typeof textRegister]}

        {formFieldsRegister[step as keyof typeof formFieldsRegister]}
      </div>
    </div>
  );
}
