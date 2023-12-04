import { createSlice } from "@reduxjs/toolkit";

import { AppStore } from "../store";

export interface GlobalState {
  apiError?: string;
  successBottomSheet?: {
    title?: string;
    description?: string;
    buttonText?: string;
    buttonAction?: () => void;
    closeAction?: () => void;
    open: boolean;
  };
}

const initialState: GlobalState = {
  successBottomSheet: {
    open: false,
  },
};

export const globalSlice = createSlice({
  name: "global",
  initialState: initialState,
  reducers: {
    setApiError: (state, action) => {
      state.apiError = action.payload;
    },
    setSuccessBottomSheet: (state, action) => {
      state.successBottomSheet = action.payload;
    },
  },
});

export const { setApiError, setSuccessBottomSheet } = globalSlice.actions;
export const selectApiError = (state: AppStore) =>
  state.global.apiError as string;
export const selectSuccessBottomSheet = (state: AppStore) =>
  state.global.successBottomSheet as GlobalState["successBottomSheet"];
export default globalSlice.reducer;
