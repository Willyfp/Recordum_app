import DefaultContainer from "@/components/DefaultContainer";
import UserInfo from "../inicio/components/UserInfo";
import Card from "@/components/Card";
import { MdBarChart } from "react-icons/md";

const Historico = () => {
  return (
    <DefaultContainer>
      <UserInfo />

      <div className="flex w-full p-[1.5rem] flex-col gap-[1.5rem]">
        <div className="flex flex-col gap-[0.25rem]">
          <p className="text-black font-semibold text-description">
            Meu perfil
          </p>
          <p className="text-black font-description text-button_primary">
            Espaço destinado ao monitoramento do progresso.
          </p>
        </div>

        <div className="flex  gap-[0.5rem]">
          <Card
            icon={<MdBarChart className="text-black h-[1.25rem] w-[1.25rem]" />}
            title="Pesos e medidas"
          />

          <Card
            icon={<MdBarChart className="text-black h-[1.25rem] w-[1.25rem]" />}
            title="Desempenho geral"
          />
        </div>
      </div>
    </DefaultContainer>
  );
};

export default Historico;
