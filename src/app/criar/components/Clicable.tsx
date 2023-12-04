"use client";

import Card from "@/components/Card";
import { useRouter } from "next/navigation";
import { MdBarChart } from "react-icons/md";

export const Clicable = () => {
  const router = useRouter();

  return (
    <Card
      icon={<MdBarChart className="text-black h-[1.25rem] w-[1.25rem]" />}
      title="Personalizar treino"
      onClick={() => router.push("/criar/personalizar")}
    />
  );
};
