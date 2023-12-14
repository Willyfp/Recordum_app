import ButtonComponent from "@/components/Button";

export const CardMeasures = () => {
  const measures = [
    "Tórax/Peito",
    "Abdômen",
    "Bíceps (E)",
    "Bíceps (D)",
    "Antebraço (E)",
    "Antebraço (D)",
    "Quadril",
    "Coxa (E)",
    "Coxa (D)",
    "Panturrilha (E)",
    "Panturrilha (D)",
  ];

  return (
    <div className="flex flex-col w-full rounded-[1.25rem] shadow-card_goal overflow-hidden p-6 gap-4">
      {measures.map((measure, index) => (
        <div
          className="flex flex-row w-full items-center justify-between"
          key={measure}
        >
          <span className="text-black text-description">{measure}</span>

          <span className="text-black font-description text-button_primary">
            -- Cm
          </span>
        </div>
      ))}

      <div className="w-full pt-4">
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
