import { Button } from '@/features/shared/components/formInputs/CustomButton';

const page = () => {
  return (
    <div className='mt-[500px]'>
      <Button variant={'secondary'} className='bg-red-500'>
        submit
      </Button>
    </div>
  );
};

export default page;
