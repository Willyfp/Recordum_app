import { ReactNode } from "react";

const Card = ({
  icon,
  title,
  onClick,
}: {
  icon: ReactNode;
  title: string;
  onClick?: () => void;
}) => {
  return (
    <div
      className="card w-full bg-base-100 shadow-xl cursor-pointer"
      onClick={onClick}
    >
      <div className="flex flex-col justify-between p-[1rem] h-[6.6875rem]">
        {icon}
        <p className="text-black text-button_primary max-w-[7.75rem]">
          {title}
        </p>
      </div>
    </div>
  );
};

export default Card;
