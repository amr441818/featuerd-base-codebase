import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const LoginButtons = () => {
  const t = useTranslations("navbarFooter");
  const locale = useLocale();
  return (
    <div className="shrink-0 flex flex-col sm:flex-row items-center gap-[10px]">
      <Link
        href={`/${locale}/login`}
        className="border-[1px] border-[#fff]/[0.47] rounded-[19px] w-[85px] sm:w-[100px] md:w-[120px] xl:w-[140px] 2xl:w-[160px] h-[36px] md:h-[55px] text-[#fff] text-[10px] md:text-[14px] md:font-bold flex items-center justify-center hover:bg-[#fff] hover:text-[#0F7644] transition-colors duration-300"
      >
        {t("login")}
      </Link>
      <Link
        href={`/${locale}/register`}
        className="border-[1px] border-[#fff]/[0.47] rounded-[19px] w-[85px] sm:w-[100px] md:w-[120px] xl:w-[140px] 2xl:w-[160px] h-[36px] md:h-[55px] text-[#fff] text-[10px] md:text-[14px] md:font-bold flex items-center justify-center hover:bg-[#fff] hover:text-[#0F7644] transition-colors duration-300"
      >
        {t("newAccount")}
      </Link>
    </div>
  );
};

export default LoginButtons;
