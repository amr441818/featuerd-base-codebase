'use client';

import { Controller, useFormContext } from 'react-hook-form';

import { Field, FieldLabel } from '@/components/ui/field';
import { Switch } from '@/components/ui/switch';

type Props = {
  name: string;
  label: string;
};

export function FormSwitch({ name, label }: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Field orientation='horizontal'>
          <FieldLabel>{label}</FieldLabel>
          <Switch checked={field.value} onCheckedChange={field.onChange} />
        </Field>
      )}
    />
  );
}
