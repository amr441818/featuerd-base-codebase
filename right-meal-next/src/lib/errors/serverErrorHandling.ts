'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const serverErrorHandling = async (error: any) => {
  const cookieStore = await cookies();
  const lang = cookieStore.get('NEXT_LOCALE')?.value || 'en';

  if (error?.status === 401) {
    cookieStore.delete('next-auth.session-token');
    cookieStore.delete('__Secure-next-auth.session-token');
    redirect(`/${lang}/login`);
  }

  throw error;
};
