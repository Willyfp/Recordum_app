"use client";
import DefaultContainer from "@/components/DefaultContainer";
import Header from "@/components/Header";
import Select from "@/components/Select";
import {
  getExerciseById,
  getGraphByExercise,
} from "@/services/trainingService";
import { Exercise } from "@/types";

import React, { useEffect, useState } from "react";

import { useParams } from "next/navigation";
import { useCookies } from "next-client-cookies";
import Image from "next/image";
import { MdShare } from "react-icons/md";
import Chart from "chart.js/auto";
import dayjs, { Dayjs } from "dayjs";

const Grafico = () => {
  const [exercise, setExercise] = React.useState<Exercise>();

  const [type, setType] = React.useState<string>("mediaCarga");

  const [graphData, setGraphData] = useState();

  const [period, setPeriod] = useState<{ start: Dayjs; end: Dayjs }>({
    start: dayjs().subtract(3, "month"),
    end: dayjs(),
  });

  const Cookies = useCookies();

  const userId = Cookies.get("user_id");

  const params = useParams<{ id: string }>();

  useEffect(() => {
    if (params?.id) {
      getExerciseById(params.id).then((response) => {
        setExercise(response);
      });
    }
  }, [params?.id]);

  useEffect(() => {
    if (type) {
      getGraphByExercise({
        idExercise: params.id,
        path: type,
        idUser: userId,
        dataIni: period.start.toISOString(),
        dataEnd: period.end.toISOString(),
      }).then((res) => setGraphData(res));
    }
  }, [type, period]);

  useEffect(() => {
    const canvas = document.getElementById("lineChart");
    const ctx = canvas.getContext("2d");

    // Check if a chart already exists
    let chart = Chart.getChart(ctx);

    // Destroy the existing chart if present
    if (chart) {
      chart.destroy();
    }

    new Chart(ctx, {
      type: "line",
      data: {
        labels: graphData?.map((item) => dayjs(item.data).format("DD/MM/YYYY")),
        datasets: [
          {
            label: "Média de carga",
            data: graphData?.map((item) => item.media),
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
  }, [graphData]);

  return (
    <DefaultContainer>
      <Header title="Desempenho geral" />
      <div className="flex flex-col flex-1 p-[1.5rem] gap-4">
        <div className="flex flex-col gap-[0.25rem]">
          <p className="text-black font-semibold text-description">
            Progressão de carga
          </p>
          <p className="text-black font-description text-button_primary">
            Para visualizar qual melhor exercício, é possível filtrar por
            período ou dia especifico.
          </p>
        </div>

        <Select
          onChange={(e) => setType(e.target.value)}
          value={type}
          label="Selecione o gráfico desejado"
          options={[{ label: "Carga média", value: "mediaCarga" }]}
        />

        <div className="flex flex-col shadow-md rounded-md bg-white">
          <div className="flex flex-row items-center justify-between p-6 border-b border-opacity-50 border-b-disabled">
            <div className="flex flex-row items-center gap-2">
              <Image
                src={"/images/exercise_default.png"}
                width={50}
                height={50}
                alt="Exercício"
              />

              <div className="flex flex-col">
                <span className="text-[18px] text-black font-semibold">
                  {exercise?.grupoMuscular?.descricao}
                </span>
                <span className="text-[14px] text-black">
                  {exercise?.descricao}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-center h-6 w-6 rounded-full bg-[#C2C2C2]">
              <MdShare size={16} color="#F5EFF7" />
            </div>
          </div>

          <div className="flex flex-col p-6 gap-8">
            <canvas id="lineChart" width="100%" height="100px"></canvas>
          </div>
        </div>

        <p className="text-black font-semibold text-description">Período</p>

        <div className="flex flex-row items-center w-full gap-2">
          {/* <Datepicker
            classNames="relative"
            options={{
              language: "pt-br",
              weekDays: ["S", "T", "Q", "Q", "S", "S", "D"],
              inputPlaceholderProp: "Data início",
              clearBtn: false,
              autoHide: true,
              inputDateFormatProp: {
                day: "numeric",
                month: "numeric",
                year: "numeric",
              },
            }}
            show={showStart}
            setShow={setShowStart}
            // options={options}
            // onChange={handleChange}
            // show={show}
            // setShow={handleClose}
          /> */}

          <input
            type="date"
            className="input input-bordered p-3"
            onChange={(e) =>
              setPeriod({ ...period, start: dayjs(e.target.value) })
            }
            value={dayjs(period.start).format("YYYY-MM-DD")}
            placeholder="Search"
          />

          <span className="text-black text-button_ghost">Até</span>
          <input
            type="date"
            className="input input-bordered p-3"
            placeholder="Search"
            onChange={(e) =>
              setPeriod({ ...period, end: dayjs(e.target.value) })
            }
            value={dayjs(period.end).format("YYYY-MM-DD")}
          />

          {/* <Datepicker
            classNames="relative"
            options={{
              language: "pt-br",
              weekDays: ["S", "T", "Q", "Q", "S", "S", "D"],
              inputPlaceholderProp: "Data fim",
              clearBtn: false,
              autoHide: true,
              inputDateFormatProp: {
                day: "numeric",
                month: "numeric",
                year: "numeric",
              },
            }}
            show={showEnd}
            setShow={setShowEnd}
            // options={options}
            // onChange={handleChange}
            // show={show}
            // setShow={handleClose}
          /> */}
        </div>
      </div>
    </DefaultContainer>
  );
};

export default Grafico;
