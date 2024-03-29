import DefaultContainer from "@/components/DefaultContainer";
import UserInfo from "../inicio/components/UserInfo";
import { Cards } from "./components/Cards";

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

        <Cards />
      </div>
    </DefaultContainer>
  );
};

export default Historico;
