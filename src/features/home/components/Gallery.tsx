import React from 'react';

import Image from 'next/image';

import { Container } from '@/features/shared';
import CustomSectionHeader from '@/features/shared/components/CustomSectionHeader';

const Gallery = () => {
  return (
    <section>
      <Container>
        <CustomSectionHeader
          isPublic={true}
          isCenter={false}
          title='معرض الصور'
          desc='نعرض لكم مجموعة من الصور الخاصة بجمعيتنا'
        />

        <div className='mb-[100px] mt-[30px] grid grid-cols-1 gap-4 sm:gap-6 md:grid-flow-col md:grid-cols-3 md:grid-rows-2'>
          {/* Column 1 - Top */}
          <div className='relative h-[250px] w-full overflow-hidden rounded-xl md:h-[280px] lg:h-[312px]'>
            <Image
              src='/images/gallery-1.svg'
              alt='gallery 1'
              fill
              className='object-cover transition-transform duration-300 hover:scale-110'
            />
          </div>
          {/* Column 1 - Bottom */}
          <div className='relative h-[250px] w-full overflow-hidden rounded-xl md:h-[280px] lg:h-[312px]'>
            <Image
              src='/images/gallery-2.svg'
              alt='gallery 2'
              fill
              className='object-cover transition-transform duration-300 hover:scale-110'
            />
          </div>

          {/* Column 2 - Center (Large) */}
          <div className='relative h-[350px] w-full overflow-hidden rounded-xl md:row-span-2 md:h-auto'>
            <Image
              src='/images/gallery-3.svg'
              alt='gallery 3'
              fill
              className='object-cover transition-transform duration-300 hover:scale-110'
            />
          </div>

          {/* Column 3 - Top */}
          <div className='relative h-[250px] w-full overflow-hidden rounded-xl md:h-[280px] lg:h-[312px]'>
            <Image
              src='/images/gallery-4.svg'
              alt='gallery 4'
              fill
              className='object-cover transition-transform duration-300 hover:scale-110'
            />
          </div>
          {/* Column 3 - Bottom */}
          <div className='relative h-[250px] w-full overflow-hidden rounded-xl md:h-[280px] lg:h-[312px]'>
            <Image
              src='/images/gallery-5.svg'
              alt='gallery 5'
              fill
              className='w-full object-cover transition-transform duration-300 hover:scale-110'
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Gallery;
