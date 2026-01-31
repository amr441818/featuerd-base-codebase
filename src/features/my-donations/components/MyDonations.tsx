import Image from 'next/image';

import CustomSectionHeader from '@/features/shared/components/CustomSectionHeader';

const MyDonations = () => {
  return (
    <section className=''>
      <CustomSectionHeader
        title='إجمالى التبرعات'
        desc='إليك إجمالى التبرعات التى قمت بتقديمها للجمعية'
      />
      <div className='animate-duration-[1000ms] animate-delay-[700ms] relative mt-4 h-[160px] w-full animate-fade-up lg:mt-5 lg:h-[217px]'>
        <Image
          src={'/images/my-donations.svg'}
          alt='my-donations'
          fill
          className='object-contain'
        />
      </div>
      <div className='animate-duration-[1000ms] animate-delay-[600ms] mx-auto mt-4 flex w-full max-w-[250px] animate-fade-up items-center justify-center rounded-[10px] bg-white py-6 lg:mt-[15px] lg:max-w-[307px] lg:py-[40px]'>
        <span className='text-[24px] font-bold text-secondary lg:text-[30px]'>14,500</span>
      </div>
    </section>
  );
};

export default MyDonations;
