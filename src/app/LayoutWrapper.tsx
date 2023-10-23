"use client";

import { store } from "@/store/store";
import { Provider } from "react-redux";
import ErrorComponent from "./components/ErrorComponent";
import SuccessBottomSheet from "./components/SuccessBottomSheet";

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <Provider store={store}>
        {children}
        <ErrorComponent />
        <SuccessBottomSheet />
      </Provider>
    </>
  );
};

export default LayoutWrapper;
