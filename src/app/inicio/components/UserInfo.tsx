"use client";
import { selectUser } from "@/store/slices/authSlice";
import { useSelector } from "react-redux";
import { AiOutlineUser } from "react-icons/ai";
import Image from "next/image";
import Avatar from "@/components/Avatar";

const UserInfo = () => {
  const user = useSelector(selectUser);

  return (
    <div className="flex w-full p-[1.5rem] gap-[1rem] bg-white">
      <Avatar src={user?.urlFoto} />

      <div className="flex flex-col gap-[0.19rem]">
        <span className="text-name text-color_name">{user?.nome}</span>
      </div>
    </div>
  );
};

export default UserInfo;
