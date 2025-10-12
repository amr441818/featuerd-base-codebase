import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Providers from '@/providers/providers';
import { NextIntlClientProvider } from 'next-intl';

import myCustomFont from '../../../public/fonts/MyCustomFont';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

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

  const messages = (await import(`/messages/${locale}.json`)).default;

  return (
    <html lang={locale} dir='rtl'>
      {' '}
      <body className={locale === 'ar' ? myCustomFont.className : inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers locale={locale}>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
