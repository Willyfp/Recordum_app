import DefaultContainer from "@/components/DefaultContainer";
import Header from "@/components/Header";
import { Form } from "./components/Form";

const Peso = () => {
  return (
    <DefaultContainer>
      <Header title={"Peso"} />

      <div className="flex flex-col gap-[1.5rem] p-6 flex-1">
        <p className="text-black font-description text-button_primary">
          Atualização dos dados, lembrando que é possível atualizar apenas 1 vez
          ao mês.
        </p>

        <Form />
      </div>
    </DefaultContainer>
  );
};

export default Peso;
