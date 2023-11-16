import DefaultContainer from "@/components/DefaultContainer";
import Header from "@/components/Header";
import PersonalData from "./components/PersonalData";
import ButtonChangePassword from "./components/ButtonChangePassword";
import ComplementaryData from "./components/ComplementaryData";
import ButtonChangeData from "./components/ButtonChangeData";

const Dados = () => {
  return (
    <DefaultContainer>
      <Header title="Conta" />

      <div className="px-[1.5rem] pb-[0.5rem] pt-[1.5rem] flex flex-col gap-[0.25rem]">
        <p className="text-description font-semibold text-black">
          Dados Pessoais
        </p>

        <p className="text-button_primary font-description">
          Gerencie seus dados
        </p>
      </div>

      <PersonalData />

      <ButtonChangePassword />

      <ComplementaryData />

      <ButtonChangeData />  
    </DefaultContainer>
  );
};

export default Dados;
