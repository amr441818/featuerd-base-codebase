'use client';

import { useState } from 'react';

import { ChevronDown, X } from 'lucide-react';
import { type Control, Controller } from 'react-hook-form';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

import { cn } from '@/lib/utils';

interface Option {
  id: string;
  label: string;
  value?: string;
  [key: string]: any; // Allow additional properties
}

interface MultiSelectProps {
  name: string;
  control: Control<any>;
  options: Option[];
  placeholder?: string;
  className?: string;
  displayProperty?: string; // Which property to display in selected items
  showSelectedItems?: boolean; // Whether to show selected items below
  maxSelectedDisplay?: number; // Maximum number of selected items to show in trigger
  dir?: 'ltr' | 'rtl'; // Text direction
  label?: string;
}

export function FormMultiSelect({
  name,
  control,
  options,
  placeholder = 'Select items',
  className,
  displayProperty = 'label',
  showSelectedItems = false,
  maxSelectedDisplay = 3,
  dir = 'ltr',
  label,
}: MultiSelectProps) {
  const [open, setOpen] = useState(false);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const selectedOptions = options.filter((option) => field.value?.includes(option.id));

        const handleSelect = (optionId: string) => {
          const currentValue = field.value || [];
          const newValue = currentValue.includes(optionId)
            ? currentValue.filter((id: string) => id !== optionId)
            : [...currentValue, optionId];
          field.onChange(newValue);
        };

        const handleRemove = (optionId: string) => {
          const newValue = (field.value || []).filter((id: string) => id !== optionId);
          field.onChange(newValue);
        };

        const getTriggerContent = () => {
          if (selectedOptions.length === 0) {
            return <span className='font-normal text-gray-500'>{placeholder}</span>;
          }

          if (selectedOptions.length <= maxSelectedDisplay) {
            return (
              <div className='flex flex-wrap gap-1'>
                {selectedOptions.map((option) => (
                  <Badge key={option.id} variant='secondary' className='text-xs'>
                    {option[displayProperty]}
                    <button
                      type='button'
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemove(option.id);
                      }}
                      className='ml-1 rounded-full p-0.5 hover:bg-gray-300'
                    >
                      <X className='h-3 w-3' />
                    </button>
                  </Badge>
                ))}
              </div>
            );
          }

          return (
            <span className='text-gray-900'>
              {selectedOptions.length} item{selectedOptions.length !== 1 ? 's' : ''} selected
            </span>
          );
        };

        return (
          <div className={cn('space-y-2', className)}>
            {label && <label className='px-1 text-sm font-medium text-foreground'>{label}</label>}
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant='outline'
                  role='combobox'
                  aria-expanded={open}
                  className={cn(
                    'h-auto min-h-10 w-full justify-between border-gray-200 bg-white hover:bg-gray-50',
                    dir === 'rtl' ? 'text-right' : 'text-left',
                  )}
                  dir={dir}
                >
                  <div className='flex-1 overflow-hidden'>{getTriggerContent()}</div>
                  <ChevronDown
                    className={cn('h-4 w-4 shrink-0 opacity-50', dir === 'rtl' ? 'mr-2' : 'ml-2')}
                  />
                </Button>
              </PopoverTrigger>
              <PopoverContent className='w-full p-0' align='start'>
                <div className='max-h-60 overflow-auto'>
                  {options.map((option) => (
                    <div
                      key={option.id}
                      className={cn(
                        'flex cursor-pointer items-center border-b border-gray-100 p-3 last:border-b-0 hover:bg-gray-50',
                        dir === 'rtl' ? 'space-x-reverse' : '',
                      )}
                      onClick={() => handleSelect(option.id)}
                    >
                      <Checkbox
                        checked={field.value?.includes(option.id) || false}
                        onChange={() => handleSelect(option.id)}
                        className={dir === 'rtl' ? 'ml-2' : 'mr-2'}
                      />
                      <div className={cn('flex-1', dir === 'rtl' ? 'text-right' : 'text-left')}>
                        <div className='font-medium text-gray-900'>{option[displayProperty]}</div>
                        {option.description && (
                          <div className='text-sm text-gray-500'>{option.description}</div>
                        )}
                      </div>
                      {option.price && (
                        <div className='text-sm font-medium text-gray-700'>{option.price}</div>
                      )}
                    </div>
                  ))}
                </div>
              </PopoverContent>
            </Popover>

            {showSelectedItems && selectedOptions.length > 0 && (
              <div className='space-y-2'>
                {selectedOptions.map((option) => (
                  <div
                    key={option.id}
                    className={cn(
                      'flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-3',
                      dir === 'rtl' ? 'flex-row-reverse' : '',
                    )}
                  >
                    <Button
                      type='button'
                      variant='ghost'
                      size='sm'
                      onClick={() => handleRemove(option.id)}
                      className='h-8 w-8 p-0 text-gray-600 hover:bg-gray-200 hover:text-gray-700'
                    >
                      <X className='h-4 w-4' />
                    </Button>

                    <div
                      className={cn('flex-1', dir === 'rtl' ? 'mr-3 text-right' : 'ml-3 text-left')}
                    >
                      <div className='font-medium text-gray-900'>{option[displayProperty]}</div>
                      {option.description && (
                        <div className='text-sm text-gray-600'>{option.description}</div>
                      )}
                    </div>

                    {option.price && (
                      <div
                        className={cn(
                          'text-sm font-medium text-gray-700',
                          dir === 'rtl' ? 'mr-4' : 'ml-4',
                        )}
                      >
                        {option.price}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      }}
    />
  );
}
