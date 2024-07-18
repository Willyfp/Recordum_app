export const CardSelectable = ({
  selected,
  description,
  onClick,
  height,
}: {
  selected?: boolean;
  description: string;
  onClick?: () => void;
  height?: string;
}) => {
  return (
    <div
      className={`flex p-4 w-[9.5rem] h-[${
        height ?? "5.3rem"
      }] rounded-[1.25rem] shadow-card_muscle ${
        selected ? "bg-color-primary" : "bg-white"
      }`}
      onClick={onClick}
    >
      <div className="flex flex-1 items-end">
        <p className="text-black text-button_primary">{description}</p>
      </div>
    </div>
  );
};
