"use client";
import { store } from "@/store/store";
import api from "./api";
import { setApiError } from "@/store/slices/globalSlice";
import { Cookies } from "next-client-cookies";
import { setUser } from "@/store/slices/authSlice";
import { User } from "@/types";

export const loginRequest = async ({
  username,
  password,
  cookies,
}: {
  username: string;
  password: string;
  cookies: Cookies;
}) => {
  try {
    const { data } = await api.post("/login/auth", { username, password });

    cookies.set("token", data.token);

    cookies.set("user_id", data.id);

    store.dispatch(setUser?.(data));

    return data;
  } catch (error) {
    store.dispatch(setApiError?.(error.response.data.userMessage));
    throw error;
  }
};

export const recoverPasswordRequest = async ({ email }: { email: string }) => {
  try {
    const { data } = await api.post(`/usuarios/forgot?email=${email}`);

    return data;
  } catch (error) {
    store.dispatch(setApiError?.(error.response.data.userMessage));
    throw error;
  }
};

export const getUserRequest = async ({ id }: { id: string }) => {
  try {
    const { data }: { data: User } = await api.get(`/usuarios/${id}`);

    store.dispatch(setUser?.(data));

    return data;
  } catch (error) {
    store.dispatch(setApiError?.(error.response.data.userMessage));
    throw error;
  }
};
