'use server';

import { cookies } from 'next/headers';

import { getServerSession } from 'next-auth';

import { authOptions } from '@/features/auth';

import { AuthResponse } from '@/types/global copy';

export const GetUSer = async () => {
  const userData = (await getServerSession(authOptions)) as AuthResponse | null;
  const cookieStore = await cookies();

  const lang = cookieStore.get('NEXT_LOCALE')?.value || 'en';

  const token = userData?.accessToken ?? null;
  const system_id = userData?.system_id ?? null;

  const headers: Record<string, string> = {
    'Accept-Language': lang,
  };

  if (token) headers.Authorization = `Bearer ${token}`;
  if (system_id) headers['system-id'] = system_id;

  return {
    headers,
    token,
    lang,
    user: userData?.user ?? null,
  };
};
