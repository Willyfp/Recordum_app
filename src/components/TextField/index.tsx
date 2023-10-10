/* eslint-disable react/display-name */
import React, { InputHTMLAttributes } from "react";

const TextField = React.forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    labelStyle?: string;
    errorMessage?: string;
  }
>(({ labelStyle, className, label, ...props }, ref) => {
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
        className={`input ${className || "input-ghost w-full bg-white"}`}
        ref={ref}
        {...props}
      />
      {props.errorMessage && (
        <label className="label">
          <span className="label-text-alt text-error">
            {props.errorMessage}
          </span>
        </label>
      )}
    </div>
  );
});

export default TextField;
