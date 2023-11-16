"use client";
import EditableAvatar from "@/components/EditableAvatar";
import { selectUser } from "@/store/slices/authSlice";
import { decryptStrData } from "@/utils";
import { useSelector } from "react-redux";

const PersonalData = () => {
  const user = useSelector(selectUser);

  return (
    <div className="px-[1.5rem] py-[1rem] flex-row flex gap-[1rem] w-full">
      <EditableAvatar src={user?.urlFoto} />

      <div className="flex w-full flex-col">
        <div className="flex w-full flex-col">
          <p className="text-button_primary  text-black leading-4">Nome</p>
          <p className="text-button_primary font-description text-color_name">
            {decryptStrData(user?.nome)}
          </p>
        </div>

        <div className="divider m-0" />

        <div className="flex w-full flex-col">
          <p className="text-button_primary  text-black leading-4">Email</p>
          <p className="text-button_primary font-description text-color_name">
            {decryptStrData(user?.email)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalData;
