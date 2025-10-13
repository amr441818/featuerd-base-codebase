import axios, { AxiosRequestConfig } from 'axios';

type ApiServiceCallProps = {
  url: string;
  method?: string;
  body?: unknown;
  headers?: AxiosRequestConfig['headers'];
};

const apiServiceCall = async ({ url, method, body, headers }: ApiServiceCallProps) => {
  try {
    const response = await axios({
      method: method?.toUpperCase() || 'GET',
      url: `${process.env.NEXT_PUBLIC_API_URL}${url}`,
      data: body,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw { data: error.response?.data, status: error.response?.status };
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

export default apiServiceCall;
