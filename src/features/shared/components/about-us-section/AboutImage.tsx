import React from 'react';

import Image from 'next/image';

const AboutImage = () => {
  return (
    <div className='relative'>
      <div className='relative h-[350px] w-[310px] sm:h-[450px] sm:w-[400px] md:h-[500px] md:w-[450px] lg:h-[548px] lg:w-[502px]'>
        <Image
          src='/images/about-sec.svg'
          alt='about...'
          fill
          className='z-[2] rounded-tl-[30px] rounded-tr-[30px] object-contain sm:rounded-tl-[35px] sm:rounded-tr-[35px] lg:rounded-tl-[40px] lg:rounded-tr-[40px]'
        />
        <div className='absolute bottom-[1px] left-0 z-[1] h-[320px] w-full rounded-tl-[70px] rounded-tr-[70px] bg-primary sm:h-[360px] sm:rounded-tl-[85px] sm:rounded-tr-[85px] md:h-[420px] lg:h-[499px] lg:rounded-tl-[100px] lg:rounded-tr-[100px]' />
      </div>
    </div>
  );
};

export default AboutImage;
