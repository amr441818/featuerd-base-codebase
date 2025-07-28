import { redirect } from "next/navigation";
import { toast } from "react-toastify";



export const errorsHandling = (
  error: { data: any; status: number } | any,
  lang: string,
  client?: boolean
) => {
  console.log(error, 'from');

  // Get the current pathname including query string
  const currentPath =
    typeof window !== 'undefined'
      ? window.location.pathname + window.location.search
      : '/';

  const encodedCallbackUrl = encodeURIComponent(currentPath);

  if (error.status === 401) {
    console.log(error);
    if (client) {
      window.location.href = `/${lang}/login?callbackUrl=${encodedCallbackUrl}`;
    } else {
      redirect(`/${lang}/login?callbackUrl=${encodedCallbackUrl}`);
    }
  } else {
    if (client) {
      if (
        error.message === 'الرجاء تسجيل الدخول أولاً' ||
        error.message === 'please login first'
      ) {
        window.location.href = `/${lang}/login?callbackUrl=${encodedCallbackUrl}`;
      } else {
        // @ts-ignore
        toast.error(error?.message || error?.data?.message);
      }
    } else {
      throw error;
    }
  }
};