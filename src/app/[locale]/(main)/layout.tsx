import { ReactNode } from 'react';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className='flex flex-col'>
      <main className='flex-grow'>{children}</main>
    </div>
  );
}
