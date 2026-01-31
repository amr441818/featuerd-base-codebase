import React from 'react';

import BagIcon from '../../../../../public/assets/icons/BagIcon';
import PlantIcon from '../../../../../public/assets/icons/PlantIcon';
import WaterDropIcon from '../../../../../public/assets/icons/WaterDropIcon';
import { Container } from '../container';

const values = [
  {
    id: 1,
    title: 'التخصص والإحترافية',
    desc: 'نهتم فقط بمساعدة الأشخاص ذوى فقدان السمع أو صعوبات السمع منذ الصغر وترفر خبراء طبيين وتقنيين لضمان نجاح الزراعة',
    image: <BagIcon className='group' />,
  },
  {
    id: 2,
    title: 'الدعم الشامل للمستفيدين',
    image: <WaterDropIcon className='group' />,
    desc: 'تشمل الدعم المالى لتكاليف العملية , والمتابعة الطبية , والـاهيل السمعى بعد الزراعة لضمان أفضل إستفادة',
  },
  {
    id: 3,
    title: 'الشفافية والمصداقية',
    image: <PlantIcon className='group' />,
    desc: 'تعرض كل خطوات جمع التبرعات وإستخدامها بوضوح للممولين , وتضمن وصول الدعم مباشرة للمستحقين',
  },
];
const Values = () => {
  return (
    <Container>
      <div className='grid grid-cols-1 gap-[12px] pb-[30px] pt-[30px] sm:gap-[15px] sm:pb-[40px] sm:pt-[40px] md:grid-cols-2 lg:grid-cols-3 lg:gap-[18px] lg:pb-[50px] lg:pt-[50px]'>
        {values.map((value) => (
          <div
            className='group relative w-full overflow-hidden rounded-[8px] border border-[#E0E0E0] bg-white px-[20px] py-[30px] transition-all duration-300 ease-in-out hover:bg-secondary sm:rounded-[10px] sm:px-[25px] sm:py-[45px] lg:px-[30px] lg:py-[60px]'
            key={value.id}
          >
            <div className='flex flex-col items-center gap-[10px] text-center sm:gap-[12px] lg:items-start lg:gap-[15px] lg:text-start'>
              <h3 className='text-[16px] font-medium text-secondary transition-all duration-300 ease-in-out group-hover:text-white sm:text-[18px] lg:text-[20px]'>
                {value.title}
              </h3>
              <p className='max-w-full text-[11px] font-light leading-[1.6] text-secondary transition-all duration-300 ease-in-out group-hover:text-white sm:text-[12px] sm:leading-[1.67] lg:max-w-[306px]'>
                {value.desc}
              </p>
            </div>
            <div className='absolute bottom-0 left-0 hidden lg:block'>{value.image}</div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Values;
