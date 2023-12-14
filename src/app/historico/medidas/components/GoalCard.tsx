import ButtonComponent from "@/components/Button";
import { BiSolidInfoCircle } from "react-icons/bi";

export const GoalCard = () => {
  return (
    <div className="flex flex-col w-full rounded-[1.25rem] shadow-card_goal overflow-hidden">
      <div className="flex flex-col w-full pb-4 px-6 pt-6">
        <div className="flex flex-row w-full items-center justify-between">
          <span className="text-black font-semibold text-description">
            Meta
          </span>
          <BiSolidInfoCircle className="text-icon_info text-title" />
        </div>

        <span className="text-[#516E25] text-[2.5rem] font-title_bottom_sheet">
          75,5 Kg
        </span>

        <span className="text-black text-button_ghost">Sua meta de peso</span>
      </div>

      <div className="divider m-0 mb-6" />

      <div className="flex flex-col gap-5 px-6 pb-8">
        <span className="text-black font-title_bottom_sheet text-button_primary ">
          Evolução (Peso)
        </span>

        <img src="/images/default_weight.png" className="w-full h-[14rem]" />
      </div>

      <div className="w-full px-6 pb-6">
        <ButtonComponent
          // loading={loading}
          className="w-full btn-primary"
          // onClick={handleSubmit(onSubmit)}
        >
          Atualizar dados
        </ButtonComponent>
      </div>
    </div>
  );
};
