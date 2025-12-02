'use server';

import { cookies } from 'next/headers';

import { getServerSession } from 'next-auth';

import { authOptions } from '@/features/auth';
import { AuthResponse } from '@/features/shared/types/global copy';

export const GetUSer = async () => {
  const userData = (await getServerSession(authOptions)) as AuthResponse | null;
  const cookieStore = cookies();

  const lang = cookieStore.get('NEXT_LOCALE')?.value || 'en';

  const token = userData?.accessToken ?? null;

  const headers: Record<string, string> = {
    'Accept-Language': lang,
  };

  if (token) headers.Authorization = `Bearer ${token}`;

  return {
    headers,
    token,
    lang,
    user: userData?.user ?? null,
  };
};
