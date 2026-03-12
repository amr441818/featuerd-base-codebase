'use client';

import { Controller, useFormContext } from 'react-hook-form';

import { Checkbox } from '@/components/ui/checkbox';
import { Field, FieldError, FieldLabel } from '@/components/ui/field';

type Props = {
  name: string;
  label: string;
};

export function FormCheckbox({ name, label }: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <div className='flex items-center gap-2'>
            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
            <FieldLabel>{label}</FieldLabel>
          </div>

          {fieldState.error && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}
