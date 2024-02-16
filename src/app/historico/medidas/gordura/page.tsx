import DefaultContainer from "@/components/DefaultContainer";
import Header from "@/components/Header";
import Form from "./components/Form";

const Gordura = () => {
  return (
    <DefaultContainer>
      <Header title={"Gordura"} />

      <div className="flex flex-col gap-[1.5rem] p-6 flex-1">
        <p className="text-black font-description text-button_primary">
          Preencha com os dados corporais, das dobras cutâneas para um
          monitoramento mais assertivo no seu processo.
        </p>

        <Form />
      </div>
    </DefaultContainer>
  );
};

export default Gordura;
