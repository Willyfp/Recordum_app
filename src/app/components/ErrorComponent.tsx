import { selectApiError, setApiError } from "@/store/slices/globalSlice";
import { store } from "@/store/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const ErrorComponent = () => {
  const apiError = useSelector(selectApiError);

  useEffect(() => {
    if (apiError) {
      setTimeout(() => {
        store.dispatch(setApiError?.(undefined));
      }, 6000);
    }
  }, [apiError]);

  return (
    <>
      {apiError && (
        <div className="fixed z-10 top-0 w-full p-2 ">
          <div className="alert alert-error flex-row justify-center items-center">
            <span>Erro! {apiError}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default ErrorComponent;
