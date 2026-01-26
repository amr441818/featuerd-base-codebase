import { useQuery } from '@tanstack/react-query';

import { ApiResponse } from '../types/global';
import { useGetUser } from './useGetUser';

interface UseAppQueryOptions<TData = any> {
  queryKey: string[];
  queryFn: (headers: any) => Promise<ApiResponse<TData>>;
  enabled?: boolean;
}

export const useAppQuery = <TData>({
  queryKey,
  queryFn,
  enabled = true,
}: UseAppQueryOptions<TData>) => {
  const { headers: userHeaders, status } = useGetUser();

  // avoid running query if session is still loading
  const canRun = enabled && status !== 'loading';

  return useQuery<ApiResponse<TData>>({
    queryKey,
    enabled: canRun,
    queryFn: () => queryFn(userHeaders),
  });
};
