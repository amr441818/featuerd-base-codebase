import MyDonations from '@/features/my-donations/components/MyDonations';
import { Container } from '@/features/shared';

const page = () => {
  return (
    <div className='py-[40px] lg:py-[60px]'>
      <Container>
        <MyDonations />
      </Container>
    </div>
  );
};

export default page;
