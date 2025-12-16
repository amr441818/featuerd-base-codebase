'use client';

import { toast } from 'react-toastify';

export const clientErrorHandling = (error: any) => {
  const pathParts = window.location.pathname.split('/');
  const lang = pathParts[1] || 'en';
  const callbackUrl = encodeURIComponent(window.location.href);

  if (error?.status === 401) {
    window.location.href = `/${lang}/login?callbackUrl=${callbackUrl}`;
    return;
  }

  toast.error(error?.data?.message || error?.message || 'Unexpected error');
};
