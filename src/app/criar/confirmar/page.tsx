import Header from "@/components/Header";
import { Summary } from "./components/Summary";

const Confirmar = () => {
  return (
    <div className="flex flex-1 w-full h-full bg-primary_bg flex-col">
      <Header title="Resumo de treino" />
      <div className="flex w-full p-[1.5rem] flex-col gap-[1.5rem] h-full">
        <span className="text-button_primary font-description text-black">
          Aqui é possível confirmar todos os dados relativos ao treino montado.
        </span>

        <Summary />
      </div>
    </div>
  );
};

export default Confirmar;
