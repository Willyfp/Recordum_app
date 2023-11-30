"use client";

import { store } from "@/store/store";
import { Provider } from "react-redux";
import ErrorComponent from "./components/ErrorComponent";
import SuccessBottomSheet from "./components/SuccessBottomSheet";
import UserController from "./components/UserController";

localStorage.theme = "light";

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <Provider store={store}>
        {children}
        <UserController />
        <ErrorComponent />
        <SuccessBottomSheet />
      </Provider>
    </>
  );
};

export default LayoutWrapper;
