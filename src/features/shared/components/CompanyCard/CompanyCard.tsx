"use client";
import Image from "next/image";
import React from "react";
import { useLocale, useTranslations } from "next-intl";

import { CompanyI } from "../../../../types/company";
import CustomLink from "@/components/formInputs/CustomLink";
interface CompanyCardProps {
  company: CompanyI;
}
const CompanyCard = ({ company }: CompanyCardProps) => {
  const t = useTranslations("Companies");

  const locale = useLocale();
  return (
    <div className=" max-w-[500px] w-full  relative py-[12px] px-[18px] bg-[#F6F6F6] rounded-[12px]">
      <div className="user flex justify-between items-start">
        <div className="userInfo flex items-start gap-2">
          <div className="image relative w-fit ">
            <Image
              src={company.company_image || "/images/blankProfile.png"}
              alt="user"
              width={56}
              height={56}
              className="rounded-full"
            />
            <Image
              src="/images/addIcon.svg"
              alt="Add icon"
              width={26}
              height={26}
              className="rounded-full absolute bottom-[-10px] right-[50%] translate-x-[50%]"
            />
          </div>
          <div className="date name">
            <p className="text-[12px] text-[#898989] ">
              {company.company_name}
            </p>
            {/* <p className="text-[10px] text-[#62C483] mt-1 mb-3">
              {company.category}
            </p> */}
            <div className="flex items-center gap-1 ">
              <Image
                src="/images/locationCompany.svg"
                alt="clock icon"
                width={7}
                height={13}
                className="clock"
              />
              <p className="text-[10px] text-[#898989]"> {company.location}</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="content text-[#2C343C] text-[11px] mt-[22px] mb-2">
        {company.description}
      </div> */}
      <div className="flex justify-center items-center w-full mt-4 ">
        <CustomLink
          href={`/${locale}/companies/${company.user_id}`}
          locale={locale}
          text={t("detailsCompany")}
        />
      </div>
    </div>
  );
};
export default CompanyCard;
