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

interface StatusConfig {
  [key: string]: {
    label: string;
    color: 'green' | 'red' | 'yellow' | 'blue';
  };
}

interface CustomSelectWithStatusProps {
  className?: string;
  name: string;
  control?: any;
  label?: string;
  placeholder?: string;
  options: SelectTypes[];
  isLoading?: boolean;
  loadingText?: string;
  disabled?: boolean;
  statusConfig?: StatusConfig;
  showStatus?: boolean;
  isRtl?: boolean;
  onUpdate?: (value: string) => void;
  /** ✅ NEW: optional error message */
  error?: string;
}

export default function CustomSelectWithStatus({
  control,
  placeholder,
  name,
  className,
  label,
  options,
  isLoading,
  loadingText,
  disabled,
  statusConfig,
  showStatus = true,
  isRtl = true,
  onUpdate,
  error,
}: CustomSelectWithStatusProps) {
  const getStatusColor = (value: string): 'green' | 'red' | 'yellow' | 'blue' => {
    return statusConfig?.[value]?.color || 'green';
  };

  const getStatusLabel = (value: string): string => {
    return statusConfig?.[value]?.label || '';
  };

  const statusColorMap = {
    green: 'bg-green-100 text-green-700',
    red: 'bg-red-100 text-red-700',
    yellow: 'bg-yellow-100 text-yellow-700',
    blue: 'bg-blue-100 text-blue-700',
  };

  const statusDotMap = {
    green: 'bg-green-500',
    red: 'bg-red-500',
    yellow: 'bg-yellow-500',
    blue: 'bg-blue-500',
  };

  const handleValueChange = (newValue: string) => {
    if (control?.register) {
      const field = control._names?.watched?.[name];
      if (field) {
        control._formValues[name] = newValue;
      }
    }
    onUpdate?.(newValue);
  };

  return (
    <Controller
      name={name || ''}
      control={control}
      render={({ field, fieldState }) => (
        <div className={isRtl ? 'rtl' : 'ltr'}>
          {label && (
            <label className={`mb-2 flex ${isRtl ? 'justify-end' : 'justify-start'}`}>
              {label}
            </label>
          )}

          <Select
            onValueChange={(value) => {
              field.onChange(value);
              handleValueChange(value);
            }}
            value={field.value}
          >
            <SelectTrigger
              disabled={!!(isLoading || disabled)}
              className={`flex w-full py-[26px] text-[#3C435C] ${
                isRtl ? 'flex-row-reverse' : ''
              } ${className || ''} ${
                error || fieldState.error ? 'border-red-500 focus:ring-red-500' : ''
              }`}
            >
              <div className={`flex items-center ${isRtl ? 'flex-row-reverse' : ''} flex-1 gap-2`}>
                <SelectValue
                  placeholder={
                    isLoading ? (loadingText ?? 'جاري التحميل...') : (placeholder ?? 'select..')
                  }
                />
                {showStatus && statusConfig?.[field.value] && (
                  <div
                    className={`flex items-center gap-1 ${
                      isRtl ? 'flex-row-reverse' : ''
                    } whitespace-nowrap rounded-full px-3 py-1 text-sm font-medium ${
                      statusColorMap[getStatusColor(field.value)]
                    }`}
                  >
                    <span
                      className={`h-2 w-2 rounded-full ${
                        statusDotMap[getStatusColor(field.value)]
                      }`}
                    />
                    <span>{getStatusLabel(field.value)}</span>
                  </div>
                )}
              </div>
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

          {/* ✅ Error message */}
          {(error || fieldState.error) && (
            <p className='mt-1 text-sm text-red-500'>{error || fieldState.error?.message}</p>
          )}
        </div>
      )}
    />
  );
}
