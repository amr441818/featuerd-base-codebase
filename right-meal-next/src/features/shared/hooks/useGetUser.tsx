'use client';

import { useMemo } from 'react';

import { useSession } from 'next-auth/react';
import { useLocale } from 'next-intl';

export const useGetUser = () => {
  //get data from session
  const { status, data } = useSession();
  const lang = useLocale();

  const isAuthenticated = status === 'authenticated';

  const userData = useMemo(() => {
    const token = data?.accessToken || null;

    // Base headers (always for all requests)
    const headers: Record<string, string> = {
      'Accept-Language': lang,
    };

    // Add auth-only headers
    if (isAuthenticated && token) {
      headers.Authorization = `Bearer ${token}`;
    }

    return {
      headers,
      token,
      user: data?.user ?? null,
      lang,
    };
  }, [data, lang, isAuthenticated]);

  return {
    headers: userData.headers,
    lang: userData.lang,
    user: userData.user,
    token: userData.token,
    isAuthenticated,
    status,
  };
};
