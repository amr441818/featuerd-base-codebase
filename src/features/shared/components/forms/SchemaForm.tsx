'use client';

import { FieldValues, UseFormReturn } from 'react-hook-form';

import { Form } from '@/features/shared/components/forms/Form';

import { FormFieldRenderer } from './FormFieldRenderer';
import { FieldConfig } from './types';

type Props<T extends FieldValues> = {
  form: UseFormReturn<T>;
  fields: FieldConfig[];
  onSubmit?: (data: T) => void;
  action?: (formData: FormData) => void;
  children: (render: (name: string) => React.ReactNode) => React.ReactNode;
};

/**
 * 📝 SchemaForm Wrapper
 * مكون وسيط بيربط بين React Hook Form وبين نظام الحقول (Field Configurations).
 *
 * @template T - نوع البيانات المتوقعة من الفورم (Field Values)
 */
export function SchemaForm<T extends FieldValues>({
  form,
  fields,
  onSubmit,
  children,
  action,
}: Props<T>) {
  /**
   * 🛠️ renderField
   * فانكشن بنمررها للـ Children عشان يقدروا يعرضوا أي حقل بمجرد استدعاء اسمه.
   */
  const renderField = (name: string) => {
    const field = fields.find((f) => f.name === name);
    if (!field) return null;
    return <FormFieldRenderer field={field} />;
  };

  /**
   * 💡 ملاحظة: المكون Form اللي تحت هو اللي بيعمل handleSubmit أوتوماتيكياً
   * لو إحنا باعتين onSubmit بروب.
   */
  return (
    <Form form={form} onSubmit={onSubmit} action={action}>
      {children(renderField)}
    </Form>
  );
}
