'use client';

import Avatar from '@/components/Avatar';
import { listVinculatedGyms } from '@/services/userService';
import { selectUser } from '@/store/slices/authSlice';
import { GymType } from '@/types';
import { useEffect, useState } from 'react';
import { MdOutlineStore } from 'react-icons/md';
import { useSelector } from 'react-redux';

const Body = () => {
  const user = useSelector(selectUser);

  const [gyms, setGyms] = useState<GymType[]>([]);

  useEffect(() => {
    if (user) {
      listVinculatedGyms({ id: user.id }).then((res) => {
        setGyms(res);
      });
    }
  }, [user]);

  console.log(gyms);

  return (
    <div className='flex flex-col w-full gap-2'>
      {gyms.map((gym) => (
        <div
          key={gym.id}
          className='flex flex-row items-center gap-4 shadow-md p-4 rounded-lg'
        >
          <Avatar
            size={3.5}
            src={gym.urlImagem}
            iconFallback={
              <MdOutlineStore
                style={{
                  height: 3.5 / 1.46 + 'rem',
                  width: 3.5 / 1.46 + 'rem',
                }}
              />
            }
          />

          <div className='flex flex-col gap-1'>
            <span className='text-color_name text-initial_title'>
              {gym.fantasia}
            </span>
            <span className='text-icon_info text-button_primary'>
              {gym.cidade.nome} - {gym.cidade.uf.nome}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Body;
