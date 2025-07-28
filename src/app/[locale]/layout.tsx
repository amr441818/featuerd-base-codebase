import './globals.css'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { Inter } from 'next/font/google'
import myCustomFont from '../../../public/fonts/MyCustomFont'
import Providers from '@/providers/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next.js Feature-Based App',
  description: 'Created with the Next.js feature-based structure',
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: Promise<{ locale: string }> 
}) {
  const { locale } =  await params;

  const messages = (await import(`/messages/${locale}.json`)).default;
console.log(messages, "messagesmessages")
  return (
    <html lang={locale} dir="rtl">
      <body className={locale === 'ar' ? myCustomFont.className :inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages} >
          <Providers locale={locale}>
{children}
          </Providers>
          
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
