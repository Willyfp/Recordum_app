import { createSlice } from "@reduxjs/toolkit";

import { AppStore } from "../store";
import { Exercise, MuscleGroup } from "@/types";

export interface TrainingState {
  trainingInfo?: {
    descricao: string;
    periodicidade: number;
  };
  exercisesByMuscle?: {
    id: number;
    exercises: Exercise[];
  }[];
  musclesSelected: MuscleGroup[];
}

const initialState: TrainingState = {
  musclesSelected: [],
  exercisesByMuscle: [],
};

export const trainingSlice = createSlice({
  name: "training",
  initialState: initialState,
  reducers: {
    setExercisesByMuscle: (state, action) => {
      state.exercisesByMuscle = action.payload;
    },
    setTrainingInfo: (state, action) => {
      state.trainingInfo = action.payload;
    },
    toggleMuscle: (state, action) => {
      if (
        state.musclesSelected?.find((muscle) => muscle.id === action.payload.id)
      ) {
        state.musclesSelected = state.musclesSelected?.filter(
          (muscle) => muscle.id !== action.payload.id
        );
      } else {
        state.musclesSelected.push(action.payload);
      }
    },
  },
});

export const { setTrainingInfo, toggleMuscle, setExercisesByMuscle } =
  trainingSlice.actions;

export const selectTrainingInfo = (state: AppStore) =>
  state.training.trainingInfo as Pick<TrainingState, "trainingInfo">;

export const selectMusclesSelected = (state: AppStore) =>
  state.training.musclesSelected as MuscleGroup[];

export const selectExercisesByMuscle = (state: AppStore) =>
  state.training.exercisesByMuscle as {
    id: number;
    exercises: Exercise[];
  }[];

export default trainingSlice.reducer;
