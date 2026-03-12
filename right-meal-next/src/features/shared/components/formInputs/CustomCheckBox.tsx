'use client';

import { Control, Controller, FieldValues, Path } from 'react-hook-form';

import { Checkbox } from '@/components/ui/checkbox';

type Props<TFieldValues extends FieldValues = FieldValues> = {
  text: string;
  textColor?: string;
  textSize?: string;
  control: Control<TFieldValues>;
  name: Path<TFieldValues>;
  defaultValue?: boolean;
  required?: boolean;
  disabled?: boolean;
};

function CustomCheckBox<TFieldValues extends FieldValues = FieldValues>({
  text,
  textColor,
  textSize,
  control,
  name,
  defaultValue = false,
  required = false,
  disabled = false,
}: Props<TFieldValues>) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue as any}
      render={({ field }) => (
        <div className='flex items-center gap-2 space-x-2'>
          <Checkbox
            checked={field.value}
            onCheckedChange={field.onChange}
            onBlur={field.onBlur}
            disabled={disabled}
            ref={field.ref}
            id={name}
            required={required}
            className='h-4 w-4 rounded-md border-gray-400 data-[state=checked]:border-[#5BB98D] data-[state=checked]:bg-[#5BB98D]'
          />
          <label
            htmlFor={name}
            className={`leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${textColor ? textColor : ''} ${textSize ? textSize : 'text-sm font-medium'}`}
          >
            {text}
          </label>
        </div>
      )}
    />
  );
}

export default CustomCheckBox;
