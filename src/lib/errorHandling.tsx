import { redirect } from 'next/navigation';

import { toast } from 'react-toastify';

type CustomError = {
  data?: { message?: string };
  message?: string;
  status?: number;
};

export const errorsHandling = (error: unknown, lang: string, client?: boolean) => {
  console.log(error, 'from');

  // Helper to check if it's our expected error structure
  const isCustomError = (err: unknown): err is CustomError => {
    return (
      typeof err === 'object' &&
      err !== null &&
      ('message' in err || 'data' in err || 'status' in err)
    );
  };

  // Get current path (for redirect)
  const currentPath =
    typeof window !== 'undefined' ? window.location.pathname + window.location.search : '/';
  const encodedCallbackUrl = encodeURIComponent(currentPath);

  if (isCustomError(error)) {
    if (error.status === 401) {
      if (client) {
        window.location.href = `/${lang}/login?callbackUrl=${encodedCallbackUrl}`;
      } else {
        redirect(`/${lang}/login?callbackUrl=${encodedCallbackUrl}`);
      }
    } else {
      if (client) {
        if (
          error.message === 'الرجاء تسجيل الدخول أولاً' ||
          error.message === 'please login first'
        ) {
          window.location.href = `/${lang}/login?callbackUrl=${encodedCallbackUrl}`;
        } else {
          toast.error(error?.message || error?.data?.message || 'Unknown error');
        }
      } else {
        throw error;
      }
    }
  } else {
    // fallback: unknown error type
    console.error('Unexpected error:', error);
    if (client) {
      toast.error('An unexpected error occurred');
    } else {
      throw error;
    }
  }
};
