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

const Page = () => {
  const [visible, setVisible] = useState(false);

  const [linkedProfessionals, setLinkedProfessionals] = useState<
    {
      dataAlteracao: string;
      dataCadastro: string;
      id: 2;
      professor: User;
    }[]
  >([]); // [1]

  const user = useSelector(selectUser);

  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaValidation),
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      await linkProfessional({
        ...data,
        usuarioSolicitanteTipo: user?.usuarioTipo,
        idUsuarioLogado: user?.id,
      });

      setVisible(false);

      store.dispatch(
        setSuccessBottomSheet({
          open: true,
          title: "Ação confirmada",
          buttonText: "Ok",
          buttonAction: () =>
            listLinkedProfessionals().then((response) => {
              setLinkedProfessionals(response);
            }),
        })
      );
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user)
      listLinkedProfessionals().then((response) => {
        setLinkedProfessionals(
          response.filter((item) => item.aluno.id === user?.id)
        );
      });
  }, [user]);

  return (
    <DefaultContainer>
      <Header title="Professores vinculados" />

      <div className="flex h-full w-full flex-col p-[1.5rem] gap-[1.5rem]">
        <div className="flex-1">
          <div className="flex flex-col gap-[0.25rem]">
            <p className="text-description font-semibold">Seus professores</p>
            <p className="text-button_primary font-description">
              Gerencie seus professores
            </p>
          </div>

          <div className="flex flex-col gap-2 w-full pt-2 rounded-xl">
            {linkedProfessionals.map((professional) => (
              <div
                key={professional.id}
                className="flex w-full items-center justify-between p-4 bg-white rounded-[0.5rem] shadow-md"
              >
                <div className="flex items-center gap-4">
                  <Avatar size={4} src={professional.professor.urlFoto} />

                  <div className="flex gap-2 flex-col max-w-[60%] overflow-hidden">
                    <p className="text-initial_title text-color_name truncate">
                      {professional.professor.nome}
                    </p>

                    <span className="text-id">
                      Cod: {professional.professor.id}
                    </span>
                  </div>
                </div>

                <MdMoreVert size={24} color="#666666" />
              </div>
            ))}
          </div>
        </div>

        <ButtonComponent
          className="btn-primary w-full"
          onClick={() => setVisible(true)}
        >
          Adicionar professor
        </ButtonComponent>
      </div>

      <BottomSheet
        open={visible}
        closeAction={() => setVisible(false)}
        title={"Vincular professor"}
      >
        <div className="w-full items-center justify-center px-6 pt-4">
          <p className="text-black text-description text-center">
            Digite o código do profissional
          </p>
        </div>

        <div className="flex flex-col gap-[1rem] w-full p-[1.5rem] items-center">
          <TextField
            {...register("codigoVinculo")}
            className={"input-bordered border-color-background"}
            labelStyle="text-black"
            label="Código"
            placeholder="Digite aqui o código do professor"
            errorMessage={errors?.codigoVinculo?.message}
          />

          <ButtonComponent
            className="btn-primary w-full"
            loading={loading}
            onClick={() => {
              handleSubmit(onSubmit)();
            }}
          >
            Vincular
          </ButtonComponent>

          <ButtonComponent
            className="btn-outline w-full"
            onClick={() => {
              setVisible(false);
            }}
          >
            Cancelar
          </ButtonComponent>
        </div>
      </BottomSheet>
    </DefaultContainer>
  );
};

export default Page;
