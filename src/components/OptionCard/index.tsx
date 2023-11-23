import { MdChevronRight } from "react-icons/md";

const OptionCard = ({
  title,
  onClick,
}: {
  title: string;
  onClick?: () => void;
}) => {
  return (
    <div
      className="flex flex-row justify-between px-[1rem] py-[0.88rem] items-center shadow-avatar_card bg-white rounded-[0.63rem]"
      onClick={onClick}
    >
      <p className="text-button_primary text-black">{title}</p>

      <MdChevronRight className=" text-icon_bottom text-initial_title" />
    </div>
  );
};

export default OptionCard;
