import Image from 'next/image';

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { useDominantBg } from '@/components/useDominantBg';

export interface Artwork {
  artist: string;
  art: string;
}

export const works: Artwork[] = [
  {
    artist: 'Ornella Binni',
    art: 'https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80',
  },
  {
    artist: 'Tom Byrom',
    art: 'https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80',
  },
  {
    artist: 'Vladimir Malyavko',
    art: 'https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80',
  },
  {
    artist: 'Mike Dorner',
    art: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=300&q=80',
  },
  {
    artist: 'Alvan Nee',
    art: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=300&q=80',
  },
];

function ArtworkCard({ artwork }: { artwork: Artwork }) {
  const bg = useDominantBg(artwork.art);

  return (
    <figure className='shrink-0'>
      <div className='relative overflow-hidden rounded-md'>
        {/* الخلفية */}
        <div
          className='absolute inset-0 z-0'
          style={{ backgroundColor: bg, filter: 'blur(20px)' }}
        />

        {/* الصورة */}
        <Image
          alt={`Photo by ${artwork.artist}`}
          className='relative z-10 aspect-[3/4] h-fit w-fit object-contain'
          height={250}
          width={200}
          src={artwork.art}
        />
      </div>

      <figcaption className='pt-2 text-xs text-muted-foreground'>
        Photo by <span className='font-semibold text-foreground'>{artwork.artist}</span>
      </figcaption>
    </figure>
  );
}

export function HorizonalScrollare() {
  return (
    <div
      className='flex w-full justify-center self-start pt-6'
      style={{
        all: 'revert',
        display: 'flex',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        paddingTop: '1.5rem',
        width: '100%',
        fontSize: '14px',
        lineHeight: '1.5',
        letterSpacing: 'normal',
      }}
    >
      <ScrollArea className='w-96 whitespace-nowrap rounded-md border'>
        <div className='flex w-max space-x-4 p-4'>
          {works.map((artwork) => (
            <ArtworkCard key={artwork.artist} artwork={artwork} />
          ))}
        </div>
        <ScrollBar orientation='horizontal' />
      </ScrollArea>
    </div>
  );
}
