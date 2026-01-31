'use client';

import * as React from 'react';

import { Controller } from 'react-hook-form';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { OptionType } from '../../types/formInputs';

// const options : GenderTypes[] = [{value: 'MALE', label:'Male'},{value: 'FEMALE', label:'female'}]
export default function CustomSelect({
  control,
  placeholder,
  name,
  className,
  label,
  options,
  isLoading,
  loadingText,
  disabled,
  error,
}: {
  className?: string;
  name: string;
  control?: any;
  label?: string;
  placeholder?: string;
  options: OptionType[];
  isLoading?: boolean;
  loadingText?: string;
  disabled?: boolean;
  error?: string;
}) {
  return (
    <Controller
      name={name || ''}
      control={control}
      render={({ field }) => (
        <div className='relative flex flex-col gap-2'>
          <Select onValueChange={field.onChange} value={String(field.value)}>
            {label && <label className='mb-2 flex'>{label}</label>}
            <SelectTrigger
              disabled={!!(isLoading || disabled)}
              className={`w-full rounded-[25px] py-[18px] text-xs text-[#3C435C] md:rounded-[35px] md:py-[26px] md:text-sm ${className && className} ${
                error ? 'border-red-500' : ''
              }`}
            >
              <SelectValue
                placeholder={
                  isLoading
                    ? (loadingText ?? 'جاري التحميل...')
                    : placeholder
                      ? placeholder
                      : 'select..'
                }
              />
            </SelectTrigger>
            <SelectContent className='z-[999]'>
              {isLoading ? (
                <SelectGroup>
                  <SelectItem value='__loading__' disabled>
                    {loadingText ?? 'جاري التحميل...'}
                  </SelectItem>
                </SelectGroup>
              ) : (
                <SelectGroup>
                  {options?.map((option) => (
                    <SelectItem key={option.value} value={String(option.value)}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              )}
            </SelectContent>
          </Select>
          {error && <p className='text-start text-sm font-light text-red-500'>{error}</p>}
        </div>
      )}
    />
  );
}
