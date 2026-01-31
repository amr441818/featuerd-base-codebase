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
      <ul className='relative flex w-fit items-center gap-2 lg:gap-3 xl:gap-[35px]'>
        {menuItems.map((item: MenuItem, index: number) => {
          return (
            <li
              key={index}
              className={`group relative whitespace-nowrap p-[5px] text-[11px] font-normal text-secondary transition-colors duration-300 hover:text-primary lg:text-[12px] xl:text-[14px] ${
                isActiveLink(item.path, pathname) ? '' : ''
              } `}
            >
              <>
                {/* Active state indicator */}
                {isActiveLink(item.path, pathname) && (
                  <div className='nav-indicator-active absolute bottom-[-10px] right-0 flex w-full items-center justify-center gap-[2px] rounded-[5px] bg-white'>
                    <span className='nav-indicator-bar w-[70%]'></span>
                    <span className='nav-indicator-bar w-[20%]'></span>
                    <span className='nav-indicator-bar w-[10%]'></span>
                  </div>
                )}

                {/* Hover state indicator */}
                {!isActiveLink(item.path, pathname) && (
                  <div className='nav-indicator-hover absolute bottom-[-10px] right-0 hidden w-full items-center justify-center gap-[2px] rounded-[5px] bg-white group-hover:flex'>
                    <span className='nav-indicator-bar w-[70%]'></span>
                    <span className='nav-indicator-bar w-[20%]'></span>
                    <span className='nav-indicator-bar w-[10%]'></span>
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
