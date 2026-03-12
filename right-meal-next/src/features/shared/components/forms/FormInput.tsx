'use client';

import { Controller, ControllerFieldState, ControllerRenderProps, useFormContext } from 'react-hook-form';

import { Field, FieldError, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group';

type FormInputProps = {
  name: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
  renderInput?: (
    field: ControllerRenderProps,
    fieldState: ControllerFieldState
  ) => React.ReactNode;
};

export function FormInput({
  name,
  label,
  placeholder,
  disabled,
  className,
  icon,
  renderInput,
}: FormInputProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid} className={className}>
          {label && <FieldLabel>{label}</FieldLabel>}

          {renderInput ? (
            renderInput(field, fieldState)
          ) : icon ? (
            <InputGroup className="h-[46px] rounded-lg">
              <InputGroupAddon className="ps-3">
                {icon}
              </InputGroupAddon>
              <InputGroupInput
                {...field}
                placeholder={placeholder}
                disabled={disabled}
                aria-invalid={fieldState.invalid}
                className="h-full"
              />
            </InputGroup>
          ) : (
            <Input
              {...field}
              placeholder={placeholder}
              disabled={disabled}
              aria-invalid={fieldState.invalid}
              className="rounded-lg h-[46px]"
            />
          )}

          {fieldState.error && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}
