import type { Metadata } from 'next';

import ContactUsForm from '@/features/contact-us/components/ContactUsForm';
import Community from '@/features/home/components/Community';
import Companies from '@/features/home/components/Companies';
import Gallery from '@/features/home/components/Gallery';
import Managers from '@/features/home/components/Managers/Managers';
import SupportSection from '@/features/home/components/SupportSection';
import AboutSection from '@/features/shared/components/about-us-section/AboutSection';

export const metadata: Metadata = {
  title: 'Implant - Home',
  description: 'Your premier destination for beauty clinics and beauty salons.',
};

export default async function Home() {
  return (
    <div className=''>
      <div className='h-[600px] w-full border-b border-gray-200 bg-neutral'></div>
      <AboutSection />
      <SupportSection />
      <Managers />
      <Community />
      <Companies />
      <Gallery />
      <ContactUsForm />
    </div>
  );
}
