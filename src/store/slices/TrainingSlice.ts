import { createSlice } from "@reduxjs/toolkit";

import { AppStore } from "../store";
import { Exercise, MuscleGroup } from "@/types";

export interface TrainingState {
  formState?: any;
  trainingInfo?: {
    usuario: {
      id: number;
    };
    descricao: string;
    gruposMusculares: { id: number }[];
    exercicios: {
      exercicio: { id: number };
      series: number;
      seriesTreino: {
        repeticao: number;
        carga: number;
      }[];
    };
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
        state.musclesSelected?.find(
          (muscle) => muscle.id === action.payload.id && !action.payload.isAdd
        )
      ) {
        state.musclesSelected = state.musclesSelected?.filter(
          (muscle) => muscle.id !== action.payload.id
        );
      } else {
        delete action.payload.isAdd;
        if (
          !state.musclesSelected?.find(
            (muscle) => muscle.id === action.payload.id
          )
        )
          state.musclesSelected.push(action.payload);
      }
    },
    setFormState: (state, action) => {
      state.formState = action.payload;
    },
  },
});

export const {
  setTrainingInfo,
  toggleMuscle,
  setExercisesByMuscle,
  setFormState,
} = trainingSlice.actions;

export const selectTrainingInfo = (state: AppStore) =>
  state.training.trainingInfo as {
    usuario: {
      id: number;
    };
    descricao: string;
    gruposMusculares: { id: number }[];
    exercicios: {
      exercicio: { id: number };
      series: number;
      seriesTreino: {
        repeticao: number;
        carga: number;
      }[];
    };
  };

export const selectMusclesSelected = (state: AppStore) =>
  state.training.musclesSelected as MuscleGroup[];

export const selectFormState = (state: AppStore) =>
  state.training.formState as any;

export const selectExercisesByMuscle = (state: AppStore) =>
  state.training.exercisesByMuscle as {
    id: number;
    exercises: Exercise[];
  }[];

export default trainingSlice.reducer;
