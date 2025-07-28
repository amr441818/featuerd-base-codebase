
import { AboutSectionI } from "@/types/aboutSection";
import Image from "next/image";
import React from "react";
import { Container } from "../../container";

interface AboutProps {
  about_us: AboutSectionI;
}
const About = ({ about_us }: AboutProps) => {
  return (
    <Container className="grid grid-cols-6 place-items-start gap-4 md:gap-8 lg:gap-10 xl:gap-[100px]   my-[100px]">
      <Image
        src={about_us.about_us_image}
        alt="about"
        width={252}
        height={333}
        className="col-span-6 md:col-span-2 w-full h-[333px] "
      />
      <div className="col-span-6 md:col-span-4 flex flex-col justify-start items-start ">
        <h1 className="text-[#1A0F33] font-bold text-[14px] md:text-[16px] lg:text-[32px]">
          {about_us.about_us_title}
        </h1>
        <p
          className=" mt-[49px] mb-[26px]"
          dangerouslySetInnerHTML={{ __html: about_us.about_us_text }}
        >
          {/* {about_us.about_us_text} */}
        </p>
        {/* <p className="text-[#7C7D7E] text-[13px] md:text-[14px]  lg:text-[16px]">
          We are a leading platform connecting users with beauty clinics and
          salons. We are a leading platform connecting users with beauty clinics
          and salons. We are a leading platform connecting users with beauty
          clinics and salons.
        </p> */}
      </div>
    </Container>
  );
};

export default About;
