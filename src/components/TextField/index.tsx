/* eslint-disable react/display-name */
import React, { InputHTMLAttributes } from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

const TextField = React.forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    labelStyle?: string;
    errorMessage?:
      | string
      | FieldError
      | Merge<FieldError, FieldErrorsImpl<any>>
      | undefined;
  }
>(({ labelStyle, className, label, errorMessage, ...props }, ref) => {
  return (
    <div className="form-control w-full">
      {label && (
        <label className="label">
          <span className={`label-text ${labelStyle || "text-white"}`}>
            {label}
          </span>
        </label>
      )}

      <input
        className={`input ${className || "input-ghost w-full bg-white"} ${
          !!errorMessage && "input-error"
        }}`}
        ref={ref}
        {...props}
      />
      {errorMessage && (
        <label className="label">
          <span className="label-text-alt text-error">{errorMessage}</span>
        </label>
      )}
    </div>
  );
});

export default TextField;
