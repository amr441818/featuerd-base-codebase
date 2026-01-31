'use client';

import Link from 'next/link';

import { Container } from '@/features/shared';
import CustomCardAuth from '@/features/shared/components/CustomCardAuth';
import FormRenderer from '@/features/shared/components/FormRender';
import CustomButton from '@/features/shared/components/formInputs/CustomButton';

import { CardBody } from '@/components/ui/card';

import { useAuth, useFields } from '../../hooks';

export function SignIn() {
  const { isLoading, formProps, onSubmit } = useAuth();
  const { loginFields } = useFields();
  const fields = loginFields();

  return (
    <Container>
      <CustomCardAuth title='تسجيل الدخول' desc='من فضلك قم بإدخال البيانات لتسجيل الدخول'>
        <form
          className='animate-duration-[1000ms] animate-delay-[700ms] flex w-full animate-fade-up flex-col items-center justify-center'
          onSubmit={formProps.handleSubmit(onSubmit)}
        >
          <CardBody className='!w-full'>
            <div className='animate-duration-[1000ms] animate-delay-[200ms] animate-fade-left'>
              <FormRenderer fields={fields} form={formProps} />
            </div>
          </CardBody>
          <div className='animate-duration-[1000ms] animate-delay-[200ms] flex !w-full animate-fade-right flex-col items-center justify-center'>
            <CustomButton className='mt-[15px] lg:mt-[35px]' type='submit' disabled={isLoading}>
              {isLoading ? 'تسجيل الدخول...' : 'تسجيل الدخول'}
            </CustomButton>
            <Link href='/register'>
              <p className='mt-[25px] text-center text-[14px] font-light text-muted lg:mt-[55px]'>
                ليس لديك حساب؟ <span className='font-normal text-neutral'>انشاء حساب جديد</span>
              </p>
            </Link>
          </div>
        </form>
      </CustomCardAuth>
    </Container>
  );
}
