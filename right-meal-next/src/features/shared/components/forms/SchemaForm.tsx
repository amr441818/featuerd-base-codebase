'use client';

import { FieldValues } from 'react-hook-form';

import { Form } from '@/features/shared/components/forms/Form';

import { FormFieldRenderer } from './FormFieldRenderer';
import { FieldConfig } from './types';

type Props<T extends FieldValues> = {
  form: any;
  fields: FieldConfig[];
  onSubmit: (data: T) => void;
  children: (render: (name: string) => React.ReactNode) => React.ReactNode;
};

export function SchemaForm<T extends FieldValues>({ form, fields, onSubmit, children }: Props<T>) {
  const renderField = (name: string) => {
    const field = fields.find((f) => f.name === name);
    if (!field) return null;
    return <FormFieldRenderer field={field} />;
  };

  return (
    <Form form={form} onSubmit={onSubmit}>
      {children(renderField)}
    </Form>
  );
}
