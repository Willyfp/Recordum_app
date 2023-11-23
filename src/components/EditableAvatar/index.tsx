import Image from "next/image";
import { AiOutlineUser } from "react-icons/ai";
import { MdEdit } from "react-icons/md";

const EditableAvatar = ({
  height,
  src,
  onClick,
  width,
}: {
  height?: string;
  width?: string;
  src?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      className="rounded-[0.63rem] relative overflow-hidden cursor-pointer"
      style={{
        minHeight: height || "6.25rem",
        minWidth: width || "5rem",
        maxHeight: height || "6.25rem",
        maxWidth: width || "5rem",
      }}
      onClick={onClick}
    >
      {src ? (
        <Image src={src} alt="Avatar" />
      ) : (
        <div
          className={`bg-disabled flex items-center justify-center w-full h-full`}
          style={{ height, width }}
        >
          <AiOutlineUser style={{ height: "2.5rem", width: "2.5rem" }} />
        </div>
      )}

      <div className="flex absolute bottom-[0.5rem] right-[0.5rem] h-[1.5rem] w-[1.5rem] rounded-[0.31rem] bg-white opacity-50 justify-center items-center">
        <MdEdit className="text-black text-button_primary" />
      </div>
    </div>
  );
};

export default EditableAvatar;
