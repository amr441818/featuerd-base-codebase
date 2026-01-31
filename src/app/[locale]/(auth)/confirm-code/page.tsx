import { FormConfirmCode } from '@/features/auth/components/confirm-code/confirm-code';
import Decorations from '@/features/shared/components/Decorations';

const page = () => {
  return (
    <div className='relative flex w-full items-center justify-center overflow-hidden bg-[#F5F5F5] py-[40px] lg:py-[60px]'>
      <Decorations />
      <FormConfirmCode />
    </div>
  );
};

export default page;
