import React from 'react';

const WaterDropIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width='187'
      height='172'
      viewBox='0 0 187 172'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <g clipPath='url(#clip0_4_642)'>
        <path
          d='M74.5 18.75C24.5312 61.4062 -0.5 98.25 -0.5 129.375C-0.5 176.062 35.125 206.25 74.5 206.25C113.875 206.25 149.5 176.062 149.5 129.375C149.5 98.25 124.469 61.4062 74.5 18.75ZM35.4062 131.25C38.875 131.25 41.6875 133.688 42.3437 137.062C46.1875 157.875 63.7188 165 76.4688 163.969C80.5 163.781 83.875 166.969 83.875 171C83.875 174.75 80.875 177.844 77.125 178.031C57.1562 179.25 33.8125 167.812 28.4688 139.406C27.7188 135.188 31.0938 131.25 35.4062 131.25Z'
          fill='currentColor'
          fillOpacity='0.1'
          className='group-hover:fill-opacity-100 fill-[#00344B] transition-all duration-300 group-hover:fill-white'
        />
      </g>
      <defs>
        <clipPath id='clip0_4_642'>
          <rect x='-38' width='225' height='225' rx='10' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default WaterDropIcon;
