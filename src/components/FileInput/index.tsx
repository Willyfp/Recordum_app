/* eslint-disable react/display-name */
import React, { InputHTMLAttributes } from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

const FileInput = React.forwardRef<
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
        type="file"
        className={`file-input text-black ${
          className || "file-input-bordered w-full bg-primary_bg"
        } ${!!errorMessage && "file-input-error border-error-color"}`}
        ref={ref}
        {...props}
      />
      <label className="label">
        <span className="label-text-alt text-error">{errorMessage}</span>
      </label>
    </div>
  );
});

export default FileInput;
