import axios from 'axios';

import { GetUSer } from '@/lib/GetUser';

import { serverErrorHandling } from './errors/serverErrorHandling';

export const apiServiceCall = async ({
  url,
  method,
  body,
  headers,
}: {
  url: string;
  method?: string;
  body?: any;
  headers?: any;
}) => {
  const isServer = typeof window === 'undefined';

  let finalHeaders: any = {
    'Content-Type': 'application/json',
    ...headers,
  };

  if (isServer) {
    const { headers: userHeaders } = await GetUSer();
    finalHeaders = { ...finalHeaders, ...userHeaders };
  }

  try {
    const response = await axios({
      method: method?.toUpperCase() || 'GET',
      url: `${process.env.NEXT_PUBLIC_API_URL}${url}`,
      data: body,
      headers: finalHeaders,
    });

    return response.data;
  } catch (error) {
    if (isServer) {
      serverErrorHandling(error);
    }

    if (axios.isAxiosError(error)) {
      throw {
        data: error.response?.data,
        status: error.response?.status,
      };
    }

    throw new Error('Unexpected Error');
  }
};

export default apiServiceCall;
