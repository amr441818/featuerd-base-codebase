'use client';

import * as React from 'react';

import { Control, useController } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

import DateIcon from '../../../../../public/assets/svgs/DateIcon';

// or use CalendarIcon from lucide-react

// Utility to format displayed date
function formatDate(date?: Date) {
  if (!date) return '';
  return date.toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}

type DatePickerFieldProps = {
  name: string;
  control: Control<any>;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
};

export function DatePickerField({
  name,
  control,
  label,
  placeholder = 'Select date',
  disabled = false,
}: DatePickerFieldProps) {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({ name, control });

  const [open, setOpen] = React.useState(false);
  const dateValue = value ? new Date(value) : undefined;
  const [month, setMonth] = React.useState<Date | undefined>(dateValue || new Date());
  const displayValue = formatDate(dateValue);

  const handleSelect = (selected?: Date) => {
    if (selected) {
      onChange(selected.toISOString());
      setOpen(false);
    }
  };

  return (
    <div className='flex flex-col gap-2'>
      {label && (
        <Label htmlFor={name} className='px-1 text-sm font-medium text-foreground'>
          {label}
        </Label>
      )}

      <div className='relative flex gap-2'>
        <Input
          id={name}
          value={displayValue}
          placeholder={placeholder}
          readOnly
          disabled={disabled}
          onClick={() => !disabled && setOpen(true)}
          className={`h-[50px] cursor-pointer rounded-lg bg-background pr-10 ${
            error ? 'border-red-500 focus-visible:ring-red-500' : ''
          }`}
        />

        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              type='button'
              variant='ghost'
              disabled={disabled}
              className='absolute right-2 top-1/2 size-6 -translate-y-1/2'
            >
              <DateIcon />
              <span className='sr-only'>{placeholder}</span>
            </Button>
          </PopoverTrigger>

          <PopoverContent
            className='z-[9999] w-auto overflow-hidden p-0'
            align='end'
            alignOffset={-8}
            sideOffset={10}
          >
            <Calendar
              mode='single'
              selected={dateValue}
              captionLayout='dropdown'
              month={month}
              onMonthChange={setMonth}
              onSelect={handleSelect}
              disabled={disabled}
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* ✅ Error Message */}
      {error && <p className='mt-1 px-1 text-sm text-red-500'>{error.message}</p>}
    </div>
  );
}
