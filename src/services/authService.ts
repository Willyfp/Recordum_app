"use client";
import { store } from "@/store/store";
import api from "./api";
import { setApiError } from "@/store/slices/globalSlice";

export const loginRequest = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  try {
    const { data } = await api.post("/login/auth", { username, password });

    window.location.href = "/inicio";

    return data;
  } catch (error) {
    store.dispatch(setApiError?.(error.response.data.userMessage));
    throw error;
  }
};
