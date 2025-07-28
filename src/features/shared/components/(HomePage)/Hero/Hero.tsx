"use client";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import style from "./swiper.module.css";
import { SliderItemI } from "../../../../types/sliders";

const Hero = ({ sliders }: { sliders: SliderItemI[] }) => {
  const locale = useLocale();

  return (
    <>
      <div className="w-screen h-[calc(100dvh-140px)] bg-gradient-to-r from-[#5FC181] to-[#016939] overflow-hidden relative ">
        {/* decorations */}
        {/* <div className="ellipse bg-[#5FC181] w-[175px] h-[175px] md:w-[357px] md:h-[357px] rounded-full absolute bottom-[60px] left-[-10px] md:left-[-86px] z-[0]"></div>
        <div className="ellipse bg-[#5FC181] w-[75px] h-[75px] md:w-[131px] md:h-[131px] rounded-full absolute bottom-[10px] left-[-55px] z-[0]"></div>
        <div className="ellipse bg-[#5FC181] w-[240px] h-[240px] md:w-[456px] md:h-[456px] rounded-full absolute bottom-[60px] right-[-100px] md:right-[-200px] z-[0]"></div> */}
        <div className="w-full h-full">
          <Swiper
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            className={`${style.mySwiper} w-full h-full `}
          >
            {sliders.map((slider) => (
              <SwiperSlide key={slider.id} className="relative w-full h-full">
                {slider.type === "internal" && slider.url !== null ? (
                  <Link
                    href={`/${locale}/${slider.url}`}
                    className="w-full h-full"
                  >
                    <Image src={slider.image} alt={slider.title} fill />
                  </Link>
                ) : slider.type === "external" && slider.url !== null ? (
                  <a href={`${slider.url}`} target="_blank">
                    <Image src={slider.image} alt={slider.title} fill />
                  </a>
                ) : (
                  <Image src={slider.image} alt={slider.title} fill />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Hero;
