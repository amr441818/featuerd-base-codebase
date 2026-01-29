'use client';

import { useFieldArray, useFormContext } from 'react-hook-form';

import { Button } from '@/components/ui/button';

type Props = {
  name: string;
  children: (index: number) => React.ReactNode;
};

export function FormFieldArray({ name, children }: Props) {
  const { control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  return (
    <div className='space-y-4'>
      {fields.map((field, index) => (
        <div key={field.id} className='flex gap-2'>
          {children(index)}
          <Button type='button' variant='destructive' onClick={() => remove(index)}>
            Remove
          </Button>
        </div>
      ))}

      <Button type='button' variant='outline' onClick={() => append({})}>
        Add
      </Button>
    </div>
  );
}
