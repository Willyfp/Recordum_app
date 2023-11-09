"use client";
import CardAvatar from "@/components/CardAvatar";
import { selectUser } from "@/store/slices/authSlice";
import { decryptStrData } from "@/utils";
import { useSelector } from "react-redux";

const CardUser = () => {
  const user = useSelector(selectUser);

  return (
    <CardAvatar
      title={decryptStrData(user?.nome)}
      description={`Cod: ${user?.id}`}
      src={user?.urlFoto}
    />
  );
};

export default CardUser;
