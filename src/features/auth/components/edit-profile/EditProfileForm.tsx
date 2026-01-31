'use client';

import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Container } from '@/features/shared';
import CustomSectionHeader from '@/features/shared/components/CustomSectionHeader';
import FormRenderer from '@/features/shared/components/FormRender';
import CustomButton from '@/features/shared/components/formInputs/CustomButton';

import EditProfileIcon from '../../../../../public/assets/icons/EditProfileIcon';
import { useFields } from '../../hooks';

const signInSchema = z.object({
  mobile: z.string().min(11, 'رقم الجوال يجب أن يكون 11 رقمًا'),
  name: z.string().min(6, 'الاسم يجب أن يكون 6 أحرفًا على الأقل'),
});

const EditProfileForm = () => {
  const { editProfileFields } = useFields();
  const fields = editProfileFields();
  type SignInValues = z.infer<typeof signInSchema>;
  const formProps = useForm<SignInValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: { name: '', mobile: '' },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <Container>
      <CustomSectionHeader
        title='البيانات الشخصية'
        desc='قم بتعديل البيانات الشخصية الخاصة بك'
        icon={<EditProfileIcon />}
      />
      <form
        className='lg:animate-duration-[1500ms] lg:animate-delay-500 mx-auto mt-5 flex w-full max-w-[468px] flex-col items-center justify-center lg:mt-[40px] lg:animate-fade-up'
        onSubmit={formProps.handleSubmit(onSubmit)}
      >
        <div className='w-full'>
          <FormRenderer form={formProps} fields={fields} />
        </div>
        <CustomButton className='mt-4 w-full lg:mt-[20px]' type='submit'>
          حفظ و تعديل
        </CustomButton>
      </form>
    </Container>
  );
};

export default EditProfileForm;
