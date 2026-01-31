'use client';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { useLocale, useTranslations } from 'next-intl';

import { Container } from '@/features/shared';
import { CompanyUserI } from '@/features/shared/types/user';

import AsideMenu from './AsideMenu';
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
    { value: 'عن الجمعية', path: '/about' },
    { value: 'الحوكمة والشفافية', path: '/latest-posts' },
    { value: 'فرص تبرعات', path: '/opportunities' },
    { value: 'معرض الصور', path: '/companies' },
    { value: 'تواصل معنا', path: '/companies' },
  ];

  return (
    <>
      <Container className=''>
        <nav className='xs:py-2.5 xs:px-1.5 z-[999] mx-auto flex h-[100px] w-full items-center justify-between bg-white px-1 py-2 sm:px-2 sm:py-3 md:py-[13px]'>
          {/* Logo */}
          <div className='xs:gap-3 flex items-center gap-2 sm:gap-4 md:gap-[21px]'>
            <Link href={`/${locale}`} className='flex-1'>
              <div className='max-h-auto relative h-[75px] w-[162px] max-w-full'>
                <Image
                  src={logo || '/images/logo.svg'}
                  alt='logo'
                  fill
                  className='object-cover'
                  quality={95}
                  priority
                />
              </div>
            </Link>
            {/* Desktop Navigation Links */}
            <div className='hidden w-full flex-1 items-center justify-center lg:flex'>
              <NavbarItemsLinks menuItems={menuItems} />
            </div>
          </div>

          {/* Right Side - Login/Profile + Mobile Menu */}
          <div className='xs:gap-2 flex items-center gap-1.5 sm:gap-2.5 md:gap-3 lg:gap-4'>
            <Language />
            {token ? (
              <div className='hidden items-center gap-4 lg:flex'>
                <UserProfile profileData={profileData} />
              </div>
            ) : (
              <div className='hidden flex-1 lg:flex'>
                <LoginButtons />
              </div>
            )}

            {/* Mobile Menu Button */}
            <div className='lg:hidden'>
              <AsideMenu
                open={open}
                menuItems={menuItems}
                setOpen={setOpen}
                iconColor='black'
                lang={locale}
                token={token}
              />
            </div>
          </div>
        </nav>
      </Container>
    </>
  );
};

export default Navbar;
