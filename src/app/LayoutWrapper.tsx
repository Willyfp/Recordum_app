"use client";

import { store } from "@/store/store";
import { Provider } from "react-redux";
import ErrorComponent from "./components/ErrorComponent";
import SuccessBottomSheet from "./components/SuccessBottomSheet";
import UserController from "./components/UserController";
import { ReactNode } from "react";
import GymBottomSheet from "@/components/GymBottomSheet";

if (typeof window !== "undefined") {
  localStorage.theme = "light";
}

const LayoutWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Provider store={store}>
        {children}
        <UserController />
        <ErrorComponent />
        <SuccessBottomSheet />

        <GymBottomSheet />
      </Provider>
    </>
  );
};

export default LayoutWrapper;
