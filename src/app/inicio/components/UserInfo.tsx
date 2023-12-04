"use client";
import { selectUser } from "@/store/slices/authSlice";
import { useSelector } from "react-redux";
import { AiOutlineUser } from "react-icons/ai";
import Image from "next/image";
import Avatar from "@/components/Avatar";
import { decryptStrData } from "@/utils";

const UserInfo = () => {
  const user = useSelector(selectUser);

  return (
    <div className="flex w-full p-[1.5rem] gap-[1rem] bg-primary_bg">
      <Avatar src={decryptStrData(user?.urlFoto)} size={4.375} />

      <div className="flex flex-col gap-[0.19rem] line-clamp-1 ">
        <p className="text-name text-color_name truncate ...">
          {decryptStrData(user?.nome)}
        </p>
        <p className="text-id truncate ...">Cod: {user?.id}</p>
      </div>
    </div>
  );
};

export default UserInfo;
