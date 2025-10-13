'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useLocale } from 'next-intl';

type MenuItem = {
  value: string;
  path: string;
};
interface NavbarItemsLinksProps {
  menuItems: MenuItem[];
}
const NavbarItemsLinks = ({ menuItems }: NavbarItemsLinksProps) => {
  const locale = useLocale();

  const pathname = usePathname();
  const isActiveLink = (itemPath: string, currentPath: string) => {
    const cleanPath = currentPath.replace(/^\/(en|ar)/, '') || '/';
    if (itemPath === '/' && cleanPath === '/') return true;
    if (itemPath !== '/' && cleanPath === itemPath) return true;
    return false;
  };
  return (
    <div className='links hidden lg:flex'>
      <ul className='relative flex w-fit items-center gap-2 xl:gap-[30]'>
        {menuItems.map((item: MenuItem, index: number) => {
          return (
            <li
              key={index}
              className={`group relative text-[12px] text-[#fff] ${
                isActiveLink(item.path, pathname) ? 'font-bold' : ''
              } `}
            >
              <>
                {isActiveLink(item.path, pathname) && (
                  <div className='absolute bottom-[-24px] right-[50%] flex h-5 w-5 translate-x-[50%] items-center justify-center rounded-full border-[1px] border-[#fff] p-1'>
                    <div className='h-full w-full rounded-full bg-[#fff]'></div>
                  </div>
                )}
                <Link href={`/${locale}${item.path}`}>{item.value}</Link>
              </>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavbarItemsLinks;
