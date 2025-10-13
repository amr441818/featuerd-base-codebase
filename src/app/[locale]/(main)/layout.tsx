import Footer from '@/components/layout/footer/Footer';
import Navbar from '@/components/layout/navbar/Navbar';
import { ReactNode } from 'react';

export default function MainLayout({ children }:{children:ReactNode}) {
  return (
    <div className='flex min-h-screen flex-col'>
      <Navbar />
      <main className='flex-grow'>{children}</main>
                 <Footer />
    </div>
  );
}
