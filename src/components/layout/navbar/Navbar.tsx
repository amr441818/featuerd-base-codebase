'use client';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { useLocale, useTranslations } from 'next-intl';

import { Container } from '@/features/shared';
import { CompanyUserI } from '@/features/shared/types/user';

import AsideMenu from './AsideMenu';
import CustomSearch from './CustomSearch';
import LoginButtons from './LoginButtons';
import NavbarItemsLinks from './NavbarItemsLinks';
import UserProfile from './UserProfile';

type MenuItem = {
  value: string;
  path: string;
};
interface NavbarProps {
  logo?: string;
  token?: string;
  profileData?: CompanyUserI;
}
const Navbar = ({ logo, token, profileData }: NavbarProps) => {
  const locale = useLocale();
  const [open, setOpen] = useState(false);
  const t = useTranslations('navbarFooter');
  const menuItems: MenuItem[] = [
    { value: t('home'), path: '/' },
    { value: t('about'), path: '/about' },
    { value: t('latestPosts'), path: '/latest-posts' },
    { value: t('opportunities'), path: '/opportunities' },
    { value: t('companies'), path: '/companies' },
  ];

  return (
    <>
      <Container>
        <nav className='z-[999] mx-auto mt-[30px] flex h-[140px] max-w-[1088px] flex-col items-center justify-center gap-2 rounded-[27px] bg-gradient-to-r from-[#62C483] to-[#006838] sm:h-[116px] sm:flex-row'>
          <Link href={`/${locale}`} className='sm:hidden'>
            <Image
              src={logo || '/images/Linkora_logo.svg'}
              alt='logo'
              width={160}
              height={56}
              className='h-[56px] w-[160px] object-contain'
              priority
            />
          </Link>

          <div className='flex w-full items-center justify-between gap-2 px-4 lg:px-5 xl:px-[30px]'>
            <Link href={`/${locale}`} className='hidden sm:block'>
              <Image
                src={logo || '/images/Linkora_logo.svg'}
                alt='logo'
                width={160}
                height={56}
                className='h-[56px] w-[160px] object-contain'
                priority
              />
            </Link>
            <NavbarItemsLinks menuItems={menuItems} />
            {token ? (
              <div className='flex items-center gap-4 sm:gap-2 md:gap-4'>
                <UserProfile profileData={profileData} />
                <Link href={`/${locale}/notifications`} className='relative'>
                  <Image
                    src='/images/Notification.svg'
                    alt='Notification icon'
                    width={22}
                    height={24}
                    className='cursor-pointer'
                  />
                  {(profileData?.unreadCount ?? 0) > 0 && (
                    <span className='absolute right-[-5px] top-[-50%] flex h-5 w-5 items-center justify-center rounded-full bg-[#FFFFFF] text-[#53B678]'>
                      {profileData?.unreadCount}
                    </span>
                  )}
                </Link>
              </div>
            ) : (
              <LoginButtons />
            )}
            <div className='flex items-center gap-1 sm:gap-2 md:gap-[15px]'>
              {/* <Language /> */}
              <CustomSearch />
              <AsideMenu
                open={open}
                menuItems={menuItems}
                setOpen={setOpen}
                iconColor='black'
                lang={locale}
              />
            </div>
          </div>
        </nav>
      </Container>
    </>
  );
};

export default Navbar;
