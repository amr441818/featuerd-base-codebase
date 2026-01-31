'use client';

import { useForm } from 'react-hook-form';

import { Container } from '@/features/shared';
import CustomButton from '@/features/shared/components/formInputs/CustomButton';
import CustomInput from '@/features/shared/components/formInputs/CustomInput';

import DecorationsSupport from './DecorationsSupport';

const SupportSection = () => {
  const { register } = useForm();
  return (
    <section className='relative mb-12 h-full min-h-[350px] w-full overflow-hidden bg-secondary py-12 lg:mb-[100px] lg:min-h-[486px] lg:pb-[85px] lg:pt-[98px]'>
      <DecorationsSupport />
      <Container>
        <div className='mx-auto flex w-full flex-col items-center justify-center px-4 text-center md:px-0'>
          <h4 className='max-w-[729px] text-center text-xl font-medium tracking-[-0.5px] text-white md:text-2xl lg:text-[30px] lg:tracking-[-2px]'>
            ساهم معنا وكن سببآ للخير , تبرعك يصنع فرقآ حقيقيآ
          </h4>
          <p className='mt-4 max-w-[475px] text-center text-sm font-normal leading-relaxed tracking-[-0.5px] text-white lg:mt-[15px] lg:text-[16px] lg:leading-[2.13] lg:tracking-[-2px]'>
            تبرعك يساعدنا على الوصول لمن يحتاج الدعم بشكل أسرع وأكثر تأثيرآ
          </p>
          <CustomInput
            type='text'
            placeholder='أدخل مبلغ التبرع'
            name='donationAmount'
            register={register}
            className='mt-6 w-full !max-w-[520px] border-white !bg-transparent !p-[10px] !text-white placeholder:text-xs placeholder:text-white lg:mt-[35px] lg:placeholder:text-sm'
          />
          <CustomButton
            bgColor='bg-white'
            className='mt-6 w-full max-w-[520px] text-sm font-medium !text-secondary lg:mt-[35px]'
          >
            الدفع
          </CustomButton>
        </div>
      </Container>
    </section>
  );
};

export default SupportSection;
