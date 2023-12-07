"use client";

import Card from "@/components/Card";
import { useRouter } from "next/navigation";
import { IoFitness } from "react-icons/io5";

export const Clicable = () => {
  const router = useRouter();

  return (
    <Card
      icon={<IoFitness className="text-black h-[1.25rem] w-[1.25rem]" />}
      title="Personalizar treino"
      onClick={() => router.push("/criar/personalizar")}
    />
  );
};
