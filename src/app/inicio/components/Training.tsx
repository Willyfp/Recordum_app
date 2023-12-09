"use client";
import Card from "@/components/Card";
import { useRouter } from "next/navigation";
import { IoFitness } from "react-icons/io5";

const Training = () => {
  const router = useRouter();

  return (
    <div className="flex w-full p-[1.5rem] flex-col bg-color-primary gap-[1.5rem]">
      <div className="flex flex-col gap-[0.25rem]">
        <p className="text-black font-semibold text-description">Treinos</p>
        <p className="text-black font-description text-button_primary">
          Para praticar com treinos defininos
        </p>
      </div>

      <Card
        onClick={() => {
          router.push("/meus-treinos");
        }}
        icon={<IoFitness className="text-black h-[1.25rem] w-[1.25rem]" />}
        title="Treinos personalizados"
      />
    </div>
  );
};

export default Training;
