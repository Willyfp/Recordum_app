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
  idUsuario,
}: {
  pesoAtual: number;
  pesoMeta: number;
  idUsuario: number;
}) => {
  try {
    const { data } = await api.post("/metasPeso", {
      pesoAtual,
      pesoMeta,
      usuario: { id: idUsuario },
    });

    return data;
  } catch (error) {
    store.dispatch(setApiError?.(error.response.data.userMessage));
    throw error;
  }
};

export const registerMeasuresRequest = async ({
  measures,
  idUsuario,
}: {
  measures: Measures;
  idUsuario: number;
}) => {
  try {
    const { data } = await api.post("/usuarioMedidas", {
      ...Object.fromEntries(
        Object.entries(measures).filter(([_, v]) => v != "")
      ),
      usuario: { id: idUsuario },
    });

    return data;
  } catch (error) {
    store.dispatch(setApiError?.(error.response.data.userMessage));
    throw error;
  }
};
