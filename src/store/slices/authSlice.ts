import { createSlice } from "@reduxjs/toolkit";

import { AppStore } from "../store";
import { User } from "@/types";

export interface AuthState {
  user?: User;
  isProfessional?: boolean;
}

const initialState: AuthState = {};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    toggleIsProfessional: (state) => {
      state.isProfessional = !state.isProfessional;
    },
  },
});

export const { setUser, toggleIsProfessional } = authSlice.actions;
export const selectUser = (state: AppStore) => state.auth.user as User;
export const selectUserType = (state: AppStore) =>
  state.auth.isProfessional as boolean;
export default authSlice.reducer;
