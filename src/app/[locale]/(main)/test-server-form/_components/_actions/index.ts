'use server';

import { ServerState } from '../../_hooks';
import { FormType, formSchema } from './schema';

/**
 * ⚡ الـ Server Action
 * ده الكود اللي بينفذه السيرفر لما الفورم يتم إرساله.
 */
export async function testServerAction(
  prevState: ServerState<FormType>,
  formData: FormData,
): Promise<ServerState<FormType>> {
  const data = Object.fromEntries(formData.entries());
  /**
   * 🛡️ الفلديشن (Client-side validation bypass protection)
   */
  const validatedFields = formSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors as any,
      message: 'بيانات غير صالحة، يرجى التأكد من الحقول.',
      success: false,
    };
  }

  try {
    /**
     * 🔗 استدعاء الـ API Route
     * ملاحظة: نقوم باستخدام نداء للـ API الداخلي الذي قمنا بإنشائه.
     */
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

    const response = await fetch(`${baseUrl}/api/test-form`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      cache: 'no-store',
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: result.message || 'فشل الطلب من جهة الـ API',
        errors: result.errors,
      };
    }

    return {
      success: true,
      message: result.message || 'تمت معالجة بياناتك بنجاح!',
    };
  } catch (error) {
    console.error('Action Error:', error);
    return {
      success: false,
      message: 'حدث خطأ تقني أثناء محاولة الاتصال بـ API الخدمة.',
    };
  }
}
