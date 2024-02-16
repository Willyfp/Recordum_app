import { createSlice } from "@reduxjs/toolkit";

import { AppStore } from "../store";
import { GymType } from "@/types";

export interface GymState {
  gymList?: GymType[];
}

const initialState: GymState = {};

export const gymSlice = createSlice({
  name: "gymSlice",
  initialState: initialState,
  reducers: {
    setGymList: (state, action) => {
      state.gymList = action.payload;
    },
  },
});

export const { setGymList } = gymSlice.actions;

export const selectGymList = (state: AppStore) =>
  state.gymSlice.gymList as GymState["gymList"];

export default gymSlice.reducer;
