"use client";
import Header from "@/components/Header";
import Stepper from "@/components/Stepper";
import { useState } from "react";
import FormFields from "./components/FormFields";

export default function Cadastro() {
  const [step, setStep] = useState(0);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header
        title="Dados básicos"
        backButtonAction={
          step > 0 ? () => setStep((oldStep) => oldStep - 1) : undefined
        }
      />

      <Stepper actualStep={step} numberOfSteps={3} />

      <div className="px-[24px] gap-[1rem]">
        <p className="textarea-md ">
          Dados básicos para realizar o acompanhamento de desempenho.
        </p>

        {step === 0 && <FormFields />}
      </div>
    </div>
  );
}
