/* eslint-disable react/display-name */
// make a generic select component that receives the options

import React, { SelectHTMLAttributes } from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

type Option = {
  label: string;
  value: any;
};

const Select = React.forwardRef<
  HTMLSelectElement,
  SelectHTMLAttributes<HTMLSelectElement> & {
    label?: string;
    labelStyle?: string;
    errorMessage?:
      | string
      | FieldError
      | Merge<FieldError, FieldErrorsImpl<any>>
      | undefined;
    options: Option[];
  }
>(({ labelStyle, className, label, errorMessage, options, ...props }, ref) => {
  return (
    <div className="form-control w-full">
      {label && (
        <label className="label">
          <span className={`label-text ${labelStyle || "text-black"}`}>
            {label}
          </span>
        </label>
      )}

      <select
        className={`select text-black select-bordered border-color-background ${
          className || "bg-primary_bg"
        } ${errorMessage && "select-error border-error-color"}`}
        ref={ref}
        {...props}
      >
        <option value="" disabled selected hidden>
          Selecione uma opção
        </option>
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <label className="label">
        <span className="label-text-alt text-error">{errorMessage}</span>
      </label>
    </div>
  );
});

export default Select;
