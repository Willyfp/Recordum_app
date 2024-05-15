import DefaultContainer from '@/components/DefaultContainer';
import Header from '@/components/Header';
import Body from './components/Body';

const Complementares = () => {
  return (
    <DefaultContainer>
      <Header title='Conta' />

      <div className='flex flex-col gap-4 px-[1.5rem] py-[1.5rem]'>
        <div className='flex flex-col gap-[0.25rem]'>
          <p className='text-description font-semibold text-black'>
            Academias vinculadas
          </p>
          <p className='text-button_primary font-description text-black'>
            Gerencie seus pontos de acesso
          </p>
        </div>

        <Body />
      </div>
    </DefaultContainer>
  );
};

export default Complementares;
