import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Providers from '@/providers/providers';
import { NextIntlClientProvider } from 'next-intl';

import LayoutWrapper from '@/features/shared/components/WrapperLayout';

import Footer from '@/components/layout/footer/Footer';
import Navbar from '@/components/layout/navbar/Navbar';

import montserratArabic from '../../../public/fonts/montserrat-arabic';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Next.js Feature-Based App',
  description: 'Created with the Next.js feature-based structure',
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Only attempt to load messages if it's a valid locale
  const locales = ['en', 'ar'];
  if (!locales.includes(locale)) {
    return null;
  }

  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    return null;
  }

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className={locale === 'ar' ? montserratArabic.className : inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers locale={locale}>
            <Navbar />
            <LayoutWrapper>
              {children}

              <Footer />
            </LayoutWrapper>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
