/* eslint-disable react/display-name */
import React, { InputHTMLAttributes } from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
import DatePicker from "tailwind-datepicker-react";

const DatePickerComponent = React.forwardRef<
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
  const [openDatePicker, setOpenDatePicker] = React.useState(false);

  return (
    <div className="form-control w-full">
      {label && (
        <label className="label">
          <span className={`label-text ${labelStyle || "text-white"}`}>
            {label}
          </span>
        </label>
      )}

      <DatePicker
        show={openDatePicker}
        setShow={setOpenDatePicker}
        classNames={"w-full h-[48px]"}
        options={{
          autoHide: true,
          todayBtn: false,
          datepickerClassNames: "top-12",
          language: "pt-br",
          clearBtn: false,
          weekDays: ["S", "T", "Q", "Q", "S", "S", "D"],
          theme: {
            background: "",
            todayBtn: "",
            clearBtn: "",
            icons: "text-calendar",
            text: "text-calendar",
            disabledText: "text-color_name",
            input: errorMessage
              ? "border-error-color"
              : "border-color-background",
            inputIcon: "text-icon_calendar",
            selected: "text-primary bg-primary",
          },
          inputPlaceholderProp: "Selecione uma data",
          inputDateFormatProp: {
            day: "numeric",
            month: "long",
            year: "numeric",
          },
        }}
        {...props}
      />
      <label className="label">
        <span className="label-text-alt text-error">{errorMessage}</span>
      </label>
    </div>
  );
});

export default DatePickerComponent;
