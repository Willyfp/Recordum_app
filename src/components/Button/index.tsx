import { ButtonHTMLAttributes } from "react";

export default function ButtonComponent({
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`btn ${className} capitalize rounded-3xl`} {...props}>
      {children}
    </button>
  );
}
