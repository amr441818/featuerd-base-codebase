import React from 'react';

const CustomBorder = ({
  className,
  classNameInner,
}: {
  className?: string;
  classNameInner?: string;
}) => {
  return (
    <div
      className={`${className} absolute bottom-[-10px] right-0 flex w-full items-center justify-center gap-[2px] rounded-[5px] bg-white`}
    >
      <span className={`${classNameInner} h-[4px] w-[75%] rounded-[5px]`}></span>
      <span className={`${classNameInner} h-[4px] w-[15%] rounded-[5px]`}></span>
      <span className={`${classNameInner} h-[4px] w-[10%] rounded-[5px]`}></span>
    </div>
  );
};

export default CustomBorder;
