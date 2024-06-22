import DefaultContainer from "@/components/DefaultContainer";
import Header from "@/components/Header";
import ListMuscleGroup from "@/components/ListMuscleGroup";
import { ExecutedList } from "./components/ExecutedList";

const Executados = () => {
  return (
    <DefaultContainer>
      <Header title="Exercícios executados" />
      <div className="flex flex-col flex-1 p-[1.5rem] gap-4">
        <div className="flex flex-col gap-[0.25rem]">
          <p className="text-black font-semibold text-description">
            Exercícios
          </p>
          <p className="text-black font-description text-button_primary">
            Aqui você encontra seu histórico de exercícios executados.
          </p>
        </div>

        <ExecutedList />
      </div>
    </DefaultContainer>
  );
};

export default Executados;
