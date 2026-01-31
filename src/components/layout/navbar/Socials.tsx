'use client';

import React from 'react';

import { useQuery } from '@tanstack/react-query';
import { useLocale } from 'next-intl';

import apiServiceCall from '@/lib/apiServiceCall';

const Socials = () => {
  const locale = useLocale();
  const { data } = useQuery({
    queryKey: ['socials'],
    queryFn: async () =>
      apiServiceCall({
        method: 'get',
        url: 'settings',
        headers: {
          'Content-Type': 'application/json',
          'Accept-Language': locale,
        },
      }),
  });
  const seetingsData = data?.data;
  const whatsapp = seetingsData?.whatsapp;
  const snapchat = seetingsData?.snapchat;
  const instagram = seetingsData?.instagram;
  const facebook = seetingsData?.facebook;
  const x = seetingsData?.x;
  const youtube = seetingsData?.youtube;
  const linkedin = seetingsData?.linkedin;
  const tiktok = seetingsData?.tiktok;

  return (
    <div className='flex w-full flex-wrap items-center justify-start gap-[6px] md:gap-[8px]'>
      {/* Snapchat */}
      <a
        href={snapchat || 'https://www.snapchat.com'}
        target='_blank'
        className='group flex h-[35px] w-[35px] items-center justify-center rounded-[5px] bg-[#FFFFFF]/[30%] fill-current text-[#FFFFFF] transition-all duration-300 hover:bg-[#fff] hover:text-[#FFFC00] md:h-[40px] md:w-[40px]'
      >
        <svg
          width='16'
          height='16'
          viewBox='0 0 20 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='md:h-[18px] md:w-[20px]'
        >
          <path
            d='M18.8371 13.4411C18.0068 13.2396 17.2343 12.8492 16.5798 12.3002C15.9253 11.7512 15.4063 11.0585 15.0635 10.2761C15.0604 10.2686 15.0567 10.2612 15.0525 10.2542C14.9915 10.1581 14.9519 10.0501 14.9363 9.93747C14.9207 9.8248 14.9296 9.7101 14.9622 9.60114C15.1026 9.27158 15.641 9.10192 15.9962 8.99085C16.1 8.95789 16.1964 8.92737 16.277 8.89564C16.5615 8.79774 16.8226 8.64188 17.0437 8.43792C17.1158 8.3708 17.1736 8.28983 17.2136 8.19986C17.2537 8.10989 17.2752 8.01276 17.2769 7.91429C17.2595 7.74632 17.1909 7.58775 17.0804 7.46003C16.9699 7.33231 16.8229 7.24163 16.6591 7.20024C16.5263 7.1473 16.3846 7.12036 16.2416 7.1209C16.1076 7.11899 15.9748 7.14606 15.8522 7.20024C15.6023 7.32698 15.3304 7.40447 15.0513 7.42849C14.9602 7.42602 14.8704 7.40656 14.7864 7.37113C14.7937 7.24907 14.8011 7.12701 14.8096 7.00495V6.95002C14.996 5.6544 14.9129 4.33424 14.5654 3.07222C14.2888 2.43927 13.8892 1.86756 13.3898 1.39025C12.9778 1.00286 12.502 0.689451 11.9834 0.463823C11.2901 0.161263 10.5424 0.00343096 9.78593 0H9.74442H9.41358C8.65721 0.00401146 7.90956 0.161819 7.21611 0.463823C6.69901 0.68899 6.22483 1.00202 5.81461 1.38903C5.31732 1.86316 4.91826 2.43053 4.64019 3.05879C4.29338 4.32009 4.21027 5.63931 4.39602 6.93416C4.40457 7.0733 4.41434 7.21855 4.42288 7.36014C4.32317 7.40156 4.21585 7.42152 4.10791 7.41873C3.80991 7.40428 3.51848 7.32603 3.25334 7.18926C3.15089 7.14337 3.03963 7.12045 2.92738 7.12213C2.72487 7.12427 2.52651 7.17985 2.35238 7.28325C2.25135 7.3358 2.16279 7.40941 2.09266 7.49911C2.02252 7.58881 1.97246 7.69251 1.94584 7.80321C1.92728 7.92969 1.94284 8.05883 1.99092 8.17728C2.03899 8.29573 2.11784 8.3992 2.21931 8.47698C2.43196 8.65415 2.67411 8.79256 2.93471 8.88588C3.0165 8.91883 3.11417 8.94812 3.21549 8.98108C3.57075 9.09337 4.11035 9.26426 4.25075 9.59137C4.28281 9.70047 4.29123 9.81515 4.27544 9.92776C4.25965 10.0404 4.22002 10.1483 4.15918 10.2444C4.15541 10.2515 4.15215 10.2588 4.14942 10.2664C3.89859 10.8081 3.57268 11.3119 3.18131 11.7628C2.84377 12.1604 2.4507 12.5074 2.01421 12.793C1.5189 13.117 0.961952 13.3352 0.378314 13.4338C0.267576 13.4512 0.167402 13.5095 0.0975642 13.5972C0.0277267 13.6849 -0.00669943 13.7956 0.0010811 13.9074C0.00484302 13.9747 0.0205513 14.0408 0.0474722 14.1027C0.188763 14.3614 0.420393 14.5591 0.698168 14.658C1.3004 14.9022 1.93207 15.0663 2.57701 15.1463C2.62812 15.2799 2.66655 15.418 2.69176 15.5588C2.7235 15.7029 2.75524 15.8518 2.80164 16.0092C2.82843 16.123 2.89515 16.2234 2.98969 16.2921C3.08423 16.3609 3.2003 16.3935 3.31682 16.3839C3.46565 16.3768 3.61355 16.3563 3.75876 16.3229C4.0898 16.2512 4.42724 16.2132 4.76593 16.2094C5.0073 16.2099 5.24821 16.2303 5.48621 16.2704C5.98019 16.3992 6.43905 16.6369 6.82911 16.9662C7.57302 17.5982 8.50764 17.9623 9.48317 18H9.58083C9.61868 18 9.66873 18 9.71879 18C10.6941 17.9622 11.6285 17.5986 12.3728 16.9674C12.7633 16.639 13.2221 16.4018 13.7157 16.2729C13.9537 16.2327 14.1947 16.2123 14.436 16.2118C14.7745 16.2138 15.1119 16.2498 15.4432 16.3193C15.5886 16.3506 15.7365 16.3686 15.8851 16.373H15.9071C16.018 16.3765 16.1268 16.3421 16.2155 16.2756C16.3043 16.209 16.3678 16.1142 16.3954 16.0068C16.4406 15.8518 16.4736 15.7077 16.5053 15.56C16.5307 15.4202 16.5687 15.2829 16.6188 15.1499C17.2637 15.0694 17.8953 14.9053 18.4977 14.6617C18.7746 14.5624 19.0056 14.3653 19.1472 14.1075C19.1747 14.045 19.1909 13.978 19.1948 13.9098C19.2022 13.8016 19.1701 13.6943 19.1042 13.6081C19.0384 13.5218 18.9435 13.4625 18.8371 13.4411Z'
            fill='currentColor'
          />
        </svg>
      </a>

      {/* YouTube */}
      <a
        href={youtube || 'https://www.youtube.com'}
        target='_blank'
        className='group flex h-[35px] w-[35px] items-center justify-center rounded-[5px] bg-[#FFFFFF]/[30%] fill-current text-[#FFFFFF] transition-all duration-300 hover:bg-[#fff] hover:text-[#FF0000] md:h-[40px] md:w-[40px]'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          viewBox='0 0 24 24'
          className='md:h-[20px] md:w-[20px]'
        >
          <path d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' />
        </svg>
      </a>

      {/* Instagram */}
      <a
        href={instagram || 'https://www.instagram.com'}
        target='_blank'
        className='group flex h-[35px] w-[35px] items-center justify-center rounded-[5px] bg-[#FFFFFF]/[30%] transition-all duration-300 hover:bg-[#fff] md:h-[40px] md:w-[40px]'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          viewBox='0 0 12.301 12.302'
          className='fill-current text-[#FFFFFF] transition-all duration-300 group-hover:text-[#E1306C] md:h-[18px] md:w-[18px]'
        >
          <path
            d='M9.231,0H3.08A3.085,3.085,0,0,0,.005,3.075V9.226A3.085,3.085,0,0,0,3.08,12.3H9.231a3.085,3.085,0,0,0,3.075-3.075V3.075A3.085,3.085,0,0,0,9.231,0Zm2.05,9.226a2.052,2.052,0,0,1-2.05,2.05H3.08a2.053,2.053,0,0,1-2.05-2.05V3.075a2.053,2.053,0,0,1,2.05-2.05H9.231a2.052,2.052,0,0,1,2.05,2.05Z'
            transform='translate(-0.005 0)'
          />
          <circle cx='0.769' cy='0.769' r='0.769' transform='translate(8.714 2.05)' />
          <path
            d='M105.48,102.4a3.075,3.075,0,1,0,3.075,3.075A3.075,3.075,0,0,0,105.48,102.4Zm0,5.126a2.05,2.05,0,1,1,2.05-2.05A2.05,2.05,0,0,1,105.48,107.526Z'
            transform='translate(-99.33 -99.325)'
          />
        </svg>
      </a>

      {/* Facebook */}
      <a
        href={facebook || 'https://www.facebook.com'}
        target='_blank'
        className='group flex h-[35px] w-[35px] items-center justify-center rounded-[5px] bg-[#FFFFFF]/[30%] fill-current text-[#FFFFFF] transition-all duration-300 hover:bg-[#fff] hover:text-[#1877F2] md:h-[40px] md:w-[40px]'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          viewBox='0 0 24 24'
          className='md:h-[18px] md:w-[18px]'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M17 2h-3a5 5 0 0 0-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'
          />
        </svg>
      </a>

      {/* X (Twitter) */}
      <a
        href={x || 'https://www.x.com'}
        target='_blank'
        className='group flex h-[35px] w-[35px] items-center justify-center rounded-[5px] bg-[#FFFFFF]/[30%] fill-current text-[#FFFFFF] transition-all duration-300 hover:bg-[#fff] hover:text-[#000000] md:h-[40px] md:w-[40px]'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          viewBox='0 0 11.495 11.747'
          className='md:h-[18px] md:w-[18px]'
        >
          <path
            d='M20.026,4.974,24.3,0H23.291L19.575,4.319,16.608,0H13.185l4.488,6.531-4.488,5.216H14.2l3.924-4.561,3.134,4.561H24.68L20.026,4.974ZM18.637,6.589l-.455-.65L14.564.763h1.558l2.92,4.176.455.65,3.8,5.429H21.734l-3.1-4.43Z'
            transform='translate(-13.185)'
          />
        </svg>
      </a>

      {/* LinkedIn */}
      <a
        href={linkedin || 'https://www.linkedin.com'}
        target='_blank'
        className='group flex h-[35px] w-[35px] items-center justify-center rounded-[5px] bg-[#FFFFFF]/[30%] fill-current text-[#FFFFFF] transition-all duration-300 hover:bg-[#fff] hover:text-[#0A66C2] md:h-[40px] md:w-[40px]'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          viewBox='0 0 24 24'
          className='md:h-[18px] md:w-[18px]'
        >
          <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
        </svg>
      </a>

      {/* TikTok */}
      <a
        href={tiktok || 'https://www.tiktok.com'}
        target='_blank'
        className='group flex h-[35px] w-[35px] items-center justify-center rounded-[5px] bg-[#FFFFFF]/[30%] fill-current text-[#FFFFFF] transition-all duration-300 hover:bg-[#fff] hover:text-[#000000] md:h-[40px] md:w-[40px]'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          viewBox='0 0 24 24'
          className='md:h-[18px] md:w-[18px]'
        >
          <path d='M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z' />
        </svg>
      </a>

      {/* WhatsApp */}
      <a
        href={whatsapp || 'https://www.whatsapp.com'}
        target='_blank'
        className='group flex h-[35px] w-[35px] items-center justify-center rounded-[5px] bg-[#FFFFFF]/[30%] fill-current text-[#FFFFFF] transition-all duration-300 hover:bg-[#fff] hover:text-[#25D366] md:h-[40px] md:w-[40px]'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          viewBox='0 0 13.287 13.288'
          className='md:h-[18px] md:w-[18px]'
        >
          <path
            d='M12.36,10.756l0,.042c-1.217-.607-1.345-.688-1.5-.452-.109.163-.427.534-.523.643s-.193.116-.358.042a4.493,4.493,0,0,1-1.33-.822,5.023,5.023,0,0,1-.919-1.146c-.162-.28.177-.32.486-.9a.3.3,0,0,0-.014-.29c-.042-.083-.372-.9-.51-1.221s-.27-.282-.372-.282a.824.824,0,0,0-.757.19c-.894.982-.668,2,.1,3.073a6.543,6.543,0,0,0,3.767,2.831,2.291,2.291,0,0,0,1.041.067,1.7,1.7,0,0,0,1.116-.789,1.37,1.37,0,0,0,.1-.789C12.635,10.873,12.526,10.831,12.36,10.756Z'
            transform='translate(-2.668 -2.835)'
          />
          <path
            d='M11.361,1.909A6.645,6.645,0,0,0,.056,6.584,6.553,6.553,0,0,0,.939,9.876L0,13.287l3.507-.915a6.627,6.627,0,0,0,9.78-5.785,6.53,6.53,0,0,0-1.935-4.657Zm.82,4.66A5.512,5.512,0,0,1,3.87,11.277l-.2-.118-2.076.54.556-2.018-.132-.208A5.491,5.491,0,0,1,10.571,2.7a5.419,5.419,0,0,1,1.611,3.87Z'
            transform='translate(0 0)'
          />
        </svg>
      </a>
    </div>
  );
};

export default Socials;
