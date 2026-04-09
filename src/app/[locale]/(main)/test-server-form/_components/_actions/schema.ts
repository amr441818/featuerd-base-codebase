import { z } from 'zod';

/**
 * 🛠️ السكـيما (The Schema)
 * بنعرف البيانات المتوقعة وقواعد صحتها.
 */
export const formSchema = z.object({
  name: z.string().min(3, 'الاسم مطلوب'),
  email: z.string().email('بريد غير صحيح'),
  message: z.string().min(10, 'الرسالة قصيرة'),
});

// استنتاج النوع من السكيما (Inferred Type)
export type FormType = z.infer<typeof formSchema>;
