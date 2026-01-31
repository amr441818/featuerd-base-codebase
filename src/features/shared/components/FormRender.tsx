import { UseFormReturn } from 'react-hook-form';

import { FormField } from '../types/formInputs';
import CustomInput from './formInputs/CustomInput';
import CustomSelect from './formInputs/CustomSelect';
import CustomTextAria from './formInputs/CustomTextAria';

interface Props {
  fields: FormField[];
  form: UseFormReturn<any>;
}
const FormRenderer = ({ fields, form }: Props) => {
  return (
    <div className='grid w-full grid-cols-1 gap-x-[8px] gap-y-[10px] md:grid-cols-2 md:gap-x-[11px] md:gap-y-[15px]'>
      {fields.map((field) => {
        const colSpanClass = field.colSpan === 2 ? 'md:col-span-2' : 'md:col-span-1';

        switch (field.fieldType) {
          case 'input':
            return (
              <div
                key={field.name}
                className={`${colSpanClass} w-full ${field.wrapperClassName ?? ''}`}
              >
                <CustomInput
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder as string}
                  register={form.register}
                  error={form.formState.errors?.[field.name]?.message as string}
                  className={field.inputClassName}
                />
              </div>
            );

          case 'textarea':
            return (
              <div key={field.name} className={colSpanClass}>
                <CustomTextAria
                  name={field.name}
                  rows={field.rows}
                  placeholder={field.placeholder}
                  register={form.register}
                  error={form.formState.errors?.[field.name]?.message as string}
                />
              </div>
            );

          case 'select':
            return (
              <div key={field.name} className={colSpanClass}>
                <CustomSelect
                  name={field.name}
                  placeholder={field.placeholder}
                  control={form.control}
                  error={form.formState.errors?.[field.name]?.message as string}
                  options={field.options || []}
                />
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
};

export default FormRenderer;
