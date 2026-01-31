import React from 'react';

import Link from 'next/link';

const AboutInfo = () => {
  return (
    <div className='info flex w-full flex-col justify-center gap-[10px] sm:gap-[12px] lg:w-auto lg:gap-[15px]'>
      <h2 className='text-[20px] font-medium text-neutral sm:text-[22px] lg:text-[24px]'>من نحن</h2>
      <p className='max-w-full text-[14px] font-light leading-[1.6] text-muted sm:text-[16px] sm:leading-[1.7] lg:max-w-[655px] lg:text-[18px] lg:leading-[1.78]'>
        جمعية زراعة القوقعة بحائل هى جمعية خيرية تعمل على تقديم الدعم والإغاثة للمحتاجين بكل أمانة
        قرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف
        عوضاً عن استخدام &quot;هنا يوجد محتوى نصي، هنا يوجد محتوى نصي&quot; فتجعلها تبدو وكأنها نص
        مقروء. العديد من برامح النشر المكتبي وبرامح تحرير صفحات الويب تستخدم لوريم إيبسوم بشكل
        إفتراضي كنموذج عن النص، وإذا قمت بإدخال في أي محرك بحث ستظهر العديد من المواقع الحديثة العهد
        في نتائج البحث. على مدى السنين ظهرت نسخ جديدة ومختلفة من نص لوريم إيبسوم، أحياناً عن طريق
        الصدفة، وأحياناً عن عمد كإدخال بعض العبارات الفكاهية إليها.
      </p>
      <Link
        href='/about'
        className='mt-[15px] flex h-[48px] w-full max-w-full items-center justify-center rounded-[35px] bg-primary p-[10px] text-center text-[14px] text-white sm:mt-[20px] sm:h-[50px] sm:w-auto sm:max-w-[153px] sm:text-[16px] lg:mt-[25px] lg:h-[53px]'
      >
        المزيد عنا
      </Link>
    </div>
  );
};

export default AboutInfo;
