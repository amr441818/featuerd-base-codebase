import Image from 'next/image';

import { Container } from '@/features/shared';

import HeartCom from '../../../../public/assets/icons/HeartCom';
import MailCom from '../../../../public/assets/icons/MailCom';

const Community = () => {
  return (
    <section className='relative min-h-[350px] w-full overflow-hidden py-10 sm:py-12 md:py-16 lg:min-h-[579px] lg:py-[140px]'>
      <Image src={'/images/hero-sec.jpg'} alt='bg' fill className='relative object-cover' />
      <div className='bg-gradient absolute inset-0'></div>
      <div className='absolute left-4 top-4 hidden scale-75 md:left-[28px] md:top-0 md:scale-100 lg:block'>
        <HeartCom />
      </div>
      <div className='absolute bottom-4 left-10 hidden scale-75 md:bottom-0 md:left-[149px] md:scale-100 lg:block'>
        <MailCom />
      </div>
      <Container>
        <div className='z-1 relative flex w-full flex-col items-center justify-center'>
          <h3 className='max-w-full px-4 text-center text-lg font-medium leading-relaxed text-white sm:text-xl sm:leading-normal md:max-w-[729px] md:px-0 md:text-2xl md:leading-[2.13] md:tracking-[-1.5px] lg:text-[30px] lg:tracking-[-2px]'>
            إنضم إلى مجتمعنا من المتبرعين والمتطوعين: كن جزءًا من التغيير الإيجابي في العالم
          </h3>
          <div className='mt-6 flex w-full flex-col items-center gap-4 sm:mt-8 sm:gap-5 md:mt-[50px] md:w-auto md:flex-row md:gap-[39px]'>
            <div className='sm-card flex w-full max-w-[276px] flex-col items-center justify-center gap-2 rounded-[10px] bg-[#FFFFFF]/[0.20] px-5 py-3 text-white sm:gap-[8px] sm:px-6 sm:py-4 md:w-auto md:px-[38px] md:py-[15px]'>
              <span className='text-center text-sm font-bold text-white sm:text-base md:text-[18px] md:tracking-[-1.5px] lg:tracking-[-2px]'>
                عدد المتبرعين
              </span>
              <span className='text-center font-inter text-xl font-bold sm:text-2xl md:text-[28px] lg:text-[30px]'>
                112,3O7 +
              </span>
            </div>
            <div className='sm-card flex w-full max-w-[276px] flex-col items-center justify-center gap-2 rounded-[10px] bg-[#FFFFFF]/[0.20] px-5 py-3 text-white sm:gap-[8px] sm:px-6 sm:py-4 md:w-auto md:px-[38px] md:py-[15px]'>
              <span className='text-center text-sm font-bold text-white sm:text-base md:text-[18px] md:tracking-[-1.5px] lg:tracking-[-2px]'>
                عدد مشاريع التبرع
              </span>
              <span className='text-center font-inter text-xl font-bold sm:text-2xl md:text-[28px] lg:text-[30px]'>
                910 +
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Community;
