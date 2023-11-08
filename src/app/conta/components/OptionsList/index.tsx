"use client";
import OptionCard from "@/components/OptionCard";
import { useRouter } from "next/navigation";

const OptionsList = () => {
  const router = useRouter();

  const options = [
    {
      label: "Academias vinculadas",
      action: () => router.push("/conta/academias-vinculadas"),
    },
    { label: "Avalie nosso app" },
    { label: "Política de privacidade" },
    { label: "Termos de utilização" },
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
