"use client";
import CardAvatar from "@/components/CardAvatar";
import { selectUser } from "@/store/slices/authSlice";
import { decryptStrData } from "@/utils";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const CardUser = () => {
  const user = useSelector(selectUser);

  const router = useRouter();

  return (
    <CardAvatar
      onClick={() => router.push("/conta/dados")}
      title={decryptStrData(user?.nome)}
      description={`Cod: ${user?.id}`}
      src={user?.urlFoto}
    />
  );
};

export default CardUser;
