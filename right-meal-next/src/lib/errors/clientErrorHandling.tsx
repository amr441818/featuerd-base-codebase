'use client';

import { signOut } from 'next-auth/react';
import { toast } from 'react-toastify';

export const clientErrorHandling = async (error: any) => {
  const pathParts = window.location.pathname.split('/');
  const lang = pathParts[1] || 'en';
  const callbackUrl = encodeURIComponent(window.location.href);

  if (error?.status === 401) {
    await signOut();
    window.location.href = `/${lang}/login?callbackUrl=${callbackUrl}`;
    return;
  }

  toast.error(error?.data?.message || error?.message || 'Unexpected error');
};
