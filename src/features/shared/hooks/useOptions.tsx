import { ApiResponse } from '../types/global';
import { useAppQuery } from './useAppQuery';

type Option = { value: string | number; label: string };

interface UseOptionsProps<TData = any> {
  queryKey: string[];
  queryFn: (headers: any) => Promise<ApiResponse<TData>>;
  mapFn?: (item: any) => Option;
  enabled?: boolean;
  dataPath?: string;
}

// Helper function to get nested property value from object using dot notation
const getNestedValue = (obj: any, path: string): any => {
  return path.split('.').reduce((current, key) => current?.[key], obj);
};

export function useOptions<TData = any>({
  queryKey,
  queryFn,
  dataPath,
  mapFn = (item) => ({ value: String(item.id), label: item.name }),
  enabled = true,
}: UseOptionsProps<TData>) {
  const { data, isSuccess, ...rest } = useAppQuery<TData>({
    queryKey,
    queryFn,
    enabled,
  });

  // If dataPath is provided, use it to navigate nested properties
  let options: Option[] = [];
  if (isSuccess && data) {
    if (dataPath) {
      const nestedData = getNestedValue(data, dataPath);
      options = Array.isArray(nestedData) ? nestedData.map(mapFn) : [];
    } else {
      // Default behavior: try data.data.items first, then data.data
      const responseData = data.data as any;
      if (responseData?.items && Array.isArray(responseData.items)) {
        options = responseData.items.map(mapFn);
      } else if (Array.isArray(responseData)) {
        options = responseData.map(mapFn);
      }
    }
  }

  return { options, isSuccess, data, ...rest };
}
