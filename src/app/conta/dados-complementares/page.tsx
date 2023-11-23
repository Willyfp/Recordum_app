import DefaultContainer from "@/components/DefaultContainer";
import Header from "@/components/Header";
import FormFields from "./components/FormFields";

const Complementares = () => {
  return (
    <div className="flex flex-col flex-1 bg-primary_bg h-full w-full">
      <Header title="Dados complementares" />

      <div className="flex flex-col gap-[0.5rem] px-[1.5rem] py-[1.5rem]">
        <div className="flex flex-col gap-[0.25rem]">
          <p className="text-description font-semibold text-black">
            Redefinição de dados
          </p>
          <p className="text-button_primary font-description">
            Atualize seus dados
          </p>
        </div>

        <FormFields />
      </div>
    </div>
  );
};

export default Complementares;
