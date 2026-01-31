'use client';

import React, { ReactNode } from 'react';

import { Loader } from 'lucide-react';

type CustomButtonProps = {
  className?: string;
  onClick?: () => void;
  children: ReactNode;
  loading?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  type?: 'submit' | 'button' | 'reset';
  bgLight?: boolean;
  bgColor?: string | undefined;
};

const CustomButton = (props: CustomButtonProps) => {
  return (
    <button
      type={props.type ? props.type : 'submit'}
      disabled={props?.disabled}
      onClick={() => props.onClick && props.onClick()}
      className={` ${
        props.bgColor
          ? `text-white ${props.bgColor}`
          : props.bgLight
            ? 'bg-neutral text-secondary'
            : 'bg-primary text-white'
      } flex h-[45px] w-full max-w-[315px] items-center justify-center rounded-[25px] p-[10px] text-center text-[12px] font-normal disabled:cursor-not-allowed disabled:bg-[#00000014] disabled:bg-none disabled:text-muted md:h-[50px] md:rounded-[35px] md:text-[13px] lg:h-[65px] lg:text-[14px] ${props.className || ''} transition-all duration-300 hover:bg-neutral hover:!text-white`}
    >
      {props.loading ? (
        <span className='sub-loader flex w-full items-center justify-center !border-white !border-b-transparent'>
          <Loader className='animate-spin' />
        </span>
      ) : (
        <div className='flex items-center justify-center gap-2'>
          {props.icon && props.icon}
          {props.children}
        </div>
      )}
    </button>
  );
};

export default CustomButton;
