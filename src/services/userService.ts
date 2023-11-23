import { setApiError } from "@/store/slices/globalSlice";
import { store } from "@/store/store";
import api from "./api";
import { getUserRequest } from "./authService";
import { User } from "@/types";

export const changePhotoRequest = async ({
  file,
  id,
}: {
  file: { arquivo: string; descricao: string };
  id: number;
}) => {
  try {
    const formData = new FormData();

    formData.append("arquivo", file.arquivo);
    formData.append("descricao", file.descricao);

    const response = await api.put(`/usuarios/${id}/foto`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (!response) throw "erro";
    await getUserRequest({ id: String(id) });

    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const editUserRequest = async ({ user }: { user: User }) => {
  try {
    const response = await api.put(`/usuarios/${user.id}`, user);

    await getUserRequest({ id: String(user.id) });

    if (!response) throw "erro";

    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const changePasswordRequest = async ({
  id,
  senhaAtual,
  novaSenha,
}: {
  id: number;
  senhaAtual: string;
  novaSenha: string;
}) => {
  try {
    const response = await api
      .post(`/usuarios/${id}/senha`, {
        senhaAtual,
        novaSenha,
      })
      .catch((error) => {
        throw error;
      });

    if (!response) throw "erro";

    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const listVinculatedGyms = async ({ id }: { id: number }) => {
  try {
    const response = await api
      .get(`/academias/usuario/${id}`)
      .catch((error) => {
        throw error;
      });

    if (!response) throw "erro";

    return response?.data;
  } catch (error) {
    throw error;
  }
};
