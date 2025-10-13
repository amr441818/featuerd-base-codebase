'use client';

import { usePathname } from 'next/navigation';

import { useTranslations } from 'next-intl';

const Language = ({ isMobile }: { isMobile?: boolean }) => {
  const t = useTranslations('navbarFooter');

  const pathname = usePathname();
  const place = pathname.split('/').pop();

  console.log('pathname', pathname);
  console.log('place', place);

  const toggleLanguage = () => {
    // const newLang = lang === "en" ? "ar" : "en";
    // const newPath = `/${newLang}${pathname.replace(/^\/(en|ar)/, "")}`; // Replace language in URL
    // // router.push(newPath);
    // window.location.href = newPath
    // console.log("newPath.....................", newPath);

    const newLang = 'en';

    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    const pathWithoutLang = url.pathname.replace(/^\/(en|ar)/, '');
    const newPath = `/${newLang}${pathWithoutLang}${url.search}`;

    window.location.href = newPath;
  };

  return (
    <>
      <div className={`flex cursor-pointer items-center justify-center`} onClick={toggleLanguage}>
        <button className='flex items-center justify-between gap-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='12.754'
            height='12.754'
            viewBox='0 0 12.754 12.754'
          >
            <g id='Layer_2' data-name='Layer 2' transform='translate(-5.5 -5.5)'>
              <path
                id='Path_66604'
                data-name='Path 66604'
                d='M17.316,15.206a6.347,6.347,0,0,0,.938-3.329h0a6.347,6.347,0,0,0-.938-3.329l0-.005a6.377,6.377,0,0,0-10.871,0l0,.006a6.379,6.379,0,0,0,0,6.658l0,.006a6.377,6.377,0,0,0,10.871,0Zm-4.624,1.955a1.55,1.55,0,0,1-.414.286.935.935,0,0,1-.8,0,1.952,1.952,0,0,1-.723-.637,5.7,5.7,0,0,1-.824-1.787q.973-.06,1.948-.061t1.948.061a7.193,7.193,0,0,1-.349.962,3.7,3.7,0,0,1-.784,1.176ZM6.229,12.235H8.8a12.654,12.654,0,0,0,.233,2.137q-1.055.093-2.1.255a5.622,5.622,0,0,1-.7-2.392Zm.7-3.109q1.049.163,2.1.255A12.632,12.632,0,0,0,8.8,11.519H6.229a5.622,5.622,0,0,1,.7-2.392Zm4.132-2.534a1.549,1.549,0,0,1,.414-.286.935.935,0,0,1,.8,0A1.952,1.952,0,0,1,13,6.944a5.7,5.7,0,0,1,.824,1.787q-.973.06-1.948.061T9.929,8.731a7.192,7.192,0,0,1,.349-.962,3.7,3.7,0,0,1,.784-1.176Zm6.463,4.926H14.953a12.655,12.655,0,0,0-.233-2.137q1.055-.093,2.1-.255A5.622,5.622,0,0,1,17.525,11.519Zm-7.771,2.8a11.85,11.85,0,0,1-.236-2.082h4.718A11.848,11.848,0,0,1,14,14.317q-1.06-.07-2.123-.071T9.754,14.317ZM14,9.437a11.852,11.852,0,0,1,.236,2.082H9.518a11.848,11.848,0,0,1,.236-2.082q1.06.07,2.123.071T14,9.437Zm.953,2.8h2.572a5.622,5.622,0,0,1-.7,2.392q-1.049-.163-2.1-.255a12.632,12.632,0,0,0,.233-2.137Zm1.442-3.768q-.917.132-1.84.21a8.171,8.171,0,0,0-.426-1.2,5.084,5.084,0,0,0-.593-1.01A5.659,5.659,0,0,1,16.395,8.467Zm-8.52-.593a5.659,5.659,0,0,1,2.344-1.411l-.04.052A6.541,6.541,0,0,0,9.2,8.677q-.923-.078-1.841-.21a5.707,5.707,0,0,1,.515-.593Zm-.515,7.412q.917-.132,1.84-.21a8.171,8.171,0,0,0,.426,1.2,5.085,5.085,0,0,0,.593,1.01,5.659,5.659,0,0,1-2.859-2Zm8.52.593a5.658,5.658,0,0,1-2.344,1.411l.04-.052a6.541,6.541,0,0,0,.978-2.161q.923.078,1.841.21a5.707,5.707,0,0,1-.515.593Z'
                fill='#7a7a7a'
              />
            </g>
          </svg>
          {!isMobile && (
            <>
              <span className='text-[10px] text-[#808080]'>{t('language')}</span>
              {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="5"
            viewBox="0 0 17 5"
          >
            <path
              id="Polygon_6"
              data-name="Polygon 6"
              d="M7.993.3A1,1,0,0,1,9.007.3l4.828,2.84A1,1,0,0,1,13.328,5H3.672a1,1,0,0,1-.507-1.862Z"
              transform="translate(17 5) rotate(180)"
              fill="#969696"
            />
          </svg> */}
            </>
          )}
        </button>{' '}
      </div>
    </>
  );
};

export default Language;
