import { createSlice } from "@reduxjs/toolkit";

import { AppStore } from "../store";

export interface RegisterState {
  basicInfo?: {
    nome: string;
    email: string;
    senha: string;
    usuarioTipo: string;
    sexo: "MASCULINO" | "FEMININO" | "OUTRO";
    idade: number;
    altura: number;
  };
  weightGoal?: {
    pesoAtual: number;
    pesoMeta: number;
  };
  measures?: {
    torax: number;
    abdomen: number;
    bicepsE: number;
    bicepsD: number;
    antebracoE: number;
    antebracoD: number;
    quadril: number;
    coxaE: number;
    coxaD: number;
    panturrilhaE: number;
    panturrilhaD: number;

    subescapular: number;
    bicepsBI: number;
    tricepsTR: number;
    axilarMedia: number;
    toraxica: number;
    suprailiaca: number;
    supraespinal: number;
    coxa: number;
    panturrilhaMedial: number;
    metaGordura: number;
  };
}

const initialState: RegisterState = {};

export const registerSlice = createSlice({
  name: "register",
  initialState: initialState,
  reducers: {
    setBasicInfo: (state, action) => {
      state.basicInfo = action.payload;
    },
    setWeightGoal: (state, action) => {
      state.weightGoal = action.payload;
    },
    setMeasures: (state, action) => {
      state.measures = action.payload;
    },
  },
});

export const { setBasicInfo, setWeightGoal, setMeasures } =
  registerSlice.actions;

export const selectBasicInfo = (state: AppStore) => state.register.basicInfo;
export const selectMeasures = (state: AppStore) => state.register.measures;
export const selectWeightGoal = (state: AppStore) => state.register.weightGoal;

export default registerSlice.reducer;
