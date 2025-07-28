"use client";
import React from "react";

import MainLinks from "./MainLinks";
import ContactUs from "./ContactUs";
import Logo from "./Logo";
import { Container } from "@/features/shared";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#5FC181] to-[#016939] text-[#FFFFFF] rounded-tl-[29px] rounded-tr-[29px] overflow-hidden">
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative mt-[60px] mb-[34px] ">
        <Logo />
        <MainLinks />
        <ContactUs />
      </Container>
    </footer>
  );
};

export default Footer;
