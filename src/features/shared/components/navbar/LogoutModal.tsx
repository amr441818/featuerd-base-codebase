"use client";
import { X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { toast } from "react-toastify";
interface LogoutModalProps {
  setOpenModal: (open: boolean) => void;
}
const LogoutModal = ({ setOpenModal }: LogoutModalProps) => {
  const locale = useLocale();
  const t = useTranslations("logout");
  const logoutHandler = async () => {
    try {
      await fetch("/api/auth/logout", { method: "GET" });
      toast.success(t("success"));
      window.location.href = `/${locale}/login`;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="fixed inset-0 w-dvw h-dvh z-[99999] flex items-center justify-center bg-[#000000]/[0.36]  p-6 ">
      <div className="bg-white h-[276px] w-[547px] relative rounded-[36px] flex flex-col items-center justify-start p-6 md:px-[51px] md:py-[45px]">
        <div className="flex justify-between items-start w-full ">
          <Image
            src="/images/logoutModal.svg"
            alt="Logo"
            width={42}
            height={42}
          />
          <div
            className="bg-[#CFCFCF]/[0.4] text-[#9E9E9E] flex justify-center items-center w-5 h-5 rounded-[4px]"
            onClick={() => setOpenModal(false)}
          >
            <X size={12} />
          </div>
        </div>
        <p className="text-[#1A0F33] text-[14px] font-bold mt-3 w-full text-start">
          {t("title")}
        </p>
        <p className="text-[#898989] text-[12px] mt-2 w-full text-start">
          {t("confirmation")}
        </p>
        <button
          onClick={logoutHandler}
          className="bg-[#FF0000] text-white text-[14px] font-bold flex items-center justify-center w-[445] h-[55px] rounded-[19px] mt-8"
        >
          {t("yes")}
        </button>
      </div>
    </div>
  );
};

export default LogoutModal;
