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
    const response = await api.post("/login/auth", { username, password });

    cookies.set("token", response?.data.token);

    cookies.set("user_id", response?.data.id);

    store.dispatch(setUser?.(response?.data));

    if (!response) throw "erro";

    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const recoverPasswordRequest = async ({ email }: { email: string }) => {
  try {
    const response = await api.post(`/usuarios/forgot?email=${email}`);

    if (!response) throw "erro";

    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const getUserRequest = async ({ id }: { id: string }) => {
  try {
    const response: { data: User } = await api.get(`/usuarios/${id}`);

    store.dispatch(setUser?.(response?.data));

    if (!response) throw "erro";

    return response?.data;
  } catch (error) {
    throw error;
  }
};
