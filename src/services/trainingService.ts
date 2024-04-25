"use client";
import { Exercise, MuscleGroup, Training, User } from "@/types";
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

export const getMuscleGroupById = async (id: number): Promise<MuscleGroup> => {
  try {
    const response = await api.get(`/gruposMusculares/${id}`);

    if (!response) throw "erro";

    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const connectToEquipment = async (equipmentId: number) => {
  try {
    const response = await api.post(`/equipamentos/usar/${equipmentId}`);

    if (!response) throw "erro";

    return response?.data;
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
  id?: number | string;
  descricao: string;
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
    const response = !training.id
      ? await api.post("/treinos", training)
      : await api.put(`/treinos/${training.id}`, {
          ...training,
          id: undefined,
        });

    if (!response) throw "erro";

    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const getTrainingById = async (id: number) => {
  try {
    const response = await api.get(`/treinos/${id}`);

    if (!response) throw "erro";

    return response?.data as Training;
  } catch (error) {
    throw error;
  }
};

export const getTrainingsByUser = async (userId: number) => {
  try {
    const response = await api.get(`/treinos/usuario/${userId}`);

    if (!response) throw "erro";

    return response?.data?._embedded?.treinoModelList as Training[];
  } catch (error) {
    throw error;
  }
};

export const getExerciseById = async (id: number) => {
  try {
    const response = await api.get(`/exercicios/${id}`);

    if (!response) throw "erro";

    return response?.data as Exercise;
  } catch (error) {
    throw error;
  }
};

export const getEquipmentsByGym = async (gymId: number) => {
  try {
    const response = await api.get(`/equipamentos/academia/${gymId}`, {
      params: {
        size: 999,
      },
    });

    if (!response) throw "erro";

    return response?.data?._embedded?.equipamentoModelList;
  } catch (error) {
    throw error;
  }
};

export const createTrainingLog = async (data) => {
  try {
    if (data.treino?.id) {
      const response = await api.post("/treinoLogs", data);
      if (!response) throw "erro";

      return response?.data;
    } else {
      const response = await api.post("/exercicioLivreLogs", {
        ...data,
        exercicio: { id: data.exercicioTreino.id },
        exercicioTreino: undefined,
      });
      if (!response) throw "erro";

      return response?.data;
    }
  } catch (error) {
    throw error;
  }
};
