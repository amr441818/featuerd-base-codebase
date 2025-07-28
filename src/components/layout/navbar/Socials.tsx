"use client";
import apiServiceCall from "@/lib/apiServiceCall";
import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";
import React from "react";
import { SettingsI } from "../../../../types/settings";

const Socials = () => {
  const locale = useLocale();
  const { data } = useQuery({
    queryKey: ["socials"],
    queryFn: async () =>
      apiServiceCall({
        method: "get",
        url: "settings",
        headers: {
          "Content-Type": "application/json",
          "Accept-Language": locale,
        },
      }),
  });
  const seetingsData: SettingsI = data?.data;
  const whatsapp = seetingsData?.whatsapp;
  const snapchat = seetingsData?.snapchat;
  const instagram = seetingsData?.instagram;
  const facebook = seetingsData?.facebook;
  const x = seetingsData?.x;

  return (
    <div className="flex  justify-center items-center gap-[13px]">
      <a
        href={whatsapp || "https://www.whatsapp.com"}
        target="_blank"
        className={` w-[36px] h-[36px] rounded-full border-[1px] border-[#fff]/[0.18] hover:bg-[#fff] hover:text-[#389C63] fill-current text-[#FFFFFF]  transition-all duration-300 flex items-center justify-center`}
      >
        <svg
          id="_2253"
          data-name="2253"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 13.287 13.288"
          //  className="fill-current text-[#FFFFFF] hover:fill-white transition-all duration-300"
        >
          <path
            id="Path_63417"
            data-name="Path 63417"
            d="M12.36,10.756l0,.042c-1.217-.607-1.345-.688-1.5-.452-.109.163-.427.534-.523.643s-.193.116-.358.042a4.493,4.493,0,0,1-1.33-.822,5.023,5.023,0,0,1-.919-1.146c-.162-.28.177-.32.486-.9a.3.3,0,0,0-.014-.29c-.042-.083-.372-.9-.51-1.221s-.27-.282-.372-.282a.824.824,0,0,0-.757.19c-.894.982-.668,2,.1,3.073a6.543,6.543,0,0,0,3.767,2.831,2.291,2.291,0,0,0,1.041.067,1.7,1.7,0,0,0,1.116-.789,1.37,1.37,0,0,0,.1-.789C12.635,10.873,12.526,10.831,12.36,10.756Z"
            transform="translate(-2.668 -2.835)"
            // fill="#FFFFFF"
          />
          <path
            id="Path_63418"
            data-name="Path 63418"
            d="M11.361,1.909A6.645,6.645,0,0,0,.056,6.584,6.553,6.553,0,0,0,.939,9.876L0,13.287l3.507-.915a6.627,6.627,0,0,0,9.78-5.785,6.53,6.53,0,0,0-1.935-4.657Zm.82,4.66A5.512,5.512,0,0,1,3.87,11.277l-.2-.118-2.076.54.556-2.018-.132-.208A5.491,5.491,0,0,1,10.571,2.7a5.419,5.419,0,0,1,1.611,3.87Z"
            transform="translate(0 0)"
            // fill="#FFFFFF"
          />
        </svg>
      </a>

      <a
        href={snapchat || "https://www.snapchat.com"}
        target="_blank"
        className={` w-[36px] h-[36px] rounded-full border-[1px] border-[#fff]/[0.18] hover:bg-[#fff] hover:text-[#389C63] fill-current text-[#FFFFFF]  transition-all duration-300 flex items-center justify-center`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 13.905 13.405"
        >
          <path
            id="snapchat"
            d="M6.7,9.44a3.331,3.331,0,0,1,3.3,3.3c0,.422.014.811.037,1.17a.41.41,0,0,0,.5.374l.564-.132a.315.315,0,0,1,.379.234.415.415,0,0,1-.268.481l-.855.345a.46.46,0,0,0-.271.547c.686,2.537,2.6,2.274,2.6,2.6,0,.415-1.445.474-1.575.6s-.006.764-.3.887a.621.621,0,0,1-.228.031c-.22,0-.53-.043-.858-.043A2.01,2.01,0,0,0,8.888,20a5.463,5.463,0,0,1-2.186.917A5.463,5.463,0,0,1,4.516,20a2.01,2.01,0,0,0-.842-.153c-.327,0-.638.043-.858.043a.622.622,0,0,1-.228-.031c-.292-.123-.167-.756-.3-.887s-1.575-.189-1.575-.6c0-.331,1.917-.067,2.6-2.6a.46.46,0,0,0-.271-.547l-.855-.345a.415.415,0,0,1-.268-.481.315.315,0,0,1,.379-.234l.564.132a.41.41,0,0,0,.5-.374c.024-.358.037-.747.037-1.17A3.321,3.321,0,0,1,6.7,9.44m0-.716h0a3.918,3.918,0,0,0-1.555.321,4.074,4.074,0,0,0-2.13,2.14,3.963,3.963,0,0,0-.319,1.556c0,.264-.006.52-.016.765l-.21-.049a1.03,1.03,0,0,0-1.241.776,1.131,1.131,0,0,0,.71,1.3l.628.253a2.286,2.286,0,0,1-1.7,1.685,2.581,2.581,0,0,0-.368.137.827.827,0,0,0-.5.752.932.932,0,0,0,.388.748,1.651,1.651,0,0,0,.472.24,5.893,5.893,0,0,0,.815.194,1.853,1.853,0,0,0,.059.29,1.008,1.008,0,0,0,.578.679,1.305,1.305,0,0,0,.506.087c.125,0,.258-.01.4-.02s.306-.023.46-.023a1.321,1.321,0,0,1,.542.087c.174.08.358.188.553.3a3.769,3.769,0,0,0,1.934.68,3.769,3.769,0,0,0,1.933-.68c.195-.114.379-.223.553-.3a1.32,1.32,0,0,1,.542-.087c.154,0,.309.012.46.023s.273.02.4.02a1.306,1.306,0,0,0,.506-.087,1.008,1.008,0,0,0,.578-.679,1.849,1.849,0,0,0,.059-.29,5.9,5.9,0,0,0,.815-.194,1.65,1.65,0,0,0,.472-.24.932.932,0,0,0,.388-.748.826.826,0,0,0-.5-.752,2.581,2.581,0,0,0-.368-.137,2.286,2.286,0,0,1-1.7-1.685l.628-.253a1.131,1.131,0,0,0,.71-1.3,1.025,1.025,0,0,0-.372-.586,1.032,1.032,0,0,0-.869-.19l-.21.049c-.011-.245-.016-.5-.016-.765a3.944,3.944,0,0,0-.321-1.558A4.088,4.088,0,0,0,8.252,9.044,3.932,3.932,0,0,0,6.7,8.724Z"
            transform="translate(0.25 -8.474)"
            // fill="#FFFFFF"
            // stroke="#FFFFFF"
            strokeWidth="0.5"
          />
        </svg>
      </a>

      <a
        href={instagram || "https://www.instagram.com"}
        target="_blank"
        className={` w-[36px] h-[36px] rounded-full border-[1px] border-[#fff]/[0.18] hover:bg-[#fff] hover:text-[#389C63] fill-current text-[#FFFFFF]  transition-all duration-300 flex items-center justify-center`}
      >
        <svg
          id="Group_175278"
          data-name="Group 175278"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 12.301 12.302"
        >
          <path
            id="Path_63588"
            data-name="Path 63588"
            d="M9.231,0H3.08A3.085,3.085,0,0,0,.005,3.075V9.226A3.085,3.085,0,0,0,3.08,12.3H9.231a3.085,3.085,0,0,0,3.075-3.075V3.075A3.085,3.085,0,0,0,9.231,0Zm2.05,9.226a2.052,2.052,0,0,1-2.05,2.05H3.08a2.053,2.053,0,0,1-2.05-2.05V3.075a2.053,2.053,0,0,1,2.05-2.05H9.231a2.052,2.052,0,0,1,2.05,2.05Z"
            transform="translate(-0.005 0)"
            // fill="#fff"
          />
          <circle
            id="Ellipse_7911"
            data-name="Ellipse 7911"
            cx="0.769"
            cy="0.769"
            r="0.769"
            transform="translate(8.714 2.05)"
            // fill="#fff"
          />
          <path
            id="Path_63589"
            data-name="Path 63589"
            d="M105.48,102.4a3.075,3.075,0,1,0,3.075,3.075A3.075,3.075,0,0,0,105.48,102.4Zm0,5.126a2.05,2.05,0,1,1,2.05-2.05A2.05,2.05,0,0,1,105.48,107.526Z"
            transform="translate(-99.33 -99.325)"
            // fill="#fff"
          />
        </svg>
      </a>

      <a
        href={x || "https://www.x.com"}
        target="_blank"
        className={` w-[36px] h-[36px] rounded-full border-[1px] border-[#fff]/[0.18] hover:bg-[#fff] hover:text-[#389C63] fill-current text-[#FFFFFF]  transition-all duration-300 flex items-center justify-center`}
      >
        <svg
          id="Group_175279"
          data-name="Group 175279"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 11.495 11.747"
        >
          <path
            id="Path_63590"
            data-name="Path 63590"
            d="M20.026,4.974,24.3,0H23.291L19.575,4.319,16.608,0H13.185l4.488,6.531-4.488,5.216H14.2l3.924-4.561,3.134,4.561H24.68L20.026,4.974ZM18.637,6.589l-.455-.65L14.564.763h1.558l2.92,4.176.455.65,3.8,5.429H21.734l-3.1-4.43Z"
            transform="translate(-13.185)"
            // fill="#FFFFFF"
          />
        </svg>
      </a>

      <a
        href={facebook || "https://www.facebook.com"}
        target="_blank"
        className={` w-[36px] h-[36px] rounded-full border-[1px] border-[#fff]/[0.18] hover:bg-[#fff] hover:text-[#389C63] fill-current text-[#FFFFFF]  transition-all duration-300 flex items-center justify-center`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path
            // fill="none"
            // stroke="#133658"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 2h-3a5 5 0 0 0-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
          ></path>
        </svg>
      </a>
    </div>
  );
};

export default Socials;
