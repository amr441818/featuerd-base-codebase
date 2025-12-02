'use client';

import React, { ReactNode } from 'react';

interface TabItem {
  value: string;
  label: string;
  icon?: ReactNode;
}

interface CustomTabsProps {
  tabs: TabItem[];
  tab: string;
  setTab: (value: string) => void;
  className?: string;
  disabeldStyles?: string;
  activeStyles?: string;
}

const CustomTabs: React.FC<CustomTabsProps> = ({
  tabs,
  activeStyles,
  disabeldStyles,
  className,
  tab,
  setTab,
}) => {
  return (
    <div className='flex w-full flex-col gap-2 sm:w-fit sm:flex-row'>
      {tabs.map((t) => (
        <button
          key={t.value}
          onClick={() => setTab(t.value)}
          className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-300 ${className && className} ${
            t.value === tab
              ? `bg-gradient-90 text-white ${activeStyles ? activeStyles : ''}`
              : `bg-[#F4F6F9] text-[#8B8B8B] ${disabeldStyles ? disabeldStyles : ''} `
          } `}
        >
          <div className='flex items-center gap-1'>
            {t.icon && t.icon}
            {t.label}
          </div>
        </button>
      ))}
    </div>
  );
};

export default CustomTabs;
