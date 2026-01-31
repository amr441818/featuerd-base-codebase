'use client';

import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import CustomSectionHeader from '@/features/shared/components/CustomSectionHeader';
import FormRenderer from '@/features/shared/components/FormRender';
import CustomButton from '@/features/shared/components/formInputs/CustomButton';

import { Card } from '@/components/ui/card';

import CallIcon from '../../../../public/assets/icons/CallIcon';
import EmailIcon from '../../../../public/assets/icons/EmailIcon';
import { useFieldContacts } from '../hooks/useFieldContacts';
import ContactInfoItem from './ContactInfoItem';
import MapComponent from './MapComponent';

const contactSchema = z.object({
  mobile: z.string().min(11, 'رقم الجوال يجب أن يكون 11 رقمًا'),
  name: z.string().min(6, 'الاسم يجب أن يكون 6 أحرفًا على الأقل'),
  email: z.string().email('البريد الإلكتروني غير صحيح'),
  message: z.string().min(10, 'الرسالة يجب أن تكون 10 أحرفًا على الأقل'),
});

const ContactUsForm = () => {
  const fields = useFieldContacts();
  const formProps = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', mobile: '', email: '', message: '' },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <Card className='lg:animate-duration-[2000ms] lg:animate-delay-[500ms] relative z-20 mx-auto mb-[-100px] flex w-full max-w-[calc(100%-20px)] flex-col items-end justify-center !rounded-[35px] bg-white px-[20px] py-[30px] sm:max-w-xs sm:px-[30px] sm:py-[40px] md:max-w-2xl md:px-[40px] md:py-[45px] lg:max-w-[900px] lg:animate-fade-down lg:px-[52px] lg:py-[50px] xl:max-w-[1030px]'>
      <CustomSectionHeader
        title='إتصل بنا'
        desc='سكون فريقنا متواجد على مدار ال 24 ساعة للتواصل معكم والرد على جميع 
إستفساراتكم عن الشحنات الخاصة بكم وتلقى الدعم الكامل .'
        isCenter={false}
        isContact={true}
      />
      <div className='mt-[20px] flex w-full flex-col items-start justify-center gap-4 md:mt-[25px] md:gap-5 lg:flex-row'>
        <form onSubmit={formProps.handleSubmit(onSubmit)} className='flex w-full flex-col'>
          <FormRenderer fields={fields} form={formProps} />
          <CustomButton
            className='mt-[20px] w-full !max-w-full md:mt-[30px] lg:!max-w-[448px]'
            type='submit'
          >
            إرسال
          </CustomButton>
        </form>
        <div className='contact-info flex w-full flex-col items-center justify-center gap-2 md:gap-2.5'>
          <ContactInfoItem icon={<CallIcon />} title='أرقام التواصل'>
            <span>0966 2415 5478 954</span>
            <span>0966 2415 5478 954</span>
          </ContactInfoItem>
          <ContactInfoItem icon={<EmailIcon />} title='البريد الإلكتروني'>
            <span>GAMAIA87@gmail.com</span>
          </ContactInfoItem>
          <div className='h-[120px] w-full md:h-[140px] lg:h-[166px]'>
            <MapComponent />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ContactUsForm;
