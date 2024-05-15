'use client';
import Avatar from '@/components/Avatar';
import BottomSheet from '@/components/BottomSheet';
import ButtonComponent from '@/components/Button';
import DefaultContainer from '@/components/DefaultContainer';
import Header from '@/components/Header';
import {
  listLinkedProfessionals,
  removeVinculed,
} from '@/services/userService';
import { selectUser } from '@/store/slices/authSlice';
import { setSuccessBottomSheet } from '@/store/slices/globalSlice';
import { store } from '@/store/store';
import { User } from '@/types';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaExclamation } from 'react-icons/fa';
import { MdMoreVert } from 'react-icons/md';
import { useSelector } from 'react-redux';

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

  const [professionalId, setProfessionalId] = useState<number>();

  const [visibleUnlink, setVisibleUnlink] = useState(false);
  const [loading, setLoading] = useState(false);

  const unlinkProfessional = async () => {
    try {
      setLoading(true);

      await removeVinculed({
        id: professionalId,
        alunoProfessorId: linkedProfessionals.find(
          (item) => item.id === professionalId
        )?.aluno.id,
      });

      setVisibleUnlink(false);

      store.dispatch(
        setSuccessBottomSheet({
          open: true,
          title: 'Ação confirmada',
          buttonText: 'Ok',
          buttonAction: () =>
            listLinkedProfessionals().then((response) => {
              setLinkedProfessionals(response);
            }),
        })
      );
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

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
      <Header title='Alunos vinculados' />

      <div className='flex h-full w-full flex-col p-[1.5rem] gap-[1.5rem]'>
        <div className='flex-1'>
          <div className='flex flex-col gap-[0.25rem]'>
            <p className='text-description font-semibold text-black'>
              Seus alunos
            </p>
            <p className='text-button_primary font-description text-black'>
              Gerencie seus alunos
            </p>
          </div>

          <div className='flex flex-col gap-2 w-full pt-2 rounded-xl'>
            {linkedProfessionals.map((professional) => (
              <div
                key={professional.id}
                className='flex w-full items-center justify-between p-4 bg-white rounded-[0.5rem] shadow-md cursor-pointer'
              >
                <div
                  className='flex items-center gap-4'
                  onClick={() =>
                    router.push(`/treinos/${professional.aluno.id}`)
                  }
                >
                  <Avatar size={4} src={professional.aluno.urlFoto} />

                  <div className='flex gap-2 flex-col max-w-[60%] overflow-hidden'>
                    <p className='text-initial_title text-color_name truncate'>
                      {professional.aluno.nome}
                    </p>

                    <span className='text-id'>
                      Cod: {professional.aluno.id}
                    </span>
                  </div>
                </div>

                <details className='dropdown dropdown-end'>
                  <summary tabIndex={0} className='pb-5'>
                    <MdMoreVert size={24} color='#666666' />
                  </summary>
                  <ul
                    tabIndex={0}
                    className='p-2 shadow  dropdown-content z-[1] bg-base-100 rounded-md text-black'
                  >
                    <li
                      className='p-2'
                      onClick={(e) => {
                        setVisibleUnlink(true);
                        setProfessionalId(professional.id);
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                    >
                      <span>Desvincular</span>
                    </li>
                  </ul>
                </details>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomSheet
        open={visibleUnlink}
        closeAction={() => {
          setVisibleUnlink(false);
        }}
        icon={
          <div className='flex w-16 h-16 justify-center items-center rounded-[1.5rem] bg-[#f9c459]'>
            <FaExclamation className='w-8 h-8 text-white' />
          </div>
        }
        title={'Desvincular aluno'}
      >
        <div className='flex flex-1 justify-center items-center flex-col gap-8 pt-4'>
          <span className='text-[18px] text-center text-black'>
            Ao confirmar a ação desejada o aluno estará definitivamente
            desvinculado dos seus treinos
          </span>

          <div className='flex flex-col gap-4 py-4 w-full'>
            <ButtonComponent
              loading={loading}
              className='w-full btn-primary'
              onClick={unlinkProfessional}
            >
              Desvincular
            </ButtonComponent>

            <ButtonComponent
              className='btn-outline w-full border-color-background text-black'
              onClick={() => {
                setVisibleUnlink(false);
              }}
            >
              Cancelar
            </ButtonComponent>
          </div>
        </div>
      </BottomSheet>
    </DefaultContainer>
  );
};

export default Page;
