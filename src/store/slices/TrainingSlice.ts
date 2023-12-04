import { createSlice } from "@reduxjs/toolkit";

import { AppStore } from "../store";
import { Measures, User, WeightGoal } from "@/types";

export interface TrainingState {
  trainingInfo?: {
    descricao: string;
    periodicidade: number;
  };
  musclesSelected: number[];
}

const initialState: TrainingState = {
  musclesSelected: [],
};

export const trainingSlice = createSlice({
  name: "training",
  initialState: initialState,
  reducers: {
    setTrainingInfo: (state, action) => {
      state.trainingInfo = action.payload;
    },
    toggleMuscle: (state, action) => {
      if (state.musclesSelected?.includes(action.payload)) {
        state.musclesSelected = state.musclesSelected?.filter(
          (muscle) => muscle !== action.payload
        );
      } else {
        state.musclesSelected.push(action.payload);
      }
    },
  },
});

export const { setTrainingInfo, toggleMuscle } = trainingSlice.actions;

export const selectTrainingInfo = (state: AppStore) =>
  state.training.trainingInfo as Pick<TrainingState, "trainingInfo">;

export const selectMusclesSelected = (state: AppStore) =>
  state.training.musclesSelected as number[];

export default trainingSlice.reducer;
