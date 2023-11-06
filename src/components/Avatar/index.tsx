import Image from "next/image";
import { AiOutlineUser } from "react-icons/ai";

const Avatar = ({ src }: { src?: string }) => {
  return (
    <div className="avatar">
      <div className="w-[4.375rem] h-[4.375rem] rounded-full">
        {src ? (
          <Image src={src} alt="Avatar" />
        ) : (
          <div className="w-[4.375rem] h-[4.375rem] bg-disabled flex items-center justify-center">
            <AiOutlineUser className="w-[3rem] h-[3rem]" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Avatar;
