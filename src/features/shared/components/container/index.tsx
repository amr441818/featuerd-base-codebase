import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className = '' }: ContainerProps) {
  return (
    <div   className={`container mx-auto  px-4 md:px-5 xl:px-24 2xl:px-[139px] ${
        className ? className : ""
      }`}>
      {children}
    </div>
  );
}
