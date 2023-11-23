import DefaultContainer from "@/components/DefaultContainer";
import Header from "@/components/Header";
import FormFields from "./components/FormFields";

const Dados = () => {
  return (
    <DefaultContainer>
      <Header title="Dados pessoais" />

      <div className="px-[1.5rem]  py-[1.5rem] flex flex-col gap-[1rem] flex-1">
        <p className="text-description font-semibold text-black mb-[0.5rem]">
          Redefinir senha
        </p>

        <FormFields />
      </div>
    </DefaultContainer>
  );
};

export default Dados;
