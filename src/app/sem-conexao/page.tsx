"use client";
import DefaultContainer from "@/components/DefaultContainer";
import Header from "@/components/Header";
import ListMuscleGroup from "@/components/ListMuscleGroup";
import { useRouter } from "next/navigation";

const Exercicios = () => {
  const router = useRouter();

  return (
    <DefaultContainer>
      <Header title="Aparelhos sem conexão" />
      <div className="flex flex-col flex-1 p-[1.5rem] gap-4">
        <div className="flex flex-col gap-[0.25rem]">
          <p className="text-black font-semibold text-description">
            Exercícios
          </p>
          <p className="text-black font-description text-button_primary">
            Selecione um dos exercícios
          </p>
        </div>

        <ListMuscleGroup
          onClick={(muscleGroup) =>
            router.push(`/sem-conexao/${muscleGroup.id}`)
          }
        />
      </div>
    </DefaultContainer>
  );
};

export default Exercicios;
