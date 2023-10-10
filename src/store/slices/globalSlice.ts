import { createSlice } from "@reduxjs/toolkit";

import { AppStore } from "../store";

export interface GlobalState {
  apiError?: string;
}

const initialState: GlobalState = {};

export const globalSlice = createSlice({
  name: "global",
  initialState: initialState,
  reducers: {
    setApiError: (state, action) => {
      state.apiError = action.payload;
    },
  },
});

export const { setApiError } = globalSlice.actions;
export const selectApiError = (state: AppStore) => state.global.apiError;
export default globalSlice.reducer;
