import { Container } from '@/features/shared';
import CustomSectionHeader from '@/features/shared/components/CustomSectionHeader';

import { IManager } from '../../types/home-types';
import ManagersCard from './ManagersCard';

const managers: IManager[] = [
  {
    id: 1,
    name: 'مدير الجمعية',
    image: '/images/manager-1.svg',
    desc: 'مسؤول عن الإدارة العامة , وضع الخطط , الإشراف على الأنشطة , والتواصل مع الجهات الداعمة .',
  },
  {
    id: 2,
    name: 'مسوؤل التبرعات والعلاقات',
    image: '/images/manager-2.svg',
    desc: 'يتولى جمع التبرعات , التواصل مع المتبرعين , وتنظيم الحملات والفعاليات الخيرية .',
  },
  {
    id: 3,
    name: 'منسق المستفيدين والخدمات',
    image: '/images/manager-3.svg',
    desc: 'مسوؤل عن دراسة حالات المحتاجين , تنظيم المساعدات , ومتابعة تقديم الخدمة للمستحقين .',
  },
];

const Managers = () => {
  return (
    <section className='pb-10 lg:pb-[100px]'>
      <Container>
        <CustomSectionHeader
          isCenter={false}
          isPublic={true}
          title='مجلس الإدارة'
          desc='مُكرَّسة للجميع  خدمة رحيمة لجميع الناس في كل مكان تعني الوصول إلى جميع الأفراد بالرعاية والدعم الذي يحتاجونه.'
        />
        <div className='mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-[30px] lg:grid-cols-3 lg:gap-[22px]'>
          {managers?.map((manager) => (
            <ManagersCard key={manager.id} manager={manager} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Managers;
