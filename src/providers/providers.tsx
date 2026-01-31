'use client';

import { DirectionProvider } from '@radix-ui/react-direction';
import { QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { PhotoProvider } from 'react-photo-view';

import queryClient from '@/lib/reactQueryClient';

const Providers = ({ children, locale }: { children: React.ReactNode; locale: string }) => {
  return (
    <PhotoProvider>
      <DirectionProvider dir={locale === 'ar' ? 'rtl' : 'ltr'}>
        <SessionProvider>
          <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </SessionProvider>
      </DirectionProvider>
    </PhotoProvider>
  );
};

export default Providers;
