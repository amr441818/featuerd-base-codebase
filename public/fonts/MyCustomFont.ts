import localFont from 'next/font/local';

const myCustomFont = localFont({
  src: [
    {
      path: './Montserrat-Arabic-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
   
    
  ],
  variable: '--font-myCustomFont', 
  display: 'swap',
});

export default myCustomFont;