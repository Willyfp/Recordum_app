"use client";

import Card from "@/components/Card";
import { useRouter } from "next/navigation";
import { GrDocumentPerformance } from "react-icons/gr";
import { MdOutlineMonitorWeight } from "react-icons/md";

export const Cards = () => {

  const router = useRouter();

  return (
    <div className="flex  gap-[0.5rem]">
      <Card
        icon={
          <MdOutlineMonitorWeight className="text-black h-[1.25rem] w-[1.25rem]" />
        }
        onClick={() => router.push("/historico/medidas")}
        title="Pesos e medidas"
      />

      <Card
        icon={
          <GrDocumentPerformance className="text-black h-[1.25rem] w-[1.25rem]" />
        }
        title="Desempenho geral"
      />
    </div>
  );
};
