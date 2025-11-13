import React from 'react';

import { EyeClosedIcon } from 'lucide-react';

type ModalProps = {
  children: React.ReactNode;
  title?: string;
  openCloseModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const CustomModal = (props: ModalProps) => {
  const closeModal = () => {
    props.openCloseModal((prevState) => !prevState);
  };
  return (
    <>
      <div
        id='crud-modal'
        aria-hidden='true'
        className='fixed left-0 right-0 top-0 z-[999] flex h-[100%] w-full items-center justify-center bg-gray-800 bg-opacity-80'
      >
        <div className='relative flex max-h-[100%] w-full max-w-[500px] flex-col justify-center p-4'>
          <div className='relative flex w-full flex-col overflow-x-auto rounded-[30px] bg-white p-4 shadow dark:bg-gray-700'>
            <div className='flex'>
              {' '}
              <button onClick={closeModal} className='text-[14px] text-[#969696]'>
                <EyeClosedIcon />
              </button>
            </div>

            {props.children}
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomModal;
