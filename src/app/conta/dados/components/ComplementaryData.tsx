"use client";

import { selectUser } from "@/store/slices/authSlice";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

const ComplementaryData = () => {
  const user = useSelector(selectUser);

  return (
    <div className="w-full px-[1.5rem] gap-[1.5rem] flex flex-col">
      <p className="text-description font-semibold text-black">
        Dados complementares
      </p>

      <div className="flex flex-row w-full gap-[0.8rem] justify-between">
        <div className="flex w-full flex-col">
          <div className="flex w-full flex-col">
            <p className="text-button_primary  text-black leading-4">Sexo</p>
            <p className="text-button_primary font-description text-color_name">
              {user?.sexo}
            </p>
          </div>

          <div className="divider m-0" />

          <div className="flex w-full flex-col">
            <p className="text-button_primary  text-black leading-4">Peso</p>
            <p className="text-button_primary font-description text-color_name">
              {user?.peso ? user.peso + "kg" : "-"}
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col">
          <div className="flex w-full flex-col">
            <p className="text-button_primary  text-black leading-4">Idade</p>
            <p className="text-button_primary font-description text-color_name">
              {dayjs().year() - dayjs(user?.dataNascimento).year()}
            </p>
          </div>

          <div className="divider m-0" />

          <div className="flex w-full flex-col">
            <p className="text-button_primary  text-black leading-4">Altura</p>
            <p className="text-button_primary font-description text-color_name">
              {user?.altura ? user.altura + "cm" : "-"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplementaryData;
