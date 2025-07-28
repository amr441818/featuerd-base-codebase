import { appLinksI } from "@/types/appLinks";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import React from "react";
import { Container } from "../../container";

interface DownloadAppProps {
  app_links: appLinksI;
}
const DownloadApp = async ({ app_links }: DownloadAppProps) => {
  const t = await getTranslations("downloadApp");
  return (
    <Container className="w-full bg-[#62C483]/[0.06] mt-[100px] md:mt-[200px] lg:mt-[400px] grid grid-cols-1 md:grid-cols-2 gap-4 md:pt-[100px] py-[40px]">
      <div className="centent order-2 md:order-1 text-center md:text-start">
        <h3 className="text-[18px] md:text-[24px] lg:text-[46px] text-[#62C483] font-bold">
          {t("title")}
        </h3>
        <h3 className="text-[16px] md:text-[20px] lg:text-[24.5px] text-[#131D13] font-bold mt-[17px] mb-[32px]">
          {app_links.description}
        </h3>
        {/* <p className="text-[14px] md:text-[16px]  text-[#7C7D7E] mb-[36px]">
          هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
          القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة
          التي يقرأها `
        </p> */}
        <a
          href={app_links.android_link}
          target="_blank"
          className="max-w-[384px] w-full h-[55px] border-[1px] border-[#21CE2C]/[0.25] rounded-[19px] flex items-center justify-center gap-3"
        >
          <Image
            src="/images/googlePlay.svg"
            alt="Google Play"
            width={24}
            height={25}
          />
          <p className="text-[14px] text-[#8B8B8B] font-bold">
            {t("googlePlay")}
          </p>
        </a>
        <a
          href={app_links.ios_link}
          target="_blank"
          className="max-w-[384px] w-full h-[55px] border-[1px] border-[#21CE2C]/[0.25] rounded-[19px] flex items-center justify-center gap-3 mt-4"
        >
          <Image
            src="/images/appleStore.svg"
            alt="Google Play"
            width={24}
            height={25}
          />
          <p className="text-[14px] text-[#8B8B8B] font-bold">
            {t("appStore")}
          </p>
        </a>
      </div>
      <div className="relative -top-[80px] md:-top-[200px] order-1 md:order-2 ">
        <Image
          src="/images/downloadApp.png"
          alt="Google Play"
          width={724}
          height={692}
        />
      </div>
    </Container>
  );
};

export default DownloadApp;
