"use client";

import { store } from "@/store/store";
import { Provider } from "react-redux";
import ErrorComponent from "./components/ErrorComponent";

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <Provider store={store}>
        {children}
        <ErrorComponent />
      </Provider>
    </>
  );
};

export default LayoutWrapper;
