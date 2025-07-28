"use client";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const MainLinks = () => {
  const locale = useLocale();
  const t = useTranslations("navbarFooter");
  const mainLinks: Record<string, string>[] = [
    { value: "عن المنصة", path: "/" },
    { value: "الاسئلة الشائعة", path: "/services" },
    { value: "أحدث المنشورات", path: "/#about" },
    { value: "الشروط والأحكام", path: "/news" },
    { value: "ساحة الفرص", path: "/#why" },
    { value: "سياسة الخصوصية", path: "/#partners" },
    { value: "الشركات", path: "/#partners" },
  ];
  return (
    <div className="grid grid-cols-2 z-[2]">
      <p className="text-[13px] font-bold col-span-2 mb-[30px]">{t("title")}</p>
      {mainLinks.map((link, index) => (
        <div className="flex items-center gap-[6px] mb-[13px]" key={index}>
          <div className=" w-2 h-2  bg-[#fff] rounded-full  "></div>
          <Link
            href={`/${locale}${link.path}`}
            className="text-[12px] font-normal"
          >
            {link.value}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MainLinks;
