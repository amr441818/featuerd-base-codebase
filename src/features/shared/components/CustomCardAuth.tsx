import React from 'react';

import { Card, CardHeader } from '@/components/ui/card';

const CustomCardAuth = ({
  children,
  title,
  desc,
  className,
  icon,
}: {
  children: React.ReactNode;
  title: string;
  desc: string;
  className?: string;
  icon?: React.ReactNode;
}) => {
  return (
    <Card
      className={`animate-duration-[2000ms] animate-delay-[800ms] mx-auto flex w-full max-w-[468px] animate-fade-down flex-col items-center justify-center !rounded-[45px] bg-[#FFFFFF] p-6 md:p-[50px_50px_34px_50px] ${className}`}
    >
      <CardHeader className='mb-[15px] flex flex-col gap-3 md:mb-[21px]'>
        <h2 className='text-center text-[16px] font-semibold text-secondary lg:text-[18px]'>
          {title}
        </h2>
        <p className='text-center text-[14px] font-light text-muted lg:text-[16px]'>{desc}</p>
        {icon && (
          <div className='mx-auto mb-[15px] mt-[15px] flex h-[90px] w-[90px] items-center justify-center rounded-full bg-[#D9F3FF]/[0.35] p-4 lg:mb-[25px] lg:mt-[21px] lg:h-[114px] lg:w-[114px] lg:p-[27px]'>
            {icon}
          </div>
        )}
      </CardHeader>
      {children}
    </Card>
  );
};

export default CustomCardAuth;
