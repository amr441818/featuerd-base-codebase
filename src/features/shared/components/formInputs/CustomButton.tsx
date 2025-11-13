import React, { ReactNode } from 'react';

type CustomButtonProps = {
  className?: string;
  onClick?: () => void;
  children: ReactNode;
  loading?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  type?: 'submit' | 'button' | 'reset';
};
const CustomButton = (props: CustomButtonProps) => {
  return (
    <button
      type={props.type ? props.type : 'submit'}
      disabled={props?.disabled}
      onClick={() => props.onClick && props.onClick()}
      className={` ${props.disabled ? 'cursor-not-allowed opacity-75' : ''}rounded-[10px] bg-gradient-90 px-[50px] py-3 text-center text-[22px] font-bold text-white ${
        props.className && props.className
      }`}
    >
      {props.loading ? (
        <span className='sub-loader flex w-full items-center justify-center !border-white !border-b-transparent'></span>
      ) : (
        <div className='flex items-center justify-center gap-1'>
          {props.icon && props.icon}
          {props.children}
        </div>
      )}
    </button>
  );
};

export default CustomButton;
