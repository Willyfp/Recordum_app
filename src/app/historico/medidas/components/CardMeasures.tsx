import ButtonComponent from "@/components/Button";
import { getUserMeasures } from "@/services/userService";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const CardMeasures = () => {
  const route = useRouter();

  const [measuresValues, setMeasuresValues] = useState();

  const measures = [
    { label: "Tórax/Peito", value: "torax" },
    { label: "Abdômen", value: "abdomen" },
    { label: "Bíceps (E)", value: "bicepsE" },
    { label: "Bíceps (D)", value: "bicepsD" },
    { label: "Antebraço (E)", value: "antebracoE" },
    { label: "Antebraço (D)", value: "antebracoD" },
    { label: "Quadril", value: "quadril" },
    { label: "Coxa (E)", value: "coxaE" },
    { label: "Coxa (D)", value: "coxaD" },
    { label: "Panturrilha (E)", value: "panturrilhaE" },
    { label: "Panturrilha (D)", value: "panturrilhaD" },
  ];

  useEffect(() => {
    getUserMeasures().then((response) => {
      setMeasuresValues(response);
    });
  }, []);

  return (
    <div className="flex flex-col w-full rounded-[1.25rem] shadow-card_goal overflow-hidden p-6 gap-4">
      {measures.map((measure, index) => (
        <div
          className="flex flex-row w-full items-center justify-between"
          key={measure.value}
        >
          <span className="text-black text-description">{measure.label}</span>

          <span className="text-black font-description text-button_primary">
            {measuresValues?.[measure.value] ?? "--"} Cm
          </span>
        </div>
      ))}

      <div className="w-full pt-4">
        <ButtonComponent
          // loading={loading}
          className="w-full btn-primary"
          // onClick={handleSubmit(onSubmit)}
          onClick={() => route.push("/historico/medidas/editar")}
        >
          Atualizar dados
        </ButtonComponent>
      </div>
    </div>
  );
};
