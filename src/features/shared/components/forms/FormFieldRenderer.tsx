'use client';

import { useFormContext, useWatch } from 'react-hook-form';

import {
  FormCheckbox,
  FormDatePicker,
  // FormDatePicker,
  FormInput,
  FormMultiSelect,
  // FormMultiSelect,
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
          options={
            field.options?.map((opt) => ({
              label: opt.label,
              value: opt.value ?? opt.id ?? '',
            })) ?? []
          }
          placeholder={field.placeholder}
        />
      );

    case 'checkbox':
      return <FormCheckbox name={field.name} label={field.label} />;

    case 'switch':
      return <FormSwitch name={field.name} label={field.label} />;

    case 'date':
      return (
        <FormDatePicker
          name={field.name}
          label={field.label}
          control={control}
          placeholder={field.placeholder}
          disabled={field.disabled}
        />
      );

    case 'multi-select':
      return (
        <FormMultiSelect
          name={field.name}
          label={field.label}
          control={control}
          options={
            field.options?.map((opt) => ({
              ...opt,
              id: opt.id ?? opt.value ?? '',
            })) ?? []
          }
          placeholder={field.placeholder}
          className={field.className}
        />
      );

    default:
      return null;
  }
}
