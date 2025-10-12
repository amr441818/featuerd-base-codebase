

import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "Linkora - Home",
  description: "Your premier destination for beauty clinics and beauty salons.",
};

interface LayoutProps {
  params: Promise<{ locale: string | any }>;
}

export default async function Home({ params }: LayoutProps) {
  

  return (
    <div className="">
    home page
    </div>
  );
}
