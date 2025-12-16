'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const serverErrorHandling = async (error: any) => {
  const cookieStore = await cookies();
  const lang = cookieStore.get('NEXT_LOCALE')?.value || 'en';

  if (error?.status === 401) {
    redirect(`/${lang}/login`);
  }

  throw error;
};
