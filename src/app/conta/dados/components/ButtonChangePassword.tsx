"use client";
import ButtonComponent from "@/components/Button";
import { useRouter } from "next/navigation";

const ButtonChangePassword = () => {
  const router = useRouter();

  return (
    <div className="px-[1.5rem] pt-[0.5rem] pb-[1rem] flex items-center justify-center w-full">
      <ButtonComponent
        className="btn-ghost text-secondary w-full text-button_primary"
        onClick={() => router.push("/conta/alterar-senha")}
      >
        Redefinir senha
      </ButtonComponent>
    </div>
  );
};

export default ButtonChangePassword;
