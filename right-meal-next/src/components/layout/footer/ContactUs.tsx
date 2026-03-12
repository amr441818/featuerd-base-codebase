'use client';

import React from 'react';

import { Copyright } from 'lucide-react';

import Socials from '../navbar/Socials';

const ContactUs = () => {
  return (
    <div className='z-[2] grid grid-cols-1'>
      <p className='mb-[22px] text-[13px] font-bold'>تابعنا عبر الوسائل التالية</p>
      <div className='flex flex-col items-start justify-start gap-6'>
        <Socials />
        <p className='flex items-center gap-2 text-[12px] font-normal'>
          {' '}
          <Copyright size={14} /> جميع الحقوق محفوظة - LINKORA 2025
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
