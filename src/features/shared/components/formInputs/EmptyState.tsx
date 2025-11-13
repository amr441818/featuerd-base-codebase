'use client';

import React from 'react';

import Image from 'next/image';

interface EmptyStateProps {
  imageSrc?: string; // for image URL
  StateIcon?: React.ReactNode; // for icon or SVG component
  title: string;
  subtitle?: string;
  className?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  imageSrc,
  StateIcon,
  title,
  subtitle,
  className = '',
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 px-4 py-12 text-center ${className}`}
    >
      {imageSrc ? (
        <div className='relative h-40 w-40'>
          <Image src={imageSrc} alt={title} fill className='object-contain opacity-90' priority />
        </div>
      ) : StateIcon ? (
        <div className='text-gray-400 dark:text-gray-500'>{StateIcon}</div>
      ) : null}

      <div className='flex flex-col'>
        <h2 className='text-2xl font-semibold text-muted-foreground dark:text-gray-100'>{title}</h2>

        {subtitle && <p className='max-w-md text-gray-500 dark:text-gray-400'>{subtitle}</p>}
      </div>
    </div>
  );
};

export default EmptyState;
