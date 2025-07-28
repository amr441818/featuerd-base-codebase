"use client";
import { useTranslations } from "next-intl";
import React from "react";
import Socials from "../navbar/Socials";
import { Copyright } from "lucide-react";

const ContactUs = () => {
  const t = useTranslations("navbarFooter");
  return (
    <div className="grid grid-cols-1 z-[2]">
      <p className="text-[13px] font-bold  mb-[22px]">
        تابعنا عبر الوسائل التالية
      </p>
      <div className="flex flex-col  items-start justify-start gap-6 ">
        <Socials />
        <p className="text-[12px] font-normal flex items-center gap-2">
          {" "}
          <Copyright size={14} /> جميع الحقوق محفوظة - LINKORA 2025
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
