import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

import { clientErrorHandling } from '@/lib/errors/clientErrorHandling';

import { ApiError, ApiResponse } from '../types/global copy';
import { useGetUser } from './useGetUser';

interface UseAppMutationOptions<TData, TVariables> {
  mutationFn: (variables: TVariables, headers: any) => Promise<ApiResponse<TData>>;
  onSuccess?: (data: ApiResponse<TData>) => void;
  onError?: (error: ApiError) => void;
}

export const useAppMutation = <TData, TVariables>({
  mutationFn,
  onSuccess,
  onError,
}: UseAppMutationOptions<TData, TVariables>) => {
  const { headers: userHeaders } = useGetUser();

  return useMutation<ApiResponse<TData>, ApiError, TVariables>({
    mutationFn: (variables) => mutationFn(variables, userHeaders),

    onSuccess: (data) => {
      toast.success(data?.message);
      onSuccess?.(data);
    },

    onError: (error) => {
      clientErrorHandling(error);
      onError?.(error);
    },
  });
};
