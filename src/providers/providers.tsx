'use client';

import { DirectionProvider } from '@radix-ui/react-direction';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import { PhotoProvider } from 'react-photo-view';

import queryClient from '@/lib/reactQueryClient';

const Providers = ({ children, locale }: { children: React.ReactNode; locale: string }) => {
  return (
    <PhotoProvider>
      <DirectionProvider dir={locale === 'ar' ? 'rtl' : 'ltr'}>
        <QueryClientProvider client={queryClient}>
          {children}
          <Toaster position='top-center' reverseOrder={false} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </DirectionProvider>
    </PhotoProvider>
  );
};

export default Providers;
