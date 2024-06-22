"use client";

import { FormFields } from "@/app/meus-treinos/[id]/exercicio/[idExercicio]/components/FormFields";
import DefaultContainer from "@/components/DefaultContainer";
import Header from "@/components/Header";
import { getExecutedById } from "@/services/trainingService";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Editar() {
  const params = useParams();

  const [executed, setExecuted] = useState();

  useEffect(() => {
    if (params.id) {
      getExecutedById(params.id).then((response) => {
        setExecuted(response);
      });
    }
  }, [params.id]);

  return (
    <DefaultContainer>
      <Header title="Editar execução" />

      <div className="p-4">
        <FormFields
          executed={executed}
          exercise={executed?.exercicio}
          submitPath="/historico/executados"
        />
      </div>
    </DefaultContainer>
  );
}
