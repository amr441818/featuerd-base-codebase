

import type { Metadata } from "next";

import { getHomeData } from "@/lib/serverActions";
import { SliderItemI } from "@/types/sliders";
import { AboutSectionI } from "@/types/aboutSection";
import { PostI } from "@/types/posts";
import { OpportunityI } from "@/types/opportunities";
import { CompanyI } from "@/types/company";
import { appLinksI } from "@/types/appLinks";
import Hero from "@/features/shared/components/(HomePage)/Hero/Hero";
import About from "@/features/shared/components/(HomePage)/About/About";
import LatestPosts from "@/features/shared/components/(HomePage)/LatestPosts/LatestPosts";
import AdsBanner from "@/features/shared/components/(HomePage)/AdsBanner/AdsBanner";
import OpportunitySquare from "@/features/shared/components/(HomePage)/OpportunitySquare/OpportunitySquare";
import Companies from "@/features/shared/components/(HomePage)/Companies/Companies";
import DownloadApp from "@/features/shared/components/(HomePage)/DownloadApp/DownloadApp";

export const metadata: Metadata = {
  title: "Linkora - Home",
  description: "Your premier destination for beauty clinics and beauty salons.",
};

interface LayoutProps {
  params: Promise<{ locale: string | any }>;
}

export default async function Home({ params }: LayoutProps) {
  const { locale } = await params;

  const dataHome = await getHomeData(locale);
  const sliders: SliderItemI[] = dataHome.sliders;
  const about_us: AboutSectionI = dataHome.about_us;
  const posts: PostI[] = dataHome.posts;
  const opportunities: OpportunityI[] = dataHome.opportunities;
  const companies: CompanyI[] = dataHome.companies;
  const app_links: appLinksI = dataHome.app_links;
  console.log("posts", posts);

  return (
    <div className="">
      <Hero sliders={sliders} />
      <About about_us={about_us} />
      <LatestPosts posts={posts} />
      <AdsBanner />
      <OpportunitySquare opportunities={opportunities} />
      <Companies companies={companies} />
      <DownloadApp app_links={app_links} />
    </div>
  );
}
