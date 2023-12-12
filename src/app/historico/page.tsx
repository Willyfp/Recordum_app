import DefaultContainer from "@/components/DefaultContainer";
import UserInfo from "../inicio/components/UserInfo";
import Card from "@/components/Card";
import { GrDocumentPerformance } from "react-icons/gr";
import { MdOutlineMonitorWeight } from "react-icons/md";
import { useRouter } from "next/navigation";
import { Cards } from "./components/cards";

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
