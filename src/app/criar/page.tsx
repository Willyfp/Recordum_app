import DefaultContainer from "@/components/DefaultContainer";
import UserInfo from "../inicio/components/UserInfo";
import Card from "@/components/Card";
import { MdBarChart } from "react-icons/md";
import { Clicable } from "./components/Clicable";

const Criar = () => {
  return (
    <DefaultContainer>
      <UserInfo />

      <div className="flex w-full p-[1.5rem] flex-col gap-[1.5rem]">
        <div className="flex flex-col gap-[0.25rem]">
          <p className="text-black font-semibold text-description">
            Criar treinos
          </p>
          <p className="text-black font-description text-button_primary">
            Faça o seu treino da sua maneira
          </p>
        </div>

        <Clicable />
      </div>
    </DefaultContainer>
  );
};

export default Criar;
