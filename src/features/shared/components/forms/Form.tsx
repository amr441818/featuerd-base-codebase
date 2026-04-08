'use client';

import { FieldValues, FormProvider, UseFormReturn } from 'react-hook-form';

type FormProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  onSubmit?: (data: T) => void;
  children: React.ReactNode;
  id?: string;
  action?: (formData: FormData) => void;
};

/**
 * 🎨 مكون Form الأساسي
 * بيستخدم الـ FormProvider بتاع react-hook-form عشان يوزع الـ state على كل الحقول.
 */
export function Form<T extends FieldValues>({
  form,
  onSubmit,
  children,
  id,
  action,
}: FormProps<T>) {
  return (
    <FormProvider {...form}>
      <form
        /**
         * ⚡ الـ action: الـ Server Action بتاع رياكت 19.
         * بيشتغل لما نضغط submit، وبياخد الداتا من الفورم (FormData).
         */
        action={action}
        id={id}
        /**
         * 🛡️ الـ onSubmit: بنستخدمه هنا عشان "نعترض" طريق الفورم قبل ما تبعت للسيرفر.
         * `form.handleSubmit` بتعمل الفلديشن بتاعنا، لو نجح بتنفذ الفانكشن اللي بعتناها (onSubmit)
         * وبعدين بتسيب المتصفح ينفذ الـ action.
         */
        onSubmit={onSubmit ? form.handleSubmit(onSubmit) : undefined}
      >
        {children}
      </form>
    </FormProvider>
  );
}
