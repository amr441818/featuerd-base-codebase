'use client';

import { Controller, useFormContext } from 'react-hook-form';

import { Field, FieldError, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';

type FormInputProps = {
  name: string;
  label: string;
  placeholder?: string;
  disabled?: boolean;
};

export function FormInput({ name, label, placeholder, disabled }: FormInputProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel>{label}</FieldLabel>
          <Input
            {...field}
            placeholder={placeholder}
            disabled={disabled}
            aria-invalid={fieldState.invalid}
          />
          {fieldState.error && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}
