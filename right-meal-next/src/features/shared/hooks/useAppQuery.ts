import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { ApiResponse } from '../types/global';
import { useGetUser } from './useGetUser';

interface UseAppQueryOptions<TData = any> extends Omit<UseQueryOptions<ApiResponse<TData>>, 'queryKey' | 'queryFn'> {
  queryKey: unknown[];
  queryFn: (headers: any) => Promise<ApiResponse<TData>>;
}

export const useAppQuery = <TData>({
  queryKey,
  queryFn,
  enabled = true,
  ...options
}: UseAppQueryOptions<TData>) => {
  const { headers: userHeaders, status } = useGetUser();

  // avoid running query if session is still loading
  const canRun = enabled && status !== 'loading';

  return useQuery<ApiResponse<TData>>({
    queryKey,
    enabled: canRun,
    queryFn: () => queryFn(userHeaders),
    ...options,
  });
};
