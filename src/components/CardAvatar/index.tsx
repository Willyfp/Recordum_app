import { MdChevronRight } from "react-icons/md";
import Avatar from "../Avatar";

const CardAvatar = ({
  src,
  title,
  description,
}: {
  src?: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="w-full bg-white shadow-avatar_card py-[1.5rem] px-[1rem] flex flex-row justify-between overflow-hidden items-center rounded-[0.63rem]">
      <div className="gap-[1rem] flex flex-row overflow-hidden items-center">
        <Avatar src={src} size={2.5} />

        <div className="flex flex-col gap-[0.19rem] line-clamp-1 max-w-[70%] ">
          <p className="text-initial_title text-color_name truncate ...">
            {title}
          </p>
          <p className="text-id truncate ...">{description}</p>
        </div>
      </div>
      <MdChevronRight className="text-[4rem] text-icon_bottom" />
    </div>
  );
};

export default CardAvatar;
