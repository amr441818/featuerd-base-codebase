'use client';

import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { signIn as nextAuthSignIn, useSession } from 'next-auth/react';
import { useLocale, useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import z from 'zod';

export function useAuth() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const session = useSession();
  const [wrongPasswordError, setWrongPasswordError] = useState(false);
  const locale = useLocale();
  const t = useTranslations('auth.SignIn');
  const signInSchema = z.object({
    mobile: z.string(t('mobileRequired')).trim().min(1, t('mobileRequired')),
    password: z.string(t('passwordRequired')).min(6, t('passwordMin')),
  });
  type SignInValues = z.infer<typeof signInSchema>;
  const formProps = useForm<SignInValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: { mobile: '', password: '' },
  });

  const onSubmit = async (data: SignInValues) => {
    try {
      setIsLoading(true);
      setError(null);

      const result = await nextAuthSignIn('credentials', {
        mobile: data.mobile,
        password: data.password,
        locale: locale,
        redirect: false,
      });
      console.log(result, 'result from useAuth');
      if (!result?.ok) {
        console.log(result, 'frm signin');

        // Check if profile is incomplete and needs completion
        if (result?.error?.startsWith('INCOMPLETE_PROFILE:')) {
          // const parts = result.error.split(':');
          // const tempToken = parts[1];
          // const expiresIn = parseInt(parts[2], 10) || 3600;

          // Store the temp token
          // await setSellerTempToken(tempToken, expiresIn);

          // Show message to user
          toast.success(t('completeProfileMessage'));

          // Redirect to complete-profile page
          window.location.href = `/${locale}/complete-profile`;
          return;
        }

        if (result?.error === 'بيانات التسجيل غير صالحة') {
          setWrongPasswordError(true);
        } else {
          setWrongPasswordError(false);
        }
        toast.error(result?.error || 'Failed to sign in');
        return;
      }

      toast.success(t('successMessage'));

      window.location.href = '/';
      console.log(session, 'session from useAuth');

      return result;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    wrongPasswordError,
    error,
    formProps,
    onSubmit,
  };
}
