import { useQuery } from '@tanstack/react-query';

import apiServiceCall from '@/lib/apiServiceCall';

import { useGetUser } from './useGetUser';

export const useAppQuery = ({
  queryKey,
  url,
  enabled = true,
  headers: customHeaders,
}: {
  queryKey?: string[];
  url: string;
  enabled?: boolean;
  headers?: Record<string, string>;
}) => {
  const { headers: userHeaders, status } = useGetUser();

  // merge user headers + custom headers
  const finalHeaders = { ...userHeaders, ...(customHeaders || {}) };

  // avoid running query if session is still loading
  const canRun = enabled && status !== 'loading';

  return useQuery({
    queryKey: queryKey || [url],
    enabled: canRun,

    queryFn: () =>
      apiServiceCall({
        method: 'GET',
        url,
        headers: finalHeaders,
      }),

    // retry: false,

    // onError: (err) => errorsHandling(err),
  });
};
