'use client';

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
export default function customMeetingSelect({
  control,
  placeholder,
  name,
  className,
  label,
  options,
}: {
  className?: string;
  name: string;
  control?: any;
  label?: string;
  placeholder?: string;
  options: SelectTypes[];
}) {
  return (
    <Controller
      name={name || ''}
      control={control}
      render={({ field }) => (
        <Select onValueChange={field.onChange} value={field.value}>
          {label && <label className='mb-2 flex'>{label}</label>}
          <SelectTrigger className={`w-full py-[26px] text-[#3C435C] ${className && className}`}>
            <SelectValue placeholder={placeholder ? placeholder : 'placeholder'} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {options?.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {' '}
                  {option.label}{' '}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      )}
    />
  );
}
