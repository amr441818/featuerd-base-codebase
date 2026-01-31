'use client';

import { useEffect, useState } from 'react';

import { Icon } from '@iconify/react';
import { FieldValues } from 'react-hook-form';

import { CustomInputProps } from '../../types/formInputs';

const CustomInput = <TFieldValues extends FieldValues>(props: CustomInputProps<TFieldValues>) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(false);
  }, []);

  return (
    <div className='relative flex w-full flex-col gap-2'>
      <input
        type={show ? 'text' : props.type}
        placeholder={props.placeholder}
        {...props.register(props.name, props?.validation)}
        required={props.required ? props.required : false}
        disabled={props.disabled ? props.disabled : false}
        className={`mx-auto block h-[45px] w-full max-w-full rounded-[25px] border border-[#000000]/[15%] bg-white p-3 ps-[15px] text-xs text-gray-900 outline-none placeholder:text-[10px] placeholder:font-light placeholder:text-muted focus:border-primary focus:ring-primary dark:focus:border-primary dark:focus:ring-primary md:h-[50px] md:max-w-[315px] md:rounded-[35px] md:p-4 md:ps-[25px] md:text-sm md:placeholder:text-xs lg:h-[64px] ${props.className ? props.className : ''} ${props.error ? 'border-red-500' : ''}`}
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
      {props.error && <p className='text-center text-sm font-light text-red-500'>{props.error}</p>}
    </div>
  );
};

export default CustomInput;
