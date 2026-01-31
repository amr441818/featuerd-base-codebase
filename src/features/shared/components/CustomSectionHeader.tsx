import React from 'react';

const CustomSectionHeader = ({
  title,
  desc,
  icon,
  isCenter = true,
  isContact = false,
  isPublic = false,
}: {
  title: string;
  desc: string;
  icon?: React.ReactNode;
  isCenter?: boolean;
  isContact?: boolean;
  isPublic?: boolean;
}) => {
  return (
    <div
      className={`texts lg:animate-duration-[1500ms] lg:animate-delay-500 flex w-full flex-col gap-1.5 md:gap-2 lg:animate-fade-down lg:gap-3 ${isCenter ? 'items-center justify-center text-center' : 'items-center justify-center text-center lg:items-start lg:justify-start lg:text-start'}`}
    >
      <h2
        className={`text-[16px] font-semibold sm:text-[18px] md:text-[20px] ${isContact ? 'text-neutral lg:text-[24px]' : `${isPublic ? 'text-neutral lg:text-[24px]' : 'text-secondary lg:text-[22px]'}`}`}
      >
        {title}
      </h2>
      {icon ? (
        <div
          className={`flex w-full gap-2 lg:gap-3 ${isCenter ? 'items-center justify-center text-center' : 'items-start justify-start text-start'}`}
        >
          {icon}
          <p
            className={`text-[12px] font-light text-muted sm:text-[14px] md:text-[16px] lg:text-[18px] ${isCenter ? 'items-center justify-center text-center' : 'items-start justify-start text-start'}`}
          >
            {desc}
          </p>
        </div>
      ) : (
        <p
          className={` ${isContact ? 'max-w-[607px] font-[300]' : 'font-light'} ${isPublic ? 'max-w-[506px] text-[12px] text-[#5A5757] md:text-[14px]' : ''} text-[12px] leading-[24px] text-muted sm:text-[14px] sm:leading-[28px] md:text-[16px] md:leading-[32px] lg:text-[18px] lg:leading-[36px] ${isCenter ? 'text-center' : 'text-center lg:text-start'}`}
        >
          {desc}
        </p>
      )}
    </div>
  );
};

export default CustomSectionHeader;
