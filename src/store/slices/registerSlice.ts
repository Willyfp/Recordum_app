import { createSlice } from "@reduxjs/toolkit";

import { AppStore } from "../store";
import { Measures, User, WeightGoal } from "@/types";

export interface RegisterState {
  basicInfo?: User;
  weightGoal?: WeightGoal;
  measures?: Measures;
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
