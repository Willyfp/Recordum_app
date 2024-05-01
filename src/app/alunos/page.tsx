"use client";
import DefaultContainer from "@/components/DefaultContainer";
import ButtonComponent from "@/components/Button";
import Header from "@/components/Header";
import BottomSheet from "@/components/BottomSheet";
import { useEffect, useState } from "react";
import TextField from "@/components/TextField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaValidation } from "./schemaValidation";
import { store } from "@/store/store";
import { setSuccessBottomSheet } from "@/store/slices/globalSlice";
import {
  linkProfessional,
  listLinkedProfessionals,
} from "@/services/userService";
import { useSelector } from "react-redux";
import { selectUser } from "@/store/slices/authSlice";
import { User } from "@/types";
import Avatar from "@/components/Avatar";
import { MdMoreVert } from "react-icons/md";
import { useRouter } from "next/navigation";

const Page = () => {
  const [linkedProfessionals, setLinkedProfessionals] = useState<
    {
      dataAlteracao: string;
      dataCadastro: string;
      id: 2;
      professor: User;
      aluno: User;
    }[]
  >([]); // [1]

  const user = useSelector(selectUser);

  useEffect(() => {
    if (user)
      listLinkedProfessionals().then((response) => {
        setLinkedProfessionals(
          response.filter((item) => item.professor.id === user?.id)
        );
      });
  }, [user]);

  const router = useRouter();

  return (
    <DefaultContainer>
      <Header title="Alunos vinculados" />

      <div className="flex h-full w-full flex-col p-[1.5rem] gap-[1.5rem]">
        <div className="flex-1">
          <div className="flex flex-col gap-[0.25rem]">
            <p className="text-description font-semibold">Seus alunos</p>
            <p className="text-button_primary font-description">
              Gerencie seus alunos
            </p>
          </div>

          <div className="flex flex-col gap-2 w-full pt-2 rounded-xl">
            {linkedProfessionals.map((professional) => (
              <div
                onClick={() => router.push(`/treinos/${professional.aluno.id}`)}
                key={professional.id}
                className="flex w-full items-center justify-between p-4 bg-white rounded-[0.5rem] shadow-md cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <Avatar size={4} src={professional.aluno.urlFoto} />

                  <div className="flex gap-2 flex-col max-w-[60%] overflow-hidden">
                    <p className="text-initial_title text-color_name truncate">
                      {professional.aluno.nome}
                    </p>

                    <span className="text-id">
                      Cod: {professional.aluno.id}
                    </span>
                  </div>
                </div>

                <MdMoreVert size={24} color="#666666" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </DefaultContainer>
  );
};

export default Page;
