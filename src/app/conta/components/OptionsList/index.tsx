"use client";
import OptionCard from "@/components/OptionCard";
import { useCookies } from "next-client-cookies";
import { useRouter } from "next/navigation";

const OptionsList = () => {
  const router = useRouter();

  const cookies = useCookies();

  const options = [
    {
      label: "Academias vinculadas",
      action: () => router.push("/conta/academias"),
    },
    { label: "Avalie nosso app" },
    { label: "Política de privacidade" },
    { label: "Termos de utilização" },
    {
      label: "Sair",
      action: () => {
        cookies.remove("token");
        cookies.remove("user_id");
        cookies.remove("GYM_ID");
        router.push("/login");
      },
    },
  ];

  return (
    <div className="flex flex-1 flex-col gap-[0.5rem]">
      {options.map((option, index) => (
        <OptionCard key={index} title={option.label} onClick={option.action} />
      ))}
    </div>
  );
};

export default OptionsList;
