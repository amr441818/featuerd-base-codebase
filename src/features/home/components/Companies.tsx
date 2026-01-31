import React from 'react';

import Image from 'next/image';

import { Container } from '@/features/shared';

const Companies = () => {
  return (
    <section className='mb-8 h-auto min-h-[180px] bg-[#D9F3FF] py-8 sm:mb-10 sm:py-10 md:mb-12 md:min-h-[200px] md:py-12 lg:mb-[100px] lg:min-h-[278px] lg:py-[77px]'>
      <Container>
        <div className='flex w-full flex-col items-center justify-center'>
          <h4 className='px-4 text-center text-lg font-medium tracking-[-0.3px] text-secondary sm:text-xl sm:tracking-[-0.5px] md:px-0 md:text-2xl md:tracking-[-1px] lg:text-[30px] lg:tracking-[-2px]'>
            أكثر من 20,000 شركة حول العالم تثق بنا
          </h4>
          <div className='mt-6 grid w-full grid-cols-2 justify-items-center gap-6 sm:mt-8 sm:gap-8 md:grid-cols-3 md:gap-10 lg:mt-[40px] lg:grid-cols-5 lg:gap-[70px]'>
            <Image
              src={'/images/company-1.svg'}
              alt='logo'
              width={220}
              height={40}
              className='h-[30px] w-[100px] sm:h-[35px] sm:w-[120px] md:h-[40px] md:w-[180px] lg:w-[220px]'
            />
            <Image
              src={'/images/company-2.svg'}
              alt='logo'
              width={220}
              height={40}
              className='h-[30px] w-[100px] sm:h-[35px] sm:w-[120px] md:h-[40px] md:w-[180px] lg:w-[220px]'
            />
            <Image
              src={'/images/company-3.svg'}
              alt='logo'
              width={220}
              height={40}
              className='h-[30px] w-[100px] sm:h-[35px] sm:w-[120px] md:h-[40px] md:w-[180px] lg:w-[220px]'
            />
            <Image
              src={'/images/company-4.svg'}
              alt='logo'
              width={220}
              height={40}
              className='h-[30px] w-[100px] sm:h-[35px] sm:w-[120px] md:h-[40px] md:w-[180px] lg:w-[220px]'
            />
            <Image
              src={'/images/company-5.svg'}
              alt='logo'
              width={220}
              height={40}
              className='h-[30px] w-[100px] sm:h-[35px] sm:w-[120px] md:h-[40px] md:w-[180px] lg:w-[220px]'
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Companies;
