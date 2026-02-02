import { Container } from '@/features/shared';

import ContactUs from './ContactUs';
import Logo from './Logo';
import MainLinks from './MainLinks';

const Footer = () => {
  return (
    <footer className='overflow-hidden rounded-tl-[29px] rounded-tr-[29px] bg-primary text-primary-foreground'>
      <Container className='relative mb-[34px] mt-[60px] grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        <Logo />
        <MainLinks />
        <ContactUs />
      </Container>
    </footer>
  );
};

export default Footer;
