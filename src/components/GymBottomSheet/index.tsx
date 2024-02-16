"use client";

import { useSelector } from "react-redux";
import Sheet from "react-modal-sheet";
import { useCookies } from "next-client-cookies";
import { selectGymList } from "@/store/slices/gymSlice";
import { useEffect } from "react";
import { getGymList } from "@/services/userService";
import { GymList } from "./components/GymList";

const GymBottomSheet = () => {
  const cookies = useCookies();
  const list = useSelector(selectGymList);
  const token = cookies.get("token");
  const userId = cookies.get("user_id");

  const idGym = cookies.get("GYM_ID");

  useEffect(() => {
    if (userId && !idGym) {
      getGymList({ id: userId, cookies });
    }
  }, [userId, idGym]);

  return (
    <Sheet isOpen={token && !idGym} onClose={() => {}} detent="content-height">
      <Sheet.Container style={{ borderRadius: "1.88rem 1.88rem 0rem 0rem" }}>
        <div className="p-[1.5rem]">
          <Sheet.Header>
            <div className="w-full flex flex-col gap-[1rem] items-center">
              <span className="text-[1.2rem] font-title_bottom_sheet text-center">
                Selecione uma academia para continuar
              </span>
            </div>
          </Sheet.Header>

          <Sheet.Content>
            {list?.length && list?.length > 0 ? (
              <GymList />
            ) : (
              <div className="p-6 items-center justify-center w-full flex">
                <span className="">Nenhuma academia vinculada!</span>
              </div>
            )}
          </Sheet.Content>
        </div>
      </Sheet.Container>
    </Sheet>
  );
};

export default GymBottomSheet;
