'use client';

import React from 'react';

import Link from 'next/link';

import { useLocale, useTranslations } from 'next-intl';

import CustomBorder from '@/features/shared/components/CustomBorder';

const MainLinks = () => {
  const locale = useLocale();
  const t = useTranslations('navbarFooter');
  const mainLinks: Record<string, string>[] = [
    { value: 'نبذة عنا ', path: '/' },
    { value: 'شركاؤنا', path: '/services' },
    { value: 'معرض الصور', path: '/#about' },
    { value: 'أرقامنا', path: '/news' },
    { value: 'إتصل بنا', path: '/#why' },
    { value: 'الشروط والأحكام', path: '/#partners' },
  ];
  return (
    <div className='relative flex w-full flex-col lg:w-auto'>
      <div className='relative mb-[25px] w-fit md:mb-[35px] lg:mb-[40px]'>
        <p className='text-[12px] font-bold sm:text-[14px] md:text-[15px] lg:text-[16px]'>
          {t('title')}
        </p>
        <CustomBorder className='!flex !w-[65%] !gap-1 !bg-secondary' classNameInner='bg-neutral' />
      </div>
      <div className='grid grid-cols-2 gap-x-[20px] gap-y-[8px] md:gap-x-[50px] md:gap-y-[10px] lg:gap-x-[74px]'>
        {mainLinks.map((link, index) => (
          <Link
            key={index}
            href={`/${locale}${link.path}`}
            className='text-[10px] font-normal sm:text-[11px] md:text-[12px] lg:text-[14px]'
          >
            {link.value}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainLinks;
