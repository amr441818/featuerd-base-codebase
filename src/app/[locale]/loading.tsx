import React from 'react';

export default function loading() {
  return (
    <div id='loader' dir='ltr'>
      <div className='flex h-screen items-center justify-center overflow-hidden bg-black/90'>
        <div className='loader flex flex-row items-center justify-center'>
          <svg height='0' width='0' viewBox='0 0 64 64' className='absolute'>
            <defs>
              <linearGradient gradientUnits='userSpaceOnUse' y2='2' x2='0' y1='62' x1='0' id='b'>
                <stop stopColor='#E8621A'></stop>
                <stop stopColor='#E8621A' offset='1'></stop>
              </linearGradient>
              <linearGradient gradientUnits='userSpaceOnUse' y2='0' x2='0' y1='64' x1='0' id='c'>
                <stop stopColor='#E8621A'></stop>
                <stop stopColor='#E8621A' offset='1'></stop>
                <animateTransform
                  repeatCount='indefinite'
                  keySplines='.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1'
                  keyTimes='0; 0.125; 0.25; 0.375; 0.5; 0.625; 0.75; 0.875; 1'
                  dur='8s'
                  values='0 32 32;-270 32 32;-270 32 32;-540 32 32;-540 32 32;-810 32 32;-810 32 32;-1080 32 32;-1080 32 32'
                  type='rotate'
                  attributeName='gradientTransform'
                ></animateTransform>
              </linearGradient>
              <linearGradient gradientUnits='userSpaceOnUse' y2='2' x2='0' y1='62' x1='0' id='d'>
                <stop stopColor='#E8621A'></stop>
                <stop stopColor='#E8621A' offset='1'></stop>
              </linearGradient>
              <linearGradient gradientUnits='userSpaceOnUse' y2='2' x2='0' y1='62' x1='0' id='e'>
                <stop stopColor='#E8621A'></stop>
                <stop stopColor='#E8621A' offset='1'></stop>
              </linearGradient>
            </defs>
          </svg>
          {/* W */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 64 64'
            height='64'
            width='64'
            className='inline-block'
          >
            <path
              strokeLinejoin='round'
              strokeLinecap='round'
              strokeWidth='8'
              stroke='url(#b)'
              d='M 12 16 L 24 48 L 32 32 L 40 48 L 52 16'
              className='dash'
              id='w'
              pathLength='360'
            ></path>
          </svg>
          <div className='w-2'></div>
          {/* E */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 64 64'
            height='64'
            width='64'
            className='inline-block'
          >
            <path
              strokeLinejoin='round'
              strokeLinecap='round'
              strokeWidth='8'
              stroke='url(#b)'
              d='M 48 16 L 16 16 L 16 48 L 48 48 M 16 32 L 38 32'
              className='dash'
              id='e'
              pathLength='360'
            ></path>
          </svg>
          <div className='w-2'></div>
          {/* L */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 64 64'
            height='64'
            width='64'
            className='inline-block'
          >
            <path
              strokeLinejoin='round'
              strokeLinecap='round'
              strokeWidth='8'
              stroke='url(#b)'
              d='M 24 16 L 24 48 L 48 48'
              className='dash'
              id='l1'
              pathLength='360'
            ></path>
          </svg>
          <div className='w-2'></div>
          {/* L */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 64 64'
            height='64'
            width='64'
            className='inline-block'
          >
            <path
              strokeLinejoin='round'
              strokeLinecap='round'
              strokeWidth='8'
              stroke='url(#b)'
              d='M 24 16 L 24 48 L 48 48'
              className='dash'
              id='l2'
              pathLength='360'
            ></path>
          </svg>
          <div className='w-2'></div>

          <div className='w-2'></div>
          {/* 7 */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 64 64'
            height='64'
            width='64'
            className='inline-block'
          >
            <path
              strokeLinejoin='round'
              strokeLinecap='round'
              strokeWidth='8'
              stroke='#818284'
              d='M 16 16 L 48 16 L 24 48'
              className='dash'
              id='seven'
              pathLength='360'
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
