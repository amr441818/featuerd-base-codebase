'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type AvatarItem = {
  src?: string;
  alt?: string;
  fallback: string;
};

interface AvatarGroupProps {
  avatars: AvatarItem[];
  rtl?: boolean; // optional — allows RTL toggle
  grayscale?: boolean; // optional — toggle grayscale filter
}

export function AvatarGroup({ avatars, rtl = false, grayscale = true }: AvatarGroupProps) {
  return (
    <div
      dir={rtl ? 'rtl' : 'ltr'}
      className={`flex -space-x-5 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background rtl:space-x-reverse ${
        grayscale ? '*:data-[slot=avatar]:grayscale' : ''
      }`}
    >
      {avatars?.map((avatar, index) => (
        <Avatar key={index}>
          {avatar.src ? (
            <AvatarImage src={avatar?.src} alt={avatar?.alt || avatar?.fallback} />
          ) : (
            <AvatarFallback>{avatar?.fallback}</AvatarFallback>
          )}
        </Avatar>
      ))}
    </div>
  );
}
