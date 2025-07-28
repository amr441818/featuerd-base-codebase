
import React from "react";
import { Container } from "../../container";

const AdsBanner = () => {
  return (
    <Container className="relative   w-full min-h-[340px]  ">
      <div className="w-full bg-[#1A0F33] rounded-[19px] grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
        {/* <div className="w-[1088px] h-full absolute top-0 left-0 right-0 bottom-0 mx-auto">
        <Image src="/images/addBanner.svg" alt="ads" fill />
      </div> */}
        <div className="z-10 "></div>
        <div className="z-10 text-[#FFFFFF] max-w-[500px] my-10 ">
          <h2 className=" text-[28px] font-bold">منطقة مساحة إعلانية</h2>
          <p className="text-[16px] mt-5">
            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
            القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في
            الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي
            توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى
            نصي، هنا يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء.
            العديد من برامح النشر المكتبي وبرامح تحرير صفحات الويب تستخدم لوريم
            إيبسوم بشكل إفتراضي كنموذج عن النص، وإذا قمت بإدخال "lorem ipsum" في
            أي محرك بحث ستظهر العديد من المواقع الحديثة العهد في نتائج البحث.
            على مدى السنين ظهرت نسخ جديدة ومختلفة من نص لوريم إيبسوم، أحياناً عن
            طريق الصدفة، وأحياناً عن عمد كإدخال بعض العبارات الفكاهية إليها. `
          </p>
        </div>
      </div>
    </Container>
  );
};

export default AdsBanner;
