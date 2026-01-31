import Image from 'next/image';

const Logo = () => {
  return (
    <div className='mb-3 flex items-center gap-1 rounded-[50px] bg-[#FFFFFF]/[90%] px-[30px] py-[15px] md:mb-4 md:rounded-[100px] md:px-[50px] md:py-[18px] lg:px-[72px] lg:py-[22px]'>
      <Image
        src='/images/logo.svg'
        alt='location'
        width={269}
        height={124}
        className='h-auto w-[140px] sm:w-[180px] md:w-[220px] lg:w-[269px]'
      />
    </div>
  );
};

export default Logo;
