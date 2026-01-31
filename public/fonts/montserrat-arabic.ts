import localFont from 'next/font/local';

const montserratArabic = localFont({
  src: [
    {
      path: './Montserrat-Arabic Thin 250.otf',
      weight: '250',
      style: 'normal',
    },
    {
      path: './Montserrat-Arabic ExtraLight 275.otf',
      weight: '275',
      style: 'normal',
    },
    {
      path: './Montserrat-Arabic Light 300.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './Montserrat-Arabic Regular 400.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Montserrat-Arabic Medium 500.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Montserrat-Arabic SemiBold 600.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './Montserrat-Arabic Bold 700.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Montserrat-Arabic ExtraBold 800.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './Montserrat-Arabic Black 900.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-montserrat-arabic',
  display: 'swap',
});

export default montserratArabic;
