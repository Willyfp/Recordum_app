/* eslint-disable react/display-name */
import React, { InputHTMLAttributes } from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

const TextField = React.forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    labelStyle?: string;
    showErrorMessage?: boolean;
    disableFullWidth?: boolean;
    errorMessage?:
      | string
      | FieldError
      | Merge<FieldError, FieldErrorsImpl<any>>
      | undefined;
  }
>(
  (
    {
      labelStyle,
      className,
      label,
      errorMessage,
      disableFullWidth,
      showErrorMessage = true,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={disableFullWidth ? "form-control" : "form-control w-full"}
      >
        {label && (
          <label className="label">
            <span className={`label-text ${labelStyle || "text-white"}`}>
              {label}
            </span>
          </label>
        )}

        <input
          className={`input text-black ${
            className || "input-ghost w-full bg-primary_bg"
          } ${!!errorMessage && "input-error border-error-color"}`}
          ref={ref}
          {...props}
        />

        {showErrorMessage && (
          <label className="label">
            <span className="label-text-alt text-error">{errorMessage}</span>
          </label>
        )}
      </div>
    );
  }
);

export default TextField;
