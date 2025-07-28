"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import style from "./swiper.module.css";

import { MoveLeft } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { PostI } from "@/types/posts";
import { Container } from "../../container";
import PostCard from "../../PostCard/PostCard";


interface PostCardProps {
  posts: PostI[];
}
const LatestPosts = ({ posts }: PostCardProps) => {
  const t = useTranslations("latestPosts");

  const locale = useLocale();

  return (
    <>
      <div className="w-screen  relative my-[120px]">
        <Container className="w-screen flex justify-between items-start my-[50px] gap-4">
          <h3 className="text-[14px] md:text-[16px] lg:text-[31px] text-[#133658] font-medium md:font-bold">
            {t("title")}
          </h3>
          <div className="flex gap-1 md:gap-2 items-center shrink-0">
            <p className="text-[12px] md:text-[16px] text-[#ACACAC]">
              {t("seeAllPosts")}
            </p>
            <MoveLeft
              size={26}
              color="#C5E9D1"
              className={`${locale === "en" ? "rotate-180" : ""}`}
            />
          </div>
        </Container>
        <div className={`w-screen  ${style.CustomContainer}`}>
          <Swiper
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={10}
            slidesPerView={2}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 2.3,
              },
            }}
            modules={[Autoplay, Pagination]}
            className={`w-full h-full relative z-[50]  ${style.mySwiper}`}
            centeredSlides={false}
            slidesOffsetBefore={0}
            slidesOffsetAfter={0}
          >
            {posts?.map((post) => (
              <SwiperSlide
                key={post.id}
                className="!flex !justify-center !items-center px-4 sm:px-0"
              >
                <PostCard post={post} />
              </SwiperSlide>
            ))}
            <div className="bullets w-full h-[50px]"></div>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default LatestPosts;
