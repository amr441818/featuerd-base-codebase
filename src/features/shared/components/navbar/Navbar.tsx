"use client";
import Image from "next/image";
import { useState } from "react";
import Container from "../formcomponents/Container";
import AsideMenu from "./AsideMenu";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import LoginButtons from "./LoginButtons";
import UserProfile from "./UserProfile";
import CustomSearch from "./CustomSearch";
import NavbarItemsLinks from "./NavbarItemsLinks";
import { CompanyUserI } from "../../../../types/user";
type MenuItem = {
  value: string;
  path: string;
};
interface NavbarProps {
  logo?: string;
  token?: string;
  profileData?: CompanyUserI;
}
const Navbar = ({ logo, token, profileData }: NavbarProps) => {
  const locale = useLocale();
  const [open, setOpen] = useState(false);
  const t = useTranslations("navbarFooter");
  const menuItems: MenuItem[] = [
    { value: t("home"), path: "/" },
    { value: t("about"), path: "/about" },
    { value: t("latestPosts"), path: "/latest-posts" },
    { value: t("opportunities"), path: "/opportunities" },
    { value: t("companies"), path: "/companies" },
  ];

  return (
    <>
      <Container>
        <nav className="   mt-[30px] z-[999]  max-w-[1088px] mx-auto h-[140px] sm:h-[116px] flex flex-col sm:flex-row justify-center items-center gap-2 bg-gradient-to-r from-[#62C483] to-[#006838]  rounded-[27px]   ">
          <Link href={`/${locale}`} className="sm:hidden">
            <Image
              src={logo || "/images/Linkora_logo.svg"}
              alt="logo"
              width={160}
              height={56}
              className="w-[160px] h-[56px]  object-contain "
              priority
            />
          </Link>

          <div className=" flex   items-center  justify-between gap-2 w-full   px-4 lg:px-5 xl:px-[30px]">
            <Link href={`/${locale}`} className="hidden sm:block">
              <Image
                src={logo || "/images/Linkora_logo.svg"}
                alt="logo"
                width={160}
                height={56}
                className="w-[160px] h-[56px]  object-contain"
                priority
              />
            </Link>
            <NavbarItemsLinks menuItems={menuItems} />
            {token ? (
              <div className="flex items-center gap-4 sm:gap-2 md:gap-4">
                <UserProfile profileData={profileData} />
                <Link href={`/${locale}/notifications`} className="relative">
                  <Image
                    src="/images/Notification.svg"
                    alt="Notification icon"
                    width={22}
                    height={24}
                    className="cursor-pointer "
                  />
                  {(profileData?.unreadCount ?? 0) > 0 && (
                    <span className="absolute top-[-50%] right-[-5px] w-5 h-5 bg-[#FFFFFF] rounded-full flex items-center justify-center text-[#53B678]">
                      {profileData?.unreadCount}
                    </span>
                  )}
                </Link>
              </div>
            ) : (
              <LoginButtons />
            )}
            <div className="flex items-center  gap-1 sm:gap-2  md:gap-[15px]">
              {/* <Language /> */}
              <CustomSearch />
              <AsideMenu
                open={open}
                menuItems={menuItems}
                setOpen={setOpen}
                iconColor="black"
                lang={locale}
              />
            </div>
          </div>
        </nav>
      </Container>
    </>
  );
};

export default Navbar;
