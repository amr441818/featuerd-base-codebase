import React from 'react';

import Image from 'next/image';

import { IManager } from '../../types/home-types';

const ManagersCard = ({ manager }: { manager: IManager }) => {
  return (
    <div
      key={manager.id}
      className='group mx-auto h-full w-full max-w-[400px] overflow-hidden rounded-[20px] bg-[#FFFFFF] p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg lg:p-[25px]'
    >
      <div className='flex w-full flex-col items-center justify-center'>
        <div className='image relative mb-[15px] aspect-[349/291] w-full overflow-hidden rounded-[10px]'>
          <Image
            src={manager.image}
            alt={manager.name}
            fill
            className='rounded-[10px] object-cover transition-all duration-500 group-hover:scale-110'
          />
        </div>
        <div className='info flex w-full flex-col items-start justify-center gap-2'>
          <h4 className='text-base font-medium text-secondary lg:text-[16px]'>{manager.name}</h4>
          <p className='text-xs font-normal leading-[1.67] text-secondary'>{manager.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ManagersCard;
