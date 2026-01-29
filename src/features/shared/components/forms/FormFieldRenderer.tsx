'use client';

import { useFormContext, useWatch } from 'react-hook-form';

import {
  FormCheckbox,
  FormInput,
  FormSelect,
  FormSwitch,
  FormTextarea,
} from '@/features/shared/components/forms';

import { FieldConfig } from './types';

export function FormFieldRenderer({ field }: { field: FieldConfig }) {
  const { control } = useFormContext();

  /** 👇 watch all values */
  const values = useWatch({ control });

  /** 👇 visibility logic */
  if (field.visible && !field.visible(values)) {
    return null;
  }

  /** 👇 render */
  switch (field.type) {
    case 'input':
      return <FormInput name={field.name} label={field.label} placeholder={field.placeholder} />;

    case 'textarea':
      return (
        <FormTextarea
          name={field.name}
          label={field.label}
          placeholder={field.placeholder}
          maxLength={field.maxLength}
          description={field.description}
        />
      );

    case 'select':
      return (
        <FormSelect
          name={field.name}
          label={field.label}
          options={field.options ?? []}
          placeholder={field.placeholder}
        />
      );

    case 'checkbox':
      return <FormCheckbox name={field.name} label={field.label} />;

    case 'switch':
      return <FormSwitch name={field.name} label={field.label} />;

    default:
      return null;
  }
}
