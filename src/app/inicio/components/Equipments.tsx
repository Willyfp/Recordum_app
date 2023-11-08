import Card from "@/components/Card";
import { MdBarChart } from "react-icons/md";

const Equipments = () => {
  return (
    <div className="flex flex-1 flex-col p-[1.5rem] gap-[1rem] bg-primary_bg">
      <div className="flex flex-col gap-[0.25rem]">
        <p className="font-semibold text-black text-description">Aparelhos</p>
        <p className="font-description text-black text-button_primary">
          Para praticar sem um treino definido
        </p>
      </div>

      <div className="flex  gap-[0.5rem]">
        <Card
          icon={<MdBarChart className="text-black h-[1.25rem] w-[1.25rem]" />}
          title="Aparelhos com conexão"
        />

        <Card
          icon={<MdBarChart className="text-black h-[1.25rem] w-[1.25rem]" />}
          title="Aparelhos sem conexão"
        />
      </div>
    </div>
  );
};

export default Equipments;
