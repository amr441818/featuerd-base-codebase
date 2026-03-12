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

type SelectTypes = {
  value: string;
  label: string;
};

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
}: {
  className?: string;
  name: string;
  control?: any;
  label?: string;
  placeholder?: string;
  options: SelectTypes[];
  isLoading?: boolean;
  loadingText?: string;
  disabled?: boolean;
}) {
  return (
    <Controller
      name={name || ''}
      control={control}
      render={({ field }) => (
        <Select onValueChange={field.onChange} value={field.value}>
          {label && <label className='mb-2 flex'>{label}</label>}
          <SelectTrigger
            disabled={!!(isLoading || disabled)}
            className={`w-full py-[26px] text-[#3C435C] ${className && className}`}
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
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            )}
          </SelectContent>
        </Select>
      )}
    />
  );
}
