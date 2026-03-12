'use client';

import { Controller, useFormContext } from 'react-hook-form';

import { Field, FieldError, FieldLabel } from '@/components/ui/field';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type Option = {
  label: string;
  value: string;
  icon?: React.ReactNode;
};

type FormSelectProps = {
  name: string;
  label: string;
  options: Option[];
  placeholder?: string;
  renderOption?: (option: Option) => React.ReactNode;
  renderTrigger?: (value: string | undefined) => React.ReactNode;
};

export function FormSelect({ name, label, options, placeholder, renderOption, renderTrigger }: FormSelectProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel>{label}</FieldLabel>

          <Select value={field.value} onValueChange={field.onChange}>
             {renderTrigger ? (
              renderTrigger(field.value)
            ) : (

            <SelectTrigger className='rounded-lg h-[46px]' aria-invalid={fieldState.invalid}>
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>

            )}
            <SelectContent>
              {options.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {renderOption ? renderOption(opt) : (
                    <span className="flex items-center gap-2">
                      {opt.icon && (
                        <span className="flex items-center justify-center text-muted-foreground [&>svg]:h-4 [&>svg]:w-4">
                          {opt.icon}
                        </span>
                      )}
                      <span className="truncate">{opt.label}</span>
                    </span>
                  )}


                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {fieldState.error && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}
