import { setGymList } from "@/store/slices/gymSlice";
import { store } from "@/store/store";
import { User } from "@/types";
import { removeEmpty } from "@/utils";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { Cookies } from "next-client-cookies";
import api from "./api";
import { getUserRequest } from "./authService";
dayjs.extend(customParseFormat);

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
    delete user.dataAlteracao;
    delete user.dataCadastro;
    delete user.usuarioTipo;

    const response = await api.put(
      `/usuarios/${user.id}`,
      removeEmpty({
        ...user,
        id: null,
        urlFoto: null,
        dataNascimento: user?.dataNascimento
          ? dayjs(user.dataNascimento, "DD/MM/YYYY").toISOString()
          : null,
      })
    );

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

export const getGymList = async ({
  id,
  cookies,
}: {
  id: number;
  cookies: Cookies;
}) => {
  try {
    const response = await api
      .get(`/academias/usuario/${id}`)
      .catch((error) => {
        throw error;
      });

    if (!response) throw "erro";

    if (response.data.length === 0) cookies.set("GYM_ID", "NO_GYM");

    if (response.data.length === 1) {
      cookies.set("GYM_ID", response?.data[0].id);
    } else if (response.data.length > 1) {
      store.dispatch(setGymList(response?.data));
    }

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

export const removeVinculed = async ({
  id,
  alunoProfessorId,
}: {
  id: number;
  alunoProfessorId: number;
}) => {
  try {
    const response = await api
      .post(`/usuarios/desvincular/${id}?alunoProfessorId=${alunoProfessorId}`)
      .catch((error) => {
        throw error;
      });

    if (!response) throw "erro";

    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const getWeightGoal = async () => {
  try {
    const response = await api
      .get(`/metasPeso`, { params: { sort: "id" } })
      .catch((error) => {
        throw error;
      });

    if (!response) throw "erro";

    return response?.data._embedded.pesoLogModelList[0];
  } catch (error) {
    throw error;
  }
};

export const getWeightGoalList = async () => {
  try {
    const response = await api
      .get(`/metasPeso`, { params: { sort: "id" } })
      .catch((error) => {
        throw error;
      });

    if (!response) throw "erro";

    return response?.data._embedded.pesoLogModelList;
  } catch (error) {
    throw error;
  }
};

export const getUserMeasures = async () => {
  try {
    const response = await api
      .get(`/usuarioMedidas`, { params: { sort: "id,desc" } })
      .catch((error) => {
        throw error;
      });

    if (!response) throw "erro";

    return response?.data._embedded.usuarioMedidaModelList[0];
  } catch (error) {
    throw error;
  }
};

export const editWeightGoal = async ({
  idUsuario,
  pesoMeta,
  pesoAtual,
  data,
}: {
  idUsuario: number;
  pesoMeta: number;
  pesoAtual: number;
  data: string;
}) => {
  try {
    const response = await api
      .post(`/metasPeso`, {
        pesoMeta,
        pesoAtual,
        data,
        usuario: {
          id: idUsuario,
        },
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

export const editMeasures = async ({
  idUsuario,
  data,
}: {
  idUsuario: number;
  data: any;
}) => {
  try {
    const response = await api
      .post(`/usuarioMedidas`, {
        ...data,
        usuario: {
          id: idUsuario,
        },
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

export const linkProfessional = async ({
  idUsuarioLogado,
  codigoVinculo,
  usuarioSolicitanteTipo,
}: {
  idUsuarioLogado: number;
  codigoVinculo: string;
  usuarioSolicitanteTipo: string;
}) => {
  try {
    const response = await api
      .post(`/usuarios/vincular`, {
        codigoVinculo,
        usuarioSolicitanteTipo,
        idUsuarioLogado,
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

export const listLinkedProfessionals = async () => {
  try {
    const response = await api.get(`/usuarios/buscarVinculo`).catch((error) => {
      throw error;
    });

    if (!response) throw "erro";

    return response?.data?._embedded?.alunoProfessorModelList;
  } catch (error) {
    throw error;
  }
};
