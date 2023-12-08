"use client";
import { MuscleGroup } from "@/types";
import api from "./api";
import { store } from "@/store/store";

export const getMuscleGroups = async (): Promise<MuscleGroup[]> => {
  try {
    const response = await api.get(`/gruposMusculares`);

    if (!response) throw "erro";

    return response?.data?._embedded.grupoMuscularModelList;
  } catch (error) {
    throw error;
  }
};

export const getExercisesByMuscle = async (muscleId: number) => {
  try {
    const response = await api.get(`/exercicios/grupoMuscular/${muscleId}`);

    if (!response) throw "erro";

    return response?.data?._embedded?.exercicioModelList;
  } catch (error) {
    throw error;
  }
};

export const registerTraining = async (training: {
  descricao: "string";
  usuario: {
    id: number;
  };
  gruposMusculares: {
    id: number;
  }[];
  exercicios: {
    series: number;
    treino: {
      id: number;
    };
    exercicio: {
      id: number;
    };
    seriesTreino: [
      {
        repeticao: number;
        carga: number;
      }
    ];
  }[];
}) => {
  try {
    const response = await api.post("/treinos", training);

    if (!response) throw "erro";

    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const getTrainingById = async () => {
  try {
    const response = await api.get("/treinos/1");

    if (!response) throw "erro";

    return response?.data;
  } catch (error) {
    throw error;
  }
};
