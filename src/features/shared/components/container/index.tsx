import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn('mx-auto w-full max-w-[1536px] px-4 md:px-6 xl:px-12 2xl:px-24', className)}>
      {children}
    </div>
  );
}
