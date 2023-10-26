import { ButtonHTMLAttributes } from "react";

export default function ButtonComponent({
  children,
  className,
  loading,
  onClick,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { loading?: boolean }) {
  return (
    <button
      className={`btn ${className} capitalize rounded-3xl`}
      onClick={(e) => !loading && onClick && onClick(e)}
      {...props}
    >
      {loading ? (
        <span className="loading loading-dots loading-xs"></span>
      ) : (
        children
      )}
    </button>
  );
}
