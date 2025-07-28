

"use client";







import CustomLink from "@/components/formInputs/CustomLink";
import Socials from "./Socials";
import { Menu } from "lucide-react";

function AsideMenu({
  lang,

  open,
  setOpen,
  menuItems
}: {
  lang: string;
  iconColor?: string;
  open: boolean;
  register?: any;
  setOpen: (open: boolean) => void;
  menuItems:Record<string,string>[]
}) {


  return (
    <>
      <div className=" cursor-pointer lg:hidden " onClick={() => setOpen(!open)}>
          {/* <Image
            className="min-w-[24px] min-h-[24px]"
            src={iconColor === "black" ? menuBlack : menu}
            width={24}
            height={24}
            alt="currency"
          /> */}
          <Menu color="#fff" size={24} />
        </div>
      {/* aside*/}
      <div
        className={`  [&_*]:!text-[#8D8D8D] hover:[&_*]:!text-[#43316E] fixed top-0 ${lang == "ar" ? "right-0 rounded-tl-3xl rounded-bl-3xl" : "left-0 rounded-tr-3xl rounded-br-3xl"}  w-[70%] sm:w-[calc(100%-100px)] md:w-[calc(100%-150px)] max-w-[350px] min-w-[250px] h-svh bg-white backdrop-blur-sm z-[100] flex justify-center items-start duration-500 ${
          open ? "translate-x-0" :  lang == "ar" ? "translate-x-full" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-1  items-start w-full px-4 sm:px-6 md:px-8 text-base sm:text-lg md:text-xl font-medium">
          <div
            className="mt-8 sm:mt-10 md:mt-12 flex gap-2 items-center justify-start w-full cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 32 32"
              >
                <path
                  fill="#43316E"
                  d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m0 26C9.4 28 4 22.6 4 16S9.4 4 16 4s12 5.4 12 12s-5.4 12-12 12"
                />
                <path
                  fill="#43316E"
                  d="M21.4 23L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"
                />
              </svg>
            </span>{" "}
            {/* close */}
          </div>{" "}
          <ul className="flex flex-col gap-3 items-start pb-4 sm:pb-6 w-full">
            {menuItems?.map((item, i) => (
              <li
                key={item?.value}
                className={`${
        lang === "ar"
          ? "translate-x-[100%]"
          : "translate-x-[-100%]"
      } ${
        open ? "!translate-x-0" : ""
      } text-sm sm:text-base md:text-lg transition-transform duration-500`}
                style={{ transitionDuration: `${300 * (i + 1)}ms` }}
                onClick={() => setOpen(false)}
              >
                <CustomLink
                  locale={lang}
                  href={item.path}
                  className="text-white"
                  onClick={() => setOpen(false)}
                >
                  {item.value}
                </CustomLink>
              </li>
            ))}
              {/* <MainLink
                    href="login"
                    onClick={() => setOpen(false)}
                    className="px-4 py-2 xl:px-6 xl:py-3 rounded-[8px]  text-white  min-w-fit   bg-primary"
                  >
                    <div onClick={() => setOpen(false)} className="flex gap-1 items-center">
                      <span className="">تسجيل الدخول</span>
                    </div>
                  </MainLink>
                  <MainLink
                    href="register"
                    onClick={() => setOpen(false)}
                    className="px-4 py-2 xl:px-6 xl:py-3 rounded-[8px] !bg-[#5BB98D] text-white  min-w-fit  "
                  >
                    <div onClick={() => setOpen(false)} className="flex gap-1 items-center">
                      <span className="">حساب جديد</span>
                    </div>
                  </MainLink> */}
            {/* <Language className="px-0 hidden lg:flex" /> */}
            {/* <Customsearch register={register} lang={lang}/> */}
            <li className="mt-1">  
            <Socials/>

            </li>
          </ul>
        </div>
      </div>
      {open && (
        <div
          className={`fixed top-0 left-0 right-0 bottom-0 bg-[#00000000]/20 z-10 duration-500`}
          onClick={() => setOpen(false)}
        ></div>
      )}
    </>
  );
}

export default AsideMenu;
