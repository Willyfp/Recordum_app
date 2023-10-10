import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";

import globalSlice from "./slices/globalSlice";

export const store = configureStore({
  reducer: {
    global: globalSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppStore = ReturnType<typeof store>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;
