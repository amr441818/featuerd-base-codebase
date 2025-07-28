"use client";
import Image from "next/image";
import React, { useState } from "react";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

import LogoutModal from "./LogoutModal";
import DeleteAccount from "./DeleteAccount";
import { CompanyUserI } from "@/types/user";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
interface MenuItems {
  label: string;
  icon: string;
  link: string;
}
interface UserProfileProps {
  profileData?: CompanyUserI;
}
const UserProfile = ({ profileData }: UserProfileProps) => {
  const locale = useLocale();
  const t = useTranslations("navbarFooter");
  const [openModal, setOpenModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openPopover, setOpenPopover] = useState(false);

  const menuItems: MenuItems[] = [
    {
      label: t("profile"),
      icon: "/images/userIcon.svg",
      link: `/${locale}/profile`,
    },
    {
      label: t("chats"),
      icon: "/images/messagesIcon.svg",
      link: `/${locale}/chats`,
    },
    {
      label: t("EditProfile"),
      icon: "/images/editUserIcon.svg",
      link: `/${locale}/edit-profile`,
    },
    {
      label: t("EditPassword"),
      icon: "/images/editPassIcon.svg",
      link: `/${locale}/edit-password`,
    },
  ];
  return (
    <>
      <div className="flex items-center justify-center  z-[10] bg-[#FFFFFF]/[0.15] rounded-[19px] h-[55px]  max-w-[243px] px-3">
        <Image
          src={
            profileData?.company?.profile_image_url ||
            "/images/blankProfile.png"
          }
          alt="User Profile"
          width={38}
          height={38}
          className="rounded-full me-[7px] w-[25px] h-[25px] lg:w-[45px] lg:h-[45px] p-1 bg-[#FFFFFF]"
        />

        <div className="flex flex-col items-start justify-start gap-1 mx-[7px] text-[12px] sm:text-[16px] text-[#43316E] md:font-bold">
          <p className="text-[#FFFFFF] text-[10px]">{t("greeting")}</p>
          <p className="shrink-0 text-[#FFFFFF] text-[10px] md:text-[12px] font-bold">
            {profileData?.company?.username
              ? profileData.company.username.length > 12
                ? profileData.company.username.slice(0, 12) + "..."
                : profileData.company.username
              : ""}
          </p>
        </div>
        <Popover open={openPopover} onOpenChange={setOpenPopover}>
          <PopoverTrigger>
            <ChevronDown className="w-6 h-6 text-[#FFFFFF]" />
          </PopoverTrigger>
          <PopoverContent
            className={`z-[9999] relative ${
              locale === "ar"
                ? "left-14 md:left-[80px]"
                : "right-14 md:right-[80px]"
            } top-3 flex flex-col items-center justify-center gap-[27px] py-[29px] text-[12px] md:text-[14px] text-[#909090] bg-white w-[180px] md:w-[220px] px-2 md:px-3 shadow-[_0px_0px_60px_#00000029] rounded-[0_0_17px_17px]`}
          >
            {menuItems.map((item, index) => (
              <Link
                href={item.link}
                className="flex items-center justify-between w-full gap-1 md:gap-[10px]"
                key={index}
                onClick={() => setOpenPopover(false)}
              >
                <div className="flex items-center justify-start w-full gap-1 md:gap-[10px]">
                  <Image
                    src={item.icon}
                    alt={`${item.label} icon`}
                    width={20}
                    height={20}
                    className="w-[16px] h-[16px] md:w-[20px] md:h-[20px]"
                  />
                  <span>{item.label}</span>
                </div>
                <Image
                  src="/images/arrow-right.svg"
                  alt={` arrow-right icon`}
                  width={20}
                  height={20}
                  className={`${
                    locale === "en"
                      ? "rotate-180"
                      : "w-[16px] h-[16px] md:w-[20px] md:h-[20px]"
                  }`}
                />
              </Link>
            ))}

            <button
              className="flex items-center justify-start w-full gap-2 mt-2 md:mt-4"
              onClick={() => {
                setOpenModal(true);
                setOpenPopover(false);
              }}
            >
              <Image
                src="/images/logoutIcon.svg"
                alt="Logout icon"
                width={20}
                height={20}
                className="w-[16px] h-[16px] md:w-[20px] md:h-[20px]"
              />
              <span className="text-[12px] text-[#F91818]">{t("logout")}</span>
            </button>
            <button
              className="flex items-center justify-start w-full gap-2"
              onClick={() => {
                setOpenDeleteModal(true);
                setOpenPopover(false);
              }}
            >
              <Image
                src="/images/deleteAccountIcon.svg"
                alt="Logout icon"
                width={20}
                height={20}
                className="w-[16px] h-[16px] md:w-[20px] md:h-[20px]"
              />
              <span className="text-[12px] text-[#F91818]">
                {t("deleteAccount")}
              </span>
            </button>
          </PopoverContent>
        </Popover>
      </div>
      {openModal && <LogoutModal setOpenModal={setOpenModal} />}
      {openDeleteModal && (
        <DeleteAccount setOpenDeleteModal={setOpenDeleteModal} />
      )}
    </>
  );
};

export default UserProfile;
