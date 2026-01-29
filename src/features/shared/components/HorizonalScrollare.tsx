import Image from 'next/image';

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

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

export default function HorizonalScrollare() {
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
            <figure className='shrink-0' key={artwork.artist}>
              <div className='overflow-hidden rounded-md'>
                <Image
                  alt={`Photo by ${artwork.artist}`}
                  className='aspect-[3/4] h-fit w-fit object-cover'
                  height={250}
                  src={artwork.art}
                  width={200}
                />
              </div>
              <figcaption className='pt-2 text-xs text-muted-foreground'>
                Photo by <span className='font-semibold text-foreground'>{artwork.artist}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <ScrollBar orientation='horizontal' />
      </ScrollArea>
    </div>
  );
}
