import { useMutation } from '@tanstack/react-query';
import { useLocale } from 'next-intl';
import { toast } from 'react-hot-toast';

import apiServiceCall from '@/lib/apiServiceCall';
import { errorsHandling } from '@/lib/errorHandling';

import { useGetUser } from './useGetUser';

export const useAppMutation = ({
  url,
  method = 'POST',
  headers: customHeaders,
  onSuccess,
  onError,
}: {
  url: string;
  method?: 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  headers?: any;
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
}) => {
  const { headers: userHeaders } = useGetUser();
  const locale = useLocale();

  const finalHeaders = customHeaders || userHeaders;

  return useMutation({
    mutationKey: [url],

    mutationFn: (body?: any) =>
      apiServiceCall({
        method,
        url,
        headers: finalHeaders,
        body: body,
      }),

    onSuccess: (data) => {
      toast.success(data?.message);
      onSuccess?.(data);
    },

    onError: (error) => {
      errorsHandling(error, locale, true);
      onError?.(error);
    },
  });
};
