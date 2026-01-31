import { SignIn } from '@/features/auth';
import Decorations from '@/features/shared/components/Decorations';

const page = () => {
  return (
    <div className='relative flex w-full items-center justify-center overflow-hidden bg-[#F5F5F5] py-[40px] lg:py-[60px]'>
      <Decorations />
      <SignIn />
    </div>
  );
};

export default page;
