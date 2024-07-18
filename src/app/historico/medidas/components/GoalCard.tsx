import ButtonComponent from "@/components/Button";
import { getWeightGoalList } from "@/services/userService";

import Chart from "chart.js/auto";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BiSolidInfoCircle } from "react-icons/bi";

export const GoalCard = () => {
  const route = useRouter();
  const [weightGoal, setWeightGoal] = useState<any>(null);

  useEffect(() => {
    getWeightGoalList().then((res) => {
      setWeightGoal(res);
    });
  }, []);

  useEffect(() => {
    const canvas = document.getElementById("lineChart");
    const ctx = canvas?.getContext("2d");

    // Check if a chart already exists
    let chart = Chart.getChart(ctx);

    // Destroy the existing chart if present
    if (chart) {
      chart.destroy();
    }

    new Chart(ctx, {
      type: "line",
      data: {
        labels: weightGoal?.map((item) => dayjs(item.data).format("DD/MM")),
        datasets: [
          {
            label: "Média de carga",
            data: weightGoal?.map((item) => item.pesoAtual),
          },
        ],
      },
      options: {
        aspectRatio: 1,
        animation: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: false,
          },
        },
      },
    });
  }, [weightGoal]);

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
          {weightGoal?.[0]?.pesoMeta ? weightGoal?.[0]?.pesoMeta + " Kg" : "--"}
        </span>

        <span className="text-black text-button_ghost">Sua meta de peso</span>
      </div>

      <div className="divider m-0 mb-6" />

      <div className="flex flex-col gap-5 px-6 pb-8">
        <span className="text-black font-title_bottom_sheet text-button_primary ">
          Evolução (Peso)
        </span>

        <div className="flex flex-col p-6 gap-8">
          <canvas id="lineChart" width="100%" height="100px"></canvas>
        </div>
      </div>

      <div className="w-full px-6 pb-6">
        <ButtonComponent
          // loading={loading}
          className="w-full btn-primary"
          onClick={() => route.push("/historico/medidas/peso")}
        >
          Atualizar dados
        </ButtonComponent>
      </div>
    </div>
  );
};
