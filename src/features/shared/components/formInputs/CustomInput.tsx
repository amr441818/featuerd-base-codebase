'use client';

import { useEffect, useState } from 'react';

import { Icon } from '@iconify/react';

import { CustomInputProps } from '@/types/formInputs';

const CustomInput = (props: CustomInputProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(false);
  }, []);

  return (
    <div className='relative flex flex-col gap-2'>
      <input
        type={show ? 'text' : props.type}
        placeholder={props.placeholder}
        {...props.register(props.name, props?.validation)}
        required={props.required ? props.required : false}
        disabled={props.disabled ? props.disabled : false}
        className={`focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-[10px] border border-[#EBEBEB] bg-white p-4 text-sm text-gray-900 outline-none dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 md:ps-[25px] ${props.className ? props.className : ''} ${props.error ? 'border-red-500' : ''}`}
      />

      {props?.type === 'password' && (
        <>
          {show ? (
            <Icon
              icon='mdi-light:eye-off'
              onClick={() => setShow(false)}
              className='absolute end-2 top-[50%] size-6 translate-y-[-50%] cursor-pointer text-[#929292] md:end-5'
            />
          ) : (
            <Icon
              className='absolute end-2 top-[50%] size-6 translate-y-[-50%] cursor-pointer text-[#929292] md:end-5'
              icon='ph:eye'
              onClick={() => setShow(true)}
            />
          )}
        </>
      )}
      {props.error && <p className='text-start text-red-500'>{props.error}</p>}
    </div>
  );
};

export default CustomInput;
