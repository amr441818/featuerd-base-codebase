'use client';

import { FieldValues, FormProvider, UseFormReturn } from 'react-hook-form';

type FormProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  onSubmit: (data: T) => void;
  children: React.ReactNode;
  id?: string;
};

export function Form<T extends FieldValues>({ form, onSubmit, children, id }: FormProps<T>) {
  return (
    <FormProvider {...form}>
      <form id={id} onSubmit={form.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
}
