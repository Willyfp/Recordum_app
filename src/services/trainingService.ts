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
