'use client';
import Avatar from '@/components/Avatar';
import BottomSheet from '@/components/BottomSheet';
import ButtonComponent from '@/components/Button';
import DefaultContainer from '@/components/DefaultContainer';
import Header from '@/components/Header';
import TextField from '@/components/TextField';
import {
  linkProfessional,
  listLinkedProfessionals,
  removeVinculed,
} from '@/services/userService';
import { selectUser } from '@/store/slices/authSlice';
import { setSuccessBottomSheet } from '@/store/slices/globalSlice';
import { store } from '@/store/store';
import { User } from '@/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaExclamation } from 'react-icons/fa';
import { MdMoreVert } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { schemaValidation } from './schemaValidation';

const Page = () => {
  const [visible, setVisible] = useState(false);

  const [professionalId, setProfessionalId] = useState<number>();

  const [isRestrict, setIsRestrict] = useState(false);

  const [visibleUnlink, setVisibleUnlink] = useState(false);

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

  const unlinkProfessional = async () => {
    try {
      setLoading(true);

      await removeVinculed({
        id: professionalId,
        alunoProfessorId: linkedProfessionals.find(
          (item) => item.id === professionalId
        )?.professor.id,
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
          title: 'Ação confirmada',
          buttonText: 'Ok',
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
      <Header title='Professores vinculados' />

      <div className='flex h-full w-full flex-col p-[1.5rem] gap-[1.5rem]'>
        <div className='flex-1'>
          <div className='flex flex-col gap-[0.25rem]'>
            <p className='text-description font-semibold text-black'>
              Seus professores
            </p>
            <p className='text-button_primary font-description text-black'>
              Gerencie seus professores
            </p>
          </div>

          <div className='flex flex-col gap-2 w-full pt-2 rounded-xl'>
            {linkedProfessionals.map((professional) => (
              <div
                key={professional.id}
                className='flex w-full items-center justify-between p-4 bg-white rounded-[0.5rem] shadow-md'
              >
                <div className='flex items-center gap-4'>
                  <Avatar size={4} src={professional.professor.urlFoto} />

                  <div className='flex gap-2 flex-col max-w-[60%] overflow-hidden'>
                    <p className='text-initial_title text-color_name truncate'>
                      {professional.professor.nome}
                    </p>

                    <span className='text-id'>
                      Cod: {professional.professor.id}
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
                      onClick={() => {
                        setIsRestrict(false);
                        setVisibleUnlink(true);
                        setProfessionalId(professional.id);
                      }}
                    >
                      <span>Desvincular</span>
                    </li>

                    <div className='w-full border border-y-disabled opacity-20'></div>

                    <li
                      className='p-2'
                      onClick={() => {
                        setIsRestrict(true);
                        setVisibleUnlink(true);
                        setProfessionalId(professional.id);
                      }}
                    >
                      <span>Restringir</span>
                    </li>
                  </ul>
                </details>
              </div>
            ))}
          </div>
        </div>

        <ButtonComponent
          className='btn-primary w-full'
          onClick={() => setVisible(true)}
        >
          Adicionar professor
        </ButtonComponent>
      </div>

      <BottomSheet
        open={visible}
        closeAction={() => setVisible(false)}
        title={'Vincular professor'}
      >
        <div className='w-full items-center justify-center px-6 pt-4'>
          <p className='text-black text-description text-center'>
            Digite o código do profissional
          </p>
        </div>

        <div className='flex flex-col gap-[1rem] w-full p-[1.5rem] items-center'>
          <TextField
            {...register('codigoVinculo')}
            className={'input-bordered border-color-background'}
            labelStyle='text-black'
            label='Código'
            placeholder='Digite aqui o código do professor'
            errorMessage={errors?.codigoVinculo?.message}
          />

          <ButtonComponent
            className='btn-primary w-full'
            loading={loading}
            onClick={() => {
              handleSubmit(onSubmit)();
            }}
          >
            Vincular
          </ButtonComponent>

          <ButtonComponent
            className='btn-outline w-full'
            onClick={() => {
              setVisible(false);
            }}
          >
            Cancelar
          </ButtonComponent>
        </div>
      </BottomSheet>

      <BottomSheet
        open={visibleUnlink}
        closeAction={() => {
          setVisibleUnlink(false);
          setIsRestrict(false);
        }}
        icon={
          <div className='flex w-16 h-16 justify-center items-center rounded-[1.5rem] bg-[#f9c459]'>
            <FaExclamation className='w-8 h-8 text-white' />
          </div>
        }
        title={isRestrict ? 'Restringir professor' : 'Desvincular professor'}
      >
        <div className='flex flex-1 justify-center items-center flex-col gap-8 pt-4'>
          <span className='text-[18px] text-center text-black'>
            Ao confirmar a ação desejada o professor estará definitivamente
            {isRestrict ? ' restrito' : ' desvinculado'} dos seus treinos
          </span>

          <div className='flex flex-col gap-4 py-4 w-full'>
            <ButtonComponent
              loading={loading}
              className='w-full btn-primary'
              onClick={unlinkProfessional}
            >
              {isRestrict ? 'Restringir' : 'Desvincular'}
            </ButtonComponent>

            <ButtonComponent
              className='btn-outline w-full border-color-background text-black'
              onClick={() => {
                setVisibleUnlink(false);
                setIsRestrict(false);
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
