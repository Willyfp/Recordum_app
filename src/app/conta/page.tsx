import DefaultContainer from '@/components/DefaultContainer';
import CardUser from './components/CardUser';
import OptionsList from './components/OptionsList';

const Conta = () => {
  return (
    <DefaultContainer>
      <div className='flex flex-col p-[1.5rem] gap-[1.5rem]'>
        <div className='flex flex-col gap-[0.25rem]'>
          <p className='text-description font-semibold text-black'>Conta</p>
          <p className='text-button_primary font-description text-black'>
            Gerencie sua conta
          </p>
        </div>

        <CardUser />

        <OptionsList />
      </div>
    </DefaultContainer>
  );
};

export default Conta;
