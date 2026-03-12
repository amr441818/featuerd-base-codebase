'use client';

import React, { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { ChevronDown } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';

import { CompanyUserI } from '@/features/shared/types/user';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

import DeleteAccount from './DeleteAccount';
import LogoutModal from './LogoutModal';

interface MenuItems {
  label: string;
  icon: string;
  link: string;
}
interface UserProfileProps {
  profileData?: CompanyUserI;
}
const UserProfile = ({ profileData }: UserProfileProps) => {
  const locale = useLocale();
  const t = useTranslations('navbarFooter');
  const [openModal, setOpenModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openPopover, setOpenPopover] = useState(false);

  const menuItems: MenuItems[] = [
    {
      label: t('profile'),
      icon: '/images/userIcon.svg',
      link: `/${locale}/profile`,
    },
    {
      label: t('chats'),
      icon: '/images/messagesIcon.svg',
      link: `/${locale}/chats`,
    },
    {
      label: t('EditProfile'),
      icon: '/images/editUserIcon.svg',
      link: `/${locale}/edit-profile`,
    },
    {
      label: t('EditPassword'),
      icon: '/images/editPassIcon.svg',
      link: `/${locale}/edit-password`,
    },
  ];
  return (
    <>
      <div className='z-[10] flex h-[55px] max-w-[243px] items-center justify-center rounded-[19px] bg-[#FFFFFF]/[0.15] px-3'>
        <Image
          src={profileData?.company?.profile_image_url || '/images/blankProfile.png'}
          alt='User Profile'
          width={38}
          height={38}
          className='me-[7px] h-[25px] w-[25px] rounded-full bg-[#FFFFFF] p-1 lg:h-[45px] lg:w-[45px]'
        />

        <div className='mx-[7px] flex flex-col items-start justify-start gap-1 text-[12px] text-[#43316E] sm:text-[16px] md:font-bold'>
          <p className='text-[10px] text-[#FFFFFF]'>{t('greeting')}</p>
          <p className='shrink-0 text-[10px] font-bold text-[#FFFFFF] md:text-[12px]'>
            {profileData?.company?.username
              ? profileData.company.username.length > 12
                ? profileData.company.username.slice(0, 12) + '...'
                : profileData.company.username
              : ''}
          </p>
        </div>
        <Popover open={openPopover} onOpenChange={setOpenPopover}>
          <PopoverTrigger>
            <ChevronDown className='h-6 w-6 text-[#FFFFFF]' />
          </PopoverTrigger>
          <PopoverContent
            className={`relative z-[9999] ${
              locale === 'ar' ? 'left-14 md:left-[80px]' : 'right-14 md:right-[80px]'
            } top-3 flex w-[180px] flex-col items-center justify-center gap-[27px] rounded-[0_0_17px_17px] bg-white px-2 py-[29px] text-[12px] text-[#909090] shadow-[_0px_0px_60px_#00000029] md:w-[220px] md:px-3 md:text-[14px]`}
          >
            {menuItems.map((item, index) => (
              <Link
                href={item.link}
                className='flex w-full items-center justify-between gap-1 md:gap-[10px]'
                key={index}
                onClick={() => setOpenPopover(false)}
              >
                <div className='flex w-full items-center justify-start gap-1 md:gap-[10px]'>
                  <Image
                    src={item.icon}
                    alt={`${item.label} icon`}
                    width={20}
                    height={20}
                    className='h-[16px] w-[16px] md:h-[20px] md:w-[20px]'
                  />
                  <span>{item.label}</span>
                </div>
                <Image
                  src='/images/arrow-right.svg'
                  alt={` arrow-right icon`}
                  width={20}
                  height={20}
                  className={`${
                    locale === 'en' ? 'rotate-180' : 'h-[16px] w-[16px] md:h-[20px] md:w-[20px]'
                  }`}
                />
              </Link>
            ))}

            <button
              className='mt-2 flex w-full items-center justify-start gap-2 md:mt-4'
              onClick={() => {
                setOpenModal(true);
                setOpenPopover(false);
              }}
            >
              <Image
                src='/images/logoutIcon.svg'
                alt='Logout icon'
                width={20}
                height={20}
                className='h-[16px] w-[16px] md:h-[20px] md:w-[20px]'
              />
              <span className='text-[12px] text-[#F91818]'>{t('logout')}</span>
            </button>
            <button
              className='flex w-full items-center justify-start gap-2'
              onClick={() => {
                setOpenDeleteModal(true);
                setOpenPopover(false);
              }}
            >
              <Image
                src='/images/deleteAccountIcon.svg'
                alt='Logout icon'
                width={20}
                height={20}
                className='h-[16px] w-[16px] md:h-[20px] md:w-[20px]'
              />
              <span className='text-[12px] text-[#F91818]'>{t('deleteAccount')}</span>
            </button>
          </PopoverContent>
        </Popover>
      </div>
      {openModal && <LogoutModal setOpenModal={setOpenModal} />}
      {openDeleteModal && <DeleteAccount setOpenDeleteModal={setOpenDeleteModal} />}
    </>
  );
};

export default UserProfile;
