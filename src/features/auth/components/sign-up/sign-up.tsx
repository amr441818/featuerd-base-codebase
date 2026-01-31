'use client';

import Link from 'next/link';

import { Container } from '@/features/shared';
import CustomCardAuth from '@/features/shared/components/CustomCardAuth';
import FormRenderer from '@/features/shared/components/FormRender';
import CustomButton from '@/features/shared/components/formInputs/CustomButton';

import { CardBody, CardFooter } from '@/components/ui/card';

import { useAuth, useFields } from '../../hooks';

export function SignUp() {
  const { isLoading, formProps, onSubmit } = useAuth();
  const { registerFields } = useFields();
  const fields = registerFields();

  return (
    <Container>
      <CustomCardAuth title='إنشاء حساب جديد' desc='من فضلك قم بإدخال البيانات لإنشاء حساب جديد'>
        <form
          className='flex w-full flex-col items-center justify-center'
          onSubmit={formProps.handleSubmit(onSubmit)}
        >
          <CardBody className='!w-full'>
            <div className='animate-duration-[1000ms] animate-delay-[200ms] animate-fade-right space-y-[10px]'>
              <FormRenderer fields={fields} form={formProps} />
            </div>
          </CardBody>
          <CardFooter className='animate-duration-[1000ms] animate-delay-[200ms] flex !w-full animate-fade-left flex-col items-center justify-center'>
            <CustomButton className='mt-[15px] lg:mt-[30px]' type='submit' disabled={isLoading}>
              {isLoading ? 'تسجيل حساب جديد...' : 'تسجيل حساب جديد'}
            </CustomButton>
            <Link href='/login'>
              <p className='mt-[25px] text-center text-[14px] font-light text-muted lg:mt-[55px]'>
                لديك حساب؟ <span className='font-normal text-neutral'>تسجيل الدخول</span>
              </p>
            </Link>
          </CardFooter>
        </form>
      </CustomCardAuth>
    </Container>
  );
}
