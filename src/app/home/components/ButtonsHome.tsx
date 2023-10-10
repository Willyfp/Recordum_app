"use client";

import ButtonComponent from "@/components/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ButtonsHome = () => {
  const router = useRouter();

  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <div className="flex flex-1 justify-center items-center">
        <Image
          src="/images/logo_recordum.png"
          alt="Logo Recordum"
          width={120}
          height={120}
        />
      </div>

      <div className="flex h-1/3 w-full gap-[16px] flex-col">
        <ButtonComponent
          className="btn-primary w-full"
          onClick={() => router.push("/login")}
        >
          Acessar conta
        </ButtonComponent>

        <ButtonComponent
          className="btn-outline btn-primary w-full"
          onClick={() => router.push("/cadastro")}
        >
          Cadastro
        </ButtonComponent>
      </div>
    </div>
  );
};

export default ButtonsHome;
