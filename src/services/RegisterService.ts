"use client";
import api from "./api";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { Measures, User } from "@/types";
import dayjs from "dayjs";
dayjs.extend(customParseFormat);

export const registerRequest = async ({ user }: { user: User }) => {
  try {
    const response = await api.post("/usuarios/novo", {
      ...user,
      dataNascimento: dayjs(user.dataNascimento, "DD/MM/YYYY").toISOString(),
    });

    if (!response) throw "erro";

    return response?.data;
  } catch (error) {
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
    const response = await api.post("/metasPeso", {
      pesoAtual,
      pesoMeta,
      usuario: { id: idUsuario },
    });

    if (!response) throw "erro";

    return response?.data;
  } catch (error) {
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
    const response = await api.post("/usuarioMedidas", {
      ...Object.fromEntries(
        Object.entries(measures).filter(([_, v]) => v != "")
      ),
      usuario: { id: idUsuario },
    });

    if (!response) throw "erro";

    return response?.data;
  } catch (error) {
    throw error;
  }
};
