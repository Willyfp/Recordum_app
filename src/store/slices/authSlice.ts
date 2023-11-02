import { createSlice } from "@reduxjs/toolkit";

import { AppStore } from "../store";
import { User } from "@/types";

export interface AuthState {
  user?: User;
}

const initialState: AuthState = {};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;
export const selectUser = (state: AppStore) => state.auth.user;
export default authSlice.reducer;
