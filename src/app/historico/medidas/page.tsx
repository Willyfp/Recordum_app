"use client";
import DefaultContainer from "@/components/DefaultContainer";
import { SliderMeasures } from "./components/SliderMeasures";
import UserInfo from "@/app/inicio/components/UserInfo";
import EditableAvatar from "@/components/EditableAvatar";
import { decryptStrData } from "@/utils";
import { useSelector } from "react-redux";
import { selectUser } from "@/store/slices/authSlice";

const Medidas = () => {
  const user = useSelector(selectUser);

  return (
    <DefaultContainer>
      <div className="flex w-full items-center justify-center p-12">
        <EditableAvatar
          editable={false}
          width="8rem"
          height="9rem"
          src={decryptStrData(user?.urlFoto)}
        />
      </div>

      <SliderMeasures />
    </DefaultContainer>
  );
};

export default Medidas;
