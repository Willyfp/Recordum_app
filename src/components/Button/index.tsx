import { ButtonHTMLAttributes } from "react";

export default function ButtonComponent({
  children,
  className,
  loading,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { loading?: boolean }) {
  return (
    <button
      className={`btn ${className} capitalize rounded-3xl`}
      disabled={true}
      {...props}
    >
      {children}
    </button>
  );
}
