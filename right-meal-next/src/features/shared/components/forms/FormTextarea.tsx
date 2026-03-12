'use client';

import { Controller, useFormContext } from 'react-hook-form';

import { Field, FieldDescription, FieldError, FieldLabel } from '@/components/ui/field';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from '@/components/ui/input-group';

type FormTextareaProps = {
  name: string;
  label: string;
  placeholder?: string;
  maxLength?: number;
  description?: string;
  rows?: number;
};

export function FormTextarea({
  name,
  label,
  placeholder,
  maxLength,
  description,
  rows = 5,
}: FormTextareaProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel>{label}</FieldLabel>

          <InputGroup>
            <InputGroupTextarea
              {...field}
              rows={rows}
              placeholder={placeholder}
              aria-invalid={fieldState.invalid}
            />
            {maxLength && (
              <InputGroupAddon align='block-end'>
                <InputGroupText className='tabular-nums'>
                  {field.value?.length || 0}/{maxLength}
                </InputGroupText>
              </InputGroupAddon>
            )}
          </InputGroup>

          {description && <FieldDescription>{description}</FieldDescription>}

          {fieldState.error && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}
