'use client';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { useLocale, useTranslations } from 'next-intl';

import { Container } from '@/features/shared';
import { CompanyUserI } from '@/features/shared/types/user';

import AsideMenu from './AsideMenu';
import CustomSearch from './CustomSearch';
import Language from './Language';
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
      <nav className='z-[999] fixed top-0 left-0 w-full mt-4 sm:mt-[30px] pointer-events-none flex justify-center'>
        <Container className="w-full pointer-events-auto px-4">
          <div className='flex w-full items-center justify-between'>
            {/* Unified Responsive Logo */}
            <Link href={`/${locale}`}>
              <Image
                src={logo || '/images/Rectangle 4601.svg'}
                alt='logo'
                width={68}
                height={85}
                className='h-[50px] w-auto sm:h-[85px] sm:w-[68px] object-contain'
                priority
              />
            </Link>

            {/* Actions & Menu Toggle */}
            <div className='flex items-center gap-2 md:gap-[15px]'>
              <button 
                onClick={() => setOpen(true)} 
                className="flex w-[48px] h-[48px] sm:w-[64px] sm:h-[64px] items-center justify-center bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]">
                  <path d="M1.25 10H18.75" stroke="#343B42" strokeWidth="1.86667" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M1.25 17.5H18.75" stroke="#343B42" strokeWidth="1.86667" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M1.25 2.5H18.75" stroke="#343B42" strokeWidth="1.86667" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <AsideMenu
                open={open}
                menuItems={menuItems}
                setOpen={setOpen}
                iconColor='black'
                lang={locale}
              />
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
