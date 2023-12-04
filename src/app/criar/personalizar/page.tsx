import DefaultContainer from "@/components/DefaultContainer";
import Header from "@/components/Header";
import { FormFields } from "./components/FormFields";

const Criar = () => {
  return (
    <DefaultContainer>
      <Header title="Montar treino" />

      <div className="flex w-full p-[1.5rem] flex-col gap-[1rem] flex-1">
        <div className="flex flex-col gap-[0.25rem]">
          <p className="text-black font-semibold text-description">Treino</p>
          <p className="text-black font-description text-button_primary">
            Crie a melhor forma de treinar e de acompanhar o seu progresso.
          </p>
        </div>

        <FormFields />
      </div>
    </DefaultContainer>
  );
};

export default Criar;
