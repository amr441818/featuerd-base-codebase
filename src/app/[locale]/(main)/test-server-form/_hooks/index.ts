'use client';

import { useActionState, useEffect } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { DefaultValues, FieldValues, Path, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { z } from 'zod';

/**
 * 🛠️ حالة الاستجابة من السيرفر (Server Action State)
 * بنستخدم النوع ده عشان نرجع الأخطاء أو رسائل النجاح من السيرفر للهوك.
 */
export type ServerState<T extends FieldValues> = {
  errors?: Partial<Record<keyof T | 'root', string[]>>; // أخطاء الحقول أو أخطاء عامة (root)
  message?: string; // رسالة توضيحية (نجاح أو فشل)
  success?: boolean; // حالة العملية
};

type UseServerFormProps<T extends FieldValues> = {
  schema: z.ZodSchema<T, any, any>; // استخدام ZodSchema مع الـ Generic T
  actionFn: (prevState: ServerState<T>, formData: FormData) => Promise<ServerState<T>>; // الفانكشن اللي هتتنفذ على السيرفر
  defaultValues: DefaultValues<T>; // القيم الافتراضية
};

/**
 * 🚀 هوك useServerForm
 * بيربط بين React Hook Form للسيم ليس فاليشن وبين Next.js Server Actions.
 */
export function useServerForm<T extends FieldValues>({
  schema,
  actionFn,
  defaultValues,
}: UseServerFormProps<T>) {
  /**
   * 1️⃣ useActionState (Server Side State):
   * ده هوك من رياكت (React 19) بيتعامل مع الـ Server Actions.
   * "ورا الكواليس": بياخد الـ actionFn وبيرجع لنا الـ state الحالية، وفانكشن الـ action، وحالة الـ loading (isPending).
   */
  const [state, action, isPending] = useActionState(actionFn, {
    errors: {},
    message: '',
    success: false,
  });

  /**
   * 2️⃣ useForm (Client Side State):
   * بنستخدم فيه zodResolver عشان الفلديشن يتم "فوراً" عند المستخدم قبل ما نكلم السيرفر.
   */
  const form = useForm<T>({
    resolver: zodResolver(schema),
    defaultValues,
    mode: 'onChange',
  });

  /**
   * 🔄 مزامنة الأخطاء (Syncing Server Errors):
   * لو السيرفر رجع أخطاء (مثلاً حاجة مكررة في الداتابيز)، بنعرضها في الفورم وكأنها أخطاء عادية.
   */
  useEffect(() => {
    if (!state) return;

    // ✅ حالة النجاح
    if (state.success) {
      if (state.message) {
        toast.success(state.message);
      }
      form.reset(); // تصفير الفورم بعد النجاح
      return;
    }

    // ❌ حالة الفشل (أخطاء من السيرفر)
    if (state.errors) {
      for (const [key, value] of Object.entries(state.errors)) {
        if (!value?.length) continue;

        // بنربط الخطأ بالحقل المناسب في الفورم
        form.setError(key as Path<T>, {
          type: 'server',
          message: value[0],
        });
      }
    }
  }, [state, form]);

  return {
    form,
    action,
    isPending,
    state,
  };
}
