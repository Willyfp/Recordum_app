import ButtonComponent from "@/components/Button";
import { useRouter } from "next/navigation";
import { BiSolidInfoCircle } from "react-icons/bi";

import Chart from "chart.js/auto";
import { useEffect, useState } from "react";
import { getGraphByExercise } from "@/services/trainingService";
import { useCookies } from "next-client-cookies";
import dayjs from "dayjs";

export const CardFat = () => {
  const route = useRouter();

  const [fatGraph, setFatGraph] = useState<any>(null);

  const cookies = useCookies();

  const router = useRouter();

  const userId = cookies.get("user_id");

  useEffect(() => {
    getGraphByExercise({
      idUser: userId,
      path: "evolucaoPeso",
      dataIni: dayjs().subtract(3, "month").toISOString(),
      dataEnd: dayjs().toISOString(),
    }).then((res) => {
      setFatGraph(res);
    });
  }, []);

  useEffect(() => {
    const canvas = document.getElementById("lineChartFat");
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
        labels: fatGraph?.map((item) =>
          dayjs(item.dataPercentual).format("DD/MM")
        ),
        datasets: [
          {
            label: "Média de carga",
            data: fatGraph?.map((item) => item.percentual),
          },
        ],
      },
      options: {
        aspectRatio: 3,
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
  }, [fatGraph]);

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
          18%
        </span>

        <span className="text-black text-button_ghost">Sua meta de %</span>
      </div>

      <div className="divider m-0 mb-6" />

      <div className="flex flex-col gap-5 px-6 pb-8">
        <span className="text-black font-title_bottom_sheet text-button_primary ">
          Evolução (% de Gordura)
        </span>

        <div className="flex flex-col p-6 gap-8">
          <canvas id="lineChartFat" width="100%" height="100px"></canvas>
        </div>
      </div>

      <div className="w-full px-6 pb-6">
        <ButtonComponent
          // loading={loading}
          className="w-full btn-primary"
          onClick={() => {
            route.push("/historico/medidas/gordura");
          }}
        >
          Atualizar dados
        </ButtonComponent>
      </div>
    </div>
  );
};
