import Image from "next/image";
import { AiOutlineUser } from "react-icons/ai";

const Avatar = ({ src, size }: { src?: string; size?: number }) => {
  const sizeIcon = size ? size / 1.46 + "rem" : "3rem";

  const newSize = size + "rem";

  return (
    <div className="avatar">
      <div className="rounded-full" style={{ height: newSize, width: newSize }}>
        {src ? (
          <Image src={src} alt="Avatar" />
        ) : (
          <div
            style={{ height: newSize, width: newSize }}
            className={` bg-disabled flex items-center justify-center rounded-full`}
          >
            <AiOutlineUser style={{ height: sizeIcon, width: sizeIcon }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Avatar;
