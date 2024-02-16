import DefaultContainer from "@/components/DefaultContainer";
import Header from "@/components/Header";
import { Form } from "./components/Form";

const Peso = () => {
  return (
    <DefaultContainer>
      <Header title={"Medidas"} />

      <div className="flex flex-col gap-[1.5rem] p-6 flex-1">
        <p className="text-black font-description text-button_primary">
          Preencha com seus dados corporais, os dados servem para um controle
          mais assertivo no seu processo.
        </p>

        <Form />
      </div>
    </DefaultContainer>
  );
};

export default Peso;
