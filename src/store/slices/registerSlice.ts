import { createSlice } from "@reduxjs/toolkit";

import { AppStore } from "../store";

export interface RegisterState {
  basicInfo?: {
    nome: string;
    email: string;
    senha: string;
    usuarioTipo: string;
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
  },
});

export const { setBasicInfo } = registerSlice.actions;

export const selectBasicInfo = (state: AppStore) => state.register.basicInfo;

export default registerSlice.reducer;
