import axios from 'axios';

import { GetUSer } from '@/lib/GetUser';

const apiServiceCall = async ({
  url,
  method,
  body,
  headers,
  server = false,
}: {
  url: string;
  method?: string;
  body?: any;
  headers?: any;
  server?: boolean;
}) => {
  console.log('api service call run');

  let finalHeaders: any = {
    'Content-Type': 'application/json',
    ...headers,
  };

  // ⬅️ If request is on the server → auto-attach user headers
  if (server) {
    const { headers: userHeaders } = await GetUSer();
    finalHeaders = {
      ...finalHeaders,
      ...userHeaders,
    };
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
