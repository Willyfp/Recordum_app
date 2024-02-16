"use client";
import { setApiError } from "@/store/slices/globalSlice";
import { store } from "@/store/store";
import axios, { AxiosError } from "axios";
import { redirect } from "next/navigation";

const baseURL = process.env.NEXT_PUBLIC_API_URL,
  isServer = typeof window === "undefined";

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  if (isServer) {
    const { cookies } = await import("next/headers"),
      token = cookies().get("token")?.value;

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
  } else {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    if (error.message === "Request failed with status code 401") {
      if (isServer) {
        const { cookies } = await import("next/headers");
        cookies().delete("token");
        cookies().delete("user_id");

        cookies().delete("GYM_ID");

        redirect("/login");
      } else {
        const deleteCookie = function (name) {
          document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
        };

        deleteCookie("token");

        deleteCookie("user_id");

        deleteCookie("GYM_ID");

        window.location.href = "/login";
      }
    } else {
      store.dispatch(
        setApiError?.(
          error?.response?.data?.userMessage ||
            "Erro desconhecido. tente novamente mais tarde."
        )
      );
    }
  }
);

export default api;
