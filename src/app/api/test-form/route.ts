import { NextResponse } from 'next/server';

/**
 * 🌐 API Route Simulation
 * تحاكي هذه النهاية الطرفية (Endpoint) قاعدة بيانات أو خدمة خارجية.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();

    // محاكاة تأخير الشبكة (Network Latency)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // محاكاة منطق الأعمال (Business Logic)
    if (body.name.toLowerCase() === 'forbidden') {
      return NextResponse.json(
        {
          success: false,
          message: 'الاسم "forbidden" محظور من قبل الـ API الرئيسي.',
        },
        { status: 403 },
      );
    }

    // النجاح
    return NextResponse.json({
      success: true,
      message: 'تمت معالجة البيانات بنجاح في الـ API Endpoint!',
      receivedData: body,
    });
  } catch (_error) {
    return NextResponse.json(
      { success: false, message: 'فشل الـ API في معالجة الطلب.' },
      { status: 500 },
    );
  }
}
