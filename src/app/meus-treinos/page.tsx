import DefaultContainer from "@/components/DefaultContainer";
import Header from "@/components/Header";
import ListMuscleGroup from "@/components/ListMuscleGroup";
import { TrainingList } from "./components/TrainingList";

const MeusTreinos = () => {
  return (
    <DefaultContainer>
      <Header title="Meus treinos" />
      <div className="flex flex-col flex-1 p-[1.5rem] gap-4">
        <div className="flex flex-col gap-[0.25rem]">
          <p className="text-black font-semibold text-description">Treinos</p>
          <p className="text-black font-description text-button_primary">
            Aqui você encontra todos os treinos salvos
          </p>
        </div>

        <TrainingList />
      </div>
    </DefaultContainer>
  );
};

export default MeusTreinos;
