import Image from "next/image";
import Link from "next/link";
import React from "react";
interface LinkProps {
  href: string;
  locale: string;
  text: string;
}
const CustomLink = ({ href, locale, text }: LinkProps) => {
  return (
    <Link
      href={`${href}`}
      className="bg-gradient-to-r from-[#006838]/[0.05] to-[#62C483]/[0.05]  flex gap-2 items-center justify-center w-[318] h-[48px] rounded-[19px] "
    >
      <p className="text-[#6F6F6F] text-[14px]">{text}</p>
      <Image
        src="/images/arrowButton.svg"
        alt="arrow icon"
        width={18}
        height={13}
        className={`${locale === "en" ? "rotate-180" : ""}`}
      />
    </Link>
  );
};

export default CustomLink;
