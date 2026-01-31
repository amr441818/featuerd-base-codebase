import Link from 'next/link';

import { useLocale, useTranslations } from 'next-intl';

const LoginButtons = () => {
  const t = useTranslations('navbarFooter');
  const locale = useLocale();
  return (
    <div className='xs:gap-2 flex flex-row items-center gap-1.5 sm:gap-2.5 md:gap-3 lg:gap-[10px]'>
      <Link
        href={`/${locale}/login`}
        className='flex h-[40px] items-center justify-center whitespace-nowrap rounded-[35px] bg-primary px-[25px] py-[8px] text-[12px] font-[400] text-white transition-colors duration-300 hover:bg-secondary'
      >
        {t('login')}
      </Link>
      <Link
        href={`/${locale}/register`}
        className='flex h-[40px] items-center justify-center whitespace-nowrap rounded-[35px] border border-secondary bg-white px-[25px] py-[8px] text-[12px] font-[400] text-secondary transition-colors duration-300 hover:border-white hover:bg-primary hover:text-white'
      >
        {t('newAccount')}
      </Link>
    </div>
  );
};

export default LoginButtons;
