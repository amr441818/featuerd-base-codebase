'use client';

import { usePathname } from 'next/navigation';

const coloredBgRoutes = [
  'login',
  'register',
  'confirm-code',
  'edit-profile',
  'my-donations',
  'contact-us',
];

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lastSegment = pathname.split('/').filter(Boolean).pop();

  return (
    <div
      className={`${
        coloredBgRoutes.includes(lastSegment || '') ? 'min-h-screen bg-[#F5F5F5]' : 'bg-[#F5F5F5]'
      }`}
    >
      {children}
    </div>
  );
}
