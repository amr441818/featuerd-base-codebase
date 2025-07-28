"use client";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
type MenuItem = {
  value: string;
  path: string;
};
interface NavbarItemsLinksProps {
  menuItems: MenuItem[];
}
const NavbarItemsLinks = ({ menuItems }: NavbarItemsLinksProps) => {
  const t = useTranslations("navbarFooter");
  const locale = useLocale();

  const pathname = usePathname();
  const isActiveLink = (itemPath: string, currentPath: string) => {
    const cleanPath = currentPath.replace(/^\/(en|ar)/, "") || "/";
    if (itemPath === "/" && cleanPath === "/") return true;
    if (itemPath !== "/" && cleanPath === itemPath) return true;
    return false;
  };
  return (
    <div className="links hidden lg:flex   ">
      <ul className="flex  items-center gap-2 xl:gap-[30] w-fit relative">
        {menuItems.map((item: MenuItem, index: number) => {
          return (
            <li
              key={index}
              className={`relative group   text-[#fff] text-[12px] ${
                isActiveLink(item.path, pathname) ? "font-bold " : ""
              } `}
            >
              <>
                {isActiveLink(item.path, pathname) && (
                  <div className="absolute w-5 h-5 p-1 border-[1px] border-[#fff] rounded-full  bottom-[-24px] right-[50%] translate-x-[50%] flex justify-center items-center">
                    <div className="w-full  h-full  rounded-full bg-[#fff] "></div>
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
