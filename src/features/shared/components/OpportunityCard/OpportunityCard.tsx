"use client";
import Image from "next/image";
import React, { useState } from "react";
import CustomHeart from "../CustomHeart/CustomHeart";

import { useLocale, useTranslations } from "next-intl";

import { OpportunityI } from "../../../../types/opportunities";
import CustomLink from "@/components/formInputs/CustomLink";
interface OpportunityCardProps {
  opportunity: OpportunityI;
}
const OpportunityCard = ({ opportunity }: OpportunityCardProps) => {
  const t = useTranslations("opportunitySquare");
  const isLongText = opportunity?.description?.length > 150;
  const [readAll, setReadAll] = useState(isLongText);
  const toggleReadMore = () => {
    setReadAll(!readAll);
  };
  const locale = useLocale();
  return (
    <div className=" max-w-[500px] w-full  relative py-[12px] px-[18px] bg-[#F6F6F6] rounded-[12px]">
      <div className="user flex justify-between items-start">
        <div className="userInfo flex items-start gap-2">
          <div className="image relative w-fit ">
            <Image
              src="/images/postLogo.png"
              alt="user"
              width={56}
              height={56}
              className="rounded-full"
            />
            {/* <Image
              src="/images/addIcon.svg"
              alt="Add icon"
              width={26}
              height={26}
              className="rounded-full absolute bottom-[-10px] right-[50%] translate-x-[50%]"
            /> */}
          </div>
          <div className="date name">
            <p className="text-[12px] text-[#898989] ">
              {opportunity.company.company_name}
            </p>
            {/* <p className="text-[10px] text-[#62C483] mt-1 mb-3">
              {mockData.category}
            </p> */}
            <div className="flex items-center gap-1 ">
              <Image
                src="/images/clock.svg"
                alt="clock icon"
                width={13}
                height={13}
                className="clock"
              />
              <p className="text-[10px] text-[#898989]">
                {" "}
                {opportunity.created_at}
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {opportunity.is_finished === 1 && (
            <div className="flex items-center justify-center w-[62px] h-[31px] bg-[#F91818]/[0.06] text-[#F91818] rounded-[12px] text-[10px] font-bold">
              {t("ended")}
            </div>
          )}
          <CustomHeart fillColor={opportunity.is_favourite} />
        </div>
      </div>
      <div className="content text-[#2C343C] text-[11px] mt-[22px] mb-2">
        {readAll
          ? opportunity?.description?.slice(0, 150)
          : opportunity?.description}
        {isLongText && (
          <span
            onClick={toggleReadMore}
            className="text-[#62C483] cursor-pointer hover:underline text-[11px] px-2"
          >
            {readAll ? "قراء المزيد..." : "إخفاء"}
          </span>
        )}
      </div>
      <div className="flex justify-center items-center w-full ">
        <CustomLink
          href={`/${locale}/opportunity/${opportunity.id}`}
          locale={locale}
          text={t("detailsOpportunity")}
        />
      </div>
    </div>
  );
};
export default OpportunityCard;
