'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { Container } from '@/features/shared';

import ContactUs from './ContactUs';
import Logo from './Logo';
import MainLinks from './MainLinks';

const Footer = () => {
  const pathname = usePathname();

  // Handle locale prefix (e.g., /en/contact-us -> /contact-us, /en -> /)
  const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, '') || '/';

  const isContactPage = pathWithoutLocale === '/contact-us';
  const isHomePage = pathWithoutLocale === '/';

  const isContactOrHome = isContactPage || isHomePage;
  return (
    <footer className='relative w-full overflow-hidden rounded-tl-[30px] rounded-tr-[30px] bg-secondary text-white md:rounded-tl-[100px] md:rounded-tr-[100px] lg:rounded-tl-[150px] lg:rounded-tr-[150px]'>
      <Image
        src='/images/footer-frame.svg'
        alt='footer-bg'
        className={`absolute left-0 h-full w-full object-fill ${isContactOrHome ? 'bottom-[-315px] md:bottom-[-265px] lg:bottom-[-180px]' : 'bottom-[-260px] md:bottom-[-230px] lg:bottom-[-150px]'} `}
        width={800}
        height={800}
      />
      <Container
        className={`relative grid grid-cols-1 justify-items-center gap-3 pb-[30px] md:grid-cols-2 md:gap-4 md:pb-[50px] lg:grid-cols-3 lg:gap-6 lg:pb-[82px] ${isContactOrHome ? 'pt-[120px] md:pt-[140px] lg:pt-[150px]' : 'pt-[30px] md:pt-[50px] lg:pt-[82px]'}`}
      >
        <Logo />
        <MainLinks />
        <ContactUs />
      </Container>
    </footer>
  );
};

export default Footer;
