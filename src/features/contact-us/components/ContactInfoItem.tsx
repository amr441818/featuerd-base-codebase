import React from 'react';

interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const ContactInfoItem = ({ icon, title, children }: ContactInfoItemProps) => {
  return (
    <div className='row-1 flex w-full items-center justify-start gap-[8px] rounded-[12px] bg-[#4EC0F4]/[0.10] p-[12px] md:gap-[11px] md:rounded-[15px] md:p-[18px]'>
      <div className='icon flex h-[45px] w-[45px] items-center justify-center rounded-full bg-[#007AB1]/[0.10] p-[10px] md:h-[58px] md:w-[58px] md:p-[15px]'>
        {icon}
      </div>
      <div className='contacts flex flex-col items-start justify-center gap-[4px] md:gap-[6px]'>
        <p className='text-xs font-medium text-secondary md:text-sm'>{title}</p>
        <div className='flex items-start gap-[3px] text-[10px] text-muted md:text-xs lg:gap-[10px]'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ContactInfoItem;
