"use client";
import { store } from "@/store/store";
import api from "./api";
import { setApiError } from "@/store/slices/globalSlice";
import { Measures, User } from "@/types";

export const registerRequest = async ({ user }: { user: User }) => {
  try {
    const { data } = await api.post("/usuarios/novo", user);

    return data;
  } catch (error) {
    store.dispatch(setApiError?.(error.response.data.userMessage));

    throw error;
  }
};

export const registerWeightGoalRequest = async ({
  pesoAtual,
  pesoMeta,
}: {
  pesoAtual: number;
  pesoMeta: number;
}) => {
  try {
    const { data } = await api.post("/metasPeso", { pesoAtual, pesoMeta });

    return data;
  } catch (error) {
    store.dispatch(setApiError?.(error.response.data.userMessage));
    throw error;
  }
};

export const registerMeasuresRequest = async ({
  measures,
}: {
  measures: Measures;
}) => {
  try {
    const { data } = await api.post("/usuarioMedidas", measures);

    return data;
  } catch (error) {
    store.dispatch(setApiError?.(error.response.data.userMessage));
    throw error;
  }
};
