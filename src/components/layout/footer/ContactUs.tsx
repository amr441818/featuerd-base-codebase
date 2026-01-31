'use client';

import CustomBorder from '@/features/shared/components/CustomBorder';

import Socials from '../navbar/Socials';

const ContactUs = () => {
  return (
    <div className='relative flex w-full flex-col lg:w-auto'>
      <div className='relative mb-[25px] w-fit md:mb-[35px] lg:mb-[40px]'>
        <p className='text-[12px] font-bold sm:text-[14px] md:text-[15px] lg:text-[16px]'>
          تابعنا من خلال :
        </p>
        <CustomBorder className='!flex !w-[65%] !gap-1 !bg-secondary' classNameInner='bg-neutral' />
      </div>
      <div className='flex w-full max-w-full flex-col items-start justify-start gap-4 md:gap-5 lg:max-w-[232px] lg:gap-6'>
        <Socials />
      </div>
    </div>
  );
};

export default ContactUs;
