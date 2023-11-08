"use client";
import CardAvatar from "@/components/CardAvatar";
import { selectUser } from "@/store/slices/authSlice";
import { useSelector } from "react-redux";

const CardUser = () => {
  const user = useSelector(selectUser);

  return (
    <CardAvatar
      title={user?.nome}
      description={`Cod: ${user?.id}`}
      src={user?.urlFoto}
    />
  );
};

export default CardUser;
