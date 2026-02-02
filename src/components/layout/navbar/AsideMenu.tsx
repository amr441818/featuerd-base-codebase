'use client';

import Link from 'next/link';

import { Menu } from 'lucide-react';

import Socials from './Socials';

function AsideMenu({
  lang,

  open,
  setOpen,
  menuItems,
}: {
  lang: string;
  iconColor?: string;
  open: boolean;
  register?: unknown;
  setOpen: (open: boolean) => void;
  menuItems: Record<string, string>[];
}) {
  return (
    <>
      <div className='cursor-pointer lg:hidden' onClick={() => setOpen(!open)}>
        {/* <Image
            className="min-w-[24px] min-h-[24px]"
            src={iconColor === "black" ? menuBlack : menu}
            width={24}
            height={24}
            alt="currency"
          /> */}
        <Menu color='#fff' size={24} />
      </div>
      {/* aside*/}
      <div
        className={`fixed top-0 [&_*]:!text-[#8D8D8D] hover:[&_*]:!text-[#43316E] ${lang == 'ar' ? 'right-0 rounded-bl-3xl rounded-tl-3xl' : 'left-0 rounded-br-3xl rounded-tr-3xl'} z-[100] flex h-svh w-[70%] min-w-[250px] max-w-[350px] items-start justify-center bg-white backdrop-blur-sm duration-500 sm:w-[calc(100%-100px)] md:w-[calc(100%-150px)] ${
          open ? 'translate-x-0' : lang == 'ar' ? 'translate-x-full' : '-translate-x-full'
        }`}
      >
        <div className='flex w-full flex-col items-start gap-1 px-4 text-base font-medium sm:px-6 sm:text-lg md:px-8 md:text-xl'>
          <div
            className='mt-8 flex w-full cursor-pointer items-center justify-start gap-2 sm:mt-10 md:mt-12'
            onClick={() => setOpen(false)}
          >
            <span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24px'
                height='24px'
                viewBox='0 0 32 32'
              >
                <path
                  fill='#43316E'
                  d='M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m0 26C9.4 28 4 22.6 4 16S9.4 4 16 4s12 5.4 12 12s-5.4 12-12 12'
                />
                <path
                  fill='#43316E'
                  d='M21.4 23L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z'
                />
              </svg>
            </span>{' '}
            {/* close */}
          </div>{' '}
          <ul className='flex w-full flex-col items-start gap-3 pb-4 sm:pb-6'>
            {menuItems?.map((item, i) => (
              <li
                key={item?.value}
                className={`${lang === 'ar' ? 'translate-x-[100%]' : 'translate-x-[-100%]'} ${
                  open ? '!translate-x-0' : ''
                } text-sm transition-transform duration-500 sm:text-base md:text-lg`}
                style={{ transitionDuration: `${300 * (i + 1)}ms` }}
                onClick={() => setOpen(false)}
              >
                <Link
                  href={`/${lang}/${item.path}`}
                  className='text-white'
                  onClick={() => setOpen(false)}
                >
                  {item.value}
                </Link>
              </li>
            ))}
            {/* <MainLink
                    href="login"
                    onClick={() => setOpen(false)}
                    className="px-4 py-2 xl:px-6 xl:py-3 rounded-[8px]  text-white  min-w-fit   bg-primary"
                  >
                    <div onClick={() => setOpen(false)} className="flex gap-1 items-center">
                      <span className="">تسجيل الدخول</span>
                    </div>
                  </MainLink>
                  <MainLink
                    href="register"
                    onClick={() => setOpen(false)}
                    className="px-4 py-2 xl:px-6 xl:py-3 rounded-[8px] !bg-[#5BB98D] text-white  min-w-fit  "
                  >
                    <div onClick={() => setOpen(false)} className="flex gap-1 items-center">
                      <span className="">حساب جديد</span>
                    </div>
                  </MainLink> */}
            {/* <Language className="px-0 hidden lg:flex" /> */}
            {/* <Customsearch register={register} lang={lang}/> */}
            <li className='mt-1'>
              <Socials />
            </li>
          </ul>
        </div>
      </div>
      {open && (
        <div
          className={`fixed bottom-0 left-0 right-0 top-0 z-10 bg-[#00000000]/20 duration-500`}
          onClick={() => setOpen(false)}
        ></div>
      )}
    </>
  );
}

export default AsideMenu;
